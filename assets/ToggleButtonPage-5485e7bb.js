var s=Object.defineProperty;var r=(o,l)=>s(o,"name",{value:l,configurable:!0});import{T as e,a as g}from"./ToggleButtonGroup-97c63017.js";import{C as h}from"./ComponentInfo-5876f613.js";import{h as u,c as t,t as n}from"./ErrorPage-e9c3e4c4.js";import{c as i}from"./ListItemText-7ae6925f.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function m(){const[o,l]=u("web");return t(g,{color:"primary",get value(){return o()},exclusive:!0,onChange:(c,a)=>{l(a)},get children(){return[t(e,{value:"web",children:"Web"}),t(e,{value:"android",children:"Android"}),t(e,{value:"ios",children:"iOS"})]}})}r(m,"ColorToggleButton");m.code=`import { ToggleButton, ToggleButtonGroup } from "@suid/material";
import { createSignal } from "solid-js";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = createSignal("web");

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment()}
      exclusive
      onChange={(event, newAlignment) => {
        setAlignment(newAlignment);
      }}
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
}
`;const p=n('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),d=n('<svg><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></path></svg>',4,!0),f=i(()=>[p.cloneNode(!0),d.cloneNode(!0)],"FormatAlignCenter"),A=n('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),T=n('<svg><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path></svg>',4,!0),B=i(()=>[A.cloneNode(!0),T.cloneNode(!0)],"FormatAlignJustify"),z=n('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),H=n('<svg><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path></svg>',4,!0),F=i(()=>[z.cloneNode(!0),H.cloneNode(!0)],"FormatAlignLeft"),b=n('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),C=n('<svg><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></path></svg>',4,!0),I=i(()=>[b.cloneNode(!0),C.cloneNode(!0)],"FormatAlignRight");function v(){const[o,l]=u("left");return t(g,{get value(){return o()},exclusive:!0,onChange:(c,a)=>{l(a)},"aria-label":"text alignment",get children(){return[t(e,{value:"left","aria-label":"left aligned",get children(){return t(F,{})}}),t(e,{value:"center","aria-label":"centered",get children(){return t(f,{})}}),t(e,{value:"right","aria-label":"right aligned",get children(){return t(I,{})}}),t(e,{value:"justify","aria-label":"justified",disabled:!0,get children(){return t(B,{})}})]}})}r(v,"ExclusiveSelection");v.code=`import FormatAlignCenterIcon from "@suid/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@suid/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@suid/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@suid/icons-material/FormatAlignRight";
import { ToggleButton, ToggleButtonGroup } from "@suid/material";
import { createSignal } from "solid-js";

export default function ExclusiveSelection() {
  const [alignment, setAlignment] = createSignal("left");

  return (
    <ToggleButtonGroup
      value={alignment()}
      exclusive
      onChange={(event, newAlignment) => {
        setAlignment(newAlignment);
      }}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;function E(){return t(h,{get name(){return e.name},examples:[v,{title:"Color",component:m}]})}r(E,"ToggleButtonPage");export{E as default};
