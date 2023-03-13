var M=Object.defineProperty;var i=(e,r)=>M(e,"name",{value:r,configurable:!0});import{a as R,b as H,I as q,F as B,O as D}from"./FormHelperText-a6da13c4.js";import{F as S}from"./formControlState-e36a5f4b.js";import{O as N,P as O,I as L,R as $,m as U,j as s,c as l,p as m,J as k,a0 as _,U as a,t as v,h as z}from"./ErrorPage-eb59dadb.js";import{c as A}from"./createUniqueId-d0e617ed.js";import{C as j}from"./ComponentInfo-1eac72a6.js";import{B as c}from"./ListItemText-be55e132.js";import"./useFormControl-b1bf8326.js";import"./GlobalStyles-881ee3e0.js";import"./useControlled-92c01364.js";import"./debounce-60370e19.js";import"./ownerWindow-09898c5b.js";import"./ownerDocument-5bb7a871.js";import"./FormLabel-06045072.js";import"./Link-123f7416.js";import"./copyText-dae2e1ef.js";import"./IconButton-c6b31999.js";import"./Paper-32f89a64.js";import"./PaperCode-b3aeccfd.js";import"./PageNav-652b02ba.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";function E(e){return O("MuiTextField",e)}i(E,"getTextFieldUtilityClass");N("MuiTextField",["root"]);const J=L()({name:"MuiTextField",propDefaults:({set:e})=>e({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:E,slotClasses:()=>({root:["root"]})}),G={standard:q,filled:B,outlined:D},K=$(S,{name:"MuiTextField",slot:"Root",overridesResolver:(e,r)=>r.root})({}),t=J.component(i(function({allProps:r,classes:x,otherProps:o,props:n}){U(()=>{n.select&&!n.children&&console.error("MUI: `children` must be passed when using the `TextField` component with `select`.")});const y=s(()=>{const d={};return n.variant==="outlined"&&(n.InputLabelProps&&typeof n.InputLabelProps.shrink<"u"&&(d.notched=n.InputLabelProps.shrink),d.label=n.label),d}),u=A(()=>n.id),b=i(()=>n.helperText&&u()?`${u()}-helper-text`:void 0,"helperTextId"),V=i(()=>n.label&&u()?`${u()}-label`:void 0,"inputLabelId"),P=i(()=>G[n.variant],"InputComponent"),I=i(()=>l(_,m({get $component(){return P()},get["aria-describedby"](){return b()},get autoComplete(){return n.autoComplete},get autoFocus(){return n.autoFocus},get defaultValue(){return n.defaultValue},get fullWidth(){return n.fullWidth},get multiline(){return n.multiline},get name(){return n.name},get rows(){return n.rows},get maxRows(){return n.maxRows},get minRows(){return n.minRows},get type(){return n.type},get value(){return n.value},get id(){return u()},get inputRef(){return n.inputRef},get onBlur(){return n.onBlur},get onChange(){return n.onChange},get onFocus(){return n.onFocus},get placeholder(){return n.placeholder},get inputProps(){return n.inputProps},get size(){return n.size}},y,()=>n.InputProps||{})),"InputElement"),C=i(()=>{const d=n.label;return d!=null&&d!==""&&l(R,m({get for(){return u()},get id(){return V()}},()=>n.InputLabelProps||{},{children:d}))},"label"),W=i(()=>{const d=n.helperText;if(d)return l(H,m({get id(){return b()}},()=>n.FormHelperTextProps||{},{children:d}))},"helperText");return l(K,m({get class(){return k(x.root,o.class)},get disabled(){return n.disabled},get error(){return n.error},get fullWidth(){return n.fullWidth},get required(){return n.required},get color(){return n.color},get variant(){return n.variant},ownerState:r},o,{get children(){return[s(()=>C()),s(()=>I()),s(()=>W())]}}))},"TextField"));function T(){return l(c,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[l(t,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),l(t,{id:"filled-basic",label:"Filled",variant:"filled"}),l(t,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}i(T,"BasicTextFields");T.code=`import { Box, TextField } from "@suid/material";

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
`;const f=v("<div></div>",2);function F(){return l(c,{component:"form",sx:{maxWidth:764,[`& ${t}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=f.cloneNode(!0);return a(e,l(t,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),a(e,l(t,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),a(e,l(t,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),a(e,l(t,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),a(e,l(t,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),a(e,l(t,{id:"outlined-search",label:"Search field",type:"search"}),null),a(e,l(t,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),e})(),(()=>{const e=f.cloneNode(!0);return a(e,l(t,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),a(e,l(t,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),a(e,l(t,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),a(e,l(t,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),a(e,l(t,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),a(e,l(t,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),a(e,l(t,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),e})(),(()=>{const e=f.cloneNode(!0);return a(e,l(t,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),a(e,l(t,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),a(e,l(t,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),a(e,l(t,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),a(e,l(t,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),a(e,l(t,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),a(e,l(t,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),e})()]}})}i(F,"FormPropsTextFields");F.code=`import { Box, TextField } from "@suid/material";

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
`;const p=v("<div></div>",2);function g(){return l(c,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=p.cloneNode(!0);return a(e,l(t,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),null),a(e,l(t,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),null),a(e,l(t,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"}),null),e})(),(()=>{const e=p.cloneNode(!0);return a(e,l(t,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),null),a(e,l(t,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),null),a(e,l(t,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"}),null),e})(),(()=>{const e=p.cloneNode(!0);return a(e,l(t,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),null),a(e,l(t,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),null),a(e,l(t,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"}),null),e})()]}})}i(g,"MultilineTextFields");g.code=`import Box from "@suid/material/Box";
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
`;function h(e){return e.split(" ").map(r=>r.slice(0,1).toUpperCase()+r.slice(1).toLowerCase()).join(" ")}i(h,"capitalizeWords");function w(){const[e,r]=z(h("Cat in the Hat"));return l(c,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[l(t,{id:"outlined-name",label:"Name",get value(){return e()},onChange:(x,o)=>{r(h(o))}}),l(t,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]}})}i(w,"StateTextFields");w.code=`import { Box, TextField } from "@suid/material";
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
`;function Te(){return l(j,{get name(){return t.name},docsName:"text-fields",examples:[T,{title:"Form props",component:F},{title:"Uncontrolled vs. Controlled",component:w},{title:"Multiline",component:g}]})}i(Te,"TextFieldPage");export{Te as default};
