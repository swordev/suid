var m=Object.defineProperty;var o=(c,i)=>m(c,"name",{value:i,configurable:!0});import{L as r}from"./Link.1ad6cfad.js";import{C as s}from"./ComponentInfo.ea6dbfc9.js";import{C as l}from"./Check.f1d048c6.js";import{c as n,t,d as e}from"./index.30c7ab8a.js";import{S as h}from"./copyText.4c537fad.js";import"./PaperCode.06945c94.js";const p=t('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),f=t('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);var u=n(()=>[p.cloneNode(!0),f.cloneNode(!0)],"Home");const d=t('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),v=t('<svg><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>',4,!0);var g=n(()=>[d.cloneNode(!0),v.cloneNode(!0)],"Refresh");const k=t('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),I=t('<svg><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>',4,!0);var S=n(()=>[k.cloneNode(!0),I.cloneNode(!0)],"Search");function a(){return e(h,{spacing:2,direction:"row",get children(){return[e(g,{}),e(l,{}),e(u,{}),e(S,{}),e(r,{href:"https://mui.com/components/material-icons/",target:"_blank",children:"..."})]}})}o(a,"Example");a.code=`import CheckIcon from "@suid/icons-material/Check";
import HomeIcon from "@suid/icons-material/Home";
import RefreshIcon from "@suid/icons-material/Refresh";
import SearchIcon from "@suid/icons-material/Search";
import Link from "@suid/material/Link";
import Stack from "@suid/material/Stack";

export default function Example() {
  return (
    <Stack spacing={2} direction="row">
      <RefreshIcon />
      <CheckIcon />
      <HomeIcon />
      <SearchIcon />
      <Link href="https://mui.com/components/material-icons/" target="_blank">
        ...
      </Link>
    </Stack>
  );
}
`;function x(){return e(s,{importInfo:!1,name:"Material Icons",get body(){return["Check the full list with +2.000 icons on"," ",e(r,{href:"https://mui.com/components/material-icons/",target:"_blank",children:"MUI docs"}),"."]},examples:[a],moreExamples:!1})}o(x,"MaterialIconsPage");export{x as default};
