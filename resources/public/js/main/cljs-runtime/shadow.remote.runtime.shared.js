goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47595){
var map__47597 = p__47595;
var map__47597__$1 = cljs.core.__destructure_map(map__47597);
var runtime = map__47597__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47597__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4998__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_47700 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_47700)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__47601 = runtime;
var G__47602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_47700);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__47601,G__47602) : shadow.remote.runtime.shared.process.call(null,G__47601,G__47602));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47603,res){
var map__47604 = p__47603;
var map__47604__$1 = cljs.core.__destructure_map(map__47604);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47604__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47604__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47605 = res;
var G__47605__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47605,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47605);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47605__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47605__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47607 = arguments.length;
switch (G__47607) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47615,msg,handlers,timeout_after_ms){
var map__47616 = p__47615;
var map__47616__$1 = cljs.core.__destructure_map(map__47616);
var runtime = map__47616__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47616__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___47704 = arguments.length;
var i__5723__auto___47707 = (0);
while(true){
if((i__5723__auto___47707 < len__5722__auto___47704)){
args__5728__auto__.push((arguments[i__5723__auto___47707]));

var G__47708 = (i__5723__auto___47707 + (1));
i__5723__auto___47707 = G__47708;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47629,ev,args){
var map__47630 = p__47629;
var map__47630__$1 = cljs.core.__destructure_map(map__47630);
var runtime = map__47630__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47631 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47634 = null;
var count__47635 = (0);
var i__47636 = (0);
while(true){
if((i__47636 < count__47635)){
var ext = chunk__47634.cljs$core$IIndexed$_nth$arity$2(null,i__47636);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47710 = seq__47631;
var G__47711 = chunk__47634;
var G__47712 = count__47635;
var G__47713 = (i__47636 + (1));
seq__47631 = G__47710;
chunk__47634 = G__47711;
count__47635 = G__47712;
i__47636 = G__47713;
continue;
} else {
var G__47714 = seq__47631;
var G__47715 = chunk__47634;
var G__47716 = count__47635;
var G__47717 = (i__47636 + (1));
seq__47631 = G__47714;
chunk__47634 = G__47715;
count__47635 = G__47716;
i__47636 = G__47717;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47631);
if(temp__5816__auto__){
var seq__47631__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47631__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47631__$1);
var G__47718 = cljs.core.chunk_rest(seq__47631__$1);
var G__47719 = c__5521__auto__;
var G__47720 = cljs.core.count(c__5521__auto__);
var G__47721 = (0);
seq__47631 = G__47718;
chunk__47634 = G__47719;
count__47635 = G__47720;
i__47636 = G__47721;
continue;
} else {
var ext = cljs.core.first(seq__47631__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47722 = cljs.core.next(seq__47631__$1);
var G__47723 = null;
var G__47724 = (0);
var G__47725 = (0);
seq__47631 = G__47722;
chunk__47634 = G__47723;
count__47635 = G__47724;
i__47636 = G__47725;
continue;
} else {
var G__47726 = cljs.core.next(seq__47631__$1);
var G__47727 = null;
var G__47728 = (0);
var G__47729 = (0);
seq__47631 = G__47726;
chunk__47634 = G__47727;
count__47635 = G__47728;
i__47636 = G__47729;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47623){
var G__47624 = cljs.core.first(seq47623);
var seq47623__$1 = cljs.core.next(seq47623);
var G__47625 = cljs.core.first(seq47623__$1);
var seq47623__$2 = cljs.core.next(seq47623__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47624,G__47625,seq47623__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47645,p__47646){
var map__47647 = p__47645;
var map__47647__$1 = cljs.core.__destructure_map(map__47647);
var runtime = map__47647__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47647__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47648 = p__47646;
var map__47648__$1 = cljs.core.__destructure_map(map__47648);
var msg = map__47648__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47648__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47649 = cljs.core.deref(state_ref);
var map__47649__$1 = cljs.core.__destructure_map(map__47649);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47649__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47649__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47650,msg){
var map__47652 = p__47650;
var map__47652__$1 = cljs.core.__destructure_map(map__47652);
var runtime = map__47652__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47656,key,p__47657){
var map__47662 = p__47656;
var map__47662__$1 = cljs.core.__destructure_map(map__47662);
var state = map__47662__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47662__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47663 = p__47657;
var map__47663__$1 = cljs.core.__destructure_map(map__47663);
var spec = map__47663__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47663__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47665,key,spec){
var map__47667 = p__47665;
var map__47667__$1 = cljs.core.__destructure_map(map__47667);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47668_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47668_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47669_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47669_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47670_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47670_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47671_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47671_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47672_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47672_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47677,key){
var map__47678 = p__47677;
var map__47678__$1 = cljs.core.__destructure_map(map__47678);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47679,msg){
var map__47680 = p__47679;
var map__47680__$1 = cljs.core.__destructure_map(map__47680);
var runtime = map__47680__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47680__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47681,p__47682){
var map__47683 = p__47681;
var map__47683__$1 = cljs.core.__destructure_map(map__47683);
var runtime = map__47683__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47683__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47684 = p__47682;
var map__47684__$1 = cljs.core.__destructure_map(map__47684);
var msg = map__47684__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47684__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47684__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47689 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47691 = null;
var count__47692 = (0);
var i__47693 = (0);
while(true){
if((i__47693 < count__47692)){
var map__47697 = chunk__47691.cljs$core$IIndexed$_nth$arity$2(null,i__47693);
var map__47697__$1 = cljs.core.__destructure_map(map__47697);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47697__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47735 = seq__47689;
var G__47736 = chunk__47691;
var G__47737 = count__47692;
var G__47738 = (i__47693 + (1));
seq__47689 = G__47735;
chunk__47691 = G__47736;
count__47692 = G__47737;
i__47693 = G__47738;
continue;
} else {
var G__47739 = seq__47689;
var G__47740 = chunk__47691;
var G__47741 = count__47692;
var G__47742 = (i__47693 + (1));
seq__47689 = G__47739;
chunk__47691 = G__47740;
count__47692 = G__47741;
i__47693 = G__47742;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47689);
if(temp__5816__auto__){
var seq__47689__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47689__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47689__$1);
var G__47743 = cljs.core.chunk_rest(seq__47689__$1);
var G__47744 = c__5521__auto__;
var G__47745 = cljs.core.count(c__5521__auto__);
var G__47746 = (0);
seq__47689 = G__47743;
chunk__47691 = G__47744;
count__47692 = G__47745;
i__47693 = G__47746;
continue;
} else {
var map__47698 = cljs.core.first(seq__47689__$1);
var map__47698__$1 = cljs.core.__destructure_map(map__47698);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47698__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47747 = cljs.core.next(seq__47689__$1);
var G__47748 = null;
var G__47749 = (0);
var G__47750 = (0);
seq__47689 = G__47747;
chunk__47691 = G__47748;
count__47692 = G__47749;
i__47693 = G__47750;
continue;
} else {
var G__47751 = cljs.core.next(seq__47689__$1);
var G__47752 = null;
var G__47753 = (0);
var G__47754 = (0);
seq__47689 = G__47751;
chunk__47691 = G__47752;
count__47692 = G__47753;
i__47693 = G__47754;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
