var k=Object.defineProperty;var i=(e,t)=>k(e,"name",{value:t,configurable:!0});import{a2 as I,N as R,O as A,f as F,R as B,V as M,m as g,h as n,b as m,g as T,W as V,a7 as $,c as N,t as r,U as E,a3 as j,a as C,w as D,B as W}from"./index-10f92eee.js";import{C as q}from"./ComponentInfo-2ec1d64d.js";import{F as O}from"./Favorite-53780ec0.js";import"./Link-6a50bd67.js";import"./copyText-e2a5a92e.js";import"./PaperCode-fee6d68d.js";const z=I({onChange:()=>()=>{},showLabels:()=>!1,selectedValue:()=>{},getIndex:()=>0});function G(e){return A("MuiBottomNavigation",e)}i(G,"getBottomNavigationUtilityClass");R("MuiBottomNavigation",["root"]);const h=F()({name:"MuiBottomNavigation",selfPropNames:["children","classes","onChange","showLabels","value"],utilityClass:G,slotClasses:()=>({root:["root"]})}),J=B("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper})),y=h.defineComponent(i(function(t){const a=$(t),o=h.useThemeProps({props:t}),[,v]=M(o,["children","class","component","onChange","showLabels","value"]),s=g({component:"div",showLabels:!1},o),c=g(o,{get component(){return s.component},get showLabels(){return s.showLabels}}),d=h.useClasses(c);let u;return n(J,g({get as(){return s.component},get class(){return V(d.root,o.class)},ref:a,ownerState:c},v,{get children(){return n(z.Provider,{get value(){return{showLabels:m(()=>o.showLabels),selectedValue:m(()=>o.value),onChange:m(()=>o.onChange),getIndex:p=>u.toArray().indexOf(p)}},get children(){return(u=T(()=>o.children))()}})}}))},"BottomNavigation")),K=r('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),Q=r('<svg><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></svg>',!1,!0),S=N(()=>[K(),Q()],"LocationOn"),X=r('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),Y=r('<svg><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></svg>',!1,!0),U=N(()=>[X(),Y()],"Restore");function Z(e){return A("MuiBottomNavigationAction",e)}i(Z,"getBottomNavigationActionUtilityClass");const _=R("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),b=F()({name:"MuiBottomNavigationAction",selfPropNames:["children","classes","icon","label","showLabel","value"],utilityClass:Z,slotClasses:e=>({root:["root",!e.showLabel&&!e.selected&&"iconOnly",e.selected&&"selected"],label:["label",!e.showLabel&&!e.selected&&"iconOnly",e.selected&&"selected"]})}),ee=B(E,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.showLabel&&!a.selected&&t.iconOnly]}})(({theme:e,ownerState:t})=>({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flexDirection:"column",flex:"1",...!t.showLabel&&!t.selected&&{paddingTop:16},[`&.${_.selected}`]:{paddingTop:6,color:e.palette.primary.main}})),te=B("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e,ownerState:t})=>({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s",...!t.showLabel&&!t.selected&&{opacity:0,transitionDelay:"0s"},[`&.${_.selected}`]:{fontSize:e.typography.pxToRem(14)}})),l=b.defineComponent(i(function(t){const a=$(t),o=b.useThemeProps({props:t}),[,v]=M(o,["class","icon","label","onClick","showLabel","value"]),s=j(z),[c,d]=C();D(()=>d(a.current));const u=m(()=>{if(o.value!==void 0)return o.value;if(c()!==void 0)return s.getIndex(c())}),p=i(L=>{const w=s.onChange();typeof w=="function"&&w(L,u()),typeof o.onClick=="function"&&o.onClick(L)},"handleChange"),f=g(o,{get selected(){return s.selectedValue()===u()},get showLabel(){return o.showLabel??s.showLabels()}}),x=b.useClasses(f);return n(ee,g({ref:a,get class(){return V(x.root,o.class)},focusRipple:!0,onClick:p,ownerState:f},v,{get children(){return[m(()=>o.icon),n(te,{get class(){return x.label},ownerState:f,get children(){return o.label}})]}}))},"BottomNavigationAction"));function H(){const[e,t]=C(0);return n(W,{sx:{width:500},get children(){return n(y,{showLabels:!0,get value(){return e()},onChange:(a,o)=>{t(o)},get children(){return[n(l,{label:"Recents",get icon(){return n(U,{})}}),n(l,{label:"Favorites",get icon(){return n(O,{})}}),n(l,{label:"Nearby",get icon(){return n(S,{})}})]}})}})}i(H,"BasicBottomNavigationExample");H.code=`import { Favorite, LocationOn, Restore } from "@suid/icons-material";
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
`;const oe=r('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),ne=r('<svg><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></svg>',!1,!0),ae=N(()=>[oe(),ne()],"Folder");function P(){const[e,t]=C("recents");return n(y,{sx:{width:500},get value(){return e()},onChange:(a,o)=>t(o),get children(){return[n(l,{label:"Recents",value:"recents",get icon(){return n(U,{})}}),n(l,{label:"Favorites",value:"favorites",get icon(){return n(O,{})}}),n(l,{label:"Nearby",value:"nearby",get icon(){return n(S,{})}}),n(l,{label:"Folder",value:"folder",get icon(){return n(ae,{})}})]}})}i(P,"UnlabeledBottomNavigationExample");P.code=`import { Favorite, Folder, LocationOn, Restore } from "@suid/icons-material";
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
`;function me(){return n(q,{get name(){return y.name},moreExamples:!1,examples:[{component:H,title:"Basic Navigation"},{component:P,title:"Unlabeled"}]})}i(me,"BottomNavigationPage");export{me as default};
