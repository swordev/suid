import PhotoCamera from "@suid/icons-material/PhotoCamera";
import { Button, IconButton, Stack } from "@suid/material";
import styled from "@suid/material/styles/styled";

const Input = styled("input")({
  display: "none",
});

export default function UploadButtons() {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <label for="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label for="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}
