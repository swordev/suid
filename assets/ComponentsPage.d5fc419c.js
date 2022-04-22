var a=Object.defineProperty;var e=(o,r)=>a(o,"name",{value:r,configurable:!0});import{C as m}from"./ComponentInfo.e2cdfb54.js";import{aI as p,d as t,h as i,aJ as s}from"./index.831a2bb7.js";import"./Link.8891fd7e.js";import"./copyText.1a7d19e7.js";import"./PaperCode.905e1cd4.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function n(){return t(s,{theme:u,get children(){return t(i,{children:"Change default props"})}})}e(n,"DefaultPropsExample");n.code=`import Button from "@suid/material/Button";
import { createTheme, ThemeProvider } from "@suid/material/styles";

const theme = createTheme({
  components: {
    // Name of the component \u269B\uFE0F
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application \u{1F4A3}!
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
`;function P(){return t(m,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[n]})}e(P,"StyledPage");export{P as default};
