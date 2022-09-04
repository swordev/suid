var v=Object.defineProperty;var l=(t,o)=>v(t,"name",{value:o,configurable:!0});import{r as h,s as f,v as x,w as i,x as G,z as R,d as n,m as $,an as C,E as T,h as e,B as c}from"./index.1753d436.js";import{C as z}from"./ComponentInfo.feb72c29.js";import"./Link.b935328c.js";import"./copyText.a81e182c.js";import"./PaperCode.eaeee87a.js";function y(t){return f("MuiButtonGroup",t)}l(y,"getButtonGroupUtilityClass");const u=h("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),O=x()({name:"MuiButtonGroup",selfPropNames:["children","classes","color","disableElevation","disableFocusRipple","disableRipple","disabled","fullWidth","orientation","size","variant"],propDefaults:({set:t})=>t({color:"primary",component:"div",disabled:!1,disableElevation:!1,disableFocusRipple:!1,disableRipple:!1,fullWidth:!1,orientation:"horizontal",size:"medium",variant:"outlined"}),utilityClass:y,slotClasses:t=>({root:["root",t.variant,t.orientation==="vertical"&&"vertical",t.fullWidth&&"fullWidth",t.disableElevation&&"disableElevation"],grouped:["grouped",`grouped${i(t.orientation)}`,`grouped${i(t.variant)}`,`grouped${i(t.variant)}${i(t.orientation)}`,`grouped${i(t.variant)}${i(t.color)}`,t.disabled&&"disabled"]})}),E=G("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[{[`& .${u.grouped}`]:o.grouped},{[`& .${u.grouped}`]:o[`grouped${i(r.orientation)}`]},{[`& .${u.grouped}`]:o[`grouped${i(r.variant)}`]},{[`& .${u.grouped}`]:o[`grouped${i(r.variant)}${i(r.orientation)}`]},{[`& .${u.grouped}`]:o[`grouped${i(r.variant)}${i(r.color)}`]},o.root,o[r.variant],r.disableElevation===!0&&o.disableElevation,r.fullWidth&&o.fullWidth,r.orientation==="vertical"&&o.vertical]}})(({theme:t,ownerState:o})=>({display:"inline-flex",borderRadius:t.shape.borderRadius,...o.variant==="contained"&&{boxShadow:t.shadows[2]},...o.disableElevation&&{boxShadow:"none"},...o.fullWidth&&{width:"100%"},...o.orientation==="vertical"&&{flexDirection:"column"},[`& .${u.grouped}`]:{minWidth:40,"&:not(:first-of-type)":{...o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},...o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},...o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},...o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1}},"&:not(:last-of-type)":{...o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},...o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},...o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},...o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},...o.variant==="text"&&o.color!=="inherit"&&{borderColor:R(t.palette[o.color].main,.5)},...o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},...o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},...o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${t.palette.grey[400]}`,[`&.${u.disabled}`]:{borderRight:`1px solid ${t.palette.action.disabled}`}},...o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${t.palette.grey[400]}`,[`&.${u.disabled}`]:{borderBottom:`1px solid ${t.palette.action.disabled}`}},...o.variant==="contained"&&o.color!=="inherit"&&{borderColor:t.palette[o.color].dark},"&:hover":{...o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},...o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"}}},"&:hover":{...o.variant==="contained"&&{boxShadow:"none"}},...o.variant==="contained"&&{boxShadow:"none"}}})),d=O.component(l(function({allProps:o,classes:r,otherProps:p,props:a}){const m=l(()=>({class:r.grouped,color:a.color,disabled:a.disabled,disableElevation:a.disableElevation,disableFocusRipple:a.disableFocusRipple,disableRipple:a.disableRipple,fullWidth:a.fullWidth,size:a.size,variant:a.variant}),"context");return n(E,$({get as(){return p.component},role:"group",get class(){return T(r.root,p.class)},ownerState:o},p,{get children(){return n(C.Provider,{get value(){return m()},get children(){return a.children}})}}))},"ButtonGroup"));function g(){return n(d,{variant:"contained","aria-label":"outlined primary button group",get children(){return[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})]}})}l(g,"BasicButtonGroup");g.code=`import Button from "@suid/material/Button";
import ButtonGroup from "@suid/material/ButtonGroup";

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
`;const s=l(()=>[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})],"buttons");function b(){return n(c,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}},get children(){return[n(d,{size:"small","aria-label":"small button group",children:s}),n(d,{color:"warning","aria-label":"medium secondary button group",children:s}),n(d,{size:"large","aria-label":"large button group",children:s})]}})}l(b,"GroupSizesColors");b.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import ButtonGroup from "@suid/material/ButtonGroup";

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
`;function B(){return n(c,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}},get children(){return[n(d,{variant:"outlined","aria-label":"outlined button group",get children(){return[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})]}}),n(d,{variant:"text","aria-label":"text button group",get children(){return[n(e,{children:"One"}),n(e,{children:"Two"}),n(e,{children:"Three"})]}})]}})}l(B,"VariantButtonGroup");B.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import ButtonGroup from "@suid/material/ButtonGroup";

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
`;function P(){return n(z,{get name(){return d.name},examples:[g,{title:"Button variants",component:B},{title:"Sizes and colors",component:b}]})}l(P,"ButtonGroupPage");export{P as default};
