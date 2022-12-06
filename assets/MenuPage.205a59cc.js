var he=Object.defineProperty;var a=(e,t)=>he(e,"name",{value:t,configurable:!0});import{v as G,a4 as S,m as p,f as q,aC as J,X as ge,d as n,L as Q,ah as R,aD as O,aE as fe,r as Z,s as ee,x as H,an as ne,P as te,i as ve,p as be,E as oe,c as b,t as u,ag as Ie,z as A,aF as W,aG as K,aH as U,af as Me,aI as j,aJ as Ce,a as k,T as E,Q as re,B as xe,D as se,l as M,a6 as x,h as ye,n as T,q as Le,at as Pe}from"./index.28506464.js";import{P as Te}from"./Popover.a7672b40.js";import{C as Ee}from"./ComponentInfo.6ce91a5c.js";import{A as D}from"./Avatar.4e702b64.js";import"./Grow.ee160e36.js";import"./Link.d0d1f610.js";import"./copyText.f0626c1f.js";import"./PaperCode.4d4bb9ba.js";const ke=G()({name:"MuiMenuList",selfPropNames:["autoFocus","autoFocusItem","children","disabledItemsFocusable","disableListWrap","variant"]});function N(e,t,r){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:r?void 0:e.firstChild}a(N,"nextItem");function X(e,t,r){return e===t?r?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:r?void 0:e.lastChild}a(X,"previousItem");function ie(e,t){if(t===void 0)return!0;let r=e.innerText;return r===void 0&&(r=e.textContent??""),r=r.trim().toLowerCase(),r.length===0?!1:t.repeating?r[0]===t.keys[0]:r.indexOf(t.keys.join(""))===0}a(ie,"textCriteriaMatches");function L(e,t,r,s,i,o){let h=!1,c=i(e,t,t?r:!1);for(;c;){if(c===e.firstChild){if(h)return!1;h=!0}const f=s?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!ie(c,o)||f)c=i(e,c,r);else return c.focus(),!0}return!1}a(L,"moveFocus");const ae=ke.defineComponent(a(function(t){const r=R(t),[,s]=S(t,["autoFocus","autoFocusItem","children","class","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),i=p({autoFocus:!1,autoFocusItem:!1,disabledItemsFocusable:!1,disableListWrap:!1,variant:"selectedMenu"},t),o={keys:[],repeating:!0,previousKeyMatched:!0,lastTime:0};q(()=>{i.autoFocus&&r.current.focus()},[i.autoFocus]);const h=a(l=>{const d=r.current,g=l.key,I=fe(d).activeElement;if(g==="ArrowDown")l.preventDefault(),L(d,I,i.disableListWrap,i.disabledItemsFocusable,N);else if(g==="ArrowUp")l.preventDefault(),L(d,I,i.disableListWrap,i.disabledItemsFocusable,X);else if(g==="Home")l.preventDefault(),L(d,void 0,i.disableListWrap,i.disabledItemsFocusable,N);else if(g==="End")l.preventDefault(),L(d,void 0,i.disableListWrap,i.disabledItemsFocusable,X);else if(g.length===1){const y=g.toLowerCase(),$=performance.now();o.keys.length>0&&($-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&y!==o.keys[0]&&(o.repeating=!1)),o.lastTime=$,o.keys.push(y);const F=I&&!o.repeating&&ie(I,o);o.previousKeyMatched&&(F||L(d,I,!1,i.disabledItemsFocusable,N,o))?l.preventDefault():o.previousKeyMatched=!1}typeof t.onKeyDown=="function"&&t.onKeyDown(l)},"handleKeyDown"),c=J(()=>t.children),f=a(()=>{let l=-1,d=0;for(const g of c())O(g)&&(g.props.disabled||(i.variant==="selectedMenu"&&g.props.selected||l===-1)&&(l=d)),d++;return l},"activeItemIndex"),C=ge(c,(l,d)=>O(l)?n(l.Component,p(l.props,{get autoFocus(){if(d()===f()&&i.autoFocusItem)return!0},get tabIndex(){if(l.props.tabIndex===void 0&&d()===f()&&i.variant)return 0}})):l);return n(Q,p({role:"menu",ref:r,get class(){return t.class},onKeyDown:h,get tabIndex(){return i.autoFocus?0:-1}},s,{children:C}))},"MenuList"));function ze(e){return ee("MuiMenu",e)}a(ze,"getMenuUtilityClass");Z("MuiMenu",["root","paper","list"]);const _=G()({name:"MuiMenu",selfPropNames:["anchorEl","autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","open","PopoverClasses","transitionDuration","TransitionProps","variant"],utilityClass:ze,slotClasses:()=>({root:["root"],paper:["paper"],list:["list"]})}),$e={vertical:"top",horizontal:"right"},Ae={vertical:"top",horizontal:"left"},Se=H(Te,{skipProps:ne.filter(e=>e!=="classes"),name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),He=H(te,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Fe=H(ae,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),z=_.defineComponent(a(function(t){const r=R(t),s=_.useThemeProps({props:t}),[,i]=S(s,["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"]),o=p({autoFocus:!0,disableAutoFocusItem:!1,MenuListProps:{},PaperProps:{},transitionDuration:"auto",variant:"selectedMenu"},s),[,h]=S(p(()=>s.TransitionProps||{}),["onEntering"]),c=ve(),f=a(()=>c.direction==="rtl","isRtl"),C=p(o,{TransitionProps:h}),l=_.useClasses(C),d=a(()=>o.autoFocus&&!o.disableAutoFocusItem&&s.open,"autoFocusItem"),g=a(()=>{s.TransitionProps?.onEntering&&s.TransitionProps?.onEntering()},"handleEntering"),I=a(v=>{v.key==="Tab"&&(v.preventDefault(),s.onClose&&s.onClose(v,"tabKeyDown"))},"handleListKeyDown"),y=J(()=>s.children),$=a(()=>{let v=-1,w=0;for(const B of y())O(B)&&(B.props.disabled||(o.variant==="selectedMenu"&&B.props.selected||v===-1)&&(v=w)),w++;return v},"activeItemIndex"),F=p({component:He},()=>o.PaperProps,{classes:p(()=>o.PaperProps.classes,{get root(){return l.paper}})}),me=p({onEntering:g},h);return n(Se,p({get classes(){return s.PopoverClasses},get onClose(){return s.onClose},anchorOrigin:{vertical:"bottom",get horizontal(){return f()?"right":"left"}},get transformOrigin(){return f()?$e:Ae},PaperProps:F,get class(){return l.root},get open(){return s.open},ref:r,get transitionDuration(){return o.transitionDuration},TransitionProps:me,ownerState:C},i,{get children(){return n(Fe,p({onKeyDown:I,get autoFocus(){return be(()=>!!o.autoFocus)()&&($()===-1||o.disableAutoFocusItem)},get autoFocusItem(){return d()},get variant(){return o.variant}},()=>o.MenuListProps,{get class(){return oe(l.list,o.MenuListProps.class)},get children(){return y()}}))}}))},"Menu")),we=u('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Be=u('<svg><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>',4,!0),De=b(()=>[we.cloneNode(!0),Be.cloneNode(!0)],"Logout"),Ne=u('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),_e=u('<svg><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>',4,!0),Ve=b(()=>[Ne.cloneNode(!0),_e.cloneNode(!0)],"PersonAdd"),Oe=u('<svg><g><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path></g></svg>',8,!0),Ge=b(()=>Oe.cloneNode(!0),"Settings");function Re(e){return ee("MuiMenuItem",e)}a(Re,"getMenuItemUtilityClass");const P=Z("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),V=G()({name:"MuiMenuItem",selfPropNames:["autoFocus","classes","dense","disabled","disableGutters","divider","selected"],utilityClass:Re,slotClasses:e=>({root:["root",e.dense&&"dense",e.disabled&&"disabled",!e.disableGutters&&"gutters",e.divider&&"divider",e.selected&&"selected"]})}),We=H(Ie,{skipProps:ne.filter(e=>e!=="classes"),name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap",...!t.disableGutters&&{paddingLeft:16,paddingRight:16},...t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:A(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${P.selected}:hover`]:{backgroundColor:A(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:A(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${P.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${P.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`& + .${W.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${W.inset}`]:{marginLeft:52},[`& .${K.root}`]:{marginTop:0,marginBottom:0},[`& .${K.inset}`]:{paddingLeft:36},[`& .${U.root}`]:{minWidth:36},...!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},...t.dense&&{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${U.root} svg`]:{fontSize:"1.25rem"}}})),m=V.defineComponent(a(function(t){const r=R(t),s=V.useThemeProps({props:t}),[,i]=S(s,["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"]),o=p({autoFocus:!1,component:"li",dense:!1,divider:!1,disableGutters:!1,role:"menuitem"},s),h=Me(j),c={get dense(){return o.dense||h.dense||!1},get disableGutters(){return o.disableGutters}};q(()=>{o.autoFocus&&r.current&&Ce(()=>r.current.focus())});const f=p(s,{get dense(){return c.dense},get divider(){return o.divider},get disableGutters(){return o.disableGutters}}),C=V.useClasses(s),l=a(()=>{if(!s.disabled)return s.tabIndex!==void 0?s.tabIndex:-1},"tabIndex");return n(j.Provider,{value:c,get children(){return n(We,p({ref:r,get role(){return o.role},get tabIndex(){return l()},get component(){return o.component},get focusVisibleClassName(){return oe(f.classes?.focusVisible,s.focusVisibleClassName)}},i,{ownerState:f,classes:C}))}})},"MenuItem"));function le(){const[e,t]=k(null),r=a(()=>Boolean(e()),"open"),s=a(()=>t(null),"handleClose");return[n(xe,{sx:{display:"flex",alignItems:"center",textAlign:"center"},get children(){return[n(E,{sx:{minWidth:100},children:"Contact"}),n(E,{sx:{minWidth:100},children:"Profile"}),n(re,{title:"Account settings",onClick:i=>t(i.currentTarget),size:"small",sx:{ml:2},get["aria-controls"](){return r()?"account-menu":void 0},"aria-haspopup":"true",get["aria-expanded"](){return r()?"true":void 0},get children(){return n(D,{sx:{width:32,height:32},children:"M"})}})]}}),n(z,{get anchorEl(){return e()},id:"account-menu",get open(){return r()},onClose:s,onClick:s,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,["& .MuiAvatar-root"]:{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},get children(){return[n(m,{get children(){return[n(D,{})," Profile"]}}),n(m,{get children(){return[n(D,{})," My account"]}}),n(se,{}),n(m,{get children(){return[n(M,{get children(){return n(Ve,{fontSize:"small"})}}),"Add another account"]}}),n(m,{get children(){return[n(M,{get children(){return n(Ge,{fontSize:"small"})}}),"Settings"]}}),n(m,{get children(){return[n(M,{get children(){return n(De,{fontSize:"small"})}}),"Logout"]}})]}})]}a(le,"AccountMenu");le.code=`import Logout from "@suid/icons-material/Logout";
import PersonAdd from "@suid/icons-material/PersonAdd";
import Settings from "@suid/icons-material/Settings";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
} from "@suid/material";
import { createSignal } from "solid-js";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>

        <IconButton
          title="Account settings"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open() ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open() ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
            }}
          >
            M
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl()}
        id="account-menu"
        open={open()}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ["& .MuiAvatar-root"]: {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
`;const Ke=u("<div></div>");function ce(){const[e,t]=k(null),r=a(()=>Boolean(e()),"open"),s=a(()=>{t(null)},"handleClose");return(()=>{const i=Ke.cloneNode(!0);return x(i,n(ye,{id:"basic-button",get["aria-controls"](){return r()?"basic-menu":void 0},"aria-haspopup":"true",get["aria-expanded"](){return r()?"true":void 0},onClick:o=>{t(o.currentTarget)},children:"Dashboard"}),null),x(i,n(z,{id:"basic-menu",get anchorEl(){return e()},get open(){return r()},onClose:s,MenuListProps:{"aria-labelledby":"basic-button"},get children(){return[n(m,{onClick:s,children:"Profile"}),n(m,{onClick:s,children:"My account"}),n(m,{onClick:s,children:"Logout"})]}}),null),i})()}a(ce,"BasicMenu");ce.code=`import { Button, Menu, MenuItem } from "@suid/material";
import { createSignal } from "solid-js";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open() ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open() ? "true" : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
`;const Ue=u('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),je=u('<svg><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></svg>',4,!0),Xe=b(()=>[Ue.cloneNode(!0),je.cloneNode(!0)],"Cloud"),Ye=u('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),qe=u('<svg><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>',4,!0),Je=b(()=>[Ye.cloneNode(!0),qe.cloneNode(!0)],"ContentCopy"),Qe=u('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Ze=u('<svg><circle cx="6" cy="18" fill="none" r="2"></circle></svg>',4,!0),en=u('<svg><circle cx="12" cy="12" fill="none" r=".5"></circle></svg>',4,!0),nn=u('<svg><circle cx="6" cy="6" fill="none" r="2"></circle></svg>',4,!0),tn=u('<svg><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></svg>',4,!0),on=b(()=>[Qe.cloneNode(!0),Ze.cloneNode(!0),en.cloneNode(!0),nn.cloneNode(!0),tn.cloneNode(!0)],"ContentCut"),rn=u('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),sn=u('<svg><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></svg>',4,!0),an=b(()=>[rn.cloneNode(!0),sn.cloneNode(!0)],"ContentPaste");function ue(){return n(te,{sx:{width:320,maxWidth:"100%"},get children(){return n(ae,{get children(){return[n(m,{get children(){return[n(M,{get children(){return n(on,{fontSize:"small"})}}),n(T,{children:"Cut"}),n(E,{variant:"body2",color:"text.secondary",children:"\u2318X"})]}}),n(m,{get children(){return[n(M,{get children(){return n(Je,{fontSize:"small"})}}),n(T,{children:"Copy"}),n(E,{variant:"body2",color:"text.secondary",children:"\u2318C"})]}}),n(m,{get children(){return[n(M,{get children(){return n(an,{fontSize:"small"})}}),n(T,{children:"Paste"}),n(E,{variant:"body2",color:"text.secondary",children:"\u2318V"})]}}),n(se,{}),n(m,{get children(){return[n(M,{get children(){return n(Xe,{fontSize:"small"})}}),n(T,{children:"Web Clipboard"})]}})]}})}})}a(ue,"IconMenu");ue.code=`import Cloud from "@suid/icons-material/Cloud";
import ContentCopy from "@suid/icons-material/ContentCopy";
import ContentCut from "@suid/icons-material/ContentCut";
import ContentPaste from "@suid/icons-material/ContentPaste";
import {
  Divider,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@suid/material";

export default function IconMenu() {
  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: "100%",
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            \u2318X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            \u2318C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            \u2318V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;const ln=u('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),cn=u('<svg><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>',4,!0),un=b(()=>[ln.cloneNode(!0),cn.cloneNode(!0)],"MoreVert"),dn=u("<div></div>"),pn=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],mn=48;function de(){const[e,t]=k(null),r=a(()=>Boolean(e()),"open"),s=a(()=>t(null),"handleClose");return(()=>{const i=dn.cloneNode(!0);return x(i,n(re,{"aria-label":"more",id:"long-button",get["aria-controls"](){return r()?"long-menu":void 0},get["aria-expanded"](){return r()?"true":void 0},"aria-haspopup":"true",onClick:o=>t(o.currentTarget),get children(){return n(un,{})}}),null),x(i,n(z,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},get anchorEl(){return e()},get open(){return r()},onClose:s,PaperProps:{sx:{maxHeight:mn*4.5,width:"20ch"}},get children(){return pn.map(o=>n(m,{selected:o==="Pyxis",onClick:s,children:o}))}}),null),i})()}a(de,"LongMenu");de.code=`import MoreVertIcon from "@suid/icons-material/MoreVert";
import { Menu, MenuItem, IconButton } from "@suid/material";
import { createSignal } from "solid-js";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open() ? "long-menu" : undefined}
        aria-expanded={open() ? "true" : undefined}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{ "aria-labelledby": "long-button" }}
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        PaperProps={{
          sx: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem selected={option === "Pyxis"} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;const hn=u("<div></div>"),Y=["Show some love to MUI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function pe(){const[e,t]=k(null),[r,s]=k(1),i=a(()=>Boolean(e()),"open");return(()=>{const o=hn.cloneNode(!0);return x(o,n(Q,{component:"nav","aria-label":"Device settings",sx:{bgcolor:"background.paper"},get children(){return n(Le,{get children(){return n(Pe,{id:"lock-button","aria-haspopup":"listbox","aria-controls":"lock-menu","aria-label":"when device is locked",get["aria-expanded"](){return i()?"true":void 0},onClick:h=>t(h.currentTarget),get children(){return n(T,{primary:"When device is locked",get secondary(){return Y[r()]}})}})}})}}),null),x(o,n(z,{id:"lock-menu",get anchorEl(){return e()},get open(){return i()},onClose:()=>t(null),MenuListProps:{"aria-labelledby":"lock-button",role:"listbox"},get children(){return Y.map((h,c)=>n(m,{disabled:c===0,get selected(){return c===r()},onClick:()=>{s(c),t(null)},children:h}))}}),null),o})()}a(pe,"SimpleListMenu");pe.code=`import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
  ListItemButton,
} from "@suid/material";
import { createSignal } from "solid-js";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = createSignal(1);
  const open = () => Boolean(anchorEl());

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItem>
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open() ? "true" : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <ListItemText
              primary="When device is locked"
              secondary={options[selectedIndex()]}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            disabled={index === 0}
            selected={index === selectedIndex()}
            onClick={() => {
              setSelectedIndex(index);
              setAnchorEl(null);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;function Ln(){return n(Ee,{get name(){return z.name},importInfo:["Menu","MenuItem","MenuList"],examples:[ce,ue,pe,le,de]})}a(Ln,"MenuPage");export{Ln as default};
