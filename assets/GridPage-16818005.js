var o=Object.defineProperty;var d=(n,m)=>o(n,"name",{value:m,configurable:!0});import{R as s,L as a,h as e,G as t,B as l}from"./index-10f92eee.js";import{C as c}from"./ComponentInfo-2ec1d64d.js";import"./Link-6a50bd67.js";import"./copyText-e2a5a92e.js";import"./PaperCode-fee6d68d.js";const r=s(a)(({theme:n})=>({...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function i(){return e(l,{sx:{flexGrow:1},get children(){return e(t,{container:!0,spacing:2,get children(){return[e(t,{item:!0,xs:6,md:8,get children(){return e(r,{children:"xs=6 md=8"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(r,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(r,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:8,get children(){return e(r,{children:"xs=6 md=8"})}})]}})}})}d(i,"FullWidthGrid");i.code=`import { Box, Grid, Paper } from "@suid/material";
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
