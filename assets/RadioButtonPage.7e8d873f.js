var _=Object.defineProperty;var r=(e,o)=>_(e,"name",{value:o,configurable:!0});import{S as j,F as O}from"./SwitchBase.47c8ea92.js";import{ae as H,af as x,c as I,t as f,x as g,m as c,d as n,r as y,s as M,v,w as z,an as q,z as W,ao as Z,a as b,a6 as u,E as A,ah as J}from"./index.28506464.js";import{C as K}from"./ComponentInfo.6ce91a5c.js";import{p as k}from"./pink.26d9c0dd.js";import{f as Q,F as V}from"./formControlState.3d5b94eb.js";import{F as p}from"./FormControlLabel.80b3db74.js";import{F as L}from"./FormLabel.5bb1b55b.js";import{u as X}from"./useFormControl.e95e4e7b.js";import{u as Y}from"./useControlled.d369401e.js";import{c as ee}from"./createUniqueId.133ea763.js";import"./Link.d0d1f610.js";import"./copyText.f0626c1f.js";import"./PaperCode.4d4bb9ba.js";const B=H(void 0);function oe(){return x(B)}r(oe,"useRadioGroup");const ne=f('<svg><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>',4,!0),te=I(()=>ne.cloneNode(!0),"RadioButtonChecked"),re=f('<svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',4,!0),ae=I(()=>re.cloneNode(!0),"RadioButtonUnchecked"),le=g("span")({position:"relative",display:"flex"}),ie=g(ae)({transform:"scale(1)"}),ce=g(te)(({theme:e,ownerState:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),...o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}));function R(e){const o=c({checked:!1,classes:{}},e);return n(le,{get class(){return o.classes.root},ownerState:o,get children(){return[n(ie,{get fontSize(){return e.fontSize},get class(){return o.classes.background},ownerState:o}),n(ce,{get fontSize(){return e.fontSize},get class(){return o.classes.dot},ownerState:o})]}})}r(R,"RadioButtonIcon");function se(e){return M("MuiRadio",e)}r(se,"getRadioUtilityClass");const G=y("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),ue=v()({name:"MuiRadio",propDefaults:({set:e})=>e({checkedIcon:P,color:"primary",icon:$,size:"medium"}),selfPropNames:["checkedIcon","classes","color","disabled","icon","size"],utilityClass:se,slotClasses:e=>({root:["root",`color${z(e.color)}`]})}),de=g(j,{skipProps:q.filter(e=>e!=="classes"),name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>[o.root,o[`color${z(e.ownerState.color)}`]]})(({theme:e,ownerState:o})=>({color:e.palette.text.secondary,"&:hover":{backgroundColor:W(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...o.color!=="default"&&{[`&.${G.checked}`]:{color:e.palette[o.color].main}},[`&.${G.disabled}`]:{color:e.palette.action.disabled}}));function me(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}r(me,"areEqualValues");const P=r(()=>n(R,{checked:!0}),"defaultCheckedIcon"),$=r(()=>n(R,{}),"defaultIcon"),i=ue.component(r(function({classes:o,allProps:l,otherProps:a,props:t}){const d=oe(),s=x(O),m=r(()=>a.name??s?.name??d?.name,"name"),S=r(()=>a.value??s?.value,"value"),F=r(()=>a.checked??s?.checked??me(d?.value,S()),"checked"),U=r(()=>t.checkedIcon===P&&t.icon===$,"haveDefaultIcons");return n(Z.Provider,{value:{get fontSize(){return t.size}},get children(){return n(de,c({type:"radio"},a,{ownerState:l,classes:o,get name(){return m()},get value(){return S()},get checked(){return F()},onChange:(C,h)=>{a.onChange?.(C,h),s?.onChange?.(C,h),d?.onChange?.(C,h)}},()=>U()?{get children(){return n(R,{get checked(){return F()}})},get icon(){return[]},get checkedIcon(){return[]}}:{get icon(){return t.icon},get checkedIcon(){return t.checkedIcon}}))}})},"Radio")),pe=f("<div></div>");function w(){const[e,o]=b("a"),l=r(t=>{o(t.target.value)},"handleChange"),a=r(t=>({get checked(){return e()===t},onChange:l,value:t,name:"color-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=pe.cloneNode(!0);return u(t,n(i,c(()=>a("a"))),null),u(t,n(i,c(()=>a("b"),{color:"secondary"})),null),u(t,n(i,c(()=>a("c"),{color:"success"})),null),u(t,n(i,c(()=>a("d"),{color:"default"})),null),u(t,n(i,c(()=>a("e"),{get sx(){return{color:k[800],"&.Mui-checked":{color:k[600]}}}})),null),t})()}r(w,"ColorRadioButtons");w.code=`import { Radio } from "@suid/material";
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
`;function ge(e){return M("MuiFormGroup",e)}r(ge,"getFormGroupUtilityClass");y("MuiFormGroup",["root","row","error"]);const fe=v()({name:"MuiFormGroup",propDefaults:({set:e})=>e({row:!1}),selfPropNames:["children","classes","row"],utilityClass:ge,slotClasses:e=>({root:["root",e.row&&"row",!!e.error&&"error"]})}),Ce=g("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[o.root,l.row&&o.row]}})(({ownerState:e})=>({display:"flex",flexDirection:"column",flexWrap:"wrap",...e.row&&{flexDirection:"row"}})),he=fe.component(r(function({props:o,allProps:l,classes:a,otherProps:t}){const d=X(),s=Q({props:l,muiFormControl:d,states:["error"]}),m=c(l,{get error(){return s.error}});return n(Ce,c(t,{get class(){return A(a.root,t.class)},ownerState:m,get children(){return o.children}}))},"FormGroup")),ve=v()({name:"MuiRadioGroup",propDefaults:({set:e})=>e({}),selfPropNames:["defaultValue","name","onChange","value"]}),E=ve.component(r(function({props:o,otherProps:l}){const a=J(),[t,d]=Y({controlled:()=>o.value,default:()=>o.defaultValue,name:"RadioGroup"}),s=ee(()=>o.name);return n(B.Provider,{value:{get name(){return s()},onChange(m){d(m.target.value),o.onChange&&o.onChange(m,m.target.value)},get value(){return t()}},get children(){return n(he,c({role:"radiogroup",ref:a},l,{get children(){return l.children}}))}})},"RadioGroup"));function T(){const[e,o]=b("female"),l=r(a=>{o(a.target.value)},"handleChange");return n(V,{get children(){return[n(L,{id:"demo-controlled-radio-buttons-group",children:"Gender"}),n(E,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",get value(){return e()},onChange:l,get children(){return[n(p,{value:"female",get control(){return n(i,{})},label:"Female"}),n(p,{value:"male",get control(){return n(i,{})},label:"Male"})]}})]}})}r(T,"ControlledRadioButtonsGroup");T.code=`import {
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
`;function N(){return n(V,{get children(){return[n(L,{id:"demo-radio-buttons-group-label",children:"Gender"}),n(E,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",get children(){return[n(p,{value:"female",control:()=>n(i,{}),label:"Female"}),n(p,{value:"male",control:()=>n(i,{}),label:"Male"}),n(p,{value:"other",control:()=>n(i,{}),label:"Other"})]}})]}})}r(N,"RadioButtonsGroupExample");N.code=`import {
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
`;const be=f("<div></div>");function D(){const[e,o]=b("a"),l=r(t=>{o(t.target.value)},"handleChange"),a=r(t=>({get checked(){return e()===t},onChange:l,value:t,name:"size-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=be.cloneNode(!0);return u(t,n(i,c(()=>a("a"),{size:"small"})),null),u(t,n(i,c(()=>a("b"))),null),u(t,n(i,c(()=>a("c"),{sx:{"& .MuiSvgIcon-root":{fontSize:28}}})),null),t})()}r(D,"SizeRadioButtons");D.code=`import { Radio } from "@suid/material";
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
`;function $e(){return n(K,{get name(){return i.name},docsName:"radio-button",examples:[{title:"Radio group",component:N},{title:"Controlled",component:T},{title:"Size",component:D},{title:"Color",component:w}]})}r($e,"ButtonPage");export{$e as default};
