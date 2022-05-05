var v=Object.defineProperty;var l=(t,e)=>v(t,"name",{value:e,configurable:!0});import{s as S,u as w,ac as b,b as G,d as o,m as C,as as B,at as y,au as T,a as F,B as d,P as E}from"./index.03445290.js";import{C as L}from"./ComponentInfo.5face755.js";import{F as D}from"./FormControlLabel.011c0639.js";import{S as I}from"./Switch.1093c0b0.js";import"./Link.71f3d46f.js";import"./copyText.a5ff548e.js";import"./PaperCode.5c60fc55.js";import"./formControlState.c20baf6c.js";import"./useFormControl.a6d746de.js";import"./SwitchBase.0d5edb25.js";import"./useControlled.d532c0e7.js";const N=S()({name:"MuiGrow",propDefaults:({set:t})=>t({appear:!0,timeout:"auto"}),selfPropNames:["appear","children","easing","in","ref","timeout"]});function f(t){return`scale(${t}, ${t**2})`}l(f,"getScale");const P={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},p=N.component(l(function({props:e,otherProps:a}){const u={current:void 0},c=w(),h=b(()=>e.children);let g;return G(()=>g&&clearTimeout(g)),o(T,C(a,{get appear(){return e.appear},get in(){return e.in},onEnter:()=>{const i=h();B(i);const{duration:r,delay:s,easing:m}=y({style:a.style,timeout:e.timeout,easing:e.easing},{mode:"enter"});let n;e.timeout==="auto"?(n=c.transitions.getAutoHeightDuration(i.clientHeight),u.current=n):n=r,i.style.transition=[c.transitions.create("opacity",{duration:n,delay:s}),c.transitions.create("transform",{duration:Number(n)*.666,delay:s,easing:m})].join(","),a.onEnter?.()},onExit:()=>{const i=h(),{duration:r,delay:s,easing:m}=y({style:a.style,timeout:e.timeout,easing:e.easing},{mode:"exit"});let n;e.timeout==="auto"?(n=c.transitions.getAutoHeightDuration(i.clientHeight),u.current=n):n=r,i.style.transition=[c.transitions.create("opacity",{duration:n,delay:s}),c.transitions.create("transform",{duration:Number(n)*.666,delay:s||Number(n)*.333,easing:m})].join(","),i.style.opacity="0",i.style.transform=f(.75),a.onExit?.()},addEndListener:i=>{e.timeout==="auto"&&(g=setTimeout(i,u.current||0)),a.addEndListener&&a.addEndListener(i)},get timeout(){return e.timeout==="auto"?void 0:e.timeout},children:i=>{const r=h();r.style.opacity="0",r.style.transform=f(.75),i==="exited"&&!e.in?r.style.visibility="hidden":r.style.removeProperty("visibility");const s={...P[i]||{},...a.style||{}};for(const m in s){const n=s[m];n===void 0?r.style.removeProperty(m):r.style[m]=n}return r}}))},"Grow"));function x(){const t=w();return o(E,{sx:{m:1},elevation:4,get children(){return o(d,{component:"svg",sx:{width:100,height:100},get children(){return o(d,{component:"polygon",get sx(){return{fill:t.palette.common.white,stroke:t.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}l(x,"Icon");function k(){const[t,e]=F(!1),a=l(()=>{e(u=>!u)},"handleChange");return o(d,{sx:{height:180},get children(){return[o(D,{get control(){return o(I,{get checked(){return t()},onChange:a})},label:"Show"}),o(d,{sx:{display:"flex"},get children(){return[o(p,{get in(){return t()},get children(){return o(x,{})}}),o(p,C({get in(){return t()},style:{transformOrigin:"0 0 0"}},()=>t()?{timeout:1e3}:{},{get children(){return o(x,{})}}))]}})]}})}l(k,"SimpleGrow");k.code=`import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import FormControlLabel from "@suid/material/FormControlLabel";
import Grow from "@suid/material/Grow";
import Paper from "@suid/material/Paper";
import Switch from "@suid/material/Switch";
import { createSignal } from "solid-js";

function Icon() {
  const theme = useTheme();
  return (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: "1",
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );
}

export default function SimpleGrow() {
  const [checked, setChecked] = createSignal(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked()} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: "flex" }}>
        <Grow in={checked()}>
          <Icon />
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked()}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked() ? { timeout: 1000 } : {})}
        >
          <Icon />
        </Grow>
      </Box>
    </Box>
  );
}
`;function R(){return o(L,{get name(){return p.name},docsName:"transitions",examples:[k]})}l(R,"GrowPage");export{R as default};
