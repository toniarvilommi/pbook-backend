(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),o=n(17),r=n.n(o),s=n(4),l=(n(24),n(1)),i=function(e){return Object(l.jsxs)("div",{className:"form__group field",children:[Object(l.jsx)("input",{className:"form__field",value:e.filter,placeholder:"Filter from here",onChange:e.handleFilterChange}),Object(l.jsx)("label",{for:"filter",class:"form__label",children:"Filter names"})]})},u=n(8),d=n(5),b=n.n(d),f="http://localhost:3001/api/persons",j={createContact:function(e){return b.a.post(f,e).then((function(e){return e.data}))},getContacts:function(){return b.a.get(f).then((function(e){return e.data}))},deleteContact:function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e}))},updateContact:function(e,t){return b.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))}},m=function(e){var t=e.newName,n=e.newNumber,c=e.persons,a=e.setPersons,o=e.setNewName,r=e.setNewNumber,s=e.setErrorMessage,i=e.setErrorMessageType;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:function(e){var l=!1;e.preventDefault();var d={name:t,number:n};c.forEach((function(e){if(d.name.toLowerCase()===e.name.toLowerCase()){if(alert("".concat(t," is already in the phonebook")),window.confirm("Do you want to replace the phone number?")){var b=e,f=Object(u.a)(Object(u.a)({},b),{},{number:n});console.log("element to update",f),j.updateContact(e.id,f).then((function(t){console.log("wtf is returned number?",t),a(c.map((function(n){return n.id!==e.id?n:t}))),s("Changed number for ".concat(t.name)),i(2),setTimeout((function(){s(null)}),2e3),o(""),r("")}))}o(""),r(""),l=!0}})),l||j.createContact(d).then((function(e){console.log("response in creating",e),a(c.concat(e)),s("Added ".concat(e.name)),i(1),setTimeout((function(){s(null)}),2e3),o(""),r("")}))},children:[Object(l.jsxs)("div",{className:"form__group field",children:[Object(l.jsx)("input",{className:"form__field",value:t,placeholder:"Write name here",onChange:function(e){o(e.target.value)}}),Object(l.jsx)("label",{for:"name",class:"form__label",children:"Name"})]}),Object(l.jsxs)("div",{className:"form__group field",children:[Object(l.jsx)("input",{className:"form__field",value:n,placeholder:"040-1234567",onChange:function(e){r(e.target.value)}}),Object(l.jsx)("label",{for:"number",class:"form__label",children:"Number"})]}),Object(l.jsx)("div",{className:"submitContainer",children:Object(l.jsx)("button",{type:"submit",className:"button",children:"Add contact"})})]})})},h=function(e){var t=e.message,n=e.type;if(null===t)return null;switch(n){case 1:n="add";break;case 2:n="change";break;case 3:n="delete";break;default:n="add"}return t?Object(l.jsx)("div",{className:"".concat(n," notification"),children:Object(l.jsx)("h3",{children:t})}):Object(l.jsx)("div",{})},O=n(18),p=n(19),g=function(e){var t=e.setPersons,n=e.persons,a=e.filter,o=e.setErrorMessage,r=e.setErrorMessageType,i=Object(c.useState)(0),u=Object(s.a)(i,2),d=u[0],b=u[1],f=function(e){var n=e.target.value;console.log("ID IS:",n),window.confirm("Do you really want to delete this?")&&j.deleteContact(n).then((function(e){o("Removed"),r(3),setTimeout((function(){o(null)}),2e3),j.getContacts().then((function(e){console.log("Fetch successful after deletion"),t(e)}))})).catch((function(e){console.log(e),o("Information of selected user has already been deleted"),r(3),setTimeout((function(){o(null)}),2e3)}))};return"undefined"!==typeof n&&0===n.length?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:"No contacts found, start by adding some."})}):Object(l.jsx)(l.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e){return Object(l.jsxs)("div",{className:"contact",onMouseOver:function(){return t=e.id,void b(t);var t},onMouseOut:function(){return b(0)},children:[Object(l.jsxs)("p",{children:[Object(l.jsx)(O.a,{})," ",e.name," - ",Object(l.jsx)(p.a,{})," ",e.number]},e.name),Object(l.jsx)("button",{style:e.id===d?{display:"block"}:{display:"none"},className:"remove-button",value:e.id,onClick:f,children:"delete"})]},e.name)}))})},x=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),u=r[0],d=r[1],b=Object(c.useState)(""),f=Object(s.a)(b,2),O=f[0],p=f[1],x=Object(c.useState)(""),v=Object(s.a)(x,2),N=v[0],C=v[1],w=Object(c.useState)(""),y=Object(s.a)(w,2),_=y[0],F=y[1],E=Object(c.useState)(1),M=Object(s.a)(E,2),S=M[0],k=M[1];Object(c.useEffect)((function(){j.getContacts().then((function(e){console.log("Fetch successful"),a(e)}))}),[]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Phonebook"})}),Object(l.jsx)("h2",{children:"Add new contact"}),Object(l.jsx)(m,{newName:u,newNumber:O,persons:n,setPersons:a,setNewName:d,setNewNumber:p,setFilter:C,setErrorMessage:F,setErrorMessageType:k}),Object(l.jsx)("h2",{children:"Contact Book"}),Object(l.jsx)(g,{setPersons:a,persons:n,filter:N,setErrorMessage:F,setErrorMessageType:k}),Object(l.jsx)(i,{filter:N,handleFilterChange:function(e){C(e.target.value)}}),Object(l.jsx)(h,{message:_,type:S})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.8ce10eae.chunk.js.map