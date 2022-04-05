var o=Object.defineProperty;var e=(r,i)=>o(r,"name",{value:i,configurable:!0});import{d as t,O as n}from"./index.b7957beb.js";import{C as c}from"./ComponentInfo.e6ba9f4e.js";import{S as m}from"./copyText.458eb312.js";import"./Link.314b9cd9.js";import"./PaperCode.37f24fed.js";function a(){return t(m,{spacing:1,get children(){return[t(n,{variant:"text"}),t(n,{variant:"circular",width:40,height:40}),t(n,{variant:"rectangular",width:210,height:118})]}})}e(a,"Variants");a.code=`import Skeleton from "@suid/material/Skeleton";
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
`;function s(){return t(c,{get name(){return n.name},examples:[a]})}e(s,"SkeletonPage");export{s as default};
