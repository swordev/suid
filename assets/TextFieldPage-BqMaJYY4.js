var G=Object.defineProperty;var r=(e,i)=>G(e,"name",{value:i,configurable:!0});import{T as t,O as I,F as P,I as b,a as C,b as A}from"./TextField-DN0w82us.js";import{C as J}from"./ComponentInfo-Cp9In596.js";import{h as n,B as F,E as l,t as h,c as _,N as K,O as X,f as Y,Q as L,R as Z,V as nn,m as O,W as en,a6 as tn,g as ln,b as x,k as an,S as rn,a as w,I as V}from"./index-QA7pP0xH.js";import{u as dn,F as on}from"./useFormControl-DoPL-SAb.js";import{F as c}from"./formControlState-OuYZ52Nq.js";import{S as M}from"./copyText-DYDM2w-T.js";import"./useControlled-WgeRQQeO.js";import"./FormLabel-DbEb0ic5.js";import"./createUniqueId-ZMqSdnLt.js";import"./Link-BRU1W-2I.js";import"./PaperCode-2wa1Y67L.js";function q(){return n(F,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[n(t,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),n(t,{id:"filled-basic",label:"Filled",variant:"filled"}),n(t,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}r(q,"BasicTextFields");q.code=`import { Box, TextField } from "@suid/material";

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
`;var S=h("<div>");function E(){return n(F,{component:"form",sx:{maxWidth:764,[`& ${t}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{var e=S();return l(e,n(t,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),l(e,n(t,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),l(e,n(t,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),l(e,n(t,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),l(e,n(t,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),l(e,n(t,{id:"outlined-search",label:"Search field",type:"search"}),null),l(e,n(t,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),e})(),(()=>{var e=S();return l(e,n(t,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),l(e,n(t,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),l(e,n(t,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),l(e,n(t,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),l(e,n(t,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),l(e,n(t,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),l(e,n(t,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),e})(),(()=>{var e=S();return l(e,n(t,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),l(e,n(t,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),l(e,n(t,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),l(e,n(t,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),l(e,n(t,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),l(e,n(t,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),l(e,n(t,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),e})()]}})}r(E,"FormPropsTextFields");E.code=`import { Box, TextField } from "@suid/material";

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
`;var sn=h('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),un=h('<svg><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></svg>',!1,!0);const W=_(()=>[sn(),un()],"Visibility");var mn=h('<svg><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"fill=none></svg>',!1,!0),pn=h('<svg><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></svg>',!1,!0);const k=_(()=>[mn(),pn()],"VisibilityOff");function cn(e){return X("MuiInputAdornment",e)}r(cn,"getInputAdornmentUtilityClass");const B=K("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var hn=h("<span class=notranslate>&#8203;");const $=Y()({name:"MuiInputAdornment",selfPropNames:["classes","children","disablePointerEvents","disableTypography","position","variant"],utilityClass:cn,slotClasses:r(e=>({root:["root",e.disablePointerEvents&&"disablePointerEvents",e.position&&`position${L(e.position)}`,e.variant,e.hiddenLabel&&"hiddenLabel",e.size&&`size${L(e.size)}`]}),"slotClasses")}),fn=Z("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:r((e,i)=>{const{ownerState:s}=e;return[i.root,i[`position${L(s.position)}`],s.disablePointerEvents===!0&&i.disablePointerEvents,i[s.variant]]},"overridesResolver")})(({theme:e,ownerState:i})=>({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active,...i.variant==="filled"&&{[`&.${B.positionStart}&:not(.${B.hiddenLabel})`]:{marginTop:16}},...i.position==="start"&&{marginRight:8},...i.position==="end"&&{marginLeft:8},...i.disablePointerEvents===!0&&{pointerEvents:"none"}})),u=$.defineComponent(r(function(i){const s=tn(i),o=$.useThemeProps({props:i}),[,a]=nn(o,["children","class","component","disablePointerEvents","disableTypography","position","variant"]),v=O({component:"div",disablePointerEvents:!1,disableTypography:!1},o),f=dn(),y=r(()=>{let p=o.variant;return p&&f?.variant,f&&!p&&(p=f.variant),p},"variant"),d={get hiddenLabel(){return f?.hiddenLabel},get size(){return f?.size},get disablePointerEvents(){return v.disablePointerEvents},get position(){return o.position},get variant(){return y()}},g=$.useClasses(d);function m(p){const z=ln(()=>p.children);return n(rn,{get when(){return typeof z()=="string"&&!p.disableTypography},get fallback(){return[x(()=>x(()=>p.position==="start")()?hn():null),x(()=>p.children)]},get children(){return n(an,{color:"text.secondary",get children(){return z()}})}})}return r(m,"RootChildren"),n(on.Provider,{value:void 0,get children(){return n(fn,O({get as(){return v.component},ownerState:d,get class(){return en(g.root,o.class)},ref:s},a,{get children(){return n(m,{get position(){return o.position},get disableTypography(){return v.disableTypography},get children(){return o.children}})}}))}})},"InputAdornment2"));var H=h("<div>");function N(){const[e,i]=w(!1),s=r(()=>i(!e()),"handleClickShowPassword"),o=r(a=>a.preventDefault(),"handleMouseDownPassword");return n(F,{sx:{textAlign:"center"},get children(){return[(()=>{var a=H();return l(a,n(t,{label:"With normal TextField",id:"outlined-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:n(u,{position:"start",children:"kg"})}}}),null),l(a,n(c,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[n(I,{id:"outlined-adornment-weight",get endAdornment(){return n(u,{position:"end",children:"kg"})},"aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}}),n(P,{id:"outlined-weight-helper-text",children:"Weight"})]}}),null),l(a,n(c,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[n(b,{for:"outlined-adornment-password",children:"Password"}),n(I,{id:"outlined-adornment-password",get type(){return e()?"text":"password"},get endAdornment(){return n(u,{position:"end",get children(){return n(V,{"aria-label":"toggle password visibility",onClick:s,onMouseDown:o,edge:"end",get children(){return x(()=>!!e())()?n(k,{}):n(W,{})}})}})},label:"Password"})]}}),null),l(a,n(c,{fullWidth:!0,sx:{m:1},get children(){return[n(b,{for:"outlined-adornment-amount",children:"Amount"}),n(I,{id:"outlined-adornment-amount",get startAdornment(){return n(u,{position:"start",children:"$"})},label:"Amount"})]}}),null),a})(),(()=>{var a=H();return l(a,n(t,{label:"With normal TextField",id:"filled-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:n(u,{position:"start",children:"kg"})}},variant:"filled"}),null),l(a,n(c,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[n(C,{id:"filled-adornment-weight",get endAdornment(){return n(u,{position:"end",children:"kg"})},"aria-describedby":"filled-weight-helper-text",inputProps:{"aria-label":"weight"}}),n(P,{id:"filled-weight-helper-text",children:"Weight"})]}}),null),l(a,n(c,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[n(b,{for:"filled-adornment-password",children:"Password"}),n(C,{id:"filled-adornment-password",get type(){return e()?"text":"password"},get endAdornment(){return n(u,{position:"end",get children(){return n(V,{"aria-label":"toggle password visibility",onClick:s,onMouseDown:o,edge:"end",get children(){return x(()=>!!e())()?n(k,{}):n(W,{})}})}})}})]}}),null),l(a,n(c,{fullWidth:!0,sx:{m:1},variant:"filled",get children(){return[n(b,{for:"filled-adornment-amount",children:"Amount"}),n(C,{id:"filled-adornment-amount",get startAdornment(){return n(u,{position:"start",children:"$"})}})]}}),null),a})(),(()=>{var a=H();return l(a,n(t,{label:"With normal TextField",id:"standard-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:n(u,{position:"start",children:"kg"})}},variant:"standard"}),null),l(a,n(c,{variant:"standard",sx:{m:1,mt:3,width:"25ch"},get children(){return[n(A,{id:"standard-adornment-weight",get endAdornment(){return n(u,{position:"end",children:"kg"})},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),n(P,{id:"standard-weight-helper-text",children:"Weight"})]}}),null),l(a,n(c,{sx:{m:1,width:"25ch"},variant:"standard",get children(){return[n(b,{for:"standard-adornment-password",children:"Password"}),n(A,{id:"standard-adornment-password",get type(){return e()?"text":"password"},get endAdornment(){return n(u,{position:"end",get children(){return n(V,{"aria-label":"toggle password visibility",onClick:s,onMouseDown:o,get children(){return x(()=>!!e())()?n(k,{}):n(W,{})}})}})}})]}}),null),l(a,n(c,{fullWidth:!0,sx:{m:1},variant:"standard",get children(){return[n(b,{for:"standard-adornment-amount",children:"Amount"}),n(A,{id:"standard-adornment-amount",get startAdornment(){return n(u,{position:"start",children:"$"})}})]}}),null),a})()]}})}r(N,"InputAdornments");N.code=`import { Visibility, VisibilityOff } from "@suid/icons-material";
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
`;var D=h("<div>");function U(){return n(F,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{var e=D();return l(e,n(t,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),null),l(e,n(t,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),null),l(e,n(t,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"}),null),e})(),(()=>{var e=D();return l(e,n(t,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),null),l(e,n(t,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),null),l(e,n(t,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"}),null),e})(),(()=>{var e=D();return l(e,n(t,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),null),l(e,n(t,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),null),l(e,n(t,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"}),null),e})()]}})}r(U,"MultilineTextFields");U.code=`import Box from "@suid/material/Box";
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
`;function j(){return n(M,{direction:"row",spacing:3,get children(){return[n(M,{spacing:2,get children(){return[n(t,{id:"outlined-small",label:"Outlined small",variant:"outlined",size:"small"}),n(t,{id:"filled-small",label:"Filled small",variant:"filled",size:"small"}),n(t,{id:"standard-small",label:"Standard small",variant:"standard",size:"small"})]}}),n(M,{spacing:2,get children(){return[n(t,{id:"outlined-medium",label:"Outlined medium",variant:"outlined"}),n(t,{id:"filled-medium",label:"Filled medium",variant:"filled"}),n(t,{id:"standard-medium",label:"Standard medium",variant:"standard"})]}})]}})}r(j,"SizesTextFields");j.code=`import { Stack, TextField } from "@suid/material";

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
`;var T=h("<div>");function R(e){return e.split(" ").map(i=>i.slice(0,1).toUpperCase()+i.slice(1).toLowerCase()).join(" ")}r(R,"capitalizeWords");function Q(){const[e,i]=w(R("Cat in the Hat")),[s,o]=w(""),[a,v]=w(""),[f,y]=w("");return n(F,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[(()=>{var d=T();return l(d,n(t,{id:"outlined-name",label:"Controlled text",get value(){return e()},onChange:r((g,m)=>{i(R(m))},"onChange")}),null),l(d,n(t,{id:"outlined-uncontrolled",label:"Uncontrolled text",defaultValue:"foo"}),null),d})(),(()=>{var d=T();return l(d,n(t,{label:"Controlled date",type:"date",InputLabelProps:{shrink:!0},get value(){return s()},onChange:r((g,m)=>o(m),"onChange"),get helperText(){return s()}}),null),l(d,n(t,{label:"Uncontrolled date",type:"date",InputLabelProps:{shrink:!0},defaultValue:"2000-01-01"}),null),d})(),(()=>{var d=T();return l(d,n(t,{label:"Controlled number",type:"number",get value(){return a()},onChange:r((g,m)=>v(m),"onChange"),get helperText(){return a()}}),null),l(d,n(t,{label:"Uncontrolled number",type:"number",defaultValue:"0"}),null),d})(),(()=>{var d=T();return l(d,n(t,{label:"Controlled email",type:"email",get value(){return f()},onChange:r((g,m)=>y(m),"onChange"),get helperText(){return f()}}),null),l(d,n(t,{label:"Uncontrolled email",type:"email",defaultValue:"info@localhost"}),null),d})()]}})}r(Q,"StateTextFields");Q.code=`import { Box, TextField } from "@suid/material";
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
`;function Vn(){return n(J,{get name(){return t.name},docsName:"text-fields",examples:[q,{title:"Sizes",component:j},{title:"Form props",component:E},{title:"Uncontrolled vs. Controlled",component:Q},{title:"Multiline",component:U},{title:"Adornments",component:N}]})}r(Vn,"TextFieldPage");export{Vn as default};
