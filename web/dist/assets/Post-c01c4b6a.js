import{d as G,r as u,_ as de,o as n,c as r,a as d,L as t,Y as a,e as I,M as T,K as U,O as i,U as e,Z as q,n as se,a3 as Te,F as oe,$ as ne,j as me,a4 as fe,a5 as ge,H as Ue,w as ze}from"./@vue-f70ab1bd.js";import{u as Z}from"./vuex-cc1858c6.js";import{f as ae}from"./formatTime-000dbebb.js";import{t as Pe,d as Re,e as Se,_ as W,f as Le,h as Ae,i as Me,j as Oe,g as De,k as qe,l as Ee,m as Be,n as je,o as Ne,s as He,v as Ve,p as Fe,q as Ye,r as Ke,u as Je}from"./index-aead2293.js";import{Y as le,V as Q}from"./IEnum-a180d93e.js";import{T as ye,e as ie,f as ke,g as ce,h as we,I as Ge,i as Qe,j as Ze,k as We,l as Xe,m as et,n as tt,o as st}from"./@vicons-477062ff.js";import{j as X,e as ee,J as be,b as ot,K as nt,o as ve,L as $e,v as at,w as lt,x as it,y as ct,z as ut,B as rt,M as _t,O as pt,i as dt,P as mt,a as vt,F as ht,I as ft,k as gt,H as yt,f as kt,g as wt}from"./naive-ui-f5d716a8.js";import{p as he,_ as Ce,a as bt,b as $t,c as Ct}from"./content-de322067.js";import{u as xe,b as xt}from"./vue-router-29025daf.js";import{_ as It}from"./post-skeleton-0e402857.js";import{l as Tt}from"./lodash-3329902d.js";import{a as Ut}from"./copy-to-clipboard-ca358197.js";import{_ as zt}from"./main-nav.vue_vue_type_style_index_0_lang-6a1f60b7.js";import"./moment-b7869f98.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./evtd-b614532e.js";import"./@css-render-66126308.js";import"./vooks-dfdd6eef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./nonesir-video-29a967e9.js";import"./toggle-selection-93f4ad84.js";const Pt={class:"reply-item"},Rt={class:"header-wrap"},St={class:"username"},Lt={class:"reply-name"},At={class:"timestamp"},Mt={class:"base-wrap"},Ot={class:"content"},Dt={class:"reply-switch"},qt={class:"time-item"},Et={class:"actions"},Bt={class:"upvote-count"},jt=["onClick"],Nt={class:"upvote-count"},Ht={key:2,class:"action-item"},Vt=["onClick"],Ft=G({__name:"reply-item",props:{tweetId:null,reply:null},emits:["focusReply","reload"],setup(A,{emit:O}){const l=A,c=Z(),g=u(l.reply.is_thumbs_up==le.YES),v=u(l.reply.is_thumbs_down==le.YES),k=u(l.reply.thumbs_up_count),P=()=>{Pe({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(f=>{g.value=!g.value,g.value?(k.value++,v.value=!1):k.value--}).catch(f=>{console.log(f)})},_=()=>{Re({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(f=>{v.value=!v.value,v.value&&g.value&&(k.value--,g.value=!1)}).catch(f=>{console.log(f)})},C=()=>{O("focusReply",l.reply)},$=()=>{Se({id:l.reply.id}).then(f=>{window.$message.success("删除成功"),setTimeout(()=>{O("reload")},50)}).catch(f=>{console.log(f)})};return(f,R)=>{const s=de("router-link"),w=X,y=ee,b=be;return n(),r("div",Pt,[d("div",Rt,[d("div",St,[t(s,{class:"user-link",to:{name:"user",query:{username:l.reply.user.username}}},{default:a(()=>[I(T(l.reply.user.username),1)]),_:1},8,["to"]),d("span",Lt,T(l.reply.at_user_id>0?"回复":":"),1),l.reply.at_user_id>0?(n(),U(s,{key:0,class:"user-link",to:{name:"user",query:{username:l.reply.at_user.username}}},{default:a(()=>[I(T(l.reply.at_user.username),1)]),_:1},8,["to"])):i("",!0)]),d("div",At,[I(T(l.reply.ip_loc)+" ",1),e(c).state.userInfo.is_admin||e(c).state.userInfo.id===l.reply.user.id?(n(),U(b,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:$},{trigger:a(()=>[t(y,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:a(()=>[t(w,null,{default:a(()=>[t(e(ye))]),_:1})]),_:1})]),default:a(()=>[I(" 是否确认删除？ ")]),_:1})):i("",!0)])]),d("div",Mt,[d("div",Ot,T(l.reply.content),1),d("div",Dt,[d("span",qt,T(e(ae)(l.reply.created_on)),1),d("div",Et,[e(c).state.userLogined?i("",!0):(n(),r("div",{key:0,class:"action-item",onClick:R[0]||(R[0]=q(()=>{},["stop"]))},[t(w,{size:"medium"},{default:a(()=>[t(e(ie))]),_:1}),d("span",Bt,T(k.value),1)])),e(c).state.userLogined?(n(),r("div",{key:1,class:"action-item hover",onClick:q(P,["stop"])},[t(w,{size:"medium"},{default:a(()=>[g.value?i("",!0):(n(),U(e(ie),{key:0})),g.value?(n(),U(e(ke),{key:1,class:"show"})):i("",!0)]),_:1}),d("span",Nt,T(k.value),1)],8,jt)):i("",!0),e(c).state.userLogined?i("",!0):(n(),r("div",Ht,[t(w,{size:"medium"},{default:a(()=>[t(e(ce))]),_:1})])),e(c).state.userLogined?(n(),r("div",{key:3,class:"action-item hover",onClick:q(_,["stop"])},[t(w,{size:"medium"},{default:a(()=>[v.value?i("",!0):(n(),U(e(ce),{key:0})),v.value?(n(),U(e(we),{key:1,class:"show"})):i("",!0)]),_:1})],8,Vt)):i("",!0),e(c).state.userLogined?(n(),r("span",{key:4,class:"show opacity-item reply-btn",onClick:C}," 回复 ")):i("",!0)])])])])}}});const Yt=W(Ft,[["__scopeId","data-v-783f5693"]]),Kt={class:"reply-compose-wrap"},Jt={class:"reply-switch"},Gt={class:"time-item"},Qt={class:"actions"},Zt={key:0,class:"action-item"},Wt={class:"upvote-count"},Xt=["onClick"],es={class:"upvote-count"},ts={key:2,class:"action-item"},ss=["onClick"],os={key:0,class:"reply-input-wrap"},ns=G({__name:"compose-reply",props:{comment:null,atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(A,{expose:O,emit:l}){const c=A,g=Z(),v=u(),k=u(!1),P=u(""),_=u(!1),C=u(c.comment.is_thumbs_up==le.YES),$=u(c.comment.is_thumbs_down==le.YES),f=u(c.comment.thumbs_up_count),R=()=>{Le({tweet_id:c.comment.post_id,comment_id:c.comment.id}).then(b=>{C.value=!C.value,C.value?(f.value++,$.value=!1):f.value--}).catch(b=>{console.log(b)})},s=()=>{Ae({tweet_id:c.comment.post_id,comment_id:c.comment.id}).then(b=>{$.value=!$.value,$.value&&C.value&&(f.value--,C.value=!1)}).catch(b=>{console.log(b)})},w=b=>{k.value=b,b?setTimeout(()=>{var z;(z=v.value)==null||z.focus()},10):(_.value=!1,P.value="",l("reset"))},y=()=>{_.value=!0,Me({comment_id:c.comment.id,at_user_id:c.atUserid,content:P.value}).then(b=>{w(!1),window.$message.success("评论成功"),l("reload")}).catch(b=>{_.value=!1})};return O({switchReply:w}),(b,z)=>{const L=X,M=ot,N=ee,H=nt;return n(),r("div",Kt,[d("div",Jt,[d("span",Gt,T(e(ae)(A.comment.created_on)),1),d("div",Qt,[e(g).state.userLogined?i("",!0):(n(),r("div",Zt,[t(L,{size:"medium"},{default:a(()=>[t(e(ie))]),_:1}),d("span",Wt,T(f.value),1)])),e(g).state.userLogined?(n(),r("div",{key:1,class:"action-item hover",onClick:q(R,["stop"])},[t(L,{size:"medium"},{default:a(()=>[C.value?i("",!0):(n(),U(e(ie),{key:0})),C.value?(n(),U(e(ke),{key:1,class:"show"})):i("",!0)]),_:1}),d("span",es,T(f.value),1)],8,Xt)):i("",!0),e(g).state.userLogined?i("",!0):(n(),r("div",ts,[t(L,{size:"medium"},{default:a(()=>[t(e(ce))]),_:1})])),e(g).state.userLogined?(n(),r("div",{key:3,class:"action-item hover",onClick:q(s,["stop"])},[t(L,{size:"medium"},{default:a(()=>[$.value?i("",!0):(n(),U(e(ce),{key:0})),$.value?(n(),U(e(we),{key:1,class:"show"})):i("",!0)]),_:1})],8,ss)):i("",!0),e(g).state.userLogined&&!k.value?(n(),r("span",{key:4,class:"show reply-btn",onClick:z[0]||(z[0]=D=>w(!0))}," 回复 ")):i("",!0),e(g).state.userLogined&&k.value?(n(),r("span",{key:5,class:"hide reply-btn",onClick:z[1]||(z[1]=D=>w(!1))}," 取消 ")):i("",!0)])]),k.value?(n(),r("div",os,[t(H,null,{default:a(()=>[t(M,{ref_key:"inputInstRef",ref:v,size:"small",placeholder:c.atUsername?"@"+c.atUsername:"请输入回复内容..",maxlength:"100",value:P.value,"onUpdate:value":z[2]||(z[2]=D=>P.value=D),"show-count":"",clearable:""},null,8,["placeholder","value"]),t(N,{type:"primary",size:"small",ghost:"",loading:_.value,onClick:y},{default:a(()=>[I(" 回复 ")]),_:1},8,["loading"])]),_:1})])):i("",!0)])}}});const as=W(ns,[["__scopeId","data-v-0f1721e2"]]),ls={class:"comment-item"},is={class:"nickname-wrap"},cs={class:"username-wrap"},us={class:"opt-wrap"},rs={class:"timestamp"},_s=["innerHTML"],ps={class:"reply-wrap"},ds=G({__name:"comment-item",props:{comment:null},emits:["reload"],setup(A,{emit:O}){const l=A,c=Z(),g=xe(),v=u(0),k=u(""),P=u(),_=se(()=>{let w=Object.assign({texts:[],imgs:[]},l.comment);return w.contents.map(y=>{(+y.type==1||+y.type==2)&&w.texts.push(y),+y.type==3&&w.imgs.push(y)}),w}),C=(w,y)=>{let b=w.target;if(b.dataset.detail){const z=b.dataset.detail.split(":");z.length===2&&(c.commit("refresh"),z[0]==="tag"?window.$message.warning("评论内的无效话题"):g.push({name:"user",query:{username:z[1]}}))}},$=w=>{var y,b;v.value=w.user_id,k.value=((y=w.user)==null?void 0:y.username)||"",(b=P.value)==null||b.switchReply(!0)},f=()=>{O("reload")},R=()=>{v.value=0,k.value=""},s=()=>{Oe({id:_.value.id}).then(w=>{window.$message.success("删除成功"),setTimeout(()=>{f()},50)}).catch(w=>{})};return(w,y)=>{const b=ve,z=de("router-link"),L=X,M=ee,N=be,H=Ce,D=as,Y=Yt,V=$e;return n(),r("div",ls,[t(V,{"content-indented":""},Te({avatar:a(()=>[t(b,{round:"",size:30,src:e(_).user.avatar},null,8,["src"])]),header:a(()=>[d("span",is,[t(z,{onClick:y[0]||(y[0]=q(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(_).user.username}}},{default:a(()=>[I(T(e(_).user.nickname),1)]),_:1},8,["to"])]),d("span",cs," @"+T(e(_).user.username),1)]),"header-extra":a(()=>[d("div",us,[d("span",rs,T(e(_).ip_loc),1),e(c).state.userInfo.is_admin||e(c).state.userInfo.id===e(_).user.id?(n(),U(N,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:s},{trigger:a(()=>[t(M,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:a(()=>[t(L,null,{default:a(()=>[t(e(ye))]),_:1})]),_:1})]),default:a(()=>[I(" 是否确认删除？ ")]),_:1})):i("",!0)])]),footer:a(()=>[e(_).imgs.length>0?(n(),U(H,{key:0,imgs:e(_).imgs},null,8,["imgs"])):i("",!0),t(D,{ref_key:"replyComposeRef",ref:P,comment:e(_),"at-userid":v.value,"at-username":k.value,onReload:f,onReset:R},null,8,["comment","at-userid","at-username"]),d("div",ps,[(n(!0),r(oe,null,ne(e(_).replies,o=>(n(),U(Y,{key:o.id,reply:o,"tweet-id":e(_).post_id,onFocusReply:$,onReload:f},null,8,["reply","tweet-id"]))),128))])]),_:2},[e(_).texts.length>0?{name:"description",fn:a(()=>[(n(!0),r(oe,null,ne(e(_).texts,o=>(n(),r("span",{key:o.id,class:"comment-text",onClick:y[1]||(y[1]=q(p=>C(p,e(_).id),["stop"])),innerHTML:e(he)(o.content).content},null,8,_s))),128))]),key:"0"}:void 0]),1024)])}}});const ms=W(ds,[["__scopeId","data-v-f206d4d8"]]),vs=A=>(fe("data-v-ca3e6071"),A=A(),ge(),A),hs={key:0,class:"compose-wrap"},fs={class:"compose-line"},gs={class:"compose-user"},ys={class:"compose-line compose-options"},ks={class:"attachment"},ws={class:"submit-wrap"},bs={class:"attachment-list-wrap"},$s={key:1,class:"compose-wrap"},Cs=vs(()=>d("div",{class:"login-wrap"},[d("span",{class:"login-banner"}," 登录后，精彩更多")],-1)),xs={key:0,class:"login-only-wrap"},Is={key:1,class:"login-wrap"},Ts=G({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(A,{emit:O}){const l=A,c=Z(),g=u([]),v=u(!1),k=u(!1),P=u(!1),_=u(""),C=u(),$=u("public/image"),f=u([]),R=u([]),s=u("true".toLowerCase()==="true"),w="/v1/attachment",y=u(),b=Tt.debounce(h=>{De({k:h}).then(m=>{let x=[];m.suggest.map(S=>{x.push({label:S,value:S})}),g.value=x,k.value=!1}).catch(m=>{k.value=!1})},200),z=(h,m)=>{k.value||(k.value=!0,m==="@"&&b(h))},L=h=>{h.length>200||(_.value=h)},M=h=>{$.value=h},N=h=>{f.value=h},H=async h=>{var m,x;return $.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((m=h.file.file)==null?void 0:m.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):$.value==="image"&&((x=h.file.file)==null?void 0:x.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):!0},D=({file:h,event:m})=>{var x;try{let S=JSON.parse((x=m.target)==null?void 0:x.response);S.code===0&&$.value==="public/image"&&R.value.push({id:h.id,content:S.data.content})}catch{window.$message.error("上传失败")}},Y=({file:h,event:m})=>{var x;try{let S=JSON.parse((x=m.target)==null?void 0:x.response);if(S.code!==0){let F=S.msg||"上传失败";S.details&&S.details.length>0&&S.details.map(E=>{F+=":"+E}),window.$message.error(F)}}catch{window.$message.error("上传失败")}},V=({file:h})=>{let m=R.value.findIndex(x=>x.id===h.id);m>-1&&R.value.splice(m,1)},o=()=>{v.value=!0},p=()=>{var h;v.value=!1,(h=C.value)==null||h.clear(),f.value=[],_.value="",R.value=[]},j=()=>{if(_.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{users:h}=he(_.value);const m=[];let x=100;m.push({content:_.value,type:2,sort:x}),R.value.map(S=>{x++,m.push({content:S.content,type:3,sort:x})}),P.value=!0,qe({contents:m,post_id:l.postId,users:Array.from(new Set(h))}).then(S=>{window.$message.success("发布成功"),P.value=!1,O("post-success"),p()}).catch(S=>{P.value=!1})},K=h=>{c.commit("triggerAuth",!0),c.commit("triggerAuthKey",h)};return me(()=>{y.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(h,m)=>{const x=ve,S=at,F=X,E=ee,ue=lt,re=it,_e=ct,te=ut,pe=rt;return n(),r("div",null,[e(c).state.userInfo.id>0?(n(),r("div",hs,[d("div",fs,[d("div",gs,[t(x,{round:"",size:30,src:e(c).state.userInfo.avatar},null,8,["src"])]),t(S,{type:"textarea",size:"large",autosize:"",bordered:!1,options:g.value,prefix:["@"],loading:k.value,value:_.value,disabled:l.lock===1,"onUpdate:value":L,onSearch:z,onFocus:o,placeholder:l.lock===1?"泡泡已被锁定，回复功能已关闭":"快来评论两句吧..."},null,8,["options","loading","value","disabled","placeholder"])]),v.value?(n(),U(pe,{key:0,ref_key:"uploadRef",ref:C,abstract:"","list-type":"image",multiple:!0,max:9,action:w,headers:{Authorization:y.value},data:{type:$.value},onBeforeUpload:H,onFinish:D,onError:Y,onRemove:V,"onUpdate:fileList":N},{default:a(()=>[d("div",ys,[d("div",ks,[t(ue,{abstract:""},{default:a(({handleClick:J})=>[t(E,{disabled:f.value.length>0&&$.value==="public/video"||f.value.length===9,onClick:()=>{M("public/image"),J()},quaternary:"",circle:"",type:"primary"},{icon:a(()=>[t(F,{size:"20",color:"var(--primary-color)"},{default:a(()=>[t(e(Ge))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),t(_e,{trigger:"hover",placement:"bottom"},{trigger:a(()=>[t(re,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:_.value.length/200*100},null,8,["percentage"])]),default:a(()=>[I(" "+T(_.value.length)+" / 200 ",1)]),_:1})]),d("div",ws,[t(E,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:p},{default:a(()=>[I(" 取消 ")]),_:1}),t(E,{loading:P.value,onClick:j,type:"primary",secondary:"",size:"small",round:""},{default:a(()=>[I(" 发布 ")]),_:1},8,["loading"])])]),d("div",bs,[t(te)])]),_:1},8,["headers","data"])):i("",!0)])):(n(),r("div",$s,[Cs,s.value?i("",!0):(n(),r("div",xs,[t(E,{strong:"",secondary:"",round:"",type:"primary",onClick:m[0]||(m[0]=J=>K("signin"))},{default:a(()=>[I(" 登录 ")]),_:1})])),s.value?(n(),r("div",Is,[t(E,{strong:"",secondary:"",round:"",type:"primary",onClick:m[1]||(m[1]=J=>K("signin"))},{default:a(()=>[I(" 登录 ")]),_:1}),t(E,{strong:"",secondary:"",round:"",type:"info",onClick:m[2]||(m[2]=J=>K("signup"))},{default:a(()=>[I(" 注册 ")]),_:1})])):i("",!0)]))])}}});const Us=W(Ts,[["__scopeId","data-v-ca3e6071"]]),zs={class:"username-wrap"},Ps={key:0,class:"options"},Rs={key:0},Ss=["innerHTML"],Ls={class:"timestamp"},As={key:0},Ms={key:1},Os={class:"opts-wrap"},Ds=["onClick"],qs={class:"opt-item"},Es=["onClick"],Bs=["onClick"],js=G({__name:"post-detail",props:{post:null},emits:["reload"],setup(A,{emit:O}){const l=A,c=Z(),g=xe(),v=u(!1),k=u(!1),P=u(!1),_=u(!1),C=u(!1),$=u(!1),f=u(!1),R=u(Q.PUBLIC),s=se({get:()=>{let o=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},l.post);return o.contents.map(p=>{(+p.type==1||+p.type==2)&&o.texts.push(p),+p.type==3&&o.imgs.push(p),+p.type==4&&o.videos.push(p),+p.type==6&&o.links.push(p),+p.type==7&&o.attachments.push(p),+p.type==8&&o.charge_attachments.push(p)}),o},set:o=>{l.post.upvote_count=o.upvote_count,l.post.comment_count=o.comment_count,l.post.collection_count=o.collection_count}}),w=se(()=>{let o=[{label:"删除",key:"delete"}];return s.value.is_lock===0?o.push({label:"锁定",key:"lock"}):o.push({label:"解锁",key:"unlock"}),c.state.userInfo.is_admin&&(s.value.is_top===0?o.push({label:"置顶",key:"stick"}):o.push({label:"取消置顶",key:"unstick"})),s.value.visibility===Q.PUBLIC?o.push({label:"公开",key:"vpublic",children:[{label:"私密",key:"vprivate"},{label:"好友可见",key:"vfriend"}]}):s.value.visibility===Q.PRIVATE?o.push({label:"私密",key:"vprivate",children:[{label:"公开",key:"vpublic"},{label:"好友可见",key:"vfriend"}]}):o.push({label:"好友可见",key:"vfriend",children:[{label:"公开",key:"vpublic"},{label:"私密",key:"vprivate"}]}),o}),y=o=>{g.push({name:"post",query:{id:o}})},b=(o,p)=>{if(o.target.dataset.detail){const j=o.target.dataset.detail.split(":");if(j.length===2){c.commit("refresh"),j[0]==="tag"?g.push({name:"home",query:{q:j[1],t:"tag"}}):g.push({name:"user",query:{username:j[1]}});return}}y(p)},z=o=>{switch(o){case"delete":P.value=!0;break;case"lock":case"unlock":_.value=!0;break;case"stick":case"unstick":C.value=!0;break;case"vpublic":R.value=0,$.value=!0;break;case"vprivate":R.value=1,$.value=!0;break;case"vfriend":R.value=2,$.value=!0;break}},L=()=>{je({id:s.value.id}).then(o=>{window.$message.success("删除成功"),g.replace("/"),setTimeout(()=>{c.commit("refresh")},50)}).catch(o=>{f.value=!1})},M=()=>{Ne({id:s.value.id}).then(o=>{O("reload"),o.lock_status===1?window.$message.success("锁定成功"):window.$message.success("解锁成功")}).catch(o=>{f.value=!1})},N=()=>{He({id:s.value.id}).then(o=>{O("reload"),o.top_status===1?window.$message.success("置顶成功"):window.$message.success("取消置顶成功")}).catch(o=>{f.value=!1})},H=()=>{Ve({id:s.value.id,visibility:R.value}).then(o=>{O("reload"),window.$message.success("修改可见性成功")}).catch(o=>{f.value=!1})},D=()=>{Fe({id:s.value.id}).then(o=>{v.value=o.status,o.status?s.value={...s.value,upvote_count:s.value.upvote_count+1}:s.value={...s.value,upvote_count:s.value.upvote_count-1}}).catch(o=>{console.log(o)})},Y=()=>{Ye({id:s.value.id}).then(o=>{k.value=o.status,o.status?s.value={...s.value,collection_count:s.value.collection_count+1}:s.value={...s.value,collection_count:s.value.collection_count-1}}).catch(o=>{console.log(o)})},V=()=>{Ut(`${window.location.origin}/#/post?id=${s.value.id}`),window.$message.success("链接已复制到剪贴板")};return me(()=>{c.state.userInfo.id>0&&(Ee({id:s.value.id}).then(o=>{v.value=o.status}).catch(o=>{console.log(o)}),Be({id:s.value.id}).then(o=>{k.value=o.status}).catch(o=>{console.log(o)}))}),(o,p)=>{const j=ve,K=de("router-link"),h=_t,m=X,x=ee,S=pt,F=dt,E=bt,ue=Ce,re=$t,_e=Ct,te=mt,pe=vt,J=$e;return n(),r("div",{class:"detail-item",onClick:p[6]||(p[6]=B=>y(e(s).id))},[t(J,null,{avatar:a(()=>[t(j,{round:"",size:30,src:e(s).user.avatar},null,8,["src"])]),header:a(()=>[t(K,{onClick:p[0]||(p[0]=q(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e(s).user.username}}},{default:a(()=>[I(T(e(s).user.nickname),1)]),_:1},8,["to"]),d("span",zs," @"+T(e(s).user.username),1),e(s).is_top?(n(),U(h,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:a(()=>[I(" 置顶 ")]),_:1})):i("",!0),e(s).visibility==e(Q).PRIVATE?(n(),U(h,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:a(()=>[I(" 私密 ")]),_:1})):i("",!0),e(s).visibility==e(Q).FRIEND?(n(),U(h,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:a(()=>[I(" 好友可见 ")]),_:1})):i("",!0)]),"header-extra":a(()=>[e(c).state.userInfo.is_admin||e(c).state.userInfo.id===e(s).user.id?(n(),r("div",Ps,[t(S,{placement:"bottom-end",trigger:"click",size:"small",options:e(w),onSelect:z},{default:a(()=>[t(x,{quaternary:"",circle:""},{icon:a(()=>[t(m,null,{default:a(()=>[t(e(Qe))]),_:1})]),_:1})]),_:1},8,["options"])])):i("",!0),t(F,{show:P.value,"onUpdate:show":p[1]||(p[1]=B=>P.value=B),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定删除该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:L},null,8,["show"]),t(F,{show:_.value,"onUpdate:show":p[2]||(p[2]=B=>_.value=B),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e(s).is_lock?"解锁":"锁定")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:M},null,8,["show","content"]),t(F,{show:C.value,"onUpdate:show":p[3]||(p[3]=B=>C.value=B),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(e(s).is_top?"取消置顶":"置顶")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:N},null,8,["show","content"]),t(F,{show:$.value,"onUpdate:show":p[4]||(p[4]=B=>$.value=B),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态可见度修改为"+(R.value==0?"公开":R.value==1?"私密":"好友可见")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:H},null,8,["show","content"])]),footer:a(()=>[t(E,{attachments:e(s).attachments},null,8,["attachments"]),t(E,{attachments:e(s).charge_attachments,price:e(s).attachment_price},null,8,["attachments","price"]),t(ue,{imgs:e(s).imgs},null,8,["imgs"]),t(re,{videos:e(s).videos,full:!0},null,8,["videos"]),t(_e,{links:e(s).links},null,8,["links"]),d("div",Ls,[I(" 发布于 "+T(e(ae)(e(s).created_on))+" ",1),e(s).ip_loc?(n(),r("span",As,[t(te,{vertical:""}),I(" "+T(e(s).ip_loc),1)])):i("",!0),!e(c).state.collapsedLeft&&e(s).created_on!=e(s).latest_replied_on?(n(),r("span",Ms,[t(te,{vertical:""}),I(" 最后回复 "+T(e(ae)(e(s).latest_replied_on)),1)])):i("",!0)])]),action:a(()=>[d("div",Os,[t(pe,{justify:"space-between"},{default:a(()=>[d("div",{class:"opt-item hover",onClick:q(D,["stop"])},[t(m,{size:"20",class:"opt-item-icon"},{default:a(()=>[v.value?i("",!0):(n(),U(e(Ze),{key:0})),v.value?(n(),U(e(We),{key:1,color:"red"})):i("",!0)]),_:1}),I(" "+T(e(s).upvote_count),1)],8,Ds),d("div",qs,[t(m,{size:"20",class:"opt-item-icon"},{default:a(()=>[t(e(Xe))]),_:1}),I(" "+T(e(s).comment_count),1)]),d("div",{class:"opt-item hover",onClick:q(Y,["stop"])},[t(m,{size:"20",class:"opt-item-icon"},{default:a(()=>[k.value?i("",!0):(n(),U(e(et),{key:0})),k.value?(n(),U(e(tt),{key:1,color:"#ff7600"})):i("",!0)]),_:1}),I(" "+T(e(s).collection_count),1)],8,Es),d("div",{class:"opt-item hover",onClick:q(V,["stop"])},[t(m,{size:"20",class:"opt-item-icon"},{default:a(()=>[t(e(st))]),_:1}),I(" "+T(e(s).share_count),1)],8,Bs)]),_:1})])]),default:a(()=>[e(s).texts.length>0?(n(),r("div",Rs,[(n(!0),r(oe,null,ne(e(s).texts,B=>(n(),r("span",{key:B.id,class:"post-text",onClick:p[5]||(p[5]=q(Ie=>b(Ie,e(s).id),["stop"])),innerHTML:e(he)(B.content).content},null,8,Ss))),128))])):i("",!0)]),_:1})])}}});const Ns=A=>(fe("data-v-7ae93d44"),A=A(),ge(),A),Hs={key:0,class:"detail-wrap"},Vs={key:1,class:"empty-wrap"},Fs={key:0,class:"comment-opts-wrap"},Ys=Ns(()=>d("span",{class:"comment-title-item"},"评论",-1)),Ks={key:2},Js={key:0,class:"skeleton-wrap"},Gs={key:1},Qs={key:0,class:"empty-wrap"},Zs=G({__name:"Post",setup(A){const O=xt(),l=u({}),c=u(!1),g=u(!1),v=u([]),k=se(()=>+O.query.id),P=u("default"),_=u(null),C=u(1),$=u(!1),f=20,R=L=>{P.value=L,C.value=1,v.value=[],y()},s=()=>{l.value={id:0},c.value=!0,Ke({id:k.value}).then(L=>{c.value=!1,l.value=L,y()}).catch(L=>{c.value=!1})},w=()=>{C.value=1,v.value=[],y()},y=(L=!1)=>{v.value.length===0&&(g.value=!0),Je({id:l.value.id,sort_strategy:P.value,page:C.value,page_size:f}).then(M=>{M.list.length===0&&($.value=!0),C.value===1?v.value=M.list:v.value=v.value.concat(M.list),g.value=!1,L&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(M=>{g.value=!1})},b=()=>{!g.value&&v.value.length>0&&(C.value=C.value+1,y())},z=new IntersectionObserver(L=>{L.forEach(M=>{M.isIntersecting&&b()})},{root:null,rootMargin:"0px",threshold:1});return me(()=>{_.value&&z.observe(_.value),s()}),Ue(()=>{z.disconnect()}),ze(k,()=>{k.value>0&&O.name==="post"&&s()}),(L,M)=>{const N=zt,H=js,D=ft,Y=gt,V=yt,o=kt,p=wt,j=Us,K=It,h=ms,m=ht;return n(),r("div",null,[t(N,{title:"泡泡详情",back:!0}),t(m,{class:"main-content-wrap",bordered:""},{default:a(()=>[t(V,null,{default:a(()=>[t(Y,{show:c.value},{default:a(()=>[l.value.id>1?(n(),r("div",Hs,[t(H,{post:l.value,onReload:s},null,8,["post"])])):(n(),r("div",Vs,[t(D,{size:"large",description:"暂无数据"})]))]),_:1},8,["show"])]),_:1}),l.value.id>0?(n(),r("div",Fs,[t(p,{type:"bar","justify-content":"end",size:"small",animated:"","onUpdate:value":R},{prefix:a(()=>[Ys]),default:a(()=>[t(o,{name:"default",tab:"默认"}),t(o,{name:"newest",tab:"最新"})]),_:1})])):i("",!0),l.value.id>0?(n(),U(V,{key:1},{default:a(()=>[t(j,{lock:l.value.is_lock,"post-id":l.value.id,onPostSuccess:M[0]||(M[0]=x=>y(!0))},null,8,["lock","post-id"])]),_:1})):i("",!0),l.value.id>0?(n(),r("div",Ks,[g.value?(n(),r("div",Js,[t(K,{num:5})])):(n(),r("div",Gs,[v.value.length===0?(n(),r("div",Qs,[t(D,{size:"large",description:"暂无评论，快来抢沙发"})])):i("",!0),(n(!0),r(oe,null,ne(v.value,x=>(n(),U(V,{key:x.id},{default:a(()=>[t(h,{comment:x,onReload:w},null,8,["comment"])]),_:2},1024))),128))]))])):i("",!0),$.value?i("",!0):(n(),r("div",{key:3,class:"load-more-ele",ref_key:"bottomElement",ref:_}," 加载更多... ",512))]),_:1})])}}});const Po=W(Zs,[["__scopeId","data-v-7ae93d44"]]);export{Po as default};
