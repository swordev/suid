var h=Object.defineProperty;var e=(m,c)=>h(m,"name",{value:c,configurable:!0});import{u as g,h as t,af as n,ag as r,ah as i,ai as s,aj as x,B as o,G as l,k as a,z as b}from"./index-B5iSJVVV.js";import{C as y}from"./ComponentInfo-WIgDFu9h.js";import{C as d}from"./Chip-gFzK1Bej.js";import{S as L}from"./copyText-CjKCtXoo.js";import"./Link-CQQSYQVh.js";import"./PaperCode-BF82PL4L.js";function u(){const m=g();return t(x,{get sx(){return{width:"100%",maxWidth:360,bgcolor:m.palette.background.paper}},component:"nav","aria-label":"mailbox folders",disablePadding:!0,get children(){return[t(n,{disablePadding:!0,get children(){return t(r,{get children(){return t(i,{primary:"Inbox"})}})}}),t(s,{}),t(n,{disablePadding:!0,divider:!0,get children(){return t(r,{get children(){return t(i,{primary:"Drafts"})}})}}),t(n,{disablePadding:!0,get children(){return t(r,{get children(){return t(i,{primary:"Trash"})}})}}),t(s,{light:!0}),t(n,{disablePadding:!0,get children(){return t(r,{get children(){return t(i,{primary:"Spam"})}})}})]}})}e(u,"ListDividers");u.code=`import {
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
`;function p(){return t(o,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},get children(){return[t(o,{sx:{my:3,mx:2},get children(){return[t(l,{container:!0,sx:{alignItems:"center"},get children(){return[t(l,{item:!0,xs:!0,get children(){return t(a,{gutterBottom:!0,variant:"h4",component:"div",children:"Toothbrush"})}}),t(l,{item:!0,get children(){return t(a,{gutterBottom:!0,variant:"h6",component:"div",children:"$4.50"})}})]}}),t(a,{color:"text.secondary",variant:"body2",children:"Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall."})]}}),t(s,{variant:"middle"}),t(o,{sx:{m:2},get children(){return[t(a,{gutterBottom:!0,variant:"body1",children:"Select type"}),t(L,{direction:"row",spacing:1,get children(){return[t(d,{label:"Extra Soft"}),t(d,{color:"primary",label:"Soft"}),t(d,{label:"Medium"}),t(d,{label:"Hard"})]}})]}}),t(o,{sx:{mt:3,ml:1,mb:1},get children(){return t(b,{children:"Add to cart"})}})]}})}e(p,"MiddleDividers");p.code=`import {
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
`;function P(){return t(y,{get name(){return s.name},docsName:"dividers",examples:[u,{title:"Middle divider",component:p,bgcolor:"contrasted"}]})}e(P,"DividerPage");export{P as default};
