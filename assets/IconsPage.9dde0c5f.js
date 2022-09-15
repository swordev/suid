var I=Object.defineProperty;var r=(o,e)=>I(o,"name",{value:e,configurable:!0});import{r as v,s as S,v as h,w as a,x,d as n,m as s,E as z,B as m,ax as p,t as u}from"./index.94b113cc.js";import{C as y}from"./ComponentInfo.235f309e.js";import{p as C}from"./pink.26d9c0dd.js";import"./Link.a08bb7e6.js";import"./copyText.b98a3edd.js";import"./PaperCode.4611f55b.js";function H(o){return S("MuiIcon",o)}r(H,"getIconUtilityClass");v("MuiIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const B=h()({name:"MuiIcon",selfPropNames:["baseClassName","children","classes","color","fontSize"],propDefaults:({set:o})=>o({baseClassName:"material-icons",color:"inherit",component:"span",fontSize:"medium"}),utilityClass:H,slotClasses:o=>({root:["root",o.color!=="inherit"&&`color${a(o.color)}`,`fontSize${a(o.fontSize)}`]})}),b=x("span",{name:"MuiIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:i}=o;return[e.root,i.color!=="inherit"&&e[`color${a(i.color)}`],e[`fontSize${a(i.fontSize)}`]]}})(({theme:o,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",overflow:"hidden",display:"inline-block",textAlign:"center",flexShrink:0,fontSize:{inherit:"inherit",small:o.typography.pxToRem(20),medium:o.typography.pxToRem(24),large:o.typography.pxToRem(36)}[e.fontSize],color:{primary:o.palette.primary.main,secondary:o.palette.secondary.main,info:o.palette.info.main,success:o.palette.success.main,warning:o.palette.warning.main,action:o.palette.action.active,error:o.palette.error.main,disabled:o.palette.action.disabled,inherit:void 0}[e.color]})),M=B.component(r(function({allProps:e,classes:i,otherProps:l,props:g}){return n(b,s({get class(){return z(g.baseClassName,"notranslate",i.root,l.class)},ownerState:e,"aria-hidden":!0},l))},"Icon")),$=u('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function c(o){return n(p,s(o,{get children(){return $.cloneNode(!0)}}))}r(c,"HomeIcon$1");function d(){return n(m,{sx:{"& > :not(style)":{m:2}},get children(){return[n(c,{fontSize:"small"}),n(c,{}),n(c,{fontSize:"large"}),n(c,{sx:{fontSize:40}})]}})}r(d,"SvgIconsSize");d.code=`import Box from "@suid/material/Box";
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
`;const N=u('<svg><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>',4,!0);function t(o){return n(p,s(o,{get children(){return N.cloneNode(!0)}}))}r(t,"HomeIcon");function f(){return n(m,{sx:{"& > :not(style)":{m:2}},get children(){return[n(t,{}),n(t,{color:"primary"}),n(t,{color:"secondary"}),n(t,{color:"success"}),n(t,{color:"action"}),n(t,{color:"disabled"}),n(t,{get sx(){return{color:C[500]}}})]}})}r(f,"SvgIconsColor");f.code=`import Box from "@suid/material/Box";
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
`;function A(){return n(y,{get name(){return M.name},examples:[{component:f,title:"Color"},{title:"Size",component:d}],docsName:"icons"})}r(A,"IconsPage");export{A as default};
