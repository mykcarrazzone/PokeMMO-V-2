(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{5235:function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"===r(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var l=[],u=!0,a=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(e){a=!0,n=e}finally{try{u||null==o.return||o.return()}finally{if(a)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(2648).Z,a=r(7273).Z,f=u(r(7294)),i=r(2199),c=r(7389),s=r(1630),p=r(9541),d=r(6163),y=r(7215),b=r(5235),v=r(729),m=new Set;function h(e,t,r,n){if(i.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(function(e){})}}function g(e){return"string"==typeof e?e:c.formatUrl(e)}var S=f.default.forwardRef(function(e,t){var r,o,u=e.href,c=e.as,m=e.children,S=e.prefetch,C=e.passHref,M=e.replace,_=e.shallow,j=e.scroll,k=e.locale,E=e.onClick,O=e.onMouseEnter,w=e.onTouchStart,A=e.legacyBehavior,I=void 0!==A&&A,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,I&&("string"==typeof r||"number"==typeof r)&&(r=f.default.createElement("a",null,r));var x=!1!==S,L=f.default.useContext(p.RouterContext),R=f.default.useContext(d.AppRouterContext),T=null!=L?L:R,U=!L,N=f.default.useMemo(function(){if(!L){var e=g(u);return{href:e,as:c?g(c):e}}var t=n(i.resolveHref(L,u,!0),2),r=t[0],o=t[1];return{href:r,as:c?i.resolveHref(L,c):o||r}},[L,u,c]),D=N.href,H=N.as,K=f.default.useRef(D),B=f.default.useRef(H);I&&(o=f.default.Children.only(r));var Z=I?o&&"object"===l(o)&&o.ref:t,$=n(y.useIntersection({rootMargin:"200px"}),3),q=$[0],z=$[1],F=$[2],G=f.default.useCallback(function(e){(B.current!==H||K.current!==D)&&(F(),B.current=H,K.current=D),q(e),Z&&("function"==typeof Z?Z(e):"object"===l(Z)&&(Z.current=e))},[H,Z,D,F,q]);f.default.useEffect(function(){T&&z&&x&&h(T,D,H,{locale:k})},[H,D,z,k,x,null==L?void 0:L.locale,T]);var J={ref:G,onClick:function(e){I||"function"!=typeof E||E(e),I&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,o,l,u,a,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(p=e).currentTarget.target)||"_self"===d)&&!p.metaKey&&!p.ctrlKey&&!p.shiftKey&&!p.altKey&&(!p.nativeEvent||2!==p.nativeEvent.which)&&i.isLocalURL(r)){e.preventDefault();var p,d,y=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:a,scroll:u}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};c?f.default.startTransition(y):y()}}(e,T,D,H,M,_,j,k,U,x)},onMouseEnter:function(e){I||"function"!=typeof O||O(e),I&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),T&&(x||!U)&&h(T,D,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){I||"function"!=typeof w||w(e),I&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),T&&(x||!U)&&h(T,D,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!I||C||"a"===o.type&&!("href"in o.props)){var Q=void 0!==k?k:null==L?void 0:L.locale,V=(null==L?void 0:L.isLocaleDomain)&&b.getDomainLocale(H,Q,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);J.href=V||v.addBasePath(s.addLocale(H,Q,null==L?void 0:L.defaultLocale))}return I?f.default.cloneElement(o,J):f.default.createElement("a",Object.assign({},P,J),r)});t.default=S,("function"==typeof t.default||"object"===l(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,r=e.rootRef,n=e.rootMargin,c=e.disabled||!a,s=function(e){if(Array.isArray(e))return e}(t=l.useState(!1))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var l=[],u=!0,a=!1;try{for(o=o.call(e);!(u=(r=o.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(e){a=!0,n=e}finally{try{u||null==o.return||o.return()}finally{if(a)throw n}}return l}}(t,2)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),p=s[0],d=s[1],y=l.useRef(null),b=l.useCallback(function(e){y.current=e},[]);return l.useEffect(function(){if(a){if(!c&&!p){var e,t,o,l,s=y.current;if(s&&s.tagName)return t=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=f.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),f.set(r,t),t}({root:null==r?void 0:r.current,rootMargin:n})).id,o=e.observer,(l=e.elements).set(s,function(e){return e&&d(e)}),o.observe(s),function(){if(l.delete(s),o.unobserve(s),0===l.size){o.disconnect(),f.delete(t);var e=i.findIndex(function(e){return e.root===t.root&&e.margin===t.margin});e>-1&&i.splice(e,1)}}}}else if(!p){var b=u.requestIdleCallback(function(){return d(!0)});return function(){return u.cancelIdleCallback(b)}}},[c,n,r,p,y.current]),[b,p,l.useCallback(function(){d(!1)},[])]};var l=r(7294),u=r(8065),a="function"==typeof IntersectionObserver,f=new Map,i=[];("function"==typeof t.default||"object"===n(t.default)&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(7913)}}]);