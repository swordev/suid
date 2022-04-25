var a=Object.defineProperty;var e=(o,r)=>a(o,"name",{value:r,configurable:!0});import{d as t,T as i,B as u}from"./index.a47904f5.js";import{C as p}from"./ComponentInfo.6570b779.js";import"./Link.0ea0b328.js";import"./copyText.16911af4.js";import"./PaperCode.b42d056f.js";function n(){return t(u,{sx:{width:"100%",maxWidth:500},get children(){return[t(i,{variant:"h1",component:"div",gutterBottom:!0,children:"h1. Heading"}),t(i,{variant:"h2",gutterBottom:!0,component:"div",children:"h2. Heading"}),t(i,{variant:"h3",gutterBottom:!0,component:"div",children:"h3. Heading"}),t(i,{variant:"h4",gutterBottom:!0,component:"div",children:"h4. Heading"}),t(i,{variant:"h5",gutterBottom:!0,component:"div",children:"h5. Heading"}),t(i,{variant:"h6",gutterBottom:!0,component:"div",children:"h6. Heading"}),t(i,{variant:"subtitle1",gutterBottom:!0,component:"div",children:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(i,{variant:"subtitle2",gutterBottom:!0,component:"div",children:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(i,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(i,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(i,{variant:"button",sx:{display:"block"},gutterBottom:!0,children:"button text"}),t(i,{variant:"caption",sx:{display:"block"},gutterBottom:!0,children:"caption text"}),t(i,{variant:"overline",sx:{display:"block"},gutterBottom:!0,children:"overline text"})]}})}e(n,"Types");n.code=`import Box from "@suid/material/Box";
import Typography from "@suid/material/Typography";

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
`;function y(){return t(p,{get name(){return i.name},examples:[n]})}e(y,"TypographyPage");export{y as default};
