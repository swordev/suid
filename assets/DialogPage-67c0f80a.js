var dn=Object.defineProperty;var a=(n,e)=>dn(n,"name",{value:e,configurable:!0});import{a9 as pn,K as f,N as v,Q as D,R as C,X as m,y as un,aa as gn,P as X,j as mn,Y as T,H as c,O as hn,U as p,F as Cn,W as h,ab as j,T as L,ac as fn,ad as vn,a as b,x as u,d as t,i as g,e as B,m as z,ae as K,c as H,t as A,s as Dn,v as xn,I as bn,L as Y,r as I,af as y,p as P,D as Tn,ag as kn,q as J,ah as _}from"./index-4edd6e97.js";import{c as Sn}from"./createUniqueId-c6222b9f.js";import{C as In}from"./ComponentInfo-031a9ae7.js";import{A as yn}from"./Add-6ce645c9.js";import{A as E}from"./Avatar-d3084873.js";import"./Link-c0b2074e.js";import"./copyText-7d5196c4.js";import"./PaperCode-703a1f0e.js";import"./_commonjsHelpers-0119a68f.js";const q=pn({});function Pn(n){return v("MuiDialog",n)}a(Pn,"getDialogUtilityClass");const W=f("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),O=D()({name:"MuiDialog",selfPropNames:["aria-describedby","aria-labelledby","children","classes","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],utilityClass:Pn,slotClasses:n=>({root:["root"],container:["container",`scroll${C(n.scroll)}`],paper:["paper",`paperScroll${C(n.scroll)}`,`paperWidth${C(String(n.maxWidth))}`,n.fullWidth&&"paperFullWidth",n.fullScreen&&"paperFullScreen"]})}),Ln=m(un,{name:"MuiDialog",slot:"Backdrop"})({zIndex:-1}),Bn=m(gn,{name:"MuiDialog",slot:"Root",overridesResolver:(n,e)=>e.root})({"@media print":{position:"absolute !important"}}),An=m("div",{name:"MuiDialog",slot:"Container",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.container,e[`scroll${C(i.scroll)}`]]}})(({ownerState:n})=>({height:"100%","@media print":{height:"auto"},outline:0,...n.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},...n.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}})),$n=m(X,{name:"MuiDialog",slot:"Paper",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.paper,e[`scrollPaper${C(i.scroll)}`],e[`paperWidth${C(String(i.maxWidth))}`],i.fullWidth&&e.paperFullWidth,i.fullScreen&&e.paperFullScreen]}})(({theme:n,ownerState:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},...e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},...e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},...!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},...e.maxWidth==="xs"&&{maxWidth:n.breakpoints.unit==="px"?Math.max(n.breakpoints.values.xs,444):`${n.breakpoints.values.xs}${n.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...e.maxWidth!=="xs"&&{maxWidth:`${n.breakpoints.values[e.maxWidth]}${n.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[n.breakpoints.down(n.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...e.fullWidth&&{width:"calc(100% - 64px)"},...e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}})),k=O.defineComponent(a(function(e){const i=j(e),o=O.useThemeProps({props:e}),r=mn(),l={get enter(){return r.transitions.duration.enteringScreen},get exit(){return r.transitions.duration.leavingScreen}},[,s]=T(o,["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","class","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),d=c({disableEscapeKeyDown:!1,fullScreen:!1,fullWidth:!1,maxWidth:"sm",PaperComponent:X,PaperProps:{},scroll:"paper",TransitionComponent:Cn,transitionDuration:l},o),S=d,$=O.useClasses(S);let M=null;const ln=a(x=>{M=x.target===x.currentTarget},"handleMouseDown"),sn=a(x=>{M&&(M=null,o.onBackdropClick&&o.onBackdropClick(x),o.onClose&&o.onClose(x,"backdropClick"))},"handleBackdropClick"),V=Sn(()=>o["aria-labelledby"]),cn=hn(()=>({titleId:V()}));return p(Bn,c({get class(){return h($.root,o.class)},get BackdropProps(){return c({get transitionDuration(){return d.transitionDuration},get as(){return o.BackdropComponent}},()=>o.BackdropProps)},closeAfterTransition:!0,BackdropComponent:Ln,get disableEscapeKeyDown(){return d.disableEscapeKeyDown},get onClose(){return o.onClose},get open(){return o.open},ref:i,onClick:sn,ownerState:S},s,{get children(){return p(d.TransitionComponent,c({appear:!0,get in(){return o.open},get timeout(){return d.transitionDuration}},()=>o.TransitionProps,{get children(){return p(An,{get class(){return h($.container)},onMouseDown:ln,ownerState:S,get children(){return p($n,c({get component(){return d.PaperComponent},elevation:24,role:"dialog",get["aria-describedby"](){return o["aria-describedby"]},get["aria-labelledby"](){return V()}},()=>d.PaperProps,{get class(){return h($.paper,d.PaperProps.class)},ownerState:S,get children(){return p(q.Provider,{get value(){return cn()},get children(){return o.children}})}}))}})}}))}}))},"Dialog"));function Mn(n){return v("MuiDialogActions",n)}a(Mn,"getDialogActionsUtilityClass");f("MuiDialogActions",["root","spacing"]);const w=D()({name:"MuiDialogActions",selfPropNames:["children","classes","disableSpacing"],utilityClass:Mn,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),Wn=m("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,!i.disableSpacing&&e.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),Q=w.defineComponent(a(function(e){const i=w.useThemeProps({props:e}),[,o]=T(i,["class","disableSpacing"]),l=c({disableSpacing:!1},i),s=w.useClasses(l);return p(Wn,c({get class(){return h(s.root,i.class)},ownerState:l},o))},"DialogActions"));function On(n){return v("MuiDialogTitle",n)}a(On,"getDialogTitleUtilityClass");const wn=f("MuiDialogTitle",["root"]);function Rn(n){return v("MuiDialogContent",n)}a(Rn,"getDialogContentUtilityClass");f("MuiDialogContent",["root","dividers"]);const R=D()({name:"MuiDialogContent",selfPropNames:["children","classes","dividers"],utilityClass:Rn,slotClasses:n=>({root:["root",n.dividers&&"dividers"]})}),Fn=m("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.dividers&&e.dividers]}})(({theme:n,ownerState:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",...e.dividers?{padding:"16px 24px",borderTop:`1px solid ${n.palette.divider}`,borderBottom:`1px solid ${n.palette.divider}`}:{[`.${wn.root} + &`]:{paddingTop:0}}})),Z=R.defineComponent(a(function(e){const i=R.useThemeProps({props:e}),[,o]=T(i,["class","dividers"]),r=c({dividers:!1},i),l=c(i,{get dividers(){return r.dividers}}),s=R.useClasses(l);return p(Fn,c({get class(){return h(s.root,i.class)},ownerState:l},o))},"DialogContent"));function Gn(n){return v("MuiDialogContentText",n)}a(Gn,"getDialogContentTextUtilityClass");f("MuiDialogContentText",["root"]);const F=D()({name:"MuiDialogContentText",selfPropNames:["classes"],utilityClass:Gn,slotClasses:()=>({root:["root"]})}),Un=m(L,{skipProps:fn.filter(n=>n!=="classes"),name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,e)=>e.root})({}),nn=F.defineComponent(a(function(e){const i=j(e),o=F.useThemeProps({props:e}),[,r]=T(o,["children"]),l=F.useClasses(r);return p(Un,c({variant:"body1",color:"text.secondary",ref:i,ownerState:r},o,{get component(){return o.component??"p"},classes:l}))},"DialogContentText")),G=D()({name:"MuiDialogTitle",selfPropNames:["children","classes"],utilityClass:On,slotClasses:()=>({root:["root"]})}),Vn=m(L,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(n,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),U=G.defineComponent(a(function(e){const i=G.useThemeProps({props:e}),[,o]=T(i,["class","id"]),r=i,l=G.useClasses(r),s=vn(q),d=a(()=>s.titleId??i.id,"titleId");return p(Vn,c({get class(){return h(l.root,i.class)},ownerState:r,variant:"h6",get id(){return d()}},o,{get component(){return i.component??"h2"}}))},"DialogTitle")),_n=B("<div>");function en(){const[n,e]=b(!1),i=a(()=>{e(!0)},"handleClickOpen"),o=a(()=>{e(!1)},"handleClose");return(()=>{const r=_n();return u(r,t(g,{variant:"outlined",onClick:i,children:"Open alert dialog"}),null),u(r,t(k,{get open(){return n()},onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",get children(){return[t(U,{id:"alert-dialog-title",children:"Use Google's location service?"}),t(Z,{get children(){return t(nn,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(Q,{get children(){return[t(g,{onClick:o,children:"Disagree"}),t(g,{onClick:o,children:"Agree"})]}})]}}),null),r})()}a(en,"AlertDialog");en.code=`import {
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
`;const En=B("<div>"),Nn=a(function(e){return t(K,z({direction:"up"},e))},"Transition");function tn(){const[n,e]=b(!1),i=a(()=>{e(!0)},"handleClickOpen"),o=a(()=>{e(!1)},"handleClose");return(()=>{const r=En();return u(r,t(g,{variant:"outlined",onClick:i,children:"Slide in alert dialog"}),null),u(r,t(k,{get open(){return n()},TransitionComponent:Nn,onClose:o,"aria-describedby":"alert-dialog-slide-description",get children(){return[t(U,{children:"Use Google's location service?"}),t(Z,{get children(){return t(nn,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(Q,{get children(){return[t(g,{onClick:o,children:"Disagree"}),t(g,{onClick:o,children:"Agree"})]}})]}}),null),r})()}a(tn,"AlertDialogSlide");tn.code=`import {
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
`;const Xn=A('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),jn=A('<svg><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></svg>',!1,!0),zn=H(()=>[Xn(),jn()],"Close"),Kn=B("<div>"),Hn=a(function(e){return t(K,z({direction:"up"},e))},"Transition");function on(){const[n,e]=b(!1),i=a(()=>{e(!0)},"handleClickOpen"),o=a(()=>{e(!1)},"handleClose");return(()=>{const r=Kn();return u(r,t(g,{variant:"outlined",onClick:i,children:"Open full-screen dialog"}),null),u(r,t(k,{fullScreen:!0,get open(){return n()},onClose:o,TransitionComponent:Hn,get children(){return[t(Dn,{sx:{position:"relative"},get children(){return t(xn,{get children(){return[t(bn,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",get children(){return t(zn,{})}}),t(L,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Sound"}),t(g,{autofocus:!0,color:"inherit",onClick:o,children:"save"})]}})}}),t(Y,{get children(){return[t(I,{disableGutters:!0,disablePadding:!0,get children(){return t(y,{get children(){return t(P,{primary:"Phone ringtone",secondary:"Titania"})}})}}),t(Tn,{}),t(I,{disableGutters:!0,disablePadding:!0,get children(){return t(y,{get children(){return t(P,{primary:"Default notification ringtone",secondary:"Tethys"})}})}})]}})]}}),null),r})()}a(on,"FullScreenDialog");on.code=`import CloseIcon from "@suid/icons-material/Close";
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
`;const Yn=A('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),Jn=A('<svg><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></svg>',!1,!0),qn=H(()=>[Yn(),Jn()],"Person");function Qn(n){return v("MuiListItemAvatar",n)}a(Qn,"getListItemAvatarUtilityClass");f("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Zn=D()({name:"MuiListItemAvatar",selfPropNames:["alignItems","children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:Qn,slotClasses:n=>({root:["root",n.alignItems==="flex-start"&&"alignItemsFlexStart"]})}),ne=m("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:n})=>({minWidth:56,flexShrink:0,...n.alignItems==="flex-start"&&{marginTop:8}})),N=Zn.component(a(function({allProps:e,classes:i,otherProps:o}){const r=kn(),l=c({get alignItems(){return r.alignItems}},e);return p(ne,c(o,{ownerState:l,get class(){return h(i.root,o.class)},get children(){return e.children}}))},"ListItemAvatar")),ee=B("<div><br>"),an=["username@gmail.com","user02@gmail.com"];function te(n){const e=a(()=>{n.onClose(n.selectedValue)},"handleClose"),i=a(o=>{n.onClose(o)},"handleListItemClick");return t(k,{onClose:e,get open(){return n.open},get children(){return[t(U,{children:"Set backup account"}),t(Y,{sx:{pt:0},get children(){return[J(()=>an.map(o=>t(I,{onClick:()=>i(o),disablePadding:!0,get children(){return t(y,{get children(){return[t(N,{get children(){return t(E,{get sx(){return{bgcolor:_[100],color:_[600]}},get children(){return t(qn,{})}})}}),t(P,{primary:o})]}})}}))),t(I,{onClick:()=>i("addAccount"),disablePadding:!0,get children(){return t(y,{autoFocus:!0,get children(){return[t(N,{get children(){return t(E,{get children(){return t(yn,{})}})}}),t(P,{primary:"Add account"})]}})}})]}})]}})}a(te,"SimpleDialog");function rn(){const[n,e]=b(!1),[i,o]=b(an[1]),r=a(()=>{e(!0)},"handleClickOpen"),l=a(s=>{e(!1),o(s)},"handleClose");return(()=>{const s=ee(),d=s.firstChild;return u(s,t(L,{variant:"subtitle1",component:"div",get children(){return["Selected: ",J(()=>i())]}}),d),u(s,t(g,{variant:"outlined",onClick:r,children:"Open simple dialog"}),null),u(s,t(te,{get selectedValue(){return i()},get open(){return n()},onClose:l}),null),s})()}a(rn,"SimpleDialogDemo");rn.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function ge(){return t(In,{get name(){return k.name},docsName:"lists",importInfo:["Dialog","DialogActions","DialogContent","DialogContentText","DialogTitle"],examples:[rn,en,tn,on]})}a(ge,"DialogPage");export{ge as default};
