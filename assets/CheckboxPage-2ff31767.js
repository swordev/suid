var k=Object.defineProperty;var c=(e,i)=>k(e,"name",{value:i,configurable:!0});import{C as n}from"./Checkbox-392f3abd.js";import{C as b}from"./ComponentInfo-ca810fe5.js";import{U as r,c as o,p as a,t,h as C}from"./ErrorPage-8328033b.js";import{c as d}from"./ListItemText-8378536b.js";import{F as v}from"./Favorite-2a2871a0.js";import"./SwitchBase-f8b7ab76.js";import"./useFormControl-99bcea9b.js";import"./useControlled-3e967372.js";import"./Link-35e0690e.js";import"./copyText-7f7fdd67.js";import"./IconButton-b07a3030.js";import"./Paper-a16bc6e4.js";import"./PaperCode-37b8f2db.js";import"./PageNav-912c7d1d.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";const f=t("<div></div>",2),l={inputProps:{"aria-label":"Checkbox demo"}};function s(){return(()=>{const e=f.cloneNode(!0);return r(e,o(n,a(l,{defaultChecked:!0})),null),r(e,o(n,l),null),r(e,o(n,a(l,{disabled:!0})),null),r(e,o(n,a(l,{disabled:!0,checked:!0})),null),e})()}c(s,"BasicCheckboxes");s.code=`import { Checkbox } from "@suid/material";

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
`;function p(){const[e,i]=C(!0);return o(n,{get checked(){return e()},onChange:(M,h)=>{i(h)},inputProps:{"aria-label":"controlled"}})}c(p,"ControlledCheckbox");p.code=`import { Checkbox } from "@suid/material";
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
`;const x=t('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),g=t('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>',4,!0),B=d(()=>[x.cloneNode(!0),g.cloneNode(!0)],"Bookmark"),$=t('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),I=t('<svg><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>',4,!0),F=d(()=>[$.cloneNode(!0),I.cloneNode(!0)],"BookmarkBorder"),_=t('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),N=t('<svg><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>',4,!0),z=d(()=>[_.cloneNode(!0),N.cloneNode(!0)],"FavoriteBorder"),P=t("<div></div>",2),m={inputProps:{"aria-label":"Checkbox demo"}};function u(){return(()=>{const e=P.cloneNode(!0);return r(e,o(n,a(m,{get icon(){return o(z,{})},get checkedIcon(){return o(v,{})}})),null),r(e,o(n,a(m,{get icon(){return o(F,{})},get checkedIcon(){return o(B,{})}})),null),e})()}c(u,"IconCheckboxes");u.code=`import BookmarkIcon from "@suid/icons-material/Bookmark";
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
`;function T(){return o(b,{get name(){return n.name},docsName:"checkboxes",examples:[s,{title:"Icon",component:u},{title:"Controlled",component:p}]})}c(T,"CheckboxPage");export{T as default};
