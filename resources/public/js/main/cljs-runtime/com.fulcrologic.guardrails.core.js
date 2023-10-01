goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__41048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_45103){
var state_val_45104 = (state_45103[(1)]);
if((state_val_45104 === (7))){
var inst_45099 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45105_45148 = state_45103__$1;
(statearr_45105_45148[(2)] = inst_45099);

(statearr_45105_45148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (1))){
var state_45103__$1 = state_45103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45103__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_45104 === (4))){
var inst_45101 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45103__$1,inst_45101);
} else {
if((state_val_45104 === (6))){
var inst_45097 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_45103__$1 = state_45103;
var statearr_45106_45149 = state_45103__$1;
(statearr_45106_45149[(2)] = inst_45097);

(statearr_45106_45149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (3))){
var inst_45080 = (state_45103[(7)]);
var state_45103__$1 = state_45103;
if(cljs.core.truth_(inst_45080)){
var statearr_45107_45150 = state_45103__$1;
(statearr_45107_45150[(1)] = (5));

} else {
var statearr_45108_45151 = state_45103__$1;
(statearr_45108_45151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (12))){
var inst_45094 = (state_45103[(2)]);
var inst_45080 = inst_45094;
var state_45103__$1 = (function (){var statearr_45110 = state_45103;
(statearr_45110[(7)] = inst_45080);

return statearr_45110;
})();
var statearr_45111_45152 = state_45103__$1;
(statearr_45111_45152[(2)] = null);

(statearr_45111_45152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (2))){
var inst_45079 = (state_45103[(2)]);
var inst_45080 = inst_45079;
var state_45103__$1 = (function (){var statearr_45112 = state_45103;
(statearr_45112[(7)] = inst_45080);

return statearr_45112;
})();
var statearr_45113_45153 = state_45103__$1;
(statearr_45113_45153[(2)] = null);

(statearr_45113_45153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (11))){
var _ = (function (){var statearr_45114 = state_45103;
(statearr_45114[(4)] = cljs.core.rest((state_45103[(4)])));

return statearr_45114;
})();
var state_45103__$1 = state_45103;
var ex45109 = (state_45103__$1[(2)]);
var statearr_45115_45154 = state_45103__$1;
(statearr_45115_45154[(5)] = ex45109);


var statearr_45116_45155 = state_45103__$1;
(statearr_45116_45155[(1)] = (10));

(statearr_45116_45155[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (9))){
var inst_45092 = (state_45103[(2)]);
var state_45103__$1 = (function (){var statearr_45117 = state_45103;
(statearr_45117[(8)] = inst_45092);

return statearr_45117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45103__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_45104 === (5))){
var state_45103__$1 = state_45103;
var statearr_45118_45156 = state_45103__$1;
(statearr_45118_45156[(2)] = null);

(statearr_45118_45156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (10))){
var inst_45083 = (state_45103[(2)]);
var state_45103__$1 = (function (){var statearr_45119 = state_45103;
(statearr_45119[(9)] = inst_45083);

return statearr_45119;
})();
var statearr_45120_45157 = state_45103__$1;
(statearr_45120_45157[(2)] = null);

(statearr_45120_45157[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (8))){
var inst_45080 = (state_45103[(7)]);
var _ = (function (){var statearr_45121 = state_45103;
(statearr_45121[(4)] = cljs.core.cons((11),(state_45103[(4)])));

return statearr_45121;
})();
var inst_45089 = (inst_45080.cljs$core$IFn$_invoke$arity$0 ? inst_45080.cljs$core$IFn$_invoke$arity$0() : inst_45080.call(null));
var ___$1 = (function (){var statearr_45122 = state_45103;
(statearr_45122[(4)] = cljs.core.rest((state_45103[(4)])));

return statearr_45122;
})();
var state_45103__$1 = state_45103;
var statearr_45123_45158 = state_45103__$1;
(statearr_45123_45158[(2)] = inst_45089);

(statearr_45123_45158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__40994__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__40994__auto____0 = (function (){
var statearr_45124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45124[(0)] = com$fulcrologic$guardrails$core$state_machine__40994__auto__);

(statearr_45124[(1)] = (1));

return statearr_45124;
});
var com$fulcrologic$guardrails$core$state_machine__40994__auto____1 = (function (state_45103){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_45103);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e45125){var ex__40997__auto__ = e45125;
var statearr_45126_45159 = state_45103;
(statearr_45126_45159[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_45103[(4)]))){
var statearr_45127_45160 = state_45103;
(statearr_45127_45160[(1)] = cljs.core.first((state_45103[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45161 = state_45103;
state_45103 = G__45161;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__40994__auto__ = function(state_45103){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__40994__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__40994__auto____1.call(this,state_45103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__40994__auto____0;
com$fulcrologic$guardrails$core$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__40994__auto____1;
return com$fulcrologic$guardrails$core$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_45128 = f__41049__auto__();
(statearr_45128[(6)] = c__41048__auto__);

return statearr_45128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

return c__41048__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__45129 = data;
var map__45129__$1 = cljs.core.__destructure_map(map__45129);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45129__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5816__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5816__auto__)){
var err = temp__5816__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,12041,12041,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__45130,spec,value){
var map__45131 = p__45130;
var map__45131__$1 = cljs.core.__destructure_map(map__45131);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_45162 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__45163 = (function (){var and__4996__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4996__auto__)){
return vararg_QMARK_;
} else {
return and__4996__auto__;
}
})();
var varg_45164 = (cljs.core.truth_(vargs_QMARK__45163)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_45165 = (cljs.core.truth_(vargs_QMARK__45163)?((cljs.core.map_QMARK_(varg_45164))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_45164))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_45164))):value);
var valid_exception_45166 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_45165)){
} else {
var problem_45167 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_45165,expound_opts);
var description_45168 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_45167)].join('');
var context_45169 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__4996__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__4996__auto__)){
return tap_GT__QMARK_;
} else {
return and__4996__auto__;
}
})())){
var G__45133_45170 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_45165)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__45133_45170) : com.fulcrologic.guardrails.core.tap.call(null,G__45133_45170));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_45166,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__45134 = description_45168;
if(cljs.core.truth_(context_45169)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_45169),G__45134].join('');
} else {
return G__45134;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_45169], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_45165], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_45168,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4998__auto__ = callsite;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e45132){var e_45171 = e45132;
com.fulcrologic.guardrails.utils.report_exception(e_45171,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_45172 = (com.fulcrologic.guardrails.core.now_ms() - start_45162);
if((duration_45172 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_45172),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_45166))){
throw cljs.core.deref(valid_exception_45166);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
