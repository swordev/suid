var o=Object.defineProperty;var m=(n,d)=>o(n,"name",{value:d,configurable:!0});import{u,h as e,Y as i,g as r,D as a,L as l}from"./index.5b3b4b7a.js";import{C as L}from"./ComponentInfo.bede338e.js";import{a as t}from"./vendor.37d14b95.js";import"./Link.9626be27.js";import"./copyText.d14c4ac4.js";import"./PaperCode.cf41c2a7.js";function s(){const n=u();return t(l,{get sx(){return{width:"100%",maxWidth:360,bgcolor:n.palette.background.paper}},component:"nav","aria-label":"mailbox folders",disablePadding:!0,get children(){return[t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(r,{primary:"Inbox"})}})}}),t(a,{}),t(e,{disablePadding:!0,divider:!0,get children(){return t(i,{get children(){return t(r,{primary:"Drafts"})}})}}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(r,{primary:"Trash"})}})}}),t(a,{light:!0}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(r,{primary:"Spam"})}})}})]}})}m(s,"ListDividers");s.code=`import Divider from "@suid/material/Divider";
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
`;function x(){return t(L,{get name(){return a.name},docsName:"dividers",examples:[s]})}m(x,"DividerPage");export{x as default};
