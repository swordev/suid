var ee=Object.defineProperty;var a=(n,i)=>ee(n,"name",{value:i,configurable:!0});import{a as g,b as T,I,F as y,O as P}from"./FormHelperText-dece9615.js";import{F as h}from"./formControlState-c16898bb.js";import{r as q,s as _,v as E,w as N,d as e,m as w,p as b,x as U,a_ as ne,B as F,H as r,t as x,c as j,O as D,R as te,W as le,V as re,T as ie,S as ae,a as C,I as W}from"./index-4f3845ca.js";import{c as de}from"./createUniqueId-33b8dad2.js";import{C as oe}from"./ComponentInfo-f2cce80d.js";import{u as ue,F as se}from"./useFormControl-33c1e9ef.js";import{S as M}from"./copyText-6c23f4c9.js";import"./useControlled-4276dc9a.js";import"./FormLabel-feb359d0.js";import"./Link-104b46b3.js";import"./PaperCode-014a11cb.js";function me(n){return _("MuiTextField",n)}a(me,"getTextFieldUtilityClass");q("MuiTextField",["root"]);const pe=E()({name:"MuiTextField",propDefaults:({set:n})=>n({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:me,slotClasses:()=>({root:["root"]})}),ce={standard:I,filled:y,outlined:P},he=N(h,{name:"MuiTextField",slot:"Root",overridesResolver:(n,i)=>i.root})({}),l=pe.component(a(function({allProps:i,classes:u,otherProps:o,props:t}){const s=de(()=>t.id),d=a(()=>t.helperText&&s()?`${s()}-helper-text`:void 0,"helperTextId"),v=a(()=>t.label&&s()?`${s()}-label`:void 0,"inputLabelId"),c=a(()=>ce[t.variant],"InputComponent"),A=a(()=>e(ne,w({get $component(){return c()},get["aria-describedby"](){return d()},get autoComplete(){return t.autoComplete},get autoFocus(){return t.autoFocus},get defaultValue(){return t.defaultValue},get fullWidth(){return t.fullWidth},get multiline(){return t.multiline},get name(){return t.name},get rows(){return t.rows},get maxRows(){return t.maxRows},get minRows(){return t.minRows},get type(){return t.type},get value(){return t.value},get id(){return s()},get inputRef(){return t.inputRef},get onBlur(){return t.onBlur},get onChange(){return t.onChange},get onFocus(){return t.onFocus},get placeholder(){return t.placeholder},get inputProps(){return t.inputProps},get size(){return t.size},get notched(){return t.variant==="outlined"&&t.InputLabelProps&&typeof t.InputLabelProps.shrink<"u"?t.InputLabelProps.shrink:void 0},get label(){return t.variant==="outlined"?t.label:void 0}},()=>t.InputProps||{})),"InputElement"),V=a(()=>{const f=t.label;return f!=null&&f!==""&&e(g,w({get for(){return s()},get id(){return v()}},()=>t.InputLabelProps||{},{children:f}))},"label"),p=a(()=>{const f=t.helperText;if(f)return e(T,w({get id(){return d()}},()=>t.FormHelperTextProps||{},{children:f}))},"helperText");return e(he,w({get class(){return U(u.root,o.class)},get disabled(){return t.disabled},get error(){return t.error},get fullWidth(){return t.fullWidth},get required(){return t.required},get color(){return t.color},get variant(){return t.variant},get size(){return t.size},ownerState:i},o,{get children(){return[b(()=>V()),b(()=>A()),b(()=>p())]}}))},"TextField"));function G(){return e(F,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[e(l,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),e(l,{id:"filled-basic",label:"Filled",variant:"filled"}),e(l,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}a(G,"BasicTextFields");G.code=`import { Box, TextField } from "@suid/material";

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
`;const S=x("<div>");function J(){return e(F,{component:"form",sx:{maxWidth:764,[`& ${l}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const n=S();return r(n,e(l,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),r(n,e(l,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),r(n,e(l,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),r(n,e(l,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),r(n,e(l,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),r(n,e(l,{id:"outlined-search",label:"Search field",type:"search"}),null),r(n,e(l,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),n})(),(()=>{const n=S();return r(n,e(l,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),r(n,e(l,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),r(n,e(l,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),r(n,e(l,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),r(n,e(l,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),r(n,e(l,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),r(n,e(l,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),n})(),(()=>{const n=S();return r(n,e(l,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),r(n,e(l,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),r(n,e(l,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),r(n,e(l,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),r(n,e(l,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),r(n,e(l,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),r(n,e(l,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),n})()]}})}a(J,"FormPropsTextFields");J.code=`import { Box, TextField } from "@suid/material";

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
`;const fe=x('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),be=x('<svg><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></svg>',!1,!0),$=j(()=>[fe(),be()],"Visibility"),xe=x('<svg><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"></svg>',!1,!0),ge=x('<svg><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></svg>',!1,!0),k=j(()=>[xe(),ge()],"VisibilityOff");function ve(n){return _("MuiInputAdornment",n)}a(ve,"getInputAdornmentUtilityClass");const B=q("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),we=x('<span class="notranslate">&#8203;'),H=E()({name:"MuiInputAdornment",selfPropNames:["classes","children","disablePointerEvents","disableTypography","position","variant"],utilityClass:ve,slotClasses:n=>({root:["root",n.disablePointerEvents&&"disablePointerEvents",n.position&&`position${D(n.position)}`,n.variant,n.hiddenLabel&&"hiddenLabel",n.size&&`size${D(n.size)}`]})}),Fe=N("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(n,i)=>{const{ownerState:u}=n;return[i.root,i[`position${D(u.position)}`],u.disablePointerEvents===!0&&i.disablePointerEvents,i[u.variant]]}})(({theme:n,ownerState:i})=>({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active,...i.variant==="filled"&&{[`&.${B.positionStart}&:not(.${B.hiddenLabel})`]:{marginTop:16}},...i.position==="start"&&{marginRight:8},...i.position==="end"&&{marginLeft:8},...i.disablePointerEvents===!0&&{pointerEvents:"none"}})),m=H.defineComponent(a(function(i){const u=le(i),o=H.useThemeProps({props:i}),[,t]=te(o,["children","class","component","disablePointerEvents","disableTypography","position","variant"]),s=w({component:"div",disablePointerEvents:!1,disableTypography:!1},o),d=ue(),v=a(()=>{let p=o.variant;return p&&d?.variant,d&&!p&&(p=d.variant),p},"variant"),c={get hiddenLabel(){return d?.hiddenLabel},get size(){return d?.size},get disablePointerEvents(){return s.disablePointerEvents},get position(){return o.position},get variant(){return v()}},A=H.useClasses(c);function V(p){const f=re(()=>p.children);return e(ae,{get when(){return typeof f()=="string"&&!p.disableTypography},get fallback(){return[b((()=>{const Z=b(()=>p.position==="start");return()=>Z()?we():null})()),b(()=>p.children)]},get children(){return e(ie,{color:"text.secondary",get children(){return f()}})}})}return a(V,"RootChildren"),e(se.Provider,{value:void 0,get children(){return e(Fe,w({get as(){return s.component},ownerState:c,get class(){return U(A.root,o.class)},ref:u},t,{get children(){return e(V,{get position(){return o.position},get disableTypography(){return s.disableTypography},get children(){return o.children}})}}))}})},"InputAdornment")),L=x("<div>");function K(){const[n,i]=C(!1),u=a(()=>i(!n()),"handleClickShowPassword"),o=a(t=>t.preventDefault(),"handleMouseDownPassword");return e(F,{sx:{display:"flex",flexWrap:"wrap",textAlign:"center"},get children(){return[(()=>{const t=L();return r(t,e(l,{label:"With normal TextField",id:"outlined-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}}}),null),r(t,e(h,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[e(P,{id:"outlined-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(T,{id:"outlined-weight-helper-text",children:"Weight"})]}}),null),r(t,e(h,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[e(g,{for:"outlined-adornment-password",children:"Password"}),e(P,{id:"outlined-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(W,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:o,edge:"end",get children(){return b(()=>!!n())()?e(k,{}):e($,{})}})}})},label:"Password"})]}}),null),r(t,e(h,{fullWidth:!0,sx:{m:1},get children(){return[e(g,{for:"outlined-adornment-amount",children:"Amount"}),e(P,{id:"outlined-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})},label:"Amount"})]}}),null),t})(),(()=>{const t=L();return r(t,e(l,{label:"With normal TextField",id:"filled-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}},variant:"filled"}),null),r(t,e(h,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[e(y,{id:"filled-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"filled-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(T,{id:"filled-weight-helper-text",children:"Weight"})]}}),null),r(t,e(h,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[e(g,{for:"filled-adornment-password",children:"Password"}),e(y,{id:"filled-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(W,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:o,edge:"end",get children(){return b(()=>!!n())()?e(k,{}):e($,{})}})}})}})]}}),null),r(t,e(h,{fullWidth:!0,sx:{m:1},variant:"filled",get children(){return[e(g,{for:"filled-adornment-amount",children:"Amount"}),e(y,{id:"filled-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})}})]}}),null),t})(),(()=>{const t=L();return r(t,e(l,{label:"With normal TextField",id:"standard-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}},variant:"standard"}),null),r(t,e(h,{variant:"standard",sx:{m:1,mt:3,width:"25ch"},get children(){return[e(I,{id:"standard-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(T,{id:"standard-weight-helper-text",children:"Weight"})]}}),null),r(t,e(h,{sx:{m:1,width:"25ch"},variant:"standard",get children(){return[e(g,{for:"standard-adornment-password",children:"Password"}),e(I,{id:"standard-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(W,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:o,get children(){return b(()=>!!n())()?e(k,{}):e($,{})}})}})}})]}}),null),r(t,e(h,{fullWidth:!0,sx:{m:1},variant:"standard",get children(){return[e(g,{for:"standard-adornment-amount",children:"Amount"}),e(I,{id:"standard-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})}})]}}),null),t})()]}})}a(K,"InputAdornments");K.code=`import { Visibility, VisibilityOff } from "@suid/icons-material";
import {
  Box,
  IconButton,
  Input,
  FilledInput,
  OutlinedInput,
  InputLabel,
  TextField,
  InputAdornment,
  FormHelperText,
  FormControl,
} from "@suid/material";
import { createSignal } from "solid-js";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = createSignal(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword());
  const handleMouseDownPassword = (event: Event) => event.preventDefault();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <div>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{
            m: 1,
            width: "25ch",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
          }}
          variant="outlined"
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{ "aria-label": "weight" }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
          }}
          variant="outlined"
        >
          <InputLabel for="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword() ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword() ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel for="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="filled-start-adornment"
          sx={{
            m: 1,
            width: "25ch",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
          variant="filled"
        />
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
          }}
          variant="filled"
        >
          <FilledInput
            id="filled-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{ "aria-label": "weight" }}
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
          }}
          variant="filled"
        >
          <InputLabel for="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword() ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword() ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel for="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div>
        <TextField
          label="With normal TextField"
          id="standard-start-adornment"
          sx={{
            m: 1,
            width: "25ch",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
          variant="standard"
        />
        <FormControl
          variant="standard"
          sx={{
            m: 1,
            mt: 3,
            width: "25ch",
          }}
        >
          <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{ "aria-label": "weight" }}
          />
          <FormHelperText id="standard-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            width: "25ch",
          }}
          variant="standard"
        >
          <InputLabel for="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword() ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword() ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel for="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
    </Box>
  );
}
`;const z=x("<div>");function Q(){return e(F,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const n=z();return r(n,e(l,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),null),r(n,e(l,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),null),r(n,e(l,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"}),null),n})(),(()=>{const n=z();return r(n,e(l,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),null),r(n,e(l,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),null),r(n,e(l,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"}),null),n})(),(()=>{const n=z();return r(n,e(l,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),null),r(n,e(l,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),null),r(n,e(l,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"}),null),n})()]}})}a(Q,"MultilineTextFields");Q.code=`import Box from "@suid/material/Box";
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
        textAlign: "center",
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
`;function X(){return e(M,{direction:"row",spacing:3,get children(){return[e(M,{spacing:2,get children(){return[e(l,{id:"outlined-small",label:"Outlined small",variant:"outlined",size:"small"}),e(l,{id:"filled-small",label:"Filled small",variant:"filled",size:"small"}),e(l,{id:"standard-small",label:"Standard small",variant:"standard",size:"small"})]}}),e(M,{spacing:2,get children(){return[e(l,{id:"outlined-medium",label:"Outlined medium",variant:"outlined"}),e(l,{id:"filled-medium",label:"Filled medium",variant:"filled"}),e(l,{id:"standard-medium",label:"Standard medium",variant:"standard"})]}})]}})}a(X,"SizesTextFields");X.code=`import { Stack, TextField } from "@suid/material";

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
`;const R=x("<div>");function O(n){return n.split(" ").map(i=>i.slice(0,1).toUpperCase()+i.slice(1).toLowerCase()).join(" ")}a(O,"capitalizeWords");function Y(){const[n,i]=C(O("Cat in the Hat")),[u,o]=C(""),[t,s]=C("0");return e(F,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[(()=>{const d=R();return r(d,e(l,{id:"outlined-name",label:"Controlled text",get value(){return n()},onChange:(v,c)=>{i(O(c))}}),null),r(d,e(l,{id:"outlined-uncontrolled",label:"Uncontrolled text",defaultValue:"foo"}),null),d})(),(()=>{const d=R();return r(d,e(l,{label:"Controlled date",type:"date",InputLabelProps:{shrink:!0},get value(){return u()},onChange:(v,c)=>o(c),get helperText(){return u()}}),null),r(d,e(l,{label:"Uncontrolled date",type:"date",InputLabelProps:{shrink:!0},defaultValue:"2000-01-01"}),null),d})(),(()=>{const d=R();return r(d,e(l,{label:"Controlled number",type:"number",get value(){return t()},onChange:(v,c)=>s(c),get helperText(){return t()}}),null),r(d,e(l,{label:"Uncontrolled number",type:"number",defaultValue:"0"}),null),d})()]}})}a(Y,"StateTextFields");Y.code=`import { Box, TextField } from "@suid/material";
import { createSignal } from "solid-js";

function capitalizeWords(value: string) {
  return value
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(" ");
}

export default function StateTextFields() {
  const [name, setName] = createSignal(capitalizeWords("Cat in the Hat"));
  const [date, setDate] = createSignal("");
  const [number, setNumber] = createSignal("0");
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        textAlign: "center",
      }}
      novalidate
      autocomplete="off"
    >
      <div>
        <TextField
          id="outlined-name"
          label="Controlled text"
          value={name()}
          onChange={(event, value) => {
            setName(capitalizeWords(value));
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled text"
          defaultValue="foo"
        />
      </div>
      <div>
        <TextField
          label="Controlled date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date()}
          onChange={(event, value) => setDate(value)}
          helperText={date()}
        />
        <TextField
          label="Uncontrolled date"
          type="date"
          InputLabelProps={{ shrink: true }}
          defaultValue="2000-01-01"
        />
      </div>
      <div>
        <TextField
          label="Controlled number"
          type="number"
          value={number()}
          onChange={(event, value) => setNumber(value)}
          helperText={number()}
        />
        <TextField label="Uncontrolled number" type="number" defaultValue="0" />
      </div>
    </Box>
  );
}
`;function He(){return e(oe,{get name(){return l.name},docsName:"text-fields",examples:[G,{title:"Sizes",component:X},{title:"Form props",component:J},{title:"Uncontrolled vs. Controlled",component:Y},{title:"Multiline",component:Q},{title:"Adornments",component:K}]})}a(He,"TextFieldPage");export{He as default};
