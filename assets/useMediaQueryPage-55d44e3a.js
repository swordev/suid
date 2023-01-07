var o=Object.defineProperty;var n=(t,e)=>o(t,"name",{value:e,configurable:!0});import{a as m}from"./ListItemText-f1fd78c0.js";import{C as a}from"./ComponentInfo-3f416a39.js";import{P as i,t as p,c as s}from"./ErrorPage-ac5239e5.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";const u=p("<span></span>");function r(){const t=m("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function g(){return s(a,{get name(){return m.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(g,"useMediaQueryPage");export{g as default};
