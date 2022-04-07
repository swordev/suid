var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{i as a,a6 as i,t as s,d as o}from"./index.3ce103ce.js";import{C as p}from"./ComponentInfo.40a112b1.js";import"./Link.dbf17a1e.js";import"./copyText.cdad8334.js";import"./PaperCode.57a9e7c6.js";const u=s("<span></span>");function r(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
