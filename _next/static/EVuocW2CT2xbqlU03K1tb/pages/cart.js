(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{YQMk:function(t,e,a){"use strict";a.r(e);var n=a("1OyB"),c=a("vuIU"),r=a("Ji7U"),o=a("md7G"),i=a("foSv"),l=a("q1tI"),u=a.n(l),s=a("zCU4"),f=a("v6Hh"),p=a("meiv"),d=a("rIQk"),m=a("JX7q"),h=a("rePB"),b=a("YFqc"),v=a.n(b),y=a("/MKj"),O=a("qtF9"),N=a("GGqY"),g=a("AG4I"),j=u.a.createElement;function R(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(i.a)(t);if(e){var c=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var k=function(t){Object(r.a)(a,t);var e=R(a);function a(){var t;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r)),Object(h.a)(Object(m.a)(t),"handleRemove",(function(e){t.props.removeItem(e),N.d.error("Removed from cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})),Object(h.a)(Object(m.a)(t),"handleAddQuantity",(function(e){t.props.addQuantity(e)})),Object(h.a)(Object(m.a)(t),"handleSubtractQuantity",(function(e){t.props.subtractQuantity(e)})),t}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props.products.length?this.props.products.map((function(e,a){return j("tr",{key:a},j("td",{className:"product-thumbnail"},j(v.a,{href:"#"},j("a",null,j("img",{src:e.imageSrc,alt:"item"})))),j("td",{className:"product-name"},j(v.a,{href:"#"},j("a",null,e.title))),j("td",{className:"product-price"},j(g.a,{amount:e.price})),j("td",{className:"product-quantity"},j("div",{className:"input-counter"},j("span",{className:"minus-btn",onClick:function(){t.handleSubtractQuantity(e.id)}},j("i",{className:"fas fa-minus"})),j("input",{type:"text",value:e.quantity,min:"1",max:10,readOnly:!0,onChange:function(t){return t}}),j("span",{className:"plus-btn",onClick:function(){t.handleAddQuantity(e.id)}},j("i",{className:"fas fa-plus"})))),j("td",{className:"product-subtotal"},j(g.a,{amount:e.price*e.quantity}),j(v.a,{href:"#"},j("a",{className:"remove",onClick:function(a){a.preventDefault(),t.handleRemove(e.id)}},j("i",{className:"far fa-trash-alt"})))))})):j("tr",null,j("td",{className:"product-thumbnail",colSpan:"5"},j("p",null,"Empty.")));return j(u.a.Fragment,null,j(N.b,{transition:N.a}),j("table",{className:"table table-bordered"},j("thead",null,j("tr",null,j("th",{scope:"col"},"Product"),j("th",{scope:"col"},"Name"),j("th",{scope:"col"},"Unit Price"),j("th",{scope:"col"},"Quantity"),j("th",{scope:"col"},"Total"))),j("tbody",null,e)))}}]),a}(l.Component),S=Object(y.b)((function(t){return{products:t.cartReducer.addedItems,total:t.cartReducer.total}}),(function(t){return{removeItem:function(e){t(Object(O.q)(e))},addQuantity:function(e){t(Object(O.l)(e))},subtractQuantity:function(e){t(Object(O.t)(e))}}}))(k),C=u.a.createElement;function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(i.a)(t);if(e){var c=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var w=function(t){Object(r.a)(a,t);var e=P(a);function a(){var t;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r)),Object(h.a)(Object(m.a)(t),"handleChecked",(function(e){e.target.checked?(t.props.addShipping(),N.d.success("Added $6 into total",{position:"bottom-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})):(t.props.substractShipping(),N.d.error("Removed $6 from total",{position:"bottom-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}))})),t}return Object(c.a)(a,[{key:"render",value:function(){return C("section",{className:"cart-area ptb-60"},C(N.b,{transition:N.a}),C("div",{className:"container"},C("div",{className:"row"},C("div",{className:"col-lg-12 col-md-12"},C("form",null,C("div",{className:"cart-table table-responsive"},C(S,null)),C("div",{className:"cart-buttons"},C("div",{className:"row align-items-center"},C("div",{className:"col-lg-7 col-md-7"},C("div",{className:"continue-shopping-box"},C(v.a,{href:"/"},C("a",{className:"btn btn-light"},"Continue Shopping")))))),C("div",{className:"cart-totals"},C("h3",null,"Cart Totals"),C("ul",null,C("li",null,"Subtotal ",C(g.a,{amount:this.props.total})),C("li",null,"Shipping ",C(g.a,{amount:this.props.shipping})),C("li",null,"Total"," ",C(g.a,{amount:this.props.total+this.props.shipping}))),C(v.a,{href:"/checkout"},C("a",{className:"btn btn-light"},"Proceed to Checkout"))))))))}}]),a}(l.Component),I=Object(y.b)((function(t){return{total:t.cartReducer.total,shipping:t.cartReducer.shipping}}),(function(t){return{addShipping:function(){t({type:"ADD_SHIPPING"})},substractShipping:function(){t({type:"SUB_SHIPPING"})}}}))(w),D=u.a.createElement;function Q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(i.a)(t);if(e){var c=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var q=function(t){Object(r.a)(a,t);var e=Q(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return D(u.a.Fragment,null,D(s.a,null),D(d.a,{title:"Cart"}),D(I,null),D(p.a,null),D(f.a,null))}}]),a}(l.Component);e.default=q},ahkM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return a("YQMk")}])},meiv:function(t,e,a){"use strict";var n=a("1OyB"),c=a("vuIU"),r=a("Ji7U"),o=a("md7G"),i=a("foSv"),l=a("q1tI"),u=a.n(l).a.createElement;function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(i.a)(t);if(e){var c=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var f=function(t){Object(r.a)(a,t);var e=s(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return u("section",{className:"facility-area"},u("div",{className:"container"},u("div",{className:"row"},u("div",{className:"col-lg-3 col-sm-6"},u("div",{className:"facility-box"},u("div",{className:"icon"},u("i",{className:"fas fa-plane"})),u("h3",null,"Free Shipping World Wide"))),u("div",{className:"col-lg-3 col-sm-6"},u("div",{className:"facility-box"},u("div",{className:"icon"},u("i",{className:"fas fa-money-check-alt"})),u("h3",null,"100% money back guarantee"))),u("div",{className:"col-lg-3 col-sm-6"},u("div",{className:"facility-box"},u("div",{className:"icon"},u("i",{className:"far fa-credit-card"})),u("h3",null,"Many payment gatways"))),u("div",{className:"col-lg-3 col-sm-6"},u("div",{className:"facility-box"},u("div",{className:"icon"},u("i",{className:"fas fa-headset"})),u("h3",null,"24/7 online support"))))))}}]),a}(l.Component);e.a=f},rIQk:function(t,e,a){"use strict";var n=a("1OyB"),c=a("vuIU"),r=a("Ji7U"),o=a("md7G"),i=a("foSv"),l=a("q1tI"),u=a.n(l),s=a("YFqc"),f=a.n(s),p=u.a.createElement;function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(i.a)(t);if(e){var c=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(o.a)(this,a)}}var m=function(t){Object(r.a)(a,t);var e=d(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return p("div",{className:"page-title-area"},p("div",{className:"container"},p("ul",null,p("li",null,p(f.a,{href:"/"},p("a",null,"Home"))),p("li",null,this.props.title))))}}]),a}(l.Component);e.a=m}},[["ahkM",1,2,0,3,4]]]);