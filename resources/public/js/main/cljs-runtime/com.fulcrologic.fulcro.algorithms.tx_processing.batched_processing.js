goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing');

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remove_send_BANG_(p__51290,remote,txn_id,ele_idx){
var map__51291 = p__51290;
var map__51291__$1 = cljs.core.__destructure_map(map__51291);
var app__$1 = map__51291__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51292 = cljs.core.deref(runtime_atom);
var map__51292__$1 = cljs.core.__destructure_map(map__51292);
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51292__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var old_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote);
var queue = cljs.core.filterv((function (p__51293){
var map__51294 = p__51293;
var map__51294__$1 = cljs.core.__destructure_map(map__51294);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51294__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),queue);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remove_send_BANG_;
/**
 * Returns the remotes map from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remotes(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517)], null);

return new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
});
/**
 * Returns a set of the names of the remotes from an app
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$app__GT_remote_names(app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

return cljs.core.set(cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)))));
});
/**
 * Splits the given send queue into two send queues:
 *   [parallel-items sequential-items].
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$extract_parallel(sends){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51295){
return cljs.core.vector_QMARK_(G__51295);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rest","rest",-1241696419)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null))], null);

var parallel_QMARK_ = (function (p__51297){
var map__51298 = p__51297;
var map__51298__$1 = cljs.core.__destructure_map(map__51298);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
return cljs.core.boolean$((function (){var or__4998__auto__ = new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535).cljs$core$IFn$_invoke$arity$1(options);
}
})());
});
var map__51296 = cljs.core.group_by(parallel_QMARK_,sends);
var map__51296__$1 = cljs.core.__destructure_map(map__51296);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51296__$1,true);
var sequential = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51296__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(parallel),cljs.core.vec(sequential)], null);
});
/**
 * Check if the given `test` predicate is true for an AST node or for all the immediate children of an AST tree.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$every_ast_QMARK_(ast_node_or_tree,test){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),cljs.core.fn_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree))){
return cljs.core.every_QMARK_(test,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast_node_or_tree));
} else {
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(ast_node_or_tree) : test.call(null,ast_node_or_tree));
}
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__51299_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51299_SHARP_));
}));
});
/**
 * Returns true if the given AST node or tree represents a mutation or sequence of mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$query_ast_QMARK_(ast_node_or_tree){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.every_ast_QMARK_(ast_node_or_tree,(function (p1__51300_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51300_SHARP_));
}));
});
/**
 * Sort function on a send queue. Leaves any active nodes in front, and sorts the remainder of the queue so that writes
 *   appear before reads, without changing the relative order in blocks of reads/writes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$sort_queue_writes_before_reads(send_queue){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null);

var vec__51301 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var active_queue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51301,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51301,(1),null);
var id_sequence = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(n));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),send_queue__$1));
var clusters = cljs.core.group_by(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.vec(send_queue__$1));
var map__51304 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,id){
var vec__51305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clusters,id);
var seq__51306 = cljs.core.seq(vec__51305);
var first__51307 = cljs.core.first(seq__51306);
var seq__51306__$1 = cljs.core.next(seq__51306);
var map__51308 = first__51307;
var map__51308__$1 = cljs.core.__destructure_map(map__51308);
var n = map__51308__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51308__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var _ = seq__51306__$1;
var cluster = vec__51305;
if((ast == null)){
return result;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.query_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.into,cluster);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_ast_QMARK_(ast))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.into,cluster);
} else {
return result;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"writes","writes",-102226269),cljs.core.PersistentVector.EMPTY], null),id_sequence);
var map__51304__$1 = cljs.core.__destructure_map(map__51304);
var reads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51304__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var writes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51304__$1,new cljs.core.Keyword(null,"writes","writes",-102226269));
var send_queue__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(active_queue,writes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reads], 0)));
return send_queue__$2;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$top_keys(p__51309){
var map__51310 = p__51309;
var map__51310__$1 = cljs.core.__destructure_map(map__51310);
var ast = map__51310__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("edn-query-language.ast","key","edn-query-language.ast/key",973476796)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51311){
return cljs.core.coll_QMARK_(G__51311);
})], null),null)], null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),children);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$create_combined_node(app__$1,remote_name,p__51312){
var vec__51313 = p__51312;
var leader = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51313,(0),null);
var to_send = vec__51313;
var tx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__51316){
var map__51318 = p__51316;
var map__51318__$1 = cljs.core.__destructure_map(map__51318);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51318__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var tx = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,tx);
}),cljs.core.PersistentVector.EMPTY,to_send);
var ast = edn_query_language.core.query__GT_ast(tx);
var options = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(leader);
var combined_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var combined_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var combined_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),combined_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),combined_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var seq__51321 = cljs.core.seq(to_send);
var chunk__51322 = null;
var count__51323 = (0);
var i__51324 = (0);
while(true){
if((i__51324 < count__51323)){
var map__51327 = chunk__51322.cljs$core$IIndexed$_nth$arity$2(null,i__51324);
var map__51327__$1 = cljs.core.__destructure_map(map__51327);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51327__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__51659 = seq__51321;
var G__51660 = chunk__51322;
var G__51661 = count__51323;
var G__51662 = (i__51324 + (1));
seq__51321 = G__51659;
chunk__51322 = G__51660;
count__51323 = G__51661;
i__51324 = G__51662;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__51321);
if(temp__5816__auto__){
var seq__51321__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51321__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__51321__$1);
var G__51663 = cljs.core.chunk_rest(seq__51321__$1);
var G__51664 = c__5521__auto__;
var G__51665 = cljs.core.count(c__5521__auto__);
var G__51666 = (0);
seq__51321 = G__51663;
chunk__51322 = G__51664;
count__51323 = G__51665;
i__51324 = G__51666;
continue;
} else {
var map__51328 = cljs.core.first(seq__51321__$1);
var map__51328__$1 = cljs.core.__destructure_map(map__51328);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51328__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
if(cljs.core.truth_(update_handler)){
(update_handler.cljs$core$IFn$_invoke$arity$1 ? update_handler.cljs$core$IFn$_invoke$arity$1(combined_result) : update_handler.call(null,combined_result));
} else {
}


var G__51667 = cljs.core.next(seq__51321__$1);
var G__51668 = null;
var G__51669 = (0);
var G__51670 = (0);
seq__51321 = G__51667;
chunk__51322 = G__51668;
count__51323 = G__51669;
i__51324 = G__51670;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__51329){
var map__51330 = p__51329;
var map__51330__$1 = cljs.core.__destructure_map(map__51330);
var combined_result = map__51330__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,combined_node_id,combined_node_idx) : remove_BANG_.call(null,app__$1,remote_name,combined_node_id,combined_node_idx));

var seq__51332 = cljs.core.seq(to_send);
var chunk__51333 = null;
var count__51334 = (0);
var i__51335 = (0);
while(true){
if((i__51335 < count__51334)){
var map__51344 = chunk__51333.cljs$core$IIndexed$_nth$arity$2(null,i__51335);
var map__51344__$1 = cljs.core.__destructure_map(map__51344);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51344__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51344__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_51671 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_51672 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_51671);
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var map__51346_51673 = result_51672;
var map__51346_51674__$1 = cljs.core.__destructure_map(map__51346_51673);
var status_code_51675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51346_51674__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_51676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51346_51674__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_51675)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_51676__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_51675));
}
}catch (e51345){var e_51677 = e51345;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_51672) : result_handler.call(null,result_51672));


var G__51678 = seq__51332;
var G__51679 = chunk__51333;
var G__51680 = count__51334;
var G__51681 = (i__51335 + (1));
seq__51332 = G__51678;
chunk__51333 = G__51679;
count__51334 = G__51680;
i__51335 = G__51681;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__51332);
if(temp__5816__auto__){
var seq__51332__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51332__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__51332__$1);
var G__51682 = cljs.core.chunk_rest(seq__51332__$1);
var G__51683 = c__5521__auto__;
var G__51684 = cljs.core.count(c__5521__auto__);
var G__51685 = (0);
seq__51332 = G__51682;
chunk__51333 = G__51683;
count__51334 = G__51684;
i__51335 = G__51685;
continue;
} else {
var map__51347 = cljs.core.first(seq__51332__$1);
var map__51347__$1 = cljs.core.__destructure_map(map__51347);
var ast__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51347__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var new_body_51686 = ((cljs.core.map_QMARK_(body))?cljs.core.select_keys(body,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.top_keys(ast__$1)):body);
var result_51687 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(combined_result,new cljs.core.Keyword(null,"body","body",-2049205669),new_body_51686);
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var map__51352_51688 = result_51687;
var map__51352_51689__$1 = cljs.core.__destructure_map(map__51352_51688);
var status_code_51690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352_51689__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_51691__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51352_51689__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_51690)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote_name,combined_node_id,body_51691__$1);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,combined_node_id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_51690));
}
}catch (e51351){var e_51692 = e51351;
}} else {
}

(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(result_51687) : result_handler.call(null,result_51687));


var G__51693 = cljs.core.next(seq__51332__$1);
var G__51694 = null;
var G__51695 = (0);
var G__51696 = (0);
seq__51332 = G__51693;
chunk__51333 = G__51694;
count__51334 = G__51695;
i__51335 = G__51696;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
return combined_node;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$node_abort_id(n){
var or__4998__auto__ = (function (){var G__51354 = n;
var G__51354__$1 = (((G__51354 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__51354));
if((G__51354__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"abort-id","abort-id",1559937819).cljs$core$IFn$_invoke$arity$1(G__51354__$1);
}
})();
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var G__51359 = n;
var G__51359__$1 = (((G__51359 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(G__51359));
if((G__51359__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","abort-id","com.fulcrologic.fulcro.algorithms.tx-processing/abort-id",2068829184).cljs$core$IFn$_invoke$arity$1(G__51359__$1);
}
}
});
/**
 * Returns true if the given transaction node represents one or more mutations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$mutation_node_QMARK_(p__51361){
var map__51362 = p__51361;
var map__51362__$1 = cljs.core.__destructure_map(map__51362);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51362__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return ((cljs.core.map_QMARK_(ast)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast))) || (cljs.core.boolean$(cljs.core.some((function (p1__51360_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51360_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)))))));
});
/**
 * Returns true when ALL of the ::txn/send-node entries in `to-send` can be batched into an existing batch.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batchable_QMARK_(to_send,leader){
var abort_id = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(leader);
return cljs.core.boolean$(((cljs.core.seq(to_send)) && (((cljs.core.every_QMARK_((function (n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(abort_id,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(n));
}),to_send)) && (cljs.core.not(cljs.core.some(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_,to_send)))))));
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$batch_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51371){
return cljs.core.map_QMARK_(G__51371);
}),(function (G__51371){
return cljs.core.contains_QMARK_(G__51371,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__51371){
return ((cljs.core.map_QMARK_(G__51371)) && (cljs.core.contains_QMARK_(G__51371,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

var prime_leader = cljs.core.first(send_queue);
var map__51380 = cljs.core.group_by((function (n){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batchable_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prime_leader], null),n);
}),send_queue);
var map__51380__$1 = cljs.core.__destructure_map(map__51380);
var prime_candidates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51380__$1,true);
var to_defer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51380__$1,false);
var map__51381 = (function (){var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remainder","remainder",1046186872),to_defer], null);
var queue = prime_candidates;
while(true){
var leader = cljs.core.first(queue);
var vec__51387 = cljs.core.split_with(((function (result,queue,leader,prime_leader,map__51380,map__51380__$1,prime_candidates,to_defer){
return (function (p1__51366_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(leader),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__51366_SHARP_));
});})(result,queue,leader,prime_leader,map__51380,map__51380__$1,prime_candidates,to_defer))
,queue);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51387,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51387,(1),null);
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app__$1,remote_name,to_send);
var new_result = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"batch","batch",-662921200),cljs.core.conj,combined_node);
if(cljs.core.seq(remainder)){
var G__51697 = new_result;
var G__51698 = remainder;
result = G__51697;
queue = G__51698;
continue;
} else {
return new_result;
}
break;
}
})();
var map__51381__$1 = cljs.core.__destructure_map(map__51381);
var batch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51381__$1,new cljs.core.Keyword(null,"batch","batch",-662921200));
var remainder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51381__$1,new cljs.core.Keyword(null,"remainder","remainder",1046186872));
var batch_node_id = com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0();
var batch_node_idx = (0);
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var batch_node = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),batch_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),batch_node_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","raw-body","com.fulcrologic.fulcro.algorithms.tx-processing/raw-body",-819595969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__51393){
var map__51394 = p__51393;
var map__51394__$1 = cljs.core.__destructure_map(map__51394);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51394__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373));
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(ast);
}),batch)], null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),(function (){var or__4998__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(prime_leader);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299),batch,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),(function (combined_result){
var G__51396 = cljs.core.first(batch);
var map__51397 = G__51396;
var map__51397__$1 = cljs.core.__destructure_map(map__51397);
var update_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51397__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(combined_result);
var more_result = cljs.core.next(combined_result);
var G__51396__$1 = G__51396;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__51400 = G__51396__$1;
var map__51400__$1 = cljs.core.__destructure_map(map__51400);
var update_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
if(cljs.core.truth_(update_handler__$1)){
(update_handler__$1.cljs$core$IFn$_invoke$arity$1 ? update_handler__$1.cljs$core$IFn$_invoke$arity$1(result__$2) : update_handler__$1.call(null,result__$2));
} else {
}

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__51699 = cljs.core.first(more_batch__$2);
var G__51700 = cljs.core.next(more_batch__$2);
var G__51701 = cljs.core.first(more_result__$2);
var G__51702 = cljs.core.next(more_result__$2);
G__51396__$1 = G__51699;
more_batch__$1 = G__51700;
result__$1 = G__51701;
more_result__$1 = G__51702;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),(function (p__51402){
var map__51404 = p__51402;
var map__51404__$1 = cljs.core.__destructure_map(map__51404);
var batch_result = map__51404__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote_name,batch_node_id,batch_node_idx) : remove_BANG_.call(null,app__$1,remote_name,batch_node_id,batch_node_idx));

var G__51406 = cljs.core.first(batch);
var map__51407 = G__51406;
var map__51407__$1 = cljs.core.__destructure_map(map__51407);
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51407__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch = cljs.core.next(batch);
var result = cljs.core.first(body);
var more_result = cljs.core.next(body);
var G__51406__$1 = G__51406;
var more_batch__$1 = more_batch;
var result__$1 = result;
var more_result__$1 = more_result;
while(true){
var map__51412 = G__51406__$1;
var map__51412__$1 = cljs.core.__destructure_map(map__51412);
var result_handler__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51412__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var more_batch__$2 = more_batch__$1;
var result__$2 = result__$1;
var more_result__$2 = more_result__$1;
var G__51414_51705 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(batch_result,new cljs.core.Keyword(null,"body","body",-2049205669),result__$2);
(result_handler__$1.cljs$core$IFn$_invoke$arity$1 ? result_handler__$1.cljs$core$IFn$_invoke$arity$1(G__51414_51705) : result_handler__$1.call(null,G__51414_51705));

if(((cljs.core.seq(more_batch__$2)) && (cljs.core.seq(more_result__$2)))){
var G__51706 = cljs.core.first(more_batch__$2);
var G__51707 = cljs.core.next(more_batch__$2);
var G__51708 = cljs.core.first(more_result__$2);
var G__51709 = cljs.core.next(more_result__$2);
G__51406__$1 = G__51706;
more_batch__$1 = G__51707;
result__$1 = G__51708;
more_result__$1 = G__51709;
continue;
} else {
return null;
}
break;
}
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),true], null);
if((cljs.core.count(batch) > (1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,212,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Batched:",cljs.core.count(batch)], null);
}),null)),null,-1463222722,null);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),batch_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [batch_node], null),remainder)], null);
});
/**
 * Takes a send queue and returns a map containing a new combined send node that can act as a single network request,
 *   along with the updated send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$combine_sends(app__$1,remote_name,send_queue){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51419){
return cljs.core.map_QMARK_(G__51419);
}),(function (G__51419){
return cljs.core.contains_QMARK_(G__51419,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
})], null),(function (G__51419){
return ((cljs.core.map_QMARK_(G__51419)) && (cljs.core.contains_QMARK_(G__51419,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157)], null)]))], null);

if(cljs.core.seq(send_queue)){
var map__51420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
var map__51420__$1 = cljs.core.__destructure_map(map__51420);
var supports_raw_body_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51420__$1,new cljs.core.Keyword(null,"supports-raw-body?","supports-raw-body?",132893061));
var vec__51421 = cljs.core.split_with(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),send_queue);
var _active_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51421,(0),null);
var send_queue__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51421,(1),null);
var send_queue__$2 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.sort_queue_writes_before_reads(cljs.core.vec(send_queue__$1));
var id_to_send = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.first(send_queue__$2));
var vec__51424 = cljs.core.split_with((function (p1__51416_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_to_send,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(p1__51416_SHARP_));
}),send_queue__$2);
var to_send = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51424,(0),null);
var to_defer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51424,(1),null);
var leading_mutation_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.mutation_node_QMARK_(cljs.core.first(to_send));
var batched_reads_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692),remote_name], null),false);
var batch_QMARK_ = (function (){var and__4996__auto__ = batched_reads_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return supports_raw_body_QMARK_;
} else {
return and__4996__auto__;
}
})();
if(((leading_mutation_QMARK_) || (cljs.core.not(batch_QMARK_)))){
if(cljs.core.seq(to_send)){
var combined_node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.create_combined_node(app__$1,remote_name,to_send);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),combined_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combined_node], null),to_defer)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),send_queue__$2], null);
}
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.batch_sends(app__$1,remote_name,send_queue__$2);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421),cljs.core.PersistentVector.EMPTY], null);
}
});
/**
 * Process the send against the user-defined remote. Catches exceptions and calls error handler with status code 500
 *   if the remote itself throws exceptions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$net_send_BANG_(app__$1,send_node,remote_name){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var b2__35262__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remotes(app__$1),remote_name);
if(cljs.core.truth_(b2__35262__auto__)){
var remote = b2__35262__auto__;
var b2__35262__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(remote,new cljs.core.Keyword(null,"transmit!","transmit!",-107149039));
if(cljs.core.truth_(b2__35262__auto____$1)){
var transmit_BANG_ = b2__35262__auto____$1;
try{if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var temp__5814__auto___51715 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5814__auto___51715)){
var batch_51716 = temp__5814__auto___51715;
var seq__51440_51717 = cljs.core.seq(batch_51716);
var chunk__51441_51718 = null;
var count__51442_51719 = (0);
var i__51443_51720 = (0);
while(true){
if((i__51443_51720 < count__51442_51719)){
var element_node_51721 = chunk__51441_51718.cljs$core$IIndexed$_nth$arity$2(null,i__51443_51720);
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var tx_51723 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_51721));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_51721),tx_51723);
}catch (e51447){var e_51724 = e51447;
}} else {
}


var G__51725 = seq__51440_51717;
var G__51726 = chunk__51441_51718;
var G__51727 = count__51442_51719;
var G__51728 = (i__51443_51720 + (1));
seq__51440_51717 = G__51725;
chunk__51441_51718 = G__51726;
count__51442_51719 = G__51727;
i__51443_51720 = G__51728;
continue;
} else {
var temp__5816__auto___51729 = cljs.core.seq(seq__51440_51717);
if(temp__5816__auto___51729){
var seq__51440_51730__$1 = temp__5816__auto___51729;
if(cljs.core.chunked_seq_QMARK_(seq__51440_51730__$1)){
var c__5521__auto___51731 = cljs.core.chunk_first(seq__51440_51730__$1);
var G__51732 = cljs.core.chunk_rest(seq__51440_51730__$1);
var G__51733 = c__5521__auto___51731;
var G__51734 = cljs.core.count(c__5521__auto___51731);
var G__51735 = (0);
seq__51440_51717 = G__51732;
chunk__51441_51718 = G__51733;
count__51442_51719 = G__51734;
i__51443_51720 = G__51735;
continue;
} else {
var element_node_51736 = cljs.core.first(seq__51440_51730__$1);
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var tx_51737 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(element_node_51736));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_51736),tx_51737);
}catch (e51449){var e_51738 = e51449;
}} else {
}


var G__51739 = cljs.core.next(seq__51440_51730__$1);
var G__51740 = null;
var G__51741 = (0);
var G__51742 = (0);
seq__51440_51717 = G__51739;
chunk__51441_51718 = G__51740;
count__51442_51719 = G__51741;
i__51443_51720 = G__51742;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var tx_51743 = com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node));
com.fulcrologic.fulcro.inspect.inspect_client.send_started_BANG_(app__$1,remote_name,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),tx_51743);
}catch (e51450){var e_51744 = e51450;
}} else {
}
}
}catch (e51439){var e_51745 = e51439;
}} else {
}

return (transmit_BANG_.cljs$core$IFn$_invoke$arity$2 ? transmit_BANG_.cljs$core$IFn$_invoke$arity$2(remote,send_node) : transmit_BANG_.call(null,remote,send_node));
}catch (e51427){var e = e51427;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,256,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Send threw an exception for tx:",com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373).cljs$core$IFn$_invoke$arity$1(send_node)),"See https://book.fulcrologic.com/#err-txp-send-exc"], null);
}),null)),null,-1911176682,null);

try{if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var temp__5814__auto___51746 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","batch","com.fulcrologic.fulcro.algorithms.tx-processing/batch",911189299).cljs$core$IFn$_invoke$arity$1(send_node);
if(cljs.core.truth_(temp__5814__auto___51746)){
var batch_51747 = temp__5814__auto___51746;
var seq__51430_51748 = cljs.core.seq(batch_51747);
var chunk__51431_51749 = null;
var count__51432_51750 = (0);
var i__51433_51751 = (0);
while(true){
if((i__51433_51751 < count__51432_51750)){
var element_node_51752 = chunk__51431_51749.cljs$core$IIndexed$_nth$arity$2(null,i__51433_51751);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_51752),"Transmit Exception");


var G__51753 = seq__51430_51748;
var G__51754 = chunk__51431_51749;
var G__51755 = count__51432_51750;
var G__51756 = (i__51433_51751 + (1));
seq__51430_51748 = G__51753;
chunk__51431_51749 = G__51754;
count__51432_51750 = G__51755;
i__51433_51751 = G__51756;
continue;
} else {
var temp__5816__auto___51757 = cljs.core.seq(seq__51430_51748);
if(temp__5816__auto___51757){
var seq__51430_51758__$1 = temp__5816__auto___51757;
if(cljs.core.chunked_seq_QMARK_(seq__51430_51758__$1)){
var c__5521__auto___51759 = cljs.core.chunk_first(seq__51430_51758__$1);
var G__51760 = cljs.core.chunk_rest(seq__51430_51758__$1);
var G__51761 = c__5521__auto___51759;
var G__51762 = cljs.core.count(c__5521__auto___51759);
var G__51763 = (0);
seq__51430_51748 = G__51760;
chunk__51431_51749 = G__51761;
count__51432_51750 = G__51762;
i__51433_51751 = G__51763;
continue;
} else {
var element_node_51764 = cljs.core.first(seq__51430_51758__$1);
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(element_node_51764),"Transmit Exception");


var G__51765 = cljs.core.next(seq__51430_51758__$1);
var G__51766 = null;
var G__51767 = (0);
var G__51768 = (0);
seq__51430_51748 = G__51765;
chunk__51431_51749 = G__51766;
count__51432_51750 = G__51767;
i__51433_51751 = G__51768;
continue;
}
} else {
}
}
break;
}
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(send_node),"Transmit Exception");
}
}catch (e51429){var e_51769__$1 = e51429;
}} else {
}

var G__51437 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"client-exception","client-exception",-1357213384),e], null);
var fexpr__51436 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__51436.cljs$core$IFn$_invoke$arity$1 ? fexpr__51436.cljs$core$IFn$_invoke$arity$1(G__51437) : fexpr__51436.call(null,G__51437));
}catch (e51428){var e__$1 = e51428;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,266,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,"Error handler failed to handle exception!"], null);
}),null)),null,-1533129749,null);
}}} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,1361865106,null);

var G__51452 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__51451 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__51451.cljs$core$IFn$_invoke$arity$1 ? fexpr__51451.cljs$core$IFn$_invoke$arity$1(G__51452) : fexpr__51451.call(null,G__51452));
}
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,268,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transmit was not defined on remote",remote_name,"See https://book.fulcrologic.com/#err-txp-remote-lacks-transmit"], null);
}),null)),null,1011645138,null);

var G__51454 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"message","message",-406056002),"Transmit missing on remote."], null);
var fexpr__51453 = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209).cljs$core$IFn$_invoke$arity$1(send_node);
return (fexpr__51453.cljs$core$IFn$_invoke$arity$1 ? fexpr__51453.cljs$core$IFn$_invoke$arity$1(G__51454) : fexpr__51453.call(null,G__51454));
}
});
/**
 * Process the send queues against the remotes. Updates the send queues on the app and returns the updated send queues.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_send_queues_BANG_(p__51455){
var map__51456 = p__51455;
var map__51456__$1 = cljs.core.__destructure_map(map__51456);
var app__$1 = map__51456__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807)], null);

var send_queues = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_send_queues,remote){
var send_queue = cljs.core.get.cljs$core$IFn$_invoke$arity$3(send_queues,remote,cljs.core.PersistentVector.EMPTY);
var vec__51457 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.extract_parallel(send_queue);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51457,(0),null);
var serial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51457,(1),null);
var front = cljs.core.first(serial);
var seq__51460_51770 = cljs.core.seq(p);
var chunk__51461_51771 = null;
var count__51462_51772 = (0);
var i__51463_51773 = (0);
while(true){
if((i__51463_51773 < count__51462_51772)){
var item_51774 = chunk__51461_51771.cljs$core$IIndexed$_nth$arity$2(null,i__51463_51773);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__51460_51770,chunk__51461_51771,count__51462_51772,i__51463_51773,item_51774,send_queue,vec__51457,p,serial,front,send_queues,remote_names,operations,map__51456,map__51456__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_51774,remote);
});})(seq__51460_51770,chunk__51461_51771,count__51462_51772,i__51463_51773,item_51774,send_queue,vec__51457,p,serial,front,send_queues,remote_names,operations,map__51456,map__51456__$1,app__$1,runtime_atom))
);


var G__51775 = seq__51460_51770;
var G__51776 = chunk__51461_51771;
var G__51777 = count__51462_51772;
var G__51778 = (i__51463_51773 + (1));
seq__51460_51770 = G__51775;
chunk__51461_51771 = G__51776;
count__51462_51772 = G__51777;
i__51463_51773 = G__51778;
continue;
} else {
var temp__5816__auto___51779 = cljs.core.seq(seq__51460_51770);
if(temp__5816__auto___51779){
var seq__51460_51780__$1 = temp__5816__auto___51779;
if(cljs.core.chunked_seq_QMARK_(seq__51460_51780__$1)){
var c__5521__auto___51781 = cljs.core.chunk_first(seq__51460_51780__$1);
var G__51782 = cljs.core.chunk_rest(seq__51460_51780__$1);
var G__51783 = c__5521__auto___51781;
var G__51784 = cljs.core.count(c__5521__auto___51781);
var G__51785 = (0);
seq__51460_51770 = G__51782;
chunk__51461_51771 = G__51783;
count__51462_51772 = G__51784;
i__51463_51773 = G__51785;
continue;
} else {
var item_51786 = cljs.core.first(seq__51460_51780__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__51460_51770,chunk__51461_51771,count__51462_51772,i__51463_51773,item_51786,seq__51460_51780__$1,temp__5816__auto___51779,send_queue,vec__51457,p,serial,front,send_queues,remote_names,operations,map__51456,map__51456__$1,app__$1,runtime_atom){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,item_51786,remote);
});})(seq__51460_51770,chunk__51461_51771,count__51462_51772,i__51463_51773,item_51786,seq__51460_51780__$1,temp__5816__auto___51779,send_queue,vec__51457,p,serial,front,send_queues,remote_names,operations,map__51456,map__51456__$1,app__$1,runtime_atom))
);


var G__51789 = cljs.core.next(seq__51460_51780__$1);
var G__51790 = null;
var G__51791 = (0);
var G__51792 = (0);
seq__51460_51770 = G__51789;
chunk__51461_51771 = G__51790;
count__51462_51772 = G__51791;
i__51463_51773 = G__51792;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517).cljs$core$IFn$_invoke$arity$1(front))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,serial);
} else {
var map__51464 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.combine_sends(app__$1,remote,serial);
var map__51464__$1 = cljs.core.__destructure_map(map__51464);
var send_queue__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51464__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51464__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,(function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.net_send_BANG_(app__$1,send_node,remote);
}));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_send_queues,remote,send_queue__$1);
}
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);

var seq__51465_51793 = cljs.core.seq(cljs.core.deref(operations));
var chunk__51466_51794 = null;
var count__51467_51795 = (0);
var i__51468_51796 = (0);
while(true){
if((i__51468_51796 < count__51467_51795)){
var op_51798 = chunk__51466_51794.cljs$core$IIndexed$_nth$arity$2(null,i__51468_51796);
(op_51798.cljs$core$IFn$_invoke$arity$0 ? op_51798.cljs$core$IFn$_invoke$arity$0() : op_51798.call(null));


var G__51799 = seq__51465_51793;
var G__51800 = chunk__51466_51794;
var G__51801 = count__51467_51795;
var G__51802 = (i__51468_51796 + (1));
seq__51465_51793 = G__51799;
chunk__51466_51794 = G__51800;
count__51467_51795 = G__51801;
i__51468_51796 = G__51802;
continue;
} else {
var temp__5816__auto___51803 = cljs.core.seq(seq__51465_51793);
if(temp__5816__auto___51803){
var seq__51465_51804__$1 = temp__5816__auto___51803;
if(cljs.core.chunked_seq_QMARK_(seq__51465_51804__$1)){
var c__5521__auto___51806 = cljs.core.chunk_first(seq__51465_51804__$1);
var G__51807 = cljs.core.chunk_rest(seq__51465_51804__$1);
var G__51808 = c__5521__auto___51806;
var G__51809 = cljs.core.count(c__5521__auto___51806);
var G__51810 = (0);
seq__51465_51793 = G__51807;
chunk__51466_51794 = G__51808;
count__51467_51795 = G__51809;
i__51468_51796 = G__51810;
continue;
} else {
var op_51811 = cljs.core.first(seq__51465_51804__$1);
(op_51811.cljs$core$IFn$_invoke$arity$0 ? op_51811.cljs$core$IFn$_invoke$arity$0() : op_51811.call(null));


var G__51812 = cljs.core.next(seq__51465_51804__$1);
var G__51813 = null;
var G__51814 = (0);
var G__51815 = (0);
seq__51465_51793 = G__51812;
chunk__51466_51794 = G__51813;
count__51467_51795 = G__51814;
i__51468_51796 = G__51815;
continue;
}
} else {
}
}
break;
}

return new_send_queues;
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$tx_node(var_args){
var G__51470 = arguments.length;
switch (G__51470) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$1 = (function (tx){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2 = (function (tx,options){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var ast = edn_query_language.core.query__GT_ast(tx);
var ast_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var elements = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$txfilt_STAR_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(n));
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$__GT_txnode_STAR_(idx,ast_node){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477),ast_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),cljs.core.PersistentArrayMap.EMPTY], null);
}))),ast_nodes);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),com.fulcrologic.fulcro.algorithms.tempid.uuid.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","created","com.fulcrologic.fulcro.algorithms.tx-processing/created",859806789),com.fulcrologic.fulcro.algorithms.do_not_use.now(),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),tx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),elements], null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$build_env(var_args){
var G__51472 = arguments.length;
switch (G__51472) {
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3 = (function (app__$1,p__51473,addl){
var map__51474 = p__51473;
var map__51474__$1 = cljs.core.__destructure_map(map__51474);
var tx_node = map__51474__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51474__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

var map__51475 = options;
var map__51475__$1 = cljs.core.__destructure_map(map__51475);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51475__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var G__51476 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([addl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1),new cljs.core.Keyword(null,"app","app",-560961707),app__$1], null)], 0));
var G__51476__$1 = (cljs.core.truth_(options)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options):G__51476);
var G__51476__$2 = (cljs.core.truth_(ref)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),ref):G__51476__$1);
if(cljs.core.truth_(component)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51476__$2,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__51476__$2;
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__51477){
var map__51478 = p__51477;
var map__51478__$1 = cljs.core.__destructure_map(map__51478);
var tx_node = map__51478__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51478__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.map_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$lang$maxFixedArity = 3);

/**
 * Run through the elements on the given tx-node and do the side-effect-free dispatch. This generates the dispatch map
 *   of things to do on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements(tx_node,env,dispatch_fn){
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),cljs.core.map_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var do_dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_run_STAR_(env__$1){
try{return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(env__$1) : dispatch_fn.call(null,env__$1));
}catch (e51479){var e = e51479;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,352,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Dispatch for mutation",(function (){var G__51480 = env__$1;
var G__51480__$1 = (((G__51480 == null))?null:new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(G__51480));
if((G__51480__$1 == null)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.do_not_use.ast__GT_query(G__51480__$1);
}
})(),"failed with an exception. No dispatch generated. See https://book.fulcrologic.com/#err-txp-mut-dispatch-exc"], null);
}),null)),null,-1513139259,null);

return cljs.core.PersistentArrayMap.EMPTY;
}});
var dispatch = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_elements_$_dispatch_STAR_(p__51481){
var map__51482 = p__51481;
var map__51482__$1 = cljs.core.__destructure_map(map__51482);
var ele = map__51482__$1;
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51482__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__51483 = original_ast_node;
var map__51483__$1 = cljs.core.__destructure_map(map__51483);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51483__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node);
var G__51484 = ele;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51484,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660),do_dispatch(env__$1));
} else {
return G__51484;
}
});
var dispatch_all = (function (eles){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(dispatch,eles);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),dispatch_all);
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.application_rendered_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$application_rendered_BANG_(p__51486,options){
var map__51487 = p__51486;
var map__51487__$1 = cljs.core.__destructure_map(map__51487);
var app__$1 = map__51487__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51487__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
if(cljs.core.truth_(cljs.core.some((function (p1__51485_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"after-render?","after-render?",595994030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420).cljs$core$IFn$_invoke$arity$1(p1__51485_SHARP_)));
}),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0)) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.call(null,app__$1,(0)));
} else {
return null;
}
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$activate_submissions_BANG_(p__51490){
var map__51491 = p__51490;
var map__51491__$1 = cljs.core.__destructure_map(map__51491);
var app__$1 = map__51491__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51491__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var map__51492 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var map__51492__$1 = cljs.core.__destructure_map(map__51492);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51492__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51492__$1,false);
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51488_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(p1__51488_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__51488_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),(function (p1__51489_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,p1__51489_SHARP_,dispatched_nodes);
})),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),cljs.core.vec(blocked));
}));

return (com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_.call(null,app__$1));
});
/**
 * Schedule activation of submitted transactions.  The default implementation copies all submitted transactions onto
 * the active queue and immediately does an active queue processing step.  If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_activation_BANG_(var_args){
var G__51494 = arguments.length;
switch (G__51494) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","activation-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/activation-scheduled?",-955561668),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.activate_submissions_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a processing of the active queue, which will advance the active transactions by a step.
 * If `tm` is not supplied (in ms) it defaults to 10ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_queue_processing_BANG_(var_args){
var G__51496 = arguments.length;
switch (G__51496) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","queue-processing-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/queue-processing-scheduled?",-2065549690),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule actual network activity. If `tm` is not supplied (in ms) it defaults to 0ms.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$schedule_sends_BANG_(var_args){
var G__51498 = arguments.length;
switch (G__51498) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tm){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.core.int_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.scheduling.schedule_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","sends-scheduled?","com.fulcrologic.fulcro.algorithms.tx-processing/sends-scheduled?",-844941333),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_send_queues_BANG_,tm);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Runs any incomplete and non-blocked optimistic operations on a node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$advance_actions_BANG_(app__$1,p__51499){
var map__51500 = p__51499;
var map__51500__$1 = cljs.core.__destructure_map(map__51500);
var node = map__51500__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var reduction = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__51501,element){
var map__51502 = p__51501;
var map__51502__$1 = cljs.core.__destructure_map(map__51502);
var acc = map__51502__$1;
var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51502__$1,new cljs.core.Keyword(null,"done?","done?",-1847001718));
var new_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51502__$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171));
if(cljs.core.truth_(done_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj,element);
} else {
var map__51503 = element;
var map__51503__$1 = cljs.core.__destructure_map(map__51503);
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51503__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51503__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51503__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51503__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var map__51504 = dispatch;
var map__51504__$1 = cljs.core.__destructure_map(map__51504);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51504__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var remote_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.set(cljs.core.keys(dispatch)));
var exec_QMARK_ = (function (){var and__4996__auto__ = action;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not((function (){var or__4998__auto__ = done_QMARK_;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})());
} else {
return and__4996__auto__;
}
})();
var fully_complete_QMARK_ = (function (){var and__4996__auto__ = (function (){var or__4998__auto__ = exec_QMARK_;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024)));
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remote_set,complete_QMARK_));
} else {
return and__4996__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_element = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var done_QMARK___$1 = cljs.core.not(fully_complete_QMARK_);
var new_acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK___$1,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_element)], null);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{if(cljs.core.truth_(action)){
(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
} else {
}
}catch (e51505){var e_51836 = e51505;
var mutation_symbol_51837 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,445,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51836,"The `action` section of mutation",mutation_symbol_51837,"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-action-exc"], null);
}),null)),null,-36786881,null);
}
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var tx_51838 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_51838], null));
}catch (e51506){var e_51839 = e51506;
}} else {
}
} else {
}

return new_acc;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done?","done?",-1847001718),false,new cljs.core.Keyword(null,"new-elements","new-elements",-378003171),cljs.core.PersistentVector.EMPTY], null),elements);
var new_elements = new cljs.core.Keyword(null,"new-elements","new-elements",-378003171).cljs$core$IFn$_invoke$arity$1(reduction);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$run_actions_BANG_(app__$1,p__51507){
var map__51508 = p__51507;
var map__51508__$1 = cljs.core.__destructure_map(map__51508);
var node = map__51508__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51508__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51508__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var new_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_elements,element){
var map__51509 = element;
var map__51509__$1 = cljs.core.__destructure_map(map__51509);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var map__51510 = dispatch;
var map__51510__$1 = cljs.core.__destructure_map(map__51510);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51510__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var exec_QMARK_ = (function (){var and__4996__auto__ = action;
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024)) : complete_QMARK_.call(null,new cljs.core.Keyword(null,"action","action",-811238024))));
} else {
return and__4996__auto__;
}
})();
var state_id_before = com.fulcrologic.fulcro.inspect.inspect_client.current_history_id(app__$1);
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var state_before = cljs.core.deref(state);
var updated_node = (cljs.core.truth_(exec_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778),state_before),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,new cljs.core.Keyword(null,"action","action",-811238024)):element);
var new_acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_elements,updated_node);
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node], null));
if(cljs.core.truth_(exec_QMARK_)){
try{(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(env) : action.call(null,env));
}catch (e51511){var e_51840 = e51511;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,478,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51840,"The `action` section threw an exception for mutation: ",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-mut-action-exc2"], null);
}),null)),null,-1530162478,null);
}
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var tx_51841 = edn_query_language.core.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(original_ast_node,true);
com.fulcrologic.fulcro.inspect.inspect_client.optimistic_action_finished_BANG_(app__$1,env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"state-id-before","state-id-before",-1436953055),state_id_before,new cljs.core.Keyword(null,"db-before","db-before",-553691536),state_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.deref(state),new cljs.core.Keyword(null,"tx","tx",466630418),tx_51841], null));
}catch (e51512){var e_51842 = e51512;
}} else {
}
} else {
}

return new_acc;
}),cljs.core.PersistentVector.EMPTY,elements);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),new_elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$fully_complete_QMARK_(app__$1,p__51513){
var map__51514 = p__51513;
var map__51514__$1 = cljs.core.__destructure_map(map__51514);
var tx_node = map__51514__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51514__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

var element_complete_QMARK_ = (function (p__51515){
var map__51516 = p__51515;
var map__51516__$1 = cljs.core.__destructure_map(map__51516);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var active_keys = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),remotes);
var desired_set = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(active_keys,cljs.core.set(cljs.core.keys(dispatch)));
return cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(desired_set,complete_QMARK_));
});
return cljs.core.every_QMARK_(element_complete_QMARK_,elements);
});
/**
 * Record a network result on the given txn/element.
 * If result-key is given it is used, otherwise defaults to ::txn/results. Also removes the network send from the send
 * queue so that remaining items can proceed, and schedules send processing.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$record_result_BANG_(var_args){
var G__51518 = arguments.length;
switch (G__51518) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (p__51519,txn_id,ele_idx,remote,result,result_key){
var map__51520 = p__51519;
var map__51520__$1 = cljs.core.__destructure_map(map__51520);
var app__$1 = map__51520__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var active_queue = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom));
var txn_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__51521){
var map__51522 = p__51521;
var map__51522__$1 = cljs.core.__destructure_map(map__51522);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51522__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),active_queue);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,516,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-txp-res-lacks-valid-node"], null);
}),null)),null,249388068,null);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),cljs.core.int_QMARK_,cljs.core.keyword_QMARK_,cljs.core.any_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Add the ::txn/desired-ast-nodes and ::txn/transmitted-ast-nodes for `remote` to the tx-element based on the dispatch for the `remote` of the original mutation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$compute_desired_ast_node(app__$1,remote,tx_node,tx_element){
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

var map__51523 = tx_element;
var map__51523__$1 = cljs.core.__destructure_map(map__51523);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51523__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51523__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var state_before_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51523__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","state-before-action","com.fulcrologic.fulcro.algorithms.tx-processing/state-before-action",-1800721778));
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),original_ast_node,new cljs.core.Keyword(null,"state-before-action","state-before-action",104906671),state_before_action], null));
var remote_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,remote);
var remote_desire = (cljs.core.truth_(remote_fn)?(remote_fn.cljs$core$IFn$_invoke$arity$1 ? remote_fn.cljs$core$IFn$_invoke$arity$1(env) : remote_fn.call(null,env)):null);
var desired_ast = ((((remote_desire === false) || ((remote_desire == null))))?null:((remote_desire === true)?original_ast_node:((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"ast","ast",-860334068)))))?new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(remote_desire):((((cljs.core.map_QMARK_(remote_desire)) && (cljs.core.contains_QMARK_(remote_desire,new cljs.core.Keyword(null,"type","type",1174270348)))))?remote_desire:(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,537,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote dispatch for",remote,"returned an invalid value.",remote_desire,"See https://book.fulcrologic.com/#err-txp-remote-dispatch-invalid-res"], null);
}),null)),null,-1120074675,null);

return remote_desire;
})()

))));
var query_transform = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"global-eql-transform","global-eql-transform",145441548));
var ast = (cljs.core.truth_((function (){var and__4996__auto__ = desired_ast;
if(cljs.core.truth_(and__4996__auto__)){
return query_transform;
} else {
return and__4996__auto__;
}
})())?(query_transform.cljs$core$IFn$_invoke$arity$1 ? query_transform.cljs$core$IFn$_invoke$arity$1(desired_ast) : query_transform.call(null,desired_ast)):desired_ast);
var G__51524 = tx_element;
var G__51524__$1 = (cljs.core.truth_(desired_ast)?cljs.core.assoc_in(G__51524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425),remote], null),desired_ast):G__51524);
if(cljs.core.truth_(ast)){
return cljs.core.assoc_in(G__51524__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null),ast);
} else {
return G__51524__$1;
}
});
/**
 * Generate a new send node and add it to the appropriate send queue. Returns the new send node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG_(p__51525,p__51526,ele_idx,remote){
var map__51527 = p__51525;
var map__51527__$1 = cljs.core.__destructure_map(map__51527);
var app__$1 = map__51527__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51527__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51528 = p__51526;
var map__51528__$1 = cljs.core.__destructure_map(map__51528);
var tx_node = map__51528__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51528__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51528__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51528__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","parallel?","com.fulcrologic.fulcro.algorithms.tx-processing/parallel?",1623289535));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-name","com.fulcrologic.fulcro.application/remote-name",-1179129128),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157),null)], null);

var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_progress_handler_STAR_(result){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var remove_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing._STAR_remove_send_STAR_;
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$add_send_BANG__$_result_handler_STAR_(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parallel?","parallel?",-25273892).cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.truth_((function (){var and__4996__auto__ = (function (){var or__4998__auto__ = goog.DEBUG;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return com.fulcrologic.fulcro.inspect.inspect_client.INSPECT;
}
})();
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("disabled",com.fulcrologic.fulcro.inspect.inspect_client.INSPECT);
} else {
return and__4996__auto__;
}
})())){
try{var map__51530_51844 = result;
var map__51530_51845__$1 = cljs.core.__destructure_map(map__51530_51844);
var status_code_51846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51530_51845__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var body_51847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51530_51845__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status_code_51846)){
com.fulcrologic.fulcro.inspect.inspect_client.send_finished_BANG_(app__$1,remote,id,body_51847);
} else {
com.fulcrologic.fulcro.inspect.inspect_client.send_failed_BANG_(app__$1,id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_code_51846));
}
}catch (e51529){var e_51848 = e51529;
}} else {
}
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

(remove_BANG_.cljs$core$IFn$_invoke$arity$4 ? remove_BANG_.cljs$core$IFn$_invoke$arity$4(app__$1,remote,id,ele_idx) : remove_BANG_.call(null,app__$1,remote,id,ele_idx));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(1));

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));
});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([send_node], 0));

return send_node;
} else {
handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));

return null;
}
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_element_sends_BANG_(app__$1,tx_node,p__51531){
var map__51532 = p__51531;
var map__51532__$1 = cljs.core.__destructure_map(map__51532);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51532__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Returns true if the given node has no active network operations.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK_(p__51533){
var map__51534 = p__51533;
var map__51534__$1 = cljs.core.__destructure_map(map__51534);
var tx_node = map__51534__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51534__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.boolean_QMARK_], null);

return cljs.core.every_QMARK_((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$idle_node_QMARK__$_idle_QMARK__STAR_(p__51535){
var map__51536 = p__51535;
var map__51536__$1 = cljs.core.__destructure_map(map__51536);
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51536__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var in_progress = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(started_QMARK_,complete_QMARK_);
return cljs.core.empty_QMARK_(in_progress);
}),elements);
});
/**
 * Returns a txnode element iff it has remaining (remote) work that has not been queued. Returns nil if there
 * is no such element.
 * 
 *   remote-names is the set of legal remote names.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$element_with_work(remote_names,p__51537){
var map__51538 = p__51537;
var map__51538__$1 = cljs.core.__destructure_map(map__51538);
var element = map__51538__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198),null)], null);

var todo = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remote_names,cljs.core.set(cljs.core.keys(dispatch)));
var remaining = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(todo,started_QMARK_);
if(cljs.core.seq(remaining)){
return element;
} else {
return null;
}
});
/**
 * Assumes tx-node is to be processed pessimistically. Queues the next send if the node is currently idle
 *   on the network and there are any sends left to do. Adds to the send queue, and returns the updated
 *   tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_next_send_BANG_(app__$1,p__51539){
var map__51540 = p__51539;
var map__51540__$1 = cljs.core.__destructure_map(map__51540);
var tx_node = map__51540__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51540__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.idle_node_QMARK_(tx_node)){
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var with_work = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.element_with_work,remotes);
var element = cljs.core.some(with_work,elements);
if(cljs.core.truth_(element)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app__$1,tx_node,element);
} else {
return tx_node;
}
} else {
return tx_node;
}
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$queue_sends_BANG_(app__$1,p__51541){
var map__51542 = p__51541;
var map__51542__$1 = cljs.core.__destructure_map(map__51542);
var tx_node = map__51542__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51542__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

if(optimistic_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_next_send_BANG_(app__$1,tx_node);
}
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$dispatch_result_BANG_(app__$1,tx_node,p__51543,remote){
var map__51544 = p__51543;
var map__51544__$1 = cljs.core.__destructure_map(map__51544);
var tx_element = map__51544__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51544__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),cljs.core.keyword_QMARK_,com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(0));

var result_51850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_51851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_51851)){
var env_51852 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_51850], null));
try{(handler_51851.cljs$core$IFn$_invoke$arity$1 ? handler_51851.cljs$core$IFn$_invoke$arity$1(env_51852) : handler_51851.call(null,env_51852));
}catch (e51545){var e_51853 = e51545;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,675,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51853,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-txp-mut-res-action-exc"], null);
}),null)),null,-1877651312,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_element_results_BANG_(app__$1,tx_node,p__51546){
var map__51547 = p__51546;
var map__51547__$1 = cljs.core.__destructure_map(map__51547);
var tx_element = map__51547__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51547__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51547__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing/tx-element",-1533905811),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-element","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-element",-208225198)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
/**
 * Walk all elements of the tx-node and call result dispatch handlers for any results that have
 *   not been distributed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$distribute_results_BANG_(app__$1,p__51548){
var map__51549 = p__51548;
var map__51549__$1 = cljs.core.__destructure_map(map__51549);
var tx_node = map__51549__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51549__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (element){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_element_results_BANG_(app__$1,tx_node,element);
}),elements));
});
/**
 * Report all progress items to any registered progress dispatch and clear them from the tx-node.
 *   Returns the updated tx-node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG_(app__$1,p__51550){
var map__51551 = p__51550;
var map__51551__$1 = cljs.core.__destructure_map(map__51551);
var tx_node = map__51551__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903)], null);

var get_env = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$update_progress_BANG__$_get_env_STAR_(remote,progress){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"progress","progress",244323547),progress], null));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,p__51552){
var map__51553 = p__51552;
var map__51553__$1 = cljs.core.__destructure_map(map__51553);
var element = map__51553__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51553__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var seq__51554_51854 = cljs.core.seq(progress);
var chunk__51555_51855 = null;
var count__51556_51856 = (0);
var i__51557_51857 = (0);
while(true){
if((i__51557_51857 < count__51556_51856)){
var vec__51566_51858 = chunk__51555_51855.cljs$core$IIndexed$_nth$arity$2(null,i__51557_51857);
var remote_51859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51566_51858,(0),null);
var value_51860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51566_51858,(1),null);
var env_51861 = get_env(remote_51859,value_51860);
var action_51862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_51862)){
try{(action_51862.cljs$core$IFn$_invoke$arity$1 ? action_51862.cljs$core$IFn$_invoke$arity$1(env_51861) : action_51862.call(null,env_51861));
}catch (e51569){var e_51863 = e51569;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51554_51854,chunk__51555_51855,count__51556_51856,i__51557_51857,e_51863,env_51861,action_51862,vec__51566_51858,remote_51859,value_51860,map__51553,map__51553__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__51551,map__51551__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51863,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__51554_51854,chunk__51555_51855,count__51556_51856,i__51557_51857,e_51863,env_51861,action_51862,vec__51566_51858,remote_51859,value_51860,map__51553,map__51553__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__51551,map__51551__$1,tx_node,elements))
,null)),null,462906498,null);
}} else {
}


var G__51864 = seq__51554_51854;
var G__51865 = chunk__51555_51855;
var G__51866 = count__51556_51856;
var G__51867 = (i__51557_51857 + (1));
seq__51554_51854 = G__51864;
chunk__51555_51855 = G__51865;
count__51556_51856 = G__51866;
i__51557_51857 = G__51867;
continue;
} else {
var temp__5816__auto___51868 = cljs.core.seq(seq__51554_51854);
if(temp__5816__auto___51868){
var seq__51554_51869__$1 = temp__5816__auto___51868;
if(cljs.core.chunked_seq_QMARK_(seq__51554_51869__$1)){
var c__5521__auto___51870 = cljs.core.chunk_first(seq__51554_51869__$1);
var G__51871 = cljs.core.chunk_rest(seq__51554_51869__$1);
var G__51872 = c__5521__auto___51870;
var G__51873 = cljs.core.count(c__5521__auto___51870);
var G__51874 = (0);
seq__51554_51854 = G__51871;
chunk__51555_51855 = G__51872;
count__51556_51856 = G__51873;
i__51557_51857 = G__51874;
continue;
} else {
var vec__51570_51875 = cljs.core.first(seq__51554_51869__$1);
var remote_51876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51570_51875,(0),null);
var value_51877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51570_51875,(1),null);
var env_51878 = get_env(remote_51876,value_51877);
var action_51879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"progress-action","progress-action",1342780181));
if(cljs.core.truth_(action_51879)){
try{(action_51879.cljs$core$IFn$_invoke$arity$1 ? action_51879.cljs$core$IFn$_invoke$arity$1(env_51878) : action_51879.call(null,env_51878));
}catch (e51573){var e_51880 = e51573;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,715,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51554_51854,chunk__51555_51855,count__51556_51856,i__51557_51857,e_51880,env_51878,action_51879,vec__51570_51875,remote_51876,value_51877,seq__51554_51869__$1,temp__5816__auto___51868,map__51553,map__51553__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__51551,map__51551__$1,tx_node,elements){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51880,"Progress action threw an exception in mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"See https://book.fulcrologic.com/#err-txp-progress-action-exc"], null);
});})(seq__51554_51854,chunk__51555_51855,count__51556_51856,i__51557_51857,e_51880,env_51878,action_51879,vec__51570_51875,remote_51876,value_51877,seq__51554_51869__$1,temp__5816__auto___51868,map__51553,map__51553__$1,element,idx,progress,dispatch,original_ast_node,get_env,map__51551,map__51551__$1,tx_node,elements))
,null)),null,1972079173,null);
}} else {
}


var G__51881 = cljs.core.next(seq__51554_51869__$1);
var G__51882 = null;
var G__51883 = (0);
var G__51884 = (0);
seq__51554_51854 = G__51881;
chunk__51555_51855 = G__51882;
count__51556_51856 = G__51883;
i__51557_51857 = G__51884;
continue;
}
} else {
}
}
break;
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),cljs.core.dissoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_tx_node_BANG_(app__$1,p__51574){
var map__51575 = p__51574;
var map__51575__$1 = cljs.core.__destructure_map(map__51575);
var tx_node = map__51575__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51575__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),com.fulcrologic.guardrails.core._EQ__GT_,cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing/tx-node",1427257903),null)], null);

var optimistic_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869).cljs$core$IFn$_invoke$arity$1(options));
if(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.distribute_results_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.queue_sends_BANG_(app__$1,(function (){var G__51576 = tx_node;
var G__51576__$1 = ((optimistic_QMARK_)?com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,G__51576):G__51576);
if((!(optimistic_QMARK_))){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.advance_actions_BANG_(app__$1,G__51576__$1);
} else {
return G__51576__$1;
}
})())));
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$requested_refreshes(app__$1,queue){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51577){
return cljs.core.coll_QMARK_(G__51577);
})], null),null),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.set_QMARK_], null);


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (outer_acc,tx_node){
var env = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,tx_node);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,element){
var map__51578 = element;
var map__51578__$1 = cljs.core.__destructure_map(map__51578);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51578__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var refresh = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(dispatch);
if(cljs.core.truth_(refresh)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.set((refresh.cljs$core$IFn$_invoke$arity$1 ? refresh.cljs$core$IFn$_invoke$arity$1(env) : refresh.call(null,env))));
} else {
return acc;
}
}),outer_acc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330).cljs$core$IFn$_invoke$arity$1(tx_node));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Given a tx node and the set of legal remotes: returns a set of remotes that are active on that node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$remotes_active_on_node(p__51579,remotes){
var map__51580 = p__51579;
var map__51580__$1 = cljs.core.__destructure_map(map__51580);
var tx_node = map__51580__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51580__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx-node","com.fulcrologic.fulcro.algorithms.tx-processing/tx-node",67879378),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926)], null);

var active_on_element = (function (p__51581){
var map__51582 = p__51581;
var map__51582__$1 = cljs.core.__destructure_map(map__51582);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51582__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51582__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
var remotes__$1 = cljs.core.set(remotes);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(remotes__$1,cljs.core.set(cljs.core.keys(dispatch))),complete_QMARK_);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,ele){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(acc,active_on_element(ele));
}),cljs.core.PersistentHashSet.EMPTY,elements);
});
/**
 * Calculate which remotes still have network activity to do on the given active queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$active_remotes(queue,remotes){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new cljs.core.Keyword("com.fulcrologic.fulcro.application","remote-names","com.fulcrologic.fulcro.application/remote-names",1017468926),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005)], null);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ra,n){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(ra,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.remotes_active_on_node(n,remotes));
}),cljs.core.PersistentHashSet.EMPTY,queue);
});
/**
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG_(p__51583){
var map__51584 = p__51583;
var map__51584__$1 = cljs.core.__destructure_map(map__51584);
var app__$1 = map__51584__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51584__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),com.fulcrologic.guardrails.core._EQ__GT_,cljs.core.any_QMARK_], null);

var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5814__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5814__auto__)){
var new_node = temp__5814__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(runtime_atom)));
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.app__GT_remote_names(app__$1);
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.active_remotes(new_queue,remotes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1) : schedule_render_BANG_.call(null,app__$1));

return null;
});
/**
 * Run the optimistic action(s) of a transaction synchronously. It is primarily used to deal with controlled inputs, since they
 * have issues working asynchronously, so ideally the mutation in question will *not* have remote action (though they
 * are allowed to).
 * 
 * NOTE: any *remote* behaviors of `tx` will *still be async*.
 * 
 * This function:
 * 
 * * Runs the optimistic side of the mutation(s)
 * * IF (and only if) one or more of the mutations has more sections than just an `action` then it submits the mutation to the normal transaction queue,
 *   but with the optimistic part already done.
 * * This functions *does not* queue a render refresh (though if the normal transaction queue is updated, it will queue tx remote processing, which will trigger a UI refresh).
 * 
 * If you pass it an on-screen instance that has a query and ident, then this function tunnel updated UI props synchronously to that
 * component so it can refresh immediately and avoid DOM input issues.
 * 
 * Returns the new component props or the final state map if no component was used in the transaction.
 * 
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$transact_sync_BANG_(app__$1,tx,p__51586){
var map__51587 = p__51586;
var map__51587__$1 = cljs.core.__destructure_map(map__51587);
var options = map__51587__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51587__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51587__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var mutation_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(tx));
var ast_node__GT_operation = cljs.core.zipmap(mutation_nodes,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ast_node){
return com.fulcrologic.fulcro.mutations.mutate.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast_node], null));
}),mutation_nodes));
var map__51588 = cljs.core.group_by((function (p1__51585_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"result-action","result-action",-1254630246),null], null), null),cljs.core.set(cljs.core.keys((ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1 ? ast_node__GT_operation.cljs$core$IFn$_invoke$arity$1(p1__51585_SHARP_) : ast_node__GT_operation.call(null,p1__51585_SHARP_)))));
}),mutation_nodes);
var map__51588__$1 = cljs.core.__destructure_map(map__51588);
var optimistic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51588__$1,true);
var mixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51588__$1,false);
var optimistic_tx_node = ((cljs.core.seq(optimistic))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),optimistic], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var mixed_tx_node = ((cljs.core.seq(mixed))?(function (){var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),mixed], null)),options);
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.dispatch_elements(node,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,node),com.fulcrologic.fulcro.mutations.mutate);
})():null);
var resulting_node_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(cljs.core.truth_(optimistic_tx_node)){
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,optimistic_tx_node);
} else {
}

if(cljs.core.truth_(mixed_tx_node)){
var node_51899 = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.run_actions_BANG_(app__$1,mixed_tx_node);
var runtime_atom_51900 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.reset_BANG_(resulting_node_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node_51899));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom_51900,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing/active-queue",162531286),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_51899], 0));

com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_queue_processing_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,(20));
} else {
}

if(cljs.core.truth_((function (){var and__4996__auto__ = component;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = (com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.raw.components.component_QMARK_.cljs$core$IFn$_invoke$arity$1(component) : com.fulcrologic.fulcro.raw.components.component_QMARK_.call(null,component));
if(cljs.core.truth_(and__4996__auto____$1)){
return com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(component);
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
var temp__5816__auto___51901 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"refresh-component!","refresh-component!",-872161039));
if(cljs.core.truth_(temp__5816__auto___51901)){
var refresh_component_BANG__51902 = temp__5816__auto___51901;
(refresh_component_BANG__51902.cljs$core$IFn$_invoke$arity$1 ? refresh_component_BANG__51902.cljs$core$IFn$_invoke$arity$1(component) : refresh_component_BANG__51902.call(null,component));
} else {
}
} else {
if(cljs.core.truth_(ref)){
var r_BANG__51903 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(r_BANG__51903)){
(r_BANG__51903.cljs$core$IFn$_invoke$arity$1 ? r_BANG__51903.cljs$core$IFn$_invoke$arity$1(app__$1) : r_BANG__51903.call(null,app__$1));
} else {
}
} else {
if(cljs.core.truth_(goog.DEBUG)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,847,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synchronous transaction was submitted on the app or a component without an ident. No UI refresh will happen. See https://book.fulcrologic.com/#warn-tx-missing-ident"], null);
}),null)),null,-1263007576,null);
} else {
}

}
}

return cljs.core.deref(resulting_node_id);
});
/**
 * Default (Fulcro-2 compatible) transaction submission. The options map can contain any additional options
 *   that might be used by the transaction processing (or UI refresh).
 * 
 *   Some that may be supported (depending on application settings):
 * 
 *   - `:optimistic?` - boolean. Should the transaction be processed optimistically?
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:refresh` - Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - Vector of idents/keywords.  If the underlying rendering configured algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI.
 *  This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   WARNING: `:only-refresh` can cause missed refreshes because rendering is debounced. If you are using this for
 *         rapid-fire updates like drag-and-drop it is recommended that on the trailing edge (e.g. drop) of your sequence you
 *         force a normal refresh via `app/render!`.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   NOTE: Fulcro 2 'follow-on reads' are supported and are added to the `:refresh` entries. Your choice of rendering
 *   algorithm will influence their necessity.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$default_tx_BANG_(var_args){
var G__51591 = arguments.length;
switch (G__51591) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__51592,tx,p__51593){
var map__51594 = p__51592;
var map__51594__$1 = cljs.core.__destructure_map(map__51594);
var app__$1 = map__51594__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51594__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51595 = p__51593;
var map__51595__$1 = cljs.core.__destructure_map(map__51595);
var options = map__51595__$1;
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51595__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","app","com.fulcrologic.fulcro.application/app",-1014694064),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","tx","com.fulcrologic.fulcro.algorithms.tx-processing/tx",-1165026763),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),com.fulcrologic.guardrails.core._EQ__GT_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423)], null);

if(cljs.core.truth_(synchronous_QMARK_)){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.transact_sync_BANG_(app__$1,tx,options);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.schedule_activation_BANG_.cljs$core$IFn$_invoke$arity$1(app__$1);

var map__51596 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optimistic?","optimistic?",1829830869),true], null),options], 0));
var map__51596__$1 = cljs.core.__destructure_map(map__51596);
var options__$1 = map__51596__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51596__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51596__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51596__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51589_SHARP_){
return (((p1__51589_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__51589_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__51597 = cljs.core.set(refresh);
var G__51597__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__51597,follow_on_reads):G__51597);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51597__$1,ref);
} else {
return G__51597__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__51598 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing/submission-queue",-175778154),(function (v,n){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(v),n);
}),node);
var G__51598__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51598,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__51598);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51598__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__51598__$1;
}
}));

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Abort any elements in the given send-queue that have the given abort id.
 * 
 *   Aborting will cause the network to abort (which will report a result), or if the item is not yet active a
 *   virtual result will still be sent for that node.
 * 
 *   Returns a new send-queue that no longer contains the aborted nodes.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_elements_BANG_(p__51599,send_queue,abort_id){
var map__51600 = p__51599;
var map__51600__$1 = cljs.core.__destructure_map(map__51600);
var remote = map__51600__$1;
var abort_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51600__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
if(cljs.core.truth_(abort_BANG_)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__51601){
var map__51602 = p__51601;
var map__51602__$1 = cljs.core.__destructure_map(map__51602);
var send_node = map__51602__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51602__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51602__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var aid = com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(aid,abort_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,send_node);
} else {
if(cljs.core.truth_(active_QMARK_)){
(abort_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_BANG_.cljs$core$IFn$_invoke$arity$2(remote,abort_id) : abort_BANG_.call(null,remote,abort_id));

return result;
} else {
var G__51603_51923 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Cancelled",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__51603_51923) : result_handler.call(null,G__51603_51923));

return result;

}
}
}),cljs.core.PersistentVector.EMPTY,send_queue);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,925,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot abort network requests. The remote has no abort support! See https://book.fulcrologic.com/#err-txp-cant-abort"], null);
}),null)),null,1020789063,null);

return send_queue;
}
});
/**
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_BANG_(app__$1,abort_id){
var map__51604 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__51604__$1 = cljs.core.__destructure_map(map__51604);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51604__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var runtime_state = cljs.core.deref(runtime_atom);
var map__51605 = runtime_state;
var map__51605__$1 = cljs.core.__destructure_map(map__51605);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51605__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517));
var send_queues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51605__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807));
var remote_names = cljs.core.keys(send_queues);
var new_send_queues = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,remote_name){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,remote_name,com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_elements_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(remotes,remote_name),cljs.core.get.cljs$core$IFn$_invoke$arity$2(send_queues,remote_name),abort_id));
}),cljs.core.PersistentArrayMap.EMPTY,remote_names);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),new_send_queues);
});
/**
 * Cause everything in the active network queue for remote to be cancelled. Any result that (finally) appears for aborted
 *   items will be ignored. This will cause a hard error to be "received" as the result for everything
 *   that is in the send queue of the given remote.
 * 
 *   This function is mainly meant for use in development mode when dealing with a buggy remote implementation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_remote_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$abort_remote_BANG_(app_ish,remote){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app_ish);
var map__51606 = com.fulcrologic.fulcro.raw.components.any__GT_app(app__$1);
var map__51606__$1 = cljs.core.__destructure_map(map__51606);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__51607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517),remote], null));
var map__51607__$1 = cljs.core.__destructure_map(map__51607);
var the_remote = map__51607__$1;
var abort_network_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51607__$1,new cljs.core.Keyword(null,"abort!","abort!",-220883953));
var old_send_queue = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(runtime_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing/send-queues",-1776480807),remote], null),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([remote], 0));

var seq__51608 = cljs.core.seq(old_send_queue);
var chunk__51613 = null;
var count__51614 = (0);
var i__51615 = (0);
while(true){
if((i__51615 < count__51614)){
var map__51638 = chunk__51613.cljs$core$IIndexed$_nth$arity$2(null,i__51615);
var map__51638__$1 = cljs.core.__destructure_map(map__51638);
var send_node = map__51638__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51638__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51638__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__51616_51924 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__51617_51925 = null;
var count__51618_51926 = (0);
var i__51619_51927 = (0);
while(true){
if((i__51619_51927 < count__51618_51926)){
var aid_51928 = chunk__51617_51925.cljs$core$IIndexed$_nth$arity$2(null,i__51619_51927);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_51928) : abort_network_BANG_.call(null,the_remote,aid_51928));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,aid_51928,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,aid_51928,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-429088184,null);
}
} else {
}

var G__51644_51929 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__51644_51929) : result_handler.call(null,G__51644_51929));
}catch (e51643){var e_51930 = e51643;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,e_51930,aid_51928,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51930,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,e_51930,aid_51928,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-61051597,null);
}

var G__51931 = seq__51616_51924;
var G__51932 = chunk__51617_51925;
var G__51933 = count__51618_51926;
var G__51934 = (i__51619_51927 + (1));
seq__51616_51924 = G__51931;
chunk__51617_51925 = G__51932;
count__51618_51926 = G__51933;
i__51619_51927 = G__51934;
continue;
} else {
var temp__5816__auto___51935 = cljs.core.seq(seq__51616_51924);
if(temp__5816__auto___51935){
var seq__51616_51936__$1 = temp__5816__auto___51935;
if(cljs.core.chunked_seq_QMARK_(seq__51616_51936__$1)){
var c__5521__auto___51937 = cljs.core.chunk_first(seq__51616_51936__$1);
var G__51938 = cljs.core.chunk_rest(seq__51616_51936__$1);
var G__51939 = c__5521__auto___51937;
var G__51940 = cljs.core.count(c__5521__auto___51937);
var G__51941 = (0);
seq__51616_51924 = G__51938;
chunk__51617_51925 = G__51939;
count__51618_51926 = G__51940;
i__51619_51927 = G__51941;
continue;
} else {
var aid_51942 = cljs.core.first(seq__51616_51936__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_51942) : abort_network_BANG_.call(null,the_remote,aid_51942));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,aid_51942,seq__51616_51936__$1,temp__5816__auto___51935,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,aid_51942,seq__51616_51936__$1,temp__5816__auto___51935,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1971982600,null);
}
} else {
}

var G__51646_51943 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__51646_51943) : result_handler.call(null,G__51646_51943));
}catch (e51645){var e_51944 = e51645;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,e_51944,aid_51942,seq__51616_51936__$1,temp__5816__auto___51935,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51944,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__51616_51924,chunk__51617_51925,count__51618_51926,i__51619_51927,seq__51608,chunk__51613,count__51614,i__51615,e_51944,aid_51942,seq__51616_51936__$1,temp__5816__auto___51935,map__51638,map__51638__$1,send_node,active_QMARK_,result_handler,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1832141011,null);
}

var G__51945 = cljs.core.next(seq__51616_51936__$1);
var G__51946 = null;
var G__51947 = (0);
var G__51948 = (0);
seq__51616_51924 = G__51945;
chunk__51617_51925 = G__51946;
count__51618_51926 = G__51947;
i__51619_51927 = G__51948;
continue;
}
} else {
}
}
break;
}

var G__51949 = seq__51608;
var G__51950 = chunk__51613;
var G__51951 = count__51614;
var G__51952 = (i__51615 + (1));
seq__51608 = G__51949;
chunk__51613 = G__51950;
count__51614 = G__51951;
i__51615 = G__51952;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__51608);
if(temp__5816__auto__){
var seq__51608__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51608__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__51608__$1);
var G__51953 = cljs.core.chunk_rest(seq__51608__$1);
var G__51954 = c__5521__auto__;
var G__51955 = cljs.core.count(c__5521__auto__);
var G__51956 = (0);
seq__51608 = G__51953;
chunk__51613 = G__51954;
count__51614 = G__51955;
i__51615 = G__51956;
continue;
} else {
var map__51647 = cljs.core.first(seq__51608__$1);
var map__51647__$1 = cljs.core.__destructure_map(map__51647);
var send_node = map__51647__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517));
var result_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209));
var seq__51609_51957 = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.node_abort_id(send_node));
var chunk__51610_51958 = null;
var count__51611_51959 = (0);
var i__51612_51960 = (0);
while(true){
if((i__51612_51960 < count__51611_51959)){
var aid_51961 = chunk__51610_51958.cljs$core$IIndexed$_nth$arity$2(null,i__51612_51960);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_51961) : abort_network_BANG_.call(null,the_remote,aid_51961));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,aid_51961,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,aid_51961,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,1291625500,null);
}
} else {
}

var G__51653_51962 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__51653_51962) : result_handler.call(null,G__51653_51962));
}catch (e51652){var e_51963 = e51652;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,e_51963,aid_51961,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51963,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,e_51963,aid_51961,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,-1469649864,null);
}

var G__51964 = seq__51609_51957;
var G__51965 = chunk__51610_51958;
var G__51966 = count__51611_51959;
var G__51967 = (i__51612_51960 + (1));
seq__51609_51957 = G__51964;
chunk__51610_51958 = G__51965;
count__51611_51959 = G__51966;
i__51612_51960 = G__51967;
continue;
} else {
var temp__5816__auto___51968__$1 = cljs.core.seq(seq__51609_51957);
if(temp__5816__auto___51968__$1){
var seq__51609_51969__$1 = temp__5816__auto___51968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51609_51969__$1)){
var c__5521__auto___51970 = cljs.core.chunk_first(seq__51609_51969__$1);
var G__51971 = cljs.core.chunk_rest(seq__51609_51969__$1);
var G__51972 = c__5521__auto___51970;
var G__51973 = cljs.core.count(c__5521__auto___51970);
var G__51974 = (0);
seq__51609_51957 = G__51971;
chunk__51610_51958 = G__51972;
count__51611_51959 = G__51973;
i__51612_51960 = G__51974;
continue;
} else {
var aid_51975 = cljs.core.first(seq__51609_51969__$1);
try{if(cljs.core.truth_(active_QMARK_)){
if(cljs.core.truth_(abort_network_BANG_)){
(abort_network_BANG_.cljs$core$IFn$_invoke$arity$2 ? abort_network_BANG_.cljs$core$IFn$_invoke$arity$2(the_remote,aid_51975) : abort_network_BANG_.call(null,the_remote,aid_51975));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,965,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,aid_51975,seq__51609_51969__$1,temp__5816__auto___51968__$1,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remote does not support abort. Clearing the queue, but a spurious result may still appear. See https://book.fulcrologic.com/#warn-tx-remote-abort-not-supported"], null);
});})(seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,aid_51975,seq__51609_51969__$1,temp__5816__auto___51968__$1,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,498842110,null);
}
} else {
}

var G__51655_51976 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(500),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Globally Aborted",new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","aborted?","com.fulcrologic.fulcro.algorithms.tx-processing/aborted?",2086149958),true], null);
(result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__51655_51976) : result_handler.call(null,G__51655_51976));
}catch (e51654){var e_51977 = e51654;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.batched-processing",null,971,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,e_51977,aid_51975,seq__51609_51969__$1,temp__5816__auto___51968__$1,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_51977,"Failed to abort send node. See https://book.fulcrologic.com/#err-txp-abort-failed"], null);
});})(seq__51609_51957,chunk__51610_51958,count__51611_51959,i__51612_51960,seq__51608,chunk__51613,count__51614,i__51615,e_51977,aid_51975,seq__51609_51969__$1,temp__5816__auto___51968__$1,map__51647,map__51647__$1,send_node,active_QMARK_,result_handler,seq__51608__$1,temp__5816__auto__,app__$1,map__51606,map__51606__$1,state_atom,runtime_atom,map__51607,map__51607__$1,the_remote,abort_network_BANG_,old_send_queue))
,null)),null,2033433337,null);
}

var G__51978 = cljs.core.next(seq__51609_51969__$1);
var G__51979 = null;
var G__51980 = (0);
var G__51981 = (0);
seq__51609_51957 = G__51978;
chunk__51610_51958 = G__51979;
count__51611_51959 = G__51980;
i__51612_51960 = G__51981;
continue;
}
} else {
}
}
break;
}

var G__51982 = cljs.core.next(seq__51608__$1);
var G__51983 = null;
var G__51984 = (0);
var G__51985 = (0);
seq__51608 = G__51982;
chunk__51613 = G__51983;
count__51614 = G__51984;
i__51615 = G__51985;
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
 * Modify the given fulcro app so that it does reads in batches when possible. Requires server support (which is
 *   provided by Fulcro's handle-api-request), and a remote that can handle raw requests (see the latest http-remote).
 * 
 *   Defaults to enabling batching on all remotes, but if any of your client-side remote code or servers do not support
 *   batching, pass the `remotes` option, which is a set of keywords that names the remotes on which batching should
 *   be enabled.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads = (function com$fulcrologic$fulcro$algorithms$tx_processing$batched_processing$with_batched_reads(var_args){
var G__51657 = arguments.length;
switch (G__51657) {
case 1:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2(app__$1,null);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,remotes){
var remotes__$1 = (function (){var or__4998__auto__ = remotes;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var G__51658 = app__$1;
var G__51658__$1 = (((G__51658 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__51658));
var G__51658__$2 = (((G__51658__$1 == null))?null:cljs.core.deref(G__51658__$1));
var G__51658__$3 = (((G__51658__$2 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(G__51658__$2));
if((G__51658__$3 == null)){
return null;
} else {
return cljs.core.keys(G__51658__$3);
}
}
})();
var batching_enabled = ((cljs.core.seq(remotes__$1))?cljs.core.zipmap(remotes__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true)):cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.default_tx_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123)], null),com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.abort_BANG_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","config","com.fulcrologic.fulcro.application/config",-1907926684),new cljs.core.Keyword(null,"batching-enabled","batching-enabled",617647692)], null),batching_enabled);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.with_batched_reads.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.batched_processing.js.map
