var Re=Object.defineProperty;var a=(e,n)=>Re(e,"name",{value:n,configurable:!0});import{c as x,t as c,O as Ce,Q as Ie,f as $e,R as W,m as h,h as i,b as z,u as ze,a as C,d as Fe,Y as Le,l as F,a7 as Me,U as k,V as T,W as te,b7 as Y,av as Te,ar as L,a_ as P,b8 as D,F as N,b9 as _,S as Ae,k as M,B as U}from"./index-COI4Ufax.js";import{u as Ee}from"./useControlled-CoBhBOC5.js";import{c as ie}from"./createUniqueId-ttDV41M7.js";import{C as He}from"./ComponentInfo-yGqxOQ4_.js";import{F as Oe}from"./Favorite-DlGXg9Hg.js";import{F as we}from"./FavoriteBorder-DhI8KT-J.js";import{S as ae}from"./copyText-Dqd6Kcdt.js";import"./Link-hQL6lNqD.js";import"./PaperCode-DVVPcKbF.js";const Be={position:"absolute",width:"1px",height:"1px",margin:"-1px",padding:0,border:0,clip:"rect(0 0 0 0)",overflow:"hidden","white-space":"nowrap"};var _e=c('<svg><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></svg>',!1,!0,!1);const ke=x(()=>_e(),"Star");var Pe=c('<svg><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></svg>',!1,!0,!1);const De=x(()=>Pe(),"StarBorder");function Ne(e){return Ie("MuiRating",e)}a(Ne,"getRatingUtilityClass");const H=Ce("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);var G=c("<span>"),Ue=c("<input type=radio>"),Ge=c("<input value type=radio>");const j=$e()({name:"MuiRating",selfPropNames:["classes","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","precision","readOnly","size","value"],utilityClass:Ne,slotClasses:a(e=>({root:["root",`size${te(e.size)}`,e.disabled&&"disabled",e.focusVisible&&"focusVisible",e.readOnly&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[e.emptyValueFocused&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]}),"slotClasses")});function Xe(e,n,l){return e<n?n:e>l?l:e}a(Xe,"clamp");function je(e){const n=e.toString().split(".")[1];return n?n.length:0}a(je,"getDecimalPrecision");function J(e,n){if(e==null)return e;const l=Math.round(e/n)*n;return Number(l.toFixed(je(n)))}a(J,"roundValueToPrecision");const Je=T("span",{name:"MuiRating",slot:"Root",overridesResolver:a((e,n)=>{const{ownerState:l}=e;return[{[`& .${H.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${te(l.size)}`],l.readOnly&&n.readOnly]},"overridesResolver")})(({theme:e,ownerState:n})=>({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${H.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`&.${H.focusVisible} .${H.iconActive}`]:{outline:"1px solid #999"},[`& .${H.visuallyHidden}`]:Be,...n.size==="small"&&{fontSize:e.typography.pxToRem(18)},...n.size==="large"&&{fontSize:e.typography.pxToRem(30)},...n.readOnly&&{pointerEvents:"none"}})),oe=T("label",{name:"MuiRating",slot:"Label",overridesResolver:a((e,n)=>n.label,"overridesResolver")})(({ownerState:e})=>({cursor:"inherit",...e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}})),We=T("span",{name:"MuiRating",slot:"Icon",overridesResolver:a((e,n)=>{const{ownerState:l}=e;return[n.icon,l.iconEmpty&&n.iconEmpty,l.iconFilled&&n.iconFilled,l.iconHover&&n.iconHover,l.iconFocus&&n.iconFocus,l.iconActive&&n.iconActive]},"overridesResolver")})(({theme:e,ownerState:n})=>({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none",...n.iconActive&&{transform:"scale(1.2)"},...n.iconEmpty&&{color:e.palette.action.disabled}})),Ye=T("span",{name:"MuiRating",slot:"Decimal",overridesResolver:a((e,n)=>{const{iconActive:l}=e;return[n.decimal,l&&n.iconActive]},"overridesResolver")})(({ownerState:e})=>({position:"relative",...e.iconActive&&{transform:"scale(1.2)"}}));function qe(e){const[,n]=W(e,["value"]);return(()=>{var l=G();return Y(l,n,!1,!1),l})()}a(qe,"IconContainer$1");function ee(e){const n=z(()=>e.highlightSelectedOnly?e.itemValue===e.ratingValue:e.itemValue<=e.ratingValue),l=z(()=>e.itemValue<=e.hover),r=z(()=>e.itemValue<=e.focus),A=z(()=>e.itemValue===e.ratingValueRounded),t=ie(),I=i(We,{get as(){return e.IconContainerComponent},get value(){return e.itemValue},get class(){return k(e.classes.icon,{get[e.classes.iconEmpty](){return!n()},[e.classes.iconFilled]:n(),[e.classes.iconHover]:l(),[e.classes.iconFocus]:r(),get[e.classes.iconActive](){return e.isActive}})},get ownerState(){return h(()=>e.ownerState,{get iconEmpty(){return!n()},iconFilled:n(),iconHover:l(),iconFocus:r(),get iconActive(){return e.isActive}})},get children(){return e.emptyIcon&&!n()?e.emptyIcon:e.icon}});return i(Ae,{get when(){return!e.readOnly},get fallback(){return(()=>{var u=G();return Y(u,h(()=>e.labelProps),!1,!0),N(u,I),u})()},get children(){return[i(oe,h({get ownerState(){return h(()=>e.ownerState,{emptyValueFocused:void 0})},get for(){return t()}},()=>e.labelProps,{get children(){return[I,(()=>{var u=G();return N(u,()=>e.getLabelText(e.itemValue)),L(()=>P(u,e.classes.visuallyHidden)),u})()]}})),(()=>{var u=Ue();return _(u,"click",e.onClick,!0),_(u,"change",e.onChange),_(u,"blur",e.onBlur),_(u,"focus",e.onFocus),L(g=>{var v=e.classes.visuallyHidden,O=e.disabled,d=t(),y=e.name();return v!==g.e&&P(u,g.e=v),O!==g.t&&(u.disabled=g.t=O),d!==g.a&&D(u,"id",g.a=d),y!==g.o&&D(u,"name",g.o=y),g},{e:void 0,t:void 0,a:void 0,o:void 0}),L(()=>u.value=e.itemValue),L(()=>u.checked=A()),u})()]}})}a(ee,"RatingItem");const Qe=a(()=>i(ke,{fontSize:"inherit"}),"defaultIcon"),Ke=a(()=>i(De,{fontSize:"inherit"}),"defaultEmptyIcon");function Ze(e){return`${e} Star${e!==1?"s":""}`}a(Ze,"defaultLabelText");const m=j.defineComponent(a(function(n){const l=Me(n),r=j.useThemeProps({props:n}),[,A]=W(r,["classes","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"]),t=h({defaultValue:null,disabled:!1,emptyIcon:Ke,emptyLabelText:"Empty",getLabelText:Ze,highlightSelectedOnly:!1,icon:Qe,IconContainerComponent:qe,max:5,precision:1,readOnly:!1,size:"medium"},r),I=ie(()=>r.name),[u,g]=Ee({controlled:a(()=>r.value,"controlled"),default:a(()=>t.defaultValue,"default"),name:"Rating"}),v=z(()=>J(u(),t.precision)),O=ze(),[d,y]=C({get hover(){return-1},get focus(){return-1}}),[w,B]=C(v());Fe(()=>{d().hover!==-1?B(d().hover):B(v),d().focus!==-1?B(d().focus):B(v)});const{isFocusVisibleRef:q,onBlur:fe,onFocus:ve}=Le(),[pe,X]=C(!1),he=a(o=>{typeof r.onMouseMove=="function"&&r.onMouseMove(o);const s=l.current,{right:f,left:V}=s.getBoundingClientRect(),{width:p}=s.firstChild.getBoundingClientRect();let $;O.direction==="rtl"?$=(f-o.clientX)/(p*t.max):$=(o.clientX-V)/(p*t.max);let S=J(t.max*$+t.precision/2,t.precision);S=Xe(S,t.precision,t.max),y(R=>R.hover===S&&R.focus===S?R:{hover:S,focus:S}),X(!1),r.onChangeActive&&r.onChangeActive(o,S)},"handleMouseMove"),ye=a(o=>{typeof r.onMouseLeave=="function"&&r.onMouseLeave(o);const s=-1;y({hover:s,focus:s}),r.onChangeActive&&r.onChangeActive(o,s)},"handleMouseLeave"),Q=a(o=>{let s=o.target.value===""?null:parseFloat(o.target?.value);d().hover!==-1&&(s=d().hover),g(s),r.onChange&&r.onChange(o,s)},"handleChange"),be=a(o=>{o.clientX===0&&o.clientY===0||(y({hover:-1,focus:-1}),g(null),r.onChange&&parseFloat(o.target.value)===v()&&r.onChange(o,null))},"handleClear"),Se=a(o=>{ve(o),q.current&&X(!0);const s=parseFloat(o.target.value);y(f=>({hover:f.hover,focus:s}))},"handleFocus"),xe=a(o=>{if(d().hover!==-1)return;fe(o),q.current||X(!1);const s=-1;y(f=>({hover:f.hover,focus:s}))},"handleBlur"),[Ve,K]=C(!1),E=h(r,{get defaultValue(){return t.defaultValue},get disabled(){return t.disabled},get emptyIcon(){return t.emptyIcon},get emptyLabelText(){return t.emptyLabelText},get emptyValueFocused(){return Ve()},get focusVisible(){return pe()},get getLabelText(){return t.getLabelText},get icon(){return t.icon},get IconContainerComponent(){return t.IconContainerComponent},get max(){return t.max},get precision(){return t.precision},get readOnly(){return t.readOnly},get size(){return t.size}}),b=j.useClasses(E);return i(Je,h({ref:l,onMouseMove:he,onMouseLeave:ye,get class(){return k(b.root,r.classes)},ownerState:E,get role(){return t.readOnly?"img":void 0},get"aria-label"(){return F(()=>!!t.readOnly)()?t.getLabelText(w()):void 0}},A,{get children(){return[F(()=>Array.from(new Array(t.max)).map((o,s)=>{const f=s+1,V={classes:b,get disabled(){return t.disabled},get emptyIcon(){return t.emptyIcon},get focus(){return d().focus},get getLabelText(){return t.getLabelText},get highlightSelectedOnly(){return t.highlightSelectedOnly},get hover(){return d().hover},get icon(){return t.icon},get IconContainerComponent(){return t.IconContainerComponent},name:I,onBlur:xe,onChange:Q,onClick:be,onFocus:Se,ratingValue:w(),ratingValueRounded:v(),get readOnly(){return t.readOnly},ownerState:E},p=z(()=>f===Math.ceil(w())&&(d().hover!==-1||d().focus!==-1));if(t.precision<1){const $=Array.from(new Array(1/t.precision));return i(Ye,{get class(){return k(b.decimal,{[b.iconActive]:p()})},ownerState:E,get iconActive(){return p()},get children(){return $.map((S,R)=>{const Z=J(f-1+(R+1)*t.precision,t.precision);return i(ee,h(V,{isActive:!1,itemValue:Z,labelProps:{get style(){return $.length-1===R?{}:{width:Z===w()?`${(R+1)*t.precision*100}%`:"0%",overflow:"hidden",position:"absolute"}}}}))})}})}return i(ee,h(V,{get isActive(){return p()},itemValue:f}))})),F(()=>F(()=>!t.readOnly&&!t.disabled)()&&i(oe,{get class(){return k(b.label,b.labelEmptyValue)},ownerState:E,get children(){return[(()=>{var o=Ge();return o.addEventListener("change",Q),o.addEventListener("blur",()=>K(!1)),o.addEventListener("focus",()=>K(!0)),o.checked=v==null,L(s=>{var f=b.visuallyHidden,V=`${I()}-empty`,p=I();return f!==s.e&&P(o,s.e=f),V!==s.t&&D(o,"id",s.t=V),p!==s.a&&D(o,"name",s.a=p),s},{e:void 0,t:void 0,a:void 0}),o})(),(()=>{var o=G();return N(o,()=>t.emptyLabelText),L(()=>P(o,b.visuallyHidden)),o})()]}}))]}}))},"Rating2"));Te(["click"]);const en=T(m)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});function le(){return i(U,{sx:{"& > legend":{mt:2}},get children(){return[i(M,{component:"legend",children:"Custom icon and color"}),i(en,{name:"customized-color",defaultValue:2,getLabelText:a(e=>`${e} Heart${e!==1?"s":""}`,"getLabelText"),precision:.5,get icon(){return i(Oe,{fontSize:"inherit"})},get emptyIcon(){return i(we,{fontSize:"inherit"})}}),i(M,{component:"legend",children:"10 stars"}),i(m,{name:"customized-10",defaultValue:2,max:10})]}})}a(le,"CustomizedRatingExample");le.code=`import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@suid/icons-material";
import { Box, Rating, Typography } from "@suid/material";
import { styled } from "@suid/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function CustomizedRatingExample() {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) =>
          \`\${value} Heart\${value !== 1 ? "s" : ""}\`
        }
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>
  );
}
`;function re(){return i(ae,{spacing:1,get children(){return[i(m,{name:"half-rating",defaultValue:2.5,precision:.5}),i(m,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}})}a(re,"HalfRatingExample");re.code=`import { Rating, Stack } from "@suid/material";

export default function HalfRatingExample() {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
`;var ne=c('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),nn=c('<svg><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></svg>',!1,!0,!1);const tn=x(()=>[ne(),ne(),nn()],"Star"),se={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function an(e){return`${e} Star${e!==1?"s":""}, ${se[e]}`}a(an,"getLabelText");function ce(){const[e,n]=C(2),[l,r]=C(-1);return i(U,{sx:{width:200,display:"flex",alignItems:"center"},get children(){return[i(m,{name:"hover-feedback",get value(){return e()},precision:.5,getLabelText:an,onChange:a((A,t)=>{n(t)},"onChange"),onChangeActive:a((A,t)=>{r(t)},"onChangeActive"),get emptyIcon(){return i(tn,{style:{opacity:.55},fontSize:"inherit"})}}),F(()=>F(()=>e()!==null)()&&i(U,{sx:{ml:2},get children(){return se[l()!==-1?l():e()]}}))]}})}a(ce,"HoverRating");ce.code=`import StarIcon from "@suid/icons-material/Star";
import { Box, Rating } from "@suid/material";
import { createSignal } from "solid-js";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return \`\${value} Star\${value !== 1 ? "s" : ""}, \${labels[value]}\`;
}

export default function HoverRating() {
  const [value, setValue] = createSignal<number | null>(2);
  const [hover, setHover] = createSignal(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value()}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value() !== null && (
        <Box sx={{ ml: 2 }}>
          {labels[(hover() !== -1 ? hover() : value()) as number]}
        </Box>
      )}
    </Box>
  );
}
`;var on=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),ln=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),rn=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52z"></svg>',!1,!0,!1);const sn=x(()=>[on(),ln(),rn()],"SentimentDissatisfied");var cn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),un=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),dn=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15.86.55 1.87.87 2.97.87 1.11 0 2.12-.33 2.98-.88-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53z"></svg>',!1,!0,!1);const mn=x(()=>[cn(),un(),dn()],"SentimentSatisfied");var gn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),fn=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),vn=c('<svg><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></svg>',!1,!0,!1);const pn=x(()=>[gn(),fn(),vn()],"SentimentSatisfiedAltOutlined");var hn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),yn=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),bn=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></svg>',!1,!0,!1);const Sn=x(()=>[hn(),yn(),bn()],"SentimentVeryDissatisfied");var xn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),Vn=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),Rn=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"></svg>',!1,!0,!1);const Cn=x(()=>[xn(),Vn(),Rn()],"SentimentVerySatisfied");var In=c("<span>");const $n=T(m)(({theme:e})=>({"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:e.palette.action.disabled}})),ue={1:{icon:i(Sn,{color:"error"}),label:"Very Dissatisfied"},2:{icon:i(sn,{color:"error"}),label:"Dissatisfied"},3:{icon:i(mn,{color:"warning"}),label:"Neutral"},4:{icon:i(pn,{color:"success"}),label:"Satisfied"},5:{icon:i(Cn,{color:"success"}),label:"Very Satisfied"}};function zn(e){const[n,l]=W(e,["value"]);return(()=>{var r=In();return Y(r,l,!1,!0),N(r,()=>ue[n.value].icon),r})()}a(zn,"IconContainer");function de(){return i($n,{name:"highlight-selected-only",defaultValue:2,IconContainerComponent:zn,getLabelText:a(e=>ue[e].label,"getLabelText"),highlightSelectedOnly:!0})}a(de,"RadioGroupRatingExample");de.code=`import SentimentDissatisfiedIcon from "@suid/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@suid/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@suid/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedIcon from "@suid/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@suid/icons-material/SentimentVerySatisfied";
import Rating, { IconContainerProps } from "@suid/material/Rating";
import { styled } from "@suid/material/styles";
import { type JSX, splitProps } from "solid-js";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: JSX.Element;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const [local, other] = splitProps(props, ["value"]);
  return <span {...other}>{customIcons[local.value].icon}</span>;
}

export default function RadioGroupRatingExample() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
`;function me(){const[e,n]=C(2);return i(U,{sx:{"& > legend":{mt:2}},get children(){return[i(M,{component:"legend",children:"Controlled"}),i(m,{name:"simple-controlled",get value(){return e()},onChange:a((l,r)=>{n(r)},"onChange")}),i(M,{component:"legend",children:"Read only"}),i(m,{name:"read-only",get value(){return e()},readOnly:!0}),i(M,{component:"legend",children:"Disabled"}),i(m,{name:"disabled",get value(){return e()},disabled:!0}),i(M,{component:"legend",children:"No rating given"}),i(m,{name:"no-value",value:null})]}})}a(me,"SimpleRating");me.code=`import { Box, Rating, Typography } from "@suid/material";
import { createSignal } from "solid-js";

export default function SimpleRating() {
  const [value, setValue] = createSignal<number | null>(2);

  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value()}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value()} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value()} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
`;function ge(){return i(ae,{spacing:1,get children(){return[i(m,{name:"size-small",defaultValue:2,size:"small"}),i(m,{name:"size-medium",defaultValue:2}),i(m,{name:"size-large",defaultValue:2,size:"large"})]}})}a(ge,"RatingSizeExample");ge.code=`import { Rating, Stack } from "@suid/material";

export default function RatingSizeExample() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  );
}
`;function _n(){return i(He,{get name(){return m.name},docsName:"ratings",examples:[{title:"Basic rating",component:me},{title:"Rating precision",component:re},{title:"Hover feedback",component:ce},{title:"Sizes",component:ge},{title:"Customization",component:le},{title:"Radio Group",component:de}]})}a(_n,"RatingPage");export{_n as default};
