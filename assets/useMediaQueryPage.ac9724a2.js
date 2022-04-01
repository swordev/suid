var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{e as a}from"./index.ed1b30b4.js";import{C as i}from"./ComponentInfo.009186fa.js";import{r as o,t as s,a as p}from"./vendor.37d14b95.js";import"./Link.9b4d9d27.js";import"./copyText.ca51de91.js";import"./PaperCode.3f9a0c8e.js";const u=s("<span></span>");function r(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return o(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function M(){return p(i,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(M,"useMediaQueryPage");export{M as default};
