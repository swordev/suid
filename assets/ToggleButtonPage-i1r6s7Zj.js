var c=Object.defineProperty;var l=(o,a)=>c(o,"name",{value:a,configurable:!0});import{T as n,a as g}from"./ToggleButtonGroup-Clr1obwh.js";import{C as f}from"./ComponentInfo-C3huals-.js";import{a as u,h as e,c as r,t}from"./index-NCmNIr1K.js";import"./Link-Ci3uEOYa.js";import"./copyText-C_G9kHbS.js";import"./PaperCode-BKLbHUJT.js";function m(){const[o,a]=u("web");return e(g,{color:"primary",get value(){return o()},exclusive:!0,onChange:l((v,i)=>{a(i)},"onChange"),get children(){return[e(n,{value:"web",children:"Web"}),e(n,{value:"android",children:"Android"}),e(n,{value:"ios",children:"iOS"})]}})}l(m,"ColorToggleButton");m.code=`import { ToggleButton, ToggleButtonGroup } from "@suid/material";
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
`;var h=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),d=t('<svg><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></svg>',!1,!0,!1);const p=r(()=>[h(),d()],"FormatAlignCenter");var A=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),T=t('<svg><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></svg>',!1,!0,!1);const B=r(()=>[A(),T()],"FormatAlignJustify");var z=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),H=t('<svg><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></svg>',!1,!0,!1);const F=r(()=>[z(),H()],"FormatAlignLeft");var b=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),C=t('<svg><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></svg>',!1,!0,!1);const I=r(()=>[b(),C()],"FormatAlignRight");function s(){const[o,a]=u("left");return e(g,{get value(){return o()},exclusive:!0,onChange:l((v,i)=>{a(i)},"onChange"),"aria-label":"text alignment",get children(){return[e(n,{value:"left","aria-label":"left aligned",get children(){return e(F,{})}}),e(n,{value:"center","aria-label":"centered",get children(){return e(p,{})}}),e(n,{value:"right","aria-label":"right aligned",get children(){return e(I,{})}}),e(n,{value:"justify","aria-label":"justified",disabled:!0,get children(){return e(B,{})}})]}})}l(s,"ExclusiveSelection");s.code=`import FormatAlignCenterIcon from "@suid/icons-material/FormatAlignCenter";
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
`;function _(){return e(f,{get name(){return n.name},examples:[s,{title:"Color",component:m}]})}l(_,"ToggleButtonPage");export{_ as default};
