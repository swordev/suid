var I=Object.defineProperty;var a=(e,t)=>I(e,"name",{value:t,configurable:!0});import{a2 as T,O as R,N as A,f as F,Q as M,m as g,h as n,g as E,b as v,a6 as V,R as $,U as B,c as N,t as r,a3 as S,a as C,w as j,W as D,B as W}from"./index-NCmNIr1K.js";import{C as Q}from"./ComponentInfo-C3huals-.js";import{F as O}from"./Favorite-DKAoaNkq.js";import"./Link-Ci3uEOYa.js";import"./copyText-C_G9kHbS.js";import"./PaperCode-BKLbHUJT.js";const z=T({onChange:a(()=>()=>{},"onChange"),showLabels:a(()=>!1,"showLabels"),selectedValue:a(()=>{},"selectedValue"),getIndex:a(()=>0,"getIndex")});function q(e){return R("MuiBottomNavigation",e)}a(q,"getBottomNavigationUtilityClass");A("MuiBottomNavigation",["root"]);const h=F()({name:"MuiBottomNavigation",selfPropNames:["children","classes","onChange","showLabels","value"],utilityClass:q,slotClasses:a(()=>({root:["root"]}),"slotClasses")}),G=B("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:a((e,t)=>t.root,"overridesResolver")})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper})),y=h.defineComponent(a(function(t){const s=V(t),o=h.useThemeProps({props:t}),[,m]=M(o,["children","class","component","onChange","showLabels","value"]),i=g({component:"div",showLabels:!1},o),c=g(o,{get component(){return i.component},get showLabels(){return i.showLabels}}),d=h.useClasses(c);let u;return n(G,g({get as(){return i.component},get class(){return $(d.root,o.class)},ref:s,ownerState:c},m,{get children(){return n(z.Provider,{get value(){return{showLabels:v(()=>o.showLabels),selectedValue:v(()=>o.value),onChange:v(()=>o.onChange),getIndex:a(p=>u.toArray().indexOf(p),"getIndex")}},get children(){return(u=E(()=>o.children))()}})}}))},"BottomNavigation2"));var J=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),K=r('<svg><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></svg>',!1,!0,!1);const U=N(()=>[J(),K()],"LocationOn");var X=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),Y=r('<svg><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></svg>',!1,!0,!1);const _=N(()=>[X(),Y()],"Restore");function Z(e){return R("MuiBottomNavigationAction",e)}a(Z,"getBottomNavigationActionUtilityClass");const H=A("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),b=F()({name:"MuiBottomNavigationAction",selfPropNames:["children","classes","icon","label","showLabel","value"],utilityClass:Z,slotClasses:a(e=>({root:["root",!e.showLabel&&!e.selected&&"iconOnly",e.selected&&"selected"],label:["label",!e.showLabel&&!e.selected&&"iconOnly",e.selected&&"selected"]}),"slotClasses")}),ee=B(D,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:a((e,t)=>{const{ownerState:s}=e;return[t.root,!s.showLabel&&!s.selected&&t.iconOnly]},"overridesResolver")})(({theme:e,ownerState:t})=>({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flexDirection:"column",flex:"1",...!t.showLabel&&!t.selected&&{paddingTop:16},[`&.${H.selected}`]:{paddingTop:6,color:e.palette.primary.main}})),te=B("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:a((e,t)=>t.label,"overridesResolver")})(({theme:e,ownerState:t})=>({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s",...!t.showLabel&&!t.selected&&{opacity:0,transitionDelay:"0s"},[`&.${H.selected}`]:{fontSize:e.typography.pxToRem(14)}})),l=b.defineComponent(a(function(t){const s=V(t),o=b.useThemeProps({props:t}),[,m]=M(o,["class","icon","label","onClick","showLabel","value"]),i=S(z),[c,d]=C();j(()=>d(s.current));const u=v(()=>{if(o.value!==void 0)return o.value;if(c()!==void 0)return i.getIndex(c())}),p=a(L=>{const w=i.onChange();typeof w=="function"&&w(L,u()),typeof o.onClick=="function"&&o.onClick(L)},"handleChange"),f=g(o,{get selected(){return i.selectedValue()===u()},get showLabel(){return o.showLabel??i.showLabels()}}),x=b.useClasses(f);return n(ee,g({ref:s,get class(){return $(x.root,o.class)},focusRipple:!0,onClick:p,ownerState:f},m,{get children(){return[v(()=>o.icon),n(te,{get class(){return x.label},ownerState:f,get children(){return o.label}})]}}))},"BottomNavigationAction2"));function P(){const[e,t]=C(0);return n(W,{sx:{width:500},get children(){return n(y,{showLabels:!0,get value(){return e()},onChange:a((s,o)=>{t(o)},"onChange"),get children(){return[n(l,{label:"Recents",get icon(){return n(_,{})}}),n(l,{label:"Favorites",get icon(){return n(O,{})}}),n(l,{label:"Nearby",get icon(){return n(U,{})}})]}})}})}a(P,"BasicBottomNavigationExample");P.code=`import { Favorite, LocationOn, Restore } from "@suid/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@suid/material";
import { createSignal } from "solid-js";

export default function BasicBottomNavigationExample() {
  const [value, setValue] = createSignal(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value()}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
}
`;var oe=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),ne=r('<svg><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></svg>',!1,!0,!1);const ae=N(()=>[oe(),ne()],"Folder");function k(){const[e,t]=C("recents");return n(y,{sx:{width:500},get value(){return e()},onChange:a((s,o)=>t(o),"onChange"),get children(){return[n(l,{label:"Recents",value:"recents",get icon(){return n(_,{})}}),n(l,{label:"Favorites",value:"favorites",get icon(){return n(O,{})}}),n(l,{label:"Nearby",value:"nearby",get icon(){return n(U,{})}}),n(l,{label:"Folder",value:"folder",get icon(){return n(ae,{})}})]}})}a(k,"UnlabeledBottomNavigationExample");k.code=`import { Favorite, Folder, LocationOn, Restore } from "@suid/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@suid/material";
import { createSignal } from "solid-js";

export default function UnlabeledBottomNavigationExample() {
  const [value, setValue] = createSignal("recents");

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value()}
      onChange={(_, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<Restore />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<Favorite />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOn />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
    </BottomNavigation>
  );
}
`;function ve(){return n(Q,{get name(){return y.name},moreExamples:!1,examples:[{component:P,title:"Basic Navigation"},{component:k,title:"Unlabeled"}]})}a(ve,"BottomNavigationPage");export{ve as default};
