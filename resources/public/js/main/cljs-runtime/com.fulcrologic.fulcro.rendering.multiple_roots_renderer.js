goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.scope(function(){
  com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 *   Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__54588 = arguments.length;
switch (G__54588) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__54591){
var map__54592 = p__54591;
var map__54592__$1 = cljs.core.__destructure_map(map__54592);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__4998__auto__ = app__$1;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var or__4998__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4998__auto____$1)){
return or__4998__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__54593 = app__$2;
var G__54593__$1 = (((G__54593 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__54593));
var G__54593__$2 = (((G__54593__$1 == null))?null:cljs.core.deref(G__54593__$1));
if((G__54593__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__54593__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4996__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4996__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__54595_54681 = app__$2;
var G__54596_54682 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__54595_54681,G__54596_54682) : schedule_render_BANG_.call(null,G__54595_54681,G__54596_54682));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,94,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-1669351510,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,96,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,-197856274,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__54599 = arguments.length;
switch (G__54599) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__54600){
var map__54601 = p__54600;
var map__54601__$1 = cljs.core.__destructure_map(map__54601);
var options = map__54601__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54601__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__4998__auto__ = app__$1;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var or__4998__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4998__auto____$1)){
return or__4998__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,107,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-871011986,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,1497527688,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__54609 = app__$1;
var G__54609__$1 = (((G__54609 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__54609));
if((G__54609__$1 == null)){
return null;
} else {
return cljs.core.deref(G__54609__$1);
}
})();
var known_roots = (function (){var G__54610 = app__$1;
var G__54610__$1 = (((G__54610 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__54610));
var G__54610__$2 = (((G__54610__$1 == null))?null:cljs.core.deref(G__54610__$1));
if((G__54610__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__54610__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__54613 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__54615 = null;
var count__54616 = (0);
var i__54617 = (0);
while(true){
if((i__54617 < count__54616)){
var k = chunk__54615.cljs$core$IIndexed$_nth$arity$2(null,i__54617);
var cls_54689 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_54690 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_54689,state_map);
var root_props_54691 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_54690,state_map,state_map);
var seq__54638_54692 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__54639_54693 = null;
var count__54640_54694 = (0);
var i__54641_54695 = (0);
while(true){
if((i__54641_54695 < count__54640_54694)){
var root_54696 = chunk__54639_54693.cljs$core$IIndexed$_nth$arity$2(null,i__54641_54695);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_54696,root_props_54691);


var G__54697 = seq__54638_54692;
var G__54698 = chunk__54639_54693;
var G__54699 = count__54640_54694;
var G__54700 = (i__54641_54695 + (1));
seq__54638_54692 = G__54697;
chunk__54639_54693 = G__54698;
count__54640_54694 = G__54699;
i__54641_54695 = G__54700;
continue;
} else {
var temp__5816__auto___54701 = cljs.core.seq(seq__54638_54692);
if(temp__5816__auto___54701){
var seq__54638_54702__$1 = temp__5816__auto___54701;
if(cljs.core.chunked_seq_QMARK_(seq__54638_54702__$1)){
var c__5521__auto___54703 = cljs.core.chunk_first(seq__54638_54702__$1);
var G__54704 = cljs.core.chunk_rest(seq__54638_54702__$1);
var G__54705 = c__5521__auto___54703;
var G__54706 = cljs.core.count(c__5521__auto___54703);
var G__54707 = (0);
seq__54638_54692 = G__54704;
chunk__54639_54693 = G__54705;
count__54640_54694 = G__54706;
i__54641_54695 = G__54707;
continue;
} else {
var root_54708 = cljs.core.first(seq__54638_54702__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_54708,root_props_54691);


var G__54709 = cljs.core.next(seq__54638_54702__$1);
var G__54710 = null;
var G__54711 = (0);
var G__54712 = (0);
seq__54638_54692 = G__54709;
chunk__54639_54693 = G__54710;
count__54640_54694 = G__54711;
i__54641_54695 = G__54712;
continue;
}
} else {
}
}
break;
}


var G__54713 = seq__54613;
var G__54714 = chunk__54615;
var G__54715 = count__54616;
var G__54716 = (i__54617 + (1));
seq__54613 = G__54713;
chunk__54615 = G__54714;
count__54616 = G__54715;
i__54617 = G__54716;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__54613);
if(temp__5816__auto__){
var seq__54613__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54613__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__54613__$1);
var G__54717 = cljs.core.chunk_rest(seq__54613__$1);
var G__54718 = c__5521__auto__;
var G__54719 = cljs.core.count(c__5521__auto__);
var G__54720 = (0);
seq__54613 = G__54717;
chunk__54615 = G__54718;
count__54616 = G__54719;
i__54617 = G__54720;
continue;
} else {
var k = cljs.core.first(seq__54613__$1);
var cls_54721 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_54722 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_54721,state_map);
var root_props_54723 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_54722,state_map,state_map);
var seq__54647_54724 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__54648_54725 = null;
var count__54649_54726 = (0);
var i__54650_54727 = (0);
while(true){
if((i__54650_54727 < count__54649_54726)){
var root_54729 = chunk__54648_54725.cljs$core$IIndexed$_nth$arity$2(null,i__54650_54727);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_54729,root_props_54723);


var G__54731 = seq__54647_54724;
var G__54732 = chunk__54648_54725;
var G__54733 = count__54649_54726;
var G__54734 = (i__54650_54727 + (1));
seq__54647_54724 = G__54731;
chunk__54648_54725 = G__54732;
count__54649_54726 = G__54733;
i__54650_54727 = G__54734;
continue;
} else {
var temp__5816__auto___54735__$1 = cljs.core.seq(seq__54647_54724);
if(temp__5816__auto___54735__$1){
var seq__54647_54736__$1 = temp__5816__auto___54735__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54647_54736__$1)){
var c__5521__auto___54737 = cljs.core.chunk_first(seq__54647_54736__$1);
var G__54738 = cljs.core.chunk_rest(seq__54647_54736__$1);
var G__54739 = c__5521__auto___54737;
var G__54740 = cljs.core.count(c__5521__auto___54737);
var G__54741 = (0);
seq__54647_54724 = G__54738;
chunk__54648_54725 = G__54739;
count__54649_54726 = G__54740;
i__54650_54727 = G__54741;
continue;
} else {
var root_54742 = cljs.core.first(seq__54647_54736__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_54742,root_props_54723);


var G__54743 = cljs.core.next(seq__54647_54736__$1);
var G__54744 = null;
var G__54745 = (0);
var G__54746 = (0);
seq__54647_54724 = G__54743;
chunk__54648_54725 = G__54744;
count__54649_54726 = G__54745;
i__54650_54727 = G__54746;
continue;
}
} else {
}
}
break;
}


