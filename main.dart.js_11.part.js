self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={a6l:function a6l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},a6m:function a6m(){},a6n:function a6n(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},a6k:function a6k(){},Kj:function Kj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},pO:function pO(d,e,f){var _=this
_.b=_.x=null
_.c=!1
_.l_$=d
_.bP$=e
_.ab$=f
_.a=null},Jn:function Jn(d,e,f,g,h,i,j){var _=this
_.eK=d
_.a6=e
_.ap=f
_.ai=$
_.bf=!0
_.cu$=g
_.Y$=h
_.co$=i
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
_.c=_.b=null},wu:function wu(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[12],A)
C=c[2]
B=c[0]
A.a6l.prototype={
IW(d){var x=this.c
return d.pD(this.d,x,x)},
h(d){var x=this
return"SliverGridGeometry("+C.b.bb(B.a(["scrollOffset: "+B.e(x.a),"crossAxisOffset: "+B.e(x.b),"mainAxisExtent: "+B.e(x.c),"crossAxisExtent: "+B.e(x.d)],y.x),", ")+")"}}
A.a6m.prototype={}
A.a6n.prototype={
Jg(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.d1(d/x)-1)
return 0},
T1(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
rn(d){var x=this,w=x.a,v=C.f.dt(d,w)
return new A.a6l(C.f.j5(d,w)*x.b,x.T1(v*x.c),x.d,x.e)},
Fp(d){var x=this.b
return x*(C.f.j5(d-1,this.a)+1)-(x-this.d)}}
A.a6k.prototype={}
A.Kj.prototype={
yY(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.x-w*(v-1))/v,t=u/x.d
return new A.a6n(v,t+x.b,u+w,t,u,B.aeC(d.y))}}
A.pO.prototype={
h(d){return"crossAxisOffset="+B.e(this.x)+"; "+this.MB(0)}}
A.Jn.prototype={
dv(d){if(!(d.e instanceof A.pO))d.e=new A.pO(!1,null,null)},
sJC(d){var x,w=this
if(w.eK===d)return
if(B.A(d)===B.A(w.eK)){x=w.eK
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.S()
w.eK=d},
kM(d){var x=d.e
x.toString
x=y.t.a(x).x
x.toString
return x},
bF(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.ga3.call(a3)),a6=a3.a6
a6.aY=!1
x=a5.d
w=x+a5.Q
v=w+a5.ch
u=a3.eK.yY(a5)
t=u.b
s=t>1e-10?u.a*C.d.j5(w,t):0
r=isFinite(v)?u.Jg(v):a4
t=a3.Y$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.co$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.F(s-t,0,a3.cu$)
a3.mQ(o,r==null?0:C.f.F(p-r,0,a3.cu$))}else a3.mQ(0,0)
n=u.rn(s)
m=n.a
l=m+n.c
if(a3.Y$==null)if(!a3.EK(s,m)){k=u.Fp(a6.gpM())
a3.k4=B.jk(a4,!1,a4,a4,k,0,0,k,a4)
a6.n0()
return}t=a3.Y$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.rn(j)
p=h.c
g=a3.a0Y(a5.pD(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.x=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Y$
p.toString
p.fk(0,n.IW(a5))
i=a3.Y$
p=i.e
p.toString
t.a(p)
p.a=m
p.x=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.q(a3).i("af.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.rn(j)
e=h.c
d=a5.pD(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ab$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.a0X(d,i)
if(g==null)break}else g.fk(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.x=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.co$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.Gd(a5,s,t,m,l)
a2=a3.fH(a5,Math.min(x,m),l)
a3.k4=B.jk(a3.mN(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.aY=!0
a6.n0()}}
A.wu.prototype={
aB(d){var x=new A.Jn(this.f,y.v.a(d),B.y(y.e,y.g),0,null,null,B.aq())
x.gao()
x.gaA()
x.fr=!1
return x},
aI(d,e){e.sJC(this.f)},
wP(d,e,f,g,h){var x
this.MC(d,e,f,g,h)
x=this.f.yY(d).Fp(this.d.f.length)
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.u,[A.a6l,A.a6m,A.a6k])
w(A.a6n,A.a6m)
w(A.Kj,A.a6k)
w(A.pO,B.dC)
w(A.Jn,B.kB)
w(A.wu,B.jl)})()
B.dk(b.typeUniverse,JSON.parse('{"pO":{"dC":[],"dx":["B"],"hL":[]},"Jn":{"kB":[],"cF":[],"af":["B","dC"],"w":[],"H":[],"ao":[],"af.1":"dC","af.0":"B"},"wu":{"jl":[],"at":[],"i":[]}}'))
var y={x:B.F("p<l>"),g:B.F("B"),z:B.F("jj"),t:B.F("pO"),v:B.F("mP"),c:B.F("dC"),e:B.F("n")}}
$__dart_deferred_initializers__["k2REbb6+uTQriltMOuHeR+baF40="] = $__dart_deferred_initializers__.current
