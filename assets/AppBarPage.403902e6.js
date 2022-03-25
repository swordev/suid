var i=Object.defineProperty;var o=(e,a)=>i(e,"name",{value:a,configurable:!0});import{J as r,K as p,I as m,M as u,T as l,d as s,B as c}from"./index.056b5311.js";import{C as B}from"./ComponentInfo.52981497.js";import{d as n}from"./vendor.5273475d.js";import"./copyText.224c2700.js";import"./PaperCode.9a1fe640.js";function t(){return n(c,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(m,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(u,{})}}),n(l,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(s,{color:"inherit",children:"Login"})]}})}})}})}o(t,"ButtonAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import IconButton from "@suid/material/IconButton";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";

export default function ButtonAppBar() {
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
`;function y(){return n(B,{get name(){return r.name},examples:[t]})}o(y,"AppBarPage");export{y as default};
