var a=Object.defineProperty;var e=(n,r)=>a(n,"name",{value:r,configurable:!0});import{C as m}from"./ComponentInfo.5f5b447b.js";import{a9 as p,d as i,aa as s}from"./index.90bba7b1.js";import{a as t}from"./vendor.37d14b95.js";import"./Link.cc833b14.js";import"./copyText.78cd2380.js";import"./PaperCode.759a44a2.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function o(){return t(s,{theme:u,get children(){return t(i,{children:"Change default props"})}})}e(o,"DefaultPropsExample");o.code=`import Button from "@suid/material/Button";
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
`;function T(){return t(m,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[o]})}e(T,"StyledPage");export{T as default};
