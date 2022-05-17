(function(){"use strict";var t={7196:function(t,e,o){var r=o(9242),n=o(3396),i=o(2268);function a(t,e,o,r,a,c){const s=(0,n.up)("Header"),d=(0,n.up)("TodoContainer");return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["app","dark"===t.theme?"darkTheme":"lightTheme"])},[(0,n.Wm)(s),(0,n.Wm)(d)],2)}function c(t,e,o,r,a,c){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["header",c.setThemeResponsive])},null,2)}var s=o(7139),d={data(){return{width:""}},computed:{...(0,s.rn)(["theme"]),setThemeResponsive(){return{headerDarkDesktop:"dark"===this.theme&&this.width>=768,headerLightDesktop:"light"===this.theme&&this.width>=768,headerDarkMobile:"dark"===this.theme&&this.width<768,headerLightMobile:"light"===this.theme&&this.width<768}}},mounted(){this.width=window.innerWidth}},l=o(89);const m=(0,l.Z)(d,[["render",c]]);var u=m;const h=t=>((0,n.dD)("data-v-eb59c44a"),t=t(),(0,n.Cn)(),t),p={class:"app-container"},f={class:"body-header"},g=h((()=>(0,n._)("h1",{class:"title"},"TODO",-1)));function v(t,e,o,r,a,c){const s=(0,n.up)("TodoInput");return(0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",f,[g,(0,n._)("button",{class:(0,i.C_)(["btn","dark"===t.theme?"img-dark":"img-light"]),onClick:e[0]||(e[0]=(...e)=>t.accionCambiarTheme&&t.accionCambiarTheme(...e))},null,2)]),(0,n.Wm)(s)])}const C={class:"container"};function k(t,e,o,a,c,s){const d=(0,n.up)("TodoList");return(0,n.wg)(),(0,n.iD)("div",C,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Create a new todo...",class:(0,i.C_)(["todoInput","dark"===t.theme?"inputDark":"inputLight"]),onKeyup:e[0]||(e[0]=(...t)=>s.procesarTodo&&s.procesarTodo(...t)),"onUpdate:modelValue":e[1]||(e[1]=t=>c.todo.title=t)},null,34),[[r.nr,c.todo.title,void 0,{trim:!0}]]),(0,n.Wm)(d,{todos:s.filtrarTodos()},null,8,["todos"])])}const b={class:"todolist-container"};function _(t,e,o,r,a,c){const s=(0,n.up)("Todo"),d=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.todos,((e,o)=>((0,n.wg)(),(0,n.iD)("div",{key:o},[(0,n.Wm)(s,{todo:e,onCompletar:t=>e.completed=t,class:(0,i.C_)("dark"===t.theme?"todos-dark":"todos-light")},null,8,["todo","onCompletar","class"])])))),128)),(0,n.Wm)(d)])}var T=o.p+"img/icon-cross.f21991e0.svg";const F={class:"todo-container todo-dark"},w={class:"title-container"},S=(0,n._)("img",{src:T,alt:""},null,-1),O=[S];function D(t,e,o,r,a,c){return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("button",{class:(0,i.C_)(["btn-check",[{completed:o.todo.completed},"dark"===t.theme?"btn-dark":"btn-light"]]),onClick:e[0]||(e[0]=(...t)=>c.marcarCompletado&&c.marcarCompletado(...t))},null,2),(0,n._)("div",w,[(0,n._)("p",{class:(0,i.C_)(["todo-title",{parrafoCompletado:o.todo.completed}])},(0,i.zw)(o.todo.title),3)]),(0,n._)("button",{class:"btn-cross",onClick:e[1]||(e[1]=e=>t.accionBorrarTodo(o.todo.id))},O)])}var y={props:{todo:Object},data(){return{localCompleted:this.todo.completed}},computed:{...(0,s.rn)(["todos","pendientes","theme"])},methods:{...(0,s.nv)(["accionPendientes","accionBorrarTodo"]),marcarCompletado(){this.localCompleted=!this.localCompleted,this.$emit("completar",this.localCompleted),this.accionPendientes(this.todos),localStorage.setItem("todos",JSON.stringify(this.todos))},deleteTodo(){console.log("remover")}}};const I=(0,l.Z)(y,[["render",D]]);var P=I;function V(t,e,o,r,a,c){const s=(0,n.up)("FooterFilters");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",{id:"footer",class:(0,i.C_)("dark"===t.theme?"footerDark":"footerLight")},[(0,n._)("p",null,(0,i.zw)(t.pendientes)+" Items left",1),(0,n.Wm)(s),(0,n._)("button",{onClick:e[0]||(e[0]=(...e)=>t.accionBorrarCompletado&&t.accionBorrarCompletado(...e))},"Clear Completed")],2),(0,n._)("div",{class:(0,i.C_)(["filters-movil","dark"===t.theme?"footerDark":"footerLight"])},[(0,n._)("button",{class:(0,i.C_)({marked:"all"===t.currentFilter||""===t.currentFilter}),onClick:e[1]||(e[1]=e=>t.accionSetValueFilter("all"))}," All ",2),(0,n._)("button",{class:(0,i.C_)({marked:"active"===t.currentFilter}),onClick:e[2]||(e[2]=e=>t.accionSetValueFilter("active"))}," Active ",2),(0,n._)("button",{class:(0,i.C_)({marked:"completed"===t.currentFilter}),onClick:e[3]||(e[3]=e=>t.accionSetValueFilter("completed"))}," Completed ",2)],2)])}function L(t,e,o,r,a,c){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["filters","dark"===t.theme?"footerDark":"footerLight"])},[(0,n._)("button",{class:(0,i.C_)({marked:"all"===t.currentFilter||""===t.currentFilter}),onClick:e[0]||(e[0]=e=>t.accionSetValueFilter("all"))}," All ",2),(0,n._)("button",{class:(0,i.C_)({marked:"active"===t.currentFilter}),onClick:e[1]||(e[1]=e=>t.accionSetValueFilter("active"))}," Active ",2),(0,n._)("button",{class:(0,i.C_)({marked:"completed"===t.currentFilter}),onClick:e[2]||(e[2]=e=>t.accionSetValueFilter("completed"))}," Completed ",2)],2)}var j={computed:{...(0,s.rn)(["currentFilter","theme"])},methods:{...(0,s.nv)(["accionSetValueFilter","accionBorrarCompletado"])}};const B=(0,l.Z)(j,[["render",L],["__scopeId","data-v-5674aeac"]]);var W=B,Z={components:{FooterFilters:W},computed:{...(0,s.rn)(["pendientes","currentFilter","theme"])},methods:{...(0,s.nv)(["accionSetValueFilter","accionBorrarCompletado"])}};const J=(0,l.Z)(Z,[["render",V],["__scopeId","data-v-489f42cd"]]);var N=J,x={components:{Todo:P,Footer:N},props:{todos:Object},computed:{...(0,s.rn)(["theme"])}};const A=(0,l.Z)(x,[["render",_]]);var M=A;const H=o(4703);var z={components:{TodoList:M},data(){return{todo:{id:"",title:"",completed:!1}}},computed:{...(0,s.rn)(["todos","pendientes","currentFilter","theme"])},methods:{...(0,s.nv)(["setTarea","accionPendientes","accionSetValueFilter"]),procesarTodo(t){""!==this.todo.title.trim()&&13===t.keyCode&&(this.todo.id=H.generate(),console.log(this.todo.id),this.setTarea(this.todo),this.todo={id:"",title:"",completed:!1},this.accionPendientes(this.todos))},filtrarTodos(){switch(this.currentFilter){case"all":return this.todos;case"active":return this.todos.filter((t=>!1===t.completed));case"completed":return this.todos.filter((t=>!0===t.completed));default:return this.todos}}}};const K=(0,l.Z)(z,[["render",k]]);var R=K,E={components:{TodoInput:R},computed:{...(0,s.rn)(["theme"])},methods:{...(0,s.nv)(["accionCambiarTheme"])}};const U=(0,l.Z)(E,[["render",v],["__scopeId","data-v-eb59c44a"]]);var Y=U,$={name:"App",components:{Header:u,TodoContainer:Y},computed:{...(0,s.rn)(["pendientes","theme"])},methods:{...(0,s.nv)(["accionCargarLS","accionPendientes","accionCargarTheme"])},created(){this.accionCargarLS(),this.pendientes=this.accionPendientes(),this.accionCargarTheme()}};const q=(0,l.Z)($,[["render",a]]);var G=q,Q=(0,s.MT)({state:{todos:[],pendientes:0,currentFilter:"",theme:""},getters:{},mutations:{cambiarTheme(t){"light"===t.theme?t.theme="dark":t.theme="light",localStorage.setItem("theme",t.theme)},theme(t,e){t.theme=e},cargarTodos(t,e){t.todos=e},set(t,e){t.todos.unshift(e),localStorage.setItem("todos",JSON.stringify(t.todos))},filtrarPendientes(t){t.pendientes=t.todos.filter((t=>!1===t.completed)).length},setPendientes(t,e){t.listaPendientes=e.filter((t=>!1===t.completed))},setValueFilter(t,e){t.currentFilter=e},filtrarTodos(t){switch(t.currentFilter){case"all":return t.todos;case"active":return t.todos.filter((t=>!1===t.completed));case"completed":return t.todos.filter((t=>!0===t.completed));default:return t.todos}},borrarTodo(t,e){t.todos=t.todos.filter((t=>t.id!==e)),localStorage.setItem("todos",JSON.stringify(t.todos))},borrarCompletados(t){t.todos=t.todos.filter((t=>!1===t.completed)),localStorage.setItem("todos",JSON.stringify(t.todos))}},actions:{setTarea({commit:t},e){t("set",e)},accionPendientes({commit:t}){t("filtrarPendientes")},listarPendientes({commit:t},e){t("setPendientes",e)},accionSetValueFilter({commit:t},e){t("setValueFilter",e)},accionFiltrarTodos({commit:t}){t("filtrarTodos")},accionBorrarTodo({commit:t},e){t("borrarTodo",e),t("filtrarPendientes")},accionBorrarCompletado({commit:t}){t("borrarCompletados")},accionCargarLS({commit:t}){localStorage.getItem("todos")?t("cargarTodos",JSON.parse(localStorage.getItem("todos"))):localStorage.setItem("todos",JSON.stringify([]))},accionCargarTheme({commit:t}){localStorage.getItem("theme")?t("theme",localStorage.getItem("theme")):localStorage.setItem("theme","light")},accionCambiarTheme({commit:t}){t("cambiarTheme")}},modules:{}});(0,r.ri)(G).use(Q).mount("#app")}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,r,n,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],n=t[l][1],i=t[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var d=n();void 0!==d&&(e=d)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,a=r[0],c=r[1],s=r[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(s)var l=s(o)}for(e&&e(r);d<a.length;d++)i=a[d],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(l)},r=self["webpackChunkapp_todo"]=self["webpackChunkapp_todo"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(7196)}));r=o.O(r)})();
//# sourceMappingURL=app.69c1c4b5.js.map