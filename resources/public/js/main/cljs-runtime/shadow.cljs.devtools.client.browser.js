goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___49717 = arguments.length;
var i__5723__auto___49718 = (0);
while(true){
if((i__5723__auto___49718 < len__5722__auto___49717)){
args__5728__auto__.push((arguments[i__5723__auto___49718]));

var G__49719 = (i__5723__auto___49718 + (1));
i__5723__auto___49718 = G__49719;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49274){
var G__49275 = cljs.core.first(seq49274);
var seq49274__$1 = cljs.core.next(seq49274);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49275,seq49274__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49279 = cljs.core.seq(sources);
var chunk__49280 = null;
var count__49281 = (0);
var i__49282 = (0);
while(true){
if((i__49282 < count__49281)){
var map__49291 = chunk__49280.cljs$core$IIndexed$_nth$arity$2(null,i__49282);
var map__49291__$1 = cljs.core.__destructure_map(map__49291);
var src = map__49291__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49291__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49292){var e_49720 = e49292;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49720);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49720.message)].join('')));
}

var G__49721 = seq__49279;
var G__49722 = chunk__49280;
var G__49723 = count__49281;
var G__49724 = (i__49282 + (1));
seq__49279 = G__49721;
chunk__49280 = G__49722;
count__49281 = G__49723;
i__49282 = G__49724;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__49279);
if(temp__5816__auto__){
var seq__49279__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49279__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__49279__$1);
var G__49725 = cljs.core.chunk_rest(seq__49279__$1);
var G__49726 = c__5521__auto__;
var G__49727 = cljs.core.count(c__5521__auto__);
var G__49728 = (0);
seq__49279 = G__49725;
chunk__49280 = G__49726;
count__49281 = G__49727;
i__49282 = G__49728;
continue;
} else {
var map__49293 = cljs.core.first(seq__49279__$1);
var map__49293__$1 = cljs.core.__destructure_map(map__49293);
var src = map__49293__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49293__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49293__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49293__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49293__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49294){var e_49733 = e49294;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49733);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49733.message)].join('')));
}

var G__49734 = cljs.core.next(seq__49279__$1);
var G__49735 = null;
var G__49736 = (0);
var G__49737 = (0);
seq__49279 = G__49734;
chunk__49280 = G__49735;
count__49281 = G__49736;
i__49282 = G__49737;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49295 = cljs.core.seq(js_requires);
var chunk__49296 = null;
var count__49297 = (0);
var i__49298 = (0);
while(true){
if((i__49298 < count__49297)){
var js_ns = chunk__49296.cljs$core$IIndexed$_nth$arity$2(null,i__49298);
var require_str_49738 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49738);


var G__49739 = seq__49295;
var G__49740 = chunk__49296;
var G__49741 = count__49297;
var G__49742 = (i__49298 + (1));
seq__49295 = G__49739;
chunk__49296 = G__49740;
count__49297 = G__49741;
i__49298 = G__49742;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__49295);
if(temp__5816__auto__){
var seq__49295__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49295__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__49295__$1);
var G__49743 = cljs.core.chunk_rest(seq__49295__$1);
var G__49744 = c__5521__auto__;
var G__49745 = cljs.core.count(c__5521__auto__);
var G__49746 = (0);
seq__49295 = G__49743;
chunk__49296 = G__49744;
count__49297 = G__49745;
i__49298 = G__49746;
continue;
} else {
var js_ns = cljs.core.first(seq__49295__$1);
var require_str_49747 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49747);


