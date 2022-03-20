import{c as L,d as b,B as v,L as s,g as m,K as l,e as c,f as d,D,N as I}from"./index.ae27f545.js";import{C as w}from"./ComponentInfo.6103a8aa.js";import{v as f,a as y,t as B,d as t}from"./vendor.6d0a7b46.js";import{M as u}from"./Mail.01c12464.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const S=f('<svg><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></svg>',4,!0);var p=L(()=>S.cloneNode(!0),"MoveToInbox");const k=f("<div></div>");function g(){const[a,h]=y({top:!1,left:!1,bottom:!1,right:!1}),o=(n,e)=>r=>{if(r.type==="keydown"){const i=r;if(i.key==="Tab"||i.key==="Shift")return}h({...a(),[n]:e})},x=n=>t(v,{sx:{width:n==="top"||n==="bottom"?"auto":250},role:"presentation",get onClick(){return o(n,!1)},get onKeyDown(){return o(n,!1)},get children(){return[t(s,{get children(){return["Inbox","Starred","Send email","Drafts"].map((e,r)=>t(m,{disablePadding:!0,get children(){return t(l,{get children(){return[t(c,{get children(){return r%2===0?t(p,{}):t(u,{})}}),t(d,{primary:e})]}})}}))}}),t(D,{}),t(s,{get children(){return["All mail","Trash","Spam"].map((e,r)=>t(m,{disablePadding:!0,get children(){return t(l,{get children(){return[t(c,{get children(){return r%2===0?t(p,{}):t(u,{})}}),t(d,{primary:e})]}})}}))}})]}});return(()=>{const n=k.cloneNode(!0);return B(n,()=>["left","right","top","bottom"].map(e=>[t(b,{get onClick(){return o(e,!0)},children:e}),t(I,{anchor:e,get open(){return a()[e]},sx:{zIndex:9999},get onClose(){return o(e,!1)},get children(){return x(e)}})])),n})()}g.code=`import MailIcon from "@suid/icons-material/Mail";
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
`;function K(){return t(w,{scope:"material",get name(){return I.name},docsName:"drawers",examples:[g]})}export{K as default};
