var B=Object.defineProperty;var i=(t,p)=>B(t,"name",{value:p,configurable:!0});import{d as n,h as e,w as o,B as f,t as a,c as v,Q as g,I as h}from"./index-5e971977.js";import{C as S}from"./ComponentInfo-62d0bf60.js";import{S as l}from"./copyText-2bb7dc12.js";import"./Link-cfb16ae5.js";import"./PaperCode-8af144e1.js";function c(){return n(l,{spacing:2,direction:"row",get children(){return[n(e,{variant:"text",children:"Text"}),n(e,{variant:"contained",children:"Contained"}),n(e,{variant:"outlined",children:"Outlined"})]}})}i(c,"BasicButtons");c.code=`import { Button, Stack } from "@suid/material";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
`;const r=a("<div>");function d(){return n(f,{sx:{"& button":{m:1}},get children(){return[(()=>{const t=r();return o(t,n(e,{size:"small",children:"Small"}),null),o(t,n(e,{size:"medium",children:"Medium"}),null),o(t,n(e,{size:"large",children:"Large"}),null),t})(),(()=>{const t=r();return o(t,n(e,{variant:"outlined",size:"small",children:"Small"}),null),o(t,n(e,{variant:"outlined",size:"medium",children:"Medium"}),null),o(t,n(e,{variant:"outlined",size:"large",children:"Large"}),null),t})(),(()=>{const t=r();return o(t,n(e,{variant:"contained",size:"small",children:"Small"}),null),o(t,n(e,{variant:"contained",size:"medium",children:"Medium"}),null),o(t,n(e,{variant:"contained",size:"large",children:"Large"}),null),t})()]}})}i(d,"ButtonSizes");d.code=`import { Box, Button } from "@suid/material";

export default function ButtonSizes() {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Box>
  );
}
`;function s(){return n(l,{direction:"row",spacing:2,get children(){return[n(e,{color:"secondary",children:"Secondary"}),n(e,{variant:"contained",color:"success",children:"Success"}),n(e,{variant:"outlined",color:"error",children:"Error"})]}})}i(s,"ColorButtonsExample");s.code=`import { Button, Stack } from "@suid/material";

export default function ColorButtonsExample() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
}
`;const z=a('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),x=a('<svg><circle cx="12" cy="12" r="3.2"></svg>',!1,!0),b=a('<svg><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></svg>',!1,!0),y=v(()=>[z(),x(),b()],"PhotoCamera"),$=a('<label for="contained-button-file">'),I=a('<label for="icon-button-file">'),u=g("input")({display:"none"});function m(){return n(l,{direction:"row",spacing:2,sx:{alignItems:"center"},get children(){return[(()=>{const t=$();return o(t,n(u,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file"}),null),o(t,n(e,{variant:"contained",component:"span",children:"Upload"}),null),t})(),(()=>{const t=I();return o(t,n(u,{accept:"image/*",id:"icon-button-file",type:"file"}),null),o(t,n(h,{color:"primary","aria-label":"upload picture",component:"span",get children(){return n(y,{})}}),null),t})()]}})}i(m,"UploadButtons");m.code=`import PhotoCamera from "@suid/icons-material/PhotoCamera";
import { Button, IconButton, Stack } from "@suid/material";
import styled from "@suid/material/styles/styled";

const Input = styled("input")({
  display: "none",
});

export default function UploadButtons() {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <label for="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label for="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}
`;function P(){return n(S,{get name(){return e.name},docsName:"buttons",examples:[c,s,d,m]})}i(P,"ButtonPage");export{P as default};
