import { Favorite, LocationOn, Restore } from "@suid/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@suid/material";
import { createSignal } from "solid-js";

export default function BasicBottomNavigationExample() {
  const [value, setValue] = createSignal(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value()}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
}
