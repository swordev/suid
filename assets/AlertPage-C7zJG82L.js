var p=Object.defineProperty;var e=(n,i)=>p(n,"name",{value:i,configurable:!0});import{A as r}from"./Alert-E5naAob5.js";import{C as m}from"./ComponentInfo-C3huals-.js";import{h as t,z as d,O as T,N as f,f as k,m as y,R as v,U as w,k as S,t as x}from"./index-NCmNIr1K.js";import{S as l}from"./copyText-C_G9kHbS.js";import"./Link-Ci3uEOYa.js";import"./PaperCode-BKLbHUJT.js";function a(){return t(l,{sx:{width:"100%"},spacing:2,get children(){return[t(r,{onClose:e(()=>{console.log("close")},"onClose"),children:"This is a success alert — check it out!"}),t(r,{get action(){return t(d,{color:"inherit",size:"small",children:"UNDO"})},children:"This is a success alert — check it out!"})]}})}e(a,"ActionAlerts");a.code=`import { Alert, Button, Stack } from "@suid/material";

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
`;function u(){return t(l,{sx:{width:"100%"},spacing:2,get children(){return[t(r,{severity:"error",children:"This is an error alert — check it out!"}),t(r,{severity:"warning",children:"This is a warning alert — check it out!"}),t(r,{severity:"info",children:"This is an info alert — check it out!"}),t(r,{severity:"success",children:"This is a success alert — check it out!"})]}})}e(u,"BasicAlerts");u.code=`import { Alert, Stack } from "@suid/material";

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
`;function C(n){return T("MuiAlertTitle",n)}e(C,"getAlertTitleUtilityClass");f("MuiAlertTitle",["root"]);const B=k()({name:"MuiAlertTitle",selfPropNames:["children","classes"],propDefaults:e(({set:n})=>n({component:"div"}),"propDefaults"),utilityClass:C,slotClasses:e(()=>({root:["root"]}),"slotClasses")}),D=w(S,{name:"MuiAlertTitle",slot:"Root",overridesResolver:e((n,i)=>i.root,"overridesResolver")})(({theme:n})=>({fontWeight:n.typography.fontWeightMedium,marginTop:-2})),s=B.component(e(function({allProps:i,classes:A,otherProps:c,props:g}){return t(D,y({gutterBottom:!0},c,{ownerState:i,get class(){return v(A.root,c.class)},get children(){return g.children}}))},"AlertTitle2"));var o=x("<strong>check it out!");function h(){return t(l,{sx:{width:"100%"},spacing:2,get children(){return[t(r,{severity:"error",get children(){return[t(s,{children:"Error"}),"This is an error alert — ",o()]}}),t(r,{severity:"warning",get children(){return[t(s,{children:"Warning"}),"This is a warning alert — ",o()]}}),t(r,{severity:"info",get children(){return[t(s,{children:"Info"}),"This is an info alert — ",o()]}}),t(r,{severity:"success",get children(){return[t(s,{children:"Success"}),"This is a success alert — ",o()]}})]}})}e(h,"DescriptionAlerts");h.code=`import { Alert, AlertTitle, Stack } from "@suid/material";

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
`;function O(){return t(m,{get name(){return r.name},importInfo:["Alert","AlertTitle"],examples:[u,{title:"Description",component:h},{title:"Actions",component:a}]})}e(O,"AlertPage");export{O as default};
