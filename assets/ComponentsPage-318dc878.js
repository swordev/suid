var m=Object.defineProperty;var e=(n,r)=>m(n,"name",{value:r,configurable:!0});import{C as p}from"./ComponentInfo-866f98ce.js";import{d as a}from"./ListItemText-6803f35f.js";import{l as i,c as t}from"./ErrorPage-899a3c74.js";import{T as s}from"./ThemeProvider-bc5fcb10.js";import"./Link-a8ec2a4e.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./Paper-c50e815b.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const l=i({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function o(){return t(s,{theme:l,get children(){return t(a,{children:"Change default props"})}})}e(o,"DefaultPropsExample");o.code=`import { Button } from "@suid/material";
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
