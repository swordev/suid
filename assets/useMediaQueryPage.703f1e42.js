var m=Object.defineProperty;var n=(t,e)=>m(t,"name",{value:e,configurable:!0});import{b as r}from"./index.52e9424c.js";import{C as i}from"./ComponentInfo.4a323a22.js";import{r as o,t as s,d as p}from"./vendor.7f6460ea.js";import"./copyText.fb75f941.js";import"./PaperCode.35ccd2d7.js";import"./PageNav.95afb7be.js";const u=s("<span></span>");function a(){const t=r("(min-width:600px)");return(()=>{const e=u.cloneNode(!0);return o(e,()=>`(min-width:600px) matches: ${t()}`),e})()}n(a,"SimpleMediaQuery");a.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function M(){return p(i,{get name(){return r.name},docsApiName:"components/use-media-query",examples:[a],moreExamples:!1})}n(M,"useMediaQueryPage");export{M as default};
