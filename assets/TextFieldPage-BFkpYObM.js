var Z=Object.defineProperty;var i=(n,r)=>Z(n,"name",{value:r,configurable:!0});import{a as w,b as C,I as A,F as V,O as M}from"./FormHelperText-DTLjkOqr.js";import{F as f}from"./formControlState-CP6715v_.js";import{N as q,O as _,f as E,R as N,h as e,m as F,b as x,W as U,b5 as ee,B as y,E as a,t as v,c as j,Q as D,V as ne,a7 as te,g as le,k as ae,S as re,a as I,I as W}from"./index-Bt0ZpNRx.js";import{c as ie}from"./createUniqueId-CrhMwz4x.js";import{C as de}from"./ComponentInfo-BURixQX9.js";import{u as oe,F as ue}from"./useFormControl-Duy8CP55.js";import{S}from"./copyText-B1tfYcM2.js";import"./useControlled-BemOiWdu.js";import"./FormLabel-G3LSVd1X.js";import"./Link-DXJYc0rG.js";import"./PaperCode-D_-fhO8M.js";function se(n){return _("MuiTextField",n)}i(se,"getTextFieldUtilityClass");q("MuiTextField",["root"]);const me=E()({name:"MuiTextField",propDefaults:({set:n})=>n({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:se,slotClasses:()=>({root:["root"]})}),pe={standard:A,filled:V,outlined:M},ce=N(f,{name:"MuiTextField",slot:"Root",overridesResolver:(n,r)=>r.root})({}),l=me.component(i(function({allProps:r,classes:u,otherProps:o,props:t}){const s=ie(()=>t.id),p=i(()=>t.helperText&&s()?`${s()}-helper-text`:void 0,"helperTextId"),T=i(()=>t.label&&s()?`${s()}-label`:void 0,"inputLabelId"),d=i(()=>pe[t.variant],"InputComponent"),g=i(()=>e(ee,F({get $component(){return d()},get"aria-describedby"(){return p()},get autoComplete(){return t.autoComplete},get autoFocus(){return t.autoFocus},get defaultValue(){return t.defaultValue},get fullWidth(){return t.fullWidth},get multiline(){return t.multiline},get name(){return t.name},get rows(){return t.rows},get maxRows(){return t.maxRows},get minRows(){return t.minRows},get type(){return t.type},get value(){return t.value},get id(){return s()},get inputRef(){return t.inputRef},get onBlur(){return t.onBlur},get onChange(){return t.onChange},get onFocus(){return t.onFocus},get placeholder(){return t.placeholder},get inputProps(){return t.inputProps},get size(){return t.size},get notched(){return t.variant==="outlined"&&t.InputLabelProps&&typeof t.InputLabelProps.shrink<"u"?t.InputLabelProps.shrink:void 0},get label(){return t.variant==="outlined"?t.label:void 0}},()=>t.InputProps||{})),"InputElement"),c=i(()=>{const b=t.label;return b!=null&&b!==""&&e(w,F({get for(){return s()},get id(){return T()}},()=>t.InputLabelProps||{},{children:b}))},"label"),h=i(()=>{const b=t.helperText;if(b)return e(C,F({get id(){return p()}},()=>t.FormHelperTextProps||{},{children:b}))},"helperText");return e(ce,F({get class(){return U(u.root,o.class)},get disabled(){return t.disabled},get error(){return t.error},get fullWidth(){return t.fullWidth},get required(){return t.required},get color(){return t.color},get variant(){return t.variant},get size(){return t.size},ownerState:r},o,{get children(){return[x(()=>c()),x(()=>g()),x(()=>h())]}}))},"TextField2"));function Q(){return e(y,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[e(l,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),e(l,{id:"filled-basic",label:"Filled",variant:"filled"}),e(l,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}i(Q,"BasicTextFields");Q.code=`import { Box, TextField } from "@suid/material";

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
`;var $=v("<div>");function G(){return e(y,{component:"form",sx:{maxWidth:764,[`& ${l}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{var n=$();return a(n,e(l,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),a(n,e(l,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),a(n,e(l,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),a(n,e(l,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),a(n,e(l,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),a(n,e(l,{id:"outlined-search",label:"Search field",type:"search"}),null),a(n,e(l,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),n})(),(()=>{var n=$();return a(n,e(l,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),a(n,e(l,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),a(n,e(l,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),a(n,e(l,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),a(n,e(l,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),a(n,e(l,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),a(n,e(l,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),n})(),(()=>{var n=$();return a(n,e(l,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),a(n,e(l,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),a(n,e(l,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),a(n,e(l,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),a(n,e(l,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),a(n,e(l,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),a(n,e(l,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),n})()]}})}i(G,"FormPropsTextFields");G.code=`import { Box, TextField } from "@suid/material";

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
`;var he=v('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),fe=v('<svg><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></svg>',!1,!0);const k=j(()=>[he(),fe()],"Visibility");var be=v('<svg><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"fill=none></svg>',!1,!0),xe=v('<svg><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></svg>',!1,!0);const H=j(()=>[be(),xe()],"VisibilityOff");function ve(n){return _("MuiInputAdornment",n)}i(ve,"getInputAdornmentUtilityClass");const B=q("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var ge=v("<span class=notranslate>&#8203;");const L=E()({name:"MuiInputAdornment",selfPropNames:["classes","children","disablePointerEvents","disableTypography","position","variant"],utilityClass:ve,slotClasses:n=>({root:["root",n.disablePointerEvents&&"disablePointerEvents",n.position&&`position${D(n.position)}`,n.variant,n.hiddenLabel&&"hiddenLabel",n.size&&`size${D(n.size)}`]})}),we=N("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:u}=n;return[r.root,r[`position${D(u.position)}`],u.disablePointerEvents===!0&&r.disablePointerEvents,r[u.variant]]}})(({theme:n,ownerState:r})=>({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active,...r.variant==="filled"&&{[`&.${B.positionStart}&:not(.${B.hiddenLabel})`]:{marginTop:16}},...r.position==="start"&&{marginRight:8},...r.position==="end"&&{marginLeft:8},...r.disablePointerEvents===!0&&{pointerEvents:"none"}})),m=L.defineComponent(i(function(r){const u=te(r),o=L.useThemeProps({props:r}),[,t]=ne(o,["children","class","component","disablePointerEvents","disableTypography","position","variant"]),s=F({component:"div",disablePointerEvents:!1,disableTypography:!1},o),p=oe(),T=i(()=>{let h=o.variant;return h&&p?.variant,p&&!h&&(h=p.variant),h},"variant"),d={get hiddenLabel(){return p?.hiddenLabel},get size(){return p?.size},get disablePointerEvents(){return s.disablePointerEvents},get position(){return o.position},get variant(){return T()}},g=L.useClasses(d);function c(h){const b=le(()=>h.children);return e(re,{get when(){return typeof b()=="string"&&!h.disableTypography},get fallback(){return[x(()=>x(()=>h.position==="start")()?ge():null),x(()=>h.children)]},get children(){return e(ae,{color:"text.secondary",get children(){return b()}})}})}return i(c,"RootChildren"),e(ue.Provider,{value:void 0,get children(){return e(we,F({get as(){return s.component},ownerState:d,get class(){return U(g.root,o.class)},ref:u},t,{get children(){return e(c,{get position(){return o.position},get disableTypography(){return s.disableTypography},get children(){return o.children}})}}))}})},"InputAdornment2"));var z=v("<div>");function J(){const[n,r]=I(!1),u=i(()=>r(!n()),"handleClickShowPassword"),o=i(t=>t.preventDefault(),"handleMouseDownPassword");return e(y,{sx:{textAlign:"center"},get children(){return[(()=>{var t=z();return a(t,e(l,{label:"With normal TextField",id:"outlined-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}}}),null),a(t,e(f,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[e(M,{id:"outlined-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(C,{id:"outlined-weight-helper-text",children:"Weight"})]}}),null),a(t,e(f,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[e(w,{for:"outlined-adornment-password",children:"Password"}),e(M,{id:"outlined-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(W,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:o,edge:"end",get children(){return x(()=>!!n())()?e(H,{}):e(k,{})}})}})},label:"Password"})]}}),null),a(t,e(f,{fullWidth:!0,sx:{m:1},get children(){return[e(w,{for:"outlined-adornment-amount",children:"Amount"}),e(M,{id:"outlined-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})},label:"Amount"})]}}),null),t})(),(()=>{var t=z();return a(t,e(l,{label:"With normal TextField",id:"filled-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}},variant:"filled"}),null),a(t,e(f,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[e(V,{id:"filled-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"filled-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(C,{id:"filled-weight-helper-text",children:"Weight"})]}}),null),a(t,e(f,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[e(w,{for:"filled-adornment-password",children:"Password"}),e(V,{id:"filled-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(W,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:o,edge:"end",get children(){return x(()=>!!n())()?e(H,{}):e(k,{})}})}})}})]}}),null),a(t,e(f,{fullWidth:!0,sx:{m:1},variant:"filled",get children(){return[e(w,{for:"filled-adornment-amount",children:"Amount"}),e(V,{id:"filled-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})}})]}}),null),t})(),(()=>{var t=z();return a(t,e(l,{label:"With normal TextField",id:"standard-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}},variant:"standard"}),null),a(t,e(f,{variant:"standard",sx:{m:1,mt:3,width:"25ch"},get children(){return[e(A,{id:"standard-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(C,{id:"standard-weight-helper-text",children:"Weight"})]}}),null),a(t,e(f,{sx:{m:1,width:"25ch"},variant:"standard",get children(){return[e(w,{for:"standard-adornment-password",children:"Password"}),e(A,{id:"standard-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(W,{"aria-label":"toggle password visibility",onClick:u,onMouseDown:o,get children(){return x(()=>!!n())()?e(H,{}):e(k,{})}})}})}})]}}),null),a(t,e(f,{fullWidth:!0,sx:{m:1},variant:"standard",get children(){return[e(w,{for:"standard-adornment-amount",children:"Amount"}),e(A,{id:"standard-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})}})]}}),null),t})()]}})}i(J,"InputAdornments");J.code=`import { Visibility, VisibilityOff } from "@suid/icons-material";
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
    <Box sx={{ textAlign: "center" }}>
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
`;var R=v("<div>");function K(){return e(y,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{var n=R();return a(n,e(l,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),null),a(n,e(l,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),null),a(n,e(l,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"}),null),n})(),(()=>{var n=R();return a(n,e(l,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),null),a(n,e(l,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),null),a(n,e(l,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"}),null),n})(),(()=>{var n=R();return a(n,e(l,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),null),a(n,e(l,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),null),a(n,e(l,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"}),null),n})()]}})}i(K,"MultilineTextFields");K.code=`import Box from "@suid/material/Box";
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
`;function X(){return e(S,{direction:"row",spacing:3,get children(){return[e(S,{spacing:2,get children(){return[e(l,{id:"outlined-small",label:"Outlined small",variant:"outlined",size:"small"}),e(l,{id:"filled-small",label:"Filled small",variant:"filled",size:"small"}),e(l,{id:"standard-small",label:"Standard small",variant:"standard",size:"small"})]}}),e(S,{spacing:2,get children(){return[e(l,{id:"outlined-medium",label:"Outlined medium",variant:"outlined"}),e(l,{id:"filled-medium",label:"Filled medium",variant:"filled"}),e(l,{id:"standard-medium",label:"Standard medium",variant:"standard"})]}})]}})}i(X,"SizesTextFields");X.code=`import { Stack, TextField } from "@suid/material";

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
`;var P=v("<div>");function O(n){return n.split(" ").map(r=>r.slice(0,1).toUpperCase()+r.slice(1).toLowerCase()).join(" ")}i(O,"capitalizeWords");function Y(){const[n,r]=I(O("Cat in the Hat")),[u,o]=I(""),[t,s]=I(""),[p,T]=I("");return e(y,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[(()=>{var d=P();return a(d,e(l,{id:"outlined-name",label:"Controlled text",get value(){return n()},onChange:(g,c)=>{r(O(c))}}),null),a(d,e(l,{id:"outlined-uncontrolled",label:"Uncontrolled text",defaultValue:"foo"}),null),d})(),(()=>{var d=P();return a(d,e(l,{label:"Controlled date",type:"date",InputLabelProps:{shrink:!0},get value(){return u()},onChange:(g,c)=>o(c),get helperText(){return u()}}),null),a(d,e(l,{label:"Uncontrolled date",type:"date",InputLabelProps:{shrink:!0},defaultValue:"2000-01-01"}),null),d})(),(()=>{var d=P();return a(d,e(l,{label:"Controlled number",type:"number",get value(){return t()},onChange:(g,c)=>s(c),get helperText(){return t()}}),null),a(d,e(l,{label:"Uncontrolled number",type:"number",defaultValue:"0"}),null),d})(),(()=>{var d=P();return a(d,e(l,{label:"Controlled email",type:"email",get value(){return p()},onChange:(g,c)=>T(c),get helperText(){return p()}}),null),a(d,e(l,{label:"Uncontrolled email",type:"email",defaultValue:"info@localhost"}),null),d})()]}})}i(Y,"StateTextFields");Y.code=`import { Box, TextField } from "@suid/material";
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
  const [number, setNumber] = createSignal("");
  const [email, setEmail] = createSignal("");
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
      <div>
        <TextField
          label="Controlled email"
          type="email"
          value={email()}
          onChange={(event, value) => setEmail(value)}
          helperText={email()}
        />
        <TextField
          label="Uncontrolled email"
          type="email"
          defaultValue="info@localhost"
        />
      </div>
    </Box>
  );
}
`;function ke(){return e(de,{get name(){return l.name},docsName:"text-fields",examples:[Q,{title:"Sizes",component:X},{title:"Form props",component:G},{title:"Uncontrolled vs. Controlled",component:Y},{title:"Multiline",component:K},{title:"Adornments",component:J}]})}i(ke,"TextFieldPage");export{ke as default};
