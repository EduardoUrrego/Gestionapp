webpackJsonp([1],{"1n6E":function(t,e){},"1uuo":function(t,e){},HzI5:function(t,e){},MNeK:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"grid-container"},[e("header",{staticClass:"header"},[this._v("GestionApp")]),this._v(" "),this._m(0),this._v(" "),e("main",{staticClass:"main"},[e("router-view")],1),this._v(" "),this._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"aside"},[e("ul",{staticClass:"aside_list"},[e("li",{staticClass:"aside_list-item"},[this._v("Usuarios")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"footer_copyright"},[this._v("G1M1 - 09 ©2020")]),this._v(" "),e("div",{staticClass:"footer_byline"},[this._v("Mision Tic 2022")])])}]};var n=a("VU/8")({name:"App"},s,!1,function(t){a("1n6E")},null,null).exports,i=a("/ocq"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var u=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports,l=a("mvHQ"),c=a.n(l),v=a("Xxa5"),m=a.n(v),_=a("exGp"),h=a.n(_),p=a("mtWM"),d=a.n(p),f=d.a.create({headers:{"Access-Control-Allow-Origin":"*"}}),b={name:"usuarioModificar",methods:{consultarUsuario:function(){var t=this;return h()(m.a.mark(function e(){var a,r,s,n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=username_consulta.value,r="https://ancient-waters-19804.herokuapp.com/user/"+a,""==a){t.next=10;break}return t.next=5,f.get(r);case 5:s=t.sent,(n=s.data)?(username.value=n.username,email.value=n.email,lastname.value=n.last_name,nombre.value=n.name,password.value=n.password):alert("El "+a+" no existe en la base de datos"),t.next=11;break;case 10:alert("Debe indicar un username a consultar antes de modificar");case 11:case"end":return t.stop()}},e,t)}))()},modificarUsuario:function(){var t=this;return h()(m.a.mark(function e(){var a,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a={username:username.value,email:email.value,last_name:lastname.value,name:nombre.value,password:password.value},console.log(a),r="http://127.0.0.1:8000/usuario/actualizar",f.put(r,a).then(function(t){console.log(t)});case 4:case"end":return t.stop()}},e,t)}))()},crearUsuario:function(){var t=this;return h()(m.a.mark(function e(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a={username:username.value,email:email.value,last_name:lastname.value,name:nombre.value,password:password.value},fetch("http://127.0.0.1:8000/usuario/crear",{method:"POST",body:c()(a)}).then(function(t){return console.log(t),t.json()}).then(function(t){console.log(t)});case 3:case"end":return t.stop()}},e,t)}))()},testpost:function(){f.post("http://127.0.0.1:8000/testpost").then(function(t){console.log(t.data)}),f.put("http://127.0.0.1:8000/testput").then(function(t){console.log(t.data)})}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-mod"},[a("form",{attrs:{name:"usuario_consultar"}},[a("div",{},[a("input",{attrs:{id:"username_consulta",type:"text"}}),t._v(" "),a("input",{attrs:{type:"button",value:"Consultar Usuario"},on:{click:t.consultarUsuario}})])]),t._v(" "),a("form",{attrs:{name:"usuario_modificar"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",[a("input",{attrs:{type:"button",value:"Modificar"},on:{click:t.modificarUsuario}}),t._v(" "),a("input",{attrs:{type:"button",value:"crear"},on:{click:t.crearUsuario}}),t._v(" "),a("input",{attrs:{type:"button",value:"test"},on:{click:t.testpost}})])]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Volver")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("label",{attrs:{for:""}},[this._v("\n                Username:\n                "),e("input",{attrs:{id:"username",type:"text"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("label",{attrs:{for:""}},[this._v("\n                Contraseña:\n                "),e("input",{attrs:{id:"password",type:"text"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("label",{attrs:{for:""}},[this._v("\n                Nombre:\n                "),e("input",{attrs:{id:"nombre",type:"text"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("label",{attrs:{for:""}},[this._v("\n                Apellido:\n                "),e("input",{attrs:{id:"lastname",type:"text"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("label",{attrs:{for:""}},[this._v("\n                Correo Electronico:\n                "),e("input",{attrs:{id:"email",type:"text"}})])])}]},C=a("VU/8")(b,g,!1,null,null,null).exports,w={name:"usuarioCrear",methods:{crearUsuario:function(){var t={username:usuario.value,password:password.value,name:nombre.value,last_name:apellido.value,email:email.value};d.a.post("https://ancient-waters-19804.herokuapp.com/usuario/crear",t).then(function(t){console.log(t.data)})}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contendor-mod"},[a("h1",[t._v("modulo crear usuario")]),t._v(" "),a("form",{attrs:{name:"crear_usaurio",action:""}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"campo-input"},[a("input",{attrs:{form:"crear_usaurio",type:"button",value:"Crear Usuario"},on:{click:t.crearUsuario}})])]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Volver")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campo-input"},[e("label",{attrs:{for:""}},[this._v(" Nombre ")]),this._v(" "),e("input",{attrs:{id:"nombre",type:"text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campo-input"},[e("label",{attrs:{for:""}},[this._v(" Apellido ")]),this._v(" "),e("input",{attrs:{id:"apellido",type:"text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campo-input"},[e("label",{attrs:{for:""}},[this._v(" Usuario ")]),this._v(" "),e("input",{attrs:{id:"usuario",type:"text"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campo-input"},[e("label",{attrs:{for:""}},[this._v(" Correo Electronico ")]),this._v(" "),e("input",{attrs:{id:"email",type:"email",required:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campo-input"},[e("label",{attrs:{for:""}},[this._v(" Contraseña ")]),this._v(" "),e("input",{attrs:{id:"password",type:"password"}})])}]};var U=a("VU/8")(w,E,!1,function(t){a("HzI5")},"data-v-62d794f6",null).exports,k=d.a.create({headers:{"Access-Control-Allow-Origin":"*"}}),x={name:"usuarioEliminar",methods:{eliminarUsuario:function(){var t=this;return h()(m.a.mark(function e(){var a,r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("entro en funcion"),a=username.value,console.log(a),r="https://ancient-waters-19804.herokuapp.com/usuario/eliminar/"+a,k.delete(r).then(function(t){console.log(t)});case 5:case"end":return t.stop()}},e,t)}))()}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Modulo Usuario - Eliminar")]),t._v(" "),a("form",{attrs:{action:""}},[a("input",{attrs:{id:"username",type:"text"}}),t._v(" "),a("button",{on:{click:t.eliminarUsuario}},[t._v("Eliminar Usuario")]),t._v(" "),a("span",{attrs:{id:"res"}})]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Volver")])],1)},staticRenderFns:[]};var $=a("VU/8")(x,y,!1,function(t){a("MNeK")},"data-v-61b76390",null).exports,A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campo-usuario"},[e("span",{staticClass:"nombre-usuario"},[this._v(" "+this._s(this.buildName)+" ")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"options"},[e("a",{attrs:{href:"#/usuario/modificar"}},[e("button",[this._v("Editar")])]),this._v(" "),e("a",{attrs:{href:"#/usuario/eliminar"}},[e("button",[this._v("Eliminar")])])])}]},j={name:"usuarioListar",components:{ItemUser:a("VU/8")({name:"ItemUser",props:["name","lastname","username"],computed:{buildName:function(){return this.name+this.lastname+this.username}}},A,!1,null,null,null).exports},methods:{count:function(){return++counter},getUsers:function(){var t=this;this.axiosIns.get("https://ancient-waters-19804.herokuapp.com/usuario/todos/").then(function(e){e.data;t.listUsers=e.data}).catch(function(t){return users})}},data:function(){return{listUsers:[],counter:0,axiosIns:d.a.create({headers:{"Access-Control-Allow-Origin":"*"}})}},mounted:function(){this.getUsers()}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Usuarios")]),this._v(" "),e("router-link",{attrs:{to:"/usuario/crear"}},[this._v("Crear Usuario")]),this._v(" "),e("div",{attrs:{id:"listaUsuarios"}},this._l(this.listUsers,function(t,a){return e("item-user",{key:a,attrs:{lastname:t.last_name,name:t.name,username:t.username}})}),1)],1)},staticRenderFns:[]},M=a("VU/8")(j,V,!1,null,null,null).exports;r.a.use(i.a);var F=new i.a({routes:[{path:"/usuario/listar",name:"HelloWorld",component:u},{path:"/usuario/modificar",name:"usuarioModificar",component:C},{path:"/usuario/eliminar",name:"usuarioEliminar",component:$},{path:"/usuario/crear",name:"usuarioCrear",component:U},{path:"/",name:"usuarioListar",component:M}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:F,components:{App:n},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.20226cfe5e7adbf5b8fe.js.map