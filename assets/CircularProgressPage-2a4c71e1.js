var h=Object.defineProperty;var r=(e,o)=>h(e,"name",{value:o,configurable:!0});import{C as t}from"./CircularProgress-dfe74802.js";import{C as b}from"./ComponentInfo-3b79a7d2.js";import{S as y}from"./copyText-5d9d4a78.js";import{d as n,c as P,t as d,a as u,b as f,B as a,p as i,E as c,h as S,m as B,T as I}from"./index-35a362a5.js";import{C as k}from"./Check-caae3f5e.js";import{F as T}from"./Fab-d3176f34.js";import"./Link-1db882b6.js";import"./PaperCode-7498dd5e.js";function x(){return n(y,{sx:{color:"grey.500"},spacing:2,direction:"row",get children(){return[n(t,{color:"secondary"}),n(t,{color:"success"}),n(t,{color:"inherit"})]}})}r(x,"CircularColor");x.code=`import { CircularProgress, Stack } from "@suid/material";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}
`;const L=d('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),z=d('<svg><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></svg>',!1,!0),w=P(()=>[L(),z()],"Save");function C(){const[e,o]=u(!1),[l,s]=u(!1);let p;const g=r(()=>l()?{bgcolor:c[500],"&:hover":{bgcolor:c[700]}}:void 0,"buttonSx");f(()=>{clearTimeout(p)});const m=r(()=>{e()||(s(!1),o(!0),p=window.setTimeout(()=>{s(!0),o(!1)},2e3))},"handleButtonClick");return n(a,{sx:{display:"flex",alignItems:"center"},get children(){return[n(a,{sx:{m:1,position:"relative"},get children(){return[n(T,{"aria-label":"save",color:"primary",get sx(){return g()},onClick:m,get children(){return i(()=>!!l())()?n(k,{}):n(w,{})}}),i(()=>i(()=>!!e())()&&n(t,{size:68,get sx(){return{color:c[500],position:"absolute",top:-6,left:-6,zIndex:1}}}))]}}),n(a,{sx:{m:1,position:"relative"},get children(){return[n(S,{variant:"contained",get sx(){return g()},get disabled(){return e()},onClick:m,children:"Accept terms"}),i(()=>i(()=>!!e())()&&n(t,{size:24,get sx(){return{color:c[500],position:"absolute",top:"50%",left:"50%",marginTop:"-12px",marginLeft:"-12px"}}}))]}})]}})}r(C,"CircularIntegration");C.code=`import CheckIcon from "@suid/icons-material/Check";
import SaveIcon from "@suid/icons-material/Save";
import { CircularProgress, Box, Button, Fab } from "@suid/material";
import { green } from "@suid/material/colors";
import { createSignal, onCleanup } from "solid-js";

export default function CircularIntegration() {
  const [loading, setLoading] = createSignal(false);
  const [success, setSuccess] = createSignal(false);
  let timer: ReturnType<typeof setTimeout>;

  const buttonSx = () =>
    success()
      ? {
          bgcolor: green[500],
          "&:hover": {
            bgcolor: green[700],
          },
        }
      : undefined;

  onCleanup(() => {
    clearTimeout(timer);
  });

  const handleButtonClick = () => {
    if (!loading()) {
      setSuccess(false);
      setLoading(true);
      timer = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          m: 1,
          position: "relative",
        }}
      >
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx()}
          onClick={handleButtonClick}
        >
          {success() ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading() && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          m: 1,
          position: "relative",
        }}
      >
        <Button
          variant="contained"
          sx={buttonSx()}
          disabled={loading()}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading() && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
`;function F(e){return n(a,{sx:{position:"relative",display:"inline-flex"},get children(){return[n(t,B({variant:"determinate"},e)),n(a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},get children(){return n(I,{variant:"caption",component:"div",color:"text.secondary",get children(){return`${Math.round(e.value)}%`}})}})]}})}r(F,"CircularProgressWithLabel");function v(){const[e,o]=u(10),l=setInterval(()=>{o(s=>s>=100?0:s+10)},800);return f(()=>{clearInterval(l)}),n(F,{get value(){return e()}})}r(v,"CircularWithValueLabel");v.code=`import { CircularProgress, Box, Typography } from "@suid/material";
import { CircularProgressProps } from "@suid/material/CircularProgress";
import { createSignal, onCleanup } from "solid-js";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{\`\${Math.round(props.value)}%\`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = createSignal(10);

  const timer = setInterval(() => {
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : prevProgress + 10
    );
  }, 800);

  onCleanup(() => {
    clearInterval(timer);
  });

  return <CircularProgressWithLabel value={progress()} />;
}
`;function N(){return n(b,{get name(){return t.name},docsName:"progress",examples:[x,{title:"Interactive integration",component:C},{title:"Circular with label",component:v}]})}r(N,"CircularProgressPage");export{N as default};
