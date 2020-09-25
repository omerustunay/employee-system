(this.webpackJsonpclient_src=this.webpackJsonpclient_src||[]).push([[0],{37:function(e,t,a){e.exports=a(66)},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(19),c=a.n(i),s=a(1),r=(a(42),a(7)),o=a(3),m=a(4),u=a(5),d=a(6),h=a(2),p=a.n(h),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={item:e.item},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("li",{className:"collection-item"},l.a.createElement(s.b,{to:"/locations/".concat(this.state.item.id)},this.state.item.name))}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={locations:[]},e}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getLocations()}},{key:"getLocations",value:function(){var e=this;p.a.get("http://localhost:3000/api/locations").then((function(t){e.setState({locations:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.locations.map((function(e,t){return l.a.createElement(f,{key:e.id,item:e})}));return l.a.createElement("div",null,l.a.createElement("h1",null,"Locations"),l.a.createElement(s.b,{className:"btn blue",to:"/locations/add"},"Add"),l.a.createElement("ul",{className:"collection"},e))}}]),a}(n.Component),E=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"about"))},b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={details:""},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getLocations()}},{key:"getLocations",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/locations/".concat(t)).then((function(t){e.setState({details:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"onDelete",value:function(){var e=this,t=this.state.details.id;p.a.delete("http://localhost:3000/api/locations/".concat(t)).then((function(t){e.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/locations"},"Back"),l.a.createElement("h1",null,this.state.details.name),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Name: ",this.state.details.name),l.a.createElement("li",{className:"collection-item"},"Addres: ",this.state.details.addres),l.a.createElement("li",{className:"collection-item"},"Postal Code: ",this.state.details.postal_code),l.a.createElement("li",{className:"collection-item"},"City: ",this.state.details.city),l.a.createElement("li",{className:"collection-item"},"Country: ",this.state.details.country)),l.a.createElement(s.b,{className:"btn",to:"/locations/edit/".concat(this.state.details.id)}," Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"AddLocation",value:function(e){var t=this;p.a.request({method:"post",url:"http://localhost:3000/api/locations",data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,addres:this.refs.addres.value,postal_code:this.refs.postal_code.value,city:this.refs.city.value,country:this.refs.country.value};this.AddLocation(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/locations"},"Back"),l.a.createElement("h1",null,"Add Location"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name"}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"addres",ref:"addres"}),l.a.createElement("label",{htmlFor:"name"},"Addres")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"postal_code",ref:"postal_code"}),l.a.createElement("label",{htmlFor:"name"},"Postal Code")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"city",ref:"city"}),l.a.createElement("label",{htmlFor:"city"},"City")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"country",ref:"country"}),l.a.createElement("label",{htmlFor:"address"},"Country")),l.a.createElement("div",null),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),g=a(16),N=a(15),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:"",name:"",addres:"",postal_code:"",city:"",country:""},n.handleInputChange=n.handleInputChange.bind(Object(N.a)(n)),n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getLocationDetails()}},{key:"getLocationDetails",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/locations/".concat(t)).then((function(t){e.setState({id:t.data.id,name:t.data.name,addres:t.data.addres,postal_code:t.data.postal_code,city:t.data.city,country:t.data.country},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"editLocation",value:function(e){var t=this;p.a.request({method:"put",url:"http://localhost:3000/api/locations/".concat(this.state.id),data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,addres:this.refs.addres.value,postal_code:this.refs.postal_code.value,city:this.refs.city.value,country:this.refs.country.value};this.editLocation(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/locations"},"Back"),l.a.createElement("h1",null,"Edit Location"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name",value:this.state.name,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"addres",ref:"addres",value:this.state.addres,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"addres"},"Addres")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"postal_code",ref:"postal_code",value:this.state.postal_code,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"postal_code"},"Postal Code")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"city",ref:"city",value:this.state.city,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"city"},"City")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"country",ref:"country",value:this.state.country,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"country"},"Country")),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={item:e.item},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("li",{className:"collection-item"},l.a.createElement(s.b,{to:"/departments/".concat(this.state.item.id)},this.state.item.name))}}]),a}(n.Component),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={departments:[]},e}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getDepartments()}},{key:"getDepartments",value:function(){var e=this;p.a.get("http://localhost:3000/api/departments").then((function(t){e.setState({departments:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.departments.map((function(e,t){return l.a.createElement(O,{key:e.id,item:e})}));return l.a.createElement("div",null,l.a.createElement("h1",null,"Departments"),l.a.createElement(s.b,{className:"btn blue",to:"/departments/add"},"Add"),l.a.createElement("ul",{className:"collection"},e))}}]),a}(n.Component),j=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"anasayfa"))},C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={item:e.item},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("li",{className:"collection-item"},l.a.createElement(s.b,{to:"/employees/".concat(this.state.item.id)},this.state.item.name," ",this.state.item.surname))}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={employees:[]},e}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getEmployees()}},{key:"getEmployees",value:function(){var e=this;p.a.get("http://localhost:3000/api/employees").then((function(t){e.setState({employees:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.employees.map((function(e,t){return l.a.createElement(C,{key:e.id,item:e})}));return l.a.createElement("div",null,l.a.createElement("h1",null,"User List"),l.a.createElement(s.b,{className:"btn pink",to:"/employees/add"},"Add"),l.a.createElement("ul",{className:"collection"},e))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={details:""},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getEmployees()}},{key:"getEmployees",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/employees/".concat(t)).then((function(t){e.setState({details:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"onDelete",value:function(){var e=this,t=this.state.details.id;p.a.delete("http://localhost:3000/api/employees/".concat(t)).then((function(t){e.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/employees"},"Back"),l.a.createElement("h1",null,this.state.details.name),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Name: ",this.state.details.name),l.a.createElement("li",{className:"collection-item"},"Surname: ",this.state.details.surname),l.a.createElement("li",{className:"collection-item"},"Email: ",this.state.details.email),l.a.createElement("li",{className:"collection-item"},"Phone: ",this.state.details.phone),l.a.createElement("li",{className:"collection-item"},"Start Date: ",this.state.details.start_date),l.a.createElement("li",{className:"collection-item"},"Salary: ",this.state.details.salary),l.a.createElement("li",{className:"collection-item"},"Department: ",this.state.details.department_id),l.a.createElement("li",{className:"collection-item"},"Title: ",this.state.details.title_id),l.a.createElement("li",{className:"collection-item"},"Manager Name: ",this.state.details.manager_name)),l.a.createElement(s.b,{className:"btn",to:"/employees/edit/".concat(this.state.details.id)}," Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"))}}]),a}(n.Component),D=a(12),F=a.n(D),I=a(17),w=a(18),A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectOptions:[],id:"",name:""},n}return Object(m.a)(a,[{key:"getDepartment",value:function(){var e=Object(I.a)(F.a.mark((function e(){var t,a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3000/api/departments");case 2:t=e.sent,a=t.data,n=a.map((function(e){return{value:e.id,label:e.name}})),this.setState({selectOptions:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({id:e.value,name:e.label})}},{key:"componentDidMount",value:function(){this.getDepartment()}},{key:"AddEmployee",value:function(e){var t=this;p.a.request({method:"post",url:"http://localhost:3000/api/employees",data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,surname:this.refs.surname.value,email:this.refs.email.value,phone:this.refs.phone.value,start_date:this.refs.start_date.value,salary:this.refs.salary.value,department_id:this.state.id,title_id:this.refs.title_id.value,manager_name:this.refs.manager_name.value};this.AddEmployee(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/employees"},"Back"),l.a.createElement("h1",null,"Add Employee"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name"}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"surname",ref:"surname"}),l.a.createElement("label",{htmlFor:"surname"},"surname")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"email",ref:"email"}),l.a.createElement("label",{htmlFor:"email"},"Email")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"phone",ref:"phone"}),l.a.createElement("label",{htmlFor:"phone"},"Phone")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"date",id:"start",name:"trip-start",ref:"start_date",min:"2020-01-01",max:"2028-12-31"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"salary",ref:"salary"}),l.a.createElement("label",{htmlFor:"salary"},"Salary")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"title_id",ref:"title_id"}),l.a.createElement("label",{htmlFor:"title_id"},"Title id")),l.a.createElement("div",null,l.a.createElement(w.a,{options:this.state.selectOptions,onChange:this.handleChange.bind(this)}),l.a.createElement("option",{value:this.state.id}),l.a.createElement("p",null,"You have selected ",l.a.createElement("strong",null,this.state.name)," whose id is ",l.a.createElement("strong",null,this.state.id))),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"manager_name",ref:"manager_name"}),l.a.createElement("label",{htmlFor:"manager_name"},"Manager Name")),l.a.createElement("div",null),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),L=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:"",name:"",surname:"",email:"",phone:"",start_date:"",salary:"",department_id:"",title_id:"",manager_name:"",lid:"",lname:""},n.handleInputChange=n.handleInputChange.bind(Object(N.a)(n)),n}return Object(m.a)(a,[{key:"getLocations",value:function(){var e=Object(I.a)(F.a.mark((function e(){var t,a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3000/api/departments");case 2:t=e.sent,a=t.data,n=a.map((function(e){return{value:e.id,label:e.name}})),this.setState({selectOptions:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({lid:e.value,lname:e.label})}},{key:"componentDidMount",value:function(){this.getLocations()}},{key:"componentWillMount",value:function(){this.getEmployeeDetails()}},{key:"getEmployeeDetails",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/employees/".concat(t)).then((function(t){e.setState({id:t.data.id,name:t.data.name,surname:t.data.surname,email:t.data.email,phone:t.data.phone,start_date:t.data.start_date,salary:t.data.salary,department_id:t.data.department_id,title_id:t.data.title_id,manager_name:t.data.manager_name},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"editEmployee",value:function(e){var t=this;p.a.request({method:"put",url:"http://localhost:3000/api/employees/".concat(this.state.id),data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,surname:this.refs.surname.value,email:this.refs.email.value,phone:this.refs.phone.value,start_date:this.refs.start_date.value,salary:this.refs.salary.value,department_id:this.state.lid,title_id:this.refs.title_id.value,manager_name:this.refs.manager_name.value};this.editEmployee(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/employees"},"Back"),l.a.createElement("h1",null,"Edit User"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name",value:this.state.name,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"surname",ref:"surname",value:this.state.surname,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"surname"},"Surname")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"email",ref:"email",value:this.state.email,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"email"},"Email")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"phone",ref:"phone",value:this.state.phone,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"phone"},"Phone")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"date",id:"start",name:"start_date",ref:"start_date",min:"2020-01-01",max:"2028-12-31"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"salary",ref:"salary",value:this.state.salary,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"salary"},"Salary")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"title_id",ref:"title_id",value:this.state.title_id,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"title_id"},"Title id")),l.a.createElement("div",null,l.a.createElement(w.a,{options:this.state.selectOptions,onChange:this.handleChange.bind(this)}),l.a.createElement("option",{value:this.state.lid}),l.a.createElement("p",null,"You have selected ",l.a.createElement("strong",null,this.state.lname)," whose id is ",l.a.createElement("strong",null,this.state.lid))),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"manager_name",ref:"manager_name",value:this.state.manager_name,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"manager_name"},"Manager Name")),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={selectOptions:[],id:"",name:"",addres:"",postal_code:"",city:"",country:""},n}return Object(m.a)(a,[{key:"getLocations",value:function(){var e=Object(I.a)(F.a.mark((function e(){var t,a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3000/api/locations");case 2:t=e.sent,a=t.data,n=a.map((function(e){return{value:e.id,label:e.name}})),this.setState({selectOptions:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({id:e.value,name:e.label})}},{key:"componentDidMount",value:function(){this.getLocations()}},{key:"AddDepartment",value:function(e){var t=this;p.a.request({method:"post",url:"http://localhost:3000/api/departments",data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,manager:this.refs.manager.value,location_id:this.state.id};this.AddDepartment(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/departments"},"Back"),l.a.createElement("h1",null,"Add Department"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name"}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"manager",ref:"manager"}),l.a.createElement("label",{htmlFor:"manager"},"Manager")),l.a.createElement("div",null,l.a.createElement(w.a,{options:this.state.selectOptions,onChange:this.handleChange.bind(this)}),l.a.createElement("option",{value:this.state.id}),l.a.createElement("p",null,"You have selected ",l.a.createElement("strong",null,this.state.name)," whose id is ",l.a.createElement("strong",null,this.state.id))),l.a.createElement("div",null),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:"",name:"",manager:"",location_id:"",lid:"",lname:""},n.handleInputChange=n.handleInputChange.bind(Object(N.a)(n)),n}return Object(m.a)(a,[{key:"getLocations",value:function(){var e=Object(I.a)(F.a.mark((function e(){var t,a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3000/api/locations");case 2:t=e.sent,a=t.data,n=a.map((function(e){return{value:e.id,label:e.name}})),this.setState({selectOptions:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({lid:e.value,lname:e.label})}},{key:"componentDidMount",value:function(){this.getLocations()}},{key:"componentWillMount",value:function(){this.getDepartmentDetails()}},{key:"getDepartmentDetails",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/departments/".concat(t)).then((function(t){e.setState({id:t.data.id,name:t.data.name,manager:t.data.manager},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"editDepartment",value:function(e){var t=this;p.a.request({method:"put",url:"http://localhost:3000/api/departments/".concat(this.state.id),data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,manager:this.refs.manager.value,location_id:this.state.lid};this.editDepartment(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/departments"},"Back"),l.a.createElement("h1",null,"Edit Department"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name",value:this.state.name,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"manager",ref:"manager",value:this.state.manager,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"manager"},"Manager")),l.a.createElement("div",null,l.a.createElement(w.a,{options:this.state.selectOptions,onChange:this.handleChange.bind(this)}),l.a.createElement("option",{value:this.state.lid}),l.a.createElement("p",null,"You have selected ",l.a.createElement("strong",null,this.state.lname)," whose id is ",l.a.createElement("strong",null,this.state.lid))),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={details:""},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getDepartments()}},{key:"getDepartments",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/departments/".concat(t)).then((function(t){e.setState({details:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"onDelete",value:function(){var e=this,t=this.state.details.id;p.a.delete("http://localhost:3000/api/departments/".concat(t)).then((function(t){e.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/departments"},"Back"),l.a.createElement("h1",null,this.state.details.name),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Name: ",this.state.details.name),l.a.createElement("li",{className:"collection-item"},"Manager: ",this.state.details.manager),l.a.createElement("li",{className:"collection-item"},"Location: ",this.state.details.location_id)),l.a.createElement(s.b,{className:"btn",to:"/departments/edit/".concat(this.state.details.id)}," Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"))}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={item:e.item},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("li",{className:"collection-item"},l.a.createElement(s.b,{to:"/titles/".concat(this.state.item.id)},this.state.item.name))}}]),a}(n.Component),q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={titles:[]},e}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getTitles()}},{key:"getTitles",value:function(){var e=this;p.a.get("http://localhost:3000/api/titles").then((function(t){e.setState({titles:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.titles.map((function(e,t){return l.a.createElement(W,{key:e.id,item:e})}));return l.a.createElement("div",null,l.a.createElement("h1",null,"Titles"),l.a.createElement(s.b,{className:"btn blue",to:"/locations/add"},"Add"),l.a.createElement("ul",{className:"collection"},e))}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"AddTitle",value:function(e){var t=this;p.a.request({method:"post",url:"http://localhost:3000/api/titles",data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,start_date:this.refs.start_date.value,end_date:this.refs.end_date.value,department_name:this.refs.department_name.value};this.AddTitle(t),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/titles"},"Back"),l.a.createElement("h1",null,"Add Title"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name"}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"date",id:"start",name:"trip-start",ref:"start_date",min:"2020-01-01",max:"2028-12-31"})),l.a.createElement("div",null,l.a.createElement("input",{type:"date",id:"end",name:"trip-start",ref:"end_date",min:"2020-01-01",max:"2028-12-31"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"department_name",ref:"department_name"}),l.a.createElement("label",{htmlFor:"department_name"},"Department Name")),l.a.createElement("div",null),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),Y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={details:""},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getTitles()}},{key:"getTitles",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/titles/".concat(t)).then((function(t){e.setState({details:t.data},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"onDelete",value:function(){var e=this,t=this.state.details.id;p.a.delete("http://localhost:3000/api/titles/".concat(t)).then((function(t){e.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/titles"},"Back"),l.a.createElement("h1",null,this.state.details.name),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Name: ",this.state.details.name),l.a.createElement("li",{className:"collection-item"},"Start Date: ",this.state.details.start_date),l.a.createElement("li",{className:"collection-item"},"End Date: ",this.state.details.end_date),l.a.createElement("li",{className:"collection-item"},"Department Name: ",this.state.details.department_name)),l.a.createElement(s.b,{className:"btn",to:"/titles/edit/".concat(this.state.details.id)}," Edit"),l.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"))}}]),a}(n.Component),U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:"",name:"",start_date:"",end_date:"",department_name:""},n.handleInputChange=n.handleInputChange.bind(Object(N.a)(n)),n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){this.getTitleDetails()}},{key:"getTitleDetails",value:function(){var e=this,t=this.props.match.params.id;p.a.get("http://localhost:3000/api/titles/".concat(t)).then((function(t){e.setState({id:t.data.id,name:t.data.name,start_date:t.data.start_date.value,end_date:t.data.end_date,department_name:t.data.department_name},(function(){console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"editTitle",value:function(e){var t=this;p.a.request({method:"put",url:"http://localhost:3000/api/titles/".concat(this.state.id),data:e}).then((function(e){t.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,start_date:this.refs.start_date.value,end_date:this.refs.end_date.value,department_name:this.refs.department_name.value};this.editTitle(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.b,{className:"btn grey",to:"/titles"},"Back"),l.a.createElement("h1",null,"Edit Title"),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"name",ref:"name",value:this.state.name,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"name"},"Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"date",id:"start",name:"start_date",ref:"start_date",min:"2020-01-01",max:"2028-12-31"})),l.a.createElement("div",null,l.a.createElement("input",{type:"date",id:"end",name:"end_date",ref:"end_date",min:"2020-01-01",max:"2028-12-31"})),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",name:"department_name",ref:"department_name",value:this.state.department_name,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"department_name"},"Department Name")),l.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),a}(n.Component),z=function(){return l.a.createElement("main",null,l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/",component:j}),l.a.createElement(r.a,{exact:!0,path:"/locations",component:v}),l.a.createElement(r.a,{exact:!0,path:"/about",component:E}),l.a.createElement(r.a,{exact:!0,path:"/locations/add",component:y}),l.a.createElement(r.a,{exact:!0,path:"/locations/edit/:id",component:k}),l.a.createElement(r.a,{exact:!0,path:"/locations/:id",component:b}),l.a.createElement(r.a,{exact:!0,path:"/Employees",component:x}),l.a.createElement(r.a,{exact:!0,path:"/Employees/add",component:A}),l.a.createElement(r.a,{exact:!0,path:"/Employees/:id",component:S}),l.a.createElement(r.a,{exact:!0,path:"/employees/edit/:id",component:L}),l.a.createElement(r.a,{exact:!0,path:"/departments",component:_}),l.a.createElement(r.a,{exact:!0,path:"/departments/:id",component:B}),l.a.createElement(r.a,{exact:!0,path:"/departments/add",component:M}),l.a.createElement(r.a,{exact:!0,path:"/departments/edit/:id",component:T}),l.a.createElement(r.a,{exact:!0,path:"/titles",component:q}),l.a.createElement(r.a,{exact:!0,path:"/titles/:id",component:Y}),l.a.createElement(r.a,{exact:!0,path:"/titles/add",component:P}),l.a.createElement(r.a,{exact:!0,path:"/titles/edit/:id",component:U})))},J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("a",{href:"#!",className:"brand-logo"},l.a.createElement("i",{className:"material-icons"}),"Atez"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},l.a.createElement("i",{className:"fa fa-home"}),"Atez")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/employees"},l.a.createElement("i",{className:"fa fa-users"}),"User")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/departments"},l.a.createElement("i",{className:"fa fa-id-badge"}),"Department")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/locations"},l.a.createElement("i",{className:"fa fa-location-arrow"}),"Locations")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/titles"},l.a.createElement("i",{className:"fa fa-id-card-o"}),"Title")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/about"},l.a.createElement("i",{className:"fa fa-question-circle"}),"About"))))))}}]),a}(n.Component),$=function(){return l.a.createElement("div",null,l.a.createElement(J,null),l.a.createElement("div",{className:"container"},l.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e8649239.chunk.js.map