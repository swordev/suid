var y=Object.defineProperty;var a=(i,r)=>y(i,"name",{value:r,configurable:!0});import{c as D,t as g,a9 as v,a7 as w,Y as s,d as n,h as B,at as x,L as m,q as c,as as d,l as u,p,n as I,D as k,B as M}from"./index.9795753c.js";import{C as A}from"./ComponentInfo.69c4d456.js";import{M as f}from"./Mail.730e87d4.js";import"./Link.2927b89b.js";import"./copyText.9664b0a5.js";import"./PaperCode.55644e03.js";const T=g('<svg><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></svg>',4,!0),h=D(()=>T.cloneNode(!0),"MoveToInbox"),C=g("<div></div>");function b(){const i=v({top:!1,left:!1,bottom:!1,right:!1}),r=a((e,t)=>o=>{if(o.type==="keydown"){const l=o;if(l.key==="Tab"||l.key==="Shift")return}i[e]=t},"toggleDrawer"),L=a(e=>n(M,{sx:{width:e==="top"||e==="bottom"?"auto":250},role:"presentation",get onClick(){return r(e,!1)},get onKeyDown(){return r(e,!1)},get children(){return[n(m,{get children(){return s(()=>["Inbox","Starred","Send email","Drafts"],(t,o)=>n(c,{disablePadding:!0,get children(){return n(d,{get children(){return[n(u,{get children(){return p(()=>o()%2===0,!0)()?n(h,{}):n(f,{})}}),n(I,{primary:t})]}})}}))}}),n(k,{}),n(m,{get children(){return s(()=>["All mail","Trash","Spam"],(t,o)=>n(c,{disablePadding:!0,get children(){return n(d,{get children(){return[n(u,{get children(){return p(()=>o()%2===0,!0)()?n(h,{}):n(f,{})}}),n(I,{primary:t})]}})}}))}})]}}),"list");return(()=>{const e=C.cloneNode(!0);return w(e,()=>s(()=>["left","right","top","bottom"],t=>[n(B,{get onClick(){return r(t,!0)},children:t}),n(x,{anchor:t,get open(){return i[t]},sx:{zIndex:9999},get onClose(){return r(t,!1)},get children(){return L(t)}})])),e})()}a(b,"TemporaryDrawer");b.code=`import MailIcon from "@suid/icons-material/Mail";
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
`;function $(){return n(A,{scope:"material",get name(){return x.name},docsName:"drawers",examples:[b]})}a($,"DrawerPage");export{$ as default};
