var rn=Object.defineProperty;var a=(n,e)=>rn(n,"name",{value:e,configurable:!0});import{a2 as sn,E as f,H as v,J as D,K as C,Q as g,x as cn,a3 as dn,P as E,i as pn,R as T,m as r,d as t,F as un,O as h,a4 as z,T as L,a5 as gn,a6 as mn,a as b,w as p,h as u,t as m,a7 as N,c as X,r as hn,s as Cn,I as fn,L as j,q as I,a8 as y,n as P,D as vn,a9 as Dn,p as K,aa as U}from"./index-ba71f1a5.js";import{c as xn}from"./createUniqueId-7d2b2e2e.js";import{C as bn}from"./ComponentInfo-6b046eda.js";import{A as Tn}from"./Add-7c952db9.js";import{A as V}from"./Avatar-3ec1bc1c.js";import"./Link-16aa5afd.js";import"./copyText-cce9733d.js";import"./PaperCode-149ddac2.js";const H=sn({});function kn(n){return v("MuiDialog",n)}a(kn,"getDialogUtilityClass");const $=f("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),M=D()({name:"MuiDialog",selfPropNames:["aria-describedby","aria-labelledby","children","classes","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],utilityClass:kn,slotClasses:n=>({root:["root"],container:["container",`scroll${C(n.scroll)}`],paper:["paper",`paperScroll${C(n.scroll)}`,`paperWidth${C(String(n.maxWidth))}`,n.fullWidth&&"paperFullWidth",n.fullScreen&&"paperFullScreen"]})}),Sn=g(cn,{name:"MuiDialog",slot:"Backdrop"})({zIndex:-1}),In=g(dn,{name:"MuiDialog",slot:"Root",overridesResolver:(n,e)=>e.root})({"@media print":{position:"absolute !important"}}),yn=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.container,e[`scroll${C(i.scroll)}`]]}})(({ownerState:n})=>({height:"100%","@media print":{height:"auto"},outline:0,...n.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},...n.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}})),Pn=g(E,{name:"MuiDialog",slot:"Paper",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.paper,e[`scrollPaper${C(i.scroll)}`],e[`paperWidth${C(String(i.maxWidth))}`],i.fullWidth&&e.paperFullWidth,i.fullScreen&&e.paperFullScreen]}})(({theme:n,ownerState:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},...e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},...e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},...!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},...e.maxWidth==="xs"&&{maxWidth:n.breakpoints.unit==="px"?Math.max(n.breakpoints.values.xs,444):`${n.breakpoints.values.xs}${n.breakpoints.unit}`,[`&.${$.paperScrollBody}`]:{[n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...e.maxWidth!=="xs"&&{maxWidth:`${n.breakpoints.values[e.maxWidth]}${n.breakpoints.unit}`,[`&.${$.paperScrollBody}`]:{[n.breakpoints.down(n.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...e.fullWidth&&{width:"calc(100% - 64px)"},...e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${$.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}})),k=M.defineComponent(a(function(e){const i=z(e),o=M.useThemeProps({props:e}),l=pn(),s={get enter(){return l.transitions.duration.enteringScreen},get exit(){return l.transitions.duration.leavingScreen}},[,c]=T(o,["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","class","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),d=r({disableEscapeKeyDown:!1,fullScreen:!1,fullWidth:!1,maxWidth:"sm",PaperComponent:E,PaperProps:{},scroll:"paper",TransitionComponent:un,transitionDuration:s},o),S=d,B=M.useClasses(S);let A=null;const on=a(x=>{A=x.target===x.currentTarget},"handleMouseDown"),an=a(x=>{A&&(A=null,o.onBackdropClick&&o.onBackdropClick(x),o.onClose&&o.onClose(x,"backdropClick"))},"handleBackdropClick"),G=xn(()=>o["aria-labelledby"]),ln={get titleId(){return G()}};return t(In,r({get class(){return h(B.root,o.class)},get BackdropProps(){return r({get transitionDuration(){return d.transitionDuration},get as(){return o.BackdropComponent}},()=>o.BackdropProps)},closeAfterTransition:!0,BackdropComponent:Sn,get disableEscapeKeyDown(){return d.disableEscapeKeyDown},get onClose(){return o.onClose},get open(){return o.open},ref:i,onClick:an,ownerState:S},c,{get children(){return t(d.TransitionComponent,r({appear:!0,get in(){return o.open},get timeout(){return d.transitionDuration}},()=>o.TransitionProps,{get children(){return t(yn,{get class(){return h(B.container)},onMouseDown:on,ownerState:S,get children(){return t(Pn,r({get component(){return d.PaperComponent},elevation:24,role:"dialog",get["aria-describedby"](){return o["aria-describedby"]},get["aria-labelledby"](){return G()}},()=>d.PaperProps,{get class(){return h(B.paper,d.PaperProps.class)},ownerState:S,get children(){return t(H.Provider,{value:ln,get children(){return o.children}})}}))}})}}))}}))},"Dialog"));function Ln(n){return v("MuiDialogActions",n)}a(Ln,"getDialogActionsUtilityClass");f("MuiDialogActions",["root","spacing"]);const O=D()({name:"MuiDialogActions",selfPropNames:["children","classes","disableSpacing"],utilityClass:Ln,slotClasses:n=>({root:["root",!n.disableSpacing&&"spacing"]})}),Bn=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,!i.disableSpacing&&e.spacing]}})(({ownerState:n})=>({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",...!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),J=O.defineComponent(a(function(e){const i=O.useThemeProps({props:e}),[,o]=T(i,["class","disableSpacing"]),s=r({disableSpacing:!1},i),c=O.useClasses(s);return t(Bn,r({get class(){return h(c.root,i.class)},ownerState:s},o))},"DialogActions"));function An(n){return v("MuiDialogTitle",n)}a(An,"getDialogTitleUtilityClass");const $n=f("MuiDialogTitle",["root"]);function Mn(n){return v("MuiDialogContent",n)}a(Mn,"getDialogContentUtilityClass");f("MuiDialogContent",["root","dividers"]);const W=D()({name:"MuiDialogContent",selfPropNames:["children","classes","dividers"],utilityClass:Mn,slotClasses:n=>({root:["root",n.dividers&&"dividers"]})}),On=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.dividers&&e.dividers]}})(({theme:n,ownerState:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",...e.dividers?{padding:"16px 24px",borderTop:`1px solid ${n.palette.divider}`,borderBottom:`1px solid ${n.palette.divider}`}:{[`.${$n.root} + &`]:{paddingTop:0}}})),Y=W.defineComponent(a(function(e){const i=W.useThemeProps({props:e}),[,o]=T(i,["class","dividers"]),l=r({dividers:!1},i),s=r(i,{get dividers(){return l.dividers}}),c=W.useClasses(s);return t(On,r({get class(){return h(c.root,i.class)},ownerState:s},o))},"DialogContent"));function Wn(n){return v("MuiDialogContentText",n)}a(Wn,"getDialogContentTextUtilityClass");f("MuiDialogContentText",["root"]);const w=D()({name:"MuiDialogContentText",selfPropNames:["classes"],utilityClass:Wn,slotClasses:()=>({root:["root"]})}),wn=g(L,{skipProps:gn.filter(n=>n!=="classes"),name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,e)=>e.root})({}),q=w.defineComponent(a(function(e){const i=z(e),o=w.useThemeProps({props:e}),[,l]=T(o,["children"]),s=w.useClasses(l);return t(wn,r({variant:"body1",color:"text.secondary",ref:i,ownerState:l},o,{get component(){return o.component??"p"},classes:s}))},"DialogContentText")),R=D()({name:"MuiDialogTitle",selfPropNames:["children","classes"],utilityClass:An,slotClasses:()=>({root:["root"]})}),Rn=g(L,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(n,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),F=R.defineComponent(a(function(e){const i=R.useThemeProps({props:e}),[,o]=T(i,["class","id"]),l=i,s=R.useClasses(l),c=mn(H),d=a(()=>c.titleId??i.id,"titleId");return t(Rn,r({get class(){return h(s.root,i.class)},ownerState:l,variant:"h6",get id(){return d()}},o,{get component(){return i.component??"h2"}}))},"DialogTitle")),Fn=m("<div>");function Q(){const[n,e]=b(!1),i=a(()=>{e(!0)},"handleClickOpen"),o=a(()=>{e(!1)},"handleClose");return(()=>{const l=Fn();return p(l,t(u,{variant:"outlined",onClick:i,children:"Open alert dialog"}),null),p(l,t(k,{get open(){return n()},onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",get children(){return[t(F,{id:"alert-dialog-title",children:"Use Google's location service?"}),t(Y,{get children(){return t(q,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(J,{get children(){return[t(u,{onClick:o,children:"Disagree"}),t(u,{onClick:o,children:"Agree"})]}})]}}),null),l})()}a(Q,"AlertDialog");Q.code=`import {
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
`;const Gn=m("<div>"),Un=a(function(e){return t(N,r({direction:"up"},e))},"Transition");function Z(){const[n,e]=b(!1),i=a(()=>{e(!0)},"handleClickOpen"),o=a(()=>{e(!1)},"handleClose");return(()=>{const l=Gn();return p(l,t(u,{variant:"outlined",onClick:i,children:"Slide in alert dialog"}),null),p(l,t(k,{get open(){return n()},TransitionComponent:Un,onClose:o,"aria-describedby":"alert-dialog-slide-description",get children(){return[t(F,{children:"Use Google's location service?"}),t(Y,{get children(){return t(q,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(J,{get children(){return[t(u,{onClick:o,children:"Disagree"}),t(u,{onClick:o,children:"Agree"})]}})]}}),null),l})()}a(Z,"AlertDialogSlide");Z.code=`import {
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
`;const Vn=m('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),_n=m('<svg><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></svg>',!1,!0),En=X(()=>[Vn(),_n()],"Close"),zn=m("<div>"),Nn=a(function(e){return t(N,r({direction:"up"},e))},"Transition");function nn(){const[n,e]=b(!1),i=a(()=>{e(!0)},"handleClickOpen"),o=a(()=>{e(!1)},"handleClose");return(()=>{const l=zn();return p(l,t(u,{variant:"outlined",onClick:i,children:"Open full-screen dialog"}),null),p(l,t(k,{fullScreen:!0,get open(){return n()},onClose:o,TransitionComponent:Nn,get children(){return[t(hn,{sx:{position:"relative"},get children(){return t(Cn,{get children(){return[t(fn,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",get children(){return t(En,{})}}),t(L,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Sound"}),t(u,{autofocus:!0,color:"inherit",onClick:o,children:"save"})]}})}}),t(j,{get children(){return[t(I,{disableGutters:!0,disablePadding:!0,get children(){return t(y,{get children(){return t(P,{primary:"Phone ringtone",secondary:"Titania"})}})}}),t(vn,{}),t(I,{disableGutters:!0,disablePadding:!0,get children(){return t(y,{get children(){return t(P,{primary:"Default notification ringtone",secondary:"Tethys"})}})}})]}})]}}),null),l})()}a(nn,"FullScreenDialog");nn.code=`import CloseIcon from "@suid/icons-material/Close";
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
`;const Xn=m('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),jn=m('<svg><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></svg>',!1,!0),Kn=X(()=>[Xn(),jn()],"Person");function Hn(n){return v("MuiListItemAvatar",n)}a(Hn,"getListItemAvatarUtilityClass");f("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Jn=D()({name:"MuiListItemAvatar",selfPropNames:["alignItems","children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:Hn,slotClasses:n=>({root:["root",n.alignItems==="flex-start"&&"alignItemsFlexStart"]})}),Yn=g("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:i}=n;return[e.root,i.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({ownerState:n})=>({minWidth:56,flexShrink:0,...n.alignItems==="flex-start"&&{marginTop:8}})),_=Jn.component(a(function({allProps:e,classes:i,otherProps:o}){const l=Dn(),s=r({get alignItems(){return l.alignItems}},e);return t(Yn,r(o,{ownerState:s,get class(){return h(i.root,o.class)},get children(){return e.children}}))},"ListItemAvatar")),qn=m("<div><br>"),en=["username@gmail.com","user02@gmail.com"];function Qn(n){const e=a(()=>{n.onClose(n.selectedValue)},"handleClose"),i=a(o=>{n.onClose(o)},"handleListItemClick");return t(k,{onClose:e,get open(){return n.open},get children(){return[t(F,{children:"Set backup account"}),t(j,{sx:{pt:0},get children(){return[K(()=>en.map(o=>t(I,{onClick:()=>i(o),disablePadding:!0,get children(){return t(y,{get children(){return[t(_,{get children(){return t(V,{get sx(){return{bgcolor:U[100],color:U[600]}},get children(){return t(Kn,{})}})}}),t(P,{primary:o})]}})}}))),t(I,{onClick:()=>i("addAccount"),disablePadding:!0,get children(){return t(y,{autoFocus:!0,get children(){return[t(_,{get children(){return t(V,{get children(){return t(Tn,{})}})}}),t(P,{primary:"Add account"})]}})}})]}})]}})}a(Qn,"SimpleDialog");function tn(){const[n,e]=b(!1),[i,o]=b(en[1]),l=a(()=>{e(!0)},"handleClickOpen"),s=a(c=>{e(!1),o(c)},"handleClose");return(()=>{const c=qn(),d=c.firstChild;return p(c,t(L,{variant:"subtitle1",component:"div",get children(){return["Selected: ",K(()=>i())]}}),d),p(c,t(u,{variant:"outlined",onClick:l,children:"Open simple dialog"}),null),p(c,t(Qn,{get selectedValue(){return i()},get open(){return n()},onClose:s}),null),c})()}a(tn,"SimpleDialogDemo");tn.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function se(){return t(bn,{get name(){return k.name},docsName:"lists",importInfo:["Dialog","DialogActions","DialogContent","DialogContentText","DialogTitle"],examples:[tn,Q,Z,nn]})}a(se,"DialogPage");export{se as default};
