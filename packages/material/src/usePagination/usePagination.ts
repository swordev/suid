import useControlled from "./../utils/useControlled";
import * as ST from "@suid/types";
import { mergeProps, Signal, JSX } from "solid-js";

export interface UsePaginationProps {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number;
  /**
   * The name of the component where this hook is used.
   */
  componentName?: string;
  /**
   * The total number of pages.
   * @default 1
   */
  count?: number;
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * Callback fired when the page is changed.
   *
   * @param {St.ChangeEvent<Element>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: ST.ChangeEventHandler<Element, number>;
  /**
   * The current page.
   */
  page?: number;
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton?: boolean;
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number;
}

export interface UsePaginationItem {
  onClick: JSX.EventHandler<any, MouseEvent>;
  type:
    | "page"
    | "first"
    | "last"
    | "next"
    | "previous"
    | "start-ellipsis"
    | "end-ellipsis";
  page: number;
  selected: boolean;
  disabled: boolean;
}

export interface UsePaginationResult {
  items: UsePaginationItem[];
}

export default function usePagination(
  inProps: UsePaginationProps = {}
): UsePaginationResult {
  // keep default values in sync with @default tags in Pagination.propTypes
  const props = mergeProps(
    {
      boundaryCount: 1,
      componentName: "usePagination",
      count: 1,
      defaultPage: 1,
      disabled: false,
      hideNextButton: false,
      hidePrevButton: false,
      showFirstButton: false,
      showLastButton: false,
      siblingCount: 1,
    } satisfies UsePaginationProps,
    inProps
  );

  const [page, setPageState] = useControlled({
    controlled: () => props.page,
    default: () => props.defaultPage,
    name: props.componentName,
    state: "page",
  }) as Signal<number>;

  const handleClick = (event: any, value: number) => {
    if (!props.page) {
      setPageState(value);
    }
    if (props.onChange) {
      props.onChange(event as any, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = () => range(1, Math.min(props.boundaryCount, props.count));
  const endPages = () =>
    range(
      Math.max(props.count - props.boundaryCount + 1, props.boundaryCount + 1),
      props.count
    );

  const siblingsStart = () =>
    Math.max(
      Math.min(
        // Natural start
        page() - props.siblingCount,
        // Lower boundary when page is high
        props.count - props.boundaryCount - props.siblingCount * 2 - 1
      ),
      // Greater than startPages
      props.boundaryCount + 2
    );

  const siblingsEnd = () =>
    Math.min(
      Math.max(
        // Natural end
        page() + props.siblingCount,
        // Upper boundary when page is low
        props.boundaryCount + props.siblingCount * 2 + 2
      ),
      // Less than endPages
      endPages().length > 0 ? endPages()[0] - 2 : props.count - 1
    );

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList: () => (UsePaginationItem["type"] | number)[] = () => [
    ...(props.showFirstButton ? ["first" as const] : []),
    ...(props.hidePrevButton ? [] : ["previous" as const]),
    ...startPages(),

    // Start ellipsis
    ...(siblingsStart() > props.boundaryCount + 2
      ? ["start-ellipsis" as const]
      : props.boundaryCount + 1 < props.count - props.boundaryCount
        ? [props.boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingsStart(), siblingsEnd()),

    // End ellipsis
    ...(siblingsEnd() < props.count - props.boundaryCount - 1
      ? ["end-ellipsis" as const]
      : props.count - props.boundaryCount > props.boundaryCount
        ? [props.count - props.boundaryCount]
        : []),

    ...endPages(),
    ...(props.hideNextButton ? [] : ["next" as const]),
    ...(props.showLastButton ? ["last" as const] : []),
  ];

  // Map the button type to its page number
  const buttonPage = (type: UsePaginationItem["type"] | number) => {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page() - 1;
      case "next":
        return page() + 1;
      case "last":
        return props.count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items: () => UsePaginationResult["items"] = () =>
    itemList().map((item) => {
      return typeof item === "number"
        ? {
            onClick: (event) => {
              handleClick(event, item);
            },
            type: "page" as const,
            page: item!,
            selected: item === page(),
            disabled: props.disabled,
            "aria-current": item === page() ? "true" : undefined,
          }
        : {
            onClick: (event) => {
              handleClick(event, buttonPage(item)!);
            },
            type: item,
            page: buttonPage(item)!,
            selected: false,
            disabled:
              props.disabled ||
              (item.indexOf("ellipsis") === -1 &&
                (item === "next" || item === "last"
                  ? page() >= props.count
                  : page() <= 1)),
          };
    });

  return {
    get items() {
      return items();
    },
  };
}
