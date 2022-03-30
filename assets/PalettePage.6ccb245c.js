var m=Object.defineProperty;var n=(o,a)=>m(o,"name",{value:a,configurable:!0});import{C as i}from"./ComponentInfo.94932f37.js";import{a7 as p,a9 as l,d as r,a8 as s}from"./index.575706a7.js";import{a as e}from"./vendor.7d03e054.js";import"./Link.d3ce06b2.js";import"./copyText.ce384d40.js";import"./PaperCode.2d840087.js";const c=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function t(){return e(s,{theme:c,get children(){return[e(r,{children:"Primary"}),e(r,{color:"secondary",children:"Secondary"})]}})}n(t,"Example");t.code=`import Button from "@suid/material/Button";
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
