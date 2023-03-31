var o=Object.defineProperty;var i=(r,d)=>o(r,"name",{value:d,configurable:!0});import{R as s,c as e,a3 as t}from"./ErrorPage-899a3c74.js";import{C as a}from"./ComponentInfo-866f98ce.js";import{B as p}from"./ListItemText-6803f35f.js";import{P as c}from"./Paper-c50e815b.js";import"./Link-a8ec2a4e.js";import"./copyText-0585a785.js";import"./IconButton-9bf679c9.js";import"./PaperCode-789d0c94.js";import"./PageNav-ed290099.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-6f270c0a.js";import"./vite.config.ts-faa4c0cf.js";const n=s(c)(({theme:r})=>({...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function m(){return e(p,{sx:{flexGrow:1},get children(){return e(t,{container:!0,spacing:2,get children(){return[e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}})]}})}})}i(m,"FullWidthGrid");m.code=`import { Box, Grid, Paper } from "@suid/material";
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
`;function w(){return e(a,{get name(){return t.name},examples:[{bgcolor:"contrasted",component:m}]})}i(w,"GridPage");export{w as default};
