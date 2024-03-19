var le=Object.defineProperty;var a=(e,n)=>le(e,"name",{value:n,configurable:!0});import{a2 as re,N as f,O as v,f as D,Q as C,R as g,F as se,a5 as ce,L as E,u as de,V as T,m as r,h as t,K as pe,W as h,a7 as z,k as P,aL as ue,a3 as ge,a as b,E as p,z as u,t as m,ab as N,c as j,C as me,D as he,I as Ce,aj as X,af as y,ag as S,ah as L,ai as fe,ba as ve,b as K,bb as V}from"./index-B5iSJVVV.js";import{c as De}from"./createUniqueId-BS7H7ChJ.js";import{C as xe}from"./ComponentInfo-WIgDFu9h.js";import{A as be}from"./Add-DCAmSUK2.js";import{A as U}from"./Avatar-Bg_5itsD.js";import"./Link-CQQSYQVh.js";import"./copyText-CjKCtXoo.js";import"./PaperCode-BF82PL4L.js";const H=re({});function Te(e){return v("MuiDialog",e)}a(Te,"getDialogUtilityClass");const $=f("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),M=D()({name:"MuiDialog",selfPropNames:["aria-describedby","aria-labelledby","children","classes","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],utilityClass:Te,slotClasses:e=>({root:["root"],container:["container",`scroll${C(e.scroll)}`],paper:["paper",`paperScroll${C(e.scroll)}`,`paperWidth${C(String(e.maxWidth))}`,e.fullWidth&&"paperFullWidth",e.fullScreen&&"paperFullScreen"]})}),ke=g(se,{name:"MuiDialog",slot:"Backdrop"})({zIndex:-1}),Ie=g(ce,{name:"MuiDialog",slot:"Root",overridesResolver:(e,n)=>n.root})({"@media print":{position:"absolute !important"}}),ye=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.container,n[`scroll${C(i.scroll)}`]]}})(({ownerState:e})=>({height:"100%","@media print":{height:"auto"},outline:0,...e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},...e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}})),Se=g(E,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.paper,n[`scrollPaper${C(i.scroll)}`],n[`paperWidth${C(String(i.maxWidth))}`],i.fullWidth&&n.paperFullWidth,i.fullScreen&&n.paperFullScreen]}})(({theme:e,ownerState:n})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},...n.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},...n.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},...!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},...n.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${$.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...n.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[n.maxWidth]}${e.breakpoints.unit}`,[`&.${$.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[n.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},...n.fullWidth&&{width:"calc(100% - 64px)"},...n.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${$.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}})),k=M.defineComponent(a(function(n){const i=z(n),o=M.useThemeProps({props:n}),l=de(),s={get enter(){return l.transitions.duration.enteringScreen},get exit(){return l.transitions.duration.leavingScreen}},[,c]=T(o,["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","class","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"]),d=r({disableEscapeKeyDown:!1,fullScreen:!1,fullWidth:!1,maxWidth:"sm",PaperComponent:E,PaperProps:{},scroll:"paper",TransitionComponent:pe,transitionDuration:s},o),I=d,B=M.useClasses(I);let A=null;const oe=a(x=>{A=x.target===x.currentTarget},"handleMouseDown"),ie=a(x=>{A&&(A=null,o.onBackdropClick&&o.onBackdropClick(x),o.onClose&&o.onClose(x,"backdropClick"))},"handleBackdropClick"),G=De(()=>o["aria-labelledby"]),ae={get titleId(){return G()}};return t(Ie,r({get class(){return h(B.root,o.class)},get BackdropProps(){return r({get transitionDuration(){return d.transitionDuration},get as(){return o.BackdropComponent}},()=>o.BackdropProps)},closeAfterTransition:!0,BackdropComponent:ke,get disableEscapeKeyDown(){return d.disableEscapeKeyDown},get onClose(){return o.onClose},get open(){return o.open},ref:i,onClick:ie,ownerState:I},c,{get children(){return t(d.TransitionComponent,r({appear:!0,get in(){return o.open},get timeout(){return d.transitionDuration}},()=>o.TransitionProps,{get children(){return t(ye,{get class(){return h(B.container)},onMouseDown:oe,ownerState:I,get children(){return t(Se,r({get component(){return d.PaperComponent},elevation:24,role:"dialog",get"aria-describedby"(){return o["aria-describedby"]},get"aria-labelledby"(){return G()}},()=>d.PaperProps,{get class(){return h(B.paper,d.PaperProps.class)},ownerState:I,get children(){return t(H.Provider,{value:ae,get children(){return o.children}})}}))}})}}))}}))},"Dialog2"));function Le(e){return v("MuiDialogActions",e)}a(Le,"getDialogActionsUtilityClass");f("MuiDialogActions",["root","spacing"]);const W=D()({name:"MuiDialogActions",selfPropNames:["children","classes","disableSpacing"],utilityClass:Le,slotClasses:e=>({root:["root",!e.disableSpacing&&"spacing"]})}),Pe=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,!i.disableSpacing&&n.spacing]}})(({ownerState:e})=>({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",...!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),J=W.defineComponent(a(function(n){const i=W.useThemeProps({props:n}),[,o]=T(i,["class","disableSpacing"]),s=r({disableSpacing:!1},i),c=W.useClasses(s);return t(Pe,r({get class(){return h(c.root,i.class)},ownerState:s},o))},"DialogActions2"));function Be(e){return v("MuiDialogTitle",e)}a(Be,"getDialogTitleUtilityClass");const Ae=f("MuiDialogTitle",["root"]);function $e(e){return v("MuiDialogContent",e)}a($e,"getDialogContentUtilityClass");f("MuiDialogContent",["root","dividers"]);const O=D()({name:"MuiDialogContent",selfPropNames:["children","classes","dividers"],utilityClass:$e,slotClasses:e=>({root:["root",e.dividers&&"dividers"]})}),Me=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,i.dividers&&n.dividers]}})(({theme:e,ownerState:n})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",...n.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${Ae.root} + &`]:{paddingTop:0}}})),Y=O.defineComponent(a(function(n){const i=O.useThemeProps({props:n}),[,o]=T(i,["class","dividers"]),l=r({dividers:!1},i),s=r(i,{get dividers(){return l.dividers}}),c=O.useClasses(s);return t(Me,r({get class(){return h(c.root,i.class)},ownerState:s},o))},"DialogContent2"));function We(e){return v("MuiDialogContentText",e)}a(We,"getDialogContentTextUtilityClass");f("MuiDialogContentText",["root"]);const R=D()({name:"MuiDialogContentText",selfPropNames:["classes"],utilityClass:We,slotClasses:()=>({root:["root"]})}),Oe=g(P,{skipProps:ue.filter(e=>e!=="classes"),name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,n)=>n.root})({}),q=R.defineComponent(a(function(n){const i=z(n),o=R.useThemeProps({props:n}),[,l]=T(o,["children"]),s=R.useClasses(l);return t(Oe,r({variant:"body1",color:"text.secondary",ref:i,ownerState:l},o,{get component(){return o.component??"p"},classes:s}))},"DialogContentText2")),w=D()({name:"MuiDialogTitle",selfPropNames:["children","classes"],utilityClass:Be,slotClasses:()=>({root:["root"]})}),Re=g(P,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),F=w.defineComponent(a(function(n){const i=w.useThemeProps({props:n}),[,o]=T(i,["class","id"]),l=i,s=w.useClasses(l),c=ge(H),d=a(()=>c.titleId??i.id,"titleId");return t(Re,r({get class(){return h(s.root,i.class)},ownerState:l,variant:"h6",get id(){return d()}},o,{get component(){return i.component??"h2"}}))},"DialogTitle2"));var we=m("<div>");function Q(){const[e,n]=b(!1),i=a(()=>{n(!0)},"handleClickOpen"),o=a(()=>{n(!1)},"handleClose");return(()=>{var l=we();return p(l,t(u,{variant:"outlined",onClick:i,children:"Open alert dialog"}),null),p(l,t(k,{get open(){return e()},onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",get children(){return[t(F,{id:"alert-dialog-title",children:"Use Google's location service?"}),t(Y,{get children(){return t(q,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(J,{get children(){return[t(u,{onClick:o,children:"Disagree"}),t(u,{onClick:o,children:"Agree"})]}})]}}),null),l})()}a(Q,"AlertDialog");Q.code=`import {
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
`;var Fe=m("<div>");const Ge=a(function(n){return t(N,r({direction:"up"},n))},"Transition2");function Z(){const[e,n]=b(!1),i=a(()=>{n(!0)},"handleClickOpen"),o=a(()=>{n(!1)},"handleClose");return(()=>{var l=Fe();return p(l,t(u,{variant:"outlined",onClick:i,children:"Slide in alert dialog"}),null),p(l,t(k,{get open(){return e()},TransitionComponent:Ge,onClose:o,"aria-describedby":"alert-dialog-slide-description",get children(){return[t(F,{children:"Use Google's location service?"}),t(Y,{get children(){return t(q,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}}),t(J,{get children(){return[t(u,{onClick:o,children:"Disagree"}),t(u,{onClick:o,children:"Agree"})]}})]}}),null),l})()}a(Z,"AlertDialogSlide");Z.code=`import {
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
`;var Ve=m('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),Ue=m('<svg><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></svg>',!1,!0);const _e=j(()=>[Ve(),Ue()],"Close");var Ee=m("<div>");const ze=a(function(n){return t(N,r({direction:"up"},n))},"Transition2");function ee(){const[e,n]=b(!1),i=a(()=>{n(!0)},"handleClickOpen"),o=a(()=>{n(!1)},"handleClose");return(()=>{var l=Ee();return p(l,t(u,{variant:"outlined",onClick:i,children:"Open full-screen dialog"}),null),p(l,t(k,{fullScreen:!0,get open(){return e()},onClose:o,TransitionComponent:ze,get children(){return[t(me,{sx:{position:"relative"},get children(){return t(he,{get children(){return[t(Ce,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",get children(){return t(_e,{})}}),t(P,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Sound"}),t(u,{autofocus:!0,color:"inherit",onClick:o,children:"save"})]}})}}),t(X,{get children(){return[t(y,{disableGutters:!0,disablePadding:!0,get children(){return t(S,{get children(){return t(L,{primary:"Phone ringtone",secondary:"Titania"})}})}}),t(fe,{}),t(y,{disableGutters:!0,disablePadding:!0,get children(){return t(S,{get children(){return t(L,{primary:"Default notification ringtone",secondary:"Tethys"})}})}})]}})]}}),null),l})()}a(ee,"FullScreenDialog");ee.code=`import CloseIcon from "@suid/icons-material/Close";
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
`;var Ne=m('<svg><path d="M0 0h24v24H0z"fill=none></svg>',!1,!0),je=m('<svg><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></svg>',!1,!0);const Xe=j(()=>[Ne(),je()],"Person");function Ke(e){return v("MuiListItemAvatar",e)}a(Ke,"getListItemAvatarUtilityClass");f("MuiListItemAvatar",["root","alignItemsFlexStart"]);const He=D()({name:"MuiListItemAvatar",selfPropNames:["alignItems","children","classes"],propDefaults:({set:e})=>e({component:"div"}),utilityClass:Ke,slotClasses:e=>({root:["root",e.alignItems==="flex-start"&&"alignItemsFlexStart"]})}),Je=g("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,i.alignItems==="flex-start"&&n.alignItemsFlexStart]}})(({ownerState:e})=>({minWidth:56,flexShrink:0,...e.alignItems==="flex-start"&&{marginTop:8}})),_=He.component(a(function({allProps:n,classes:i,otherProps:o}){const l=ve(),s=r({get alignItems(){return l.alignItems}},n);return t(Je,r(o,{ownerState:s,get class(){return h(i.root,o.class)},get children(){return n.children}}))},"ListItemAvatar2"));var Ye=m("<div><br>");const ne=["username@gmail.com","user02@gmail.com"];function qe(e){const n=a(()=>{e.onClose(e.selectedValue)},"handleClose"),i=a(o=>{e.onClose(o)},"handleListItemClick");return t(k,{onClose:n,get open(){return e.open},get children(){return[t(F,{children:"Set backup account"}),t(X,{sx:{pt:0},get children(){return[K(()=>ne.map(o=>t(y,{onClick:()=>i(o),disablePadding:!0,get children(){return t(S,{get children(){return[t(_,{get children(){return t(U,{get sx(){return{bgcolor:V[100],color:V[600]}},get children(){return t(Xe,{})}})}}),t(L,{primary:o})]}})}}))),t(y,{onClick:()=>i("addAccount"),disablePadding:!0,get children(){return t(S,{autoFocus:!0,get children(){return[t(_,{get children(){return t(U,{get children(){return t(be,{})}})}}),t(L,{primary:"Add account"})]}})}})]}})]}})}a(qe,"SimpleDialog");function te(){const[e,n]=b(!1),[i,o]=b(ne[1]),l=a(()=>{n(!0)},"handleClickOpen"),s=a(c=>{n(!1),o(c)},"handleClose");return(()=>{var c=Ye(),d=c.firstChild;return p(c,t(P,{variant:"subtitle1",component:"div",get children(){return["Selected: ",K(()=>i())]}}),d),p(c,t(u,{variant:"outlined",onClick:l,children:"Open simple dialog"}),null),p(c,t(qe,{get selectedValue(){return i()},get open(){return e()},onClose:s}),null),c})()}a(te,"SimpleDialogDemo");te.code=`import AddIcon from "@suid/icons-material/Add";
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
`;function sn(){return t(xe,{get name(){return k.name},docsName:"lists",importInfo:["Dialog","DialogActions","DialogContent","DialogContentText","DialogTitle"],examples:[te,Q,Z,ee]})}a(sn,"DialogPage");export{sn as default};
