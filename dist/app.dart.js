(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.fp(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.J(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cn(b)
return new t(c,this)}:function(){if(t===null)t=A.cn(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cn(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
ct(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cq(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.cr==null){A.f8()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.e(A.cS("Return interceptor for "+A.m(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.bI
if(p==null)p=$.bI=A.bV(o)
q=r[p]}if(q!=null)return q
q=A.fd(a)
if(q!=null)return q
if(typeof a=="function")return B.A
t=Object.getPrototypeOf(a)
if(t==null)return B.n
if(t===Object.prototype)return B.n
if(typeof r=="function"){p=$.bI
if(p==null)p=$.bI=A.bV(o)
Object.defineProperty(r,p,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
cI(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
dT(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.cI(s))break;++b}return b},
dU(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.p(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.cI(r))break}return b},
a2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aq.prototype
return J.b0.prototype}if(typeof a=="string")return J.a9.prototype
if(a==null)return J.ar.prototype
if(typeof a=="boolean")return J.b_.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.k)return a
return J.cq(a)},
di(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.k)return a
return J.cq(a)},
dj(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.P.prototype
if(typeof a=="symbol")return J.au.prototype
if(typeof a=="bigint")return J.as.prototype
return a}if(a instanceof A.k)return a
return J.cq(a)},
al(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a2(a).A(a,b)},
dD(a,b){return J.dj(a).C(a,b)},
N(a){return J.a2(a).gm(a)},
cw(a){return J.dj(a).gp(a)},
cb(a){return J.di(a).gk(a)},
dE(a){return J.a2(a).gn(a)},
a6(a){return J.a2(a).h(a)},
aY:function aY(){},
b_:function b_(){},
ar:function ar(){},
at:function at(){},
Q:function Q(){},
bc:function bc(){},
aG:function aG(){},
P:function P(){},
as:function as(){},
au:function au(){},
o:function o(a){this.$ti=a},
aZ:function aZ(){},
bt:function bt(a){this.$ti=a},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b1:function b1(){},
aq:function aq(){},
b0:function b0(){},
a9:function a9(){}},A={cc:function cc(){},
R(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ch(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cs(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
cG(){return new A.bC("No element")},
bu:function bu(a){this.a=a},
bB:function bB(){},
ap:function ap(){},
W:function W(){},
X:function X(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
C:function C(a,b,c){this.a=a
this.b=b
this.$ti=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
r:function r(){},
dw(a){var t=A.dv(a)
if(t!=null)return t
return"minified:"+a},
fB(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.E.b(a)},
m(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a6(a)
return t},
bd(a){var t,s=$.cM
if(s==null)s=$.cM=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
be(a){var t,s,r,q
if(a instanceof A.k)return A.z(A.aR(a),null)
t=J.a2(a)
if(t===B.z||t===B.B||u.o.b(a)){s=B.k(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.z(A.aR(a),null)},
cP(a){var t,s,r
if(a==null||typeof a=="number"||A.cl(a))return J.a6(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.O)return a.h(0)
if(a instanceof A.L)return a.O(!0)
t=$.dz()
for(s=0;s<1;++s){r=t[s].a4(a)
if(r!=null)return r}return"Instance of '"+A.be(a)+"'"},
ac(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
cf(a){var t=A.ac(a).getFullYear()+0
return t},
cO(a){var t=A.ac(a).getMonth()+1
return t},
cN(a){var t=A.ac(a).getDate()+0
return t},
dY(a){var t=A.ac(a).getHours()+0
return t},
e_(a){var t=A.ac(a).getMinutes()+0
return t},
e0(a){var t=A.ac(a).getSeconds()+0
return t},
dZ(a){var t=A.ac(a).getMilliseconds()+0
return t},
p(a,b){if(a==null)J.cb(a)
throw A.e(A.dh(a,b))},
dh(a,b){var t,s="index"
if(!A.da(b))return new A.am(!0,b,s,null)
t=J.cb(a)
if(b<0||b>=t)return A.cF(b,t,a,s)
return A.e1(b,s)},
e(a){return A.q(a,new Error())},
q(a,b){var t
if(a==null)a=new A.bD()
b.dartException=a
t=A.fq
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
fq(){return J.a6(this.dartException)},
du(a,b){throw A.q(a,b==null?new Error():b)},
cu(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.du(A.ez(a,b,c),t)},
ez(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.bF("'"+t+"': Cannot "+p+" "+m+l+o)},
dt(a){throw A.e(A.U(a))},
dn(a){if(a==null)return J.N(a)
if(typeof a=="object")return A.bd(a)
return J.N(a)},
f3(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.v(0,a[t],a[s])}return b},
dL(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bg().constructor.prototype):Object.create(new A.a7(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cC(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dH(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cC(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dH(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dF)}throw A.e("Error in functionType of tearoff")},
dI(a,b,c,d){var t=A.cB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cC(a,b,c,d){if(c)return A.dK(a,b,d)
return A.dI(b.length,d,a,b)},
dJ(a,b,c,d){var t=A.cB,s=A.dG
switch(b?-1:a){case 0:throw A.e(new A.bA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dK(a,b,c){var t,s
if($.cz==null)$.cz=A.cy("interceptor")
if($.cA==null)$.cA=A.cy("receiver")
t=b.length
s=A.dJ(t,c,a,b)
return s},
cn(a){return A.dL(a)},
dF(a,b){return A.aP(v.typeUniverse,A.aR(a.a),b)},
cB(a){return a.a},
dG(a){return a.b},
cy(a){var t,s,r,q=new A.a7("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.e(A.cx("Field name "+a+" not found."))},
bV(a){return v.getIsolateTag(a)},
ds(){return v.G},
fd(a){var t,s,r,q,p,o=A.y($.dl.$1(a)),n=$.bU[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c0[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.ag($.de.$2(a,o))
if(r!=null){n=$.bU[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c0[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.c4(t)
$.bU[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c0[o]=t
return t}if(q==="-"){p=A.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dp(a,t)
if(q==="*")throw A.e(A.cS(o))
if(v.leafTags[o]===true){p=A.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dp(a,t)},
dp(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.ct(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4(a){return J.ct(a,!1,null,!!a.$ix)},
fh(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.c4(t)
else return J.ct(t,c,null,null)},
f8(){if(!0===$.cr)return
$.cr=!0
A.f9()},
f9(){var t,s,r,q,p,o,n,m
$.bU=Object.create(null)
$.c0=Object.create(null)
A.f7()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dq.$1(p)
if(o!=null){n=A.fh(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
f7(){var t,s,r,q,p,o,n=B.o()
n=A.ai(B.p,A.ai(B.q,A.ai(B.l,A.ai(B.l,A.ai(B.r,A.ai(B.t,A.ai(B.u(B.k),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dl=new A.bY(q)
$.de=new A.bZ(p)
$.dq=new A.c_(o)},
ai(a,b){return a(b)||b},
f1(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
fm(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fn(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return A.fo(a,t,t+b.length,c)},
fo(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
S:function S(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(){},
ao:function ao(a,b,c){this.a=a
this.b=b
this.$ti=c},
aE:function aE(){},
O:function O(){},
aT:function aT(){},
bi:function bi(){},
bg:function bg(){},
a7:function a7(a,b){this.a=a
this.b=b},
bA:function bA(a){this.a=a},
V:function V(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bv:function bv(a,b){this.a=a
this.b=b
this.c=null},
bw:function bw(a,b){this.a=a
this.$ti=b},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aw:function aw(a,b){this.a=a
this.$ti=b},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bY:function bY(a){this.a=a},
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
L:function L(){},
ae:function ae(){},
af:function af(){},
bh:function bh(a,b){this.a=a
this.c=b},
bK:function bK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aa:function aa(){},
aB:function aB(){},
b3:function b3(){},
ab:function ab(){},
az:function az(){},
aA:function aA(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
b7:function b7(){},
b8:function b8(){},
b9:function b9(){},
ba:function ba(){},
aC:function aC(){},
bb:function bb(){},
aI:function aI(){},
aJ:function aJ(){},
aK:function aK(){},
aL:function aL(){},
cg(a,b){var t=b.c
return t==null?b.c=A.aN(a,"cE",[b.x]):t},
cQ(a){var t=a.w
if(t===6||t===7)return A.cQ(a.x)
return t===11||t===12},
e5(a){return a.as},
aQ(a){return A.bM(v.typeUniverse,a,!1)},
a0(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.a0(a0,t,a2,a3)
if(s===t)return a1
return A.cZ(a0,s,!0)
case 7:t=a1.x
s=A.a0(a0,t,a2,a3)
if(s===t)return a1
return A.cY(a0,s,!0)
case 8:r=a1.y
q=A.ah(a0,r,a2,a3)
if(q===r)return a1
return A.aN(a0,a1.x,q)
case 9:p=a1.x
o=A.a0(a0,p,a2,a3)
n=a1.y
m=A.ah(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.ci(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.ah(a0,k,a2,a3)
if(j===k)return a1
return A.d_(a0,l,j)
case 11:i=a1.x
h=A.a0(a0,i,a2,a3)
g=a1.y
f=A.eV(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.cX(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.ah(a0,e,a2,a3)
p=a1.x
o=A.a0(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.cj(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.e(A.aS("Attempted to substitute unexpected RTI kind "+a))}},
ah(a,b,c,d){var t,s,r,q,p=b.length,o=A.bN(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.a0(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
eW(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bN(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.a0(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
eV(a,b,c,d){var t,s=b.a,r=A.ah(a,s,c,d),q=b.b,p=A.ah(a,q,c,d),o=b.c,n=A.eW(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bj()
t.a=r
t.b=p
t.c=n
return t},
J(a,b){a[v.arrayRti]=b
return a},
dg(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.f5(t)
return a.$S()}return null},
fa(a,b){var t
if(A.cQ(b))if(a instanceof A.O){t=A.dg(a)
if(t!=null)return t}return A.aR(a)},
aR(a){if(a instanceof A.k)return A.I(a)
if(Array.isArray(a))return A.M(a)
return A.ck(J.a2(a))},
M(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
I(a){var t=a.$ti
return t!=null?t:A.ck(a)},
ck(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eG(a,t)},
eG(a,b){var t=a instanceof A.O?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.ep(v.typeUniverse,t.name)
b.$ccache=s
return s},
f5(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bM(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
f4(a){return A.a1(A.I(a))},
cm(a){var t
if(a instanceof A.L)return A.f2(a.$r,a.G())
t=a instanceof A.O?A.dg(a):null
if(t!=null)return t
if(u.R.b(a))return J.dE(a).a
if(Array.isArray(a))return A.M(a)
return A.aR(a)},
a1(a){var t=a.r
return t==null?a.r=new A.bL(a):t},
f2(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.p(r,0)
t=A.aP(v.typeUniverse,A.cm(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.p(r,s)
t=A.d1(v.typeUniverse,t,A.cm(r[s]))}return A.aP(v.typeUniverse,t,a)},
K(a){return A.a1(A.bM(v.typeUniverse,a,!1))},
eF(a){var t=this
t.b=A.eU(t)
return t.b(a)},
eU(a){var t,s,r,q,p
if(a===u.K)return A.eM
if(A.a4(a))return A.eQ
t=a.w
if(t===6)return A.eD
if(t===1)return A.dc
if(t===7)return A.eH
s=A.eT(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.a4)){a.f="$i"+r
if(r==="h")return A.eK
if(a===u.m)return A.eJ
return A.eP}}else if(t===10){q=A.f1(a.x,a.y)
p=q==null?A.dc:q
return p==null?A.d5(p):p}return A.eB},
eT(a){if(a.w===8){if(a===u.S)return A.da
if(a===u.i||a===u.H)return A.eL
if(a===u.N)return A.eO
if(a===u.y)return A.cl}return null},
eE(a){var t=this,s=A.eA
if(A.a4(t))s=A.ex
else if(t===u.K)s=A.d5
else if(A.aj(t)){s=A.eC
if(t===u.t)s=A.ev
else if(t===u.w)s=A.ag
else if(t===u.u)s=A.es
else if(t===u.n)s=A.d4
else if(t===u.I)s=A.eu
else if(t===u.z)s=A.F}else if(t===u.S)s=A.bO
else if(t===u.N)s=A.y
else if(t===u.y)s=A.er
else if(t===u.H)s=A.ew
else if(t===u.i)s=A.et
else if(t===u.m)s=A.f
t.a=s
return t.a(a)},
eB(a){var t=this
if(a==null)return A.aj(t)
return A.fb(v.typeUniverse,A.fa(a,t),t)},
eD(a){if(a==null)return!0
return this.x.b(a)},
eP(a){var t,s=this
if(a==null)return A.aj(s)
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.a2(a)[t]},
eK(a){var t,s=this
if(a==null)return A.aj(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.k)return!!a[t]
return!!J.a2(a)[t]},
eJ(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
db(a){if(typeof a=="object"){if(a instanceof A.k)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
eA(a){var t=this
if(a==null){if(A.aj(t))return a}else if(t.b(a))return a
throw A.q(A.d7(a,t),new Error())},
eC(a){var t=this
if(a==null||t.b(a))return a
throw A.q(A.d7(a,t),new Error())},
d7(a,b){return new A.bk("TypeError: "+A.cT(a,A.z(b,null)))},
cT(a,b){return A.bp(a)+": type '"+A.z(A.cm(a),null)+"' is not a subtype of type '"+b+"'"},
E(a,b){return new A.bk("TypeError: "+A.cT(a,b))},
eH(a){var t=this
return t.x.b(a)||A.cg(v.typeUniverse,t).b(a)},
eM(a){return a!=null},
d5(a){if(a!=null)return a
throw A.q(A.E(a,"Object"),new Error())},
eQ(a){return!0},
ex(a){return a},
dc(a){return!1},
cl(a){return!0===a||!1===a},
er(a){if(!0===a)return!0
if(!1===a)return!1
throw A.q(A.E(a,"bool"),new Error())},
es(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.q(A.E(a,"bool?"),new Error())},
et(a){if(typeof a=="number")return a
throw A.q(A.E(a,"double"),new Error())},
eu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.E(a,"double?"),new Error())},
da(a){return typeof a=="number"&&Math.floor(a)===a},
bO(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.q(A.E(a,"int"),new Error())},
ev(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.q(A.E(a,"int?"),new Error())},
eL(a){return typeof a=="number"},
ew(a){if(typeof a=="number")return a
throw A.q(A.E(a,"num"),new Error())},
d4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.q(A.E(a,"num?"),new Error())},
eO(a){return typeof a=="string"},
y(a){if(typeof a=="string")return a
throw A.q(A.E(a,"String"),new Error())},
ag(a){if(typeof a=="string")return a
if(a==null)return a
throw A.q(A.E(a,"String?"),new Error())},
f(a){if(A.db(a))return a
throw A.q(A.E(a,"JSObject"),new Error())},
F(a){if(a==null)return a
if(A.db(a))return a
throw A.q(A.E(a,"JSObject?"),new Error())},
dd(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.z(a[r],b)
return t},
eS(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.dd(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.z(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
d8(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.J([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.a.t(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.p(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.z(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.z(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.z(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.z(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.z(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
z(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.z(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.z(a.x,b)+">"
if(m===8){q=A.eX(a.x)
p=a.y
return p.length>0?q+("<"+A.dd(p,b)+">"):q}if(m===10)return A.eS(a,b)
if(m===11)return A.d8(a,b,null)
if(m===12)return A.d8(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.p(b,o)
return b[o]}return"?"},
eX(a){var t=A.dv(a)
if(t!=null)return t
return"minified:"+a},
eq(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
ep(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bM(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aO(a,5,"#")
r=A.bN(t)
for(q=0;q<t;++q)r[q]=s
p=A.aN(a,b,r)
o[b]=p
return p}else return n},
eo(a,b){return A.d2(a.tR,b)},
en(a,b){return A.d2(a.eT,b)},
bM(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.d0(a,null,b,!1)
s.set(b,t)
return t},
aP(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.d0(a,b,c,!0)
r.set(c,s)
return s},
d1(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.ci(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
d0(a,b,c,d){return A.eg(A.ea(a,b,c,d))},
T(a,b){b.a=A.eE
b.b=A.eF
return b},
aO(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.H(null,null)
t.w=b
t.as=c
s=A.T(a,t)
a.eC.set(c,s)
return s},
cZ(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.el(a,b,s,c)
a.eC.set(s,t)
return t},
el(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.a4(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.aj(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.H(null,null)
r.w=6
r.x=b
r.as=c
return A.T(a,r)},
cY(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ej(a,b,s,c)
a.eC.set(s,t)
return t},
ej(a,b,c,d){var t,s
if(d){t=b.w
if(A.a4(b)||b===u.K)return b
else if(t===1)return A.aN(a,"cE",[b])
else if(b===u.P||b===u.T)return u.V}s=new A.H(null,null)
s.w=7
s.x=b
s.as=c
return A.T(a,s)},
em(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.H(null,null)
t.w=13
t.x=b
t.as=r
s=A.T(a,t)
a.eC.set(r,s)
return s},
aM(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
ei(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
aN(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aM(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.H(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
ci(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.aM(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.H(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.T(a,p)
a.eC.set(r,o)
return o},
d_(a,b,c){var t,s,r="+"+(b+"("+A.aM(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.H(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.T(a,t)
a.eC.set(r,s)
return s},
cX(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aM(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aM(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.ei(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.H(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.T(a,q)
a.eC.set(s,p)
return p},
cj(a,b,c,d){var t,s=b.as+("<"+A.aM(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.ek(a,b,c,s,d)
a.eC.set(s,t)
return t},
ek(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bN(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.a0(a,b,s,0)
n=A.ah(a,c,s,0)
return A.cj(a,o,n,c!==n)}}m=new A.H(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.T(a,m)},
ea(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eg(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.ec(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cV(a,s,m,l,!1)
else if(r===46)s=A.cV(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.Z(a.u,a.e,l.pop()))
break
case 94:l.push(A.em(a.u,l.pop()))
break
case 35:l.push(A.aO(a.u,5,"#"))
break
case 64:l.push(A.aO(a.u,2,"@"))
break
case 126:l.push(A.aO(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.ee(a,l)
break
case 38:A.ed(a,l)
break
case 63:q=a.u
l.push(A.cZ(q,A.Z(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.cY(q,A.Z(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.eb(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.cW(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.eh(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.Z(a.u,a.e,n)},
ec(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cV(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.eq(t,p.x)[q]
if(o==null)A.du('No "'+q+'" in "'+A.e5(p)+'"')
d.push(A.aP(t,p,o))}else d.push(q)
return n},
ee(a,b){var t,s=a.u,r=A.cU(a,b),q=b.pop()
if(typeof q=="string")b.push(A.aN(s,q,r))
else{t=A.Z(s,a.e,q)
switch(t.w){case 11:b.push(A.cj(s,t,r,a.n))
break
default:b.push(A.ci(s,t,r))
break}}},
eb(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.cU(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.Z(q,a.e,p)
r=new A.bj()
r.a=t
r.b=o
r.c=n
b.push(A.cX(q,s,r))
return
case-4:b.push(A.d_(q,b.pop(),t))
return
default:throw A.e(A.aS("Unexpected state under `()`: "+A.m(p)))}},
ed(a,b){var t=b.pop()
if(0===t){b.push(A.aO(a.u,1,"0&"))
return}if(1===t){b.push(A.aO(a.u,4,"1&"))
return}throw A.e(A.aS("Unexpected extended operation "+A.m(t)))},
cU(a,b){var t=b.splice(a.p)
A.cW(a.u,a.e,t)
a.p=b.pop()
return t},
Z(a,b,c){if(typeof c=="string")return A.aN(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ef(a,b,c)}else return c},
cW(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.Z(a,b,c[t])},
eh(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.Z(a,b,c[t])},
ef(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.e(A.aS("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.e(A.aS("Bad index "+c+" for "+b.h(0)))},
fb(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.n(a,b,null,c,null)
s.set(c,t)}return t},
n(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.a4(d))return!0
t=b.w
if(t===4)return!0
if(A.a4(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.n(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.n(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.n(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.n(a,b.x,c,d,e))return!1
return A.n(a,A.cg(a,b),c,d,e)}if(t===6)return A.n(a,q,c,d,e)&&A.n(a,b.x,c,d,e)
if(r===7){if(A.n(a,b,c,d.x,e))return!0
return A.n(a,b,c,A.cg(a,d),e)}if(r===6)return A.n(a,b,c,q,e)||A.n(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.M)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.n(a,k,c,j,e)||!A.n(a,j,e,k,c))return!1}return A.d9(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.d9(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.eI(a,b,c,d,e)}if(p&&r===10)return A.eN(a,b,c,d,e)
return!1},
d9(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.n(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.n(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.n(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.n(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.n(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
eI(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aP(a,b,s[p])
return A.d3(a,q,null,c,d.y,e)}return A.d3(a,b.y,null,c,d.y,e)},
d3(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.n(a,b[t],d,e[t],f))return!1
return!0},
eN(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.n(a,s[t],c,r[t],e))return!1
return!0},
aj(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.a4(a))if(t!==6)s=t===7&&A.aj(a.x)
return s},
a4(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
d2(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bN(a){return a>0?new Array(a):v.typeUniverse.sEA},
H:function H(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bj:function bj(){this.c=this.b=this.a=null},
bL:function bL(a){this.a=a},
bH:function bH(){},
bk:function bk(a){this.a=a},
dW(a,b,c){return b.i("@<0>").D(c).i("cJ<1,2>").a(A.f3(a,new A.V(b.i("@<0>").D(c).i("V<1,2>"))))},
dV(a,b){return new A.V(a.i("@<0>").D(b).i("V<1,2>"))},
cd(a){var t,s
if(A.cs(a))return"{...}"
t=new A.ad("")
try{s={}
B.a.t($.A,a)
t.a+="{"
s.a=!0
a.S(0,new A.bx(s,t))
t.a+="}"}finally{if(0>=$.A.length)return A.p($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
j:function j(){},
b2:function b2(){},
bx:function bx(a,b){this.a=a
this.b=b},
aV:function aV(){},
br:function br(){},
bq:function bq(){},
dX(a,b,c){var t,s,r=A.J([],c.i("o<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.dt)(a),++s)B.a.t(r,c.a(a[s]))
r.$flags=1
return r},
cR(a,b,c){var t=J.cw(b)
if(!t.j())return a
if(c.length===0){do a+=A.m(t.gl())
while(t.j())}else{a+=A.m(t.gl())
while(t.j())a=a+c+A.m(t.gl())}return a},
dM(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
cD(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
aX(a){if(a>=10)return""+a
return"0"+a},
bp(a){if(typeof a=="number"||A.cl(a)||a==null)return J.a6(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cP(a)},
aS(a){return new A.bm(a)},
cx(a){return new A.am(!1,null,null,a)},
e1(a,b){return new A.bf(null,null,!0,a,b,"Value not in range")},
bz(a,b,c,d,e){return new A.bf(b,c,!0,a,d,"Invalid value")},
e4(a,b,c,d){if(a<b||a>c)throw A.e(A.bz(a,b,c,d,null))
return a},
e3(a,b,c){if(0>a||a>c)throw A.e(A.bz(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.bz(b,a,c,"end",null))
return b}return c},
e2(a,b){if(a<0)throw A.e(A.bz(a,0,null,b,null))
return a},
cF(a,b,c,d){return new A.bs(b,!0,a,d,"Index out of range")},
cS(a){return new A.bE(a)},
U(a){return new A.bn(a)},
dS(a,b,c){var t,s
if(A.cs(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.J([],u.s)
B.a.t($.A,a)
try{A.eR(a,t)}finally{if(0>=$.A.length)return A.p($.A,-1)
$.A.pop()}s=A.cR(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cH(a,b,c){var t,s
if(A.cs(a))return b+"..."+c
t=new A.ad(b)
B.a.t($.A,a)
try{s=t
s.a=A.cR(s.a,a,", ")}finally{if(0>=$.A.length)return A.p($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eR(a,b){var t,s,r,q,p,o,n,m=a.gp(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.j())return
t=A.m(m.gl())
B.a.t(b,t)
l+=t.length+2;++k}if(!m.j()){if(k<=5)return
if(0>=b.length)return A.p(b,-1)
s=b.pop()
if(0>=b.length)return A.p(b,-1)
r=b.pop()}else{q=m.gl();++k
if(!m.j()){if(k<=4){B.a.t(b,A.m(q))
return}s=A.m(q)
if(0>=b.length)return A.p(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gl();++k
for(;m.j();q=p,p=o){o=m.gl();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.p(b,-1)
l-=b.pop().length+2;--k}B.a.t(b,"...")
return}}r=A.m(q)
s=A.m(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.p(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.t(b,n)
B.a.t(b,r)
B.a.t(b,s)},
ce(a,b,c,d){var t
if(B.c===c){t=B.e.gm(a)
b=J.N(b)
return A.ch(A.R(A.R($.ca(),t),b))}if(B.c===d){t=B.e.gm(a)
b=J.N(b)
c=J.N(c)
return A.ch(A.R(A.R(A.R($.ca(),t),b),c))}t=B.e.gm(a)
b=J.N(b)
c=J.N(c)
d=J.N(d)
d=A.ch(A.R(A.R(A.R(A.R($.ca(),t),b),c),d))
return d},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(){},
bo:function bo(){},
bm:function bm(a){this.a=a},
bD:function bD(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bs:function bs(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bF:function bF(a){this.a=a},
bE:function bE(a){this.a=a},
bC:function bC(a){this.a=a},
bn:function bn(a){this.a=a},
by:function by(){},
c:function c(){},
aD:function aD(){},
k:function k(){},
ad:function ad(a){this.a=a},
fe(){var t=v.G,s=A.y(A.f(A.f(t.window).location).search)
if(A.fm(s,"android=1",0))A.f(A.F(A.f(t.document).body).classList).add("android-app")
A.f(t.document).addEventListener("click",A.bl(A.ff()))
A.f(t.document).addEventListener("input",A.bl(A.dm()))
A.f(t.document).addEventListener("change",A.bl(A.dm()))
A.f(t.document).addEventListener("submit",A.bl(A.fg()))
A.f(t.window).addEventListener("hashchange",A.bl(new A.c3()))
A.c8()},
c5(a){var t=v.G
if(A.y(A.f(A.f(t.window).location).hash)==="#"+a)A.c8()
else A.f(A.f(t.window).location).hash=a},
c8(){var t,s,r,q,p,o,n,m,l,k,j,i,h=v.G,g=A.y(A.f(A.f(h.window).location).hash)
A.e4(0,0,g.length,"startIndex")
t=A.fn(g,"#","",0)
switch(t){case"inicio":g=A.f6()
break
case"nova":g=A.fk()
break
case"confirmacao":g='<section class="screen success">\n  <div class="icon success-symbol">'+A.a3("check")+'</div>\n  <p class="eyebrow">Primeiro passo dado</p><h1>Solicita\xe7\xe3o registrada!</h1>\n  <p class="subtitle">Agora voc\xea pode acompanhar o andamento pelo seu protocolo.</p>\n  <div class="card">\n    <p class="eyebrow">Seu protocolo</p><h2>'+A.t().a+'</h2>\n    <span class="detail-label">Problema registrado</span><p class="detail-value">'+B.b.u(A.t().b)+'</p>\n    <span class="detail-label">Status</span>'+A.co(A.t().f)+'\n  </div>\n  <button class="primary" data-request="'+A.t().a+'">Acompanhar solicita\xe7\xe3o</button>\n  <button class="secondary" data-route="inicio">Voltar ao in\xedcio</button>\n  <p class="subtitle" style="font-size:13px;margin-top:20px">Registro simulado para demonstra\xe7\xe3o do prot\xf3tipo.</p>\n</section>\n'
break
case"solicitacoes":g=A.fc()
break
case"detalhes":g=A.a3("back")
s=A.t()
r=A.co(A.t().f)
q=B.b.u(A.t().b)
p=A.fi(A.t().e)
o=A.t()
n=B.b.u(A.t().d)
m=B.b.u(A.t().c)
l=A.t()
k=A.t().f===B.h?"<li><strong>Aguardando atendimento</strong><small>O pr\xf3ximo passo ser\xe1 exibido aqui.</small></li>":"<li><strong>Equipe em atendimento</strong><small>"+A.t().w+" \xb7 Solicita\xe7\xe3o encaminhada para a equipe respons\xe1vel.</small></li>"
j=A.t().f===B.i?"<li><strong>Problema resolvido</strong><small>"+A.t().w+" \xb7 Atendimento conclu\xeddo.</small></li>":""
j='<section class="screen">\n  '+('<button class="icon-button back" data-route="solicitacoes" aria-label="Voltar">'+g+"</button>")+'\n  <div class="row"><p class="eyebrow">'+s.a+"</p>"+r+"</div>\n  <h1>"+q+'</h1>\n  <p class="subtitle">'+p+" \xb7 "+o.r+'</p>\n  <div class="card">\n    <h2>Sobre a solicita\xe7\xe3o</h2>\n    <span class="detail-label">Localiza\xe7\xe3o</span><p class="detail-value">'+n+'</p>\n    <span class="detail-label">Descri\xe7\xe3o</span><p class="detail-value">'+m+'</p>\n  </div>\n  <h2>Andamento</h2>\n  <ol class="timeline">\n    <li><strong>Solicita\xe7\xe3o recebida</strong><small>'+l.r+" \xb7 Protocolo gerado para acompanhamento.</small></li>\n    "+k+"\n    "+j+'\n  </ol>\n  <button class="secondary" data-route="solicitacoes">Ver minhas solicita\xe7\xf5es</button>\n</section>\n'
g=j
break
case"perfil":g='<section class="screen">\n  <h1>Meu perfil</h1>\n  <div class="profile-heading"><div class="icon-button avatar profile-avatar">MC</div><h2>Morador do Centro</h2><p class="subtitle">Perfil de demonstra\xe7\xe3o</p></div>\n  <div class="card">\n    <div class="profile-option"><span>Bairro</span><strong>Centro</strong></div>\n    <div class="profile-option"><span>Solicita\xe7\xf5es registradas</span><strong>'+$.ak().length+'</strong></div>\n    <div class="profile-option"><span>Participa\xe7\xe3o</span><strong>Cidad\xe3o</strong></div>\n  </div>\n  <h2>Sobre o Bairro em Dia</h2>\n  <p class="subtitle">Um canal simples para registrar problemas de zeladoria urbana e acompanhar o cuidado com os espa\xe7os p\xfablicos.</p>\n  <div class="notice">Conectado ao ODS 11 \u2014 Cidades e comunidades sustent\xe1veis.</div>\n  <button class="secondary" data-route="boas-vindas">'+A.a3("exit")+"Sair da demonstra\xe7\xe3o</button>\n</section>\n"
break
default:g=A.f0()
break}s=$.dA()
s.innerHTML=g
g=$.dB()
i=t.length===0||t==="boas-vindas"
g.hidden=i
g.innerHTML=new A.C(A.J([B.I,B.K,B.J],u.p),u.h.a(new A.c9(t)),u.J).B(0)
s.scrollTop=0
h=A.f(h.document)
g=A.F(s.querySelector("h1"))
g=g==null?null:A.ag(g.textContent)
h.title=(g==null?"Prot\xf3tipo":g)+" \xb7 Bairro em Dia"
s.focus()},
eY(a){var t,s,r,q,p,o=A.F(A.f(a).target)
if(o==null)o=A.f(o)
t=A.F(o.closest("[data-route]"))
if(t!=null){s=A.ag(t.getAttribute("data-route"))
s.toString
A.c5(s)
return}r=A.F(o.closest("[data-request]"))
if(r!=null){s=A.ag(r.getAttribute("data-request"))
s.toString
$.dr=s
A.c5("detalhes")
return}q=A.F(o.closest("[data-new]"))
if(q!=null){s=A.ag(q.getAttribute("data-new"))
s.toString
$.v.v(0,"categoria",s)
A.c5("nova")
return}p=A.F(o.closest("[data-filter]"))
if(p!=null){s=A.ag(p.getAttribute("data-filter"))
s.toString
$.cp=s
A.c8()}},
dx(a,b){var t,s=A.F(a.querySelector('[name="'+b+'"]'))
if(b==="categoria"){t=s==null?A.f(s):s
return A.y(t.value)}if(b==="descricao"){t=s==null?A.f(s):s
return A.y(t.value)}t=s==null?A.f(s):s
return A.y(t.value)},
f_(a){var t,s,r,q=A.F(A.f(a).target)
if(q==null)q=A.f(q)
t=A.F(q.closest("#request-form"))
if(t==null)return
for(s=new A.G($.v,$.v.r,$.v.e,A.I($.v).i("G<1>"));s.j();){r=s.d
$.v.v(0,r,A.dx(t,r))}},
eZ(a){var t,s,r,q,p,o,n,m,l
A.f(a)
t=A.F(a.target)
if(t==null)t=A.f(t)
if(A.y(t.id)!=="request-form")return
a.preventDefault()
s=u.N
s=A.dV(s,s)
for(r=new A.G($.v,$.v.r,$.v.e,A.I($.v).i("G<1>"));r.j();){q=r.d
s.v(0,q,B.d.a3(A.dx(t,q)))}if(new A.aw(s,s.$ti.i("aw<2>")).J(0,new A.bP())||!B.a.J(B.f,new A.bQ(s))){s=A.F(A.f(v.G.document).getElementById("form-error"))
s.toString
s.textContent="Preencha os campos para registrar a solicita\xe7\xe3o."
return}p=new A.aW(Date.now(),0,!1)
r=A.cO(p)-1
if(!(r>=0&&r<12))return A.p(B.m,r)
o=""+A.cN(p)+" "+B.m[r]+" "+A.cf(p)
r=$.ak()
n="BED-"+A.cf(p)+"-"+B.d.a2(B.e.h(r.length+143),4,"0")
q=s.q(0,"titulo")
q.toString
m=s.q(0,"descricao")
m.toString
l=s.q(0,"endereco")
l.toString
s=s.q(0,"categoria")
s.toString
s=A.M(r).c.a(new A.D(n,q,m,l,s,B.h,o,o))
r.$flags&1&&A.cu(r,"insert",2)
r.splice(0,0,s)
$.dr=n
$.v.a5(new A.bR())
A.c5("confirmacao")},
t(){return B.a.R($.ak(),new A.bS())},
f0(){return'<section class="screen welcome">\n  <span class="brand-mark" aria-hidden="true">b.</span>\n  <h1>Seu bairro.<br>Nosso cuidado.</h1>\n  <p>Registre o que precisa de aten\xe7\xe3o e acompanhe cada passo da mudan\xe7a.</p>\n  <div class="neighborhood" aria-hidden="true">\n    <span class="sun"></span>\n    '+new A.C(A.J(["one","two","three","four"],u.s),u.C.a(new A.bT()),u.G).B(0)+'\n    <div class="ground"></div>\n  </div>\n  <div class="welcome-bottom">\n    <button class="primary light" data-route="inicio">Conhecer o aplicativo</button>\n    <small>Explore uma jornada com dados de demonstra\xe7\xe3o.</small>\n  </div>\n</section>\n'},
f6(){var t=$.ak(),s=A.M(t),r=new A.Y(t,s.i("u(1)").a(new A.bW()),s.i("Y<1>")).gk(0)
s=t.length
return'<section class="screen">\n  <header class="row">\n    <div><p class="eyebrow">Ol\xe1, morador</p><h1>Vamos cuidar<br>do nosso bairro?</h1></div>\n    <button class="icon-button avatar" data-route="perfil" aria-label="Abrir perfil">MC</button>\n  </header>\n  <div class="hero">\n    <h2>Uma pequena atitude.<br>Um bairro melhor.</h2>\n    <p>Viu algo que precisa de cuidado? Sua solicita\xe7\xe3o faz a diferen\xe7a.</p>\n    <button class="primary light" data-new="">'+A.a3("plus")+'Nova solicita\xe7\xe3o</button>\n  </div>\n  <div class="stats">\n    <div class="stat"><span>Em acompanhamento</span><strong>'+r+'</strong><span>solicita\xe7\xf5es suas</span></div>\n    <div class="stat"><span>Conclu\xeddas</span><strong>'+(s-r)+'</strong><span>problemas resolvidos</span></div>\n  </div>\n  <h2 class="section-heading">O que precisa de aten\xe7\xe3o?</h2>\n  <div class="category-grid">\n    '+new A.C(B.f,u.v.a(new A.bX()),u.e).B(0)+'\n  </div>\n  <div class="row section-heading"><h2>\xdaltima atualiza\xe7\xe3o</h2><button class="text-button" data-route="solicitacoes">Ver todas</button></div>\n  '+A.df(B.a.gP(t))+"\n</section>\n"},
fk(){var t,s,r=A.a3("back"),q=new A.C(B.f,u.v.a(new A.c7()),u.e).B(0),p=$.v.q(0,"titulo")
p.toString
p=B.b.u(p)
t=$.v.q(0,"endereco")
t.toString
t=B.b.u(t)
s=$.v.q(0,"descricao")
s.toString
return'<section class="screen">\n  '+('<button class="icon-button back" data-route="inicio" aria-label="Voltar">'+r+"</button>")+'\n  <p class="eyebrow">Cuidar come\xe7a por aqui</p><h1>Nova solicita\xe7\xe3o</h1>\n  <p class="subtitle">Conte o que aconteceu e onde o problema est\xe1.</p>\n  <form id="request-form">\n    <label class="field">Categoria\n      <select name="categoria" required>\n        <option value="">Selecione uma categoria</option>\n        '+q+'\n      </select>\n    </label>\n    <label class="field">T\xedtulo\n      <input name="titulo" maxlength="120" required placeholder="Ex.: Poste apagado na pra\xe7a" value="'+p+'">\n    </label>\n    <label class="field">Localiza\xe7\xe3o\n      <input name="endereco" maxlength="250" required placeholder="Rua, n\xfamero e bairro" value="'+t+'">\n    </label>\n    <label class="field">Descri\xe7\xe3o\n      <textarea name="descricao" maxlength="2000" required placeholder="Descreva o problema e uma refer\xeancia do local">'+B.b.u(s)+'</textarea>\n      <small>Evite incluir dados pessoais na descri\xe7\xe3o.</small>\n    </label>\n    <div class="notice">Sua solicita\xe7\xe3o receber\xe1 um protocolo para acompanhamento.</div>\n    <p id="form-error" class="form-error" role="alert"></p>\n    <button type="submit" class="primary">Enviar solicita\xe7\xe3o</button>\n  </form>\n</section>\n'},
fc(){var t=$.ak(),s=A.M(t),r=new A.Y(t,s.i("u(1)").a(new A.c1()),s.i("Y<1>"))
t=new A.C(A.J([B.H,B.F,B.E,B.G],u.L),u.Q.a(new A.c2()),u.d).B(0)
s=!r.gp(0).j()?'<div class="empty">Nenhuma solicita\xe7\xe3o nesta situa\xe7\xe3o.</div>':new A.ax(r,s.i("a(1)").a(A.fl()),s.i("ax<1,a>")).B(0)
return'<section class="screen">\n  <p class="eyebrow">Cada cuidado conta</p><h1>Minhas solicita\xe7\xf5es</h1>\n  <p class="subtitle">Acompanhe o que voc\xea j\xe1 registrou.</p>\n  <div class="chips" role="group" aria-label="Filtrar solicita\xe7\xf5es">\n    '+t+"\n  </div>\n  "+s+'\n  <button class="secondary" data-new="">'+A.a3("plus")+"Registrar outro problema</button>\n</section>\n"},
c3:function c3(){},
c9:function c9(a){this.a=a},
bP:function bP(){},
bQ:function bQ(a){this.a=a},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bW:function bW(){},
bX:function bX(){},
c7:function c7(){},
c1:function c1(){},
c2:function c2(){},
aF:function aF(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
D:function D(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
a3(a){var t=B.C.q(0,a)
return'<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">'+(t==null?"":t)+"</svg></span>"},
fi(a){return B.a.R(B.f,new A.c6(a)).b},
fj(a){var t
switch(a.a){case 0:t="Aberta"
break
case 1:t="Em atendimento"
break
case 2:t="Resolvida"
break
default:t=null}return t},
co(a){var t
switch(a.a){case 0:t="open"
break
case 1:t="progress"
break
case 2:t="done"
break
default:t=null}return'<span class="badge '+t+'">'+A.fj(a)+"</span>"},
df(a){var t
u.D.a(a)
t=a.a
return'<button class="request" data-request="'+t+'">\n  <span class="request-top"><span>'+t+"</span>"+A.co(a.f)+"</span>\n  <h3>"+B.b.u(a.b)+"</h3>\n  <p>"+B.b.u(a.d)+"</p>\n</button>\n"},
c6:function c6(a){this.a=a},
dv(a){return v.mangledGlobalNames[a]},
fp(a){throw A.q(new A.bu("Field '"+a+"' has been assigned during initialization."),new Error())},
bl(a){var t
if(typeof a=="function")throw A.e(A.cx("Attempting to rewrap a JS function."))
t=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ey,a)
t[$.cv()]=a
return t},
ey(a,b,c){u.Z.a(a)
if(A.bO(c)>=1)return a.$1(b)
return a.$0()},
dk(a,b,c){return c.a(a[b])},
d6(a,b,c,d){return d.a(a[b](c))}},B={}
var w=[A,J,B]
var $={}
A.cc.prototype={}
J.aY.prototype={
A(a,b){return a===b},
gm(a){return A.bd(a)},
h(a){return"Instance of '"+A.be(a)+"'"},
gn(a){return A.a1(A.ck(this))}}
J.b_.prototype={
h(a){return String(a)},
gm(a){return a?519018:218159},
gn(a){return A.a1(u.y)},
$id:1,
$iu:1}
J.ar.prototype={
A(a,b){return null==b},
h(a){return"null"},
gm(a){return 0},
$id:1}
J.at.prototype={$il:1}
J.Q.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.bc.prototype={}
J.aG.prototype={}
J.P.prototype={
h(a){var t=a[$.dy()]
if(t==null)t=a[$.cv()]
if(t==null)return this.V(a)
return"JavaScript function for "+J.a6(t)},
$ia8:1}
J.as.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.au.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.o.prototype={
t(a,b){A.M(a).c.a(b)
a.$flags&1&&A.cu(a,29)
a.push(b)},
R(a,b){var t,s,r
A.M(a).i("u(1)").a(b)
t=a.length
for(s=0;s<t;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==t)throw A.e(A.U(a))}throw A.e(A.cG())},
C(a,b){if(!(b>=0&&b<a.length))return A.p(a,b)
return a[b]},
gP(a){if(a.length>0)return a[0]
throw A.e(A.cG())},
J(a,b){var t,s
A.M(a).i("u(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw A.e(A.U(a))}return!1},
h(a){return A.cH(a,"[","]")},
gp(a){return new J.an(a,a.length,A.M(a).i("an<1>"))},
gm(a){return A.bd(a)},
gk(a){return a.length},
v(a,b,c){A.M(a).c.a(c)
a.$flags&2&&A.cu(a)
if(!(b>=0&&b<a.length))throw A.e(A.dh(a,b))
a[b]=c},
$ic:1,
$ih:1}
J.aZ.prototype={
a4(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.be(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.bt.prototype={}
J.an.prototype={
gl(){var t=this.d
return t==null?this.$ti.c.a(t):t},
j(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.dt(r)
throw A.e(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$iB:1}
J.b1.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
gn(a){return A.a1(u.H)},
$ii:1,
$ia5:1}
J.aq.prototype={
gn(a){return A.a1(u.S)},
$id:1,
$ib:1}
J.b0.prototype={
gn(a){return A.a1(u.i)},
$id:1}
J.a9.prototype={
M(a,b,c){return a.substring(b,A.e3(b,c,a.length))},
a3(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.p(q,0)
if(q.charCodeAt(0)===133){t=J.dT(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.p(q,s)
r=q.charCodeAt(s)===133?J.dU(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
L(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.v)
for(t=a,s="";;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
a2(a,b,c){var t=b-a.length
if(t<=0)return a
return this.L(c,t)+a},
h(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gn(a){return A.a1(u.N)},
gk(a){return a.length},
$id:1,
$icL:1,
$ia:1}
A.bu.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bB.prototype={}
A.ap.prototype={}
A.W.prototype={
gp(a){var t=this
return new A.X(t,t.gk(t),A.I(t).i("X<W.E>"))},
B(a){var t,s,r=this,q=r.gk(r)
for(t=0,s="";t<q;++t){s+=A.m(r.C(0,t))
if(q!==r.gk(r))throw A.e(A.U(r))}return s.charCodeAt(0)==0?s:s}}
A.X.prototype={
gl(){var t=this.d
return t==null?this.$ti.c.a(t):t},
j(){var t,s=this,r=s.a,q=J.di(r),p=q.gk(r)
if(s.b!==p)throw A.e(A.U(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.C(r,t);++s.c
return!0},
$iB:1}
A.ax.prototype={
gp(a){var t=this.a
return new A.ay(t.gp(t),this.b,A.I(this).i("ay<1,2>"))},
gk(a){var t=this.a
return t.gk(t)}}
A.ay.prototype={
j(){var t=this,s=t.b
if(s.j()){t.a=t.c.$1(s.gl())
return!0}t.a=null
return!1},
gl(){var t=this.a
return t==null?this.$ti.y[1].a(t):t},
$iB:1}
A.C.prototype={
gk(a){return J.cb(this.a)},
C(a,b){return this.b.$1(J.dD(this.a,b))}}
A.Y.prototype={
gp(a){return new A.aH(J.cw(this.a),this.b,this.$ti.i("aH<1>"))}}
A.aH.prototype={
j(){var t,s
for(t=this.a,s=this.b;t.j();)if(s.$1(t.gl()))return!0
return!1},
gl(){return this.a.gl()},
$iB:1}
A.r.prototype={}
A.S.prototype={$r:"+(1,2)",$s:1}
A.a_.prototype={$r:"+(1,2,3)",$s:2}
A.aU.prototype={
h(a){return A.cd(this)}}
A.ao.prototype={
gk(a){return this.b.length},
ga_(){var t=this.$keys
if(t==null){t=Object.keys(this.a)
this.$keys=t}return t},
a0(a){if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
q(a,b){if(!this.a0(b))return null
return this.b[this.a[b]]},
S(a,b){var t,s,r,q
this.$ti.i("~(1,2)").a(b)
t=this.ga_()
s=this.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])}}
A.aE.prototype={}
A.O.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dw(s==null?"unknown":s)+"'"},
$ia8:1,
ga6(){return this},
$C:"$1",
$R:1,
$D:null}
A.aT.prototype={$C:"$2",$R:2}
A.bi.prototype={}
A.bg.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dw(t)+"'"}}
A.a7.prototype={
A(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a7))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.dn(this.a)^A.bd(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.be(this.a)+"'")}}
A.bA.prototype={
h(a){return"RuntimeError: "+this.a}}
A.V.prototype={
gk(a){return this.a},
q(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.a1(b)},
a1(a){var t,s,r=this.d
if(r==null)return null
t=r[this.T(a)]
s=this.U(t,a)
if(s<0)return null
return t[s].b},
v(a,b,c){var t,s,r,q,p,o,n=this,m=A.I(n)
m.c.a(b)
m.y[1].a(c)
if(typeof b=="string"){t=n.b
n.N(t==null?n.b=n.H():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.N(s==null?n.c=n.H():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.H()
q=n.T(b)
p=r[q]
if(p==null)r[q]=[n.I(b,c)]
else{o=n.U(p,b)
if(o>=0)p[o].b=c
else p.push(n.I(b,c))}}},
S(a,b){var t,s,r=this
A.I(r).i("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.e(A.U(r))
t=t.c}},
N(a,b,c){var t,s=A.I(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.I(b,c)
else t.b=c},
I(a,b){var t=this,s=A.I(t),r=new A.bv(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
T(a){return J.N(a)&1073741823},
U(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.al(a[s].a,b))return s
return-1},
h(a){return A.cd(this)},
H(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$icJ:1}
A.bv.prototype={}
A.bw.prototype={
gk(a){return this.a.a},
gp(a){var t=this.a
return new A.G(t,t.r,t.e,this.$ti.i("G<1>"))}}
A.G.prototype={
gl(){return this.d},
j(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.e(A.U(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}},
$iB:1}
A.aw.prototype={
gk(a){return this.a.a},
gp(a){var t=this.a
return new A.av(t,t.r,t.e,this.$ti.i("av<1>"))}}
A.av.prototype={
gl(){return this.d},
j(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.e(A.U(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.b
s.c=t.c
return!0}},
$iB:1}
A.bY.prototype={
$1(a){return this.a(a)},
$S:4}
A.bZ.prototype={
$2(a,b){return this.a(a,b)},
$S:5}
A.c_.prototype={
$1(a){return this.a(A.y(a))},
$S:6}
A.L.prototype={
h(a){return this.O(!1)},
O(a){var t,s,r,q,p,o=this.Z(),n=this.G(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.p(n,r)
p=n[r]
m=a?m+A.cP(p):m+A.m(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
Z(){var t,s=this.$s
while($.bJ.length<=s)B.a.t($.bJ,null)
t=$.bJ[s]
if(t==null){t=this.W()
B.a.v($.bJ,s,t)}return t},
W(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.J(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.a.v(l,r,s[t])}}l=A.dX(l,!1,u.K)
l.$flags=3
return l}}
A.ae.prototype={
G(){return[this.a,this.b]},
A(a,b){if(b==null)return!1
return b instanceof A.ae&&this.$s===b.$s&&J.al(this.a,b.a)&&J.al(this.b,b.b)},
gm(a){return A.ce(this.$s,this.a,this.b,B.c)}}
A.af.prototype={
G(){return[this.a,this.b,this.c]},
A(a,b){var t=this
if(b==null)return!1
return b instanceof A.af&&t.$s===b.$s&&J.al(t.a,b.a)&&J.al(t.b,b.b)&&J.al(t.c,b.c)},
gm(a){var t=this
return A.ce(t.$s,t.a,t.b,t.c)}}
A.bh.prototype={$icK:1}
A.bK.prototype={
j(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new A.bh(t,p)
r.c=s===r.c?s+1:s
return!0},
gl(){var t=this.d
t.toString
return t},
$iB:1}
A.aa.prototype={
gn(a){return B.P},
$id:1}
A.aB.prototype={}
A.b3.prototype={
gn(a){return B.Q},
$id:1}
A.ab.prototype={
gk(a){return a.length},
$ix:1}
A.az.prototype={$ic:1,$ih:1}
A.aA.prototype={$ic:1,$ih:1}
A.b4.prototype={
gn(a){return B.R},
$id:1}
A.b5.prototype={
gn(a){return B.S},
$id:1}
A.b6.prototype={
gn(a){return B.T},
$id:1}
A.b7.prototype={
gn(a){return B.U},
$id:1}
A.b8.prototype={
gn(a){return B.V},
$id:1}
A.b9.prototype={
gn(a){return B.X},
$id:1}
A.ba.prototype={
gn(a){return B.Y},
$id:1}
A.aC.prototype={
gn(a){return B.Z},
gk(a){return a.length},
$id:1}
A.bb.prototype={
gn(a){return B.a_},
gk(a){return a.length},
$id:1}
A.aI.prototype={}
A.aJ.prototype={}
A.aK.prototype={}
A.aL.prototype={}
A.H.prototype={
i(a){return A.aP(v.typeUniverse,this,a)},
D(a){return A.d1(v.typeUniverse,this,a)}}
A.bj.prototype={}
A.bL.prototype={
h(a){return A.z(this.a,null)}}
A.bH.prototype={
h(a){return this.a}}
A.bk.prototype={}
A.j.prototype={
gp(a){return new A.X(a,a.length,A.aR(a).i("X<j.E>"))},
C(a,b){if(!(b>=0&&b<a.length))return A.p(a,b)
return a[b]},
h(a){return A.cH(a,"[","]")}}
A.b2.prototype={
a5(a){var t,s,r,q=this,p=A.I(q)
p.i("2(1,2)").a(a)
for(t=new A.G(q,q.r,q.e,p.i("G<1>")),p=p.y[1];t.j();){s=t.d
r=q.q(0,s)
q.v(0,s,a.$2(s,r==null?p.a(r):r))}},
gk(a){return this.a},
h(a){return A.cd(this)}}
A.bx.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.m(a)
s.a=(s.a+=t)+": "
t=A.m(b)
s.a+=t},
$S:7}
A.aV.prototype={}
A.br.prototype={
h(a){return"unknown"}}
A.bq.prototype={
u(a){var t=this.X(a,0,a.length)
return t==null?a:t},
X(a,b,c){var t,s,r,q
for(t=a.length,s=b,r=null;s<c;++s){if(!(s<t))return A.p(a,s)
switch(a[s]){case"&":q="&amp;"
break
case'"':q="&quot;"
break
case"'":q="&#39;"
break
case"<":q="&lt;"
break
case">":q="&gt;"
break
case"/":q="&#47;"
break
default:q=null}if(q!=null){if(r==null)r=new A.ad("")
if(s>b)r.a+=B.d.M(a,b,s)
r.a+=q
b=s+1}}if(r==null)return null
if(c>b){t=B.d.M(a,b,c)
r.a+=t}t=r.a
return t.charCodeAt(0)==0?t:t}}
A.aW.prototype={
A(a,b){var t
if(b==null)return!1
t=!1
if(b instanceof A.aW)if(this.a===b.a)t=this.b===b.b
return t},
gm(a){return A.ce(this.a,this.b,B.c,B.c)},
h(a){var t=this,s=A.dM(A.cf(t)),r=A.aX(A.cO(t)),q=A.aX(A.cN(t)),p=A.aX(A.dY(t)),o=A.aX(A.e_(t)),n=A.aX(A.e0(t)),m=A.cD(A.dZ(t)),l=t.b,k=l===0?"":A.cD(l)
return s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m+k}}
A.bG.prototype={
h(a){return this.Y()}}
A.bo.prototype={}
A.bm.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bp(t)
return"Assertion failed"}}
A.bD.prototype={}
A.am.prototype={
gF(){return"Invalid argument"+(!this.a?"(s)":"")},
gE(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.m(q),o=t.gF()+r+p
if(!t.a)return o
return o+t.gE()+": "+A.bp(t.gK())},
gK(){return this.b}}
A.bf.prototype={
gK(){return A.d4(this.b)},
gF(){return"RangeError"},
gE(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.m(r):""
else if(r==null)t=": Not greater than or equal to "+A.m(s)
else if(r>s)t=": Not in inclusive range "+A.m(s)+".."+A.m(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.m(s)
return t}}
A.bs.prototype={
gK(){return A.bO(this.b)},
gF(){return"RangeError"},
gE(){if(A.bO(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gk(a){return this.f}}
A.bF.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bE.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.bC.prototype={
h(a){return"Bad state: "+this.a}}
A.bn.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bp(t)+"."}}
A.by.prototype={
h(a){return"Out of Memory"}}
A.c.prototype={
B(a){var t,s,r,q=this.gp(this)
if(!q.j())return""
t=J.a6(q.gl())
if(!q.j())return t
s=new A.ad(t)
r=t
do{r+=J.a6(q.gl())
s.a=r}while(q.j())
r=s.a
return r.charCodeAt(0)==0?r:r},
J(a,b){var t
A.I(this).i("u(c.E)").a(b)
for(t=this.gp(this);t.j();)if(b.$1(t.gl()))return!0
return!1},
gk(a){var t,s=this.gp(this)
for(t=0;s.j();)++t
return t},
C(a,b){var t,s
A.e2(b,"index")
t=this.gp(this)
for(s=b;t.j();){if(s===0)return t.gl();--s}throw A.e(A.cF(b,b-s,this,"index"))},
h(a){return A.dS(this,"(",")")}}
A.aD.prototype={
gm(a){return A.k.prototype.gm.call(this,0)},
h(a){return"null"}}
A.k.prototype={$ik:1,
A(a,b){return this===b},
gm(a){return A.bd(this)},
h(a){return"Instance of '"+A.be(this)+"'"},
gn(a){return A.f4(this)},
toString(){return this.h(this)}}
A.ad.prototype={
gk(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c3.prototype={
$1(a){A.f(a)
return A.c8()},
$S:0}
A.c9.prototype={
$1(a){var t,s,r
u.q.a(a)
t=a.a
s=this.a===t
r=s?"active":""
s=s?'aria-current="page"':""
return'    <button data-route="'+t+'" class="'+r+'"\n      '+s+">\n      "+A.a3(a.b)+a.c+"\n    </button>\n  "},
$S:8}
A.bP.prototype={
$1(a){return A.y(a).length===0},
$S:9}
A.bQ.prototype={
$1(a){return u.B.a(a).a===this.a.q(0,"categoria")},
$S:2}
A.bR.prototype={
$2(a,b){A.y(a)
A.y(b)
return""},
$S:10}
A.bS.prototype={
$1(a){return u.D.a(a).a===$.dC()},
$S:1}
A.bT.prototype={
$1(a){return'<div class="building '+A.y(a)+'">'+B.d.L("<i></i>",6)+"</div>"},
$S:11}
A.bW.prototype={
$1(a){return u.D.a(a).f!==B.i},
$S:1}
A.bX.prototype={
$1(a){u.B.a(a)
return'<button class="category" data-new="'+a.a+'">'+A.a3(a.c)+a.b+"</button>"},
$S:3}
A.c7.prototype={
$1(a){var t,s
u.B.a(a)
t=a.a
s=$.v.q(0,"categoria")===t?"selected":""
return'<option value="'+t+'" '+s+">"+a.b+"</option>"},
$S:3}
A.c1.prototype={
$1(a){var t
u.D.a(a)
t=$.cp
return t==="todas"||a.f.b===t},
$S:1}
A.c2.prototype={
$1(a){var t,s
u.O.a(a)
t=a.a
s=$.cp===t
return'<button class="chip '+(s?"active":"")+'" data-filter="'+t+'" aria-pressed="'+s+'">'+a.b+"</button>"},
$S:12}
A.aF.prototype={
Y(){return"StatusSolicitacao."+this.b}}
A.w.prototype={}
A.D.prototype={}
A.c6.prototype={
$1(a){return u.B.a(a).a===this.a},
$S:2};(function aliases(){var t=J.Q.prototype
t.V=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1
t(A,"ff","eY",0)
t(A,"dm","f_",0)
t(A,"fg","eZ",0)
t(A,"fl","df",13)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.k,null)
r(A.k,[A.cc,J.aY,A.aE,J.an,A.bo,A.bB,A.c,A.X,A.ay,A.aH,A.r,A.L,A.aU,A.O,A.b2,A.bv,A.G,A.av,A.bh,A.bK,A.H,A.bj,A.bL,A.j,A.aV,A.br,A.aW,A.bG,A.by,A.aD,A.ad,A.w,A.D])
r(J.aY,[J.b_,J.ar,J.at,J.as,J.au,J.b1,J.a9])
r(J.at,[J.Q,J.o,A.aa,A.aB])
r(J.Q,[J.bc,J.aG,J.P])
s(J.aZ,A.aE)
s(J.bt,J.o)
r(J.b1,[J.aq,J.b0])
r(A.bo,[A.bu,A.bA,A.bH,A.bm,A.bD,A.am,A.bF,A.bE,A.bC,A.bn])
r(A.c,[A.ap,A.ax,A.Y])
r(A.ap,[A.W,A.bw,A.aw])
s(A.C,A.W)
r(A.L,[A.ae,A.af])
s(A.S,A.ae)
s(A.a_,A.af)
s(A.ao,A.aU)
r(A.O,[A.aT,A.bi,A.bY,A.c_,A.c3,A.c9,A.bP,A.bQ,A.bS,A.bT,A.bW,A.bX,A.c7,A.c1,A.c2,A.c6])
r(A.bi,[A.bg,A.a7])
s(A.V,A.b2)
r(A.aT,[A.bZ,A.bx,A.bR])
r(A.aB,[A.b3,A.ab])
r(A.ab,[A.aI,A.aK])
s(A.aJ,A.aI)
s(A.az,A.aJ)
s(A.aL,A.aK)
s(A.aA,A.aL)
r(A.az,[A.b4,A.b5])
r(A.aA,[A.b6,A.b7,A.b8,A.b9,A.ba,A.aC,A.bb])
s(A.bk,A.bH)
s(A.bq,A.aV)
r(A.am,[A.bf,A.bs])
s(A.aF,A.bG)
t(A.aI,A.j)
t(A.aJ,A.r)
t(A.aK,A.j)
t(A.aL,A.r)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",i:"double",a5:"num",a:"String",u:"bool",aD:"Null",h:"List",k:"Object",fv:"Map",l:"JSObject"},mangledNames:{},types:["~(l)","u(D)","u(w)","a(w)","@(@)","@(@,a)","@(a)","~(k?,k?)","a(+(a,a,a))","u(a)","a(a,a)","a(a)","a(+(a,a))","a(D)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.S&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.a_&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.eo(v.typeUniverse,JSON.parse('{"bc":"Q","aG":"Q","P":"Q","fw":"aa","b_":{"u":[],"d":[]},"ar":{"d":[]},"at":{"l":[]},"Q":{"l":[]},"o":{"h":["1"],"l":[],"c":["1"]},"aZ":{"aE":[]},"bt":{"o":["1"],"h":["1"],"l":[],"c":["1"]},"an":{"B":["1"]},"b1":{"i":[],"a5":[]},"aq":{"i":[],"b":[],"a5":[],"d":[]},"b0":{"i":[],"a5":[],"d":[]},"a9":{"a":[],"cL":[],"d":[]},"ap":{"c":["1"]},"W":{"c":["1"]},"X":{"B":["1"]},"ax":{"c":["2"],"c.E":"2"},"ay":{"B":["2"]},"C":{"W":["2"],"c":["2"],"c.E":"2","W.E":"2"},"Y":{"c":["1"],"c.E":"1"},"aH":{"B":["1"]},"S":{"ae":[],"L":[]},"a_":{"af":[],"L":[]},"ao":{"aU":["1","2"]},"O":{"a8":[]},"aT":{"a8":[]},"bi":{"a8":[]},"bg":{"a8":[]},"a7":{"a8":[]},"V":{"b2":["1","2"],"cJ":["1","2"]},"bw":{"c":["1"],"c.E":"1"},"G":{"B":["1"]},"aw":{"c":["1"],"c.E":"1"},"av":{"B":["1"]},"ae":{"L":[]},"af":{"L":[]},"bh":{"cK":[]},"bK":{"B":["cK"]},"aa":{"l":[],"d":[]},"aB":{"l":[]},"b3":{"l":[],"d":[]},"ab":{"x":["1"],"l":[]},"az":{"j":["i"],"h":["i"],"x":["i"],"l":[],"c":["i"],"r":["i"]},"aA":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"]},"b4":{"j":["i"],"h":["i"],"x":["i"],"l":[],"c":["i"],"r":["i"],"d":[],"j.E":"i"},"b5":{"j":["i"],"h":["i"],"x":["i"],"l":[],"c":["i"],"r":["i"],"d":[],"j.E":"i"},"b6":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"],"d":[],"j.E":"b"},"b7":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"],"d":[],"j.E":"b"},"b8":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"],"d":[],"j.E":"b"},"b9":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"],"d":[],"j.E":"b"},"ba":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"],"d":[],"j.E":"b"},"aC":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"],"d":[],"j.E":"b"},"bb":{"j":["b"],"h":["b"],"x":["b"],"l":[],"c":["b"],"r":["b"],"d":[],"j.E":"b"},"i":{"a5":[]},"b":{"a5":[]},"h":{"c":["1"]},"a":{"cL":[]},"dR":{"h":["b"],"c":["b"]},"e9":{"h":["b"],"c":["b"]},"e8":{"h":["b"],"c":["b"]},"dP":{"h":["b"],"c":["b"]},"e6":{"h":["b"],"c":["b"]},"dQ":{"h":["b"],"c":["b"]},"e7":{"h":["b"],"c":["b"]},"dN":{"h":["i"],"c":["i"]},"dO":{"h":["i"],"c":["i"]}}'))
A.en(v.typeUniverse,JSON.parse('{"ap":1,"ab":1,"aV":2}'))
var u=(function rtii(){var t=A.aQ
return{B:t("w"),Z:t("a8"),U:t("c<@>"),f:t("o<k>"),L:t("o<+(a,a)>"),p:t("o<+(a,a,a)>"),s:t("o<a>"),b:t("o<@>"),T:t("ar"),m:t("l"),g:t("P"),E:t("x<@>"),j:t("h<@>"),e:t("C<w,a>"),G:t("C<a,a>"),d:t("C<+(a,a),a>"),J:t("C<+(a,a,a),a>"),P:t("aD"),K:t("k"),M:t("fx"),F:t("+()"),O:t("+(a,a)"),q:t("+(a,a,a)"),D:t("D"),N:t("a"),v:t("a(w)"),Q:t("a(+(a,a))"),h:t("a(+(a,a,a))"),C:t("a(a)"),R:t("d"),o:t("aG"),y:t("u"),i:t("i"),S:t("b"),V:t("cE<aD>?"),z:t("l?"),X:t("k?"),w:t("a?"),u:t("u?"),I:t("i?"),t:t("b?"),n:t("a5?"),H:t("a5")}})();(function constants(){var t=hunkHelpers.makeConstList
B.z=J.aY.prototype
B.a=J.o.prototype
B.e=J.aq.prototype
B.d=J.a9.prototype
B.A=J.P.prototype
B.B=J.at.prototype
B.n=J.bc.prototype
B.j=J.aG.prototype
B.a0=new A.br()
B.b=new A.bq()
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.o=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.u=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.t=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.r=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.q=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.l=function(hooks) { return hooks; }

B.v=new A.by()
B.c=new A.bB()
B.m=t(["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],u.s)
B.w=new A.w("iluminacao","Ilumina\xe7\xe3o","lamp")
B.x=new A.w("vias","Vias p\xfablicas","road")
B.y=new A.w("limpeza","Limpeza","clean")
B.f=t([B.w,B.x,B.y],A.aQ("o<w>"))
B.D={home:0,list:1,user:2,plus:3,back:4,lamp:5,road:6,clean:7,check:8,exit:9}
B.C=new A.ao(B.D,['<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>','<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v4H9zM9 12h6M9 16h6"/>','<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>','<path d="M12 5v14M5 12h14"/>','<path d="m14 6-6 6 6 6"/>','<path d="M9 18h6M10 21h4M8 13a6 6 0 1 1 8 0l-1 2H9z"/>','<path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3"/>','<path d="M4 7h16M9 4h6M6 7l1 14h10l1-14M10 11v6M14 11v6"/>','<path d="m5 12 4 4L19 6"/>','<path d="M10 4H4v16h6M9 12h12m-5-5 5 5-5 5"/>'],A.aQ("ao<a,a>"))
B.E=new A.S("emAtendimento","Em atendimento")
B.F=new A.S("aberta","Abertas")
B.G=new A.S("resolvida","Resolvidas")
B.H=new A.S("todas","Todas")
B.I=new A.a_("inicio","home","In\xedcio")
B.J=new A.a_("perfil","user","Perfil")
B.K=new A.a_("solicitacoes","list","Solicita\xe7\xf5es")
B.O=new A.aF(1,"emAtendimento")
B.L=new A.D("BED-2026-0142","Poste apagado na pra\xe7a","O poste pr\xf3ximo \xe0 entrada da pra\xe7a est\xe1 apagado h\xe1 tr\xeas noites.","Rua das Flores, 120 \xb7 Centro","iluminacao",B.O,"18 nov 2026","19 nov 2026")
B.h=new A.aF(0,"aberta")
B.M=new A.D("BED-2026-0138","Cal\xe7ada danificada","Um trecho da cal\xe7ada est\xe1 quebrado perto do ponto de \xf4nibus.","Av. dos Ip\xeas, 35 \xb7 Centro","vias",B.h,"17 nov 2026","17 nov 2026")
B.i=new A.aF(2,"resolvida")
B.N=new A.D("BED-2026-0121","Descarte irregular","Entulho descartado ao lado da pra\xe7a do bairro.","Pra\xe7a do Sol \xb7 Centro","limpeza",B.i,"12 nov 2026","16 nov 2026")
B.P=A.K("fr")
B.Q=A.K("fs")
B.R=A.K("dN")
B.S=A.K("dO")
B.T=A.K("dP")
B.U=A.K("dQ")
B.V=A.K("dR")
B.W=A.K("k")
B.X=A.K("e6")
B.Y=A.K("e7")
B.Z=A.K("e8")
B.a_=A.K("e9")})();(function staticFields(){$.bI=null
$.A=A.J([],u.f)
$.cM=null
$.cA=null
$.cz=null
$.dl=null
$.de=null
$.dq=null
$.bU=null
$.c0=null
$.cr=null
$.bJ=A.J([],A.aQ("o<h<k>?>"))
$.cp="todas"
$.v=function(){var t=u.N
return A.dW(["titulo","","endereco","","descricao","","categoria",""],t,t)}()})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"fu","dy",()=>A.bV("_$dart_dartClosure"))
t($,"ft","cv",()=>A.bV("_$dart_dartClosure_dartJSInterop"))
t($,"fz","dz",()=>A.J([new J.aZ()],A.aQ("o<aE>")))
t($,"fy","ca",()=>A.dn(B.W))
t($,"fD","ak",()=>A.J([B.L,B.M,B.N],A.aQ("o<D>")))
t($,"fA","dA",()=>{var r=A.d6(A.dk(A.ds(),"document",u.m),"getElementById","app",u.z)
return r==null?A.f(r):r})
t($,"fC","dB",()=>{var r=A.d6(A.dk(A.ds(),"document",u.m),"getElementById","navigation",u.z)
return r==null?A.f(r):r})
s($,"dr","dC",()=>B.a.gP($.ak()).a)})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aa,SharedArrayBuffer:A.aa,ArrayBufferView:A.aB,DataView:A.b3,Float32Array:A.b4,Float64Array:A.b5,Int16Array:A.b6,Int32Array:A.b7,Int8Array:A.b8,Uint16Array:A.b9,Uint32Array:A.ba,Uint8ClampedArray:A.aC,CanvasPixelArray:A.aC,Uint8Array:A.bb})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aI.$nativeSuperclassTag="ArrayBufferView"
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"
A.aK.$nativeSuperclassTag="ArrayBufferView"
A.aL.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.fe
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()