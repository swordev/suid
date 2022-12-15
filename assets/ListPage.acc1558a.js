var L=Object.defineProperty;var o=(a,e)=>L(a,"name",{value:e,configurable:!0});import{c as d,t as n,i as p,d as t,a6 as l,L as m,q as r,at as i,l as c,n as s,D as h,B as g}from"./index.587a1a49.js";import{C as f}from"./ComponentInfo.4db125cf.js";import"./Link.687f6c0c.js";import"./copyText.f7152695.js";import"./PaperCode.04f8488e.js";const x=n('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),b=n('<svg><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></svg>',4,!0),v=d(()=>[x.cloneNode(!0),b.cloneNode(!0)],"Drafts"),B=n('<svg><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></svg>',4,!0),D=d(()=>B.cloneNode(!0),"Inbox"),T=n('<nav aria-label="main mailbox folders"></nav>'),y=n('<nav aria-label="secondary mailbox folders"></nav>');function u(){const a=p();return t(g,{get sx(){return{width:"100%",maxWidth:360,bgcolor:a.palette.background.paper}},get children(){return[(()=>{const e=T.cloneNode(!0);return l(e,t(m,{get children(){return[t(r,{disablePadding:!0,get children(){return t(i,{get children(){return[t(c,{get children(){return t(D,{})}}),t(s,{primary:"Inbox"})]}})}}),t(r,{disablePadding:!0,get children(){return t(i,{get children(){return[t(c,{get children(){return t(v,{})}}),t(s,{primary:"Drafts"})]}})}})]}})),e})(),t(h,{}),(()=>{const e=y.cloneNode(!0);return l(e,t(m,{get children(){return[t(r,{disablePadding:!0,get children(){return t(i,{get children(){return t(s,{primary:"Trash"})}})}}),t(r,{disablePadding:!0,get children(){return t(i,{component:"a",href:"#simple-list",target:"none",onClick:I=>I.preventDefault(),get children(){return t(s,{primary:"Spam"})}})}})]}})),e})()]}})}o(u,"BasicList");u.code=`import DraftsIcon from "@suid/icons-material/Drafts";
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
`;function H(){return t(f,{get name(){return m.name},docsName:"lists",importInfo:["List","ListItem","ListItemAvatar","ListItemButton","ListItemIcon","ListItemSecondaryAction","ListItemText","ListSubheader"],examples:[u]})}o(H,"ListPage");export{H as default};
