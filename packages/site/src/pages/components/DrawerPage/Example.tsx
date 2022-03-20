import MailIcon from "@suid/icons-material/Mail";
import InboxIcon from "@suid/icons-material/MoveToInbox";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Divider from "@suid/material/Divider";
import Drawer, { DrawerProps } from "@suid/material/Drawer";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import { createSignal } from "solid-js";

type Anchor = NonNullable<DrawerProps["anchor"]>;

export default function TemporaryDrawer() {
  const [state, setState] = createSignal<{
    [K in Anchor]: boolean;
  }>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (event.type === "keydown") {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === "Tab" || keyboardEvent.key === "Shift")
          return;
      }
      setState({ ...state(), [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as Anchor[]).map((anchor) => (
        <>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state()[anchor]}
            sx={{ zIndex: 9999 }}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </>
      ))}
    </div>
  );
}
