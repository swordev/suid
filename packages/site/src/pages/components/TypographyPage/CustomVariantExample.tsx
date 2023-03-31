import { Typography, createTheme } from "@suid/material";
import { StyledProps, ThemeProvider } from "@suid/material/styles";

declare module "@suid/material/styles" {
  interface TypographyVariants {
    poster: StyledProps;
  }

  interface TypographyVariantsOptions {
    poster?: StyledProps;
  }
}

declare module "@suid/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

const theme = createTheme({
  typography: {
    poster: {
      fontSize: 64,
      color: "red",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          poster: "h1",
        },
      },
    },
  },
});

export default function CustomVariant() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="poster">poster</Typography>
    </ThemeProvider>
  );
}
