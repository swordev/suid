var d=Object.defineProperty;var n=(p,g)=>d(p,"name",{value:g,configurable:!0});import{A as a}from"./Avatar-fb01ca34.js";import{C as u}from"./ComponentInfo-56622be5.js";import{S as r}from"./copyText-255cfa2c.js";import{d as t,c as v,t as e,v as f}from"./index-14be0450.js";import"./Link-f2dba49b.js";import"./PaperCode-7142a767.js";import"./_commonjsHelpers-0119a68f.js";const l={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},i={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"};function c(){return t(r,{direction:"row",spacing:2,get children(){return[t(a,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg"}),t(a,{alt:"Travis Howard",src:"https://mui.com/static/images/avatar/2.jpg"}),t(a,{alt:"Cindy Baker",src:"https://mui.com/static/images/avatar/3.jpg"})]}})}n(c,"ImageAvatars");c.code=`import { Avatar, Stack } from "@suid/material";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://mui.com/static/images/avatar/2.jpg"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
      />
    </Stack>
  );
}
`;function s(){return t(r,{direction:"row",spacing:2,get children(){return[t(a,{children:"H"}),t(a,{get sx(){return{bgcolor:i[500]}},children:"N"}),t(a,{get sx(){return{bgcolor:l[500]}},children:"OP"})]}})}n(s,"LetterAvatars");s.code=`import { Avatar, Stack } from "@suid/material";
import { deepOrange, deepPurple } from "@suid/material/colors";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
        }}
      >
        N
      </Avatar>
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
        }}
      >
        OP
      </Avatar>
    </Stack>
  );
}
`;function o(){return t(r,{direction:"row",spacing:2,get children(){return[t(a,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg",sx:{width:24,height:24}}),t(a,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg"}),t(a,{alt:"Remy Sharp",src:"https://mui.com/static/images/avatar/1.jpg",sx:{width:56,height:56}})]}})}n(o,"SizeImageAvatars");o.code=`import { Avatar, Stack } from "@suid/material";

export default function SizeImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{
          width: 24,
          height: 24,
        }}
      />
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{
          width: 56,
          height: 56,
        }}
      />
    </Stack>
  );
}
`;const h=e('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),A=e('<svg><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></svg>',!1,!0),S=v(()=>[h(),A()],"Assignment");function m(){return t(r,{direction:"row",spacing:2,get children(){return[t(a,{get sx(){return{bgcolor:i[500]}},variant:"square",children:"N"}),t(a,{get sx(){return{bgcolor:f[500]}},variant:"rounded",get children(){return t(S,{})}})]}})}n(m,"VariantAvatars");m.code=`import AssignmentIcon from "@suid/icons-material/Assignment";
import { Avatar, Stack } from "@suid/material";
import { deepOrange, green } from "@suid/material/colors";

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
        }}
        variant="square"
      >
        N
      </Avatar>
      <Avatar
        sx={{
          bgcolor: green[500],
        }}
        variant="rounded"
      >
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
`;function I(){return t(u,{get name(){return a.name},examples:[c,s,{title:"Sizes",component:o},{title:"Variants",component:m}]})}n(I,"AvatarPage");export{I as default};
