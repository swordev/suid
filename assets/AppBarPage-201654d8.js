var i=Object.defineProperty;var o=(e,a)=>i(e,"name",{value:a,configurable:!0});import{A as r,T as p}from"./AppBar-0a70e76c.js";import{C as m}from"./ComponentInfo-fb88dbff.js";import{M as c}from"./Menu-0161e89d.js";import{b as s,B as l}from"./ListItemText-97540f66.js";import{I as u}from"./IconButton-72e073de.js";import{c as n,T as B}from"./ErrorPage-7e24a11e.js";import"./Paper-355f0f45.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function t(){return n(l,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(u,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(c,{})}}),n(B,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(s,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
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
`;function C(){return n(m,{get name(){return r.name},examples:[{bgcolor:"contrasted",component:t}]})}o(C,"AppBarPage");export{C as default};
