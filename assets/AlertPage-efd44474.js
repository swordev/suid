var p=Object.defineProperty;var n=(r,i)=>p(r,"name",{value:i,configurable:!0});import{A as e}from"./Alert-72653fda.js";import{C as m}from"./ComponentInfo-b324653a.js";import{h as t,z as d,N as T,O as f,f as k,R as y,k as v,m as w,W as S,t as x}from"./index-dcf73f67.js";import{S as l}from"./copyText-676cc977.js";import"./Link-1d61b786.js";import"./PaperCode-2aa6fb01.js";function a(){return t(l,{sx:{width:"100%"},spacing:2,get children(){return[t(e,{onClose:()=>{console.log("close")},children:"This is a success alert — check it out!"}),t(e,{get action(){return t(d,{color:"inherit",size:"small",children:"UNDO"})},children:"This is a success alert — check it out!"})]}})}n(a,"ActionAlerts");a.code=`import { Alert, Button, Stack } from "@suid/material";

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        onClose={() => {
          console.log("close");
        }}
      >
        This is a success alert — check it out!
      </Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
`;function u(){return t(l,{sx:{width:"100%"},spacing:2,get children(){return[t(e,{severity:"error",children:"This is an error alert — check it out!"}),t(e,{severity:"warning",children:"This is a warning alert — check it out!"}),t(e,{severity:"info",children:"This is an info alert — check it out!"}),t(e,{severity:"success",children:"This is a success alert — check it out!"})]}})}n(u,"BasicAlerts");u.code=`import { Alert, Stack } from "@suid/material";

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
}
`;function C(r){return f("MuiAlertTitle",r)}n(C,"getAlertTitleUtilityClass");T("MuiAlertTitle",["root"]);const B=k()({name:"MuiAlertTitle",selfPropNames:["children","classes"],propDefaults:({set:r})=>r({component:"div"}),utilityClass:C,slotClasses:()=>({root:["root"]})}),D=y(v,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(r,i)=>i.root})(({theme:r})=>({fontWeight:r.typography.fontWeightMedium,marginTop:-2})),s=B.component(n(function({allProps:i,classes:A,otherProps:c,props:g}){return t(D,w({gutterBottom:!0},c,{ownerState:i,get class(){return S(A.root,c.class)},get children(){return g.children}}))},"AlertTitle")),o=x("<strong>check it out!");function h(){return t(l,{sx:{width:"100%"},spacing:2,get children(){return[t(e,{severity:"error",get children(){return[t(s,{children:"Error"}),"This is an error alert — ",o()]}}),t(e,{severity:"warning",get children(){return[t(s,{children:"Warning"}),"This is a warning alert — ",o()]}}),t(e,{severity:"info",get children(){return[t(s,{children:"Info"}),"This is an info alert — ",o()]}}),t(e,{severity:"success",get children(){return[t(s,{children:"Success"}),"This is a success alert — ",o()]}})]}})}n(h,"DescriptionAlerts");h.code=`import { Alert, AlertTitle, Stack } from "@suid/material";

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}
`;function O(){return t(m,{get name(){return e.name},importInfo:["Alert","AlertTitle"],examples:[u,{title:"Description",component:h},{title:"Actions",component:a}]})}n(O,"AlertPage");export{O as default};