var G__49748 = cljs.core.next(seq__49295__$1);
var G__49749 = null;
var G__49750 = (0);
var G__49751 = (0);
seq__49295 = G__49748;
chunk__49296 = G__49749;
count__49297 = G__49750;
i__49298 = G__49751;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49300){
var map__49301 = p__49300;
var map__49301__$1 = cljs.core.__destructure_map(map__49301);
var msg = map__49301__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49301__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49301__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5476__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49302(s__49303){
return (new cljs.core.LazySeq(null,(function (){
var s__49303__$1 = s__49303;
while(true){
var temp__5816__auto__ = cljs.core.seq(s__49303__$1);
if(temp__5816__auto__){
var xs__6374__auto__ = temp__5816__auto__;
var map__49308 = cljs.core.first(xs__6374__auto__);
var map__49308__$1 = cljs.core.__destructure_map(map__49308);
var src = map__49308__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49308__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49308__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5472__auto__ = ((function (s__49303__$1,map__49308,map__49308__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__49301,map__49301__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49302_$_iter__49304(s__49305){
return (new cljs.core.LazySeq(null,((function (s__49303__$1,map__49308,map__49308__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__49301,map__49301__$1,msg,info,reload_info){
return (function (){
var s__49305__$1 = s__49305;
while(true){
var temp__5816__auto____$1 = cljs.core.seq(s__49305__$1);
if(temp__5816__auto____$1){
var s__49305__$2 = temp__5816__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49305__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__49305__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__49307 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__49306 = (0);
while(true){
if((i__49306 < size__5475__auto__)){
var warning = cljs.core._nth(c__5474__auto__,i__49306);
cljs.core.chunk_append(b__49307,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49752 = (i__49306 + (1));
i__49306 = G__49752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49307),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49302_$_iter__49304(cljs.core.chunk_rest(s__49305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49307),null);
}
} else {
var warning = cljs.core.first(s__49305__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49302_$_iter__49304(cljs.core.rest(s__49305__$2)));
}
} else {
return null;
}
break;
}
});})(s__49303__$1,map__49308,map__49308__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__49301,map__49301__$1,msg,info,reload_info))
,null,null));
});})(s__49303__$1,map__49308,map__49308__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__49301,map__49301__$1,msg,info,reload_info))
;
var fs__5473__auto__ = cljs.core.seq(iterys__5472__auto__(warnings));
if(fs__5473__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5473__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49302(cljs.core.rest(s__49303__$1)));
} else {
var G__49753 = cljs.core.rest(s__49303__$1);
s__49303__$1 = G__49753;
continue;
}
} else {
var G__49754 = cljs.core.rest(s__49303__$1);
s__49303__$1 = G__49754;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__49310_49755 = cljs.core.seq(warnings);
var chunk__49311_49756 = null;
var count__49312_49757 = (0);
var i__49313_49758 = (0);
while(true){
if((i__49313_49758 < count__49312_49757)){
var map__49316_49759 = chunk__49311_49756.cljs$core$IIndexed$_nth$arity$2(null,i__49313_49758);
var map__49316_49760__$1 = cljs.core.__destructure_map(map__49316_49759);
var w_49761 = map__49316_49760__$1;
var msg_49762__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49316_49760__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49316_49760__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49316_49760__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49316_49760__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49765)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49763),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49764),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49762__$1)].join(''));


var G__49768 = seq__49310_49755;
var G__49769 = chunk__49311_49756;
var G__49770 = count__49312_49757;
var G__49771 = (i__49313_49758 + (1));
seq__49310_49755 = G__49768;
chunk__49311_49756 = G__49769;
count__49312_49757 = G__49770;
i__49313_49758 = G__49771;
continue;
} else {
var temp__5816__auto___49772 = cljs.core.seq(seq__49310_49755);
if(temp__5816__auto___49772){
var seq__49310_49773__$1 = temp__5816__auto___49772;
if(cljs.core.chunked_seq_QMARK_(seq__49310_49773__$1)){
var c__5521__auto___49774 = cljs.core.chunk_first(seq__49310_49773__$1);
var G__49775 = cljs.core.chunk_rest(seq__49310_49773__$1);
var G__49776 = c__5521__auto___49774;
var G__49777 = cljs.core.count(c__5521__auto___49774);
var G__49778 = (0);
seq__49310_49755 = G__49775;
chunk__49311_49756 = G__49776;
count__49312_49757 = G__49777;
i__49313_49758 = G__49778;
continue;
} else {
var map__49317_49779 = cljs.core.first(seq__49310_49773__$1);
var map__49317_49780__$1 = cljs.core.__destructure_map(map__49317_49779);
var w_49781 = map__49317_49780__$1;
var msg_49782__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317_49780__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317_49780__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317_49780__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317_49780__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49785)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49783),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49784),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49782__$1)].join(''));


