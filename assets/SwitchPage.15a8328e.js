var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{S as n,F as h}from"./Switch.6e5fce01.js";import{C as p}from"./ComponentInfo.15e13a6f.js";import{d as t,a6 as l,m as i,t as f,a as b}from"./index.dadc0d46.js";import"./formControlState.7dfecf58.js";import"./useFormControl.aa68af96.js";import"./SwitchBase.84949164.js";import"./useControlled.40e359c2.js";import"./Link.7b3fa469.js";import"./copyText.5873cfbc.js";import"./PaperCode.a1dd469b.js";function c(){return t(h,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import FormControlLabel from "@suid/material/FormControlLabel";
import Switch from "@suid/material/Switch";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const S=f("<div></div>"),o={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{const e=S.cloneNode(!0);return l(e,t(n,i(o,{defaultChecked:!0})),null),l(e,t(n,o),null),l(e,t(n,i(o,{disabled:!0,defaultChecked:!0})),null),l(e,t(n,i(o,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import Switch from "@suid/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}
`;function u(){const[e,a]=b(!1);return t(n,{get checked(){return e()},onChange:(w,s)=>{a(s)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import Switch from "@suid/material/Switch";
import { createSignal } from "solid-js";

export default function ControlledSwitch() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Switch
      checked={checked()}
      onChange={(event, value) => {
        setChecked(value);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
`;function $(){return t(p,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r($,"SwitchPage");export{$ as default};
