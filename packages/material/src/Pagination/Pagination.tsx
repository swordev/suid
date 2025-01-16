import PaginationItem from "../PaginationItem";
import styled from "../styles/styled";
import usePagination from "../usePagination";
import { PaginationProps, PaginationTypeMap } from "./PaginationProps";
import { getPaginationUtilityClass } from "./paginationClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import createRef from "@suid/system/createRef";
import clsx from "clsx";
import { splitProps, mergeProps, For } from "solid-js";

const $ = createComponentFactory<PaginationTypeMap>()({
  name: "MuiPagination",
  selfPropNames: [
    "classes",
    "color",
    "getItemAriaLabel",
    "renderItem",
    "shape",
    "size",
    "variant",
  ],
  utilityClass: getPaginationUtilityClass,
  slotClasses: (ownerState) => ({
    root: ["root", ownerState.variant],
    ul: ["ul"],
  }),
});

const PaginationRoot = styled("nav", {
  name: "MuiPagination",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, styles[ownerState.variant]];
  },
})({});

const PaginationUl = styled("ul", {
  name: "MuiPagination",
  slot: "Ul",
  overridesResolver: (props, styles) => styles.ul,
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none",
});

const defaultGetAriaLabel: PaginationProps["getItemAriaLabel"] = function (
  type,
  page,
  selected
) {
  if (type === "page") {
    return `${selected ? "" : "Go to "}page ${page}`;
  }
  return `Go to ${type} page`;
};

const Pagination = $.defineComponent(function Pagination(inProps) {
  const ref = createRef(inProps);
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "boundaryCount",
    "class",
    "color",
    "count",
    "defaultPage",
    "disabled",
    "getItemAriaLabel",
    "hideNextButton",
    "hidePrevButton",
    "onChange",
    "page",
    "renderItem",
    "shape",
    "showFirstButton",
    "showLastButton",
    "siblingCount",
    "size",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      boundaryCount: 1,
      color: "standard",
      count: 1,
      defaultPage: 1,
      disabled: false,
      getItemAriaLabel: defaultGetAriaLabel,
      hideNextButton: false,
      hidePrevButton: false,
      renderItem: (item) => <PaginationItem {...item} />,
      shape: "circular",
      showFirstButton: false,
      showLastButton: false,
      siblingCount: 1,
      size: "medium",
      variant: "text",
    } satisfies PaginationProps,
    props
  );

  const pagination = usePagination(
    mergeProps(props, { componentName: "Pagination" })
  );

  const ownerState = mergeProps(props, {
    get boundaryCount() {
      return baseProps.boundaryCount;
    },
    get color() {
      return baseProps.color;
    },
    get count() {
      return baseProps.count;
    },
    get defaultPage() {
      return baseProps.defaultPage;
    },
    get disabled() {
      return baseProps.disabled;
    },
    get getItemAriaLabel() {
      return baseProps.getItemAriaLabel;
    },
    get hideNextButton() {
      return baseProps.hideNextButton;
    },
    get hidePrevButton() {
      return baseProps.hidePrevButton;
    },
    get renderItem() {
      return baseProps.renderItem;
    },
    get shape() {
      return baseProps.shape;
    },
    get showFirstButton() {
      return baseProps.showFirstButton;
    },
    get showLastButton() {
      return baseProps.showLastButton;
    },
    get siblingCount() {
      return baseProps.siblingCount;
    },
    get size() {
      return baseProps.size;
    },
    get variant() {
      return baseProps.variant;
    },
  });

  const classes = $.useClasses(ownerState);

  return (
    <PaginationRoot
      aria-label="pagination navigation"
      class={clsx(classes.root, props.class)}
      ownerState={ownerState}
      ref={ref}
      {...other}
    >
      <PaginationUl class={classes.ul} ownerState={ownerState}>
        <For each={pagination.items}>
          {(item) => (
            <li>
              {baseProps.renderItem(
                mergeProps(item, {
                  get color() {
                    return baseProps.color;
                  },
                  get "aria-label"() {
                    return baseProps.getItemAriaLabel(
                      item.type as any,
                      item.page,
                      item.selected
                    );
                  },
                  get shape() {
                    return baseProps.shape;
                  },
                  get size() {
                    return baseProps.size;
                  },
                  get variant() {
                    return baseProps.variant;
                  },
                })
              )}
            </li>
          )}
        </For>
      </PaginationUl>
    </PaginationRoot>
  );
});

// @default tags synced with default values from usePagination
export default Pagination;
