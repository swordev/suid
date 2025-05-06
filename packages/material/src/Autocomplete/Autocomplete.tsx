import composeClasses from "../../../base/src/composeClasses";
import IconButton from "../IconButton/IconButton";
import styled from "../styles/styled";
import capitalize from "../utils/capitalize";

// const useUtilityClasses = (ownerState) => {
//     const {
//       classes,
//       disablePortal,
//       expanded,
//       focused,
//       fullWidth,
//       hasClearIcon,
//       hasPopupIcon,
//       inputFocused,
//       popupOpen,
//       size,
//     } = ownerState;

//     const slots = {
//       root: [
//         'root',
//         expanded && 'expanded',
//         focused && 'focused',
//         fullWidth && 'fullWidth',
//         hasClearIcon && 'hasClearIcon',
//         hasPopupIcon && 'hasPopupIcon',
//       ],
//       inputRoot: ['inputRoot'],
//       input: ['input', inputFocused && 'inputFocused'],
//       tag: ['tag', `tagSize${capitalize(size)}`],
//       endAdornment: ['endAdornment'],
//       clearIndicator: ['clearIndicator'],
//       popupIndicator: ['popupIndicator', popupOpen && 'popupIndicatorOpen'],
//       popper: ['popper', disablePortal && 'popperDisablePortal'],
//       paper: ['paper'],
//       listbox: ['listbox'],
//       loading: ['loading'],
//       noOptions: ['noOptions'],
//       option: ['option'],
//       groupLabel: ['groupLabel'],
//       groupUl: ['groupUl'],
//     };

//     return composeClasses(slots, getAutocompleteUtilityClass, classes);
//   };

const AutocompleteEndAdornment = styled("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (props, styles) => styles.endAdornment,
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)", // Center vertically
});

const AutocompleteClearIndicator = styled(IconButton, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (props, styles) => styles.clearIndicator,
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden",
});
