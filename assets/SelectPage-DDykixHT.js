var Le=Object.defineProperty;var a=(l,e)=>Le(l,"name",{value:e,configurable:!0});import{i as Re,I as He,O as z,F as Ve,a as b,b as k}from"./FormHelperText-DvXGS2GF.js";import{f as _e,F as f}from"./formControlState-BeReXi1C.js";import{u as Be}from"./useFormControl-DG2ewSv6.js";import{N as oe,O as ue,R as S,aL as Q,Q as H,V as J,m,h as n,W as se,S as je,b3 as Ge,c as Ue,t as I,f as de,a as M,d as G,a6 as qe,aN as ce,aO as Ke,b4 as ze,aP as K,o as Qe,b as Je,a7 as U,aa as Xe,b5 as Ye,ay as Ze,B as me,E as y,ah as en,u as nn}from"./index-DDK7TJDP.js";import{M as tn,a as o}from"./MenuItem-P-p4pVVI.js";import{u as ae}from"./useControlled-jh-GDp73.js";import{C as ln}from"./ComponentInfo-D6rsRCnx.js";import{C as an}from"./Checkbox-BdOmp6HT.js";import{C as rn}from"./Chip-CYIigrtW.js";import"./FormLabel-C0N-puTz.js";import"./Popover-D5y8W9Xm.js";import"./Grow-BSR3Zycz.js";import"./Link-CQanOrc_.js";import"./copyText-DSIayLkX.js";import"./PaperCode-DVdegaHe.js";import"./SwitchBase-CJr-BjDn.js";function on(l){return ue("MuiNativeSelect",l)}a(on,"getNativeSelectUtilityClasses");const X=oe("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),un=a(l=>{const e={select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",l.variant&&`icon${H(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"]};return Ge(e,on,l.classes)},"useUtilityClasses"),pe=a(({ownerState:l,theme:e})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{backgroundColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${X.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...l.variant==="filled"&&{"&&&":{paddingRight:32}},...l.variant==="outlined"&&{borderRadius:e.shape.borderRadius,"&:focus":{borderRadius:e.shape.borderRadius},"&&&":{paddingRight:32}}}),"nativeSelectSelectStyles"),sn=S("select",{name:"MuiNativeSelect",slot:"Select",skipProps:Q,overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[e.select,e[r.variant],{[`&.${X.multiple}`]:e.multiple}]},"overridesResolver")})(pe),he=a(({ownerState:l,theme:e})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:e.palette.action.active,[`&.${X.disabled}`]:{color:e.palette.action.disabled},...l.open&&{transform:"rotate(180deg)"},...l.variant==="filled"&&{right:7},...l.variant==="outlined"&&{right:7}}),"nativeSelectIconStyles"),dn=S("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${H(r.variant)}`],r.open&&e.iconOpen]},"overridesResolver")})(he),cn=a(function(e){const[,r]=J(e,["class","disabled","IconComponent","inputRef","variant"]),u=m({variant:"standard"},e),i=m(e,{get disabled(){return e.disabled},get variant(){return u.variant}}),s=un(i);return[n(sn,m({ownerState:i,get class(){return se(s.select,e.class)},get disabled(){return e.disabled}},r)),n(je,{get when(){return!e.multiple},get children(){return n(dn,{get as(){return e.IconComponent},ownerState:i,get class(){return s.icon}})}})]},"NativeSelectInput2");var mn=I('<svg><path d="M7 10l5 5 5-5z"></svg>',!1,!0);const pn=Ue(()=>mn(),"ArrowDropDown");function hn(l){return ue("MuiSelect",l)}a(hn,"getSelectUtilityClasses");const D=oe("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]);var gn=I("<span class=notranslate>&#8203;");const re=de()({name:"MuiSelectInput",selfPropNames:["autoFocus","autoWidth","defaultOpen","disabled","IconComponent","inputRef","MenuProps","multiple","name","native","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","value","variant"],utilityClass:hn,slotClasses:a(l=>({select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",`icon${H(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"],nativeInput:["nativeInput"]}),"slotClasses")}),vn=S("div",{name:"MuiSelect",slot:"Select",overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[{[`&.${D.select}`]:e.select},{[`&.${D.select}`]:e[r.variant]},{[`&.${D.multiple}`]:e.multiple}]},"overridesResolver")})(pe,{[`&.${D.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),bn=S("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:a((l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${H(r.variant)}`],r.open&&e.iconOpen]},"overridesResolver")})(he),fn=S("input",{skipProps:Q,name:"MuiSelect",slot:"NativeInput",overridesResolver:a((l,e)=>e.nativeInput,"overridesResolver")})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function L(l,e){return typeof e=="object"&&e!==null?l===e:String(l)===String(e)}a(L,"areEqualValues");function In(l){return l==null||typeof l=="string"&&!l.trim()}a(In,"isEmpty");const yn=re.defineComponent(a(function(e){const r=U(e),[,u]=J(e,["ref","sx","aria-describedby","aria-label","autoFocus","autoWidth","children","class","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),i=m({MenuProps:{},SelectDisplayProps:{},variant:"standard"},e),[s,A]=ae({controlled:a(()=>e.value,"controlled"),default:a(()=>e.defaultValue,"default"),name:"Select"}),[E,C]=ae({controlled:a(()=>e.open,"controlled"),default:a(()=>e.defaultOpen,"default"),name:"Select"}),x=U(),h=U(),[v,V]=M(null),O=e.open!=null,[_,w]=M(null),Ce=a(t=>{h.current=t,V(t)},"handleDisplayRef"),B={nodeName:"INPUT",get node(){return x.current},addEventListener(t,d){if(t!=="input")throw new Error(`Invalid event name: ${t}`);x.current.addEventListener(t,d)},get value(){return s()},set value(t){A(t)},focus(){x.current.focus()}};G(qe(()=>[v(),e.autoWidth],()=>{e.defaultOpen&&E()&&v()&&!O&&(w(e.autoWidth?null:v().clientWidth),h.current.focus())})),G(()=>{e.autoFocus&&h.current.focus()});let W;G(()=>{if(!e.labelId)return;const t=Xe(h.current).getElementById(e.labelId);t&&(W&&t.removeEventListener("click",W),W=a(()=>{getSelection().isCollapsed&&h.current.focus()},"clickHandler"),t.addEventListener("click",W))});const F=a((t,d)=>{t||h.current.focus(),t?e.onOpen&&e.onOpen(d):e.onClose&&e.onClose(d),O||(w(e.autoWidth?null:v().clientWidth),C(t))},"update"),Me=a(t=>{e.disabled||e.readOnly||t.button===0&&(t.preventDefault(),h.current.focus(),F(!0,t))},"handleMouseDown"),Se=a(t=>{F(!1,t)},"handleClose"),xe=ce(()=>e.children),Te=a(t=>{const d=s();if(e.multiple){if(!Array.isArray(d))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");return d.some(p=>L(p,t.props.value))}else return L(d,t.props.value)},"selected"),Pe=Ke(xe,t=>{if(K(t,o)){ee(c=>[...c,t.props]),Qe(()=>ee(c=>c.filter(T=>T!==t.props)));const d=Je(()=>Te(t)),p=m(t.props,{get"aria-selected"(){return d()},onClick:a(c=>Ae(c,p,t.props),"onClick"),onKeyUp:a(c=>{c.key===" "&&c.preventDefault(),typeof t.props.onKeyUp=="function"&&t.props.onKeyUp(c)},"onKeyUp"),role:"option",get selected(){return d()},value:void 0,"data-value":t.props.value});return n(t.Component,p)}else return K(t)?n(t.Component,t.props):t}),Ae=a((t,d,p)=>{let c;const T={props:d},le=e.multiple;if(t.currentTarget.hasAttribute("tabindex")){if(le){c=Array.isArray(s())?s().slice():[];const P=s().indexOf(T.props.value);P===-1?c.push(T.props.value):c.splice(P,1)}else c=T.props.value;if(typeof p.onClick=="function"&&p.onClick(t),s()!==c){const P=new CustomEvent("input");Object.defineProperty(P,"target",{writable:!1,value:{name:d.name,get value(){return c},set value(De){B.value=De}}}),x.current.dispatchEvent(P),A(c),typeof d.onChange=="function"&&d.onChange(P,P.target)}le||F(!1,t)}},"handleItemClick"),Oe=a(t=>{e.readOnly||[" ","ArrowUp","ArrowDown","Enter"].indexOf(t.key)!==-1&&(t.preventDefault(),F(!0,t))},"handleKeyDown"),$=a(()=>v()!==null&&!!E(),"open"),we=a(t=>{!$()&&e.onBlur&&(Object.defineProperty(t,"target",{writable:!0,value:{value:s(),name:e.name}}),e.onBlur(t))},"handleBlur"),[Z,ee]=ze([]),Ee=a(()=>{const t=s();if(Re({value:t})||e.displayEmpty){if(e.renderValue)return e.renderValue(t);if(e.multiple){const d=[];for(const p of Z){if(!Array.isArray(t))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");t.some(c=>L(c,p.value))&&d.push(p.children)}return d.reduce((p,c,T)=>(p.push(c),T<d.length-1&&p.push(", "),p),[])}else for(const d of Z)if(L(t,d.value))return d.children}},"display"),We=a(()=>{let t=_();return!e.autoWidth&&O&&v()&&(t=v().clientWidth),t},"menuMinWidth"),Fe=m(()=>i.MenuProps.PaperProps,{style:m({get"min-width"(){const t=We();return typeof t=="number"?`${t}px`:void 0}},()=>i.MenuProps.PaperProps!=null?i.MenuProps.PaperProps.style:null)}),$e=m({get"aria-labelledby"(){return e.labelId},role:"listbox",disableListWrap:!0},()=>i.MenuProps.MenuListProps),Ne=a(()=>typeof e.tabIndex<"u"?e.tabIndex:e.disabled?void 0:0,"tabIndex"),ne=a(()=>i.SelectDisplayProps.id||(e.name?`mui-component-select-${e.name}`:void 0),"buttonId"),N=m(e,{get variant(){return i.variant},get value(){return s()},get open(){return $()}}),j=re.useClasses(N),te=a(()=>{const t=s();return Array.isArray(t)?t.join(","):t},"nativeSelectValue"),ke=a(()=>{const t=Ee();return In(t)?gn():t},"displayValue");return[n(vn,m({ref:Ce,get tabIndex(){return Ne()},role:"button",get"aria-disabled"(){return e.disabled?"true":void 0},get"aria-expanded"(){return $()?"true":"false"},"aria-haspopup":"listbox",get"aria-label"(){return e["aria-label"]},get"aria-labelledby"(){return[e.labelId,ne()].filter(Boolean).join(" ")||void 0},get"aria-describedby"(){return e["aria-describedby"]},onKeyDown:Oe,onMouseDown:Me,onBlur:we,get onFocus(){return e.onFocus}},()=>i.SelectDisplayProps,{ownerState:N,get sx(){return e.sx},get class(){return se(j.select,e.class,i.SelectDisplayProps.class)},get id(){return ne()},get children(){return ke()}})),n(fn,m({get value(){return te()},get"data-value"(){return te()},get name(){return e.name},"aria-hidden":!0,ref:a(t=>{x(t),typeof e.inputRef=="function"&&e.inputRef(B),r(B)},"ref"),get onChange(){return e.onChange},tabIndex:-1,get disabled(){return e.disabled},get class(){return j.nativeInput},get autofocus(){return e.autoFocus},ownerState:N},u)),n(bn,{get as(){return e.IconComponent},get class(){return j.icon},ownerState:N}),n(tn,m({get id(){return`menu-${e.name||""}`},get anchorEl(){return v()},get open(){return $()},onClose:Se,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},()=>i.MenuProps,{MenuListProps:$e,PaperProps:Fe,get children(){return Pe()}}))]},"SelectInput2")),q=de()({name:"MuiSelect",selfPropNames:["autoWidth","children","classes","defaultOpen","defaultValue","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onChange","onClose","onOpen","open","renderValue","SelectDisplayProps","value","variant"]}),Y={name:"MuiSelect",overridesResolver:a((l,e)=>e.root,"overridesResolver"),skipProps:[...Q,"variant"],slot:"Root"},Cn=S(He,Y)({}),Mn=S(z,Y)({}),Sn=S(Ve,Y)({}),g=q.defineComponent(a(function(e){const r=q.useThemeProps({props:e}),[,u]=J(r,["autoWidth","children","classes","class","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),i=m({autoWidth:!1,classes:{},defaultOpen:!1,displayEmpty:!1,IconComponent:pn,multiple:!1,native:!1,variant:"outlined"},r),s=a(()=>i.native?cn:yn,"inputComponent"),A=Be(),E=_e({props:r,muiFormControl:A,states:["variant"]}),C=a(()=>E.variant||i.variant,"variant"),x=ce(()=>r.input),h=a(()=>{const[w]=x();if(w){if(K(w))return w;throw new Error("Invalid component")}},"inputElement"),v=a(()=>h()?.Component||{standard:Cn,outlined:Mn,filled:Sn}[C()],"InputComponent"),V=m(r,{get variant(){return C()},get classes(){return i.classes}}),O=q.useClasses(V),_=m({get children(){return r.children},get IconComponent(){return i.IconComponent},get variant(){return C()},type:void 0,get multiple(){return i.multiple}},()=>i.native?{id:r.id}:{autoWidth:i.autoWidth,defaultOpen:i.defaultOpen,displayEmpty:i.displayEmpty,labelId:r.labelId,MenuProps:r.MenuProps,onClose:r.onClose,onOpen:r.onOpen,open:r.open,renderValue:r.renderValue,SelectDisplayProps:{id:r.id,...r.SelectDisplayProps}},()=>r.inputProps,{get classes(){return r.inputProps?Ze(O,r.inputProps.classes):O}},()=>h()?.props?.inputProps);return n(Ye,m({get $component(){return v()}},()=>h()?.props,{get inputComponent(){return s()},inputProps:_,get notched(){return r.multiple&&r.native&&C()==="outlined"?!0:void 0},get label(){return!h()&&C()==="outlined"?r.label:void 0},get class(){return r.class},get variant(){return C()}},u))},"Select2"));function ge(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return n(me,{sx:{minWidth:120},get children(){return n(f,{fullWidth:!0,get children(){return[n(b,{id:"demo-simple-select-label",children:"Age"}),n(g,{labelId:"demo-simple-select-label",id:"demo-simple-select",get value(){return l()},label:"Age",onChange:r,get children(){return[n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}})}})}a(ge,"BasicSelect");ge.code=`import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;var xn=I("<div>");const Tn=48,Pn=8,An={PaperProps:{style:{"max-height":`${Tn*4.5+Pn}px`,width:"250px"}}},On=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function ve(){const[l,e]=M([]),r=a(u=>{const{target:{value:i}}=u;e(typeof i=="string"?i.split(","):i)},"handleChange");return(()=>{var u=xn();return y(u,n(f,{sx:{m:1,width:300},get children(){return[n(b,{id:"demo-multiple-checkbox-label",children:"Tag"}),n(g,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,label:"Tag",get value(){return l()},onChange:r,get input(){return n(z,{label:"Tag"})},renderValue:a(i=>i.join(", "),"renderValue"),MenuProps:An,get children(){return On.map(i=>n(o,{value:i,get children(){return[n(an,{get checked(){return l().indexOf(i)>-1}}),n(en,{primary:i})]}}))}})]}})),u})()}a(ve,"MultipleSelectCheckmarks");ve.code=`import {
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
`;var wn=I("<div>");const En=48,Wn=8,Fn={PaperProps:{style:{"max-height":`${En*4.5+Wn}px`,width:"250px"}}},$n=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Nn(l,e,r){return{"font-weight":e.indexOf(l)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}a(Nn,"getStyles");function be(){const l=nn(),[e,r]=M([]),u=a(i=>{const{target:{value:s}}=i;r(typeof s=="string"?s.split(","):s)},"handleChange");return(()=>{var i=wn();return y(i,n(f,{sx:{m:1,width:300},get children(){return[n(b,{id:"demo-multiple-chip-label",children:"Chip"}),n(g,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,get value(){return e()},onChange:u,get input(){return n(z,{id:"select-multiple-chip",label:"Chip"})},renderValue:a(s=>n(me,{sx:{display:"flex",flexWrap:"wrap",gap:.5},get children(){return s.map(A=>n(rn,{label:A}))}}),"renderValue"),MenuProps:Fn,get children(){return $n.map(s=>n(o,{value:s,get style(){return Nn(s,e(),l)},children:s}))}})]}})),i})()}a(be,"MultipleSelectChip");be.code=`import Box from "@suid/material/Box";
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
`;var kn=I("<em>None"),Dn=I("<div>");function fe(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{var u=Dn();return y(u,n(f,{sx:{m:1,minWidth:80},get children(){return[n(b,{id:"demo-simple-select-autowidth-label",children:"Age"}),n(g,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",get value(){return l()},onChange:r,autoWidth:!0,label:"Age",get children(){return[n(o,{value:"",get children(){return kn()}}),n(o,{value:10,children:"Twenty"}),n(o,{value:21,children:"Twenty one"}),n(o,{value:22,children:"Twenty one and a half"})]}})]}})),u})()}a(fe,"SelectAutoWidth");fe.code=`import { InputLabel, MenuItem, FormControl, Select } from "@suid/material";
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
`;var R=I("<em>None"),Ln=I("<div>");function Ie(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{var u=Ln();return y(u,n(f,{sx:{m:1,minWidth:120},disabled:!0,get children(){return[n(b,{id:"demo-simple-select-disabled-label",children:"Age"}),n(g,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",get value(){return l()},label:"Age",onChange:r,get children(){return[n(o,{value:"",get children(){return R()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Disabled"})]}}),null),y(u,n(f,{sx:{m:1,minWidth:120},error:!0,get children(){return[n(b,{id:"demo-simple-select-error-label",children:"Age"}),n(g,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",get value(){return l()},label:"Age",onChange:r,renderValue:a(i=>`⚠️ - ${i}`,"renderValue"),get children(){return[n(o,{value:"",get children(){return R()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Error"})]}}),null),y(u,n(f,{sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-readonly-label",children:"Age"}),n(g,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",get value(){return l()},label:"Age",onChange:r,inputProps:{readOnly:!0},get children(){return[n(o,{value:"",get children(){return R()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Read only"})]}}),null),y(u,n(f,{required:!0,sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-required-label",children:"Age"}),n(g,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",get value(){return l()},label:"Age *",onChange:r,get children(){return[n(o,{value:"",get children(){return R()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}}),n(k,{children:"Required"})]}}),null),u})()}a(Ie,"SelectOtherProps");Ie.code=`import {
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
`;var ie=I("<em>None"),Rn=I("<div>");function ye(){const[l,e]=M("10"),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{var u=Rn();return y(u,n(f,{variant:"standard",sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-standard-label",children:"Age"}),n(g,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",get value(){return l()},onChange:r,label:"Age",get children(){return[n(o,{value:"",get children(){return ie()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}}),null),y(u,n(f,{variant:"filled",sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-filled-label",children:"Age"}),n(g,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",get value(){return l()},onChange:r,get children(){return[n(o,{value:"",get children(){return ie()}}),n(o,{value:10,children:"Ten"}),n(o,{value:20,children:"Twenty"}),n(o,{value:30,children:"Thirty"})]}})]}}),null),u})()}a(ye,"SelectVariants");ye.code=`import { FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;function tt(){return n(ln,{get name(){return g.name},examples:[ge,ye,fe,Ie,ve,be]})}a(tt,"SelectPage");export{tt as default};
