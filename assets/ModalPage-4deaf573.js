var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{M as i}from"./Modal-111c91bc.js";import{C as u}from"./ComponentInfo-5e8c6946.js";import{h,g,U as r,c as o,t as f,T as l}from"./ErrorPage-5efa7331.js";import{d as x,B as b}from"./ListItemText-adc949a3.js";import"./Backdrop-1084b2e6.js";import"./Fade-e07f30a8.js";import"./Transition-bfcaa0e0.js";import"./TransitionContext-8fdaef14.js";import"./Portal-185692c1.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Link-849ade78.js";import"./copyText-b5a6c090.js";import"./IconButton-c537b21b.js";import"./Paper-b94e5972.js";import"./PaperCode-c69528b8.js";import"./PageNav-450b952c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-7d64fa3f.js";import"./vite.config.ts-faa4c0cf.js";const y=f("<div></div>",2);function p(){const[t,e]=h(!1),m=n(()=>e(!0),"handleOpen"),s=n(()=>e(!1),"handleClose"),d=g();return(()=>{const a=y.cloneNode(!0);return r(a,o(x,{onClick:m,children:"Open modal"}),null),r(a,o(i,{get open(){return t()},onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",get children(){return o(b,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:d.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4}},get children(){return[o(l,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),o(l,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]}})}}),null),a})()}n(p,"BasicModal");p.code=`import { Box, Button, Modal, Typography } from "@suid/material";
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
`;function F(){return o(u,{get name(){return i.name},examples:[p]})}n(F,"ModalPage");export{F as default};
