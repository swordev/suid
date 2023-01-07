var g=Object.defineProperty;var n=(e,r)=>g(e,"name",{value:r,configurable:!0});import{P as u}from"./Popover-ba78ffc0.js";import{C as f}from"./ComponentInfo-3f416a39.js";import{a as h,P as i,c as t,t as v,T as c}from"./ErrorPage-ac5239e5.js";import{b as P}from"./ListItemText-f1fd78c0.js";import"./Grow-4b262527.js";import"./Transition-750bbfe3.js";import"./Modal-d7b1aba2.js";import"./Backdrop-41305eb6.js";import"./Fade-9373b7d0.js";import"./TransitionContext-2788a4e7.js";import"./Portal-509db4d5.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Paper-3e60930a.js";import"./debounce-60370e19.js";import"./Link-eef663fe.js";import"./copyText-13339847.js";import"./IconButton-1112bc6d.js";import"./PaperCode-dcb3e6cd.js";import"./PageNav-1c02f791.js";import"./sdk.m-260a6df0.js";import"./vite.config.ts-faa4c0cf.js";const E=v("<div></div>");function d(){const[e,r]=h(null),s=n(p=>{r(p.currentTarget)},"handleClick"),a=n(()=>{r(null)},"handleClose"),l=n(()=>Boolean(e()),"open"),o=n(()=>l()?"simple-popover":void 0,"id");return(()=>{const p=E.cloneNode(!0);return i(p,t(P,{get["aria-describedby"](){return o()},variant:"contained",onClick:s,children:"Open Popover"}),null),i(p,t(u,{get id(){return o()},get open(){return l()},get anchorEl(){return e()},onClose:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},get children(){return t(c,{sx:{p:2},children:"The content of the Popover."})}}),null),p})()}n(d,"BasicPopover");d.code=`import { Button, Popover, Typography } from "@suid/material";
import { createSignal } from "solid-js";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);

  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement }
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = () => Boolean(anchorEl());
  const id = () => (open() ? "simple-popover" : undefined);

  return (
    <div>
      <Button aria-describedby={id()} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id()}
        open={open()}
        anchorEl={anchorEl()}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
`;const y=v("<div></div>");function m(){const[e,r]=h(null),s=n(o=>{r(o.currentTarget)},"handlePopoverOpen"),a=n(()=>{r(null)},"handlePopoverClose"),l=n(()=>Boolean(e()),"open");return(()=>{const o=y.cloneNode(!0);return i(o,t(c,{get["aria-owns"](){return l()?"mouse-over-popover":void 0},"aria-haspopup":"true",onMouseEnter:s,onMouseLeave:a,children:"Hover with a Popover."}),null),i(o,t(u,{id:"mouse-over-popover",sx:{pointerEvents:"none"},get open(){return l()},get anchorEl(){return e()},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:a,disableRestoreFocus:!0,get children(){return t(c,{sx:{p:1},children:"I use Popover."})}}),null),o})()}n(m,"MouseOverPopover");m.code=`import { Popover, Typography } from "@suid/material";
import { createSignal } from "solid-js";

export default function MouseOverPopover() {
  const [anchorEl, setAnchorEl] = createSignal<Element | null>(null);

  const handlePopoverOpen = (event: { currentTarget: Element }) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = () => Boolean(anchorEl());

  return (
    <div>
      <Typography
        aria-owns={open() ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open()}
        anchorEl={anchorEl()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>
  );
}
`;function G(){return t(f,{get name(){return u.name},examples:[d,m]})}n(G,"PopoverPage");export{G as default};
