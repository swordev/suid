import CodeIcon from "@suid/icons-material/Code";
import HandymanIcon from "@suid/icons-material/Handyman";
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
import { Component, createMemo, JSXElement, mapArray } from "solid-js";
import { Pages, tryPreload } from "~/Routing";
import { useLayoutContext } from "./LayoutContext";

type LinkConfig = { type: "link"; text: string; href: string };

type SectionConfig = {
  type: "section";
  text: string;
  icon?: Component;
  items?: Config[];
};

type Config = LinkConfig | SectionConfig;

function toFolder(text: string) {
  return snakeCase(
    uncapitalize(
      text.replaceAll(" ", (name, index) => {
        const nextChar = text[index + 1];
        if (nextChar && nextChar === nextChar.toLowerCase()) return "-";
        return "";
      })
    )
  );
}

function toComponentName(text: string) {
  return `${text.replaceAll(" ", "")}Page`;
}

function checkComponentPage(rootPath: string, text: string) {
  const componentName = toComponentName(text);
  const localPath1 = `./pages/${rootPath}/${componentName}/index.tsx`;
  const localPath2 = `./pages/${rootPath}/${componentName}/${componentName}.tsx`;
  return !!Pages[localPath1] || !!Pages[localPath2];
}

export function findNavConfigs(href: string) {
  let prev: LinkConfig | undefined;
  let current: LinkConfig | undefined;
  let next: LinkConfig | undefined;

  const iterate = (configs: Config[]) => {
    for (const config of configs) {
      if (config.type === "section") {
        if (config.items && !iterate(config.items)) break;
      } else if (config.type === "link") {
        if (config.href === href) {
          current = config;
        } else if (current) {
          next = config;
          return false;
        } else {
          prev = config;
        }
      }
    }
    return true;
  };

  iterate(navConfig);

  return { prev, current, next };
}

function createLinkConfig(text: string, href: string) {
  return {
    type: "link",
    text,
    href,
  } as LinkConfig;
}

export const navConfig: Config[] = [
  {
    type: "section",
    text: "Getting started",
    icon: RocketLaunchIcon,
    items: ["Installation", "Usage", "Playground"].map((text) => ({
      type: "link",
      href: `/getting-started/${toFolder(text)}`,
      text,
    })),
  },
  {
    type: "section",
    text: "System",
    icon: HandymanIcon,
    items: ["The sx prop", "styled"].map((text) => ({
      type: "link",
      href: `/system/${toFolder(text)}`,
      text,
    })),
  },
  {
    type: "section",
    text: "Components",
    icon: CodeIcon,
    items: [
      {
        type: "section",
        text: "Inputs",
        items: [
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
        ]
          .map((text) =>
            createLinkConfig(text, `/components/${toFolder(text)}`)
          )
          .filter((item) => checkComponentPage("components", item.text)),
      },
      {
        type: "section",
        text: "Data display",
        items: [
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
        ]
          .map((text) =>
            createLinkConfig(text, `/components/${toFolder(text)}`)
          )
          .filter((item) => checkComponentPage("components", item.text)),
      },
      {
        type: "section",
        text: "Feedback",
        items: [
          "Alert",
          "Backdrop",
          "Dialogs",
          //"Progress",
          "Circular Progress",
          "Linear Progress",
          "Skeleton",
          "Snackbar",
        ]
          .map((text) =>
            createLinkConfig(text, `/components/${toFolder(text)}`)
          )
          .filter((item) => checkComponentPage("components", item.text)),
      },
      {
        type: "section",
        text: "Surfaces",
        items: ["Accordion", "App Bar", "Card", "Paper"]
          .map((text) =>
            createLinkConfig(text, `/components/${toFolder(text)}`)
          )
          .filter((item) => checkComponentPage("components", item.text)),
      },
      {
        type: "section",
        text: "Navigation",
        items: [
          "Bottom Navigation",
          "Breadcrumbs",
          "Drawer",
          "Links",
          "Menu",
          "Pagination",
          "Speed Dial",
          "Stepper",
          "Tabs",
        ]
          .map((text) =>
            createLinkConfig(text, `/components/${toFolder(text)}`)
          )
          .filter((item) => checkComponentPage("components", item.text)),
      },
      {
        type: "section",
        text: "Layout",
        items: ["Box", "Container", "Grid", "Stack", "Image List", "Hidden"]
          .map((text) =>
            createLinkConfig(text, `/components/${toFolder(text)}`)
          )
          .filter((item) => checkComponentPage("components", item.text)),
      },
      {
        type: "section",
        text: "Utils",
        items: [
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
        ]
          .map((text) =>
            createLinkConfig(text, `/components/${toFolder(text)}`)
          )
          .filter((item) => checkComponentPage("components", item.text)),
      },
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
      onClick={() => {
        context.drawer.openState = false;
      }}
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
      {mapArray(
        () => navConfig,
        (item) => {
          if (item.type === "section") {
            return (
              <>
                <NavSection
                  icon={item.icon ? <item.icon /> : undefined}
                  text={item.text}
                >
                  {mapArray(
                    () => item.items,
                    (item) => {
                      if (item.type === "section") {
                        return (
                          <>
                            <NavSubSection text={item.text} />
                            {mapArray(
                              () => item.items,
                              (item) => {
                                if (item.type === "link")
                                  return (
                                    <NavLink
                                      text={item.text}
                                      href={item.href}
                                    />
                                  );
                              }
                            )}
                          </>
                        );
                      } else if (item.type === "link") {
                        return <NavLink text={item.text} href={item.href} />;
                      }
                    }
                  )}
                </NavSection>
                <Divider sx={{ my: 1 }} />
              </>
            );
          } else if (item.type === "link") {
            return <NavLink text={item.text} href={item.href} />;
          }
        }
      )}
    </List>
  );
}
