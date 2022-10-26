import CheckIcon from "@suid/icons-material/Check";
import ContentCopyRoundedIcon from "@suid/icons-material/ContentCopyRounded";
import { Button } from "@suid/material";
import { buttonClasses, ButtonProps } from "@suid/material/Button";
import { createEffect, createSignal, onCleanup, Show } from "solid-js";
import copyText from "~/utils/copyText";

function InstallButton(props: ButtonProps) {
  const [copied, setCopied] = createSignal(false);
  const code = "npm init suid";
  let timeout: number | undefined;
  createEffect(() => {
    if (!copied()) return;
    clearTimeout(timeout);
    timeout = window.setTimeout(() => setCopied(false), 2000);
  });
  onCleanup(() => clearTimeout(timeout));
  return (
    <Button
      variant="outlined"
      size="large"
      endIcon={
        <Show when={copied()} fallback={<ContentCopyRoundedIcon />}>
          <CheckIcon />
        </Show>
      }
      {...props}
      sx={{
        textTransform: "none",
        borderRadius: 3,
        ...(props.fullWidth && {
          [`& .${buttonClasses.endIcon}`]: {
            position: "absolute",
            right: 0,
            mr: "10px",
          },
        }),
        ...(props.sx ?? {}),
      }}
      onClick={(event) => {
        setCopied(true);
        copyText(code);
        if (typeof props.onClick === "function") props.onClick(event);
      }}
    >
      {code}
    </Button>
  );
}

export default InstallButton;
