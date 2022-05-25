var m=Object.defineProperty;var r=(e,a)=>m(e,"name",{value:a,configurable:!0});import{S as n}from"./Switch.e8aa1176.js";import{C as h}from"./ComponentInfo.894fff2d.js";import{F as p}from"./FormControlLabel.a6523177.js";import{d as t,ab as l,m as i,t as f,a as b}from"./index.f602409d.js";import"./SwitchBase.780d2268.js";import"./useFormControl.3ba548ed.js";import"./useControlled.869eaf59.js";import"./Link.1afd586a.js";import"./copyText.b50803cd.js";import"./PaperCode.56a1402e.js";import"./formControlState.3d74d694.js";function c(){return t(p,{disabled:!0,get control(){return t(n,{defaultChecked:!0})},label:"Label"})}r(c,"Label");c.code=`import FormControlLabel from "@suid/material/FormControlLabel";
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
