var m=Object.defineProperty;var e=(n,r)=>m(n,"name",{value:r,configurable:!0});import{C as p}from"./ComponentInfo-fb88dbff.js";import{b as a}from"./ListItemText-97540f66.js";import{e as i,c as t}from"./ErrorPage-7e24a11e.js";import{T as s}from"./ThemeProvider-aa6692ab.js";import"./Link-89c3f0b3.js";import"./copyText-fe3f5d44.js";import"./IconButton-72e073de.js";import"./Paper-355f0f45.js";import"./PaperCode-386a1ad7.js";import"./PageNav-9ce4881d.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const u=i({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function o(){return t(s,{theme:u,get children(){return t(a,{children:"Change default props"})}})}e(o,"DefaultPropsExample");o.code=`import { Button } from "@suid/material";
import { createTheme, ThemeProvider } from "@suid/material/styles";

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export default function DefaultPropsExample() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Change default props</Button>
    </ThemeProvider>
  );
}
`;function E(){return t(p,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[o]})}e(E,"StyledPage");export{E as default};
