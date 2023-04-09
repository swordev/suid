var z=Object.defineProperty;var r=(n,t)=>z(n,"name",{value:t,configurable:!0});import{K as m,N as p,Q as u,P as $,X as g,U as C,H as l,W as f,d as e,T as s,i as P,e as D,B as h,c as x,t as c,O as b,a7 as _,j as L,I as y,q as I}from"./index-d23866de.js";import{C as j}from"./ComponentInfo-1aac651c.js";import"./Link-af594e99.js";import"./copyText-288aae3f.js";import"./PaperCode-cf567731.js";import"./_commonjsHelpers-0119a68f.js";function O(n){return p("MuiCard",n)}r(O,"getCardUtilityClass");m("MuiCard",["root"]);const U=u()({name:"MuiCard",selfPropNames:["classes","raised"],utilityClass:O,propDefaults:({set:n})=>n({component:$,raised:!1}),slotClasses:()=>({root:["root"]})}),H=g($,{name:"MuiCard",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({overflow:"hidden"})),M=U.component(r(function({props:t,otherProps:a,classes:o}){return C(H,l({get elevation(){return t.raised?8:void 0},get class(){return f(o.root,a.class)}},a))},"Card"));function W(n){return p("MuiCardActions",n)}r(W,"getCardActionsUtilityClass");m("MuiCardActions",["root","spacing"]);const E=u()({name:"MuiActions",selfPropNames:["children","classes","disableSpacing"],propDefaults:({set:n})=>n({disableSpacing:!1}),utilityClass:W,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),F=g("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),V=E.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return C(F,l(o,{get class(){return f(a.root,o.class)},ownerState:t,get children(){return i.children}}))},"CardActions"));function q(n){return p("MuiCardContent",n)}r(q,"getCardContentUtilityClass");m("MuiCardContent",["root"]);const G=u()({name:"MuiContent",selfPropNames:["children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:q,slotClasses:()=>({root:["root"]})}),K=g("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),T=G.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){return C(K,l(o,{ownerState:t,get class(){return f(a.root,o.class)},get children(){return i.children}}))},"CardContent")),Q=D("<br>"),v=r(()=>e(h,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"}),"bull");function k(){return e(M,{sx:{minWidth:275},get children(){return[e(T,{get children(){return[e(s,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),e(s,{variant:"h5",component:"div",get children(){return["be",v,"nev",v,"o",v,"lent"]}}),e(s,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),e(s,{variant:"body2",get children(){return["well meaning and kindly.",Q(),'"a benevolent smile"']}})]}}),e(V,{get children(){return e(P,{size:"small",children:"Learn More"})}})]}})}r(k,"BasicCard");k.code=`import {
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
`;const X=c('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),J=c('<svg><path d="M8 5v14l11-7z"></svg>',!1,!0),Y=x(()=>[X(),J()],"PlayArrow"),Z=c('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),nn=c('<svg><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></svg>',!1,!0),S=x(()=>[Z(),nn()],"SkipNext"),en=c('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),tn=c('<svg><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></svg>',!1,!0),B=x(()=>[en(),tn()],"SkipPrevious");function on(n){return p("MuiCardMedia",n)}r(on,"getCardMediaUtilityClass");m("MuiCardMedia",["root","media","img"]);const rn=u()({name:"MuiCardMedia",selfPropNames:["children","classes","image","src"],utilityClass:on,propDefaults:({set:n})=>n({component:"div"}),slotClasses:n=>({root:["root",n.isMediaComponent&&"media",n.isImageComponent&&"img"]})}),an=g("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:a}=n,{isMediaComponent:o,isImageComponent:i}=a;return[t.root,o&&t.media,i&&t.img]}})(({ownerState:n})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...n.isMediaComponent&&{width:"100%"},...n.isImageComponent&&{objectFit:"cover"}})),sn=["video","audio","picture","iframe","img"],ln=["picture","img"],cn=rn.component(r(function({allProps:t,classes:a,otherProps:o,props:i}){const d=b(()=>sn.indexOf(o.component)!==-1),w=b(()=>!d()&&i.image?l({get"background-image"(){return`url("${i.image}")`}},typeof o.style=="object"&&o.style?o.style:{}):o.style),N=l(t,{get isMediaComponent(){return d()},get isImageComponent(){return ln.indexOf(o.component)!==-1}}),R=_(an,"div","img");return C(R,l({get role(){return!d()&&i.image?"img":void 0}},o,{get as(){return o.component||o.as},get class(){return f(a.root,o.class)},get style(){return w()},ownerState:N,get src(){return d()?i.image||i.src:void 0},get children(){return i.children}}))},"CardMedia"));function A(){const n=L();return e(M,{sx:{display:"flex"},get children(){return[e(h,{sx:{display:"flex",flexDirection:"column"},get children(){return[e(T,{sx:{flex:"1 0 auto"},get children(){return[e(s,{component:"div",variant:"h5",children:"Live From Space"}),e(s,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}}),e(h,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},get children(){return[e(y,{"aria-label":"previous",get children(){return I(()=>n.direction==="rtl")()?e(S,{}):e(B,{})}}),e(y,{"aria-label":"play/pause",get children(){return e(Y,{sx:{height:38,width:38}})}}),e(y,{"aria-label":"next",get children(){return I(()=>n.direction==="rtl")()?e(B,{}):e(S,{})}})]}})]}}),e(cn,{component:"img",sx:{width:151},image:"https://mui.com/static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]}})}r(A,"MediaControlCard");A.code=`import PlayArrowIcon from "@suid/icons-material/PlayArrow";
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
`;function yn(){return e(j,{get name(){return M.name},docsName:"cards",importInfo:["Card","CardActionArea","CardActions","CardContent","CardHeader","CardMedia"],examples:[{component:k,bgcolor:"contrasted"},{component:A,bgcolor:"contrasted"}]})}r(yn,"CardPage");export{yn as default};
