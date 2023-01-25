var o=Object.defineProperty;var m=(t,e)=>o(t,"name",{value:e,configurable:!0});import{b as n}from"./ListItemText-90f79698.js";import{C as i}from"./ComponentInfo-0bebdfdd.js";import{U as a,t as p,c as s}from"./ErrorPage-e9c3e4c4.js";import"./Link-0e989b73.js";import"./copyText-94cbea7d.js";import"./IconButton-2fc4716d.js";import"./Paper-154b1d70.js";import"./PaperCode-3ff01054.js";import"./PageNav-5acb3c23.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";const u=p("<span></span>",2);function r(){const t=n("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return a(e,()=>`(min-width:600px) matches: ${t()}`),e})()}m(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function N(){return s(i,{get name(){return n.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}m(N,"useMediaQueryPage");export{N as default};
