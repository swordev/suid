var h=Object.defineProperty;var e=(s,c)=>h(s,"name",{value:c,configurable:!0});import{u as g,d as t,p as r,au as i,l as n,D as m,L as x,B as o,G as l,T as a,h as b}from"./index.5507cd87.js";import{C as y}from"./ComponentInfo.c4cb0078.js";import{C as d}from"./Chip.25411f48.js";import{S as L}from"./copyText.9a56fddc.js";import"./Link.e6c05132.js";import"./PaperCode.e17e2a77.js";function u(){const s=g();return t(x,{get sx(){return{width:"100%",maxWidth:360,bgcolor:s.palette.background.paper}},component:"nav","aria-label":"mailbox folders",disablePadding:!0,get children(){return[t(r,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Inbox"})}})}}),t(m,{}),t(r,{disablePadding:!0,divider:!0,get children(){return t(i,{get children(){return t(n,{primary:"Drafts"})}})}}),t(r,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Trash"})}})}}),t(m,{light:!0}),t(r,{disablePadding:!0,get children(){return t(i,{get children(){return t(n,{primary:"Spam"})}})}})]}})}e(u,"ListDividers");u.code=`import Divider from "@suid/material/Divider";
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
`;function p(){return t(o,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},get children(){return[t(o,{sx:{my:3,mx:2},get children(){return[t(l,{container:!0,sx:{alignItems:"center"},get children(){return[t(l,{item:!0,xs:!0,get children(){return t(a,{gutterBottom:!0,variant:"h4",component:"div",children:"Toothbrush"})}}),t(l,{item:!0,get children(){return t(a,{gutterBottom:!0,variant:"h6",component:"div",children:"$4.50"})}})]}}),t(a,{color:"text.secondary",variant:"body2",children:"Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall."})]}}),t(m,{variant:"middle"}),t(o,{sx:{m:2},get children(){return[t(a,{gutterBottom:!0,variant:"body1",children:"Select type"}),t(L,{direction:"row",spacing:1,get children(){return[t(d,{label:"Extra Soft"}),t(d,{color:"primary",label:"Soft"}),t(d,{label:"Medium"}),t(d,{label:"Hard"})]}})]}}),t(o,{sx:{mt:3,ml:1,mb:1},get children(){return t(b,{children:"Add to cart"})}})]}})}e(p,"MiddleDividers");p.code=`import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Chip from "@suid/material/Chip";
import Divider from "@suid/material/Divider";
import Grid from "@suid/material/Grid";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";

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
`;function S(){return t(y,{get name(){return m.name},docsName:"dividers",examples:[u,{title:"Middle divider",component:p,bgcolor:"contrasted"}]})}e(S,"DividerPage");export{S as default};
