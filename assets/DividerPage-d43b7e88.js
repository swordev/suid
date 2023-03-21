var h=Object.defineProperty;var e=(s,c)=>h(s,"name",{value:c,configurable:!0});import{k as n,m as r,l as i,D as m,L as g,B as o,d as x}from"./ListItemText-8378536b.js";import{C as b}from"./ComponentInfo-ca810fe5.js";import{g as y,c as t,a3 as l,T as a}from"./ErrorPage-8328033b.js";import{C as d}from"./Chip-8080527c.js";import{S as L}from"./copyText-7f7fdd67.js";import"./Link-35e0690e.js";import"./IconButton-b07a3030.js";import"./Paper-a16bc6e4.js";import"./PaperCode-37b8f2db.js";import"./PageNav-912c7d1d.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";function u(){const s=y();return t(g,{get sx(){return{width:"100%",maxWidth:360,bgcolor:s.palette.background.paper}},component:"nav","aria-label":"mailbox folders",disablePadding:!0,get children(){return[t(n,{disablePadding:!0,get children(){return t(r,{get children(){return t(i,{primary:"Inbox"})}})}}),t(m,{}),t(n,{disablePadding:!0,divider:!0,get children(){return t(r,{get children(){return t(i,{primary:"Drafts"})}})}}),t(n,{disablePadding:!0,get children(){return t(r,{get children(){return t(i,{primary:"Trash"})}})}}),t(m,{light:!0}),t(n,{disablePadding:!0,get children(){return t(r,{get children(){return t(i,{primary:"Spam"})}})}})]}})}e(u,"ListDividers");u.code=`import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@suid/material";
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
`;function p(){return t(o,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},get children(){return[t(o,{sx:{my:3,mx:2},get children(){return[t(l,{container:!0,sx:{alignItems:"center"},get children(){return[t(l,{item:!0,xs:!0,get children(){return t(a,{gutterBottom:!0,variant:"h4",component:"div",children:"Toothbrush"})}}),t(l,{item:!0,get children(){return t(a,{gutterBottom:!0,variant:"h6",component:"div",children:"$4.50"})}})]}}),t(a,{color:"text.secondary",variant:"body2",children:"Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall."})]}}),t(m,{variant:"middle"}),t(o,{sx:{m:2},get children(){return[t(a,{gutterBottom:!0,variant:"body1",children:"Select type"}),t(L,{direction:"row",spacing:1,get children(){return[t(d,{label:"Extra Soft"}),t(d,{color:"primary",label:"Soft"}),t(d,{label:"Medium"}),t(d,{label:"Hard"})]}})]}}),t(o,{sx:{mt:3,ml:1,mb:1},get children(){return t(x,{children:"Add to cart"})}})]}})}e(p,"MiddleDividers");p.code=`import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@suid/material";

export default function MiddleDividers() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Toothbrush
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Extra Soft" />
          <Chip color="primary" label="Soft" />
          <Chip label="Medium" />
          <Chip label="Hard" />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  );
}
`;function j(){return t(b,{get name(){return m.name},docsName:"dividers",examples:[u,{title:"Middle divider",component:p,bgcolor:"contrasted"}]})}e(j,"DividerPage");export{j as default};
