"use strict";(self.webpackChunkFrontEnd_AlmacenFisica=self.webpackChunkFrontEnd_AlmacenFisica||[]).push([[687],{7687:(P,s,c)=>{c.r(s),c.d(s,{AuthModule:()=>M});var d=c(6895),r=c(433),a=c(2655),e=c(8256);function m(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," El correo es requerido "),e.qZA())}function p(t,o){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,m,2,0,"div",21),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.submitted&&(null==n.f.username.errors?null:n.f.username.errors.required))}}function g(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1," La contrase\xf1a es requerida "),e.qZA())}function f(t,o){if(1&t&&(e.TgZ(0,"div",20),e.YNc(1,g,2,0,"div",21),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.submitted&&(null==n.f.password.errors?null:n.f.password.errors.required))}}const l=function(t){return{"is-invalid":t}},_=function(){return["../recuperar-contrasena"]},v=function(){return["../register"]};let b=(()=>{class t{constructor(n,i){this.fb=n,this.router=i,this.submitted=!1,this.loginForm=this.fb.group({username:["",[r.kI.required,r.kI.minLength(2)]],password:["",[r.kI.required,r.kI.minLength(2)]]})}get f(){return this.loginForm.controls}login(){this.submitted=!0,this.router.navigateByUrl("/home")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.qu),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:30,vars:13,consts:[[1,"d-flex","justify-content-center","align-items-center","p-3","mt-5"],[1,"card","p-0","shadow"],[1,"text-center"],[1,"mt-4","text-wrap"],[1,"title"],[1,"d-flex","justify-content-center"],[1,"m-2","p-2","col-10","text-wrap","fs-5","text-secondary"],[1,"card-body"],["need-validation","","novalidate","",3,"formGroup","ngSubmit"],[1,"form","px-4","pt-1","m-2"],[1,"formfloatig","mt-3"],["id","Correo-input","type","text","placeholder","Correo institucional o c\xe9dula","formControlName","username","autofocus","",1,"form-control",3,"ngClass"],["class","invalid",4,"ngIf"],["id","Contrase\xf1a","type","password","placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"ngClass"],[1,"d-flex","justify-content-start"],[1,"btn","btn-link","link-success",3,"routerLink"],[1,"d-flex","justify-content-start","mt-2"],[1,"text-secondary"],[1,"d-grid","gap-2","col-12","mt-4","pb-4"],["id","btn-sub","type","submit",1,"btn","btn-submit","btn-submit","p-1"],[1,"invalid"],[4,"ngIf"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3)(4,"strong",4),e._uU(5,"SPAF UdeA"),e.qZA()(),e.TgZ(6,"div",5)(7,"h1",6),e._uU(8," Sistema de Prestamos del Almacen de Fisica "),e.qZA()()(),e.TgZ(9,"div",7)(10,"form",8),e.NdJ("ngSubmit",function(){return i.login()}),e.TgZ(11,"div")(12,"div",9)(13,"div",10),e._UZ(14,"input",11),e.qZA(),e.YNc(15,p,2,1,"div",12),e.TgZ(16,"div",10),e._UZ(17,"input",13),e.qZA(),e.YNc(18,f,2,1,"div",12),e.TgZ(19,"div",14)(20,"a",15),e._uU(21,"\xbfOlvidaste tu contrase\xf1a?"),e.qZA()(),e.TgZ(22,"div",16)(23,"span",17),e._uU(24,"\xbfNo est\xe1s registrado?"),e.qZA(),e.TgZ(25,"a",15),e._uU(26," Registrate"),e.qZA()(),e.TgZ(27,"div",18)(28,"button",19),e._uU(29," Iniciar sesi\xf3n "),e.qZA()()()()()()()()),2&n&&(e.xp6(10),e.Q6J("formGroup",i.loginForm),e.xp6(4),e.Q6J("ngClass",e.VKq(7,l,i.submitted&&i.f.username.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.username.errors),e.xp6(2),e.Q6J("ngClass",e.VKq(9,l,i.submitted&&i.f.password.errors)),e.xp6(1),e.Q6J("ngIf",i.submitted&&i.f.password.errors),e.xp6(2),e.Q6J("routerLink",e.DdM(11,_)),e.xp6(5),e.Q6J("routerLink",e.DdM(12,v)))},dependencies:[d.mk,d.O5,a.yS,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".text-center[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]{margin:5em}.title[_ngcontent-%COMP%]{color:#026937}.btn-submit[_ngcontent-%COMP%]{color:#fff;border-color:#fff;background:linear-gradient(90deg,rgb(2,105,55) 0%,rgb(2,105,55) 0%,rgb(53,143,57) 100%)}.btn-submit[_ngcontent-%COMP%]:hover{transition:all .5s ease-out;background-color:#fff}a[_ngcontent-%COMP%]{padding:0}.invalid[_ngcontent-%COMP%]{color:red}"]}),t})(),Z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main"]],decls:1,vars:0,consts:[[2,"margin-top","10px","min-height","80%"]],template:function(n,i){1&n&&e._UZ(0,"router-outlet",0)},dependencies:[a.lC],encapsulation:2}),t})();const C=function(){return["../login"]};let h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recuperar-contrasena"]],decls:18,vars:2,consts:[[1,"d-flex","justify-content-center","align-items-center","mt-5"],[1,"containerInside","card","shadow","p-3","pr-5",2,"width","35%"],[1,"card-body"],[1,"text-secondary"],[1,"form-group"],["type","text","formControlName","correo","placeholder","ejemplo@udea.edu.co",1,"form-control"],[1,"footer-row","d-md-flex","justify-content-md-end","mb-3"],[1,"d-grid","gap-2","col-sm-12","col-md-4","col-lg-4","col-xl-4","p-2"],[1,"btn-canc",3,"routerLink"],["id","btn-sub",1,"btn","btn-submit",3,"submit"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._uU(4,"Recupera tu contrase\xf1a"),e.qZA(),e._UZ(5,"hr"),e.TgZ(6,"form")(7,"div",4)(8,"label"),e._uU(9,"Correo Institucional"),e.qZA(),e._UZ(10,"input",5),e.qZA(),e.TgZ(11,"div",6)(12,"div",7)(13,"a",8),e._uU(14," Cancelar "),e.qZA()(),e.TgZ(15,"div",7)(16,"button",9),e.NdJ("submit",function(){return!0}),e._uU(17," Enviar "),e.qZA()()()()()()()),2&n&&(e.xp6(13),e.Q6J("routerLink",e.DdM(1,C)))},dependencies:[a.yS,r._Y,r.Fj,r.JJ,r.JL,r.u],styles:[".btn-dark[_ngcontent-%COMP%]{color:#fff;background-color:#43b649;border-color:#3ab795}.btn-dark[_ngcontent-%COMP%]:hover{background-color:#8dc63f}.btn-dark[_ngcontent-%COMP%]:active{border-color:#8dc63f}.btn-canc[_ngcontent-%COMP%]{text-align:center;border-radius:.4em;padding:.4em;color:#fff;background-color:#a9b1a9;border-color:#7d8180}.btn-canc[_ngcontent-%COMP%]:hover{background-color:#9e9b9b}.btn-canc[_ngcontent-%COMP%]:active{border-color:#9e9b9b}.containerInside[_ngcontent-%COMP%]{width:40%!important}@media screen and (max-width: 576px){.containerInside[_ngcontent-%COMP%]{width:95%!important}}@media (min-width: 577px) and (max-width: 899px){.containerInside[_ngcontent-%COMP%]{width:60%!important}}.btn-submit[_ngcontent-%COMP%]{color:#fff;border-color:#fff;background:linear-gradient(90deg,rgb(2,105,55) 0%,rgb(2,105,55) 0%,rgb(53,143,57) 100%)}.btn-submit[_ngcontent-%COMP%]:hover{transition:all .5s ease-out;background-color:#fff}"]}),t})();function A(t,o){if(1&t&&(e.TgZ(0,"option",28),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",e.lcZ(2,2,n)," ")}}function T(t,o){if(1&t&&(e.TgZ(0,"option",28),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",e.lcZ(2,2,n)," ")}}function x(t,o){if(1&t&&(e.TgZ(0,"option",28),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",e.lcZ(2,2,n)," ")}}function q(t,o){if(1&t&&(e.TgZ(0,"option",28),e._uU(1),e.ALo(2,"uppercase"),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.hij(" ",e.lcZ(2,2,n)," ")}}const U=function(){return["../login"]},y=[{path:"",component:Z,children:[{path:"login",component:b},{path:"register",component:(()=>{class t{constructor(){this.tipoIdentificacion=["","Cedula de Ciudadania","Cedula de Extranjeria","Pasaporte","Tarjeta de Identidad","Diplomatico","Doc. Ident. De Extranjeros","Ident. Fiscal. Para Ext.","NIT","NIT Persona Natural","NUIP","Registro Civil","Certificado Nacido Vivo","Pasaporte ONU","Permiso especial de permanencia","Salvoconducto de permanencia","Permiso especial formacion PEPFF","Permiso por protecci\xf3n temporal"],this.facultad=["","FCEN","FING"],this.departamento=["","Fisica","Quimica","Sistemas"],this.ocupacion=["Profesor","Estudiante"]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:85,vars:6,consts:[["need-validation","","novalidate","",1,"container","containerInside","card","shadow","mt-5","bg-white","rounded"],[1,"p-4"],[1,"card-body"],[1,"row","header-row","P-2"],[1,"col"],[1,"text-secondary"],[1,"alert","alert-warning"],[1,"form"],[1,"row","regular-row","mt-4"],[1,"col-md-4","col-xs-12","col-sm-6","label","mb-2"],[1,"col-sm-12","col-xs-12","col-md-8","col-12"],["id","apellido","type","text","placeholder"," ","formControlName","apellido",1,"form-control"],["id","nombre","type","text","placeholder","","formControlName","nombre",1,"form-control"],[1,"formfloatig"],["formControlName","correo","id","Correo-","type","text","placeholder","ejemplo@udea.edu.co",1,"form-control"],["for","Correo-",1,"formLabel"],["id","tipo_identificacion","formControlName","tipo_identificacion","required","","placeholder"," ",1,"form-select","form-select-lg"],[3,"value",4,"ngFor","ngForOf"],["id","identificacion","formControlName","identificacion","type","text","placeholder"," ",1,"form-control"],["id","roles_id","formControlName","roles_id","required","","placeholder"," ",1,"form-select","form-select-lg"],["id","escalafon","formControlName","escalafon","placeholder"," ",1,"form-select","form-select-lg"],["id","departamentos_id","formControlName","departamentos_id","required","","placeholder"," ",1,"form-select","form-select-lg"],["id","Contrasena","type","password","formControlName","contrasena","placeholder"," ",1,"form-control"],["id","Confirmar","type","password","formControlName","confirmarContrasena","placeholder"," ",1,"form-control"],[1,"footer-row","d-md-flex","justify-content-md-end","mb-3"],[1,"d-grid","gap-2","col-sm-12","col-md-4","col-lg-4","col-xl-4","p-2"],["type","button",1,"btn","btn-secondary",3,"routerLink"],["id","btn-sub",1,"btn","btn-submit",3,"submit"],[3,"value"]],template:function(n,i){1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),e._uU(6,"REGISTRO"),e.qZA()()(),e._UZ(7,"hr"),e.TgZ(8,"div",6)(9,"strong"),e._uU(10,"\xa1Importante!"),e.qZA(),e._uU(11," Antes de enviar, verifica que la informaci\xf3n se ingres\xf3 correctamente. "),e.qZA(),e.TgZ(12,"div",7)(13,"div",8)(14,"div",9),e._uU(15,"Apellidos"),e.qZA(),e.TgZ(16,"div",10),e._UZ(17,"input",11),e.qZA()(),e.TgZ(18,"div",8)(19,"div",9),e._uU(20,"Nombre"),e.qZA(),e.TgZ(21,"div",10),e._UZ(22,"input",12),e.qZA()(),e.TgZ(23,"div",8)(24,"div",9),e._uU(25," Correo Institucional "),e.qZA(),e.TgZ(26,"div",10)(27,"div",13),e._UZ(28,"input",14)(29,"label",15),e.qZA()()(),e.TgZ(30,"div",8)(31,"div",9),e._uU(32," Tipo de Identificaci\xf3n "),e.qZA(),e.TgZ(33,"div",10)(34,"div",13)(35,"select",16),e.YNc(36,A,3,4,"option",17),e.qZA()()()(),e.TgZ(37,"div",8)(38,"div",9),e._uU(39," N\xfamero de Identificaci\xf3n "),e.qZA(),e.TgZ(40,"div",10)(41,"div",13),e._UZ(42,"input",18),e.qZA()()(),e.TgZ(43,"div",8)(44,"div",9),e._uU(45,"Ocupacion"),e.qZA(),e.TgZ(46,"div",10)(47,"div",13)(48,"select",19),e.YNc(49,T,3,4,"option",17),e.qZA()()()(),e.TgZ(50,"div",8)(51,"div",9),e._uU(52,"Facultad"),e.qZA(),e.TgZ(53,"div",10)(54,"div",13)(55,"select",20),e.YNc(56,x,3,4,"option",17),e.qZA()()()(),e.TgZ(57,"div",8)(58,"div",9),e._uU(59," Departamento/Instituto "),e.qZA(),e.TgZ(60,"div",10)(61,"div",13)(62,"select",21),e.YNc(63,q,3,4,"option",17),e.qZA()()()(),e._UZ(64,"hr"),e.TgZ(65,"div",8)(66,"div",9),e._uU(67,"Contrase\xf1a"),e.qZA(),e.TgZ(68,"div",10)(69,"div",13),e._UZ(70,"input",22),e.qZA()()(),e.TgZ(71,"div",8)(72,"div",9),e._uU(73," Confirmar Contrase\xf1a "),e.qZA(),e.TgZ(74,"div",10)(75,"div",13),e._UZ(76,"input",23),e.qZA()()(),e._UZ(77,"hr"),e.TgZ(78,"div",24)(79,"div",25)(80,"a",26),e._uU(81," Cancelar "),e.qZA()(),e.TgZ(82,"div",25)(83,"button",27),e.NdJ("submit",function(){return!0}),e._uU(84," Confirmar "),e.qZA()()()()()()()),2&n&&(e.xp6(36),e.Q6J("ngForOf",i.tipoIdentificacion),e.xp6(13),e.Q6J("ngForOf",i.ocupacion),e.xp6(7),e.Q6J("ngForOf",i.facultad),e.xp6(7),e.Q6J("ngForOf",i.departamento),e.xp6(17),e.Q6J("routerLink",e.DdM(5,U)))},dependencies:[d.sg,a.yS,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.Q7,r.u,d.gd],styles:[".btn-submit[_ngcontent-%COMP%]{color:#fff;border-color:#fff;background:linear-gradient(90deg,rgb(2,105,55) 0%,rgb(2,105,55) 0%,rgb(53,143,57) 100%)}.btn-submit[_ngcontent-%COMP%]:hover{transition:all .5s ease-out;background-color:#fff}.containerInside[_ngcontent-%COMP%]{width:75%;min-height:10vh!important;display:flex;flex-direction:column;justify-content:center;padding:1em;align-items:unset;margin-bottom:6em!important}@media screen and (max-width: 920px){.containerInside[_ngcontent-%COMP%]{width:95%!important}}.btn-success[_ngcontent-%COMP%]{background-color:#43b649}.selectLabel[_ngcontent-%COMP%]{left:1.4em}"]}),t})()},{path:"recuperar-contrasena",component:h},{path:"**",redirectTo:"login"}]}];let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(y),a.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,F,r.UX]}),t})()}}]);