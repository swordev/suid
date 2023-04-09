var j=Object.defineProperty;var l=(e,t)=>j(e,"name",{value:t,configurable:!0});import{a9 as M,K as u,N as b,Q as p,X as T,U as c,H as d,W as C,R as g,am as O,a5 as y,an as E,ad as v,a7 as G,d as r,P as X,ba as J}from"./index-d23866de.js";import{C as K}from"./ComponentInfo-1aac651c.js";import"./Link-af594e99.js";import"./copyText-288aae3f.js";import"./PaperCode-cf567731.js";import"./_commonjsHelpers-0119a68f.js";const $=M();function L(e){return b("MuiTable",e)}l(L,"getTableUtilityClass");u("MuiTable",["root","stickyHeader"]);const Q=p()({name:"MuiTable",propDefaults:({set:e})=>e({component:z,padding:"normal",size:"medium",stickyHeader:!1}),selfPropNames:["children","classes","padding","size","stickyHeader"],utilityClass:L,slotClasses:e=>({root:["root",e.stickyHeader&&"stickyHeader"]})}),q=T("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"},...t.stickyHeader&&{borderCollapse:"separate"}})),z="table",D=Q.component(l(function({allProps:t,classes:o,otherProps:a,props:n}){return c($.Provider,{value:{get padding(){return n.padding},get size(){return n.size},get stickyHeader(){return n.stickyHeader}},get children(){return c(q,d({get role(){return t.component===z?null:"table"}},a,{get class(){return C(o.root,a.class)},ownerState:t,get children(){return n.children}}))}})},"Table")),f=M();function V(e){return b("MuiTableBody",e)}l(V,"getTableBodyUtilityClass");u("MuiTableBody",["root"]);const Y=p()({name:"MuiTableBody",propDefaults:({set:e})=>e({component:B}),selfPropNames:["children","classes"],utilityClass:V,slotClasses:()=>({root:["root"]})}),Z=T("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),B="tbody",_=Y.component(l(function({allProps:t,classes:o,props:a,otherProps:n}){return c(f.Provider,{value:{variant:"body"},get children(){return c(Z,d({get role(){return n.component===B?null:"rowgroup"}},n,{get class(){return C(o.root,n.class)},ownerState:t,get children(){return a.children}}))}})},"TableBody"));function ee(e){return b("MuiTableCell",e)}l(ee,"getTableCellUtilityClass");const te=u("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),w=p()({name:"MuiTableCell",propDefaults:({set:e})=>e({align:"inherit"}),selfPropNames:["align","children","classes","component","padding","scope","size","sortDirection","variant"],autoCallUseClasses:!1,utilityClass:ee,slotClasses:e=>({root:["root",e.variant,e.stickyHeader&&"stickyHeader",e.align!=="inherit"&&`align${g(e.align)}`,e.padding!=="normal"&&`padding${g(e.padding)}`,`size${g(e.size)}`]})}),ae=T("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>[t.root,t[e.ownerState.variant],t[`size${g(e.ownerState.size)}`],e.ownerState.padding!=="normal"&&t[`padding${g(e.ownerState.padding)}`],e.ownerState.align!=="inherit"&&t[`align${g(e.ownerState.align)}`],e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?O(y(e.palette.divider,1),.88):E(y(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,...t.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},...t.variant==="body"&&{color:e.palette.text.primary},...t.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},...t.size==="small"&&{padding:"6px 16px",[`&.${te.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},...t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},...t.padding==="none"&&{padding:0},...t.align==="left"&&{textAlign:"left"},...t.align==="center"&&{textAlign:"center"},...t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},...t.align==="justify"&&{textAlign:"justify"},...t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default}})),i=w.component(l(function({otherProps:t,allProps:o,props:a}){const n=v($),s=v(f),m=l(()=>s&&s.variant==="head","isHeadCell"),F=l(()=>o.component||m()?"th":"td","component"),P=l(()=>!a.scope&&m()?"col":a.scope,"scope"),x=l(()=>a.variant||s&&s.variant,"variant"),I=l(()=>a.sortDirection?a.sortDirection==="asc"?"ascending":"descending":void 0,"ariaSort"),R=d(o,{get component(){return F()},get padding(){return a.padding||(n&&n.padding?n.padding:"normal")},get size(){return a.size||(n&&n.size?n.size:"medium")},get sortDirection(){return a.sortDirection},get stickyHeader(){return x()==="head"&&n&&n.stickyHeader},get variant(){return x()}}),W=w.useClasses(R),S=G(ae,"th");return c(S,d({get as(){return a.component},get scope(){return P()},get["aria-sort"](){return I()}},t,{get class(){return C(W.root,t.class)},ownerState:R,get children(){return a.children}}))},"TableCell"));function ne(e){return b("MuiTableContainer",e)}l(ne,"getTableContainerUtilityClass");u("MuiTableContainer",["root"]);const le=p()({name:"MuiTableContainer",propDefaults:({set:e})=>e({component:"div"}),selfPropNames:["children","classes"],utilityClass:ne,slotClasses:()=>({root:["root"]})}),re=T("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),oe=le.component(l(function({classes:t,allProps:o,props:a,otherProps:n}){return c(re,d(n,{get class(){return C(t.root,n.class)},ownerState:o,get children(){return a.children}}))},"TableContainer"));function ie(e){return b("MuiTableHead",e)}l(ie,"getTableHeadUtilityClass");u("MuiTableHead",["root"]);const se=p()({name:"MuiTableHead",propDefaults:({set:e})=>e({component:A}),selfPropNames:["children","classes"],utilityClass:ie,slotClasses:()=>({root:["root"]})}),ce=T("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),de={variant:"head"},A="thead",ge=se.component(l(function({classes:t,allProps:o,otherProps:a,props:n}){return c(f.Provider,{value:de,get children(){return c(ce,d({get role(){return a.component===A?null:"rowgroup"}},a,{get class(){return C(t.root,a.class)},ownerState:o,get children(){return n.children}}))}})},"TableHead"));function ue(e){return b("MuiTableRow",e)}l(ue,"getTableRowUtilityClass");const H=u("MuiTableRow",["root","selected","hover","head","footer"]),be=p()({name:"MuiTableRow",propDefaults:({set:e})=>e({component:U,hover:!1,selected:!1}),selfPropNames:["children","classes","hover","selected"],utilityClass:ue,slotClasses:e=>({root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]})}),pe=T("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.head&&t.head,e.ownerState.footer&&t.footer]})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${H.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${H.selected}`]:{backgroundColor:y(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:y(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),U="tr",k=be.component(l(function({classes:t,allProps:o,otherProps:a,props:n}){const s=v(f),m=d(o,{get head(){return s&&s.variant==="head"},get footer(){return s&&s.variant==="footer"}});return c(pe,d({get role(){return a.component===U?null:"row"}},a,{get class(){return C(t.root,a.class)},ownerState:m,get children(){return n.children}}))},"TableRow"));function h(e,t,o,a,n){return{name:e,calories:t,fat:o,carbs:a,protein:n}}l(h,"createData");const Te=[h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9)];function N(){return r(oe,{component:X,get children(){return r(D,{sx:{minWidth:650},"aria-label":"simple table",get children(){return[r(ge,{get children(){return r(k,{get children(){return[r(i,{children:"Dessert (100g serving)"}),r(i,{align:"right",children:"Calories"}),r(i,{align:"right",children:"Fat (g)"}),r(i,{align:"right",children:"Carbs (g)"}),r(i,{align:"right",children:"Protein (g)"})]}})}}),r(_,{get children(){return J(()=>Te,e=>r(k,{sx:{"&:last-child td, &:last-child th":{border:0}},get children(){return[r(i,{component:"th",scope:"row",get children(){return e.name}}),r(i,{align:"right",get children(){return e.calories}}),r(i,{align:"right",get children(){return e.fat}}),r(i,{align:"right",get children(){return e.carbs}}),r(i,{align:"right",get children(){return e.protein}})]}}))}})]}})}})}l(N,"BasicTable");N.code=`import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@suid/material";
import { mapArray } from "solid-js";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mapArray(
            () => rows,
            (row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
`;function Re(){return r(K,{get name(){return D.name},importInfo:["Table","TableBody","TableCell","TableContainer","TableFooter","TableHead","TableRow"],examples:[N]})}l(Re,"TablePage");export{Re as default};
