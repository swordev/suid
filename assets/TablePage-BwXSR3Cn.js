var W=Object.defineProperty;var a=(e,t)=>W(e,"name",{value:t,configurable:!0});import{a3 as k,Q as g,O as u,f as b,h as l,V as p,m as c,U as T,a4 as f,W as d,a1 as O,a2 as j,$ as m,N as G,aG as E}from"./index-Chiq91vg.js";import{C as S}from"./ComponentInfo-BMdmwTSx.js";import"./Link-Dbh_WtTh.js";import"./copyText-BVJZZxRr.js";import"./PaperCode-9D997B7Z.js";const M=k();function J(e){return g("MuiTable",e)}a(J,"getTableUtilityClass");u("MuiTable",["root","stickyHeader"]);const L=b()({name:"MuiTable",propDefaults:a(({set:e})=>e({component:$,padding:"normal",size:"medium",stickyHeader:!1}),"propDefaults"),selfPropNames:["children","classes","padding","size","stickyHeader"],utilityClass:J,slotClasses:a(e=>({root:["root",e.stickyHeader&&"stickyHeader"]}),"slotClasses")}),Q=p("table",{name:"MuiTable",slot:"Root",overridesResolver:a((e,t)=>[t.root,e.ownerState.stickyHeader&&t.stickyHeader],"overridesResolver")})(({theme:e,ownerState:t})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"},...t.stickyHeader&&{borderCollapse:"separate"}})),$="table",z=L.component(a(function({allProps:t,classes:o,otherProps:n,props:r}){return l(M.Provider,{value:{get padding(){return r.padding},get size(){return r.size},get stickyHeader(){return r.stickyHeader}},get children(){return l(Q,c({get role(){return t.component===$?null:"table"}},n,{get class(){return T(o.root,n.class)},ownerState:t,get children(){return r.children}}))}})},"Table2")),y=k();function V(e){return g("MuiTableBody",e)}a(V,"getTableBodyUtilityClass");u("MuiTableBody",["root"]);const X=b()({name:"MuiTableBody",propDefaults:a(({set:e})=>e({component:D}),"propDefaults"),selfPropNames:["children","classes"],utilityClass:V,slotClasses:a(()=>({root:["root"]}),"slotClasses")}),q=p("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:a((e,t)=>t.root,"overridesResolver")})({display:"table-row-group"}),D="tbody",K=X.component(a(function({allProps:t,classes:o,props:n,otherProps:r}){return l(y.Provider,{value:{variant:"body"},get children(){return l(q,c({get role(){return r.component===D?null:"rowgroup"}},r,{get class(){return T(o.root,r.class)},ownerState:t,get children(){return n.children}}))}})},"TableBody2"));function Y(e){return g("MuiTableCell",e)}a(Y,"getTableCellUtilityClass");const Z=u("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),x=b()({name:"MuiTableCell",propDefaults:a(({set:e})=>e({align:"inherit"}),"propDefaults"),selfPropNames:["align","children","classes","component","padding","scope","size","sortDirection","variant"],autoCallUseClasses:!1,utilityClass:Y,slotClasses:a(e=>({root:["root",e.variant,e.stickyHeader&&"stickyHeader",e.align!=="inherit"&&`align${d(e.align)}`,e.padding!=="normal"&&`padding${d(e.padding)}`,`size${d(e.size)}`]}),"slotClasses")}),_=p("td",{name:"MuiTableCell",slot:"Root",overridesResolver:a((e,t)=>[t.root,t[e.ownerState.variant],t[`size${d(e.ownerState.size)}`],e.ownerState.padding!=="normal"&&t[`padding${d(e.ownerState.padding)}`],e.ownerState.align!=="inherit"&&t[`align${d(e.ownerState.align)}`],e.ownerState.stickyHeader&&t.stickyHeader],"overridesResolver")})(({theme:e,ownerState:t})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid
    ${e.palette.mode==="light"?O(m(e.palette.divider,1),.88):j(m(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,...t.variant==="head"&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},...t.variant==="body"&&{color:e.palette.text.primary},...t.variant==="footer"&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},...t.size==="small"&&{padding:"6px 16px",[`&.${Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},...t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},...t.padding==="none"&&{padding:0},...t.align==="left"&&{textAlign:"left"},...t.align==="center"&&{textAlign:"center"},...t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},...t.align==="justify"&&{textAlign:"justify"},...t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default}})),i=x.component(a(function({otherProps:t,allProps:o,props:n}){const r=f(M),s=f(y),C=a(()=>s&&s.variant==="head","isHeadCell"),A=a(()=>o.component||C()?"th":"td","component"),N=a(()=>!n.scope&&C()?"col":n.scope,"scope"),v=a(()=>n.variant||s&&s.variant,"variant"),I=a(()=>n.sortDirection?n.sortDirection==="asc"?"ascending":"descending":void 0,"ariaSort"),R=c(o,{get component(){return A()},get padding(){return n.padding||(r&&r.padding?r.padding:"normal")},get size(){return n.size||(r&&r.size?r.size:"medium")},get sortDirection(){return n.sortDirection},get stickyHeader(){return v()==="head"&&r&&r.stickyHeader},get variant(){return v()}}),P=x.useClasses(R);return l(_,c({get as(){return n.component},get scope(){return N()},get"aria-sort"(){return I()}},t,{get class(){return T(P.root,t.class)},ownerState:R,get children(){return n.children}}))},"TableCell2"));function ee(e){return g("MuiTableContainer",e)}a(ee,"getTableContainerUtilityClass");u("MuiTableContainer",["root"]);const te=b()({name:"MuiTableContainer",propDefaults:a(({set:e})=>e({component:"div"}),"propDefaults"),selfPropNames:["children","classes"],utilityClass:ee,slotClasses:a(()=>({root:["root"]}),"slotClasses")}),ae=p("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:a((e,t)=>t.root,"overridesResolver")})({width:"100%",overflowX:"auto"}),ne=te.component(a(function({classes:t,allProps:o,props:n,otherProps:r}){return l(ae,c(r,{get class(){return T(t.root,r.class)},ownerState:o,get children(){return n.children}}))},"TableContainer2"));function le(e){return g("MuiTableHead",e)}a(le,"getTableHeadUtilityClass");u("MuiTableHead",["root"]);const re=b()({name:"MuiTableHead",propDefaults:a(({set:e})=>e({component:B}),"propDefaults"),selfPropNames:["children","classes"],utilityClass:le,slotClasses:a(()=>({root:["root"]}),"slotClasses")}),oe=p("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:a((e,t)=>t.root,"overridesResolver")})({display:"table-header-group"}),ie={variant:"head"},B="thead",se=re.component(a(function({classes:t,allProps:o,otherProps:n,props:r}){return l(y.Provider,{value:ie,get children(){return l(oe,c({get role(){return n.component===B?null:"rowgroup"}},n,{get class(){return T(t.root,n.class)},ownerState:o,get children(){return r.children}}))}})},"TableHead2"));function ce(e){return g("MuiTableRow",e)}a(ce,"getTableRowUtilityClass");const H=u("MuiTableRow",["root","selected","hover","head","footer"]),de=b()({name:"MuiTableRow",propDefaults:a(({set:e})=>e({component:F,hover:!1,selected:!1}),"propDefaults"),selfPropNames:["children","classes","hover","selected"],utilityClass:ce,slotClasses:a(e=>({root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]}),"slotClasses")}),ge=p("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:a((e,t)=>[t.root,e.ownerState.head&&t.head,e.ownerState.footer&&t.footer],"overridesResolver")})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${H.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${H.selected}`]:{backgroundColor:m(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:m(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),F="tr",w=de.component(a(function({classes:t,allProps:o,otherProps:n,props:r}){const s=f(y),C=c(o,{get head(){return s&&s.variant==="head"},get footer(){return s&&s.variant==="footer"}});return l(ge,c({get role(){return n.component===F?null:"row"}},n,{get class(){return T(t.root,n.class)},ownerState:C,get children(){return r.children}}))},"TableRow2"));function h(e,t,o,n,r){return{name:e,calories:t,fat:o,carbs:n,protein:r}}a(h,"createData");const ue=[h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9)];function U(){return l(ne,{component:G,get children(){return l(z,{sx:{minWidth:650},"aria-label":"simple table",get children(){return[l(se,{get children(){return l(w,{get children(){return[l(i,{children:"Dessert (100g serving)"}),l(i,{align:"right",children:"Calories"}),l(i,{align:"right",children:"Fat (g)"}),l(i,{align:"right",children:"Carbs (g)"}),l(i,{align:"right",children:"Protein (g)"})]}})}}),l(K,{get children(){return l(E,{each:ue,children:a(e=>l(w,{sx:{"&:last-child td, &:last-child th":{border:0}},get children(){return[l(i,{component:"th",scope:"row",get children(){return e.name}}),l(i,{align:"right",get children(){return e.calories}}),l(i,{align:"right",get children(){return e.fat}}),l(i,{align:"right",get children(){return e.carbs}}),l(i,{align:"right",get children(){return e.protein}})]}}),"children")})}})]}})}})}a(U,"BasicTable");U.code=`import {
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
`;function ye(){return l(S,{get name(){return z.name},importInfo:["Table","TableBody","TableCell","TableContainer","TableFooter","TableHead","TableRow"],examples:[U]})}a(ye,"TablePage");export{ye as default};
