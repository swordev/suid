var h=Object.defineProperty;var n=(o,l)=>h(o,"name",{value:l,configurable:!0});import{C as t}from"./Chip-ac135483.js";import{C as m}from"./ComponentInfo-bd875933.js";import{S as i}from"./copyText-85cadcb7.js";import{h as e,c as r,t as c}from"./index-687395e5.js";import{D as C}from"./Delete-b25d534e.js";import"./Link-85734f9a.js";import"./PaperCode-fd6d07d9.js";function s(){return e(i,{direction:"row",spacing:1,get children(){return[e(t,{label:"Chip Filled"}),e(t,{label:"Chip Outlined",variant:"outlined"})]}})}n(s,"BasicChips");s.code=`import { Chip, Stack } from "@suid/material";

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
`;const f=c('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),D=c('<svg><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></svg>',!1,!0),g=r(()=>[f(),D()],"Done");function d(){const o=n(()=>{console.info("You clicked the Chip.")},"handleClick"),l=n(()=>{console.info("You clicked the delete icon.")},"handleDelete");return e(i,{direction:"row",spacing:1,get children(){return[e(t,{label:"Custom delete icon",onClick:o,onDelete:l,get deleteIcon(){return e(g,{})}}),e(t,{label:"Custom delete icon",onClick:o,onDelete:l,get deleteIcon(){return e(C,{})},variant:"outlined"})]}})}n(d,"CustomDeleteIconChips");d.code=`import { Done as DoneIcon, Delete as DeleteIcon } from "@suid/icons-material";
import { Chip, Stack } from "@suid/material";

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
`;function p(){const o=n(()=>{console.info("You clicked the delete icon.")},"handleDelete");return e(i,{direction:"row",spacing:1,get children(){return[e(t,{label:"Deletable",onDelete:o}),e(t,{label:"Deletable",variant:"outlined",onDelete:o})]}})}n(p,"DeletableChips");p.code=`import { Chip, Stack } from "@suid/material";

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
`;const k=c('<svg><path d="M0 0h24v24H0z" fill="none"></svg>',!1,!0),I=c('<svg><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></svg>',!1,!0),a=r(()=>[k(),I()],"Face");function u(){return e(i,{direction:"row",spacing:1,get children(){return[e(t,{get icon(){return e(a,{})},label:"With Icon"}),e(t,{get icon(){return e(a,{})},label:"With Icon",variant:"outlined"})]}})}n(u,"IconChips");u.code=`import FaceIcon from "@suid/icons-material/Face";
import { Chip, Stack } from "@suid/material";

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
    </Stack>
  );
}
`;function $(){return e(m,{get name(){return t.name},docsName:"chips",examples:[s,p,u,{title:"Custom delete icon",component:d}]})}n($,"ChipPage");export{$ as default};
