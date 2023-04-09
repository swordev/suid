var h=Object.defineProperty;var r=(n,e)=>h(n,"name",{value:e,configurable:!0});import{K as v,N as x,Q as y,R as l,X as z,U as C,H,W as _,d as o,w as $,B as s,e as m,m as u,ak as f}from"./index-4edd6e97.js";import{C as M}from"./ComponentInfo-031a9ae7.js";import{p as B}from"./pink-efbff62a.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";function b(n){return x("MuiIcon",n)}r(b,"getIconUtilityClass");v("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const k=y()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:n})=>n({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:b,slotClasses:n=>({root:["root",n.color!=="inherit"&&`color${l(n.color)}`,`fontSize${l(n.fontSize)}`]})}),P=z("span",{name:"MuiIcon",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.color!=="inherit"&&e[`color${l(i.color)}`],e[`fontSize${l(i.fontSize)}`]]}})(({theme:n,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:n.typography.pxToRem(20),medium:n.typography.pxToRem(24),large:n.typography.pxToRem(36)}[e.fontSize],color:{primary:n.palette.primary.main,secondary:n.palette.secondary.main,info:n.palette.info.main,success:n.palette.success.main,warning:n.palette.warning.main,action:n.palette.action.active,error:n.palette.error.main,disabled:n.palette.action.disabled,inherit:void 0}[e.color]})),c=k.component(r(function({allProps:e,classes:i,otherProps:p,props:d}){return C(P,H({get class(){return _(d.baseClassName,"notranslate",i.root,p.class)},ownerState:e,"aria-hidden":!0,get children(){return d.children}},p))},"Icon")),R=m('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">');function I(){return[R(),o(s,{sx:{"& > :not(style)":{m:2}},get children(){return[o(c,{children:"add_circle"}),o(c,{color:"primary",children:"add_circle"}),o(c,{get sx(){return{color:$[500]}},children:"add_circle"}),o(c,{fontSize:"small",children:"add_circle"}),o(c,{sx:{fontSize:30},children:"add_circle"})]}})]}r(I,"Icons");I.code=`import { Box, Icon } from "@suid/material";
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
`;const N=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></svg>',!1,!0);function a(n){return o(f,u(n,{get children(){return N()}}))}r(a,"HomeIcon$1");function g(){return o(s,{sx:{"& > :not(style)":{m:2}},get children(){return[o(a,{fontSize:"small"}),o(a,{}),o(a,{fontSize:"large"}),o(a,{sx:{fontSize:40}})]}})}r(g,"SvgIconsSize");g.code=`import { Box, SvgIcon } from "@suid/material";
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
`;const L=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></svg>',!1,!0);function t(n){return o(f,u(n,{get children(){return L()}}))}r(t,"HomeIcon");function S(){return o(s,{sx:{"& > :not(style)":{m:2}},get children(){return[o(t,{}),o(t,{color:"primary"}),o(t,{color:"secondary"}),o(t,{color:"success"}),o(t,{color:"action"}),o(t,{color:"disabled"}),o(t,{get sx(){return{color:B[500]}}})]}})}r(S,"SvgIconsColor");S.code=`import { Box, SvgIcon } from "@suid/material";
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
`;function Q(){return o(M,{get name(){return c.name},examples:[{component:S,title:"Color"},{title:"Size",component:g},{title:"Font Material Icons",component:I}],docsName:"icons"})}r(Q,"IconsPage");export{Q as default};
