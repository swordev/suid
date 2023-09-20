var m=Object.defineProperty;var e=(o,r)=>m(o,"name",{value:r,configurable:!0});import{C as a}from"./ComponentInfo-f2cce80d.js";import{b2 as p,d as t,h as s,b3 as i}from"./index-4f3845ca.js";import"./Link-104b46b3.js";import"./copyText-6c23f4c9.js";import"./PaperCode-014a11cb.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function n(){return t(i,{theme:u,get children(){return t(s,{children:"Change default props"})}})}e(n,"DefaultPropsExample");n.code=`import { Button } from "@suid/material";
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
`;function B(){return t(a,{name:"Components",importInfo:!1,moreExamples:!1,docsApiName:"customization/components",examples:[n]})}e(B,"ComponentsPage");export{B as default};
