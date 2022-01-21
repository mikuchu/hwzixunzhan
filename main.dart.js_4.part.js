self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Lm:function Lm(d,e){this.a=d
this.b=e},a8s:function a8s(d,e){this.a=d
this.b=e},yQ:function yQ(d,e,f){this.a=d
this.b=e
this.c=f},ij:function ij(d,e,f){var _=this
_.e=0
_.bP$=d
_.ab$=e
_.a=f},Jr:function Jr(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.D=d
_.q=e
_.H=f
_.a5=g
_.aC=h
_.b9=i
_.bn=j
_.b6=k
_.bO=l
_.cp=!1
_.cK=m
_.cu$=n
_.Y$=o
_.co$=p
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
_.c=_.b=null},PA:function PA(){},PB:function PB(){},
Ll(d,e,f,g){return new A.kX(d,g,f,e,null)},
kX:function kX(d,e,f,g,h){var _=this
_.f=d
_.r=e
_.y=f
_.c=g
_.a=h}},C,B,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[22]
A.Lm.prototype={
h(d){return"WrapAlignment."+this.b}}
A.a8s.prototype={
h(d){return"WrapCrossAlignment."+this.b}}
A.yQ.prototype={}
A.ij.prototype={}
A.Jr.prototype={
sa_d(d,e){if(this.D===e)return
this.D=e
this.S()},
sdg(d){if(this.q===d)return
this.q=d
this.S()},
sKn(d,e){if(this.H===e)return
this.H=e
this.S()},
sa2S(d){if(this.a5===d)return
this.a5=d
this.S()},
sa2T(d){if(this.aC===d)return
this.aC=d
this.S()},
sZO(d){if(this.b9===d)return
this.b9=d
this.S()},
dv(d){if(!(d.e instanceof A.ij))d.e=new A.ij(null,null,C.m)},
dD(d){return this.wp(d)},
ut(d){switch(this.D.a){case 0:return d.a
case 1:return d.b}},
us(d){switch(this.D.a){case 0:return d.b
case 1:return d.a}},
T0(d,e){switch(this.D.a){case 0:return new B.x(d,e)
case 1:return new B.x(e,d)}},
SQ(d,e,f){var x=e-f
switch(this.b9.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
bZ(d){return this.Rz(d)},
Rz(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.D.a){case 0:x=d.b
w=new B.av(0,x,0,1/0)
break
case 1:x=d.d
w=new B.av(0,1/0,0,x)
break
default:w=null
x=0}v=k.Y$
for(u=B.q(k).i("af.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.akF(v,w)
n=k.ut(o)
m=k.us(o)
if(p>0&&r+n+k.H>x){t=Math.max(t,r)
s+=q+k.aC
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.H;++p
l=v.e
l.toString
v=u.a(l).ab$}s+=q
t=Math.max(t,r)
switch(k.D.a){case 0:return d.bt(new B.U(t,s))
case 1:return d.bt(new B.U(s,t))}},
bF(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.w.prototype.ga3.call(b1))
b1.cp=!1
x=b1.Y$
if(x==null){b1.rx=new B.U(C.f.F(0,b2.a,b2.b),C.f.F(0,b2.c,b2.d))
return}switch(b1.D.a){case 0:w=b2.b
v=new B.av(0,w,0,1/0)
u=b1.bn===C.a7&&!0
t=b1.b6===C.ih&&!0
break
case 1:w=b2.d
v=new B.av(0,1/0,0,w)
u=b1.b6===C.ih&&!0
t=b1.bn===C.a7&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.H
r=b1.aC
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.ci(0,v,!0)
j=x.rx
j.toString
i=b1.ut(j)
j=x.rx
j.toString
h=b1.us(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yQ(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ab$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yQ(m,l,k))}g=q.length
switch(b1.D.a){case 0:j=b1.rx=b2.bt(new B.U(o,n))
f=j.a
e=j.b
break
case 1:j=b1.rx=b2.bt(new B.U(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.cp=f<o||e<n
d=Math.max(0,e-n)
switch(b1.a5.a){case 0:a0=0
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
x=b1.Y$
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
i=b1.ut(a9)
a9=x.rx
a9.toString
b0=b1.SQ(t,l,b1.us(a9))
if(u)a8-=i
j.a=b1.T0(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ab$}a2=t?a2-a1:a2+(l+a1)}},
cD(d,e){return this.pX(d,e)},
aL(d,e){var x,w=this,v=w.cp&&w.bO!==C.C,u=w.cK
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saT(0,d.jT(v,e,new B.D(0,0,0+x.a,0+x.b),w.gFP(),w.bO,u.a))}else{u.saT(0,null)
w.js(d,e)}},
m(d){this.cK.saT(0,null)
this.j4(0)}}
A.PA.prototype={
am(d){var x,w,v
this.dz(d)
x=this.Y$
for(w=y.e;x!=null;){x.am(d)
v=x.e
v.toString
x=w.a(v).ab$}},
ah(d){var x,w,v
this.cX(0)
x=this.Y$
for(w=y.e;x!=null;){x.ah(0)
v=x.e
v.toString
x=w.a(v).ab$}}}
A.PB.prototype={}
A.kX.prototype={
aB(d){var x=B.dK(d)
x=new A.Jr(C.a3,this.f,this.r,D.dC,this.y,D.AN,x,C.aq,C.C,B.aq(),0,null,null,B.aq())
x.gao()
x.gaA()
x.fr=!1
x.J(0,null)
return x},
aI(d,e){var x
e.sa_d(0,C.a3)
e.sdg(this.f)
e.sKn(0,this.r)
e.sa2S(D.dC)
e.sa2T(this.y)
e.sZO(D.AN)
x=B.dK(d)
if(e.bn!=x){e.bn=x
e.S()}if(e.b6!==C.aq){e.b6=C.aq
e.S()}if(C.C!==e.bO){e.bO=C.C
e.aR()
e.ar()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.xF,[A.Lm,A.a8s])
u(A.yQ,B.u)
u(A.ij,B.o5)
u(A.PA,B.B)
u(A.PB,A.PA)
u(A.Jr,A.PB)
u(A.kX,B.dO)
x(A.PA,B.af)
w(A.PB,B.cE)})()
B.dk(b.typeUniverse,JSON.parse('{"ij":{"ep":[],"dx":["B"]},"Jr":{"cE":["B","ij"],"B":[],"af":["B","ij"],"w":[],"H":[],"ao":[],"af.1":"ij","cE.1":"ij","af.0":"B"},"kX":{"dO":[],"at":[],"i":[]}}'))
var y={a:B.F("av"),l:B.F("p<yQ>"),e:B.F("ij")};(function constants(){D.dC=new A.Lm(0,"start")
D.AM=new A.Lm(2,"center")
D.AN=new A.a8s(0,"start")})()}
$__dart_deferred_initializers__["t2T6EridX8dVkVQKQ7Bv8kXeK4s="] = $__dart_deferred_initializers__.current
