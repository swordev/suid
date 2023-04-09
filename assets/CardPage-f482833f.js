var N=Object.defineProperty;var r=(n,t)=>N(n,"name",{value:t,configurable:!0});import{E as p,H as u,J as g,P as S,Q as C,d as e,m as c,O as f,T as l,h as R,t as s,B as h,c as x,p as m,a0 as z,i as P,I as y}from"./index-3d2309c5.js";import{C as D}from"./ComponentInfo-873f013e.js";import"./Link-60534740.js";import"./copyText-5528464b.js";import"./PaperCode-37bcdc25.js";import"./_commonjsHelpers-0119a68f.js";function _(n){return u("MuiCard",n)}r(_,"getCardUtilityClass");p("MuiCard",["root"]);const L=g()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:_,propDefaults:({set:n})=>n({component:S,raised:!1}),slotClasses:()=>({root:["root"]})}),O=C(S,{name:"MuiCard",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({overflow:"hidden"})),M=L.component(r(function({props:t,otherProps:a,classes:o}){return e(O,c({get elevation(){return t.raised?8:void 0},get class(){return f(o.root,a.class)}},a))},"Card"));function j(n){return u("MuiCardActions",n)}r(j,"getCardActionsUtilityClass");p("MuiCardActions",["root","spacing"]);const H=g()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:n})=>n({disableSpacing:!1}),utilityClass:j,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),U=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),E=H.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return e(U,c(o,{get class(){return f(a.root,o.class)},ownerState:t,get children(){return i.children}}))},"CardActions"));function F(n){return u("MuiCardContent",n)}r(F,"getCardContentUtilityClass");p("MuiCardContent",["root"]);const W=g()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:F,slotClasses:()=>({root:["root"]})}),V=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),B=W.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return e(V,c(o,{ownerState:t,get class(){return f(a.root,o.class)},get children(){return i.children}}))},"CardContent")),G=s("<br>"),v=r(()=>e(h,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"}),"bull");function T(){return e(M,{sx:{minWidth:275},get children(){return[e(B,{get children(){return[e(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),e(l,{variant:"h5",component:"div",get children(){return["be",v,"nev",v,"o",v,"lent"]}}),e(l,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),e(l,{variant:"body2",get children(){return["well meaning and kindly.",G(),'"a benevolent smile"']}})]}}),e(E,{get children(){return e(R,{size:"small",children:"Learn More"})}})]}})}r(T,"BasicCard");T.code=`import {
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
    •
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
`;const J=s('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),Q=s('<svg><path d="M8 5v14l11-7z"></svg>',!1,!0),q=x(()=>[J(),Q()],"PlayArrow"),K=s('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),X=s('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></svg>',!1,!0),b=x(()=>[K(),X()],"SkipNext"),Y=s('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),Z=s('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></svg>',!1,!0),I=x(()=>[Y(),Z()],"SkipPrevious");function nn(n){return u("MuiCardMedia",n)}r(nn,"getCardMediaUtilityClass");p("MuiCardMedia",["root","media","img"]);const en=g()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:nn,propDefaults:({set:n})=>n({component:"div"}),slotClasses:n=>({root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]})}),tn=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n,{isMediaComponent:o,isImageComponent:i}=a;return[t.root,o&&t.media,i&&t.img]}})(({ownerState:n})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...n.isMediaComponent&&{width:"100%"},...n.isImageComponent&&{objectFit:"cover"}})),on=["video","audio","picture","iframe","img"],rn=["picture","img"],an=en.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){const d=m(()=>on.indexOf(o.component)!==-1),A=m(()=>!d()&&i.image?c({get"background-image"(){return`url("${i.image}")`}},typeof o.style=="object"&&o.style?o.style:{}):o.style),$=c(t,{get isMediaComponent(){return d()},get isImageComponent(){return rn.indexOf(o.component)!==-1}}),w=z(tn,"div","img");return e(w,c({get role(){return!d()&&i.image?"img":void 0}},o,{get as(){return o.component||o.as},get class(){return f(a.root,o.class)},get style(){return A()},ownerState:$,get src(){return d()?i.image||i.src:void 0},get children(){return i.children}}))},"CardMedia"));function k(){const n=P();return e(M,{sx:{display:"flex"},get children(){return[e(h,{sx:{display:"flex",flexDirection:"column"},get children(){return[e(B,{sx:{flex:"1 0 auto"},get children(){return[e(l,{component:"div",variant:"h5",children:"Live From Space"}),e(l,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),e(h,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[e(y,{"aria-label":"previous",get children(){return m(()=>n.direction==="rtl")()?e(b,{}):e(I,{})}}),e(y,{"aria-label":"play/pause",get children(){return e(q,{sx:{height:38,width:38}})}}),e(y,{"aria-label":"next",get children(){return m(()=>n.direction==="rtl")()?e(I,{}):e(b,{})}})]}})]}}),e(an,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}r(k,"MediaControlCard");k.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
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
`;function gn(){return e(D,{get name(){return M.name},docsName:"cards",importInfo:["Card","CardActionArea","CardActions","CardContent","CardHeader","CardMedia"],examples:[{component:T,bgcolor:"contrasted"},{component:k,bgcolor:"contrasted"}]})}r(gn,"CardPage");export{gn as default};
