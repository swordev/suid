import{i as m,j as p,k as f,l as a,s as d,B as u,O as g}from"./index.ae27f545.js";import{d as n,g as i,h as I,v}from"./vendor.6d0a7b46.js";import{C as S}from"./ComponentInfo.6103a8aa.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const y={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"};function h(o){return p("MuiIcon",o)}m("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const x=f()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:o})=>o({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:h,slotClasses:o=>({root:["root",o.color!=="inherit"&&`color${a(o.color)}`,`fontSize${a(o.fontSize)}`]})}),b=d("span",{name:"MuiIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${a(t.color)}`],e[`fontSize${a(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:o.typography.pxToRem(20),medium:o.typography.pxToRem(24),large:o.typography.pxToRem(36)}[e.fontSize],color:{primary:o.palette.primary.main,secondary:o.palette.secondary.main,info:o.palette.info.main,success:o.palette.success.main,warning:o.palette.warning.main,action:o.palette.action.active,error:o.palette.error.main,disabled:o.palette.action.disabled,inherit:void 0}[e.color]})),z=x.component(function({allProps:e,classes:t,otherProps:c,props:l}){return n(b,i({get className(){return I(l.baseClassName,"notranslate",t.root,c.className)},ownerState:e,"aria-hidden":!0},c))}),C=v('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function r(o){return n(g,i(o,{get children(){return C.cloneNode(!0)}}))}function s(){return n(u,{sx:{"& > :not(style)":{m:2}},get children(){return[n(r,{}),n(r,{color:"primary"}),n(r,{color:"secondary"}),n(r,{color:"success"}),n(r,{color:"action"}),n(r,{color:"disabled"}),n(r,{get sx(){return{color:y[500]}}})]}})}s.code=`import Box from "@suid/material/Box";
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
`;function B(){return n(S,{get name(){return z.name},examples:[s]})}export{B as default};
