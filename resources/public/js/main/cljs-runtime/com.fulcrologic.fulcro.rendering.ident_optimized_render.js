goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4996__auto__ = c;
if(cljs.core.truth_(and__4996__auto__)){
return ident;
} else {
return and__4996__auto__;
}
})())){
var map__53859 = app__$1;
var map__53859__$1 = cljs.core.__destructure_map(map__53859);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4998__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__53861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__53862 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__53861,G__53862) : com.fulcrologic.fulcro.components.computed.call(null,G__53861,G__53862));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,1572309644,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__53863 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__53863) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__53863));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1310274167,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__53864 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__53865 = null;
var count__53866 = (0);
var i__53867 = (0);
while(true){
if((i__53867 < count__53866)){
var c = chunk__53865.cljs$core$IIndexed$_nth$arity$2(null,i__53867);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__53932 = seq__53864;
var G__53933 = chunk__53865;
var G__53934 = count__53866;
var G__53935 = (i__53867 + (1));
seq__53864 = G__53932;
chunk__53865 = G__53933;
count__53866 = G__53934;
i__53867 = G__53935;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__53864);
if(temp__5816__auto__){
var seq__53864__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53864__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__53864__$1);
var G__53936 = cljs.core.chunk_rest(seq__53864__$1);
var G__53937 = c__5521__auto__;
var G__53938 = cljs.core.count(c__5521__auto__);
var G__53939 = (0);
seq__53864 = G__53936;
chunk__53865 = G__53937;
count__53866 = G__53938;
i__53867 = G__53939;
continue;
} else {
var c = cljs.core.first(seq__53864__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__53940 = cljs.core.next(seq__53864__$1);
var G__53941 = null;
var G__53942 = (0);
var G__53943 = (0);
seq__53864 = G__53940;
chunk__53865 = G__53941;
count__53866 = G__53942;
i__53867 = G__53943;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__53868 = app__$1;
var map__53868__$1 = cljs.core.__destructure_map(map__53868);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53868__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__53869 = cljs.core.deref(runtime_atom);
var map__53869__$1 = cljs.core.__destructure_map(map__53869);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53869__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__53870 = indexes;
var map__53870__$1 = cljs.core.__destructure_map(map__53870);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53870__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53870__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53870__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4998__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__53871 = cljs.core.seq(classes);
var chunk__53872 = null;
var count__53873 = (0);
var i__53874 = (0);
while(true){
if((i__53874 < count__53873)){
var class$ = chunk__53872.cljs$core$IIndexed$_nth$arity$2(null,i__53874);
var seq__53887_53944 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__53889_53945 = null;
var count__53890_53946 = (0);
var i__53891_53947 = (0);
while(true){
if((i__53891_53947 < count__53890_53946)){
var component_53948 = chunk__53889_53945.cljs$core$IIndexed$_nth$arity$2(null,i__53891_53947);
var component_ident_53949 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53948) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53948));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53949,component_53948);


var G__53950 = seq__53887_53944;
var G__53951 = chunk__53889_53945;
var G__53952 = count__53890_53946;
var G__53953 = (i__53891_53947 + (1));
seq__53887_53944 = G__53950;
chunk__53889_53945 = G__53951;
count__53890_53946 = G__53952;
i__53891_53947 = G__53953;
continue;
} else {
var temp__5816__auto___53954 = cljs.core.seq(seq__53887_53944);
if(temp__5816__auto___53954){
var seq__53887_53955__$1 = temp__5816__auto___53954;
if(cljs.core.chunked_seq_QMARK_(seq__53887_53955__$1)){
var c__5521__auto___53956 = cljs.core.chunk_first(seq__53887_53955__$1);
var G__53957 = cljs.core.chunk_rest(seq__53887_53955__$1);
var G__53958 = c__5521__auto___53956;
var G__53959 = cljs.core.count(c__5521__auto___53956);
var G__53960 = (0);
seq__53887_53944 = G__53957;
chunk__53889_53945 = G__53958;
count__53890_53946 = G__53959;
i__53891_53947 = G__53960;
continue;
} else {
var component_53961 = cljs.core.first(seq__53887_53955__$1);
var component_ident_53962 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53961) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53961));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53962,component_53961);


