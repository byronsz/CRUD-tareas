(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{14:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),o=(t(14),t(8)),i=t(1),m=t(7),s=t.n(m);var b=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(null),m=Object(i.a)(c,2),b=m[0],u=m[1],d=Object(n.useState)([]),g=Object(i.a)(d,2),f=g[0],E=g[1],p=Object(n.useState)(!1),N=Object(i.a)(p,2),x=N[0],v=N[1],h=Object(n.useState)({}),S=Object(i.a)(h,2),O=S[0],j=S[1];return Object(n.useEffect)((function(){f.length>0&&localStorage.setItem("tareas",JSON.stringify(f))}),[f]),Object(n.useEffect)((function(){localStorage.getItem("tareas")&&E(JSON.parse(localStorage.getItem("tareas")))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid bg-warning py-3 text-center text-dark"},r.a.createElement("h1",null,"CRUD SIMPLE")),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h3",null,"Lista Tareas"),r.a.createElement("ul",{className:"list-group"},!f.length>0?r.a.createElement("li",{className:"list-group-item fadeIn bg-light mb-2",style:{boxShadow:"0px 3px 3px rgba(0,0,0,.2)",border:"none",borderRadius:"3px"}},"Agregar tareas"):null,f.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item fadeIn bg-light mb-2",style:{boxShadow:"0px 3px 3px rgba(0,0,0,.2)",border:"none",borderRadius:"3px"}},e.nombreTarea,r.a.createElement("button",{className:"btn btn-danger btn-sm float-right",onClick:function(){return function(e){var a=f.filter((function(a){return a.id!==e}));E(a),l("")}(e.id)}},"Eliminar"),r.a.createElement("button",{className:"btn btn-warning btn-sm float-right mr-2",onClick:function(){return function(e){v(!0),l(e.nombreTarea),j({id:e.id,nombreTarea:e.nombreTarea})}(e)}},"editar"))})))),r.a.createElement("div",{className:"col-md-4 mb-4"},r.a.createElement("div",{className:"bg-light px-3 py-4",style:{boxShadow:"0px 10px 10px rgba(0,0,0,.2)"}},r.a.createElement("h3",{className:"text-center mb-3"},x?"Editar tarea":"Agregar Tarea"),r.a.createElement("form",{onSubmit:x?function(e){if(e.preventDefault(),t.trim()){var a=f.map((function(e){return O.id===e.id?{id:e.id,nombreTarea:t}:e}));E(a),l(""),v(!1),j({})}else u("Debes ingresar una tarea")}:function(e){e.preventDefault(),t.trim()?(u(null),E([].concat(Object(o.a)(f),[{id:s.a.generate(),nombreTarea:t}])),l("")):u("Debes ingresar una tarea")}},b?r.a.createElement("div",{className:"alert alert-danger alerta",role:"alert"},b):null,r.a.createElement("input",{type:"text",className:"form-control mb-2",placeholder:"Agregar tarea",value:t,onChange:function(e){l(e.target.value)}}),x?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn-warning btn-block btn-lg"},"Editar")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn-dark btn-block btn-lg",onClick:function(){v(!1),l("")}},"Cancelar"))):r.a.createElement("button",{className:"btn-dark btn-block btn-lg"},"Agregar tarea")))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.0427cec3.chunk.js.map