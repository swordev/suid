var N=Object.defineProperty;var r=(e,o)=>N(e,"name",{value:o,configurable:!0});import{F as O,S as j}from"./SwitchBase-C2Dul_5H.js";import{a2 as H,a3 as x,c as I,t as f,m as s,h as n,U as g,N as y,O as M,f as h,aL as q,V,aM as Z,Z as W,a as b,E as u,R as A,a6 as J}from"./index-NCmNIr1K.js";import{C as K}from"./ComponentInfo-C3huals-.js";import{p as k}from"./pink-CacABY1C.js";import{f as Q,F as L}from"./formControlState-DdF9v2Nz.js";import{F as p}from"./FormControlLabel-n3vtLoZ0.js";import{F as z}from"./FormLabel-CWNlHm_x.js";import{u as X}from"./useFormControl-BcHBdGir.js";import{u as Y}from"./useControlled-Blc4Q9QM.js";import{c as ee}from"./createUniqueId--pU5VRPf.js";import"./Link-Ci3uEOYa.js";import"./copyText-C_G9kHbS.js";import"./PaperCode-BKLbHUJT.js";const B=H(void 0);function oe(){return x(B)}r(oe,"useRadioGroup");var ne=f('<svg><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></svg>',!1,!0,!1);const te=I(()=>ne(),"RadioButtonChecked");var re=f('<svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></svg>',!1,!0,!1);const ae=I(()=>re(),"RadioButtonUnchecked"),le=g("span")({position:"relative",display:"flex"}),ie=g(ae)({transform:"scale(1)"}),se=g(te)(({theme:e,ownerState:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),...o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}));function R(e){const o=s({checked:!1,classes:{}},e);return n(le,{get class(){return o.classes.root},ownerState:o,get children(){return[n(ie,{get fontSize(){return e.fontSize},get class(){return o.classes.background},ownerState:o}),n(se,{get fontSize(){return e.fontSize},get class(){return o.classes.dot},ownerState:o})]}})}r(R,"RadioButtonIcon");function ce(e){return M("MuiRadio",e)}r(ce,"getRadioUtilityClass");const G=y("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),ue=h()({name:"MuiRadio",propDefaults:r(({set:e})=>e({checkedIcon:P,color:"primary",icon:$,size:"medium"}),"propDefaults"),selfPropNames:["checkedIcon","classes","color","disabled","icon","size"],utilityClass:ce,slotClasses:r(e=>({root:["root",`color${V(e.color)}`]}),"slotClasses")}),de=g(j,{skipProps:Z.filter(e=>e!=="classes"),name:"MuiRadio",slot:"Root",overridesResolver:r((e,o)=>[o.root,o[`color${V(e.ownerState.color)}`]],"overridesResolver")})(({theme:e,ownerState:o})=>({color:e.palette.text.secondary,"&:hover":{backgroundColor:W(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...o.color!=="default"&&{[`&.${G.checked}`]:{color:e.palette[o.color].main}},[`&.${G.disabled}`]:{color:e.palette.action.disabled}}));function me(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}r(me,"areEqualValues");const P=r(()=>n(R,{checked:!0}),"defaultCheckedIcon"),$=r(()=>n(R,{}),"defaultIcon"),i=ue.component(r(function({classes:o,allProps:l,otherProps:a,props:t}){const d=oe(),c=x(O),m=r(()=>a.name??c?.name??d?.name,"name"),F=r(()=>a.value??c?.value,"value"),S=r(()=>a.checked??c?.checked??me(d?.value,F()),"checked"),_=r(()=>t.checkedIcon===P&&t.icon===$,"haveDefaultIcons");return n(q.Provider,{value:{get fontSize(){return t.size}},get children(){return n(de,s({type:"radio"},a,{ownerState:l,classes:o,get name(){return m()},get value(){return F()},get checked(){return S()},onChange:r((C,v)=>{a.onChange?.(C,v),c?.onChange?.(C,v),d?.onChange?.(C,v)},"onChange")},()=>_()?{get children(){return n(R,{get checked(){return S()}})},get icon(){return[]},get checkedIcon(){return[]}}:{get icon(){return t.icon},get checkedIcon(){return t.checkedIcon}}))}})},"Radio2"));var pe=f("<div>");function w(){const[e,o]=b("a"),l=r(t=>{o(t.target.value)},"handleChange"),a=r(t=>({get checked(){return e()===t},onChange:l,value:t,name:"color-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{var t=pe();return u(t,n(i,s(()=>a("a"))),null),u(t,n(i,s(()=>a("b"),{color:"secondary"})),null),u(t,n(i,s(()=>a("c"),{color:"success"})),null),u(t,n(i,s(()=>a("d"),{color:"default"})),null),u(t,n(i,s(()=>a("e"),{get sx(){return{color:k[800],"&.Mui-checked":{color:k[600]}}}})),null),t})()}r(w,"ColorRadioButtons");w.code=`import { Radio } from "@suid/material";
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
`;function ge(e){return M("MuiFormGroup",e)}r(ge,"getFormGroupUtilityClass");y("MuiFormGroup",["root","row","error"]);const fe=h()({name:"MuiFormGroup",propDefaults:r(({set:e})=>e({row:!1}),"propDefaults"),selfPropNames:["children","classes","row"],utilityClass:ge,slotClasses:r(e=>({root:["root",e.row&&"row",!!e.error&&"error"]}),"slotClasses")}),Ce=g("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:r((e,o)=>{const{ownerState:l}=e;return[o.root,l.row&&o.row]},"overridesResolver")})(({ownerState:e})=>({display:"flex",flexDirection:"column",flexWrap:"wrap",...e.row&&{flexDirection:"row"}})),ve=fe.component(r(function({props:o,allProps:l,classes:a,otherProps:t}){const d=X(),c=Q({props:l,muiFormControl:d,states:["error"]}),m=s(l,{get error(){return c.error}});return n(Ce,s(t,{get class(){return A(a.root,t.class)},ownerState:m,get children(){return o.children}}))},"FormGroup2")),he=h()({name:"MuiRadioGroup",selfPropNames:["defaultValue","name","onChange","value"]}),E=he.component(r(function({props:o,otherProps:l}){const a=J(),[t,d]=Y({controlled:r(()=>o.value,"controlled"),default:r(()=>o.defaultValue,"default"),name:"RadioGroup"}),c=ee(()=>o.name);return n(B.Provider,{value:{get name(){return c()},onChange(m){d(m.target.value),o.onChange&&o.onChange(m,m.target.value)},get value(){return t()}},get children(){return n(ve,s({role:"radiogroup",ref:a},l,{get children(){return l.children}}))}})},"RadioGroup2"));function T(){const[e,o]=b("female"),l=r(a=>{o(a.target.value)},"handleChange");return n(L,{get children(){return[n(z,{id:"demo-controlled-radio-buttons-group",children:"Gender"}),n(E,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",get value(){return e()},onChange:l,get children(){return[n(p,{value:"female",get control(){return n(i,{})},label:"Female"}),n(p,{value:"male",get control(){return n(i,{})},label:"Male"})]}})]}})}r(T,"ControlledRadioButtonsGroup");T.code=`import {
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
`;function U(){return n(L,{get children(){return[n(z,{id:"demo-radio-buttons-group-label",children:"Gender"}),n(E,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",get children(){return[n(p,{value:"female",get control(){return n(i,{})},label:"Female"}),n(p,{value:"male",get control(){return n(i,{})},label:"Male"}),n(p,{value:"other",get control(){return n(i,{})},label:"Other"})]}})]}})}r(U,"RadioButtonsGroupExample");U.code=`import {
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
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}
`;var be=f("<div>");function D(){const[e,o]=b("a"),l=r(t=>{o(t.target.value)},"handleChange"),a=r(t=>({get checked(){return e()===t},onChange:l,value:t,name:"size-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{var t=be();return u(t,n(i,s(()=>a("a"),{size:"small"})),null),u(t,n(i,s(()=>a("b"))),null),u(t,n(i,s(()=>a("c"),{sx:{"& .MuiSvgIcon-root":{fontSize:28}}})),null),t})()}r(D,"SizeRadioButtons");D.code=`import { Radio } from "@suid/material";
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
`;function $e(){return n(K,{get name(){return i.name},docsName:"radio-button",examples:[{title:"Radio group",component:U},{title:"Controlled",component:T},{title:"Size",component:D},{title:"Color",component:w}]})}r($e,"ButtonPage");export{$e as default};
