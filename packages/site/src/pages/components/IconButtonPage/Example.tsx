import AddShoppingCartIcon from "@suid/icons-material/AddShoppingCart";
import AlarmIcon from "@suid/icons-material/Alarm";
import DeleteIcon from "@suid/icons-material/Delete";
import { IconButton } from "@suid/material";

export default function Example() {
  return (
    <>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </>
  );
}
