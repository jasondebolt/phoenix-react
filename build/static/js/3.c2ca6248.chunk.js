webpackJsonp([3],{446:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t={};return e.title||(t.title="Enter a title!"),e.content||(t.content="Enter some content!"),t}function c(e,t){return{user:e.user}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),l=n.n(u),s=n(147),p=n(143),f=n(9),b=n(68),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"renderField",value:function(e){var t="form-group "+(e.meta.touched&&e.meta.error?"has-danger":"");return l.a.createElement("div",{className:t},l.a.createElement("label",null,e.label),l.a.createElement("input",Object.assign({className:"form-control",type:"text"},e.input)),e.meta.touched?e.meta.error:"")}},{key:"onSubmit",value:function(e){var t=this,n=this.props.user;this.props.createPost(n,e,function(){t.props.history.push("/posts")})}},{key:"render",value:function(){var e=this.props.handleSubmit;return l.a.createElement("form",{onSubmit:e(this.onSubmit.bind(this))},l.a.createElement(s.a,{foo:"FOO TITLE",label:"Title",name:"title",component:this.renderField}),l.a.createElement(s.a,{foo:"FOO CONTENT",label:"Post Content",name:"content",component:this.renderField}),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),l.a.createElement(p.b,{to:"/posts",className:"btn btn-danger"},"Cancel"))}}]),t}(u.Component);t.default=Object(s.c)({validate:i,form:"PostsNewForm"})(Object(f.b)(c,{createPost:b.g})(h))}});
//# sourceMappingURL=3.c2ca6248.chunk.js.map