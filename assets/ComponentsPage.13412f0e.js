var a=Object.defineProperty;var e=(o,r)=>a(o,"name",{value:r,configurable:!0});import{C as m}from"./ComponentInfo.6ce91a5c.js";import{aT as p,d as t,h as i,aU as s}from"./index.28506464.js";import"./Link.d0d1f610.js";import"./copyText.f0626c1f.js";import"./PaperCode.4d4bb9ba.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function n(){return t(s,{theme:u,get children(){return t(i,{children:"Change default props"})}})}e(n,"DefaultPropsExample");n.code=`import { Button } from "@suid/material";
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
`;function T(){return t(m,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[n]})}e(T,"StyledPage");export{T as default};
