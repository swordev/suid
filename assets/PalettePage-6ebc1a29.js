var a=Object.defineProperty;var r=(o,m)=>a(o,"name",{value:m,configurable:!0});import{C as i}from"./ComponentInfo-866f98ce.js";import{d as t}from"./ListItemText-6803f35f.js";import{l as p,as as l,c as e}from"./ErrorPage-899a3c74.js";import{T as s}from"./ThemeProvider-bc5fcb10.js";import"./Link-a8ec2a4e.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const c=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function n(){return e(s,{theme:c,get children(){return[e(t,{children:"Primary"}),e(t,{color:"secondary",children:"Secondary"})]}})}r(n,"Example");n.code=`import { Button } from "@suid/material";
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
