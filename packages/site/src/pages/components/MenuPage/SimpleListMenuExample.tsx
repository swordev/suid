import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
  ListItemButton,
} from "@suid/material";
import { createSignal } from "solid-js";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = createSignal(1);
  const open = () => Boolean(anchorEl());

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItem>
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open() ? "true" : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <ListItemText
              primary="When device is locked"
              secondary={options[selectedIndex()]}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            disabled={index === 0}
            selected={index === selectedIndex()}
            onClick={() => {
              setSelectedIndex(index);
              setAnchorEl(null);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
