var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{i as a,ab as i,t as s,d as o}from"./index.6d1e395d.js";import{C as p}from"./ComponentInfo.599502bc.js";import"./Link.6b86d802.js";import"./copyText.3b8efda4.js";import"./PaperCode.862f7f59.js";const u=s("<span></span>");function r(){const t=a("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return i(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(r,"SimpleMediaQuery");r.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function y(){return o(p,{get name(){return a.name},docsApiName:"components/use-media-query",examples:[r],moreExamples:!1})}n(y,"useMediaQueryPage");export{y as default};
