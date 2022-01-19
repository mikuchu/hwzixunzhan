self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={KY:function KY(d,e){this.a=d
this.b=e},a7w:function a7w(d,e){this.a=d
this.b=e},yx:function yx(d,e,f){this.a=d
this.b=e
this.c=f},i4:function i4(d,e,f){var _=this
_.e=0
_.bM$=d
_.a7$=e
_.a=f},J1:function J1(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.C=d
_.q=e
_.H=f
_.a1=g
_.aw=h
_.b8=i
_.bh=j
_.b4=k
_.bL=l
_.cg=!1
_.cH=m
_.cE$=n
_.V$=o
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
_.c=_.b=null},P8:function P8(){},P9:function P9(){},
a7v(d,e,f,g,h){return new A.KX(f,d,h,g,e,null)},
KX:function KX(d,e,f,g,h,i){var _=this
_.e=d
_.f=e
_.r=f
_.y=g
_.c=h
_.a=i}},C,B,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[11],A)
C=c[2]
B=c[0]
D=c[16]
A.KY.prototype={
h(d){return"WrapAlignment."+this.b}}
A.a7w.prototype={
h(d){return"WrapCrossAlignment."+this.b}}
A.yx.prototype={}
A.i4.prototype={}
A.J1.prototype={
sZS(d,e){if(this.C===e)return
this.C=e
this.P()},
sde(d){if(this.q===d)return
this.q=d
this.P()},
sK3(d,e){if(this.H===e)return
this.H=e
this.P()},
sa2q(d){if(this.a1===d)return
this.a1=d
this.P()},
sa2r(d){if(this.aw===d)return
this.aw=d
this.P()},
sZt(d){if(this.b8===d)return
this.b8=d
this.P()},
dH(d){if(!(d.e instanceof A.i4))d.e=new A.i4(null,null,C.m)},
du(d){return this.w0(d)},
uc(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
ub(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
SG(d,e){switch(this.C.a){case 0:return new B.w(d,e)
case 1:return new B.w(e,d)}},
Su(d,e,f){var x=e-f
switch(this.b8.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
bZ(d){return this.Rd(d)},
Rd(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.C.a){case 0:x=d.b
w=new B.ap(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ap(0,1/0,0,x)
break
default:w=null
x=0}v=k.V$
for(u=B.p(k).j("ad.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.ajK(v,w)
n=k.uc(o)
m=k.ub(o)
if(p>0&&r+n+k.H>x){t=Math.max(t,r)
s+=q+k.aw
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.H;++p
l=v.e
l.toString
v=u.a(l).a7$}s+=q
t=Math.max(t,r)
switch(k.C.a){case 0:return d.bu(new B.R(t,s))
case 1:return d.bu(new B.R(s,t))}},
bE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.x.prototype.ga0.call(b1))
b1.cg=!1
x=b1.V$
if(x==null){b1.rx=new B.R(C.f.F(0,b2.a,b2.b),C.f.F(0,b2.c,b2.d))
return}switch(b1.C.a){case 0:w=b2.b
v=new B.ap(0,w,0,1/0)
u=b1.bh===C.a5&&!0
t=b1.b4===C.ie&&!0
break
case 1:w=b2.d
v=new B.ap(0,1/0,0,w)
u=b1.b4===C.ie&&!0
t=b1.bh===C.a5&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.H
r=b1.aw
q=B.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.ci(0,v,!0)
j=x.rx
j.toString
i=b1.uc(j)
j=x.rx
j.toString
h=b1.ub(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yx(m,l,k))
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
q.push(new A.yx(m,l,k))}g=q.length
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
x=b1.V$
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
i=b1.uc(a9)
a9=x.rx
a9.toString
b0=b1.Su(t,l,b1.ub(a9))
if(u)a8-=i
j.a=b1.SG(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.a7$}a2=t?a2-a1:a2+(l+a1)}},
cw(d,e){return this.pH(d,e)},
aN(d,e){var x,w=this,v=w.cg&&w.bL!==C.D,u=w.cH
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saV(0,d.jG(v,e,new B.E(0,0,0+x.a,0+x.b),w.gFt(),w.bL,u.a))}else{u.saV(0,null)
w.jg(d,e)}},
m(d){this.cH.saV(0,null)
this.iT(0)}}
A.P8.prototype={
aj(d){var x,w,v
this.dr(d)
x=this.V$
for(w=y.e;x!=null;){x.aj(d)
v=x.e
v.toString
x=w.a(v).a7$}},
ac(d){var x,w,v
this.cX(0)
x=this.V$
for(w=y.e;x!=null;){x.ac(0)
v=x.e
v.toString
x=w.a(v).a7$}}}
A.P9.prototype={}
A.KX.prototype={
aB(d){var x=this,w=B.dI(d)
w=new A.J1(x.e,x.f,x.r,D.dz,x.y,D.AA,w,C.aq,C.D,B.av(),0,null,null,B.av())
w.gan()
w.gaA()
w.fr=!1
w.J(0,null)
return w},
aO(d,e){var x,w=this
e.sZS(0,w.e)
e.sde(w.f)
e.sK3(0,w.r)
e.sa2q(D.dz)
e.sa2r(w.y)
e.sZt(D.AA)
x=B.dI(d)
if(e.bh!=x){e.bh=x
e.P()}if(e.b4!==C.aq){e.b4=C.aq
e.P()}if(C.D!==e.bL){e.bL=C.D
e.aM()
e.ao()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.Mq,[A.KY,A.a7w])
u(A.yx,B.u)
u(A.i4,B.nT)
u(A.P8,B.C)
u(A.P9,A.P8)
u(A.J1,A.P9)
u(A.KX,B.dL)
x(A.P8,B.ad)
w(A.P9,B.cD)})()
B.f9(b.typeUniverse,JSON.parse('{"i4":{"ej":[],"dH":["C"]},"J1":{"cD":["C","i4"],"C":[],"ad":["C","i4"],"x":[],"H":[],"aq":[],"ad.1":"i4","cD.1":"i4","ad.0":"C"},"KX":{"dL":[],"au":[],"i":[]}}'))
var y={a:B.L("ap"),l:B.L("q<yx>"),e:B.L("i4")};(function constants(){D.dz=new A.KY(0,"start")
D.a1q=new A.KY(2,"center")
D.AA=new A.a7w(0,"start")})()}
$__dart_deferred_initializers__["4kkKM0C/PRjXRmjzXgQ/JwSHUnk="] = $__dart_deferred_initializers__.current
