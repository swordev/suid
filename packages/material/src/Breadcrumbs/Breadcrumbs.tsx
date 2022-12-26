import Typography from "../Typography";
import styled from "../styles/styled";
import BreadcrumbCollapsed from "./BreadcrumbCollapsed";
import { BreadcrumbsTypeMap } from "./BreadcrumbsProps";
import breadcrumbsClasses, {
  getBreadcrumbsUtilityClass,
} from "./breadcrumbsClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createElementRef from "@suid/system/createElementRef";
import { InPropsOf } from "@suid/types";
import clsx from "clsx";
import {
  children,
  createMemo,
  createSignal,
  JSXElement,
  mergeProps,
} from "solid-js";

const $ = createComponentFactory<BreadcrumbsTypeMap>()({
  name: "MuiBreadcrumbs",
  propDefaults: ({ set }) =>
    set({
      component: "nav",
      expandText: "Show path",
      itemsAfterCollapse: 1,
      itemsBeforeCollapse: 1,
      maxItems: 8,
      separator: "/",
    }),
  selfPropNames: [
    "children",
    "classes",
    "expandText",
    "itemsAfterCollapse",
    "itemsBeforeCollapse",
    "maxItems",
    "separator",
  ],
  utilityClass: getBreadcrumbsUtilityClass,
  slotClasses: () => ({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"],
  }),
});

const BreadcrumbsRoot = styled(Typography, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [{ [`& .${breadcrumbsClasses.li}`]: styles.li }, styles.root];
  },
})({});

const BreadcrumbsOl = styled("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol",
  overridesResolver: (props, styles) => styles.ol,
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none",
});

const BreadcrumbsSeparator = styled("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator,
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8,
});

function insertSeparators(
  items: any[],
  className: string,
  separator: JSXElement,
  ownerState: InPropsOf<BreadcrumbsTypeMap>
) {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <BreadcrumbsSeparator
          as="div"
          aria-hidden
          class={className}
          ownerState={ownerState}
        >
          {separator}
        </BreadcrumbsSeparator>
      );
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

/**
 *
 * Demos:
 *
 * - [Breadcrumbs](https://mui.com/components/breadcrumbs/)
 *
 * API:
 *
 * - [Breadcrumbs API](https://mui.com/api/breadcrumbs/)
 */
const Breadcrumbs = $.component(function Breadcrumbs({
  allProps,
  classes,
  otherProps,
  props,
}) {
  const [expanded, setExpanded] = createSignal(false);
  const listElement = createElementRef();
  const ownerState = mergeProps(allProps, {
    get expanded() {
      return expanded();
    },
  });

  const handleClickExpand = () => {
    setExpanded(true);

    // The clicked element received the focus but gets removed from the DOM.
    // Let's keep the focus in the component after expanding.
    // Moving it to the <ol> or <nav> does not cause any announcement in NVDA.
    // By moving it to some link/button at least we have some announcement.
    const focusable = listElement.ref.querySelector<HTMLButtonElement>(
      "a[href],button,[tabindex]"
    );
    if (focusable) {
      focusable.focus();
    }
  };

  const renderItemsBeforeAndAfter = (allItems: JSXElement[]) => {
    // This defends against someone passing weird input, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem
    if (
      props.itemsBeforeCollapse + props.itemsAfterCollapse >=
      allItems.length
    ) {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          [
            "MUI: You have provided an invalid combination of props to the Breadcrumbs.",
            `itemsAfterCollapse={${props.itemsAfterCollapse}} + itemsBeforeCollapse={${props.itemsBeforeCollapse}} >= maxItems={${props.maxItems}}`,
          ].join("\n")
        );
      }
      return allItems;
    }

    return [
      ...allItems.slice(0, props.itemsBeforeCollapse),
      <BreadcrumbCollapsed
        aria-label={props.expandText}
        onClick={handleClickExpand}
      />,
      ...allItems.slice(
        allItems.length - props.itemsAfterCollapse,
        allItems.length
      ),
    ];
  };

  const resolved = children(() => props.children);
  const allItems = createMemo(() => {
    const value = resolved();
    const array = Array.isArray(value) ? value : [value];
    return array.map((item) => <li class={classes.li}>{item}</li>);
  });

  return (
    <BreadcrumbsRoot
      color="text.secondary"
      {...otherProps}
      class={clsx(classes.root, otherProps.class)}
      ownerState={ownerState}
    >
      <BreadcrumbsOl
        class={classes.ol}
        ownerState={ownerState}
        ref={listElement}
      >
        {insertSeparators(
          expanded() || (props.maxItems && allItems().length <= props.maxItems)
            ? allItems()
            : renderItemsBeforeAndAfter(allItems()),
          classes.separator,
          props.separator,
          ownerState
        )}
      </BreadcrumbsOl>
    </BreadcrumbsRoot>
  );
});

export default Breadcrumbs;