var G__49786 = cljs.core.next(seq__49310_49773__$1);
var G__49787 = null;
var G__49788 = (0);
var G__49789 = (0);
seq__49310_49755 = G__49786;
chunk__49311_49756 = G__49787;
count__49312_49757 = G__49788;
i__49313_49758 = G__49789;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49299_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49299_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4996__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4996__auto____$1){
return new$;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49343){
var map__49344 = p__49343;
var map__49344__$1 = cljs.core.__destructure_map(map__49344);
var msg = map__49344__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49344__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49344__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49345 = cljs.core.seq(updates);
var chunk__49347 = null;
var count__49348 = (0);
var i__49349 = (0);
while(true){
if((i__49349 < count__49348)){
var path = chunk__49347.cljs$core$IIndexed$_nth$arity$2(null,i__49349);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49518_49790 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49522_49791 = null;
var count__49523_49792 = (0);
var i__49524_49793 = (0);
while(true){
if((i__49524_49793 < count__49523_49792)){
var node_49794 = chunk__49522_49791.cljs$core$IIndexed$_nth$arity$2(null,i__49524_49793);
if(cljs.core.not(node_49794.shadow$old)){
var path_match_49795 = shadow.cljs.devtools.client.browser.match_paths(node_49794.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49795)){
var new_link_49796 = (function (){var G__49561 = node_49794.cloneNode(true);
G__49561.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49795),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49561;
})();
(node_49794.shadow$old = true);

(new_link_49796.onload = ((function (seq__49518_49790,chunk__49522_49791,count__49523_49792,i__49524_49793,seq__49345,chunk__49347,count__49348,i__49349,new_link_49796,path_match_49795,node_49794,path,map__49344,map__49344__$1,msg,updates,reload_info){
return (function (e){
var seq__49566_49797 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49568_49798 = null;
var count__49569_49799 = (0);
var i__49570_49800 = (0);
while(true){
if((i__49570_49800 < count__49569_49799)){
var map__49578_49801 = chunk__49568_49798.cljs$core$IIndexed$_nth$arity$2(null,i__49570_49800);
var map__49578_49802__$1 = cljs.core.__destructure_map(map__49578_49801);
var task_49803 = map__49578_49802__$1;
var fn_str_49804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49578_49802__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49578_49802__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49806 = goog.getObjectByName(fn_str_49804,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49805)].join(''));

(fn_obj_49806.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49806.cljs$core$IFn$_invoke$arity$2(path,new_link_49796) : fn_obj_49806.call(null,path,new_link_49796));


var G__49807 = seq__49566_49797;
var G__49808 = chunk__49568_49798;
var G__49809 = count__49569_49799;
var G__49810 = (i__49570_49800 + (1));
seq__49566_49797 = G__49807;
chunk__49568_49798 = G__49808;
count__49569_49799 = G__49809;
i__49570_49800 = G__49810;
continue;
} else {
var temp__5816__auto___49811 = cljs.core.seq(seq__49566_49797);
if(temp__5816__auto___49811){
var seq__49566_49812__$1 = temp__5816__auto___49811;
if(cljs.core.chunked_seq_QMARK_(seq__49566_49812__$1)){
var c__5521__auto___49813 = cljs.core.chunk_first(seq__49566_49812__$1);
var G__49814 = cljs.core.chunk_rest(seq__49566_49812__$1);
var G__49815 = c__5521__auto___49813;
var G__49816 = cljs.core.count(c__5521__auto___49813);
var G__49817 = (0);
seq__49566_49797 = G__49814;
chunk__49568_49798 = G__49815;
count__49569_49799 = G__49816;
i__49570_49800 = G__49817;
continue;
} else {
var map__49579_49818 = cljs.core.first(seq__49566_49812__$1);
var map__49579_49819__$1 = cljs.core.__destructure_map(map__49579_49818);
var task_49820 = map__49579_49819__$1;
var fn_str_49821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49579_49819__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49579_49819__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49823 = goog.getObjectByName(fn_str_49821,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49822)].join(''));

(fn_obj_49823.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49823.cljs$core$IFn$_invoke$arity$2(path,new_link_49796) : fn_obj_49823.call(null,path,new_link_49796));


var G__49824 = cljs.core.next(seq__49566_49812__$1);
var G__49825 = null;
var G__49826 = (0);
var G__49827 = (0);
seq__49566_49797 = G__49824;
chunk__49568_49798 = G__49825;
count__49569_49799 = G__49826;
i__49570_49800 = G__49827;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49794);
});})(seq__49518_49790,chunk__49522_49791,count__49523_49792,i__49524_49793,seq__49345,chunk__49347,count__49348,i__49349,new_link_49796,path_match_49795,node_49794,path,map__49344,map__49344__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49795], 0));

goog.dom.insertSiblingAfter(new_link_49796,node_49794);


var G__49828 = seq__49518_49790;
var G__49829 = chunk__49522_49791;
var G__49830 = count__49523_49792;
var G__49831 = (i__49524_49793 + (1));
seq__49518_49790 = G__49828;
chunk__49522_49791 = G__49829;
count__49523_49792 = G__49830;
i__49524_49793 = G__49831;
continue;
} else {
var G__49832 = seq__49518_49790;
var G__49833 = chunk__49522_49791;
var G__49834 = count__49523_49792;
var G__49835 = (i__49524_49793 + (1));
seq__49518_49790 = G__49832;
chunk__49522_49791 = G__49833;
count__49523_49792 = G__49834;
i__49524_49793 = G__49835;
continue;
}
} else {
var G__49836 = seq__49518_49790;
var G__49837 = chunk__49522_49791;
var G__49838 = count__49523_49792;
var G__49839 = (i__49524_49793 + (1));
seq__49518_49790 = G__49836;
chunk__49522_49791 = G__49837;
count__49523_49792 = G__49838;
i__49524_49793 = G__49839;
continue;
}
} else {
var temp__5816__auto___49840 = cljs.core.seq(seq__49518_49790);
if(temp__5816__auto___49840){
var seq__49518_49841__$1 = temp__5816__auto___49840;
if(cljs.core.chunked_seq_QMARK_(seq__49518_49841__$1)){
var c__5521__auto___49842 = cljs.core.chunk_first(seq__49518_49841__$1);
var G__49843 = cljs.core.chunk_rest(seq__49518_49841__$1);
var G__49844 = c__5521__auto___49842;
var G__49845 = cljs.core.count(c__5521__auto___49842);
var G__49846 = (0);
seq__49518_49790 = G__49843;
chunk__49522_49791 = G__49844;
count__49523_49792 = G__49845;
i__49524_49793 = G__49846;
continue;
} else {
var node_49847 = cljs.core.first(seq__49518_49841__$1);
if(cljs.core.not(node_49847.shadow$old)){
var path_match_49848 = shadow.cljs.devtools.client.browser.match_paths(node_49847.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49848)){
var new_link_49849 = (function (){var G__49581 = node_49847.cloneNode(true);
G__49581.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49848),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49581;
})();
(node_49847.shadow$old = true);

(new_link_49849.onload = ((function (seq__49518_49790,chunk__49522_49791,count__49523_49792,i__49524_49793,seq__49345,chunk__49347,count__49348,i__49349,new_link_49849,path_match_49848,node_49847,seq__49518_49841__$1,temp__5816__auto___49840,path,map__49344,map__49344__$1,msg,updates,reload_info){
return (function (e){
var seq__49584_49850 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49586_49851 = null;
var count__49587_49852 = (0);
var i__49588_49853 = (0);
while(true){
if((i__49588_49853 < count__49587_49852)){
var map__49592_49854 = chunk__49586_49851.cljs$core$IIndexed$_nth$arity$2(null,i__49588_49853);
var map__49592_49855__$1 = cljs.core.__destructure_map(map__49592_49854);
var task_49856 = map__49592_49855__$1;
var fn_str_49857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49592_49855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49592_49855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49859 = goog.getObjectByName(fn_str_49857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49858)].join(''));

(fn_obj_49859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49859.cljs$core$IFn$_invoke$arity$2(path,new_link_49849) : fn_obj_49859.call(null,path,new_link_49849));


var G__49860 = seq__49584_49850;
var G__49861 = chunk__49586_49851;
var G__49862 = count__49587_49852;
var G__49863 = (i__49588_49853 + (1));
seq__49584_49850 = G__49860;
chunk__49586_49851 = G__49861;
count__49587_49852 = G__49862;
i__49588_49853 = G__49863;
continue;
} else {
var temp__5816__auto___49864__$1 = cljs.core.seq(seq__49584_49850);
if(temp__5816__auto___49864__$1){
var seq__49584_49865__$1 = temp__5816__auto___49864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49584_49865__$1)){
var c__5521__auto___49866 = cljs.core.chunk_first(seq__49584_49865__$1);
var G__49867 = cljs.core.chunk_rest(seq__49584_49865__$1);
var G__49868 = c__5521__auto___49866;
var G__49869 = cljs.core.count(c__5521__auto___49866);
var G__49870 = (0);
seq__49584_49850 = G__49867;
chunk__49586_49851 = G__49868;
count__49587_49852 = G__49869;
i__49588_49853 = G__49870;
continue;
} else {
var map__49595_49871 = cljs.core.first(seq__49584_49865__$1);
var map__49595_49872__$1 = cljs.core.__destructure_map(map__49595_49871);
var task_49873 = map__49595_49872__$1;
var fn_str_49874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595_49872__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49595_49872__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49876 = goog.getObjectByName(fn_str_49874,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49875)].join(''));

(fn_obj_49876.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49876.cljs$core$IFn$_invoke$arity$2(path,new_link_49849) : fn_obj_49876.call(null,path,new_link_49849));


var G__49877 = cljs.core.next(seq__49584_49865__$1);
var G__49878 = null;
var G__49879 = (0);
var G__49880 = (0);
seq__49584_49850 = G__49877;
chunk__49586_49851 = G__49878;
count__49587_49852 = G__49879;
i__49588_49853 = G__49880;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49847);
});})(seq__49518_49790,chunk__49522_49791,count__49523_49792,i__49524_49793,seq__49345,chunk__49347,count__49348,i__49349,new_link_49849,path_match_49848,node_49847,seq__49518_49841__$1,temp__5816__auto___49840,path,map__49344,map__49344__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49848], 0));

goog.dom.insertSiblingAfter(new_link_49849,node_49847);


var G__49881 = cljs.core.next(seq__49518_49841__$1);
var G__49882 = null;
var G__49883 = (0);
var G__49884 = (0);
seq__49518_49790 = G__49881;
chunk__49522_49791 = G__49882;
count__49523_49792 = G__49883;
i__49524_49793 = G__49884;
continue;
} else {
var G__49885 = cljs.core.next(seq__49518_49841__$1);
var G__49886 = null;
var G__49887 = (0);
var G__49888 = (0);
seq__49518_49790 = G__49885;
chunk__49522_49791 = G__49886;
count__49523_49792 = G__49887;
i__49524_49793 = G__49888;
continue;
}
} else {
var G__49889 = cljs.core.next(seq__49518_49841__$1);
var G__49890 = null;
var G__49891 = (0);
var G__49892 = (0);
seq__49518_49790 = G__49889;
chunk__49522_49791 = G__49890;
count__49523_49792 = G__49891;
i__49524_49793 = G__49892;
continue;
}
}
} else {
}
}
break;
}


