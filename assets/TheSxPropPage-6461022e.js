var l=Object.defineProperty;var o=(e,r)=>l(e,"name",{value:r,configurable:!0});import{C as x}from"./ComponentInfo-df3978bc.js";import{U as i,c as n,t as s,as as u}from"./ErrorPage-8328033b.js";import{B as a,G as t}from"./ListItemText-2c02fa7d.js";import{T as h}from"./ThemeProvider-662759b4.js";import"./Link-5f70a01e.js";import"./copyText-4715102c.js";import"./IconButton-cd66fd78.js";import"./Paper-a16bc6e4.js";import"./PaperCode-76bb4bc5.js";import"./PageNav-6d63da47.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const f=s("<div></div>",2);function m(){return(()=>{const e=f.cloneNode(!0);return i(e,n(a,{sx:{width:[100,200,300]},children:"This box has a responsive width."})),e})()}o(m,"BreakpointsAsArray");m.code=`import { Box } from "@suid/material";

export default function BreakpointsAsArray() {
  return (
    <div>
      <Box sx={{ width: [100, 200, 300] }}>
        This box has a responsive width.
      </Box>
    </div>
  );
}
`;const B=s("<div></div>",2);function p(){return(()=>{const e=B.cloneNode(!0);return i(e,n(a,{sx:{width:{xs:100,sm:200,md:300,lg:400,xl:500}},children:"This box has a responsive width."})),e})()}o(p,"BreakpointsAsObject");p.code=`import { Box } from "@suid/material";

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
`;const b=u({palette:{background:{paper:"#fff"},text:{primary:"#173A5E",secondary:"#46505A"},action:{active:"#001E3C"},success:{dark:"#009688"}}});function d(){return n(h,{theme:b,get children(){return n(t,{sx:{bgcolor:"background.paper",borderRadius:2,p:2,minWidth:300},get children(){return[n(t,{sx:{color:"text.secondary"},children:"Sessions"}),n(t,{sx:{color:"text.primary",fontSize:34,fontWeight:"medium"},children:"98.3 K"}),n(t,{sx:{color:"success.dark",display:"inline",fontWeight:"bold",mx:.5,fontSize:14},children:"+18.77%"}),n(t,{sx:{color:"text.secondary",display:"inline",fontSize:14},children:"vs. last week"})]}})}})}o(d,"Example");d.code=`import Box from "@suid/system/Box";
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
`;const v=s("<div></div>",2);function c(){return(()=>{const e=v.cloneNode(!0);return i(e,n(a,{sx:{p:1,border:1,borderColor:r=>r.palette.primary.main},children:"Border color with theme value."})),e})()}o(c,"ValueAsFunction");c.code=`import { Box } from "@suid/material";
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
`;function N(){return n(x,{importInfo:!1,name:"The sx prop",docsApiName:"system/the-sx-prop",moreExamples:!1,examples:[{bgcolor:"rgb(26, 32, 39)",component:d},{title:"Breakpoints as an object",component:p},{title:"Breakpoints as an array",component:m},{title:"Value as function",component:c}]})}o(N,"TheSxPropPage");export{N as default};
