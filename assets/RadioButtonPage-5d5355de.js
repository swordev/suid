var O=Object.defineProperty;var r=(e,o)=>O(e,"name",{value:o,configurable:!0});import{S as j,F as H}from"./SwitchBase-7471566f.js";import{U as N,Y as x,c as I,t as f,w as g,m as s,d as n,r as y,s as M,v,O as V,a6 as q,a1 as W,aB as Y,a as b,H as u,x as Z,W as A}from"./index-58d67e0c.js";import{C as J}from"./ComponentInfo-7a5efda9.js";import{p as k}from"./pink-efbff62a.js";import{f as K,F as z}from"./formControlState-b8f62008.js";import{F as p}from"./FormControlLabel-eb102587.js";import{F as B}from"./FormLabel-39ed6cb7.js";import{u as Q}from"./useFormControl-188f190e.js";import{u as X}from"./useControlled-57bc455d.js";import{c as ee}from"./createUniqueId-5e7f9f0c.js";import"./Link-a6b64480.js";import"./copyText-a21b3bd2.js";import"./PaperCode-e8308b2e.js";const L=N(void 0);function oe(){return x(L)}r(oe,"useRadioGroup");const ne=f('<svg><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></svg>',!1,!0),te=I(()=>ne(),"RadioButtonChecked"),re=f('<svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></svg>',!1,!0),ae=I(()=>re(),"RadioButtonUnchecked"),le=g("span")({position:"relative",display:"flex"}),ie=g(ae)({transform:"scale(1)"}),se=g(te)(({theme:e,ownerState:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),...o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}));function R(e){const o=s({checked:!1,classes:{}},e);return n(le,{get class(){return o.classes.root},ownerState:o,get children(){return[n(ie,{get fontSize(){return e.fontSize},get class(){return o.classes.background},ownerState:o}),n(se,{get fontSize(){return e.fontSize},get class(){return o.classes.dot},ownerState:o})]}})}r(R,"RadioButtonIcon");function ce(e){return M("MuiRadio",e)}r(ce,"getRadioUtilityClass");const G=y("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),ue=v()({name:"MuiRadio",propDefaults:({set:e})=>e({checkedIcon:P,color:"primary",icon:$,size:"medium"}),selfPropNames:["checkedIcon","classes","color","disabled","icon","size"],utilityClass:ce,slotClasses:e=>({root:["root",`color${V(e.color)}`]})}),de=g(j,{skipProps:q.filter(e=>e!=="classes"),name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>[o.root,o[`color${V(e.ownerState.color)}`]]})(({theme:e,ownerState:o})=>({color:e.palette.text.secondary,"&:hover":{backgroundColor:W(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...o.color!=="default"&&{[`&.${G.checked}`]:{color:e.palette[o.color].main}},[`&.${G.disabled}`]:{color:e.palette.action.disabled}}));function me(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}r(me,"areEqualValues");const P=r(()=>n(R,{checked:!0}),"defaultCheckedIcon"),$=r(()=>n(R,{}),"defaultIcon"),i=ue.component(r(function({classes:o,allProps:l,otherProps:a,props:t}){const d=oe(),c=x(H),m=r(()=>a.name??c?.name??d?.name,"name"),S=r(()=>a.value??c?.value,"value"),F=r(()=>a.checked??c?.checked??me(d?.value,S()),"checked"),_=r(()=>t.checkedIcon===P&&t.icon===$,"haveDefaultIcons");return n(Y.Provider,{value:{get fontSize(){return t.size}},get children(){return n(de,s({type:"radio"},a,{ownerState:l,classes:o,get name(){return m()},get value(){return S()},get checked(){return F()},onChange:(C,h)=>{a.onChange?.(C,h),c?.onChange?.(C,h),d?.onChange?.(C,h)}},()=>_()?{get children(){return n(R,{get checked(){return F()}})},get icon(){return[]},get checkedIcon(){return[]}}:{get icon(){return t.icon},get checkedIcon(){return t.checkedIcon}}))}})},"Radio")),pe=f("<div>");function w(){const[e,o]=b("a"),l=r(t=>{o(t.target.value)},"handleChange"),a=r(t=>({get checked(){return e()===t},onChange:l,value:t,name:"color-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=pe();return u(t,n(i,s(()=>a("a"))),null),u(t,n(i,s(()=>a("b"),{color:"secondary"})),null),u(t,n(i,s(()=>a("c"),{color:"success"})),null),u(t,n(i,s(()=>a("d"),{color:"default"})),null),u(t,n(i,s(()=>a("e"),{get sx(){return{color:k[800],"&.Mui-checked":{color:k[600]}}}})),null),t})()}r(w,"ColorRadioButtons");w.code=`import { Radio } from "@suid/material";
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
`;function ge(e){return M("MuiFormGroup",e)}r(ge,"getFormGroupUtilityClass");y("MuiFormGroup",["root","row","error"]);const fe=v()({name:"MuiFormGroup",propDefaults:({set:e})=>e({row:!1}),selfPropNames:["children","classes","row"],utilityClass:ge,slotClasses:e=>({root:["root",e.row&&"row",!!e.error&&"error"]})}),Ce=g("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[o.root,l.row&&o.row]}})(({ownerState:e})=>({display:"flex",flexDirection:"column",flexWrap:"wrap",...e.row&&{flexDirection:"row"}})),he=fe.component(r(function({props:o,allProps:l,classes:a,otherProps:t}){const d=Q(),c=K({props:l,muiFormControl:d,states:["error"]}),m=s(l,{get error(){return c.error}});return n(Ce,s(t,{get class(){return Z(a.root,t.class)},ownerState:m,get children(){return o.children}}))},"FormGroup")),ve=v()({name:"MuiRadioGroup",selfPropNames:["defaultValue","name","onChange","value"]}),E=ve.component(r(function({props:o,otherProps:l}){const a=A(),[t,d]=X({controlled:()=>o.value,default:()=>o.defaultValue,name:"RadioGroup"}),c=ee(()=>o.name);return n(L.Provider,{value:{get name(){return c()},onChange(m){d(m.target.value),o.onChange&&o.onChange(m,m.target.value)},get value(){return t()}},get children(){return n(he,s({role:"radiogroup",ref:a},l,{get children(){return l.children}}))}})},"RadioGroup"));function T(){const[e,o]=b("female"),l=r(a=>{o(a.target.value)},"handleChange");return n(z,{get children(){return[n(B,{id:"demo-controlled-radio-buttons-group",children:"Gender"}),n(E,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",get value(){return e()},onChange:l,get children(){return[n(p,{value:"female",get control(){return n(i,{})},label:"Female"}),n(p,{value:"male",get control(){return n(i,{})},label:"Male"})]}})]}})}r(T,"ControlledRadioButtonsGroup");T.code=`import {
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
`;function U(){return n(z,{get children(){return[n(B,{id:"demo-radio-buttons-group-label",children:"Gender"}),n(E,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",get children(){return[n(p,{value:"female",control:()=>n(i,{}),label:"Female"}),n(p,{value:"male",control:()=>n(i,{}),label:"Male"}),n(p,{value:"other",control:()=>n(i,{}),label:"Other"})]}})]}})}r(U,"RadioButtonsGroupExample");U.code=`import {
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
`;const be=f("<div>");function D(){const[e,o]=b("a"),l=r(t=>{o(t.target.value)},"handleChange"),a=r(t=>({get checked(){return e()===t},onChange:l,value:t,name:"size-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=be();return u(t,n(i,s(()=>a("a"),{size:"small"})),null),u(t,n(i,s(()=>a("b"))),null),u(t,n(i,s(()=>a("c"),{sx:{"& .MuiSvgIcon-root":{fontSize:28}}})),null),t})()}r(D,"SizeRadioButtons");D.code=`import { Radio } from "@suid/material";
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
`;function $e(){return n(J,{get name(){return i.name},docsName:"radio-button",examples:[{title:"Radio group",component:U},{title:"Controlled",component:T},{title:"Size",component:D},{title:"Color",component:w}]})}r($e,"ButtonPage");export{$e as default};
