var m=Object.defineProperty;var r=(e,o)=>m(e,"name",{value:o,configurable:!0});import{S as n}from"./Switch-291b640c.js";import{C as h}from"./ComponentInfo-8f241631.js";import{F as p}from"./FormControlLabel-9862dad8.js";import{d as t,H as l,m as i,t as f,a as b}from"./index-318adc47.js";import"./SwitchBase-76b2d5bf.js";import"./useFormControl-90a2d5f4.js";import"./useControlled-b7b5d3d4.js";import"./Link-c2b08d2b.js";import"./copyText-f55f3f4a.js";import"./PaperCode-d2a6f2c1.js";import"./formControlState-43351741.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

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
`;function u(){const[e,o]=b(!1);return t(n,{get checked(){return e()},onChange:(C,s)=>{o(s)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import { Switch } from "@suid/material";
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
`;function H(){return t(h,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r(H,"SwitchPage");export{H as default};
