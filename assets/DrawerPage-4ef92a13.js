var b=Object.defineProperty;var a=(i,r)=>b(i,"name",{value:r,configurable:!0});import{D as f}from"./Drawer-d78d5613.js";import{C as L}from"./ComponentInfo-866f98ce.js";import{t as g,W as D,U as v,c as t}from"./ErrorPage-899a3c74.js";import{M as m}from"./Mail-8705ad61.js";import{c as w,d as y,L as l,k as c,m as p,j as d,l as u,D as k,B}from"./ListItemText-6803f35f.js";import"./Modal-922e4b76.js";import"./Backdrop-c6d4e425.js";import"./Fade-b713518c.js";import"./Transition-9315d1e9.js";import"./TransitionContext-bda86cd3.js";import"./Portal-7570d992.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Paper-c50e815b.js";import"./Slide-96ed08b1.js";import"./debounce-60370e19.js";import"./Link-a8ec2a4e.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const M=g('<svg><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></svg>',4,!0),I=w(()=>M.cloneNode(!0),"MoveToInbox"),T=g("<div></div>",2);function h(){const i=D({top:!1,left:!1,bottom:!1,right:!1}),r=a((e,n)=>o=>{if(o.type==="keydown"){const s=o;if(s.key==="Tab"||s.key==="Shift")return}i[e]=n},"toggleDrawer"),x=a(e=>t(B,{sx:{width:e==="top"||e==="bottom"?"auto":250},role:"presentation",get onClick(){return r(e,!1)},get onKeyDown(){return r(e,!1)},get children(){return[t(l,{get children(){return["Inbox","Starred","Send email","Drafts"].map((n,o)=>t(c,{disablePadding:!0,get children(){return t(p,{get children(){return[t(d,{get children(){return o%2===0?t(I,{}):t(m,{})}}),t(u,{primary:n})]}})}}))}}),t(k,{}),t(l,{get children(){return["All mail","Trash","Spam"].map((n,o)=>t(c,{disablePadding:!0,get children(){return t(p,{get children(){return[t(d,{get children(){return o%2===0?t(I,{}):t(m,{})}}),t(u,{primary:n})]}})}}))}})]}}),"list");return(()=>{const e=T.cloneNode(!0);return v(e,()=>["left","right","top","bottom"].map(n=>[t(y,{get onClick(){return r(n,!0)},children:n}),t(f,{anchor:n,get open(){return i[n]},sx:{zIndex:9999},get onClose(){return r(n,!1)},get children(){return x(n)}})])),e})()}a(h,"TemporaryDrawer");h.code=`import MailIcon from "@suid/icons-material/Mail";
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
`;function tt(){return t(L,{scope:"material",get name(){return f.name},docsName:"drawers",examples:[h]})}a(tt,"DrawerPage");export{tt as default};
