(this["webpackJsonpgoit-react-hw04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={contact__form:"ContactForm_contact__form__3xxAJ",input__number:"ContactForm_input__number__3Z0ht",input__name:"ContactForm_input__name__Nui5i",input__title:"ContactForm_input__title__1Br8U",btn__add:"ContactForm_btn__add__1DcNb"}},,,function(e,t,n){e.exports={item:"ContactList_item__2A-40"}},,function(e,t,n){e.exports={filter__container:"Filter_filter__container__2oA1T",filter__input:"Filter_filter__input__1NUs5"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),r=n.n(i),o=(n(16),n(11)),s=n(3),u=(n(17),n(21)),l=n(2),m=n.n(l),_=n(0);function b(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),b=l[0],d=l[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":d(a);break;default:return}},f=function(){r(""),d("")};return Object(_.jsx)("div",{className:m.a.contact__form,children:Object(_.jsxs)("form",{className:m.a.input__form,onSubmit:function(e){e.preventDefault();var n={id:Object(u.a)(),name:i,number:b};t(n),f()},children:[Object(_.jsxs)("label",{children:[Object(_.jsx)("span",{className:m.a.input__title,children:"Name"}),Object(_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:m.a.input__name,value:i,onChange:j})]}),Object(_.jsxs)("label",{children:[Object(_.jsx)("span",{className:m.a.input__title,children:"Number"}),Object(_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:m.a.input__number,value:b,onChange:j})]}),Object(_.jsx)("button",{type:"submit",className:m.a.btn__add,children:"Add contact"})]})})}var d=n(7),j=n.n(d),f=function(e){var t=e.filter,n=e.onChange;return Object(_.jsx)("div",{className:j.a.filter__container,children:Object(_.jsxs)("label",{className:j.a.filter__title,children:["Find contacts by name",Object(_.jsx)("input",{className:j.a.filter__input,type:"text",value:t,name:"name",onChange:n})]})})},p=n(5),O=n.n(p),h=function(e){var t=e.contacts,n=e.deleteContact;return Object(_.jsx)("div",{children:Object(_.jsx)("ul",{className:"contact-list",children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(_.jsxs)("li",{className:O.a.contact__item,children:[Object(_.jsxs)("p",{className:O.a.item,children:[t,":"]}),Object(_.jsx)("p",{className:O.a.item,children:a}),Object(_.jsx)("button",{type:"button",className:O.a.onClick__btn,onClick:function(){return n(c)},children:"Delete"},c)]},c)}))})})},x=n(10);function C(){var e=Object(a.useState)(x),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(s.a)(i,2),u=r[0],l=r[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(_.jsxs)("div",{className:"Container",children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(b,{onSubmit:function(e){if(n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in contacts."));c([].concat(Object(o.a)(n),[e]))}}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(f,{filter:u,onChange:function(e){l(e.target.value)}}),Object(_.jsx)(h,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),deleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})}r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e47c5879.chunk.js.map