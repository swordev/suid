var a=Object.defineProperty;var o=(e,i)=>a(e,"name",{value:i,configurable:!0});import{A as r,T as p}from"./AppBar-1a938878.js";import{C as m}from"./ComponentInfo-ca810fe5.js";import{M as c}from"./Menu-557228a6.js";import{d as s,B as l}from"./ListItemText-8378536b.js";import{I as u}from"./IconButton-b07a3030.js";import{c as n,T as B}from"./ErrorPage-8328033b.js";import"./Paper-a16bc6e4.js";import"./Link-35e0690e.js";import"./copyText-7f7fdd67.js";import"./PaperCode-37b8f2db.js";import"./PageNav-912c7d1d.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-5f3892a8.js";import"./vite.config.ts-faa4c0cf.js";function t(){return n(l,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(u,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(c,{})}}),n(B,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(s,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
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
