var a=Object.defineProperty;var r=(o,m)=>a(o,"name",{value:m,configurable:!0});import{C as i}from"./ComponentInfo-3f416a39.js";import{b as t}from"./ListItemText-f1fd78c0.js";import{e as p,am as l,c as e}from"./ErrorPage-ac5239e5.js";import{T as c}from"./ThemeProvider-3d9bb0a7.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";const s=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function n(){return e(c,{theme:s,get children(){return[e(t,{children:"Primary"}),e(t,{color:"secondary",children:"Secondary"})]}})}r(n,"Example");n.code=`import { Button } from "@suid/material";
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
`;function E(){return e(i,{name:"Palette",importInfo:!1,moreExamples:!1,docsApiName:"customization/palette",examples:[n]})}r(E,"StyledPage");export{E as default};
