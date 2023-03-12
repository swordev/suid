var a=Object.defineProperty;var t=(e,i)=>a(e,"name",{value:i,configurable:!0});import{C as d}from"./ComponentInfo-255fb34b.js";import{F as o}from"./ListItemText-0f600c95.js";import{c as n,as as s}from"./ErrorPage-eb59dadb.js";import{T as p}from"./ThemeProvider-a24e422f.js";import"./Link-aba4ea2c.js";import"./copyText-a7b84afc.js";import"./IconButton-126be790.js";import"./Paper-32f89a64.js";import"./PaperCode-8028a5c7.js";import"./PageNav-e98a4a45.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-a29a89ea.js";import"./vite.config.ts-faa4c0cf.js";const c=o("div")({color:"darkslategray",backgroundColor:"aliceblue",padding:8,borderRadius:4});function r(){return n(c,{children:"Styled div"})}t(r,"BasicUsage");r.code=`import styled from "@suid/system/styled";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

export default function BasicUsage() {
  return <MyComponent>Styled div</MyComponent>;
}
`;const l=s({palette:{primary:{main:"#1976d2",contrastText:"white"}}}),h=o("div")(({theme:e})=>({color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,padding:e.spacing(1),borderRadius:e.shape.borderRadius}));function m(){return n(p,{theme:l,get children(){return n(h,{children:"Styled div with theme"})}})}t(m,"ThemeUsage");m.code=`import ThemeProvider from "@suid/system/ThemeProvider";
import createTheme from "@suid/system/createTheme";
import styled from "@suid/system/styled";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
  },
});

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

export default function ThemeUsage() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider>
  );
}
`;function U(){return n(d,{importInfo:!1,moreExamples:!1,name:"styled",docsApiName:"system/styled",examples:[r,{component:m,title:"Using the theme"}]})}t(U,"StyledPage");export{U as default};
