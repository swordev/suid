var x=Object.defineProperty;var a=(i,r)=>x(i,"name",{value:r,configurable:!0});import{c as b,t as L,ai as D,x as w,d as t,i as y,aj as f,e as v,L as l,r as m,af as c,n as d,p,D as B,B as k}from"./index-d23866de.js";import{C as M}from"./ComponentInfo-1aac651c.js";import{M as u}from"./Mail-da27a4db.js";import"./Link-af594e99.js";import"./copyText-288aae3f.js";import"./PaperCode-cf567731.js";import"./_commonjsHelpers-0119a68f.js";const T=L('<svg><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></svg>',!1,!0),I=b(()=>T(),"MoveToInbox"),C=v("<div>");function g(){const i=D({top:!1,left:!1,bottom:!1,right:!1}),r=a((e,n)=>o=>{if(o.type==="keydown"){const s=o;if(s.key==="Tab"||s.key==="Shift")return}i[e]=n},"toggleDrawer"),h=a(e=>t(k,{sx:{width:e==="top"||e==="bottom"?"auto":250},role:"presentation",get onClick(){return r(e,!1)},get onKeyDown(){return r(e,!1)},get children(){return[t(l,{get children(){return["Inbox","Starred","Send email","Drafts"].map((n,o)=>t(m,{disablePadding:!0,get children(){return t(c,{get children(){return[t(d,{get children(){return o%2===0?t(I,{}):t(u,{})}}),t(p,{primary:n})]}})}}))}}),t(B,{}),t(l,{get children(){return["All mail","Trash","Spam"].map((n,o)=>t(m,{disablePadding:!0,get children(){return t(c,{get children(){return[t(d,{get children(){return o%2===0?t(I,{}):t(u,{})}}),t(p,{primary:n})]}})}}))}})]}}),"list");return(()=>{const e=C();return w(e,()=>["left","right","top","bottom"].map(n=>[t(y,{get onClick(){return r(n,!0)},children:n}),t(f,{anchor:n,get open(){return i[n]},sx:{zIndex:9999},get onClose(){return r(n,!1)},get children(){return h(n)}})])),e})()}a(g,"TemporaryDrawer");g.code=`import MailIcon from "@suid/icons-material/Mail";
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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as Anchor[]).map((anchor) => (
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
      ))}
    </div>
  );
}
`;function N(){return t(M,{scope:"material",get name(){return f.name},docsName:"drawers",examples:[g]})}a(N,"DrawerPage");export{N as default};
