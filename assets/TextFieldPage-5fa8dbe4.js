var I=Object.defineProperty;var i=(e,d)=>I(e,"name",{value:d,configurable:!0});import{a as R,b as M,I as q,F as O,O as B}from"./FormHelperText-a8c7af72.js";import{F as D}from"./formControlState-67c73115.js";import{E as z,H as k,J as L,Q as $,d as l,m as s,p as c,O as N,aV as U,B as m,w as a,t as F,a as _}from"./index-14be0450.js";import{c as A}from"./createUniqueId-0b7511e7.js";import{C as j}from"./ComponentInfo-56622be5.js";import{S as f}from"./copyText-255cfa2c.js";import"./useFormControl-fcbaf055.js";import"./useControlled-8a88f13d.js";import"./FormLabel-b2cba5ae.js";import"./Link-f2dba49b.js";import"./PaperCode-7142a767.js";import"./_commonjsHelpers-0119a68f.js";function E(e){return k("MuiTextField",e)}i(E,"getTextFieldUtilityClass");z("MuiTextField",["root"]);const J=L()({name:"MuiTextField",propDefaults:({set:e})=>e({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:E,slotClasses:()=>({root:["root"]})}),Q={standard:q,filled:O,outlined:B},G=$(D,{name:"MuiTextField",slot:"Root",overridesResolver:(e,d)=>d.root})({}),n=J.component(i(function({allProps:d,classes:b,otherProps:o,props:t}){const r=A(()=>t.id),h=i(()=>t.helperText&&r()?`${r()}-helper-text`:void 0,"helperTextId"),P=i(()=>t.label&&r()?`${r()}-label`:void 0,"inputLabelId"),S=i(()=>Q[t.variant],"InputComponent"),C=i(()=>l(U,s({get $component(){return S()},get["aria-describedby"](){return h()},get autoComplete(){return t.autoComplete},get autoFocus(){return t.autoFocus},get defaultValue(){return t.defaultValue},get fullWidth(){return t.fullWidth},get multiline(){return t.multiline},get name(){return t.name},get rows(){return t.rows},get maxRows(){return t.maxRows},get minRows(){return t.minRows},get type(){return t.type},get value(){return t.value},get id(){return r()},get inputRef(){return t.inputRef},get onBlur(){return t.onBlur},get onChange(){return t.onChange},get onFocus(){return t.onFocus},get placeholder(){return t.placeholder},get inputProps(){return t.inputProps},get size(){return t.size},get notched(){return t.variant==="outlined"&&t.InputLabelProps&&typeof t.InputLabelProps.shrink<"u"?t.InputLabelProps.shrink:void 0},get label(){return t.variant==="outlined"?t.label:void 0}},()=>t.InputProps||{})),"InputElement"),W=i(()=>{const u=t.label;return u!=null&&u!==""&&l(R,s({get for(){return r()},get id(){return P()}},()=>t.InputLabelProps||{},{children:u}))},"label"),H=i(()=>{const u=t.helperText;if(u)return l(M,s({get id(){return h()}},()=>t.FormHelperTextProps||{},{children:u}))},"helperText");return l(G,s({get class(){return N(b.root,o.class)},get disabled(){return t.disabled},get error(){return t.error},get fullWidth(){return t.fullWidth},get required(){return t.required},get color(){return t.color},get variant(){return t.variant},get size(){return t.size},ownerState:d},o,{get children(){return[c(()=>W()),c(()=>C()),c(()=>H())]}}))},"TextField"));function T(){return l(m,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[l(n,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),l(n,{id:"filled-basic",label:"Filled",variant:"filled"}),l(n,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}i(T,"BasicTextFields");T.code=`import { Box, TextField } from "@suid/material";

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
`;const p=F("<div>");function g(){return l(m,{component:"form",sx:{maxWidth:764,[`& ${n}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=p();return a(e,l(n,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),a(e,l(n,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),a(e,l(n,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),a(e,l(n,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),a(e,l(n,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),a(e,l(n,{id:"outlined-search",label:"Search field",type:"search"}),null),a(e,l(n,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),e})(),(()=>{const e=p();return a(e,l(n,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),a(e,l(n,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),a(e,l(n,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),a(e,l(n,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),a(e,l(n,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),a(e,l(n,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),a(e,l(n,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),e})(),(()=>{const e=p();return a(e,l(n,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),a(e,l(n,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),a(e,l(n,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),a(e,l(n,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),a(e,l(n,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),a(e,l(n,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),a(e,l(n,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),e})()]}})}i(g,"FormPropsTextFields");g.code=`import { Box, TextField } from "@suid/material";

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
`;const x=F("<div>");function w(){return l(m,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=x();return a(e,l(n,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),null),a(e,l(n,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),null),a(e,l(n,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"}),null),e})(),(()=>{const e=x();return a(e,l(n,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),null),a(e,l(n,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),null),a(e,l(n,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"}),null),e})(),(()=>{const e=x();return a(e,l(n,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),null),a(e,l(n,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),null),a(e,l(n,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"}),null),e})()]}})}i(w,"MultilineTextFields");w.code=`import Box from "@suid/material/Box";
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
`;function V(){return l(f,{direction:"row",spacing:3,get children(){return[l(f,{spacing:2,get children(){return[l(n,{id:"outlined-small",label:"Outlined small",variant:"outlined",size:"small"}),l(n,{id:"filled-small",label:"Filled small",variant:"filled",size:"small"}),l(n,{id:"standard-small",label:"Standard small",variant:"standard",size:"small"})]}}),l(f,{spacing:2,get children(){return[l(n,{id:"outlined-medium",label:"Outlined medium",variant:"outlined"}),l(n,{id:"filled-medium",label:"Filled medium",variant:"filled"}),l(n,{id:"standard-medium",label:"Standard medium",variant:"standard"})]}})]}})}i(V,"SizesTextFields");V.code=`import { Stack, TextField } from "@suid/material";

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
`;function v(e){return e.split(" ").map(d=>d.slice(0,1).toUpperCase()+d.slice(1).toLowerCase()).join(" ")}i(v,"capitalizeWords");function y(){const[e,d]=_(v("Cat in the Hat"));return l(m,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[l(n,{id:"outlined-name",label:"Name",get value(){return e()},onChange:(b,o)=>{d(v(o))}}),l(n,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]}})}i(y,"StateTextFields");y.code=`import { Box, TextField } from "@suid/material";
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
`;function oe(){return l(j,{get name(){return n.name},docsName:"text-fields",examples:[T,{title:"Sizes",component:V},{title:"Form props",component:g},{title:"Uncontrolled vs. Controlled",component:y},{title:"Multiline",component:w}]})}i(oe,"TextFieldPage");export{oe as default};