var G__53963 = cljs.core.next(seq__53887_53955__$1);
var G__53964 = null;
var G__53965 = (0);
var G__53966 = (0);
seq__53887_53944 = G__53963;
chunk__53889_53945 = G__53964;
count__53890_53946 = G__53965;
i__53891_53947 = G__53966;
continue;
}
} else {
}
}
break;
}


var G__53967 = seq__53871;
var G__53968 = chunk__53872;
var G__53969 = count__53873;
var G__53970 = (i__53874 + (1));
seq__53871 = G__53967;
chunk__53872 = G__53968;
count__53873 = G__53969;
i__53874 = G__53970;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__53871);
if(temp__5816__auto__){
var seq__53871__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53871__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__53871__$1);
var G__53971 = cljs.core.chunk_rest(seq__53871__$1);
var G__53972 = c__5521__auto__;
var G__53973 = cljs.core.count(c__5521__auto__);
var G__53974 = (0);
seq__53871 = G__53971;
chunk__53872 = G__53972;
count__53873 = G__53973;
i__53874 = G__53974;
continue;
} else {
var class$ = cljs.core.first(seq__53871__$1);
var seq__53893_53975 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__53895_53976 = null;
var count__53896_53977 = (0);
var i__53897_53978 = (0);
while(true){
if((i__53897_53978 < count__53896_53977)){
var component_53979 = chunk__53895_53976.cljs$core$IIndexed$_nth$arity$2(null,i__53897_53978);
var component_ident_53980 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53979) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53979));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53980,component_53979);


var G__53981 = seq__53893_53975;
var G__53982 = chunk__53895_53976;
var G__53983 = count__53896_53977;
var G__53984 = (i__53897_53978 + (1));
seq__53893_53975 = G__53981;
chunk__53895_53976 = G__53982;
count__53896_53977 = G__53983;
i__53897_53978 = G__53984;
continue;
} else {
var temp__5816__auto___53985__$1 = cljs.core.seq(seq__53893_53975);
if(temp__5816__auto___53985__$1){
var seq__53893_53986__$1 = temp__5816__auto___53985__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53893_53986__$1)){
var c__5521__auto___53987 = cljs.core.chunk_first(seq__53893_53986__$1);
var G__53988 = cljs.core.chunk_rest(seq__53893_53986__$1);
var G__53989 = c__5521__auto___53987;
var G__53990 = cljs.core.count(c__5521__auto___53987);
var G__53991 = (0);
seq__53893_53975 = G__53988;
chunk__53895_53976 = G__53989;
count__53896_53977 = G__53990;
i__53897_53978 = G__53991;
continue;
} else {
var component_53992 = cljs.core.first(seq__53893_53986__$1);
var component_ident_53993 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_53992) : com.fulcrologic.fulcro.components.get_ident.call(null,component_53992));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_53993,component_53992);


var G__53994 = cljs.core.next(seq__53893_53986__$1);
var G__53995 = null;
var G__53996 = (0);
var G__53997 = (0);
seq__53893_53975 = G__53994;
chunk__53895_53976 = G__53995;
count__53896_53977 = G__53996;
i__53897_53978 = G__53997;
continue;
}
} else {
}
}
break;
}


