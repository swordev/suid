var O=Object.defineProperty;var r=(e,t)=>O(e,"name",{value:t,configurable:!0});import{a2 as k,N as g,O as u,f as b,R as p,h as n,m as c,W as T,Q as d,a0 as j,Y as m,a1 as E,a3 as f,ap as G,L,aH as S}from"./index-DSsc118D.js";import{C as J}from"./ComponentInfo-NUIRYxjW.js";import"./Link-mETYY_cW.js";import"./copyText-C3xtTZ5Y.js";import"./PaperCode-Bt7UXUPI.js";const M=k();function Q(e){return u("MuiTable",e)}r(Q,"getTableUtilityClass");g("MuiTable",["root","stickyHeader"]);const X=b()({name:"MuiTable",propDefaults:({set:e})=>e({component:$,padding:"normal",size:"medium",stickyHeader:!1}),selfPropNames:["children","classes","padding","size","stickyHeader"],utilityClass:Q,slotClasses:e=>({root:["root",e.stickyHeader&&"stickyHeader"]})}),Y=p("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"},...t.stickyHeader&&{borderCollapse:"separate"}})),$="table",z=X.component(r(function({allProps:t,classes:o,otherProps:a,props:l}){return n(M.Provider,{value:{get padding(){return l.padding},get size(){return l.size},get stickyHeader(){return l.stickyHeader}},get children(){return n(Y,c({get role(){return t.component===$?null:"table"}},a,{get class(){return T(o.root,a.class)},ownerState:t,get children(){return l.children}}))}})},"Table2")),y=k();function q(e){return u("MuiTableBody",e)}r(q,"getTableBodyUtilityClass");g("MuiTableBody",["root"]);const K=b()({name:"MuiTableBody",propDefaults:({set:e})=>e({component:D}),selfPropNames:["children","classes"],utilityClass:q,slotClasses:()=>({root:["root"]})}),V=p("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),D="tbody",Z=K.component(r(function({allProps:t,classes:o,props:a,otherProps:l}){return n(y.Provider,{value:{variant:"body"},get children(){return n(V,c({get role(){return l.component===D?null:"rowgroup"}},l,{get class(){return T(o.root,l.class)},ownerState:t,get children(){return a.children}}))}})},"TableBody2"));function _(e){return u("MuiTableCell",e)}r(_,"getTableCellUtilityClass");const ee=g("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),x=b()({name:"MuiTableCell",propDefaults:({set:e})=>e({align:"inherit"}),selfPropNames:["align","children","classes","component","padding","scope","size","sortDirection","variant"],autoCallUseClasses:!1,utilityClass:_,slotClasses:e=>({root:["root",e.variant,e.stickyHeader&&"stickyHeader",e.align!=="inherit"&&`align${d(e.align)}`,e.padding!=="normal"&&`padding${d(e.padding)}`,`size${d(e.size)}`]})}),te=p("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>[t.root,t[e.ownerState.variant],t[`size${d(e.ownerState.size)}`],e.ownerState.padding!=="normal"&&t[`padding${d(e.ownerState.padding)}`],e.ownerState.align!=="inherit"&&t[`align${d(e.ownerState.align)}`],e.ownerState.stickyHeader&&t.stickyHeader]})(({theme:e,ownerState:t})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?j(m(e.palette.divider,1),.88):E(m(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,...t.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},...t.variant==="body"&&{color:e.palette.text.primary},...t.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},...t.size==="small"&&{padding:"6px 16px",[`&.${ee.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},...t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},...t.padding==="none"&&{padding:0},...t.align==="left"&&{textAlign:"left"},...t.align==="center"&&{textAlign:"center"},...t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},...t.align==="justify"&&{textAlign:"justify"},...t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default}})),i=x.component(r(function({otherProps:t,allProps:o,props:a}){const l=f(M),s=f(y),C=r(()=>s&&s.variant==="head","isHeadCell"),A=r(()=>o.component||C()?"th":"td","component"),N=r(()=>!a.scope&&C()?"col":a.scope,"scope"),v=r(()=>a.variant||s&&s.variant,"variant"),I=r(()=>a.sortDirection?a.sortDirection==="asc"?"ascending":"descending":void 0,"ariaSort"),R=c(o,{get component(){return A()},get padding(){return a.padding||(l&&l.padding?l.padding:"normal")},get size(){return a.size||(l&&l.size?l.size:"medium")},get sortDirection(){return a.sortDirection},get stickyHeader(){return v()==="head"&&l&&l.stickyHeader},get variant(){return v()}}),P=x.useClasses(R),W=G(te,"th");return n(W,c({get as(){return a.component},get scope(){return N()},get"aria-sort"(){return I()}},t,{get class(){return T(P.root,t.class)},ownerState:R,get children(){return a.children}}))},"TableCell2"));function ae(e){return u("MuiTableContainer",e)}r(ae,"getTableContainerUtilityClass");g("MuiTableContainer",["root"]);const ne=b()({name:"MuiTableContainer",propDefaults:({set:e})=>e({component:"div"}),selfPropNames:["children","classes"],utilityClass:ae,slotClasses:()=>({root:["root"]})}),le=p("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),re=ne.component(r(function({classes:t,allProps:o,props:a,otherProps:l}){return n(le,c(l,{get class(){return T(t.root,l.class)},ownerState:o,get children(){return a.children}}))},"TableContainer2"));function oe(e){return u("MuiTableHead",e)}r(oe,"getTableHeadUtilityClass");g("MuiTableHead",["root"]);const ie=b()({name:"MuiTableHead",propDefaults:({set:e})=>e({component:B}),selfPropNames:["children","classes"],utilityClass:oe,slotClasses:()=>({root:["root"]})}),se=p("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),ce={variant:"head"},B="thead",de=ie.component(r(function({classes:t,allProps:o,otherProps:a,props:l}){return n(y.Provider,{value:ce,get children(){return n(se,c({get role(){return a.component===B?null:"rowgroup"}},a,{get class(){return T(t.root,a.class)},ownerState:o,get children(){return l.children}}))}})},"TableHead2"));function ge(e){return u("MuiTableRow",e)}r(ge,"getTableRowUtilityClass");const H=g("MuiTableRow",["root","selected","hover","head","footer"]),ue=b()({name:"MuiTableRow",propDefaults:({set:e})=>e({component:F,hover:!1,selected:!1}),selfPropNames:["children","classes","hover","selected"],utilityClass:ge,slotClasses:e=>({root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]})}),be=p("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>[t.root,e.ownerState.head&&t.head,e.ownerState.footer&&t.footer]})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${H.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${H.selected}`]:{backgroundColor:m(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:m(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),F="tr",w=ue.component(r(function({classes:t,allProps:o,otherProps:a,props:l}){const s=f(y),C=c(o,{get head(){return s&&s.variant==="head"},get footer(){return s&&s.variant==="footer"}});return n(be,c({get role(){return a.component===F?null:"row"}},a,{get class(){return T(t.root,a.class)},ownerState:C,get children(){return l.children}}))},"TableRow2"));function h(e,t,o,a,l){return{name:e,calories:t,fat:o,carbs:a,protein:l}}r(h,"createData");const pe=[h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9)];function U(){return n(re,{component:L,get children(){return n(z,{sx:{minWidth:650},"aria-label":"simple table",get children(){return[n(de,{get children(){return n(w,{get children(){return[n(i,{children:"Dessert (100g serving)"}),n(i,{align:"right",children:"Calories"}),n(i,{align:"right",children:"Fat (g)"}),n(i,{align:"right",children:"Carbs (g)"}),n(i,{align:"right",children:"Protein (g)"})]}})}}),n(Z,{get children(){return n(S,{each:pe,children:e=>n(w,{sx:{"&:last-child td, &:last-child th":{border:0}},get children(){return[n(i,{component:"th",scope:"row",get children(){return e.name}}),n(i,{align:"right",get children(){return e.calories}}),n(i,{align:"right",get children(){return e.fat}}),n(i,{align:"right",get children(){return e.carbs}}),n(i,{align:"right",get children(){return e.protein}})]}})})}})]}})}})}r(U,"BasicTable");U.code=`import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@suid/material";
import { For } from "solid-js";

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
          <For each={rows}>
            {(row) => (
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
            )}
          </For>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
`;function ve(){return n(J,{get name(){return z.name},importInfo:["Table","TableBody","TableCell","TableContainer","TableFooter","TableHead","TableRow"],examples:[U]})}r(ve,"TablePage");export{ve as default};
