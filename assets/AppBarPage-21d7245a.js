var a=Object.defineProperty;var o=(e,i)=>a(e,"name",{value:i,configurable:!0});import{A as r,T as p}from"./AppBar-b702fa18.js";import{C as m}from"./ComponentInfo-1975fef8.js";import{M as c}from"./Menu-3254e913.js";import{d as s,B as l}from"./ListItemText-f8fa2031.js";import{I as u}from"./IconButton-8fca2301.js";import{c as n,T as B}from"./ErrorPage-5efa7331.js";import"./Paper-b94e5972.js";import"./Link-3e81837a.js";import"./copyText-57789ef1.js";import"./PaperCode-13566785.js";import"./PageNav-3db91a50.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";function t(){return n(l,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(u,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(c,{})}}),n(B,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(s,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
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
`;function z(){return n(m,{get name(){return r.name},examples:[{bgcolor:"contrasted",component:t}]})}o(z,"AppBarPage");export{z as default};
