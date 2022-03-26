var o=Object.defineProperty;var d=(r,m)=>o(r,"name",{value:m,configurable:!0});import{s as a,w as s,G as t,B as l}from"./index.c7352f5d.js";import{C as p}from"./ComponentInfo.fcf1cc11.js";import{d as e}from"./vendor.5273475d.js";import"./copyText.9135cd54.js";import"./PaperCode.7eea3671.js";const n=a(s)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function i(){return e(l,{sx:{flexGrow:1},get children(){return e(t,{container:!0,spacing:2,get children(){return[e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}})]}})}})}d(i,"FullWidthGrid");i.code=`import Box from "@suid/material/Box";
import Grid from "@suid/material/Grid";
import Paper from "@suid/material/Paper";
import styled from "@suid/material/styles/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
`;function h(){return e(p,{get name(){return t.name},examples:[i]})}d(h,"GridPage");export{h as default};
