var P=Object.defineProperty;var n=(t,e)=>P(t,"name",{value:e,configurable:!0});import{c as A,t as p,r as R,s as C,v as z,x as v,a4 as I,m as c,d as a,a as j,b as H,f as O,a5 as M,E as N,a6 as D}from"./index.bec6ff41.js";import{C as F}from"./ComponentInfo.efebf197.js";import{S as l}from"./copyText.479cad90.js";import"./Link.e4f8d3dd.js";import"./PaperCode.b90d4cda.js";const V={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},S={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},$=p('<svg><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>',4,!0),q=A(()=>$.cloneNode(!0),"Person");function L(t){return C("MuiAvatar",t)}n(L,"getAvatarUtilityClass");R("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const d=z()({name:"MuiAvatar",selfPropNames:["alt","children","classes","imgProps","sizes","src","srcSet","variant"],utilityClass:L,slotClasses:t=>({root:["root",t.variant,t.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]})}),T=v("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],r.colorDefault&&e.colorDefault]}})(({theme:t,ownerState:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",...e.variant==="rounded"&&{borderRadius:t.shape.borderRadius},...e.variant==="square"&&{borderRadius:0},...e.colorDefault&&{color:t.palette.background.default,backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}})),U=v("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:"10000"}),_=v(q,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function B(t){let e=!0;const[r,i]=j(!1);return H(()=>{e=!1}),O(M(()=>[t.crossOrigin,t.referrerPolicy,t.src,t.srcSet],()=>{if(!t.src&&!t.srcSet)return;i(!1);const o=new Image;o.onload=()=>{!e||i("loaded")},o.onerror=()=>{!e||i("error")},o.crossOrigin=t.crossOrigin,o.referrerPolicy=t.referrerPolicy,o.src=t.src,t.srcSet&&(o.srcset=t.srcSet)})),r}n(B,"useLoaded");const s=d.defineComponent(n(function(e){const r=d.useThemeProps({props:e}),[,i]=I(r,["alt","children","class","component","imgProps","sizes","src","srcSet","variant"]),o=c({component:"div",variant:"circular"},r),w=B(c(()=>r.imgProps||{},{get src(){return r.src},get srcSet(){return r.srcSet}})),f=n(()=>r.src||r.srcSet,"hasImg"),h=n(()=>f()&&w()!=="error","hasImgNotFailing"),m=c(r,{get colorDefault(){return!h()},get component(){return o.component},get variant(){return o.variant}}),u=d.useClasses(m);return a(T,c({get component(){return o.component},ownerState:m,get class(){return N(u.root,r.class)}},i,{children:n(()=>{if(h())return a(U,c({get alt(){return r.alt},get src(){return r.src},get srcSet(){return r.srcSet},get sizes(){return r.sizes},ownerState:m,get class(){return u.img}},()=>r.imgProps||{}));const g=r.children;return g??(f()&&r.alt?r.alt[0]:a(_,{get class(){return u.fallback}}))},"children")}))},"Avatar"));function b(){return a(l,{direction:"row",spacing:2,get children(){return[a(s,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg"}),a(s,{alt:"Travis Howard",src:"https://mui.com/static/images/avatar/2.jpg"}),a(s,{alt:"Cindy Baker",src:"https://mui.com/static/images/avatar/3.jpg"})]}})}n(b,"ImageAvatars");b.code=`import Avatar from "@suid/material/Avatar";
import Stack from "@suid/material/Stack";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
    </Stack>
  );
}
`;function k(){return a(l,{direction:"row",spacing:2,get children(){return[a(s,{children:"H"}),a(s,{get sx(){return{bgcolor:S[500]}},children:"N"}),a(s,{get sx(){return{bgcolor:V[500]}},children:"OP"})]}})}n(k,"LetterAvatars");k.code=`import Avatar from "@suid/material/Avatar";
import Stack from "@suid/material/Stack";
import { deepOrange, deepPurple } from "@suid/material/colors";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
        }}
      >
        N
      </Avatar>
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
        }}
      >
        OP
      </Avatar>
    </Stack>
  );
}
`;function y(){return a(l,{direction:"row",spacing:2,get children(){return[a(s,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg",sx:{width:24,height:24}}),a(s,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg"}),a(s,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg",sx:{width:56,height:56}})]}})}n(y,"SizeImageAvatars");y.code=`import Avatar from "@suid/material/Avatar";
import Stack from "@suid/material/Stack";

export default function SizeImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{
          width: 24,
          height: 24,
        }}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{
          width: 56,
          height: 56,
        }}
      />
    </Stack>
  );
}
`;const E=p('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),G=p('<svg><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>',4,!0),J=A(()=>[E.cloneNode(!0),G.cloneNode(!0)],"Assignment");function x(){return a(l,{direction:"row",spacing:2,get children(){return[a(s,{get sx(){return{bgcolor:S[500]}},variant:"square",children:"N"}),a(s,{get sx(){return{bgcolor:D[500]}},variant:"rounded",get children(){return a(J,{})}})]}})}n(x,"VariantAvatars");x.code=`import AssignmentIcon from "@suid/icons-material/Assignment";
import Avatar from "@suid/material/Avatar";
import Stack from "@suid/material/Stack";
import { deepOrange, green } from "@suid/material/colors";

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
        }}
        variant="square"
      >
        N
      </Avatar>
      <Avatar
        sx={{
          bgcolor: green[500],
        }}
        variant="rounded"
      >
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
`;function rt(){return a(F,{get name(){return s.name},examples:[b,k,{title:"Sizes",component:y},{title:"Variants",component:x}]})}n(rt,"AvatarPage");export{rt as default};
