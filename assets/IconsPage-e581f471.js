var h=Object.defineProperty;var r=(n,e)=>h(n,"name",{value:e,configurable:!0});import{r as v,s as x,v as y,O as a,w as z,d as o,m as s,x as C,E as H,B as m,t as p,ac as f}from"./index-234a832c.js";import{C as _}from"./ComponentInfo-32648ae4.js";import{p as M}from"./pink-efbff62a.js";import"./Link-c679330d.js";import"./copyText-bdac678d.js";import"./PaperCode-d3b9739f.js";function B(n){return x("MuiIcon",n)}r(B,"getIconUtilityClass");v("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const $=y()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:n})=>n({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:B,slotClasses:n=>({root:["root",n.color!=="inherit"&&`color${a(n.color)}`,`fontSize${a(n.fontSize)}`]})}),b=z("span",{name:"MuiIcon",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.color!=="inherit"&&e[`color${a(i.color)}`],e[`fontSize${a(i.fontSize)}`]]}})(({theme:n,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:n.typography.pxToRem(20),medium:n.typography.pxToRem(24),large:n.typography.pxToRem(36)}[e.fontSize],color:{primary:n.palette.primary.main,secondary:n.palette.secondary.main,info:n.palette.info.main,success:n.palette.success.main,warning:n.palette.warning.main,action:n.palette.action.active,error:n.palette.error.main,disabled:n.palette.action.disabled,inherit:void 0}[e.color]})),c=$.component(r(function({allProps:e,classes:i,otherProps:d,props:u}){return o(b,s({get class(){return C(u.baseClassName,"notranslate",i.root,d.class)},ownerState:e,"aria-hidden":!0,get children(){return u.children}},d))},"Icon")),k=p('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">');function I(){return[k(),o(m,{sx:{"& > :not(style)":{m:2}},get children(){return[o(c,{children:"add_circle"}),o(c,{color:"primary",children:"add_circle"}),o(c,{get sx(){return{color:H[500]}},children:"add_circle"}),o(c,{fontSize:"small",children:"add_circle"}),o(c,{sx:{fontSize:30},children:"add_circle"})]}})]}r(I,"Icons");I.code=`import { Box, Icon } from "@suid/material";
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
`;const P=p('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></svg>',!1,!0);function l(n){return o(f,s(n,{get children(){return P()}}))}r(l,"HomeIcon$1");function g(){return o(m,{sx:{"& > :not(style)":{m:2}},get children(){return[o(l,{fontSize:"small"}),o(l,{}),o(l,{fontSize:"large"}),o(l,{sx:{fontSize:40}})]}})}r(g,"SvgIconsSize");g.code=`import { Box, SvgIcon } from "@suid/material";
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
`;const R=p('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></svg>',!1,!0);function t(n){return o(f,s(n,{get children(){return R()}}))}r(t,"HomeIcon");function S(){return o(m,{sx:{"& > :not(style)":{m:2}},get children(){return[o(t,{}),o(t,{color:"primary"}),o(t,{color:"secondary"}),o(t,{color:"success"}),o(t,{color:"action"}),o(t,{color:"disabled"}),o(t,{get sx(){return{color:M[500]}}})]}})}r(S,"SvgIconsColor");S.code=`import { Box, SvgIcon } from "@suid/material";
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
`;function E(){return o(_,{get name(){return c.name},examples:[{component:S,title:"Color"},{title:"Size",component:g},{title:"Font Material Icons",component:I}],docsName:"icons"})}r(E,"IconsPage");export{E as default};
