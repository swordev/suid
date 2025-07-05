var m=Object.defineProperty;var r=(e,o)=>m(e,"name",{value:o,configurable:!0});import{S as n}from"./Switch-OqqmuVgw.js";import{C as h}from"./ComponentInfo-yGqxOQ4_.js";import{F as p}from"./FormControlLabel-CCW9sd4O.js";import{h as t,t as f,F as l,m as i,a as b}from"./index-COI4Ufax.js";import"./SwitchBase-D6YW2TqO.js";import"./useFormControl-CCBzS4_w.js";import"./useControlled-CoBhBOC5.js";import"./Link-hQL6lNqD.js";import"./copyText-Dqd6Kcdt.js";import"./PaperCode-DVVPcKbF.js";import"./formControlState-DQI8NNua.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import { FormControlLabel, Switch } from "@suid/material";

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
`;function I(){return t(h,{get name(){return n.name},docsName:"switches",examples:[d,u,c]})}r(I,"SwitchPage");export{I as default};
