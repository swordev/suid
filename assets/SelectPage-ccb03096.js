var ke=Object.defineProperty;var a=(l,e)=>ke(l,"name",{value:e,configurable:!0});import{i as Le,I as Re,O as J,F as He,a as b,b as k}from"./FormHelperText-8c3e0274.js";import{f as _e,F as f}from"./formControlState-988c3d78.js";import{u as Ve}from"./useFormControl-55851753.js";import{O as oe,P as ie,R as S,Z as Q,Q as _,D as X,p as m,c as n,J as ue,S as Be,ao as je,t as I,I as se,h as M,m as G,x as Ue,al as de,X as Ge,am as z,o as qe,j as Ke,a0 as ze,a9 as Je,U as C,g as Qe}from"./ErrorPage-50341dca.js";import{c as Xe,r as q,B as ce,l as Ze}from"./ListItemText-0fefb047.js";import{a as Ye,M as i}from"./MenuItem-de3f0507.js";import{u as le}from"./useControlled-fee202e5.js";import{o as en}from"./ownerDocument-5bb7a871.js";import{C as nn}from"./ComponentInfo-f3f6ea7d.js";import{C as tn}from"./Checkbox-c460d293.js";import{C as ln}from"./Chip-7e68d363.js";import"./GlobalStyles-b20d4ecd.js";import"./FormLabel-ff51371b.js";import"./Paper-992c85e1.js";import"./Popover-1b020a31.js";import"./Grow-3b12f554.js";import"./Transition-53896a82.js";import"./Modal-3367815d.js";import"./Backdrop-a8bde6a1.js";import"./Fade-01e40c87.js";import"./TransitionContext-f48b0a64.js";import"./Portal-91fefddd.js";import"./ownerWindow-09898c5b.js";import"./debounce-60370e19.js";import"./Link-09b4138b.js";import"./copyText-7f91c599.js";import"./IconButton-78ead2c8.js";import"./PaperCode-12d52286.js";import"./PageNav-b6a8a27e.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";import"./SwitchBase-17bae33c.js";function rn(l){return ie("MuiNativeSelect",l)}a(rn,"getNativeSelectUtilityClasses");const Z=oe("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),an=a(l=>{const e={select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",l.variant&&`icon${_(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"]};return je(e,rn,l.classes)},"useUtilityClasses"),me=a(({ownerState:l,theme:e})=>({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":{backgroundColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)",borderRadius:0},"&::-ms-expand":{display:"none"},[`&.${Z.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:e.palette.background.paper},"&&&":{paddingRight:24,minWidth:16},...l.variant==="filled"&&{"&&&":{paddingRight:32}},...l.variant==="outlined"&&{borderRadius:e.shape.borderRadius,"&:focus":{borderRadius:e.shape.borderRadius},"&&&":{paddingRight:32}}}),"nativeSelectSelectStyles"),on=S("select",{name:"MuiNativeSelect",slot:"Select",skipProps:Q,overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.select,e[r.variant],{[`&.${Z.multiple}`]:e.multiple}]}})(me),pe=a(({ownerState:l,theme:e})=>({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:e.palette.action.active,[`&.${Z.disabled}`]:{color:e.palette.action.disabled},...l.open&&{transform:"rotate(180deg)"},...l.variant==="filled"&&{right:7},...l.variant==="outlined"&&{right:7}}),"nativeSelectIconStyles"),un=S("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${_(r.variant)}`],r.open&&e.iconOpen]}})(pe),sn=a(function(e){const[,r]=X(e,["class","disabled","IconComponent","inputRef","variant"]),u=m({variant:"standard"},e),o=m(e,{get disabled(){return e.disabled},get variant(){return u.variant}}),s=an(o);return[n(on,m({ownerState:o,get class(){return ue(s.select,e.class)},get disabled(){return e.disabled}},r)),n(Be,{get when(){return!e.multiple},get children(){return n(un,{get as(){return e.IconComponent},ownerState:o,get class(){return s.icon}})}})]},"NativeSelectInput"),dn=I('<svg><path d="M7 10l5 5 5-5z"></path></svg>',4,!0),cn=Xe(()=>dn.cloneNode(!0),"ArrowDropDown");function mn(l){return ie("MuiSelect",l)}a(mn,"getSelectUtilityClasses");const L=oe("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput"]),pn=I('<span class="notranslate">&#8203;</span>',2),re=se()({name:"MuiSelectInput",selfPropNames:["autoFocus","autoWidth","defaultOpen","disabled","IconComponent","inputRef","MenuProps","multiple","name","native","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","value","variant"],utilityClass:mn,slotClasses:l=>({select:["select",l.variant,l.disabled&&"disabled",l.multiple&&"multiple"],icon:["icon",`icon${_(l.variant)}`,l.open&&"iconOpen",l.disabled&&"disabled"],nativeInput:["nativeInput"]})}),gn=S("div",{name:"MuiSelect",slot:"Select",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[{[`&.${L.select}`]:e.select},{[`&.${L.select}`]:e[r.variant]},{[`&.${L.multiple}`]:e.multiple}]}})(me,{[`&.${L.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),hn=S("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(l,e)=>{const{ownerState:r}=l;return[e.icon,r.variant&&e[`icon${_(r.variant)}`],r.open&&e.iconOpen]}})(pe),vn=S("input",{skipProps:Q,name:"MuiSelect",slot:"NativeInput",overridesResolver:(l,e)=>e.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function R(l,e){return typeof e=="object"&&e!==null?l===e:String(l)===String(e)}a(R,"areEqualValues");function bn(l){return l==null||typeof l=="string"&&!l.trim()}a(bn,"isEmpty");const fn=re.defineComponent(a(function(e){const r=q(e),[,u]=X(e,["ref","sx","aria-describedby","aria-label","autoFocus","autoWidth","children","class","defaultOpen","defaultValue","disabled","displayEmpty","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"]),o=m({MenuProps:{},SelectDisplayProps:{},variant:"standard"},e),[s,P]=le({controlled:()=>e.value,default:()=>e.defaultValue,name:"Select"}),[N,y]=le({controlled:()=>e.open,default:()=>e.defaultOpen,name:"Select"}),x=q(),g=q(),[v,V]=M(null),A=e.open!=null,[B,w]=M(null),Ce=a(t=>{g.current=t,V(t)},"handleDisplayRef"),j={nodeName:"INPUT",get node(){return x.current},addEventListener(t,d){if(t!=="input")throw new Error(`Invalid event name: ${t}`);x.current.addEventListener(t,d)},get value(){return s()},set value(t){P(t)},focus(){x.current.focus()}};G(Ue(()=>[v(),e.autoWidth],()=>{e.defaultOpen&&N()&&v()&&!A&&(w(e.autoWidth?null:v().clientWidth),g.current.focus())})),G(()=>{e.autoFocus&&g.current.focus()});let E;G(()=>{if(!e.labelId)return;const t=en(g.current).getElementById(e.labelId);t&&(E&&t.removeEventListener("click",E),E=a(()=>{getSelection().isCollapsed&&g.current.focus()},"clickHandler"),t.addEventListener("click",E))});const F=a((t,d)=>{t||g.current.focus(),t?e.onOpen&&e.onOpen(d):e.onClose&&e.onClose(d),A||(w(e.autoWidth?null:v().clientWidth),y(t))},"update"),ye=a(t=>{e.disabled||e.readOnly||t.button===0&&(t.preventDefault(),g.current.focus(),F(!0,t))},"handleMouseDown"),Me=a(t=>{F(!1,t)},"handleClose"),Se=de(()=>e.children),xe=a(t=>{const d=s();if(e.multiple){if(!Array.isArray(d))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");return d.some(p=>R(p,t.props.value))}else return R(d,t.props.value)},"selected"),Te=Ge(Se,t=>{if(z(t,i)){$.add(t.props),qe(()=>$.delete(t.props));const d=Ke(()=>xe(t)),p=m(t.props,{get"aria-selected"(){return d()},onClick:c=>Pe(c,p,t.props),onKeyUp:c=>{c.key===" "&&c.preventDefault(),typeof t.props.onKeyUp=="function"&&t.props.onKeyUp(c)},role:"option",get selected(){return d()},value:void 0,"data-value":t.props.value});return n(t.Component,p)}else return z(t)?n(t.Component,t.props):t}),Pe=a((t,d,p)=>{let c;const O={props:d},te=e.multiple;if(t.currentTarget.hasAttribute("tabindex")){if(te){c=Array.isArray(s())?s().slice():[];const T=s().indexOf(O.props.value);T===-1?c.push(O.props.value):c.splice(T,1)}else c=O.props.value;if(typeof p.onClick=="function"&&p.onClick(t),s()!==c){const T=new CustomEvent("input");Object.defineProperty(T,"target",{writable:!1,value:{name:d.name,get value(){return c},set value(De){j.value=De}}}),x.current.dispatchEvent(T),P(c),typeof d.onChange=="function"&&d.onChange(T,T.target)}te||F(!1,t)}},"handleItemClick"),Ae=a(t=>{e.readOnly||[" ","ArrowUp","ArrowDown","Enter"].indexOf(t.key)!==-1&&(t.preventDefault(),F(!0,t))},"handleKeyDown"),W=a(()=>v()!==null&&!!N(),"open"),we=a(t=>{!W()&&e.onBlur&&(Object.defineProperty(t,"target",{writable:!0,value:{value:s(),name:e.name}}),e.onBlur(t))},"handleBlur"),$=new Set,Oe=a(()=>{const t=s();if(Le({value:t})||e.displayEmpty){if(e.renderValue)return e.renderValue(t);if(e.multiple){const d=[];for(const p of $){if(!Array.isArray(t))throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");t.some(c=>R(c,p.value))&&d.push(p.children)}return d.reduce((p,c,O)=>(p.push(c),O<d.length-1&&p.push(", "),p),[])}else for(const d of $)if(R(t,d.value))return d.children}},"display"),Ne=a(()=>{let t=B();return!e.autoWidth&&A&&v()&&(t=v().clientWidth),t},"menuMinWidth"),Ee=m(()=>o.MenuProps.PaperProps,{style:m({get"min-width"(){const t=Ne();return typeof t=="number"?`${t}px`:void 0}},()=>o.MenuProps.PaperProps!=null?o.MenuProps.PaperProps.style:null)}),Fe=m({get"aria-labelledby"(){return e.labelId},role:"listbox",disableListWrap:!0},()=>o.MenuProps.MenuListProps),We=a(()=>typeof e.tabIndex<"u"?e.tabIndex:e.disabled?void 0:0,"tabIndex"),ee=a(()=>o.SelectDisplayProps.id||(e.name?`mui-component-select-${e.name}`:void 0),"buttonId"),D=m(e,{get variant(){return o.variant},get value(){return s()},get open(){return W()}}),U=re.useClasses(D),ne=a(()=>{const t=s();return Array.isArray(t)?t.join(","):t},"nativeSelectValue"),$e=a(()=>{const t=Oe();return bn(t)?pn.cloneNode(!0):t},"displayValue");return[n(gn,m({ref:Ce,get tabIndex(){return We()},role:"button",get["aria-disabled"](){return e.disabled?"true":void 0},get["aria-expanded"](){return W()?"true":"false"},"aria-haspopup":"listbox",get["aria-label"](){return e["aria-label"]},get["aria-labelledby"](){return[e.labelId,ee()].filter(Boolean).join(" ")||void 0},get["aria-describedby"](){return e["aria-describedby"]},onKeyDown:Ae,onMouseDown:ye,onBlur:we,get onFocus(){return e.onFocus}},()=>o.SelectDisplayProps,{ownerState:D,get sx(){return e.sx},get class(){return ue(U.select,e.class,o.SelectDisplayProps.class)},get id(){return ee()},get children(){return $e()}})),n(vn,m({get value(){return ne()},get["data-value"](){return ne()},get name(){return e.name},"aria-hidden":!0,ref:t=>{x(t),typeof e.inputRef=="function"&&e.inputRef(j),r(j)},get onChange(){return e.onChange},tabIndex:-1,get disabled(){return e.disabled},get class(){return U.nativeInput},get autofocus(){return e.autoFocus},ownerState:D},u)),n(hn,{get as(){return e.IconComponent},get class(){return U.icon},ownerState:D}),n(Ye,m({get id(){return`menu-${e.name||""}`},get anchorEl(){return v()},get open(){return W()},onClose:Me,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},()=>o.MenuProps,{MenuListProps:Fe,PaperProps:Ee,get children(){return Te()}}))]},"SelectInput")),K=se()({name:"MuiSelect",selfPropNames:["autoWidth","children","classes","defaultOpen","defaultValue","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onChange","onClose","onOpen","open","renderValue","SelectDisplayProps","value","variant"]}),Y={name:"MuiSelect",overridesResolver:(l,e)=>e.root,skipProps:[...Q,"variant"],slot:"Root"},In=S(Re,Y)({}),Cn=S(J,Y)({}),yn=S(He,Y)({}),h=K.defineComponent(a(function(e){const r=K.useThemeProps({props:e}),[,u]=X(r,["autoWidth","children","classes","class","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"]),o=m({autoWidth:!1,classes:{},defaultOpen:!1,displayEmpty:!1,IconComponent:cn,multiple:!1,native:!1,variant:"outlined"},r),s=a(()=>o.native?sn:fn,"inputComponent"),P=Ve(),N=_e({props:r,muiFormControl:P,states:["variant"]}),y=a(()=>N.variant||o.variant,"variant"),x=de(()=>r.input),g=a(()=>{const[w]=x();if(w){if(z(w))return w;throw new Error("Invalid component")}},"inputElement"),v=a(()=>g()?.Component||{standard:In,outlined:Cn,filled:yn}[y()],"InputComponent"),V=m(r,{get variant(){return y()},get classes(){return o.classes}}),A=K.useClasses(V),B=m({get children(){return r.children},get IconComponent(){return o.IconComponent},get variant(){return y()},type:void 0,get multiple(){return o.multiple}},()=>o.native?{id:r.id}:{autoWidth:o.autoWidth,defaultOpen:o.defaultOpen,displayEmpty:o.displayEmpty,labelId:r.labelId,MenuProps:r.MenuProps,onClose:r.onClose,onOpen:r.onOpen,open:r.open,renderValue:r.renderValue,SelectDisplayProps:{id:r.id,...r.SelectDisplayProps}},()=>r.inputProps,{get classes(){return r.inputProps?Je(A,r.inputProps.classes):A}},()=>g()?.props?.inputProps);return n(ze,m({get $component(){return v()}},()=>g()?.props,{get inputComponent(){return s()},inputProps:B,get notched(){return r.multiple&&r.native&&y()==="outlined"?!0:void 0},get label(){return!g()&&y()==="outlined"?r.label:void 0},get class(){return r.class},get variant(){return y()}},u))},"Select"));function ge(){const[l,e]=M(10),r=a(u=>{e(u.target.value)},"handleChange");return n(ce,{sx:{minWidth:120},get children(){return n(f,{fullWidth:!0,get children(){return[n(b,{id:"demo-simple-select-label",children:"Age"}),n(h,{labelId:"demo-simple-select-label",id:"demo-simple-select",get value(){return l()},label:"Age",onChange:r,get children(){return[n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}})]}})}})}a(ge,"BasicSelect");ge.code=`import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";

export default function BasicSelect() {
  const [age, setAge] = createSignal(10);

  const handleChange = (event: SelectChangeEvent<number>) => {
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
`;const Mn=I("<div></div>",2),Sn=48,xn=8,Tn={PaperProps:{style:{"max-height":`${Sn*4.5+xn}px`,width:`${250}px`}}},Pn=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function he(){const[l,e]=M([]),r=a(u=>{const{target:{value:o}}=u;e(typeof o=="string"?o.split(","):o)},"handleChange");return(()=>{const u=Mn.cloneNode(!0);return C(u,n(f,{sx:{m:1,width:300},get children(){return[n(b,{id:"demo-multiple-checkbox-label",children:"Tag"}),n(h,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,label:"Tag",get value(){return l()},onChange:r,get input(){return n(J,{label:"Tag"})},renderValue:o=>o.join(", "),MenuProps:Tn,get children(){return Pn.map(o=>n(i,{value:o,get children(){return[n(tn,{get checked(){return l().indexOf(o)>-1}}),n(Ze,{primary:o})]}}))}})]}})),u})()}a(he,"MultipleSelectCheckmarks");he.code=`import {
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
`;const An=I("<div></div>",2),wn=48,On=8,Nn={PaperProps:{style:{"max-height":`${wn*4.5+On}px`,width:`${250}px`}}},En=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Fn(l,e,r){return{"font-weight":e.indexOf(l)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}a(Fn,"getStyles");function ve(){const l=Qe(),[e,r]=M([]),u=a(o=>{const{target:{value:s}}=o;r(typeof s=="string"?s.split(","):s)},"handleChange");return(()=>{const o=An.cloneNode(!0);return C(o,n(f,{sx:{m:1,width:300},get children(){return[n(b,{id:"demo-multiple-chip-label",children:"Chip"}),n(h,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,get value(){return e()},onChange:u,get input(){return n(J,{id:"select-multiple-chip",label:"Chip"})},renderValue:s=>n(ce,{sx:{display:"flex",flexWrap:"wrap",gap:.5},get children(){return s.map(P=>n(ln,{label:P}))}}),MenuProps:Nn,get children(){return En.map(s=>n(i,{value:s,get style(){return Fn(s,e(),l)},children:s}))}})]}})),o})()}a(ve,"MultipleSelectChip");ve.code=`import Box from "@suid/material/Box";
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
`;const Wn=I("<em>None</em>",2),$n=I("<div></div>",2);function be(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{const u=$n.cloneNode(!0);return C(u,n(f,{sx:{m:1,minWidth:80},get children(){return[n(b,{id:"demo-simple-select-autowidth-label",children:"Age"}),n(h,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",get value(){return l()},onChange:r,autoWidth:!0,label:"Age",get children(){return[n(i,{value:"",get children(){return Wn.cloneNode(!0)}}),n(i,{value:10,children:"Twenty"}),n(i,{value:21,children:"Twenty one"}),n(i,{value:22,children:"Twenty one and a half"})]}})]}})),u})()}a(be,"SelectAutoWidth");be.code=`import { InputLabel, MenuItem, FormControl, Select } from "@suid/material";
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
`;const H=I("<em>None</em>",2),Dn=I("<div></div>",2);function fe(){const[l,e]=M(""),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{const u=Dn.cloneNode(!0);return C(u,n(f,{sx:{m:1,minWidth:120},disabled:!0,get children(){return[n(b,{id:"demo-simple-select-disabled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",get value(){return l()},label:"Age",onChange:r,get children(){return[n(i,{value:"",get children(){return H.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(k,{children:"Disabled"})]}}),null),C(u,n(f,{sx:{m:1,minWidth:120},error:!0,get children(){return[n(b,{id:"demo-simple-select-error-label",children:"Age"}),n(h,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",get value(){return l()},label:"Age",onChange:r,renderValue:o=>`⚠️ - ${o}`,get children(){return[n(i,{value:"",get children(){return H.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(k,{children:"Error"})]}}),null),C(u,n(f,{sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-readonly-label",children:"Age"}),n(h,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",get value(){return l()},label:"Age",onChange:r,inputProps:{readOnly:!0},get children(){return[n(i,{value:"",get children(){return H.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(k,{children:"Read only"})]}}),null),C(u,n(f,{required:!0,sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-required-label",children:"Age"}),n(h,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",get value(){return l()},label:"Age *",onChange:r,get children(){return[n(i,{value:"",get children(){return H.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}}),n(k,{children:"Required"})]}}),null),u})()}a(fe,"SelectOtherProps");fe.code=`import {
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
`;const ae=I("<em>None</em>",2),kn=I("<div></div>",2);function Ie(){const[l,e]=M("10"),r=a(u=>{e(u.target.value)},"handleChange");return(()=>{const u=kn.cloneNode(!0);return C(u,n(f,{variant:"standard",sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-standard-label",children:"Age"}),n(h,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",get value(){return l()},onChange:r,label:"Age",get children(){return[n(i,{value:"",get children(){return ae.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}})]}}),null),C(u,n(f,{variant:"filled",sx:{m:1,minWidth:120},get children(){return[n(b,{id:"demo-simple-select-filled-label",children:"Age"}),n(h,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",get value(){return l()},onChange:r,get children(){return[n(i,{value:"",get children(){return ae.cloneNode(!0)}}),n(i,{value:10,children:"Ten"}),n(i,{value:20,children:"Twenty"}),n(i,{value:30,children:"Thirty"})]}})]}}),null),u})()}a(Ie,"SelectVariants");Ie.code=`import { FormControl, InputLabel, MenuItem, Select } from "@suid/material";
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
`;function bt(){return n(nn,{get name(){return h.name},examples:[ge,Ie,be,fe,he,ve]})}a(bt,"SelectPage");export{bt as default};
