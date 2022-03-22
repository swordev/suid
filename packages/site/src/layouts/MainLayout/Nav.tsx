import CodeIcon from "@suid/icons-material/Code";
import RocketLaunchIcon from "@suid/icons-material/RocketLaunch";
import { useTheme } from "@suid/material";
import Divider from "@suid/material/Divider";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import SvgIcon from "@suid/material/SvgIcon";
import { snakeCase, uncapitalize } from "@suid/utils/string";
import { Link as RouterLink, useLocation } from "solid-app-router";
import { createMemo, JSXElement, mapArray } from "solid-js";
import { Pages, tryPreload } from "~/Routing";
import { useLayoutContext } from "./LayoutContext";

const components: { section: string; components: string[] }[] = [
  {
    section: "Inputs",
    components: [
      "Autocomplete",
      "Button",
      "Button Group",
      "Checkbox",
      "Floating Action Button",
      "Radio Button",
      "Rating",
      "Select",
      "Slider",
      "Switch",
      "Text field",
      "Transfer List",
      "Toggle Button",
    ],
  },
  {
    section: "Data display",
    components: [
      "Avatar",
      "Badge",
      "Chip",
      "Divider",
      "Icons",
      "Icon Button", // extra
      "Material Icons",
      "List",
      "Table",
      "Tooltip",
      "Typography",
    ],
  },
  {
    section: "Feedback",
    components: [
      "Alert",
      "Backdrop",
      "Dialogs",
      "Progress",
      "Skeleton",
      "Snackbar",
    ],
  },
  {
    section: "Surfaces",
    components: ["Accordion", "App Bar", "Card", "Paper"],
  },
  {
    section: "Navigation",
    components: [
      "Bottom Navigation",
      "Breadcrumbs",
      "Drawer",
      "Links",
      "Menu",
      "Pagination",
      "Speed Dial",
      "Stepper",
      "Tabs",
    ],
  },
  {
    section: "Layout",
    components: ["Box", "Container", "Grid", "Stack", "Image List", "Hidden"],
  },
  {
    section: "Utils",
    components: [
      "Click Away Listener",
      "CSS Baseline",
      "Modal",
      "No SSR",
      "Popover",
      "Popper",
      "Portal",
      "Textarea Autosize",
      //"Transitions",
      "Fade",
      "Slide",
      "useMediaQuery",
    ],
  },
];

function NavSection(props: {
  text: string;
  icon: JSXElement;
  children?: JSXElement;
}) {
  const theme = useTheme();
  const context = useLayoutContext();
  return (
    <>
      <ListItem
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.grey[context.darkMode ? 300 : 800],
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 28,
            [`& .${SvgIcon}`]: {
              fontSize: 15,
            },
          }}
        >
          {props.icon}
        </ListItemIcon>
        {props.text}
      </ListItem>
      {props.children}
    </>
  );
}

function NavSubSection(props: { text: string }) {
  const theme = useTheme();
  const context = useLayoutContext();
  return (
    <ListItem
      sx={{
        pl: "44px",
        color: theme.palette.grey[context.darkMode ? 300 : 800],
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        mt: 1,
        mb: 1,
        letterSpacing: 2,
      }}
    >
      {props.text}
    </ListItem>
  );
}

function NavLink(props: { text: string; href: string }) {
  const theme = useTheme();
  const context = useLayoutContext();
  const location = useLocation();
  const selected = createMemo(() => location.pathname === props.href);

  return (
    <ListItemButton
      selected={selected()}
      component={RouterLink}
      sx={{ pl: "45px" }}
      href={props.href}
      onMouseEnter={tryPreload}
    >
      <ListItemText
        primaryTypographyProps={{
          sx: {
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.grey[context.darkMode ? 500 : 700],
          },
        }}
      >
        {props.text}
      </ListItemText>
    </ListItemButton>
  );
}
export function Nav() {
  return (
    <List dense>
      <NavSection icon={<RocketLaunchIcon />} text="Getting started">
        <NavLink text="Installation" href="/getting-started/installation" />
        <NavLink text="Usage" href="/getting-started/usage" />
      </NavSection>
      <Divider sx={{ my: 1 }} />

      <NavSection icon={<CodeIcon />} text="Components">
        {mapArray(
          () => components,
          (item) => {
            return (
              <>
                <NavSubSection text={item.section} />
                {mapArray(
                  () => item.components,
                  (name) => {
                    const folder = snakeCase(
                      uncapitalize(name.replaceAll(" ", ""))
                    );
                    const pageName = name.replaceAll(" ", "");
                    const localPath1 = `./pages/components/${pageName}Page/index.tsx`;
                    const localPath2 = `./pages/components/${pageName}Page/${pageName}Page.tsx`;
                    const exists = Pages[localPath1] || Pages[localPath2];
                    if (!exists) return <></>;
                    return (
                      <NavLink text={name} href={`/components/${folder}`} />
                    );
                  }
                )}
              </>
            );
          }
        )}
      </NavSection>
    </List>
  );
}
