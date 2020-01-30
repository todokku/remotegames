(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{468:function(t,e,a){"use strict";var s=a(297);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(a(0)),r=(0,s(a(298)).default)(o.default.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");e.default=r},469:function(t,e,a){"use strict";var s=a(297);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(a(0)),r=(0,s(a(298)).default)(o.default.createElement("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"}),"VolumeDown");e.default=r},470:function(t,e,a){"use strict";var s=a(297);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(a(0)),r=(0,s(a(298)).default)(o.default.createElement("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"}),"VolumeUp");e.default=r},471:function(t,e,a){"use strict";var s=a(297);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(a(0)),r=(0,s(a(298)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{transform:"scale(1.2, 1.2)",fill:"none",d:"M0 0h20v20H0V0z"}),o.default.createElement("path",{transform:"scale(1.2, 1.2)",d:"M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"})),"Settings");e.default=r},542:function(t,e,a){"use strict";a.r(e);var s=a(0),o=a.n(s),r=a(531),i=a(518),n=a(1),l=a(5),c=(a(7),a(15)),p=a(14),h=o.a.forwardRef((function(t,e){var a=t.disableSpacing,s=void 0!==a&&a,r=t.classes,i=t.className,p=Object(l.a)(t,["disableSpacing","classes","className"]);return o.a.createElement("div",Object(n.a)({className:Object(c.a)(r.root,i,!s&&r.spacing),ref:e},p))})),d=Object(p.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(h),u=a(522),m=a(359),g=o.a.forwardRef((function(t,e){return o.a.createElement(m.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:e},t))})),b=Object(p.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(g),f=o.a.forwardRef((function(t,e){var a=t.children,s=t.classes,r=t.className,i=t.disableTypography,p=void 0!==i&&i,h=Object(l.a)(t,["children","classes","className","disableTypography"]);return o.a.createElement("div",Object(n.a)({className:Object(c.a)(s.root,r),ref:e},h),p?a:o.a.createElement(m.a,{component:"h2",variant:"h6"},a))})),v=Object(p.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(f),x=a(92),y=a(294);class w extends s.PureComponent{constructor(t){super(t),this.handleClick=this.handleClick.bind(this),this.handleClose=this.handleClose.bind(this),this.enableMouseControls=this.enableMouseControls.bind(this),this.graphicsCanvasRef=o.a.createRef(),this.state={alertOpen:!1}}handleClick(){window.inputHandler.mouse.settings.enabled||this.setState({alertOpen:!0})}handleClose(){this.setState({alertOpen:!1}),window.inputHandler.mouse.toggle(!1)}enableMouseControls(){this.setState({alertOpen:!1}),window.inputHandler.mouse.init(this.graphicsCanvasRef.current),window.inputHandler.mouse.toggle(!0)}render(){const{classes:t}=this.props;let e=null;return"mpeg2"===this.props.streamType?e=o.a.createElement("canvas",{id:"videoCanvas",className:this.props.classes}):"webRTC"===this.props.streamType&&(e=o.a.createElement("video",{id:"videoCanvas",className:this.props.classes})),o.a.createElement(o.a.Fragment,null,e,o.a.createElement("canvas",{id:"graphicsCanvas",className:this.props.classes,ref:this.graphicsCanvasRef,onClick:this.handleClick,style:{position:"absolute",width:"73.2%",height:"100%"},width:"1280",height:"720"}),o.a.createElement(i.a,{open:this.state.alertOpen,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(v,{id:"alert-dialog-title"},"Activate Mouse Controls?"),o.a.createElement(u.a,null,o.a.createElement(b,{id:"alert-dialog-description"},"By default, the mouse will move the right stick, you can remap and change settings for it in the remap menu.")),o.a.createElement(d,null,o.a.createElement(r.a,{onClick:this.handleClose,color:"primary"},"No"),o.a.createElement(r.a,{onClick:this.enableMouseControls,variant:"contained",color:"primary",autoFocus:!0},"Yes"))))}}var E=Object(y.a)(Object(x.b)(t=>({streamType:t.stream.info.streamType})))(w),C=a(316),k=a(72),S=a.n(k);class N extends s.PureComponent{constructor(t){super(t),this.getLeftStickTransform=this.getLeftStickTransform.bind(this),this.getRightStickTransform=this.getRightStickTransform.bind(this),this.cstate=new C.a,this.state={}}getLeftStickTransform(){let t=this.cstate.axes[0],e=this.cstate.axes[1];e*=-1;let a=t*Math.sqrt(1-e*e/2)*32,s=e*Math.sqrt(1-t*t/2)*32,o=1,r=document.querySelector("#leftStick");return r&&(o=r.clientWidth/55),a*=o,s*=o,`${a}px, ${s}px`}getRightStickTransform(){let t=this.cstate.axes[2],e=this.cstate.axes[3];e*=-1;let a=t*Math.sqrt(1-e*e/2)*32,s=e*Math.sqrt(1-t*t/2)*32,o=1,r=document.querySelector("#rightStick");return r&&(o=r.clientWidth/55),a*=o,s*=o,`${a}px, ${s}px`}componentDidMount(){window.inputHandler.touchpad.touchWrapper.init(document.querySelector("#leftStick"),document.querySelector("#rightStick"))}componentWillUnmount(){window.inputHandler.touchpad.touchWrapper.leftStick&&window.inputHandler.touchpad.touchWrapper.leftStick.destroy(),window.inputHandler.touchpad.touchWrapper.rightStick&&window.inputHandler.touchpad.touchWrapper.rightStick.destroy()}render(){const{classes:t}=this.props;let e,a;return this.cstate.setState(this.props.controllerState),"joycon"===this.props.type?(e=t.highlighted,a=t.abxy):"xbox"===this.props.type&&(e=t.xboxHighlighted,a=t.xboxabxy),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:S()(t.controllerRoot,{[t.leftOverlay]:this.props.overlay})},o.a.createElement("img",{className:S()(t.image,{[t.transparent]:this.props.overlay}),src:`${window.location.origin}/images/leftJoyCon2.png`}),o.a.createElement("div",{id:"leftStick",className:S()(t.leftStick1,{[e]:this.cstate.buttons.lstick})},o.a.createElement("div",{className:t.leftStick2,style:{transform:`translate(${this.getLeftStickTransform()})`}})),o.a.createElement("div",{className:t.dpad},o.a.createElement("div",{className:S()(t.button,"up",{[e]:this.cstate.buttons.up})}),o.a.createElement("div",{className:S()(t.button,"down",{[e]:this.cstate.buttons.down})}),o.a.createElement("div",{className:S()(t.button,"left",{[e]:this.cstate.buttons.left})}),o.a.createElement("div",{className:S()(t.button,"right",{[e]:this.cstate.buttons.right})})),o.a.createElement("div",{className:t.otherButtons},o.a.createElement("div",{className:S()(t.button,t.otherButtons,"minus",{[e]:this.cstate.buttons.minus})}),o.a.createElement("div",{className:S()(t.button,t.otherButtons,"capture",{[e]:this.cstate.buttons.capture})}),o.a.createElement("div",{className:S()(t.button,t.otherButtons,"l",{[e]:this.cstate.buttons.l})},o.a.createElement("div",{className:"click-passthrough"},"xbox"===this.props.type?"LB":"L")),o.a.createElement("div",{className:S()(t.button,t.otherButtons,"zl")},o.a.createElement("div",{className:S()(t.trigger1,{[e]:this.cstate.buttons.zl})},"xbox"===this.props.type?"LT":"ZL"),o.a.createElement("div",{className:t.trigger2,style:{width:100*this.cstate.axes[4]+"%"}})))),this.props.children,o.a.createElement("div",{className:S()(t.controllerRoot,{[t.rightOverlay]:this.props.overlay})},o.a.createElement("img",{className:S()(t.image,{[t.transparent]:this.props.overlay}),src:`${window.location.origin}/images/rightJoyCon2.png`}),o.a.createElement("div",{id:"rightStick",className:S()(t.rightStick1,{[e]:this.cstate.buttons.rstick})},o.a.createElement("div",{className:t.rightStick2,style:{transform:`translate(${this.getRightStickTransform()})`}})),o.a.createElement("div",{className:a},o.a.createElement("div",{className:S()(t.button,"a",{[e]:this.cstate.buttons.a})},"xbox"===this.props.type&&"A"),o.a.createElement("div",{className:S()(t.button,"b",{[e]:this.cstate.buttons.b})},"xbox"===this.props.type&&"B"),o.a.createElement("div",{className:S()(t.button,"x",{[e]:this.cstate.buttons.x})},"xbox"===this.props.type&&"X"),o.a.createElement("div",{className:S()(t.button,"y",{[e]:this.cstate.buttons.y})},"xbox"===this.props.type&&"Y")),o.a.createElement("div",{className:t.otherButtons},o.a.createElement("div",{className:S()(t.button,t.otherButtons,"plus",{[e]:this.cstate.buttons.plus})}),o.a.createElement("div",{className:S()(t.button,t.otherButtons,"home",{[e]:this.cstate.buttons.home})}),o.a.createElement("div",{className:S()(t.button,t.otherButtons,"r",{[e]:this.cstate.buttons.r})},o.a.createElement("div",{className:"click-passthrough"},"xbox"===this.props.type?"RB":"R")),o.a.createElement("div",{className:S()(t.button,t.otherButtons,"zr")},o.a.createElement("div",{className:S()(t.trigger1,{[e]:this.cstate.buttons.zr})},"xbox"===this.props.type?"RT":"ZR"),o.a.createElement("div",{className:t.trigger2,style:{width:100*this.cstate.axes[5]+"%"}})))))}}var O=Object(p.a)(t=>({controllerRoot:{zIndex:100,background:"transparent",position:"relative",width:"13.4%"},leftOverlay:{left:0,width:"18.4%",position:"absolute",opacity:.5},rightOverlay:{right:0,width:"18.4%",position:"absolute",opacity:.5},transparent:{opacity:.5},leftStick1:{position:"absolute",width:"37%",height:"12%",left:"34.9%",top:"19.8%",borderRadius:"50%"},leftStick2:{position:"absolute",background:"#FF3C28",width:"50%",height:"50%",left:"25%",top:"25%",pointerEvents:"none",borderRadius:"50%"},rightStick1:{position:"absolute",width:"37%",height:"12%",left:"28%",top:"47.2%",borderRadius:"50%"},rightStick2:{position:"absolute",background:"#0AB9E6",width:"50%",height:"50%",left:"25%",top:"25%",pointerEvents:"none",borderRadius:"50%"},image:{width:"100%"},dpad:{position:"absolute",background:"transparent",width:"85.25%",height:"27.75%",left:"10%",top:"39%","& .up":{position:"absolute",left:"34.8%",top:"9.5%"},"& .down":{position:"absolute",left:"34.8%",top:"62.5%"},"& .left":{position:"absolute",left:"7%",top:"36%"},"& .right":{position:"absolute",left:"63%",top:"36%"}},abxy:{position:"absolute",background:"transparent",width:"85.25%",height:"27.75%",left:"3%",top:"12%","& .a":{position:"absolute",left:"63.2%",top:"34.5%"},"& .b":{position:"absolute",left:"35.2%",top:"61%"},"& .x":{position:"absolute",left:"35.2%",top:"8%"},"& .y":{position:"absolute",left:"7.2%",top:"34.5%"}},xboxabxy:{position:"absolute",background:"transparent",width:"85.25%",height:"27.75%",left:"3%",top:"12%",fontSize:"large",fontWeight:"bold","& :after":{content:'""',position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",clipPath:"circle(60% at 80% 0%)",backgroundImage:"linear-gradient(45deg, rgba(255,255,255,0.1),rgba(255,255,255,0.3))",borderRadius:"50%"},"& .a":{position:"absolute",left:"63.2%",top:"34.5%",color:"#E53136",backgroundImage:"linear-gradient(45deg, #000, #333)"},"& .b":{position:"absolute",left:"35.2%",top:"61%",color:"#91C85C",backgroundImage:"linear-gradient(45deg, #000, #333)"},"& .x":{position:"absolute",left:"35.2%",top:"8%",color:"#FCE504",backgroundImage:"linear-gradient(45deg, #000, #333)"},"& .y":{position:"absolute",left:"7.2%",top:"34.5%",color:"#0399DC",backgroundImage:"linear-gradient(45deg, #000, #333)"}},button:{background:"rgba(50, 50, 50, 0.2)",width:"32%",height:"32%",border:"2px solid #333",borderRadius:"50%",display:"flex",justifyContent:"space-evenly",flexDirection:"column"},otherButtons:{color:"#FFFFFF",textShadow:"2px 2px 4px #000000",borderRadius:"10px !important","& .minus":{position:"absolute",left:"66%",top:"6%",width:"32%",height:"9%"},"& .capture":{position:"absolute",left:"54%",top:"67.5%",width:"32%",height:"9%"},"& .l":{position:"absolute",left:"1%",top:"6%",width:"60%",height:"6%"},"& .zl":{position:"absolute",left:"1%",top:"0%",width:"60%",height:"6%"},"& .plus":{position:"absolute",left:"1%",top:"6%",width:"32%",height:"9%"},"& .home":{position:"absolute",left:"14%",top:"67.5%",width:"32%",height:"9%"},"& .r":{position:"absolute",left:"40%",top:"6%",width:"60%",height:"6%"},"& .zr":{position:"absolute",left:"40%",top:"0%",width:"60%",height:"6%"}},highlighted:{background:"rgba(80, 187, 80, 0.7)"},trigger1:{height:"50%",borderRadius:"10px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0",zIndex:"100"},trigger2:{height:"50%",background:"rgba(80, 187, 80, 0.7)",borderRadius:"10px",borderTopLeftRadius:"0",borderTopRightRadius:"0"},xboxHighlighted:{background:"rgba(68, 68, 68, 0.7)","&.a,&.b,&.x,&.y":{background:"rgba(68, 68, 68, 1) !important"}}}))(N);class j extends s.PureComponent{constructor(t){super(t)}render(){const{classes:t}=this.props;let e=S()(t.root,{[t.fullscreen]:this.props.largescreen||this.props.fullscreen}),a=!0,s={display:a?"none":null},r=S()(t.canvas,{[t.fullscreen]:this.props.largescreen||this.props.fullscreen});return a=a?o.a.createElement(E,{classes:r}):null,o.a.createElement("div",{className:e},this.props.controllerView?o.a.createElement(O,{overlay:this.props.mobileMode,controllerState:this.props.controllerStates[0],type:"joycon"},a):a,o.a.createElement("div",{id:"twitchVideo",className:t.twitch,style:s},"You need to login first or this stream is offline."))}}var M=Object(y.a)(Object(p.a)(t=>({root:{display:"flex",flexDirection:"row",justifyContent:"center",position:"relative",textAlign:"center"},canvas:{width:"73.2%",alignSelf:"center"},twitch:{width:"73.2%",height:"100%"},fullscreen:{width:"100% !important",margin:"0",padding:"0",border:"none"}})),Object(x.b)(t=>({loggedIn:t.client.loggedIn,waitlisted:t.client.waitlisted,controllerStates:t.stream.players.controllerStates,controllerView:t.settings.controllerView,fullscreen:t.settings.fullscreen,largescreen:t.settings.largescreen,mobileMode:t.settings.mobileMode})))(j),R=a(9),T=a(273),F=a(469),B=a.n(F),L=a(470),z=a.n(L),V=a(382);class P extends s.PureComponent{constructor(t){super(t),this.state={}}render(){const{classes:t}=this.props;return o.a.createElement(T.a,{className:t.root,elevation:3},o.a.createElement(B.a,{className:t.svg,onClick:this.props.onMute}),o.a.createElement(V.a,{rootClass:t.rootClass,thumbClass:t.thumb,activeClass:t.active,railClass:t.rail,trackClass:t.track,min:0,max:100,step:1,handleChange:this.props.handleChange,value:this.props.value,bounceInterval:100,delay:500}),o.a.createElement(z.a,{className:t.svg,onClick:this.props.onMax}))}}var H=Object(p.a)(t=>({root:{display:"flex",justifyContent:"space-evenly",width:"30%",minWidth:"125px",alignItems:"center",paddingLeft:"6px",paddingRight:"6px",backgroundColor:t.palette.primary.main},svg:{color:t.palette.primary.contrastText,alignSelf:"center",cursor:"pointer"},rootClass:{width:"70%"},rail:{backgroundColor:"#FFF"},track:{backgroundColor:"#FFF"},thumb:{backgroundColor:"#FFF","&:hover":{boxShadow:"0px 0px 0px 9px rgba(255, 255, 255, 0.16)"},"&:active":{boxShadow:"0px 0px 0px 18px rgba(255, 255, 255, 0.16)"}},active:{"span&":{boxShadow:"0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important"}}}))(P),I=a(498),D=a(372),W=a(468),q=a.n(W);class $ extends s.PureComponent{constructor(t){super(t),this.handleClick=this.handleClick.bind(this),this.handleClose=this.handleClose.bind(this),this.getViewerList=this.getViewerList.bind(this),this.state={anchorEl:null}}handleClick(t){this.setState({anchorEl:t.currentTarget})}handleClose(){this.setState({anchorEl:null})}getViewerList(){let t=[],e=0;for(let a in this.props.accountMap){if(!this.props.accountMap.hasOwnProperty(a))continue;let s=this.props.accountMap[a];e++,t.push(o.a.createElement(D.a,{key:e,uniqueid:s.userid},o.a.createElement(m.a,{variant:"inherit",noWrap:!0},s.username)))}return 0===e&&t.push(o.a.createElement(D.a,{key:0,uniqueid:null},o.a.createElement(m.a,{variant:"inherit",noWrap:!0},"Loading..."))),t}render(){const t=Boolean(this.state.anchorEl);return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{variant:"contained",color:"primary",onClick:this.handleClick},"Viewers",o.a.createElement(q.a,null)),o.a.createElement(I.a,{id:"viewerDropdown",anchorEl:this.state.anchorEl,open:t,onClose:this.handleClose,PaperProps:{style:{maxHeight:216,width:250}}},this.getViewerList()))}}class _ extends s.PureComponent{constructor(t){super(t),this.state={}}render(){const{classes:t}=this.props;return o.a.createElement(T.a,{className:t.root,elevation:3},this.props.ping,"ms")}}var A=Object(y.a)(Object(p.a)(t=>({root:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText,padding:"5px"}})),Object(x.b)(t=>({ping:t.stream.time.ping})))(_),J=a(471),Y=a.n(J),U=a(94);class Z extends s.PureComponent{constructor(t){super(t),function(t,e,a){e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a}(this,"handleChange",t=>{this.props.setVolume(parseInt(t))}),this.state={}}render(){const{classes:t}=this.props;return o.a.createElement(T.a,{id:"laglessBar",className:t.root,elevation:3},o.a.createElement($,{accountMap:this.props.accountMap}),o.a.createElement(H,{value:this.props.volume,handleChange:this.handleChange,onMute:()=>{this.props.setVolume(0)},onMax:()=>{this.props.setVolume(100)}}),o.a.createElement(r.a,{variant:"contained",color:"primary",onClick:()=>{this.props.history.push("/settings/site")}},"Settings ",o.a.createElement(Y.a,null)),o.a.createElement(A,null))}}var X=Object(y.a)(R.f,Object(p.a)(t=>({root:{display:"flex",justifyContent:"space-evenly",alignSelf:"center",width:"100%",padding:"4px 0px",marginTop:"4px",backgroundColor:"dark"===t.palette.type?t.palette.primary.dark:t.palette.primary.light}})),Object(x.b)(t=>({volume:t.settings.volume,accountMap:t.stream.accountMap}),t=>({setVolume:e=>{t(Object(U.a)({volume:e}))}})))(Z),G=a(295);class K extends s.PureComponent{constructor(t){super(t)}render(){const{classes:t}=this.props;let e=S()(t.root,{[t.hideChat]:this.props.hideChat||this.props.fullscreen,[t.fullscreen]:this.props.fullscreen});return o.a.createElement(T.a,{id:"picture",elevation:3,className:e},o.a.createElement(M,null),o.a.createElement(X,null))}}e.default=Object(y.a)(Object(p.a)(t=>({root:{gridArea:"picture",display:"flex",flexDirection:"column",width:"100%",padding:"5px",margin:0,overflow:"hidden"},[G.a.tablet]:{root:{}},hideChat:{gridColumn:"1/3"},fullscreen:{gridRow:"1",gridColumn:"1/3",padding:"0px"}})),Object(x.b)(t=>({hideChat:t.settings.hideChat,fullscreen:t.settings.fullscreen})))(K)}}]);