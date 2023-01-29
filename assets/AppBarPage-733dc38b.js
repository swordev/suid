var a=Object.defineProperty;var o=(e,i)=>a(e,"name",{value:i,configurable:!0});import{A as r,T as p}from"./AppBar-adf2e8b9.js";import{C as m}from"./ComponentInfo-f3f6ea7d.js";import{M as c}from"./Menu-8fb5afdf.js";import{d as s,B as l}from"./ListItemText-0fefb047.js";import{I as u}from"./IconButton-78ead2c8.js";import{c as n,T as B}from"./ErrorPage-50341dca.js";import"./Paper-992c85e1.js";import"./Link-09b4138b.js";import"./copyText-7f91c599.js";import"./PaperCode-12d52286.js";import"./PageNav-b6a8a27e.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";function t(){return n(l,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(u,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(c,{})}}),n(B,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(s,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
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
