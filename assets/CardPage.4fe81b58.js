var w=Object.defineProperty;var r=(n,t)=>w(n,"name",{value:t,configurable:!0});import{r as p,s as u,v as m,P as B,x as g,d as e,m as c,E as C,T as l,h as P,t as s,B as y,c as f,V as M,i as z,Q as h,p as b}from"./index.9795753c.js";import{C as R}from"./ComponentInfo.69c4d456.js";import"./Link.2927b89b.js";import"./copyText.9664b0a5.js";import"./PaperCode.55644e03.js";function D(n){return u("MuiCard",n)}r(D,"getCardUtilityClass");p("MuiCard",["root"]);const _=m()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:D,propDefaults:({set:n})=>n({component:B,raised:!1}),slotClasses:()=>({root:["root"]})}),L=g(B,{name:"MuiCard",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({overflow:"hidden"})),x=_.component(r(function({props:t,otherProps:a,classes:o}){return e(L,c({get elevation(){return t.raised?8:void 0},get class(){return C(o.root,a.class)}},a))},"Card"));function O(n){return u("MuiCardActions",n)}r(O,"getCardActionsUtilityClass");p("MuiCardActions",["root","spacing"]);const U=m()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:n})=>n({disableSpacing:!1}),utilityClass:O,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),j=g("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),E=U.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return e(j,c(o,{get class(){return C(a.root,o.class)},ownerState:t,get children(){return i.children}}))},"CardActions"));function H(n){return u("MuiCardContent",n)}r(H,"getCardContentUtilityClass");p("MuiCardContent",["root"]);const F=m()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:H,slotClasses:()=>({root:["root"]})}),W=g("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),N=F.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return e(W,c(o,{ownerState:t,get class(){return C(a.root,o.class)},get children(){return i.children}}))},"CardContent")),V=s("<br>"),v=r(()=>e(y,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"}),"bull");function T(){return e(x,{sx:{minWidth:275},get children(){return[e(N,{get children(){return[e(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),e(l,{variant:"h5",component:"div",get children(){return["be",v,"nev",v,"o",v,"lent"]}}),e(l,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),e(l,{variant:"body2",get children(){return["well meaning and kindly.",V.cloneNode(!0),'"a benevolent smile"']}})]}}),e(E,{get children(){return e(P,{size:"small",children:"Learn More"})}})]}})}r(T,"BasicCard");T.code=`import {
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
`;const G=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Q=s('<svg><path d="M8 5v14l11-7z"></path></svg>',4,!0),q=f(()=>[G.cloneNode(!0),Q.cloneNode(!0)],"PlayArrow"),J=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),K=s('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>',4,!0),I=f(()=>[J.cloneNode(!0),K.cloneNode(!0)],"SkipNext"),X=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Y=s('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>',4,!0),S=f(()=>[X.cloneNode(!0),Y.cloneNode(!0)],"SkipPrevious");function Z(n){return u("MuiCardMedia",n)}r(Z,"getCardMediaUtilityClass");p("MuiCardMedia",["root","media","img"]);const nn=m()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:Z,propDefaults:({set:n})=>n({component:"div"}),slotClasses:n=>({root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]})}),en=g("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n,{isMediaComponent:o,isImageComponent:i}=a;return[t.root,o&&t.media,i&&t.img]}})(({ownerState:n})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...n.isMediaComponent&&{width:"100%"},...n.isImageComponent&&{objectFit:"cover"}})),tn=["video","audio","picture","iframe","img"],on=["picture","img"],rn=nn.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){const d=M(()=>tn.indexOf(o.component)!==-1),A=M(()=>!d()&&i.image?{backgroundImage:`url("${i.image}")`}:{}),$=c(t,{get isMediaComponent(){return d()},get isImageComponent(){return on.indexOf(o.component)!==-1}});return e(en,c({get role(){return!d()&&i.image?"img":void 0}},o,{get class(){return C(a.root,o.class)},get style(){return[A(),o.sx]},ownerState:$,get src(){return d()?i.image||i.src:void 0},get children(){return i.children}}))},"CardMedia"));function k(){const n=z();return e(x,{sx:{display:"flex"},get children(){return[e(y,{sx:{display:"flex",flexDirection:"column"},get children(){return[e(N,{sx:{flex:"1 0 auto"},get children(){return[e(l,{component:"div",variant:"h5",children:"Live From Space"}),e(l,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),e(y,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[e(h,{"aria-label":"previous",get children(){return b(()=>n.direction==="rtl",!0)()?e(I,{}):e(S,{})}}),e(h,{"aria-label":"play/pause",get children(){return e(q,{sx:{height:38,width:38}})}}),e(h,{"aria-label":"next",get children(){return b(()=>n.direction==="rtl",!0)()?e(S,{}):e(I,{})}})]}})]}}),e(rn,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}r(k,"MediaControlCard");k.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
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
`;function un(){return e(R,{get name(){return x.name},docsName:"cards",importInfo:["Card","CardActionArea","CardActions","CardContent","CardHeader","CardMedia"],examples:[{component:T,bgcolor:"contrasted"},{component:k,bgcolor:"contrasted"}]})}r(un,"CardPage");export{un as default};
