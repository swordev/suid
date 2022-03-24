var o=Object.defineProperty;var r=(a,i)=>o(a,"name",{value:i,configurable:!0});import{S as n}from"./Skeleton.55c5e060.js";import{C as m}from"./ComponentInfo.4a323a22.js";import{S as c}from"./copyText.fb75f941.js";import{d as t}from"./vendor.7f6460ea.js";import"./index.52e9424c.js";import"./PaperCode.35ccd2d7.js";import"./PageNav.95afb7be.js";function e(){return t(c,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}r(e,"Variants");e.code=`import Skeleton from "@suid/material/Skeleton";
import Stack from "@suid/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  );
}
`;function d(){return t(m,{get name(){return n.name},examples:[e]})}r(d,"SkeletonPage");export{d as default};
