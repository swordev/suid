var Ve=Object.defineProperty;var a=(e,n)=>Ve(e,"name",{value:n,configurable:!0});import{c as V,t as c,N as Re,O as Ce,f as Ie,Q as q,m as y,h as i,b as v,u as $e,a as I,d as ze,X as Fe,a6 as Le,R as _,U as M,V as ne,b6 as J,au as Me,aq as F,aZ as k,b7 as P,E as D,b8 as B,S as Te,k as L,B as N}from"./index-NCmNIr1K.js";import{u as Ee}from"./useControlled-Blc4Q9QM.js";import{c as te}from"./createUniqueId--pU5VRPf.js";import{C as Ae}from"./ComponentInfo-C3huals-.js";import{F as He}from"./Favorite-DKAoaNkq.js";import{F as Oe}from"./FavoriteBorder-BK-196Mm.js";import{S as ie}from"./copyText-C_G9kHbS.js";import"./Link-Ci3uEOYa.js";import"./PaperCode-BKLbHUJT.js";const we={position:"absolute",width:"1px",height:"1px",margin:"-1px",padding:0,border:0,clip:"rect(0 0 0 0)",overflow:"hidden","white-space":"nowrap"};var Be=c('<svg><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></svg>',!1,!0,!1);const _e=V(()=>Be(),"Star");var ke=c('<svg><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></svg>',!1,!0,!1);const Pe=V(()=>ke(),"StarBorder");function De(e){return Ce("MuiRating",e)}a(De,"getRatingUtilityClass");const A=Re("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);var U=c("<span>"),Ne=c("<input type=radio>"),Ue=c("<input value type=radio>");const X=Ie()({name:"MuiRating",selfPropNames:["classes","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","precision","readOnly","size","value"],utilityClass:De,slotClasses:a(e=>({root:["root",`size${ne(e.size)}`,e.disabled&&"disabled",e.focusVisible&&"focusVisible",e.readOnly&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[e.emptyValueFocused&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]}),"slotClasses")});function Ge(e,n,l){return e<n?n:e>l?l:e}a(Ge,"clamp");function Xe(e){const n=e.toString().split(".")[1];return n?n.length:0}a(Xe,"getDecimalPrecision");function j(e,n){if(e==null)return e;const l=Math.round(e/n)*n;return Number(l.toFixed(Xe(n)))}a(j,"roundValueToPrecision");const je=M("span",{name:"MuiRating",slot:"Root",overridesResolver:a((e,n)=>{const{ownerState:l}=e;return[{[`& .${A.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${ne(l.size)}`],l.readOnly&&n.readOnly]},"overridesResolver")})(({theme:e,ownerState:n})=>({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${A.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`&.${A.focusVisible} .${A.iconActive}`]:{outline:"1px solid #999"},[`& .${A.visuallyHidden}`]:we,...n.size==="small"&&{fontSize:e.typography.pxToRem(18)},...n.size==="large"&&{fontSize:e.typography.pxToRem(30)},...n.readOnly&&{pointerEvents:"none"}})),ae=M("label",{name:"MuiRating",slot:"Label",overridesResolver:a((e,n)=>n.label,"overridesResolver")})(({ownerState:e})=>({cursor:"inherit",...e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}})),qe=M("span",{name:"MuiRating",slot:"Icon",overridesResolver:a((e,n)=>{const{ownerState:l}=e;return[n.icon,l.iconEmpty&&n.iconEmpty,l.iconFilled&&n.iconFilled,l.iconHover&&n.iconHover,l.iconFocus&&n.iconFocus,l.iconActive&&n.iconActive]},"overridesResolver")})(({theme:e,ownerState:n})=>({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none",...n.iconActive&&{transform:"scale(1.2)"},...n.iconEmpty&&{color:e.palette.action.disabled}})),Je=M("span",{name:"MuiRating",slot:"Decimal",overridesResolver:a((e,n)=>{const{iconActive:l}=e;return[n.decimal,l&&n.iconActive]},"overridesResolver")})(({ownerState:e})=>({position:"relative",...e.iconActive&&{transform:"scale(1.2)"}}));function Qe(e){const[,n]=q(e,["value"]);return(()=>{var l=U();return J(l,n,!1,!1),l})()}a(Qe,"IconContainer$1");function K(e){const n=v(()=>e.highlightSelectedOnly?e.itemValue===e.ratingValue:e.itemValue<=e.ratingValue),l=v(()=>e.itemValue<=e.hover),r=v(()=>e.itemValue<=e.focus),T=v(()=>e.itemValue===e.ratingValueRounded),t=te(),$=i(qe,{get as(){return e.IconContainerComponent},get value(){return e.itemValue},get class(){return _(e.classes.icon,{get[e.classes.iconEmpty](){return!n()},[e.classes.iconFilled]:n(),[e.classes.iconHover]:l(),[e.classes.iconFocus]:r(),get[e.classes.iconActive](){return e.isActive}})},get ownerState(){return y(()=>e.ownerState,{get iconEmpty(){return!n()},iconFilled:n(),iconHover:l(),iconFocus:r(),get iconActive(){return e.isActive}})},get children(){return e.emptyIcon&&!n()?e.emptyIcon:e.icon}});return i(Te,{get when(){return!e.readOnly},get fallback(){return(()=>{var u=U();return J(u,y(()=>e.labelProps),!1,!0),D(u,$),u})()},get children(){return[i(ae,y({get ownerState(){return y(()=>e.ownerState,{emptyValueFocused:void 0})},get for(){return t()}},()=>e.labelProps,{get children(){return[$,(()=>{var u=U();return D(u,()=>e.getLabelText(e.itemValue)),F(()=>k(u,e.classes.visuallyHidden)),u})()]}})),(()=>{var u=Ne();return B(u,"click",e.onClick,!0),B(u,"change",e.onChange),B(u,"blur",e.onBlur),B(u,"focus",e.onFocus),F(g=>{var p=e.classes.visuallyHidden,H=e.disabled,d=t(),b=e.name();return p!==g.e&&k(u,g.e=p),H!==g.t&&(u.disabled=g.t=H),d!==g.a&&P(u,"id",g.a=d),b!==g.o&&P(u,"name",g.o=b),g},{e:void 0,t:void 0,a:void 0,o:void 0}),F(()=>u.value=e.itemValue),F(()=>u.checked=T()),u})()]}})}a(K,"RatingItem");const We=a(()=>i(_e,{fontSize:"inherit"}),"defaultIcon"),Ye=a(()=>i(Pe,{fontSize:"inherit"}),"defaultEmptyIcon");function Ze(e){return`${e} Star${e!==1?"s":""}`}a(Ze,"defaultLabelText");const m=X.defineComponent(a(function(n){const l=Le(n),r=X.useThemeProps({props:n}),[,T]=q(r,["classes","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"]),t=y({defaultValue:null,disabled:!1,emptyIcon:Ye,emptyLabelText:"Empty",getLabelText:Ze,highlightSelectedOnly:!1,icon:We,IconContainerComponent:Qe,max:5,precision:1,readOnly:!1,size:"medium"},r),$=te(()=>r.name),[u,g]=Ee({controlled:a(()=>r.value,"controlled"),default:a(()=>t.defaultValue,"default"),name:"Rating"}),p=v(()=>j(u(),t.precision)),H=$e(),[d,b]=I({get hover(){return-1},get focus(){return-1}}),[O,w]=I(p());ze(()=>{d().hover!==-1?w(d().hover):w(p),d().focus!==-1?w(d().focus):w(p)});const{isFocusVisibleRef:Q,onBlur:ge,onFocus:fe}=Fe(),[ve,G]=I(!1),pe=a(o=>{typeof r.onMouseMove=="function"&&r.onMouseMove(o);const s=l.current,{right:f,left:R}=s.getBoundingClientRect(),{width:h}=s.firstChild.getBoundingClientRect();let z;H.direction==="rtl"?z=(f-o.clientX)/(h*t.max):z=(o.clientX-R)/(h*t.max);let x=j(t.max*z+t.precision/2,t.precision);x=Ge(x,t.precision,t.max),b(C=>C.hover===x&&C.focus===x?C:{hover:x,focus:x}),G(!1),r.onChangeActive&&r.onChangeActive(o,x)},"handleMouseMove"),he=a(o=>{typeof r.onMouseLeave=="function"&&r.onMouseLeave(o);const s=-1;b({hover:s,focus:s}),r.onChangeActive&&r.onChangeActive(o,s)},"handleMouseLeave"),W=a(o=>{let s=o.target.value===""?null:parseFloat(o.target?.value);d().hover!==-1&&(s=d().hover),g(s),r.onChange&&r.onChange(o,s)},"handleChange"),ye=a(o=>{o.clientX===0&&o.clientY===0||(b({hover:-1,focus:-1}),g(null),r.onChange&&parseFloat(o.target.value)===p()&&r.onChange(o,null))},"handleClear"),be=a(o=>{fe(o),Q.current&&G(!0);const s=parseFloat(o.target.value);b(f=>({hover:f.hover,focus:s}))},"handleFocus"),Se=a(o=>{if(d().hover!==-1)return;ge(o),Q.current||G(!1);const s=-1;b(f=>({hover:f.hover,focus:s}))},"handleBlur"),[xe,Y]=I(!1),E=y(r,{get defaultValue(){return t.defaultValue},get disabled(){return t.disabled},get emptyIcon(){return t.emptyIcon},get emptyLabelText(){return t.emptyLabelText},get emptyValueFocused(){return xe()},get focusVisible(){return ve()},get getLabelText(){return t.getLabelText},get icon(){return t.icon},get IconContainerComponent(){return t.IconContainerComponent},get max(){return t.max},get precision(){return t.precision},get readOnly(){return t.readOnly},get size(){return t.size}}),S=X.useClasses(E);return i(je,y({ref:l,onMouseMove:pe,onMouseLeave:he,get class(){return _(S.root,r.classes)},ownerState:E,get role(){return t.readOnly?"img":void 0},get"aria-label"(){return v(()=>!!t.readOnly)()?t.getLabelText(O()):void 0}},T,{get children(){return[v(()=>Array.from(new Array(t.max)).map((o,s)=>{const f=s+1,R={classes:S,get disabled(){return t.disabled},get emptyIcon(){return t.emptyIcon},get focus(){return d().focus},get getLabelText(){return t.getLabelText},get highlightSelectedOnly(){return t.highlightSelectedOnly},get hover(){return d().hover},get icon(){return t.icon},get IconContainerComponent(){return t.IconContainerComponent},name:$,onBlur:Se,onChange:W,onClick:ye,onFocus:be,ratingValue:O(),ratingValueRounded:p(),get readOnly(){return t.readOnly},ownerState:E},h=v(()=>f===Math.ceil(O())&&(d().hover!==-1||d().focus!==-1));if(t.precision<1){const z=Array.from(new Array(1/t.precision));return i(Je,{get class(){return _(S.decimal,{[S.iconActive]:h()})},ownerState:E,get iconActive(){return h()},get children(){return z.map((x,C)=>{const Z=j(f-1+(C+1)*t.precision,t.precision);return i(K,y(R,{isActive:!1,itemValue:Z,labelProps:{get style(){return z.length-1===C?{}:{width:Z===O()?`${(C+1)*t.precision*100}%`:"0%",overflow:"hidden",position:"absolute"}}}}))})}})}return i(K,y(R,{get isActive(){return h()},itemValue:f}))})),v(()=>v(()=>!t.readOnly&&!t.disabled)()&&i(ae,{get class(){return _(S.label,S.labelEmptyValue)},ownerState:E,get children(){return[(()=>{var o=Ue();return o.addEventListener("change",W),o.addEventListener("blur",()=>Y(!1)),o.addEventListener("focus",()=>Y(!0)),o.checked=p==null,F(s=>{var f=S.visuallyHidden,R=`${$()}-empty`,h=$();return f!==s.e&&k(o,s.e=f),R!==s.t&&P(o,"id",s.t=R),h!==s.a&&P(o,"name",s.a=h),s},{e:void 0,t:void 0,a:void 0}),o})(),(()=>{var o=U();return D(o,()=>t.emptyLabelText),F(()=>k(o,S.visuallyHidden)),o})()]}}))]}}))},"Rating2"));Me(["click"]);const Ke=M(m)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});function oe(){return i(N,{sx:{"& > legend":{mt:2}},get children(){return[i(L,{component:"legend",children:"Custom icon and color"}),i(Ke,{name:"customized-color",defaultValue:2,getLabelText:a(e=>`${e} Heart${e!==1?"s":""}`,"getLabelText"),precision:.5,get icon(){return i(He,{fontSize:"inherit"})},get emptyIcon(){return i(Oe,{fontSize:"inherit"})}}),i(L,{component:"legend",children:"10 stars"}),i(m,{name:"customized-10",defaultValue:2,max:10})]}})}a(oe,"CustomizedRatingExample");oe.code=`import {
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
`;function le(){return i(ie,{spacing:1,get children(){return[i(m,{name:"half-rating",defaultValue:2.5,precision:.5}),i(m,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}})}a(le,"HalfRatingExample");le.code=`import { Rating, Stack } from "@suid/material";

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
`;var ee=c('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),en=c('<svg><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></svg>',!1,!0,!1);const nn=V(()=>[ee(),ee(),en()],"Star"),re={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function tn(e){return`${e} Star${e!==1?"s":""}, ${re[e]}`}a(tn,"getLabelText");function se(){const[e,n]=I(2),[l,r]=I(-1);return i(N,{sx:{width:200,display:"flex",alignItems:"center"},get children(){return[i(m,{name:"hover-feedback",get value(){return e()},precision:.5,getLabelText:tn,onChange:a((T,t)=>{n(t)},"onChange"),onChangeActive:a((T,t)=>{r(t)},"onChangeActive"),get emptyIcon(){return i(nn,{style:{opacity:.55},fontSize:"inherit"})}}),v(()=>v(()=>e()!==null)()&&i(N,{sx:{ml:2},get children(){return re[l()!==-1?l():e()]}}))]}})}a(se,"HoverRating");se.code=`import StarIcon from "@suid/icons-material/Star";
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
`;var an=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),on=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),ln=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52z"></svg>',!1,!0,!1);const rn=V(()=>[an(),on(),ln()],"SentimentDissatisfied");var sn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),cn=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),un=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15.86.55 1.87.87 2.97.87 1.11 0 2.12-.33 2.98-.88-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53z"></svg>',!1,!0,!1);const dn=V(()=>[sn(),cn(),un()],"SentimentSatisfied");var mn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),gn=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),fn=c('<svg><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></svg>',!1,!0,!1);const vn=V(()=>[mn(),gn(),fn()],"SentimentSatisfiedAltOutlined");var pn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),hn=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),yn=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></svg>',!1,!0,!1);const bn=V(()=>[pn(),hn(),yn()],"SentimentVeryDissatisfied");var Sn=c("<svg><circle cx=15.5 cy=9.5 r=1.5></svg>",!1,!0,!1),xn=c("<svg><circle cx=8.5 cy=9.5 r=1.5></svg>",!1,!0,!1),Vn=c('<svg><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"></svg>',!1,!0,!1);const Rn=V(()=>[Sn(),xn(),Vn()],"SentimentVerySatisfied");var Cn=c("<span>");const In=M(m)(({theme:e})=>({"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:e.palette.action.disabled}})),ce={1:{icon:i(bn,{color:"error"}),label:"Very Dissatisfied"},2:{icon:i(rn,{color:"error"}),label:"Dissatisfied"},3:{icon:i(dn,{color:"warning"}),label:"Neutral"},4:{icon:i(vn,{color:"success"}),label:"Satisfied"},5:{icon:i(Rn,{color:"success"}),label:"Very Satisfied"}};function $n(e){const[n,l]=q(e,["value"]);return(()=>{var r=Cn();return J(r,l,!1,!0),D(r,()=>ce[n.value].icon),r})()}a($n,"IconContainer");function ue(){return i(In,{name:"highlight-selected-only",defaultValue:2,IconContainerComponent:$n,getLabelText:a(e=>ce[e].label,"getLabelText"),highlightSelectedOnly:!0})}a(ue,"RadioGroupRatingExample");ue.code=`import SentimentDissatisfiedIcon from "@suid/icons-material/SentimentDissatisfied";
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
`;function de(){const[e,n]=I(2);return i(N,{sx:{"& > legend":{mt:2}},get children(){return[i(L,{component:"legend",children:"Controlled"}),i(m,{name:"simple-controlled",get value(){return e()},onChange:a((l,r)=>{n(r)},"onChange")}),i(L,{component:"legend",children:"Read only"}),i(m,{name:"read-only",get value(){return e()},readOnly:!0}),i(L,{component:"legend",children:"Disabled"}),i(m,{name:"disabled",get value(){return e()},disabled:!0}),i(L,{component:"legend",children:"No rating given"}),i(m,{name:"no-value",value:null})]}})}a(de,"SimpleRating");de.code=`import { Box, Rating, Typography } from "@suid/material";
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
`;function me(){return i(ie,{spacing:1,get children(){return[i(m,{name:"size-small",defaultValue:2,size:"small"}),i(m,{name:"size-medium",defaultValue:2}),i(m,{name:"size-large",defaultValue:2,size:"large"})]}})}a(me,"RatingSizeExample");me.code=`import { Rating, Stack } from "@suid/material";

export default function RatingSizeExample() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  );
}
`;function Bn(){return i(Ae,{get name(){return m.name},docsName:"ratings",examples:[{title:"Basic rating",component:de},{title:"Rating precision",component:le},{title:"Hover feedback",component:se},{title:"Sizes",component:me},{title:"Customization",component:oe},{title:"Radio Group",component:ue}]})}a(Bn,"RatingPage");export{Bn as default};
