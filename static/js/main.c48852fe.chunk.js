(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(4),o=n.n(r),a=(n(13),n(5)),i=n(6),l=n(2),h=n(8),u=n(7),d=(n(14),n(0)),j=function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})},m=(n(16),function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),Object(d.jsx)("h2",{children:e.monster.name}),Object(d.jsx)("p",{children:e.monster.email})]})}),b=(n(17),function(e){return console.log(e),Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(m,{monster:e},e.id)}))})}),f=(n(18),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e.searchField=e.searchField.bind(Object(l.a)(e)),e}return Object(i.a)(n,[{key:"monsterData",value:function(e){this.setState({monsters:e})}},{key:"searchField",value:function(e){this.setState({searchField:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.monsterData(t)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monsters Rolodex"}),Object(d.jsx)(j,{placeholder:"search monsters",handleChange:this.searchField}),Object(d.jsx)(b,{monsters:s})]})}}]),n}(c.a.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.c48852fe.chunk.js.map