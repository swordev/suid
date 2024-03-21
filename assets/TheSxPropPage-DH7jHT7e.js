var c=Object.defineProperty;var r=(e,t)=>c(e,"name",{value:t,configurable:!0});import{C as x}from"./ComponentInfo-mgk8laeJ.js";import{E as i,h as n,B as s,t as a,ax as h,aV as o}from"./index-D9l_Mn70.js";import{T as u}from"./ThemeProvider-CkKystPx.js";import"./Link-B12NQrKQ.js";import"./copyText-BjaGQAll.js";import"./PaperCode-B8YngkRs.js";var f=a("<div>");function m(){return(()=>{var e=f();return i(e,n(s,{sx:{width:[100,200,300]},children:"This box has a responsive width."})),e})()}r(m,"BreakpointsAsArray");m.code=`import { Box } from "@suid/material";

export default function BreakpointsAsArray() {
  return (
    <div>
      <Box sx={{ width: [100, 200, 300] }}>
        This box has a responsive width.
      </Box>
    </div>
  );
}
`;var B=a("<div>");function d(){return(()=>{var e=B();return i(e,n(s,{sx:{width:{xs:100,sm:200,md:300,lg:400,xl:500}},children:"This box has a responsive width."})),e})()}r(d,"BreakpointsAsObject");d.code=`import { Box } from "@suid/material";

export default function BreakpointsAsObject() {
  return (
    <div>
      <Box
        sx={{
          width: {
            xs: 100, // theme.breakpoints.up('xs')
            sm: 200, // theme.breakpoints.up('sm')
            md: 300, // theme.breakpoints.up('md')
            lg: 400, // theme.breakpoints.up('lg')
            xl: 500, // theme.breakpoints.up('xl')
          },
        }}
      >
        This box has a responsive width.
      </Box>
    </div>
  );
}
`;const v=h({palette:{background:{paper:"#fff"},text:{primary:"#173A5E",secondary:"#46505A"},action:{active:"#001E3C"},success:{dark:"#009688"}}});function p(){return n(u,{theme:v,get children(){return n(o,{sx:{bgcolor:"background.paper",borderRadius:2,p:2,minWidth:300},get children(){return[n(o,{sx:{color:"text.secondary"},children:"Sessions"}),n(o,{sx:{color:"text.primary",fontSize:34,fontWeight:"medium"},children:"98.3 K"}),n(o,{sx:{color:"success.dark",display:"inline",fontWeight:"bold",mx:.5,fontSize:14},children:"+18.77%"}),n(o,{sx:{color:"text.secondary",display:"inline",fontSize:14},children:"vs. last week"})]}})}})}r(p,"Example");p.code=`import Box from "@suid/system/Box";
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
`;var b=a("<div>");function l(){return(()=>{var e=b();return i(e,n(s,{sx:{p:1,border:1,borderColor:t=>t.palette.primary.main},children:"Border color with theme value."})),e})()}r(l,"ValueAsFunction");l.code=`import { Box } from "@suid/material";
import { Theme } from "@suid/material/styles";

export default function ValueAsFunction() {
  return (
    <div>
      <Box
        sx={{
          p: 1,
          border: 1,
          borderColor: (theme: Theme) => theme.palette.primary.main,
        }}
      >
        Border color with theme value.
      </Box>
    </div>
  );
}
`;function $(){return n(x,{importInfo:!1,name:"The sx prop",docsApiName:"system/the-sx-prop",moreExamples:!1,examples:[{bgcolor:"rgb(26, 32, 39)",component:p},{title:"Breakpoints as an object",component:d},{title:"Breakpoints as an array",component:m},{title:"Value as function",component:l}]})}r($,"TheSxPropPage");export{$ as default};
