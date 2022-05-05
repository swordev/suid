import Container from "@suid/material/Container";
import Grid from "@suid/material/Grid";
import Typography from "@suid/material/Typography";

export default function ErrorPage(props: { title: string; code?: string }) {
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
            mt: "25%",
          }}
        >
          <Grid item xs={12}>
            <Typography component="h2" variant="h3" sx={{ mt: 1 }}>
              Whoops! <br />
              {props.title}
            </Typography>
            <Typography
              component="h3"
              variant="h2"
              sx={{ mt: 2, fontSize: 200, fontWeight: "400" }}
            >
              {props.code}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
