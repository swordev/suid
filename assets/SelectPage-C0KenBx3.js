var Re=Object.defineProperty;var a=(l,e)=>Re(l,"name",{value:e,configurable:!0});import{i as He,b as _e,O as Q,a as Be,I as b,T as je,F as L}from"./TextField-CTEuvImz.js";import{f as Ge,F as f}from"./formControlState-CcetVVbl.js";import{u as Ue}from"./useFormControl-BUZ040gn.js";import{N as se,O as de,R as x,aL as J,Q as R,V as X,m,h as n,W as ce,S as qe,b3 as Ke,c as ze,t as C,f as me,a as y,d as G,aN as pe,aO as Qe,b4 as Je,aP as K,o as Xe,b as z,a6 as U,a8 as Ye,a9 as Ze,b5 as en,ay as nn,B as Y,aH as tn,E as S,ah as ln,u as an}from"./index-Bo6RAevH.js";import{a as rn,M as u}from"./MenuItem-oMCvaZPI.js";import{u as ie}from"./useControlled-DLu5nB0p.js";import{C as on}from"./ComponentInfo-BSVXmdCc.js";import{S as un}from"./copyText-Bu12eD7D.js";import{C as sn}from"./Checkbox-BFATMoN5.js";import{C as dn}from"./Chip-CwELoFsb.js";import"./FormLabel-CSNkhk5z.js";import"./createUniqueId-Ez0nA0Z6.js";import"./Popover-GujLE3sy.js";import"./Grow-BLraMvOo.js";import"./Link-DW3jl7Y4.js";import"./PaperCode-Bp4T0X-x.js";import"./SwitchBase-kGAYSRDs.js";function cn(l){return de("MuiNativeSelect",l)}a(cn,"getNativeSelectUtilityClasses");const Z=se("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),mn=a(l=>{const e={select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",l.variant&&`icon${R(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"]};return Ke(e,cn,l.classes)},"useUtilityClasses"),ge=a(({ownerState:l,theme:e})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{backgroundColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${Z.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...l.variant==="filled"&&{"&&&":{paddingRight:32}},...l.variant==="outlined"&&{borderRadius:e.shape.borderRadius,"&:focus":{borderRadius:e.shape.borderRadius},"&&&":{paddingRight:32}}}),"nativeSelectSelectStyles"),pn=x("select",{name:"MuiNativeSelect",slot:"Select",skipProps:J,overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[e.select,e[r.variant],{[`&.${Z.multiple}`]:e.multiple}]},"overridesResolver")})(ge),he=a(({ownerState:l,theme:e})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:e.palette.action.active,[`&.${Z.disabled}`]:{color:e.palette.action.disabled},...l.open&&{transform:"rotate(180deg)"},...l.variant==="filled"&&{right:7},...l.variant==="outlined"&&{right:7}}),"nativeSelectIconStyles"),gn=x("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${R(r.variant)}`],r.open&&e.iconOpen]},"overridesResolver")})(he),hn=a(function(e){const[,r]=X(e,["class","disabled","IconComponent","inputRef","variant"]),o=m({variant:"standard"},e),i=m(e,{get disabled(){return e.disabled},get variant(){return o.variant}}),s=mn(i);return[n(pn,m({ownerState:i,get class(){return ce(s.select,e.class)},get disabled(){return e.disabled}},r)),n(qe,{get when(){return!e.multiple},get children(){return n(gn,{get as(){return e.IconComponent},ownerState:i,get class(){return s.icon}})}})]},"NativeSelectInput2");var vn=C('<svg><path d="M7 10l5 5 5-5z"></svg>',!1,!0);const bn=ze(()=>vn(),"ArrowDropDown");function fn(l){return de("MuiSelect",l)}a(fn,"getSelectUtilityClasses");const V=se("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]);var In=C("<span class=notranslate>&#8203;");const oe=me()({name:"MuiSelectInput",selfPropNames:["autoFocus","autoWidth","defaultOpen","disabled","IconComponent","inputRef","MenuProps","multiple","name","native","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","value","variant"],utilityClass:fn,slotClasses:a(l=>({select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",`icon${R(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"],nativeInput:["nativeInput"]}),"slotClasses")}),yn=x("div",{name:"MuiSelect",slot:"Select",overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[{[`&.${V.select}`]:e.select},{[`&.${V.select}`]:e[r.variant]},{[`&.${V.multiple}`]:e.multiple}]},"overridesResolver")})(ge,{[`&.${V.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),Cn=x("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${R(r.variant)}`],r.open&&e.iconOpen]},"overridesResolver")})(he),Sn=x("input",{skipProps:J,name:"MuiSelect",slot:"NativeInput",overridesResolver:a((l,e)=>e.nativeInput,"overridesResolver")})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function k(l,e){return typeof e=="object"&&e!==null?l===e:String(l)===String(e)}a(k,"areEqualValues");function Mn(l){return l==null||typeof l=="string"&&!l.trim()}a(Mn,"isEmpty");const xn=oe.defineComponent(a(function(e){const r=U(e),[,o]=X(e,["ref","sx","aria-describedby","aria-label","autoFocus","autoWidth","children","class","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),i=m({MenuProps:{},SelectDisplayProps:{},variant:"standard"},e),[s,v]=ie({controlled:a(()=>e.value,"controlled"),default:a(()=>e.defaultValue,"default"),name:"Select"}),[F,M]=ie({controlled:a(()=>e.open,"controlled"),default:a(()=>e.defaultOpen,"default"),name:"Select"}),T=U(),g=U(),[I,H]=y(null),O=e.open!=null,[_,w]=y(null),Me=a(t=>{g.current=t,H(t)},"handleDisplayRef"),B={nodeName:"INPUT",get node(){return T.current},addEventListener(t,d){if(t!=="input")throw new Error(`Invalid event name: ${t}`);T.current.addEventListener(t,d)},get value(){return s()},set value(t){v(t)},focus(){T.current.focus()}};G(Ye(()=>[I(),e.autoWidth],()=>{e.defaultOpen&&F()&&I()&&!O&&(w(e.autoWidth?null:I().clientWidth),g.current.focus())})),G(()=>{e.autoFocus&&g.current.focus()});let E;G(()=>{if(!e.labelId)return;const t=Ze(g.current).getElementById(e.labelId);t&&(E&&t.removeEventListener("click",E),E=a(()=>{getSelection().isCollapsed&&g.current.focus()},"clickHandler"),t.addEventListener("click",E))});const W=a((t,d)=>{t||g.current.focus(),t?e.onOpen&&e.onOpen(d):e.onClose&&e.onClose(d),O||(w(e.autoWidth?null:I().clientWidth),M(t))},"update"),xe=a(t=>{e.disabled||e.readOnly||t.button===0&&(t.preventDefault(),g.current.focus(),W(!0,t))},"handleMouseDown"),Te=a(t=>{W(!1,t)},"handleClose"),Pe=pe(()=>e.children),Ae=a(t=>{const d=s();if(e.multiple){if(!Array.isArray(d))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");return d.some(p=>k(p,t.props.value))}else return k(d,t.props.value)},"selected"),Oe=Qe(Pe,t=>{if(K(t,u)){te(c=>[...c,t.props]),Xe(()=>te(c=>c.filter(P=>P!==t.props)));const d=z(()=>Ae(t)),p=m(t.props,{get"aria-selected"(){return d()},onClick:a(c=>we(c,p,t.props),"onClick"),onKeyUp:a(c=>{c.key===" "&&c.preventDefault(),typeof t.props.onKeyUp=="function"&&t.props.onKeyUp(c)},"onKeyUp"),role:"option",get selected(){return d()},value:void 0,"data-value":t.props.value});return n(t.Component,p)}else return K(t)?n(t.Component,t.props):t}),we=a((t,d,p)=>{let c;const P=d.value,re=e.multiple;if(t.currentTarget.hasAttribute("tabindex")){if(re){c=Array.isArray(s())?s().slice():[];const A=s().indexOf(P);A===-1?c.push(P):c.splice(A,1)}else c=P;if(typeof p.onClick=="function"&&p.onClick(t),s()!==c){const A=new CustomEvent("input");Object.defineProperty(A,"target",{writable:!1,value:{name:d.name,get value(){return c},set value(De){B.value=De}}}),T.current.dispatchEvent(A),v(c),typeof d.onChange=="function"&&d.onChange(A,A.target)}re||W(!1,t)}},"handleItemClick"),Fe=a(t=>{e.readOnly||[" ","ArrowUp","ArrowDown","Enter"].indexOf(t.key)!==-1&&(t.preventDefault(),W(!0,t))},"handleKeyDown"),$=a(()=>I()!==null&&!!F(),"open"),Ee=a(t=>{!$()&&e.onBlur&&(Object.defineProperty(t,"target",{writable:!0,value:{value:s(),name:e.name}}),e.onBlur(t))},"handleBlur"),[ne,te]=Je([]),We=a(()=>{const t=s();if(He({value:t})||e.displayEmpty){if(e.renderValue)return e.renderValue(t);if(e.multiple){const d=[];for(const p of ne){if(!Array.isArray(t))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");t.some(c=>k(c,p.value))&&d.push(p.children)}return d.reduce((p,c,P)=>(p.push(c),P<d.length-1&&p.push(", "),p),[])}else for(const d of ne)if(k(t,d.value))return d.children}},"display"),$e=a(()=>{let t=_();return!e.autoWidth&&O&&I()&&(t=I().clientWidth),t},"menuMinWidth"),Ne=m(()=>i.MenuProps.PaperProps,{style:m({get"min-width"(){const t=$e();return typeof t=="number"?`${t}px`:void 0}},()=>i.MenuProps.PaperProps!=null?i.MenuProps.PaperProps.style:null)}),Le=m({get"aria-labelledby"(){return e.labelId},role:"listbox",disableListWrap:!0},()=>i.MenuProps.MenuListProps),Ve=a(()=>typeof e.tabIndex<"u"?e.tabIndex:e.disabled?void 0:0,"tabIndex"),le=a(()=>i.SelectDisplayProps.id||(e.name?`mui-component-select-${e.name}`:void 0),"buttonId"),N=m(e,{get variant(){return i.variant},get value(){return s()},get open(){return $()}}),j=oe.useClasses(N),ae=a(()=>{const t=s();return Array.isArray(t)?t.join(","):t},"nativeSelectValue"),ke=a(()=>{const t=We();return Mn(t)?In():t},"displayValue");return[n(yn,m({ref:Me,get tabIndex(){return Ve()},role:"button",get"aria-disabled"(){return e.disabled?"true":void 0},get"aria-expanded"(){return $()?"true":"false"},"aria-haspopup":"listbox",get"aria-label"(){return e["aria-label"]},get"aria-labelledby"(){return[e.labelId,le()].filter(Boolean).join(" ")||void 0},get"aria-describedby"(){return e["aria-describedby"]},onKeyDown:Fe,onMouseDown:xe,onBlur:Ee,get onFocus(){return e.onFocus}},()=>i.SelectDisplayProps,{ownerState:N,get sx(){return e.sx},get class(){return ce(j.select,e.class,i.SelectDisplayProps.class)},get id(){return le()},get children(){return ke()}})),n(Sn,m({get value(){return ae()},get"data-value"(){return ae()},get name(){return e.name},"aria-hidden":!0,ref:a(t=>{T(t),typeof e.inputRef=="function"&&e.inputRef(B),r(B)},"ref"),get onChange(){return e.onChange},tabIndex:-1,get disabled(){return e.disabled},get class(){return j.nativeInput},get autofocus(){return e.autoFocus},ownerState:N},o)),n(Cn,{get as(){return e.IconComponent},get class(){return j.icon},ownerState:N}),n(rn,m({get id(){return`menu-${e.name||""}`},get anchorEl(){return I()},get open(){return $()},onClose:Te,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},()=>i.MenuProps,{MenuListProps:Le,PaperProps:Ne,get children(){return Oe()}}))]},"SelectInput2")),q=me()({name:"MuiSelect",selfPropNames:["autoWidth","children","classes","defaultOpen","defaultValue","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onChange","onClose","onOpen","open","renderValue","SelectDisplayProps","value","variant"]}),ee={name:"MuiSelect",overridesResolver:a((l,e)=>e.root,"overridesResolver"),skipProps:[...J,"variant"],slot:"Root"},Tn=x(_e,ee)({}),Pn=x(Q,ee)({}),An=x(Be,ee)({}),h=q.defineComponent(a(function(e){const r=q.useThemeProps({props:e}),[,o]=X(r,["autoWidth","children","classes","class","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),i=m({autoWidth:!1,classes:{},defaultOpen:!1,displayEmpty:!1,IconComponent:bn,multiple:!1,native:!1,variant:"outlined"},r),s=a(()=>i.native?hn:xn,"inputComponent"),v=Ue(),F=Ge({props:r,muiFormControl:v,states:["variant"]}),M=a(()=>F.variant||i.variant,"variant"),T=pe(()=>r.input),g=a(()=>{const[w]=T();if(w){if(K(w))return w;throw new Error("Invalid component")}},"inputElement"),I=a(()=>g()?.Component||{standard:Tn,outlined:Pn,filled:An}[M()],"InputComponent"),H=m(r,{get variant(){return M()},get classes(){return i.classes}}),O=q.useClasses(H),_=m({get children(){return r.children},get IconComponent(){return i.IconComponent},get variant(){return M()},type:void 0,get multiple(){return i.multiple}},()=>i.native?{id:r.id}:{autoWidth:i.autoWidth,defaultOpen:i.defaultOpen,displayEmpty:i.displayEmpty,labelId:r.labelId,MenuProps:r.MenuProps,onClose:r.onClose,onOpen:r.onOpen,open:r.open,renderValue:r.renderValue,SelectDisplayProps:{id:r.id,...r.SelectDisplayProps}},()=>r.inputProps,{get classes(){return r.inputProps?nn(O,r.inputProps.classes):O}},()=>g()?.props?.inputProps);return n(en,m({get $component(){return I()}},()=>g()?.props,{get inputComponent(){return s()},inputProps:_,get notched(){return r.multiple&&r.native&&M()==="outlined"?!0:void 0},get label(){return!g()&&M()==="outlined"?r.label:void 0},get class(){return r.class},get variant(){return M()}},o))},"Select2"));function ve(){const[l,e]=y(""),r=a(o=>{e(o.target.value)},"handleChange");return n(Y,{sx:{minWidth:120},get children(){return n(f,{fullWidth:!0,get children(){return[n(b,{id:"demo-simple-select-label",children:"Age"}),n(h,{labelId:"demo-simple-select-label",id:"demo-simple-select",get value(){return l()},label:"Age",onChange:r,get children(){return[n(u,{value:10,children:"Ten"}),n(u,{value:20,children:"Twenty"}),n(u,{value:30,children:"Thirty"})]}})]}})}})}a(ve,"BasicSelect");ve.code=`import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;function be(){const[l,e]=y(1),[r,o]=y(1),i=a(()=>Array.from({length:r()}).map((s,v)=>v+1),"items");return n(un,{spacing:3,get children(){return[n(je,{label:"Length",type:"number",get value(){return r()},onChange:a(s=>{const v=Number(s.target.value);v<=999&&o(v)},"onChange")}),n(f,{fullWidth:!0,get children(){return[n(b,{children:"Value"}),n(h,{get value(){return l()},label:"Value",onChange:a(s=>e(s.target.value),"onChange"),get children(){return n(tn,{get each(){return i()},children:a(s=>n(u,{value:s,children:s}),"children")})}}),n(Y,{sx:{py:2},get children(){return["value: ",z(l)," (",z(()=>typeof l()),")"]}})]}})]}})}a(be,"DynamicSelectExample");be.code=`import {
  Stack,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@suid/material";
import { createSignal, For } from "solid-js";

export default function DynamicSelectExample() {
  const [value, setValue] = createSignal(1);
  const [length, setLength] = createSignal(1);
  const items = () =>
    Array.from({ length: length() }).map((_, index) => index + 1);

  return (
    <Stack spacing={3}>
      <TextField
        label="Length"
        type="number"
        value={length()}
        onChange={(event: any) => {
          const targetValue = Number(event.target.value);
          if (targetValue <= 999) setLength(targetValue);
        }}
      />
      <FormControl fullWidth>
        <InputLabel>Value</InputLabel>
        <Select
          value={value()}
          label="Value"
          onChange={(event) => setValue(event.target.value as any)}
        >
          <For each={items()}>
            {(item) => <MenuItem value={item}>{item}</MenuItem>}
          </For>
        </Select>
        <Box sx={{ py: 2 }}>
          <>
            value: {value()} ({typeof value()})
          </>
        </Box>
      </FormControl>
    </Stack>
  );
}
`;var On=C("<div>");const wn=48,Fn=8,En={PaperProps:{style:{"max-height":`${wn*4.5+Fn}px`,width:"250px"}}},Wn=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function fe(){const[l,e]=y([]),r=a(o=>{const{target:{value:i}}=o;e(typeof i=="string"?i.split(","):i)},"handleChange");return(()=>{var o=On();return S(o,n(f,{sx:{m:1,width:300},get children(){return[n(b,{id:"demo-multiple-checkbox-label",children:"Tag"}),n(h,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,label:"Tag",get value(){return l()},onChange:r,get input(){return n(Q,{label:"Tag"})},renderValue:a(i=>i.join(", "),"renderValue"),MenuProps:En,get children(){return Wn.map(i=>n(u,{value:i,get children(){return[n(sn,{get checked(){return l().indexOf(i)>-1}}),n(ln,{primary:i})]}}))}})]}})),o})()}a(fe,"MultipleSelectCheckmarks");fe.code=`import {
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
`;var $n=C("<div>");const Nn=48,Ln=8,Vn={PaperProps:{style:{"max-height":`${Nn*4.5+Ln}px`,width:"250px"}}},kn=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Dn(l,e,r){return{"font-weight":e.indexOf(l)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}a(Dn,"getStyles");function Ie(){const l=an(),[e,r]=y([]),o=a(i=>{const{target:{value:s}}=i;r(typeof s=="string"?s.split(","):s)},"handleChange");return(()=>{var i=$n();return S(i,n(f,{sx:{m:1,width:300},get children(){return[n(b,{id:"demo-multiple-chip-label",children:"Chip"}),n(h,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,get value(){return e()},onChange:o,get input(){return n(Q,{id:"select-multiple-chip",label:"Chip"})},renderValue:a(s=>n(Y,{sx:{display:"flex",flexWrap:"wrap",gap:.5},get children(){return s.map(v=>n(dn,{label:v}))}}),"renderValue"),MenuProps:Vn,get children(){return kn.map(s=>n(u,{value:s,get style(){return Dn(s,e(),l)},children:s}))}})]}})),i})()}a(Ie,"MultipleSelectChip");Ie.code=`import Box from "@suid/material/Box";
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
`;var Rn=C("<em>None"),Hn=C("<div>");function ye(){const[l,e]=y(""),r=a(o=>{e(o.target.value)},"handleChange");return(()=>{var o=Hn();return S(o,n(f,{sx:{m:1,minWidth:80},get children(){return[n(b,{id:"demo-simple-select-autowidth-label",children:"Age"}),n(h,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",get value(){return l()},onChange:r,autoWidth:!0,label:"Age",get children(){return[n(u,{value:"",get children(){return Rn()}}),n(u,{value:10,children:"Twenty"}),n(u,{value:21,children:"Twenty one"}),n(u,{value:22,children:"Twenty one and a half"})]}})]}})),o})()}a(ye,"SelectAutoWidth");ye.code=`import { InputLabel, MenuItem, FormControl, Select } from "@suid/material";
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
`;var D=C("<em>None"),_n=C("<div>");function Ce(){const[l,e]=y(""),r=a(o=>{e(o.target.value)},"handleChange");return(()=>{var o=_n();return S(o,n(f,{sx:{m:1,minWidth:120},disabled:!0,get children(){return[n(b,{id:"demo-simple-select-disabled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",get value(){return l()},label:"Age",onChange:r,get children(){return[n(u,{value:"",get children(){return D()}}),n(u,{value:10,children:"Ten"}),n(u,{value:20,children:"Twenty"}),n(u,{value:30,children:"Thirty"})]}}),n(L,{children:"Disabled"})]}}),null),S(o,n(f,{sx:{m:1,minWidth:120},error:!0,get children(){return[n(b,{id:"demo-simple-select-error-label",children:"Age"}),n(h,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",get value(){return l()},label:"Age",onChange:r,renderValue:a(i=>`⚠️ - ${i}`,"renderValue"),get children(){return[n(u,{value:"",get children(){return D()}}),n(u,{value:10,children:"Ten"}),n(u,{value:20,children:"Twenty"}),n(u,{value:30,children:"Thirty"})]}}),n(L,{children:"Error"})]}}),null),S(o,n(f,{sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-readonly-label",children:"Age"}),n(h,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",get value(){return l()},label:"Age",onChange:r,inputProps:{readOnly:!0},get children(){return[n(u,{value:"",get children(){return D()}}),n(u,{value:10,children:"Ten"}),n(u,{value:20,children:"Twenty"}),n(u,{value:30,children:"Thirty"})]}}),n(L,{children:"Read only"})]}}),null),S(o,n(f,{required:!0,sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-required-label",children:"Age"}),n(h,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",get value(){return l()},label:"Age *",onChange:r,get children(){return[n(u,{value:"",get children(){return D()}}),n(u,{value:10,children:"Ten"}),n(u,{value:20,children:"Twenty"}),n(u,{value:30,children:"Thirty"})]}}),n(L,{children:"Required"})]}}),null),o})()}a(Ce,"SelectOtherProps");Ce.code=`import {
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
`;var ue=C("<em>None"),Bn=C("<div>");function Se(){const[l,e]=y("10"),r=a(o=>{e(o.target.value)},"handleChange");return(()=>{var o=Bn();return S(o,n(f,{variant:"standard",sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-standard-label",children:"Age"}),n(h,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",get value(){return l()},onChange:r,label:"Age",get children(){return[n(u,{value:"",get children(){return ue()}}),n(u,{value:10,children:"Ten"}),n(u,{value:20,children:"Twenty"}),n(u,{value:30,children:"Thirty"})]}})]}}),null),S(o,n(f,{variant:"filled",sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-filled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",get value(){return l()},onChange:r,get children(){return[n(u,{value:"",get children(){return ue()}}),n(u,{value:10,children:"Ten"}),n(u,{value:20,children:"Twenty"}),n(u,{value:30,children:"Thirty"})]}})]}}),null),o})()}a(Se,"SelectVariants");Se.code=`import { FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;function ot(){return n(on,{get name(){return h.name},examples:[ve,Se,ye,Ce,fe,Ie,be]})}a(ot,"SelectPage");export{ot as default};
