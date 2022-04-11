var p=Object.defineProperty;var t=(o,e)=>p(o,"name",{value:e,configurable:!0});import{q as f,r as d,s as u,v as c,w as g,d as n,m as s,A as I,B as v,aq as S,t as y}from"./index.8fa0433e.js";import{C as h}from"./ComponentInfo.3c239282.js";import"./Link.a173e980.js";import"./copyText.498a2515.js";import"./PaperCode.3341c9a5.js";const x={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"};function b(o){return d("MuiIcon",o)}t(b,"getIconUtilityClass");f("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const z=u()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:o})=>o({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:b,slotClasses:o=>({root:["root",o.color!=="inherit"&&`color${c(o.color)}`,`fontSize${c(o.fontSize)}`]})}),C=g("span",{name:"MuiIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.color!=="inherit"&&e[`color${c(a.color)}`],e[`fontSize${c(a.fontSize)}`]]}})(({theme:o,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:o.typography.pxToRem(20),medium:o.typography.pxToRem(24),large:o.typography.pxToRem(36)}[e.fontSize],color:{primary:o.palette.primary.main,secondary:o.palette.secondary.main,info:o.palette.info.main,success:o.palette.success.main,warning:o.palette.warning.main,action:o.palette.action.active,error:o.palette.error.main,disabled:o.palette.action.disabled,inherit:void 0}[e.color]})),H=z.component(t(function({allProps:e,classes:a,otherProps:i,props:m}){return n(C,s({get className(){return I(m.baseClassName,"notranslate",a.root,i.className)},ownerState:e,"aria-hidden":!0},i))},"Icon")),N=y('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function r(o){return n(S,s(o,{get children(){return N.cloneNode(!0)}}))}t(r,"HomeIcon");function l(){return n(v,{sx:{"& > :not(style)":{m:2}},get children(){return[n(r,{}),n(r,{color:"primary"}),n(r,{color:"secondary"}),n(r,{color:"success"}),n(r,{color:"action"}),n(r,{color:"disabled"}),n(r,{get sx(){return{color:x[500]}}})]}})}t(l,"SvgIconsColor");l.code=`import Box from "@suid/material/Box";
import SvgIcon, { SvgIconProps } from "@suid/material/SvgIcon";
import { pink } from "@suid/material/colors";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </Box>
  );
}
`;function P(){return n(h,{get name(){return H.name},examples:[{component:l,title:"Color"}],docsName:"icons"})}t(P,"IconsPage");export{P as default};
