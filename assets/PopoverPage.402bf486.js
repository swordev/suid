var q=Object.defineProperty;var t=(r,o)=>q(r,"name",{value:o,configurable:!0});import{G as J}from"./Grow.f46a4e63.js";import{r as K,s as Q,v as Z,x as k,ay as nn,P as en,a4 as B,m as g,f as A,a5 as on,d as c,E as D,ai as rn,az as S,aA as tn,aB as $,a as _,a7 as P,t as j,h as an,T as E}from"./index.1753d436.js";import{C as sn}from"./ComponentInfo.feb72c29.js";import"./Link.b935328c.js";import"./copyText.a81e182c.js";import"./PaperCode.eaeee87a.js";function ln(r){return Q("MuiPopover",r)}t(ln,"getPopoverUtilityClass");K("MuiPopover",["root","paper"]);const T=Z()({name:"MuiPopover",selfPropNames:["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","container","elevation","marginThreshold","onClose","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],utilityClass:ln,slotClasses:()=>({root:["root"],paper:["paper"]})});function H(r,o){let n=0;return typeof o=="number"?n=o:o==="center"?n=r.height/2:o==="bottom"&&(n=r.height),n}t(H,"getOffsetTop");function L(r,o){let n=0;return typeof o=="number"?n=o:o==="center"?n=r.width/2:o==="right"&&(n=r.width),n}t(L,"getOffsetLeft");function W(r){return[r.horizontal,r.vertical].map(o=>typeof o=="number"?`${o}px`:o).join(" ")}t(W,"getTransformOriginValue");function v(r){return typeof r=="function"?r():r}t(v,"resolveAnchorEl");const pn=k(nn,{name:"MuiPopover",slot:"Root",overridesResolver:(r,o)=>o.root})({}),cn=k(en,{name:"MuiPopover",slot:"Paper",overridesResolver:(r,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),y=T.defineComponent(t(function(o){const n=T.useThemeProps({props:o}),[,u]=B(n,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","class","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),e=g({anchorOrigin:{vertical:"top",horizontal:"left"},anchorReference:"anchorEl",elevation:8,marginThreshold:16,PaperProps:{},transformOrigin:{vertical:"top",horizontal:"left"},TransitionComponent:J,transitionDuration:"auto"},n),[,l]=B(g(()=>n.TransitionProps||{}),["onEntering"]),h=rn(()=>e.PaperProps.ref),O=g(n,{get anchorOrigin(){return e.anchorOrigin},get anchorReference(){return e.anchorReference},get elevation(){return e.elevation},get marginThreshold(){return e.marginThreshold},get PaperProps(){return e.PaperProps},get transformOrigin(){return e.transformOrigin},get TransitionComponent(){return e.TransitionComponent},get transitionDuration(){return e.transitionDuration},TransitionProps:l}),C=T.useClasses(O),N=t(()=>{if(e.anchorReference==="anchorPosition")return n.anchorPosition;const i=v(n.anchorEl),s=(i&&i.nodeType===1?i:$(h.current).body).getBoundingClientRect();return{top:s.top+H(s,e.anchorOrigin.vertical),left:s.left+L(s,e.anchorOrigin.horizontal)}},"getAnchorOffset"),U=t(i=>({vertical:H(i,e.transformOrigin.vertical),horizontal:L(i,e.transformOrigin.horizontal)}),"getTransformOrigin"),G=t(i=>{const a={width:i.offsetWidth,height:i.offsetHeight},s=U(a);if(e.anchorReference==="none")return{top:null,left:null,transformOrigin:W(s)};const b=N();let f=b.top-s.vertical,d=b.left-s.horizontal;const w=f+a.height,x=d+a.width,R=S(v(n.anchorEl)),M=R.innerHeight-e.marginThreshold,z=R.innerWidth-e.marginThreshold;if(f<e.marginThreshold){const p=f-e.marginThreshold;f-=p,s.vertical+=p}else if(w>M){const p=w-M;f-=p,s.vertical+=p}if(d<e.marginThreshold){const p=d-e.marginThreshold;d-=p,s.horizontal+=p}else if(x>z){const p=x-z;d-=p,s.horizontal+=p}return{top:`${Math.round(f)}px`,left:`${Math.round(d)}px`,transformOrigin:W(s)}},"getPositioningStyle"),m=t(()=>{const i=h.current;if(!i)return;const a=G(i);a.top!==null&&(i.style.top=a.top),a.left!==null&&(i.style.left=a.left),i.style.transformOrigin=a.transformOrigin},"setPositioningStyles"),V=t(()=>{n.TransitionProps?.onEntering&&n.TransitionProps?.onEntering(),m()},"handleEntering");A(()=>{n.open&&m()}),typeof n.action=="function"&&n.action({updatePosition:()=>{n.open&&m()}}),A(on(()=>[n.anchorEl,n.open,m],()=>{if(!n.open)return;const i=tn(()=>{m()}),a=S(v(n.anchorEl));return a.addEventListener("resize",i),()=>{i.clear(),a.removeEventListener("resize",i)}}));const X=t(()=>{let i=n.transitionDuration;return n.transitionDuration==="auto"&&!n.TransitionComponent.muiSupportAuto&&(i=void 0),i},"transitionDuration"),Y=t(()=>n.container||(n.anchorEl?$(v(n.anchorEl)).body:void 0),"container");return c(pn,g({BackdropProps:{invisible:!0},get class(){return D(C.root,n.class)},get container(){return Y()},get open(){return n.open},ownerState:O},u,{get children(){return c(e.TransitionComponent,g({appear:!0,get in(){return n.open},onEntering:V,get timeout(){return X()}},l,{get children(){return c(cn,g({get elevation(){return e.elevation}},()=>e.PaperProps,{ref:h,get class(){return D(C.paper,e.PaperProps.class)},get children(){return n.children}}))}}))}}))},"Popover")),hn=j("<div></div>");function F(){const[r,o]=_(null),n=t(h=>{o(h.currentTarget)},"handleClick"),u=t(()=>{o(null)},"handleClose"),e=t(()=>Boolean(r()),"open"),l=t(()=>e()?"simple-popover":void 0,"id");return(()=>{const h=hn.cloneNode(!0);return P(h,c(an,{get["aria-describedby"](){return l()},variant:"contained",onClick:n,children:"Open Popover"}),null),P(h,c(y,{get id(){return l()},get open(){return e()},get anchorEl(){return r()},onClose:u,anchorOrigin:{vertical:"bottom",horizontal:"left"},get children(){return c(E,{sx:{p:2},children:"The content of the Popover."})}}),null),h})()}t(F,"BasicPopover");F.code=`import Button from "@suid/material/Button";
import Popover from "@suid/material/Popover";
import Typography from "@suid/material/Typography";
import { createSignal } from "solid-js";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);

  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement }
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = () => Boolean(anchorEl());
  const id = () => (open() ? "simple-popover" : undefined);

  return (
    <div>
      <Button aria-describedby={id()} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id()}
        open={open()}
        anchorEl={anchorEl()}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
`;const un=j("<div></div>");function I(){const[r,o]=_(null),n=t(l=>{o(l.currentTarget)},"handlePopoverOpen"),u=t(()=>{o(null)},"handlePopoverClose"),e=t(()=>Boolean(r()),"open");return(()=>{const l=un.cloneNode(!0);return P(l,c(E,{get["aria-owns"](){return e()?"mouse-over-popover":void 0},"aria-haspopup":"true",onMouseEnter:n,onMouseLeave:u,children:"Hover with a Popover."}),null),P(l,c(y,{id:"mouse-over-popover",sx:{pointerEvents:"none"},get open(){return e()},get anchorEl(){return r()},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:u,disableRestoreFocus:!0,get children(){return c(E,{sx:{p:1},children:"I use Popover."})}}),null),l})()}t(I,"MouseOverPopover");I.code=`import Popover from "@suid/material/Popover";
import Typography from "@suid/material/Typography";
import { createSignal } from "solid-js";

export default function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = createSignal<Element | null>(null);

  const handlePopoverOpen = (event: { currentTarget: Element }) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = () => Boolean(anchorEl());

  return (
    <div>
      <Typography
        aria-owns={open() ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open()}
        anchorEl={anchorEl()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>
  );
}
`;function En(){return c(sn,{get name(){return y.name},examples:[F,I]})}t(En,"PopoverPage");export{En as default};
