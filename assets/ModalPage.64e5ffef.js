var u=Object.defineProperty;var n=(t,e)=>u(t,"name",{value:e,configurable:!0});import{u as c,d as h,B as f,T as l,U as i}from"./index.52e9424c.js";import{C as g}from"./ComponentInfo.4a323a22.js";import{a as x,r,d as o,t as y}from"./vendor.7f6460ea.js";import"./copyText.fb75f941.js";import"./PaperCode.35ccd2d7.js";import"./PageNav.95afb7be.js";const b=y("<div></div>");function d(){const[t,e]=x(!1),s=n(()=>e(!0),"handleOpen"),m=n(()=>e(!1),"handleClose"),p=c();return(()=>{const a=b.cloneNode(!0);return r(a,o(h,{onClick:s,children:"Open modal"}),null),r(a,o(i,{get open(){return t()},onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",get children(){return o(f,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:p.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4}},get children(){return[o(l,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),o(l,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]}})}}),null),a})()}n(d,"BasicModal");d.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Modal from "@suid/material/Modal";
import Typography from "@suid/material/Typography";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export default function BasicModal() {
  const [open, setOpen] = createSignal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open()}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: "24px",
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
`;function k(){return o(g,{get name(){return i.name},examples:[d]})}n(k,"ModalPage");export{k as default};
