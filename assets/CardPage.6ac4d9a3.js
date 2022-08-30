var w=Object.defineProperty;var i=(n,t)=>w(n,"name",{value:t,configurable:!0});import{r as m,s as p,v as u,P as S,x as g,d as e,m as c,E as C,B as v,T as l,h as P,t as s,c as y,V as M,i as z,Q as h,p as b}from"./index.7046b78c.js";import{C as R}from"./ComponentInfo.be7454be.js";import"./Link.a29b8684.js";import"./copyText.6b652906.js";import"./PaperCode.39e3f124.js";function D(n){return p("MuiCard",n)}i(D,"getCardUtilityClass");m("MuiCard",["root"]);const _=u()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:D,propDefaults:({set:n})=>n({component:S,raised:!1}),slotClasses:()=>({root:["root"]})}),L=g(S,{name:"MuiCard",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({overflow:"hidden"})),x=_.component(i(function({props:t,otherProps:r,classes:o}){return e(L,c({get elevation(){return t.raised?8:void 0},get class(){return C(o.root,r.class)}},r))},"Card"));function O(n){return p("MuiCardActions",n)}i(O,"getCardActionsUtilityClass");m("MuiCardActions",["root","spacing"]);const U=u()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:n})=>n({disableSpacing:!1}),utilityClass:O,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),j=g("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:r}=n;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),E=U.component(i(function({allProps:t,classes:r,otherProps:o,props:a}){return e(j,c(o,{get class(){return C(r.root,o.class)},ownerState:t,get children(){return a.children}}))},"CardActions"));function F(n){return p("MuiCardContent",n)}i(F,"getCardContentUtilityClass");m("MuiCardContent",["root"]);const H=u()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:F,slotClasses:()=>({root:["root"]})}),W=g("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),T=H.component(i(function({allProps:t,classes:r,otherProps:o,props:a}){return e(W,c(o,{ownerState:t,get class(){return C(r.root,o.class)},get children(){return a.children}}))},"CardContent")),V=s("<br>"),f=e(v,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"});function N(){return e(x,{sx:{minWidth:275},get children(){return[e(T,{get children(){return[e(l,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),e(l,{variant:"h5",component:"div",get children(){return["be",f,"nev",f,"o",f,"lent"]}}),e(l,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),e(l,{variant:"body2",get children(){return["well meaning and kindly.",V.cloneNode(!0),'"a benevolent smile"']}})]}}),e(E,{get children(){return e(P,{size:"small",children:"Learn More"})}})]}})}i(N,"BasicCard");N.code=`import Box from "@suid/material/Box";
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
`;const G=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Q=s('<svg><path d="M8 5v14l11-7z"></path></svg>',4,!0),q=y(()=>[G.cloneNode(!0),Q.cloneNode(!0)],"PlayArrow"),J=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),K=s('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>',4,!0),I=y(()=>[J.cloneNode(!0),K.cloneNode(!0)],"SkipNext"),X=s('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Y=s('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>',4,!0),B=y(()=>[X.cloneNode(!0),Y.cloneNode(!0)],"SkipPrevious");function Z(n){return p("MuiCardMedia",n)}i(Z,"getCardMediaUtilityClass");m("MuiCardMedia",["root","media","img"]);const nn=u()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:Z,propDefaults:({set:n})=>n({component:"div"}),slotClasses:n=>({root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]})}),en=g("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:r}=n,{isMediaComponent:o,isImageComponent:a}=r;return[t.root,o&&t.media,a&&t.img]}})(({ownerState:n})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...n.isMediaComponent&&{width:"100%"},...n.isImageComponent&&{objectFit:"cover"}})),tn=["video","audio","picture","iframe","img"],on=["picture","img"],rn=nn.component(i(function({allProps:t,classes:r,otherProps:o,props:a}){const d=M(()=>tn.indexOf(o.component)!==-1),$=M(()=>!d()&&a.image?{backgroundImage:`url("${a.image}")`}:{}),A=c(t,{get isMediaComponent(){return d()},get isImageComponent(){return on.indexOf(o.component)!==-1}});return e(en,c({get role(){return!d()&&a.image?"img":void 0}},o,{get class(){return C(r.root,o.class)},get style(){return[$(),o.sx]},ownerState:A,get src(){return d()?a.image||a.src:void 0},get children(){return a.children}}))},"CardMedia"));function k(){const n=z();return e(x,{sx:{display:"flex"},get children(){return[e(v,{sx:{display:"flex",flexDirection:"column"},get children(){return[e(T,{sx:{flex:"1 0 auto"},get children(){return[e(l,{component:"div",variant:"h5",children:"Live From Space"}),e(l,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),e(v,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[e(h,{"aria-label":"previous",get children(){return b(()=>n.direction==="rtl",!0)()?e(I,{}):e(B,{})}}),e(h,{"aria-label":"play/pause",get children(){return e(q,{sx:{height:38,width:38}})}}),e(h,{"aria-label":"next",get children(){return b(()=>n.direction==="rtl",!0)()?e(B,{}):e(I,{})}})]}})]}}),e(rn,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}i(k,"MediaControlCard");k.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
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
`;function pn(){return e(R,{get name(){return x.name},docsName:"cards",examples:[{component:N,bgcolor:"contrasted"},{component:k,bgcolor:"contrasted"}]})}i(pn,"CardPage");export{pn as default};
