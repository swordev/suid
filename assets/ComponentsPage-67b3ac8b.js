var a=Object.defineProperty;var e=(o,r)=>a(o,"name",{value:r,configurable:!0});import{C as m}from"./ComponentInfo-e4c2edcd.js";import{a_ as p,d as t,h as i,a$ as s}from"./index-348f88e2.js";import"./Link-8d117d85.js";import"./copyText-6fc3e7c5.js";import"./PaperCode-884c7b1b.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function n(){return t(s,{theme:u,get children(){return t(i,{children:"Change default props"})}})}e(n,"DefaultPropsExample");n.code=`import { Button } from "@suid/material";
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
`;function B(){return t(m,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[n]})}e(B,"StyledPage");export{B as default};
