var o=Object.defineProperty;var i=(r,m)=>o(r,"name",{value:m,configurable:!0});import{x as s,P as a,d as e,G as t,B as l}from"./index.5436dc10.js";import{C as x}from"./ComponentInfo.f5214b8c.js";import"./Link.952b2626.js";import"./copyText.9665ead6.js";import"./PaperCode.7de0c31d.js";const n=s(a)(({theme:r})=>({...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function d(){return e(l,{sx:{flexGrow:1},get children(){return e(t,{container:!0,spacing:2,get children(){return[e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:4,get children(){return e(n,{children:"xs=6 md=4"})}}),e(t,{item:!0,xs:6,md:8,get children(){return e(n,{children:"xs=6 md=8"})}})]}})}})}i(d,"FullWidthGrid");d.code=`import Box from "@suid/material/Box";
import Grid from "@suid/material/Grid";
import Paper from "@suid/material/Paper";
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
`;function f(){return e(x,{get name(){return t.name},examples:[{bgcolor:"contrasted",component:d}]})}i(f,"GridPage");export{f as default};
