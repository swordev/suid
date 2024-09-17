var m=Object.defineProperty;var e=(c,i)=>m(c,"name",{value:i,configurable:!0});import{c as r,t as o,h as n,I as t}from"./index-QA7pP0xH.js";import{C as d}from"./ComponentInfo-Cp9In596.js";import{D as a}from"./Delete-DEJksXc-.js";import"./Link-BRU1W-2I.js";import"./copyText-DYDM2w-T.js";import"./PaperCode-2wa1Y67L.js";var p=o('<svg><path d="M0 0h24v24H0zm18.31 6l-2.76 5z"fill=none></svg>',!1,!0),s=o('<svg><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></svg>',!1,!0);const u=r(()=>[p(),s()],"AddShoppingCart");var h=o('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),I=o('<svg><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></svg>',!1,!0);const g=r(()=>[h(),I()],"Alarm");function l(){return[n(t,{"aria-label":"delete",get children(){return n(a,{})}}),n(t,{"aria-label":"delete",disabled:!0,color:"primary",get children(){return n(a,{})}}),n(t,{color:"secondary","aria-label":"add an alarm",get children(){return n(g,{})}}),n(t,{color:"primary","aria-label":"add to shopping cart",get children(){return n(u,{})}})]}e(l,"Example");l.code=`import AddShoppingCartIcon from "@suid/icons-material/AddShoppingCart";
import AlarmIcon from "@suid/icons-material/Alarm";
import DeleteIcon from "@suid/icons-material/Delete";
import { IconButton } from "@suid/material";

export default function Example() {
  return (
    <>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </>
  );
}
`;function H(){return n(d,{get name(){return t.name},docsName:"icons",examples:[l]})}e(H,"IconButtonPage");export{H as default};
