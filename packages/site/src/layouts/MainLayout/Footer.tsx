import { useTheme } from "@suid/material";
import { Box, Container, Paper, Typography } from "@suid/material";
import { useLayoutContext } from "~/layouts/MainLayout/LayoutContext";

export default function Footer() {
  const theme = useTheme();
  const materialVersion = SUID_VERSIONS["@suid/material"];
  const layoutContext = useLayoutContext();

  return (
    <Paper
      square
      elevation={2}
      sx={{
        height: 50,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          mt: "50px",
          height: 1,
          fontSize: 14,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.text.secondary,
        }}
      >
        <Box
          sx={{
            width: `${layoutContext.drawer.visibleWidth}px`,
          }}
        />
        <Box>
          Built with{" "}
          <Typography
            component="span"
            sx={{ color: theme.palette.text.primary }}
          >
            @suid/material
          </Typography>{" "}
          v{materialVersion}
        </Box>
      </Container>
    </Paper>
  );
}
