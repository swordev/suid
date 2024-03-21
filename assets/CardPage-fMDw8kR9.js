var N=Object.defineProperty;var r=(e,n)=>N(e,"name",{value:n,configurable:!0});import{N as p,O as u,f as g,L as I,R as C,h as t,m as c,W as v,k as l,b as d,z as R,t as s,B as h,c as x,ap as z,u as D,I as f}from"./index-Bt0ZpNRx.js";import{C as L}from"./ComponentInfo-BURixQX9.js";import"./Link-DXJYc0rG.js";import"./copyText-B1tfYcM2.js";import"./PaperCode-D_-fhO8M.js";function P(e){return u("MuiCard",e)}r(P,"getCardUtilityClass");p("MuiCard",["root"]);const _=g()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:P,propDefaults:({set:e})=>e({component:I,raised:!1}),slotClasses:()=>({root:["root"]})}),O=C(I,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})(()=>({overflow:"hidden"})),M=_.component(r(function({props:n,otherProps:a,classes:o}){return t(O,c({get elevation(){return n.raised?8:void 0},get class(){return v(o.root,a.class)}},a))},"Card2"));function j(e){return u("MuiCardActions",e)}r(j,"getCardActionsUtilityClass");p("MuiCardActions",["root","spacing"]);const U=g()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:e})=>e({disableSpacing:!1}),utilityClass:j,slotClasses:e=>({root:["root",!e.disableSpacing&&"spacing"]})}),H=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,!a.disableSpacing&&n.spacing]}})(({ownerState:e})=>({display:"flex",alignItems:"center",padding:8,...!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),W=U.component(r(function({allProps:n,classes:a,otherProps:o,props:i}){return t(H,c(o,{get class(){return v(a.root,o.class)},ownerState:n,get children(){return i.children}}))},"CardActions2"));function E(e){return u("MuiCardContent",e)}r(E,"getCardContentUtilityClass");p("MuiCardContent",["root"]);const F=g()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:e})=>e({component:"div"}),utilityClass:E,slotClasses:()=>({root:["root"]})}),V=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),S=F.component(r(function({allProps:n,classes:a,otherProps:o,props:i}){return t(V,c(o,{ownerState:n,get class(){return v(a.root,o.class)},get children(){return i.children}}))},"CardContent2"));var G=s("<br>");function y(){return t(h,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"})}r(y,"Bull");function k(){return t(M,{sx:{minWidth:275},get children(){return[t(S,{get children(){return[t(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),t(l,{variant:"h5",component:"div",get children(){return["be",d(()=>t(y,{})),"nev",d(()=>t(y,{})),"o",d(()=>t(y,{})),"lent"]}}),t(l,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),t(l,{variant:"body2",get children(){return["well meaning and kindly.",G(),'"a benevolent smile"']}})]}}),t(W,{get children(){return t(R,{size:"small",children:"Learn More"})}})]}})}r(k,"BasicCard");k.code=`import {
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
`;var q=s('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),J=s('<svg><path d="M8 5v14l11-7z"></svg>',!1,!0);const K=x(()=>[q(),J()],"PlayArrow");var Q=s('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),X=s('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></svg>',!1,!0);const b=x(()=>[Q(),X()],"SkipNext");var Y=s('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),Z=s('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></svg>',!1,!0);const B=x(()=>[Y(),Z()],"SkipPrevious");function ee(e){return u("MuiCardMedia",e)}r(ee,"getCardMediaUtilityClass");p("MuiCardMedia",["root","media","img"]);const te=g()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:ee,propDefaults:({set:e})=>e({component:"div"}),slotClasses:e=>({root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]})}),ne=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e,{isMediaComponent:o,isImageComponent:i}=a;return[n.root,o&&n.media,i&&n.img]}})(({ownerState:e})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...e.isMediaComponent&&{width:"100%"},...e.isImageComponent&&{objectFit:"cover"}})),oe=["video","audio","picture","iframe","img"],re=["picture","img"],ae=te.component(r(function({allProps:n,classes:a,otherProps:o,props:i}){const m=d(()=>oe.indexOf(o.component)!==-1),T=r(()=>!m()&&i.image?c({get"background-image"(){return`url("${i.image}")`}},typeof o.style=="object"&&o.style?o.style:{}):o.style,"style"),$=c(n,{get isMediaComponent(){return m()},get isImageComponent(){return re.indexOf(o.component)!==-1}}),w=z(ne,"div","img");return t(w,c({get role(){return!m()&&i.image?"img":void 0}},o,{get as(){return o.component||o.as},get class(){return v(a.root,o.class)},get style(){return T()},ownerState:$,get src(){return m()?i.image||i.src:void 0},get children(){return i.children}}))},"CardMedia2"));function A(){const e=D();return t(M,{sx:{display:"flex"},get children(){return[t(h,{sx:{display:"flex",flexDirection:"column"},get children(){return[t(S,{sx:{flex:"1 0 auto"},get children(){return[t(l,{component:"div",variant:"h5",children:"Live From Space"}),t(l,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),t(h,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[t(f,{"aria-label":"previous",get children(){return d(()=>e.direction==="rtl")()?t(b,{}):t(B,{})}}),t(f,{"aria-label":"play/pause",get children(){return t(K,{sx:{height:38,width:38}})}}),t(f,{"aria-label":"next",get children(){return d(()=>e.direction==="rtl")()?t(B,{}):t(b,{})}})]}})]}}),t(ae,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}r(A,"MediaControlCard");A.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
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
`;function pe(){return t(L,{get name(){return M.name},docsName:"cards",importInfo:["Card","CardActionArea","CardActions","CardContent","CardHeader","CardMedia"],examples:[{component:k,bgcolor:"contrasted"},{component:A,bgcolor:"contrasted"}]})}r(pe,"CardPage");export{pe as default};
