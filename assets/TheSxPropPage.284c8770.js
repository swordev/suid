var i=Object.defineProperty;var o=(t,s)=>i(t,"name",{value:s,configurable:!0});import{C as a}from"./ComponentInfo.9690dc55.js";import{a4 as m,a6 as n}from"./index.a8c55463.js";import{T as c}from"./ThemeProvider.28352d58.js";import{a as e}from"./vendor.37d14b95.js";import"./Link.e0f03574.js";import"./copyText.d7c92948.js";import"./PaperCode.924284b3.js";const d=m({palette:{background:{paper:"#fff"},text:{primary:"#173A5E",secondary:"#46505A"},action:{active:"#001E3C"},success:{dark:"#009688"}}});function r(){return e(c,{theme:d,get children(){return e(n,{sx:{bgcolor:"background.paper",borderRadius:2,p:2,minWidth:300},get children(){return[e(n,{sx:{color:"text.secondary"},children:"Sessions"}),e(n,{sx:{color:"text.primary",fontSize:34,fontWeight:"medium"},children:"98.3 K"}),e(n,{sx:{color:"success.dark",display:"inline",fontWeight:"bold",mx:.5,fontSize:14},children:"+18.77%"}),e(n,{sx:{color:"text.secondary",display:"inline",fontSize:14},children:"vs. last week"})]}})}})}o(r,"Example");r.code=`import Box from "@suid/system/Box";
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
`;function B(){return e(a,{importInfo:!1,name:"The sx prop",docsApiName:"system/the-sx-prop",moreExamples:!1,examples:[{bgcolor:"rgb(26, 32, 39)",component:r}]})}o(B,"TheSxPropPage");export{B as default};
