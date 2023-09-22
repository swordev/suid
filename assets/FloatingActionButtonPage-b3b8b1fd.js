var m=Object.defineProperty;var t=(c,s)=>m(c,"name",{value:s,configurable:!0});import{F as a}from"./Fab-d4cbcacf.js";import{C as u}from"./ComponentInfo-8780e0e1.js";import{A as o}from"./Add-fb766eeb.js";import{d as n,B as r,c as i,t as e}from"./index-bcee7dfa.js";import{F as p}from"./Favorite-031f3297.js";import"./Link-a98a3ae6.js";import"./copyText-3bcac060.js";import"./PaperCode-7a86d555.js";function l(){return n(r,{sx:{"& > :not(style)":{m:1}},get children(){return[n(a,{size:"small",color:"secondary","aria-label":"add",get children(){return n(o,{})}}),n(a,{size:"medium",color:"secondary","aria-label":"add",get children(){return n(o,{})}}),n(a,{color:"secondary","aria-label":"add",get children(){return n(o,{})}})]}})}t(l,"FloatingActionButtonSize");l.code=`import AddIcon from "@suid/icons-material/Add";
import { Box, Fab } from "@suid/material";

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
`;const g=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),b=e('<svg><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></svg>',!1,!0),F=i(()=>[g(),b()],"Edit"),f=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),v=e('<svg><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></svg>',!1,!0),x=i(()=>[f(),v()],"Navigation");function d(){return n(r,{sx:{"& > :not(style)":{m:1}},get children(){return[n(a,{color:"primary","aria-label":"add",get children(){return n(o,{})}}),n(a,{color:"secondary","aria-label":"edit",get children(){return n(F,{})}}),n(a,{variant:"extended",get children(){return[n(x,{sx:{mr:1}}),"Navigate"]}}),n(a,{disabled:!0,"aria-label":"like",get children(){return n(p,{})}})]}})}t(d,"FloatingActionButtons");d.code=`import AddIcon from "@suid/icons-material/Add";
import EditIcon from "@suid/icons-material/Edit";
import FavoriteIcon from "@suid/icons-material/Favorite";
import NavigationIcon from "@suid/icons-material/Navigation";
import { Box, Fab } from "@suid/material";

export default function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
`;function M(){return n(u,{get name(){return a.name},examples:[{component:d,title:"Basic FAB"},{title:"Size",component:l}],docsName:"floating-action-button"})}t(M,"FloatingActionButtonPage");export{M as default};
