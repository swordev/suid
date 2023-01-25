var c=Object.defineProperty;var n=(t,e)=>c(t,"name",{value:e,configurable:!0});import{M as i}from"./Modal-01a5eddb.js";import{C as u}from"./ComponentInfo-5876f613.js";import{h,g,U as r,c as o,t as f,T as l}from"./ErrorPage-e9c3e4c4.js";import{d as x,B as b}from"./ListItemText-7ae6925f.js";import"./Backdrop-ea1acc6c.js";import"./Fade-8c4410b6.js";import"./Transition-4ac6f36d.js";import"./TransitionContext-d662a7b0.js";import"./Portal-759a0ddf.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const y=f("<div></div>",2);function p(){const[t,e]=h(!1),m=n(()=>e(!0),"handleOpen"),s=n(()=>e(!1),"handleClose"),d=g();return(()=>{const a=y.cloneNode(!0);return r(a,o(x,{onClick:m,children:"Open modal"}),null),r(a,o(i,{get open(){return t()},onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",get children(){return o(b,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:d.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4}},get children(){return[o(l,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),o(l,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]}})}}),null),a})()}n(p,"BasicModal");p.code=`import { Box, Button, Modal, Typography } from "@suid/material";
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
