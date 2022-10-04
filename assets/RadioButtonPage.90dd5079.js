var _=Object.defineProperty;var r=(o,e)=>_(o,"name",{value:e,configurable:!0});import{S as j,F as O}from"./SwitchBase.70fc58b8.js";import{af as H,ag as x,c as I,t as f,x as g,m as s,d as n,r as y,s as L,v as b,w as M,ao as q,z as W,ap as Z,a as v,a7 as c,E as A,ai as J}from"./index.acbfcfbc.js";import{C as K}from"./ComponentInfo.aa31bd24.js";import{p as k}from"./pink.26d9c0dd.js";import{f as Q,F as z}from"./formControlState.0238276c.js";import{F as p}from"./FormControlLabel.f46877a7.js";import{c as X,F as V}from"./createUniqueId.b65135e5.js";import{u as Y}from"./useFormControl.dc0d6624.js";import{u as oo}from"./useControlled.45e95313.js";import"./Link.af165626.js";import"./copyText.70fd8944.js";import"./PaperCode.23702ab0.js";const B=H(void 0);function eo(){return x(B)}r(eo,"useRadioGroup");const no=f('<svg><path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path></svg>',4,!0),to=I(()=>no.cloneNode(!0),"RadioButtonChecked"),ro=f('<svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',4,!0),ao=I(()=>ro.cloneNode(!0),"RadioButtonUnchecked"),lo=g("span")({position:"relative",display:"flex"}),io=g(ao)({transform:"scale(1)"}),so=g(to)(({theme:o,ownerState:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest}),...e.checked&&{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}}));function R(o){const e=s({checked:!1,classes:{}},o);return n(lo,{get class(){return e.classes.root},ownerState:e,get children(){return[n(io,{get fontSize(){return o.fontSize},get class(){return e.classes.background},ownerState:e}),n(so,{get fontSize(){return o.fontSize},get class(){return e.classes.dot},ownerState:e})]}})}r(R,"RadioButtonIcon");function uo(o){return L("MuiRadio",o)}r(uo,"getRadioUtilityClass");const G=y("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),co=b()({name:"MuiRadio",propDefaults:({set:o})=>o({checkedIcon:P,color:"primary",icon:$,size:"medium"}),selfPropNames:["checkedIcon","classes","color","disabled","icon","size"],utilityClass:uo,slotClasses:o=>({root:["root",`color${M(o.color)}`]})}),mo=g(j,{skipProps:q.filter(o=>o!=="classes"),name:"MuiRadio",slot:"Root",overridesResolver:(o,e)=>[e.root,e[`color${M(o.ownerState.color)}`]]})(({theme:o,ownerState:e})=>({color:o.palette.text.secondary,"&:hover":{backgroundColor:W(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...e.color!=="default"&&{[`&.${G.checked}`]:{color:o.palette[e.color].main}},[`&.${G.disabled}`]:{color:o.palette.action.disabled}}));function po(o,e){return typeof e=="object"&&e!==null?o===e:String(o)===String(e)}r(po,"areEqualValues");const P=r(()=>n(R,{checked:!0}),"defaultCheckedIcon"),$=r(()=>n(R,{}),"defaultIcon"),i=co.component(r(function({classes:e,allProps:l,otherProps:a,props:t}){const d=eo(),u=x(O),m=r(()=>a.name??u?.name??d?.name,"name"),F=r(()=>a.value??u?.value,"value"),S=r(()=>a.checked??u?.checked??po(d?.value,F()),"checked"),U=r(()=>t.checkedIcon===P&&t.icon===$,"haveDefaultIcons");return n(Z.Provider,{value:{get fontSize(){return t.size}},get children(){return n(mo,s({type:"radio"},a,{ownerState:l,classes:e,get name(){return m()},get value(){return F()},get checked(){return S()},onChange:(C,h)=>{a.onChange?.(C,h),u?.onChange?.(C,h),d?.onChange?.(C,h)}},()=>U()?{get children(){return n(R,{get checked(){return S()}})},get icon(){return[]},get checkedIcon(){return[]}}:{get icon(){return t.icon},get checkedIcon(){return t.checkedIcon}}))}})},"Radio")),go=f("<div></div>");function w(){const[o,e]=v("a"),l=r(t=>{e(t.target.value)},"handleChange"),a=r(t=>({get checked(){return o()===t},onChange:l,value:t,name:"color-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=go.cloneNode(!0);return c(t,n(i,s(()=>a("a"))),null),c(t,n(i,s(()=>a("b"),{color:"secondary"})),null),c(t,n(i,s(()=>a("c"),{color:"success"})),null),c(t,n(i,s(()=>a("d"),{color:"default"})),null),c(t,n(i,s(()=>a("e"),{get sx(){return{color:k[800],"&.Mui-checked":{color:k[600]}}}})),null),t})()}r(w,"ColorRadioButtons");w.code=`import Radio from "@suid/material/Radio";
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
`;function fo(o){return L("MuiFormGroup",o)}r(fo,"getFormGroupUtilityClass");y("MuiFormGroup",["root","row","error"]);const Co=b()({name:"MuiFormGroup",propDefaults:({set:o})=>o({row:!1}),selfPropNames:["children","classes","row"],utilityClass:fo,slotClasses:o=>({root:["root",o.row&&"row",!!o.error&&"error"]})}),ho=g("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:l}=o;return[e.root,l.row&&e.row]}})(({ownerState:o})=>({display:"flex",flexDirection:"column",flexWrap:"wrap",...o.row&&{flexDirection:"row"}})),bo=Co.component(r(function({props:e,allProps:l,classes:a,otherProps:t}){const d=Y(),u=Q({props:l,muiFormControl:d,states:["error"]}),m=s(l,{get error(){return u.error}});return n(ho,s(t,{get class(){return A(a.root,t.class)},ownerState:m,get children(){return e.children}}))},"FormGroup")),vo=b()({name:"MuiRadioGroup",propDefaults:({set:o})=>o({}),selfPropNames:["defaultValue","name","onChange","value"]}),E=vo.component(r(function({props:e,otherProps:l}){const a=J(),[t,d]=oo({controlled:()=>e.value,default:()=>e.defaultValue,name:"RadioGroup"}),u=X(()=>e.name);return n(B.Provider,{value:{get name(){return u()},onChange(m){d(m.target.value),e.onChange&&e.onChange(m,m.target.value)},get value(){return t()}},get children(){return n(bo,s({role:"radiogroup",ref:a},l,{get children(){return l.children}}))}})},"RadioGroup"));function T(){const[o,e]=v("female"),l=r(a=>{e(a.target.value)},"handleChange");return n(z,{get children(){return[n(V,{id:"demo-controlled-radio-buttons-group",children:"Gender"}),n(E,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",get value(){return o()},onChange:l,get children(){return[n(p,{value:"female",get control(){return n(i,{})},label:"Female"}),n(p,{value:"male",get control(){return n(i,{})},label:"Male"})]}})]}})}r(T,"ControlledRadioButtonsGroup");T.code=`import FormControl from "@suid/material/FormControl";
import FormControlLabel from "@suid/material/FormControlLabel";
import FormLabel from "@suid/material/FormLabel";
import Radio from "@suid/material/Radio";
import RadioGroup from "@suid/material/RadioGroup";
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
`;function N(){return n(z,{get children(){return[n(V,{id:"demo-radio-buttons-group-label",children:"Gender"}),n(E,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",get children(){return[n(p,{value:"female",control:()=>n(i,{}),label:"Female"}),n(p,{value:"male",control:()=>n(i,{}),label:"Male"}),n(p,{value:"other",control:()=>n(i,{}),label:"Other"})]}})]}})}r(N,"RadioButtonsGroupExample");N.code=`import FormControl from "@suid/material/FormControl";
import FormControlLabel from "@suid/material/FormControlLabel";
import FormLabel from "@suid/material/FormLabel";
import Radio from "@suid/material/Radio";
import RadioGroup from "@suid/material/RadioGroup";

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
`;const Ro=f("<div></div>");function D(){const[o,e]=v("a"),l=r(t=>{e(t.target.value)},"handleChange"),a=r(t=>({get checked(){return o()===t},onChange:l,value:t,name:"size-radio-button-demo",inputProps:{"aria-label":t}}),"controlProps");return(()=>{const t=Ro.cloneNode(!0);return c(t,n(i,s(()=>a("a"),{size:"small"})),null),c(t,n(i,s(()=>a("b"))),null),c(t,n(i,s(()=>a("c"),{sx:{"& .MuiSvgIcon-root":{fontSize:28}}})),null),t})()}r(D,"SizeRadioButtons");D.code=`import Radio from "@suid/material/Radio";
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
`;function $o(){return n(K,{get name(){return i.name},docsName:"radio-button",examples:[{title:"Radio group",component:N},{title:"Controlled",component:T},{title:"Size",component:D},{title:"Color",component:w}]})}r($o,"ButtonPage");export{$o as default};
