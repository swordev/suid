var s=Object.defineProperty;var o=(t,i)=>s(t,"name",{value:i,configurable:!0});import{C as m}from"./ComponentInfo-5876f613.js";import{G as n}from"./ListItemText-7ae6925f.js";import{T as a}from"./ThemeProvider-c4a512dc.js";import{ap as c,c as e}from"./ErrorPage-e9c3e4c4.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const p=c({palette:{background:{paper:"#fff"},text:{primary:"#173A5E",secondary:"#46505A"},action:{active:"#001E3C"},success:{dark:"#009688"}}});function r(){return e(a,{theme:p,get children(){return e(n,{sx:{bgcolor:"background.paper",borderRadius:2,p:2,minWidth:300},get children(){return[e(n,{sx:{color:"text.secondary"},children:"Sessions"}),e(n,{sx:{color:"text.primary",fontSize:34,fontWeight:"medium"},children:"98.3 K"}),e(n,{sx:{color:"success.dark",display:"inline",fontWeight:"bold",mx:.5,fontSize:14},children:"+18.77%"}),e(n,{sx:{color:"text.secondary",display:"inline",fontSize:14},children:"vs. last week"})]}})}})}o(r,"Example");r.code=`import Box from "@suid/system/Box";
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
