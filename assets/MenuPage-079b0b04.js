var S=Object.defineProperty;var r=(i,t)=>S(i,"name",{value:t,configurable:!0});import{M as l,a as I,b as P}from"./MenuItem-70a85086.js";import{C as A}from"./ComponentInfo-3b79a7d2.js";import{c as u,t as e,a as g,d as n,T as h,I as x,B as $,D as b,l as d,H as m,h as k,n as p,P as H,q as B,a8 as _,L as w}from"./index-35a362a5.js";import{A as M}from"./Avatar-07ca0227.js";import"./Popover-e9ad1251.js";import"./Grow-b6526d8d.js";import"./Link-1db882b6.js";import"./copyText-5d9d4a78.js";import"./PaperCode-7498dd5e.js";const V=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),D=e('<svg><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></svg>',!1,!0),W=u(()=>[V(),D()],"Logout"),O=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),G=e('<svg><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></svg>',!1,!0),j=u(()=>[O(),G()],"PersonAdd"),U=e('<svg><g><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></svg>',!1,!0),N=u(()=>U(),"Settings");function L(){const[i,t]=g(null),o=r(()=>!!i(),"open"),a=r(()=>t(null),"handleClose");return[n($,{sx:{display:"flex",alignItems:"center",textAlign:"center"},get children(){return[n(h,{sx:{minWidth:100},children:"Contact"}),n(h,{sx:{minWidth:100},children:"Profile"}),n(x,{title:"Account settings",onClick:s=>t(s.currentTarget),size:"small",sx:{ml:2},get["aria-controls"](){return o()?"account-menu":void 0},"aria-haspopup":"true",get["aria-expanded"](){return o()?"true":void 0},get children(){return n(M,{sx:{width:32,height:32},children:"M"})}})]}}),n(I,{get anchorEl(){return i()},id:"account-menu",get open(){return o()},onClose:a,onClick:a,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,["& .MuiAvatar-root"]:{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},get children(){return[n(l,{get children(){return[n(M,{})," Profile"]}}),n(l,{get children(){return[n(M,{})," My account"]}}),n(b,{}),n(l,{get children(){return[n(d,{get children(){return n(j,{fontSize:"small"})}}),"Add another account"]}}),n(l,{get children(){return[n(d,{get children(){return n(N,{fontSize:"small"})}}),"Settings"]}}),n(l,{get children(){return[n(d,{get children(){return n(W,{fontSize:"small"})}}),"Logout"]}})]}})]}r(L,"AccountMenu");L.code=`import Logout from "@suid/icons-material/Logout";
import PersonAdd from "@suid/icons-material/PersonAdd";
import Settings from "@suid/icons-material/Settings";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
} from "@suid/material";
import { createSignal } from "solid-js";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>

        <IconButton
          title="Account settings"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open() ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open() ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
            }}
          >
            M
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl()}
        id="account-menu"
        open={open()}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ["& .MuiAvatar-root"]: {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
`;const X=e("<div>");function y(){const[i,t]=g(null),o=r(()=>!!i(),"open"),a=r(()=>{t(null)},"handleClose");return(()=>{const s=X();return m(s,n(k,{id:"basic-button",get["aria-controls"](){return o()?"basic-menu":void 0},"aria-haspopup":"true",get["aria-expanded"](){return o()?"true":void 0},onClick:c=>{t(c.currentTarget)},children:"Dashboard"}),null),m(s,n(I,{id:"basic-menu",get anchorEl(){return i()},get open(){return o()},onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},get children(){return[n(l,{onClick:a,children:"Profile"}),n(l,{onClick:a,children:"My account"}),n(l,{onClick:a,children:"Logout"})]}}),null),s})()}r(y,"BasicMenu");y.code=`import { Button, Menu, MenuItem } from "@suid/material";
import { createSignal } from "solid-js";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open() ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open() ? "true" : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
`;const Y=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),q=e('<svg><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></svg>',!1,!0),F=u(()=>[Y(),q()],"Cloud"),J=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),K=e('<svg><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></svg>',!1,!0),Q=u(()=>[J(),K()],"ContentCopy"),R=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),Z=e('<svg><circle cx="6" cy="18" fill="none" r="2"></svg>',!1,!0),nn=e('<svg><circle cx="12" cy="12" fill="none" r=".5"></svg>',!1,!0),en=e('<svg><circle cx="6" cy="6" fill="none" r="2"></svg>',!1,!0),tn=e('<svg><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></svg>',!1,!0),on=u(()=>[R(),Z(),nn(),en(),tn()],"ContentCut"),rn=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),ln=e('<svg><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></svg>',!1,!0),an=u(()=>[rn(),ln()],"ContentPaste");function z(){return n(H,{sx:{width:320,maxWidth:"100%"},get children(){return n(P,{get children(){return[n(l,{get children(){return[n(d,{get children(){return n(on,{fontSize:"small"})}}),n(p,{children:"Cut"}),n(h,{variant:"body2",color:"text.secondary",children:"⌘X"})]}}),n(l,{get children(){return[n(d,{get children(){return n(Q,{fontSize:"small"})}}),n(p,{children:"Copy"}),n(h,{variant:"body2",color:"text.secondary",children:"⌘C"})]}}),n(l,{get children(){return[n(d,{get children(){return n(an,{fontSize:"small"})}}),n(p,{children:"Paste"}),n(h,{variant:"body2",color:"text.secondary",children:"⌘V"})]}}),n(b,{}),n(l,{get children(){return[n(d,{get children(){return n(F,{fontSize:"small"})}}),n(p,{children:"Web Clipboard"})]}})]}})}})}r(z,"IconMenu");z.code=`import Cloud from "@suid/icons-material/Cloud";
import ContentCopy from "@suid/icons-material/ContentCopy";
import ContentCut from "@suid/icons-material/ContentCut";
import ContentPaste from "@suid/icons-material/ContentPaste";
import {
  Divider,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@suid/material";

export default function IconMenu() {
  return (
    <Paper
      sx={{
        width: 320,
        maxWidth: "100%",
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;const sn=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),cn=e('<svg><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></svg>',!1,!0),un=u(()=>[sn(),cn()],"MoreVert"),dn=e("<div>"),mn=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],pn=48;function E(){const[i,t]=g(null),o=r(()=>!!i(),"open"),a=r(()=>t(null),"handleClose");return(()=>{const s=dn();return m(s,n(x,{"aria-label":"more",id:"long-button",get["aria-controls"](){return o()?"long-menu":void 0},get["aria-expanded"](){return o()?"true":void 0},"aria-haspopup":"true",onClick:c=>t(c.currentTarget),get children(){return n(un,{})}}),null),m(s,n(I,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},get anchorEl(){return i()},get open(){return o()},onClose:a,PaperProps:{sx:{maxHeight:pn*4.5,width:"20ch"}},get children(){return mn.map(c=>n(l,{selected:c==="Pyxis",onClick:a,children:c}))}}),null),s})()}r(E,"LongMenu");E.code=`import MoreVertIcon from "@suid/icons-material/MoreVert";
import { Menu, MenuItem, IconButton } from "@suid/material";
import { createSignal } from "solid-js";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open() ? "long-menu" : undefined}
        aria-expanded={open() ? "true" : undefined}
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{ "aria-labelledby": "long-button" }}
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        PaperProps={{
          sx: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem selected={option === "Pyxis"} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;const hn=e("<div>"),C=["Show some love to MUI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function T(){const[i,t]=g(null),[o,a]=g(1),s=r(()=>!!i(),"open");return(()=>{const c=hn();return m(c,n(w,{component:"nav","aria-label":"Device settings",sx:{bgcolor:"background.paper"},get children(){return n(B,{get children(){return n(_,{id:"lock-button","aria-haspopup":"listbox","aria-controls":"lock-menu","aria-label":"when device is locked",get["aria-expanded"](){return s()?"true":void 0},onClick:f=>t(f.currentTarget),get children(){return n(p,{primary:"When device is locked",get secondary(){return C[o()]}})}})}})}}),null),m(c,n(I,{id:"lock-menu",get anchorEl(){return i()},get open(){return s()},onClose:()=>t(null),MenuListProps:{"aria-labelledby":"lock-button",role:"listbox"},get children(){return C.map((f,v)=>n(l,{disabled:v===0,get selected(){return v===o()},onClick:()=>{a(v),t(null)},children:f}))}}),null),c})()}r(T,"SimpleListMenu");T.code=`import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
  ListItemButton,
} from "@suid/material";
import { createSignal } from "solid-js";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = createSignal(1);
  const open = () => Boolean(anchorEl());

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItem>
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open() ? "true" : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          >
            <ListItemText
              primary="When device is locked"
              secondary={options[selectedIndex()]}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            disabled={index === 0}
            selected={index === selectedIndex()}
            onClick={() => {
              setSelectedIndex(index);
              setAnchorEl(null);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;function zn(){return n(A,{get name(){return I.name},importInfo:["Menu","MenuItem","MenuList"],examples:[y,z,T,L,E]})}r(zn,"MenuPage");export{zn as default};
