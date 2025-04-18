var a=Object.defineProperty;var e=(o,r)=>a(o,"name",{value:r,configurable:!0});import{C as m}from"./ComponentInfo-C3huals-.js";import{h as t,ad as p,z as s,ae as i}from"./index-NCmNIr1K.js";import"./Link-Ci3uEOYa.js";import"./copyText-C_G9kHbS.js";import"./PaperCode-BKLbHUJT.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function n(){return t(i,{theme:u,get children(){return t(s,{children:"Change default props"})}})}e(n,"DefaultPropsExample");n.code=`import { Button } from "@suid/material";
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
`;function B(){return t(m,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[n]})}e(B,"ComponentsPage");export{B as default};
