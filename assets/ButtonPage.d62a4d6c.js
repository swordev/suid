var B=Object.defineProperty;var i=(t,p)=>B(t,"name",{value:p,configurable:!0});import{d as n,h as e,a7 as o,B as f,t as r,c as v,x as g,Q as h}from"./index.1753d436.js";import{C as S}from"./ComponentInfo.feb72c29.js";import{S as l}from"./copyText.a81e182c.js";import"./Link.b935328c.js";import"./PaperCode.eaeee87a.js";function c(){return n(l,{spacing:2,direction:"row",get children(){return[n(e,{variant:"text",children:"Text"}),n(e,{variant:"contained",children:"Contained"}),n(e,{variant:"outlined",children:"Outlined"})]}})}i(c,"BasicButtons");c.code=`import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
`;const a=r("<div></div>");function d(){return n(f,{sx:{"& button":{m:1}},get children(){return[(()=>{const t=a.cloneNode(!0);return o(t,n(e,{size:"small",children:"Small"}),null),o(t,n(e,{size:"medium",children:"Medium"}),null),o(t,n(e,{size:"large",children:"Large"}),null),t})(),(()=>{const t=a.cloneNode(!0);return o(t,n(e,{variant:"outlined",size:"small",children:"Small"}),null),o(t,n(e,{variant:"outlined",size:"medium",children:"Medium"}),null),o(t,n(e,{variant:"outlined",size:"large",children:"Large"}),null),t})(),(()=>{const t=a.cloneNode(!0);return o(t,n(e,{variant:"contained",size:"small",children:"Small"}),null),o(t,n(e,{variant:"contained",size:"medium",children:"Medium"}),null),o(t,n(e,{variant:"contained",size:"large",children:"Large"}),null),t})()]}})}i(d,"ButtonSizes");d.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";

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
`;function s(){return n(l,{direction:"row",spacing:2,get children(){return[n(e,{color:"secondary",children:"Secondary"}),n(e,{variant:"contained",color:"success",children:"Success"}),n(e,{variant:"outlined",color:"error",children:"Error"})]}})}i(s,"ColorButtonsExample");s.code=`import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";

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
`;const x=r('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),z=r('<svg><circle cx="12" cy="12" r="3.2"></circle></svg>',4,!0),b=r('<svg><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></svg>',4,!0),y=v(()=>[x.cloneNode(!0),z.cloneNode(!0),b.cloneNode(!0)],"PhotoCamera"),$=r('<label for="contained-button-file"></label>'),k=r('<label for="icon-button-file"></label>'),u=g("input")({display:"none"});function m(){return n(l,{direction:"row",spacing:2,sx:{alignItems:"center"},get children(){return[(()=>{const t=$.cloneNode(!0);return o(t,n(u,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file"}),null),o(t,n(e,{variant:"contained",component:"span",children:"Upload"}),null),t})(),(()=>{const t=k.cloneNode(!0);return o(t,n(u,{accept:"image/*",id:"icon-button-file",type:"file"}),null),o(t,n(h,{color:"primary","aria-label":"upload picture",component:"span",get children(){return n(y,{})}}),null),t})()]}})}i(m,"UploadButtons");m.code=`import PhotoCamera from "@suid/icons-material/PhotoCamera";
import Button from "@suid/material/Button";
import IconButton from "@suid/material/IconButton";
import Stack from "@suid/material/Stack";
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
`;function w(){return n(S,{get name(){return e.name},docsName:"buttons",examples:[c,s,d,m]})}i(w,"ButtonPage");export{w as default};
