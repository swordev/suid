var Fe=Object.defineProperty;var i=(e,t)=>Fe(e,"name",{value:t,configurable:!0});import{q as T,r as R,s as I,v as S,w as h,o as ne,f as _,a as se,m as p,ak as Ie,K as z,n as C,d as o,A,aE as G,a8 as le,aF as Te,ai as Re,aG as ue,ac as $e,t as w,an as j,ab as ze,S as ke,a6 as f,B as J}from"./index.2116f91f.js";import{u as V,F as Be}from"./useFormControl.f903fea6.js";import{f as M,F as Le}from"./formControlState.e70fda3d.js";import{u as We}from"./useControlled.5deb26ee.js";import{F as Pe,f as Oe,c as Ae}from"./createUniqueId.e6fcaf5d.js";import{C as Se}from"./ComponentInfo.c0ea0fda.js";import"./Link.1208e16e.js";import"./copyText.5f673600.js";import"./PaperCode.7c834132.js";function we(e){return R("MuiInputBase",e)}i(we,"getInputBaseUtilityClass");const X=T("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);function re(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}i(re,"hasValue");function Ve(e,t=!1){return e&&(re(e.value)&&e.value!==""||t&&re(e.defaultValue)&&e.defaultValue!=="")}i(Ve,"isFilled");const oe=I()({name:"MuiInputBase",propDefaults:({set:e})=>e({components:{},componentsProps:{},fullWidth:!1,inputComponent:"input",inputProps:{},multiline:!1,type:"text",disableInjectingGlobalStyles:!1}),selfPropNames:["aria-describedby","autoComplete","autoFocus","classes","color","components","componentsProps","defaultValue","disableInjectingGlobalStyles","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","required","rows","size","startAdornment","type","value"],utilityClass:we,autoCallUseClasses:!1,slotClasses:e=>({root:["root",`color${S(e.color)}`,!!e.disabled&&"disabled",!!e.error&&"error",!!e.fullWidth&&"fullWidth",e.focused&&"focused",!!e.formControl&&"formControl",e.size==="small"&&"sizeSmall",e.multiline&&"multiline",!!e.startAdornment&&"adornedStart",!!e.endAdornment&&"adornedEnd",!!e.hiddenLabel&&"hiddenLabel"],input:["input",!!e.disabled&&"disabled",e.type==="search"&&"inputTypeSearch",e.multiline&&"inputMultiline",e.size==="small"&&"inputSizeSmall",!!e.hiddenLabel&&"inputHiddenLabel",!!e.startAdornment&&"inputAdornedStart",!!e.endAdornment&&"inputAdornedEnd"]})}),N=i((e,t)=>{const l=e.ownerState;return[t.root,!!l.formControl&&t.formControl,!!l.startAdornment&&t.adornedStart,!!l.endAdornment&&t.adornedEnd,!!l.error&&t.error,l.size==="small"&&t.sizeSmall,l.multiline&&t.multiline,l.color&&t[`color${S(l.color)}`],!!l.fullWidth&&t.fullWidth,!!l.hiddenLabel&&t.hiddenLabel]},"rootOverridesResolver"),H=i((e,t)=>{const l=e.ownerState;return[t.input,l.size==="small"&&t.inputSizeSmall,l.multiline&&t.inputMultiline,l.type==="search"&&t.inputTypeSearch,!!l.startAdornment&&t.inputAdornedStart,!!l.endAdornment&&t.inputAdornedEnd,!!l.hiddenLabel&&t.inputHiddenLabel]},"inputOverridesResolver"),q=h("div",{name:"MuiInputBase",slot:"Root",overridesResolver:N})(({theme:e,ownerState:t})=>({...e.typography.body1,color:e.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${X.disabled}`]:{color:e.palette.text.disabled,cursor:"default"},...t.multiline&&{padding:"4px 0 5px",...t.size==="small"&&{paddingTop:1}},...t.fullWidth&&{width:"100%"}})),U=h("input",{name:"MuiInputBase",slot:"Input",overridesResolver:H})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light",n={color:"currentColor",opacity:l?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},r={opacity:"0 !important"},c={opacity:l?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${X.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":c,"&:focus::-moz-placeholder":c,"&:focus:-ms-input-placeholder":c,"&:focus::-ms-input-placeholder":c},[`&.${X.disabled}`]:{opacity:1,WebkitTextFillColor:e.palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"},...t.size==="small"&&{paddingTop:1},...t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},...t.type==="search"&&{MozAppearance:"textfield"}}}),Me=i(()=>o(Te,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),"inputGlobalStyles"),Q=oe.component(i(function({allProps:t,otherProps:l,props:n}){const r=i(()=>n.inputProps.value!=null?n.inputProps.value:n.value,"inputValue"),c=(r()??null)!==null,[d,b]=We({controlled:()=>r(),default:()=>n.defaultValue,name:"InputBase"}),m=Re({ref:a=>{typeof n.inputRef=="function"&&n.inputRef(a)}});let g,y=!1;ne(()=>{m.ref.addEventListener("input",a=>{const v=m.ref.value;g=m.ref.selectionStart??v.length,y=!1,typeof n.inputProps.onChange=="function"&&n.inputProps.onChange(a),b(v),typeof n.onChange=="function"&&n.onChange(a,v),c&&!y&&(m.ref.value=d()??"")})}),_(a=>{if(c||a){y=!0;const v=d();if(typeof v=="string"){const P=g??v.length;v!==m.ref.value&&(m.ref.value=v),m.ref.selectionStart!==P&&m.ref.setSelectionRange(P,P)}}return!1},!0);const[B,k]=se(!1),u=V(),fe=M({props:t,muiFormControl:u,states:["color","disabled","error","hiddenLabel","size","required","filled"]}),x=p(fe,{get focused(){return u?u.focused:B()}});_(()=>{!u&&n.disabled&&B()&&(k(!1),typeof n.onBlur=="function"&&n.onBlur?.(null))});const be=i(()=>u&&u.onFilled,"onFilled"),ge=i(()=>u&&u.onEmpty,"onEmpty"),L=i(a=>{Ve(a)?be()?.():ge()?.()},"checkDirty");Ie(()=>{c&&L({value:d()})}),ne(()=>{L(m.ref)});const Y=i(()=>n.multiline&&n.inputComponent==="input","isMultilineInput"),he=i(()=>{const a=n.inputComponent;return Y(),a},"InputComponent"),E=z(()=>{let a=n.inputProps;return Y()&&(n.rows?a={type:void 0,minRows:n.rows,maxRows:n.rows,...a}:a={type:void 0,maxRows:n.maxRows,minRows:n.minRows,...a}),p(a,()=>n.componentsProps.input||{})});_(()=>{u?.setAdornedStart(Boolean(n.startAdornment))});const W=p(t,{get color(){return x.color||"primary"},get disabled(){return x.disabled},get error(){return x.error},get focused(){return x.focused},get formControl(){return u},get hiddenLabel(){return x.hiddenLabel},get size(){return x.size}}),Z=oe.useClasses(W),ee=i(()=>n.components.Root||q,"Root"),D=i(()=>n.componentsProps.root||{},"rootProps"),te=i(()=>n.components.Input||U,"Input"),xe=p(W,()=>D().ownerState||{}),ve=p(W,()=>E().ownerState||{}),Ce=p(x,{get startAdornment(){return n.startAdornment}}),ye=z(()=>n.renderSuffix?.(Ce));return[C((()=>{const a=C(()=>!n.disableInjectingGlobalStyles,!0);return()=>a()&&Me()})()),o(G,p(D,l,{get component(){return ee()}},()=>!le(ee())&&{ownerState:xe},{onClick:a=>{m.ref&&a.currentTarget===a.target&&m.ref.focus(),typeof l.onClick=="function"&&l.onClick(a)},get className(){return A(Z.root,D().className,l.className)},get children(){return[C(()=>n.startAdornment),o(Be.Provider,{value:void 0,get children(){return o(G,p({get component(){return te()},ownerState:W,get["aria-invalid"](){return x.error},get["aria-describedby"](){return n["aria-describedby"]},get autocomplete(){return n.autoComplete},get autofocus(){return n.autoFocus},get disabled(){return x.disabled},get id(){return n.id},onAnimationStart:a=>{L(a.animationName==="mui-auto-fill-cancel"?m.ref:{value:"x"})},get name(){return n.name},get placeholder(){return n.placeholder},get readOnly(){return n.readOnly},get required(){return x.required},get rows(){return n.rows},get onKeyDown(){return n.onKeyDown},get onKeyUp(){return n.onKeyUp},get type(){return n.type}},E,()=>!le(te())&&{as:he(),ownerState:ve},{ref:m,get className(){return A(Z.input,E().className)},onBlur:a=>{n.onBlur?.(a),typeof n.inputProps.onBlur=="function"&&n.inputProps.onBlur(a),u&&u.onBlur?u.onBlur():k(!1)},onInput:a=>{if(!c){const v=a.target||m.ref;if(v==null)throw new Error("MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.");L({value:v.value})}},onFocus:a=>{if(x.disabled){a.stopPropagation();return}typeof n.onFocus=="function"&&n.onFocus(a),typeof n.inputProps.onFocus=="function"&&n.inputProps.onFocus(a),u&&u.onFocus?u.onFocus():k(!0)}}))}}),C(()=>n.endAdornment),C(()=>ye())]}}))]},"InputBase"));function Ne(e){return R("MuiFilledInput",e)}i(Ne,"getFilledInputUtilityClass");const $=T("MuiFilledInput",["root","colorSecondary","underline","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","hiddenLabel","input","inputSizeSmall","inputHiddenLabel","inputMultiline","inputAdornedStart","inputAdornedEnd"]),He=I()({name:"MuiFilledInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text",hiddenLabel:!1}),selfPropNames:["classes","disableUnderline","hiddenLabel"],utilityClass:Ne,slotClasses:e=>({root:["root",!e.disableUnderline&&"underline"],input:["input"]})}),qe=h(q,{name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[...N(e,t),!l.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light",n=l?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=l?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)";return{position:"relative",backgroundColor:r,borderTopLeftRadius:`${e.shape.borderRadius}px`,borderTopRightRadius:`${e.shape.borderRadius}px`,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:l?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)","@media (hover: none)":{backgroundColor:r}},[`&.${$.focused}`]:{backgroundColor:r},[`&.${$.disabled}`]:{backgroundColor:l?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${e.palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${$.focused}:after`]:{transform:"scaleX(1)"},[`&.${$.error}:after`]:{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${$.disabled}):before`]:{borderBottom:`1px solid ${e.palette.text.primary}`},[`&.${$.disabled}:before`]:{borderBottomStyle:"dotted"}},...t.startAdornment&&{paddingLeft:12},...t.endAdornment&&{paddingRight:12},...t.multiline&&{padding:"25px 12px 8px",...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17}}}}),Ue=h(U,{name:"MuiFilledInput",slot:"Input",overridesResolver:H})(({theme:e,ownerState:t})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17},...t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0},...t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}})),Ee=He.component(i(function({allProps:t,classes:l,otherProps:n,props:r}){const c=z(()=>{const b={root:{ownerState:t},input:{ownerState:t}};return n.componentsProps?ue(n.componentsProps,b):b}),d=p(()=>r.classes||{},l);return o(Q,p(n,{get components(){return{Root:qe,Input:Ue,...n.components||{}}},get componentsProps(){return c()},classes:d}))},"FilledInput"));function De(e){return R("MuiFormHelperText",e)}i(De,"getFormHelperTextUtilityClasses");const ie=T("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),_e=w('<span class="notranslate">&#8203;</span>'),Ke=I()({name:"MuiFormHelperText",propDefaults:({set:e})=>e({component:"p"}),selfPropNames:["children","classes","disabled","error","filled","focused","margin","required","variant"],utilityClass:De,slotClasses:e=>({root:["root",!!e.disabled&&"disabled",!!e.error&&"error",!!e.size&&`size${S(e.size)}`,e.contained&&"contained",!!e.focused&&"focused",!!e.filled&&"filled",!!e.required&&"required"]})}),Ge=h("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.size&&t[`size${S(l.size)}`],l.contained&&t.contained,l.filled&&t.filled]}})(({theme:e,ownerState:t})=>({color:e.palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${ie.disabled}`]:{color:e.palette.text.disabled},[`&.${ie.error}`]:{color:e.palette.error.main},...t.size==="small"&&{marginTop:4},...t.contained&&{marginLeft:14,marginRight:14}})),Xe=Ke.component(i(function({allProps:t,classes:l,otherProps:n,props:r}){const c=V(),d=M({props:t,muiFormControl:c,states:["variant","size","disabled","error","filled","focused","required"]}),b=p(t,{get contained(){return d.variant==="filled"||d.variant==="outlined"},get variant(){return d.variant},get size(){return d.size},get disabled(){return d.disabled},get error(){return d.error},get filled(){return d.filled},get focused(){return d.focused},get required(){return d.required}}),m=$e(()=>r.children);return o(Ge,p(n,{get as(){return n.component},ownerState:b,get className(){return A(l.root,n.className)},get children(){return C(()=>m()===" ",!0)()?_e.cloneNode(!0):m()}}))},"FormHelperText"));function je(e){return R("MuiInput",e)}i(je,"getInputUtilityClass");const O=T("MuiInput",["root","formControl","focused","disabled","colorSecondary","underline","error","sizeSmall","multiline","fullWidth","input","inputSizeSmall","inputMultiline","inputTypeSearch"]),Je=I()({name:"MuiInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","disableUnderline"],utilityClass:je,slotClasses:e=>({root:["root",!e.disableUnderline&&"underline"],input:["input"]})}),Qe=h(q,{skipProps:j.filter(e=>e!=="classes"),name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[...N(e,t),!l.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{position:"relative",...t.formControl&&{"label + &":{marginTop:16}},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${e.palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${O.focused}:after`]:{transform:"scaleX(1)"},[`&.${O.error}:after`]:{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${O.disabled}):before`]:{borderBottom:`2px solid ${e.palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${n}`}},[`&.${O.disabled}:before`]:{borderBottomStyle:"dotted"}}}}),Ye=h(U,{name:"MuiInput",slot:"Input",overridesResolver:H})({}),Ze=Je.component(i(function({classes:t,otherProps:l,props:n}){const r=z(()=>{const b={root:{ownerState:{disableUnderline:n.disableUnderline}}};return l.componentsProps?ue(l.componentsProps,b):b}),c=p(t,()=>n.classes||{});return o(Q,p(l,{get components(){return{Root:Qe,Input:Ye,...l.components||{}}},get componentsProps(){return r()},classes:c}))},"Input"));function et(e){return R("MuiInputLabel",e)}i(et,"getInputLabelUtilityClasses");T("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const ae=I()({name:"MuiInputLabel",propDefaults:({set:e})=>e({disableAnimation:!1}),selfPropNames:["children","classes","color","disableAnimation","disabled","error","focused","margin","required","shrink","variant"],autoCallUseClasses:!1,utilityClass:et,slotClasses:e=>({root:["root",!!e.formControl&&"formControl",!e.disableAnimation&&"animated",!!e.shrink&&"shrink",e.size==="small"&&"sizeSmall",!!e.variant&&e.variant],asterisk:[!!e.required&&"asterisk"]})}),tt=h(Pe,{skipProps:j.filter(e=>e!=="classes"),name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[{[`& .${Oe.asterisk}`]:t.asterisk},t.root,l.formControl&&t.formControl,l.size==="small"&&t.sizeSmall,l.shrink&&t.shrink,!l.disableAnimation&&t.animated,t[l.variant]]}})(({theme:e,ownerState:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",...t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},...t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},...t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},...!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},...t.variant==="filled"&&{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)",...t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"}}},...t.variant==="outlined"&&{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}}})),nt=ae.component(i(function({allProps:t,props:l}){const n=V(),[,r]=ze(t,["disableAnimation","margin","shrink","variant"]),c=i(()=>{let y=l.shrink;return typeof y>"u"&&n&&(y=n.filled||n.focused||n.adornedStart),y},"shrink"),d=M({props:t,muiFormControl:n,states:["size","variant","required"]}),b=p(t,{get formControl(){return n},get shrink(){return c()},get size(){return d.size},get variant(){return d.variant},get required(){return d.required}}),m=ae.useClasses(b),g=p(m,()=>l.classes||{});return o(tt,p(r,{get["data-shrink"](){return c()},ownerState:b,classes:g}))},"InputLabel")),lt=w("<span></span>"),rt=w('<span class="notranslate">&#8203;</span>'),ot=I()({name:"MuiNotchedOutline",selfPropNames:["disabled","error","focused","label","notched"]}),it=h("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:"1px",overflow:"hidden",minWidth:"0%"}),at=h("legend")(({ownerState:e,theme:t})=>({float:"unset",...!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},...e.withLabel&&{display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:"0.01px",transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block"},...e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}}})),dt=ot.component(i(function({allProps:t,otherProps:l,props:n}){const r=i(()=>n.label!=null&&n.label!=="","withLabel"),c=p(t,{get withLabel(){return r()}});return o(it,p(l,{"aria-hidden":!0,get className(){return l.className},ownerState:c,get children(){return o(at,{ownerState:c,get children(){return o(ke,{get when(){return r()},get fallback(){return rt.cloneNode(!0)},get children(){const d=lt.cloneNode(!0);return f(d,()=>n.label),d}})}})}}))},"NotchedOutline"));function st(e){return R("MuiOutlinedInput",e)}i(st,"getOutlinedInputUtilityClass");const F=T("MuiOutlinedInput",["root","colorSecondary","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","notchedOutline","input","inputSizeSmall","inputMultiline","inputAdornedStart","inputAdornedEnd"]),ut=I()({name:"MuiOutlinedInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","label","notched"],utilityClass:st,slotClasses:()=>({root:["root"],notchedOutline:["notchedOutline"],input:["input"]})}),ct=h(q,{skipProps:j.filter(e=>e!=="classes"),name:"MuiOutlinedInput",slot:"Root",overridesResolver:N})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:e.shape.borderRadius,[`&:hover .${F.notchedOutline}`]:{borderColor:e.palette.text.primary},"@media (hover: none)":{[`&:hover .${F.notchedOutline}`]:{borderColor:l}},[`&.${F.focused} .${F.notchedOutline}`]:{borderColor:e.palette[t.color].main,borderWidth:"2px"},[`&.${F.error} .${F.notchedOutline}`]:{borderColor:e.palette.error.main},[`&.${F.disabled} .${F.notchedOutline}`]:{borderColor:e.palette.action.disabled},...t.startAdornment&&{paddingLeft:14},...t.endAdornment&&{paddingRight:14},...t.multiline&&{padding:"16.5px 14px",...t.size==="small"&&{padding:"8.5px 14px"}}}}),pt=h(dt,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>({borderColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"})),mt=h(U,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:H})(({theme:e,ownerState:t})=>({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"},...t.size==="small"&&{padding:"8.5px 14px"},...t.multiline&&{padding:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0}})),ft=ut.component(i(function({allProps:t,classes:l,otherProps:n,props:r}){const c=V(),d=M({props:t,muiFormControl:c,states:["required"]}),b=z(()=>{const g=r.label;return g!=null&&g!==""&&d.required?[g,"\xA0","*"]:g}),m=p(l,()=>r.classes||{},{notchedOutline:null});return o(Q,p({renderSuffix:g=>o(pt,{get className(){return l.notchedOutline},get label(){return b()},get notched(){return C(()=>typeof r.notched<"u",!0)()?r.notched:Boolean(g.startAdornment||g.filled||g.focused)}})},n,{get components(){return{Root:ct,Input:mt,...n.components||{}}},classes:m}))},"OutlinedInput"));function bt(e){return R("MuiTextField",e)}i(bt,"getTextFieldUtilityClass");T("MuiTextField",["root"]);const gt=I()({name:"MuiTextField",propDefaults:({set:e})=>e({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:bt,slotClasses:()=>({root:["root"]})}),ht={standard:Ze,filled:Ee,outlined:ft},xt=h(Le,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),s=gt.component(i(function({allProps:t,classes:l,otherProps:n,props:r}){const c=z(()=>{const u={};return r.variant==="outlined"&&(r.InputLabelProps&&typeof r.InputLabelProps.shrink<"u"&&(u.notched=r.InputLabelProps.shrink),u.label=r.label),u}),d=Ae(()=>r.id),b=i(()=>r.helperText&&d()?`${d()}-helper-text`:void 0,"helperTextId"),m=i(()=>r.label&&d()?`${d()}-label`:void 0,"inputLabelId"),g=i(()=>ht[r.variant],"InputComponent"),y=i(()=>o(G,p({get component(){return g()},get["aria-describedby"](){return b()},get autoComplete(){return r.autoComplete},get autoFocus(){return r.autoFocus},get defaultValue(){return r.defaultValue},get fullWidth(){return r.fullWidth},get multiline(){return r.multiline},get name(){return r.name},get rows(){return r.rows},get maxRows(){return r.maxRows},get minRows(){return r.minRows},get type(){return r.type},get value(){return r.value},get id(){return d()},get inputRef(){return r.inputRef},get onBlur(){return r.onBlur},get onChange(){return r.onChange},get onFocus(){return r.onFocus},get placeholder(){return r.placeholder},get inputProps(){return r.inputProps}},c,()=>r.InputProps||{})),"InputElement"),B=i(()=>{const u=r.label;return u!=null&&u!==""&&o(nt,p({get htmlFor(){return d()},get id(){return m()}},()=>r.InputLabelProps||{},{children:u}))},"label"),k=i(()=>{const u=r.helperText;if(u)return o(Xe,p({get id(){return b()}},()=>r.FormHelperTextProps||{},{children:u}))},"helperText");return o(xt,p({get className(){return A(l.root,n.className)},get disabled(){return r.disabled},get error(){return r.error},get fullWidth(){return r.fullWidth},get required(){return r.required},get color(){return r.color},get variant(){return r.variant},ownerState:t},n,{get children(){return[C(()=>B()),C(()=>y()),C(()=>k())]}}))},"TextField"));function ce(){return o(J,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[o(s,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),o(s,{id:"filled-basic",label:"Filled",variant:"filled"}),o(s,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}i(ce,"BasicTextFields");ce.code=`import Box from "@suid/material/Box";
import TextField from "@suid/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        textAlign: "center",
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
`;const K=w("<div></div>");function pe(){return o(J,{component:"form",sx:{maxWidth:764,[`& .${s}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=K.cloneNode(!0);return f(e,o(s,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),f(e,o(s,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),f(e,o(s,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),f(e,o(s,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),f(e,o(s,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),f(e,o(s,{id:"outlined-search",label:"Search field",type:"search"}),null),f(e,o(s,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),e})(),(()=>{const e=K.cloneNode(!0);return f(e,o(s,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),f(e,o(s,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),f(e,o(s,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),f(e,o(s,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),f(e,o(s,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),f(e,o(s,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),f(e,o(s,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),e})(),(()=>{const e=K.cloneNode(!0);return f(e,o(s,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),f(e,o(s,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),f(e,o(s,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),f(e,o(s,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),f(e,o(s,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),f(e,o(s,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),f(e,o(s,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),e})()]}})}i(pe,"FormPropsTextFields");pe.code=`import Box from "@suid/material/Box";
import TextField from "@suid/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 764,
        [\`& .\${TextField}\`]: { m: 1, width: "25ch" },
        textAlign: "center",
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
`;function de(e){return e.split(" ").map(t=>t.slice(0,1).toUpperCase()+t.slice(1).toLowerCase()).join(" ")}i(de,"capitalizeWords");function me(){const[e,t]=se(de("Cat in the Hat"));return o(J,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[o(s,{id:"outlined-name",label:"Name",get value(){return e()},onChange:(l,n)=>{t(de(n))}}),o(s,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]}})}i(me,"StateTextFields");me.code=`import Box from "@suid/material/Box";
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
        textAlign: "center",
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
`;function Bt(){return o(Se,{get name(){return s.name},docsName:"text-fields",examples:[ce,{title:"Form props",component:pe},{title:"Uncontrolled vs. Controlled",component:me}]})}i(Bt,"TextFieldPage");export{Bt as default};
