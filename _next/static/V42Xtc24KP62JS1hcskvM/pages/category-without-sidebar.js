(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"50Wx":function(t,a,e){"use strict";e.r(a);var c=e("1OyB"),n=e("vuIU"),r=e("JX7q"),i=e("Ji7U"),l=e("md7G"),s=e("foSv"),o=e("rePB"),u=e("q1tI"),d=e.n(u),f=e("zCU4"),p=e("v6Hh"),m=e("rIQk"),h=e("tDAt"),b=e("/MKj"),v=e("qtF9"),O=e("YFqc"),g=e.n(O),j=e("cpGi"),N=e("GGqY"),y=e("7smD"),w=d.a.createElement;function C(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=Object(s.a)(t);if(a){var n=Object(s.a)(this).constructor;e=Reflect.construct(c,arguments,n)}else e=c.apply(this,arguments);return Object(l.a)(this,e)}}var k=function(t){Object(i.a)(e,t);var a=C(e);function e(){var t;Object(c.a)(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=a.call.apply(a,[this].concat(i)),Object(o.a)(Object(r.a)(t),"state",{modalOpen:!1,modalImage:"",price:0,idd:null}),Object(o.a)(Object(r.a)(t),"handleAddToCart",(function(a){t.props.addToCart(a),N.d.success("Added to the cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})),Object(o.a)(Object(r.a)(t),"handleModalData",(function(a,e,c){t.setState({modalImage:a,price:e,idd:c})})),Object(o.a)(Object(r.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(o.a)(Object(r.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),t}return Object(n.a)(e,[{key:"render",value:function(){var t=this,a=this.props.products,e=this.state.modalOpen;return w(d.a.Fragment,null,w(j.a,null),w(N.b,{transition:N.a}),a.map((function(a,e){return w("div",{className:"col-lg-3 col-md-6 products-col-item",key:e},w("div",{className:"single-product-box"},w("div",{className:"product-image"},w(g.a,{href:"#"},w("a",null,w("img",{src:a.image,alt:"image"}),w("img",{src:a.imageHover,alt:"image"}))),w("ul",null,w("li",null,w(g.a,{href:"#"},w("a",{"data-tip":"Quick View","data-place":"left",onClick:function(e){e.preventDefault(),t.openModal(),t.handleModalData(a.quickView,a.price,a.id)}},w("i",{className:"far fa-eye"})))),w("li",null,w(g.a,{href:"#"},w("a",{"data-tip":"Add to Wishlist","data-place":"left"},w("i",{className:"far fa-heart"})))),w("li",null,w(g.a,{href:"#"},w("a",{"data-tip":"Add to Compare","data-place":"left"},w("i",{className:"fas fa-sync"})))))),w("div",{className:"product-content"},w("h3",null,w(g.a,{href:"#"},w("a",null,a.title))),w("div",{className:"product-price"},w("span",{className:"new-price"},"$",a.price)),w("div",{className:"rating"},w("i",{className:"fas fa-star"}),w("i",{className:"fas fa-star"}),w("i",{className:"fas fa-star"}),w("i",{className:"fas fa-star"}),w("i",{className:"far fa-star"})),w(g.a,{href:"#"},w("a",{className:"btn btn-light",onClick:function(e){e.preventDefault(),t.handleAddToCart(a.id)}},"Add to Cart")))))})),e?w(y.a,{closeModal:this.closeModal,idd:this.state.idd,image:this.state.modalImage,price:this.state.price}):"")}}]),e}(u.Component),D=Object(b.b)((function(t){return{products:t.cartReducer.products}}),(function(t){return{addToCart:function(a){t(Object(v.n)(a))}}}))(k),R=d.a.createElement;function A(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=Object(s.a)(t);if(a){var n=Object(s.a)(this).constructor;e=Reflect.construct(c,arguments,n)}else e=c.apply(this,arguments);return Object(l.a)(this,e)}}var M=function(t){Object(i.a)(e,t);var a=A(e);function e(){var t;Object(c.a)(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=a.call.apply(a,[this].concat(i)),Object(o.a)(Object(r.a)(t),"state",{gridClass:"products-col-four"}),Object(o.a)(Object(r.a)(t),"handleGrid",(function(a){t.setState({gridClass:a})})),t}return Object(n.a)(e,[{key:"render",value:function(){var t=this.state.gridClass;return R(d.a.Fragment,null,R(f.a,null),R(m.a,{title:"Women's"}),R("section",{className:"products-collections-area ptb-60"},R("div",{className:"container"},R("div",{className:"section-title"},R("h2",null,R("span",{className:"dot"})," Without Sidebar")),R("div",{className:"row"},R("div",{className:"col-lg-12 col-md-12"},R(h.a,{onClick:this.handleGrid}),R("div",{id:"products-filter",className:"products-collections-listing row ".concat(t)},R(D,null)))))),R(p.a,null))}}]),e}(u.Component);a.default=M},ODb5:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category-without-sidebar",function(){return e("50Wx")}])}},[["ODb5",1,2,0,3,4,5,12]]]);