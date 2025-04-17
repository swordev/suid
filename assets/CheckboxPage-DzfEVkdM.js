var h=Object.defineProperty;var r=(e,i)=>h(e,"name",{value:i,configurable:!0});import{C as n}from"./Checkbox-b2nUXGH5.js";import{C as b}from"./ComponentInfo-yDrzRDVN.js";import{E as t,h as o,m as c,t as a,a as C,c as m}from"./index-w4oZYh5t.js";import{F as v}from"./Favorite-B3sTBf-X.js";import{F as f}from"./FavoriteBorder-O8R4ph3a.js";import"./SwitchBase-CyDfRWsI.js";import"./useFormControl-BXy08O6l.js";import"./useControlled-uAveUVH8.js";import"./Link-lUTDG_Tp.js";import"./copyText-DhH06Pq6.js";import"./PaperCode-aTgORYnL.js";var x=a("<div>");const l={inputProps:{"aria-label":"Checkbox demo"}};function s(){return(()=>{var e=x();return t(e,o(n,c(l,{defaultChecked:!0})),null),t(e,o(n,l),null),t(e,o(n,c(l,{disabled:!0})),null),t(e,o(n,c(l,{disabled:!0,checked:!0})),null),e})()}r(s,"BasicCheckboxes");s.code=`import { Checkbox } from "@suid/material";

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
`;function k(){const[e,i]=C(!0);return o(n,{get checked(){return e()},onChange:r((z,p)=>{i(p)},"onChange"),inputProps:{"aria-label":"controlled"}})}r(k,"ControlledCheckbox");k.code=`import { Checkbox } from "@suid/material";
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
`;var g=a('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),B=a('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></svg>',!1,!0);const I=m(()=>[g(),B()],"Bookmark");var $=a('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),F=a('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></svg>',!1,!0);const P=m(()=>[$(),F()],"BookmarkBorder");var _=a("<div>");const d={inputProps:{"aria-label":"Checkbox demo"}};function u(){return(()=>{var e=_();return t(e,o(n,c(d,{get icon(){return o(f,{})},get checkedIcon(){return o(v,{})}})),null),t(e,o(n,c(d,{get icon(){return o(P,{})},get checkedIcon(){return o(I,{})}})),null),e})()}r(u,"IconCheckboxes");u.code=`import BookmarkIcon from "@suid/icons-material/Bookmark";
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
`;function D(){return o(b,{get name(){return n.name},docsName:"checkboxes",examples:[s,{title:"Icon",component:u},{title:"Controlled",component:k}]})}r(D,"CheckboxPage");export{D as default};
