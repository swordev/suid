import { Favorite, Folder, LocationOn, Restore } from "@suid/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@suid/material";
import { createSignal } from "solid-js";

export default function UnlabeledBottomNavigationExample() {
  const [value, setValue] = createSignal("recents");

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value()}
      onChange={(_, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<Restore />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOn />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
    </BottomNavigation>
  );
}
