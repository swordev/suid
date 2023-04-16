var m=Object.defineProperty;var n=(o,a)=>m(o,"name",{value:a,configurable:!0});import{C as i}from"./ComponentInfo-bf8f3e44.js";import{aZ as p,a$ as l,d as e,h as r,a_ as s}from"./index-2ade038b.js";import"./Link-b969f3af.js";import"./copyText-64309802.js";import"./PaperCode-2146d787.js";import"./_commonjsHelpers-0119a68f.js";const c=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function t(){return e(s,{theme:c,get children(){return[e(r,{children:"Primary"}),e(r,{color:"secondary",children:"Secondary"})]}})}n(t,"Example");t.code=`import { Button } from "@suid/material";
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
`;function x(){return e(i,{name:"Palette",importInfo:!1,moreExamples:!1,docsApiName:"customization/palette",examples:[t]})}n(x,"StyledPage");export{x as default};
