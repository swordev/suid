var N=Object.defineProperty;var n=(e,o)=>N(e,"name",{value:o,configurable:!0});import{Q as u,O as p,f as g,h as t,m as c,U as C,V as f,N as I,k as l,l as d,t as s,A as R,B as h,c as x,b as z,aq as D,u as P,I as v}from"./index-Chiq91vg.js";import{C as _}from"./ComponentInfo-BMdmwTSx.js";import"./Link-Dbh_WtTh.js";import"./copyText-BVJZZxRr.js";import"./PaperCode-9D997B7Z.js";function L(e){return u("MuiCard",e)}n(L,"getCardUtilityClass");p("MuiCard",["root"]);const O=g()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:L,propDefaults:n(({set:e})=>e({component:I,raised:!1}),"propDefaults"),slotClasses:n(()=>({root:["root"]}),"slotClasses")}),U=f(I,{name:"MuiCard",slot:"Root",overridesResolver:n((e,o)=>o.root,"overridesResolver")})(()=>({overflow:"hidden"})),M=O.component(n(function({props:o,otherProps:a,classes:r}){return t(U,c({get elevation(){return o.raised?8:void 0},get class(){return C(r.root,a.class)}},a))},"Card2"));function j(e){return u("MuiCardActions",e)}n(j,"getCardActionsUtilityClass");p("MuiCardActions",["root","spacing"]);const H=g()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:n(({set:e})=>e({disableSpacing:!1}),"propDefaults"),utilityClass:j,slotClasses:n(e=>({root:["root",!e.disableSpacing&&"spacing"]}),"slotClasses")}),E=f("div",{name:"MuiCardActions",slot:"Root",overridesResolver:n((e,o)=>{const{ownerState:a}=e;return[o.root,!a.disableSpacing&&o.spacing]},"overridesResolver")})(({ownerState:e})=>({display:"flex",alignItems:"center",padding:8,...!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),F=H.component(n(function({allProps:o,classes:a,otherProps:r,props:i}){return t(E,c(r,{get class(){return C(a.root,r.class)},ownerState:o,get children(){return i.children}}))},"CardActions2"));function W(e){return u("MuiCardContent",e)}n(W,"getCardContentUtilityClass");p("MuiCardContent",["root"]);const V=g()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:n(({set:e})=>e({component:"div"}),"propDefaults"),utilityClass:W,slotClasses:n(()=>({root:["root"]}),"slotClasses")}),q=f("div",{name:"MuiCardContent",slot:"Root",overridesResolver:n((e,o)=>o.root,"overridesResolver")})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),S=V.component(n(function({allProps:o,classes:a,otherProps:r,props:i}){return t(q,c(r,{ownerState:o,get class(){return C(a.root,r.class)},get children(){return i.children}}))},"CardContent2"));var G=s("<br>");function y(){return t(h,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"})}n(y,"Bull");function k(){return t(M,{sx:{minWidth:275},get children(){return[t(S,{get children(){return[t(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),t(l,{variant:"h5",component:"div",get children(){return["be",d(()=>t(y,{})),"nev",d(()=>t(y,{})),"o",d(()=>t(y,{})),"lent"]}}),t(l,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),t(l,{variant:"body2",get children(){return["well meaning and kindly.",G(),'"a benevolent smile"']}})]}}),t(F,{get children(){return t(R,{size:"small",children:"Learn More"})}})]}})}n(k,"BasicCard");k.code=`import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@suid/material";

function Bull() {
  return (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
}

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{<Bull />}nev{<Bull />}o{<Bull />}lent
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
`;var Q=s('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),J=s('<svg><path d="M8 5v14l11-7z"></svg>',!1,!0,!1);const K=x(()=>[Q(),J()],"PlayArrow");var X=s('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),Y=s('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></svg>',!1,!0,!1);const b=x(()=>[X(),Y()],"SkipNext");var Z=s('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0,!1),ee=s('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></svg>',!1,!0,!1);const B=x(()=>[Z(),ee()],"SkipPrevious");function te(e){return u("MuiCardMedia",e)}n(te,"getCardMediaUtilityClass");p("MuiCardMedia",["root","media","img"]);const ne=g()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:te,propDefaults:n(({set:e})=>e({component:"div"}),"propDefaults"),slotClasses:n(e=>({root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]}),"slotClasses")}),oe=f("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:n((e,o)=>{const{ownerState:a}=e,{isMediaComponent:r,isImageComponent:i}=a;return[o.root,r&&o.media,i&&o.img]},"overridesResolver")})(({ownerState:e})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...e.isMediaComponent&&{width:"100%"},...e.isImageComponent&&{objectFit:"cover"}})),re=["video","audio","picture","iframe","img"],ae=["picture","img"],ie=ne.component(n(function({allProps:o,classes:a,otherProps:r,props:i}){const m=z(()=>re.indexOf(r.component)!==-1),T=n(()=>!m()&&i.image?c({get"background-image"(){return`url("${i.image}")`}},typeof r.style=="object"&&r.style?r.style:{}):r.style,"style"),$=c(o,{get isMediaComponent(){return m()},get isImageComponent(){return ae.indexOf(r.component)!==-1}}),w=D(oe,"div","img");return t(w,c({get role(){return!m()&&i.image?"img":void 0}},r,{get as(){return r.component||r.as},get class(){return C(a.root,r.class)},get style(){return T()},ownerState:$,get src(){return m()?i.image||i.src:void 0},get children(){return i.children}}))},"CardMedia2"));function A(){const e=P();return t(M,{sx:{display:"flex"},get children(){return[t(h,{sx:{display:"flex",flexDirection:"column"},get children(){return[t(S,{sx:{flex:"1 0 auto"},get children(){return[t(l,{component:"div",variant:"h5",children:"Live From Space"}),t(l,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),t(h,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[t(v,{"aria-label":"previous",get children(){return d(()=>e.direction==="rtl")()?t(b,{}):t(B,{})}}),t(v,{"aria-label":"play/pause",get children(){return t(K,{sx:{height:38,width:38}})}}),t(v,{"aria-label":"next",get children(){return d(()=>e.direction==="rtl")()?t(B,{}):t(b,{})}})]}})]}}),t(ie,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}n(A,"MediaControlCard");A.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
import SkipNextIcon from "@suid/icons-material/SkipNext";
import SkipPreviousIcon from "@suid/icons-material/SkipPrevious";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@suid/material";
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
`;function pe(){return t(_,{get name(){return M.name},docsName:"cards",importInfo:["Card","CardActionArea","CardActions","CardContent","CardHeader","CardMedia"],examples:[{component:k,bgcolor:"contrasted"},{component:A,bgcolor:"contrasted"}]})}n(pe,"CardPage");export{pe as default};
