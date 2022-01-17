self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={KN:function KN(d,e){this.a=d
this.b=e},a7d:function a7d(d,e){this.a=d
this.b=e},yj:function yj(d,e,f){this.a=d
this.b=e
this.c=f},i0:function i0(d,e,f){var _=this
_.e=0
_.bM$=d
_.a7$=e
_.a=f},IQ:function IQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.C=d
_.q=e
_.G=f
_.a1=g
_.aw=h
_.b7=i
_.bh=j
_.b3=k
_.bL=l
_.cg=!1
_.cG=m
_.cD$=n
_.U$=o
_.cf$=p
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
_.c=_.b=null},OY:function OY(){},OZ:function OZ(){},
alU(d,e,f,g,h){return new A.KM(f,d,h,g,e,null)},
KM:function KM(d,e,f,g,h,i){var _=this
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
A.KN.prototype={
h(d){return"WrapAlignment."+this.b}}
A.a7d.prototype={
h(d){return"WrapCrossAlignment."+this.b}}
A.yj.prototype={}
A.i0.prototype={}
A.IQ.prototype={
sZJ(d,e){if(this.C===e)return
this.C=e
this.P()},
sdd(d){if(this.q===d)return
this.q=d
this.P()},
sJX(d,e){if(this.G===e)return
this.G=e
this.P()},
sa2h(d){if(this.a1===d)return
this.a1=d
this.P()},
sa2i(d){if(this.aw===d)return
this.aw=d
this.P()},
sZk(d){if(this.b7===d)return
this.b7=d
this.P()},
dG(d){if(!(d.e instanceof A.i0))d.e=new A.i0(null,null,C.m)},
dt(d){return this.vU(d)},
u4(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
u3(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
Sy(d,e){switch(this.C.a){case 0:return new B.v(d,e)
case 1:return new B.v(e,d)}},
Sm(d,e,f){var x=e-f
switch(this.b7.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
bZ(d){return this.R5(d)},
R5(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.C.a){case 0:x=d.b
w=new B.ap(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ap(0,1/0,0,x)
break
default:w=null
x=0}v=k.U$
for(u=B.p(k).j("ad.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.ajl(v,w)
n=k.u4(o)
m=k.u3(o)
if(p>0&&r+n+k.G>x){t=Math.max(t,r)
s+=q+k.aw
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.G;++p
l=v.e
l.toString
v=u.a(l).a7$}s+=q
t=Math.max(t,r)
switch(k.C.a){case 0:return d.bu(new B.R(t,s))
case 1:return d.bu(new B.R(s,t))}},
bE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.w.prototype.ga0.call(b1))
b1.cg=!1
x=b1.U$
if(x==null){b1.rx=new B.R(C.f.F(0,b2.a,b2.b),C.f.F(0,b2.c,b2.d))
return}switch(b1.C.a){case 0:w=b2.b
v=new B.ap(0,w,0,1/0)
u=b1.bh===C.a2&&!0
t=b1.b3===C.i9&&!0
break
case 1:w=b2.d
v=new B.ap(0,1/0,0,w)
u=b1.b3===C.i9&&!0
t=b1.bh===C.a2&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.G
r=b1.aw
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.ci(0,v,!0)
j=x.rx
j.toString
i=b1.u4(j)
j=x.rx
j.toString
h=b1.u3(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yj(m,l,k))
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
q.push(new A.yj(m,l,k))}g=q.length
switch(b1.C.a){case 0:j=b1.rx=b2.bu(new B.R(o,n))
f=j.a
e=j.b
break
case 1:j=b1.rx=b2.bu(new B.R(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.cg=f<o||e<n
d=Math.max(0,e-n)
switch(b1.a1.a){case 0:a0=0
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
x=b1.U$
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
i=b1.u4(a9)
a9=x.rx
a9.toString
b0=b1.Sm(t,l,b1.u3(a9))
if(u)a8-=i
j.a=b1.Sy(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.a7$}a2=t?a2-a1:a2+(l+a1)}},
cw(d,e){return this.pA(d,e)},
aN(d,e){var x,w=this,v=w.cg&&w.bL!==C.C,u=w.cG
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saV(0,d.jE(v,e,new B.E(0,0,0+x.a,0+x.b),w.gFn(),w.bL,u.a))}else{u.saV(0,null)
w.je(d,e)}},
m(d){this.cG.saV(0,null)
this.iS(0)}}
A.OY.prototype={
aj(d){var x,w,v
this.dq(d)
x=this.U$
for(w=y.e;x!=null;){x.aj(d)
v=x.e
v.toString
x=w.a(v).a7$}},
ac(d){var x,w,v
this.cU(0)
x=this.U$
for(w=y.e;x!=null;){x.ac(0)
v=x.e
v.toString
x=w.a(v).a7$}}}
A.OZ.prototype={}
A.KM.prototype={
aB(d){var x=this,w=B.dF(d)
w=new A.IQ(x.e,x.f,x.r,D.ib,x.y,D.Ay,w,C.cv,C.C,B.au(),0,null,null,B.au())
w.gan()
w.gaA()
w.fr=!1
w.I(0,null)
return w},
aO(d,e){var x,w=this
e.sZJ(0,w.e)
e.sdd(w.f)
e.sJX(0,w.r)
e.sa2h(D.ib)
e.sa2i(w.y)
e.sZk(D.Ay)
x=B.dF(d)
if(e.bh!=x){e.bh=x
e.P()}if(e.b3!==C.cv){e.b3=C.cv
e.P()}if(C.C!==e.bL){e.bL=C.C
e.aM()
e.ao()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.Mf,[A.KN,A.a7d])
u(A.yj,B.u)
u(A.i0,B.nF)
u(A.OY,B.C)
u(A.OZ,A.OY)
u(A.IQ,A.OZ)
u(A.KM,B.dI)
x(A.OY,B.ad)
w(A.OZ,B.cx)})()
B.h3(b.typeUniverse,JSON.parse('{"i0":{"ee":[],"dE":["C"]},"IQ":{"cx":["C","i0"],"C":[],"ad":["C","i0"],"w":[],"H":[],"aq":[],"ad.1":"i0","cx.1":"i0","ad.0":"C"},"KM":{"dI":[],"at":[],"i":[]}}'))
var y={a:B.N("ap"),l:B.N("q<yj>"),e:B.N("i0")};(function constants(){D.ib=new A.KN(0,"start")
D.a1j=new A.KN(2,"center")
D.Ay=new A.a7d(0,"start")})()}
$__dart_deferred_initializers__["kxEvnPqrnW6M9cy9OzwVFLmOmv4="] = $__dart_deferred_initializers__.current
