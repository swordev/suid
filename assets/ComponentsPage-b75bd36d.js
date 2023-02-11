var m=Object.defineProperty;var e=(n,r)=>m(n,"name",{value:r,configurable:!0});import{C as p}from"./ComponentInfo-d01e77a6.js";import{d as a}from"./ListItemText-7861bce7.js";import{l as i,c as t}from"./ErrorPage-5efa7331.js";import{T as s}from"./ThemeProvider-d81ebdef.js";import"./Link-b6cacc18.js";import"./copyText-9e269238.js";import"./IconButton-7ca039fe.js";import"./Paper-b94e5972.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";const l=i({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function o(){return t(s,{theme:l,get children(){return t(a,{children:"Change default props"})}})}e(o,"DefaultPropsExample");o.code=`import { Button } from "@suid/material";
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
`;function b(){return t(p,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[o]})}e(b,"StyledPage");export{b as default};
