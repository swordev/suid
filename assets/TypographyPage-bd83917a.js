var a=Object.defineProperty;var e=(n,r)=>a(n,"name",{value:r,configurable:!0});import{c as t,T as i}from"./ErrorPage-7e24a11e.js";import{C as u}from"./ComponentInfo-fb88dbff.js";import{B as p}from"./ListItemText-97540f66.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function o(){return t(p,{sx:{width:"100%",maxWidth:500},get children(){return[t(i,{variant:"h1",component:"div",gutterBottom:!0,children:"h1. Heading"}),t(i,{variant:"h2",gutterBottom:!0,component:"div",children:"h2. Heading"}),t(i,{variant:"h3",gutterBottom:!0,component:"div",children:"h3. Heading"}),t(i,{variant:"h4",gutterBottom:!0,component:"div",children:"h4. Heading"}),t(i,{variant:"h5",gutterBottom:!0,component:"div",children:"h5. Heading"}),t(i,{variant:"h6",gutterBottom:!0,component:"div",children:"h6. Heading"}),t(i,{variant:"subtitle1",gutterBottom:!0,component:"div",children:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(i,{variant:"subtitle2",gutterBottom:!0,component:"div",children:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(i,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(i,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(i,{variant:"button",sx:{display:"block"},gutterBottom:!0,children:"button text"}),t(i,{variant:"caption",sx:{display:"block"},gutterBottom:!0,children:"caption text"}),t(i,{variant:"overline",sx:{display:"block"},gutterBottom:!0,children:"overline text"})]}})}e(o,"Types");o.code=`import { Box, Typography } from "@suid/material";

export default function Types() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" sx={{ display: "block" }} gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" sx={{ display: "block" }} gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" sx={{ display: "block" }} gutterBottom>
        overline text
      </Typography>
    </Box>
  );
}
`;function q(){return t(u,{get name(){return i.name},examples:[o]})}e(q,"TypographyPage");export{q as default};
