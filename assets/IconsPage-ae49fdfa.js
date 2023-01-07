var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{K as S,L as v,G as h,N as a,O as z,c as n,w as s,H as x,t as m}from"./ErrorPage-ac5239e5.js";import{C as y}from"./ComponentInfo-3f416a39.js";import{B as p,S as u}from"./ListItemText-f1fd78c0.js";import{p as H}from"./pink-efbff62a.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function C(o){return v("MuiIcon",o)}r(C,"getIconUtilityClass");S("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const b=h()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:o})=>o({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:C,slotClasses:o=>({root:["root",o.color!=="inherit"&&`color${a(o.color)}`,`fontSize${a(o.fontSize)}`]})}),M=z("span",{name:"MuiIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.root,i.color!=="inherit"&&e[`color${a(i.color)}`],e[`fontSize${a(i.fontSize)}`]]}})(({theme:o,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:o.typography.pxToRem(20),medium:o.typography.pxToRem(24),large:o.typography.pxToRem(36)}[e.fontSize],color:{primary:o.palette.primary.main,secondary:o.palette.secondary.main,info:o.palette.info.main,success:o.palette.success.main,warning:o.palette.warning.main,action:o.palette.action.active,error:o.palette.error.main,disabled:o.palette.action.disabled,inherit:void 0}[e.color]})),$=b.component(r(function({allProps:e,classes:i,otherProps:l,props:g}){return n(M,s({get class(){return x(g.baseClassName,"notranslate",i.root,l.class)},ownerState:e,"aria-hidden":!0},l))},"Icon")),B=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function c(o){return n(u,s(o,{get children(){return B.cloneNode(!0)}}))}r(c,"HomeIcon$1");function d(){return n(p,{sx:{"& > :not(style)":{m:2}},get children(){return[n(c,{fontSize:"small"}),n(c,{}),n(c,{fontSize:"large"}),n(c,{sx:{fontSize:40}})]}})}r(d,"SvgIconsSize");d.code=`import { Box, SvgIcon } from "@suid/material";
import { SvgIconProps } from "@suid/material/SvgIcon";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <HomeIcon fontSize="small" />
      <HomeIcon />
      <HomeIcon fontSize="large" />
      <HomeIcon sx={{ fontSize: 40 }} />
    </Box>
  );
}
`;const N=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function t(o){return n(u,s(o,{get children(){return N.cloneNode(!0)}}))}r(t,"HomeIcon");function f(){return n(p,{sx:{"& > :not(style)":{m:2}},get children(){return[n(t,{}),n(t,{color:"primary"}),n(t,{color:"secondary"}),n(t,{color:"success"}),n(t,{color:"action"}),n(t,{color:"disabled"}),n(t,{get sx(){return{color:H[500]}}})]}})}r(f,"SvgIconsColor");f.code=`import { Box, SvgIcon } from "@suid/material";
import { SvgIconProps } from "@suid/material/SvgIcon";
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
`;function K(){return n(y,{get name(){return $.name},examples:[{component:f,title:"Color"},{title:"Size",component:d}],docsName:"icons"})}r(K,"IconsPage");export{K as default};
