(this["webpackJsonpcovid-co-op"]=this["webpackJsonpcovid-co-op"]||[]).push([[0],{278:function(e,t,a){e.exports=a(775)},282:function(e,t,a){},497:function(e,t,a){},498:function(e,t,a){},772:function(e,t,a){},773:function(e,t,a){},775:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),o=a.n(s),l=a(6),c=a(7),i=a(26),u=a(9),d=a(8),m=a(40),h=(a(282),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Covid Coop\u2695"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/sign-up",className:"nav-link"},"Sign up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/sign-in",className:"nav-link"},"Sign in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/order",className:"nav-link"},"Place order")))))}}]),a}(n.Component)),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About page"))}}]),a}(n.Component),g=a(25),v=a.n(g),f=a(83),b=a(71),E={lat:-25.363,lng:134.211},w=Object(f.compose)(Object(f.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM","&v=3.exp&libraries=geometry,drawing,places"),loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"600px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),b.withScriptjs,b.withGoogleMap)((function(e){return r.a.createElement(b.GoogleMap,{defaultZoom:4,defaultCenter:E},e.isMarkerShown&&r.a.createElement("div",null,r.a.createElement(b.Marker,{position:{lat:-34.397,lng:150.144}}),r.a.createElement(b.Marker,{position:{lat:-34.497,lng:150.644}})))})),y="https://maps.googleapis.com/maps/api/geocode/".concat("json","?"),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={coordinates:{lat:null,lng:null},address:""},e._handleChange=e._handleChange.bind(Object(i.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"fetchGPS",value:function(e){var t=this;v.a.get("".concat(y,"key=").concat("AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM","&address=").concat(e)).then((function(e){t.setState({coordinates:e.data.results[0].geometry.location})}))}},{key:"_handleChange",value:function(e){this.setState({address:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.fetchGPS(this.state.address)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null," convert address to gps "),r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("input",{type:"text",placeholder:"address",onChange:this._handleChange}),r.a.createElement("button",null,"Submit")),r.a.createElement("div",{className:"output-display"},"Output Coordinates: ","Lat: ".concat(this.state.coordinates.lat,", Long: ").concat(this.state.coordinates.lng)))}}]),a}(n.Component),O=(a(497),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=function(){v.a.delete("http://localhost:3001/logout",{withCredentials:!0}).then((function(e){n.handleLogout(),n.history.push("/")})).catch((function(e){return console.log(e)}))},n.state={isLoggedIn:!1,user:{}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home page content"),this.props.loggedInStatus?r.a.createElement(m.b,{to:"/logout",onClick:this.handleClick},"Log Out"):null,r.a.createElement(w,{isMarkerShown:!0}),r.a.createElement(j,null))}}]),a}(n.Component)),S=a(111),k=(a(498),a(227),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password,password_confirmation:t.password_confirmation,location:t.address};v.a.post("http://localhost:3000/users",a,{withCredentials:!0}).then((function(e){"created"===e.data.status?(n.props.handleLogin(e.data),n.redirect()):n.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"test@test.com",password:"chicken",password_confirmation:"chicken",address:"",errors:"",SERVER_URL:"http://covid-co-op.herokuapp.com/"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state;e.email,e.password,e.password_confirmation,e.address;return r.a.createElement("div",{class:"row justify-content-md-center"},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h2",{class:"center"},"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{class:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{class:"form-control",type:"password",name:"password_confirmation",id:"password",placeholder:"Password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password-confirmation"},"Confirm Password"),r.a.createElement("input",{class:"form-control",type:"password",name:"password",id:"password-confirmation",placeholder:"Password",onChange:this.handleChange,value:this.state.password_confirmation})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"address"},"Address"),r.a.createElement("input",{class:"form-control",type:"text",name:"address",id:"address",placeholder:"address",onChange:this.handleChange,value:this.state.address})),r.a.createElement("button",{type:"submit",id:"submit-btn",class:"btn btn-primary"},"Submit")),r.a.createElement("div",null,this.state.errors?this.handleErrors():null)))))}}]),a}(n.Component)),C=(a(772),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password};v.a.post("http://localhost:3000/login",{user:a},{withCredentials:!0}).then((function(e){e.data.logged_in?(n.props.handleLogin(e.data),n.redirect()):n.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"",password:"",errors:""},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){return this.props.loggedInStatus?this.redirect():null}},{key:"render",value:function(){var e=this.state;e.email,e.password;return r.a.createElement("div",{class:"row justify-content-md-center"},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h2",{class:"center"},"Sign In"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{class:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{class:"form-control",name:"password",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",id:"submit-btn",class:"btn btn-primary"},"Sign In"))))))}}]),a}(n.Component)),L=a(277),_=a.n(L),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).showProducts=e.showProducts.bind(Object(i.a)(e)),e.matchUser=e.matchUser.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"matchUser",value:function(e){return this.props.users.length>0?this.props.users[_.a.findIndex(this.props.users,{id:e})].name:""}},{key:"showProducts",value:function(){var e=this;return this.props.products.length>0?this.props.products.map((function(t){return r.a.createElement("div",{key:t.id,className:"col-4"},r.a.createElement("img",{src:t.image_url,alt:t.name,width:"200px"}),r.a.createElement("h3",null,t.name),r.a.createElement("p",null,"Category: ",t.category),r.a.createElement("p",null,"Quanity available: ",t.quantity),r.a.createElement("p",null,t.description.slice(0,30),"..."),r.a.createElement("p",null,"Provided by: ",e.matchUser(t.user_id)),r.a.createElement("p",null,"Posted: ",Math.floor(Math.abs(new Date-new Date(t.created_at))/1e3/60/60/24)," days ago"))})):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.showProducts())}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).propsIn=e.propsIn.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"propsIn",value:function(){return this.props.users.length>0&&this.props.products.length>0?r.a.createElement(I,{users:this.props.users,products:this.props.products}):""}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Order page"),this.propsIn())}}]),a}(n.Component),N=(a(773),a(4)),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).loginStatus=function(){v.a.get("".concat("http://localhost:3000","/logged_in"),{withCredentials:!0}).then((function(e){e.data.logged_in?n.handleLogin(e):n.handleLogout()})).catch((function(e){return console.log("api errors:",e)}))},n.handleLogin=function(e){n.setState({isLoggedIn:!0,user:e.user})},n.handleLogout=function(){n.setState({isLoggedIn:!1,user:{}})},n.state={PRODUCT_URL:"".concat("http://covid-co-op.herokuapp.com","/products"),USER_URL:"".concat("http://covid-co-op.herokuapp.com","/users"),isLoggedIn:!1,user:{},users:[],products:[]},n.fetchProducts=n.fetchProducts.bind(Object(i.a)(n)),n.fetchUsers=n.fetchUsers.bind(Object(i.a)(n)),n.fetchProducts(),n.fetchUsers(),n}return Object(c.a)(a,[{key:"fetchProducts",value:function(){var e=this;v.a.get(this.state.PRODUCT_URL).then((function(t){t.data?e.setState({products:t.data}):e.setState({errors:t.data.errors})}))}},{key:"fetchUsers",value:function(){var e=this;v.a.get(this.state.USER_URL).then((function(t){t.data?e.setState({users:t.data.users}):e.setState({errors:t.data.errors})}))}},{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"body"},r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/about",component:p}),r.a.createElement(N.a,{exact:!0,path:"/sign-up",render:function(t){return r.a.createElement(k,Object.assign({},t,{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),r.a.createElement(N.a,{exact:!0,path:"/sign-in",render:function(t){return r.a.createElement(C,Object.assign({},t,{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),r.a.createElement(N.a,{exact:!0,path:"/order",render:function(t){return r.a.createElement(P,{users:e.state.users,products:e.state.products})}}),"      ",r.a.createElement(N.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(O,Object.assign({},t,{handleLogout:e.handleLogout,loggedInStatus:e.state.isLoggedIn}))}}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(774);o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[278,1,2]]]);
//# sourceMappingURL=main.bb7c5a3e.chunk.js.map