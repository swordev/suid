var i=Object.defineProperty;var t=(e,a)=>i(e,"name",{value:a,configurable:!0});import{C as d}from"./ComponentInfo-BBEqkhk-.js";import{aw as o,h as n,ax as s}from"./index-96nJ5ebr.js";import{T as p}from"./ThemeProvider-CF9WDioV.js";import"./Link-BFVZF50d.js";import"./copyText-D9OMJUeU.js";import"./PaperCode-BS9cYccI.js";const l=o("div")({color:"darkslategray",backgroundColor:"aliceblue",padding:8,borderRadius:4});function r(){return n(l,{children:"Styled div"})}t(r,"BasicUsage");r.code=`import styled from "@suid/system/styled";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

export default function BasicUsage() {
  return <MyComponent>Styled div</MyComponent>;
}
`;const c=s({palette:{primary:{main:"#1976d2",contrastText:"white"}}}),h=o("div")(({theme:e})=>({color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,padding:e.spacing(1),borderRadius:e.shape.borderRadius}));function m(){return n(p,{theme:c,get children(){return n(h,{children:"Styled div with theme"})}})}t(m,"ThemeUsage");m.code=`import ThemeProvider from "@suid/system/ThemeProvider";
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
`;function b(){return n(d,{importInfo:!1,moreExamples:!1,name:"styled",docsApiName:"system/styled",examples:[r,{component:m,title:"Using the theme"}]})}t(b,"StyledPage");export{b as default};
