var Re=Object.defineProperty;var i=(e,t)=>Re(e,"name",{value:t,configurable:!0});import{u as M,F as $e}from"./useFormControl-f248259c.js";import{f as V,F as ke}from"./formControlState-fc453bb7.js";import{G as we}from"./GlobalStyles-e3b63344.js";import{O as T,P as R,I as F,Q as H,R as x,Y as oe,m as z,h as pe,p,e as ze,j as g,c as r,a0 as X,J as A,a9 as fe,A as Pe,t as q,Z as j,D as Le,S as We,U as m}from"./ErrorPage-e9c3e4c4.js";import{u as Oe}from"./useControlled-986171af.js";import{n as re,r as Be,B as Y}from"./ListItemText-7ae6925f.js";import{F as Ae,f as Me}from"./FormLabel-cd04fa44.js";import{c as Ve}from"./createUniqueId-6a419473.js";import{C as He}from"./ComponentInfo-5876f613.js";import"./Link-0694c7ad.js";import"./copyText-44d22b15.js";import"./IconButton-ff730f99.js";import"./Paper-154b1d70.js";import"./PaperCode-17ec1e34.js";import"./PageNav-9f8205bc.js";import"./_commonjsHelpers-0119a68f.js";import"./sdk.m-090d8a80.js";import"./vite.config.ts-faa4c0cf.js";function qe(e){return R("MuiInputBase",e)}i(qe,"getInputBaseUtilityClass");const k=T("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);function ie(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}i(ie,"hasValue");function Se(e,t=!1){return e&&(ie(e.value)&&e.value!==""||t&&ie(e.defaultValue)&&e.defaultValue!=="")}i(Se,"isFilled");const ae=F()({name:"MuiInputBase",propDefaults:({set:e})=>e({components:{},componentsProps:{},fullWidth:!1,inputComponent:"input",inputProps:{},multiline:!1,type:"text",disableInjectingGlobalStyles:!1}),selfPropNames:["aria-describedby","autoComplete","autoFocus","classes","color","components","componentsProps","defaultValue","disableInjectingGlobalStyles","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","required","rows","size","startAdornment","type","value"],utilityClass:qe,autoCallUseClasses:!1,slotClasses:e=>({root:["root",`color${H(e.color)}`,!!e.disabled&&"disabled",!!e.error&&"error",!!e.fullWidth&&"fullWidth",e.focused&&"focused",!!e.formControl&&"formControl",e.size==="small"&&"sizeSmall",e.multiline&&"multiline",!!e.startAdornment&&"adornedStart",!!e.endAdornment&&"adornedEnd",!!e.hiddenLabel&&"hiddenLabel"],input:["input",!!e.disabled&&"disabled",e.type==="search"&&"inputTypeSearch",e.multiline&&"inputMultiline",e.size==="small"&&"inputSizeSmall",!!e.hiddenLabel&&"inputHiddenLabel",!!e.startAdornment&&"inputAdornedStart",!!e.endAdornment&&"inputAdornedEnd"]})}),S=i((e,t)=>{const l=e.ownerState;return[t.root,!!l.formControl&&t.formControl,!!l.startAdornment&&t.adornedStart,!!l.endAdornment&&t.adornedEnd,!!l.error&&t.error,l.size==="small"&&t.sizeSmall,l.multiline&&t.multiline,l.color&&t[`color${H(l.color)}`],!!l.fullWidth&&t.fullWidth,!!l.hiddenLabel&&t.hiddenLabel]},"rootOverridesResolver"),N=i((e,t)=>{const l=e.ownerState;return[t.input,l.size==="small"&&t.inputSizeSmall,l.multiline&&t.inputMultiline,l.type==="search"&&t.inputTypeSearch,!!l.startAdornment&&t.inputAdornedStart,!!l.endAdornment&&t.inputAdornedEnd,!!l.hiddenLabel&&t.inputHiddenLabel]},"inputOverridesResolver"),U=x("div",{name:"MuiInputBase",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>({...e.typography.body1,color:e.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${k.disabled}`]:{color:e.palette.text.disabled,cursor:"default"},...t.multiline&&{padding:"4px 0 5px",...t.size==="small"&&{paddingTop:1}},...t.fullWidth&&{width:"100%"}})),D=x("input",{name:"MuiInputBase",slot:"Input",overridesResolver:N})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light",n={color:"currentColor",opacity:l?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},o={opacity:"0 !important"},d={opacity:l?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${k.formControl} &`]:{"&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${k.disabled}`]:{opacity:1,WebkitTextFillColor:e.palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"},...t.size==="small"&&{paddingTop:1},...t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},...t.type==="search"&&{MozAppearance:"textfield"}}}),Ne=i(()=>r(we,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),"inputGlobalStyles"),Ue=new Set(["text","search","password","tel","url"]),J=ae.component(i(function({allProps:t,otherProps:l,props:n}){const o=i(()=>n.inputProps.value!=null?n.inputProps.value:n.value,"inputValue"),d=(o()??null)!==null,[c,b]=Oe({controlled:()=>o(),default:()=>n.defaultValue,name:"InputBase"}),f=Be({ref:a=>{a&&a.nodeName!=="INPUT"&&!a.focus&&console.error(["MUI: You have provided a `inputComponent` to the input component","that does not correctly handle the `ref` prop.","Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`)),typeof n.inputRef=="function"&&n.inputRef(a)}});let h,y=!1;oe(()=>{f.ref.addEventListener("input",a=>{const C=f.ref.value;h=f.ref.selectionStart??C.length,y=!1,typeof n.inputProps.onChange=="function"&&n.inputProps.onChange(a),b(C),typeof n.onChange=="function"&&n.onChange(a,C),d&&!y&&(f.ref.value=c()??"")})}),z(a=>{if(d||a){y=!0;const C=c();if(typeof C=="string"){const O=f.ref,ne=O.type??"text",le=Ue.has(ne),G=h??C.length;C!==f.ref.value&&(f.ref.value=C),le||(O.type="text"),f.ref.selectionStart!==G&&f.ref.setSelectionRange(G,G),le||(O.type=ne)}}return!1},!0);const[P,w]=pe(!1),s=M();z(()=>{s?.registerEffect?.()});const he=V({props:t,muiFormControl:s,states:["color","disabled","error","hiddenLabel","size","required","filled"]}),v=p(he,{get focused(){return s?s.focused:P()}});z(()=>{!s&&n.disabled&&P()&&(w(!1),typeof n.onBlur=="function"&&n.onBlur?.(null))});const xe=i(()=>s&&s.onFilled,"onFilled"),ve=i(()=>s&&s.onEmpty,"onEmpty"),L=i(a=>{Se(a)?xe()?.():ve()?.()},"checkDirty");ze(()=>{d&&L({value:c()})}),oe(()=>{L(f.ref)});const Q=i(()=>n.multiline&&n.inputComponent==="input","isMultilineInput"),Ce=i(()=>{const a=n.inputComponent;return Q(),a},"InputComponent"),E=g(()=>{let a=n.inputProps;return Q()&&(n.rows?((n.minRows||n.maxRows)&&console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."),a={type:void 0,minRows:n.rows,maxRows:n.rows,...a}):a={type:void 0,maxRows:n.maxRows,minRows:n.minRows,...a}),p(a,()=>n.componentsProps.input||{})});z(()=>{s?.setAdornedStart(Boolean(n.startAdornment))});const W=p(t,{get color(){return v.color||"primary"},get disabled(){return v.disabled},get error(){return v.error},get focused(){return v.focused},get formControl(){return s},get hiddenLabel(){return v.hiddenLabel},get size(){return v.size}}),Z=ae.useClasses(W),ee=i(()=>n.components.Root||U,"Root"),_=i(()=>n.componentsProps.root||{},"rootProps"),te=i(()=>n.components.Input||D,"Input"),ye=p(W,()=>_().ownerState||{}),Ie=p(W,()=>E().ownerState||{}),Fe=p(v,{get startAdornment(){return n.startAdornment}}),Te=g(()=>n.renderSuffix?.(Fe));return[g((()=>{const a=g(()=>!n.disableInjectingGlobalStyles);return()=>a()&&Ne()})()),r(X,p(_,l,{get $component(){return ee()}},()=>!re(ee())&&{ownerState:ye},{onClick:a=>{f.ref&&a.currentTarget===a.target&&f.ref.focus(),typeof l.onClick=="function"&&l.onClick(a)},get class(){return A(Z.root,_().class,l.class)},get children(){return[g(()=>n.startAdornment),r($e.Provider,{value:void 0,get children(){return r(X,p({get $component(){return te()},ownerState:W,get["aria-invalid"](){return v.error},get["aria-describedby"](){return n["aria-describedby"]},get autocomplete(){return n.autoComplete},get autofocus(){return n.autoFocus},get disabled(){return v.disabled},get id(){return n.id},onAnimationStart:a=>{L(a.animationName==="mui-auto-fill-cancel"?f.ref:{value:"x"})},get name(){return n.name},get placeholder(){return n.placeholder},get readOnly(){return n.readOnly},get required(){return v.required}},()=>({rows:n.rows}),{get onKeyDown(){return n.onKeyDown},get onKeyUp(){return n.onKeyUp},get type(){return n.type}},E,()=>!re(te())&&{as:Ce(),ownerState:Ie},{ref:f,get class(){return A(Z.input,E().class)},onBlur:a=>{n.onBlur?.(a),typeof n.inputProps.onBlur=="function"&&n.inputProps.onBlur(a),s&&s.onBlur?s.onBlur():w(!1)},onInput:a=>{if(!d){const C=a.target||f.ref;if(C==null)throw new Error("MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.");L({value:C.value})}},onFocus:a=>{if(v.disabled){a.stopPropagation();return}typeof n.onFocus=="function"&&n.onFocus(a),typeof n.inputProps.onFocus=="function"&&n.inputProps.onFocus(a),s&&s.onFocus?s.onFocus():w(!0)}}))}}),g(()=>n.endAdornment),g(()=>Te())]}}))]},"InputBase"));function De(e){return R("MuiFilledInput",e)}i(De,"getFilledInputUtilityClass");const $={...k,...T("MuiFilledInput",["root","underline","input"])},Ee=F()({name:"MuiFilledInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text",hiddenLabel:!1}),selfPropNames:["classes","disableUnderline","hiddenLabel"],utilityClass:De,slotClasses:e=>({root:["root",!e.disableUnderline&&"underline"],input:["input"]})}),_e=x(U,{name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[...S(e,t),!l.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light",n=l?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",o=l?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)";return{position:"relative",backgroundColor:o,borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:l?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)","@media (hover: none)":{backgroundColor:o}},[`&.${$.focused}`]:{backgroundColor:o},[`&.${$.disabled}`]:{backgroundColor:l?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${e.palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${$.focused}:after`]:{transform:"scaleX(1)"},[`&.${$.error}:after`]:{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${$.disabled}):before`]:{borderBottom:`1px solid ${e.palette.text.primary}`},[`&.${$.disabled}:before`]:{borderBottomStyle:"dotted"}},...t.startAdornment&&{paddingLeft:12},...t.endAdornment&&{paddingRight:12},...t.multiline&&{padding:"25px 12px 8px",...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17}}}}),Ge=x(D,{name:"MuiFilledInput",slot:"Input",overridesResolver:N})(({theme:e,ownerState:t})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},...t.size==="small"&&{paddingTop:21,paddingBottom:4},...t.hiddenLabel&&{paddingTop:16,paddingBottom:17},...t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0},...t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}})),Ke=Ee.component(i(function({allProps:t,classes:l,otherProps:n,props:o}){const d=g(()=>{const b={root:{ownerState:t},input:{ownerState:t}};return n.componentsProps?fe(n.componentsProps,b):b}),c=p(()=>o.classes||{},l);return r(J,p(n,{get components(){return{Root:_e,Input:Ge,...n.components||{}}},get componentsProps(){return d()},classes:c}))},"FilledInput"));function Xe(e){return R("MuiFormHelperText",e)}i(Xe,"getFormHelperTextUtilityClasses");const de=T("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),je=q('<span class="notranslate">&#8203;</span>',2),se=F()({name:"MuiFormHelperText",propDefaults:({set:e})=>e({component:"p"}),selfPropNames:["children","classes","disabled","error","filled","focused","margin","required","variant"],utilityClass:Xe,autoCallUseClasses:!1,slotClasses:e=>({root:["root",!!e.disabled&&"disabled",!!e.error&&"error",!!e.size&&`size${H(e.size)}`,e.contained&&"contained",!!e.focused&&"focused",!!e.filled&&"filled",!!e.required&&"required"]})}),Ye=x("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.size&&t[`size${H(l.size)}`],l.contained&&t.contained,l.filled&&t.filled]}})(({theme:e,ownerState:t})=>({color:e.palette.text.secondary,...e.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${de.disabled}`]:{color:e.palette.text.disabled},[`&.${de.error}`]:{color:e.palette.error.main},...t.size==="small"&&{marginTop:4},...t.contained&&{marginLeft:14,marginRight:14}})),Je=se.component(i(function({allProps:t,otherProps:l,props:n}){const o=M(),d=V({props:t,muiFormControl:o,states:["variant","size","disabled","error","filled","focused","required"]}),c=p(t,{get contained(){return d.variant==="filled"||d.variant==="outlined"},get variant(){return d.variant},get size(){return d.size},get disabled(){return d.disabled},get error(){return d.error},get filled(){return d.filled},get focused(){return d.focused},get required(){return d.required}}),b=se.useClasses(c),f=Pe(()=>n.children);return r(Ye,p(l,{get as(){return l.component},ownerState:c,get class(){return A(b.root,l.class)},get children(){return g(()=>f()===" ")()?je.cloneNode(!0):f()}}))},"FormHelperText"));function Qe(e){return R("MuiInput",e)}i(Qe,"getInputUtilityClass");const B={...k,...T("MuiInput",["root","underline","input"])},Ze=F()({name:"MuiInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","disableUnderline"],utilityClass:Qe,slotClasses:e=>({root:["root",!e.disableUnderline&&"underline"],input:["input"]})}),et=x(U,{skipProps:j.filter(e=>e!=="classes"),name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[...S(e,t),!l.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{position:"relative",...t.formControl&&{"label + &":{marginTop:16}},...!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${e.palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${B.focused}:after`]:{transform:"scaleX(1)"},[`&.${B.error}:after`]:{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${B.disabled}):before`]:{borderBottom:`2px solid ${e.palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${n}`}},[`&.${B.disabled}:before`]:{borderBottomStyle:"dotted"}}}}),tt=x(D,{name:"MuiInput",slot:"Input",overridesResolver:N})({}),nt=Ze.component(i(function({classes:t,otherProps:l,props:n}){const o=g(()=>{const b={root:{ownerState:{disableUnderline:n.disableUnderline}}};return l.componentsProps?fe(l.componentsProps,b):b}),d=p(t,()=>n.classes||{});return r(J,p(l,{get components(){return{Root:et,Input:tt,...l.components||{}}},get componentsProps(){return o()},classes:d}))},"Input"));function lt(e){return R("MuiInputLabel",e)}i(lt,"getInputLabelUtilityClasses");T("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const ue=F()({name:"MuiInputLabel",propDefaults:({set:e})=>e({disableAnimation:!1}),selfPropNames:["children","classes","color","disableAnimation","disabled","error","focused","margin","required","shrink","variant"],autoCallUseClasses:!1,utilityClass:lt,slotClasses:e=>({root:["root",!!e.formControl&&"formControl",!e.disableAnimation&&"animated",!!e.shrink&&"shrink",e.size==="small"&&"sizeSmall",!!e.variant&&e.variant],asterisk:[!!e.required&&"asterisk"]})}),ot=x(Ae,{skipProps:j.filter(e=>e!=="classes"),name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[{[`& .${Me.asterisk}`]:t.asterisk},t.root,l.formControl&&t.formControl,l.size==="small"&&t.sizeSmall,l.shrink&&t.shrink,!l.disableAnimation&&t.animated,t[l.variant]]}})(({theme:e,ownerState:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",...t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},...t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},...t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},...!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},...t.variant==="filled"&&{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)",...t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"}}},...t.variant==="outlined"&&{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},...t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}}})),rt=ue.component(i(function({allProps:t,props:l}){const n=M(),[,o]=Le(t,["disableAnimation","margin","shrink","variant"]),d=i(()=>{let y=l.shrink;return typeof y>"u"&&n&&(y=n.filled||n.focused||n.adornedStart),y},"shrink"),c=V({props:t,muiFormControl:n,states:["size","variant","required"]}),b=p(t,{get formControl(){return n},get shrink(){return d()},get size(){return c.size},get variant(){return c.variant},get required(){return c.required}}),f=ue.useClasses(b),h=p(f,()=>l.classes||{});return r(ot,p(o,{get["data-shrink"](){return d()},ownerState:b,classes:h}))},"InputLabel")),it=q("<span></span>",2),at=q('<span class="notranslate">&#8203;</span>',2),dt=F()({name:"MuiNotchedOutline",selfPropNames:["disabled","error","focused","label","notched"]}),st=x("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),ut=x("legend")(({ownerState:e,theme:t})=>({float:"unset",...!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},...e.withLabel&&{display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block"},...e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}}})),ct=dt.component(i(function({allProps:t,otherProps:l,props:n}){const o=i(()=>n.label!=null&&n.label!=="","withLabel"),d=p(t,{get withLabel(){return o()}});return r(st,p(l,{"aria-hidden":!0,get class(){return l.class},ownerState:d,get children(){return r(ut,{ownerState:d,get children(){return r(We,{get when(){return o()},get fallback(){return at.cloneNode(!0)},get children(){const c=it.cloneNode(!0);return m(c,()=>n.label),c}})}})}}))},"NotchedOutline"));function pt(e){return R("MuiOutlinedInput",e)}i(pt,"getOutlinedInputUtilityClass");const I={...k,...T("MuiOutlinedInput",["root","notchedOutline","input"])},ft=F()({name:"MuiOutlinedInput",propDefaults:({set:e})=>e({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","label","notched"],utilityClass:pt,slotClasses:()=>({root:["root"],notchedOutline:["notchedOutline"],input:["input"]})}),mt=x(U,{skipProps:j.filter(e=>e!=="classes"),name:"MuiOutlinedInput",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>{const l=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:e.shape.borderRadius,[`&:hover .${I.notchedOutline}`]:{borderColor:e.palette.text.primary},"@media (hover: none)":{[`&:hover .${I.notchedOutline}`]:{borderColor:l}},[`&.${I.focused} .${I.notchedOutline}`]:{borderColor:e.palette[t.color].main,borderWidth:2},[`&.${I.error} .${I.notchedOutline}`]:{borderColor:e.palette.error.main},[`&.${I.disabled} .${I.notchedOutline}`]:{borderColor:e.palette.action.disabled},...t.startAdornment&&{paddingLeft:14},...t.endAdornment&&{paddingRight:14},...t.multiline&&{padding:"16.5px 14px",...t.size==="small"&&{padding:"8.5px 14px"}}}}),bt=x(ct,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>({borderColor:e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"})),gt=x(D,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:N})(({theme:e,ownerState:t})=>({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"},...t.size==="small"&&{padding:"8.5px 14px"},...t.multiline&&{padding:0},...t.startAdornment&&{paddingLeft:0},...t.endAdornment&&{paddingRight:0}})),ht=ft.component(i(function({allProps:t,classes:l,otherProps:n,props:o}){const d=M(),c=V({props:t,muiFormControl:d,states:["required"]}),b=g(()=>{const h=o.label;return h!=null&&h!==""&&c.required?[h," ","*"]:h}),f=p(l,()=>o.classes||{},{notchedOutline:null});return r(J,p({renderSuffix:h=>r(bt,{get class(){return l.notchedOutline},get label(){return b()},get notched(){return g(()=>typeof o.notched<"u")()?o.notched:Boolean(h.startAdornment||h.filled||h.focused)}})},n,{get components(){return{Root:mt,Input:gt,...n.components||{}}},classes:f}))},"OutlinedInput"));function xt(e){return R("MuiTextField",e)}i(xt,"getTextFieldUtilityClass");T("MuiTextField",["root"]);const vt=F()({name:"MuiTextField",propDefaults:({set:e})=>e({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:xt,slotClasses:()=>({root:["root"]})}),Ct={standard:nt,filled:Ke,outlined:ht},yt=x(ke,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),u=vt.component(i(function({allProps:t,classes:l,otherProps:n,props:o}){z(()=>{o.select&&!o.children&&console.error("MUI: `children` must be passed when using the `TextField` component with `select`.")});const d=g(()=>{const s={};return o.variant==="outlined"&&(o.InputLabelProps&&typeof o.InputLabelProps.shrink<"u"&&(s.notched=o.InputLabelProps.shrink),s.label=o.label),s}),c=Ve(()=>o.id),b=i(()=>o.helperText&&c()?`${c()}-helper-text`:void 0,"helperTextId"),f=i(()=>o.label&&c()?`${c()}-label`:void 0,"inputLabelId"),h=i(()=>Ct[o.variant],"InputComponent"),y=i(()=>r(X,p({get $component(){return h()},get["aria-describedby"](){return b()},get autoComplete(){return o.autoComplete},get autoFocus(){return o.autoFocus},get defaultValue(){return o.defaultValue},get fullWidth(){return o.fullWidth},get multiline(){return o.multiline},get name(){return o.name},get rows(){return o.rows},get maxRows(){return o.maxRows},get minRows(){return o.minRows},get type(){return o.type},get value(){return o.value},get id(){return c()},get inputRef(){return o.inputRef},get onBlur(){return o.onBlur},get onChange(){return o.onChange},get onFocus(){return o.onFocus},get placeholder(){return o.placeholder},get inputProps(){return o.inputProps},get size(){return o.size}},d,()=>o.InputProps||{})),"InputElement"),P=i(()=>{const s=o.label;return s!=null&&s!==""&&r(rt,p({get for(){return c()},get id(){return f()}},()=>o.InputLabelProps||{},{children:s}))},"label"),w=i(()=>{const s=o.helperText;if(s)return r(Je,p({get id(){return b()}},()=>o.FormHelperTextProps||{},{children:s}))},"helperText");return r(yt,p({get class(){return A(l.root,n.class)},get disabled(){return o.disabled},get error(){return o.error},get fullWidth(){return o.fullWidth},get required(){return o.required},get color(){return o.color},get variant(){return o.variant},ownerState:t},n,{get children(){return[g(()=>P()),g(()=>y()),g(()=>w())]}}))},"TextField"));function me(){return r(Y,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[r(u,{id:"outlined-basic",label:"Outlined",variant:"outlined",fullWidth:!0}),r(u,{id:"filled-basic",label:"Filled",variant:"filled"}),r(u,{id:"standard-basic",label:"Standard",variant:"standard"})]}})}i(me,"BasicTextFields");me.code=`import { Box, TextField } from "@suid/material";

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
`;const K=q("<div></div>",2);function be(){return r(Y,{component:"form",sx:{maxWidth:764,[`& ${u}`]:{m:1,width:"25ch"},textAlign:"center"},noValidate:!0,autocomplete:"off",get children(){return[(()=>{const e=K.cloneNode(!0);return m(e,r(u,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),null),m(e,r(u,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),null),m(e,r(u,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),null),m(e,r(u,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),null),m(e,r(u,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),null),m(e,r(u,{id:"outlined-search",label:"Search field",type:"search"}),null),m(e,r(u,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"}),null),e})(),(()=>{const e=K.cloneNode(!0);return m(e,r(u,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),null),m(e,r(u,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),null),m(e,r(u,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),null),m(e,r(u,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),null),m(e,r(u,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),null),m(e,r(u,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),null),m(e,r(u,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"}),null),e})(),(()=>{const e=K.cloneNode(!0);return m(e,r(u,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),null),m(e,r(u,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),null),m(e,r(u,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),null),m(e,r(u,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),null),m(e,r(u,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),null),m(e,r(u,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),null),m(e,r(u,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"}),null),e})()]}})}i(be,"FormPropsTextFields");be.code=`import { Box, TextField } from "@suid/material";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 764,
        [\`& \${TextField}\`]: { m: 1, width: "25ch" },
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
`;function ce(e){return e.split(" ").map(t=>t.slice(0,1).toUpperCase()+t.slice(1).toLowerCase()).join(" ")}i(ce,"capitalizeWords");function ge(){const[e,t]=pe(ce("Cat in the Hat"));return r(Y,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"},textAlign:"center"},novalidate:!0,autocomplete:"off",get children(){return[r(u,{id:"outlined-name",label:"Name",get value(){return e()},onChange:(l,n)=>{t(ce(n))}}),r(u,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]}})}i(ge,"StateTextFields");ge.code=`import { Box, TextField } from "@suid/material";
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
`;function Nt(){return r(He,{get name(){return u.name},docsName:"text-fields",examples:[me,{title:"Form props",component:be},{title:"Uncontrolled vs. Controlled",component:ge}]})}i(Nt,"TextFieldPage");export{Nt as default};
