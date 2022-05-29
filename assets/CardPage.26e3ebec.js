var w=Object.defineProperty;var i=(e,t)=>w(e,"name",{value:t,configurable:!0});import{q as m,r as p,s as u,P as N,w as g,d as n,m as d,A as C,B as v,T as l,h as P,t as s,c as y,N as M,u as z,X as h,n as b}from"./index.5507cd87.js";import{C as R}from"./ComponentInfo.c4cb0078.js";import"./Link.e6c05132.js";import"./copyText.9a56fddc.js";import"./PaperCode.e17e2a77.js";function D(e){return p("MuiCard",e)}i(D,"getCardUtilityClass");m("MuiCard",["root"]);const _=u()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:D,propDefaults:({set:e})=>e({component:N,raised:!1}),slotClasses:()=>({root:["root"]})}),L=g(N,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=_.component(i(function({props:t,otherProps:r,classes:o}){return n(L,d({get elevation(){return t.raised?8:void 0},get className(){return C(o.root,r.className)}},r))},"Card"));function O(e){return p("MuiCardActions",e)}i(O,"getCardActionsUtilityClass");m("MuiCardActions",["root","spacing"]);const U=u()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:e})=>e({disableSpacing:!1}),utilityClass:O,slotClasses:e=>({root:["root",!e.disableSpacing&&"spacing"]})}),j=g("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>({display:"flex",alignItems:"center",padding:8,...!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),E=U.component(i(function({allProps:t,classes:r,otherProps:o,props:a}){return n(j,d(o,{get className(){return C(r.root,o.className)},ownerState:t,get children(){return a.children}}))},"CardActions"));function F(e){return p("MuiCardContent",e)}i(F,"getCardContentUtilityClass");m("MuiCardContent",["root"]);const H=u()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:e})=>e({component:"div"}),utilityClass:F,slotClasses:()=>({root:["root"]})}),W=g("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),S=H.component(i(function({allProps:t,classes:r,otherProps:o,props:a}){return n(W,d(o,{ownerState:t,get className(){return C(r.root,o.className)},get children(){return a.children}}))},"CardContent")),V=s("<br>"),f=n(v,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"});function T(){return n(x,{sx:{minWidth:275},get children(){return[n(S,{get children(){return[n(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),n(l,{variant:"h5",component:"div",get children(){return["be",f,"nev",f,"o",f,"lent"]}}),n(l,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),n(l,{variant:"body2",get children(){return["well meaning and kindly.",V.cloneNode(!0),'"a benevolent smile"']}})]}}),n(E,{get children(){return n(P,{size:"small",children:"Learn More"})}})]}})}i(T,"BasicCard");T.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import Typography from "@suid/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    \u2022
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
`;const q=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),G=s('<svg><path d="M8 5v14l11-7z"></path></svg>',4,!0);var X=y(()=>[q.cloneNode(!0),G.cloneNode(!0)],"PlayArrow");const J=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),K=s('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>',4,!0);var I=y(()=>[J.cloneNode(!0),K.cloneNode(!0)],"SkipNext");const Q=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Y=s('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>',4,!0);var B=y(()=>[Q.cloneNode(!0),Y.cloneNode(!0)],"SkipPrevious");function Z(e){return p("MuiCardMedia",e)}i(Z,"getCardMediaUtilityClass");m("MuiCardMedia",["root","media","img"]);const ee=u()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:Z,propDefaults:({set:e})=>e({component:"div"}),slotClasses:e=>({root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]})}),ne=g("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:o,isImageComponent:a}=r;return[t.root,o&&t.media,a&&t.img]}})(({ownerState:e})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...e.isMediaComponent&&{width:"100%"},...e.isImageComponent&&{objectFit:"cover"}})),te=["video","audio","picture","iframe","img"],oe=["picture","img"],re=ee.component(i(function({allProps:t,classes:r,otherProps:o,props:a}){const c=M(()=>te.indexOf(o.component)!==-1),A=M(()=>!c()&&a.image?{backgroundImage:`url("${a.image}")`}:{}),$=d(t,{get isMediaComponent(){return c()},get isImageComponent(){return oe.indexOf(o.component)!==-1}});return n(ne,d({get role(){return!c()&&a.image?"img":void 0}},o,{get className(){return C(r.root,o.className)},get style(){return[A(),o.sx]},ownerState:$,get src(){return c()?a.image||a.src:void 0},get children(){return a.children}}))},"CardMedia"));function k(){const e=z();return n(x,{sx:{display:"flex"},get children(){return[n(v,{sx:{display:"flex",flexDirection:"column"},get children(){return[n(S,{sx:{flex:"1 0 auto"},get children(){return[n(l,{component:"div",variant:"h5",children:"Live From Space"}),n(l,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),n(v,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[n(h,{"aria-label":"previous",get children(){return b(()=>e.direction==="rtl",!0)()?n(I,{}):n(B,{})}}),n(h,{"aria-label":"play/pause",get children(){return n(X,{sx:{height:38,width:38}})}}),n(h,{"aria-label":"next",get children(){return b(()=>e.direction==="rtl",!0)()?n(B,{}):n(I,{})}})]}})]}}),n(re,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}i(k,"MediaControlCard");k.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
import SkipNextIcon from "@suid/icons-material/SkipNext";
import SkipPreviousIcon from "@suid/icons-material/SkipPrevious";
import Box from "@suid/material/Box";
import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import CardMedia from "@suid/material/CardMedia";
import IconButton from "@suid/material/IconButton";
import Typography from "@suid/material/Typography";
import useTheme from "@suid/material/styles/useTheme";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
`;function me(){return n(R,{get name(){return x.name},docsName:"cards",examples:[{component:T,bgcolor:"contrasted"},{component:k,bgcolor:"contrasted"}]})}i(me,"CardPage");export{me as default};
