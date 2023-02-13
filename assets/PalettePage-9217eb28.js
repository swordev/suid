var a=Object.defineProperty;var r=(o,m)=>a(o,"name",{value:m,configurable:!0});import{C as i}from"./ComponentInfo-fec5820b.js";import{d as t}from"./ListItemText-dfc8992a.js";import{l as p,aq as l,c as e}from"./ErrorPage-8beed0e1.js";import{T as c}from"./ThemeProvider-43e81a68.js";import"./Link-3859a10b.js";import"./copyText-d95d75bf.js";import"./IconButton-0456b81e.js";import"./Paper-e344694e.js";import"./PaperCode-74962817.js";import"./PageNav-c18acd6c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";const s=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function n(){return e(c,{theme:s,get children(){return[e(t,{children:"Primary"}),e(t,{color:"secondary",children:"Secondary"})]}})}r(n,"Example");n.code=`import { Button } from "@suid/material";
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
