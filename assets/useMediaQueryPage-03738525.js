var r=Object.defineProperty;var n=(t,e)=>r(t,"name",{value:e,configurable:!0});import{j as a,E as i,t as s,h as o}from"./index-dcf73f67.js";import{C as p}from"./ComponentInfo-b324653a.js";import"./Link-1d61b786.js";import"./copyText-676cc977.js";import"./PaperCode-2aa6fb01.js";const u=s("<span>");function m(){const t=a("(min-width:600px)");return(()=>{const e=u();return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(m,"SimpleMediaQuery");m.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[m],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
