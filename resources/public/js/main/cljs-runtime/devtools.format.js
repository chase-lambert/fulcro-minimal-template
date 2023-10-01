goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_29342 = (function (value){
var x__5346__auto__ = (((value == null))?null:value);
var m__5347__auto__ = (devtools.format._header[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5347__auto__.call(null,value));
} else {
var m__5345__auto__ = (devtools.format._header["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5345__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_29342(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_29349 = (function (value){
var x__5346__auto__ = (((value == null))?null:value);
var m__5347__auto__ = (devtools.format._has_body[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5347__auto__.call(null,value));
} else {
var m__5345__auto__ = (devtools.format._has_body["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5345__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_29349(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_29350 = (function (value){
var x__5346__auto__ = (((value == null))?null:value);
var m__5347__auto__ = (devtools.format._body[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5347__auto__.call(null,value));
} else {
var m__5345__auto__ = (devtools.format._body["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5345__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_29350(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5814__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5814__auto__)){
var o29151 = temp__5814__auto__;
var temp__5814__auto____$1 = (o29151["formatters"]);
if(cljs.core.truth_(temp__5814__auto____$1)){
var o29152 = temp__5814__auto____$1;
var temp__5814__auto____$2 = (o29152["templating"]);
if(cljs.core.truth_(temp__5814__auto____$2)){
var o29153 = temp__5814__auto____$2;
return (o29153["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5814__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5814__auto__)){
var o29154 = temp__5814__auto__;
var temp__5814__auto____$1 = (o29154["formatters"]);
if(cljs.core.truth_(temp__5814__auto____$1)){
var o29155 = temp__5814__auto____$1;
var temp__5814__auto____$2 = (o29155["templating"]);
if(cljs.core.truth_(temp__5814__auto____$2)){
var o29156 = temp__5814__auto____$2;
return (o29156["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5814__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5814__auto__)){
var o29164 = temp__5814__auto__;
var temp__5814__auto____$1 = (o29164["formatters"]);
if(cljs.core.truth_(temp__5814__auto____$1)){
var o29165 = temp__5814__auto____$1;
var temp__5814__auto____$2 = (o29165["templating"]);
if(cljs.core.truth_(temp__5814__auto____$2)){
var o29166 = temp__5814__auto____$2;
return (o29166["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5814__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5814__auto__)){
var o29170 = temp__5814__auto__;
var temp__5814__auto____$1 = (o29170["formatters"]);
if(cljs.core.truth_(temp__5814__auto____$1)){
var o29171 = temp__5814__auto____$1;
var temp__5814__auto____$2 = (o29171["templating"]);
if(cljs.core.truth_(temp__5814__auto____$2)){
var o29172 = temp__5814__auto____$2;
return (o29172["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5814__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5814__auto__)){
var o29176 = temp__5814__auto__;
var temp__5814__auto____$1 = (o29176["formatters"]);
if(cljs.core.truth_(temp__5814__auto____$1)){
var o29177 = temp__5814__auto____$1;
var temp__5814__auto____$2 = (o29177["templating"]);
if(cljs.core.truth_(temp__5814__auto____$2)){
var o29178 = temp__5814__auto____$2;
return (o29178["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5814__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5814__auto__)){
var o29195 = temp__5814__auto__;
var temp__5814__auto____$1 = (o29195["formatters"]);
if(cljs.core.truth_(temp__5814__auto____$1)){
var o29196 = temp__5814__auto____$1;
var temp__5814__auto____$2 = (o29196["markup"]);
if(cljs.core.truth_(temp__5814__auto____$2)){
var o29197 = temp__5814__auto____$2;
return (o29197["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5814__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5814__auto__)){
var o29198 = temp__5814__auto__;
var temp__5814__auto____$1 = (o29198["formatters"]);
if(cljs.core.truth_(temp__5814__auto____$1)){
var o29199 = temp__5814__auto____$1;
var temp__5814__auto____$2 = (o29199["markup"]);
if(cljs.core.truth_(temp__5814__auto____$2)){
var o29200 = temp__5814__auto____$2;
return (o29200["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29365 = arguments.length;
var i__5723__auto___29366 = (0);
while(true){
if((i__5723__auto___29366 < len__5722__auto___29365)){
args__5728__auto__.push((arguments[i__5723__auto___29366]));

var G__29367 = (i__5723__auto___29366 + (1));
i__5723__auto___29366 = G__29367;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq29227){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29227));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29403 = arguments.length;
var i__5723__auto___29404 = (0);
while(true){
if((i__5723__auto___29404 < len__5722__auto___29403)){
args__5728__auto__.push((arguments[i__5723__auto___29404]));

var G__29405 = (i__5723__auto___29404 + (1));
i__5723__auto___29404 = G__29405;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq29253){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29253));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29406 = arguments.length;
var i__5723__auto___29407 = (0);
while(true){
if((i__5723__auto___29407 < len__5722__auto___29406)){
args__5728__auto__.push((arguments[i__5723__auto___29407]));

var G__29408 = (i__5723__auto___29407 + (1));
i__5723__auto___29407 = G__29408;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq29261){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29261));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29409 = arguments.length;
var i__5723__auto___29410 = (0);
while(true){
if((i__5723__auto___29410 < len__5722__auto___29409)){
args__5728__auto__.push((arguments[i__5723__auto___29410]));

var G__29411 = (i__5723__auto___29410 + (1));
i__5723__auto___29410 = G__29411;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq29263){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29263));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29414 = arguments.length;
var i__5723__auto___29415 = (0);
while(true){
if((i__5723__auto___29415 < len__5722__auto___29414)){
args__5728__auto__.push((arguments[i__5723__auto___29415]));

var G__29416 = (i__5723__auto___29415 + (1));
i__5723__auto___29415 = G__29416;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq29270){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29270));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29418 = arguments.length;
var i__5723__auto___29419 = (0);
while(true){
if((i__5723__auto___29419 < len__5722__auto___29418)){
args__5728__auto__.push((arguments[i__5723__auto___29419]));

var G__29420 = (i__5723__auto___29419 + (1));
i__5723__auto___29419 = G__29420;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq29281){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29281));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29424 = arguments.length;
var i__5723__auto___29425 = (0);
while(true){
if((i__5723__auto___29425 < len__5722__auto___29424)){
args__5728__auto__.push((arguments[i__5723__auto___29425]));

var G__29426 = (i__5723__auto___29425 + (1));
i__5723__auto___29425 = G__29426;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq29285){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29285));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29428 = arguments.length;
var i__5723__auto___29429 = (0);
while(true){
if((i__5723__auto___29429 < len__5722__auto___29428)){
args__5728__auto__.push((arguments[i__5723__auto___29429]));

var G__29430 = (i__5723__auto___29429 + (1));
i__5723__auto___29429 = G__29430;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29301){
var vec__29302 = p__29301;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29302,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__29297_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__29297_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq29298){
var G__29299 = cljs.core.first(seq29298);
var seq29298__$1 = cljs.core.next(seq29298);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29299,seq29298__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__29315 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__29316 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__29317 = (function (){var G__29318 = new cljs.core.Keyword(null,"li","li",723558921);
var G__29319 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__29320 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__29318,G__29319,G__29320) : devtools.format.make_template_fn.call(null,G__29318,G__29319,G__29320));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__29315,G__29316,G__29317) : devtools.format.make_template_fn.call(null,G__29315,G__29316,G__29317));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29432 = arguments.length;
var i__5723__auto___29433 = (0);
while(true){
if((i__5723__auto___29433 < len__5722__auto___29432)){
args__5728__auto__.push((arguments[i__5723__auto___29433]));

var G__29434 = (i__5723__auto___29433 + (1));
i__5723__auto___29433 = G__29434;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq29321){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29321));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5728__auto__ = [];
var len__5722__auto___29442 = arguments.length;
var i__5723__auto___29443 = (0);
while(true){
if((i__5723__auto___29443 < len__5722__auto___29442)){
args__5728__auto__.push((arguments[i__5723__auto___29443]));

var G__29444 = (i__5723__auto___29443 + (1));
i__5723__auto___29443 = G__29444;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq29329){
var G__29330 = cljs.core.first(seq29329);
var seq29329__$1 = cljs.core.next(seq29329);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29330,seq29329__$1);
}));


//# sourceMappingURL=devtools.format.js.map
