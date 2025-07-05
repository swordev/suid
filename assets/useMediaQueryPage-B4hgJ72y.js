var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{j as a,t as i,F as s,h as o}from"./index-CjEeoCEC.js";import{C as p}from"./ComponentInfo-CkarIG-0.js";import"./Link-CKrTPHK1.js";import"./copyText-C93HcJfJ.js";import"./PaperCode-COQmQRMt.js";var u=i("<span>");function r(){const t=a("(min-width:600px)");return(()=>{var e=u();return s(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import { useMediaQuery } from "@suid/material";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
