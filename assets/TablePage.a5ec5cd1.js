var O=Object.defineProperty;var l=(e,t)=>O(e,"name",{value:t,configurable:!0});import{af as k,r as g,s as u,v as b,x as p,d as r,m as c,E as m,w as d,O as S,z as h,N as W,ag as f,P as j,Y as E}from"./index.8cdc9133.js";import{C as G}from"./ComponentInfo.72be1033.js";import"./Link.793ded38.js";import"./copyText.b3bf44ff.js";import"./PaperCode.1c7a2989.js";const M=k();function J(e){return u("MuiTable",e)}l(J,"getTableUtilityClass");g("MuiTable",["root","stickyHeader"]);const L=b()({name:"MuiTable",propDefaults:({set:e})=>e({component:$,padding:"normal",size:"medium",stickyHeader:!1}),selfPropNames:["children","classes","padding","size","stickyHeader"],utilityClass:J,slotClasses:e=>({root:["root",e.stickyHeader&&"stickyHeader"]})}),X=p("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"},...t.stickyHeader&&{borderCollapse:"separate"}})),$="table",z=L.component(l(function({allProps:t,classes:o,otherProps:a,props:n}){return r(M.Provider,{value:{get padding(){return n.padding},get size(){return n.size},get stickyHeader(){return n.stickyHeader}},get children(){return r(X,c({get role(){return t.component===$?null:"table"}},a,{get class(){return m(o.root,a.class)},ownerState:t,get children(){return n.children}}))}})},"Table")),y=k();function Y(e){return u("MuiTableBody",e)}l(Y,"getTableBodyUtilityClass");g("MuiTableBody",["root"]);const q=b()({name:"MuiTableBody",propDefaults:({set:e})=>e({component:D}),selfPropNames:["children","classes"],utilityClass:Y,slotClasses:()=>({root:["root"]})}),K=p("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),D="tbody",Q=q.component(l(function({allProps:t,classes:o,props:a,otherProps:n}){return r(y.Provider,{value:{variant:"body"},get children(){return r(K,c({get role(){return n.component===D?null:"rowgroup"}},n,{get class(){return m(o.root,n.class)},ownerState:t,get children(){return a.children}}))}})},"TableBody"));function V(e){return u("MuiTableCell",e)}l(V,"getTableCellUtilityClass");const Z=g("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),R=b()({name:"MuiTableCell",propDefaults:({set:e})=>e({align:"inherit"}),selfPropNames:["align","children","classes","component","padding","scope","size","sortDirection","variant"],autoCallUseClasses:!1,utilityClass:V,slotClasses:e=>({root:["root",e.variant,e.stickyHeader&&"stickyHeader",e.align!=="inherit"&&`align${d(e.align)}`,e.padding!=="normal"&&`padding${d(e.padding)}`,`size${d(e.size)}`]})}),_=p("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>[t.root,t[e.ownerState.variant],t[`size${d(e.ownerState.size)}`],e.ownerState.padding!=="normal"&&t[`padding${d(e.ownerState.padding)}`],e.ownerState.align!=="inherit"&&t[`align${d(e.ownerState.align)}`],e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?S(h(e.palette.divider,1),.88):W(h(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,...t.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},...t.variant==="body"&&{color:e.palette.text.primary},...t.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},...t.size==="small"&&{padding:"6px 16px",[`&.${Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},...t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},...t.padding==="none"&&{padding:0},...t.align==="left"&&{textAlign:"left"},...t.align==="center"&&{textAlign:"center"},...t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},...t.align==="justify"&&{textAlign:"justify"},...t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default}})),i=R.component(l(function({otherProps:t,allProps:o,props:a}){const n=f(M),s=f(y),C=l(()=>s&&s.variant==="head","isHeadCell"),N=l(()=>o.component||C()?"th":"td","component"),P=l(()=>!a.scope&&C()?"col":a.scope,"scope"),v=l(()=>a.variant||s&&s.variant,"variant"),F=l(()=>a.sortDirection?a.sortDirection==="asc"?"ascending":"descending":void 0,"ariaSort"),x=c(o,{get component(){return N()},get padding(){return a.padding||(n&&n.padding?n.padding:"normal")},get size(){return a.size||(n&&n.size?n.size:"medium")},get sortDirection(){return a.sortDirection},get stickyHeader(){return v()==="head"&&n&&n.stickyHeader},get variant(){return v()}}),I=R.useClasses(x);return r(_,c({get component(){return a.component},get scope(){return P()},get["aria-sort"](){return F()}},t,{get class(){return m(I.root,t.class)},ownerState:x,get children(){return a.children}}))},"TableCell"));function ee(e){return u("MuiTableContainer",e)}l(ee,"getTableContainerUtilityClass");g("MuiTableContainer",["root"]);const te=b()({name:"MuiTableContainer",propDefaults:({set:e})=>e({component:"div"}),selfPropNames:["children","classes"],utilityClass:ee,slotClasses:()=>({root:["root"]})}),ae=p("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),ne=te.component(l(function({classes:t,allProps:o,props:a,otherProps:n}){return r(ae,c(n,{get class(){return m(t.root,n.class)},ownerState:o,get children(){return a.children}}))},"TableContainer"));function re(e){return u("MuiTableHead",e)}l(re,"getTableHeadUtilityClass");g("MuiTableHead",["root"]);const le=b()({name:"MuiTableHead",propDefaults:({set:e})=>e({component:B}),selfPropNames:["children","classes"],utilityClass:re,slotClasses:()=>({root:["root"]})}),oe=p("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),ie={variant:"head"},B="thead",se=le.component(l(function({classes:t,allProps:o,otherProps:a,props:n}){return r(y.Provider,{value:ie,get children(){return r(oe,c({get role(){return a.component===B?null:"rowgroup"}},a,{get class(){return m(t.root,a.class)},ownerState:o,get children(){return n.children}}))}})},"TableHead"));function ce(e){return u("MuiTableRow",e)}l(ce,"getTableRowUtilityClass");const w=g("MuiTableRow",["root","selected","hover","head","footer"]),de=b()({name:"MuiTableRow",propDefaults:({set:e})=>e({component:A,hover:!1,selected:!1}),selfPropNames:["children","classes","hover","selected"],utilityClass:ce,slotClasses:e=>({root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]})}),ge=p("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.head&&t.head,e.ownerState.footer&&t.footer]})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${w.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${w.selected}`]:{backgroundColor:h(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:h(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),A="tr",H=de.component(l(function({classes:t,allProps:o,otherProps:a,props:n}){const s=f(y),C=c(o,{get head(){return s&&s.variant==="head"},get footer(){return s&&s.variant==="footer"}});return r(ge,c({get role(){return a.component===A?null:"row"}},a,{get class(){return m(t.root,a.class)},ownerState:C,get children(){return n.children}}))},"TableRow"));function T(e,t,o,a,n){return{name:e,calories:t,fat:o,carbs:a,protein:n}}l(T,"createData");const ue=[T("Frozen yoghurt",159,6,24,4),T("Ice cream sandwich",237,9,37,4.3),T("Eclair",262,16,24,6),T("Cupcake",305,3.7,67,4.3),T("Gingerbread",356,16,49,3.9)];function U(){return r(ne,{component:j,get children(){return r(z,{sx:{minWidth:650},"aria-label":"simple table",get children(){return[r(se,{get children(){return r(H,{get children(){return[r(i,{children:"Dessert (100g serving)"}),r(i,{align:"right",children:"Calories"}),r(i,{align:"right",children:"Fat\xA0(g)"}),r(i,{align:"right",children:"Carbs\xA0(g)"}),r(i,{align:"right",children:"Protein\xA0(g)"})]}})}}),r(Q,{get children(){return E(()=>ue,e=>r(H,{sx:{"&:last-child td, &:last-child th":{border:0}},get children(){return[r(i,{component:"th",scope:"row",get children(){return e.name}}),r(i,{align:"right",get children(){return e.calories}}),r(i,{align:"right",get children(){return e.fat}}),r(i,{align:"right",get children(){return e.carbs}}),r(i,{align:"right",get children(){return e.protein}})]}}))}})]}})}})}l(U,"BasicTable");U.code=`import Paper from "@suid/material/Paper";
import Table from "@suid/material/Table";
import TableBody from "@suid/material/TableBody";
import TableCell from "@suid/material/TableCell";
import TableContainer from "@suid/material/TableContainer";
import TableHead from "@suid/material/TableHead";
import TableRow from "@suid/material/TableRow";
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
`;function ye(){return r(G,{get name(){return z.name},examples:[U]})}l(ye,"TablePage");export{ye as default};
