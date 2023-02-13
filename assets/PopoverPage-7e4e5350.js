var g=Object.defineProperty;var n=(e,r)=>g(e,"name",{value:r,configurable:!0});import{P as u}from"./Popover-9f206ce5.js";import{C as f}from"./ComponentInfo-fec5820b.js";import{h,U as i,c as t,t as v,T as c}from"./ErrorPage-8beed0e1.js";import{d as E}from"./ListItemText-dfc8992a.js";import"./Grow-51012e36.js";import"./Transition-6480ccf7.js";import"./Modal-8211c8e0.js";import"./Backdrop-db8bccfd.js";import"./Fade-662b980b.js";import"./TransitionContext-87ef00d2.js";import"./Portal-922c193d.js";import"./ownerDocument-5bb7a871.js";import"./ownerWindow-09898c5b.js";import"./Paper-e344694e.js";import"./debounce-60370e19.js";import"./Link-3859a10b.js";import"./copyText-d95d75bf.js";import"./IconButton-0456b81e.js";import"./PaperCode-74962817.js";import"./PageNav-c18acd6c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-cc4321ca.js";import"./vite.config.ts-faa4c0cf.js";const P=v("<div></div>",2);function d(){const[e,r]=h(null),s=n(p=>{r(p.currentTarget)},"handleClick"),a=n(()=>{r(null)},"handleClose"),l=n(()=>Boolean(e()),"open"),o=n(()=>l()?"simple-popover":void 0,"id");return(()=>{const p=P.cloneNode(!0);return i(p,t(E,{get["aria-describedby"](){return o()},variant:"contained",onClick:s,children:"Open Popover"}),null),i(p,t(u,{get id(){return o()},get open(){return l()},get anchorEl(){return e()},onClose:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},get children(){return t(c,{sx:{p:2},children:"The content of the Popover."})}}),null),p})()}n(d,"BasicPopover");d.code=`import { Button, Popover, Typography } from "@suid/material";
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
`;const y=v("<div></div>",2);function m(){const[e,r]=h(null),s=n(o=>{r(o.currentTarget)},"handlePopoverOpen"),a=n(()=>{r(null)},"handlePopoverClose"),l=n(()=>Boolean(e()),"open");return(()=>{const o=y.cloneNode(!0);return i(o,t(c,{get["aria-owns"](){return l()?"mouse-over-popover":void 0},"aria-haspopup":"true",onMouseEnter:s,onMouseLeave:a,children:"Hover with a Popover."}),null),i(o,t(u,{id:"mouse-over-popover",sx:{pointerEvents:"none"},get open(){return l()},get anchorEl(){return e()},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:a,disableRestoreFocus:!0,get children(){return t(c,{sx:{p:1},children:"I use Popover."})}}),null),o})()}n(m,"MouseOverPopover");m.code=`import { Popover, Typography } from "@suid/material";
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
