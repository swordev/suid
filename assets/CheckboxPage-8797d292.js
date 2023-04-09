var b=Object.defineProperty;var c=(e,i)=>b(e,"name",{value:i,configurable:!0});import{C as n}from"./Checkbox-24873aec.js";import{C}from"./ComponentInfo-031a9ae7.js";import{x as t,d as o,m as a,e as m,a as f,c as s,t as r}from"./index-4edd6e97.js";import{F as v}from"./Favorite-44513a9c.js";import"./SwitchBase-d9ef71c6.js";import"./useFormControl-eccca9b1.js";import"./useControlled-ac5817ae.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";const x=m("<div>"),l={inputProps:{"aria-label":"Checkbox demo"}};function k(){return(()=>{const e=x();return t(e,o(n,a(l,{defaultChecked:!0})),null),t(e,o(n,l),null),t(e,o(n,a(l,{disabled:!0})),null),t(e,o(n,a(l,{disabled:!0,checked:!0})),null),e})()}c(k,"BasicCheckboxes");k.code=`import { Checkbox } from "@suid/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}
`;function u(){const[e,i]=f(!0);return o(n,{get checked(){return e()},onChange:(L,h)=>{i(h)},inputProps:{"aria-label":"controlled"}})}c(u,"ControlledCheckbox");u.code=`import { Checkbox } from "@suid/material";
import { createSignal } from "solid-js";

export default function ControlledCheckbox() {
  const [checked, setChecked] = createSignal(true);

  return (
    <Checkbox
      checked={checked()}
      onChange={(event, checked) => {
        setChecked(checked);
      }}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
`;const g=r('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),B=r('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></svg>',!1,!0),$=s(()=>[g(),B()],"Bookmark"),I=r('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),F=r('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></svg>',!1,!0),_=s(()=>[I(),F()],"BookmarkBorder"),z=r('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),P=r('<svg><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></svg>',!1,!0),M=s(()=>[z(),P()],"FavoriteBorder"),H=m("<div>"),d={inputProps:{"aria-label":"Checkbox demo"}};function p(){return(()=>{const e=H();return t(e,o(n,a(d,{get icon(){return o(M,{})},get checkedIcon(){return o(v,{})}})),null),t(e,o(n,a(d,{get icon(){return o(_,{})},get checkedIcon(){return o($,{})}})),null),e})()}c(p,"IconCheckboxes");p.code=`import BookmarkIcon from "@suid/icons-material/Bookmark";
import BookmarkBorderIcon from "@suid/icons-material/BookmarkBorder";
import Favorite from "@suid/icons-material/Favorite";
import FavoriteBorder from "@suid/icons-material/FavoriteBorder";
import { Checkbox } from "@suid/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}
`;function K(){return o(C,{get name(){return n.name},docsName:"checkboxes",examples:[k,{title:"Icon",component:p},{title:"Controlled",component:u}]})}c(K,"CheckboxPage");export{K as default};
