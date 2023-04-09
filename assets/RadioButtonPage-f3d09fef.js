var O=Object.defineProperty;var t=(e,o)=>O(e,"name",{value:o,configurable:!0});import{S as q,F as W}from"./SwitchBase-d9ef71c6.js";import{a9 as J,ad as I,c as y,t as M,X as C,H as f,U as i,K as V,N as $,Q as v,R as z,ac as K,a5 as Q,aJ as X,a as R,x as u,d as r,m as d,e as L,W as Z,ab as A}from"./index-4edd6e97.js";import{C as Y}from"./ComponentInfo-031a9ae7.js";import{p as G}from"./pink-efbff62a.js";import{f as ee,F as P}from"./formControlState-b0866c3b.js";import{F as g}from"./FormControlLabel-7bcb39af.js";import{F as B}from"./FormLabel-0a45e85e.js";import{u as oe}from"./useFormControl-eccca9b1.js";import{u as ne}from"./useControlled-ac5817ae.js";import{c as te}from"./createUniqueId-c6222b9f.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";const w=J(void 0);function re(){return I(w)}t(re,"useRadioGroup");const ae=M('<svg><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></svg>',!1,!0),le=y(()=>ae(),"RadioButtonChecked"),se=M('<svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></svg>',!1,!0),ie=y(()=>se(),"RadioButtonUnchecked"),ce=C("span")({position:"relative",display:"flex"}),ue=C(ie)({transform:"scale(1)"}),de=C(le)(({theme:e,ownerState:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),...o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}));function S(e){const o=f({checked:!1,classes:{}},e);return i(ce,{get class(){return o.classes.root},ownerState:o,get children(){return[i(ue,{get fontSize(){return e.fontSize},get class(){return o.classes.background},ownerState:o}),i(de,{get fontSize(){return e.fontSize},get class(){return o.classes.dot},ownerState:o})]}})}t(S,"RadioButtonIcon");function me(e){return $("MuiRadio",e)}t(me,"getRadioUtilityClass");const x=V("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),pe=v()({name:"MuiRadio",propDefaults:({set:e})=>e({checkedIcon:E,color:"primary",icon:T,size:"medium"}),selfPropNames:["checkedIcon","classes","color","disabled","icon","size"],utilityClass:me,slotClasses:e=>({root:["root",`color${z(e.color)}`]})}),ge=C(q,{skipProps:K.filter(e=>e!=="classes"),name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>[o.root,o[`color${z(e.ownerState.color)}`]]})(({theme:e,ownerState:o})=>({color:e.palette.text.secondary,"&:hover":{backgroundColor:Q(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...o.color!=="default"&&{[`&.${x.checked}`]:{color:e.palette[o.color].main}},[`&.${x.disabled}`]:{color:e.palette.action.disabled}}));function fe(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}t(fe,"areEqualValues");const E=t(()=>i(S,{checked:!0}),"defaultCheckedIcon"),T=t(()=>i(S,{}),"defaultIcon"),s=pe.component(t(function({classes:o,allProps:l,otherProps:a,props:n}){const m=re(),c=I(W),p=t(()=>a.name??c?.name??m?.name,"name"),F=t(()=>a.value??c?.value,"value"),k=t(()=>a.checked??c?.checked??fe(m?.value,F()),"checked"),H=t(()=>n.checkedIcon===E&&n.icon===T,"haveDefaultIcons");return i(X.Provider,{value:{get fontSize(){return n.size}},get children(){return i(ge,f({type:"radio"},a,{ownerState:l,classes:o,get name(){return p()},get value(){return F()},get checked(){return k()},onChange:(h,b)=>{a.onChange?.(h,b),c?.onChange?.(h,b),m?.onChange?.(h,b)}},()=>H()?{get children(){return i(S,{get checked(){return k()}})},get icon(){return[]},get checkedIcon(){return[]}}:{get icon(){return n.icon},get checkedIcon(){return n.checkedIcon}}))}})},"Radio")),Ce=L("<div>");function U(){const[e,o]=R("a"),l=t(n=>{o(n.target.value)},"handleChange"),a=t(n=>({get checked(){return e()===n},onChange:l,value:n,name:"color-radio-button-demo",inputProps:{"aria-label":n}}),"controlProps");return(()=>{const n=Ce();return u(n,r(s,d(()=>a("a"))),null),u(n,r(s,d(()=>a("b"),{color:"secondary"})),null),u(n,r(s,d(()=>a("c"),{color:"success"})),null),u(n,r(s,d(()=>a("d"),{color:"default"})),null),u(n,r(s,d(()=>a("e"),{get sx(){return{color:G[800],"&.Mui-checked":{color:G[600]}}}})),null),n})()}t(U,"ColorRadioButtons");U.code=`import { Radio } from "@suid/material";
import { pink } from "@suid/material/colors";
import * as ST from "@suid/types";
import { createSignal } from "solid-js";

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = createSignal("a");

  const handleChange = (event: ST.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    get checked() {
      return selectedValue() === item;
    },
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      <Radio {...controlProps("a")} />
      <Radio {...controlProps("b")} color="secondary" />
      <Radio {...controlProps("c")} color="success" />
      <Radio {...controlProps("d")} color="default" />
      <Radio
        {...controlProps("e")}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}
`;function he(e){return $("MuiFormGroup",e)}t(he,"getFormGroupUtilityClass");V("MuiFormGroup",["root","row","error"]);const be=v()({name:"MuiFormGroup",propDefaults:({set:e})=>e({row:!1}),selfPropNames:["children","classes","row"],utilityClass:he,slotClasses:e=>({root:["root",e.row&&"row",!!e.error&&"error"]})}),ve=C("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[o.root,l.row&&o.row]}})(({ownerState:e})=>({display:"flex",flexDirection:"column",flexWrap:"wrap",...e.row&&{flexDirection:"row"}})),Re=be.component(t(function({props:o,allProps:l,classes:a,otherProps:n}){const m=oe(),c=ee({props:l,muiFormControl:m,states:["error"]}),p=f(l,{get error(){return c.error}});return i(ve,f(n,{get class(){return Z(a.root,n.class)},ownerState:p,get children(){return o.children}}))},"FormGroup")),Se=v()({name:"MuiRadioGroup",propDefaults:({set:e})=>e({}),selfPropNames:["defaultValue","name","onChange","value"]}),D=Se.component(t(function({props:o,otherProps:l}){const a=A(),[n,m]=ne({controlled:()=>o.value,default:()=>o.defaultValue,name:"RadioGroup"}),c=te(()=>o.name);return i(w.Provider,{value:{get name(){return c()},onChange(p){m(p.target.value),o.onChange&&o.onChange(p,p.target.value)},get value(){return n()}},get children(){return i(Re,f({role:"radiogroup",ref:a},l,{get children(){return l.children}}))}})},"RadioGroup"));function _(){const[e,o]=R("female"),l=t(a=>{o(a.target.value)},"handleChange");return r(P,{get children(){return[r(B,{id:"demo-controlled-radio-buttons-group",children:"Gender"}),r(D,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",get value(){return e()},onChange:l,get children(){return[r(g,{value:"female",get control(){return r(s,{})},label:"Female"}),r(g,{value:"male",get control(){return r(s,{})},label:"Male"})]}})]}})}t(_,"ControlledRadioButtonsGroup");_.code=`import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@suid/material";
import * as ST from "@suid/types";
import { createSignal } from "solid-js";

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = createSignal("female");

  const handleChange = (event: ST.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value()}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
`;function N(){return r(P,{get children(){return[r(B,{id:"demo-radio-buttons-group-label",children:"Gender"}),r(D,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",get children(){return[r(g,{value:"female",control:()=>r(s,{}),label:"Female"}),r(g,{value:"male",control:()=>r(s,{}),label:"Male"}),r(g,{value:"other",control:()=>r(s,{}),label:"Other"})]}})]}})}t(N,"RadioButtonsGroupExample");N.code=`import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@suid/material";

export default function RadioButtonsGroupExample() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={() => <Radio />}
          label="Female"
        />
        <FormControlLabel value="male" control={() => <Radio />} label="Male" />
        <FormControlLabel
          value="other"
          control={() => <Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
`;const Fe=L("<div>");function j(){const[e,o]=R("a"),l=t(n=>{o(n.target.value)},"handleChange"),a=t(n=>({get checked(){return e()===n},onChange:l,value:n,name:"size-radio-button-demo",inputProps:{"aria-label":n}}),"controlProps");return(()=>{const n=Fe();return u(n,r(s,d(()=>a("a"),{size:"small"})),null),u(n,r(s,d(()=>a("b"))),null),u(n,r(s,d(()=>a("c"),{sx:{"& .MuiSvgIcon-root":{fontSize:28}}})),null),n})()}t(j,"SizeRadioButtons");j.code=`import { Radio } from "@suid/material";
import * as ST from "@suid/types";
import { createSignal } from "solid-js";

export default function SizeRadioButtons() {
  const [selectedValue, setSelectedValue] = createSignal("a");
  const handleChange = (event: ST.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    get checked() {
      return selectedValue() === item;
    },
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      <Radio {...controlProps("a")} size="small" />
      <Radio {...controlProps("b")} />
      <Radio
        {...controlProps("c")}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 28,
          },
        }}
      />
    </div>
  );
}
`;function Ue(){return r(Y,{get name(){return s.name},docsName:"radio-button",examples:[{title:"Radio group",component:N},{title:"Controlled",component:_},{title:"Size",component:j},{title:"Color",component:U}]})}t(Ue,"ButtonPage");export{Ue as default};
