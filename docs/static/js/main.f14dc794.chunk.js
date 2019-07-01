(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(42)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(23),l=t.n(r),c=(t(32),t(26)),s=t(10),d=t(17),m=t(11),i=t(12),u=t(14),_=t(13),p=t(7),b=t(15),E=(t(33),t(34),t(5)),y=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(_.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.updateMood,t=e.addMood,o=e.mood,r=e.clearMood,l=e.error;return n.a.createElement("section",{className:"editor"},n.a.createElement("form",{action:"",className:"editor__form"},n.a.createElement("div",{className:"form__container"},n.a.createElement("label",{htmlFor:"date",className:"form__label date__label"},"Date"),n.a.createElement("input",{type:"date",id:"date",name:"date",className:"input date__input",onChange:a,value:o.date?o.date:"dd/mm/yyyy"})),n.a.createElement("div",{className:"form__container"},n.a.createElement("p",{className:"mood__subtitle"},"Mood"),n.a.createElement("ul",{className:"mood__options"},n.a.createElement("li",{className:"mood__option"},n.a.createElement("input",{type:"radio",id:"good",name:"mood",value:"good",className:"input mood__input",onChange:a,checked:!(!o.mood||"good"!==o.mood)}),n.a.createElement("label",{htmlFor:"good",className:"form__label mood__label"},":)")),n.a.createElement("li",{className:"mood__option"},n.a.createElement("input",{type:"radio",id:"bad",name:"mood",value:"bad",className:"input mood__input",onChange:a,checked:!(!o.mood||"bad"!==o.mood)}),n.a.createElement("label",{htmlFor:"bad",className:"form__label mood__label"},":(")))),o&&"good"===o.mood&&n.a.createElement("div",{className:"form__container"},n.a.createElement("label",{htmlFor:"message",className:"form__label"},"Message"),n.a.createElement("textarea",{id:"message",name:"message",rows:"2",cols:"33",placeholder:"Why was it a good day?",onChange:a,className:"input message__input",value:o.message})),n.a.createElement("div",{className:"actions"},o.date&&o.mood?n.a.createElement(E.b,{className:"button__link",to:"/"},n.a.createElement("button",{type:"button",className:"button button__save",onClick:t},"Save")):n.a.createElement("button",{type:"button",className:"button button__save",onClick:t},"Save"),n.a.createElement(E.b,{className:"button__link",to:"/"},n.a.createElement("button",{type:"button",className:"button button__cancel",onClick:r},"Cancel"))),l&&n.a.createElement("p",{className:"error"},"Please fill in the date and your mood!")))}}]),a}(o.Component),h=(t(39),function(e){var a=e.day;return n.a.createElement("li",{className:"day"},n.a.createElement("div",{title:a.date,className:"good"===a.mood?"smiley smiley__good":"smiley smiley__bad"},"good"===a.mood?":)":":("))}),f=(t(40),function(e){var a=e.days;return n.a.createElement("ul",{className:"day__list"},a&&a.map(function(e,a){return n.a.createElement(h,{day:e,key:a})}))}),N=(t(41),function(e){var a=e.days;return n.a.createElement("section",{className:"calendar"},n.a.createElement("div",{className:"add__button"},n.a.createElement(E.b,{to:"/editor"},"+")),n.a.createElement(f,{days:a}),0===a.length&&n.a.createElement("p",{className:"error"},"Click the + above to add more days!"))}),v=t(6),M=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(_.a)(a).call(this,e))).state={newMood:{},days:[],isError:!1},t.updateMood=t.updateMood.bind(Object(p.a)(t)),t.addMood=t.addMood.bind(Object(p.a)(t)),t.clearMood=t.clearMood.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("previousDays"))||[];this.setState({days:e})}},{key:"clearMood",value:function(){this.setState({newMood:{}})}},{key:"updateMood",value:function(e){var a=e.currentTarget;this.setState(function(e){return{newMood:Object(d.a)({},e.newMood,Object(s.a)({},a.name,a.value))}})}},{key:"addMood",value:function(e){var a=this.state.newMood;Object.keys(a).length>=2?(this.setState(function(e){var a,t,o=Object(d.a)({},e.newMood),n=Object(c.a)(e.days);return n.push(o),a="previousDays",t=n,localStorage.setItem(a,JSON.stringify(t)),{days:n,isError:!1}}),this.clearMood()):this.setState({isError:!0})}},{key:"render",value:function(){var e=this.state,a=e.newMood,t=e.days,o=e.isError,r=this.updateMood,l=this.addMood,c=this.clearMood;return n.a.createElement("div",{className:"app"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"wrapper header__wrapper"},n.a.createElement("h1",{className:"title"},"Welcome to the life calendar!"),n.a.createElement("h2",{className:"subtitle"},"How was your day?"))),n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"wrapper main__wrapper"},n.a.createElement(v.c,null,n.a.createElement(v.a,{exact:!0,path:"/",render:function(){return n.a.createElement(N,{days:t})}}),n.a.createElement(v.a,{path:"/editor",render:function(){return n.a.createElement(y,{updateMood:r,addMood:l,mood:a,clearMood:c,error:o})}})))),n.a.createElement("footer",{className:"footer"},n.a.createElement("p",{className:"footer__text"},"Megan M Edwards 2019")))}}]),a}(n.a.Component);l.a.render(n.a.createElement(E.a,null,n.a.createElement(M,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f14dc794.chunk.js.map