self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={KY:function KY(d,e){this.a=d
this.b=e},a7A:function a7A(d,e){this.a=d
this.b=e},yv:function yv(d,e,f){this.a=d
this.b=e
this.c=f},i7:function i7(d,e,f){var _=this
_.e=0
_.bN$=d
_.a7$=e
_.a=f},J1:function J1(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.B=d
_.q=e
_.D=f
_.Z=g
_.as=h
_.aW=i
_.be=j
_.aG=k
_.bo=l
_.bT=!1
_.bX=m
_.cE$=n
_.W$=o
_.cj$=p
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
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
_.dx=q
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},P9:function P9(){},Pa:function Pa(){},
agY(d,e,f,g,h){return new A.KX(f,d,h,g,e,null)},
KX:function KX(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.y=g
_.c=h
_.a=i}},C,B,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[10],A)
C=c[2]
B=c[0]
D=c[15]
A.KY.prototype={
h(d){return"WrapAlignment."+this.b}}
A.a7A.prototype={
h(d){return"WrapCrossAlignment."+this.b}}
A.yv.prototype={}
A.i7.prototype={}
A.J1.prototype={
sZZ(d,e){if(this.B===e)return
this.B=e
this.O()},
sdf(d){if(this.q===d)return
this.q=d
this.O()},
sK8(d,e){if(this.D===e)return
this.D=e
this.O()},
sa2x(d){if(this.Z===d)return
this.Z=d
this.O()},
sa2y(d){if(this.as===d)return
this.as=d
this.O()},
sZy(d){if(this.aW===d)return
this.aW=d
this.O()},
d7(d){if(!(d.e instanceof A.i7))d.e=new A.i7(null,null,C.m)},
dh(d){return this.vY(d)},
u9(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
u8(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
SK(d,e){switch(this.B.a){case 0:return new B.v(d,e)
case 1:return new B.v(e,d)}},
Sy(d,e,f){var x=e-f
switch(this.aW.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
bW(d){return this.Rh(d)},
Rh(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.B.a){case 0:x=d.b
w=new B.an(0,x,0,1/0)
break
case 1:x=d.d
w=new B.an(0,1/0,0,x)
break
default:w=null
x=0}v=k.W$
for(u=B.q(k).j("ad.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.ajP(v,w)
n=k.u9(o)
m=k.u8(o)
if(p>0&&r+n+k.D>x){t=Math.max(t,r)
s+=q+k.as
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.D;++p
l=v.e
l.toString
v=u.a(l).a7$}s+=q
t=Math.max(t,r)
switch(k.B.a){case 0:return d.bh(new B.Q(t,s))
case 1:return d.bh(new B.Q(s,t))}},
bC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.w.prototype.ga0.call(b1))
b1.bT=!1
x=b1.W$
if(x==null){b1.rx=new B.Q(C.f.G(0,b2.a,b2.b),C.f.G(0,b2.c,b2.d))
return}switch(b1.B.a){case 0:w=b2.b
v=new B.an(0,w,0,1/0)
u=b1.be===C.a3&&!0
t=b1.aG===C.id&&!0
break
case 1:w=b2.d
v=new B.an(0,1/0,0,w)
u=b1.aG===C.id&&!0
t=b1.be===C.a3&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.D
r=b1.as
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.c3(0,v,!0)
j=x.rx
j.toString
i=b1.u9(j)
j=x.rx
j.toString
h=b1.u8(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yv(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.a7$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yv(m,l,k))}g=q.length
switch(b1.B.a){case 0:j=b1.rx=b2.bh(new B.Q(o,n))
f=j.a
e=j.b
break
case 1:j=b1.rx=b2.bh(new B.Q(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.bT=f<o||e<n
d=Math.max(0,e-n)
switch(b1.Z.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.W$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.q.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.rx
a9.toString
i=b1.u9(a9)
a9=x.rx
a9.toString
b0=b1.Sy(t,l,b1.u8(a9))
if(u)a8-=i
j.a=b1.SK(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.a7$}a2=t?a2-a1:a2+(l+a1)}},
cq(d,e){return this.pF(d,e)},
aJ(d,e){var x,w=this,v=w.bT&&w.bo!==C.C,u=w.bX
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saY(0,d.jG(v,e,new B.E(0,0,0+x.a,0+x.b),w.gFv(),w.bo,u.a))}else{u.saY(0,null)
w.ji(d,e)}},
n(d){this.bX.saY(0,null)
this.iV(0)}}
A.P9.prototype={
ah(d){var x,w,v
this.da(d)
x=this.W$
for(w=y.e;x!=null;){x.ah(d)
v=x.e
v.toString
x=w.a(v).a7$}},
aa(d){var x,w,v
this.cM(0)
x=this.W$
for(w=y.e;x!=null;){x.aa(0)
v=x.e
v.toString
x=w.a(v).a7$}}}
A.Pa.prototype={}
A.KX.prototype={
az(d){var x=this,w=B.dJ(d)
w=new A.J1(x.e,x.f,x.r,D.ig,x.y,D.AE,w,C.cB,C.C,B.av(),0,null,null,B.av())
w.gan()
w.gay()
w.fr=!1
w.L(0,null)
return w},
aL(d,e){var x,w=this
e.sZZ(0,w.e)
e.sdf(w.f)
e.sK8(0,w.r)
e.sa2x(D.ig)
e.sa2y(w.y)
e.sZy(D.AE)
x=B.dJ(d)
if(e.be!=x){e.be=x
e.O()}if(e.aG!==C.cB){e.aG=C.cB
e.O()}if(C.C!==e.bo){e.bo=C.C
e.aH()
e.ao()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.xk,[A.KY,A.a7A])
u(A.yv,B.u)
u(A.i7,B.nT)
u(A.P9,B.B)
u(A.Pa,A.P9)
u(A.J1,A.Pa)
u(A.KX,B.dM)
x(A.P9,B.ad)
w(A.Pa,B.cy)})()
B.hc(b.typeUniverse,JSON.parse('{"i7":{"du":[],"dI":["B"]},"J1":{"cy":["B","i7"],"B":[],"ad":["B","i7"],"w":[],"H":[],"ap":[],"ad.1":"i7","cy.1":"i7","ad.0":"B"},"KX":{"dM":[],"as":[],"i":[]}}'))
var y={a:B.M("an"),l:B.M("p<yv>"),e:B.M("i7")};(function constants(){D.ig=new A.KY(0,"start")
D.AD=new A.KY(2,"center")
D.AE=new A.a7A(0,"start")})()}
$__dart_deferred_initializers__["rQkue33/tPtnVLTbQzaTSz96TDM="] = $__dart_deferred_initializers__.current
