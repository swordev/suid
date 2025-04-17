var c=Object.defineProperty;var e=(t,o)=>c(t,"name",{value:o,configurable:!0});import{a as u,u as h,E as l,h as n,z as g,B as f,k as r,a5 as i,t as x}from"./index-Czz0zveA.js";import{C as b}from"./ComponentInfo-fkKAmG7b.js";import"./Link-COoASxvI.js";import"./copyText-BiDnUgau.js";import"./PaperCode-CeVCgwlx.js";var y=x("<div>");function s(){const[t,o]=u(!1),d=e(()=>o(!0),"handleOpen"),p=e(()=>o(!1),"handleClose"),m=h();return(()=>{var a=y();return l(a,n(g,{onClick:d,children:"Open modal"}),null),l(a,n(i,{get open(){return t()},onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",get children(){return n(f,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:m.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4}},get children(){return[n(r,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),n(r,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]}})}}),null),a})()}e(s,"BasicModal");s.code=`import { Box, Button, Modal, Typography } from "@suid/material";
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
`;function k(){return n(b,{get name(){return i.name},examples:[s]})}e(k,"ModalPage");export{k as default};
