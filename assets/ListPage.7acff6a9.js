var I=Object.defineProperty;var o=(a,e)=>I(a,"name",{value:e,configurable:!0});import{c,u as p,L as m,g as r,K as i,e as l,f as s,D as L,B as h}from"./index.75d72934.js";import{C as g}from"./ComponentInfo.62cc0227.js";import{v as n,d as t,t as d}from"./vendor.205a9879.js";import"./copyText.fc304b53.js";import"./PaperCode.de00a464.js";const f=n('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),x=n('<svg><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></svg>',4,!0);var b=c(()=>[f.cloneNode(!0),x.cloneNode(!0)],"Drafts");const v=n('<svg><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></svg>',4,!0);var B=c(()=>v.cloneNode(!0),"Inbox");const T=n('<nav aria-label="main mailbox folders"></nav>'),D=n('<nav aria-label="secondary mailbox folders"></nav>');function u(){const a=p();return t(h,{get sx(){return{width:"100%",maxWidth:360,bgcolor:a.palette.background.paper}},get children(){return[(()=>{const e=T.cloneNode(!0);return d(e,t(m,{get children(){return[t(r,{disablePadding:!0,get children(){return t(i,{get children(){return[t(l,{get children(){return t(B,{})}}),t(s,{primary:"Inbox"})]}})}}),t(r,{disablePadding:!0,get children(){return t(i,{get children(){return[t(l,{get children(){return t(b,{})}}),t(s,{primary:"Drafts"})]}})}})]}})),e})(),t(L,{}),(()=>{const e=D.cloneNode(!0);return d(e,t(m,{get children(){return[t(r,{disablePadding:!0,get children(){return t(i,{get children(){return t(s,{primary:"Trash"})}})}}),t(r,{disablePadding:!0,get children(){return t(i,{component:"a",href:"#simple-list",get children(){return t(s,{primary:"Spam"})}})}})]}})),e})()]}})}o(u,"BasicList");u.code=`import DraftsIcon from "@suid/icons-material/Drafts";
import InboxIcon from "@suid/icons-material/Inbox";
import Box from "@suid/material/Box";
import Divider from "@suid/material/Divider";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemIcon from "@suid/material/ListItemIcon";
import ListItemText from "@suid/material/ListItemText";
import useTheme from "@suid/material/styles/useTheme";

export default function BasicList() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
`;function H(){return t(g,{get name(){return m.name},docsName:"lists",examples:[u]})}o(H,"ListPage");export{H as default};
