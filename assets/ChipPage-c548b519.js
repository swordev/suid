var s=Object.defineProperty;var t=(i,d)=>s(i,"name",{value:d,configurable:!0});import{C as n}from"./Chip-960a6a8f.js";import{C as u}from"./ComponentInfo-5e8c6946.js";import{S as o}from"./copyText-b5a6c090.js";import{c as e,t as r}from"./ErrorPage-5efa7331.js";import{c as m}from"./ListItemText-adc949a3.js";import"./Link-849ade78.js";import"./IconButton-c537b21b.js";import"./Paper-b94e5972.js";import"./PaperCode-c69528b8.js";import"./PageNav-450b952c.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-7d64fa3f.js";import"./vite.config.ts-faa4c0cf.js";function l(){return e(o,{direction:"row",spacing:1,get children(){return[e(n,{label:"Chip Filled"}),e(n,{label:"Chip Outlined",variant:"outlined"})]}})}t(l,"BasicChips");l.code=`import { Chip, Stack } from "@suid/material";

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
`;function c(){const i=t(()=>{console.info("You clicked the delete icon.")},"handleDelete");return e(o,{direction:"row",spacing:1,get children(){return[e(n,{label:"Deletable",onDelete:i}),e(n,{label:"Deletable",variant:"outlined",onDelete:i})]}})}t(c,"DeletableChips");c.code=`import { Chip, Stack } from "@suid/material";

export default function DeletableChips() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
`;const h=r('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),C=r('<svg><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></svg>',4,!0),a=m(()=>[h.cloneNode(!0),C.cloneNode(!0)],"Face");function p(){return e(o,{direction:"row",spacing:1,get children(){return[e(n,{get icon(){return e(a,{})},label:"With Icon"}),e(n,{get icon(){return e(a,{})},label:"With Icon",variant:"outlined"})]}})}t(p,"IconChips");p.code=`import FaceIcon from "@suid/icons-material/Face";
import { Chip, Stack } from "@suid/material";

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
`;function N(){return e(u,{get name(){return n.name},docsName:"chips",examples:[l,c,p]})}t(N,"ChipPage");export{N as default};
