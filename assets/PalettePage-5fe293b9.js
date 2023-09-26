var p=Object.defineProperty;var t=(l,d)=>p(l,"name",{value:d,configurable:!0});import{C as s}from"./ComponentInfo-3547844d.js";import{ad as i,h as e,z as a,k as r,B as o,ae as c,av as u}from"./index-5ff6d9be.js";import{S as n}from"./copyText-525d45c6.js";import"./Link-4d633cf7.js";import"./PaperCode-4f370aa8.js";const g=i({palette:{ochre:{main:"#E3D026",light:"#E9DB5D",dark:"#A29415",contrastText:"#242105"}}});function h(){return e(c,{theme:g,get children(){return e(n,{gap:2,alignItems:"center",get children(){return[e(a,{variant:"contained",color:"ochre",children:"Ochre"}),e(n,{direction:"row",gap:1,get children(){return[e(n,{alignItems:"center",get children(){return[e(r,{variant:"body2",children:"light"}),e(o,{sx:{bgcolor:"ochre.light",width:40,height:20}})]}}),e(n,{alignItems:"center",get children(){return[e(r,{variant:"body2",children:"main"}),e(o,{sx:{bgcolor:"ochre.main",width:40,height:20}})]}}),e(n,{alignItems:"center",get children(){return[e(r,{variant:"body2",children:"dark"}),e(o,{sx:{bgcolor:"ochre.dark",width:40,height:20}})]}})]}})]}})}})}t(h,"CustomColor");h.code=`import { Typography, Box, Stack, Button } from "@suid/material";
import { createTheme, ThemeProvider } from "@suid/material/styles";

// Augment the palette to include an ochre color
declare module "@suid/material/styles" {
  interface Palette {
    ochre: Palette["primary"];
  }

  interface PaletteOptions {
    ochre?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@suid/material/Button" {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default function CustomColor() {
  return (
    <ThemeProvider theme={theme}>
      <Stack gap={2} alignItems="center">
        <Button variant="contained" color="ochre">
          Ochre
        </Button>
        <Stack direction="row" gap={1}>
          <Stack alignItems="center">
            <Typography variant="body2">light</Typography>
            <Box sx={{ bgcolor: "ochre.light", width: 40, height: 20 }} />
          </Stack>
          <Stack alignItems="center">
            <Typography variant="body2">main</Typography>
            <Box sx={{ bgcolor: "ochre.main", width: 40, height: 20 }} />
          </Stack>
          <Stack alignItems="center">
            <Typography variant="body2">dark</Typography>
            <Box sx={{ bgcolor: "ochre.dark", width: 40, height: 20 }} />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
`;const y=i({palette:{primary:{main:u[500]},secondary:{main:"#11cb5f"}}});function m(){return e(c,{theme:y,get children(){return[e(a,{children:"Primary"}),e(a,{color:"secondary",children:"Secondary"})]}})}t(m,"Example");m.code=`import { Button } from "@suid/material";
import { purple } from "@suid/material/colors";
import { createTheme, ThemeProvider } from "@suid/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}
`;function v(){return e(s,{name:"Palette",importInfo:!1,moreExamples:!1,docsApiName:"customization/palette",examples:[m,h]})}t(v,"PalettePage");export{v as default};
