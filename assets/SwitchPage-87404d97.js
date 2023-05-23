var m=Object.defineProperty;var r=(e,o)=>m(e,"name",{value:o,configurable:!0});import{S as n}from"./Switch-c598143d.js";import{C as h}from"./ComponentInfo-c32346de.js";import{F as p}from"./FormControlLabel-3ee01481.js";import{d as t,w as l,m as i,t as f,a as b}from"./index-570dda9b.js";import"./SwitchBase-897950c3.js";import"./useFormControl-6354591d.js";import"./useControlled-16bfa5f0.js";import"./Link-4c8cf3cb.js";import"./copyText-d7b508be.js";import"./PaperCode-1953c3c7.js";import"./formControlState-37f90dd8.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const S=f("<div>"),a={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{const e=S();return l(e,t(n,i(a,{defaultChecked:!0})),null),l(e,t(n,a),null),l(e,t(n,i(a,{disabled:!0,defaultChecked:!0})),null),l(e,t(n,i(a,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import { Switch } from "@suid/material";

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
`;function u(){const[e,o]=b(!1);return t(n,{get checked(){return e()},onChange:(w,s)=>{o(s)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import { Switch } from "@suid/material";
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
`;function I(){return t(h,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r(I,"SwitchPage");export{I as default};
