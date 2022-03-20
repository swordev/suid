import{u as p,d as u,B as c,T as t,Q as l}from"./index.ae27f545.js";import{C as h}from"./ComponentInfo.6103a8aa.js";import{a as f,t as a,d as o,v as g}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const x=g("<div></div>");function r(){const[i,e]=f(!1),d=()=>e(!0),s=()=>e(!1),m=p();return(()=>{const n=x.cloneNode(!0);return a(n,o(u,{onClick:d,children:"Open modal"}),null),a(n,o(l,{get open(){return i()},onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",get children(){return o(c,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:m.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4}},get children(){return[o(t,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),o(t,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]}})}}),null),n})()}r.code=`import Box from "@suid/material/Box";
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
`;function O(){return o(h,{get name(){return l.name},examples:[r]})}export{O as default};
