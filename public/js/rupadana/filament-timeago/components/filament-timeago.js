var Ne=Object.create;var $=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,De=Object.prototype.hasOwnProperty;var Ae=(a,u)=>()=>(u||a((u={exports:{}}).exports,u),u.exports);var Te=(a,u,c,S)=>{if(u&&typeof u=="object"||typeof u=="function")for(let s of pe(u))!De.call(a,s)&&s!==c&&$(a,s,{get:()=>u[s],enumerable:!(S=Me(u,s))||S.enumerable});return a};var _e=(a,u,c)=>(c=a!=null?Ne(we(a)):{},Te(u||!a||!a.__esModule?$(c,"default",{value:a,enumerable:!0}):c,a));var ee=Ae((Ce,b)=>{var Re=function(){"use strict";var a=1,u=2,c=4,S=8,s=16,R=32,_=64,I=128,L=256,C=512,E=1024,O=I|_|s|S|c|u,l=1e3,d=60,v=60,t=24,x=t*v*d*l,h=7,w=12,D=10,A=10,T=10,Y=Math.ceil,N=Math.floor;function q(e,i){var n=e.getTime();return e.setMonth(e.getMonth()+i),Math.round((e.getTime()-n)/x)}function W(e){var i=e.getTime(),n=new Date(i);return n.setMonth(e.getMonth()+1),Math.round((n.getTime()-i)/x)}function ie(e){var i=e.getTime(),n=new Date(i);return n.setFullYear(e.getFullYear()+1),Math.round((n.getTime()-i)/x)}function j(e,i){if(i=i instanceof Date||i!==null&&isFinite(i)?new Date(+i):new Date,!e)return i;var n=+e.value||0;return n?(i.setTime(i.getTime()+n),i):(n=+e.milliseconds||0,n&&i.setMilliseconds(i.getMilliseconds()+n),n=+e.seconds||0,n&&i.setSeconds(i.getSeconds()+n),n=+e.minutes||0,n&&i.setMinutes(i.getMinutes()+n),n=+e.hours||0,n&&i.setHours(i.getHours()+n),n=+e.weeks||0,n&&(n*=h),n+=+e.days||0,n&&i.setDate(i.getDate()+n),n=+e.months||0,n&&i.setMonth(i.getMonth()+n),n=+e.millennia||0,n&&(n*=T),n+=+e.centuries||0,n&&(n*=A),n+=+e.decades||0,n&&(n*=D),n+=+e.years||0,n&&i.setFullYear(i.getFullYear()+n),i)}var z=0,re=1,oe=2,ue=3,fe=4,ae=5,le=6,ce=7,se=8,de=9,J=10,B,F,H,U,P,m,K;function he(e,i){return K(e)+(e===1?B[i]:F[i])}var G;function g(){}g.prototype.toString=function(e){var i=G(this),n=i.length;if(!n)return e?""+e:P;if(n===1)return i[0];var o=H+i.pop();return i.join(U)+o},g.prototype.toHTML=function(e,i){e=e||"span";var n=G(this),o=n.length;if(!o)return i=i||P,i&&"<"+e+">"+i+"</"+e+">";for(var r=0;r<o;r++)n[r]="<"+e+">"+n[r]+"</"+e+">";if(o===1)return n[0];var y=H+n.pop();return n.join(U)+y},g.prototype.addTo=function(e){return j(this,e)},G=function(e){var i=[],n=e.millennia;return n&&i.push(m(n,J)),n=e.centuries,n&&i.push(m(n,de)),n=e.decades,n&&i.push(m(n,se)),n=e.years,n&&i.push(m(n,ce)),n=e.months,n&&i.push(m(n,le)),n=e.weeks,n&&i.push(m(n,ae)),n=e.days,n&&i.push(m(n,fe)),n=e.hours,n&&i.push(m(n,ue)),n=e.minutes,n&&i.push(m(n,oe)),n=e.seconds,n&&i.push(m(n,re)),n=e.milliseconds,n&&i.push(m(n,z)),i};function me(e,i){switch(i){case"seconds":if(e.seconds!==d||isNaN(e.minutes))return;e.minutes++,e.seconds=0;case"minutes":if(e.minutes!==v||isNaN(e.hours))return;e.hours++,e.minutes=0;case"hours":if(e.hours!==t||isNaN(e.days))return;e.days++,e.hours=0;case"days":if(e.days!==h||isNaN(e.weeks))return;e.weeks++,e.days=0;case"weeks":if(e.weeks!==W(e.refMonth)/h||isNaN(e.months))return;e.months++,e.weeks=0;case"months":if(e.months!==w||isNaN(e.years))return;e.years++,e.months=0;case"years":if(e.years!==D||isNaN(e.decades))return;e.decades++,e.years=0;case"decades":if(e.decades!==A||isNaN(e.centuries))return;e.centuries++,e.decades=0;case"centuries":if(e.centuries!==T||isNaN(e.millennia))return;e.millennia++,e.centuries=0}}function M(e,i,n,o,r,y){return e[n]>=0&&(i+=e[n],delete e[n]),i/=r,i+1<=1?0:e[o]>=0?(e[o]=+(e[o]+i).toFixed(y),me(e,o),0):i}function Ee(e,i){var n=M(e,0,"milliseconds","seconds",l,i);if(n&&(n=M(e,n,"seconds","minutes",d,i),!!n&&(n=M(e,n,"minutes","hours",v,i),!!n&&(n=M(e,n,"hours","days",t,i),!!n&&(n=M(e,n,"days","weeks",h,i),!!n&&(n=M(e,n,"weeks","months",W(e.refMonth)/h,i),!!n&&(n=M(e,n,"months","years",ie(e.refMonth)/W(e.refMonth),i),!!n&&(n=M(e,n,"years","decades",D,i),!!n&&(n=M(e,n,"decades","centuries",A,i),!!n&&(n=M(e,n,"centuries","millennia",T,i),n))))))))))throw new Error("Fractional unit overflow")}function ve(e){var i;for(e.milliseconds<0?(i=Y(-e.milliseconds/l),e.seconds-=i,e.milliseconds+=i*l):e.milliseconds>=l&&(e.seconds+=N(e.milliseconds/l),e.milliseconds%=l),e.seconds<0?(i=Y(-e.seconds/d),e.minutes-=i,e.seconds+=i*d):e.seconds>=d&&(e.minutes+=N(e.seconds/d),e.seconds%=d),e.minutes<0?(i=Y(-e.minutes/v),e.hours-=i,e.minutes+=i*v):e.minutes>=v&&(e.hours+=N(e.minutes/v),e.minutes%=v),e.hours<0?(i=Y(-e.hours/t),e.days-=i,e.hours+=i*t):e.hours>=t&&(e.days+=N(e.hours/t),e.hours%=t);e.days<0;)e.months--,e.days+=q(e.refMonth,1);e.days>=h&&(e.weeks+=N(e.days/h),e.days%=h),e.months<0?(i=Y(-e.months/w),e.years-=i,e.months+=i*w):e.months>=w&&(e.years+=N(e.months/w),e.months%=w),e.years>=D&&(e.decades+=N(e.years/D),e.years%=D,e.decades>=A&&(e.centuries+=N(e.decades/A),e.decades%=A,e.centuries>=T&&(e.millennia+=N(e.centuries/T),e.centuries%=T)))}function ye(e,i,n,o){var r=0;!(i&E)||r>=n?(e.centuries+=e.millennia*T,delete e.millennia):e.millennia&&r++,!(i&C)||r>=n?(e.decades+=e.centuries*A,delete e.centuries):e.centuries&&r++,!(i&L)||r>=n?(e.years+=e.decades*D,delete e.decades):e.decades&&r++,!(i&I)||r>=n?(e.months+=e.years*w,delete e.years):e.years&&r++,!(i&_)||r>=n?(e.months&&(e.days+=q(e.refMonth,e.months)),delete e.months,e.days>=h&&(e.weeks+=N(e.days/h),e.days%=h)):e.months&&r++,!(i&R)||r>=n?(e.days+=e.weeks*h,delete e.weeks):e.weeks&&r++,!(i&s)||r>=n?(e.hours+=e.days*t,delete e.days):e.days&&r++,!(i&S)||r>=n?(e.minutes+=e.hours*v,delete e.hours):e.hours&&r++,!(i&c)||r>=n?(e.seconds+=e.minutes*d,delete e.minutes):e.minutes&&r++,!(i&u)||r>=n?(e.milliseconds+=e.seconds*l,delete e.seconds):e.seconds&&r++,(!(i&a)||r>=n)&&Ee(e,o)}function Q(e,i,n,o,r,y){var p=new Date;if(e.start=i=i||p,e.end=n=n||p,e.units=o,e.value=n.getTime()-i.getTime(),e.value<0){var k=n;n=i,i=k}e.refMonth=new Date(i.getFullYear(),i.getMonth(),15,12,0,0);try{e.millennia=0,e.centuries=0,e.decades=0,e.years=n.getFullYear()-i.getFullYear(),e.months=n.getMonth()-i.getMonth(),e.weeks=0,e.days=n.getDate()-i.getDate(),e.hours=n.getHours()-i.getHours(),e.minutes=n.getMinutes()-i.getMinutes(),e.seconds=n.getSeconds()-i.getSeconds(),e.milliseconds=n.getMilliseconds()-i.getMilliseconds(),ve(e),ye(e,o,r,y)}finally{delete e.refMonth}return e}function te(e){return e&a?l/30:e&u?l:e&c?l*d:e&S?l*d*v:e&s?l*d*v*t:l*d*v*t*h}function f(e,i,n,o,r){var y;n=+n||O,o=o>0?o:NaN,r=r>0?r<20?Math.round(r):20:0;var p=null;typeof e=="function"?(y=e,e=null):e instanceof Date||(e!==null&&isFinite(e)?e=new Date(+e):(typeof p=="object"&&(p=e),e=null));var k=null;if(typeof i=="function"?(y=i,i=null):i instanceof Date||(i!==null&&isFinite(i)?i=new Date(+i):(typeof i=="object"&&(k=i),i=null)),p&&(e=j(p,i)),k&&(i=j(k,e)),!e&&!i)return new g;if(!y)return Q(new g,e,i,n,o,r);var Le=te(n),X,Z=function(){y(Q(new g,e,i,n,o,r),X)};return Z(),X=setInterval(Z,Le)}f.MILLISECONDS=a,f.SECONDS=u,f.MINUTES=c,f.HOURS=S,f.DAYS=s,f.WEEKS=R,f.MONTHS=_,f.YEARS=I,f.DECADES=L,f.CENTURIES=C,f.MILLENNIA=E,f.DEFAULTS=O,f.ALL=E|C|L|I|_|R|s|S|c|u|a;var Se=f.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var i=e.singular||[];i.split&&(i=i.split("|"));var n=e.plural||[];n.split&&(n=n.split("|"));for(var o=z;o<=J;o++)B[o]=i[o]||B[o],F[o]=n[o]||F[o]}typeof e.last=="string"&&(H=e.last),typeof e.delim=="string"&&(U=e.delim),typeof e.empty=="string"&&(P=e.empty),typeof e.formatNumber=="function"&&(K=e.formatNumber),typeof e.formatter=="function"&&(m=e.formatter)}},V=f.resetFormat=function(){B=" millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),F=" milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),H=" and ",U=", ",P="",K=function(e){return e},m=he};return f.setLabels=function(e,i,n,o,r,y,p){Se({singular:e,plural:i,last:n,delim:o,empty:r,formatNumber:y,formatter:p})},f.resetLabels=V,V(),typeof b<"u"&&b.exports?b.exports=f:typeof window<"u"&&typeof window.define=="function"&&typeof window.define.amd<"u"&&window.define("countdown",[],function(){return f}),f}()});var ne=_e(ee(),1);function Ie({strdate:a,id:u,dateLabel:c=["years","months","days","hours","minutes","seconds"],interval:S=1e3,prefix:s="",suffix:R=""}){return{strdate:a,dateLabel:c,interval:S,id:u,prefix:s,suffix:R,timer:null,getTimeAgo(){let _=new Date,I=new Date(this.strdate*1e3),L=(0,ne.default)(I,_),C=[L.years,L.months,L.days,L.hours,L.minutes,L.seconds],E="";return C.forEach((O,l)=>{O>0&&(E!=""&&(E+=" "),E+=O+this.dateLabel[l])}),this.prefix&&(E=this.prefix+" "+E),this.suffix&&(E=E+" "+this.suffix),E},init(){document.getElementById(this.id).innerHTML=this.getTimeAgo(),this.interval&&(this.timer=setInterval(()=>{document.getElementById(this.id).innerHTML=this.getTimeAgo()},this.interval))},destroy(){clearInterval(this.timer)}}}export{Ie as default};
/**
 * @license countdown.js v2.6.1 http://countdownjs.org
 * Copyright (c)2006-2014 Stephen M. McKamey.
 * Licensed under The MIT License.
 */
