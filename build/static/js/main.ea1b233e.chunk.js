(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return h});var n=a(22),o=a(10),r=a(11),c=a(13),s=a(12),i=a(14),l=a(0),u=a.n(l),m=a(2),p=a(25),d=a.n(p),h=function(t){function a(t){var r;return Object(o.a)(this,a),(r=Object(c.a)(this,Object(s.a)(a).call(this,t))).handleInput=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.handleSubmit=function(){if(console.log(r.state),10==r.state.phone_number.toString().length)try{d.a.post("".concat(e.config.backendURL,"/users/register"),r.state).then(function(e){console.log(e.data),r.setState({login:!0})}).catch(function(e){try{alert(e.response.data.msg)}catch(t){alert("Something Went Wrong")}console.log(e.response)})}catch(t){alert("Something Went Wrong")}else alert("Invalid Phone Number")},r.state={first_name:"",last_name:"",phone_number:"",pass:"",login:!1},r}return Object(i.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("form",null,this.state.login&&u.a.createElement(m.a,{to:"/join-group"}),u.a.createElement("h2",null,"Sign Up"),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"First Name"),u.a.createElement("input",{type:"text",className:"form-control",placeholder:"First name",name:"first_name",value:this.state.first_name,onChange:this.handleInput})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Last Name"),u.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Last name",value:this.state.last_name,onChange:this.handleInput})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Phone Number"),u.a.createElement("input",{value:this.state.phone_number,type:"tel",name:"phone_number",className:"form-control",placeholder:"Enter Phone Number",onChange:this.handleInput})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Password"),u.a.createElement("input",{name:"pass",value:this.state.pass,type:"password",className:"form-control",placeholder:"Enter password",onChange:this.handleInput})),u.a.createElement("button",{type:"button",className:"btn btn-warning btn-block",onClick:this.handleSubmit},"Sign Up"),u.a.createElement("p",{className:"forgot-password text-right"},"Already registered? ",u.a.createElement("a",{href:"/sign-in"},"Sign In")))}}]),a}(l.Component)}).call(this,a(18))},101:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return d});var n=a(22),o=a(10),r=a(11),c=a(13),s=a(12),i=a(14),l=a(0),u=a.n(l),m=a(25),p=a.n(m),d=function(t){function a(t){var r;return Object(o.a)(this,a),(r=Object(c.a)(this,Object(s.a)(a).call(this,t))).handleInput=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.handleSubmit=function(){console.log(r.state),p.a.post("".concat(e.config.backendURL,"/users/join-group"),r.state).then(function(e){alert("Group Successfully Joined"),console.log(e.data),localStorage.setItem("id",r.state.phone_number),window.location.href="/sign-in"}).catch(function(e){try{alert(e.response.data.msg)}catch(t){alert("Something Went Wrong")}console.log(e.response)})},r.state={phone_number:"",group:""},r}return Object(i.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("form",null,u.a.createElement("h2",null,"Join Group"),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Phone Number"),u.a.createElement("input",{value:this.state.phone_number,type:"tel",name:"phone_number",className:"form-control",placeholder:"Username",onChange:this.handleInput})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Group Name"),u.a.createElement("input",{name:"group",value:this.state.group,type:"text",className:"form-control",placeholder:"Enter Group Name",onChange:this.handleInput})),u.a.createElement("button",{type:"button",className:"btn btn-warning btn-block",onClick:this.handleSubmit},"Submit"),u.a.createElement("p",{className:"forgot-password text-right"},"Don't have a group? ",u.a.createElement("a",{href:"/make-group"},"Make")))}}]),a}(l.Component)}).call(this,a(18))},102:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return d});var n=a(22),o=a(10),r=a(11),c=a(13),s=a(12),i=a(14),l=a(0),u=a.n(l),m=a(25),p=a.n(m),d=function(t){function a(t){var r;return Object(o.a)(this,a),(r=Object(c.a)(this,Object(s.a)(a).call(this,t))).handleInput=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.handleSubmit=function(){console.log(r.state),p.a.post("".concat(e.config.backendURL,"/users/make-group"),r.state).then(function(e){alert("Group Successfully Created"),console.log(e.data),localStorage.setItem("id",r.state.phone_number),window.location.href="/sign-in"}).catch(function(e){try{alert(e.response.data.msg)}catch(t){alert("Something Went Wrong")}console.log(e.response)})},r.state={phone_number:"",group:""},r}return Object(i.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("form",null,u.a.createElement("h2",null,"Make Group"),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Phone Number"),u.a.createElement("input",{value:this.state.phone_number,type:"tel",name:"phone_number",className:"form-control",placeholder:"Username",onChange:this.handleInput})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Group Name"),u.a.createElement("input",{name:"group",value:this.state.group,type:"text",className:"form-control",placeholder:"Enter Group Name",onChange:this.handleInput})),u.a.createElement("button",{type:"button",className:"btn btn-warning btn-block",onClick:this.handleSubmit},"Submit"),u.a.createElement("p",{className:"forgot-password text-right"},"Want to join a group? ",u.a.createElement("a",{href:"/join-group"},"Join")))}}]),a}(l.Component)}).call(this,a(18))},103:function(e,t,a){e.exports=a.p+"static/media/logo.02495e1c.png"},108:function(e,t,a){e.exports=a(203)},113:function(e,t,a){"use strict";(function(e){var t=a(93),n=a.n(t)()("https://streax.vasusharma.me:5000/");e.config={backendURL:"https://streax.vasusharma.me/api/",images:"https://streax.vasusharma.me:5000/",socket:n};e.config}).call(this,a(18))},137:function(e,t){},140:function(e,t,a){},142:function(e,t,a){},15:function(e,t,a){"use strict";(function(e){a.d(t,"f",function(){return p}),a.d(t,"e",function(){return d}),a.d(t,"b",function(){return h}),a.d(t,"a",function(){return f}),a.d(t,"d",function(){return b}),a.d(t,"c",function(){return v});var n=a(23),o=a.n(n),r=a(33),c=a(17),s=a(25),i=a.n(s),l=a(26),u=a.n(l),m=function(){return{type:c.d}},p=function(){return{type:c.f}},d=function(e){return{type:c.e,payload:e}},h=function(e,t){return{type:c.c,payload:{key:e,data:t}}},g=function(e){return{type:c.b,error:e}},f=function(e){return{type:c.a,payload:e}},b=function(){var t=localStorage.getItem("id"),a=localStorage.getItem("group");if(t)return function(){var n=Object(r.a)(o.a.mark(function n(c){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c(m()),n.next=3,i.a.get("".concat(e.config.backendURL,"/chat/users/").concat(t,"/").concat(a)).then(function(){var e=Object(r.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c(h("users",t.data)),c(u.a.success({title:"Contacts Fetched Successfully",position:"tr",autoDismiss:3}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){e.response&&alert(e.response.data),c(u.a.error({title:"Contacts Fetching Failed",message:e.response?e.response.data:"Server Error",position:"tr",autoDismiss:3})),c(g(e))});case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},v=function(t,a){var n=localStorage.getItem("id"),c=localStorage.getItem("group_id");if(n){var s="".concat(e.config.backendURL,"/chat/userMessages");return function(){var e=Object(r.a)(o.a.mark(function e(l){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(m()),e.next=3,i.a.post(s,{id:n,group:c,user:a,dm:t}).then(function(){var e=Object(r.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l(h("messages",t.data)),l(u.a.success({title:"Mesages Fetched Successfully",position:"tr",autoDismiss:3}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log("fetch error",e),l(g(e))});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}}).call(this,a(18))},17:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return r}),a.d(t,"a",function(){return c}),a.d(t,"e",function(){return s}),a.d(t,"f",function(){return i});var n="LOADING",o="FETCH_SUCCESS",r="FETCH_FAILURE",c="ADD_BADGE",s="RESET_BADGE",i="SWITCH"},178:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},183:function(e,t,a){},185:function(e,t,a){},190:function(e,t,a){},195:function(e,t,a){},197:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(40),c=a.n(r),s=(a(113),a(140),a(29)),i=a(60),l=(a(91),a(2)),u=(a(92),a(65)),m=a(100),p=a(101),d=a(102),h=a(103),g=a.n(h);var f=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"auth"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top"},o.a.createElement("div",{className:"container justify-content-center"},o.a.createElement(s.b,{className:"navbar-brand",to:"/sign-in"},o.a.createElement("img",{src:g.a,alt:"RTCA",style:{width:"22vw"}})))),o.a.createElement("div",{className:"auth-wrapper"},o.a.createElement("div",{className:"auth-inner"},o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:u.a}),o.a.createElement(l.b,{path:"/sign-in",component:u.a}),o.a.createElement(l.b,{path:"/sign-up",component:m.a}),o.a.createElement(l.b,{path:"/join-group",component:p.a}),o.a.createElement(l.b,{path:"/make-group",component:d.a}))))))};var b,v=function(){return o.a.createElement(s.a,null,o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/chat/:group",component:i.a}),o.a.createElement(l.b,{path:"/",component:f})))},E=a(19),w=a(28),j=a(26),y=a(22),S=a(36),N=a(17),k={loading:!1,users:[],messages:[],chat:"",online:[],dm:!0,badge:{},open:window.screen.width<800},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.d:return Object(S.a)({},e,{loading:!0});case N.e:return(b=e.badge)[t.payload]=0,Object(S.a)({},e,{badge:b});case N.f:return b=e.open,Object(S.a)({},e,{open:!b});case N.a:return(b=e.badge)[t.payload]=b[t.payload]?b[t.payload]+1:1,Object(S.a)({},e,{badge:b});case N.c:return Object(S.a)({},e,Object(y.a)({loading:!1},t.payload.key,t.payload.data));case N.b:return Object(S.a)({},e,{loading:!1,error:t.error});default:return e}},I=Object(w.combineReducers)({notifications:j.reducer,chatReducer:O}),_=a(104),C=a(105),x=Object(w.createStore)(I,Object(_.composeWithDevTools)(Object(w.applyMiddleware)(C.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(s.a,null,o.a.createElement(function(){return o.a.createElement(E.Provider,{store:x},o.a.createElement("div",{className:"App"},o.a.createElement(v,null)))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0),o=a.n(n);a(181);function r(e){var t=e.icon,a=e.onClick;return o.a.createElement("i",{className:"toolbar-button ".concat(t),onClick:a})}},48:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(0),o=a.n(n);a(180);function r(e){var t=e.title,a=e.leftItems,n=e.rightItems;return o.a.createElement("div",{className:"toolbar"},o.a.createElement("div",{className:"left-items"},a),o.a.createElement("h1",{className:"toolbar-title"},t),o.a.createElement("div",{className:"right-items"},n))}},60:function(e,t,a){"use strict";(function(e){var n=a(10),o=a(11),r=a(13),c=a(12),s=a(14),i=a(30),l=a(0),u=a.n(l),m=a(69),p=a(64),d=(a(197),a(19)),h=(a(26),a(15)),g=function(t){function a(t){var o;Object(n.a)(this,a),(o=Object(r.a)(this,Object(c.a)(a).call(this,t))).state={conversations:[]},localStorage.getItem("id")||(window.location.href="/sign-in");var s=e.config.socket;s.emit("new user",localStorage.getItem("id"));var l=Object(i.a)(Object(i.a)(o));return s.on("new user",function(e){l.props.addOnline(e)}),s.on("user disconnected",function(e){console.log("userName",e)}),o}return Object(s.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"messenger"},window.screen.width<800?this.props.open&&u.a.createElement("div",{className:"scrollable sidebar"},u.a.createElement(m.a,null)):u.a.createElement("div",{className:"scrollable sidebar"},u.a.createElement(m.a,null)),window.screen.width<800?!this.props.open&&u.a.createElement("div",{className:"scrollable content"},u.a.createElement(p.a,{key:this.props.chat})):u.a.createElement("div",{className:"scrollable content"},u.a.createElement(p.a,{key:this.props.chat})))}}]),a}(l.Component);t.a=Object(d.connect)(function(e){return console.log(e),{notifications:e.notifications,loading:e.chatReducer.loading,users:e.chatReducer.users,online:e.chatReducer.online,chat:e.chatReducer.chat,open:e.chatReducer.open}},function(e){return{addOnline:function(t){return e(h.b("online",t))}}})(g)}).call(this,a(18))},64:function(e,t,a){"use strict";(function(e){var n=a(107),o=a(23),r=a.n(o),c=a(33),s=a(10),i=a(11),l=a(13),u=a(12),m=a(14),p=a(30),d=a(0),h=a.n(d),g=a(96),f=a(48),b=a(34),v=a(97),E=a(31),w=a.n(E),j=a(19),y=(a(193),a(26)),S=a.n(y),N=a(15),k=a(98),O=a.n(k),I=(a(195),a(99)),_=a.n(I),C=function(t){function a(t){var o;Object(s.a)(this,a),(o=Object(l.a)(this,Object(u.a)(a).call(this,t))).scrollBottom=function(){var e=document.querySelector("#messages");e&&e.scrollIntoView(!1)},o.renderMessages=function(){for(var e=0,t=o.props.messages.concat(o.state.messages),a=t.length,n=[];e<a;){var r=t[e-1],c=t[e];c.image&&console.log(c.image);var s=t[e+1],i=c.author==o.state.MY_USER_ID,l=w()(c.timestamp),u=!0,m=!0,p=!0;if(r){var d=w()(r.timestamp),g=w.a.duration(l.diff(d));r.author===c.author&&g.as("hours")<1&&(u=!1),g.as("hours")<1&&(p=!1)}if(s){var f=w()(s.timestamp),b=w.a.duration(f.diff(l));s.author===c.author&&b.as("hours")<1&&(m=!1)}n.push(h.a.createElement(v.a,{key:e,author:c.author,isMine:i,startsSequence:u,endsSequence:m,showTimestamp:p,data:c})),e+=1}return n},o.state={messages:[],MY_USER_ID:localStorage.getItem("id"),first:!0,constPics:[],upload:!1};var i=Object(p.a)(Object(p.a)(o));return Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.getData();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))(),o.socket=e.config.socket,o.socket.on("new message",function(e){if(console.log(e),(e.to==i.state.MY_USER_ID||e.from==i.state.MY_USER_ID)&&e.group==localStorage.getItem("group_id")||!1===e.dm&&e.group==localStorage.getItem("group_id")){if(e.to==i.state.MY_USER_ID||e.group==localStorage.getItem("group_id")){i.props.notify(e.message);var t=document.getElementsByClassName("audio-element")[0];t.duration>0&&!t.paused&&(t.pause(),t.currentTime=0),t.play()}e.from!=i.state.chat&&(e.dm?i.props.addBadge(e.from):i.props.addBadge(e.group));var a={id:i.state.messages.length+1,author:e.from,message:e.message,timestamp:e.time,image:e.image};i.setState({messages:[].concat(Object(n.a)(i.state.messages),[a])})}var o=document.querySelector("#messages");o&&o.scrollIntoView(!1)}),o}return Object(m.a)(a,t),Object(i.a)(a,[{key:"getData",value:function(){var e=this;return new Promise(function(t){e.props.fetchMessages(e.props.dm,e.props.chat),t()})}},{key:"componentDidMount",value:function(){this.scrollBottom()}},{key:"componentDidUpdate",value:function(){this.scrollBottom()}},{key:"savePicsToState",value:function(e){this.setState({constPics:e,upload:!1}),window.confirm("Do you want to send ?")?this.socket.emit("new image",{id:(new Date).getTime(),from:this.state.MY_USER_ID,message:"",to:this.props.chat,dm:this.props.dm,image:this.state.constPics,group:localStorage.getItem("group_id")}):alert("cancel")}},{key:"render",value:function(){var e=this;return h.a.createElement(h.a.Fragment,null,h.a.createElement("audio",{className:"audio-element",style:{display:"none"}},h.a.createElement("source",{src:O.a})),this.props.chat?h.a.createElement("div",{className:"message-list",id:"message-list"},this.props.notifications&&h.a.createElement(S.a,{notifications:this.props.notifications}),h.a.createElement(f.a,{title:"".concat(localStorage.getItem(this.props.chat.toString())),rightItems:[h.a.createElement(b.a,{key:"info",icon:"ion-ios-information-circle-outline",onClick:function(){window.screen.width<800&&e.props.switchView()}})]}),h.a.createElement("div",{className:"message-list-container",id:"messages",key:this.state.messages},this.renderMessages()),h.a.createElement(g.a,{image:this.state.upload?[h.a.createElement(_.a,{multiple:!1,value:this.state.constPics,onDone:function(t){e.savePicsToState(t)}})]:[h.a.createElement(b.a,{key:"image",icon:"ion-ios-image",onClick:function(){return e.setState({upload:!0})}})],emoji:[h.a.createElement(b.a,{key:"emoji",icon:"ion-ios-happy"})],enter:[h.a.createElement(b.a,{key:"send",icon:"ion-ios-send"})]})):h.a.createElement("img",{style:{width:"100%",height:"100vh"},src:"https://source.unsplash.com/featured/?click",alt:"background"}))}}]),a}(d.Component);t.a=Object(j.connect)(function(e){return console.log(e),{notifications:e.notifications,loading:e.chatReducer.loading,users:e.chatReducer.users,chat:e.chatReducer.chat,dm:e.chatReducer.dm,messages:e.chatReducer.messages}},function(e){return{fetchMessages:function(t,a){return e(N.c(t,a))},addBadge:function(t){return e(N.a(t))},switchView:function(){return e(N.f())},notify:function(t){return e(S.a.warning({title:"New Message Received",message:t,position:"tr",autoDismiss:3}))}}})(C)}).call(this,a(18))},65:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return d});var n=a(22),o=a(10),r=a(11),c=a(13),s=a(12),i=a(14),l=a(0),u=a.n(l),m=a(25),p=a.n(m),d=function(t){function a(t){var r;return Object(o.a)(this,a),(r=Object(c.a)(this,Object(s.a)(a).call(this,t))).handleInput=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.handleSubmit=function(){console.log(r.state),p.a.post("".concat(e.config.backendURL,"/users/login"),r.state).then(function(e){console.log(e.data),localStorage.setItem("id",r.state.phone_number),localStorage.setItem("group",r.state.group),window.location.href="chat/".concat(r.state.group)}).catch(function(e){try{alert(e.response.data.msg)}catch(t){alert("Something Went Wrong")}console.log(e.response)})},r.state={phone_number:"",pass:"",group:""},r}return Object(i.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("form",null,u.a.createElement("h2",null,"Sign In"),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Phone Number"),u.a.createElement("input",{value:this.state.phone_number,type:"tel",name:"phone_number",className:"form-control",placeholder:"Enter Phone Number",onChange:this.handleInput})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Password"),u.a.createElement("input",{name:"pass",value:this.state.pass,type:"password",className:"form-control",placeholder:"Enter password",onChange:this.handleInput})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Group Name"),u.a.createElement("input",{name:"group",value:this.state.group,type:"text",className:"form-control",placeholder:"Enter Group Name",onChange:this.handleInput})),u.a.createElement("button",{type:"button",className:"btn btn-warning btn-block",onClick:this.handleSubmit},"Submit"),u.a.createElement("p",{className:"forgot-password text-right"},"Don't have an account? ",u.a.createElement("a",{href:"/sign-up"},"Sign Up")),u.a.createElement("p",{className:"forgot-password text-right"},"Want to join a group? ",u.a.createElement("a",{href:"/join-group"},"Join")))}}]),a}(l.Component)}).call(this,a(18))},69:function(e,t,a){"use strict";var n=a(10),o=a(11),r=a(13),c=a(12),s=a(14),i=a(0),l=a.n(i),u=(a(142),a(62));function m(){return l.a.createElement("div",{className:"conversation-search"},l.a.createElement("input",{type:"search",className:"conversation-search-input",placeholder:"Search Messages"}),l.a.createElement("div",{className:"search-icon"},l.a.createElement(u.a,null)))}var p=a(94),d=a(19),h=a(15);a(178);var g=Object(d.connect)(function(e){return{badge:e.chatReducer.badge,chat:e.chatReducer.chat}},function(e){return{resetBadge:function(t){return e(h.e(t))},openChat:function(t){return e(h.b("chat",t))},setDM:function(t){return e(h.b("dm",t))},switchView:function(){return e(h.f())}}})(function(e){Object(i.useEffect)(function(){Object(p.a)(".conversation-snippet",20),e.data.group&&localStorage.setItem("group_id",a)});var t=e.data,a=t.id,n=t.photo,o=t.name,r=t.text;return l.a.createElement("div",{id:"conversation-item-".concat(a),className:"conversation-list-item",onClick:function(){return function(t){localStorage.getItem("group_id").localeCompare(t)?e.setDM(!0):e.setDM(!1),e.resetBadge(t),e.openChat(t),window.screen.width<800&&e.switchView()}(a)},style:{backgroundColor:e.badge[a]?"#444":""}},l.a.createElement("img",{className:"conversation-photo",src:n,alt:"DP"}),l.a.createElement("div",{className:"conversation-info"},l.a.createElement("h1",{className:"conversation-title"},o),l.a.createElement("p",{className:"conversation-snippet"},r)))}),f=a(48),b=a(34),v=(a(26),a(183),function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).componentWillReceiveProps=function(){var e=[],t=["https://dummyimage.com/1024x576/2f353a/ffffff.jpg&text=","https://source.unsplash.com/featured/?"];console.log(a.props.users),a.props.users.forEach(function(a){a.id==localStorage.getItem("id")?localStorage.setItem("name","".concat(a.first_name," ").concat(a.last_name)):e.push({id:a.id,photo:"".concat(t[a.first_name.charCodeAt(0)%2]).concat(a.first_name.charAt(0)),name:"".concat(a.first_name," ").concat(a.last_name),text:"Hello world!",group:!!a.group}),localStorage.setItem(a.id.toString(),"".concat(a.first_name," ").concat(a.last_name))}),a.setState({conversations:[].concat(e)})},a.logout=function(){window.confirm("Do you want to logout ?")&&(localStorage.clear(),window.location.reload())},a.state={conversations:[]},localStorage.getItem("id")&&localStorage.getItem("group")||(window.location.href="/sign-in");var o="/chat/".concat(localStorage.getItem("group"));return window.location.pathname.endsWith(localStorage.getItem("group"))||(window.location.pathname=o),a.props.fetchUsers(),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"conversation-list"},l.a.createElement(f.a,{title:"Messenger",leftItems:[l.a.createElement(b.a,{key:"cog",icon:"ion-ios-log-out",onClick:function(){return e.logout()}})],rightItems:[]}),l.a.createElement(m,null),this.state.conversations.map(function(e){return l.a.createElement(g,{key:e.name,data:e})}))}}]),t}(i.Component));t.a=Object(d.connect)(function(e){return console.log(e),{notifications:e.notifications,loading:e.chatReducer.loading,users:e.chatReducer.users}},function(e){return{fetchUsers:function(){return e(h.d())}}})(v)},91:function(e,t,a){},96:function(e,t,a){"use strict";(function(e){var n=a(10),o=a(11),r=a(13),c=a(12),s=a(14),i=a(0),l=a.n(i),u=(a(185),a(19)),m=a(15),p=(a(186),a(106)),d=function(t){function a(t){var o;return Object(n.a)(this,a),(o=Object(r.a)(this,Object(c.a)(a).call(this,t))).showEmojis=function(e){o.setState({showEmojis:!0},function(){return document.addEventListener("click",o.closeMenu)})},o.closeMenu=function(e){console.log(o.emojiPicker),null===o.emojiPicker||o.emojiPicker.contains(e.target)||o.setState({showEmojis:!1},function(){return document.removeEventListener("click",o.closeMenu)})},o.addEmoji=function(e){var t=e.native;o.setState({message:o.state.message+t})},o.sendMessage=function(){""!==o.state.message&&""!==o.state.message.replace(/(\r\n|\n|\r)/gm,"")&&(o.socket.emit("new message",{id:(new Date).getTime(),from:o.state.id,message:o.state.message,to:o.props.chat,dm:o.props.dm,group:localStorage.getItem("group_id")}),o.setState({message:""}))},o.state={id:localStorage.getItem("id"),message:"",showEmojis:!1},o.socket=e.config.socket,o}return Object(s.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"compose"},this.props.image,this.state.showEmojis?l.a.createElement("div",{className:"emojiPicker",ref:function(t){return e.emojiPicker=t}},l.a.createElement(p.a,{onSelect:this.addEmoji,emojiTooltip:!0,title:"RTCA"})):l.a.createElement("div",{className:"getEmojiButton",onClick:this.showEmojis},this.props.emoji),l.a.createElement("input",{value:this.state.message,type:"text",onKeyDown:function(t){13===t.keyCode&&e.sendMessage()},onChange:function(t){e.setState({message:t.target.value})},className:"compose-input",placeholder:"Type a message"}),l.a.createElement("button",{className:"options",style:{outline:"None"},onClick:function(t){t.preventDefault(),e.sendMessage()}},this.props.enter))}}]),a}(i.Component);t.a=Object(u.connect)(function(e){return console.log(e),{notifications:e.notifications,loading:e.chatReducer.loading,users:e.chatReducer.users,online:e.chatReducer.online,chat:e.chatReducer.chat,dm:e.chatReducer.dm}},function(e){return{addOnline:function(t){return e(m.b("online",t))}}})(d)}).call(this,a(18))},97:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return s});var n=a(0),o=a.n(n),r=a(31),c=a.n(r);a(190),a(192);function s(t){var a=t.data,n=t.isMine,r=t.startsSequence,s=t.endsSequence,i=t.showTimestamp,l=t.author,u=c()(a.timestamp).format("LLLL");return o.a.createElement("div",{className:["message","".concat(n?"mine":""),"".concat(r?"start":""),"".concat(s?"end":"")].join(" "),style:{marginBottom:5}},i&&o.a.createElement("div",{className:"blockcenter"},o.a.createElement("div",{className:"timestamp"},u)),o.a.createElement("div",{className:"bubble-container"},n?o.a.createElement(o.a.Fragment,null):o.a.createElement("img",{style:{width:"20px",height:"20px",borderRadius:"50%",objectFit:"cover",marginRight:"10px"},alt:"dp",src:"https://dummyimage.com/1024x576/2f353a/fff.jpg&text=".concat(localStorage.getItem(l.toString()).charAt(0))}),o.a.createElement("div",{className:""==a.message&&a.image?"":"bubble",title:u},""==a.message&&a.image?o.a.createElement("a",{href:"".concat(e.config.images).concat(a.image.toString("utf8")),target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{style:{borderWidth:"2px",borderColor:"orange"},height:200,width:200,src:"".concat(e.config.images).concat(a.image.toString("utf8")),alt:"media"})):a.message),n?o.a.createElement("img",{style:{width:"20px",height:"20px",borderRadius:"50%",objectFit:"cover",marginLeft:"10px"},src:"https://dummyimage.com/1024x576/2f353a/ffffff.jpg&text=".concat(localStorage.getItem("name").charAt(0)),alt:"dp"}):o.a.createElement(o.a.Fragment,null)))}}).call(this,a(18))},98:function(e,t,a){e.exports=a.p+"static/media/ring.7ad935d5.mp3"}},[[108,2,1]]]);
//# sourceMappingURL=main.ea1b233e.chunk.js.map