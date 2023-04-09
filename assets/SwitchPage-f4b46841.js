var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch-83c7e0c1.js";import{C as h}from"./ComponentInfo-62712aad.js";import{F as p}from"./FormControlLabel-aa201159.js";import{d as t,w as l,m as i,t as f,a as b}from"./index-02d32149.js";import"./SwitchBase-3a7c23cc.js";import"./useFormControl-c4325a3f.js";import"./useControlled-e93040d8.js";import"./Link-11e90053.js";import"./copyText-bcdf63f6.js";import"./PaperCode-c607e5fb.js";import"./_commonjsHelpers-0119a68f.js";import"./formControlState-f16b1249.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const S=f("<div>"),o={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{const e=S();return l(e,t(n,i(o,{defaultChecked:!0})),null),l(e,t(n,o),null),l(e,t(n,i(o,{disabled:!0,defaultChecked:!0})),null),l(e,t(n,i(o,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import { Switch } from "@suid/material";

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
`;function u(){const[e,a]=b(!1);return t(n,{get checked(){return e()},onChange:(w,s)=>{a(s)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import { Switch } from "@suid/material";
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
`;function N(){return t(h,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r(N,"SwitchPage");export{N as default};
