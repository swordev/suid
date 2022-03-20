import Modal from "@suid/material/Modal";
import ComponentInfo from "~/components/ComponentInfo";
import Example from "~/pages/components/ModalPage/Example";

export default function ModalPage() {
  return <ComponentInfo name={Modal.name} examples={[Example]} />;
}
