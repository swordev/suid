var o=Object.defineProperty;var i=(r,d)=>o(r,"name",{value:d,configurable:!0});import{R as s,c as e,a3 as t}from"./ErrorPage-5efa7331.js";import{C as a}from"./ComponentInfo-d01e77a6.js";import{B as p}from"./ListItemText-7861bce7.js";import{P as c}from"./Paper-b94e5972.js";import"./Link-b6cacc18.js";import"./copyText-9e269238.js";import"./IconButton-7ca039fe.js";import"./PaperCode-3387be24.js";import"./PageNav-1f4231fa.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";const n=s(c)(({theme:r})=>({...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function m(){return e(p,{sx:{flexGrow:1},get children(){return e(t,{container:!0,spacing:2,get children(){return[e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}})]}})}})}i(m,"FullWidthGrid");m.code=`import { Box, Grid, Paper } from "@suid/material";
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
