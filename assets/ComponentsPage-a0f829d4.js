var a=Object.defineProperty;var e=(o,r)=>a(o,"name",{value:r,configurable:!0});import{C as m}from"./ComponentInfo-ec7d4e09.js";import{a_ as p,d as t,h as i,a$ as s}from"./index-ce39997f.js";import"./Link-f29c2c89.js";import"./copyText-8c3d8b0c.js";import"./PaperCode-f97df180.js";const u=p({components:{MuiButtonBase:{defaultProps:{disableRipple:!0}}}});function n(){return t(s,{theme:u,get children(){return t(i,{children:"Change default props"})}})}e(n,"DefaultPropsExample");n.code=`import { Button } from "@suid/material";
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
