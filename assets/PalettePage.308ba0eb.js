var m=Object.defineProperty;var n=(o,a)=>m(o,"name",{value:a,configurable:!0});import{C as i}from"./ComponentInfo.6ce91a5c.js";import{aT as p,aV as l,d as e,h as r,aU as s}from"./index.28506464.js";import"./Link.d0d1f610.js";import"./copyText.f0626c1f.js";import"./PaperCode.4d4bb9ba.js";const c=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function t(){return e(s,{theme:c,get children(){return[e(r,{children:"Primary"}),e(r,{color:"secondary",children:"Secondary"})]}})}n(t,"Example");t.code=`import { Button } from "@suid/material";
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
