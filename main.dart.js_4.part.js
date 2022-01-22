self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Lq:function Lq(d,e){this.a=d
this.b=e},Lr:function Lr(d,e){this.a=d
this.b=e},z_:function z_(d,e,f){this.a=d
this.b=e
this.c=f},iq:function iq(d,e,f){var _=this
_.e=0
_.bJ$=d
_.a6$=e
_.a=f},Jw:function Jw(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.C=d
_.q=e
_.F=f
_.a4=g
_.au=h
_.b5=i
_.bh=j
_.b6=k
_.bQ=l
_.cq=!1
_.cL=m
_.cp$=n
_.S$=o
_.c5$=p
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
_.c=_.b=null},PF:function PF(){},PG:function PG(){},
l6(d,e,f,g,h){return new A.qk(d,h,g,f,e,null)},
qk:function qk(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.y=f
_.z=g
_.c=h
_.a=i}},C,B,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[19],A)
C=c[2]
B=c[0]
D=c[22]
A.Lq.prototype={
h(d){return"WrapAlignment."+this.b}}
A.Lr.prototype={
h(d){return"WrapCrossAlignment."+this.b}}
A.z_.prototype={}
A.iq.prototype={}
A.Jw.prototype={
sa_h(d,e){if(this.C===e)return
this.C=e
this.T()},
sdi(d){if(this.q===d)return
this.q=d
this.T()},
sKw(d,e){if(this.F===e)return
this.F=e
this.T()},
sa2T(d){if(this.a4===d)return
this.a4=d
this.T()},
sa2U(d){if(this.au===d)return
this.au=d
this.T()},
sZT(d){if(this.b5===d)return
this.b5=d
this.T()},
dd(d){if(!(d.e instanceof A.iq))d.e=new A.iq(null,null,C.m)},
dE(d){return this.wq(d)},
ux(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
uw(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
T9(d,e){switch(this.C.a){case 0:return new B.x(d,e)
case 1:return new B.x(e,d)}},
SZ(d,e,f){var x=e-f
switch(this.b5.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
bZ(d){return this.RI(d)},
RI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.C.a){case 0:x=d.b
w=new B.aw(0,x,0,1/0)
break
case 1:x=d.d
w=new B.aw(0,1/0,0,x)
break
default:w=null
x=0}v=k.S$
for(u=B.q(k).i("ad.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.akS(v,w)
n=k.ux(o)
m=k.uw(o)
if(p>0&&r+n+k.F>x){t=Math.max(t,r)
s+=q+k.au
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.F;++p
l=v.e
l.toString
v=u.a(l).a6$}s+=q
t=Math.max(t,r)
switch(k.C.a){case 0:return d.bu(new B.R(t,s))
case 1:return d.bu(new B.R(s,t))}},
bD(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.v.prototype.ga1.call(b1))
b1.cq=!1
x=b1.S$
if(x==null){b1.rx=new B.R(C.f.D(0,b2.a,b2.b),C.f.D(0,b2.c,b2.d))
return}switch(b1.C.a){case 0:w=b2.b
v=new B.aw(0,w,0,1/0)
u=b1.bh===C.ac&&!0
t=b1.b6===C.im&&!0
break
case 1:w=b2.d
v=new B.aw(0,1/0,0,w)
u=b1.b6===C.im&&!0
t=b1.bh===C.ac&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.F
r=b1.au
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.cj(0,v,!0)
j=x.rx
j.toString
i=b1.ux(j)
j=x.rx
j.toString
h=b1.uw(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.z_(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.a6$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.z_(m,l,k))}g=q.length
switch(b1.C.a){case 0:j=b1.rx=b2.bu(new B.R(o,n))
f=j.a
e=j.b
break
case 1:j=b1.rx=b2.bu(new B.R(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.cq=f<o||e<n
d=Math.max(0,e-n)
switch(b1.a4.a){case 0:a0=0
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
x=b1.S$
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
i=b1.ux(a9)
a9=x.rx
a9.toString
b0=b1.SZ(t,l,b1.uw(a9))
if(u)a8-=i
j.a=b1.T9(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.a6$}a2=t?a2-a1:a2+(l+a1)}},
cE(d,e){return this.q1(d,e)},
aM(d,e){var x,w=this,v=w.cq&&w.bQ!==C.C,u=w.cL
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saU(0,d.jU(v,e,new B.D(0,0,0+x.a,0+x.b),w.gFY(),w.bQ,u.a))}else{u.saU(0,null)
w.jt(d,e)}},
m(d){this.cL.saU(0,null)
this.j5(0)}}
A.PF.prototype={
am(d){var x,w,v
this.dA(d)
x=this.S$
for(w=y.e;x!=null;){x.am(d)
v=x.e
v.toString
x=w.a(v).a6$}},
ag(d){var x,w,v
this.cZ(0)
x=this.S$
for(w=y.e;x!=null;){x.ag(0)
v=x.e
v.toString
x=w.a(v).a6$}}}
A.PG.prototype={}
A.qk.prototype={
az(d){var x=this,w=B.dO(d)
w=new A.Jw(C.M,x.f,x.r,D.bU,x.y,x.z,w,C.Z,C.C,B.ao(),0,null,null,B.ao())
w.gao()
w.gaC()
w.fr=!1
w.J(0,null)
return w},
aG(d,e){var x,w=this
e.sa_h(0,C.M)
e.sdi(w.f)
e.sKw(0,w.r)
e.sa2T(D.bU)
e.sa2U(w.y)
e.sZT(w.z)
x=B.dO(d)
if(e.bh!=x){e.bh=x
e.T()}if(e.b6!==C.Z){e.b6=C.Z
e.T()}if(C.C!==e.bQ){e.bQ=C.C
e.aS()
e.ar()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.xP,[A.Lq,A.Lr])
u(A.z_,B.u)
u(A.iq,B.of)
u(A.PF,B.B)
u(A.PG,A.PF)
u(A.Jw,A.PG)
u(A.qk,B.dE)
x(A.PF,B.ad)
w(A.PG,B.cJ)})()
B.dd(b.typeUniverse,JSON.parse('{"iq":{"er":[],"dg":["B"]},"Jw":{"cJ":["B","iq"],"B":[],"ad":["B","iq"],"v":[],"H":[],"an":[],"ad.1":"iq","cJ.1":"iq","ad.0":"B"},"qk":{"dE":[],"aq":[],"i":[]}}'))
var y={a:B.F("aw"),l:B.F("p<z_>"),e:B.F("iq")};(function constants(){D.bU=new A.Lq(0,"start")
D.fx=new A.Lq(2,"center")
D.bA=new A.Lr(0,"start")
D.a1C=new A.Lr(2,"center")})()}
$__dart_deferred_initializers__["KB3tLjkco/c7yXK29nXHrHa11Tc="] = $__dart_deferred_initializers__.current
