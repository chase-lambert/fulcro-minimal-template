goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__32268 = libspec;
var seq__32269 = cljs.core.seq(vec__32268);
var first__32270 = cljs.core.first(seq__32269);
var seq__32269__$1 = cljs.core.next(seq__32269);
var lib = first__32270;
var spec = seq__32269__$1;
var libspec__$1 = vec__32268;
var vec__32271 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32271,(0),null);
var vec__32274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32271,(1),null);
var seq__32275 = cljs.core.seq(vec__32274);
var first__32276 = cljs.core.first(seq__32275);
var seq__32275__$1 = cljs.core.next(seq__32275);
var _ = first__32276;
var first__32276__$1 = cljs.core.first(seq__32275__$1);
var seq__32275__$2 = cljs.core.next(seq__32275__$1);
var alias = first__32276__$1;
var post_spec = seq__32275__$2;
var post = vec__32274;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__32277 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32277,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__32277;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__32278 = cljs.core.seq(new_as_aliases);
var chunk__32279 = null;
var count__32280 = (0);
var i__32281 = (0);
while(true){
if((i__32281 < count__32280)){
var vec__32297 = chunk__32279.cljs$core$IIndexed$_nth$arity$2(null,i__32281);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32297,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32297,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__32493 = seq__32278;
var G__32494 = chunk__32279;
var G__32495 = count__32280;
var G__32496 = (i__32281 + (1));
seq__32278 = G__32493;
chunk__32279 = G__32494;
count__32280 = G__32495;
i__32281 = G__32496;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__32278);
if(temp__5816__auto__){
var seq__32278__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32278__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__32278__$1);
var G__32497 = cljs.core.chunk_rest(seq__32278__$1);
var G__32498 = c__5521__auto__;
var G__32499 = cljs.core.count(c__5521__auto__);
var G__32500 = (0);
seq__32278 = G__32497;
chunk__32279 = G__32498;
count__32280 = G__32499;
i__32281 = G__32500;
continue;
} else {
var vec__32467 = cljs.core.first(seq__32278__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32467,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32467,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__32501 = cljs.core.next(seq__32278__$1);
var G__32502 = null;
var G__32503 = (0);
var G__32504 = (0);
seq__32278 = G__32501;
chunk__32279 = G__32502;
count__32280 = G__32503;
i__32281 = G__32504;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__32472 = arguments.length;
switch (G__32472) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__32474 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__32474__$1 = cljs.core.__destructure_map(map__32474);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32474__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32474__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__32475 = ret__$1;
var G__32475__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32475,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__32475);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32475__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__32475__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__32477,p__32478){
var map__32479 = p__32477;
var map__32479__$1 = cljs.core.__destructure_map(map__32479);
var ret__$1 = map__32479__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32479__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__32480 = p__32478;
var seq__32481 = cljs.core.seq(vec__32480);
var first__32482 = cljs.core.first(seq__32481);
var seq__32481__$1 = cljs.core.next(seq__32481);
var spec_key = first__32482;
var libspecs = seq__32481__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__32489 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__32489__$1 = cljs.core.__destructure_map(map__32489);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__32490 = ret__$1;
var G__32490__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32490,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__32490);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32490__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__32490__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
