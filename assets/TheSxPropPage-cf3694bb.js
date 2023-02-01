var s=Object.defineProperty;var o=(t,i)=>s(t,"name",{value:i,configurable:!0});import{C as m}from"./ComponentInfo-91f42892.js";import{G as n}from"./ListItemText-a46102d3.js";import{T as a}from"./ThemeProvider-27f2bf9f.js";import{ar as c,c as e}from"./ErrorPage-5efa7331.js";import"./Link-bbcecfa2.js";import"./copyText-47aa0270.js";import"./IconButton-4b14ca52.js";import"./Paper-b94e5972.js";import"./PaperCode-7dd2d056.js";import"./PageNav-f0077685.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-7d64fa3f.js";import"./vite.config.ts-faa4c0cf.js";const p=c({palette:{background:{paper:"#fff"},text:{primary:"#173A5E",secondary:"#46505A"},action:{active:"#001E3C"},success:{dark:"#009688"}}});function r(){return e(a,{theme:p,get children(){return e(n,{sx:{bgcolor:"background.paper",borderRadius:2,p:2,minWidth:300},get children(){return[e(n,{sx:{color:"text.secondary"},children:"Sessions"}),e(n,{sx:{color:"text.primary",fontSize:34,fontWeight:"medium"},children:"98.3 K"}),e(n,{sx:{color:"success.dark",display:"inline",fontWeight:"bold",mx:.5,fontSize:14},children:"+18.77%"}),e(n,{sx:{color:"text.secondary",display:"inline",fontSize:14},children:"vs. last week"})]}})}})}o(r,"Example");r.code=`import Box from "@suid/system/Box";
import ThemeProvider from "@suid/system/ThemeProvider";
import createTheme from "@suid/system/createTheme";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}
`;function E(){return e(m,{importInfo:!1,name:"The sx prop",docsApiName:"system/the-sx-prop",moreExamples:!1,examples:[{bgcolor:"rgb(26, 32, 39)",component:r}]})}o(E,"TheSxPropPage");export{E as default};
