var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{b as a}from"./index.8a208475.js";import{C as i}from"./ComponentInfo.b33c029f.js";import{r as o,t as s,a as p}from"./vendor.7d03e054.js";import"./Link.09367311.js";import"./copyText.60242f1f.js";import"./PaperCode.3ea7de34.js";const u=s("<span></span>");function r(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return o(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function M(){return p(i,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(M,"useMediaQueryPage");export{M as default};
