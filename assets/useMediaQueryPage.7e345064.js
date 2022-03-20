import{b as t}from"./index.ae27f545.js";import{C as r}from"./ComponentInfo.6103a8aa.js";import{t as m,v as s,d as i}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const o=s("<span></span>");function n(){const a=t("(min-width:600px)");return(()=>{const e=o.cloneNode(!0);return m(e,()=>`(min-width:600px) matches: ${a()}`),e})()}n.code=`import useMediaQuery from "@suid/material/useMediaQuery";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches()}\`}</span>;
}
`;function f(){return i(r,{get name(){return t.name},docsApiName:"components/use-media-query",examples:[n],moreExamples:!1})}export{f as default};
