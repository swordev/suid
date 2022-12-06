var i=Object.defineProperty;var o=(e,a)=>i(e,"name",{value:a,configurable:!0});import{d as n,a0 as r,a1 as p,Q as s,a2 as c,T as l,h as u,B as m}from"./index.28506464.js";import{C as B}from"./ComponentInfo.6ce91a5c.js";import"./Link.d0d1f610.js";import"./copyText.f0626c1f.js";import"./PaperCode.4d4bb9ba.js";function t(){return n(m,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(s,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(c,{})}}),n(l,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(u,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
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
`;function y(){return n(B,{get name(){return r.name},examples:[{bgcolor:"contrasted",component:t}]})}o(y,"AppBarPage");export{y as default};
