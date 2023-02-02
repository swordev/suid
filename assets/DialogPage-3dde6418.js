var an=Object.defineProperty;var r=(n,e)=>an(n,"name",{value:e,configurable:!0});import{B as sn}from"./Backdrop-efe134ec.js";import{F as cn}from"./Fade-53e498c4.js";import{M as dn}from"./Modal-38e507f3.js";import{P as E}from"./Paper-b94e5972.js";import{a as pn,O as f,P as v,I as D,Q as C,R as g,g as un,D as T,p as a,j as F,c as t,J as h,T as B,Z as gn,u as mn,h as b,U as p,t as m,ak as U}from"./ErrorPage-5efa7331.js";import{r as j,d as u,c as z,L as X,k as I,m as y,l as P,D as hn,x as Cn}from"./ListItemText-f8fa2031.js";import{c as fn}from"./createUniqueId-ab267bbe.js";import{C as vn}from"./ComponentInfo-1975fef8.js";import{S as J}from"./Slide-459f0baa.js";import{A as Dn,T as xn}from"./AppBar-b702fa18.js";import{I as bn}from"./IconButton-8fca2301.js";import{A as Tn}from"./Add-17114604.js";import{A as V}from"./Avatar-aa37eb97.js";import"./Transition-bfcaa0e0.js";import"./TransitionContext-8fdaef14.js";import"./Portal-185692c1.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Link-3e81837a.js";import"./copyText-57789ef1.js";import"./PaperCode-13566785.js";import"./PageNav-3db91a50.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";import"./debounce-60370e19.js";const K=pn({});function kn(n){return v("MuiDialog",n)}r(kn,"getDialogUtilityClass");const $=f("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),M=D()({name:"MuiDialog",selfPropNames:["aria-describedby","aria-labelledby","children","classes","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],utilityClass:kn,slotClasses:n=>({root:["root"],container:["container",`scroll${C(n.scroll)}`],paper:["paper",`paperScroll${C(n.scroll)}`,`paperWidth${C(String(n.maxWidth))}`,n.fullWidth&&"paperFullWidth",n.fullScreen&&"paperFullScreen"]})}),Sn=g(sn,{name:"MuiDialog",slot:"Backdrop"})({zIndex:-1}),In=g(dn,{name:"MuiDialog",slot:"Root",overridesResolver:(n,e)=>e.root})({"@media print":{position:"absolute !important"}}),yn=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.container,e[`scroll${C(i.scroll)}`]]}})(({ownerState:n})=>({height:"100%","@media print":{height:"auto"},outline:0,...n.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},...n.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}})),Pn=g(E,{name:"MuiDialog",slot:"Paper",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.paper,e[`scrollPaper${C(i.scroll)}`],e[`paperWidth${C(String(i.maxWidth))}`],i.fullWidth&&e.paperFullWidth,i.fullScreen&&e.paperFullScreen]}})(({theme:n,ownerState:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},...e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},...e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},...!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},...e.maxWidth==="xs"&&{maxWidth:n.breakpoints.unit==="px"?Math.max(n.breakpoints.values.xs,444):`${n.breakpoints.values.xs}${n.breakpoints.unit}`,[`&.${$.paperScrollBody}`]:{[n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...e.maxWidth!=="xs"&&{maxWidth:`${n.breakpoints.values[e.maxWidth]}${n.breakpoints.unit}`,[`&.${$.paperScrollBody}`]:{[n.breakpoints.down(n.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...e.fullWidth&&{width:"calc(100% - 64px)"},...e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${$.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}})),k=M.defineComponent(r(function(e){const i=j(e),o=M.useThemeProps({props:e}),l=un(),s={get enter(){return l.transitions.duration.enteringScreen},get exit(){return l.transitions.duration.leavingScreen}},[,c]=T(o,["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","class","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),d=a({disableEscapeKeyDown:!1,fullScreen:!1,fullWidth:!1,maxWidth:"sm",PaperComponent:E,PaperProps:{},scroll:"paper",TransitionComponent:cn,transitionDuration:s},o),S=d,L=M.useClasses(S);let A=null;const on=r(x=>{A=x.target===x.currentTarget},"handleMouseDown"),rn=r(x=>{A&&(A=null,o.onBackdropClick&&o.onBackdropClick(x),o.onClose&&o.onClose(x,"backdropClick"))},"handleBackdropClick"),N=fn(()=>o["aria-labelledby"]),ln=F(()=>({titleId:N()}));return t(In,a({get class(){return h(L.root,o.class)},get BackdropProps(){return a({get transitionDuration(){return d.transitionDuration},get as(){return o.BackdropComponent}},()=>o.BackdropProps)},closeAfterTransition:!0,BackdropComponent:Sn,get disableEscapeKeyDown(){return d.disableEscapeKeyDown},get onClose(){return o.onClose},get open(){return o.open},ref:i,onClick:rn,ownerState:S},c,{get children(){return t(d.TransitionComponent,a({appear:!0,get in(){return o.open},get timeout(){return d.transitionDuration}},()=>o.TransitionProps,{get children(){return t(yn,{get class(){return h(L.container)},onMouseDown:on,ownerState:S,get children(){return t(Pn,a({get component(){return d.PaperComponent},elevation:24,role:"dialog",get["aria-describedby"](){return o["aria-describedby"]},get["aria-labelledby"](){return N()}},()=>d.PaperProps,{get class(){return h(L.paper,d.PaperProps.class)},ownerState:S,get children(){return t(K.Provider,{get value(){return ln()},get children(){return o.children}})}}))}})}}))}}))},"Dialog"));function Bn(n){return v("MuiDialogActions",n)}r(Bn,"getDialogActionsUtilityClass");f("MuiDialogActions",["root","spacing"]);const O=D()({name:"MuiDialogActions",selfPropNames:["children","classes","disableSpacing"],utilityClass:Bn,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),Ln=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,!i.disableSpacing&&e.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),H=O.defineComponent(r(function(e){const i=O.useThemeProps({props:e}),[,o]=T(i,["class","disableSpacing"]),s=a({disableSpacing:!1},i),c=O.useClasses(s);return t(Ln,a({get class(){return h(c.root,i.class)},ownerState:s},o))},"DialogActions"));function An(n){return v("MuiDialogTitle",n)}r(An,"getDialogTitleUtilityClass");const $n=f("MuiDialogTitle",["root"]);function Mn(n){return v("MuiDialogContent",n)}r(Mn,"getDialogContentUtilityClass");f("MuiDialogContent",["root","dividers"]);const W=D()({name:"MuiDialogContent",selfPropNames:["children","classes","dividers"],utilityClass:Mn,slotClasses:n=>({root:["root",n.dividers&&"dividers"]})}),On=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.dividers&&e.dividers]}})(({theme:n,ownerState:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",...e.dividers?{padding:"16px 24px",borderTop:`1px solid ${n.palette.divider}`,borderBottom:`1px solid ${n.palette.divider}`}:{[`.${$n.root} + &`]:{paddingTop:0}}})),Y=W.defineComponent(r(function(e){const i=W.useThemeProps({props:e}),[,o]=T(i,["class","dividers"]),l=a({dividers:!1},i),s=a(i,{get dividers(){return l.dividers}}),c=W.useClasses(s);return t(On,a({get class(){return h(c.root,i.class)},ownerState:s},o))},"DialogContent"));function Wn(n){return v("MuiDialogContentText",n)}r(Wn,"getDialogContentTextUtilityClass");f("MuiDialogContentText",["root"]);const w=D()({name:"MuiDialogContentText",selfPropNames:["classes"],utilityClass:Wn,slotClasses:()=>({root:["root"]})}),wn=g(B,{skipProps:gn.filter(n=>n!=="classes"),name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,e)=>e.root})({}),q=w.defineComponent(r(function(e){const i=j(e),o=w.useThemeProps({props:e}),[,l]=T(o,["children"]),s=w.useClasses(l);return t(wn,a({variant:"body1",color:"text.secondary",ref:i,ownerState:l},o,{get component(){return o.component??"p"},classes:s}))},"DialogContentText")),R=D()({name:"MuiDialogTitle",selfPropNames:["children","classes"],utilityClass:An,slotClasses:()=>({root:["root"]})}),Rn=g(B,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(n,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),G=R.defineComponent(r(function(e){const i=R.useThemeProps({props:e}),[,o]=T(i,["class","id"]),l=i,s=R.useClasses(l),c=mn(K),d=r(()=>c.titleId??i.id,"titleId");return t(Rn,a({get class(){return h(s.root,i.class)},ownerState:l,variant:"h6",get id(){return d()}},o,{get component(){return i.component??"h2"}}))},"DialogTitle")),Fn=m("<div></div>",2);function Q(){const[n,e]=b(!1),i=r(()=>{e(!0)},"handleClickOpen"),o=r(()=>{e(!1)},"handleClose");return(()=>{const l=Fn.cloneNode(!0);return p(l,t(u,{variant:"outlined",onClick:i,children:"Open alert dialog"}),null),p(l,t(k,{get open(){return n()},onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",get children(){return[t(G,{id:"alert-dialog-title",children:"Use Google's location service?"}),t(Y,{get children(){return t(q,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(H,{get children(){return[t(u,{onClick:o,children:"Disagree"}),t(u,{onClick:o,children:"Agree"})]}})]}}),null),l})()}r(Q,"AlertDialog");Q.code=`import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@suid/material";
import { createSignal } from "solid-js";

export default function AlertDialog() {
  const [open, setOpen] = createSignal(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open()}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;const Gn=m("<div></div>",2),Nn=r(function(e){return t(J,a({direction:"up"},e))},"Transition");function Z(){const[n,e]=b(!1),i=r(()=>{e(!0)},"handleClickOpen"),o=r(()=>{e(!1)},"handleClose");return(()=>{const l=Gn.cloneNode(!0);return p(l,t(u,{variant:"outlined",onClick:i,children:"Slide in alert dialog"}),null),p(l,t(k,{get open(){return n()},TransitionComponent:Nn,onClose:o,"aria-describedby":"alert-dialog-slide-description",get children(){return[t(G,{children:"Use Google's location service?"}),t(Y,{get children(){return t(q,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(H,{get children(){return[t(u,{onClick:o,children:"Disagree"}),t(u,{onClick:o,children:"Agree"})]}})]}}),null),l})()}r(Z,"AlertDialogSlide");Z.code=`import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@suid/material";
import { TransitionProps } from "@suid/material/transitions";
import { createSignal, JSXElement } from "solid-js";

const Transition = function Transition(
  props: TransitionProps & {
    children: JSXElement;
  }
) {
  return <Slide direction="up" {...props} />;
};

export default function AlertDialogSlide() {
  const [open, setOpen] = createSignal(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open()}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;const Un=m('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Vn=m('<svg><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',4,!0),_n=z(()=>[Un.cloneNode(!0),Vn.cloneNode(!0)],"Close"),En=m("<div></div>",2),jn=r(function(e){return t(J,a({direction:"up"},e))},"Transition");function nn(){const[n,e]=b(!1),i=r(()=>{e(!0)},"handleClickOpen"),o=r(()=>{e(!1)},"handleClose");return(()=>{const l=En.cloneNode(!0);return p(l,t(u,{variant:"outlined",onClick:i,children:"Open full-screen dialog"}),null),p(l,t(k,{fullScreen:!0,get open(){return n()},onClose:o,TransitionComponent:jn,get children(){return[t(Dn,{sx:{position:"relative"},get children(){return t(xn,{get children(){return[t(bn,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",get children(){return t(_n,{})}}),t(B,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Sound"}),t(u,{autofocus:!0,color:"inherit",onClick:o,children:"save"})]}})}}),t(X,{get children(){return[t(I,{disableGutters:!0,disablePadding:!0,get children(){return t(y,{get children(){return t(P,{primary:"Phone ringtone",secondary:"Titania"})}})}}),t(hn,{}),t(I,{disableGutters:!0,disablePadding:!0,get children(){return t(y,{get children(){return t(P,{primary:"Default notification ringtone",secondary:"Tethys"})}})}})]}})]}}),null),l})()}r(nn,"FullScreenDialog");nn.code=`import CloseIcon from "@suid/icons-material/Close";
import {
  Button,
  Dialog,
  ListItem,
  ListItemText,
  ListItemButton,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from "@suid/material";
import { TransitionProps } from "@suid/material/transitions";
import { createSignal, JSXElement } from "solid-js";

const Transition = function Transition(
  props: TransitionProps & {
    children: JSXElement;
  }
) {
  return <Slide direction="up" {...props} />;
};

export default function FullScreenDialog() {
  const [open, setOpen] = createSignal(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open()}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                flex: 1,
              }}
              variant="h6"
              component="div"
            >
              Sound
            </Typography>
            <Button autofocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
`;const zn=m('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Xn=m('<svg><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>',4,!0),Jn=z(()=>[zn.cloneNode(!0),Xn.cloneNode(!0)],"Person");function Kn(n){return v("MuiListItemAvatar",n)}r(Kn,"getListItemAvatarUtilityClass");f("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Hn=D()({name:"MuiListItemAvatar",selfPropNames:["alignItems","children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:Kn,slotClasses:n=>({root:["root",n.alignItems==="flex-start"&&"alignItemsFlexStart"]})}),Yn=g("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:n})=>({minWidth:56,flexShrink:0,...n.alignItems==="flex-start"&&{marginTop:8}})),_=Hn.component(r(function({allProps:e,classes:i,otherProps:o}){const l=Cn(),s=a({get alignItems(){return l.alignItems}},e);return t(Yn,a(o,{ownerState:s,get class(){return h(i.root,o.class)},get children(){return e.children}}))},"ListItemAvatar")),qn=m("<div><br></div>",3),en=["username@gmail.com","user02@gmail.com"];function Qn(n){const e=r(()=>{n.onClose(n.selectedValue)},"handleClose"),i=r(o=>{n.onClose(o)},"handleListItemClick");return t(k,{onClose:e,get open(){return n.open},get children(){return[t(G,{children:"Set backup account"}),t(X,{sx:{pt:0},get children(){return[F(()=>en.map(o=>t(I,{onClick:()=>i(o),disablePadding:!0,get children(){return t(y,{get children(){return[t(_,{get children(){return t(V,{get sx(){return{bgcolor:U[100],color:U[600]}},get children(){return t(Jn,{})}})}}),t(P,{primary:o})]}})}}))),t(I,{onClick:()=>i("addAccount"),disablePadding:!0,get children(){return t(y,{autoFocus:!0,get children(){return[t(_,{get children(){return t(V,{get children(){return t(Tn,{})}})}}),t(P,{primary:"Add account"})]}})}})]}})]}})}r(Qn,"SimpleDialog");function tn(){const[n,e]=b(!1),[i,o]=b(en[1]),l=r(()=>{e(!0)},"handleClickOpen"),s=r(c=>{e(!1),o(c)},"handleClose");return(()=>{const c=qn.cloneNode(!0),d=c.firstChild;return p(c,t(B,{variant:"subtitle1",component:"div",get children(){return["Selected: ",F(()=>i())]}}),d),p(c,t(u,{variant:"outlined",onClick:l,children:"Open simple dialog"}),null),p(c,t(Qn,{get selectedValue(){return i()},get open(){return n()},onClose:s}),null),c})()}r(tn,"SimpleDialogDemo");tn.code=`import AddIcon from "@suid/icons-material/Add";
import PersonIcon from "@suid/icons-material/Person";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@suid/material";
import { blue } from "@suid/material/colors";
import { createSignal } from "solid-js";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const handleClose = () => {
    props.onClose(props.selectedValue);
  };

  const handleListItemClick = (value: string) => {
    props.onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem onClick={() => handleListItemClick(email)} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: blue[100],
                    color: blue[600],
                  }}
                >
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          onClick={() => handleListItemClick("addAccount")}
          disablePadding
        >
          <ListItemButton autoFocus>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = createSignal(false);
  const [selectedValue, setSelectedValue] = createSignal(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue()}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue()}
        open={open()}
        onClose={handleClose}
      />
    </div>
  );
}
`;function ye(){return t(vn,{get name(){return k.name},docsName:"lists",importInfo:["Dialog","DialogActions","DialogContent","DialogContentText","DialogTitle"],examples:[tn,Q,Z,nn]})}r(ye,"DialogPage");export{ye as default};
