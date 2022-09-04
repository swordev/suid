var s=Object.defineProperty;var t=(i,d)=>s(i,"name",{value:d,configurable:!0});import{C as n}from"./Chip.cbf2a6c8.js";import{C as u}from"./ComponentInfo.feb72c29.js";import{S as o}from"./copyText.a81e182c.js";import{d as e,c as h,t as l}from"./index.1753d436.js";import"./Link.b935328c.js";import"./PaperCode.eaeee87a.js";function r(){return e(o,{direction:"row",spacing:1,get children(){return[e(n,{label:"Chip Filled"}),e(n,{label:"Chip Outlined",variant:"outlined"})]}})}t(r,"BasicChips");r.code=`import Chip from "@suid/material/Chip";
import Stack from "@suid/material/Stack";

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
`;function c(){const i=t(()=>{console.info("You clicked the delete icon.")},"handleDelete");return e(o,{direction:"row",spacing:1,get children(){return[e(n,{label:"Deletable",onDelete:i}),e(n,{label:"Deletable",variant:"outlined",onDelete:i})]}})}t(c,"DeletableChips");c.code=`import Chip from "@suid/material/Chip";
import Stack from "@suid/material/Stack";

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
`;const m=l('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),C=l('<svg><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></svg>',4,!0),a=h(()=>[m.cloneNode(!0),C.cloneNode(!0)],"Face");function p(){return e(o,{direction:"row",spacing:1,get children(){return[e(n,{get icon(){return e(a,{})},label:"With Icon"}),e(n,{get icon(){return e(a,{})},label:"With Icon",variant:"outlined"})]}})}t(p,"IconChips");p.code=`import FaceIcon from "@suid/icons-material/Face";
import Chip from "@suid/material/Chip";
import Stack from "@suid/material/Stack";

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
`;function I(){return e(u,{get name(){return n.name},docsName:"chips",examples:[r,c,p]})}t(I,"ChipPage");export{I as default};
