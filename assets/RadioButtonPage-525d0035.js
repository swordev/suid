var _=Object.defineProperty;var r=(o,e)=>_(o,"name",{value:e,configurable:!0});import{S as j,F as O}from"./SwitchBase-316ad80d.js";import{j as H,k as x,t as f,O as g,w as c,c as n,K as I,L as y,G as v,N as M,W as q,X as W,a as b,P as u,H as K}from"./ErrorPage-7e24a11e.js";import{c as L,r as X,p as Z}from"./ListItemText-97540f66.js";import{C as A}from"./ComponentInfo-fb88dbff.js";import{p as k}from"./pink-efbff62a.js";import{f as J,F as V}from"./formControlState-ed897386.js";import{F as p}from"./FormControlLabel-6737e70d.js";import{F as z}from"./FormLabel-a323177e.js";import{u as Q}from"./useFormControl-b0cba849.js";import{u as Y}from"./useControlled-4747f91f.js";import{c as oo}from"./createUniqueId-7e452e8e.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const P=H(void 0);function eo(){return x(P)}r(eo,"useRadioGroup");const no=f('<svg><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>',4,!0),to=L(()=>no.cloneNode(!0),"RadioButtonChecked"),ro=f('<svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',4,!0),ao=L(()=>ro.cloneNode(!0),"RadioButtonUnchecked"),lo=g("span")({position:"relative",display:"flex"}),io=g(ao)({transform:"scale(1)"}),co=g(to)(({theme:o,ownerState:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest}),...e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}}));function R(o){const e=c({checked:!1,classes:{}},o);return n(lo,{get class(){return e.classes.root},ownerState:e,get children(){return[n(io,{get fontSize(){return o.fontSize},get class(){return e.classes.background},ownerState:e}),n(co,{get fontSize(){return o.fontSize},get class(){return e.classes.dot},ownerState:e})]}})}r(R,"RadioButtonIcon");function so(o){return y("MuiRadio",o)}r(so,"getRadioUtilityClass");const G=I("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),uo=v()({name:"MuiRadio",propDefaults:({set:o})=>o({checkedIcon:B,color:"primary",icon:$,size:"medium"}),selfPropNames:["checkedIcon","classes","color","disabled","icon","size"],utilityClass:so,slotClasses:o=>({root:["root",`color${M(o.color)}`]})}),mo=g(j,{skipProps:q.filter(o=>o!=="classes"),name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>[e.root,e[`color${M(o.ownerState.color)}`]]})(({theme:o,ownerState:e})=>({color:o.palette.text.secondary,"&:hover":{backgroundColor:W(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...e.color!=="default"&&{[`&.${G.checked}`]:{color:o.palette[e.color].main}},[`&.${G.disabled}`]:{color:o.palette.action.disabled}}));function po(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}r(po,"areEqualValues");const B=r(()=>n(R,{checked:!0}),"defaultCheckedIcon"),$=r(()=>n(R,{}),"defaultIcon"),i=uo.component(r(function({classes:e,allProps:l,otherProps:a,props:t}){const d=eo(),s=x(O),m=r(()=>a.name??s?.name??d?.name,"name"),S=r(()=>a.value??s?.value,"value"),F=r(()=>a.checked??s?.checked??po(d?.value,S()),"checked"),U=r(()=>t.checkedIcon===B&&t.icon===$,"haveDefaultIcons");return n(X.Provider,{value:{get fontSize(){return t.size}},get children(){return n(mo,c({type:"radio"},a,{ownerState:l,classes:e,get name(){return m()},get value(){return S()},get checked(){return F()},onChange:(C,h)=>{a.onChange?.(C,h),s?.onChange?.(C,h),d?.onChange?.(C,h)}},()=>U()?{get children(){return n(R,{get checked(){return F()}})},get icon(){return[]},get checkedIcon(){return[]}}:{get icon(){return t.icon},get checkedIcon(){return t.checkedIcon}}))}})},"Radio")),go=f("<div></div>");function w(){const[o,e]=b("a"),l=r(t=>{e(t.target.value)},"handleChange"),a=r(t=>({get checked(){return o()===t},onChange:l,value:t,name:"color-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=go.cloneNode(!0);return u(t,n(i,c(()=>a("a"))),null),u(t,n(i,c(()=>a("b"),{color:"secondary"})),null),u(t,n(i,c(()=>a("c"),{color:"success"})),null),u(t,n(i,c(()=>a("d"),{color:"default"})),null),u(t,n(i,c(()=>a("e"),{get sx(){return{color:k[800],"&.Mui-checked":{color:k[600]}}}})),null),t})()}r(w,"ColorRadioButtons");w.code=`import { Radio } from "@suid/material";
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
`;function fo(o){return y("MuiFormGroup",o)}r(fo,"getFormGroupUtilityClass");I("MuiFormGroup",["root","row","error"]);const Co=v()({name:"MuiFormGroup",propDefaults:({set:o})=>o({row:!1}),selfPropNames:["children","classes","row"],utilityClass:fo,slotClasses:o=>({root:["root",o.row&&"row",!!o.error&&"error"]})}),ho=g("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:l}=o;return[e.root,l.row&&e.row]}})(({ownerState:o})=>({display:"flex",flexDirection:"column",flexWrap:"wrap",...o.row&&{flexDirection:"row"}})),vo=Co.component(r(function({props:e,allProps:l,classes:a,otherProps:t}){const d=Q(),s=J({props:l,muiFormControl:d,states:["error"]}),m=c(l,{get error(){return s.error}});return n(ho,c(t,{get class(){return K(a.root,t.class)},ownerState:m,get children(){return e.children}}))},"FormGroup")),bo=v()({name:"MuiRadioGroup",propDefaults:({set:o})=>o({}),selfPropNames:["defaultValue","name","onChange","value"]}),E=bo.component(r(function({props:e,otherProps:l}){const a=Z(),[t,d]=Y({controlled:()=>e.value,default:()=>e.defaultValue,name:"RadioGroup"}),s=oo(()=>e.name);return n(P.Provider,{value:{get name(){return s()},onChange(m){d(m.target.value),e.onChange&&e.onChange(m,m.target.value)},get value(){return t()}},get children(){return n(vo,c({role:"radiogroup",ref:a},l,{get children(){return l.children}}))}})},"RadioGroup"));function N(){const[o,e]=b("female"),l=r(a=>{e(a.target.value)},"handleChange");return n(V,{get children(){return[n(z,{id:"demo-controlled-radio-buttons-group",children:"Gender"}),n(E,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",get value(){return o()},onChange:l,get children(){return[n(p,{value:"female",get control(){return n(i,{})},label:"Female"}),n(p,{value:"male",get control(){return n(i,{})},label:"Male"})]}})]}})}r(N,"ControlledRadioButtonsGroup");N.code=`import {
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
`;function T(){return n(V,{get children(){return[n(z,{id:"demo-radio-buttons-group-label",children:"Gender"}),n(E,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",get children(){return[n(p,{value:"female",control:()=>n(i,{}),label:"Female"}),n(p,{value:"male",control:()=>n(i,{}),label:"Male"}),n(p,{value:"other",control:()=>n(i,{}),label:"Other"})]}})]}})}r(T,"RadioButtonsGroupExample");T.code=`import {
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
`;const Ro=f("<div></div>");function D(){const[o,e]=b("a"),l=r(t=>{e(t.target.value)},"handleChange"),a=r(t=>({get checked(){return o()===t},onChange:l,value:t,name:"size-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=Ro.cloneNode(!0);return u(t,n(i,c(()=>a("a"),{size:"small"})),null),u(t,n(i,c(()=>a("b"))),null),u(t,n(i,c(()=>a("c"),{sx:{"& .MuiSvgIcon-root":{fontSize:28}}})),null),t})()}r(D,"SizeRadioButtons");D.code=`import { Radio } from "@suid/material";
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
`;function _o(){return n(A,{get name(){return i.name},docsName:"radio-button",examples:[{title:"Radio group",component:T},{title:"Controlled",component:N},{title:"Size",component:D},{title:"Color",component:w}]})}r(_o,"ButtonPage");export{_o as default};
