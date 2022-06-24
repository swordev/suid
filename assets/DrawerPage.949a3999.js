var y=Object.defineProperty;var a=(i,r)=>y(i,"name",{value:r,configurable:!0});import{c as v,t as g,ae as D,ab as w,a0 as s,d as t,h as B,B as k,L as l,p as c,au as d,k as u,n as p,l as I,D as M,av as x}from"./index.30c7ab8a.js";import{C as T}from"./ComponentInfo.ea6dbfc9.js";import{M as f}from"./Mail.0bf2e095.js";import"./Link.1ad6cfad.js";import"./copyText.4c537fad.js";import"./PaperCode.06945c94.js";const A=g('<svg><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></svg>',4,!0);var h=v(()=>A.cloneNode(!0),"MoveToInbox");const C=g("<div></div>");function L(){const i=D({top:!1,left:!1,bottom:!1,right:!1}),r=a((n,e)=>o=>{if(o.type==="keydown"){const m=o;if(m.key==="Tab"||m.key==="Shift")return}i[n]=e},"toggleDrawer"),b=a(n=>t(k,{sx:{width:n==="top"||n==="bottom"?"auto":250},role:"presentation",get onClick(){return r(n,!1)},get onKeyDown(){return r(n,!1)},get children(){return[t(l,{get children(){return s(()=>["Inbox","Starred","Send email","Drafts"],(e,o)=>t(c,{disablePadding:!0,get children(){return t(d,{get children(){return[t(u,{get children(){return p(()=>o()%2===0,!0)()?t(h,{}):t(f,{})}}),t(I,{primary:e})]}})}}))}}),t(M,{}),t(l,{get children(){return s(()=>["All mail","Trash","Spam"],(e,o)=>t(c,{disablePadding:!0,get children(){return t(d,{get children(){return[t(u,{get children(){return p(()=>o()%2===0,!0)()?t(h,{}):t(f,{})}}),t(I,{primary:e})]}})}}))}})]}}),"list");return(()=>{const n=C.cloneNode(!0);return w(n,()=>s(()=>["left","right","top","bottom"],e=>[t(B,{get onClick(){return r(e,!0)},children:e}),t(x,{anchor:e,get open(){return i[e]},sx:{zIndex:9999},get onClose(){return r(e,!1)},get children(){return b(e)}})])),n})()}a(L,"TemporaryDrawer");L.code=`import MailIcon from "@suid/icons-material/Mail";
import InboxIcon from "@suid/icons-material/MoveToInbox";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Divider from "@suid/material/Divider";
import Drawer, { DrawerProps } from "@suid/material/Drawer";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
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
`;function $(){return t(T,{scope:"material",get name(){return x.name},docsName:"drawers",examples:[L]})}a($,"DrawerPage");export{$ as default};
