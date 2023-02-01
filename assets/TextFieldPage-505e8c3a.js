var I=Object.defineProperty;var r=(n,d)=>I(n,"name",{value:d,configurable:!0});import{a as C,b as W,I as H,F as R,O as q}from"./FormHelperText-f9e49160.js";import{F as S}from"./formControlState-a3975f0a.js";import{O,P as B,I as N,R as L,m as D,j as s,c as t,p as c,J as U,a0 as $,U as a,t as k,h as M}from"./ErrorPage-5efa7331.js";import{c as z}from"./createUniqueId-ab267bbe.js";import{C as A}from"./ComponentInfo-ad863d1e.js";import{B as p}from"./ListItemText-4b7359c5.js";import"./useFormControl-8fcff4a5.js";import"./GlobalStyles-8190e5e5.js";import"./useControlled-405fff41.js";import"./FormLabel-9fa1ab28.js";import"./Link-1858147a.js";import"./copyText-cec38e2f.js";import"./IconButton-e9aa5297.js";import"./Paper-b94e5972.js";import"./PaperCode-9e9dd566.js";import"./PageNav-421e26ff.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function j(n){return B("MuiTextField",n)}r(j,"getTextFieldUtilityClass");O("MuiTextField",["root"]);const _=N()({name:"MuiTextField",propDefaults:({set:n})=>n({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:j,slotClasses:()=>({root:["root"]})}),E={standard:H,filled:R,outlined:q},J=L(S,{name:"MuiTextField",slot:"Root",overridesResolver:(n,d)=>d.root})({}),l=_.component(r(function({allProps:d,classes:f,otherProps:u,props:e}){D(()=>{e.select&&!e.children&&console.error("MUI: `children` must be passed when using the `TextField` component with `select`.")});const F=s(()=>{const i={};return e.variant==="outlined"&&(e.InputLabelProps&&typeof e.InputLabelProps.shrink<"u"&&(i.notched=e.InputLabelProps.shrink),i.label=e.label),i}),o=z(()=>e.id),b=r(()=>e.helperText&&o()?`${o()}-helper-text`:void 0,"helperTextId"),g=r(()=>e.label&&o()?`${o()}-label`:void 0,"inputLabelId"),y=r(()=>E[e.variant],"InputComponent"),w=r(()=>t($,c({get $component(){return y()},get["aria-describedby"](){return b()},get autoComplete(){return e.autoComplete},get autoFocus(){return e.autoFocus},get defaultValue(){return e.defaultValue},get fullWidth(){return e.fullWidth},get multiline(){return e.multiline},get name(){return e.name},get rows(){return e.rows},get maxRows(){return e.maxRows},get minRows(){return e.minRows},get type(){return e.type},get value(){return e.value},get id(){return o()},get inputRef(){return e.inputRef},get onBlur(){return e.onBlur},get onChange(){return e.onChange},get onFocus(){return e.onFocus},get placeholder(){return e.placeholder},get inputProps(){return e.inputProps},get size(){return e.size}},F,()=>e.InputProps||{})),"InputElement"),V=r(()=>{const i=e.label;return i!=null&&i!==""&&t(C,c({get for(){return o()},get id(){return g()}},()=>e.InputLabelProps||{},{children:i}))},"label"),P=r(()=>{const i=e.helperText;if(i)return t(W,c({get id(){return b()}},()=>e.FormHelperTextProps||{},{children:i}))},"helperText");return t(J,c({get class(){return U(f.root,u.class)},get disabled(){return e.disabled},get error(){return e.error},get fullWidth(){return e.fullWidth},get required(){return e.required},get color(){return e.color},get variant(){return e.variant},ownerState:d},u,{get children(){return[s(()=>V()),s(()=>w()),s(()=>P())]}}))},"TextField"));function h(){return t(p,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[t(l,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),t(l,{id:"filled-basic",label:"Filled",variant:"filled"}),t(l,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}r(h,"BasicTextFields");h.code=`import { Box, TextField } from "@suid/material";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        textAlign: "center",
      }}
      noValidate
      autocomplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
      />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}
`;const m=k("<div></div>",2);function v(){return t(p,{component:"form",sx:{maxWidth:764,[`& ${l}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const n=m.cloneNode(!0);return a(n,t(l,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),a(n,t(l,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),a(n,t(l,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),a(n,t(l,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),a(n,t(l,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),a(n,t(l,{id:"outlined-search",label:"Search field",type:"search"}),null),a(n,t(l,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),n})(),(()=>{const n=m.cloneNode(!0);return a(n,t(l,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),a(n,t(l,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),a(n,t(l,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),a(n,t(l,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),a(n,t(l,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),a(n,t(l,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),a(n,t(l,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),n})(),(()=>{const n=m.cloneNode(!0);return a(n,t(l,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),a(n,t(l,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),a(n,t(l,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),a(n,t(l,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),a(n,t(l,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),a(n,t(l,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),a(n,t(l,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),n})()]}})}r(v,"FormPropsTextFields");v.code=`import { Box, TextField } from "@suid/material";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 764,
        [\`& \${TextField}\`]: { m: 1, width: "25ch" },
        textAlign: "center",
      }}
      noValidate
      autocomplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  );
}
`;function x(n){return n.split(" ").map(d=>d.slice(0,1).toUpperCase()+d.slice(1).toLowerCase()).join(" ")}r(x,"capitalizeWords");function T(){const[n,d]=M(x("Cat in the Hat"));return t(p,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[t(l,{id:"outlined-name",label:"Name",get value(){return n()},onChange:(f,u)=>{d(x(u))}}),t(l,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]}})}r(T,"StateTextFields");T.code=`import { Box, TextField } from "@suid/material";
import { createSignal } from "solid-js";

function capitalizeWords(value: string) {
  return value
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(" ");
}

export default function StateTextFields() {
  const [name, setName] = createSignal(capitalizeWords("Cat in the Hat"));

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        textAlign: "center",
      }}
      novalidate
      autocomplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={name()}
        onChange={(event, value) => {
          setName(capitalizeWords(value));
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
      />
    </Box>
  );
}
`;function fe(){return t(A,{get name(){return l.name},docsName:"text-fields",examples:[h,{title:"Form props",component:v},{title:"Uncontrolled vs. Controlled",component:T}]})}r(fe,"TextFieldPage");export{fe as default};
