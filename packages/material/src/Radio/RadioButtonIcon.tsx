import { SvgIconProps } from "../SvgIcon";
import RadioButtonCheckedIcon from "../internal/svg-icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "../internal/svg-icons/RadioButtonUnchecked";
import styled from "../styles/styled";
import { mergeProps } from "solid-js";

const RadioButtonIconRoot = styled("span")({
  position: "relative",
  display: "flex",
});

const RadioButtonIconBackground = styled(RadioButtonUncheckedIcon)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)",
});

const RadioButtonIconDot = styled(RadioButtonCheckedIcon)<{ checked: boolean }>(
  ({ theme, ownerState }) => ({
    left: 0,
    position: "absolute",
    transform: "scale(0)",
    transition: theme.transitions.create("transform", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.shortest,
    }),
    ...(ownerState.checked && {
      transform: "scale(1)",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest,
      }),
    }),
  })
);

/**
 * @ignore - internal component.
 */
function RadioButtonIcon(props: {
  fontSize?: SvgIconProps["fontSize"];
  checked?: boolean;
  classes?: Record<string, string>;
}) {
  const ownerState = mergeProps(
    {
      checked: false,
      classes: {},
    },
    props
  );

  return (
    <RadioButtonIconRoot
      className={ownerState.classes.root}
      ownerState={ownerState}
    >
      <RadioButtonIconBackground
        fontSize={props.fontSize}
        className={ownerState.classes.background}
        ownerState={ownerState}
      />
      <RadioButtonIconDot
        fontSize={props.fontSize}
        className={ownerState.classes.dot}
        ownerState={ownerState}
      />
    </RadioButtonIconRoot>
  );
}

export default RadioButtonIcon;
