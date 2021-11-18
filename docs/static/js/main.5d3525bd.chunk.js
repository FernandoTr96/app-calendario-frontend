(this["webpackJsonp08_calendar-app"]=this["webpackJsonp08_calendar-app"]||[]).push([[0],{180:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(21),o=a.n(r),i=a(147),c=a(22),s=a(243),l={mainContainer:{width:"100%",height:"100vh",backgroundImage:'url("https://cdn.pixabay.com/photo/2021/10/06/17/13/mountains-6686286_960_720.jpg")',backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"},authContainer:{width:{xs:"100%",md:"45%",lg:"35%"},height:{xs:"100vh",md:"auto"},backgroundColor:"#fff",overflow:"hidden",'& input[name="tab"]':{display:"none"},"& #tabLogin:checked ~ div > .bar":{transform:"translateX(0)"},"& #tabRegister:checked ~ div > .bar":{transform:"translateX(100%)"},"& #tabLogin:checked ~ div > .tabLogin, & #tabRegister:checked ~ div > .tabRegister":{color:"#fff"},"& #tabLogin:checked ~ .slider":{transform:"translateX(0)"},"& #tabRegister:checked ~ .slider":{transform:"translateX(-50%)"}},tabs:{width:"100%",height:"auto",display:"flex",position:"relative","& .tabLogin, & .tabRegister":{width:"50%",textAlign:"center",p:2,color:"#333",fontWeight:"bold",zIndex:"10",cursor:"pointer"},"& .bar":{width:"50%",height:"100%",p:2,position:"absolute",bgcolor:"primary.main",transition:"transform 500ms"}},slider:{width:"200%",height:"inherit",display:"flex",justifyContent:"center",alignItems:"flex-start",transition:"transform 500ms","& > form":{width:"100%",height:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:5,gap:3}}},d=a(2),u=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"radio",id:"tabLogin",name:"tab",defaultChecked:!0}),Object(d.jsx)("input",{type:"radio",id:"tabRegister",name:"tab"}),Object(d.jsxs)(s.a,{component:"div",sx:l.tabs,children:[Object(d.jsx)(s.a,{component:"label",htmlFor:"tabLogin",className:"tabLogin",children:"LOGIN"}),Object(d.jsx)(s.a,{component:"label",htmlFor:"tabRegister",className:"tabRegister",children:"REGISTER"}),Object(d.jsx)(s.a,{component:"span",className:"bar"})]})]})},p=a(11),b=a(244),j=a(237),h=a(246),f=a(247),v=a(248),m=a(232),O=a(233),g=a(78),x=a(24),y=a(16),k=a.n(y),w=a(28),C="https://calendar-app-m-e-r-n.herokuapp.com/api",E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(C,"/").concat(e);return a.toUpperCase(),"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(C,"/").concat(e);a.toUpperCase();var r=localStorage.getItem("calendarAppToken")||"";return"GET"===a?fetch(n,{headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},A="[ui] open modal events",T="[ui] close modal events",D="[event] fill event list",q="[event] active",z="[event] loader true",_="[event] loader false",L="[auth] login",P="[auth] check finish",I="[auth] purge state",Z=a(35),B=function(e){return{type:L,payload:e}},N=function(){return{type:P}},W=function(){return{type:I}},Y=function(){var e,t,a,n,r,o,i=Object(x.b)(),c=Object(g.a)(),l=c.register,u=c.handleSubmit,y=c.getValues,C=c.formState.errors;return Object(d.jsxs)(s.a,{onSubmit:u((function(){var e,t;i((e=y("email"),t=y("password"),function(){var a=Object(w.a)(k.a.mark((function a(n){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E("auth",{email:e,password:t},"POST");case 2:return r=a.sent,a.next=5,r.json();case 5:(o=a.sent).ok?(localStorage.setItem("calendarAppToken",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),delete o.token,delete o.ok,n(B(o))):Z.b.error("usuario o contrase\xf1a incorrecta",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()))})),component:"form",autoComplete:"off",children:[Object(d.jsx)(b.a,{variant:"h4",component:"h4",color:"primary",children:"Calendar app"}),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},l("email",{required:!0,pattern:/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/})),{},{type:"text",placeholder:"correo",variant:"filled",fullWidth:!0,InputProps:{startAdornment:Object(d.jsx)(h.a,{position:"start",children:Object(d.jsx)(f.a,{children:Object(d.jsx)(m.a,{})})})},helperText:"required"===(null===(e=C.email)||void 0===e?void 0:e.type)?"Este campo es requerido":"pattern"===(null===(t=C.email)||void 0===t?void 0:t.type)&&"El correo no tiene una estructura valida",error:"required"===(null===(a=C.email)||void 0===a?void 0:a.type)||"pattern"===(null===(n=C.email)||void 0===n?void 0:n.type)})),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},l("password",{required:!0})),{},{type:"password",placeholder:"contrase\xf1a",variant:"filled",fullWidth:!0,InputProps:{startAdornment:Object(d.jsx)(h.a,{position:"start",children:Object(d.jsx)(f.a,{children:Object(d.jsx)(O.a,{})})})},helperText:"required"===(null===(r=C.password)||void 0===r?void 0:r.type)&&"Este campo es requerido",error:"required"===(null===(o=C.password)||void 0===o?void 0:o.type)})),Object(d.jsx)(v.a,{type:"submit",variant:"gradient-citrus",fullWidth:!0,children:"iniciar sesion"})]})},R=a(15),H=a(234),G=a(235),M=function(){var e,t,a,r,o,i,c,l,u,m,O,y,C,S,A=Object(x.b)(),T=Object(g.a)(),D=T.register,q=T.handleSubmit,z=T.watch,_=T.getValues,L=T.formState.errors,P=Object(n.useState)(!1),I=Object(R.a)(P,2),N=I[0],W=I[1];return Object(d.jsxs)(s.a,{onSubmit:q((function(){var e,t=_();A((e=t,function(){var t=Object(w.a)(k.a.mark((function t(a){var n,r,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E("auth/register",Object(p.a)({},e),"POST");case 2:return r=t.sent,t.next=5,r.json();case 5:(o=t.sent).ok?(localStorage.setItem("calendarAppToken",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),delete o.token,delete o.ok,delete o.confirm_password,a(B(o))):Z.b.error(o.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),(null===(n=o.errors)||void 0===n?void 0:n.length)>0&&o.errors.forEach((function(e){Z.b.error(e.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0})}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})),component:"form",autoComplete:"off",children:[Object(d.jsx)(b.a,{variant:"h4",component:"h4",color:"primary",children:"Crea una cuenta"}),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},D("name",{required:!0,pattern:/^[A-Za-z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\s]+$/})),{},{type:"text",label:"nombre",variant:"outlined",fullWidth:!0,helperText:"required"===(null===(e=L.name)||void 0===e?void 0:e.type)?"Este campo es requerido":"pattern"===(null===(t=L.name)||void 0===t?void 0:t.type)&&"Este campo solo admite letras",error:"required"===(null===(a=L.name)||void 0===a?void 0:a.type)||"pattern"===(null===(r=L.name)||void 0===r?void 0:r.type)})),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},D("email",{required:!0,pattern:/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/})),{},{type:"text",label:"correo",variant:"outlined",fullWidth:!0,helperText:"required"===(null===(o=L.email)||void 0===o?void 0:o.type)?"Este campo es requerido":"pattern"===(null===(i=L.email)||void 0===i?void 0:i.type)&&"El email no tiene una estructura valida",error:"required"===(null===(c=L.email)||void 0===c?void 0:c.type)||"pattern"===(null===(l=L.email)||void 0===l?void 0:l.type)})),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},D("password",{required:!0,pattern:/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/})),{},{type:N?"text":"password",label:"contrase\xf1a",variant:"outlined",fullWidth:!0,InputProps:{endAdornment:Object(d.jsx)(h.a,{position:"end",children:Object(d.jsx)(f.a,{onClick:function(){return W(!N)},children:N?Object(d.jsx)(H.a,{}):Object(d.jsx)(G.a,{})})})},helperText:"required"===(null===(u=L.password)||void 0===u?void 0:u.type)?"Este campo es requerido":"pattern"===(null===(m=L.password)||void 0===m?void 0:m.type)&&"La contrase\xf1a debe tener entre 8 y 16 caracteres y al menos un d\xedgito o una min\xfascula o may\xfascula. Puede tener otros s\xedmbolos",error:"required"===(null===(O=L.password)||void 0===O?void 0:O.type)||"pattern"===(null===(y=L.password)||void 0===y?void 0:y.type)})),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},D("confirm_password",{required:!0})),{},{type:N?"text":"password",label:"confirmar constrase\xf1a",variant:"outlined",fullWidth:!0,helperText:"required"===(null===(C=L.confirm_password)||void 0===C?void 0:C.type)?"Este campo es requerido":z("password")!==z("confirm_password")&&"Las contrase\xf1as no coinciden",error:"required"===(null===(S=L.confirm_password)||void 0===S?void 0:S.type)||z("password")!==z("confirm_password")})),Object(d.jsx)(v.a,{type:"submit",variant:"gradient-citrus",fullWidth:!0,children:"Registrarse"})]})},F=function(){return Object(d.jsxs)(s.a,{component:"main",sx:l.mainContainer,children:[Object(d.jsxs)(s.a,{component:"div",sx:l.authContainer,children:[Object(d.jsx)(u,{}),Object(d.jsxs)(s.a,{component:"div",sx:l.slider,className:"slider",children:[Object(d.jsx)(Y,{}),Object(d.jsx)(M,{})]})]}),Object(d.jsx)(Z.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1})]})},$=a(249),V=a(250),X=a(236),J=a(241),U=a(240),K=a(142),Q=a.n(K),ee=a(141),te=a.n(ee),ae=a(139),ne=a.n(ae),re=a(140),oe=a.n(re),ie={flexGrow_1:{flexGrow:1},displayName:{flexGrow:1,pl:1,fontFamily:"cursive",fontSize:".9rem",fontWeight:"bold"}},ce=function(e){return{sx:{width:32,height:32,bgcolor:se(e)},children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])}},se=function(e){var t,a=0;for(t=0;t<e.length;t+=1)a=e.charCodeAt(t)+((a<<5)-a);var n="#";for(t=0;t<3;t+=1){n+="00".concat((a>>8*t&255).toString(16)).substr(-2)}return n},le=a(31),de=a.n(le),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{start:de()(e.start).toDate(),end:de()(e.end).toDate()})}))},pe=function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){var a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(he()),e.prev=1,e.next=4,S("events");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,a.ok&&(r=ue(n.events),t(be(r))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),Z.b.error("Error : ".concat(e.t0),{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0});case 14:t(fe());case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},be=function(e){return{type:D,payload:e}},je=function(e){return{type:q,payload:e}},he=function(){return{type:z}},fe=function(){return{type:_}},ve=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.events.activeNow})),a=Object(x.c)((function(e){return e.auth.account})).name,n=function(){e({type:A,payload:!0})};return Object(d.jsx)(s.a,{sx:ie.flexGrow_1,children:Object(d.jsx)($.a,{position:"static",color:"primary",children:Object(d.jsxs)(V.a,{children:[Object(d.jsx)(X.a,{direction:"row",spacing:2,children:Object(d.jsx)(J.a,Object(p.a)({},ce("".concat(a," +"))))}),Object(d.jsx)(b.a,{variant:"span",component:"span",sx:ie.displayName,children:a}),null!==t&&Object(d.jsx)(U.a,{title:"borrar evento",children:Object(d.jsx)(f.a,{onClick:function(){var a;e((a=t.id,function(){var e=Object(w.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(he()),e.prev=1,e.next=4,S("events/delete/".concat(a),{},"DELETE");case 4:e.sent.ok&&(Z.b.warning("el evento fue eliminado con exito",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),t(pe())),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Z.b.error("Error: ".concat(e.t0.msg),{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0});case 11:t(fe());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),e(je(null))},color:"warning","aria-label":"addEvent",component:"span",children:Object(d.jsx)(ne.a,{})})}),null!==t?Object(d.jsx)(U.a,{title:"editar evento",children:Object(d.jsx)(f.a,{onClick:n,color:"inherit","aria-label":"addEvent",component:"span",children:Object(d.jsx)(oe.a,{fontSize:"small"})})}):Object(d.jsx)(U.a,{title:"agregar evento",children:Object(d.jsx)(f.a,{onClick:n,color:"inherit","aria-label":"addEvent",component:"span",children:Object(d.jsx)(te.a,{fontSize:"small"})})}),Object(d.jsx)(U.a,{title:"cerrar sesion",children:Object(d.jsx)(f.a,{onClick:function(){e((function(e){localStorage.clear(),e(W())}))},color:"inherit","aria-label":"logout",component:"span",children:Object(d.jsx)(Q.a,{fontSize:"small"})})})]})})})},me=a(125),Oe=(a(177),{allDay:"Todo el d\xeda",previous:"\xab",next:"\xbb",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),ge=(a(178),a(149)),xe=Object(ge.a)({palette:{primary:{main:"#493D73",light:"#574C88",dark:"#3B3659",contrastText:"#fff"},secondary:{main:"#222",light:"#46d1b5",dark:"#4B4559",contrastText:"#fff"}},typography:{button:{textTransform:"none"}},components:{MuiButton:{styleOverrides:{root:{fontWeight:"bold"}},variants:[{props:{variant:"gradient-citrus"},style:{background:"linear-gradient(to right, #fdc830, #F39C12)",color:"#fff"}},{props:{variant:"gradient-night"},style:{background:"linear-gradient(to right, #34495E, #3a6073)",color:"#fff"}}]}}}),ye=a(238),ke={modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"90%",sm:500,lg:"40%"},bgcolor:"background.paper",boxShadow:24,p:4,display:"flex",flexDirection:"column",gap:2,"& > h5":{color:xe.palette.primary.main,textAlign:"center",fontWeight:"bold"}}},we=function(){var e,t,a,r,o,i,c,l,u,h,f,m,O=Object(x.b)(),y=Object(x.c)((function(e){return e.ui})).modalEventsOpen,C=Object(x.c)((function(e){return e.events})).activeNow,E=Object(g.a)({mode:"onSubmit"}),A=E.register,D=E.handleSubmit,q=E.watch,z=E.reset,_=E.getValues,L=E.setValue,P=E.formState.errors,I=function(){O({type:T,payload:!1})};return Object(n.useEffect)((function(){null!==C?(L("startDate",de()(C.start).format("YYYY-MM-DDThh:mm")),L("endDate",de()(C.end).format("YYYY-MM-DDThh:mm")),L("title",C.title),L("desc",C.desc)):z()}),[C,L,z]),Object(d.jsx)(ye.a,{open:y,onClose:I,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(d.jsxs)(s.a,{onSubmit:D((function(){var e,t=_(),a={title:t.title,desc:t.desc,start:de()(t.startDate),end:de()(t.endDate)};null===C?(O((e=a,function(){var t=Object(w.a)(k.a.mark((function t(a){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(he()),t.prev=1,t.next=4,S("events/addEvent",e,"POST");case 4:t.sent.ok&&(Z.b.success("Se ha a\xf1adido un nuevo evento al calendario",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),a(pe())),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Z.b.error(t.t0.msg,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0});case 11:a(fe());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())),z(),I()):(O(function(e){return function(){var t=Object(w.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,delete e.id,a(he()),t.prev=3,t.next=6,S("events/update/".concat(n),e,"PUT");case 6:t.sent.ok&&(Z.b.info("evento actualizado con exito",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),a(pe())),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),Z.b.error("Error: ".concat(t.t0.msg),{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0});case 13:a(fe());case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}()}(Object(p.a)(Object(p.a)({},a),{},{id:C.id}))),z(),I(),O(je(null)))})),sx:ke.modal,component:"form",autoComplete:"off",children:[Object(d.jsx)(b.a,{variant:"h5",component:"h5",children:null===C?"Nuevo evento":"Editar evento"}),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},A("startDate",{validate:{isAfter:function(e){return!1===de()(e).isAfter(q("endDate"))},isSame:function(e){return!1===de()(e).isSame(q("endDate"))}}})),{},{label:"Fecha y hora de inicio",type:"datetime-local",fullWidth:!0,helperText:"isAfter"===(null===(e=P.startDate)||void 0===e?void 0:e.type)?"La fecha inicial no puede ser despues a la fecha final":"isSame"===(null===(t=P.startDate)||void 0===t?void 0:t.type)&&"La fecha inicial no puede ser igual a la fecha final",error:!!(null===(a=P.startDate)||void 0===a?void 0:a.type),defaultValue:de()().format("YYYY-MM-DDT12:00")})),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},A("endDate",{validate:{isBefore:function(e){return!1===de()(e).isBefore(q("startDate"))},isSame:function(e){return!1===de()(e).isSame(q("startDate"))}}})),{},{label:"Fecha y hora final",type:"datetime-local",fullWidth:!0,helperText:"isBefore"===(null===(r=P.endDate)||void 0===r?void 0:r.type)?"La fecha final no puede ser antes a la fecha inicial":"isSame"===(null===(o=P.endDate)||void 0===o?void 0:o.type)&&"La fecha final no puede ser igual a la fecha inicial",error:!!(null===(i=P.endDate)||void 0===i?void 0:i.type),defaultValue:de()().add(1,"days").format("YYYY-MM-DDT00:00")})),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},A("title",{required:!0,pattern:/^[A-Za-z0-9\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\s\n\t]{0,50}$/})),{},{label:"Titulo",variant:"outlined",fullWidth:!0,helperText:"required"===(null===(c=P.title)||void 0===c?void 0:c.type)?"Este campo es requerido":"pattern"===(null===(l=P.title)||void 0===l?void 0:l.type)&&"Debe ser menor a 50 caracteres y sin simbolos extra\xf1os | caracteres (".concat(q("title").length,")"),error:!!(null===(u=P.title)||void 0===u?void 0:u.type)})),Object(d.jsx)(j.a,Object(p.a)(Object(p.a)({},A("desc",{required:!0,pattern:/^[A-Za-z0-9\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1\s\n\t]{0,100}$/})),{},{label:"Descripcion",multiline:!0,rows:4,fullWidth:!0,helperText:"required"===(null===(h=P.desc)||void 0===h?void 0:h.type)?"Este campo es requerido":"pattern"===(null===(f=P.desc)||void 0===f?void 0:f.type)&&"Debe ser menor a (100) caracteres y sin simbolos extra\xf1os | caracteres (".concat(q("desc").length,")"),error:!!(null===(m=P.desc)||void 0===m?void 0:m.type)})),Object(d.jsx)(v.a,{type:"submit",variant:"gradient-citrus",fullWidth:!0,children:null===C?"Guardar":"Editar"})]})})},Ce=a(251),Ee=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.events})),a=t.eventList,r=t.loader,o=Object(x.c)((function(e){return e.auth.account})).uid,i=Object(me.b)(de.a);return Object(n.useEffect)((function(){e(pe())}),[e]),Object(d.jsxs)(s.a,{component:"main",className:"calendar-screen",children:[r&&Object(d.jsx)(X.a,{sx:{width:"100%",color:"grey.500"},spacing:2,children:Object(d.jsx)(Ce.a,{color:"warning"})}),Object(d.jsx)(ve,{}),Object(d.jsx)(me.a,{localizer:i,events:a,startAccessor:"start",endAccessor:"end",messages:Oe,eventPropGetter:function(e){return{style:{backgroundColor:e.user._id===o?xe.palette.secondary.light:xe.palette.secondary.dark,borderRadius:"none",display:"block",color:"wintersmoke",outlineColor:"#333"}}},onSelectEvent:function(t){e(je(t))},onSelectSlot:function(){e(je(null))},selectable:!0}),Object(d.jsx)(we,{}),Object(d.jsx)(Z.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1})]})},Se=a(111),Ae=["isAuth","component"],Te=function(e){var t=e.isAuth,a=e.component,n=Object(Se.a)(e,Ae);return Object(d.jsx)(c.b,Object(p.a)(Object(p.a)({},n),{},{component:function(e){return t?Object(d.jsx)(c.a,{to:"/"}):Object(d.jsx)(a,Object(p.a)({},e))}}))},De=["isAuth","component"],qe=function(e){var t=e.isAuth,a=e.component,n=Object(Se.a)(e,De);return Object(d.jsx)(c.b,Object(p.a)(Object(p.a)({},n),{},{component:function(e){return t?Object(d.jsx)(a,Object(p.a)({},e)):Object(d.jsx)(c.a,{to:"/login"})}}))},ze=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.auth})),a=t.checking,r=t.account.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(w.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("auth/revalidate-token","GET");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("calendarAppToken",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),delete n.token,delete n.ok,t(B(n))):t(N());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?Object(d.jsx)("h5",{children:"espere..."}):Object(d.jsx)(i.a,{children:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(c.d,{children:[Object(d.jsx)(qe,{exact:!0,path:"/",component:Ee,isAuth:!!r}),Object(d.jsx)(Te,{exact:!0,path:"/login",component:F,isAuth:!!r}),Object(d.jsx)(c.a,{to:"/"})]})})})},_e=a(242),Le=a(84),Pe=a(148),Ie={modalEventsOpen:!1},Ze={checking:!0,account:{}},Be=a(18),Ne={eventList:[],activeNow:null,loader:!1},We=Object(Le.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:case T:return Object(p.a)(Object(p.a)({},e),{},{modalEventsOpen:t.payload});default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(p.a)(Object(p.a)({},e),{},{eventList:Object(Be.a)(t.payload)});case q:return Object(p.a)(Object(p.a)({},e),{},{activeNow:t.payload});case z:return Object(p.a)(Object(p.a)({},e),{},{loader:!0});case _:return Object(p.a)(Object(p.a)({},e),{},{loader:!1});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(p.a)(Object(p.a)({},e),{},{checking:!1,account:Object(p.a)({},t.payload)});case P:return Object(p.a)(Object(p.a)({},e),{},{checking:!1});case I:return{checking:!1,account:{}};default:return e}}}),Ye=We,Re="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Le.c,He=Object(Le.d)(Ye,Re(Object(Le.a)(Pe.a))),Ge=function(){return Object(d.jsx)(x.a,{store:He,children:Object(d.jsx)(_e.a,{theme:xe,children:Object(d.jsx)(ze,{})})})};a(180),a(181);o.a.render(Object(d.jsx)(Ge,{}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.5d3525bd.chunk.js.map