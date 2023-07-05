var Le=Object.defineProperty;var a=(l,e)=>Le(l,"name",{value:e,configurable:!0});import{i as He,I as Re,O as z,F as Ve,a as f,b as k}from"./FormHelperText-c2790271.js";import{f as _e,F as b}from"./formControlState-9c157834.js";import{u as Be}from"./useFormControl-6a6a9c3c.js";import{E as oe,H as se,Q as S,a6 as J,K as R,R as Q,m,d as n,O as ue,S as je,aV as Ge,c as Ke,t as I,J as de,a as M,f as G,ay as Ue,aG as ce,aH as qe,aW as ze,aI as q,b as Je,p as Qe,W as K,aJ as Xe,aX as Ye,ai as Ze,B as me,w as C,n as en,i as nn}from"./index-d372388a.js";import{a as tn,M as o}from"./MenuItem-990dff91.js";import{u as re}from"./useControlled-431c0487.js";import{C as ln}from"./ComponentInfo-c0e886c9.js";import{C as rn}from"./Checkbox-adb71dea.js";import{C as an}from"./Chip-c05f8b2c.js";import"./FormLabel-d7812964.js";import"./Popover-74d19b8c.js";import"./Grow-fcf03f44.js";import"./Link-87b77aea.js";import"./copyText-caf77d59.js";import"./PaperCode-338f67c4.js";import"./SwitchBase-3b6d392c.js";function on(l){return se("MuiNativeSelect",l)}a(on,"getNativeSelectUtilityClasses");const X=oe("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),sn=a(l=>{const e={select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",l.variant&&`icon${R(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"]};return Ge(e,on,l.classes)},"useUtilityClasses"),pe=a(({ownerState:l,theme:e})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{backgroundColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${X.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...l.variant==="filled"&&{"&&&":{paddingRight:32}},...l.variant==="outlined"&&{borderRadius:e.shape.borderRadius,"&:focus":{borderRadius:e.shape.borderRadius},"&&&":{paddingRight:32}}}),"nativeSelectSelectStyles"),un=S("select",{name:"MuiNativeSelect",slot:"Select",skipProps:J,overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.select,e[r.variant],{[`&.${X.multiple}`]:e.multiple}]}})(pe),ge=a(({ownerState:l,theme:e})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:e.palette.action.active,[`&.${X.disabled}`]:{color:e.palette.action.disabled},...l.open&&{transform:"rotate(180deg)"},...l.variant==="filled"&&{right:7},...l.variant==="outlined"&&{right:7}}),"nativeSelectIconStyles"),dn=S("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${R(r.variant)}`],r.open&&e.iconOpen]}})(ge),cn=a(function(e){const[,r]=Q(e,["class","disabled","IconComponent","inputRef","variant"]),s=m({variant:"standard"},e),i=m(e,{get disabled(){return e.disabled},get variant(){return s.variant}}),u=sn(i);return[n(un,m({ownerState:i,get class(){return ue(u.select,e.class)},get disabled(){return e.disabled}},r)),n(je,{get when(){return!e.multiple},get children(){return n(dn,{get as(){return e.IconComponent},ownerState:i,get class(){return u.icon}})}})]},"NativeSelectInput"),mn=I('<svg><path d="M7 10l5 5 5-5z"></svg>',!1,!0),pn=Ke(()=>mn(),"ArrowDropDown");function gn(l){return se("MuiSelect",l)}a(gn,"getSelectUtilityClasses");const D=oe("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),hn=I('<span class="notranslate">&#8203;'),ae=de()({name:"MuiSelectInput",selfPropNames:["autoFocus","autoWidth","defaultOpen","disabled","IconComponent","inputRef","MenuProps","multiple","name","native","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","value","variant"],utilityClass:gn,slotClasses:l=>({select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",`icon${R(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"],nativeInput:["nativeInput"]})}),vn=S("div",{name:"MuiSelect",slot:"Select",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[{[`&.${D.select}`]:e.select},{[`&.${D.select}`]:e[r.variant]},{[`&.${D.multiple}`]:e.multiple}]}})(pe,{[`&.${D.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),fn=S("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${R(r.variant)}`],r.open&&e.iconOpen]}})(ge),bn=S("input",{skipProps:J,name:"MuiSelect",slot:"NativeInput",overridesResolver:(l,e)=>e.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function L(l,e){return typeof e=="object"&&e!==null?l===e:String(l)===String(e)}a(L,"areEqualValues");function In(l){return l==null||typeof l=="string"&&!l.trim()}a(In,"isEmpty");const Cn=ae.defineComponent(a(function(e){const r=K(e),[,s]=Q(e,["ref","sx","aria-describedby","aria-label","autoFocus","autoWidth","children","class","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),i=m({MenuProps:{},SelectDisplayProps:{},variant:"standard"},e),[u,A]=re({controlled:()=>e.value,default:()=>e.defaultValue,name:"Select"}),[E,y]=re({controlled:()=>e.open,default:()=>e.defaultOpen,name:"Select"}),x=K(),g=K(),[v,V]=M(null),w=e.open!=null,[_,O]=M(null),ye=a(t=>{g.current=t,V(t)},"handleDisplayRef"),B={nodeName:"INPUT",get node(){return x.current},addEventListener(t,d){if(t!=="input")throw new Error(`Invalid event name: ${t}`);x.current.addEventListener(t,d)},get value(){return u()},set value(t){A(t)},focus(){x.current.focus()}};G(Ue(()=>[v(),e.autoWidth],()=>{e.defaultOpen&&E()&&v()&&!w&&(O(e.autoWidth?null:v().clientWidth),g.current.focus())})),G(()=>{e.autoFocus&&g.current.focus()});let W;G(()=>{if(!e.labelId)return;const t=Xe(g.current).getElementById(e.labelId);t&&(W&&t.removeEventListener("click",W),W=a(()=>{getSelection().isCollapsed&&g.current.focus()},"clickHandler"),t.addEventListener("click",W))});const F=a((t,d)=>{t||g.current.focus(),t?e.onOpen&&e.onOpen(d):e.onClose&&e.onClose(d),w||(O(e.autoWidth?null:v().clientWidth),y(t))},"update"),Me=a(t=>{e.disabled||e.readOnly||t.button===0&&(t.preventDefault(),g.current.focus(),F(!0,t))},"handleMouseDown"),Se=a(t=>{F(!1,t)},"handleClose"),xe=ce(()=>e.children),Te=a(t=>{const d=u();if(e.multiple){if(!Array.isArray(d))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");return d.some(p=>L(p,t.props.value))}else return L(d,t.props.value)},"selected"),Pe=qe(xe,t=>{if(q(t,o)){ee(c=>[...c,t.props]),Je(()=>ee(c=>c.filter(T=>T!==t.props)));const d=Qe(()=>Te(t)),p=m(t.props,{get"aria-selected"(){return d()},onClick:c=>Ae(c,p,t.props),onKeyUp:c=>{c.key===" "&&c.preventDefault(),typeof t.props.onKeyUp=="function"&&t.props.onKeyUp(c)},role:"option",get selected(){return d()},value:void 0,"data-value":t.props.value});return n(t.Component,p)}else return q(t)?n(t.Component,t.props):t}),Ae=a((t,d,p)=>{let c;const T={props:d},le=e.multiple;if(t.currentTarget.hasAttribute("tabindex")){if(le){c=Array.isArray(u())?u().slice():[];const P=u().indexOf(T.props.value);P===-1?c.push(T.props.value):c.splice(P,1)}else c=T.props.value;if(typeof p.onClick=="function"&&p.onClick(t),u()!==c){const P=new CustomEvent("input");Object.defineProperty(P,"target",{writable:!1,value:{name:d.name,get value(){return c},set value(De){B.value=De}}}),x.current.dispatchEvent(P),A(c),typeof d.onChange=="function"&&d.onChange(P,P.target)}le||F(!1,t)}},"handleItemClick"),we=a(t=>{e.readOnly||[" ","ArrowUp","ArrowDown","Enter"].indexOf(t.key)!==-1&&(t.preventDefault(),F(!0,t))},"handleKeyDown"),$=a(()=>v()!==null&&!!E(),"open"),Oe=a(t=>{!$()&&e.onBlur&&(Object.defineProperty(t,"target",{writable:!0,value:{value:u(),name:e.name}}),e.onBlur(t))},"handleBlur"),[Z,ee]=ze([]),Ee=a(()=>{const t=u();if(He({value:t})||e.displayEmpty){if(e.renderValue)return e.renderValue(t);if(e.multiple){const d=[];for(const p of Z){if(!Array.isArray(t))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");t.some(c=>L(c,p.value))&&d.push(p.children)}return d.reduce((p,c,T)=>(p.push(c),T<d.length-1&&p.push(", "),p),[])}else for(const d of Z)if(L(t,d.value))return d.children}},"display"),We=a(()=>{let t=_();return!e.autoWidth&&w&&v()&&(t=v().clientWidth),t},"menuMinWidth"),Fe=m(()=>i.MenuProps.PaperProps,{style:m({get"min-width"(){const t=We();return typeof t=="number"?`${t}px`:void 0}},()=>i.MenuProps.PaperProps!=null?i.MenuProps.PaperProps.style:null)}),$e=m({get"aria-labelledby"(){return e.labelId},role:"listbox",disableListWrap:!0},()=>i.MenuProps.MenuListProps),Ne=a(()=>typeof e.tabIndex<"u"?e.tabIndex:e.disabled?void 0:0,"tabIndex"),ne=a(()=>i.SelectDisplayProps.id||(e.name?`mui-component-select-${e.name}`:void 0),"buttonId"),N=m(e,{get variant(){return i.variant},get value(){return u()},get open(){return $()}}),j=ae.useClasses(N),te=a(()=>{const t=u();return Array.isArray(t)?t.join(","):t},"nativeSelectValue"),ke=a(()=>{const t=Ee();return In(t)?hn():t},"displayValue");return[n(vn,m({ref:ye,get tabIndex(){return Ne()},role:"button",get["aria-disabled"](){return e.disabled?"true":void 0},get["aria-expanded"](){return $()?"true":"false"},"aria-haspopup":"listbox",get["aria-label"](){return e["aria-label"]},get["aria-labelledby"](){return[e.labelId,ne()].filter(Boolean).join(" ")||void 0},get["aria-describedby"](){return e["aria-describedby"]},onKeyDown:we,onMouseDown:Me,onBlur:Oe,get onFocus(){return e.onFocus}},()=>i.SelectDisplayProps,{ownerState:N,get sx(){return e.sx},get class(){return ue(j.select,e.class,i.SelectDisplayProps.class)},get id(){return ne()},get children(){return ke()}})),n(bn,m({get value(){return te()},get["data-value"](){return te()},get name(){return e.name},"aria-hidden":!0,ref:t=>{x(t),typeof e.inputRef=="function"&&e.inputRef(B),r(B)},get onChange(){return e.onChange},tabIndex:-1,get disabled(){return e.disabled},get class(){return j.nativeInput},get autofocus(){return e.autoFocus},ownerState:N},s)),n(fn,{get as(){return e.IconComponent},get class(){return j.icon},ownerState:N}),n(tn,m({get id(){return`menu-${e.name||""}`},get anchorEl(){return v()},get open(){return $()},onClose:Se,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},()=>i.MenuProps,{MenuListProps:$e,PaperProps:Fe,get children(){return Pe()}}))]},"SelectInput")),U=de()({name:"MuiSelect",selfPropNames:["autoWidth","children","classes","defaultOpen","defaultValue","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onChange","onClose","onOpen","open","renderValue","SelectDisplayProps","value","variant"]}),Y={name:"MuiSelect",overridesResolver:(l,e)=>e.root,skipProps:[...J,"variant"],slot:"Root"},yn=S(Re,Y)({}),Mn=S(z,Y)({}),Sn=S(Ve,Y)({}),h=U.defineComponent(a(function(e){const r=U.useThemeProps({props:e}),[,s]=Q(r,["autoWidth","children","classes","class","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),i=m({autoWidth:!1,classes:{},defaultOpen:!1,displayEmpty:!1,IconComponent:pn,multiple:!1,native:!1,variant:"outlined"},r),u=a(()=>i.native?cn:Cn,"inputComponent"),A=Be(),E=_e({props:r,muiFormControl:A,states:["variant"]}),y=a(()=>E.variant||i.variant,"variant"),x=ce(()=>r.input),g=a(()=>{const[O]=x();if(O){if(q(O))return O;throw new Error("Invalid component")}},"inputElement"),v=a(()=>g()?.Component||{standard:yn,outlined:Mn,filled:Sn}[y()],"InputComponent"),V=m(r,{get variant(){return y()},get classes(){return i.classes}}),w=U.useClasses(V),_=m({get children(){return r.children},get IconComponent(){return i.IconComponent},get variant(){return y()},type:void 0,get multiple(){return i.multiple}},()=>i.native?{id:r.id}:{autoWidth:i.autoWidth,defaultOpen:i.defaultOpen,displayEmpty:i.displayEmpty,labelId:r.labelId,MenuProps:r.MenuProps,onClose:r.onClose,onOpen:r.onOpen,open:r.open,renderValue:r.renderValue,SelectDisplayProps:{id:r.id,...r.SelectDisplayProps}},()=>r.inputProps,{get classes(){return r.inputProps?Ze(w,r.inputProps.classes):w}},()=>g()?.props?.inputProps);return n(Ye,m({get $component(){return v()}},()=>g()?.props,{get inputComponent(){return u()},inputProps:_,get notched(){return r.multiple&&r.native&&y()==="outlined"?!0:void 0},get label(){return!g()&&y()==="outlined"?r.label:void 0},get class(){return r.class},get variant(){return y()}},s))},"Select"));function he(){const[l,e]=M(""),r=a(s=>{e(s.target.value)},"handleChange");return n(me,{sx:{minWidth:120},get children(){return n(b,{fullWidth:!0,get children(){return[n(f,{id:"demo-simple-select-label",children:"Age"}),n(h,{labelId:"demo-simple-select-label",id:"demo-simple-select",get value(){return l()},label:"Age",onChange:r,get children(){return[n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}})}})}a(he,"BasicSelect");he.code=`import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;const xn=I("<div>"),Tn=48,Pn=8,An={PaperProps:{style:{"max-height":`${Tn*4.5+Pn}px`,width:"250px"}}},wn=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function ve(){const[l,e]=M([]),r=a(s=>{const{target:{value:i}}=s;e(typeof i=="string"?i.split(","):i)},"handleChange");return(()=>{const s=xn();return C(s,n(b,{sx:{m:1,width:300},get children(){return[n(f,{id:"demo-multiple-checkbox-label",children:"Tag"}),n(h,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,label:"Tag",get value(){return l()},onChange:r,get input(){return n(z,{label:"Tag"})},renderValue:i=>i.join(", "),MenuProps:An,get children(){return wn.map(i=>n(o,{value:i,get children(){return[n(rn,{get checked(){return l().indexOf(i)>-1}}),n(en,{primary:i})]}}))}})]}})),s})()}a(ve,"MultipleSelectCheckmarks");ve.code=`import {
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
`;const On=I("<div>"),En=48,Wn=8,Fn={PaperProps:{style:{"max-height":`${En*4.5+Wn}px`,width:"250px"}}},$n=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Nn(l,e,r){return{"font-weight":e.indexOf(l)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}a(Nn,"getStyles");function fe(){const l=nn(),[e,r]=M([]),s=a(i=>{const{target:{value:u}}=i;r(typeof u=="string"?u.split(","):u)},"handleChange");return(()=>{const i=On();return C(i,n(b,{sx:{m:1,width:300},get children(){return[n(f,{id:"demo-multiple-chip-label",children:"Chip"}),n(h,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,get value(){return e()},onChange:s,get input(){return n(z,{id:"select-multiple-chip",label:"Chip"})},renderValue:u=>n(me,{sx:{display:"flex",flexWrap:"wrap",gap:.5},get children(){return u.map(A=>n(an,{label:A}))}}),MenuProps:Fn,get children(){return $n.map(u=>n(o,{value:u,get style(){return Nn(u,e(),l)},children:u}))}})]}})),i})()}a(fe,"MultipleSelectChip");fe.code=`import Box from "@suid/material/Box";
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
`;const kn=I("<em>None"),Dn=I("<div>");function be(){const[l,e]=M(""),r=a(s=>{e(s.target.value)},"handleChange");return(()=>{const s=Dn();return C(s,n(b,{sx:{m:1,minWidth:80},get children(){return[n(f,{id:"demo-simple-select-autowidth-label",children:"Age"}),n(h,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",get value(){return l()},onChange:r,autoWidth:!0,label:"Age",get children(){return[n(o,{value:"",get children(){return kn()}}),n(o,{value:10,children:"Twenty"}),n(o,{value:21,children:"Twenty one"}),n(o,{value:22,children:"Twenty one and a half"})]}})]}})),s})()}a(be,"SelectAutoWidth");be.code=`import { InputLabel, MenuItem, FormControl, Select } from "@suid/material";
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
`;const H=I("<em>None"),Ln=I("<div>");function Ie(){const[l,e]=M(""),r=a(s=>{e(s.target.value)},"handleChange");return(()=>{const s=Ln();return C(s,n(b,{sx:{m:1,minWidth:120},disabled:!0,get children(){return[n(f,{id:"demo-simple-select-disabled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",get value(){return l()},label:"Age",onChange:r,get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Disabled"})]}}),null),C(s,n(b,{sx:{m:1,minWidth:120},error:!0,get children(){return[n(f,{id:"demo-simple-select-error-label",children:"Age"}),n(h,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",get value(){return l()},label:"Age",onChange:r,renderValue:i=>`⚠️ - ${i}`,get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Error"})]}}),null),C(s,n(b,{sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-readonly-label",children:"Age"}),n(h,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",get value(){return l()},label:"Age",onChange:r,inputProps:{readOnly:!0},get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Read only"})]}}),null),C(s,n(b,{required:!0,sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-required-label",children:"Age"}),n(h,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",get value(){return l()},label:"Age *",onChange:r,get children(){return[n(o,{value:"",get children(){return H()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Required"})]}}),null),s})()}a(Ie,"SelectOtherProps");Ie.code=`import {
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
`;const ie=I("<em>None"),Hn=I("<div>");function Ce(){const[l,e]=M("10"),r=a(s=>{e(s.target.value)},"handleChange");return(()=>{const s=Hn();return C(s,n(b,{variant:"standard",sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-standard-label",children:"Age"}),n(h,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",get value(){return l()},onChange:r,label:"Age",get children(){return[n(o,{value:"",get children(){return ie()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}}),null),C(s,n(b,{variant:"filled",sx:{m:1,minWidth:120},get children(){return[n(f,{id:"demo-simple-select-filled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",get value(){return l()},onChange:r,get children(){return[n(o,{value:"",get children(){return ie()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}}),null),s})()}a(Ce,"SelectVariants");Ce.code=`import { FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;function tt(){return n(ln,{get name(){return h.name},examples:[he,Ce,be,Ie,ve,fe]})}a(tt,"SelectPage");export{tt as default};
