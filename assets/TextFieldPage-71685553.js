var R=Object.defineProperty;var i=(e,d)=>R(e,"name",{value:d,configurable:!0});import{a as H,b as q,I as O,F as B,O as D}from"./FormHelperText-3f95008a.js";import{F as N}from"./formControlState-17e7ba9b.js";import{O as z,P as k,I as L,R as $,m as U,j as s,c as l,p as m,J as _,a0 as A,U as a,t as F,h as j}from"./ErrorPage-899a3c74.js";import{c as E}from"./createUniqueId-df938aa4.js";import{C as J}from"./ComponentInfo-866f98ce.js";import{B as c}from"./ListItemText-6803f35f.js";import{S as f}from"./copyText-0585a785.js";import"./useFormControl-1abbb973.js";import"./GlobalStyles-5a68a6a2.js";import"./useControlled-9392b00a.js";import"./debounce-60370e19.js";import"./ownerWindow-09898c5b.js";import"./ownerDocument-5bb7a871.js";import"./FormLabel-0eb5b09a.js";import"./Link-a8ec2a4e.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";function G(e){return k("MuiTextField",e)}i(G,"getTextFieldUtilityClass");z("MuiTextField",["root"]);const K=L()({name:"MuiTextField",propDefaults:({set:e})=>e({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:G,slotClasses:()=>({root:["root"]})}),Q={standard:O,filled:B,outlined:D},X=$(N,{name:"MuiTextField",slot:"Root",overridesResolver:(e,d)=>d.root})({}),n=K.component(i(function({allProps:d,classes:b,otherProps:o,props:t}){U(()=>{t.select&&!t.children&&console.error("MUI: `children` must be passed when using the `TextField` component with `select`.")});const P=s(()=>{const r={};return t.variant==="outlined"&&(t.InputLabelProps&&typeof t.InputLabelProps.shrink<"u"&&(r.notched=t.InputLabelProps.shrink),r.label=t.label),r}),u=E(()=>t.id),h=i(()=>t.helperText&&u()?`${u()}-helper-text`:void 0,"helperTextId"),S=i(()=>t.label&&u()?`${u()}-label`:void 0,"inputLabelId"),I=i(()=>Q[t.variant],"InputComponent"),C=i(()=>l(A,m({get $component(){return I()},get["aria-describedby"](){return h()},get autoComplete(){return t.autoComplete},get autoFocus(){return t.autoFocus},get defaultValue(){return t.defaultValue},get fullWidth(){return t.fullWidth},get multiline(){return t.multiline},get name(){return t.name},get rows(){return t.rows},get maxRows(){return t.maxRows},get minRows(){return t.minRows},get type(){return t.type},get value(){return t.value},get id(){return u()},get inputRef(){return t.inputRef},get onBlur(){return t.onBlur},get onChange(){return t.onChange},get onFocus(){return t.onFocus},get placeholder(){return t.placeholder},get inputProps(){return t.inputProps},get size(){return t.size}},P,()=>t.InputProps||{})),"InputElement"),W=i(()=>{const r=t.label;return r!=null&&r!==""&&l(H,m({get for(){return u()},get id(){return S()}},()=>t.InputLabelProps||{},{children:r}))},"label"),M=i(()=>{const r=t.helperText;if(r)return l(q,m({get id(){return h()}},()=>t.FormHelperTextProps||{},{children:r}))},"helperText");return l(X,m({get class(){return _(b.root,o.class)},get disabled(){return t.disabled},get error(){return t.error},get fullWidth(){return t.fullWidth},get required(){return t.required},get color(){return t.color},get variant(){return t.variant},get size(){return t.size},ownerState:d},o,{get children(){return[s(()=>W()),s(()=>C()),s(()=>M())]}}))},"TextField"));function T(){return l(c,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[l(n,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),l(n,{id:"filled-basic",label:"Filled",variant:"filled"}),l(n,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}i(T,"BasicTextFields");T.code=`import { Box, TextField } from "@suid/material";

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
`;const p=F("<div></div>",2);function g(){return l(c,{component:"form",sx:{maxWidth:764,[`& ${n}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=p.cloneNode(!0);return a(e,l(n,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),a(e,l(n,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),a(e,l(n,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),a(e,l(n,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),a(e,l(n,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),a(e,l(n,{id:"outlined-search",label:"Search field",type:"search"}),null),a(e,l(n,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),e})(),(()=>{const e=p.cloneNode(!0);return a(e,l(n,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),a(e,l(n,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),a(e,l(n,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),a(e,l(n,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),a(e,l(n,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),a(e,l(n,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),a(e,l(n,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),e})(),(()=>{const e=p.cloneNode(!0);return a(e,l(n,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),a(e,l(n,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),a(e,l(n,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),a(e,l(n,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),a(e,l(n,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),a(e,l(n,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),a(e,l(n,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),e})()]}})}i(g,"FormPropsTextFields");g.code=`import { Box, TextField } from "@suid/material";

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
`;const x=F("<div></div>",2);function w(){return l(c,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=x.cloneNode(!0);return a(e,l(n,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),null),a(e,l(n,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),null),a(e,l(n,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"}),null),e})(),(()=>{const e=x.cloneNode(!0);return a(e,l(n,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),null),a(e,l(n,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),null),a(e,l(n,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"}),null),e})(),(()=>{const e=x.cloneNode(!0);return a(e,l(n,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),null),a(e,l(n,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),null),a(e,l(n,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"}),null),e})()]}})}i(w,"MultilineTextFields");w.code=`import Box from "@suid/material/Box";
import TextField from "@suid/material/TextField";

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "25ch",
        },
      }}
      noValidate
      autocomplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
    </Box>
  );
}
`;function y(){return l(f,{direction:"row",spacing:3,get children(){return[l(f,{spacing:2,get children(){return[l(n,{id:"outlined-small",label:"Outlined small",variant:"outlined",size:"small"}),l(n,{id:"filled-small",label:"Filled small",variant:"filled",size:"small"}),l(n,{id:"standard-small",label:"Standard small",variant:"standard",size:"small"})]}}),l(f,{spacing:2,get children(){return[l(n,{id:"outlined-medium",label:"Outlined medium",variant:"outlined"}),l(n,{id:"filled-medium",label:"Filled medium",variant:"filled"}),l(n,{id:"standard-medium",label:"Standard medium",variant:"standard"})]}})]}})}i(y,"SizesTextFields");y.code=`import { Stack, TextField } from "@suid/material";

export default function SizesTextFields() {
  return (
    <Stack direction="row" spacing={3}>
      <Stack spacing={2}>
        <TextField
          id="outlined-small"
          label="Outlined small"
          variant="outlined"
          size="small"
        />
        <TextField
          id="filled-small"
          label="Filled small"
          variant="filled"
          size="small"
        />
        <TextField
          id="standard-small"
          label="Standard small"
          variant="standard"
          size="small"
        />
      </Stack>
      <Stack spacing={2}>
        <TextField
          id="outlined-medium"
          label="Outlined medium"
          variant="outlined"
        />
        <TextField id="filled-medium" label="Filled medium" variant="filled" />
        <TextField
          id="standard-medium"
          label="Standard medium"
          variant="standard"
        />
      </Stack>
    </Stack>
  );
}
`;function v(e){return e.split(" ").map(d=>d.slice(0,1).toUpperCase()+d.slice(1).toLowerCase()).join(" ")}i(v,"capitalizeWords");function V(){const[e,d]=j(v("Cat in the Hat"));return l(c,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[l(n,{id:"outlined-name",label:"Name",get value(){return e()},onChange:(b,o)=>{d(v(o))}}),l(n,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]}})}i(V,"StateTextFields");V.code=`import { Box, TextField } from "@suid/material";
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
`;function ge(){return l(J,{get name(){return n.name},docsName:"text-fields",examples:[T,{title:"Sizes",component:y},{title:"Form props",component:g},{title:"Uncontrolled vs. Controlled",component:V},{title:"Multiline",component:w}]})}i(ge,"TextFieldPage");export{ge as default};
