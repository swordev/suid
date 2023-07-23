var ee=Object.defineProperty;var a=(n,r)=>ee(n,"name",{value:r,configurable:!0});import{a as x,b as F,I as T,F as I,O as P}from"./FormHelperText-9b829845.js";import{F as c}from"./formControlState-b4e35041.js";import{r as q,s as _,v as E,w as N,d as e,m as g,p as f,x as U,aX as ne,B as v,H as i,t as b,c as j,O as z,R as te,W as le,V as ie,T as re,S as ae,a as R,I as V}from"./index-c0a494da.js";import{c as de}from"./createUniqueId-196effd5.js";import{C as oe}from"./ComponentInfo-d2f520ee.js";import{u as se,F as ue}from"./useFormControl-2bba35c8.js";import{S as W}from"./copyText-00df5405.js";import"./useControlled-c404a957.js";import"./FormLabel-60694341.js";import"./Link-0353f082.js";import"./PaperCode-95a56ad4.js";function me(n){return _("MuiTextField",n)}a(me,"getTextFieldUtilityClass");q("MuiTextField",["root"]);const pe=E()({name:"MuiTextField",propDefaults:({set:n})=>n({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:me,slotClasses:()=>({root:["root"]})}),ce={standard:T,filled:I,outlined:P},he=N(c,{name:"MuiTextField",slot:"Root",overridesResolver:(n,r)=>r.root})({}),l=pe.component(a(function({allProps:r,classes:o,otherProps:d,props:t}){const s=de(()=>t.id),u=a(()=>t.helperText&&s()?`${s()}-helper-text`:void 0,"helperTextId"),y=a(()=>t.label&&s()?`${s()}-label`:void 0,"inputLabelId"),w=a(()=>ce[t.variant],"InputComponent"),C=a(()=>e(ne,g({get $component(){return w()},get["aria-describedby"](){return u()},get autoComplete(){return t.autoComplete},get autoFocus(){return t.autoFocus},get defaultValue(){return t.defaultValue},get fullWidth(){return t.fullWidth},get multiline(){return t.multiline},get name(){return t.name},get rows(){return t.rows},get maxRows(){return t.maxRows},get minRows(){return t.minRows},get type(){return t.type},get value(){return t.value},get id(){return s()},get inputRef(){return t.inputRef},get onBlur(){return t.onBlur},get onChange(){return t.onChange},get onFocus(){return t.onFocus},get placeholder(){return t.placeholder},get inputProps(){return t.inputProps},get size(){return t.size},get notched(){return t.variant==="outlined"&&t.InputLabelProps&&typeof t.InputLabelProps.shrink<"u"?t.InputLabelProps.shrink:void 0},get label(){return t.variant==="outlined"?t.label:void 0}},()=>t.InputProps||{})),"InputElement"),A=a(()=>{const h=t.label;return h!=null&&h!==""&&e(x,g({get for(){return s()},get id(){return y()}},()=>t.InputLabelProps||{},{children:h}))},"label"),p=a(()=>{const h=t.helperText;if(h)return e(F,g({get id(){return u()}},()=>t.FormHelperTextProps||{},{children:h}))},"helperText");return e(he,g({get class(){return U(o.root,d.class)},get disabled(){return t.disabled},get error(){return t.error},get fullWidth(){return t.fullWidth},get required(){return t.required},get color(){return t.color},get variant(){return t.variant},get size(){return t.size},ownerState:r},d,{get children(){return[f(()=>A()),f(()=>C()),f(()=>p())]}}))},"TextField"));function X(){return e(v,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[e(l,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),e(l,{id:"filled-basic",label:"Filled",variant:"filled"}),e(l,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}a(X,"BasicTextFields");X.code=`import { Box, TextField } from "@suid/material";

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
`;const M=b("<div>");function G(){return e(v,{component:"form",sx:{maxWidth:764,[`& ${l}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const n=M();return i(n,e(l,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),i(n,e(l,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),i(n,e(l,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),i(n,e(l,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),i(n,e(l,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),i(n,e(l,{id:"outlined-search",label:"Search field",type:"search"}),null),i(n,e(l,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),n})(),(()=>{const n=M();return i(n,e(l,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),i(n,e(l,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),i(n,e(l,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),i(n,e(l,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),i(n,e(l,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),i(n,e(l,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),i(n,e(l,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),n})(),(()=>{const n=M();return i(n,e(l,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),i(n,e(l,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),i(n,e(l,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),i(n,e(l,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),i(n,e(l,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),i(n,e(l,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),i(n,e(l,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),n})()]}})}a(G,"FormPropsTextFields");G.code=`import { Box, TextField } from "@suid/material";

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
`;const fe=b('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),be=b('<svg><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></svg>',!1,!0),S=j(()=>[fe(),be()],"Visibility"),xe=b('<svg><path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"></svg>',!1,!0),ge=b('<svg><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></svg>',!1,!0),$=j(()=>[xe(),ge()],"VisibilityOff");function ve(n){return _("MuiInputAdornment",n)}a(ve,"getInputAdornmentUtilityClass");const D=q("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),we=b('<span class="notranslate">&#8203;'),k=E()({name:"MuiInputAdornment",selfPropNames:["classes","children","disablePointerEvents","disableTypography","position","variant"],utilityClass:ve,slotClasses:n=>({root:["root",n.disablePointerEvents&&"disablePointerEvents",n.position&&`position${z(n.position)}`,n.variant,n.hiddenLabel&&"hiddenLabel",n.size&&`size${z(n.size)}`]})}),Fe=N("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:o}=n;return[r.root,r[`position${z(o.position)}`],o.disablePointerEvents===!0&&r.disablePointerEvents,r[o.variant]]}})(({theme:n,ownerState:r})=>({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active,...r.variant==="filled"&&{[`&.${D.positionStart}&:not(.${D.hiddenLabel})`]:{marginTop:16}},...r.position==="start"&&{marginRight:8},...r.position==="end"&&{marginLeft:8},...r.disablePointerEvents===!0&&{pointerEvents:"none"}})),m=k.defineComponent(a(function(r){const o=le(r),d=k.useThemeProps({props:r}),[,t]=te(d,["children","class","component","disablePointerEvents","disableTypography","position","variant"]),s=g({component:"div",disablePointerEvents:!1,disableTypography:!1},d),u=se(),y=a(()=>{let p=d.variant;return p&&u?.variant,u&&!p&&(p=u.variant),p},"variant"),w={get hiddenLabel(){return u?.hiddenLabel},get size(){return u?.size},get disablePointerEvents(){return s.disablePointerEvents},get position(){return d.position},get variant(){return y()}},C=k.useClasses(w);function A(p){const h=ie(()=>p.children);return e(ae,{get when(){return typeof h()=="string"&&!p.disableTypography},get fallback(){return[f((()=>{const Z=f(()=>p.position==="start");return()=>Z()?we():null})()),f(()=>p.children)]},get children(){return e(re,{color:"text.secondary",get children(){return h()}})}})}return a(A,"RootChildren"),e(ue.Provider,{value:void 0,get children(){return e(Fe,g({get as(){return s.component},ownerState:w,get class(){return U(C.root,d.class)},ref:o},t,{get children(){return e(A,{get position(){return d.position},get disableTypography(){return s.disableTypography},get children(){return d.children}})}}))}})},"InputAdornment")),H=b("<div>");function J(){const[n,r]=R(!1),o=a(()=>r(!n()),"handleClickShowPassword"),d=a(t=>t.preventDefault(),"handleMouseDownPassword");return e(v,{sx:{display:"flex",flexWrap:"wrap",textAlign:"center"},get children(){return[(()=>{const t=H();return i(t,e(l,{label:"With normal TextField",id:"outlined-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}}}),null),i(t,e(c,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[e(P,{id:"outlined-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(F,{id:"outlined-weight-helper-text",children:"Weight"})]}}),null),i(t,e(c,{sx:{m:1,width:"25ch"},variant:"outlined",get children(){return[e(x,{for:"outlined-adornment-password",children:"Password"}),e(P,{id:"outlined-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(V,{"aria-label":"toggle password visibility",onClick:o,onMouseDown:d,edge:"end",get children(){return f(()=>!!n())()?e($,{}):e(S,{})}})}})},label:"Password"})]}}),null),i(t,e(c,{fullWidth:!0,sx:{m:1},get children(){return[e(x,{for:"outlined-adornment-amount",children:"Amount"}),e(P,{id:"outlined-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})},label:"Amount"})]}}),null),t})(),(()=>{const t=H();return i(t,e(l,{label:"With normal TextField",id:"filled-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}},variant:"filled"}),null),i(t,e(c,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[e(I,{id:"filled-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"filled-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(F,{id:"filled-weight-helper-text",children:"Weight"})]}}),null),i(t,e(c,{sx:{m:1,width:"25ch"},variant:"filled",get children(){return[e(x,{for:"filled-adornment-password",children:"Password"}),e(I,{id:"filled-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(V,{"aria-label":"toggle password visibility",onClick:o,onMouseDown:d,edge:"end",get children(){return f(()=>!!n())()?e($,{}):e(S,{})}})}})}})]}}),null),i(t,e(c,{fullWidth:!0,sx:{m:1},variant:"filled",get children(){return[e(x,{for:"filled-adornment-amount",children:"Amount"}),e(I,{id:"filled-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})}})]}}),null),t})(),(()=>{const t=H();return i(t,e(l,{label:"With normal TextField",id:"standard-start-adornment",sx:{m:1,width:"25ch"},get InputProps(){return{startAdornment:e(m,{position:"start",children:"kg"})}},variant:"standard"}),null),i(t,e(c,{variant:"standard",sx:{m:1,mt:3,width:"25ch"},get children(){return[e(T,{id:"standard-adornment-weight",get endAdornment(){return e(m,{position:"end",children:"kg"})},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),e(F,{id:"standard-weight-helper-text",children:"Weight"})]}}),null),i(t,e(c,{sx:{m:1,width:"25ch"},variant:"standard",get children(){return[e(x,{for:"standard-adornment-password",children:"Password"}),e(T,{id:"standard-adornment-password",get type(){return n()?"text":"password"},get endAdornment(){return e(m,{position:"end",get children(){return e(V,{"aria-label":"toggle password visibility",onClick:o,onMouseDown:d,get children(){return f(()=>!!n())()?e($,{}):e(S,{})}})}})}})]}}),null),i(t,e(c,{fullWidth:!0,sx:{m:1},variant:"standard",get children(){return[e(x,{for:"standard-adornment-amount",children:"Amount"}),e(T,{id:"standard-adornment-amount",get startAdornment(){return e(m,{position:"start",children:"$"})}})]}}),null),t})()]}})}a(J,"InputAdornments");J.code=`import { Visibility, VisibilityOff } from "@suid/icons-material";
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
`;const L=b("<div>");function K(){return e(v,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const n=L();return i(n,e(l,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),null),i(n,e(l,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),null),i(n,e(l,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"}),null),n})(),(()=>{const n=L();return i(n,e(l,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),null),i(n,e(l,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),null),i(n,e(l,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"}),null),n})(),(()=>{const n=L();return i(n,e(l,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),null),i(n,e(l,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),null),i(n,e(l,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"}),null),n})()]}})}a(K,"MultilineTextFields");K.code=`import Box from "@suid/material/Box";
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
`;function Q(){return e(W,{direction:"row",spacing:3,get children(){return[e(W,{spacing:2,get children(){return[e(l,{id:"outlined-small",label:"Outlined small",variant:"outlined",size:"small"}),e(l,{id:"filled-small",label:"Filled small",variant:"filled",size:"small"}),e(l,{id:"standard-small",label:"Standard small",variant:"standard",size:"small"})]}}),e(W,{spacing:2,get children(){return[e(l,{id:"outlined-medium",label:"Outlined medium",variant:"outlined"}),e(l,{id:"filled-medium",label:"Filled medium",variant:"filled"}),e(l,{id:"standard-medium",label:"Standard medium",variant:"standard"})]}})]}})}a(Q,"SizesTextFields");Q.code=`import { Stack, TextField } from "@suid/material";

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
`;const B=b("<div>");function O(n){return n.split(" ").map(r=>r.slice(0,1).toUpperCase()+r.slice(1).toLowerCase()).join(" ")}a(O,"capitalizeWords");function Y(){const[n,r]=R(O("Cat in the Hat")),[o,d]=R("");return e(v,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[(()=>{const t=B();return i(t,e(l,{id:"outlined-name",label:"Controlled text",get value(){return n()},onChange:(s,u)=>{r(O(u))}}),null),i(t,e(l,{id:"outlined-uncontrolled",label:"Uncontrolled text",defaultValue:"foo"}),null),t})(),(()=>{const t=B();return i(t,e(l,{label:"Controlled date",type:"date",InputLabelProps:{shrink:!0},get value(){return o()},onChange:(s,u)=>d(u),get helperText(){return o()}}),null),i(t,e(l,{label:"Uncontrolled date",type:"date",InputLabelProps:{shrink:!0},defaultValue:"2000-01-01"}),null),t})()]}})}a(Y,"StateTextFields");Y.code=`import { Box, TextField } from "@suid/material";
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
    </Box>
  );
}
`;function He(){return e(oe,{get name(){return l.name},docsName:"text-fields",examples:[X,{title:"Sizes",component:Q},{title:"Form props",component:G},{title:"Uncontrolled vs. Controlled",component:Y},{title:"Multiline",component:K},{title:"Adornments",component:J}]})}a(He,"TextFieldPage");export{He as default};
