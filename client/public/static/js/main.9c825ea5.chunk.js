(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(68)},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(29),l=n.n(c),i=(n(45),n(7)),o=n(8),s=n(10),u=n(9),h=n(11),m=(n(47),n(72)),f=n(73),d=n(71),w=(n(49),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement("h3",null,"List of API Clients"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/tweeting"},"Post Tweet")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/keyword"},"Search"))))}}]),t}(a.Component)),p=n(30),E=(n(53),n(14)),g=n.n(E),v=n(21);function b(){var e=Object(p.a)(["\nquery timelinesQuery($var: String){ \n    timelines(screen_name:$var) {\n    id\n    id_str\n    text\n    favourited\n    user {\n        name\n      }\n    }\n}\n"]);return b=function(){return e},e}var k=g()(b()),j=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).inputChange=function(e){n.setState({searchText:e.target.value})},n.keyword=function(){fetch("/api/search?key=".concat(n.state.searchText)).then(function(e){return e.json()}).then(function(e){return n.setState({tweets:e.statuses},function(){return console.log("Customers fetched...",e)})})},n.like=function(e){fetch("/api/like?key=".concat(e)).then(function(e){return e.json()}).then(function(e){return n.setState({like:n.state.like.concat([e.id])},function(){return console.log("Customers fetched...",n.state.like)})})},n.queryS=function(){n.props.client.query({query:k,variables:{var:n.state.searchText}}).then(function(e){var t=e.data;return n.setState({tweets:t.timelines},function(){return console.log(t)})})},n.state={tweets:[],searchText:"",like:[]};var a=n.props,r=a.smallText,c=a.func;return n.smallText=r||"Use Twitter user/handle name to capture tweets",n.call=c,n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",null,r.a.createElement("h1",null,"Search Twitter"),r.a.createElement("small",null,this.smallText),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:this.inputChange}),r.a.createElement("button",{onClick:"keyword"===this.call?this.keyword:this.queryS},"Search")),this.state.tweets?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,this.state.tweets.length>0&&"keyword"!==this.call?this.state.tweets[0].user.name:null),r.a.createElement("ul",null,this.state.tweets.map(function(t){var n=e.state.like.includes(t.id),a=t.favorited;return r.a.createElement("li",{key:t.id,className:n||a?"liked":null},t.text,n||a?null:r.a.createElement("button",{className:"like-btn",onClick:e.like.bind(e,t.id_str)},"Like"))}))):null)}}]),t}(a.Component),y=Object(v.b)(j),O=(n(61),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({text:t.target.value})},e.posting=function(){fetch("/api/tweetPost?key=".concat(e.state.text)).then(function(e){return e.json()}).then(function(t){return e.setState({tweet:t},function(){return console.log("Customers fetched...",t)})})},e.state={tweet:{},text:null},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Post a new Tweet"),r.a.createElement("div",null,r.a.createElement("textarea",{className:"text-area",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"post-tweet",onClick:this.posting},"Tweet")),Object.keys(this.state.tweet).length>0?r.a.createElement("ul",null,r.a.createElement("li",null,"Happy Tweeting!! Mr ",this.state.tweet.user.name),r.a.createElement("li",null,"Created: ",this.state.tweet.created_at),r.a.createElement("li",null,"Tweet text: ",this.state.tweet.text),r.a.createElement("li",null,"Handle: @",this.state.tweet.user.screen_name)):null)}}]),t}(a.Component)),x=(n(63),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(y,{smallText:"Keyword Search",func:"keyword"})}}]),t}(a.Component)),C=new(n(37).a)({uri:"/graphql"}),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{client:C},r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"Jack Twitter API"),r.a.createElement(w,null)),r.a.createElement(f.a,{path:"/",exact:!0,component:y}),r.a.createElement(f.a,{path:"/tweeting",exact:!0,component:O}),r.a.createElement(f.a,{path:"/Keyword",exact:!0,component:x}))))}}]),t}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(T,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");S?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):N(e)})}}()}},[[40,2,1]]]);
//# sourceMappingURL=main.9c825ea5.chunk.js.map