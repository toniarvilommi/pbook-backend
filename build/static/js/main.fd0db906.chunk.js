(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),o=n(17),r=n.n(o),s=n(4),i=(n(24),n(1)),l=function(e){return Object(i.jsxs)("div",{className:"form__group field",children:[Object(i.jsx)("input",{className:"form__field",value:e.filter,placeholder:"Filter from here",onChange:e.handleFilterChange}),Object(i.jsx)("label",{for:"filter",class:"form__label",children:"Filter names"})]})},u=n(8),d=n(5),b=n.n(d),f="https://intense-plateau-91933.herokuapp.com/api/persons",j={createContact:function(e){return b.a.post(f,e).then((function(e){return e.data}))},getContacts:function(){return b.a.get(f).then((function(e){return e.data}))},deleteContact:function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e}))},updateContact:function(e,t){return b.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))}},m=function(e){var t=e.newName,n=e.newNumber,c=e.persons,a=e.setPersons,o=e.setNewName,r=e.setNewNumber,s=e.setErrorMessage,l=e.setErrorMessageType;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:function(e){var i=!1;e.preventDefault();var d={name:t,number:n};c.forEach((function(e){if(d.name.toLowerCase()===e.name.toLowerCase()){if(alert("".concat(t," is already in the phonebook")),window.confirm("Do you want to replace the phone number?")){var b=e,f=Object(u.a)(Object(u.a)({},b),{},{number:n});console.log("element to update",f),j.updateContact(e.id,f).then((function(t){console.log("wtf is returned number?",t),a(c.map((function(n){return n.id!==e.id?n:t}))),s("Changed number for ".concat(t.name)),l(2),setTimeout((function(){s(null)}),2e3),o(""),r("")}))}o(""),r(""),i=!0}})),i||j.createContact(d).then((function(e){console.log("response in creating",e),a(c.concat(e)),s("Added ".concat(e.name)),l(1),setTimeout((function(){s(null)}),2e3),o(""),r("")}))},children:[Object(i.jsxs)("div",{className:"form__group field",children:[Object(i.jsx)("input",{className:"form__field",value:t,placeholder:"Write name here",onChange:function(e){o(e.target.value)}}),Object(i.jsx)("label",{for:"name",class:"form__label",children:"Name"})]}),Object(i.jsxs)("div",{className:"form__group field",children:[Object(i.jsx)("input",{className:"form__field",value:n,placeholder:"040-1234567",onChange:function(e){r(e.target.value)}}),Object(i.jsx)("label",{for:"number",class:"form__label",children:"Number"})]}),Object(i.jsx)("div",{className:"submitContainer",children:Object(i.jsx)("button",{type:"submit",className:"button",children:"Add contact"})})]})})},h=function(e){var t=e.message,n=e.type;if(null===t)return null;switch(n){case 1:n="add";break;case 2:n="change";break;case 3:n="delete";break;default:n="add"}return t?Object(i.jsx)("div",{className:"".concat(n," notification"),children:Object(i.jsx)("h3",{children:t})}):Object(i.jsx)("div",{})},O=n(18),p=n(19),g=function(e){var t=e.setPersons,n=e.persons,a=e.filter,o=e.setErrorMessage,r=e.setErrorMessageType,l=Object(c.useState)(0),u=Object(s.a)(l,2),d=u[0],b=u[1],f=function(e){var c=e.target.value;if(console.log("ID IS:",c),window.confirm("Do you really want to delete this?")){var a=n;j.deleteContact(c).then((function(e){o("Removed ".concat(void 0!==a?a[c-1].name:"")),r(3),setTimeout((function(){o(null)}),2e3),j.getContacts().then((function(e){console.log("Fetch successful after deletion"),t(e)}))})).catch((function(e){console.log(e),o('Information of "'.concat(void 0!==a?a[c-1].name:"",'" has already been deleted')),r(3),setTimeout((function(){o(null)}),2e3)}))}};return"undefined"!==typeof n&&0===n.length?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("p",{children:"No contacts found, start by adding some."})}):Object(i.jsx)(i.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e){return Object(i.jsxs)("div",{className:"contact",onMouseOver:function(){return t=e.id,void b(t);var t},onMouseOut:function(){return b(0)},children:[Object(i.jsxs)("p",{children:[Object(i.jsx)(O.a,{})," ",e.name," - ",Object(i.jsx)(p.a,{})," ",e.number]},e.name),Object(i.jsx)("button",{style:e.id===d?{display:"block"}:{display:"none"},className:"remove-button",value:e.id,onClick:f,children:"delete"})]},e.name)}))})},v=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),u=r[0],d=r[1],b=Object(c.useState)(""),f=Object(s.a)(b,2),O=f[0],p=f[1],v=Object(c.useState)(""),x=Object(s.a)(v,2),N=x[0],C=x[1],w=Object(c.useState)(""),y=Object(s.a)(w,2),_=y[0],F=y[1],k=Object(c.useState)(1),E=Object(s.a)(k,2),M=E[0],S=E[1];Object(c.useEffect)((function(){j.getContacts().then((function(e){console.log("Fetch successful"),a(e)}))}),[]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Phonebook"})}),Object(i.jsx)("h2",{children:"Add new contact"}),Object(i.jsx)(m,{newName:u,newNumber:O,persons:n,setPersons:a,setNewName:d,setNewNumber:p,setFilter:C,setErrorMessage:F,setErrorMessageType:S}),Object(i.jsx)("h2",{children:"Contact Book"}),Object(i.jsx)(g,{setPersons:a,persons:n,filter:N,setErrorMessage:F,setErrorMessageType:S}),Object(i.jsx)(l,{filter:N,handleFilterChange:function(e){C(e.target.value)}}),Object(i.jsx)(h,{message:_,type:M})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.fd0db906.chunk.js.map