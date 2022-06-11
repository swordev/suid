var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{i as a,ab as i,t as s,d as o}from"./index.5728258e.js";import{C as p}from"./ComponentInfo.b4aab114.js";import"./Link.5c554c09.js";import"./copyText.3eadc357.js";import"./PaperCode.6e925dac.js";const u=s("<span></span>");function r(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
