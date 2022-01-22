self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aE7(d,e){var w,v=new B.S($.O,x.f),u=new B.ax(v,x.D),t=$.arR().$0()
C.jz.HP(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
B.bi(t,"progress",new A.afO(e),!1,w)
B.bi(t,"error",new A.afP(u,d),!1,w)
B.bi(t,"load",new A.afQ(t,u,d),!1,w)
t.send()
return v},
af6:function af6(){},
afO:function afO(d){this.a=d},
afP:function afP(d,e){this.a=d
this.b=e},
afQ:function afQ(d,e,f){this.a=d
this.b=e
this.c=f},
aEt(d,e){var w=B.aY()
if(w)return A.aE7(d.h(0),e)
else return A.aBo(new A.afU(d,e),x.s)},
aBo(d,e){var w=new B.S($.O,e.i("S<0>")),v=d.$1(new A.adY(new B.zo(w,e.i("zo<0>")),e))
if(v!=null)throw B.c(B.cj(v))
return w},
afU:function afU(d,e){this.a=d
this.b=e},
adY:function adY(d,e){this.a=d
this.b=e},
p2:function p2(d,e){this.a=d
this.b=e},
a1e:function a1e(d){this.a=d},
hO:function hO(d,e){this.a=d
this.b=e},
NA:function NA(){},
ay7(){if(!!self.location)return self.location.href
return null},
azv(){var w=A.ay7()
if(w!=null)return B.xk(w)
throw B.c(B.M("'Uri.base' is not supported"))},
ah1(d,e){var w=null
return new B.oB(B.amQ(w,w,new A.p2(d,e)),w,w,w)}},B,J,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[16],A)
B=c[0]
J=c[1]
C=c[2]
A.p2.prototype={
nH(d){return new B.b_(this,x.B)},
qI(d,e,f){var w=null,v=B.ane(w,w,w,x.h)
return B.am6(new B.l8(v,B.q(v).i("l8<1>")),this.Vd(e,f,v),e.a,w,e.b)},
Vd(d,e,f){return A.aEt(A.azv().aw(d.a),new A.a1e(f))},
k(d,e){if(e==null)return!1
if(J.Q(e)!==B.A(this))return!1
return e instanceof A.p2&&e.a===this.a&&e.b===this.b},
gu(d){return B.T(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
h(d){return'NetworkImage("'+this.a+'", scale: '+B.e(this.b)+")"}}
A.hO.prototype={}
A.NA.prototype={}
var z=a.updateTypes([])
A.af6.prototype={
$0(){return new XMLHttpRequest()},
$S:373}
A.afO.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:51}
A.afP.prototype={
$1(d){this.a.ff(new B.oC(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:51}
A.afQ.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.ff(new B.oC(y.a+p.c+"\nServer response code: "+n))
return}try{w=B.cH(x.n.a(B.aok(o.response)),0,null)
v=B.akU(w,p.c)
p.b.bH(0,v)}catch(q){u=B.a2(q)
t=B.am(q)
p.b.jn(u,t)}},
$S:51}
A.afU.prototype={
$1(d){d.$1(new B.u6(this.a.h(0),this.b))
return null},
$S:374}
A.adY.prototype={
$1(d){var w=this.a
if(d==null)w.ff(new B.xS("operation failed"))
else w.bH(0,d)},
$S(){return this.b.i("~(0)")}}
A.a1e.prototype={
$2(d,e){this.a.E(0,new A.hO(d,e))},
$S:126};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.af6,B.fA)
u(B.bm,[A.afO,A.afP,A.afQ,A.afU,A.adY])
v(A.p2,B.ds)
v(A.a1e,B.fB)
v(A.NA,B.u)
v(A.hO,A.NA)
w(A.NA,B.af)})()
B.dd(b.typeUniverse,JSON.parse('{"p2":{"ds":["ahr"],"ds.T":"ahr"},"ahr":{"ds":["ahr"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:B.F("lC"),s:B.F("es"),h:B.F("hO"),g:B.F("h5"),B:B.F("b_<p2>"),D:B.F("ax<es>"),f:B.F("S<es>")};(function lazyInitializers(){var w=a.lazy
w($,"aHZ","arR",()=>new A.af6())})()}
$__dart_deferred_initializers__["Y1WT26rvSCotr5ZUPB+UCYqqdwk="] = $__dart_deferred_initializers__.current
