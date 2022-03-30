var m=Object.defineProperty;var t=(a,c)=>m(a,"name",{value:c,configurable:!0});import{L as s}from"./Link.d3ce06b2.js";import{C as i}from"./ComponentInfo.94932f37.js";import{C as l}from"./Check.d1658723.js";import{t as o,a as e}from"./vendor.7d03e054.js";import{c as n}from"./index.575706a7.js";import{S as p}from"./copyText.ce384d40.js";import"./PaperCode.2d840087.js";const h=o('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),f=o('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);var u=n(()=>[h.cloneNode(!0),f.cloneNode(!0)],"Home");const d=o('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),v=o('<svg><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>',4,!0);var g=n(()=>[d.cloneNode(!0),v.cloneNode(!0)],"Refresh");const I=o('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),S=o('<svg><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>',4,!0);var k=n(()=>[I.cloneNode(!0),S.cloneNode(!0)],"Search");function r(){return e(p,{spacing:2,direction:"row",get children(){return[e(g,{}),e(l,{}),e(u,{}),e(k,{})]}})}t(r,"Example");r.code=`import CheckIcon from "@suid/icons-material/Check";
import HomeIcon from "@suid/icons-material/Home";
import RefreshIcon from "@suid/icons-material/Refresh";
import SearchIcon from "@suid/icons-material/Search";
import Stack from "@suid/material/Stack";

export default function Example() {
  return (
    <Stack spacing={2} direction="row">
      <RefreshIcon />
      <CheckIcon />
      <HomeIcon />
      <SearchIcon />
    </Stack>
  );
}
`;function L(){return e(i,{importInfo:!1,name:"Material Icons",get body(){return["Check the full list with +2.000 icons on"," ",e(s,{href:"https://mui.com/components/material-icons/",target:"_blank",children:"MUI docs"}),"."]},examples:[r],moreExamples:!1})}t(L,"MaterialIconsPage");export{L as default};
