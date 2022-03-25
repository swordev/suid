import ButtonBase, { ButtonBaseProps } from "../ButtonBase";
import MoreHorizIcon from "../internal/svg-icons/MoreHoriz";
import styled from "../styles/styled";
import { emphasize } from "@suid/system";

const BreadcrumbCollapsedButton = styled(ButtonBase)<ButtonBaseProps>(
  ({ theme }) => ({
    display: "flex",
    marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
    marginRight: `calc(${theme.spacing(1)} * 0.5)`,
    ...(theme.palette.mode === "light"
      ? {
          backgroundColor: theme.palette.grey[100],
          color: theme.palette.grey[700],
        }
      : {
          backgroundColor: theme.palette.grey[700],
          color: theme.palette.grey[100],
        }),
    borderRadius: 2,
    "&:hover, &:focus": {
      ...(theme.palette.mode === "light"
        ? { backgroundColor: theme.palette.grey[200] }
        : { backgroundColor: theme.palette.grey[600] }),
    },
    "&:active": {
      boxShadow: theme.shadows[0],
      ...(theme.palette.mode === "light"
        ? { backgroundColor: emphasize(theme.palette.grey[200], 0.12) }
        : { backgroundColor: emphasize(theme.palette.grey[600], 0.12) }),
    },
  })
);

const BreadcrumbCollapsedIcon = styled(MoreHorizIcon)({
  width: 24,
  height: 16,
});

/**
 * @ignore - internal component.
 */
function BreadcrumbCollapsed(props: ButtonBaseProps) {
  return (
    <li>
      <BreadcrumbCollapsedButton focusRipple {...props} ownerState={props}>
        <BreadcrumbCollapsedIcon ownerState={props} />
      </BreadcrumbCollapsedButton>
    </li>
  );
}

export default BreadcrumbCollapsed;
