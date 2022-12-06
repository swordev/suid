var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch.9df427dc.js";import{C as h}from"./ComponentInfo.6ce91a5c.js";import{F as p}from"./FormControlLabel.80b3db74.js";import{d as t,a6 as l,m as i,t as f,a as b}from"./index.28506464.js";import"./SwitchBase.47c8ea92.js";import"./useFormControl.e95e4e7b.js";import"./useControlled.d369401e.js";import"./Link.d0d1f610.js";import"./copyText.f0626c1f.js";import"./PaperCode.4d4bb9ba.js";import"./formControlState.3d5b94eb.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const S=f("<div></div>"),o={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{const e=S.cloneNode(!0);return l(e,t(n,i(o,{defaultChecked:!0})),null),l(e,t(n,o),null),l(e,t(n,i(o,{disabled:!0,defaultChecked:!0})),null),l(e,t(n,i(o,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import { Switch } from "@suid/material";

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
`;function u(){const[e,a]=b(!1);return t(n,{get checked(){return e()},onChange:(C,s)=>{a(s)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import { Switch } from "@suid/material";
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
`;function j(){return t(h,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r(j,"SwitchPage");export{j as default};
