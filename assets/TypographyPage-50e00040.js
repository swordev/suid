var u=Object.defineProperty;var n=(r,a)=>u(r,"name",{value:a,configurable:!0});import{aZ as p,d as t,T as e,a_ as s,B as m}from"./index-308e1143.js";import{C as d}from"./ComponentInfo-957c5db2.js";import"./Link-331b52ef.js";import"./copyText-30030021.js";import"./PaperCode-dee739b3.js";import"./_commonjsHelpers-0119a68f.js";const c=p({typography:{poster:{fontSize:64,color:"red"}},components:{MuiTypography:{defaultProps:{variantMapping:{poster:"h1"}}}}});function o(){return t(s,{theme:c,get children(){return t(e,{variant:"poster",children:"poster"})}})}n(o,"CustomVariant");o.code=`import { Typography, createTheme } from "@suid/material";
import { StyledProps, ThemeProvider } from "@suid/material/styles";

declare module "@suid/material/styles" {
  interface TypographyVariants {
    poster: StyledProps;
  }

  interface TypographyVariantsOptions {
    poster?: StyledProps;
  }
}

declare module "@suid/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

const theme = createTheme({
  typography: {
    poster: {
      fontSize: 64,
      color: "red",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          poster: "h1",
        },
      },
    },
  },
});

export default function CustomVariant() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="poster">poster</Typography>
    </ThemeProvider>
  );
}
`;function i(){return t(m,{sx:{width:"100%",maxWidth:500},get children(){return[t(e,{variant:"h1",component:"div",gutterBottom:!0,children:"h1. Heading"}),t(e,{variant:"h2",gutterBottom:!0,component:"div",children:"h2. Heading"}),t(e,{variant:"h3",gutterBottom:!0,component:"div",children:"h3. Heading"}),t(e,{variant:"h4",gutterBottom:!0,component:"div",children:"h4. Heading"}),t(e,{variant:"h5",gutterBottom:!0,component:"div",children:"h5. Heading"}),t(e,{variant:"h6",gutterBottom:!0,component:"div",children:"h6. Heading"}),t(e,{variant:"subtitle1",gutterBottom:!0,component:"div",children:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(e,{variant:"subtitle2",gutterBottom:!0,component:"div",children:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(e,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(e,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(e,{variant:"button",sx:{display:"block"},gutterBottom:!0,children:"button text"}),t(e,{variant:"caption",sx:{display:"block"},gutterBottom:!0,children:"caption text"}),t(e,{variant:"overline",sx:{display:"block"},gutterBottom:!0,children:"overline text"})]}})}n(i,"Types");i.code=`import { Box, Typography } from "@suid/material";

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
`;function B(){return t(d,{get name(){return e.name},examples:[i,o]})}n(B,"TypographyPage");export{B as default};
