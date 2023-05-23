var m=Object.defineProperty;var n=(o,a)=>m(o,"name",{value:a,configurable:!0});import{C as i}from"./ComponentInfo-c32346de.js";import{a$ as p,b1 as l,d as e,h as r,b0 as s}from"./index-570dda9b.js";import"./Link-4c8cf3cb.js";import"./copyText-d7b508be.js";import"./PaperCode-1953c3c7.js";const c=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function t(){return e(s,{theme:c,get children(){return[e(r,{children:"Primary"}),e(r,{color:"secondary",children:"Secondary"})]}})}n(t,"Example");t.code=`import { Button } from "@suid/material";
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
`;function T(){return e(i,{name:"Palette",importInfo:!1,moreExamples:!1,docsApiName:"customization/palette",examples:[t]})}n(T,"StyledPage");export{T as default};
