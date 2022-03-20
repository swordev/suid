import{A as o,y as t,I as e,M as a,T as i,d as p,B as m}from"./index.ae27f545.js";import{C as u}from"./ComponentInfo.6103a8aa.js";import{d as n}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";function r(){return n(m,{sx:{flexGrow:1},get children(){return n(o,{position:"static",get children(){return n(t,{get children(){return[n(e,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},get children(){return n(a,{})}}),n(i,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),n(p,{color:"inherit",children:"Login"})]}})}})}})}r.code=`import MenuIcon from "@suid/icons-material/Menu";
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
`;function f(){return n(u,{get name(){return o.name},examples:[r]})}export{f as default};
