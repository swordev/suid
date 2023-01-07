var i=Object.defineProperty;var o=(e,a)=>i(e,"name",{value:a,configurable:!0});import{A as r,T as p}from"./AppBar-53172a77.js";import{C as m}from"./ComponentInfo-3f416a39.js";import{M as c}from"./Menu-9086868c.js";import{b as s,B as l}from"./ListItemText-f1fd78c0.js";import{I as u}from"./IconButton-1112bc6d.js";import{c as n,T as B}from"./ErrorPage-ac5239e5.js";import"./Paper-3e60930a.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";function t(){return n(l,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(u,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(c,{})}}),n(B,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(s,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
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
