var o=Object.defineProperty;var m=(r,d)=>o(r,"name",{value:d,configurable:!0});import{u,g as e,K as i,f as n,D as s,L as l}from"./index.92fa0107.js";import{C as L}from"./ComponentInfo.56c7f4e3.js";import{d as t}from"./vendor.7f6460ea.js";import"./copyText.5a395040.js";import"./PaperCode.b58d60ed.js";function a(){const r=u();return t(l,{get sx(){return{width:"100%",maxWidth:360,bgcolor:r.palette.background.paper}},component:"nav","aria-label":"mailbox folders",disablePadding:!0,get children(){return[t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Inbox"})}})}}),t(s,{}),t(e,{disablePadding:!0,divider:!0,get children(){return t(i,{get children(){return t(n,{primary:"Drafts"})}})}}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Trash"})}})}}),t(s,{light:!0}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Spam"})}})}})]}})}m(a,"ListDividers");a.code=`import Divider from "@suid/material/Divider";
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
`;function f(){return t(L,{get name(){return s.name},docsName:"dividers",examples:[a]})}m(f,"DividerPage");export{f as default};
