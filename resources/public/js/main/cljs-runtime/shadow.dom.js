goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47843 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47843(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47844 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47844(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47336 = coll;
var G__47337 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47336,G__47337) : shadow.dom.lazy_native_coll_seq.call(null,G__47336,G__47337));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4998__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47355 = arguments.length;
switch (G__47355) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47366 = arguments.length;
switch (G__47366) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47380 = arguments.length;
switch (G__47380) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47393 = arguments.length;
switch (G__47393) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47428 = arguments.length;
switch (G__47428) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47432 = arguments.length;
switch (G__47432) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47449){if((e47449 instanceof Object)){
var e = e47449;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47449;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47467 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47468 = null;
var count__47469 = (0);
var i__47470 = (0);
while(true){
if((i__47470 < count__47469)){
var el = chunk__47468.cljs$core$IIndexed$_nth$arity$2(null,i__47470);
var handler_47851__$1 = ((function (seq__47467,chunk__47468,count__47469,i__47470,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47467,chunk__47468,count__47469,i__47470,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47851__$1);


var G__47852 = seq__47467;
var G__47853 = chunk__47468;
var G__47854 = count__47469;
var G__47855 = (i__47470 + (1));
seq__47467 = G__47852;
chunk__47468 = G__47853;
count__47469 = G__47854;
i__47470 = G__47855;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47467);
if(temp__5816__auto__){
var seq__47467__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47467__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47467__$1);
var G__47856 = cljs.core.chunk_rest(seq__47467__$1);
var G__47857 = c__5521__auto__;
var G__47858 = cljs.core.count(c__5521__auto__);
var G__47859 = (0);
seq__47467 = G__47856;
chunk__47468 = G__47857;
count__47469 = G__47858;
i__47470 = G__47859;
continue;
} else {
var el = cljs.core.first(seq__47467__$1);
var handler_47860__$1 = ((function (seq__47467,chunk__47468,count__47469,i__47470,el,seq__47467__$1,temp__5816__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47467,chunk__47468,count__47469,i__47470,el,seq__47467__$1,temp__5816__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47860__$1);


var G__47861 = cljs.core.next(seq__47467__$1);
var G__47862 = null;
var G__47863 = (0);
var G__47864 = (0);
seq__47467 = G__47861;
chunk__47468 = G__47862;
count__47469 = G__47863;
i__47470 = G__47864;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47483 = arguments.length;
switch (G__47483) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47491 = cljs.core.seq(events);
var chunk__47492 = null;
var count__47493 = (0);
var i__47494 = (0);
while(true){
if((i__47494 < count__47493)){
var vec__47501 = chunk__47492.cljs$core$IIndexed$_nth$arity$2(null,i__47494);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47501,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47866 = seq__47491;
var G__47867 = chunk__47492;
var G__47868 = count__47493;
var G__47869 = (i__47494 + (1));
seq__47491 = G__47866;
chunk__47492 = G__47867;
count__47493 = G__47868;
i__47494 = G__47869;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47491);
if(temp__5816__auto__){
var seq__47491__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47491__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47491__$1);
var G__47870 = cljs.core.chunk_rest(seq__47491__$1);
var G__47871 = c__5521__auto__;
var G__47872 = cljs.core.count(c__5521__auto__);
var G__47873 = (0);
seq__47491 = G__47870;
chunk__47492 = G__47871;
count__47493 = G__47872;
i__47494 = G__47873;
continue;
} else {
var vec__47505 = cljs.core.first(seq__47491__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47505,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47874 = cljs.core.next(seq__47491__$1);
var G__47875 = null;
var G__47876 = (0);
var G__47877 = (0);
seq__47491 = G__47874;
chunk__47492 = G__47875;
count__47493 = G__47876;
i__47494 = G__47877;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47511 = cljs.core.seq(styles);
var chunk__47512 = null;
var count__47513 = (0);
var i__47514 = (0);
while(true){
if((i__47514 < count__47513)){
var vec__47521 = chunk__47512.cljs$core$IIndexed$_nth$arity$2(null,i__47514);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47521,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47878 = seq__47511;
var G__47879 = chunk__47512;
var G__47880 = count__47513;
var G__47881 = (i__47514 + (1));
seq__47511 = G__47878;
chunk__47512 = G__47879;
count__47513 = G__47880;
i__47514 = G__47881;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47511);
if(temp__5816__auto__){
var seq__47511__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47511__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47511__$1);
var G__47882 = cljs.core.chunk_rest(seq__47511__$1);
var G__47883 = c__5521__auto__;
var G__47884 = cljs.core.count(c__5521__auto__);
var G__47885 = (0);
seq__47511 = G__47882;
chunk__47512 = G__47883;
count__47513 = G__47884;
i__47514 = G__47885;
continue;
} else {
var vec__47524 = cljs.core.first(seq__47511__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47524,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47886 = cljs.core.next(seq__47511__$1);
var G__47887 = null;
var G__47888 = (0);
var G__47889 = (0);
seq__47511 = G__47886;
chunk__47512 = G__47887;
count__47513 = G__47888;
i__47514 = G__47889;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47527_47890 = key;
var G__47527_47891__$1 = (((G__47527_47890 instanceof cljs.core.Keyword))?G__47527_47890.fqn:null);
switch (G__47527_47891__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47893 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4998__auto__ = goog.string.startsWith(ks_47893,"data-");
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return goog.string.startsWith(ks_47893,"aria-");
}
})())){
el.setAttribute(ks_47893,value);
} else {
(el[ks_47893] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47528){
var map__47529 = p__47528;
var map__47529__$1 = cljs.core.__destructure_map(map__47529);
var props = map__47529__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47529__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47530 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47530,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47530,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47530,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47533 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47533,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47533;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47535 = arguments.length;
switch (G__47535) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47536){
var vec__47537 = p__47536;
var seq__47538 = cljs.core.seq(vec__47537);
var first__47539 = cljs.core.first(seq__47538);
var seq__47538__$1 = cljs.core.next(seq__47538);
var nn = first__47539;
var first__47539__$1 = cljs.core.first(seq__47538__$1);
var seq__47538__$2 = cljs.core.next(seq__47538__$1);
var np = first__47539__$1;
var nc = seq__47538__$2;
var node = vec__47537;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47540 = nn;
var G__47541 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47540,G__47541) : create_fn.call(null,G__47540,G__47541));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47542 = nn;
var G__47543 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47542,G__47543) : create_fn.call(null,G__47542,G__47543));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47544 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47544,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47544,(1),null);
var seq__47547_47898 = cljs.core.seq(node_children);
var chunk__47548_47899 = null;
var count__47549_47900 = (0);
var i__47550_47901 = (0);
while(true){
if((i__47550_47901 < count__47549_47900)){
var child_struct_47902 = chunk__47548_47899.cljs$core$IIndexed$_nth$arity$2(null,i__47550_47901);
var children_47903 = shadow.dom.dom_node(child_struct_47902);
if(cljs.core.seq_QMARK_(children_47903)){
var seq__47563_47904 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47903));
var chunk__47565_47905 = null;
var count__47566_47906 = (0);
var i__47567_47907 = (0);
while(true){
if((i__47567_47907 < count__47566_47906)){
var child_47908 = chunk__47565_47905.cljs$core$IIndexed$_nth$arity$2(null,i__47567_47907);
if(cljs.core.truth_(child_47908)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47908);


var G__47909 = seq__47563_47904;
var G__47910 = chunk__47565_47905;
var G__47911 = count__47566_47906;
var G__47912 = (i__47567_47907 + (1));
seq__47563_47904 = G__47909;
chunk__47565_47905 = G__47910;
count__47566_47906 = G__47911;
i__47567_47907 = G__47912;
continue;
} else {
var G__47913 = seq__47563_47904;
var G__47914 = chunk__47565_47905;
var G__47915 = count__47566_47906;
var G__47916 = (i__47567_47907 + (1));
seq__47563_47904 = G__47913;
chunk__47565_47905 = G__47914;
count__47566_47906 = G__47915;
i__47567_47907 = G__47916;
continue;
}
} else {
var temp__5816__auto___47917 = cljs.core.seq(seq__47563_47904);
if(temp__5816__auto___47917){
var seq__47563_47918__$1 = temp__5816__auto___47917;
if(cljs.core.chunked_seq_QMARK_(seq__47563_47918__$1)){
var c__5521__auto___47919 = cljs.core.chunk_first(seq__47563_47918__$1);
var G__47920 = cljs.core.chunk_rest(seq__47563_47918__$1);
var G__47921 = c__5521__auto___47919;
var G__47922 = cljs.core.count(c__5521__auto___47919);
var G__47923 = (0);
seq__47563_47904 = G__47920;
chunk__47565_47905 = G__47921;
count__47566_47906 = G__47922;
i__47567_47907 = G__47923;
continue;
} else {
var child_47924 = cljs.core.first(seq__47563_47918__$1);
if(cljs.core.truth_(child_47924)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47924);


var G__47925 = cljs.core.next(seq__47563_47918__$1);
var G__47926 = null;
var G__47927 = (0);
var G__47928 = (0);
seq__47563_47904 = G__47925;
chunk__47565_47905 = G__47926;
count__47566_47906 = G__47927;
i__47567_47907 = G__47928;
continue;
} else {
var G__47929 = cljs.core.next(seq__47563_47918__$1);
var G__47930 = null;
var G__47931 = (0);
var G__47932 = (0);
seq__47563_47904 = G__47929;
chunk__47565_47905 = G__47930;
count__47566_47906 = G__47931;
i__47567_47907 = G__47932;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47903);
}


var G__47933 = seq__47547_47898;
var G__47934 = chunk__47548_47899;
var G__47935 = count__47549_47900;
var G__47936 = (i__47550_47901 + (1));
seq__47547_47898 = G__47933;
chunk__47548_47899 = G__47934;
count__47549_47900 = G__47935;
i__47550_47901 = G__47936;
continue;
} else {
var temp__5816__auto___47937 = cljs.core.seq(seq__47547_47898);
if(temp__5816__auto___47937){
var seq__47547_47938__$1 = temp__5816__auto___47937;
if(cljs.core.chunked_seq_QMARK_(seq__47547_47938__$1)){
var c__5521__auto___47939 = cljs.core.chunk_first(seq__47547_47938__$1);
var G__47940 = cljs.core.chunk_rest(seq__47547_47938__$1);
var G__47941 = c__5521__auto___47939;
var G__47942 = cljs.core.count(c__5521__auto___47939);
var G__47943 = (0);
seq__47547_47898 = G__47940;
chunk__47548_47899 = G__47941;
count__47549_47900 = G__47942;
i__47550_47901 = G__47943;
continue;
} else {
var child_struct_47944 = cljs.core.first(seq__47547_47938__$1);
var children_47945 = shadow.dom.dom_node(child_struct_47944);
if(cljs.core.seq_QMARK_(children_47945)){
var seq__47569_47946 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47945));
var chunk__47571_47947 = null;
var count__47572_47948 = (0);
var i__47573_47949 = (0);
while(true){
if((i__47573_47949 < count__47572_47948)){
var child_47950 = chunk__47571_47947.cljs$core$IIndexed$_nth$arity$2(null,i__47573_47949);
if(cljs.core.truth_(child_47950)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47950);


var G__47951 = seq__47569_47946;
var G__47952 = chunk__47571_47947;
var G__47953 = count__47572_47948;
var G__47954 = (i__47573_47949 + (1));
seq__47569_47946 = G__47951;
chunk__47571_47947 = G__47952;
count__47572_47948 = G__47953;
i__47573_47949 = G__47954;
continue;
} else {
var G__47955 = seq__47569_47946;
var G__47956 = chunk__47571_47947;
var G__47957 = count__47572_47948;
var G__47958 = (i__47573_47949 + (1));
seq__47569_47946 = G__47955;
chunk__47571_47947 = G__47956;
count__47572_47948 = G__47957;
i__47573_47949 = G__47958;
continue;
}
} else {
var temp__5816__auto___47959__$1 = cljs.core.seq(seq__47569_47946);
if(temp__5816__auto___47959__$1){
var seq__47569_47960__$1 = temp__5816__auto___47959__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47569_47960__$1)){
var c__5521__auto___47961 = cljs.core.chunk_first(seq__47569_47960__$1);
var G__47962 = cljs.core.chunk_rest(seq__47569_47960__$1);
var G__47963 = c__5521__auto___47961;
var G__47964 = cljs.core.count(c__5521__auto___47961);
var G__47965 = (0);
seq__47569_47946 = G__47962;
chunk__47571_47947 = G__47963;
count__47572_47948 = G__47964;
i__47573_47949 = G__47965;
continue;
} else {
var child_47966 = cljs.core.first(seq__47569_47960__$1);
if(cljs.core.truth_(child_47966)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47966);


var G__47967 = cljs.core.next(seq__47569_47960__$1);
var G__47968 = null;
var G__47969 = (0);
var G__47970 = (0);
seq__47569_47946 = G__47967;
chunk__47571_47947 = G__47968;
count__47572_47948 = G__47969;
i__47573_47949 = G__47970;
continue;
} else {
var G__47971 = cljs.core.next(seq__47569_47960__$1);
var G__47972 = null;
var G__47973 = (0);
var G__47974 = (0);
seq__47569_47946 = G__47971;
chunk__47571_47947 = G__47972;
count__47572_47948 = G__47973;
i__47573_47949 = G__47974;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47945);
}


var G__47975 = cljs.core.next(seq__47547_47938__$1);
var G__47976 = null;
var G__47977 = (0);
var G__47978 = (0);
seq__47547_47898 = G__47975;
chunk__47548_47899 = G__47976;
count__47549_47900 = G__47977;
i__47550_47901 = G__47978;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47579 = cljs.core.seq(node);
var chunk__47580 = null;
var count__47581 = (0);
var i__47582 = (0);
while(true){
if((i__47582 < count__47581)){
var n = chunk__47580.cljs$core$IIndexed$_nth$arity$2(null,i__47582);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47980 = seq__47579;
var G__47981 = chunk__47580;
var G__47982 = count__47581;
var G__47983 = (i__47582 + (1));
seq__47579 = G__47980;
chunk__47580 = G__47981;
count__47581 = G__47982;
i__47582 = G__47983;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47579);
if(temp__5816__auto__){
var seq__47579__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47579__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47579__$1);
var G__47984 = cljs.core.chunk_rest(seq__47579__$1);
var G__47985 = c__5521__auto__;
var G__47986 = cljs.core.count(c__5521__auto__);
var G__47987 = (0);
seq__47579 = G__47984;
chunk__47580 = G__47985;
count__47581 = G__47986;
i__47582 = G__47987;
continue;
} else {
var n = cljs.core.first(seq__47579__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47988 = cljs.core.next(seq__47579__$1);
var G__47989 = null;
var G__47990 = (0);
var G__47991 = (0);
seq__47579 = G__47988;
chunk__47580 = G__47989;
count__47581 = G__47990;
i__47582 = G__47991;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47588 = arguments.length;
switch (G__47588) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47591 = arguments.length;
switch (G__47591) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47593 = arguments.length;
switch (G__47593) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4998__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5728__auto__ = [];
var len__5722__auto___47995 = arguments.length;
var i__5723__auto___47996 = (0);
while(true){
if((i__5723__auto___47996 < len__5722__auto___47995)){
args__5728__auto__.push((arguments[i__5723__auto___47996]));

var G__47997 = (i__5723__auto___47996 + (1));
i__5723__auto___47996 = G__47997;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47596_47998 = cljs.core.seq(nodes);
var chunk__47598_47999 = null;
var count__47599_48000 = (0);
var i__47600_48001 = (0);
while(true){
if((i__47600_48001 < count__47599_48000)){
var node_48002 = chunk__47598_47999.cljs$core$IIndexed$_nth$arity$2(null,i__47600_48001);
fragment.appendChild(shadow.dom._to_dom(node_48002));


var G__48003 = seq__47596_47998;
var G__48004 = chunk__47598_47999;
var G__48005 = count__47599_48000;
var G__48006 = (i__47600_48001 + (1));
seq__47596_47998 = G__48003;
chunk__47598_47999 = G__48004;
count__47599_48000 = G__48005;
i__47600_48001 = G__48006;
continue;
} else {
var temp__5816__auto___48007 = cljs.core.seq(seq__47596_47998);
if(temp__5816__auto___48007){
var seq__47596_48008__$1 = temp__5816__auto___48007;
if(cljs.core.chunked_seq_QMARK_(seq__47596_48008__$1)){
var c__5521__auto___48009 = cljs.core.chunk_first(seq__47596_48008__$1);
var G__48010 = cljs.core.chunk_rest(seq__47596_48008__$1);
var G__48011 = c__5521__auto___48009;
var G__48012 = cljs.core.count(c__5521__auto___48009);
var G__48013 = (0);
seq__47596_47998 = G__48010;
chunk__47598_47999 = G__48011;
count__47599_48000 = G__48012;
i__47600_48001 = G__48013;
continue;
} else {
var node_48014 = cljs.core.first(seq__47596_48008__$1);
fragment.appendChild(shadow.dom._to_dom(node_48014));


var G__48015 = cljs.core.next(seq__47596_48008__$1);
var G__48016 = null;
var G__48017 = (0);
var G__48018 = (0);
seq__47596_47998 = G__48015;
chunk__47598_47999 = G__48016;
count__47599_48000 = G__48017;
i__47600_48001 = G__48018;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47594){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47594));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47608_48021 = cljs.core.seq(scripts);
var chunk__47609_48022 = null;
var count__47610_48023 = (0);
var i__47611_48024 = (0);
while(true){
if((i__47611_48024 < count__47610_48023)){
var vec__47620_48025 = chunk__47609_48022.cljs$core$IIndexed$_nth$arity$2(null,i__47611_48024);
var script_tag_48026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47620_48025,(0),null);
var script_body_48027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47620_48025,(1),null);
eval(script_body_48027);


var G__48028 = seq__47608_48021;
var G__48029 = chunk__47609_48022;
var G__48030 = count__47610_48023;
var G__48031 = (i__47611_48024 + (1));
seq__47608_48021 = G__48028;
chunk__47609_48022 = G__48029;
count__47610_48023 = G__48030;
i__47611_48024 = G__48031;
continue;
} else {
var temp__5816__auto___48032 = cljs.core.seq(seq__47608_48021);
if(temp__5816__auto___48032){
var seq__47608_48033__$1 = temp__5816__auto___48032;
if(cljs.core.chunked_seq_QMARK_(seq__47608_48033__$1)){
var c__5521__auto___48034 = cljs.core.chunk_first(seq__47608_48033__$1);
var G__48035 = cljs.core.chunk_rest(seq__47608_48033__$1);
var G__48036 = c__5521__auto___48034;
var G__48037 = cljs.core.count(c__5521__auto___48034);
var G__48038 = (0);
seq__47608_48021 = G__48035;
chunk__47609_48022 = G__48036;
count__47610_48023 = G__48037;
i__47611_48024 = G__48038;
continue;
} else {
var vec__47626_48039 = cljs.core.first(seq__47608_48033__$1);
var script_tag_48040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47626_48039,(0),null);
var script_body_48041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47626_48039,(1),null);
eval(script_body_48041);


var G__48042 = cljs.core.next(seq__47608_48033__$1);
var G__48043 = null;
var G__48044 = (0);
var G__48045 = (0);
seq__47608_48021 = G__48042;
chunk__47609_48022 = G__48043;
count__47610_48023 = G__48044;
i__47611_48024 = G__48045;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47639){
var vec__47640 = p__47639;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47640,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47644 = arguments.length;
switch (G__47644) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47651 = cljs.core.seq(style_keys);
var chunk__47653 = null;
var count__47654 = (0);
var i__47655 = (0);
while(true){
if((i__47655 < count__47654)){
var it = chunk__47653.cljs$core$IIndexed$_nth$arity$2(null,i__47655);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48048 = seq__47651;
var G__48049 = chunk__47653;
var G__48050 = count__47654;
var G__48051 = (i__47655 + (1));
seq__47651 = G__48048;
chunk__47653 = G__48049;
count__47654 = G__48050;
i__47655 = G__48051;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47651);
if(temp__5816__auto__){
var seq__47651__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47651__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47651__$1);
var G__48052 = cljs.core.chunk_rest(seq__47651__$1);
var G__48053 = c__5521__auto__;
var G__48054 = cljs.core.count(c__5521__auto__);
var G__48055 = (0);
seq__47651 = G__48052;
chunk__47653 = G__48053;
count__47654 = G__48054;
i__47655 = G__48055;
continue;
} else {
var it = cljs.core.first(seq__47651__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48056 = cljs.core.next(seq__47651__$1);
var G__48057 = null;
var G__48058 = (0);
var G__48059 = (0);
seq__47651 = G__48056;
chunk__47653 = G__48057;
count__47654 = G__48058;
i__47655 = G__48059;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k47659,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__47666 = k47659;
var G__47666__$1 = (((G__47666 instanceof cljs.core.Keyword))?G__47666.fqn:null);
switch (G__47666__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47659,else__5299__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__47673){
var vec__47674 = p__47673;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47674,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47674,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47658){
var self__ = this;
var G__47658__$1 = this;
return (new cljs.core.RecordIter((0),G__47658__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47660,other47661){
var self__ = this;
var this47660__$1 = this;
return (((!((other47661 == null)))) && ((((this47660__$1.constructor === other47661.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47660__$1.x,other47661.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47660__$1.y,other47661.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47660__$1.__extmap,other47661.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k47659){
var self__ = this;
var this__5303__auto____$1 = this;
var G__47685 = k47659;
var G__47685__$1 = (((G__47685 instanceof cljs.core.Keyword))?G__47685.fqn:null);
switch (G__47685__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47659);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__47658){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__47686 = cljs.core.keyword_identical_QMARK_;
var expr__47687 = k__5305__auto__;
if(cljs.core.truth_((pred__47686.cljs$core$IFn$_invoke$arity$2 ? pred__47686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47687) : pred__47686.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47687)))){
return (new shadow.dom.Coordinate(G__47658,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47686.cljs$core$IFn$_invoke$arity$2 ? pred__47686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47687) : pred__47686.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47687)))){
return (new shadow.dom.Coordinate(self__.x,G__47658,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__47658),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__47658){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47658,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47664){
var extmap__5338__auto__ = (function (){var G__47699 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47664,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47664)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47699);
} else {
return G__47699;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47664),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47664),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k47703,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__47730 = k47703;
var G__47730__$1 = (((G__47730 instanceof cljs.core.Keyword))?G__47730.fqn:null);
switch (G__47730__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47703,else__5299__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__47731){
var vec__47732 = p__47731;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47732,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47732,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Size{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47702){
var self__ = this;
var G__47702__$1 = this;
return (new cljs.core.RecordIter((0),G__47702__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47705,other47706){
var self__ = this;
var this47705__$1 = this;
return (((!((other47706 == null)))) && ((((this47705__$1.constructor === other47706.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47705__$1.w,other47706.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47705__$1.h,other47706.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47705__$1.__extmap,other47706.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k47703){
var self__ = this;
var this__5303__auto____$1 = this;
var G__47755 = k47703;
var G__47755__$1 = (((G__47755 instanceof cljs.core.Keyword))?G__47755.fqn:null);
switch (G__47755__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47703);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__47702){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__47756 = cljs.core.keyword_identical_QMARK_;
var expr__47757 = k__5305__auto__;
if(cljs.core.truth_((pred__47756.cljs$core$IFn$_invoke$arity$2 ? pred__47756.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47757) : pred__47756.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47757)))){
return (new shadow.dom.Size(G__47702,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47756.cljs$core$IFn$_invoke$arity$2 ? pred__47756.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47757) : pred__47756.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47757)))){
return (new shadow.dom.Size(self__.w,G__47702,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__47702),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__47702){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47702,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47709){
var extmap__5338__auto__ = (function (){var G__47759 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47709,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47709)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47759);
} else {
return G__47759;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47709),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47709),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5586__auto__ = opts;
var l__5587__auto__ = a__5586__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5587__auto__)){
var G__48105 = (i + (1));
var G__48106 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48105;
ret = G__48106;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47764){
var vec__47765 = p__47764;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47765,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47769 = arguments.length;
switch (G__47769) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5814__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5814__auto__)){
var child = temp__5814__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48108 = ps;
var G__48109 = (i + (1));
el__$1 = G__48108;
i = G__48109;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47770 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47773_48110 = cljs.core.seq(props);
var chunk__47774_48111 = null;
var count__47775_48112 = (0);
var i__47776_48113 = (0);
while(true){
if((i__47776_48113 < count__47775_48112)){
var vec__47784_48114 = chunk__47774_48111.cljs$core$IIndexed$_nth$arity$2(null,i__47776_48113);
var k_48115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47784_48114,(0),null);
var v_48116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47784_48114,(1),null);
el.setAttributeNS((function (){var temp__5816__auto__ = cljs.core.namespace(k_48115);
if(cljs.core.truth_(temp__5816__auto__)){
var ns = temp__5816__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48115),v_48116);


var G__48117 = seq__47773_48110;
var G__48118 = chunk__47774_48111;
var G__48119 = count__47775_48112;
var G__48120 = (i__47776_48113 + (1));
seq__47773_48110 = G__48117;
chunk__47774_48111 = G__48118;
count__47775_48112 = G__48119;
i__47776_48113 = G__48120;
continue;
} else {
var temp__5816__auto___48121 = cljs.core.seq(seq__47773_48110);
if(temp__5816__auto___48121){
var seq__47773_48122__$1 = temp__5816__auto___48121;
if(cljs.core.chunked_seq_QMARK_(seq__47773_48122__$1)){
var c__5521__auto___48123 = cljs.core.chunk_first(seq__47773_48122__$1);
var G__48124 = cljs.core.chunk_rest(seq__47773_48122__$1);
var G__48125 = c__5521__auto___48123;
var G__48126 = cljs.core.count(c__5521__auto___48123);
var G__48127 = (0);
seq__47773_48110 = G__48124;
chunk__47774_48111 = G__48125;
count__47775_48112 = G__48126;
i__47776_48113 = G__48127;
continue;
} else {
var vec__47788_48128 = cljs.core.first(seq__47773_48122__$1);
var k_48129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47788_48128,(0),null);
var v_48130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47788_48128,(1),null);
el.setAttributeNS((function (){var temp__5816__auto____$1 = cljs.core.namespace(k_48129);
if(cljs.core.truth_(temp__5816__auto____$1)){
var ns = temp__5816__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48129),v_48130);


var G__48131 = cljs.core.next(seq__47773_48122__$1);
var G__48132 = null;
var G__48133 = (0);
var G__48134 = (0);
seq__47773_48110 = G__48131;
chunk__47774_48111 = G__48132;
count__47775_48112 = G__48133;
i__47776_48113 = G__48134;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47792 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47792,(1),null);
var seq__47795_48135 = cljs.core.seq(node_children);
var chunk__47797_48136 = null;
var count__47798_48137 = (0);
var i__47799_48138 = (0);
while(true){
if((i__47799_48138 < count__47798_48137)){
var child_struct_48139 = chunk__47797_48136.cljs$core$IIndexed$_nth$arity$2(null,i__47799_48138);
if((!((child_struct_48139 == null)))){
if(typeof child_struct_48139 === 'string'){
var text_48140 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48140),child_struct_48139].join(''));
} else {
var children_48142 = shadow.dom.svg_node(child_struct_48139);
if(cljs.core.seq_QMARK_(children_48142)){
var seq__47813_48144 = cljs.core.seq(children_48142);
var chunk__47815_48145 = null;
var count__47816_48146 = (0);
var i__47817_48147 = (0);
while(true){
if((i__47817_48147 < count__47816_48146)){
var child_48148 = chunk__47815_48145.cljs$core$IIndexed$_nth$arity$2(null,i__47817_48147);
if(cljs.core.truth_(child_48148)){
node.appendChild(child_48148);


var G__48150 = seq__47813_48144;
var G__48151 = chunk__47815_48145;
var G__48152 = count__47816_48146;
var G__48153 = (i__47817_48147 + (1));
seq__47813_48144 = G__48150;
chunk__47815_48145 = G__48151;
count__47816_48146 = G__48152;
i__47817_48147 = G__48153;
continue;
} else {
var G__48157 = seq__47813_48144;
var G__48158 = chunk__47815_48145;
var G__48159 = count__47816_48146;
var G__48160 = (i__47817_48147 + (1));
seq__47813_48144 = G__48157;
chunk__47815_48145 = G__48158;
count__47816_48146 = G__48159;
i__47817_48147 = G__48160;
continue;
}
} else {
var temp__5816__auto___48161 = cljs.core.seq(seq__47813_48144);
if(temp__5816__auto___48161){
var seq__47813_48162__$1 = temp__5816__auto___48161;
if(cljs.core.chunked_seq_QMARK_(seq__47813_48162__$1)){
var c__5521__auto___48167 = cljs.core.chunk_first(seq__47813_48162__$1);
var G__48168 = cljs.core.chunk_rest(seq__47813_48162__$1);
var G__48169 = c__5521__auto___48167;
var G__48170 = cljs.core.count(c__5521__auto___48167);
var G__48171 = (0);
seq__47813_48144 = G__48168;
chunk__47815_48145 = G__48169;
count__47816_48146 = G__48170;
i__47817_48147 = G__48171;
continue;
} else {
var child_48172 = cljs.core.first(seq__47813_48162__$1);
if(cljs.core.truth_(child_48172)){
node.appendChild(child_48172);


var G__48173 = cljs.core.next(seq__47813_48162__$1);
var G__48174 = null;
var G__48175 = (0);
var G__48176 = (0);
seq__47813_48144 = G__48173;
chunk__47815_48145 = G__48174;
count__47816_48146 = G__48175;
i__47817_48147 = G__48176;
continue;
} else {
var G__48177 = cljs.core.next(seq__47813_48162__$1);
var G__48178 = null;
var G__48179 = (0);
var G__48180 = (0);
seq__47813_48144 = G__48177;
chunk__47815_48145 = G__48178;
count__47816_48146 = G__48179;
i__47817_48147 = G__48180;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48142);
}
}


var G__48181 = seq__47795_48135;
var G__48182 = chunk__47797_48136;
var G__48183 = count__47798_48137;
var G__48184 = (i__47799_48138 + (1));
seq__47795_48135 = G__48181;
chunk__47797_48136 = G__48182;
count__47798_48137 = G__48183;
i__47799_48138 = G__48184;
continue;
} else {
var G__48185 = seq__47795_48135;
var G__48186 = chunk__47797_48136;
var G__48187 = count__47798_48137;
var G__48188 = (i__47799_48138 + (1));
seq__47795_48135 = G__48185;
chunk__47797_48136 = G__48186;
count__47798_48137 = G__48187;
i__47799_48138 = G__48188;
continue;
}
} else {
var temp__5816__auto___48189 = cljs.core.seq(seq__47795_48135);
if(temp__5816__auto___48189){
var seq__47795_48190__$1 = temp__5816__auto___48189;
if(cljs.core.chunked_seq_QMARK_(seq__47795_48190__$1)){
var c__5521__auto___48191 = cljs.core.chunk_first(seq__47795_48190__$1);
var G__48192 = cljs.core.chunk_rest(seq__47795_48190__$1);
var G__48193 = c__5521__auto___48191;
var G__48194 = cljs.core.count(c__5521__auto___48191);
var G__48195 = (0);
seq__47795_48135 = G__48192;
chunk__47797_48136 = G__48193;
count__47798_48137 = G__48194;
i__47799_48138 = G__48195;
continue;
} else {
var child_struct_48196 = cljs.core.first(seq__47795_48190__$1);
if((!((child_struct_48196 == null)))){
if(typeof child_struct_48196 === 'string'){
var text_48197 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48197),child_struct_48196].join(''));
} else {
var children_48199 = shadow.dom.svg_node(child_struct_48196);
if(cljs.core.seq_QMARK_(children_48199)){
var seq__47819_48200 = cljs.core.seq(children_48199);
var chunk__47821_48201 = null;
var count__47822_48202 = (0);
var i__47823_48203 = (0);
while(true){
if((i__47823_48203 < count__47822_48202)){
var child_48204 = chunk__47821_48201.cljs$core$IIndexed$_nth$arity$2(null,i__47823_48203);
if(cljs.core.truth_(child_48204)){
node.appendChild(child_48204);


var G__48206 = seq__47819_48200;
var G__48207 = chunk__47821_48201;
var G__48208 = count__47822_48202;
var G__48209 = (i__47823_48203 + (1));
seq__47819_48200 = G__48206;
chunk__47821_48201 = G__48207;
count__47822_48202 = G__48208;
i__47823_48203 = G__48209;
continue;
} else {
var G__48210 = seq__47819_48200;
var G__48211 = chunk__47821_48201;
var G__48212 = count__47822_48202;
var G__48213 = (i__47823_48203 + (1));
seq__47819_48200 = G__48210;
chunk__47821_48201 = G__48211;
count__47822_48202 = G__48212;
i__47823_48203 = G__48213;
continue;
}
} else {
var temp__5816__auto___48214__$1 = cljs.core.seq(seq__47819_48200);
if(temp__5816__auto___48214__$1){
var seq__47819_48215__$1 = temp__5816__auto___48214__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47819_48215__$1)){
var c__5521__auto___48216 = cljs.core.chunk_first(seq__47819_48215__$1);
var G__48217 = cljs.core.chunk_rest(seq__47819_48215__$1);
var G__48218 = c__5521__auto___48216;
var G__48219 = cljs.core.count(c__5521__auto___48216);
var G__48220 = (0);
seq__47819_48200 = G__48217;
chunk__47821_48201 = G__48218;
count__47822_48202 = G__48219;
i__47823_48203 = G__48220;
continue;
} else {
var child_48221 = cljs.core.first(seq__47819_48215__$1);
if(cljs.core.truth_(child_48221)){
node.appendChild(child_48221);


var G__48222 = cljs.core.next(seq__47819_48215__$1);
var G__48223 = null;
var G__48224 = (0);
var G__48225 = (0);
seq__47819_48200 = G__48222;
chunk__47821_48201 = G__48223;
count__47822_48202 = G__48224;
i__47823_48203 = G__48225;
continue;
} else {
var G__48226 = cljs.core.next(seq__47819_48215__$1);
var G__48227 = null;
var G__48228 = (0);
var G__48229 = (0);
seq__47819_48200 = G__48226;
chunk__47821_48201 = G__48227;
count__47822_48202 = G__48228;
i__47823_48203 = G__48229;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48199);
}
}


var G__48230 = cljs.core.next(seq__47795_48190__$1);
var G__48231 = null;
var G__48232 = (0);
var G__48233 = (0);
seq__47795_48135 = G__48230;
chunk__47797_48136 = G__48231;
count__47798_48137 = G__48232;
i__47799_48138 = G__48233;
continue;
} else {
var G__48235 = cljs.core.next(seq__47795_48190__$1);
var G__48236 = null;
var G__48237 = (0);
var G__48238 = (0);
seq__47795_48135 = G__48235;
chunk__47797_48136 = G__48236;
count__47798_48137 = G__48237;
i__47799_48138 = G__48238;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48239 = arguments.length;
var i__5723__auto___48240 = (0);
while(true){
if((i__5723__auto___48240 < len__5722__auto___48239)){
args__5728__auto__.push((arguments[i__5723__auto___48240]));

var G__48241 = (i__5723__auto___48240 + (1));
i__5723__auto___48240 = G__48241;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47826){
var G__47827 = cljs.core.first(seq47826);
var seq47826__$1 = cljs.core.next(seq47826);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47827,seq47826__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47829 = arguments.length;
switch (G__47829) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4996__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4996__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4996__auto__;
}
})())){
var c__41048__auto___48245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_47835){
var state_val_47836 = (state_47835[(1)]);
if((state_val_47836 === (1))){
var state_47835__$1 = state_47835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47835__$1,(2),once_or_cleanup);
} else {
if((state_val_47836 === (2))){
var inst_47832 = (state_47835[(2)]);
var inst_47833 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47835__$1 = (function (){var statearr_47837 = state_47835;
(statearr_47837[(7)] = inst_47832);

return statearr_47837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47835__$1,inst_47833);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__40994__auto__ = null;
var shadow$dom$state_machine__40994__auto____0 = (function (){
var statearr_47838 = [null,null,null,null,null,null,null,null];
(statearr_47838[(0)] = shadow$dom$state_machine__40994__auto__);

(statearr_47838[(1)] = (1));

return statearr_47838;
});
var shadow$dom$state_machine__40994__auto____1 = (function (state_47835){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_47835);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e47839){var ex__40997__auto__ = e47839;
var statearr_47840_48254 = state_47835;
(statearr_47840_48254[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_47835[(4)]))){
var statearr_47841_48255 = state_47835;
(statearr_47841_48255[(1)] = cljs.core.first((state_47835[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48257 = state_47835;
state_47835 = G__48257;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
shadow$dom$state_machine__40994__auto__ = function(state_47835){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__40994__auto____0.call(this);
case 1:
return shadow$dom$state_machine__40994__auto____1.call(this,state_47835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__40994__auto____0;
shadow$dom$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__40994__auto____1;
return shadow$dom$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_47842 = f__41049__auto__();
(statearr_47842[(6)] = c__41048__auto___48245);

return statearr_47842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
