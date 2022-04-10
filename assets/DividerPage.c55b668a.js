var o=Object.defineProperty;var m=(r,d)=>o(r,"name",{value:d,configurable:!0});import{u,d as t,p as e,ao as i,l as n,D as a,L as l}from"./index.a75878e1.js";import{C as L}from"./ComponentInfo.26f944a3.js";import"./Link.2d5ee3c7.js";import"./copyText.4cc28f77.js";import"./PaperCode.c72d4bb9.js";function s(){const r=u();return t(l,{get sx(){return{width:"100%",maxWidth:360,bgcolor:r.palette.background.paper}},component:"nav","aria-label":"mailbox folders",disablePadding:!0,get children(){return[t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Inbox"})}})}}),t(a,{}),t(e,{disablePadding:!0,divider:!0,get children(){return t(i,{get children(){return t(n,{primary:"Drafts"})}})}}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Trash"})}})}}),t(a,{light:!0}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Spam"})}})}})]}})}m(s,"ListDividers");s.code=`import Divider from "@suid/material/Divider";
import List from "@suid/material/List";
import ListItem from "@suid/material/ListItem";
import ListItemButton from "@suid/material/ListItemButton";
import ListItemText from "@suid/material/ListItemText";
import useTheme from "@suid/material/styles/useTheme";

export default function ListDividers() {
  const theme = useTheme();
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: theme.palette.background.paper,
      }}
      component="nav"
      aria-label="mailbox folders"
      disablePadding
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding divider>
        <ListItemButton>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Trash" />
        </ListItemButton>
      </ListItem>
      <Divider light />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Spam" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
`;function f(){return t(L,{get name(){return a.name},docsName:"dividers",examples:[s]})}m(f,"DividerPage");export{f as default};
