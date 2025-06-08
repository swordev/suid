import type { MenuListTypeMap } from ".";
import List from "../List";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import { inspectChildren, isComponentObject } from "@suid/system/inspect";
import ownerDocument from "@suid/utils/ownerDocument";
import {
  splitProps,
  mergeProps,
  createEffect,
  mapArray,
  createMemo,
} from "solid-js";
import { createComponent } from "solid-js/web";

const $ = createComponentFactory<MenuListTypeMap>()({
  name: "MuiMenuList",
  selfPropNames: [
    "autoFocus",
    "autoFocusItem",
    "children",
    "disabledItemsFocusable",
    "disableListWrap",
    "variant",
  ],
});

function nextItem(
  list: HTMLElement,
  item: HTMLElement | undefined,
  disableListWrap: boolean
) {
  if (list === item) {
    return list.firstChild as HTMLElement;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling as HTMLElement;
  }
  return disableListWrap ? undefined : (list.firstChild as HTMLElement);
}

function previousItem(
  list: HTMLElement,
  item: HTMLElement | undefined,
  disableListWrap: boolean
) {
  if (list === item) {
    return disableListWrap
      ? (list.firstChild as HTMLElement)
      : (list.lastChild as HTMLElement);
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling as HTMLElement;
  }
  return disableListWrap ? undefined : (list.lastChild as HTMLElement);
}

type Criteria = {
  keys: string[];
  repeating: boolean;
  previousKeyMatched: boolean;
  lastTime: number;
};

function textCriteriaMatches(nextFocus: HTMLElement, textCriteria?: Criteria) {
  if (textCriteria === undefined) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent ?? "";
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}

function moveFocus(
  list: HTMLElement,
  currentFocus: HTMLElement | undefined,
  disableListWrap: boolean,
  disabledItemsFocusable: boolean,
  traversalFunction: (
    list: HTMLElement,
    currentFocus: HTMLElement | undefined,
    disableListWrap: boolean
  ) => HTMLElement | undefined,
  textCriteria?: Criteria
) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(
    list,
    currentFocus,
    currentFocus ? disableListWrap : false
  );

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }

    // Same logic as useAutocomplete.js
    const nextFocusDisabled = disabledItemsFocusable
      ? false
      : (nextFocus as never as { disabled: boolean })["disabled"] ||
        nextFocus.getAttribute("aria-disabled") === "true";

    if (
      !nextFocus.hasAttribute("tabindex") ||
      !textCriteriaMatches(nextFocus, textCriteria) ||
      nextFocusDisabled
    ) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}

/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component if you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](https://mui.com/api/menu/) component if you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 *
 * Demos:
 *
 * - [Menus](https://mui.com/components/menus/)
 *
 * API:
 *
 * - [MenuList API](https://mui.com/api/menu-list/)
 * - inherits [List API](https://mui.com/api/list/)
 */
const MenuList = $.defineComponent(function MenuList(props) {
  const listRef = createRef<HTMLElement>(props);
  const [, other] = splitProps(props, [
    "autoFocus",
    "autoFocusItem",
    "children",
    "class",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      autoFocus: false,
      autoFocusItem: false,
      disabledItemsFocusable: false,
      disableListWrap: false,
      variant: "selectedMenu",
    },
    props
  );

  const criteria: Criteria = {
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: 0,
  };

  createEffect(() => {
    if (baseProps.autoFocus) {
      listRef.current.focus();
    }
  }, [baseProps.autoFocus]);

  const handleKeyDown = (event: KeyboardEvent) => {
    const list = listRef.current;
    const key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */
    const currentFocus = ownerDocument(list).activeElement as HTMLElement;

    if (key === "ArrowDown") {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        baseProps.disableListWrap,
        baseProps.disabledItemsFocusable,
        nextItem
      );
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        baseProps.disableListWrap,
        baseProps.disabledItemsFocusable,
        previousItem
      );
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(
        list,
        undefined,
        baseProps.disableListWrap,
        baseProps.disabledItemsFocusable,
        nextItem
      );
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(
        list,
        undefined,
        baseProps.disableListWrap,
        baseProps.disabledItemsFocusable,
        previousItem
      );
    } else if (key.length === 1) {
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent =
        currentFocus &&
        !criteria.repeating &&
        textCriteriaMatches(currentFocus, criteria);
      if (
        criteria.previousKeyMatched &&
        (keepFocusOnCurrent ||
          moveFocus(
            list,
            currentFocus,
            false,
            baseProps.disabledItemsFocusable,
            nextItem,
            criteria
          ))
      ) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (typeof props.onKeyDown === "function") {
      props.onKeyDown(event as any);
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  const children = inspectChildren(() => props.children);

  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */
  const activeItemIndex = createMemo(() => {
    let result = -1;
    let index = 0;
    // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback
    for (const child of children()) {
      if (isComponentObject(child)) {
        if (!child.props.disabled) {
          if (baseProps.variant === "selectedMenu" && child.props.selected) {
            result = index;
          } else if (result === -1) {
            result = index;
          }
        }
      }
      index++;
    }
    return result;
  });

  const items = mapArray<any, any>(children, (child, index) => {
    if (isComponentObject(child)) {
      return createComponent(
        child.Component,
        mergeProps(child.props, {
          get autoFocus() {
            if (index() === activeItemIndex() && baseProps.autoFocusItem)
              return true;
          },
          get tabIndex() {
            if (
              child.props.tabIndex === undefined &&
              index() === activeItemIndex() &&
              baseProps.variant
            )
              return 0;
          },
        })
      );
    } else {
      return child;
    }
  });

  return (
    <List
      role="menu"
      class={props.class}
      onKeyDown={handleKeyDown}
      tabIndex={baseProps.autoFocus ? 0 : -1}
      {...other}
      ref={listRef}
    >
      {items()}
    </List>
  );
});

export default MenuList;