var G__54747 = cljs.core.next(seq__54613__$1);
var G__54748 = null;
var G__54749 = (0);
var G__54750 = (0);
seq__54613 = G__54747;
chunk__54615 = G__54748;
count__54616 = G__54749;
i__54617 = G__54750;
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
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__54652 = app__$1;
var map__54652__$1 = cljs.core.__destructure_map(map__54652);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54652__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__54653 = cljs.core.deref(runtime_atom);
var map__54653__$1 = cljs.core.__destructure_map(map__54653);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54653__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__54654 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__54654__$1 = cljs.core.__destructure_map(map__54654);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54654__$1,true);
var seq__54655 = cljs.core.seq(limited_idents);
var chunk__54656 = null;
var count__54657 = (0);
var i__54658 = (0);
while(true){
if((i__54658 < count__54657)){
var i = chunk__54656.cljs$core$IIndexed$_nth$arity$2(null,i__54658);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__54754 = seq__54655;
var G__54755 = chunk__54656;
var G__54756 = count__54657;
var G__54757 = (i__54658 + (1));
seq__54655 = G__54754;
chunk__54656 = G__54755;
count__54657 = G__54756;
i__54658 = G__54757;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__54655);
if(temp__5816__auto__){
var seq__54655__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54655__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__54655__$1);
var G__54759 = cljs.core.chunk_rest(seq__54655__$1);
var G__54760 = c__5521__auto__;
var G__54761 = cljs.core.count(c__5521__auto__);
var G__54762 = (0);
seq__54655 = G__54759;
chunk__54656 = G__54760;
count__54657 = G__54761;
i__54658 = G__54762;
continue;
} else {
var i = cljs.core.first(seq__54655__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__54763 = cljs.core.next(seq__54655__$1);
var G__54764 = null;
var G__54765 = (0);
var G__54766 = (0);
seq__54655 = G__54763;
chunk__54656 = G__54764;
count__54657 = G__54765;
i__54658 = G__54766;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * DEPRECATED: Floating roots can now be created with React hooks and hooks/use-component or hooks/use-fulcro.
 * 
 * The top-level call for using this optimized render in your application.
 * 
 * If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 * This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 * (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 * will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 * ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 * events that should really only affect a known set of components (like the input field).
 * 
 * This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__54660 = arguments.length;
switch (G__54660) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__54661){
var map__54662 = p__54661;
var map__54662__$1 = cljs.core.__destructure_map(map__54662);
var options = map__54662__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54662__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54662__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4998__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e54663){var e = e54663;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,158,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,46485946,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object.extend(cls.prototype,module$node_modules$react$index.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__54569__auto__ = (function (){var or__4998__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return fulcro_app;
}
})();
var _STAR_app_STAR__orig_val__54665 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__54666 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_app_STAR__temp_val__54667 = app__54569__auto__;
var _STAR_shared_STAR__temp_val__54668 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__54569__auto__);
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__54667);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__54668);

try{var state_map = (function (){var G__54669 = fulcro_app;
var G__54669__$1 = (((G__54669 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__54669));
if((G__54669__$1 == null)){
return null;
} else {
return cljs.core.deref(G__54669__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIRoot,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__54670 = props;
var G__54671 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__54670,G__54671) : ui_root.call(null,G__54670,G__54671));
}finally {(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__54666);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__54665);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__54673 = arguments.length;
switch (G__54673) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var state_map = (function (){var G__54674 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__54674__$1 = (((G__54674 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__54674));
if((G__54674__$1 == null)){
return null;
} else {
return cljs.core.deref(G__54674__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__54675 = (function (){var or__4998__auto__ = props;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__54676 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__54675,G__54676) : ui_factory.call(null,G__54675,G__54676));
});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
