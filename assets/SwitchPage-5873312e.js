var s=Object.defineProperty;var r=(e,a)=>s(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch-9073eae6.js";import{C as p}from"./ComponentInfo-fec5820b.js";import{F as h}from"./FormControlLabel-d0ae92a2.js";import{c as t,U as o,p as i,t as f,h as b}from"./ErrorPage-8beed0e1.js";import"./SwitchBase-96f56bb4.js";import"./ListItemText-dfc8992a.js";import"./useFormControl-c16d9945.js";import"./useControlled-9a4fc4dd.js";import"./Link-3859a10b.js";import"./copyText-d95d75bf.js";import"./IconButton-0456b81e.js";import"./Paper-e344694e.js";import"./PaperCode-74962817.js";import"./PageNav-c18acd6c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";import"./formControlState-0f396d16.js";function c(){return t(h,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

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
