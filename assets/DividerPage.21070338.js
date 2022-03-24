var o=Object.defineProperty;var m=(n,d)=>o(n,"name",{value:d,configurable:!0});import{u,h as e,Q as i,g as r,D as s,L as l}from"./index.f8c435ad.js";import{C as L}from"./ComponentInfo.056394a0.js";import{d as t}from"./vendor.7f6460ea.js";import"./copyText.f8718ad2.js";import"./Grid.67791fa5.js";import"./PaperCode.7d7cfa10.js";import"./PageNav.b89c04b0.js";function a(){const n=u();return t(l,{get sx(){return{width:"100%",maxWidth:360,bgcolor:n.palette.background.paper}},component:"nav","aria-label":"mailbox folders",disablePadding:!0,get children(){return[t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(r,{primary:"Inbox"})}})}}),t(s,{}),t(e,{disablePadding:!0,divider:!0,get children(){return t(i,{get children(){return t(r,{primary:"Drafts"})}})}}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(r,{primary:"Trash"})}})}}),t(s,{light:!0}),t(e,{disablePadding:!0,get children(){return t(i,{get children(){return t(r,{primary:"Spam"})}})}})]}})}m(a,"ListDividers");a.code=`import Divider from "@suid/material/Divider";
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
`;function v(){return t(L,{get name(){return s.name},docsName:"dividers",examples:[a]})}m(v,"DividerPage");export{v as default};
