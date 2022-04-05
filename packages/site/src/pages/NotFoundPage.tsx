import Container from "@suid/material/Container";
import Grid from "@suid/material/Grid";
import Typography from "@suid/material/Typography";

export default function NotFoundPage() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            mt: "30%",
          }}
        >
          <Grid item xs={12}>
            <Typography component="h2" variant="h3" sx={{ mt: 1 }}>
              Whoops! <br />
              Page not found.
            </Typography>
            <Typography
              component="h3"
              variant="h2"
              sx={{ mt: 2, fontSize: 200, fontWeight: "400" }}
            >
              404
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