var G__53998 = cljs.core.next(seq__53871__$1);
var G__53999 = null;
var G__54000 = (0);
var G__54001 = (0);
seq__53871 = G__53998;
chunk__53872 = G__53999;
count__53873 = G__54000;
i__53874 = G__54001;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__53901 = app__$1;
var map__53901__$1 = cljs.core.__destructure_map(map__53901);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53901__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__53902 = cljs.core.deref(runtime_atom);
var map__53902__$1 = cljs.core.__destructure_map(map__53902);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53902__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__53903 = indexes;
var map__53903__$1 = cljs.core.__destructure_map(map__53903);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53903__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53903__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53899_SHARP_,p2__53900_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__53899_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__53900_SHARP_) : class__GT_components.call(null,p2__53900_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__53904 = app__$1;
var map__53904__$1 = cljs.core.__destructure_map(map__53904);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53904__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53904__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__53905 = cljs.core.deref(runtime_atom);
var map__53905__$1 = cljs.core.__destructure_map(map__53905);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__53906 = indexes;
var map__53906__$1 = cljs.core.__destructure_map(map__53906);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53906__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53906__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53906__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53906__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__53907 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__53907__$1 = cljs.core.__destructure_map(map__53907);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53907__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53907__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__53908_54010 = cljs.core.seq(limited_to_render);
var chunk__53910_54011 = null;
var count__53911_54012 = (0);
var i__53912_54013 = (0);
while(true){
if((i__53912_54013 < count__53911_54012)){
var c_54014 = chunk__53910_54011.cljs$core$IIndexed$_nth$arity$2(null,i__53912_54013);
var ident_54015 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_54014) : com.fulcrologic.fulcro.components.get_ident.call(null,c_54014));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_54015,c_54014);


var G__54016 = seq__53908_54010;
var G__54017 = chunk__53910_54011;
var G__54018 = count__53911_54012;
var G__54019 = (i__53912_54013 + (1));
seq__53908_54010 = G__54016;
chunk__53910_54011 = G__54017;
count__53911_54012 = G__54018;
i__53912_54013 = G__54019;
continue;
} else {
var temp__5816__auto___54020 = cljs.core.seq(seq__53908_54010);
if(temp__5816__auto___54020){
var seq__53908_54021__$1 = temp__5816__auto___54020;
if(cljs.core.chunked_seq_QMARK_(seq__53908_54021__$1)){
var c__5521__auto___54022 = cljs.core.chunk_first(seq__53908_54021__$1);
var G__54023 = cljs.core.chunk_rest(seq__53908_54021__$1);
var G__54024 = c__5521__auto___54022;
var G__54025 = cljs.core.count(c__5521__auto___54022);
var G__54026 = (0);
seq__53908_54010 = G__54023;
chunk__53910_54011 = G__54024;
count__53911_54012 = G__54025;
i__53912_54013 = G__54026;
continue;
} else {
var c_54027 = cljs.core.first(seq__53908_54021__$1);
var ident_54028 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_54027) : com.fulcrologic.fulcro.components.get_ident.call(null,c_54027));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_54028,c_54027);


var G__54029 = cljs.core.next(seq__53908_54021__$1);
var G__54030 = null;
var G__54031 = (0);
var G__54032 = (0);
seq__53908_54010 = G__54029;
chunk__53910_54011 = G__54030;
count__53911_54012 = G__54031;
i__53912_54013 = G__54032;
continue;
}
} else {
}
}
break;
}