var G__49893 = seq__49345;
var G__49894 = chunk__49347;
var G__49895 = count__49348;
var G__49896 = (i__49349 + (1));
seq__49345 = G__49893;
chunk__49347 = G__49894;
count__49348 = G__49895;
i__49349 = G__49896;
continue;
} else {
var G__49897 = seq__49345;
var G__49898 = chunk__49347;
var G__49899 = count__49348;
var G__49900 = (i__49349 + (1));
seq__49345 = G__49897;
chunk__49347 = G__49898;
count__49348 = G__49899;
i__49349 = G__49900;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__49345);
if(temp__5816__auto__){
var seq__49345__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49345__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__49345__$1);
var G__49901 = cljs.core.chunk_rest(seq__49345__$1);
var G__49902 = c__5521__auto__;
var G__49903 = cljs.core.count(c__5521__auto__);
var G__49904 = (0);
seq__49345 = G__49901;
chunk__49347 = G__49902;
count__49348 = G__49903;
i__49349 = G__49904;
continue;
} else {
var path = cljs.core.first(seq__49345__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49597_49905 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49601_49906 = null;
var count__49602_49907 = (0);
var i__49603_49908 = (0);
while(true){
if((i__49603_49908 < count__49602_49907)){
var node_49909 = chunk__49601_49906.cljs$core$IIndexed$_nth$arity$2(null,i__49603_49908);
if(cljs.core.not(node_49909.shadow$old)){
var path_match_49910 = shadow.cljs.devtools.client.browser.match_paths(node_49909.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49910)){
var new_link_49911 = (function (){var G__49651 = node_49909.cloneNode(true);
G__49651.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49910),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49651;
})();
(node_49909.shadow$old = true);

(new_link_49911.onload = ((function (seq__49597_49905,chunk__49601_49906,count__49602_49907,i__49603_49908,seq__49345,chunk__49347,count__49348,i__49349,new_link_49911,path_match_49910,node_49909,path,seq__49345__$1,temp__5816__auto__,map__49344,map__49344__$1,msg,updates,reload_info){
return (function (e){
var seq__49652_49912 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49654_49913 = null;
var count__49655_49914 = (0);
var i__49656_49915 = (0);
while(true){
if((i__49656_49915 < count__49655_49914)){
var map__49660_49916 = chunk__49654_49913.cljs$core$IIndexed$_nth$arity$2(null,i__49656_49915);
var map__49660_49917__$1 = cljs.core.__destructure_map(map__49660_49916);
var task_49918 = map__49660_49917__$1;
var fn_str_49919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49660_49917__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49660_49917__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49921 = goog.getObjectByName(fn_str_49919,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49920)].join(''));

(fn_obj_49921.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49921.cljs$core$IFn$_invoke$arity$2(path,new_link_49911) : fn_obj_49921.call(null,path,new_link_49911));


var G__49922 = seq__49652_49912;
var G__49923 = chunk__49654_49913;
var G__49924 = count__49655_49914;
var G__49925 = (i__49656_49915 + (1));
seq__49652_49912 = G__49922;
chunk__49654_49913 = G__49923;
count__49655_49914 = G__49924;
i__49656_49915 = G__49925;
continue;
} else {
var temp__5816__auto___49926__$1 = cljs.core.seq(seq__49652_49912);
if(temp__5816__auto___49926__$1){
var seq__49652_49927__$1 = temp__5816__auto___49926__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49652_49927__$1)){
var c__5521__auto___49928 = cljs.core.chunk_first(seq__49652_49927__$1);
var G__49929 = cljs.core.chunk_rest(seq__49652_49927__$1);
var G__49930 = c__5521__auto___49928;
var G__49931 = cljs.core.count(c__5521__auto___49928);
var G__49932 = (0);
seq__49652_49912 = G__49929;
chunk__49654_49913 = G__49930;
count__49655_49914 = G__49931;
i__49656_49915 = G__49932;
continue;
} else {
var map__49661_49933 = cljs.core.first(seq__49652_49927__$1);
var map__49661_49934__$1 = cljs.core.__destructure_map(map__49661_49933);
var task_49935 = map__49661_49934__$1;
var fn_str_49936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661_49934__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661_49934__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49938 = goog.getObjectByName(fn_str_49936,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49937)].join(''));

(fn_obj_49938.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49938.cljs$core$IFn$_invoke$arity$2(path,new_link_49911) : fn_obj_49938.call(null,path,new_link_49911));


var G__49939 = cljs.core.next(seq__49652_49927__$1);
var G__49940 = null;
var G__49941 = (0);
var G__49942 = (0);
seq__49652_49912 = G__49939;
chunk__49654_49913 = G__49940;
count__49655_49914 = G__49941;
i__49656_49915 = G__49942;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49909);
});})(seq__49597_49905,chunk__49601_49906,count__49602_49907,i__49603_49908,seq__49345,chunk__49347,count__49348,i__49349,new_link_49911,path_match_49910,node_49909,path,seq__49345__$1,temp__5816__auto__,map__49344,map__49344__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49910], 0));

goog.dom.insertSiblingAfter(new_link_49911,node_49909);


var G__49943 = seq__49597_49905;
var G__49944 = chunk__49601_49906;
var G__49945 = count__49602_49907;
var G__49946 = (i__49603_49908 + (1));
seq__49597_49905 = G__49943;
chunk__49601_49906 = G__49944;
count__49602_49907 = G__49945;
i__49603_49908 = G__49946;
continue;
} else {
var G__49947 = seq__49597_49905;
var G__49948 = chunk__49601_49906;
var G__49949 = count__49602_49907;
var G__49950 = (i__49603_49908 + (1));
seq__49597_49905 = G__49947;
chunk__49601_49906 = G__49948;
count__49602_49907 = G__49949;
i__49603_49908 = G__49950;
continue;
}
} else {
var G__49951 = seq__49597_49905;
var G__49952 = chunk__49601_49906;
var G__49953 = count__49602_49907;
var G__49954 = (i__49603_49908 + (1));
seq__49597_49905 = G__49951;
chunk__49601_49906 = G__49952;
count__49602_49907 = G__49953;
i__49603_49908 = G__49954;
continue;
}
} else {
var temp__5816__auto___49955__$1 = cljs.core.seq(seq__49597_49905);
if(temp__5816__auto___49955__$1){
var seq__49597_49956__$1 = temp__5816__auto___49955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49597_49956__$1)){
var c__5521__auto___49957 = cljs.core.chunk_first(seq__49597_49956__$1);
var G__49958 = cljs.core.chunk_rest(seq__49597_49956__$1);
var G__49959 = c__5521__auto___49957;
var G__49960 = cljs.core.count(c__5521__auto___49957);
var G__49961 = (0);
seq__49597_49905 = G__49958;
chunk__49601_49906 = G__49959;
count__49602_49907 = G__49960;
i__49603_49908 = G__49961;
continue;
} else {
var node_49962 = cljs.core.first(seq__49597_49956__$1);
if(cljs.core.not(node_49962.shadow$old)){
var path_match_49963 = shadow.cljs.devtools.client.browser.match_paths(node_49962.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49963)){
var new_link_49964 = (function (){var G__49663 = node_49962.cloneNode(true);
G__49663.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49963),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49663;
})();
(node_49962.shadow$old = true);

(new_link_49964.onload = ((function (seq__49597_49905,chunk__49601_49906,count__49602_49907,i__49603_49908,seq__49345,chunk__49347,count__49348,i__49349,new_link_49964,path_match_49963,node_49962,seq__49597_49956__$1,temp__5816__auto___49955__$1,path,seq__49345__$1,temp__5816__auto__,map__49344,map__49344__$1,msg,updates,reload_info){
return (function (e){
var seq__49665_49965 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49667_49966 = null;
var count__49668_49967 = (0);
var i__49669_49968 = (0);
while(true){
if((i__49669_49968 < count__49668_49967)){
var map__49677_49969 = chunk__49667_49966.cljs$core$IIndexed$_nth$arity$2(null,i__49669_49968);
var map__49677_49970__$1 = cljs.core.__destructure_map(map__49677_49969);
var task_49971 = map__49677_49970__$1;
var fn_str_49972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49677_49970__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49677_49970__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49974 = goog.getObjectByName(fn_str_49972,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49973)].join(''));

(fn_obj_49974.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49974.cljs$core$IFn$_invoke$arity$2(path,new_link_49964) : fn_obj_49974.call(null,path,new_link_49964));


var G__49975 = seq__49665_49965;
var G__49976 = chunk__49667_49966;
var G__49977 = count__49668_49967;
var G__49978 = (i__49669_49968 + (1));
seq__49665_49965 = G__49975;
chunk__49667_49966 = G__49976;
count__49668_49967 = G__49977;
i__49669_49968 = G__49978;
continue;
} else {
var temp__5816__auto___49979__$2 = cljs.core.seq(seq__49665_49965);
if(temp__5816__auto___49979__$2){
var seq__49665_49980__$1 = temp__5816__auto___49979__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49665_49980__$1)){
var c__5521__auto___49981 = cljs.core.chunk_first(seq__49665_49980__$1);
var G__49982 = cljs.core.chunk_rest(seq__49665_49980__$1);
var G__49983 = c__5521__auto___49981;
var G__49984 = cljs.core.count(c__5521__auto___49981);
var G__49985 = (0);
seq__49665_49965 = G__49982;
chunk__49667_49966 = G__49983;
count__49668_49967 = G__49984;
i__49669_49968 = G__49985;
continue;
} else {
var map__49678_49986 = cljs.core.first(seq__49665_49980__$1);
var map__49678_49987__$1 = cljs.core.__destructure_map(map__49678_49986);
var task_49988 = map__49678_49987__$1;
var fn_str_49989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678_49987__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678_49987__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49991 = goog.getObjectByName(fn_str_49989,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49990)].join(''));

(fn_obj_49991.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49991.cljs$core$IFn$_invoke$arity$2(path,new_link_49964) : fn_obj_49991.call(null,path,new_link_49964));


var G__49992 = cljs.core.next(seq__49665_49980__$1);
var G__49993 = null;
var G__49994 = (0);
var G__49995 = (0);
seq__49665_49965 = G__49992;
chunk__49667_49966 = G__49993;
count__49668_49967 = G__49994;
i__49669_49968 = G__49995;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49962);
});})(seq__49597_49905,chunk__49601_49906,count__49602_49907,i__49603_49908,seq__49345,chunk__49347,count__49348,i__49349,new_link_49964,path_match_49963,node_49962,seq__49597_49956__$1,temp__5816__auto___49955__$1,path,seq__49345__$1,temp__5816__auto__,map__49344,map__49344__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49963], 0));

