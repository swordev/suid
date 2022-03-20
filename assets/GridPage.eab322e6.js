import{G as r}from"./Grid.1c6528d7.js";import{C as i}from"./ComponentInfo.6103a8aa.js";import{s as m,p as o,B as a}from"./index.ae27f545.js";import{d as e}from"./vendor.6d0a7b46.js";import"./copyText.3f9916b4.js";import"./PaperCode.139f695a.js";const n=m(o)(({theme:t})=>({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function d(){return e(a,{sx:{flexGrow:1},get children(){return e(r,{container:!0,spacing:2,get children(){return[e(r,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}}),e(r,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(r,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(r,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}})]}})}})}d.code=`import Box from "@suid/material/Box";
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
`;function f(){return e(i,{get name(){return r.name},examples:[d]})}export{f as default};
