(this["webpackJsonpreact-redux-exercises"]=this["webpackJsonpreact-redux-exercises"]||[]).push([[0],{10:function(e,n,t){e.exports=t.p+"static/media/redSignal.1272fbd8.jpeg"},11:function(e,n,t){e.exports=t.p+"static/media/greenSignal.35d4985a.jpeg"},12:function(e,n,t){e.exports=t.p+"static/media/yellowSignal.d99fdf2a.jpeg"},13:function(e,n,t){e.exports=t(25)},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),l=t(4),i=t(10),u=t.n(i),s=t(11),d=t.n(s),g=t(12),p=t.n(g),E=function(e){return"red"===e?u.a:"green"===e?d.a:"yellow"===e?p.a:null};var f=Object(l.b)((function(e){return{signalColor:e.signal.color}}),(function(e){return{changeSignal:function(n){return e({type:"CHANGE_SIGNAL",payload:n})}}}))((function(e){var n=e.signalColor,t=e.changeSignal;return r.a.createElement("div",{className:"ctn"},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){return t("red")},type:"button"},"Red"),r.a.createElement("button",{onClick:function(){return t("yellow")},type:"button"},"Yellow"),r.a.createElement("button",{onClick:function(){return t("green")},type:"button"},"Green")),r.a.createElement("img",{className:"signal",src:E(n),alt:"sinal"}))}));t(24);function m(){return r.a.createElement(f,null)}var b=t(1),_=t(3),O={signal:{color:"red"}};var S=Object(_.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_SIGNAL":return Object(b.a)(Object(b.a)({},e),{},{signal:Object(b.a)(Object(b.a)({},e.signal),{},{color:n.payload})});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:S},r.a.createElement(m,null))),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.65781eeb.chunk.js.map