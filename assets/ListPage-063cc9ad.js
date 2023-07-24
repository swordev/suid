var L=Object.defineProperty;var o=(a,e)=>L(a,"name",{value:e,configurable:!0});import{c as d,t as n,i as p,d as t,H as l,L as m,q as i,a8 as r,l as c,n as s,D as g,B as h}from"./index-49f50d70.js";import{C as f}from"./ComponentInfo-17077dbb.js";import"./Link-10140b2b.js";import"./copyText-0326100d.js";import"./PaperCode-790efa35.js";const x=n('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),b=n('<svg><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></svg>',!1,!0),v=d(()=>[x(),b()],"Drafts"),B=n('<svg><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></svg>',!1,!0),D=d(()=>B(),"Inbox"),T=n('<nav aria-label="main mailbox folders">'),y=n('<nav aria-label="secondary mailbox folders">');function I(){const a=p();return t(h,{get sx(){return{width:"100%",maxWidth:360,bgcolor:a.palette.background.paper}},get children(){return[(()=>{const e=T();return l(e,t(m,{get children(){return[t(i,{disablePadding:!0,get children(){return t(r,{get children(){return[t(c,{get children(){return t(D,{})}}),t(s,{primary:"Inbox"})]}})}}),t(i,{disablePadding:!0,get children(){return t(r,{get children(){return[t(c,{get children(){return t(v,{})}}),t(s,{primary:"Drafts"})]}})}})]}})),e})(),t(g,{}),(()=>{const e=y();return l(e,t(m,{get children(){return[t(i,{disablePadding:!0,get children(){return t(r,{get children(){return t(s,{primary:"Trash"})}})}}),t(i,{disablePadding:!0,get children(){return t(r,{component:"a",href:"#simple-list",target:"none",onClick:u=>u.preventDefault(),get children(){return t(s,{primary:"Spam"})}})}})]}})),e})()]}})}o(I,"BasicList");I.code=`import DraftsIcon from "@suid/icons-material/Drafts";
import InboxIcon from "@suid/icons-material/Inbox";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@suid/material";
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
            <ListItemButton<"a">
              component="a"
              href="#simple-list"
              target="none"
              onClick={(event) => event.preventDefault()}
            >
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
`;function S(){return t(f,{get name(){return m.name},docsName:"lists",importInfo:["List","ListItem","ListItemAvatar","ListItemButton","ListItemIcon","ListItemSecondaryAction","ListItemText","ListSubheader"],examples:[I]})}o(S,"ListPage");export{S as default};
