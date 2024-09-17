var I=Object.defineProperty;var a=(t,e)=>I(t,"name",{value:e,configurable:!0});import{a2 as T,N as R,O as A,f as F,R as B,V as M,m as g,h as n,b as v,g as E,W as V,a6 as $,c as N,t as r,U as S,a3 as j,a as C,w as D,B as W}from"./index-DmdlqfLA.js";import{C as q}from"./ComponentInfo-DoPgdPtG.js";import{F as O}from"./Favorite-CUXwMTG7.js";import"./Link-CGlR9hJt.js";import"./copyText-C5Z1yx-s.js";import"./PaperCode-B3sw9ua7.js";const z=T({onChange:a(()=>()=>{},"onChange"),showLabels:a(()=>!1,"showLabels"),selectedValue:a(()=>{},"selectedValue"),getIndex:a(()=>0,"getIndex")});function G(t){return A("MuiBottomNavigation",t)}a(G,"getBottomNavigationUtilityClass");R("MuiBottomNavigation",["root"]);const f=F()({name:"MuiBottomNavigation",selfPropNames:["children","classes","onChange","showLabels","value"],utilityClass:G,slotClasses:a(()=>({root:["root"]}),"slotClasses")}),J=B("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:a((t,e)=>e.root,"overridesResolver")})(({theme:t})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:t.palette.background.paper})),y=f.defineComponent(a(function(e){const i=$(e),o=f.useThemeProps({props:e}),[,m]=M(o,["children","class","component","onChange","showLabels","value"]),s=g({component:"div",showLabels:!1},o),c=g(o,{get component(){return s.component},get showLabels(){return s.showLabels}}),d=f.useClasses(c);let u;return n(J,g({get as(){return s.component},get class(){return V(d.root,o.class)},ref:i,ownerState:c},m,{get children(){return n(z.Provider,{get value(){return{showLabels:v(()=>o.showLabels),selectedValue:v(()=>o.value),onChange:v(()=>o.onChange),getIndex:a(p=>u.toArray().indexOf(p),"getIndex")}},get children(){return(u=E(()=>o.children))()}})}}))},"BottomNavigation2"));var K=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),Q=r('<svg><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></svg>',!1,!0);const U=N(()=>[K(),Q()],"LocationOn");var X=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),Y=r('<svg><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></svg>',!1,!0);const _=N(()=>[X(),Y()],"Restore");function Z(t){return A("MuiBottomNavigationAction",t)}a(Z,"getBottomNavigationActionUtilityClass");const H=R("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),b=F()({name:"MuiBottomNavigationAction",selfPropNames:["children","classes","icon","label","showLabel","value"],utilityClass:Z,slotClasses:a(t=>({root:["root",!t.showLabel&&!t.selected&&"iconOnly",t.selected&&"selected"],label:["label",!t.showLabel&&!t.selected&&"iconOnly",t.selected&&"selected"]}),"slotClasses")}),tt=B(S,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:a((t,e)=>{const{ownerState:i}=t;return[e.root,!i.showLabel&&!i.selected&&e.iconOnly]},"overridesResolver")})(({theme:t,ownerState:e})=>({transition:t.transitions.create(["color","padding-top"],{duration:t.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:t.palette.text.secondary,flexDirection:"column",flex:"1",...!e.showLabel&&!e.selected&&{paddingTop:16},[`&.${H.selected}`]:{paddingTop:6,color:t.palette.primary.main}})),et=B("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:a((t,e)=>e.label,"overridesResolver")})(({theme:t,ownerState:e})=>({fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s",...!e.showLabel&&!e.selected&&{opacity:0,transitionDelay:"0s"},[`&.${H.selected}`]:{fontSize:t.typography.pxToRem(14)}})),l=b.defineComponent(a(function(e){const i=$(e),o=b.useThemeProps({props:e}),[,m]=M(o,["class","icon","label","onClick","showLabel","value"]),s=j(z),[c,d]=C();D(()=>d(i.current));const u=v(()=>{if(o.value!==void 0)return o.value;if(c()!==void 0)return s.getIndex(c())}),p=a(L=>{const w=s.onChange();typeof w=="function"&&w(L,u()),typeof o.onClick=="function"&&o.onClick(L)},"handleChange"),h=g(o,{get selected(){return s.selectedValue()===u()},get showLabel(){return o.showLabel??s.showLabels()}}),x=b.useClasses(h);return n(tt,g({ref:i,get class(){return V(x.root,o.class)},focusRipple:!0,onClick:p,ownerState:h},m,{get children(){return[v(()=>o.icon),n(et,{get class(){return x.label},ownerState:h,get children(){return o.label}})]}}))},"BottomNavigationAction2"));function P(){const[t,e]=C(0);return n(W,{sx:{width:500},get children(){return n(y,{showLabels:!0,get value(){return t()},onChange:a((i,o)=>{e(o)},"onChange"),get children(){return[n(l,{label:"Recents",get icon(){return n(_,{})}}),n(l,{label:"Favorites",get icon(){return n(O,{})}}),n(l,{label:"Nearby",get icon(){return n(U,{})}})]}})}})}a(P,"BasicBottomNavigationExample");P.code=`import { Favorite, LocationOn, Restore } from "@suid/icons-material";
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
`;var ot=r('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),nt=r('<svg><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></svg>',!1,!0);const at=N(()=>[ot(),nt()],"Folder");function k(){const[t,e]=C("recents");return n(y,{sx:{width:500},get value(){return t()},onChange:a((i,o)=>e(o),"onChange"),get children(){return[n(l,{label:"Recents",value:"recents",get icon(){return n(_,{})}}),n(l,{label:"Favorites",value:"favorites",get icon(){return n(O,{})}}),n(l,{label:"Nearby",value:"nearby",get icon(){return n(U,{})}}),n(l,{label:"Folder",value:"folder",get icon(){return n(at,{})}})]}})}a(k,"UnlabeledBottomNavigationExample");k.code=`import { Favorite, Folder, LocationOn, Restore } from "@suid/icons-material";
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
`;function vt(){return n(q,{get name(){return y.name},moreExamples:!1,examples:[{component:P,title:"Basic Navigation"},{component:k,title:"Unlabeled"}]})}a(vt,"BottomNavigationPage");export{vt as default};
