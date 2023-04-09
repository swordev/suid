var h=Object.defineProperty;var l=(t,o)=>h(t,"name",{value:o,configurable:!0});import{K as f,N as x,Q as G,R as r,X as R,a5 as $,U as c,H as C,a6 as T,W as z,d as n,i as e,B as g}from"./index-4edd6e97.js";import{C as y}from"./ComponentInfo-031a9ae7.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";function O(t){return x("MuiButtonGroup",t)}l(O,"getButtonGroupUtilityClass");const u=f("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),W=G()({name:"MuiButtonGroup",selfPropNames:["children","classes","color","disableElevation","disableFocusRipple","disableRipple","disabled","fullWidth","orientation","size","variant"],propDefaults:({set:t})=>t({color:"primary",component:"div",disabled:!1,disableElevation:!1,disableFocusRipple:!1,disableRipple:!1,fullWidth:!1,orientation:"horizontal",size:"medium",variant:"outlined"}),utilityClass:O,slotClasses:t=>({root:["root",t.variant,t.orientation==="vertical"&&"vertical",t.fullWidth&&"fullWidth",t.disableElevation&&"disableElevation"],grouped:["grouped",`grouped${r(t.orientation)}`,`grouped${r(t.variant)}`,`grouped${r(t.variant)}${r(t.orientation)}`,`grouped${r(t.variant)}${r(t.color)}`,t.disabled&&"disabled"]})}),E=R("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:i}=t;return[{[`& .${u.grouped}`]:o.grouped},{[`& .${u.grouped}`]:o[`grouped${r(i.orientation)}`]},{[`& .${u.grouped}`]:o[`grouped${r(i.variant)}`]},{[`& .${u.grouped}`]:o[`grouped${r(i.variant)}${r(i.orientation)}`]},{[`& .${u.grouped}`]:o[`grouped${r(i.variant)}${r(i.color)}`]},o.root,o[i.variant],i.disableElevation===!0&&o.disableElevation,i.fullWidth&&o.fullWidth,i.orientation==="vertical"&&o.vertical]}})(({theme:t,ownerState:o})=>({display:"inline-flex",borderRadius:t.shape.borderRadius,...o.variant==="contained"&&{boxShadow:t.shadows[2]},...o.disableElevation&&{boxShadow:"none"},...o.fullWidth&&{width:"100%"},...o.orientation==="vertical"&&{flexDirection:"column"},[`& .${u.grouped}`]:{minWidth:40,"&:not(:first-of-type)":{...o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},...o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},...o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},...o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1}},"&:not(:last-of-type)":{...o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},...o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},...o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},...o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},...o.variant==="text"&&o.color!=="inherit"&&{borderColor:$(t.palette[o.color].main,.5)},...o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},...o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},...o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${t.palette.grey[400]}`,[`&.${u.disabled}`]:{borderRight:`1px solid ${t.palette.action.disabled}`}},...o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${t.palette.grey[400]}`,[`&.${u.disabled}`]:{borderBottom:`1px solid ${t.palette.action.disabled}`}},...o.variant==="contained"&&o.color!=="inherit"&&{borderColor:t.palette[o.color].dark},"&:hover":{...o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},...o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"}}},"&:hover":{...o.variant==="contained"&&{boxShadow:"none"}},...o.variant==="contained"&&{boxShadow:"none"}}})),d=W.component(l(function({allProps:o,classes:i,otherProps:p,props:a}){const v=l(()=>({class:i.grouped,color:a.color,disabled:a.disabled,disableElevation:a.disableElevation,disableFocusRipple:a.disableFocusRipple,disableRipple:a.disableRipple,fullWidth:a.fullWidth,size:a.size,variant:a.variant}),"context");return c(E,C({get as(){return p.component},role:"group",get class(){return z(i.root,p.class)},ownerState:o},p,{get children(){return c(T.Provider,{get value(){return v()},get children(){return a.children}})}}))},"ButtonGroup"));function b(){return n(d,{variant:"contained","aria-label":"outlined primary button group",get children(){return[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})]}})}l(b,"BasicButtonGroup");b.code=`import { Button, ButtonGroup } from "@suid/material";

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
`;const s=l(()=>[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})],"buttons");function B(){return n(g,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}},get children(){return[n(d,{size:"small","aria-label":"small button group",children:s}),n(d,{color:"warning","aria-label":"medium secondary button group",children:s}),n(d,{size:"large","aria-label":"large button group",children:s})]}})}l(B,"GroupSizesColors");B.code=`import { Box, Button, ButtonGroup } from "@suid/material";

const buttons = () => (
  <>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </>
);

export default function GroupSizesColors() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="warning" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
`;function m(){return n(g,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}},get children(){return[n(d,{variant:"outlined","aria-label":"outlined button group",get children(){return[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})]}}),n(d,{variant:"text","aria-label":"text button group",get children(){return[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})]}})]}})}l(m,"VariantButtonGroup");m.code=`import { Box, Button, ButtonGroup } from "@suid/material";

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
}
`;function M(){return n(y,{get name(){return d.name},examples:[b,{title:"Button variants",component:m},{title:"Sizes and colors",component:B}]})}l(M,"ButtonGroupPage");export{M as default};
