var m=Object.defineProperty;var e=(n,r)=>m(n,"name",{value:r,configurable:!0});import{C as p}from"./ComponentInfo-3f416a39.js";import{b as a}from"./ListItemText-f1fd78c0.js";import{e as i,c as t}from"./ErrorPage-ac5239e5.js";import{T as s}from"./ThemeProvider-3d9bb0a7.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./Paper-3e60930a.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";const u=i({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function o(){return t(s,{theme:u,get children(){return t(a,{children:"Change default props"})}})}e(o,"DefaultPropsExample");o.code=`import { Button } from "@suid/material";
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
