var p=Object.defineProperty;var a=(s,e)=>p(s,"name",{value:e,configurable:!0});import{c as d,t as m,j as g,d as t,x as l,L as o,r as n,af as i,n as c,p as r,D as h,B as f,e as I}from"./index-d23866de.js";import{C as x}from"./ComponentInfo-1aac651c.js";import"./Link-af594e99.js";import"./copyText-288aae3f.js";import"./PaperCode-cf567731.js";import"./_commonjsHelpers-0119a68f.js";const b=m('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),v=m('<svg><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></svg>',!1,!0),B=d(()=>[b(),v()],"Drafts"),D=m('<svg><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></svg>',!1,!0),T=d(()=>D(),"Inbox"),y=I('<nav aria-label="main mailbox folders">'),$=I('<nav aria-label="secondary mailbox folders">');function u(){const s=g();return t(f,{get sx(){return{width:"100%",maxWidth:360,bgcolor:s.palette.background.paper}},get children(){return[(()=>{const e=y();return l(e,t(o,{get children(){return[t(n,{disablePadding:!0,get children(){return t(i,{get children(){return[t(c,{get children(){return t(T,{})}}),t(r,{primary:"Inbox"})]}})}}),t(n,{disablePadding:!0,get children(){return t(i,{get children(){return[t(c,{get children(){return t(B,{})}}),t(r,{primary:"Drafts"})]}})}})]}})),e})(),t(h,{}),(()=>{const e=$();return l(e,t(o,{get children(){return[t(n,{disablePadding:!0,get children(){return t(i,{get children(){return t(r,{primary:"Trash"})}})}}),t(n,{disablePadding:!0,get children(){return t(i,{component:"a",href:"#simple-list",target:"none",onClick:L=>L.preventDefault(),get children(){return t(r,{primary:"Spam"})}})}})]}})),e})()]}})}a(u,"BasicList");u.code=`import DraftsIcon from "@suid/icons-material/Drafts";
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
`;function M(){return t(x,{get name(){return o.name},docsName:"lists",importInfo:["List","ListItem","ListItemAvatar","ListItemButton","ListItemIcon","ListItemSecondaryAction","ListItemText","ListSubheader"],examples:[u]})}a(M,"ListPage");export{M as default};
