(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RNiq:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),c=n("1OyB"),i=n("vuIU"),s=n("Ji7U"),l=n("md7G"),o=n("foSv"),u=n("q1tI"),d=n.n(u),p=n("z8k1"),m=n("QetY"),f=n("OIDg"),h=n("plLG"),b=n("8cHP"),N=d.a.createElement;function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var j=function(e){Object(s.a)(a,e);var t,n=(t=a,function(){var e,n=Object(o.a)(t);if(O()){var a=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(l.a)(this,e)});function a(){return Object(c.a)(this,a),n.apply(this,arguments)}return Object(i.a)(a,[{key:"renderCampaigns",value:function(){var e=this.props.campaigns.map((function(e){return{header:e,description:N(b.Link,{route:"/campaigns/".concat(e)},N("a",null,"View Campaign")),fluid:!0}}));return N(p.a.Group,{items:e})}},{key:"render",value:function(){return N(h.a,null,N("div",null,N("h3",null,"Open Campaigns"),N(b.Link,{route:"/campaigns/new"},N("a",null,N(m.a,{floated:"right",content:"Create Campaign",icon:"add circle",primary:!0}))),this.renderCampaigns()))}}],[{key:"getInitialProps",value:function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(f.a.methods.getDeployedCampaigns().call());case 2:return e=t.sent,t.abrupt("return",{campaigns:e});case 4:case"end":return t.stop()}}),null,null,null,Promise)}}]),a}(u.Component);t.default=j},ermX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},z8k1:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n("pVnL"),r=n.n(a),c=n("lwsE"),i=n.n(c),s=n("W8MJ"),l=n.n(s),o=n("a1gu"),u=n.n(o),d=n("Nsbk"),p=n.n(d),m=n("PJYZ"),f=n.n(m),h=n("7W2i"),b=n.n(h),N=n("lSNA"),O=n.n(N),j=n("TSYQ"),g=n.n(j),v=(n("c31U"),n("q1tI")),k=n.n(v),y=n("ZeOK"),C=n("ICNK"),w=n("Y53p"),x=n("H+2d"),E=n("5XkN"),P=(n("Wt1U"),n("MZgk"));function A(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,i=g()(Object(y.d)(c),"description",n),s=Object(C.a)(A,e),l=Object(w.a)(A,e);return k.a.createElement(l,r()({},s,{className:i}),x.a.isNil(t)?a:t)}A.handledProps=["as","children","className","content","textAlign"],A.propTypes={};var R=A;function T(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,i=g()(Object(y.d)(c),"header",n),s=Object(C.a)(T,e),l=Object(w.a)(T,e);return k.a.createElement(l,r()({},s,{className:i}),x.a.isNil(t)?a:t)}T.handledProps=["as","children","className","content","textAlign"],T.propTypes={};var G=T;function I(e){var t=e.children,n=e.className,a=e.content,c=e.textAlign,i=g()(Object(y.d)(c),"meta",n),s=Object(C.a)(I,e),l=Object(w.a)(I,e);return k.a.createElement(l,r()({},s,{className:i}),x.a.isNil(t)?a:t)}I.handledProps=["as","children","className","content","textAlign"],I.propTypes={};var K=I;function _(e){var t=e.children,n=e.className,a=e.content,c=e.description,i=e.extra,s=e.header,l=e.meta,o=e.textAlign,u=g()(Object(y.a)(i,"extra"),Object(y.d)(o),"content",n),d=Object(C.a)(_,e),p=Object(w.a)(_,e);return x.a.isNil(t)?x.a.isNil(a)?k.a.createElement(p,r()({},d,{className:u}),Object(P.d)(G,(function(e){return{content:e}}),s,{autoGenerateKey:!1}),Object(P.d)(K,(function(e){return{content:e}}),l,{autoGenerateKey:!1}),Object(P.d)(R,(function(e){return{content:e}}),c,{autoGenerateKey:!1})):k.a.createElement(p,r()({},d,{className:u}),a):k.a.createElement(p,r()({},d,{className:u}),t)}_.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],_.propTypes={};var D=_,J=n("3WF5"),X=n.n(J);function q(e){var t=e.centered,n=e.children,a=e.className,c=e.content,i=e.doubling,s=e.items,l=e.itemsPerRow,o=e.stackable,u=e.textAlign,d=g()("ui",Object(y.a)(t,"centered"),Object(y.a)(i,"doubling"),Object(y.a)(o,"stackable"),Object(y.d)(u),Object(y.g)(l),"cards",a),p=Object(C.a)(q,e),m=Object(w.a)(q,e);if(!x.a.isNil(n))return k.a.createElement(m,r()({},p,{className:d}),n);if(!x.a.isNil(c))return k.a.createElement(m,r()({},p,{className:d}),c);var f=X()(s,(function(e){var t=e.key||[e.header,e.description].join("-");return k.a.createElement(S,r()({key:t},e))}));return k.a.createElement(m,r()({},p,{className:d}),f)}q.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],q.propTypes={};var L=q,S=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=u()(this,(e=p()(t)).call.apply(e,[this].concat(r))),O()(f()(n),"handleClick",(function(e){var t=n.props.onClick;t&&t(e,n.props)})),n}return b()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,n=e.centered,a=e.children,c=e.className,i=e.color,s=e.content,l=e.description,o=e.extra,u=e.fluid,d=e.header,p=e.href,m=e.image,f=e.link,h=e.meta,b=e.onClick,N=e.raised,O=g()("ui",i,Object(y.a)(n,"centered"),Object(y.a)(u,"fluid"),Object(y.a)(f,"link"),Object(y.a)(N,"raised"),"card",c),j=Object(C.a)(t,this.props),v=Object(w.a)(t,this.props,(function(){if(b)return"a"}));return x.a.isNil(a)?x.a.isNil(s)?k.a.createElement(v,r()({},j,{className:O,href:p,onClick:this.handleClick}),E.a.create(m,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(l||d||h)&&k.a.createElement(D,{description:l,header:d,meta:h}),o&&k.a.createElement(D,{extra:!0},o)):k.a.createElement(v,r()({},j,{className:O,href:p,onClick:this.handleClick}),s):k.a.createElement(v,r()({},j,{className:O,href:p,onClick:this.handleClick}),a)}}]),t}(v.Component);O()(S,"Content",D),O()(S,"Description",R),O()(S,"Group",L),O()(S,"Header",G),O()(S,"Meta",K),O()(S,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),S.propTypes={}}},[["ermX",0,2,1,3,6]]]);