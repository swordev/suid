var o=Object.defineProperty;var m=(t,e)=>o(t,"name",{value:e,configurable:!0});import{b as n}from"./ListItemText-c14572bd.js";import{C as i}from"./ComponentInfo-1421c72d.js";import{U as a,t as p,c as s}from"./ErrorPage-8beed0e1.js";import"./Link-0bbd356f.js";import"./copyText-be8cac60.js";import"./IconButton-578b62ce.js";import"./Paper-e344694e.js";import"./PaperCode-b1002cf2.js";import"./PageNav-de163c78.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";const u=p("<span></span>",2);function r(){const t=n("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return a(e,()=>`(min-width:600px) matches: ${t()}`),e})()}m(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function N(){return s(i,{get name(){return n.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}m(N,"useMediaQueryPage");export{N as default};
