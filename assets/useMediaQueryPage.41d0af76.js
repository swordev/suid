var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{b as r}from"./index.f8c435ad.js";import{C as i}from"./ComponentInfo.056394a0.js";import{r as o,t as s,d as p}from"./vendor.7f6460ea.js";import"./copyText.f8718ad2.js";import"./Grid.67791fa5.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";const u=s("<span></span>");function a(){const t=r("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return o(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(a,"SimpleMediaQuery");a.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function Q(){return p(i,{get name(){return r.name},docsApiName:"components/use-media-query",examples:[a],moreExamples:!1})}n(Q,"useMediaQueryPage");export{Q as default};
