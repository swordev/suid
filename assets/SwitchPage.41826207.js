var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch.5e93a5c2.js";import{C as h}from"./ComponentInfo.b4aab114.js";import{F as p}from"./FormControlLabel.dd50cbad.js";import{d as t,ab as l,m as i,t as f,a as b}from"./index.5728258e.js";import"./SwitchBase.0a618e9a.js";import"./useFormControl.e8793d2b.js";import"./useControlled.5451ba2e.js";import"./Link.5c554c09.js";import"./copyText.3eadc357.js";import"./PaperCode.6e925dac.js";import"./formControlState.290f4986.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import FormControlLabel from "@suid/material/FormControlLabel";
import Switch from "@suid/material/Switch";

export default function Label() {
  return (
    <FormControlLabel
      disabled
      control={<Switch defaultChecked />}
      label="Label"
    />
  );
}
`;const S=f("<div></div>"),o={inputProps:{"aria-label":"Switch demo"}};function d(){return(()=>{const e=S.cloneNode(!0);return l(e,t(n,i(o,{defaultChecked:!0})),null),l(e,t(n,o),null),l(e,t(n,i(o,{disabled:!0,defaultChecked:!0})),null),l(e,t(n,i(o,{disabled:!0})),null),e})()}r(d,"BasicSwitches");d.code=`import Switch from "@suid/material/Switch";

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
`;function u(){const[e,a]=b(!1);return t(n,{get checked(){return e()},onChange:(w,s)=>{a(s)},inputProps:{"aria-label":"controlled"}})}r(u,"ControlledSwitch");u.code=`import Switch from "@suid/material/Switch";
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
