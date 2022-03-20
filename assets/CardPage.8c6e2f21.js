import{i as c,j as m,k as p,p as B,s as u,B as f,T as s,d as A,c as v,u as w,I as C}from"./index.ae27f545.js";import{d as n,g as l,h as g,v as i,i as x,j as M}from"./vendor.6d0a7b46.js";import{C as P}from"./ComponentInfo.6103a8aa.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";function z(e){return m("MuiCard",e)}c("MuiCard",["root"]);const R=p()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:z,propDefaults:({set:e})=>e({component:B,raised:!1}),slotClasses:()=>({root:["root"]})}),D=u(B,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),y=R.component(function({props:t,otherProps:r,classes:o}){return n(D,l({get elevation(){return t.raised?8:void 0},get className(){return g(o.root,r.className)}},r))});function _(e){return m("MuiCardActions",e)}c("MuiCardActions",["root","spacing"]);const L=p()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:e})=>e({disableSpacing:!1}),utilityClass:_,slotClasses:e=>({root:["root",!e.disableSpacing&&"spacing"]})}),j=u("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>({display:"flex",alignItems:"center",padding:8,...!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),O=L.component(function({allProps:t,classes:r,otherProps:o,props:a}){return n(j,l(o,{get className(){return g(r.root,o.className)},ownerState:t,get children(){return a.children}}))});function U(e){return m("MuiCardContent",e)}c("MuiCardContent",["root"]);const E=p()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:e})=>e({component:"div"}),utilityClass:U,slotClasses:()=>({root:["root"]})}),F=u("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),N=E.component(function({allProps:t,classes:r,otherProps:o,props:a}){return n(F,l(o,{ownerState:t,get className(){return g(r.root,o.className)},get children(){return a.children}}))}),H=i("<br>"),h=n(f,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"});function S(){return n(y,{sx:{minWidth:275},get children(){return[n(N,{get children(){return[n(s,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),n(s,{variant:"h5",component:"div",get children(){return["be",h,"nev",h,"o",h,"lent"]}}),n(s,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),n(s,{variant:"body2",get children(){return["well meaning and kindly.",H.cloneNode(!0),'"a benevolent smile"']}})]}}),n(O,{get children(){return n(A,{size:"small",children:"Learn More"})}})]}})}S.code=`import Box from "@suid/material/Box";
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
`;const W=i('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),V=i('<svg><path d="M8 5v14l11-7z"></path></svg>',4,!0);var G=v(()=>[W.cloneNode(!0),V.cloneNode(!0)],"PlayArrow");const q=i('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),J=i('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>',4,!0);var b=v(()=>[q.cloneNode(!0),J.cloneNode(!0)],"SkipNext");const K=i('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Q=i('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>',4,!0);var I=v(()=>[K.cloneNode(!0),Q.cloneNode(!0)],"SkipPrevious");function X(e){return m("MuiCardMedia",e)}c("MuiCardMedia",["root","media","img"]);const Y=p()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:X,propDefaults:({set:e})=>e({component:"div"}),slotClasses:e=>({root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]})}),Z=u("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:o,isImageComponent:a}=r;return[t.root,o&&t.media,a&&t.img]}})(({ownerState:e})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...e.isMediaComponent&&{width:"100%"},...e.isImageComponent&&{objectFit:"cover"}})),ee=["video","audio","picture","iframe","img"],ne=["picture","img"],te=Y.component(function({allProps:t,classes:r,otherProps:o,props:a}){const d=x(()=>ee.indexOf(o.component)!==-1),k=x(()=>!d()&&a.image?{backgroundImage:`url("${a.image}")`}:{}),$=l(t,()=>({isMediaComponent:d(),isImageComponent:ne.indexOf(o.component)!==-1}));return n(Z,l({get role(){return!d()&&a.image?"img":void 0}},o,{get className(){return g(r.root,o.className)},get style(){return[k(),o.sx]},ownerState:$,get src(){return d()?a.image||a.src:void 0},get children(){return a.children}}))});function T(){const e=w();return n(y,{sx:{display:"flex"},get children(){return[n(f,{sx:{display:"flex",flexDirection:"column"},get children(){return[n(N,{sx:{flex:"1 0 auto"},get children(){return[n(s,{component:"div",variant:"h5",children:"Live From Space"}),n(s,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),n(f,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[n(C,{"aria-label":"previous",get children(){return M(()=>e.direction==="rtl",!0)()?n(b,{}):n(I,{})}}),n(C,{"aria-label":"play/pause",get children(){return n(G,{sx:{height:38,width:38}})}}),n(C,{"aria-label":"next",get children(){return M(()=>e.direction==="rtl",!0)()?n(I,{}):n(b,{})}})]}})]}}),n(te,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}T.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
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
`;function le(){return n(P,{get name(){return y.name},docsName:"cards",examples:[S,T]})}export{le as default};
