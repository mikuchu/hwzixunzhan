self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={KT:function KT(d,e){this.a=d
this.b=e},a7m:function a7m(d,e){this.a=d
this.b=e},yr:function yr(d,e,f){this.a=d
this.b=e
this.c=f},i3:function i3(d,e,f){var _=this
_.e=0
_.bM$=d
_.a7$=e
_.a=f},IW:function IW(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.C=d
_.q=e
_.H=f
_.a1=g
_.aw=h
_.b8=i
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
_.c=_.b=null},P3:function P3(){},P4:function P4(){},
agE(d,e,f,g,h){return new A.KS(f,d,h,g,e,null)},
KS:function KS(d,e,f,g,h,i){var _=this
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
D=c[15]
A.KT.prototype={
h(d){return"WrapAlignment."+this.b}}
A.a7m.prototype={
h(d){return"WrapCrossAlignment."+this.b}}
A.yr.prototype={}
A.i3.prototype={}
A.IW.prototype={
sZK(d,e){if(this.C===e)return
this.C=e
this.P()},
sdd(d){if(this.q===d)return
this.q=d
this.P()},
sJY(d,e){if(this.H===e)return
this.H=e
this.P()},
sa2i(d){if(this.a1===d)return
this.a1=d
this.P()},
sa2j(d){if(this.aw===d)return
this.aw=d
this.P()},
sZl(d){if(this.b8===d)return
this.b8=d
this.P()},
dG(d){if(!(d.e instanceof A.i3))d.e=new A.i3(null,null,C.m)},
dt(d){return this.vV(d)},
u6(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
u5(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
Sz(d,e){switch(this.C.a){case 0:return new B.v(d,e)
case 1:return new B.v(e,d)}},
Sn(d,e,f){var x=e-f
switch(this.b8.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
bZ(d){return this.R6(d)},
R6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.C.a){case 0:x=d.b
w=new B.ap(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ap(0,1/0,0,x)
break
default:w=null
x=0}v=k.U$
for(u=B.p(k).j("ad.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.ajw(v,w)
n=k.u6(o)
m=k.u5(o)
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
bE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.w.prototype.ga0.call(b1))
b1.cg=!1
x=b1.U$
if(x==null){b1.rx=new B.R(C.f.F(0,b2.a,b2.b),C.f.F(0,b2.c,b2.d))
return}switch(b1.C.a){case 0:w=b2.b
v=new B.ap(0,w,0,1/0)
u=b1.bh===C.a5&&!0
t=b1.b3===C.ie&&!0
break
case 1:w=b2.d
v=new B.ap(0,1/0,0,w)
u=b1.b3===C.ie&&!0
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
i=b1.u6(j)
j=x.rx
j.toString
h=b1.u5(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.yr(m,l,k))
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
q.push(new A.yr(m,l,k))}g=q.length
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
i=b1.u6(a9)
a9=x.rx
a9.toString
b0=b1.Sn(t,l,b1.u5(a9))
if(u)a8-=i
j.a=b1.Sz(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.a7$}a2=t?a2-a1:a2+(l+a1)}},
cw(d,e){return this.pB(d,e)},
aN(d,e){var x,w=this,v=w.cg&&w.bL!==C.C,u=w.cG
if(v){v=B.b(w.fr,"_needsCompositing")
x=w.rx
u.saV(0,d.jE(v,e,new B.E(0,0,0+x.a,0+x.b),w.gFp(),w.bL,u.a))}else{u.saV(0,null)
w.je(d,e)}},
m(d){this.cG.saV(0,null)
this.iS(0)}}
A.P3.prototype={
aj(d){var x,w,v
this.dq(d)
x=this.U$
for(w=y.e;x!=null;){x.aj(d)
v=x.e
v.toString
x=w.a(v).a7$}},
ac(d){var x,w,v
this.cW(0)
x=this.U$
for(w=y.e;x!=null;){x.ac(0)
v=x.e
v.toString
x=w.a(v).a7$}}}
A.P4.prototype={}
A.KS.prototype={
aB(d){var x=this,w=B.dH(d)
w=new A.IW(x.e,x.f,x.r,D.ft,x.y,D.AA,w,C.ax,C.C,B.au(),0,null,null,B.au())
w.gan()
w.gaA()
w.fr=!1
w.J(0,null)
return w},
aO(d,e){var x,w=this
e.sZK(0,w.e)
e.sdd(w.f)
e.sJY(0,w.r)
e.sa2i(D.ft)
e.sa2j(w.y)
e.sZl(D.AA)
x=B.dH(d)
if(e.bh!=x){e.bh=x
e.P()}if(e.b3!==C.ax){e.b3=C.ax
e.P()}if(C.C!==e.bL){e.bL=C.C
e.aM()
e.ao()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.Ml,[A.KT,A.a7m])
u(A.yr,B.u)
u(A.i3,B.nQ)
u(A.P3,B.C)
u(A.P4,A.P3)
u(A.IW,A.P4)
u(A.KS,B.dK)
x(A.P3,B.ad)
w(A.P4,B.cA)})()
B.f5(b.typeUniverse,JSON.parse('{"i3":{"eg":[],"dG":["C"]},"IW":{"cA":["C","i3"],"C":[],"ad":["C","i3"],"w":[],"H":[],"aq":[],"ad.1":"i3","cA.1":"i3","ad.0":"C"},"KS":{"dK":[],"at":[],"i":[]}}'))
var y={a:B.M("ap"),l:B.M("q<yr>"),e:B.M("i3")};(function constants(){D.ft=new A.KT(0,"start")
D.a1q=new A.KT(2,"center")
D.AA=new A.a7m(0,"start")})()}
$__dart_deferred_initializers__["/HVADbURfOiWnYKCeOh/ctNpj14="] = $__dart_deferred_initializers__.current
