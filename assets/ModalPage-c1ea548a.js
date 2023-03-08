var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{M as i}from"./Modal-aa97a05d.js";import{C as u}from"./ComponentInfo-dd557e38.js";import{h,g,U as r,c as o,t as f,T as l}from"./ErrorPage-6181b844.js";import{d as x,B as b}from"./ListItemText-c21fab44.js";import"./Backdrop-453b7eea.js";import"./Fade-c03793ef.js";import"./Transition-ae001210.js";import"./TransitionContext-090a1de4.js";import"./Portal-dee40779.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Link-338af14a.js";import"./copyText-b5956bcd.js";import"./IconButton-774dd328.js";import"./Paper-9a1f3ca7.js";import"./PaperCode-821650d8.js";import"./PageNav-4e461b26.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";const y=f("<div></div>",2);function p(){const[t,e]=h(!1),m=n(()=>e(!0),"handleOpen"),s=n(()=>e(!1),"handleClose"),d=g();return(()=>{const a=y.cloneNode(!0);return r(a,o(x,{onClick:m,children:"Open modal"}),null),r(a,o(i,{get open(){return t()},onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",get children(){return o(b,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:d.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4}},get children(){return[o(l,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),o(l,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]}})}}),null),a})()}n(p,"BasicModal");p.code=`import { Box, Button, Modal, Typography } from "@suid/material";
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
