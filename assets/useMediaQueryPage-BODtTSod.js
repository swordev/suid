var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{j as a,E as i,t as s,h as o}from"./index-QA7pP0xH.js";import{C as p}from"./ComponentInfo-Cp9In596.js";import"./Link-BRU1W-2I.js";import"./copyText-DYDM2w-T.js";import"./PaperCode-2wa1Y67L.js";var u=s("<span>");function r(){const t=a("(min-width:600px)");return(()=>{var e=u();return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
