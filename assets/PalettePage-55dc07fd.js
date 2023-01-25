var a=Object.defineProperty;var r=(o,m)=>a(o,"name",{value:m,configurable:!0});import{C as i}from"./ComponentInfo-0bebdfdd.js";import{d as t}from"./ListItemText-90f79698.js";import{l as p,ao as l,c as e}from"./ErrorPage-e9c3e4c4.js";import{T as c}from"./ThemeProvider-eefd435e.js";import"./Link-0e989b73.js";import"./copyText-94cbea7d.js";import"./IconButton-2fc4716d.js";import"./Paper-154b1d70.js";import"./PaperCode-3ff01054.js";import"./PageNav-5acb3c23.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";const s=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function n(){return e(c,{theme:s,get children(){return[e(t,{children:"Primary"}),e(t,{color:"secondary",children:"Secondary"})]}})}r(n,"Example");n.code=`import { Button } from "@suid/material";
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
`;function b(){return e(i,{name:"Palette",importInfo:!1,moreExamples:!1,docsApiName:"customization/palette",examples:[n]})}r(b,"StyledPage");export{b as default};
