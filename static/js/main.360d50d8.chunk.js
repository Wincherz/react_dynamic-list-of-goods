(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),c=o(2),r=o.n(c),l=o(3),s=o(4),i=o(7),d=o(6),u=(o(13),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}),f=o(5),m=o.n(f),g=function(t){var e=t.name,o=t.color;return a.a.createElement("li",{className:m()("".concat(o))},e)},h=function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement(g,{name:t.name,key:t.id,color:t.color})})))},p=function(t){Object(i.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.loadAllGoods=function(){u().then((function(e){t.setState({goods:e})}))},t.loadFiveGoods=function(){u().then((function(e){t.setState({goods:e.slice(0,5)})}))},t.loadRedGoods=function(){u().then((function(e){t.setState({goods:e.filter((function(t){return"red"===t.color}))})}))},t}return Object(s.a)(o,[{key:"render",value:function(){var t=this.state.goods;return a.a.createElement(a.a.Fragment,null,!!t.length&&a.a.createElement(h,{goods:t}),a.a.createElement("button",{type:"button",onClick:this.loadAllGoods},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.loadFiveGoods},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:this.loadRedGoods},"Load red goods"))}}]),o}(n.Component);r.a.render(a.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.360d50d8.chunk.js.map