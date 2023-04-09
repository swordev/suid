var f=Object.defineProperty;var i=(t,B)=>f(t,"name",{value:B,configurable:!0});import{d as n,i as e,x as o,B as v,e as r,c as g,t as l,X as h,I as S}from"./index-4edd6e97.js";import{C as z}from"./ComponentInfo-031a9ae7.js";import{S as u}from"./copyText-7d5196c4.js";import"./Link-c0b2074e.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";function d(){return n(u,{spacing:2,direction:"row",get children(){return[n(e,{variant:"text",children:"Text"}),n(e,{variant:"contained",children:"Contained"}),n(e,{variant:"outlined",children:"Outlined"})]}})}i(d,"BasicButtons");d.code=`import { Button, Stack } from "@suid/material";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
`;const a=r("<div>");function s(){return n(v,{sx:{"& button":{m:1}},get children(){return[(()=>{const t=a();return o(t,n(e,{size:"small",children:"Small"}),null),o(t,n(e,{size:"medium",children:"Medium"}),null),o(t,n(e,{size:"large",children:"Large"}),null),t})(),(()=>{const t=a();return o(t,n(e,{variant:"outlined",size:"small",children:"Small"}),null),o(t,n(e,{variant:"outlined",size:"medium",children:"Medium"}),null),o(t,n(e,{variant:"outlined",size:"large",children:"Large"}),null),t})(),(()=>{const t=a();return o(t,n(e,{variant:"contained",size:"small",children:"Small"}),null),o(t,n(e,{variant:"contained",size:"medium",children:"Medium"}),null),o(t,n(e,{variant:"contained",size:"large",children:"Large"}),null),t})()]}})}i(s,"ButtonSizes");s.code=`import { Box, Button } from "@suid/material";

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
`;function m(){return n(u,{direction:"row",spacing:2,get children(){return[n(e,{color:"secondary",children:"Secondary"}),n(e,{variant:"contained",color:"success",children:"Success"}),n(e,{variant:"outlined",color:"error",children:"Error"})]}})}i(m,"ColorButtonsExample");m.code=`import { Button, Stack } from "@suid/material";

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
`;const x=l('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),b=l('<svg><circle cx="12" cy="12" r="3.2"></svg>',!1,!0),y=l('<svg><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></svg>',!1,!0),$=g(()=>[x(),b(),y()],"PhotoCamera"),I=r('<label for="contained-button-file">'),C=r('<label for="icon-button-file">'),c=h("input")({display:"none"});function p(){return n(u,{direction:"row",spacing:2,sx:{alignItems:"center"},get children(){return[(()=>{const t=I();return o(t,n(c,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file"}),null),o(t,n(e,{variant:"contained",component:"span",children:"Upload"}),null),t})(),(()=>{const t=C();return o(t,n(c,{accept:"image/*",id:"icon-button-file",type:"file"}),null),o(t,n(S,{color:"primary","aria-label":"upload picture",component:"span",get children(){return n($,{})}}),null),t})()]}})}i(p,"UploadButtons");p.code=`import PhotoCamera from "@suid/icons-material/PhotoCamera";
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
`;function U(){return n(z,{get name(){return e.name},docsName:"buttons",examples:[d,m,s,p]})}i(U,"ButtonPage");export{U as default};
