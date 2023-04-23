var o=Object.defineProperty;var d=(n,m)=>o(n,"name",{value:m,configurable:!0});import{Q as s,P as a,d as e,G as t,B as l}from"./index-3be2b89c.js";import{C as c}from"./ComponentInfo-7c109747.js";import"./Link-0a3484c6.js";import"./copyText-0273ce2e.js";import"./PaperCode-de032784.js";const r=s(a)(({theme:n})=>({...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function i(){return e(l,{sx:{flexGrow:1},get children(){return e(t,{container:!0,spacing:2,get children(){return[e(t,{item:!0,xs:6,md:8,get children(){return e(r,{children:"xs=6 md=8"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(r,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(r,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:8,get children(){return e(r,{children:"xs=6 md=8"})}})]}})}})}d(i,"FullWidthGrid");i.code=`import { Box, Grid, Paper } from "@suid/material";
import styled from "@suid/material/styles/styled";

const Item = styled(Paper)(({ theme }) => ({
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
`;function y(){return e(c,{get name(){return t.name},examples:[{bgcolor:"contrasted",component:i}]})}d(y,"GridPage");export{y as default};
