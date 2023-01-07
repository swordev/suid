var o=Object.defineProperty;var n=(t,e)=>o(t,"name",{value:e,configurable:!0});import{a as m}from"./ListItemText-97540f66.js";import{C as a}from"./ComponentInfo-fb88dbff.js";import{P as i,t as p,c as s}from"./ErrorPage-7e24a11e.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const u=p("<span></span>");function r(){const t=m("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function g(){return s(a,{get name(){return m.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(g,"useMediaQueryPage");export{g as default};
