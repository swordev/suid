var h=Object.defineProperty;var r=(e,i)=>h(e,"name",{value:i,configurable:!0});import{C as n}from"./Checkbox-DzWYkcaC.js";import{C as b}from"./ComponentInfo-C3Y-hV1D.js";import{t as a,E as t,h as o,m as c,a as f,c as s}from"./index-C8Cbba9i.js";import{F as C}from"./Favorite-ItG-cYQX.js";import{F as v}from"./FavoriteBorder-39oProdv.js";import"./SwitchBase-CcyCT0F3.js";import"./useFormControl-BlLQbQX2.js";import"./useControlled-F8yM6TDl.js";import"./Link-CxszECJF.js";import"./copyText-Dljb6c8E.js";import"./PaperCode-Bq4agt-h.js";var x=a("<div>");const l={inputProps:{"aria-label":"Checkbox demo"}};function m(){return(()=>{var e=x();return t(e,o(n,c(l,{defaultChecked:!0})),null),t(e,o(n,l),null),t(e,o(n,c(l,{disabled:!0})),null),t(e,o(n,c(l,{disabled:!0,checked:!0})),null),e})()}r(m,"BasicCheckboxes");m.code=`import { Checkbox } from "@suid/material";

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
`;function k(){const[e,i]=f(!0);return o(n,{get checked(){return e()},onChange:r((z,p)=>{i(p)},"onChange"),inputProps:{"aria-label":"controlled"}})}r(k,"ControlledCheckbox");k.code=`import { Checkbox } from "@suid/material";
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
`;var g=a('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),B=a('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></svg>',!1,!0,!1);const I=s(()=>[g(),B()],"Bookmark");var $=a('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),F=a('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></svg>',!1,!0,!1);const P=s(()=>[$(),F()],"BookmarkBorder");var _=a("<div>");const d={inputProps:{"aria-label":"Checkbox demo"}};function u(){return(()=>{var e=_();return t(e,o(n,c(d,{get icon(){return o(v,{})},get checkedIcon(){return o(C,{})}})),null),t(e,o(n,c(d,{get icon(){return o(P,{})},get checkedIcon(){return o(I,{})}})),null),e})()}r(u,"IconCheckboxes");u.code=`import BookmarkIcon from "@suid/icons-material/Bookmark";
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
`;function D(){return o(b,{get name(){return n.name},docsName:"checkboxes",examples:[m,{title:"Icon",component:u},{title:"Controlled",component:k}]})}r(D,"CheckboxPage");export{D as default};
