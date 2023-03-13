var S=Object.defineProperty;var r=(o,e)=>S(o,"name",{value:e,configurable:!0});import{O as v,P as x,I as y,Q as a,R as z,c as n,p as s,J as C,t as m,af as H}from"./ErrorPage-eb59dadb.js";import{C as _}from"./ComponentInfo-1eac72a6.js";import{B as p,S as f}from"./ListItemText-be55e132.js";import{p as M}from"./pink-efbff62a.js";import"./Link-123f7416.js";import"./copyText-dae2e1ef.js";import"./IconButton-c6b31999.js";import"./Paper-32f89a64.js";import"./PaperCode-b3aeccfd.js";import"./PageNav-652b02ba.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";function B(o){return x("MuiIcon",o)}r(B,"getIconUtilityClass");v("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const $=y()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:o})=>o({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:B,slotClasses:o=>({root:["root",o.color!=="inherit"&&`color${a(o.color)}`,`fontSize${a(o.fontSize)}`]})}),b=z("span",{name:"MuiIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.root,i.color!=="inherit"&&e[`color${a(i.color)}`],e[`fontSize${a(i.fontSize)}`]]}})(({theme:o,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:o.typography.pxToRem(20),medium:o.typography.pxToRem(24),large:o.typography.pxToRem(36)}[e.fontSize],color:{primary:o.palette.primary.main,secondary:o.palette.secondary.main,info:o.palette.info.main,success:o.palette.success.main,warning:o.palette.warning.main,action:o.palette.action.active,error:o.palette.error.main,disabled:o.palette.action.disabled,inherit:void 0}[e.color]})),c=$.component(r(function({allProps:e,classes:i,otherProps:d,props:u}){return n(b,s({get class(){return C(u.baseClassName,"notranslate",i.root,d.class)},ownerState:e,"aria-hidden":!0,get children(){return u.children}},d))},"Icon")),N=m('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">',1);function I(){return[N.cloneNode(!0),n(p,{sx:{"& > :not(style)":{m:2}},get children(){return[n(c,{children:"add_circle"}),n(c,{color:"primary",children:"add_circle"}),n(c,{get sx(){return{color:H[500]}},children:"add_circle"}),n(c,{fontSize:"small",children:"add_circle"}),n(c,{sx:{fontSize:30},children:"add_circle"})]}})]}r(I,"Icons");I.code=`import { Box, Icon } from "@suid/material";
import { green } from "@suid/material/colors";

export default function Icons() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Box
        sx={{
          "& > :not(style)": {
            m: 2,
          },
        }}
      >
        <Icon>add_circle</Icon>
        <Icon color="primary">add_circle</Icon>
        <Icon sx={{ color: green[500] }}>add_circle</Icon>
        <Icon fontSize="small">add_circle</Icon>
        <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
      </Box>
    </>
  );
}
`;const P=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function l(o){return n(f,s(o,{get children(){return P.cloneNode(!0)}}))}r(l,"HomeIcon$1");function g(){return n(p,{sx:{"& > :not(style)":{m:2}},get children(){return[n(l,{fontSize:"small"}),n(l,{}),n(l,{fontSize:"large"}),n(l,{sx:{fontSize:40}})]}})}r(g,"SvgIconsSize");g.code=`import { Box, SvgIcon } from "@suid/material";
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
`;const k=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function t(o){return n(f,s(o,{get children(){return k.cloneNode(!0)}}))}r(t,"HomeIcon");function h(){return n(p,{sx:{"& > :not(style)":{m:2}},get children(){return[n(t,{}),n(t,{color:"primary"}),n(t,{color:"secondary"}),n(t,{color:"success"}),n(t,{color:"action"}),n(t,{color:"disabled"}),n(t,{get sx(){return{color:M[500]}}})]}})}r(h,"SvgIconsColor");h.code=`import { Box, SvgIcon } from "@suid/material";
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
`;function G(){return n(_,{get name(){return c.name},examples:[{component:h,title:"Color"},{title:"Size",component:g},{title:"Font Material Icons",component:I}],docsName:"icons"})}r(G,"IconsPage");export{G as default};
