var i=Object.defineProperty;var e=(c,p)=>i(c,"name",{value:p,configurable:!0});import{I as n}from"./IconButton-7ca039fe.js";import{C as m}from"./ComponentInfo-d01e77a6.js";import{t as o,c as t}from"./ErrorPage-5efa7331.js";import{c as r}from"./ListItemText-7861bce7.js";import"./Link-b6cacc18.js";import"./copyText-9e269238.js";import"./Paper-b94e5972.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";const d=o('<svg><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"></path></svg>',4,!0),s=o('<svg><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></svg>',4,!0),u=r(()=>[d.cloneNode(!0),s.cloneNode(!0)],"AddShoppingCart"),h=o('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),g=o('<svg><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>',4,!0),v=r(()=>[h.cloneNode(!0),g.cloneNode(!0)],"Alarm"),I=o('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),f=o('<svg><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>',4,!0),a=r(()=>[I.cloneNode(!0),f.cloneNode(!0)],"Delete");function l(){return[t(n,{"aria-label":"delete",get children(){return t(a,{})}}),t(n,{"aria-label":"delete",disabled:!0,color:"primary",get children(){return t(a,{})}}),t(n,{color:"secondary","aria-label":"add an alarm",get children(){return t(v,{})}}),t(n,{color:"primary","aria-label":"add to shopping cart",get children(){return t(u,{})}})]}e(l,"Example");l.code=`import AddShoppingCartIcon from "@suid/icons-material/AddShoppingCart";
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
`;function _(){return t(m,{get name(){return n.name},docsName:"icons",examples:[l]})}e(_,"IconButtonPage");export{_ as default};
