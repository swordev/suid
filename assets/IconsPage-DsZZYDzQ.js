var v=Object.defineProperty;var e=(n,r)=>v(n,"name",{value:r,configurable:!0});import{Q as S,O as x,f as y,h as o,m as s,U as z,V as C,W as l,t as m,aL as H,B as p,aY as u}from"./index-D7AwU-U1.js";import{C as _}from"./ComponentInfo-jTCIm-7Z.js";import{p as M}from"./pink-CacABY1C.js";import"./Link-tFkyrfA8.js";import"./copyText-90UyT-ES.js";import"./PaperCode-DXdUlQ30.js";function B(n){return S("MuiIcon",n)}e(B,"getIconUtilityClass");x("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const $=y()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:e(({set:n})=>n({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),"propDefaults"),utilityClass:B,slotClasses:e(n=>({root:["root",n.color!=="inherit"&&`color${l(n.color)}`,`fontSize${l(n.fontSize)}`]}),"slotClasses")}),b=C("span",{name:"MuiIcon",slot:"Root",overridesResolver:e((n,r)=>{const{ownerState:i}=n;return[r.root,i.color!=="inherit"&&r[`color${l(i.color)}`],r[`fontSize${l(i.fontSize)}`]]},"overridesResolver")})(({theme:n,ownerState:r})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:n.typography.pxToRem(20),medium:n.typography.pxToRem(24),large:n.typography.pxToRem(36)}[r.fontSize],color:{primary:n.palette.primary.main,secondary:n.palette.secondary.main,info:n.palette.info.main,success:n.palette.success.main,warning:n.palette.warning.main,action:n.palette.action.active,error:n.palette.error.main,disabled:n.palette.action.disabled,inherit:void 0}[r.color]})),c=$.component(e(function({allProps:r,classes:i,otherProps:d,props:f}){return o(b,s({get class(){return z(f.baseClassName,"notranslate",i.root,d.class)},ownerState:r,"aria-hidden":!0,get children(){return f.children}},d))},"Icon2"));var k=m('<link rel=stylesheet href="https://fonts.googleapis.com/icon?family=Material+Icons">');function I(){return[k(),o(p,{sx:{"& > :not(style)":{m:2}},get children(){return[o(c,{children:"add_circle"}),o(c,{color:"primary",children:"add_circle"}),o(c,{get sx(){return{color:H[500]}},children:"add_circle"}),o(c,{fontSize:"small",children:"add_circle"}),o(c,{sx:{fontSize:30},children:"add_circle"})]}})]}e(I,"Icons");I.code=`import { Box, Icon } from "@suid/material";
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
`;var P=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></svg>',!1,!0,!1);function a(n){return o(u,s(n,{get children(){return P()}}))}e(a,"HomeIcon$1");function g(){return o(p,{sx:{"& > :not(style)":{m:2}},get children(){return[o(a,{fontSize:"small"}),o(a,{}),o(a,{fontSize:"large"}),o(a,{sx:{fontSize:40}})]}})}e(g,"SvgIconsSize");g.code=`import { Box, SvgIcon } from "@suid/material";
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
`;var L=m('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></svg>',!1,!0,!1);function t(n){return o(u,s(n,{get children(){return L()}}))}e(t,"HomeIcon");function h(){return o(p,{sx:{"& > :not(style)":{m:2}},get children(){return[o(t,{}),o(t,{color:"primary"}),o(t,{color:"secondary"}),o(t,{color:"success"}),o(t,{color:"action"}),o(t,{color:"disabled"}),o(t,{get sx(){return{color:M[500]}}})]}})}e(h,"SvgIconsColor");h.code=`import { Box, SvgIcon } from "@suid/material";
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
`;function F(){return o(_,{get name(){return c.name},examples:[{component:h,title:"Color"},{title:"Size",component:g},{title:"Font Material Icons",component:I}],docsName:"icons"})}e(F,"IconsPage");export{F as default};
