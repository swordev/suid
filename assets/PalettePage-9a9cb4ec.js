var a=Object.defineProperty;var r=(o,m)=>a(o,"name",{value:m,configurable:!0});import{C as i}from"./ComponentInfo-fb88dbff.js";import{b as t}from"./ListItemText-97540f66.js";import{e as p,am as l,c as e}from"./ErrorPage-7e24a11e.js";import{T as c}from"./ThemeProvider-aa6692ab.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const s=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function n(){return e(c,{theme:s,get children(){return[e(t,{children:"Primary"}),e(t,{color:"secondary",children:"Secondary"})]}})}r(n,"Example");n.code=`import { Button } from "@suid/material";
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
