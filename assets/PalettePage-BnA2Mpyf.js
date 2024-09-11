var p=Object.defineProperty;var r=(m,d)=>p(m,"name",{value:d,configurable:!0});import{C as s}from"./ComponentInfo-BBEqkhk-.js";import{ad as i,h as e,z as n,k as o,B as a,ae as c,av as u}from"./index-96nJ5ebr.js";import{S as t}from"./copyText-D9OMJUeU.js";import"./Link-BFVZF50d.js";import"./PaperCode-BS9cYccI.js";const g=i({palette:{ochre:{main:"#E3D026",light:"#E9DB5D",dark:"#A29415",contrastText:"#242105"}}});function h(){return e(c,{theme:g,get children(){return e(t,{gap:2,alignItems:"center",get children(){return[e(n,{variant:"contained",color:"ochre",children:"Ochre"}),e(t,{direction:"row",gap:1,get children(){return[e(t,{alignItems:"center",get children(){return[e(o,{variant:"body2",children:"light"}),e(a,{sx:{bgcolor:"ochre.light",width:40,height:20}})]}}),e(t,{alignItems:"center",get children(){return[e(o,{variant:"body2",children:"main"}),e(a,{sx:{bgcolor:"ochre.main",width:40,height:20}})]}}),e(t,{alignItems:"center",get children(){return[e(o,{variant:"body2",children:"dark"}),e(a,{sx:{bgcolor:"ochre.dark",width:40,height:20}})]}})]}})]}})}})}r(h,"CustomColor");h.code=`import { Typography, Box, Stack, Button } from "@suid/material";
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
`;const y=i({palette:{primary:{main:u[500]},secondary:{main:"#11cb5f"}}});function l(){return e(c,{theme:y,get children(){return[e(n,{children:"Primary"}),e(n,{color:"secondary",children:"Secondary"})]}})}r(l,"Example");l.code=`import { Button } from "@suid/material";
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
`;function v(){return e(s,{name:"Palette",importInfo:!1,moreExamples:!1,docsApiName:"customization/palette",examples:[l,h]})}r(v,"PalettePage");export{v as default};
