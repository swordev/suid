var i=Object.defineProperty;var o=(e,a)=>i(e,"name",{value:a,configurable:!0});import{H as r,J as p,I as m,M as s,T as l,d as u,B as c}from"./index.ed1b30b4.js";import{C as B}from"./ComponentInfo.009186fa.js";import{a as n}from"./vendor.37d14b95.js";import"./Link.9b4d9d27.js";import"./copyText.ca51de91.js";import"./PaperCode.3f9a0c8e.js";function t(){return n(c,{sx:{flexGrow:1},get children(){return n(r,{position:"static",get children(){return n(p,{get children(){return[n(m,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(s,{})}}),n(l,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(u,{color:"inherit",children:"Login"})]}})}})}})}o(t,"BasicAppBar");t.code=`import MenuIcon from "@suid/icons-material/Menu";
import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import IconButton from "@suid/material/IconButton";
import Toolbar from "@suid/material/Toolbar";
import Typography from "@suid/material/Typography";

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
`;function I(){return n(B,{get name(){return r.name},examples:[{bgcolor:"contrasted",component:t}]})}o(I,"AppBarPage");export{I as default};
