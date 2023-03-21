var y=Object.defineProperty;var a=(i,r)=>y(i,"name",{value:r,configurable:!0});import{D as h}from"./Drawer-e4633e5a.js";import{C as D}from"./ComponentInfo-df3978bc.js";import{t as x,W as v,U as w,X as s,c as t,j as l}from"./ErrorPage-8328033b.js";import{M as c}from"./Mail-9b9de3e9.js";import{c as k,d as B,L as p,k as d,m as u,j as I,l as f,D as M,B as A}from"./ListItemText-2c02fa7d.js";import"./Modal-18eb6e79.js";import"./Backdrop-f1f1c47b.js";import"./Fade-0f478453.js";import"./Transition-4490bae5.js";import"./TransitionContext-51564be4.js";import"./Portal-66c87680.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Paper-a16bc6e4.js";import"./Slide-7fcd7a51.js";import"./debounce-60370e19.js";import"./Link-5f70a01e.js";import"./copyText-4715102c.js";import"./IconButton-cd66fd78.js";import"./PaperCode-76bb4bc5.js";import"./PageNav-6d63da47.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const T=x('<svg><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></svg>',4,!0),g=k(()=>T.cloneNode(!0),"MoveToInbox"),C=x("<div></div>",2);function b(){const i=v({top:!1,left:!1,bottom:!1,right:!1}),r=a((e,n)=>o=>{if(o.type==="keydown"){const m=o;if(m.key==="Tab"||m.key==="Shift")return}i[e]=n},"toggleDrawer"),L=a(e=>t(A,{sx:{width:e==="top"||e==="bottom"?"auto":250},role:"presentation",get onClick(){return r(e,!1)},get onKeyDown(){return r(e,!1)},get children(){return[t(p,{get children(){return s(()=>["Inbox","Starred","Send email","Drafts"],(n,o)=>t(d,{disablePadding:!0,get children(){return t(u,{get children(){return[t(I,{get children(){return l(()=>o()%2===0)()?t(g,{}):t(c,{})}}),t(f,{primary:n})]}})}}))}}),t(M,{}),t(p,{get children(){return s(()=>["All mail","Trash","Spam"],(n,o)=>t(d,{disablePadding:!0,get children(){return t(u,{get children(){return[t(I,{get children(){return l(()=>o()%2===0)()?t(g,{}):t(c,{})}}),t(f,{primary:n})]}})}}))}})]}}),"list");return(()=>{const e=C.cloneNode(!0);return w(e,()=>s(()=>["left","right","top","bottom"],n=>[t(B,{get onClick(){return r(n,!0)},children:n}),t(h,{anchor:n,get open(){return i[n]},sx:{zIndex:9999},get onClose(){return r(n,!1)},get children(){return L(n)}})])),e})()}a(b,"TemporaryDrawer");b.code=`import MailIcon from "@suid/icons-material/Mail";
import InboxIcon from "@suid/icons-material/MoveToInbox";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@suid/material";
import { DrawerProps } from "@suid/material/Drawer";
import { mapArray } from "solid-js";
import { createMutable } from "solid-js/store";

type Anchor = NonNullable<DrawerProps["anchor"]>;

export default function TemporaryDrawer() {
  const state = createMutable<{
    [K in Anchor]: boolean;
  }>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (event.type === "keydown") {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === "Tab" || keyboardEvent.key === "Shift")
          return;
      }
      state[anchor] = open;
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {mapArray(
          () => ["Inbox", "Starred", "Send email", "Drafts"],
          (text, index) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index() % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {mapArray(
          () => ["All mail", "Trash", "Spam"],
          (text, index) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index() % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {mapArray(
        () => ["left", "right", "top", "bottom"] as Anchor[],
        (anchor) => (
          <>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              sx={{ zIndex: 9999 }}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </>
        )
      )}
    </div>
  );
}
`;function et(){return t(D,{scope:"material",get name(){return h.name},docsName:"drawers",examples:[b]})}a(et,"DrawerPage");export{et as default};