var seq__53914 = cljs.core.seq(limited_idents);
var chunk__53915 = null;
var count__53916 = (0);
var i__53917 = (0);
while(true){
if((i__53917 < count__53916)){
var i = chunk__53915.cljs$core$IIndexed$_nth$arity$2(null,i__53917);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__54033 = seq__53914;
var G__54034 = chunk__53915;
var G__54035 = count__53916;
var G__54036 = (i__53917 + (1));
seq__53914 = G__54033;
chunk__53915 = G__54034;
count__53916 = G__54035;
i__53917 = G__54036;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__53914);
if(temp__5816__auto__){
var seq__53914__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53914__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__53914__$1);
var G__54037 = cljs.core.chunk_rest(seq__53914__$1);
var G__54038 = c__5521__auto__;
var G__54039 = cljs.core.count(c__5521__auto__);
var G__54040 = (0);
seq__53914 = G__54037;
chunk__53915 = G__54038;
count__53916 = G__54039;
i__53917 = G__54040;
continue;
} else {
var i = cljs.core.first(seq__53914__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__54041 = cljs.core.next(seq__53914__$1);
var G__54042 = null;
var G__54043 = (0);
var G__54044 = (0);
seq__53914 = G__54041;
chunk__53915 = G__54042;
count__53916 = G__54043;
i__53917 = G__54044;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4998__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__53918 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__53918__$1 = cljs.core.__destructure_map(map__53918);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53918__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53918__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__53919_54045 = cljs.core.seq(all_idents);
var chunk__53920_54046 = null;
var count__53921_54047 = (0);
var i__53922_54048 = (0);
while(true){
if((i__53922_54048 < count__53921_54047)){
var i_54049 = chunk__53920_54046.cljs$core$IIndexed$_nth$arity$2(null,i__53922_54048);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_54049);


var G__54050 = seq__53919_54045;
var G__54051 = chunk__53920_54046;
var G__54052 = count__53921_54047;
var G__54053 = (i__53922_54048 + (1));
seq__53919_54045 = G__54050;
chunk__53920_54046 = G__54051;
count__53921_54047 = G__54052;
i__53922_54048 = G__54053;
continue;
} else {
var temp__5816__auto___54054 = cljs.core.seq(seq__53919_54045);
if(temp__5816__auto___54054){
var seq__53919_54055__$1 = temp__5816__auto___54054;
if(cljs.core.chunked_seq_QMARK_(seq__53919_54055__$1)){
var c__5521__auto___54056 = cljs.core.chunk_first(seq__53919_54055__$1);
var G__54057 = cljs.core.chunk_rest(seq__53919_54055__$1);
var G__54058 = c__5521__auto___54056;
var G__54059 = cljs.core.count(c__5521__auto___54056);
var G__54060 = (0);
seq__53919_54045 = G__54057;
chunk__53920_54046 = G__54058;
count__53921_54047 = G__54059;
i__53922_54048 = G__54060;
continue;
} else {
var i_54061 = cljs.core.first(seq__53919_54055__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_54061);


var G__54062 = cljs.core.next(seq__53919_54055__$1);
var G__54063 = null;
var G__54064 = (0);
var G__54065 = (0);
seq__53919_54045 = G__54062;
chunk__53920_54046 = G__54063;
count__53921_54047 = G__54064;
i__53922_54048 = G__54065;
continue;
}
} else {
}
}
break;
}

var seq__53923 = cljs.core.seq(extra_to_force);
var chunk__53924 = null;
var count__53925 = (0);
var i__53926 = (0);
while(true){
if((i__53926 < count__53925)){
var c = chunk__53924.cljs$core$IIndexed$_nth$arity$2(null,i__53926);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__54066 = seq__53923;
var G__54067 = chunk__53924;
var G__54068 = count__53925;
var G__54069 = (i__53926 + (1));
seq__53923 = G__54066;
chunk__53924 = G__54067;
count__53925 = G__54068;
i__53926 = G__54069;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__53923);
if(temp__5816__auto__){
var seq__53923__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53923__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__53923__$1);
var G__54070 = cljs.core.chunk_rest(seq__53923__$1);
var G__54071 = c__5521__auto__;
var G__54072 = cljs.core.count(c__5521__auto__);
var G__54073 = (0);
seq__53923 = G__54070;
chunk__53924 = G__54071;
count__53925 = G__54072;
i__53926 = G__54073;
continue;
} else {
var c = cljs.core.first(seq__53923__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__54074 = cljs.core.next(seq__53923__$1);
var G__54075 = null;
var G__54076 = (0);
var G__54077 = (0);
seq__53923 = G__54074;
chunk__53924 = G__54075;
count__53925 = G__54076;
i__53926 = G__54077;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * DEPRECATED: Careful use of hooks/use-component will give a much more optimized experience, and async rendering in
 * React 18 may break with this renderer. Use at your own risk with React 18+.
 * 
 *   The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__53928 = arguments.length;
switch (G__53928) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__53929){
var map__53930 = p__53929;
var map__53930__$1 = cljs.core.__destructure_map(map__53930);
var options = map__53930__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4998__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e53931){var e = e53931;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,151,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,2130440771,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
