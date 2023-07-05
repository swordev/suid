var s=Object.defineProperty;var o=(c,i)=>s(c,"name",{value:i,configurable:!0});import{c as a,t,d as n,I as e}from"./index-610c56e0.js";import{C as m}from"./ComponentInfo-facaf442.js";import"./Link-dd3cb0f3.js";import"./copyText-9a7ba528.js";import"./PaperCode-00cb4c1a.js";const d=t('<svg><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"></svg>',!1,!0),p=t('<svg><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></svg>',!1,!0),u=a(()=>[d(),p()],"AddShoppingCart"),h=t('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),g=t('<svg><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></svg>',!1,!0),v=a(()=>[h(),g()],"Alarm"),I=t('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),f=t('<svg><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></svg>',!1,!0),r=a(()=>[I(),f()],"Delete");function l(){return[n(e,{"aria-label":"delete",get children(){return n(r,{})}}),n(e,{"aria-label":"delete",disabled:!0,color:"primary",get children(){return n(r,{})}}),n(e,{color:"secondary","aria-label":"add an alarm",get children(){return n(v,{})}}),n(e,{color:"primary","aria-label":"add to shopping cart",get children(){return n(u,{})}})]}o(l,"Example");l.code=`import AddShoppingCartIcon from "@suid/icons-material/AddShoppingCart";
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
`;function $(){return n(m,{get name(){return e.name},docsName:"icons",examples:[l]})}o($,"IconButtonPage");export{$ as default};
