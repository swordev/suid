import { Typography, Box, Stack, Button } from "@suid/material";
import { createTheme, ThemeProvider } from "@suid/material/styles";

// Augment the palette to include an ochre color
declare module "@suid/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@suid/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default function CustomColor() {
  return (
    <ThemeProvider theme={theme}>
      <Stack gap={2} alignItems="center">
        <Button variant="contained" color="ochre">
          Ochre
        </Button>
        <Stack direction="row" gap={1}>
          <Stack alignItems="center">
            <Typography variant="body2">light</Typography>
            <Box sx={{ bgcolor: "ochre.light", width: 40, height: 20 }} />
          </Stack>
          <Stack alignItems="center">
            <Typography variant="body2">main</Typography>
            <Box sx={{ bgcolor: "ochre.main", width: 40, height: 20 }} />
          </Stack>
          <Stack alignItems="center">
            <Typography variant="body2">dark</Typography>
            <Box sx={{ bgcolor: "ochre.dark", width: 40, height: 20 }} />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
