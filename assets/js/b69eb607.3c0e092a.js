"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[5385],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"addingusers",title:"Post-Install Configuration",description:"Adding users",slug:"/gettingstarted/postinstall"},l=void 0,u={unversionedId:"gettingstarted/postinstall/addingusers",id:"gettingstarted/postinstall/addingusers",title:"Post-Install Configuration",description:"Adding users",source:"@site/docs/user/gettingstarted/postinstall/addingusers.md",sourceDirName:"gettingstarted/postinstall",slug:"/gettingstarted/postinstall",permalink:"/docs/user/gettingstarted/postinstall",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/gettingstarted/postinstall/addingusers.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1679916508,formattedLastUpdatedAt:"27/03/2023",frontMatter:{id:"addingusers",title:"Post-Install Configuration",description:"Adding users",slug:"/gettingstarted/postinstall"},sidebar:"userSidebar",previous:{title:"Conditional Access Best Practices",permalink:"/docs/user/gettingstarted/postinstall"},next:{title:"Post-Install Configuration",permalink:"/docs/user/gettingstarted/postinstall"}},d={},c=[{value:"Adding Users",id:"adding-users",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adding-users"},"Adding Users"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Hosted requests")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default you do not have backend access to the hosted environment. You can request new user invites via email, or request backend access by contacting the helpdesk."))),(0,i.kt)("p",null,"After deployment you'll need to give each user access. To generate an invite for a user follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to the Azure Portal."),(0,i.kt)("li",{parentName:"ul"},"Go to your CIPP Resource Group."),(0,i.kt)("li",{parentName:"ul"},"Select your CIPP Static Web App ",(0,i.kt)("inlineCode",{parentName:"li"},"CIPP-SWA-XXXX"),"."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Role Management")," (Not IAM Role Management)."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"invite user"),"."),(0,i.kt)("li",{parentName:"ul"},"Enter the UPN for the user. It is important to make sure that this matches the M365 UPN."),(0,i.kt)("li",{parentName:"ul"},"Add the roles for the user.")),(0,i.kt)("p",null," Currently CIPP supports three roles, ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),". Further information on the roles and how to assign these is on the ",(0,i.kt)("a",{parentName:"p",href:"../roles/"},"Roles")," page."))}m.isMDXComponent=!0}}]);