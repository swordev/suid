var b=Object.defineProperty;var o=(a,s)=>b(a,"name",{value:s,configurable:!0});import{c as v,d as D,B as w,L as l,g as c,K as d,e as u,f as p,D as y,N as g}from"./index.ef22901d.js";import{C as B}from"./ComponentInfo.8363f4df.js";import{t as h,a as S,r as k,d as t}from"./vendor.7f6460ea.js";import{M as I}from"./Mail.6470dccc.js";import"./copyText.22202dfa.js";import"./PaperCode.518557f3.js";const T=h('<svg><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></svg>',4,!0);var f=v(()=>T.cloneNode(!0),"MoveToInbox");const M=h("<div></div>");function x(){const[a,s]=S({top:!1,left:!1,bottom:!1,right:!1}),i=o((n,e)=>r=>{if(r.type==="keydown"){const m=r;if(m.key==="Tab"||m.key==="Shift")return}s({...a(),[n]:e})},"toggleDrawer"),L=o(n=>t(w,{sx:{width:n==="top"||n==="bottom"?"auto":250},role:"presentation",get onClick(){return i(n,!1)},get onKeyDown(){return i(n,!1)},get children(){return[t(l,{get children(){return["Inbox","Starred","Send email","Drafts"].map((e,r)=>t(c,{disablePadding:!0,get children(){return t(d,{get children(){return[t(u,{get children(){return r%2===0?t(f,{}):t(I,{})}}),t(p,{primary:e})]}})}}))}}),t(y,{}),t(l,{get children(){return["All mail","Trash","Spam"].map((e,r)=>t(c,{disablePadding:!0,get children(){return t(d,{get children(){return[t(u,{get children(){return r%2===0?t(f,{}):t(I,{})}}),t(p,{primary:e})]}})}}))}})]}}),"list");return(()=>{const n=M.cloneNode(!0);return k(n,()=>["left","right","top","bottom"].map(e=>[t(D,{get onClick(){return i(e,!0)},children:e}),t(g,{anchor:e,get open(){return a()[e]},sx:{zIndex:9999},get onClose(){return i(e,!1)},get children(){return L(e)}})])),n})()}o(x,"TemporaryDrawer");x.code=`import MailIcon from "@suid/icons-material/Mail";
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
import { createSignal } from "solid-js";

type Anchor = NonNullable<DrawerProps["anchor"]>;

export default function TemporaryDrawer() {
  const [state, setState] = createSignal<{
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
      setState({ ...state(), [anchor]: open });
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
            open={state()[anchor]}
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
`;function H(){return t(B,{scope:"material",get name(){return g.name},docsName:"drawers",examples:[x]})}o(H,"DrawerPage");export{H as default};
