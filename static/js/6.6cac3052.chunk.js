(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[6],{109:function(e,t,n){"use strict";n.r(t);n(95),n(1);var o=n(15),i=n(25),r=(n(96),n(30)),a=n(2),s=Object(o.b)(null,(function(e){return{removeItem:function(t){return e(Object(r.d)(t))},decreaseItem:function(t){return e(Object(r.b)(t))},addItem:function(t){return e(Object(r.a)(t))}}}))((function(e){return Object(a.jsxs)("div",{className:"checkout-item",children:[Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)("img",{src:e.item.imageUrl,alt:"item"})}),Object(a.jsx)("span",{className:"name",children:e.item.name}),Object(a.jsxs)("span",{className:"quantity",children:[Object(a.jsx)("div",{className:"arrow",onClick:function(){e.decreaseItem(e.item)},children:"\u276e"}),Object(a.jsx)("span",{className:"value",children:e.quantity}),Object(a.jsx)("div",{className:"arrow",onClick:function(){e.addItem(e.item)},children:"\u276f"})]}),Object(a.jsx)("span",{className:"price",children:e.item.price}),Object(a.jsx)("div",{className:"remove-button",onClick:function(){e.removeItem(e.item)},children:"\u2715"})]})})),l=n(97),c=n.n(l),d=function(e){var t=100*e.price;return Object(a.jsx)(c.a,{label:"Pay Now",name:"e-com test website",billingAddress:!0,shippingAddress:!0,description:"Your total is $".concat(e.price),amount:t,panelLabel:"Pay Now",token:function(e){console.log("token: ",e),alert("Payment Successful")},stripeKey:"pk_test_51J1ImLBufemeNTod8papfNNyT6PvEFCG5W0LB9Z9xNzLSaOa2KWJpejCJDg4jxZ7ZHiifG8xIQIoevMZnNGftTcW00QG6WcnvT"})};t.default=Object(o.b)((function(e){return{cartItems:Object(i.b)(e),cartTotal:Object(i.d)(e)}}))((function(e){return Object(a.jsxs)("div",{className:"checkout-page",children:[Object(a.jsxs)("div",{className:"checkout-header",children:[Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Product"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Description"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Quantity"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Price"})}),Object(a.jsx)("div",{className:"header-block",children:Object(a.jsx)("span",{children:"Remove"})})]}),e.cartItems.map((function(e){return Object(a.jsx)(s,{item:e,quantity:e.quantity},e.id)})),Object(a.jsx)("div",{className:"total",children:Object(a.jsxs)("span",{children:["TOTAL: $",e.cartTotal]})}),Object(a.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments ",Object(a.jsx)("br",{}),"4242 4242 4242 4242 - Exp: any date - CVV:123"]}),Object(a.jsx)(d,{price:e.cartTotal})]})}))},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=s(n(1)),a=s(n(24));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!1,d=!1,u=!1,p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:n.props.stripeKey}),n.hasPendingClick&&n.showStripeDialog())},n.onScriptError=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.hideLoadingDialog(),n.props.onScriptError&&n.props.onScriptError.apply(n,t)},n.onClosed=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n._isMounted&&n.setState({open:!1}),n.props.closed&&n.props.closed.apply(n,t)},n.onOpened=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.setState({open:!0}),n.props.opened&&n.props.opened.apply(n,t)},n.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return o({},e,n.props.hasOwnProperty(t)&&l({},t,n.props[t]))}),{opened:n.onOpened,closed:n.onClosed})},n.onClick=function(){if(!n.props.disabled)if(u)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?n.showStripeDialog():(n.showLoadingDialog(),n.hasPendingClick=!0)},n.handleOnMouseDown=function(){n.setState({buttonActive:!0})},n.handleOnMouseUp=function(){n.setState({buttonActive:!1})},n.state={open:!1,buttonActive:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!d&&!c){c=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var n=!1,o=new Promise((function(n,o){t.onload=function(){d=!0,c=!1,n(),e.onScriptLoaded()},t.onerror=function(t){u=!0,c=!1,o(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){o.then((function(){return n?t({isCanceled:!0}):e()})),o.catch((function(e){return t(n?{isCanceled:!0}:e)}))})),cancel:function(){n=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){c||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return r.default.createElement("button",o({},l({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:o({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),r.default.createElement("span",{style:o({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return r.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},r.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?r.default.createElement(e,o({},l({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(r.default.Component);p.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},p.propTypes={desktopShowModal:a.default.bool,triggerEvent:a.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:a.default.string,style:a.default.object,textStyle:a.default.object,disabled:a.default.bool,ComponentClass:a.default.string,showLoadingDialog:a.default.func,hideLoadingDialog:a.default.func,onScriptError:a.default.func,onScriptTagCreated:a.default.func,reconfigureOnUpdate:a.default.bool,stripeKey:a.default.string.isRequired,token:a.default.func.isRequired,name:a.default.string,description:a.default.string,image:a.default.string,amount:a.default.number,locale:a.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:a.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:a.default.string,zipCode:a.default.bool,billingAddress:a.default.bool,shippingAddress:a.default.bool,email:a.default.string,allowRememberMe:a.default.bool,bitcoin:a.default.bool,alipay:a.default.oneOf(["auto",!0,!1]),alipayReusable:a.default.bool,opened:a.default.func,closed:a.default.func},p._isMounted=!1,t.default=p}}]);
//# sourceMappingURL=6.6cac3052.chunk.js.map