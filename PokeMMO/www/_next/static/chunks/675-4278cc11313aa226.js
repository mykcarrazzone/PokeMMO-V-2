(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9938:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r,n,i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var o=[],a=!0,l=!1;try{for(i=i.call(t);!(a=(r=i.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){l=!0,n=t}finally{try{a||null==i.return||i.return()}finally{if(l)throw n}}return o}}(t,e)||o(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(6495).Z,c=r(2648).Z,s=r(1598).Z,d=r(7273).Z,f=s(r(7294)),g=c(r(6505)),h=r(7675),m=r(5980),p=r(1059);r(2783);var y=c(r(1923)),v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function b(t){return void 0!==t.default}function w(t){return"number"==typeof t||void 0===t?t:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function S(t,e,r,n,i,o,a){t&&t["data-loaded-src"]!==e&&(t["data-loaded-src"]=e,("decode"in t?t.decode():Promise.resolve()).catch(function(){}).then(function(){if(t.parentNode){if("blur"===r&&o(!0),null==n?void 0:n.current){var e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});var a=!1,l=!1;n.current(u({},e,{nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:function(){return a},isPropagationStopped:function(){return l},persist:function(){},preventDefault:function(){a=!0,e.preventDefault()},stopPropagation:function(){l=!0,e.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(t)}}))}var z=f.forwardRef(function(t,e){var r=t.imgAttributes,n=t.heightInt,i=t.widthInt,o=(t.qualityInt,t.className),a=t.imgStyle,c=t.blurStyle,s=t.isLazy,g=t.fill,h=t.placeholder,m=t.loading,p=t.srcString,y=(t.config,t.unoptimized),v=(t.loader,t.onLoadRef),b=t.onLoadingCompleteRef,w=t.setBlurComplete,z=t.setShowAltText,E=(t.onLoad,t.onError),C=d(t,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=s?"lazy":m,f.default.createElement(f.default.Fragment,null,f.default.createElement("img",Object.assign({},C,r,{width:i,height:n,decoding:"async","data-nimg":g?"fill":"1",className:o,loading:m,style:u({},a,c),ref:f.useCallback(function(t){e&&("function"==typeof e?e(t):"object"===l(e)&&(e.current=t)),t&&(E&&(t.src=t.src),t.complete&&S(t,p,h,v,b,w,y))},[p,h,v,b,w,E,y,e]),onLoad:function(t){S(t.currentTarget,p,h,v,b,w,y)},onError:function(t){z(!0),"blur"===h&&w(!0),E&&E(t)}})))}),E=f.forwardRef(function(t,e){var r,o,a,c=t.src,s=t.sizes,S=t.unoptimized,E=void 0!==S&&S,C=t.priority,j=void 0!==C&&C,I=t.loading,_=t.className,R=t.quality,x=t.width,A=t.height,L=t.fill,k=t.style,O=t.onLoad,P=t.onLoadingComplete,N=t.placeholder,q=void 0===N?"empty":N,M=t.blurDataURL,B=t.layout,D=t.objectFit,T=t.objectPosition,W=(t.lazyBoundary,t.lazyRoot,d(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),F=f.useContext(p.ImageConfigContext),U=f.useMemo(function(){var t=v||F||m.imageConfigDefault,e=[].concat(i(t.deviceSizes),i(t.imageSizes)).sort(function(t,e){return t-e}),r=t.deviceSizes.sort(function(t,e){return t-e});return u({},t,{allSizes:e,deviceSizes:r})},[F]),G=W,Z=G.loader||y.default;delete G.loader;var H="__next_img_default"in Z;if(H){if("custom"===U.loader)throw Error('Image with src "'.concat(c,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var V=Z;Z=function(t){return t.config,V(d(t,["config"]))}}if(B){"fill"===B&&(L=!0);var J={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[B];J&&(k=u({},k,J));var $={responsive:"100vw",fill:"100vw"}[B];$&&!s&&(s=$)}var K="",Q=w(x),X=w(A);if("object"===l(r=c)&&(b(r)||void 0!==r.src)){var Y=b(c)?c.default:c;if(!Y.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(!Y.height||!Y.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)));if(o=Y.blurWidth,a=Y.blurHeight,M=M||Y.blurDataURL,K=Y.src,!L){if(Q||X){if(Q&&!X){var tt=Q/Y.width;X=Math.round(Y.height*tt)}else if(!Q&&X){var te=X/Y.height;Q=Math.round(Y.width*te)}}else Q=Y.width,X=Y.height}}var tr=!j&&("lazy"===I||void 0===I);((c="string"==typeof c?c:K).startsWith("data:")||c.startsWith("blob:"))&&(E=!0,tr=!1),U.unoptimized&&(E=!0),H&&c.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(E=!0);var tn=n(f.useState(!1),2),ti=tn[0],to=tn[1],ta=n(f.useState(!1),2),tl=ta[0],tu=ta[1],tc=w(R),ts=Object.assign(L?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:T}:{},tl?{}:{color:"transparent"},k),td="blur"===q&&M&&!ti?{backgroundSize:ts.objectFit||"cover",backgroundPosition:ts.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(h.getImageBlurSvg({widthInt:Q,heightInt:X,blurWidth:o,blurHeight:a,blurDataURL:M}),'")')}:{},tf=function(t){var e=t.config,r=t.src,n=t.unoptimized,o=t.width,a=t.quality,l=t.sizes,u=t.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(t,e,r){var n=t.deviceSizes,o=t.allSizes;if(r){for(var a,l=/(^|\s)(1?\d?\d)vw/g,u=[];a=l.exec(r);a)u.push(parseInt(a[2]));if(u.length){var c=.01*Math.min.apply(Math,u);return{widths:o.filter(function(t){return t>=n[0]*c}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof e?{widths:n,kind:"w"}:{widths:i(new Set([e,2*e].map(function(t){return o.find(function(e){return e>=t})||o[o.length-1]}))),kind:"x"}}(e,o,l),s=c.widths,d=c.kind,f=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map(function(t,n){return"".concat(u({config:e,src:r,quality:a,width:t})," ").concat("w"===d?t:n+1).concat(d)}).join(", "),src:u({config:e,src:r,quality:a,width:s[f]})}}({config:U,src:c,unoptimized:E,width:Q,quality:tc,sizes:s,loader:Z}),tg=c,th={imageSrcSet:tf.srcSet,imageSizes:tf.sizes,crossOrigin:G.crossOrigin},tm=f.useRef(O);f.useEffect(function(){tm.current=O},[O]);var tp=f.useRef(P);f.useEffect(function(){tp.current=P},[P]);var ty=u({isLazy:tr,imgAttributes:tf,heightInt:X,widthInt:Q,qualityInt:tc,className:_,imgStyle:ts,blurStyle:td,loading:I,config:U,fill:L,unoptimized:E,placeholder:q,loader:Z,srcString:tg,onLoadRef:tm,onLoadingCompleteRef:tp,setBlurComplete:to,setShowAltText:tu},G);return f.default.createElement(f.default.Fragment,null,f.default.createElement(z,Object.assign({},ty,{ref:e})),j?f.default.createElement(g.default,null,f.default.createElement("link",Object.assign({key:"__nimg-"+tf.src+tf.srcSet+tf.sizes,rel:"preload",as:"image",href:tf.srcSet?void 0:tf.src},th))):null)});e.default=E,("function"==typeof e.default||"object"===l(e.default)&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},7675:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageBlurSvg=function(t){var e=t.widthInt,r=t.heightInt,n=t.blurWidth,i=t.blurHeight,o=t.blurDataURL,a=n||e,l=i||r,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},1923:function(t,e){"use strict";function r(t){var e=t.config,r=t.src,n=t.width,i=t.quality;return"".concat(e.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.__next_img_default=!0,e.default=r},5675:function(t,e,r){t.exports=r(9938)}}]);