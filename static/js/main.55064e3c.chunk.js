(this["webpackJsonpreact-assignment"]=this["webpackJsonpreact-assignment"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),s=n.n(i),r=(n(10),n(2)),l=(n(11),[{id:1,name:"test1",age:"11",gender:"male",email:"test1@gmail.com",phoneNo:"9415346313"},{id:2,name:"test2",age:"12",gender:"male",email:"test2@gmail.com",phoneNo:"9415346314"},{id:3,name:"test3",age:"13",gender:"male",email:"test3@gmail.com",phoneNo:"9415346315"},{id:4,name:"test4",age:"14",gender:"male",email:"test4@gmail.com",phoneNo:"9415346316"},{id:5,name:"test5",age:"15",gender:"male",email:"test5@gmail.com",phoneNo:"9415346317"},{id:6,name:"test6",age:"16",gender:"male",email:"test6@gmail.com",phoneNo:"9415346318"}]),o=n(0),j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"stock-container",children:l.map((function(e,t){return Object(o.jsx)("div",{children:Object(o.jsx)(d,{id:e.id,name:e.name,age:e.age,gender:e.gender,email:e.email,phoneNo:e.phoneNo},t)},t)}))})})},d=function(e){var t=e.id,n=e.name,a=e.age,c=e.gender,i=e.email,s=e.phoneNo;return t?Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("h5",{children:t})}),Object(o.jsx)("td",{children:Object(o.jsx)("h5",{children:n})}),Object(o.jsx)("td",{children:Object(o.jsx)("h4",{children:a})}),Object(o.jsx)("td",{children:Object(o.jsx)("h4",{children:c})}),Object(o.jsx)("td",{children:Object(o.jsx)("h4",{children:i})}),Object(o.jsx)("td",{children:Object(o.jsx)("p",{children:s})})]})})}):Object(o.jsx)("div",{})},m=n(3);var b=function(e){var t=e.Login,n=e.error,c=Object(a.useState)({email:"",password:""}),i=Object(r.a)(c,2),s=i[0],l=i[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(o.jsxs)("div",{className:"form-inner",children:[Object(o.jsx)("h1",{children:"User Login"}),Object(o.jsx)("br",{}),""!=n?Object(o.jsx)("div",{className:"error",children:n}):"",Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"UserName:"}),Object(o.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(o.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return l(Object(m.a)(Object(m.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(o.jsx)("input",{type:"submit",value:"LOGIN"})]})})};var h=function(){var e="hruday@gmail.com",t="hruday123",n=Object(a.useState)({email:""}),c=Object(r.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(""),d=Object(r.a)(l,2),m=d[0];return d[1],Object(o.jsx)("div",{className:"App",children:""!=i.email?Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsx)("h1",{children:"EmployeeList"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"box",children:Object(o.jsx)(j,{})}),Object(o.jsx)("button",{onClick:function(){console.log("Logout"),s({email:""})},children:"Logout"})]}):Object(o.jsx)(b,{Login:function(n){console.log(n),n.email==e&&n.password==t?(console.log("Logged in"),s({email:n.email.substring(0,n.email.lastIndexOf("@"))})):alert("Details do not match\nTry Again!!")},error:m})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.55064e3c.chunk.js.map