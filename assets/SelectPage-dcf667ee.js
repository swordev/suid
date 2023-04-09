var _e=Object.defineProperty;var r=(l,e)=>_e(l,"name",{value:e,configurable:!0});import{i as Ve,I as Be,O as Q,F as je,a as f,b as D}from"./FormHelperText-78cdc485.js";import{f as Ue,F as I}from"./formControlState-b0866c3b.js";import{u as qe}from"./useFormControl-eccca9b1.js";import{K as ue,N as de,X as M,ac as X,R as _,Y,H as m,U as b,W as ce,ao as Ge,b4 as Ke,c as ze,t as me,Q as pe,a0 as re,E as q,aq as Qe,aO as ge,aP as Xe,b5 as Ye,aQ as z,ap as Je,O as Ze,ab as G,aR as en,b6 as nn,at as tn,a as E,d as n,B as he,x as C,p as ln,e as S,j as an}from"./index-4edd6e97.js";import{a as rn,M as o}from"./MenuItem-b3bb5223.js";import{u as ie}from"./useControlled-ac5817ae.js";import{C as on}from"./ComponentInfo-031a9ae7.js";import{C as sn}from"./Checkbox-24873aec.js";import{C as un}from"./Chip-ef084cdc.js";import"./FormLabel-0a45e85e.js";import"./Popover-5c98368d.js";import"./Grow-36c743e6.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";import"./SwitchBase-d9ef71c6.js";function dn(l){return de("MuiNativeSelect",l)}r(dn,"getNativeSelectUtilityClasses");const J=ue("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),cn=r(l=>{const e={select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",l.variant&&`icon${_(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"]};return Ke(e,dn,l.classes)},"useUtilityClasses"),ve=r(({ownerState:l,theme:e})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{backgroundColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${J.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...l.variant==="filled"&&{"&&&":{paddingRight:32}},...l.variant==="outlined"&&{borderRadius:e.shape.borderRadius,"&:focus":{borderRadius:e.shape.borderRadius},"&&&":{paddingRight:32}}}),"nativeSelectSelectStyles"),mn=M("select",{name:"MuiNativeSelect",slot:"Select",skipProps:X,overridesResolver:(l,e)=>{const{ownerState:a}=l;return[e.select,e[a.variant],{[`&.${J.multiple}`]:e.multiple}]}})(ve),be=r(({ownerState:l,theme:e})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:e.palette.action.active,[`&.${J.disabled}`]:{color:e.palette.action.disabled},...l.open&&{transform:"rotate(180deg)"},...l.variant==="filled"&&{right:7},...l.variant==="outlined"&&{right:7}}),"nativeSelectIconStyles"),pn=M("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:a}=l;return[e.icon,a.variant&&e[`icon${_(a.variant)}`],a.open&&e.iconOpen]}})(be),gn=r(function(e){const[,a]=Y(e,["class","disabled","IconComponent","inputRef","variant"]),s=m({variant:"standard"},e),i=m(e,{get disabled(){return e.disabled},get variant(){return s.variant}}),u=cn(i);return[b(mn,m({ownerState:i,get class(){return ce(u.select,e.class)},get disabled(){return e.disabled}},a)),b(Ge,{get when(){return!e.multiple},get children(){return b(pn,{get as(){return e.IconComponent},ownerState:i,get class(){return u.icon}})}})]},"NativeSelectInput"),hn=me('<svg><path d="M7 10l5 5 5-5z"></svg>',!1,!0),vn=ze(()=>hn(),"ArrowDropDown");function bn(l){return de("MuiSelect",l)}r(bn,"getSelectUtilityClasses");const L=ue("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),fn=me('<span class="notranslate">&#8203;'),oe=pe()({name:"MuiSelectInput",selfPropNames:["autoFocus","autoWidth","defaultOpen","disabled","IconComponent","inputRef","MenuProps","multiple","name","native","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","value","variant"],utilityClass:bn,slotClasses:l=>({select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",`icon${_(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"],nativeInput:["nativeInput"]})}),In=M("div",{name:"MuiSelect",slot:"Select",overridesResolver:(l,e)=>{const{ownerState:a}=l;return[{[`&.${L.select}`]:e.select},{[`&.${L.select}`]:e[a.variant]},{[`&.${L.multiple}`]:e.multiple}]}})(ve,{[`&.${L.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),Cn=M("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:a}=l;return[e.icon,a.variant&&e[`icon${_(a.variant)}`],a.open&&e.iconOpen]}})(be),yn=M("input",{skipProps:X,name:"MuiSelect",slot:"NativeInput",overridesResolver:(l,e)=>e.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function R(l,e){return typeof e=="object"&&e!==null?l===e:String(l)===String(e)}r(R,"areEqualValues");function Mn(l){return l==null||typeof l=="string"&&!l.trim()}r(Mn,"isEmpty");const Sn=oe.defineComponent(r(function(e){const a=G(e),[,s]=Y(e,["ref","sx","aria-describedby","aria-label","autoFocus","autoWidth","children","class","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),i=m({MenuProps:{},SelectDisplayProps:{},variant:"standard"},e),[u,A]=ie({controlled:()=>e.value,default:()=>e.defaultValue,name:"Select"}),[$,y]=ie({controlled:()=>e.open,default:()=>e.defaultOpen,name:"Select"}),x=G(),g=G(),[v,V]=re(null),w=e.open!=null,[B,O]=re(null),xe=r(t=>{g.current=t,V(t)},"handleDisplayRef"),j={nodeName:"INPUT",get node(){return x.current},addEventListener(t,d){if(t!=="input")throw new Error(`Invalid event name: ${t}`);x.current.addEventListener(t,d)},get value(){return u()},set value(t){A(t)},focus(){x.current.focus()}};q(Qe(()=>[v(),e.autoWidth],()=>{e.defaultOpen&&$()&&v()&&!w&&(O(e.autoWidth?null:v().clientWidth),g.current.focus())})),q(()=>{e.autoFocus&&g.current.focus()});let W;q(()=>{if(!e.labelId)return;const t=en(g.current).getElementById(e.labelId);t&&(W&&t.removeEventListener("click",W),W=r(()=>{getSelection().isCollapsed&&g.current.focus()},"clickHandler"),t.addEventListener("click",W))});const F=r((t,d)=>{t||g.current.focus(),t?e.onOpen&&e.onOpen(d):e.onClose&&e.onClose(d),w||(O(e.autoWidth?null:v().clientWidth),y(t))},"update"),Te=r(t=>{e.disabled||e.readOnly||t.button===0&&(t.preventDefault(),g.current.focus(),F(!0,t))},"handleMouseDown"),Pe=r(t=>{F(!1,t)},"handleClose"),Ae=ge(()=>e.children),we=r(t=>{const d=u();if(e.multiple){if(!Array.isArray(d))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");return d.some(p=>R(p,t.props.value))}else return R(d,t.props.value)},"selected"),Oe=Xe(Ae,t=>{if(z(t,o)){ne(c=>[...c,t.props]),Je(()=>ne(c=>c.filter(T=>T!==t.props)));const d=Ze(()=>we(t)),p=m(t.props,{get"aria-selected"(){return d()},onClick:c=>Ee(c,p,t.props),onKeyUp:c=>{c.key===" "&&c.preventDefault(),typeof t.props.onKeyUp=="function"&&t.props.onKeyUp(c)},role:"option",get selected(){return d()},value:void 0,"data-value":t.props.value});return b(t.Component,p)}else return z(t)?b(t.Component,t.props):t}),Ee=r((t,d,p)=>{let c;const T={props:d},ae=e.multiple;if(t.currentTarget.hasAttribute("tabindex")){if(ae){c=Array.isArray(u())?u().slice():[];const P=u().indexOf(T.props.value);P===-1?c.push(T.props.value):c.splice(P,1)}else c=T.props.value;if(typeof p.onClick=="function"&&p.onClick(t),u()!==c){const P=new CustomEvent("input");Object.defineProperty(P,"target",{writable:!1,value:{name:d.name,get value(){return c},set value(He){j.value=He}}}),x.current.dispatchEvent(P),A(c),typeof d.onChange=="function"&&d.onChange(P,P.target)}ae||F(!1,t)}},"handleItemClick"),$e=r(t=>{e.readOnly||[" ","ArrowUp","ArrowDown","Enter"].indexOf(t.key)!==-1&&(t.preventDefault(),F(!0,t))},"handleKeyDown"),N=r(()=>v()!==null&&!!$(),"open"),We=r(t=>{!N()&&e.onBlur&&(Object.defineProperty(t,"target",{writable:!0,value:{value:u(),name:e.name}}),e.onBlur(t))},"handleBlur"),[ee,ne]=Ye([]),Fe=r(()=>{const t=u();if(Ve({value:t})||e.displayEmpty){if(e.renderValue)return e.renderValue(t);if(e.multiple){const d=[];for(const p of ee){if(!Array.isArray(t))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");t.some(c=>R(c,p.value))&&d.push(p.children)}return d.reduce((p,c,T)=>(p.push(c),T<d.length-1&&p.push(", "),p),[])}else for(const d of ee)if(R(t,d.value))return d.children}},"display"),Ne=r(()=>{let t=B();return!e.autoWidth&&w&&v()&&(t=v().clientWidth),t},"menuMinWidth"),ke=m(()=>i.MenuProps.PaperProps,{style:m({get"min-width"(){const t=Ne();return typeof t=="number"?`${t}px`:void 0}},()=>i.MenuProps.PaperProps!=null?i.MenuProps.PaperProps.style:null)}),De=m({get"aria-labelledby"(){return e.labelId},role:"listbox",disableListWrap:!0},()=>i.MenuProps.MenuListProps),Le=r(()=>typeof e.tabIndex<"u"?e.tabIndex:e.disabled?void 0:0,"tabIndex"),te=r(()=>i.SelectDisplayProps.id||(e.name?`mui-component-select-${e.name}`:void 0),"buttonId"),k=m(e,{get variant(){return i.variant},get value(){return u()},get open(){return N()}}),U=oe.useClasses(k),le=r(()=>{const t=u();return Array.isArray(t)?t.join(","):t},"nativeSelectValue"),Re=r(()=>{const t=Fe();return Mn(t)?fn():t},"displayValue");return[b(In,m({ref:xe,get tabIndex(){return Le()},role:"button",get["aria-disabled"](){return e.disabled?"true":void 0},get["aria-expanded"](){return N()?"true":"false"},"aria-haspopup":"listbox",get["aria-label"](){return e["aria-label"]},get["aria-labelledby"](){return[e.labelId,te()].filter(Boolean).join(" ")||void 0},get["aria-describedby"](){return e["aria-describedby"]},onKeyDown:$e,onMouseDown:Te,onBlur:We,get onFocus(){return e.onFocus}},()=>i.SelectDisplayProps,{ownerState:k,get sx(){return e.sx},get class(){return ce(U.select,e.class,i.SelectDisplayProps.class)},get id(){return te()},get children(){return Re()}})),b(yn,m({get value(){return le()},get["data-value"](){return le()},get name(){return e.name},"aria-hidden":!0,ref:t=>{x(t),typeof e.inputRef=="function"&&e.inputRef(j),a(j)},get onChange(){return e.onChange},tabIndex:-1,get disabled(){return e.disabled},get class(){return U.nativeInput},get autofocus(){return e.autoFocus},ownerState:k},s)),b(Cn,{get as(){return e.IconComponent},get class(){return U.icon},ownerState:k}),b(rn,m({get id(){return`menu-${e.name||""}`},get anchorEl(){return v()},get open(){return N()},onClose:Pe,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},()=>i.MenuProps,{MenuListProps:De,PaperProps:ke,get children(){return Oe()}}))]},"SelectInput")),K=pe()({name:"MuiSelect",selfPropNames:["autoWidth","children","classes","defaultOpen","defaultValue","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onChange","onClose","onOpen","open","renderValue","SelectDisplayProps","value","variant"]}),Z={name:"MuiSelect",overridesResolver:(l,e)=>e.root,skipProps:[...X,"variant"],slot:"Root"},xn=M(Be,Z)({}),Tn=M(Q,Z)({}),Pn=M(je,Z)({}),h=K.defineComponent(r(function(e){const a=K.useThemeProps({props:e}),[,s]=Y(a,["autoWidth","children","classes","class","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),i=m({autoWidth:!1,classes:{},defaultOpen:!1,displayEmpty:!1,IconComponent:vn,multiple:!1,native:!1,variant:"outlined"},a),u=r(()=>i.native?gn:Sn,"inputComponent"),A=qe(),$=Ue({props:a,muiFormControl:A,states:["variant"]}),y=r(()=>$.variant||i.variant,"variant"),x=ge(()=>a.input),g=r(()=>{const[O]=x();if(O){if(z(O))return O;throw new Error("Invalid component")}},"inputElement"),v=r(()=>g()?.Component||{standard:xn,outlined:Tn,filled:Pn}[y()],"InputComponent"),V=m(a,{get variant(){return y()},get classes(){return i.classes}}),w=K.useClasses(V),B=m({get children(){return a.children},get IconComponent(){return i.IconComponent},get variant(){return y()},type:void 0,get multiple(){return i.multiple}},()=>i.native?{id:a.id}:{autoWidth:i.autoWidth,defaultOpen:i.defaultOpen,displayEmpty:i.displayEmpty,labelId:a.labelId,MenuProps:a.MenuProps,onClose:a.onClose,onOpen:a.onOpen,open:a.open,renderValue:a.renderValue,SelectDisplayProps:{id:a.id,...a.SelectDisplayProps}},()=>a.inputProps,{get classes(){return a.inputProps?tn(w,a.inputProps.classes):w}},()=>g()?.props?.inputProps);return b(nn,m({get $component(){return v()}},()=>g()?.props,{get inputComponent(){return u()},inputProps:B,get notched(){return a.multiple&&a.native&&y()==="outlined"?!0:void 0},get label(){return!g()&&y()==="outlined"?a.label:void 0},get class(){return a.class},get variant(){return y()}},s))},"Select"));function fe(){const[l,e]=E(""),a=r(s=>{e(s.target.value)},"handleChange");return n(he,{sx:{minWidth:120},get children(){return n(I,{fullWidth:!0,get children(){return[n(f,{id:"demo-simple-select-label",children:"Age"}),n(h,{labelId:"demo-simple-select-label",id:"demo-simple-select",get value(){return l()},label:"Age",onChange:a,get children(){return[n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}})}})}r(fe,"BasicSelect");fe.code=`import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;const An=S("<div>"),wn=48,On=8,En={PaperProps:{style:{"max-height":`${wn*4.5+On}px`,width:"250px"}}},$n=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Ie(){const[l,e]=E([]),a=r(s=>{const{target:{value:i}}=s;e(typeof i=="string"?i.split(","):i)},"handleChange");return(()=>{const s=An();return C(s,n(I,{sx:{m:1,width:300},get children(){return[n(f,{id:"demo-multiple-checkbox-label",children:"Tag"}),n(h,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,label:"Tag",get value(){return l()},onChange:a,get input(){return n(Q,{label:"Tag"})},renderValue:i=>i.join(", "),MenuProps:En,get children(){return $n.map(i=>n(o,{value:i,get children(){return[n(sn,{get checked(){return l().indexOf(i)>-1}}),n(ln,{primary:i})]}}))}})]}})),s})()}r(Ie,"MultipleSelectCheckmarks");Ie.code=`import {
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
`;const Wn=S("<div>"),Fn=48,Nn=8,kn={PaperProps:{style:{"max-height":`${Fn*4.5+Nn}px`,width:"250px"}}},Dn=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Ln(l,e,a){return{"font-weight":e.indexOf(l)===-1?a.typography.fontWeightRegular:a.typography.fontWeightMedium}}r(Ln,"getStyles");function Ce(){const l=an(),[e,a]=E([]),s=r(i=>{const{target:{value:u}}=i;a(typeof u=="string"?u.split(","):u)},"handleChange");return(()=>{const i=Wn();return C(i,n(I,{sx:{m:1,width:300},get children(){return[n(f,{id:"demo-multiple-chip-label",children:"Chip"}),n(h,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,get value(){return e()},onChange:s,get input(){return n(Q,{id:"select-multiple-chip",label:"Chip"})},renderValue:u=>n(he,{sx:{display:"flex",flexWrap:"wrap",gap:.5},get children(){return u.map(A=>n(un,{label:A}))}}),MenuProps:kn,get children(){return Dn.map(u=>n(o,{value:u,get style(){return Ln(u,e(),l)},children:u}))}})]}})),i})()}r(Ce,"MultipleSelectChip");Ce.code=`import Box from "@suid/material/Box";
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
`;const Rn=S("<em>None"),Hn=S("<div>");function ye(){const[l,e]=E(""),a=r(s=>{e(s.target.value)},"handleChange");return(()=>{const s=Hn();return C(s,n(I,{sx:{m:1,minWidth:80},get children(){return[n(f,{id:"demo-simple-select-autowidth-label",children:"Age"}),n(h,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",get value(){return l()},onChange:a,autoWidth:!0,label:"Age",get children(){return[n(o,{value:"",get children(){return Rn()}}),n(o,{value:10,children:"Twenty"}),n(o,{value:21,children:"Twenty one"}),n(o,{value:22,children:"Twenty one and a half"})]}})]}})),s})()}r(ye,"SelectAutoWidth");ye.code=`import { InputLabel, MenuItem, FormControl, Select } from "@suid/material";
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
`;const H=S("<em>None"),_n=S("<div>");function Me(){const[l,e]=E(""),a=r(s=>{e(s.target.value)},"handleChange");return(()=>{const s=_n();return C(s,n(I,{sx:{m:1,minWidth:120},disabled:!0,get children(){return[n(f,{id:"demo-simple-select-disabled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",get value(){return l()},label:"Age",onChange:a,get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(D,{children:"Disabled"})]}}),null),C(s,n(I,{sx:{m:1,minWidth:120},error:!0,get children(){return[n(f,{id:"demo-simple-select-error-label",children:"Age"}),n(h,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",get value(){return l()},label:"Age",onChange:a,renderValue:i=>`⚠️ - ${i}`,get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(D,{children:"Error"})]}}),null),C(s,n(I,{sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-readonly-label",children:"Age"}),n(h,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",get value(){return l()},label:"Age",onChange:a,inputProps:{readOnly:!0},get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(D,{children:"Read only"})]}}),null),C(s,n(I,{required:!0,sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-required-label",children:"Age"}),n(h,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",get value(){return l()},label:"Age *",onChange:a,get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(D,{children:"Required"})]}}),null),s})()}r(Me,"SelectOtherProps");Me.code=`import {
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
`;const se=S("<em>None"),Vn=S("<div>");function Se(){const[l,e]=E("10"),a=r(s=>{e(s.target.value)},"handleChange");return(()=>{const s=Vn();return C(s,n(I,{variant:"standard",sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-standard-label",children:"Age"}),n(h,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",get value(){return l()},onChange:a,label:"Age",get children(){return[n(o,{value:"",get children(){return se()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}}),null),C(s,n(I,{variant:"filled",sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-filled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",get value(){return l()},onChange:a,get children(){return[n(o,{value:"",get children(){return se()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}}),null),s})()}r(Se,"SelectVariants");Se.code=`import { FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;function it(){return n(on,{get name(){return h.name},examples:[fe,Se,ye,Me,Ie,Ce]})}r(it,"SelectPage");export{it as default};
