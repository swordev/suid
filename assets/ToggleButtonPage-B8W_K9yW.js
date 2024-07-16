var c=Object.defineProperty;var l=(o,r)=>c(o,"name",{value:r,configurable:!0});import{T as e,a as g}from"./ToggleButtonGroup-CYxlcfbW.js";import{C as h}from"./ComponentInfo-D6rsRCnx.js";import{a as u,h as n,c as a,t}from"./index-DDK7TJDP.js";import"./Link-CQanOrc_.js";import"./copyText-DSIayLkX.js";import"./PaperCode-DVdegaHe.js";function m(){const[o,r]=u("web");return n(g,{color:"primary",get value(){return o()},exclusive:!0,onChange:l((s,i)=>{r(i)},"onChange"),get children(){return[n(e,{value:"web",children:"Web"}),n(e,{value:"android",children:"Android"}),n(e,{value:"ios",children:"iOS"})]}})}l(m,"ColorToggleButton");m.code=`import { ToggleButton, ToggleButtonGroup } from "@suid/material";
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
`;var f=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),d=t('<svg><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></svg>',!1,!0);const p=a(()=>[f(),d()],"FormatAlignCenter");var A=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),T=t('<svg><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></svg>',!1,!0);const B=a(()=>[A(),T()],"FormatAlignJustify");var z=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),H=t('<svg><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></svg>',!1,!0);const F=a(()=>[z(),H()],"FormatAlignLeft");var b=t('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),C=t('<svg><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></svg>',!1,!0);const I=a(()=>[b(),C()],"FormatAlignRight");function v(){const[o,r]=u("left");return n(g,{get value(){return o()},exclusive:!0,onChange:l((s,i)=>{r(i)},"onChange"),"aria-label":"text alignment",get children(){return[n(e,{value:"left","aria-label":"left aligned",get children(){return n(F,{})}}),n(e,{value:"center","aria-label":"centered",get children(){return n(p,{})}}),n(e,{value:"right","aria-label":"right aligned",get children(){return n(I,{})}}),n(e,{value:"justify","aria-label":"justified",disabled:!0,get children(){return n(B,{})}})]}})}l(v,"ExclusiveSelection");v.code=`import FormatAlignCenterIcon from "@suid/icons-material/FormatAlignCenter";
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
`;function _(){return n(h,{get name(){return e.name},examples:[v,{title:"Color",component:m}]})}l(_,"ToggleButtonPage");export{_ as default};
