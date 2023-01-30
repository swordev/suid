var s=Object.defineProperty;var r=(e,a)=>s(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch-c5a2eb5d.js";import{C as p}from"./ComponentInfo-c5b6ea90.js";import{F as h}from"./FormControlLabel-92b43a84.js";import{c as t,U as o,p as i,t as f,h as b}from"./ErrorPage-5efa7331.js";import"./SwitchBase-013e4aa4.js";import"./ListItemText-ac9718cf.js";import"./useFormControl-8fcff4a5.js";import"./useControlled-405fff41.js";import"./Link-70328dd1.js";import"./copyText-b89086ce.js";import"./IconButton-807ebc30.js";import"./Paper-b94e5972.js";import"./PaperCode-aa9558c0.js";import"./PageNav-470ce5dc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-a3975f0a.js";function c(){return t(h,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const S=f("<div></div>",2),l={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{const e=S.cloneNode(!0);return o(e,t(n,i(l,{defaultChecked:!0})),null),o(e,t(n,l),null),o(e,t(n,i(l,{disabled:!0,defaultChecked:!0})),null),o(e,t(n,i(l,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import { Switch } from "@suid/material";

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
`;function u(){const[e,a]=b(!1);return t(n,{get checked(){return e()},onChange:(C,m)=>{a(m)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import { Switch } from "@suid/material";
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
