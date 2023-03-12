var s=Object.defineProperty;var r=(e,a)=>s(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch-31d659e9.js";import{C as p}from"./ComponentInfo-255fb34b.js";import{F as h}from"./FormControlLabel-1cf3dbc1.js";import{c as t,U as o,p as i,t as f,h as b}from"./ErrorPage-eb59dadb.js";import"./SwitchBase-6fef974c.js";import"./ListItemText-0f600c95.js";import"./useFormControl-b1bf8326.js";import"./useControlled-92c01364.js";import"./Link-aba4ea2c.js";import"./copyText-a7b84afc.js";import"./IconButton-126be790.js";import"./Paper-32f89a64.js";import"./PaperCode-8028a5c7.js";import"./PageNav-e98a4a45.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-e36a5f4b.js";function c(){return t(h,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

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
