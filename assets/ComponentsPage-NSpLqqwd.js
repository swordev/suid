var a=Object.defineProperty;var e=(o,r)=>a(o,"name",{value:r,configurable:!0});import{C as m}from"./ComponentInfo-jTCIm-7Z.js";import{h as t,ae as p,A as s,af as i}from"./index-D7AwU-U1.js";import"./Link-tFkyrfA8.js";import"./copyText-90UyT-ES.js";import"./PaperCode-DXdUlQ30.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function n(){return t(i,{theme:u,get children(){return t(s,{children:"Change default props"})}})}e(n,"DefaultPropsExample");n.code=`import { Button } from "@suid/material";
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
