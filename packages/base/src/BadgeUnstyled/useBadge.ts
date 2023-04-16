import BadgeUnstyledProps from "./BadgeUnstyledProps";
import usePreviousProps from "@suid/utils/usePreviousProps";
import { createMemo, mergeProps } from "solid-js";

export interface UseBadgeProps {
  anchorOrigin: BadgeUnstyledProps["anchorOrigin"];
  badgeContent?: BadgeUnstyledProps["badgeContent"];
  invisible: BadgeUnstyledProps["invisible"];
  max: BadgeUnstyledProps["max"];
  showZero: BadgeUnstyledProps["showZero"];
  variant: BadgeUnstyledProps["variant"];
}

export function useBadgeInvisibleMemo(props: UseBadgeProps) {
  return createMemo(() => {
    if (
      props.invisible === false &&
      ((props.badgeContent === 0 && !props.showZero) ||
        (props.badgeContent == null && props.variant !== "dot"))
    ) {
      return true;
    } else {
      return props.invisible;
    }
  });
}

export default function useBadge(inProps: UseBadgeProps) {
  const props = mergeProps(
    {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      invisible: false,
      max: 99,
      showZero: false,
      variant: "standard",
    } as const,
    inProps
  );

  const prevProps = usePreviousProps(props, [
    "anchorOrigin",
    "badgeContent",
    "max",
    "variant",
  ]);
  const invisible = useBadgeInvisibleMemo(props);
  const badge = mergeProps(() => (invisible() ? prevProps : props));
  const displayValue = () => {
    if (badge.variant !== "dot") {
      return badge.badgeContent && Number(badge.badgeContent) > badge.max
        ? `${badge.max}+`
        : badge.badgeContent;
    }
  };

  return mergeProps(badge, {
    get invisible() {
      return invisible();
    },
    get displayValue() {
      return displayValue();
    },
  });
}
