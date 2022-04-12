var Re=Object.defineProperty;var i=(e,t)=>Re(e,"name",{value:t,configurable:!0});import{q as T,r as R,s as F,v as W,w as g,o as le,f as K,a as ce,m as p,ak as $e,K as $,n as C,d as r,A as B,aA as G,a8 as oe,aB as ke,ai as Le,aC as pe,ac as ze,t as w,an as J,S as me,ab as Be,a6 as f,aD as We,B as Q}from"./index.61be0cd6.js";import{u as O,F as Oe}from"./useFormControl.54404a4e.js";import{f as P,F as Pe}from"./formControlState.cb532a42.js";import{u as Ae}from"./useControlled.fbed3388.js";import{C as Me}from"./ComponentInfo.fe52fc09.js";import"./Link.63c94c2a.js";import"./copyText.60b096d7.js";import"./PaperCode.783539ce.js";function Se(e){return R("MuiInputBase",e)}i(Se,"getInputBaseUtilityClass");const j=T("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);function re(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}i(re,"hasValue");function qe(e,t=!1){return e&&(re(e.value)&&e.value!==""||t&&re(e.defaultValue)&&e.defaultValue!=="")}i(qe,"isFilled");const ie=F()({name:"MuiInputBase",propDefaults:({set:e})=>e({components:{},componentsProps:{},fullWidth:!1,inputComponent:"input",inputProps:{},multiline:!1,type:"text",disableInjectingGlobalStyles:!1}),selfPropNames:["aria-describedby","autoComplete","autoFocus","classes","color","components","componentsProps","defaultValue","disableInjectingGlobalStyles","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","required","rows","size","startAdornment","type","value"],utilityClass:Se,autoCallUseClasses:!1,slotClasses:e=>({root:["root",`color${W(e.color)}`,!!e.disabled&&"disabled",!!e.error&&"error",!!e.fullWidth&&"fullWidth",e.focused&&"focused",!!e.formControl&&"formControl",e.size==="small"&&"sizeSmall",e.multiline&&"multiline",!!e.startAdornment&&"adornedStart",!!e.endAdornment&&"adornedEnd",!!e.hiddenLabel&&"hiddenLabel"],input:["input",!!e.disabled&&"disabled",e.type==="search"&&"inputTypeSearch",e.multiline&&"inputMultiline",e.size==="small"&&"inputSizeSmall",!!e.hiddenLabel&&"inputHiddenLabel",!!e.startAdornment&&"inputAdornedStart",!!e.endAdornment&&"inputAdornedEnd"]})}),V=i((e,t)=>{const l=e.ownerState;return[t.root,!!l.formControl&&t.formControl,!!l.startAdornment&&t.adornedStart,!!l.endAdornment&&t.adornedEnd,!!l.error&&t.error,l.size==="small"&&t.sizeSmall,l.multiline&&t.multiline,l.color&&t[`color${W(l.color)}`],!!l.fullWidth&&t.fullWidth,!!l.hiddenLabel&&t.hiddenLabel]},"rootOverridesResolver"),H=i((e,t)=>{const l=e.ownerState;return[t.input,l.size==="small"&&t.inputSizeSmall,l.multiline&&t.inputMultiline,l.type==="search"&&t.inputTypeSearch,!!l.startAdornment&&t.inputAdornedStart,!!l.endAdornment&&t.inputAdornedEnd,!!l.hiddenLabel&&t.inputHiddenLabel]},"inputOverridesResolver"),U=g("div",{name:"MuiInputBase",slot:"Root",overridesResolver:V})(({theme:e,ownerState:t})=>({...e.typography.body1,color:e.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${j.disabled}`]:{color:e.palette.text.disabled,cursor:"default"},...t.multiline&&{padding:"4px 0 5px",...t.size==="small"&&{paddingTop:1}},...t.fullWidth&&{width:"100%"}})),D=g("input",{name:"MuiInputBase",slot:"Input",overridesResolver:H})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light",n={color:"currentColor",opacity:l?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},o={opacity:"0 !important"},d={opacity:l?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${j.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${j.disabled}`]:{opacity:1,WebkitTextFillColor:e.palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"},...t.size==="small"&&{paddingTop:1},...t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},...t.type==="search"&&{MozAppearance:"textfield"}}}),Ne=i(()=>r(ke,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),"inputGlobalStyles"),Y=ie.component(i(function({allProps:t,otherProps:l,props:n}){const o=i(()=>n.inputProps.value!=null?n.inputProps.value:n.value,"inputValue"),d=(o()??null)!==null,[a,b]=Ae({controlled:()=>o(),default:()=>n.defaultValue,name:"InputBase"}),m=Le({ref:s=>{typeof n.inputRef=="function"&&n.inputRef(s)}});let h,y=!1;le(()=>{m.ref.addEventListener("input",s=>{const v=m.ref.value;h=m.ref.selectionStart??v.length,y=!1,typeof n.inputProps.onChange=="function"&&n.inputProps.onChange(s),b(v),typeof n.onChange=="function"&&n.onChange(s,v),d&&!y&&(m.ref.value=a()??"")})}),K(s=>{if(d||s){y=!0;const v=a();if(typeof v=="string"){const q=h??v.length;v!==m.ref.value&&(m.ref.value=v),m.ref.selectionStart!==q&&m.ref.setSelectionRange(q,q)}}return!1},!0);const[A,L]=ce(!1),c=O(),he=P({props:t,muiFormControl:c,states:["color","disabled","error","hiddenLabel","size","required","filled"]}),x=p(()=>he,()=>({focused:c?c.focused:A()}));K(()=>{!c&&n.disabled&&A()&&(L(!1),typeof n.onBlur=="function"&&n.onBlur?.(null))});const xe=i(()=>c&&c.onFilled,"onFilled"),ve=i(()=>c&&c.onEmpty,"onEmpty"),M=i(s=>{qe(s)?xe()?.():ve()?.()},"checkDirty");$e(()=>{d&&M({value:a()})}),le(()=>{M(m.ref)});const Z=i(()=>n.multiline&&n.inputComponent==="input","isMultilineInput"),Ce=i(()=>{const s=n.inputComponent;return Z(),s},"InputComponent"),E=$(()=>{let s=n.inputProps;return Z()&&(n.rows?s={type:void 0,minRows:n.rows,maxRows:n.rows,...s}:s={type:void 0,maxRows:n.maxRows,minRows:n.minRows,...s}),p(s,()=>n.componentsProps.input||{})});K(()=>{c?.setAdornedStart(Boolean(n.startAdornment))});const S=p(t,()=>({color:x.color||"primary",disabled:x.disabled,error:x.error,focused:x.focused,formControl:c,hiddenLabel:x.hiddenLabel,size:x.size})),ee=ie.useClasses(S),te=i(()=>n.components.Root||U,"Root"),_=i(()=>n.componentsProps.root||{},"rootProps"),ne=i(()=>n.components.Input||D,"Input"),ye=p(()=>S,()=>_().ownerState||{}),Fe=p(()=>S,()=>E().ownerState||{}),Ie=p(x,()=>({startAdornment:n.startAdornment})),Te=$(()=>n.renderSuffix?.(Ie));return[C((()=>{const s=C(()=>!n.disableInjectingGlobalStyles,!0);return()=>s()&&Ne()})()),r(G,p(_,l,{get component(){return te()}},()=>!oe(te())&&{ownerState:ye},{onClick:s=>{m.ref&&s.currentTarget===s.target&&m.ref.focus(),typeof l.onClick=="function"&&l.onClick(s)},get className(){return B(ee.root,_().className,l.className)},get children(){return[C(()=>n.startAdornment),r(Oe.Provider,{value:void 0,get children(){return r(G,p({get component(){return ne()},ownerState:S,get["aria-invalid"](){return x.error},get["aria-describedby"](){return n["aria-describedby"]},get autocomplete(){return n.autoComplete},get autofocus(){return n.autoFocus},get disabled(){return x.disabled},get id(){return n.id},onAnimationStart:s=>{M(s.animationName==="mui-auto-fill-cancel"?m.ref:{value:"x"})},get name(){return n.name},get placeholder(){return n.placeholder},get readOnly(){return n.readOnly},get required(){return x.required},get rows(){return n.rows},get onKeyDown(){return n.onKeyDown},get onKeyUp(){return n.onKeyUp},get type(){return n.type}},E,()=>!oe(ne())&&{as:Ce(),ownerState:Fe},{ref:m,get className(){return B(ee.input,E().className)},onBlur:s=>{n.onBlur?.(s),typeof n.inputProps.onBlur=="function"&&n.inputProps.onBlur(s),c&&c.onBlur?c.onBlur():L(!1)},onInput:s=>{if(!d){const v=s.target||m.ref;if(v==null)throw new Error("MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.");M({value:v.value})}},onFocus:s=>{if(x.disabled){s.stopPropagation();return}typeof n.onFocus=="function"&&n.onFocus(s),typeof n.inputProps.onFocus=="function"&&n.inputProps.onFocus(s),c&&c.onFocus?c.onFocus():L(!0)}}))}}),C(()=>n.endAdornment),C(()=>Te())]}}))]},"InputBase"));function we(e){return R("MuiFilledInput",e)}i(we,"getFilledInputUtilityClass");const k=T("MuiFilledInput",["root","colorSecondary","underline","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","hiddenLabel","input","inputSizeSmall","inputHiddenLabel","inputMultiline","inputAdornedStart","inputAdornedEnd"]),Ve=F()({name:"MuiFilledInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text",hiddenLabel:!1}),selfPropNames:["classes","disableUnderline","hiddenLabel"],utilityClass:we,slotClasses:e=>({root:["root",!e.disableUnderline&&"underline"],input:["input"]})}),He=g(U,{name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[...V(e,t),!l.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light",n=l?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",o=l?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)";return{position:"relative",backgroundColor:o,borderTopLeftRadius:`${e.shape.borderRadius}px`,borderTopRightRadius:`${e.shape.borderRadius}px`,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:l?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)","@media (hover: none)":{backgroundColor:o}},[`&.${k.focused}`]:{backgroundColor:o},[`&.${k.disabled}`]:{backgroundColor:l?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${e.palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${k.focused}:after`]:{transform:"scaleX(1)"},[`&.${k.error}:after`]:{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${k.disabled}):before`]:{borderBottom:`1px solid ${e.palette.text.primary}`},[`&.${k.disabled}:before`]:{borderBottomStyle:"dotted"}},...t.startAdornment&&{paddingLeft:12},...t.endAdornment&&{paddingRight:12},...t.multiline&&{padding:"25px 12px 8px",...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17}}}}),Ue=g(D,{name:"MuiFilledInput",slot:"Input",overridesResolver:H})(({theme:e,ownerState:t})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17},...t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0},...t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}})),De=Ve.component(i(function({allProps:t,classes:l,otherProps:n,props:o}){const d=$(()=>{const b={root:{ownerState:t},input:{ownerState:t}};return n.componentsProps?pe(n.componentsProps,b):b}),a=p(()=>o.classes||{},l);return r(Y,p(n,{get components(){return{Root:He,Input:Ue,...n.components||{}}},get componentsProps(){return d()},classes:a}))},"FilledInput"));function Ee(e){return R("MuiFormHelperText",e)}i(Ee,"getFormHelperTextUtilityClasses");const ae=T("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),_e=w('<span class="notranslate">&#8203;</span>'),Ke=F()({name:"MuiFormHelperText",propDefaults:({set:e})=>e({component:"p"}),selfPropNames:["children","classes","disabled","error","filled","focused","margin","required","variant"],utilityClass:Ee,slotClasses:e=>({root:["root",!!e.disabled&&"disabled",!!e.error&&"error",!!e.size&&`size${W(e.size)}`,e.contained&&"contained",!!e.focused&&"focused",!!e.filled&&"filled",!!e.required&&"required"]})}),Xe=g("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.size&&t[`size${W(l.size)}`],l.contained&&t.contained,l.filled&&t.filled]}})(({theme:e,ownerState:t})=>({color:e.palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${ae.disabled}`]:{color:e.palette.text.disabled},[`&.${ae.error}`]:{color:e.palette.error.main},...t.size==="small"&&{marginTop:4},...t.contained&&{marginLeft:14,marginRight:14}})),Ge=Ke.component(i(function({allProps:t,classes:l,otherProps:n,props:o}){const d=O(),a=P({props:t,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),b=p(t,()=>({contained:a.variant==="filled"||a.variant==="outlined",variant:a.variant,size:a.size,disabled:a.disabled,error:a.error,filled:a.filled,focused:a.focused,required:a.required})),m=ze(()=>o.children);return r(Xe,p(n,{get as(){return n.component},ownerState:b,get className(){return B(l.root,n.className)},get children(){return C(()=>m()===" ",!0)()?_e.cloneNode(!0):m()}}))},"FormHelperText"));function je(e){return R("MuiInput",e)}i(je,"getInputUtilityClass");const N=T("MuiInput",["root","formControl","focused","disabled","colorSecondary","underline","error","sizeSmall","multiline","fullWidth","input","inputSizeSmall","inputMultiline","inputTypeSearch"]),Je=F()({name:"MuiInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","disableUnderline"],utilityClass:je,slotClasses:e=>({root:["root",!e.disableUnderline&&"underline"],input:["input"]})}),Qe=g(U,{skipProps:J.filter(e=>e!=="classes"),name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[...V(e,t),!l.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{position:"relative",...t.formControl&&{"label + &":{marginTop:16}},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${e.palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${N.focused}:after`]:{transform:"scaleX(1)"},[`&.${N.error}:after`]:{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${N.disabled}):before`]:{borderBottom:`2px solid ${e.palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${n}`}},[`&.${N.disabled}:before`]:{borderBottomStyle:"dotted"}}}}),Ye=g(D,{name:"MuiInput",slot:"Input",overridesResolver:H})({}),Ze=Je.component(i(function({classes:t,otherProps:l,props:n}){const o=$(()=>{const b={root:{ownerState:{disableUnderline:n.disableUnderline}}};return l.componentsProps?pe(l.componentsProps,b):b}),d=p(t,()=>n.classes||{});return r(Y,p(l,{get components(){return{Root:Qe,Input:Ye,...l.components||{}}},get componentsProps(){return o()},classes:d}))},"Input"));function et(e){return R("MuiFormLabel",e)}i(et,"getFormLabelUtilityClasses");const z=T("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),de=F()({name:"MuiFormLabel",propDefaults:({set:e})=>e({component:"label"}),selfPropNames:["children","classes","color","disabled","error","filled","focused","required"],autoCallUseClasses:!1,utilityClass:et,slotClasses:e=>({root:["root",`color${W(e.color)}`,!!e.disabled&&"disabled",!!e.error&&"error",!!e.filled&&"filled",!!e.focused&&"focused",!!e.required&&"required"],asterisk:["asterisk",!!e.error&&"error"]})}),tt=g("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>({...t.root,...e.color==="secondary"&&t.colorSecondary,...e.filled&&t.filled})})(({theme:e,ownerState:t})=>({color:e.palette.text.secondary,...e.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",[`&.${z.focused}`]:{color:e.palette[t.color].main},[`&.${z.disabled}`]:{color:e.palette.text.disabled},[`&.${z.error}`]:{color:e.palette.error.main}})),nt=g("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${z.error}`]:{color:e.palette.error.main}})),lt=de.component(i(function({allProps:t,otherProps:l,props:n}){const o=O(),d=P({props:t,muiFormControl:o,states:["color","required","focused","disabled","error","filled"]}),a=p(t,()=>({color:d.color||"primary",disabled:d.disabled,error:d.error,filled:d.filled,focused:d.focused,required:d.required})),b=de.useClasses(a);return r(tt,p(l,{get as(){return l.component},ownerState:a,get className(){return B(b.root,l.className)},get children(){return[C(()=>n.children),r(me,{get when(){return d.required},get children(){return r(nt,{ownerState:a,"aria-hidden":!0,get className(){return b.asterisk},get children(){return["\u2009","*"]}})}})]}}))},"FormLabel"));function ot(e){return R("MuiInputLabel",e)}i(ot,"getInputLabelUtilityClasses");T("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const se=F()({name:"MuiInputLabel",propDefaults:({set:e})=>e({disableAnimation:!1}),selfPropNames:["children","classes","color","disableAnimation","disabled","error","focused","margin","required","shrink","variant"],autoCallUseClasses:!1,utilityClass:ot,slotClasses:e=>({root:["root",!!e.formControl&&"formControl",!e.disableAnimation&&"animated",!!e.shrink&&"shrink",e.size==="small"&&"sizeSmall",!!e.variant&&e.variant],asterisk:[!!e.required&&"asterisk"]})}),rt=g(lt,{skipProps:J.filter(e=>e!=="classes"),name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[{[`& .${z.asterisk}`]:t.asterisk},t.root,l.formControl&&t.formControl,l.size==="small"&&t.sizeSmall,l.shrink&&t.shrink,!l.disableAnimation&&t.animated,t[l.variant]]}})(({theme:e,ownerState:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",...t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},...t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},...t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},...!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},...t.variant==="filled"&&{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)",...t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"}}},...t.variant==="outlined"&&{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}}})),it=se.component(i(function({allProps:t,props:l}){const n=O(),[,o]=Be(t,["disableAnimation","margin","shrink","variant"]),d=i(()=>{let y=l.shrink;return typeof y>"u"&&n&&(y=n.filled||n.focused||n.adornedStart),y},"shrink"),a=P({props:t,muiFormControl:n,states:["size","variant","required"]}),b=p(t,()=>({formControl:n,shrink:d(),size:a.size,variant:a.variant,required:a.required})),m=se.useClasses(b),h=p(m,()=>l.classes||{});return r(rt,p(o,{get["data-shrink"](){return d()},ownerState:b,classes:h}))},"InputLabel")),at=w("<span></span>"),dt=w('<span class="notranslate">&#8203;</span>'),st=F()({name:"MuiNotchedOutline",selfPropNames:["disabled","error","focused","label","notched"]}),ut=g("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:"1px",overflow:"hidden",minWidth:"0%"}),ct=g("legend")(({ownerState:e,theme:t})=>({float:"unset",...!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},...e.withLabel&&{display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:"0.01px",transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block"},...e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}}})),pt=st.component(i(function({allProps:t,otherProps:l,props:n}){const o=i(()=>n.label!=null&&n.label!=="","withLabel"),d=p(t,()=>({withLabel:o()}));return r(ut,p(l,{"aria-hidden":!0,get className(){return l.className},ownerState:d,get children(){return r(ct,{ownerState:d,get children(){return r(me,{get when(){return o()},get fallback(){return dt.cloneNode(!0)},get children(){const a=at.cloneNode(!0);return f(a,()=>n.label),a}})}})}}))},"NotchedOutline"));function mt(e){return R("MuiOutlinedInput",e)}i(mt,"getOutlinedInputUtilityClass");const I=T("MuiOutlinedInput",["root","colorSecondary","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","notchedOutline","input","inputSizeSmall","inputMultiline","inputAdornedStart","inputAdornedEnd"]),ft=F()({name:"MuiOutlinedInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","label","notched"],utilityClass:mt,slotClasses:()=>({root:["root"],notchedOutline:["notchedOutline"],input:["input"]})}),bt=g(U,{skipProps:J.filter(e=>e!=="classes"),name:"MuiOutlinedInput",slot:"Root",overridesResolver:V})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:e.shape.borderRadius,[`&:hover .${I.notchedOutline}`]:{borderColor:e.palette.text.primary},"@media (hover: none)":{[`&:hover .${I.notchedOutline}`]:{borderColor:l}},[`&.${I.focused} .${I.notchedOutline}`]:{borderColor:e.palette[t.color].main,borderWidth:"2px"},[`&.${I.error} .${I.notchedOutline}`]:{borderColor:e.palette.error.main},[`&.${I.disabled} .${I.notchedOutline}`]:{borderColor:e.palette.action.disabled},...t.startAdornment&&{paddingLeft:14},...t.endAdornment&&{paddingRight:14},...t.multiline&&{padding:"16.5px 14px",...t.size==="small"&&{padding:"8.5px 14px"}}}}),gt=g(pt,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>({borderColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"})),ht=g(D,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:H})(({theme:e,ownerState:t})=>({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"},...t.size==="small"&&{padding:"8.5px 14px"},...t.multiline&&{padding:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0}})),xt=ft.component(i(function({allProps:t,classes:l,otherProps:n,props:o}){const d=O(),a=P({props:t,muiFormControl:d,states:["required"]}),b=$(()=>{const h=o.label;return h!=null&&h!==""&&a.required?[h,"\xA0","*"]:h}),m=p(l,()=>o.classes||{},{notchedOutline:null});return r(Y,p({renderSuffix:h=>r(gt,{get className(){return l.notchedOutline},get label(){return b()},get notched(){return C(()=>typeof o.notched<"u",!0)()?o.notched:Boolean(h.startAdornment||h.filled||h.focused)}})},n,{get components(){return{Root:bt,Input:ht,...n.components||{}}},classes:m}))},"OutlinedInput"));function vt(e){return R("MuiTextField",e)}i(vt,"getTextFieldUtilityClass");T("MuiTextField",["root"]);function Ct(e){return $(()=>e?.()??`mui-${We()}`)}i(Ct,"createUniqueId");const yt=F()({name:"MuiTextField",propDefaults:({set:e})=>e({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:vt,slotClasses:()=>({root:["root"]})}),Ft={standard:Ze,filled:De,outlined:xt},It=g(Pe,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),u=yt.component(i(function({allProps:t,classes:l,otherProps:n,props:o}){const d=$(()=>{const c={};return o.variant==="outlined"&&(o.InputLabelProps&&typeof o.InputLabelProps.shrink<"u"&&(c.notched=o.InputLabelProps.shrink),c.label=o.label),c}),a=Ct(()=>o.id),b=i(()=>o.helperText&&a()?`${a()}-helper-text`:void 0,"helperTextId"),m=i(()=>o.label&&a()?`${a()}-label`:void 0,"inputLabelId"),h=i(()=>Ft[o.variant],"InputComponent"),y=i(()=>r(G,p({get component(){return h()},get["aria-describedby"](){return b()},get autoComplete(){return o.autoComplete},get autoFocus(){return o.autoFocus},get defaultValue(){return o.defaultValue},get fullWidth(){return o.fullWidth},get multiline(){return o.multiline},get name(){return o.name},get rows(){return o.rows},get maxRows(){return o.maxRows},get minRows(){return o.minRows},get type(){return o.type},get value(){return o.value},get id(){return a()},get inputRef(){return o.inputRef},get onBlur(){return o.onBlur},get onChange(){return o.onChange},get onFocus(){return o.onFocus},get placeholder(){return o.placeholder},get inputProps(){return o.inputProps}},d,()=>o.InputProps||{})),"InputElement"),A=i(()=>{const c=o.label;return c!=null&&c!==""&&r(it,p({get htmlFor(){return a()},get id(){return m()}},()=>o.InputLabelProps||{},{children:c}))},"label"),L=i(()=>{const c=o.helperText;if(c)return r(Ge,p({get id(){return b()}},()=>o.FormHelperTextProps||{},{children:c}))},"helperText");return r(It,p({get className(){return B(l.root,n.className)},get disabled(){return o.disabled},get error(){return o.error},get fullWidth(){return o.fullWidth},get required(){return o.required},get color(){return o.color},get variant(){return o.variant},ownerState:t},n,{get children(){return[C(()=>A()),C(()=>y()),C(()=>L())]}}))},"TextField"));function fe(){return r(Q,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autocomplete:"off",get children(){return[r(u,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),r(u,{id:"filled-basic",label:"Filled",variant:"filled"}),r(u,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}i(fe,"BasicTextFields");fe.code=`import Box from "@suid/material/Box";
import TextField from "@suid/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autocomplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
      />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}
`;const X=w("<div></div>");function be(){return r(Q,{component:"form",sx:{maxWidth:764,[`& .${u}`]:{m:1,width:"25ch"}},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=X.cloneNode(!0);return f(e,r(u,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),f(e,r(u,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),f(e,r(u,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),f(e,r(u,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),f(e,r(u,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),f(e,r(u,{id:"outlined-search",label:"Search field",type:"search"}),null),f(e,r(u,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),e})(),(()=>{const e=X.cloneNode(!0);return f(e,r(u,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),f(e,r(u,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),f(e,r(u,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),f(e,r(u,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),f(e,r(u,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),f(e,r(u,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),f(e,r(u,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),e})(),(()=>{const e=X.cloneNode(!0);return f(e,r(u,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),f(e,r(u,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),f(e,r(u,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),f(e,r(u,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),f(e,r(u,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),f(e,r(u,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),f(e,r(u,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),e})()]}})}i(be,"FormPropsTextFields");be.code=`import Box from "@suid/material/Box";
import TextField from "@suid/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 764,
        [\`& .\${TextField}\`]: { m: 1, width: "25ch" },
      }}
      noValidate
      autocomplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  );
}
`;function ue(e){return e.split(" ").map(t=>t.slice(0,1).toUpperCase()+t.slice(1).toLowerCase()).join(" ")}i(ue,"capitalizeWords");function ge(){const[e,t]=ce(ue("Cat in the Hat"));return r(Q,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},novalidate:!0,autocomplete:"off",get children(){return[r(u,{id:"outlined-name",label:"Name",get value(){return e()},onChange:(l,n)=>{t(ue(n))}}),r(u,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]}})}i(ge,"StateTextFields");ge.code=`import Box from "@suid/material/Box";
import TextField from "@suid/material/TextField";
import { createSignal } from "solid-js";

function capitalizeWords(value: string) {
  return value
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(" ");
}

export default function StateTextFields() {
  const [name, setName] = createSignal(capitalizeWords("Cat in the Hat"));

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      novalidate
      autocomplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={name()}
        onChange={(event, value) => {
          setName(capitalizeWords(value));
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
      />
    </Box>
  );
}
`;function Pt(){return r(Me,{get name(){return u.name},docsName:"text-fields",examples:[fe,{title:"Form props",component:be},{title:"Uncontrolled vs. Controlled",component:ge}]})}i(Pt,"TextFieldPage");export{Pt as default};
