import { Modal } from "@suid/material";
import ComponentInfo from "~/components/ComponentInfo";
import BasicModalExample from "./BasicModalExample";

export default function ModalPage() {
  return <ComponentInfo name={Modal.name} examples={[BasicModalExample]} />;
}
