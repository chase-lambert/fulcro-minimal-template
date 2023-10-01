goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48655,p__48656){
var map__48657 = p__48655;
var map__48657__$1 = cljs.core.__destructure_map(map__48657);
var svc = map__48657__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48657__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48657__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48657__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48658 = p__48656;
var map__48658__$1 = cljs.core.__destructure_map(map__48658);
var msg = map__48658__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48658__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48658__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48658__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48658__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__48661,p__48662){
var map__48663 = p__48661;
var map__48663__$1 = cljs.core.__destructure_map(map__48663);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__48664 = p__48662;
var map__48664__$1 = cljs.core.__destructure_map(map__48664);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48664__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__48668,p__48669){
var map__48670 = p__48668;
var map__48670__$1 = cljs.core.__destructure_map(map__48670);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48670__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48670__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48671 = p__48669;
var map__48671__$1 = cljs.core.__destructure_map(map__48671);
var msg = map__48671__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48671__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__48674,tid){
var map__48675 = p__48674;
var map__48675__$1 = cljs.core.__destructure_map(map__48675);
var svc = map__48675__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48675__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__48680 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__48681 = null;
var count__48682 = (0);
var i__48683 = (0);
while(true){
if((i__48683 < count__48682)){
var vec__48692 = chunk__48681.cljs$core$IIndexed$_nth$arity$2(null,i__48683);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48692,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48692,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48752 = seq__48680;
var G__48753 = chunk__48681;
var G__48754 = count__48682;
var G__48755 = (i__48683 + (1));
seq__48680 = G__48752;
chunk__48681 = G__48753;
count__48682 = G__48754;
i__48683 = G__48755;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__48680);
if(temp__5816__auto__){
var seq__48680__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48680__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__48680__$1);
var G__48756 = cljs.core.chunk_rest(seq__48680__$1);
var G__48757 = c__5521__auto__;
var G__48758 = cljs.core.count(c__5521__auto__);
var G__48759 = (0);
seq__48680 = G__48756;
chunk__48681 = G__48757;
count__48682 = G__48758;
i__48683 = G__48759;
continue;
} else {
var vec__48696 = cljs.core.first(seq__48680__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48760 = cljs.core.next(seq__48680__$1);
var G__48761 = null;
var G__48762 = (0);
var G__48763 = (0);
seq__48680 = G__48760;
chunk__48681 = G__48761;
count__48682 = G__48762;
i__48683 = G__48763;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__48676_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__48676_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__48677_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__48677_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__48678_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__48678_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__48679_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__48679_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__48723){
var map__48725 = p__48723;
var map__48725__$1 = cljs.core.__destructure_map(map__48725);
var svc = map__48725__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
