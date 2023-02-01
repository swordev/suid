var a=Object.defineProperty;var r=(o,m)=>a(o,"name",{value:m,configurable:!0});import{C as i}from"./ComponentInfo-ad863d1e.js";import{d as t}from"./ListItemText-4b7359c5.js";import{l as p,aq as l,c as e}from"./ErrorPage-5efa7331.js";import{T as c}from"./ThemeProvider-d81ebdef.js";import"./Link-1858147a.js";import"./copyText-cec38e2f.js";import"./IconButton-e9aa5297.js";import"./Paper-b94e5972.js";import"./PaperCode-9e9dd566.js";import"./PageNav-421e26ff.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-925e8b6f.js";import"./vite.config.ts-faa4c0cf.js";const s=p({palette:{primary:{main:l[500]},secondary:{main:"#11cb5f"}}});function n(){return e(c,{theme:s,get children(){return[e(t,{children:"Primary"}),e(t,{color:"secondary",children:"Secondary"})]}})}r(n,"Example");n.code=`import { Button } from "@suid/material";
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
