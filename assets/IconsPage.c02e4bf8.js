var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{q as v,r as S,s as h,v as a,w as x,d as n,m as s,A as z,B as m,ar as p,t as f}from"./index.0086796b.js";import{C as y}from"./ComponentInfo.912dd45b.js";import"./Link.13098f8a.js";import"./copyText.7a557a33.js";import"./PaperCode.320d836d.js";const b={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"};function C(o){return S("MuiIcon",o)}r(C,"getIconUtilityClass");v("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const H=h()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:o})=>o({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:C,slotClasses:o=>({root:["root",o.color!=="inherit"&&`color${a(o.color)}`,`fontSize${a(o.fontSize)}`]})}),B=x("span",{name:"MuiIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.color!=="inherit"&&e[`color${a(c.color)}`],e[`fontSize${a(c.fontSize)}`]]}})(({theme:o,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:o.typography.pxToRem(20),medium:o.typography.pxToRem(24),large:o.typography.pxToRem(36)}[e.fontSize],color:{primary:o.palette.primary.main,secondary:o.palette.secondary.main,info:o.palette.info.main,success:o.palette.success.main,warning:o.palette.warning.main,action:o.palette.action.active,error:o.palette.error.main,disabled:o.palette.action.disabled,inherit:void 0}[e.color]})),M=H.component(r(function({allProps:e,classes:c,otherProps:l,props:g}){return n(B,s({get className(){return z(g.baseClassName,"notranslate",c.root,l.className)},ownerState:e,"aria-hidden":!0},l))},"Icon")),N=f('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function i(o){return n(p,s(o,{get children(){return N.cloneNode(!0)}}))}r(i,"HomeIcon$1");function u(){return n(m,{sx:{"& > :not(style)":{m:2}},get children(){return[n(i,{fontSize:"small"}),n(i,{}),n(i,{fontSize:"large"}),n(i,{sx:{fontSize:40}})]}})}r(u,"SvgIconsSize");u.code=`import Box from "@suid/material/Box";
import SvgIcon, { SvgIconProps } from "@suid/material/SvgIcon";

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
`;const $=f('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function t(o){return n(p,s(o,{get children(){return $.cloneNode(!0)}}))}r(t,"HomeIcon");function d(){return n(m,{sx:{"& > :not(style)":{m:2}},get children(){return[n(t,{}),n(t,{color:"primary"}),n(t,{color:"secondary"}),n(t,{color:"success"}),n(t,{color:"action"}),n(t,{color:"disabled"}),n(t,{get sx(){return{color:b[500]}}})]}})}r(d,"SvgIconsColor");d.code=`import Box from "@suid/material/Box";
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
`;function T(){return n(y,{get name(){return M.name},examples:[{component:d,title:"Color"},{title:"Size",component:u}],docsName:"icons"})}r(T,"IconsPage");export{T as default};
