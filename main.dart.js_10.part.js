self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aDW(d,e){var w,v=new B.R($.O,x.f),u=new B.ax(v,x.D),t=$.arG().$0()
C.jv.HF(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.bf(t,"progress",new A.afA(e),!1,w)
B.bf(t,"error",new A.afB(u,d),!1,w)
B.bf(t,"load",new A.afC(t,u,d),!1,w)
t.send()
return v},
aeT:function aeT(){},
afA:function afA(d){this.a=d},
afB:function afB(d,e){this.a=d
this.b=e},
afC:function afC(d,e,f){this.a=d
this.b=e
this.c=f},
aEh(d,e){var w=B.aW()
if(w)return A.aDW(d.h(0),e)
else return A.aBc(new A.afG(d,e),x.s)},
aBc(d,e){var w=new B.R($.O,e.i("R<0>")),v=d.$1(new A.adK(new B.ze(w,e.i("ze<0>")),e))
if(v!=null)throw B.c(B.ci(v))
return w},
afG:function afG(d,e){this.a=d
this.b=e},
adK:function adK(d,e){this.a=d
this.b=e},
oU:function oU(d,e){this.a=d
this.b=e},
a10:function a10(d){this.a=d},
hI:function hI(d,e){this.a=d
this.b=e},
Nv:function Nv(){},
axW(){if(!!self.location)return self.location.href
return null},
azj(){var w=A.axW()
if(w!=null)return B.xa(w)
throw B.c(B.M("'Uri.base' is not supported"))},
agP(d,e){var w=null
return new B.os(B.amD(w,w,new A.oU(d,e)),w,w,w)}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[15],A)
B=c[0]
J=c[1]
C=c[2]
A.oU.prototype={
nD(d){return new B.aY(this,x.B)},
qD(d,e,f){var w=null,v=B.an2(w,w,w,x.h)
return B.alU(new B.kZ(v,B.q(v).i("kZ<1>")),this.V4(e,f,v),e.a,w,e.b)},
V4(d,e,f){return A.aEh(A.azj().av(d.a),new A.a10(f))},
k(d,e){if(e==null)return!1
if(J.Q(e)!==B.A(this))return!1
return e instanceof A.oU&&e.a===this.a&&e.b===this.b},
gu(d){return B.S(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
h(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.hI.prototype={}
A.Nv.prototype={}
var z=a.updateTypes([])
A.aeT.prototype={
$0(){return new XMLHttpRequest()},
$S:372}
A.afA.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:48}
A.afB.prototype={
$1(d){this.a.fc(new B.ot(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:48}
A.afC.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.fc(new B.ot(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.cC(x.n.a(B.ao9(o.response)),0,null)
v=B.akH(w,p.c)
p.b.bG(0,v)}catch(q){u=B.a1(q)
t=B.am(q)
p.b.jm(u,t)}},
$S:48}
A.afG.prototype={
$1(d){d.$1(new B.tZ(this.a.h(0),this.b))
return null},
$S:373}
A.adK.prototype={
$1(d){var w=this.a
if(d==null)w.fc(new B.xI("operation failed"))
else w.bG(0,d)},
$S(){return this.b.i("~(0)")}}
A.a10.prototype={
$2(d,e){this.a.C(0,new A.hI(d,e))},
$S:128};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.aeT,B.fx)
u(B.bj,[A.afA,A.afB,A.afC,A.afG,A.adK])
v(A.oU,B.dn)
v(A.a10,B.fy)
v(A.Nv,B.u)
v(A.hI,A.Nv)
w(A.Nv,B.ae)})()
B.dk(b.typeUniverse,JSON.parse('{"oU":{"dn":["ahe"],"dn.T":"ahe"},"ahe":{"dn":["ahe"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.F("lu"),s:B.F("eq"),h:B.F("hI"),g:B.F("h0"),B:B.F("aY<oU>"),D:B.F("ax<eq>"),f:B.F("R<eq>")};(function lazyInitializers(){var w=a.lazy
w($,"aHN","arG",()=>new A.aeT())})()}
$__dart_deferred_initializers__["KykYChGeEcpQ5lXIL8qf9VNlJYg="] = $__dart_deferred_initializers__.current
