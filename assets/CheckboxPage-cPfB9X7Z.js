var p=Object.defineProperty;var a=(e,i)=>p(e,"name",{value:i,configurable:!0});import{C as n}from"./Checkbox-CA9eZhR5.js";import{C as b}from"./ComponentInfo-NUIRYxjW.js";import{E as t,h as o,m as c,t as r,a as v,c as d}from"./index-DSsc118D.js";import{F as C}from"./Favorite-CvaF5eRA.js";import"./SwitchBase-CZuUzGU-.js";import"./useFormControl-fyBZHGT-.js";import"./useControlled-DZb1tzTs.js";import"./Link-mETYY_cW.js";import"./copyText-C3xtTZ5Y.js";import"./PaperCode-Bt7UXUPI.js";var f=r("<div>");const l={inputProps:{"aria-label":"Checkbox demo"}};function m(){return(()=>{var e=f();return t(e,o(n,c(l,{defaultChecked:!0})),null),t(e,o(n,l),null),t(e,o(n,c(l,{disabled:!0})),null),t(e,o(n,c(l,{disabled:!0,checked:!0})),null),e})()}a(m,"BasicCheckboxes");m.code=`import { Checkbox } from "@suid/material";

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
`;function k(){const[e,i]=v(!0);return o(n,{get checked(){return e()},onChange:(H,h)=>{i(h)},inputProps:{"aria-label":"controlled"}})}a(k,"ControlledCheckbox");k.code=`import { Checkbox } from "@suid/material";
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
`;var x=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),g=r('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></svg>',!1,!0);const B=d(()=>[x(),g()],"Bookmark");var $=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),I=r('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></svg>',!1,!0);const F=d(()=>[$(),I()],"BookmarkBorder");var _=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),z=r('<svg><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></svg>',!1,!0);const P=d(()=>[_(),z()],"FavoriteBorder");var M=r("<div>");const s={inputProps:{"aria-label":"Checkbox demo"}};function u(){return(()=>{var e=M();return t(e,o(n,c(s,{get icon(){return o(P,{})},get checkedIcon(){return o(C,{})}})),null),t(e,o(n,c(s,{get icon(){return o(F,{})},get checkedIcon(){return o(B,{})}})),null),e})()}a(u,"IconCheckboxes");u.code=`import BookmarkIcon from "@suid/icons-material/Bookmark";
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
`;function G(){return o(b,{get name(){return n.name},docsName:"checkboxes",examples:[m,{title:"Icon",component:u},{title:"Controlled",component:k}]})}a(G,"CheckboxPage");export{G as default};