goog.dom.insertSiblingAfter(new_link_49964,node_49962);


var G__49997 = cljs.core.next(seq__49597_49956__$1);
var G__49998 = null;
var G__49999 = (0);
var G__50000 = (0);
seq__49597_49905 = G__49997;
chunk__49601_49906 = G__49998;
count__49602_49907 = G__49999;
i__49603_49908 = G__50000;
continue;
} else {
var G__50002 = cljs.core.next(seq__49597_49956__$1);
var G__50003 = null;
var G__50004 = (0);
var G__50005 = (0);
seq__49597_49905 = G__50002;
chunk__49601_49906 = G__50003;
count__49602_49907 = G__50004;
i__49603_49908 = G__50005;
continue;
}
} else {
var G__50006 = cljs.core.next(seq__49597_49956__$1);
var G__50007 = null;
var G__50008 = (0);
var G__50009 = (0);
seq__49597_49905 = G__50006;
chunk__49601_49906 = G__50007;
count__49602_49907 = G__50008;
i__49603_49908 = G__50009;
continue;
}
}
} else {
}
}
break;
}


var G__50010 = cljs.core.next(seq__49345__$1);
var G__50011 = null;
var G__50012 = (0);
var G__50013 = (0);
seq__49345 = G__50010;
chunk__49347 = G__50011;
count__49348 = G__50012;
i__49349 = G__50013;
continue;
} else {
var G__50014 = cljs.core.next(seq__49345__$1);
var G__50015 = null;
var G__50016 = (0);
var G__50017 = (0);
seq__49345 = G__50014;
chunk__49347 = G__50015;
count__49348 = G__50016;
i__49349 = G__50017;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__49679){
var map__49680 = p__49679;
var map__49680__$1 = cljs.core.__destructure_map(map__49680);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49680__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49682,done,error){
var map__49683 = p__49682;
var map__49683__$1 = cljs.core.__destructure_map(map__49683);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49683__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49685,done,error){
var map__49686 = p__49685;
var map__49686__$1 = cljs.core.__destructure_map(map__49686);
var msg = map__49686__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49686__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49686__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49686__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49691){
var map__49692 = p__49691;
var map__49692__$1 = cljs.core.__destructure_map(map__49692);
var src = map__49692__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4996__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4996__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49693 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49693) : done.call(null,G__49693));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49694){
var map__49695 = p__49694;
var map__49695__$1 = cljs.core.__destructure_map(map__49695);
var msg__$1 = map__49695__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49695__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49696){var ex = e49696;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49697){
var map__49698 = p__49697;
var map__49698__$1 = cljs.core.__destructure_map(map__49698);
var env = map__49698__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49698__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49703){
var map__49704 = p__49703;
var map__49704__$1 = cljs.core.__destructure_map(map__49704);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49704__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49704__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__49709){
var map__49710 = p__49709;
var map__49710__$1 = cljs.core.__destructure_map(map__49710);
var svc = map__49710__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49710__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
