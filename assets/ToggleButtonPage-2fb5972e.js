var c=Object.defineProperty;var r=(l,o)=>c(l,"name",{value:o,configurable:!0});import{T as t,a as g}from"./ToggleButtonGroup-69e2d825.js";import{C as h}from"./ComponentInfo-aeec65a8.js";import{a as u,d as n,c as a,t as e}from"./index-023fe001.js";import"./Link-69895b11.js";import"./copyText-5e17717c.js";import"./PaperCode-4c63c47b.js";function m(){const[l,o]=u("web");return n(g,{color:"primary",get value(){return l()},exclusive:!0,onChange:(v,i)=>{o(i)},get children(){return[n(t,{value:"web",children:"Web"}),n(t,{value:"android",children:"Android"}),n(t,{value:"ios",children:"iOS"})]}})}r(m,"ColorToggleButton");m.code=`import { ToggleButton, ToggleButtonGroup } from "@suid/material";
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
`;const f=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),d=e('<svg><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"></svg>',!1,!0),p=a(()=>[f(),d()],"FormatAlignCenter"),A=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),T=e('<svg><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></svg>',!1,!0),B=a(()=>[A(),T()],"FormatAlignJustify"),z=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),H=e('<svg><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></svg>',!1,!0),F=a(()=>[z(),H()],"FormatAlignLeft"),b=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),C=e('<svg><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"></svg>',!1,!0),I=a(()=>[b(),C()],"FormatAlignRight");function s(){const[l,o]=u("left");return n(g,{get value(){return l()},exclusive:!0,onChange:(v,i)=>{o(i)},"aria-label":"text alignment",get children(){return[n(t,{value:"left","aria-label":"left aligned",get children(){return n(F,{})}}),n(t,{value:"center","aria-label":"centered",get children(){return n(p,{})}}),n(t,{value:"right","aria-label":"right aligned",get children(){return n(I,{})}}),n(t,{value:"justify","aria-label":"justified",disabled:!0,get children(){return n(B,{})}})]}})}r(s,"ExclusiveSelection");s.code=`import FormatAlignCenterIcon from "@suid/icons-material/FormatAlignCenter";
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
`;function _(){return n(h,{get name(){return t.name},examples:[s,{title:"Color",component:m}]})}r(_,"ToggleButtonPage");export{_ as default};
