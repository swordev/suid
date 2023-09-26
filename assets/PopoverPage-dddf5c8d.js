var g=Object.defineProperty;var n=(e,r)=>g(e,"name",{value:r,configurable:!0});import{P as u}from"./Popover-8bf39bb7.js";import{C as f}from"./ComponentInfo-3547844d.js";import{a as h,E as i,h as t,z as E,k as c,t as v}from"./index-5ff6d9be.js";import"./Grow-e30b903e.js";import"./Link-4d633cf7.js";import"./copyText-525d45c6.js";import"./PaperCode-4f370aa8.js";const P=v("<div>");function d(){const[e,r]=h(null),s=n(a=>{r(a.currentTarget)},"handleClick"),p=n(()=>{r(null)},"handleClose"),l=n(()=>!!e(),"open"),o=n(()=>l()?"simple-popover":void 0,"id");return(()=>{const a=P();return i(a,t(E,{get"aria-describedby"(){return o()},variant:"contained",onClick:s,children:"Open Popover"}),null),i(a,t(u,{get id(){return o()},get open(){return l()},get anchorEl(){return e()},onClose:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},get children(){return t(c,{sx:{p:2},children:"The content of the Popover."})}}),null),a})()}n(d,"BasicPopover");d.code=`import { Button, Popover, Typography } from "@suid/material";
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
`;const y=v("<div>");function m(){const[e,r]=h(null),s=n(o=>{r(o.currentTarget)},"handlePopoverOpen"),p=n(()=>{r(null)},"handlePopoverClose"),l=n(()=>!!e(),"open");return(()=>{const o=y();return i(o,t(c,{get"aria-owns"(){return l()?"mouse-over-popover":void 0},"aria-haspopup":"true",onMouseEnter:s,onMouseLeave:p,children:"Hover with a Popover."}),null),i(o,t(u,{id:"mouse-over-popover",sx:{pointerEvents:"none"},get open(){return l()},get anchorEl(){return e()},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:p,disableRestoreFocus:!0,get children(){return t(c,{sx:{p:1},children:"I use Popover."})}}),null),o})()}n(m,"MouseOverPopover");m.code=`import { Popover, Typography } from "@suid/material";
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
`;function z(){return t(f,{get name(){return u.name},examples:[d,m]})}n(z,"PopoverPage");export{z as default};
