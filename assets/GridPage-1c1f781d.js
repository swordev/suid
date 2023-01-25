var o=Object.defineProperty;var i=(r,d)=>o(r,"name",{value:d,configurable:!0});import{R as s,c as e,a3 as t}from"./ErrorPage-e9c3e4c4.js";import{C as a}from"./ComponentInfo-5876f613.js";import{B as p}from"./ListItemText-7ae6925f.js";import{P as c}from"./Paper-154b1d70.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";const n=s(c)(({theme:r})=>({...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function m(){return e(p,{sx:{flexGrow:1},get children(){return e(t,{container:!0,spacing:2,get children(){return[e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}})]}})}})}i(m,"FullWidthGrid");m.code=`import { Box, Grid, Paper } from "@suid/material";
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
