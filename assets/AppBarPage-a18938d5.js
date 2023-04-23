var i=Object.defineProperty;var o=(e,a)=>i(e,"name",{value:a,configurable:!0});import{d as n,r,s as p,I as s,M as c,T as l,h as u,B as m}from"./index-348f88e2.js";import{C as B}from"./ComponentInfo-e4c2edcd.js";import"./Link-8d117d85.js";import"./copyText-6fc3e7c5.js";import"./PaperCode-884c7b1b.js";function t(){return n(m,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(s,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(c,{})}}),n(l,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(u,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@suid/material";

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
`;function T(){return n(B,{get name(){return r.name},examples:[{bgcolor:"contrasted",component:t}]})}o(T,"AppBarPage");export{T as default};
