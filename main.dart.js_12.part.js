self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={a6z:function a6z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},a6A:function a6A(){},a6B:function a6B(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},a6y:function a6y(){},Kp:function Kp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},pX:function pX(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.l0$=d
_.bJ$=e
_.a6$=f
_.a=null},Js:function Js(d,e,f,g,h,i,j){var _=this
_.eL=d
_.a7=e
_.ap=f
_.ai=$
_.bg=!0
_.cp$=g
_.S$=h
_.c5$=i
_.k4=null
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=j
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},wE:function wE(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[13],A)
C=c[2]
B=c[0]
A.a6z.prototype={
J5(d){var x=this.c
return d.pH(this.d,x,x)},
h(d){var x=this
return"SliverGridGeometry("+C.b.bc(B.a(["scrollOffset: "+B.e(x.a),"crossAxisOffset: "+B.e(x.b),"mainAxisExtent: "+B.e(x.c),"crossAxisExtent: "+B.e(x.d)],y.x),", ")+")"}}
A.a6A.prototype={}
A.a6B.prototype={
Jq(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.d2(d/x)-1)
return 0},
Ta(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
rs(d){var x=this,w=x.a,v=C.f.dv(d,w)
return new A.a6z(C.f.j6(d,w)*x.b,x.Ta(v*x.c),x.d,x.e)},
Fw(d){var x=this.b
return x*(C.f.j6(d-1,this.a)+1)-(x-this.d)}}
A.a6y.prototype={}
A.Kp.prototype={
z1(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.a6B(v,t+x.b,u+w,t,u,B.aeQ(d.y))}}
A.pX.prototype={
h(d){return"crossAxisOffset="+B.e(this.x)+"; "+this.MK(0)}}
A.Js.prototype={
dd(d){if(!(d.e instanceof A.pX))d.e=new A.pX(!1,null,null)},
sJM(d){var x,w=this
if(w.eL===d)return
if(B.A(d)===B.A(w.eL)){x=w.eL
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.T()
w.eL=d},
kN(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
bD(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.v.prototype.ga1.call(a3)),a6=a3.a7
a6.aZ=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.eL.z1(a5)
t=u.b
s=t>1e-10?u.a*C.d.j6(w,t):0
r=isFinite(v)?u.Jq(v):a4
t=a3.S$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.c5$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.D(s-t,0,a3.cp$)
a3.mU(o,r==null?0:C.f.D(p-r,0,a3.cp$))}else a3.mU(0,0)
n=u.rs(s)
m=n.a
l=m+n.c
if(a3.S$==null)if(!a3.EP(s,m)){k=u.Fw(a6.gpQ())
a3.k4=B.jq(a4,!1,a4,a4,k,0,0,k,a4)
a6.n4()
return}t=a3.S$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.rs(j)
p=h.c
g=a3.a10(a5.pH(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.S$
p.toString
p.fn(0,n.J5(a5))
i=a3.S$
p=i.e
p.toString
t.a(p)
p.a=m
p.x=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.q(a3).i("ad.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.rs(j)
e=h.c
d=a5.pH(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a6$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.a1_(d,i)
if(g==null)break}else g.fn(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.x=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.c5$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.Gm(a5,s,t,m,l)
a2=a3.fL(a5,Math.min(x,m),l)
a3.k4=B.jq(a3.mQ(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aZ=!0
a6.n4()}}
A.wE.prototype={
az(d){var x=new A.Js(this.f,y.v.a(d),B.z(y.e,y.g),0,null,null,B.ao())
x.gao()
x.gaC()
x.fr=!1
return x},
aG(d,e){e.sJM(this.f)},
wQ(d,e,f,g,h){var x
this.ML(d,e,f,g,h)
x=this.f.z1(d).Fw(this.d.f.length)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.u,[A.a6z,A.a6A,A.a6y])
w(A.a6B,A.a6A)
w(A.Kp,A.a6y)
w(A.pX,B.dG)
w(A.Js,B.kK)
w(A.wE,B.js)})()
B.dd(b.typeUniverse,JSON.parse('{"pX":{"dG":[],"kY":[],"dg":["B"],"hR":[]},"Js":{"kK":[],"ck":[],"ad":["B","dG"],"v":[],"H":[],"an":[],"ad.1":"dG","ad.0":"B"},"wE":{"js":[],"aq":[],"i":[]}}'))
var y={x:B.F("p<l>"),g:B.F("B"),z:B.F("jp"),t:B.F("pX"),v:B.F("mV"),c:B.F("dG"),e:B.F("n")}}
$__dart_deferred_initializers__["tBlbGDXLikomJLPT2/Gdgp7x3i4="] = $__dart_deferred_initializers__.current
