var S=Object.defineProperty;var r=(e,t)=>S(e,"name",{value:t,configurable:!0});import{a2 as k,E as g,H as u,J as b,Q as p,d as l,m as c,O as T,K as d,ae as W,_ as m,af as j,a6 as f,a0 as E,P as G,aH as J}from"./index-6a5c326a.js";import{C as K}from"./ComponentInfo-104079dd.js";import"./Link-197c21b2.js";import"./copyText-46473020.js";import"./PaperCode-130eb621.js";const M=k();function L(e){return u("MuiTable",e)}r(L,"getTableUtilityClass");g("MuiTable",["root","stickyHeader"]);const Q=b()({name:"MuiTable",propDefaults:({set:e})=>e({component:$,padding:"normal",size:"medium",stickyHeader:!1}),selfPropNames:["children","classes","padding","size","stickyHeader"],utilityClass:L,slotClasses:e=>({root:["root",e.stickyHeader&&"stickyHeader"]})}),X=p("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"},...t.stickyHeader&&{borderCollapse:"separate"}})),$="table",z=Q.component(r(function({allProps:t,classes:o,otherProps:a,props:n}){return l(M.Provider,{value:{get padding(){return n.padding},get size(){return n.size},get stickyHeader(){return n.stickyHeader}},get children(){return l(X,c({get role(){return t.component===$?null:"table"}},a,{get class(){return T(o.root,a.class)},ownerState:t,get children(){return n.children}}))}})},"Table")),y=k();function _(e){return u("MuiTableBody",e)}r(_,"getTableBodyUtilityClass");g("MuiTableBody",["root"]);const q=b()({name:"MuiTableBody",propDefaults:({set:e})=>e({component:D}),selfPropNames:["children","classes"],utilityClass:_,slotClasses:()=>({root:["root"]})}),V=p("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),D="tbody",Y=q.component(r(function({allProps:t,classes:o,props:a,otherProps:n}){return l(y.Provider,{value:{variant:"body"},get children(){return l(V,c({get role(){return n.component===D?null:"rowgroup"}},n,{get class(){return T(o.root,n.class)},ownerState:t,get children(){return a.children}}))}})},"TableBody"));function Z(e){return u("MuiTableCell",e)}r(Z,"getTableCellUtilityClass");const ee=g("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),R=b()({name:"MuiTableCell",propDefaults:({set:e})=>e({align:"inherit"}),selfPropNames:["align","children","classes","component","padding","scope","size","sortDirection","variant"],autoCallUseClasses:!1,utilityClass:Z,slotClasses:e=>({root:["root",e.variant,e.stickyHeader&&"stickyHeader",e.align!=="inherit"&&`align${d(e.align)}`,e.padding!=="normal"&&`padding${d(e.padding)}`,`size${d(e.size)}`]})}),te=p("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>[t.root,t[e.ownerState.variant],t[`size${d(e.ownerState.size)}`],e.ownerState.padding!=="normal"&&t[`padding${d(e.ownerState.padding)}`],e.ownerState.align!=="inherit"&&t[`align${d(e.ownerState.align)}`],e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?W(m(e.palette.divider,1),.88):j(m(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,...t.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},...t.variant==="body"&&{color:e.palette.text.primary},...t.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},...t.size==="small"&&{padding:"6px 16px",[`&.${ee.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},...t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},...t.padding==="none"&&{padding:0},...t.align==="left"&&{textAlign:"left"},...t.align==="center"&&{textAlign:"center"},...t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},...t.align==="justify"&&{textAlign:"justify"},...t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default}})),i=R.component(r(function({otherProps:t,allProps:o,props:a}){const n=f(M),s=f(y),h=r(()=>s&&s.variant==="head","isHeadCell"),N=r(()=>o.component||h()?"th":"td","component"),F=r(()=>!a.scope&&h()?"col":a.scope,"scope"),v=r(()=>a.variant||s&&s.variant,"variant"),P=r(()=>a.sortDirection?a.sortDirection==="asc"?"ascending":"descending":void 0,"ariaSort"),x=c(o,{get component(){return N()},get padding(){return a.padding||(n&&n.padding?n.padding:"normal")},get size(){return a.size||(n&&n.size?n.size:"medium")},get sortDirection(){return a.sortDirection},get stickyHeader(){return v()==="head"&&n&&n.stickyHeader},get variant(){return v()}}),I=R.useClasses(x),O=E(te,"th");return l(O,c({get as(){return a.component},get scope(){return F()},get["aria-sort"](){return P()}},t,{get class(){return T(I.root,t.class)},ownerState:x,get children(){return a.children}}))},"TableCell"));function ae(e){return u("MuiTableContainer",e)}r(ae,"getTableContainerUtilityClass");g("MuiTableContainer",["root"]);const ne=b()({name:"MuiTableContainer",propDefaults:({set:e})=>e({component:"div"}),selfPropNames:["children","classes"],utilityClass:ae,slotClasses:()=>({root:["root"]})}),le=p("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),re=ne.component(r(function({classes:t,allProps:o,props:a,otherProps:n}){return l(le,c(n,{get class(){return T(t.root,n.class)},ownerState:o,get children(){return a.children}}))},"TableContainer"));function oe(e){return u("MuiTableHead",e)}r(oe,"getTableHeadUtilityClass");g("MuiTableHead",["root"]);const ie=b()({name:"MuiTableHead",propDefaults:({set:e})=>e({component:B}),selfPropNames:["children","classes"],utilityClass:oe,slotClasses:()=>({root:["root"]})}),se=p("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),ce={variant:"head"},B="thead",de=ie.component(r(function({classes:t,allProps:o,otherProps:a,props:n}){return l(y.Provider,{value:ce,get children(){return l(se,c({get role(){return a.component===B?null:"rowgroup"}},a,{get class(){return T(t.root,a.class)},ownerState:o,get children(){return n.children}}))}})},"TableHead"));function ge(e){return u("MuiTableRow",e)}r(ge,"getTableRowUtilityClass");const H=g("MuiTableRow",["root","selected","hover","head","footer"]),ue=b()({name:"MuiTableRow",propDefaults:({set:e})=>e({component:A,hover:!1,selected:!1}),selfPropNames:["children","classes","hover","selected"],utilityClass:ge,slotClasses:e=>({root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]})}),be=p("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.head&&t.head,e.ownerState.footer&&t.footer]})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${H.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${H.selected}`]:{backgroundColor:m(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:m(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),A="tr",w=ue.component(r(function({classes:t,allProps:o,otherProps:a,props:n}){const s=f(y),h=c(o,{get head(){return s&&s.variant==="head"},get footer(){return s&&s.variant==="footer"}});return l(be,c({get role(){return a.component===A?null:"row"}},a,{get class(){return T(t.root,a.class)},ownerState:h,get children(){return n.children}}))},"TableRow"));function C(e,t,o,a,n){return{name:e,calories:t,fat:o,carbs:a,protein:n}}r(C,"createData");const pe=[C("Frozen yoghurt",159,6,24,4),C("Ice cream sandwich",237,9,37,4.3),C("Eclair",262,16,24,6),C("Cupcake",305,3.7,67,4.3),C("Gingerbread",356,16,49,3.9)];function U(){return l(re,{component:G,get children(){return l(z,{sx:{minWidth:650},"aria-label":"simple table",get children(){return[l(de,{get children(){return l(w,{get children(){return[l(i,{children:"Dessert (100g serving)"}),l(i,{align:"right",children:"Calories"}),l(i,{align:"right",children:"Fat (g)"}),l(i,{align:"right",children:"Carbs (g)"}),l(i,{align:"right",children:"Protein (g)"})]}})}}),l(Y,{get children(){return J(()=>pe,e=>l(w,{sx:{"&:last-child td, &:last-child th":{border:0}},get children(){return[l(i,{component:"th",scope:"row",get children(){return e.name}}),l(i,{align:"right",get children(){return e.calories}}),l(i,{align:"right",get children(){return e.fat}}),l(i,{align:"right",get children(){return e.carbs}}),l(i,{align:"right",get children(){return e.protein}})]}}))}})]}})}})}r(U,"BasicTable");U.code=`import {
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
`;function ve(){return l(K,{get name(){return z.name},importInfo:["Table","TableBody","TableCell","TableContainer","TableFooter","TableHead","TableRow"],examples:[U]})}r(ve,"TablePage");export{ve as default};
