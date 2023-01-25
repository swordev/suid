var o=Object.defineProperty;var m=(t,e)=>o(t,"name",{value:e,configurable:!0});import{b as n}from"./ListItemText-7ae6925f.js";import{C as i}from"./ComponentInfo-5876f613.js";import{U as a,t as p,c as s}from"./ErrorPage-e9c3e4c4.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const u=p("<span></span>",2);function r(){const t=n("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return a(e,()=>`(min-width:600px) matches: ${t()}`),e})()}m(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function N(){return s(i,{get name(){return n.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}m(N,"useMediaQueryPage");export{N as default};
