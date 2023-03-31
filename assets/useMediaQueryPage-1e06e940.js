var o=Object.defineProperty;var m=(t,e)=>o(t,"name",{value:e,configurable:!0});import{b as n}from"./ListItemText-6803f35f.js";import{C as i}from"./ComponentInfo-866f98ce.js";import{U as a,t as p,c as s}from"./ErrorPage-899a3c74.js";import"./Link-a8ec2a4e.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const u=p("<span></span>",2);function r(){const t=n("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return a(e,()=>`(min-width:600px) matches: ${t()}`),e})()}m(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function N(){return s(i,{get name(){return n.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}m(N,"useMediaQueryPage");export{N as default};
