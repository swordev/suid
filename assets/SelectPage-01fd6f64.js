var Le=Object.defineProperty;var a=(l,e)=>Le(l,"name",{value:e,configurable:!0});import{i as Re,I as He,O as z,F as _e,a as f,b as D}from"./FormHelperText-a28fcd50.js";import{f as Ve,F as b}from"./formControlState-a3975f0a.js";import{u as Be}from"./useFormControl-8fcff4a5.js";import{O as ie,P as ue,R as S,Z as J,Q as H,D as Q,p as m,c as n,J as se,S as je,ao as Ue,t as I,I as de,h as M,m as U,x as Ge,al as ce,X as qe,ap as Ke,am as K,o as ze,j as Je,a0 as Qe,a9 as Xe,U as C,g as Ze}from"./ErrorPage-5efa7331.js";import{c as Ye,r as G,B as me,l as en}from"./ListItemText-ac9718cf.js";import{a as nn,M as i}from"./MenuItem-946a06c5.js";import{u as re}from"./useControlled-405fff41.js";import{o as tn}from"./ownerDocument-5bb7a871.js";import{C as ln}from"./ComponentInfo-c5b6ea90.js";import{C as rn}from"./Checkbox-0f453d09.js";import{C as an}from"./Chip-45d16729.js";import"./GlobalStyles-8190e5e5.js";import"./FormLabel-9fa1ab28.js";import"./Paper-b94e5972.js";import"./Popover-41d36d82.js";import"./Grow-39ad1af7.js";import"./Transition-bfcaa0e0.js";import"./Modal-53edb7da.js";import"./Backdrop-9ce7dade.js";import"./Fade-415d50d1.js";import"./TransitionContext-8fdaef14.js";import"./Portal-185692c1.js";import"./ownerWindow-09898c5b.js";import"./debounce-60370e19.js";import"./Link-70328dd1.js";import"./copyText-b89086ce.js";import"./IconButton-807ebc30.js";import"./PaperCode-aa9558c0.js";import"./PageNav-470ce5dc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";import"./SwitchBase-013e4aa4.js";function on(l){return ue("MuiNativeSelect",l)}a(on,"getNativeSelectUtilityClasses");const X=ie("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),un=a(l=>{const e={select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",l.variant&&`icon${H(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"]};return Ue(e,on,l.classes)},"useUtilityClasses"),pe=a(({ownerState:l,theme:e})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{backgroundColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${X.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...l.variant==="filled"&&{"&&&":{paddingRight:32}},...l.variant==="outlined"&&{borderRadius:e.shape.borderRadius,"&:focus":{borderRadius:e.shape.borderRadius},"&&&":{paddingRight:32}}}),"nativeSelectSelectStyles"),sn=S("select",{name:"MuiNativeSelect",slot:"Select",skipProps:J,overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.select,e[r.variant],{[`&.${X.multiple}`]:e.multiple}]}})(pe),ge=a(({ownerState:l,theme:e})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:e.palette.action.active,[`&.${X.disabled}`]:{color:e.palette.action.disabled},...l.open&&{transform:"rotate(180deg)"},...l.variant==="filled"&&{right:7},...l.variant==="outlined"&&{right:7}}),"nativeSelectIconStyles"),dn=S("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${H(r.variant)}`],r.open&&e.iconOpen]}})(ge),cn=a(function(e){const[,r]=Q(e,["class","disabled","IconComponent","inputRef","variant"]),u=m({variant:"standard"},e),o=m(e,{get disabled(){return e.disabled},get variant(){return u.variant}}),s=un(o);return[n(sn,m({ownerState:o,get class(){return se(s.select,e.class)},get disabled(){return e.disabled}},r)),n(je,{get when(){return!e.multiple},get children(){return n(dn,{get as(){return e.IconComponent},ownerState:o,get class(){return s.icon}})}})]},"NativeSelectInput"),mn=I('<svg><path d="M7 10l5 5 5-5z"></path></svg>',4,!0),pn=Ye(()=>mn.cloneNode(!0),"ArrowDropDown");function gn(l){return ue("MuiSelect",l)}a(gn,"getSelectUtilityClasses");const k=ie("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),hn=I('<span class="notranslate">&#8203;</span>',2),ae=de()({name:"MuiSelectInput",selfPropNames:["autoFocus","autoWidth","defaultOpen","disabled","IconComponent","inputRef","MenuProps","multiple","name","native","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","value","variant"],utilityClass:gn,slotClasses:l=>({select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",`icon${H(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"],nativeInput:["nativeInput"]})}),vn=S("div",{name:"MuiSelect",slot:"Select",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[{[`&.${k.select}`]:e.select},{[`&.${k.select}`]:e[r.variant]},{[`&.${k.multiple}`]:e.multiple}]}})(pe,{[`&.${k.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),fn=S("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${H(r.variant)}`],r.open&&e.iconOpen]}})(ge),bn=S("input",{skipProps:J,name:"MuiSelect",slot:"NativeInput",overridesResolver:(l,e)=>e.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function L(l,e){return typeof e=="object"&&e!==null?l===e:String(l)===String(e)}a(L,"areEqualValues");function In(l){return l==null||typeof l=="string"&&!l.trim()}a(In,"isEmpty");const Cn=ae.defineComponent(a(function(e){const r=G(e),[,u]=Q(e,["ref","sx","aria-describedby","aria-label","autoFocus","autoWidth","children","class","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),o=m({MenuProps:{},SelectDisplayProps:{},variant:"standard"},e),[s,A]=re({controlled:()=>e.value,default:()=>e.defaultValue,name:"Select"}),[N,y]=re({controlled:()=>e.open,default:()=>e.defaultOpen,name:"Select"}),x=G(),g=G(),[v,_]=M(null),w=e.open!=null,[V,O]=M(null),ye=a(t=>{g.current=t,_(t)},"handleDisplayRef"),B={nodeName:"INPUT",get node(){return x.current},addEventListener(t,d){if(t!=="input")throw new Error(`Invalid event name: ${t}`);x.current.addEventListener(t,d)},get value(){return s()},set value(t){A(t)},focus(){x.current.focus()}};U(Ge(()=>[v(),e.autoWidth],()=>{e.defaultOpen&&N()&&v()&&!w&&(O(e.autoWidth?null:v().clientWidth),g.current.focus())})),U(()=>{e.autoFocus&&g.current.focus()});let E;U(()=>{if(!e.labelId)return;const t=tn(g.current).getElementById(e.labelId);t&&(E&&t.removeEventListener("click",E),E=a(()=>{getSelection().isCollapsed&&g.current.focus()},"clickHandler"),t.addEventListener("click",E))});const F=a((t,d)=>{t||g.current.focus(),t?e.onOpen&&e.onOpen(d):e.onClose&&e.onClose(d),w||(O(e.autoWidth?null:v().clientWidth),y(t))},"update"),Me=a(t=>{e.disabled||e.readOnly||t.button===0&&(t.preventDefault(),g.current.focus(),F(!0,t))},"handleMouseDown"),Se=a(t=>{F(!1,t)},"handleClose"),xe=ce(()=>e.children),Te=a(t=>{const d=s();if(e.multiple){if(!Array.isArray(d))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");return d.some(p=>L(p,t.props.value))}else return L(d,t.props.value)},"selected"),Pe=qe(xe,t=>{if(K(t,i)){ee(c=>[...c,t.props]),ze(()=>ee(c=>c.filter(T=>T!==t.props)));const d=Je(()=>Te(t)),p=m(t.props,{get"aria-selected"(){return d()},onClick:c=>Ae(c,p,t.props),onKeyUp:c=>{c.key===" "&&c.preventDefault(),typeof t.props.onKeyUp=="function"&&t.props.onKeyUp(c)},role:"option",get selected(){return d()},value:void 0,"data-value":t.props.value});return n(t.Component,p)}else return K(t)?n(t.Component,t.props):t}),Ae=a((t,d,p)=>{let c;const T={props:d},le=e.multiple;if(t.currentTarget.hasAttribute("tabindex")){if(le){c=Array.isArray(s())?s().slice():[];const P=s().indexOf(T.props.value);P===-1?c.push(T.props.value):c.splice(P,1)}else c=T.props.value;if(typeof p.onClick=="function"&&p.onClick(t),s()!==c){const P=new CustomEvent("input");Object.defineProperty(P,"target",{writable:!1,value:{name:d.name,get value(){return c},set value(ke){B.value=ke}}}),x.current.dispatchEvent(P),A(c),typeof d.onChange=="function"&&d.onChange(P,P.target)}le||F(!1,t)}},"handleItemClick"),we=a(t=>{e.readOnly||[" ","ArrowUp","ArrowDown","Enter"].indexOf(t.key)!==-1&&(t.preventDefault(),F(!0,t))},"handleKeyDown"),W=a(()=>v()!==null&&!!N(),"open"),Oe=a(t=>{!W()&&e.onBlur&&(Object.defineProperty(t,"target",{writable:!0,value:{value:s(),name:e.name}}),e.onBlur(t))},"handleBlur"),[Y,ee]=Ke([]),Ne=a(()=>{const t=s();if(Re({value:t})||e.displayEmpty){if(e.renderValue)return e.renderValue(t);if(e.multiple){const d=[];for(const p of Y){if(!Array.isArray(t))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");t.some(c=>L(c,p.value))&&d.push(p.children)}return d.reduce((p,c,T)=>(p.push(c),T<d.length-1&&p.push(", "),p),[])}else for(const d of Y)if(L(t,d.value))return d.children}},"display"),Ee=a(()=>{let t=V();return!e.autoWidth&&w&&v()&&(t=v().clientWidth),t},"menuMinWidth"),Fe=m(()=>o.MenuProps.PaperProps,{style:m({get"min-width"(){const t=Ee();return typeof t=="number"?`${t}px`:void 0}},()=>o.MenuProps.PaperProps!=null?o.MenuProps.PaperProps.style:null)}),We=m({get"aria-labelledby"(){return e.labelId},role:"listbox",disableListWrap:!0},()=>o.MenuProps.MenuListProps),$e=a(()=>typeof e.tabIndex<"u"?e.tabIndex:e.disabled?void 0:0,"tabIndex"),ne=a(()=>o.SelectDisplayProps.id||(e.name?`mui-component-select-${e.name}`:void 0),"buttonId"),$=m(e,{get variant(){return o.variant},get value(){return s()},get open(){return W()}}),j=ae.useClasses($),te=a(()=>{const t=s();return Array.isArray(t)?t.join(","):t},"nativeSelectValue"),De=a(()=>{const t=Ne();return In(t)?hn.cloneNode(!0):t},"displayValue");return[n(vn,m({ref:ye,get tabIndex(){return $e()},role:"button",get["aria-disabled"](){return e.disabled?"true":void 0},get["aria-expanded"](){return W()?"true":"false"},"aria-haspopup":"listbox",get["aria-label"](){return e["aria-label"]},get["aria-labelledby"](){return[e.labelId,ne()].filter(Boolean).join(" ")||void 0},get["aria-describedby"](){return e["aria-describedby"]},onKeyDown:we,onMouseDown:Me,onBlur:Oe,get onFocus(){return e.onFocus}},()=>o.SelectDisplayProps,{ownerState:$,get sx(){return e.sx},get class(){return se(j.select,e.class,o.SelectDisplayProps.class)},get id(){return ne()},get children(){return De()}})),n(bn,m({get value(){return te()},get["data-value"](){return te()},get name(){return e.name},"aria-hidden":!0,ref:t=>{x(t),typeof e.inputRef=="function"&&e.inputRef(B),r(B)},get onChange(){return e.onChange},tabIndex:-1,get disabled(){return e.disabled},get class(){return j.nativeInput},get autofocus(){return e.autoFocus},ownerState:$},u)),n(fn,{get as(){return e.IconComponent},get class(){return j.icon},ownerState:$}),n(nn,m({get id(){return`menu-${e.name||""}`},get anchorEl(){return v()},get open(){return W()},onClose:Se,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},()=>o.MenuProps,{MenuListProps:We,PaperProps:Fe,get children(){return Pe()}}))]},"SelectInput")),q=de()({name:"MuiSelect",selfPropNames:["autoWidth","children","classes","defaultOpen","defaultValue","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onChange","onClose","onOpen","open","renderValue","SelectDisplayProps","value","variant"]}),Z={name:"MuiSelect",overridesResolver:(l,e)=>e.root,skipProps:[...J,"variant"],slot:"Root"},yn=S(He,Z)({}),Mn=S(z,Z)({}),Sn=S(_e,Z)({}),h=q.defineComponent(a(function(e){const r=q.useThemeProps({props:e}),[,u]=Q(r,["autoWidth","children","classes","class","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),o=m({autoWidth:!1,classes:{},defaultOpen:!1,displayEmpty:!1,IconComponent:pn,multiple:!1,native:!1,variant:"outlined"},r),s=a(()=>o.native?cn:Cn,"inputComponent"),A=Be(),N=Ve({props:r,muiFormControl:A,states:["variant"]}),y=a(()=>N.variant||o.variant,"variant"),x=ce(()=>r.input),g=a(()=>{const[O]=x();if(O){if(K(O))return O;throw new Error("Invalid component")}},"inputElement"),v=a(()=>g()?.Component||{standard:yn,outlined:Mn,filled:Sn}[y()],"InputComponent"),_=m(r,{get variant(){return y()},get classes(){return o.classes}}),w=q.useClasses(_),V=m({get children(){return r.children},get IconComponent(){return o.IconComponent},get variant(){return y()},type:void 0,get multiple(){return o.multiple}},()=>o.native?{id:r.id}:{autoWidth:o.autoWidth,defaultOpen:o.defaultOpen,displayEmpty:o.displayEmpty,labelId:r.labelId,MenuProps:r.MenuProps,onClose:r.onClose,onOpen:r.onOpen,open:r.open,renderValue:r.renderValue,SelectDisplayProps:{id:r.id,...r.SelectDisplayProps}},()=>r.inputProps,{get classes(){return r.inputProps?Xe(w,r.inputProps.classes):w}},()=>g()?.props?.inputProps);return n(Qe,m({get $component(){return v()}},()=>g()?.props,{get inputComponent(){return s()},inputProps:V,get notched(){return r.multiple&&r.native&&y()==="outlined"?!0:void 0},get label(){return!g()&&y()==="outlined"?r.label:void 0},get class(){return r.class},get variant(){return y()}},u))},"Select"));function he(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return n(me,{sx:{minWidth:120},get children(){return n(b,{fullWidth:!0,get children(){return[n(f,{id:"demo-simple-select-label",children:"Age"}),n(h,{labelId:"demo-simple-select-label",id:"demo-simple-select",get value(){return l()},label:"Age",onChange:r,get children(){return[n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}})]}})}})}a(he,"BasicSelect");he.code=`import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";

export default function BasicSelect() {
  const [age, setAge] = createSignal("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age()}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
`;const xn=I("<div></div>",2),Tn=48,Pn=8,An={PaperProps:{style:{"max-height":`${Tn*4.5+Pn}px`,width:`${250}px`}}},wn=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function ve(){const[l,e]=M([]),r=a(u=>{const{target:{value:o}}=u;e(typeof o=="string"?o.split(","):o)},"handleChange");return(()=>{const u=xn.cloneNode(!0);return C(u,n(b,{sx:{m:1,width:300},get children(){return[n(f,{id:"demo-multiple-checkbox-label",children:"Tag"}),n(h,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,label:"Tag",get value(){return l()},onChange:r,get input(){return n(z,{label:"Tag"})},renderValue:o=>o.join(", "),MenuProps:An,get children(){return wn.map(o=>n(i,{value:o,get children(){return[n(rn,{get checked(){return l().indexOf(o)>-1}}),n(en,{primary:o})]}}))}})]}})),u})()}a(ve,"MultipleSelectCheckmarks");ve.code=`import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      "max-height": \`\${ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP}px\`,
      width: \`\${250}px\`,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = createSignal<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          label="Tag"
          value={personName()}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem value={name}>
              <Checkbox checked={personName().indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`;const On=I("<div></div>",2),Nn=48,En=8,Fn={PaperProps:{style:{"max-height":`${Nn*4.5+En}px`,width:`${250}px`}}},Wn=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function $n(l,e,r){return{"font-weight":e.indexOf(l)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}a($n,"getStyles");function fe(){const l=Ze(),[e,r]=M([]),u=a(o=>{const{target:{value:s}}=o;r(typeof s=="string"?s.split(","):s)},"handleChange");return(()=>{const o=On.cloneNode(!0);return C(o,n(b,{sx:{m:1,width:300},get children(){return[n(f,{id:"demo-multiple-chip-label",children:"Chip"}),n(h,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,get value(){return e()},onChange:u,get input(){return n(z,{id:"select-multiple-chip",label:"Chip"})},renderValue:s=>n(me,{sx:{display:"flex",flexWrap:"wrap",gap:.5},get children(){return s.map(A=>n(an,{label:A}))}}),MenuProps:Fn,get children(){return Wn.map(s=>n(i,{value:s,get style(){return $n(s,e(),l)},children:s}))}})]}})),o})()}a(fe,"MultipleSelectChip");fe.code=`import Box from "@suid/material/Box";
import Chip from "@suid/material/Chip";
import FormControl from "@suid/material/FormControl";
import InputLabel from "@suid/material/InputLabel";
import MenuItem from "@suid/material/MenuItem";
import OutlinedInput from "@suid/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@suid/material/Select";
import { Theme, useTheme } from "@suid/material/styles";
import { createSignal } from "solid-js";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      "max-height": \`\${ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP}px\`,
      width: \`\${250}px\`,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    "font-weight":
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = createSignal<string[]>([]);
  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 300,
        }}
      >
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName()}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem value={name} style={getStyles(name, personName(), theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`;const Dn=I("<em>None</em>",2),kn=I("<div></div>",2);function be(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{const u=kn.cloneNode(!0);return C(u,n(b,{sx:{m:1,minWidth:80},get children(){return[n(f,{id:"demo-simple-select-autowidth-label",children:"Age"}),n(h,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",get value(){return l()},onChange:r,autoWidth:!0,label:"Age",get children(){return[n(i,{value:"",get children(){return Dn.cloneNode(!0)}}),n(i,{value:10,children:"Twenty"}),n(i,{value:21,children:"Twenty one"}),n(i,{value:22,children:"Twenty one and a half"})]}})]}})),u})()}a(be,"SelectAutoWidth");be.code=`import { InputLabel, MenuItem, FormControl, Select } from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";

export default function SelectAutoWidth() {
  const [age, setAge] = createSignal("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 80,
        }}
      >
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age()}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
`;const R=I("<em>None</em>",2),Ln=I("<div></div>",2);function Ie(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{const u=Ln.cloneNode(!0);return C(u,n(b,{sx:{m:1,minWidth:120},disabled:!0,get children(){return[n(f,{id:"demo-simple-select-disabled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",get value(){return l()},label:"Age",onChange:r,get children(){return[n(i,{value:"",get children(){return R.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(D,{children:"Disabled"})]}}),null),C(u,n(b,{sx:{m:1,minWidth:120},error:!0,get children(){return[n(f,{id:"demo-simple-select-error-label",children:"Age"}),n(h,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",get value(){return l()},label:"Age",onChange:r,renderValue:o=>`⚠️ - ${o}`,get children(){return[n(i,{value:"",get children(){return R.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(D,{children:"Error"})]}}),null),C(u,n(b,{sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-readonly-label",children:"Age"}),n(h,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",get value(){return l()},label:"Age",onChange:r,inputProps:{readOnly:!0},get children(){return[n(i,{value:"",get children(){return R.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(D,{children:"Read only"})]}}),null),C(u,n(b,{required:!0,sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-required-label",children:"Age"}),n(h,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",get value(){return l()},label:"Age *",onChange:r,get children(){return[n(i,{value:"",get children(){return R.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(D,{children:"Required"})]}}),null),u})()}a(Ie,"SelectOtherProps");Ie.code=`import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";

export default function SelectOtherProps() {
  const [age, setAge] = createSignal("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
        }}
        disabled
      >
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age()}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
        }}
        error
      >
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age()}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => \`⚠️ - \${value}\`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
        }}
      >
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age()}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl
        required
        sx={{
          m: 1,
          minWidth: 120,
        }}
      >
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age()}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
`;const oe=I("<em>None</em>",2),Rn=I("<div></div>",2);function Ce(){const[l,e]=M("10"),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{const u=Rn.cloneNode(!0);return C(u,n(b,{variant:"standard",sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-standard-label",children:"Age"}),n(h,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",get value(){return l()},onChange:r,label:"Age",get children(){return[n(i,{value:"",get children(){return oe.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}})]}}),null),C(u,n(b,{variant:"filled",sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-filled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",get value(){return l()},onChange:r,get children(){return[n(i,{value:"",get children(){return oe.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}})]}}),null),u})()}a(Ce,"SelectVariants");Ce.code=`import { FormControl, InputLabel, MenuItem, Select } from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";

export default function SelectVariants() {
  const [age, setAge] = createSignal("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: 120,
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age()}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="filled"
        sx={{
          m: 1,
          minWidth: 120,
        }}
      >
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age()}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
`;function It(){return n(ln,{get name(){return h.name},examples:[he,Ce,be,Ie,ve,fe]})}a(It,"SelectPage");export{It as default};
