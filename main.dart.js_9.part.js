self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={L5:function L5(d,e){this.a=d
this.b=e},a7K:function a7K(d,e){this.a=d
this.b=e},yC:function yC(d,e,f){this.a=d
this.b=e
this.c=f},i9:function i9(d,e,f){var _=this
_.e=0
_.bK$=d
_.a4$=e
_.a=f},J8:function J8(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.D=d
_.q=e
_.G=f
_.a2=g
_.az=h
_.b7=i
_.bi=j
_.b4=k
_.bN=l
_.ck=!1
_.cK=m
_.cj$=n
_.P$=o
_.bU$=p
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
_.c=_.b=null},Pg:function Pg(){},Ph:function Ph(){},
ahe(d,e,f,g,h){return new A.L4(f,d,h,g,e,null)},
L4:function L4(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.y=g
_.c=h
_.a=i}},C,B,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[12],A)
C=c[2]
B=c[0]
D=c[17]
A.L5.prototype={
h(d){return"WrapAlignment."+this.b}}
A.a7K.prototype={
h(d){return"WrapCrossAlignment."+this.b}}
A.yC.prototype={}
A.i9.prototype={}
A.J8.prototype={
sa_f(d,e){if(this.D===e)return
this.D=e
this.R()},
sdf(d){if(this.q===d)return
this.q=d
this.R()},
sKm(d,e){if(this.G===e)return
this.G=e
this.R()},
sa2O(d){if(this.a2===d)return
this.a2=d
this.R()},
sa2P(d){if(this.az===d)return
this.az=d
this.R()},
sZR(d){if(this.b7===d)return
this.b7=d
this.R()},
dr(d){if(!(d.e instanceof A.i9))d.e=new A.i9(null,null,C.m)},
dz(d){return this.wg(d)},
up(d){switch(this.D.a){case 0:return d.a
case 1:return d.b}},
uo(d){switch(this.D.a){case 0:return d.b
case 1:return d.a}},
T0(d,e){switch(this.D.a){case 0:return new B.x(d,e)
case 1:return new B.x(e,d)}},
SP(d,e,f){var x=e-f
switch(this.b7.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
c0(d){return this.Ry(d)},
Ry(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.D.a){case 0:x=d.b
w=new B.ar(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ar(0,1/0,0,x)
break
default:w=null
x=0}v=k.P$
for(u=B.p(k).j("ac.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.ak6(v,w)
n=k.up(o)
m=k.uo(o)
if(p>0&&r+n+k.G>x){t=Math.max(t,r)
s+=q+k.az
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.G;++p
l=v.e
l.toString
v=u.a(l).a4$}s+=q
t=Math.max(t,r)
switch(k.D.a){case 0:return d.bv(new B.R(t,s))
case 1:return d.bv(new B.R(s,t))}},
bB(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.w.prototype.ga0.call(b1))
b1.ck=!1
x=b1.P$
if(x==null){b1.rx=new B.R(C.f.F(0,b2.a,b2.b),C.f.F(0,b2.c,b2.d))
return}switch(b1.D.a){case 0:w=b2.b
v=new B.ar(0,w,0,1/0)
u=b1.bi===C.a6&&!0
t=b1.b4===C.ig&&!0
break
case 1:w=b2.d
v=new B.ar(0,1/0,0,w)
u=b1.b4===C.ig&&!0
t=b1.bi===C.a6&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.G
r=b1.az
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.cl(0,v,!0)
j=x.rx
j.toString
i=b1.up(j)
j=x.rx
j.toString
h=b1.uo(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yC(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.a4$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yC(m,l,k))}g=q.length
switch(b1.D.a){case 0:j=b1.rx=b2.bv(new B.R(o,n))
f=j.a
e=j.b
break
case 1:j=b1.rx=b2.bv(new B.R(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.ck=f<o||e<n
d=Math.max(0,e-n)
switch(b1.a2.a){case 0:a0=0
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
x=b1.P$
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
i=b1.up(a9)
a9=x.rx
a9.toString
b0=b1.SP(t,l,b1.uo(a9))
if(u)a8-=i
j.a=b1.T0(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.a4$}a2=t?a2-a1:a2+(l+a1)}},
cC(d,e){return this.pT(d,e)},
aO(d,e){var x,w=this,v=w.ck&&w.bN!==C.C,u=w.cK
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saV(0,d.jO(v,e,new B.E(0,0,0+x.a,0+x.b),w.gFK(),w.bN,u.a))}else{u.saV(0,null)
w.jn(d,e)}},
m(d){this.cK.saV(0,null)
this.iY(0)}}
A.Pg.prototype={
ak(d){var x,w,v
this.dt(d)
x=this.P$
for(w=y.e;x!=null;){x.ak(d)
v=x.e
v.toString
x=w.a(v).a4$}},
ad(d){var x,w,v
this.cY(0)
x=this.P$
for(w=y.e;x!=null;){x.ad(0)
v=x.e
v.toString
x=w.a(v).a4$}}}
A.Ph.prototype={}
A.L4.prototype={
aC(d){var x=this,w=B.dI(d)
w=new A.J8(x.e,x.f,x.r,D.fu,x.y,D.AB,w,C.aq,C.C,B.av(),0,null,null,B.av())
w.gam()
w.gaB()
w.fr=!1
w.I(0,null)
return w},
aI(d,e){var x,w=this
e.sa_f(0,w.e)
e.sdf(w.f)
e.sKm(0,w.r)
e.sa2O(D.fu)
e.sa2P(w.y)
e.sZR(D.AB)
x=B.dI(d)
if(e.bi!=x){e.bi=x
e.R()}if(e.b4!==C.aq){e.b4=C.aq
e.R()}if(C.C!==e.bN){e.bN=C.C
e.aN()
e.ao()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.My,[A.L5,A.a7K])
u(A.yC,B.u)
u(A.i9,B.nS)
u(A.Pg,B.B)
u(A.Ph,A.Pg)
u(A.J8,A.Ph)
u(A.L4,B.dN)
x(A.Pg,B.ac)
w(A.Ph,B.cD)})()
B.eN(b.typeUniverse,JSON.parse('{"i9":{"el":[],"dw":["B"]},"J8":{"cD":["B","i9"],"B":[],"ac":["B","i9"],"w":[],"H":[],"aq":[],"ac.1":"i9","cD.1":"i9","ac.0":"B"},"L4":{"dN":[],"au":[],"i":[]}}'))
var y={a:B.G("ar"),l:B.G("q<yC>"),e:B.G("i9")};(function constants(){D.fu=new A.L5(0,"start")
D.a1q=new A.L5(2,"center")
D.AB=new A.a7K(0,"start")})()}
$__dart_deferred_initializers__["RK40yn0CDcebqg9+FUUbYt/18Rw="] = $__dart_deferred_initializers__.current
