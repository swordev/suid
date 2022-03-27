var d=Object.defineProperty;var t=(e,a)=>d(e,"name",{value:a,configurable:!0});import{C as i}from"./ComponentInfo.a5c59a7e.js";import{a3 as s,a4 as p}from"./index.ecd65d7c.js";import{d as n}from"./vendor.5273475d.js";import{T as l}from"./ThemeProvider.28f78773.js";import"./copyText.95a83221.js";import"./PaperCode.33519cb3.js";const o=s(),c=o("div")({color:"darkslategray",backgroundColor:"aliceblue",padding:8,borderRadius:4});function r(){return n(c,{children:"Styled div"})}t(r,"Example1");r.code=`import styled from "@suid/system/styled";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

export default function Example1() {
  return <MyComponent>Styled div</MyComponent>;
}
`;const y=p({palette:{primary:{main:"#1976d2",contrastText:"white"}}}),u=o("div")(({theme:e})=>({color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,padding:e.spacing(1),borderRadius:e.shape.borderRadius}));function m(){return n(l,{theme:y,get children(){return n(u,{children:"Styled div with theme"})}})}t(m,"Example2");m.code=`import ThemeProvider from "@suid/system/ThemeProvider";
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

export default function Example2() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider>
  );
}
`;function b(){return n(i,{importInfo:!1,moreExamples:!1,name:"styled",docsApiName:"system/styled",examples:[r,m]})}t(b,"StyledPage");export{b as default};
