var m=Object.defineProperty;var r=(e,o)=>m(e,"name",{value:o,configurable:!0});import{S as n}from"./Switch-Bsf0wq61.js";import{C as h}from"./ComponentInfo-DXQJUF5E.js";import{F as p}from"./FormControlLabel-B8aEiu7t.js";import{h as t,E as l,m as i,t as f,a as b}from"./index-_NBVcCbj.js";import"./SwitchBase-BdL8lmfg.js";import"./useFormControl-DgLJOdnM.js";import"./useControlled-BoMEnfhp.js";import"./Link-Be5DczLQ.js";import"./copyText-CJ_e6R90.js";import"./PaperCode-C8IcHfJE.js";import"./formControlState-D4xF8Qbm.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;var S=f("<div>");const a={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{var e=S();return l(e,t(n,i(a,{defaultChecked:!0})),null),l(e,t(n,a),null),l(e,t(n,i(a,{disabled:!0,defaultChecked:!0})),null),l(e,t(n,i(a,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import { Switch } from "@suid/material";

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
`;function u(){const[e,o]=b(!1);return t(n,{get checked(){return e()},onChange:r((C,s)=>{o(s)},"onChange"),inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import { Switch } from "@suid/material";
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
`;function E(){return t(h,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r(E,"SwitchPage");export{E as default};
