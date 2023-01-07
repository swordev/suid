var s=Object.defineProperty;var r=(e,a)=>s(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch-41f8f7ae.js";import{C as p}from"./ComponentInfo-fb88dbff.js";import{F as h}from"./FormControlLabel-6737e70d.js";import{c as t,P as o,w as i,t as f,a as b}from"./ErrorPage-7e24a11e.js";import"./SwitchBase-316ad80d.js";import"./ListItemText-97540f66.js";import"./useFormControl-b0cba849.js";import"./useControlled-4747f91f.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-ed897386.js";function c(){return t(h,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const S=f("<div></div>"),l={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{const e=S.cloneNode(!0);return o(e,t(n,i(l,{defaultChecked:!0})),null),o(e,t(n,l),null),o(e,t(n,i(l,{disabled:!0,defaultChecked:!0})),null),o(e,t(n,i(l,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import { Switch } from "@suid/material";

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
`;function u(){const[e,a]=b(!1);return t(n,{get checked(){return e()},onChange:(w,m)=>{a(m)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import { Switch } from "@suid/material";
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
`;function D(){return t(p,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r(D,"SwitchPage");export{D as default};
