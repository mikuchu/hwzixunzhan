self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aDo(d,e){var w,v=new A.U($.P,x.f),u=new A.az(v,x.D),t=$.ar_().$0()
C.jq.HD(t,"GET",d,!0)
t.responseType="arraybuffer"
w=x.g
A.bg(t,"progress",new B.aeX(e),!1,w)
A.bg(t,"error",new B.aeY(u,d),!1,w)
A.bg(t,"load",new B.aeZ(t,u,d),!1,w)
t.send()
return v},
aef:function aef(){},
aeX:function aeX(d){this.a=d},
aeY:function aeY(d,e){this.a=d
this.b=e},
aeZ:function aeZ(d,e,f){this.a=d
this.b=e
this.c=f},
aDK(d,e){var w=A.aV()
if(w)return B.aDo(d.h(0),e)
else return B.aAG(new B.af3(d,e),x.s)},
aAG(d,e){var w=new A.U($.P,e.j("U<0>")),v=d.$1(new B.ad6(new A.z0(w,e.j("z0<0>")),e))
if(v!=null)throw A.c(A.cf(v))
return w},
af3:function af3(d,e){this.a=d
this.b=e},
ad6:function ad6(d,e){this.a=d
this.b=e},
oH:function oH(d,e){this.a=d
this.b=e},
a0i:function a0i(d){this.a=d},
hu:function hu(d,e){this.a=d
this.b=e},
Nd:function Nd(){},
az6(){var w=new B.a8s()
w.Qm()
return w},
a8s:function a8s(){this.a=$},
a8y:function a8y(){},
a8A:function a8A(d){this.a=d},
a8z:function a8z(d){this.a=d},
a8B:function a8B(d){this.a=d},
a8C:function a8C(d){this.a=d},
axl(){if(!!self.location)return self.location.href
return null},
ayP(){var w=B.axl()
if(w!=null)return A.wX(w)
throw A.c(A.M("'Uri.base' is not supported"))},
agf(d){var w=null
return new A.oe(A.am2(w,w,new B.oH(d,1)),w,w,w,w)}},A,J,C
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[10],B)
A=c[0]
J=c[1]
C=c[2]
B.oH.prototype={
qK(d){return new A.aW(this,x.B)},
qz(d,e,f){var w=null,v=A.amn(w,w,w,x.h)
return A.all(new A.kL(v,A.p(v).j("kL<1>")),this.V0(e,f,v),e.a,w,e.b)},
V0(d,e,f){return B.aDK(B.ayP().as(d.a),new B.a0i(f))},
k(d,e){if(e==null)return!1
if(J.Q(e)!==A.A(this))return!1
return e instanceof B.oH&&e.a===this.a&&e.b===this.b},
gu(d){return A.S(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
h(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
B.hu.prototype={}
B.Nd.prototype={}
B.a8s.prototype={
Qm(){this.a=$.rc().Hh("character.json").aA(0,new B.a8y(),x.b)},
o6(){var w=0,v=A.ab(x.i),u,t=this,s,r
var $async$o6=A.a6(function(d,e){if(d===1)return A.a8(e,v)
while(true)switch(w){case 0:s=J
r=J
w=3
return A.ah(A.b(t.a,"data"),$async$o6)
case 3:u=s.rh(r.af(e,"Characters"))
w=1
break
case 1:return A.a9(u,v)}})
return A.aa($async$o6,v)},
o5(d){return this.IY(d)},
IY(d){var w=0,v=A.ab(x.i),u,t=this,s,r,q,p
var $async$o5=A.a6(function(e,f){if(e===1)return A.a8(f,v)
while(true)switch(w){case 0:q=J
p=J
w=3
return A.ah(A.b(t.a,"data"),$async$o5)
case 3:s=q.rh(p.af(f,"CharacterCards"))
r=A.al(s).j("aE<1>")
u=A.aw(new A.aE(s,new B.a8A(d),r),!0,r.j("n.E"))
w=1
break
case 1:return A.a9(u,v)}})
return A.aa($async$o5,v)},
o4(d){return this.IX(d)},
IX(d){var w=0,v=A.ab(x.b),u,t=this,s,r,q
var $async$o4=A.a6(function(e,f){if(e===1)return A.a8(f,v)
while(true)switch(w){case 0:s=C.b
r=J
q=J
w=3
return A.ah(A.b(t.a,"data"),$async$o4)
case 3:u=s.nf(r.rh(q.af(f,"CharacterCards")),new B.a8z(d))
w=1
break
case 1:return A.a9(u,v)}})
return A.aa($async$o4,v)},
lD(d){return this.Ju(d)},
Ju(d){var w=0,v=A.ab(x.b),u,t=this,s,r,q
var $async$lD=A.a6(function(e,f){if(e===1)return A.a8(f,v)
while(true)switch(w){case 0:s=C.b
r=J
q=J
w=3
return A.ah(A.b(t.a,"data"),$async$lD)
case 3:u=s.nf(r.rh(q.af(f,"Skills")),new B.a8B(d))
w=1
break
case 1:return A.a9(u,v)}})
return A.aa($async$lD,v)},
og(d){return this.Jy(d)},
Jy(d){var w=0,v=A.ab(x.b),u,t=this,s,r,q
var $async$og=A.a6(function(e,f){if(e===1)return A.a8(f,v)
while(true)switch(w){case 0:s=C.b
r=J
q=J
w=3
return A.ah(A.b(t.a,"data"),$async$og)
case 3:u=s.nf(r.rh(q.af(f,"Tags")),new B.a8C(d))
w=1
break
case 1:return A.a9(u,v)}})
return A.aa($async$og,v)}}
var z=a.updateTypes([])
B.aef.prototype={
$0(){return new XMLHttpRequest()},
$S:369}
B.aeX.prototype={
$1(d){var w,v=d.loaded
v.toString
w=d.total
w.toString
this.a.$2(v,w)},
$S:40}
B.aeY.prototype={
$1(d){this.a.f3(new A.of(y.a+this.b+"\nTrying to load an image from another domain? Find answers at:\nhttps://flutter.dev/docs/development/platform-integration/web-images"))},
$S:40}
B.aeZ.prototype={
$1(d){var w,v,u,t,s,r,q,p=this,o=p.a,n=o.status
n.toString
s=n>=200&&n<300
r=n>307&&n<400
if(!(s||n===0||n===304||r)){p.b.f3(new A.of(y.a+p.c+"\nServer response code: "+n))
return}try{w=A.cB(x.n.a(A.anw(o.response)),0,null)
v=A.ak8(w,p.c)
p.b.bD(0,v)}catch(q){u=A.a0(q)
t=A.aj(q)
p.b.ji(u,t)}},
$S:40}
B.af3.prototype={
$1(d){d.$1(new A.tO(this.a.h(0),this.b))
return null},
$S:370}
B.ad6.prototype={
$1(d){var w=this.a
if(d==null)w.f3(new A.xt("operation failed"))
else w.bD(0,d)},
$S(){return this.b.j("~(0)")}}
B.a0i.prototype={
$2(d,e){this.a.C(0,new B.hu(d,e))},
$S:77}
B.a8y.prototype={
$1(d){return C.aK.d2(0,d)},
$S:80}
B.a8A.prototype={
$1(d){return J.f(J.be(J.af(d,"CharacterId")),this.a)},
$S:7}
B.a8z.prototype={
$1(d){return J.f(J.be(J.af(d,"Id")),this.a)},
$S:7}
B.a8B.prototype={
$1(d){return J.f(J.be(J.af(d,"Id")),this.a)},
$S:7}
B.a8C.prototype={
$1(d){return J.f(J.be(J.af(d,"Id")),this.a)},
$S:7};(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.aef,A.iA)
u(A.bz,[B.aeX,B.aeY,B.aeZ,B.af3,B.ad6,B.a8y,B.a8A,B.a8z,B.a8B,B.a8C])
v(B.oH,A.dJ)
v(B.a0i,A.iB)
u(A.u,[B.Nd,B.a8s])
v(B.hu,B.Nd)
w(B.Nd,A.ae)})()
A.eN(b.typeUniverse,JSON.parse('{"oH":{"dJ":["agH"],"dJ.T":"agH"},"agH":{"dJ":["agH"]}}'))
var y={a:"Failed to load network image.\nImage URL: "}
var x={n:A.G("ld"),s:A.G("em"),h:A.G("hu"),i:A.G("v<@>"),g:A.G("fQ"),B:A.G("aW<oH>"),D:A.G("az<em>"),f:A.G("U<em>"),b:A.G("@")};(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"aHf","ar_",()=>new B.aef())
v($,"aHb","zY",()=>B.az6())})()}
$__dart_deferred_initializers__["fLx1DfutiRCtSFPglhiv/JiTTSw="] = $__dart_deferred_initializers__.current
