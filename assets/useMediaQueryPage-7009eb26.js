var o=Object.defineProperty;var m=(t,e)=>o(t,"name",{value:e,configurable:!0});import{b as n}from"./ListItemText-0f600c95.js";import{C as i}from"./ComponentInfo-255fb34b.js";import{U as a,t as p,c as s}from"./ErrorPage-eb59dadb.js";import"./Link-aba4ea2c.js";import"./copyText-a7b84afc.js";import"./IconButton-126be790.js";import"./Paper-32f89a64.js";import"./PaperCode-8028a5c7.js";import"./PageNav-e98a4a45.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";const u=p("<span></span>",2);function r(){const t=n("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return a(e,()=>`(min-width:600px) matches: ${t()}`),e})()}m(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function N(){return s(i,{get name(){return n.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}m(N,"useMediaQueryPage");export{N as default};
