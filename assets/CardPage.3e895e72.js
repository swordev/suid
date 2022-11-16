var $=Object.defineProperty;var r=(n,t)=>$(n,"name",{value:t,configurable:!0});import{r as u,s as m,v as g,P as S,x as C,d as e,m as c,E as h,T as l,h as w,t as s,B as f,c as x,p,i as P,Q as v}from"./index.41b0e3d9.js";import{C as z}from"./ComponentInfo.3840199b.js";import"./Link.99ddcb16.js";import"./copyText.2d7a9d56.js";import"./PaperCode.ca66f3be.js";function R(n){return m("MuiCard",n)}r(R,"getCardUtilityClass");u("MuiCard",["root"]);const D=g()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:R,propDefaults:({set:n})=>n({component:S,raised:!1}),slotClasses:()=>({root:["root"]})}),_=C(S,{name:"MuiCard",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({overflow:"hidden"})),M=D.component(r(function({props:t,otherProps:a,classes:o}){return e(_,c({get elevation(){return t.raised?8:void 0},get class(){return h(o.root,a.class)}},a))},"Card"));function L(n){return m("MuiCardActions",n)}r(L,"getCardActionsUtilityClass");u("MuiCardActions",["root","spacing"]);const O=g()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:n})=>n({disableSpacing:!1}),utilityClass:L,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),U=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),j=O.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return e(U,c(o,{get class(){return h(a.root,o.class)},ownerState:t,get children(){return i.children}}))},"CardActions"));function E(n){return m("MuiCardContent",n)}r(E,"getCardContentUtilityClass");u("MuiCardContent",["root"]);const H=g()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:E,slotClasses:()=>({root:["root"]})}),F=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),B=H.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return e(F,c(o,{ownerState:t,get class(){return h(a.root,o.class)},get children(){return i.children}}))},"CardContent")),W=s("<br>"),y=r(()=>e(f,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"}),"bull");function N(){return e(M,{sx:{minWidth:275},get children(){return[e(B,{get children(){return[e(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),e(l,{variant:"h5",component:"div",get children(){return["be",y,"nev",y,"o",y,"lent"]}}),e(l,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),e(l,{variant:"body2",get children(){return["well meaning and kindly.",W.cloneNode(!0),'"a benevolent smile"']}})]}}),e(j,{get children(){return e(w,{size:"small",children:"Learn More"})}})]}})}r(N,"BasicCard");N.code=`import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@suid/material";

const bull = () => (
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
`;const V=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),G=s('<svg><path d="M8 5v14l11-7z"></path></svg>',4,!0),Q=x(()=>[V.cloneNode(!0),G.cloneNode(!0)],"PlayArrow"),q=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),J=s('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>',4,!0),b=x(()=>[q.cloneNode(!0),J.cloneNode(!0)],"SkipNext"),K=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),X=s('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>',4,!0),I=x(()=>[K.cloneNode(!0),X.cloneNode(!0)],"SkipPrevious");function Y(n){return m("MuiCardMedia",n)}r(Y,"getCardMediaUtilityClass");u("MuiCardMedia",["root","media","img"]);const Z=g()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:Y,propDefaults:({set:n})=>n({component:"div"}),slotClasses:n=>({root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]})}),nn=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n,{isMediaComponent:o,isImageComponent:i}=a;return[t.root,o&&t.media,i&&t.img]}})(({ownerState:n})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...n.isMediaComponent&&{width:"100%"},...n.isImageComponent&&{objectFit:"cover"}})),en=["video","audio","picture","iframe","img"],tn=["picture","img"],on=Z.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){const d=p(()=>en.indexOf(o.component)!==-1),k=p(()=>!d()&&i.image?{backgroundImage:`url("${i.image}")`}:{}),A=c(t,{get isMediaComponent(){return d()},get isImageComponent(){return tn.indexOf(o.component)!==-1}});return e(nn,c({get role(){return!d()&&i.image?"img":void 0}},o,{get class(){return h(a.root,o.class)},get style(){return[k(),o.sx]},ownerState:A,get src(){return d()?i.image||i.src:void 0},get children(){return i.children}}))},"CardMedia"));function T(){const n=P();return e(M,{sx:{display:"flex"},get children(){return[e(f,{sx:{display:"flex",flexDirection:"column"},get children(){return[e(B,{sx:{flex:"1 0 auto"},get children(){return[e(l,{component:"div",variant:"h5",children:"Live From Space"}),e(l,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),e(f,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[e(v,{"aria-label":"previous",get children(){return p(()=>n.direction==="rtl")()?e(b,{}):e(I,{})}}),e(v,{"aria-label":"play/pause",get children(){return e(Q,{sx:{height:38,width:38}})}}),e(v,{"aria-label":"next",get children(){return p(()=>n.direction==="rtl")()?e(I,{}):e(b,{})}})]}})]}}),e(on,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}r(T,"MediaControlCard");T.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
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
`;function pn(){return e(z,{get name(){return M.name},docsName:"cards",importInfo:["Card","CardActionArea","CardActions","CardContent","CardHeader","CardMedia"],examples:[{component:N,bgcolor:"contrasted"},{component:T,bgcolor:"contrasted"}]})}r(pn,"CardPage");export{pn as default};
