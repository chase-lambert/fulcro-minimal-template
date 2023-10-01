goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__56115){
var vec__56116 = p__56115;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56116,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56116,(1),null);
var pair = vec__56116;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__56119){
var vec__56122 = p__56119;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56122,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56122,(1),null);
var pair = vec__56122;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__56127){
var vec__56128 = p__56127;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56128,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56128,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__56132 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56132,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__56132;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__56138 = arguments.length;
switch (G__56138) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__56140 = component.refs;
var G__56140__$1 = (((G__56140 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__56140,name));
if((G__56140__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__56140__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5814__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5814__auto__)){
var ref = temp__5814__auto__;
var G__56143 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__56144 = (function (){var G__56145 = r;
if((G__56145 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__56145);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__56144) : ref.call(null,G__56144));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__56143) : factory.call(null,G__56143));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__56150 = arguments.length;
switch (G__56150) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5747__auto__ = [];
var len__5722__auto___56592 = arguments.length;
var i__5723__auto___56593 = (0);
while(true){
if((i__5723__auto___56593 < len__5722__auto___56592)){
args_arr__5747__auto__.push((arguments[i__5723__auto___56593]));

var G__56594 = (i__5723__auto___56593 + (1));
i__5723__auto___56593 = G__56594;
continue;
} else {
}
break;
}

var argseq__5748__auto__ = ((((2) < args_arr__5747__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5747__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5748__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq56147){
var G__56148 = cljs.core.first(seq56147);
var seq56147__$1 = cljs.core.next(seq56147);
var G__56149 = cljs.core.first(seq56147__$1);
var seq56147__$2 = cljs.core.next(seq56147__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56148,G__56149,seq56147__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4996__auto__ = tag;
if(cljs.core.truth_(and__4996__auto__)){
var G__56158 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56158) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__56158));
} else {
return and__4996__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x56160_56595 = ctor.prototype;
(x56160_56595.onChange = (function (event){
var this$ = this;
var temp__5816__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5816__auto__)){
var handler = temp__5816__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x56160_56595.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__56159_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__56159_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4996__auto__ = state_value;
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = element_value;
if(cljs.core.truth_(and__4996__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,-424641468,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x56160_56595.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__56596__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__56596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56597__i = 0, G__56597__a = new Array(arguments.length -  0);
while (G__56597__i < G__56597__a.length) {G__56597__a[G__56597__i] = arguments[G__56597__i + 0]; ++G__56597__i;}
  args = new cljs.core.IndexedSeq(G__56597__a,0,null);
} 
return G__56596__delegate.call(this,args);};
G__56596.cljs$lang$maxFixedArity = 0;
G__56596.cljs$lang$applyTo = (function (arglist__56598){
var args = cljs.core.seq(arglist__56598);
return G__56596__delegate(args);
});
G__56596.cljs$core$IFn$_invoke$arity$variadic = G__56596__delegate;
return G__56596;
})()
;
return (function() { 
var G__56599__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5814__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5814__auto__)){
var r = temp__5814__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__56599 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__56600__i = 0, G__56600__a = new Array(arguments.length -  1);
while (G__56600__i < G__56600__a.length) {G__56600__a[G__56600__i] = arguments[G__56600__i + 1]; ++G__56600__i;}
  children = new cljs.core.IndexedSeq(G__56600__a,0,null);
} 
return G__56599__delegate.call(this,props,children);};
G__56599.cljs$lang$maxFixedArity = 1;
G__56599.cljs$lang$applyTo = (function (arglist__56601){
var props = cljs.core.first(arglist__56601);
var children = cljs.core.rest(arglist__56601);
return G__56599__delegate(props,children);
});
G__56599.cljs$core$IFn$_invoke$arity$variadic = G__56599__delegate;
return G__56599;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__56164 = tag;
switch (G__56164) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56164)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__56166 = arguments.length;
switch (G__56166) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__56167 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__56168 = cljs.core.seq(vec__56167);
var first__56169 = cljs.core.first(seq__56168);
var seq__56168__$1 = cljs.core.next(seq__56168);
var head = first__56169;
var tail = seq__56168__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__56170 = (function (){var G__56172 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56172,tail);

return G__56172;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56170) : f.call(null,G__56170));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__56173 = (function (){var G__56174 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56174,args);

return G__56174;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56173) : f.call(null,G__56173));
} else {
if(cljs.core.object_QMARK_(head)){
var G__56175 = (function (){var G__56176 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56176,tail);

return G__56176;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56175) : f.call(null,G__56175));
} else {
if(cljs.core.map_QMARK_(head)){
var G__56177 = (function (){var G__56178 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__56178,tail);

return G__56178;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56177) : f.call(null,G__56177));
} else {
var G__56179 = (function (){var G__56180 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56180,args);

return G__56180;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56179) : f.call(null,G__56179));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__56182 = arguments.length;
switch (G__56182) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__56184 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__56185 = cljs.core.seq(vec__56184);
var first__56186 = cljs.core.first(seq__56185);
var seq__56185__$1 = cljs.core.next(seq__56185);
var head = first__56186;
var tail = seq__56185__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56187 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56187,tail);

return G__56187;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56188 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56188,args);

return G__56188;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56190 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56190,tail);

return G__56190;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56191 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__56191,tail);

return G__56191;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__56192 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__56192,args);

return G__56192;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56605 = arguments.length;
var i__5723__auto___56606 = (0);
while(true){
if((i__5723__auto___56606 < len__5722__auto___56605)){
args__5728__auto__.push((arguments[i__5723__auto___56606]));

var G__56607 = (i__5723__auto___56606 + (1));
i__5723__auto___56606 = G__56607;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56194 = conformed_args__54883__auto__;
var map__56194__$1 = cljs.core.__destructure_map(map__56194);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq56193){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56193));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56608 = arguments.length;
var i__5723__auto___56609 = (0);
while(true){
if((i__5723__auto___56609 < len__5722__auto___56608)){
args__5728__auto__.push((arguments[i__5723__auto___56609]));

var G__56610 = (i__5723__auto___56609 + (1));
i__5723__auto___56609 = G__56610;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56196 = conformed_args__54883__auto__;
var map__56196__$1 = cljs.core.__destructure_map(map__56196);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq56195){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56195));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56611 = arguments.length;
var i__5723__auto___56612 = (0);
while(true){
if((i__5723__auto___56612 < len__5722__auto___56611)){
args__5728__auto__.push((arguments[i__5723__auto___56612]));

var G__56613 = (i__5723__auto___56612 + (1));
i__5723__auto___56612 = G__56613;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56198 = conformed_args__54883__auto__;
var map__56198__$1 = cljs.core.__destructure_map(map__56198);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56198__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq56197){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56197));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56614 = arguments.length;
var i__5723__auto___56615 = (0);
while(true){
if((i__5723__auto___56615 < len__5722__auto___56614)){
args__5728__auto__.push((arguments[i__5723__auto___56615]));

var G__56616 = (i__5723__auto___56615 + (1));
i__5723__auto___56615 = G__56616;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56200 = conformed_args__54883__auto__;
var map__56200__$1 = cljs.core.__destructure_map(map__56200);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq56199){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56199));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56617 = arguments.length;
var i__5723__auto___56618 = (0);
while(true){
if((i__5723__auto___56618 < len__5722__auto___56617)){
args__5728__auto__.push((arguments[i__5723__auto___56618]));

var G__56619 = (i__5723__auto___56618 + (1));
i__5723__auto___56618 = G__56619;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56202 = conformed_args__54883__auto__;
var map__56202__$1 = cljs.core.__destructure_map(map__56202);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq56201){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56201));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56620 = arguments.length;
var i__5723__auto___56621 = (0);
while(true){
if((i__5723__auto___56621 < len__5722__auto___56620)){
args__5728__auto__.push((arguments[i__5723__auto___56621]));

var G__56622 = (i__5723__auto___56621 + (1));
i__5723__auto___56621 = G__56622;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56204 = conformed_args__54883__auto__;
var map__56204__$1 = cljs.core.__destructure_map(map__56204);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56204__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56204__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56204__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq56203){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56203));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56623 = arguments.length;
var i__5723__auto___56624 = (0);
while(true){
if((i__5723__auto___56624 < len__5722__auto___56623)){
args__5728__auto__.push((arguments[i__5723__auto___56624]));

var G__56625 = (i__5723__auto___56624 + (1));
i__5723__auto___56624 = G__56625;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56206 = conformed_args__54883__auto__;
var map__56206__$1 = cljs.core.__destructure_map(map__56206);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq56205){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56205));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56626 = arguments.length;
var i__5723__auto___56627 = (0);
while(true){
if((i__5723__auto___56627 < len__5722__auto___56626)){
args__5728__auto__.push((arguments[i__5723__auto___56627]));

var G__56628 = (i__5723__auto___56627 + (1));
i__5723__auto___56627 = G__56628;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56208 = conformed_args__54883__auto__;
var map__56208__$1 = cljs.core.__destructure_map(map__56208);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq56207){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56207));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56629 = arguments.length;
var i__5723__auto___56630 = (0);
while(true){
if((i__5723__auto___56630 < len__5722__auto___56629)){
args__5728__auto__.push((arguments[i__5723__auto___56630]));

var G__56631 = (i__5723__auto___56630 + (1));
i__5723__auto___56630 = G__56631;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56210 = conformed_args__54883__auto__;
var map__56210__$1 = cljs.core.__destructure_map(map__56210);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56210__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56210__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56210__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq56209){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56209));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56632 = arguments.length;
var i__5723__auto___56633 = (0);
while(true){
if((i__5723__auto___56633 < len__5722__auto___56632)){
args__5728__auto__.push((arguments[i__5723__auto___56633]));

var G__56634 = (i__5723__auto___56633 + (1));
i__5723__auto___56633 = G__56634;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56212 = conformed_args__54883__auto__;
var map__56212__$1 = cljs.core.__destructure_map(map__56212);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56212__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56212__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq56211){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56211));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56635 = arguments.length;
var i__5723__auto___56636 = (0);
while(true){
if((i__5723__auto___56636 < len__5722__auto___56635)){
args__5728__auto__.push((arguments[i__5723__auto___56636]));

var G__56637 = (i__5723__auto___56636 + (1));
i__5723__auto___56636 = G__56637;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56214 = conformed_args__54883__auto__;
var map__56214__$1 = cljs.core.__destructure_map(map__56214);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56214__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56214__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq56213){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56213));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56638 = arguments.length;
var i__5723__auto___56639 = (0);
while(true){
if((i__5723__auto___56639 < len__5722__auto___56638)){
args__5728__auto__.push((arguments[i__5723__auto___56639]));

var G__56640 = (i__5723__auto___56639 + (1));
i__5723__auto___56639 = G__56640;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56216 = conformed_args__54883__auto__;
var map__56216__$1 = cljs.core.__destructure_map(map__56216);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq56215){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56215));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56641 = arguments.length;
var i__5723__auto___56642 = (0);
while(true){
if((i__5723__auto___56642 < len__5722__auto___56641)){
args__5728__auto__.push((arguments[i__5723__auto___56642]));

var G__56643 = (i__5723__auto___56642 + (1));
i__5723__auto___56642 = G__56643;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56218 = conformed_args__54883__auto__;
var map__56218__$1 = cljs.core.__destructure_map(map__56218);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56218__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56218__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq56217){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56217));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56644 = arguments.length;
var i__5723__auto___56645 = (0);
while(true){
if((i__5723__auto___56645 < len__5722__auto___56644)){
args__5728__auto__.push((arguments[i__5723__auto___56645]));

var G__56646 = (i__5723__auto___56645 + (1));
i__5723__auto___56645 = G__56646;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56220 = conformed_args__54883__auto__;
var map__56220__$1 = cljs.core.__destructure_map(map__56220);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56220__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56220__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56220__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq56219){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56219));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56647 = arguments.length;
var i__5723__auto___56648 = (0);
while(true){
if((i__5723__auto___56648 < len__5722__auto___56647)){
args__5728__auto__.push((arguments[i__5723__auto___56648]));

var G__56649 = (i__5723__auto___56648 + (1));
i__5723__auto___56648 = G__56649;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56222 = conformed_args__54883__auto__;
var map__56222__$1 = cljs.core.__destructure_map(map__56222);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq56221){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56221));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56650 = arguments.length;
var i__5723__auto___56651 = (0);
while(true){
if((i__5723__auto___56651 < len__5722__auto___56650)){
args__5728__auto__.push((arguments[i__5723__auto___56651]));

var G__56652 = (i__5723__auto___56651 + (1));
i__5723__auto___56651 = G__56652;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56224 = conformed_args__54883__auto__;
var map__56224__$1 = cljs.core.__destructure_map(map__56224);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq56223){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56223));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56653 = arguments.length;
var i__5723__auto___56654 = (0);
while(true){
if((i__5723__auto___56654 < len__5722__auto___56653)){
args__5728__auto__.push((arguments[i__5723__auto___56654]));

var G__56655 = (i__5723__auto___56654 + (1));
i__5723__auto___56654 = G__56655;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56226 = conformed_args__54883__auto__;
var map__56226__$1 = cljs.core.__destructure_map(map__56226);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56226__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56226__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56226__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq56225){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56225));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56656 = arguments.length;
var i__5723__auto___56657 = (0);
while(true){
if((i__5723__auto___56657 < len__5722__auto___56656)){
args__5728__auto__.push((arguments[i__5723__auto___56657]));

var G__56658 = (i__5723__auto___56657 + (1));
i__5723__auto___56657 = G__56658;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56228 = conformed_args__54883__auto__;
var map__56228__$1 = cljs.core.__destructure_map(map__56228);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq56227){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56227));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56659 = arguments.length;
var i__5723__auto___56660 = (0);
while(true){
if((i__5723__auto___56660 < len__5722__auto___56659)){
args__5728__auto__.push((arguments[i__5723__auto___56660]));

var G__56661 = (i__5723__auto___56660 + (1));
i__5723__auto___56660 = G__56661;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56230 = conformed_args__54883__auto__;
var map__56230__$1 = cljs.core.__destructure_map(map__56230);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56230__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56230__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56230__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq56229){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56229));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56662 = arguments.length;
var i__5723__auto___56663 = (0);
while(true){
if((i__5723__auto___56663 < len__5722__auto___56662)){
args__5728__auto__.push((arguments[i__5723__auto___56663]));

var G__56664 = (i__5723__auto___56663 + (1));
i__5723__auto___56663 = G__56664;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56232 = conformed_args__54883__auto__;
var map__56232__$1 = cljs.core.__destructure_map(map__56232);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq56231){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56231));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56665 = arguments.length;
var i__5723__auto___56666 = (0);
while(true){
if((i__5723__auto___56666 < len__5722__auto___56665)){
args__5728__auto__.push((arguments[i__5723__auto___56666]));

var G__56667 = (i__5723__auto___56666 + (1));
i__5723__auto___56666 = G__56667;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56234 = conformed_args__54883__auto__;
var map__56234__$1 = cljs.core.__destructure_map(map__56234);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56234__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56234__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56234__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq56233){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56233));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56668 = arguments.length;
var i__5723__auto___56669 = (0);
while(true){
if((i__5723__auto___56669 < len__5722__auto___56668)){
args__5728__auto__.push((arguments[i__5723__auto___56669]));

var G__56670 = (i__5723__auto___56669 + (1));
i__5723__auto___56669 = G__56670;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56236 = conformed_args__54883__auto__;
var map__56236__$1 = cljs.core.__destructure_map(map__56236);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq56235){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56235));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56671 = arguments.length;
var i__5723__auto___56672 = (0);
while(true){
if((i__5723__auto___56672 < len__5722__auto___56671)){
args__5728__auto__.push((arguments[i__5723__auto___56672]));

var G__56673 = (i__5723__auto___56672 + (1));
i__5723__auto___56672 = G__56673;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56238 = conformed_args__54883__auto__;
var map__56238__$1 = cljs.core.__destructure_map(map__56238);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq56237){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56237));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56674 = arguments.length;
var i__5723__auto___56675 = (0);
while(true){
if((i__5723__auto___56675 < len__5722__auto___56674)){
args__5728__auto__.push((arguments[i__5723__auto___56675]));

var G__56676 = (i__5723__auto___56675 + (1));
i__5723__auto___56675 = G__56676;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56240 = conformed_args__54883__auto__;
var map__56240__$1 = cljs.core.__destructure_map(map__56240);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq56239){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56239));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56677 = arguments.length;
var i__5723__auto___56678 = (0);
while(true){
if((i__5723__auto___56678 < len__5722__auto___56677)){
args__5728__auto__.push((arguments[i__5723__auto___56678]));

var G__56679 = (i__5723__auto___56678 + (1));
i__5723__auto___56678 = G__56679;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56242 = conformed_args__54883__auto__;
var map__56242__$1 = cljs.core.__destructure_map(map__56242);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq56241){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56241));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56680 = arguments.length;
var i__5723__auto___56681 = (0);
while(true){
if((i__5723__auto___56681 < len__5722__auto___56680)){
args__5728__auto__.push((arguments[i__5723__auto___56681]));

var G__56682 = (i__5723__auto___56681 + (1));
i__5723__auto___56681 = G__56682;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56244 = conformed_args__54883__auto__;
var map__56244__$1 = cljs.core.__destructure_map(map__56244);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq56243){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56243));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56683 = arguments.length;
var i__5723__auto___56684 = (0);
while(true){
if((i__5723__auto___56684 < len__5722__auto___56683)){
args__5728__auto__.push((arguments[i__5723__auto___56684]));

var G__56685 = (i__5723__auto___56684 + (1));
i__5723__auto___56684 = G__56685;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56246 = conformed_args__54883__auto__;
var map__56246__$1 = cljs.core.__destructure_map(map__56246);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq56245){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56245));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56686 = arguments.length;
var i__5723__auto___56687 = (0);
while(true){
if((i__5723__auto___56687 < len__5722__auto___56686)){
args__5728__auto__.push((arguments[i__5723__auto___56687]));

var G__56688 = (i__5723__auto___56687 + (1));
i__5723__auto___56687 = G__56688;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56248 = conformed_args__54883__auto__;
var map__56248__$1 = cljs.core.__destructure_map(map__56248);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56248__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56248__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56248__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq56247){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56247));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56689 = arguments.length;
var i__5723__auto___56690 = (0);
while(true){
if((i__5723__auto___56690 < len__5722__auto___56689)){
args__5728__auto__.push((arguments[i__5723__auto___56690]));

var G__56691 = (i__5723__auto___56690 + (1));
i__5723__auto___56690 = G__56691;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56250 = conformed_args__54883__auto__;
var map__56250__$1 = cljs.core.__destructure_map(map__56250);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq56249){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56249));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56692 = arguments.length;
var i__5723__auto___56693 = (0);
while(true){
if((i__5723__auto___56693 < len__5722__auto___56692)){
args__5728__auto__.push((arguments[i__5723__auto___56693]));

var G__56694 = (i__5723__auto___56693 + (1));
i__5723__auto___56693 = G__56694;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56252 = conformed_args__54883__auto__;
var map__56252__$1 = cljs.core.__destructure_map(map__56252);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56252__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq56251){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56251));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56695 = arguments.length;
var i__5723__auto___56696 = (0);
while(true){
if((i__5723__auto___56696 < len__5722__auto___56695)){
args__5728__auto__.push((arguments[i__5723__auto___56696]));

var G__56697 = (i__5723__auto___56696 + (1));
i__5723__auto___56696 = G__56697;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56254 = conformed_args__54883__auto__;
var map__56254__$1 = cljs.core.__destructure_map(map__56254);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq56253){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56253));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56698 = arguments.length;
var i__5723__auto___56699 = (0);
while(true){
if((i__5723__auto___56699 < len__5722__auto___56698)){
args__5728__auto__.push((arguments[i__5723__auto___56699]));

var G__56700 = (i__5723__auto___56699 + (1));
i__5723__auto___56699 = G__56700;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56256 = conformed_args__54883__auto__;
var map__56256__$1 = cljs.core.__destructure_map(map__56256);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56256__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56256__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56256__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq56255){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56255));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56701 = arguments.length;
var i__5723__auto___56702 = (0);
while(true){
if((i__5723__auto___56702 < len__5722__auto___56701)){
args__5728__auto__.push((arguments[i__5723__auto___56702]));

var G__56703 = (i__5723__auto___56702 + (1));
i__5723__auto___56702 = G__56703;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56258 = conformed_args__54883__auto__;
var map__56258__$1 = cljs.core.__destructure_map(map__56258);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56258__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56258__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56258__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq56257){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56257));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56704 = arguments.length;
var i__5723__auto___56705 = (0);
while(true){
if((i__5723__auto___56705 < len__5722__auto___56704)){
args__5728__auto__.push((arguments[i__5723__auto___56705]));

var G__56706 = (i__5723__auto___56705 + (1));
i__5723__auto___56705 = G__56706;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56260 = conformed_args__54883__auto__;
var map__56260__$1 = cljs.core.__destructure_map(map__56260);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq56259){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56259));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56707 = arguments.length;
var i__5723__auto___56708 = (0);
while(true){
if((i__5723__auto___56708 < len__5722__auto___56707)){
args__5728__auto__.push((arguments[i__5723__auto___56708]));

var G__56709 = (i__5723__auto___56708 + (1));
i__5723__auto___56708 = G__56709;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56262 = conformed_args__54883__auto__;
var map__56262__$1 = cljs.core.__destructure_map(map__56262);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq56261){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56261));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56710 = arguments.length;
var i__5723__auto___56711 = (0);
while(true){
if((i__5723__auto___56711 < len__5722__auto___56710)){
args__5728__auto__.push((arguments[i__5723__auto___56711]));

var G__56712 = (i__5723__auto___56711 + (1));
i__5723__auto___56711 = G__56712;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56264 = conformed_args__54883__auto__;
var map__56264__$1 = cljs.core.__destructure_map(map__56264);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56264__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56264__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56264__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq56263){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56263));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56713 = arguments.length;
var i__5723__auto___56714 = (0);
while(true){
if((i__5723__auto___56714 < len__5722__auto___56713)){
args__5728__auto__.push((arguments[i__5723__auto___56714]));

var G__56715 = (i__5723__auto___56714 + (1));
i__5723__auto___56714 = G__56715;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56266 = conformed_args__54883__auto__;
var map__56266__$1 = cljs.core.__destructure_map(map__56266);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56266__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56266__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56266__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq56265){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56265));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56716 = arguments.length;
var i__5723__auto___56717 = (0);
while(true){
if((i__5723__auto___56717 < len__5722__auto___56716)){
args__5728__auto__.push((arguments[i__5723__auto___56717]));

var G__56718 = (i__5723__auto___56717 + (1));
i__5723__auto___56717 = G__56718;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56268 = conformed_args__54883__auto__;
var map__56268__$1 = cljs.core.__destructure_map(map__56268);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56268__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq56267){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56267));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56719 = arguments.length;
var i__5723__auto___56720 = (0);
while(true){
if((i__5723__auto___56720 < len__5722__auto___56719)){
args__5728__auto__.push((arguments[i__5723__auto___56720]));

var G__56721 = (i__5723__auto___56720 + (1));
i__5723__auto___56720 = G__56721;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56270 = conformed_args__54883__auto__;
var map__56270__$1 = cljs.core.__destructure_map(map__56270);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56270__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq56269){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56269));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56722 = arguments.length;
var i__5723__auto___56723 = (0);
while(true){
if((i__5723__auto___56723 < len__5722__auto___56722)){
args__5728__auto__.push((arguments[i__5723__auto___56723]));

var G__56724 = (i__5723__auto___56723 + (1));
i__5723__auto___56723 = G__56724;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56272 = conformed_args__54883__auto__;
var map__56272__$1 = cljs.core.__destructure_map(map__56272);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56272__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56272__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56272__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq56271){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56271));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56725 = arguments.length;
var i__5723__auto___56726 = (0);
while(true){
if((i__5723__auto___56726 < len__5722__auto___56725)){
args__5728__auto__.push((arguments[i__5723__auto___56726]));

var G__56727 = (i__5723__auto___56726 + (1));
i__5723__auto___56726 = G__56727;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56274 = conformed_args__54883__auto__;
var map__56274__$1 = cljs.core.__destructure_map(map__56274);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq56273){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56273));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56728 = arguments.length;
var i__5723__auto___56729 = (0);
while(true){
if((i__5723__auto___56729 < len__5722__auto___56728)){
args__5728__auto__.push((arguments[i__5723__auto___56729]));

var G__56730 = (i__5723__auto___56729 + (1));
i__5723__auto___56729 = G__56730;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56276 = conformed_args__54883__auto__;
var map__56276__$1 = cljs.core.__destructure_map(map__56276);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56276__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq56275){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56275));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56731 = arguments.length;
var i__5723__auto___56732 = (0);
while(true){
if((i__5723__auto___56732 < len__5722__auto___56731)){
args__5728__auto__.push((arguments[i__5723__auto___56732]));

var G__56733 = (i__5723__auto___56732 + (1));
i__5723__auto___56732 = G__56733;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56278 = conformed_args__54883__auto__;
var map__56278__$1 = cljs.core.__destructure_map(map__56278);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq56277){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56277));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56734 = arguments.length;
var i__5723__auto___56735 = (0);
while(true){
if((i__5723__auto___56735 < len__5722__auto___56734)){
args__5728__auto__.push((arguments[i__5723__auto___56735]));

var G__56736 = (i__5723__auto___56735 + (1));
i__5723__auto___56735 = G__56736;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56280 = conformed_args__54883__auto__;
var map__56280__$1 = cljs.core.__destructure_map(map__56280);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq56279){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56279));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56737 = arguments.length;
var i__5723__auto___56738 = (0);
while(true){
if((i__5723__auto___56738 < len__5722__auto___56737)){
args__5728__auto__.push((arguments[i__5723__auto___56738]));

var G__56739 = (i__5723__auto___56738 + (1));
i__5723__auto___56738 = G__56739;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56282 = conformed_args__54883__auto__;
var map__56282__$1 = cljs.core.__destructure_map(map__56282);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56282__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq56281){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56281));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56740 = arguments.length;
var i__5723__auto___56741 = (0);
while(true){
if((i__5723__auto___56741 < len__5722__auto___56740)){
args__5728__auto__.push((arguments[i__5723__auto___56741]));

var G__56742 = (i__5723__auto___56741 + (1));
i__5723__auto___56741 = G__56742;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56284 = conformed_args__54883__auto__;
var map__56284__$1 = cljs.core.__destructure_map(map__56284);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq56283){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56283));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56743 = arguments.length;
var i__5723__auto___56744 = (0);
while(true){
if((i__5723__auto___56744 < len__5722__auto___56743)){
args__5728__auto__.push((arguments[i__5723__auto___56744]));

var G__56745 = (i__5723__auto___56744 + (1));
i__5723__auto___56744 = G__56745;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56286 = conformed_args__54883__auto__;
var map__56286__$1 = cljs.core.__destructure_map(map__56286);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq56285){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56285));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56746 = arguments.length;
var i__5723__auto___56747 = (0);
while(true){
if((i__5723__auto___56747 < len__5722__auto___56746)){
args__5728__auto__.push((arguments[i__5723__auto___56747]));

var G__56748 = (i__5723__auto___56747 + (1));
i__5723__auto___56747 = G__56748;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56288 = conformed_args__54883__auto__;
var map__56288__$1 = cljs.core.__destructure_map(map__56288);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq56287){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56287));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56749 = arguments.length;
var i__5723__auto___56750 = (0);
while(true){
if((i__5723__auto___56750 < len__5722__auto___56749)){
args__5728__auto__.push((arguments[i__5723__auto___56750]));

var G__56751 = (i__5723__auto___56750 + (1));
i__5723__auto___56750 = G__56751;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56290 = conformed_args__54883__auto__;
var map__56290__$1 = cljs.core.__destructure_map(map__56290);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq56289){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56289));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56752 = arguments.length;
var i__5723__auto___56753 = (0);
while(true){
if((i__5723__auto___56753 < len__5722__auto___56752)){
args__5728__auto__.push((arguments[i__5723__auto___56753]));

var G__56754 = (i__5723__auto___56753 + (1));
i__5723__auto___56753 = G__56754;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56292 = conformed_args__54883__auto__;
var map__56292__$1 = cljs.core.__destructure_map(map__56292);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56292__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56292__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56292__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq56291){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56291));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56755 = arguments.length;
var i__5723__auto___56756 = (0);
while(true){
if((i__5723__auto___56756 < len__5722__auto___56755)){
args__5728__auto__.push((arguments[i__5723__auto___56756]));

var G__56757 = (i__5723__auto___56756 + (1));
i__5723__auto___56756 = G__56757;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56294 = conformed_args__54883__auto__;
var map__56294__$1 = cljs.core.__destructure_map(map__56294);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56294__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq56293){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56293));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56758 = arguments.length;
var i__5723__auto___56759 = (0);
while(true){
if((i__5723__auto___56759 < len__5722__auto___56758)){
args__5728__auto__.push((arguments[i__5723__auto___56759]));

var G__56760 = (i__5723__auto___56759 + (1));
i__5723__auto___56759 = G__56760;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56296 = conformed_args__54883__auto__;
var map__56296__$1 = cljs.core.__destructure_map(map__56296);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq56295){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56295));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56761 = arguments.length;
var i__5723__auto___56762 = (0);
while(true){
if((i__5723__auto___56762 < len__5722__auto___56761)){
args__5728__auto__.push((arguments[i__5723__auto___56762]));

var G__56763 = (i__5723__auto___56762 + (1));
i__5723__auto___56762 = G__56763;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56298 = conformed_args__54883__auto__;
var map__56298__$1 = cljs.core.__destructure_map(map__56298);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq56297){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56297));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56764 = arguments.length;
var i__5723__auto___56765 = (0);
while(true){
if((i__5723__auto___56765 < len__5722__auto___56764)){
args__5728__auto__.push((arguments[i__5723__auto___56765]));

var G__56766 = (i__5723__auto___56765 + (1));
i__5723__auto___56765 = G__56766;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56300 = conformed_args__54883__auto__;
var map__56300__$1 = cljs.core.__destructure_map(map__56300);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq56299){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56299));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56767 = arguments.length;
var i__5723__auto___56768 = (0);
while(true){
if((i__5723__auto___56768 < len__5722__auto___56767)){
args__5728__auto__.push((arguments[i__5723__auto___56768]));

var G__56769 = (i__5723__auto___56768 + (1));
i__5723__auto___56768 = G__56769;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56302 = conformed_args__54883__auto__;
var map__56302__$1 = cljs.core.__destructure_map(map__56302);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq56301){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56301));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56770 = arguments.length;
var i__5723__auto___56771 = (0);
while(true){
if((i__5723__auto___56771 < len__5722__auto___56770)){
args__5728__auto__.push((arguments[i__5723__auto___56771]));

var G__56772 = (i__5723__auto___56771 + (1));
i__5723__auto___56771 = G__56772;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56304 = conformed_args__54883__auto__;
var map__56304__$1 = cljs.core.__destructure_map(map__56304);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq56303){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56303));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56773 = arguments.length;
var i__5723__auto___56774 = (0);
while(true){
if((i__5723__auto___56774 < len__5722__auto___56773)){
args__5728__auto__.push((arguments[i__5723__auto___56774]));

var G__56775 = (i__5723__auto___56774 + (1));
i__5723__auto___56774 = G__56775;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56306 = conformed_args__54883__auto__;
var map__56306__$1 = cljs.core.__destructure_map(map__56306);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56306__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56306__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq56305){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56305));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56776 = arguments.length;
var i__5723__auto___56777 = (0);
while(true){
if((i__5723__auto___56777 < len__5722__auto___56776)){
args__5728__auto__.push((arguments[i__5723__auto___56777]));

var G__56778 = (i__5723__auto___56777 + (1));
i__5723__auto___56777 = G__56778;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56308 = conformed_args__54883__auto__;
var map__56308__$1 = cljs.core.__destructure_map(map__56308);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56308__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq56307){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56307));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56779 = arguments.length;
var i__5723__auto___56780 = (0);
while(true){
if((i__5723__auto___56780 < len__5722__auto___56779)){
args__5728__auto__.push((arguments[i__5723__auto___56780]));

var G__56781 = (i__5723__auto___56780 + (1));
i__5723__auto___56780 = G__56781;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56310 = conformed_args__54883__auto__;
var map__56310__$1 = cljs.core.__destructure_map(map__56310);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq56309){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56309));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56782 = arguments.length;
var i__5723__auto___56783 = (0);
while(true){
if((i__5723__auto___56783 < len__5722__auto___56782)){
args__5728__auto__.push((arguments[i__5723__auto___56783]));

var G__56784 = (i__5723__auto___56783 + (1));
i__5723__auto___56783 = G__56784;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56312 = conformed_args__54883__auto__;
var map__56312__$1 = cljs.core.__destructure_map(map__56312);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56312__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56312__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56312__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq56311){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56311));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56785 = arguments.length;
var i__5723__auto___56786 = (0);
while(true){
if((i__5723__auto___56786 < len__5722__auto___56785)){
args__5728__auto__.push((arguments[i__5723__auto___56786]));

var G__56787 = (i__5723__auto___56786 + (1));
i__5723__auto___56786 = G__56787;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56314 = conformed_args__54883__auto__;
var map__56314__$1 = cljs.core.__destructure_map(map__56314);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq56313){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56313));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56788 = arguments.length;
var i__5723__auto___56789 = (0);
while(true){
if((i__5723__auto___56789 < len__5722__auto___56788)){
args__5728__auto__.push((arguments[i__5723__auto___56789]));

var G__56790 = (i__5723__auto___56789 + (1));
i__5723__auto___56789 = G__56790;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56316 = conformed_args__54883__auto__;
var map__56316__$1 = cljs.core.__destructure_map(map__56316);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq56315){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56315));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56791 = arguments.length;
var i__5723__auto___56792 = (0);
while(true){
if((i__5723__auto___56792 < len__5722__auto___56791)){
args__5728__auto__.push((arguments[i__5723__auto___56792]));

var G__56793 = (i__5723__auto___56792 + (1));
i__5723__auto___56792 = G__56793;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56318 = conformed_args__54883__auto__;
var map__56318__$1 = cljs.core.__destructure_map(map__56318);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56318__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56318__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56318__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq56317){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56317));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56794 = arguments.length;
var i__5723__auto___56795 = (0);
while(true){
if((i__5723__auto___56795 < len__5722__auto___56794)){
args__5728__auto__.push((arguments[i__5723__auto___56795]));

var G__56796 = (i__5723__auto___56795 + (1));
i__5723__auto___56795 = G__56796;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56320 = conformed_args__54883__auto__;
var map__56320__$1 = cljs.core.__destructure_map(map__56320);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56320__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56320__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56320__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq56319){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56319));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56797 = arguments.length;
var i__5723__auto___56798 = (0);
while(true){
if((i__5723__auto___56798 < len__5722__auto___56797)){
args__5728__auto__.push((arguments[i__5723__auto___56798]));

var G__56799 = (i__5723__auto___56798 + (1));
i__5723__auto___56798 = G__56799;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56322 = conformed_args__54883__auto__;
var map__56322__$1 = cljs.core.__destructure_map(map__56322);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq56321){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56321));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56800 = arguments.length;
var i__5723__auto___56801 = (0);
while(true){
if((i__5723__auto___56801 < len__5722__auto___56800)){
args__5728__auto__.push((arguments[i__5723__auto___56801]));

var G__56802 = (i__5723__auto___56801 + (1));
i__5723__auto___56801 = G__56802;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56324 = conformed_args__54883__auto__;
var map__56324__$1 = cljs.core.__destructure_map(map__56324);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq56323){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56323));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56803 = arguments.length;
var i__5723__auto___56804 = (0);
while(true){
if((i__5723__auto___56804 < len__5722__auto___56803)){
args__5728__auto__.push((arguments[i__5723__auto___56804]));

var G__56805 = (i__5723__auto___56804 + (1));
i__5723__auto___56804 = G__56805;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56326 = conformed_args__54883__auto__;
var map__56326__$1 = cljs.core.__destructure_map(map__56326);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq56325){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56325));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56806 = arguments.length;
var i__5723__auto___56807 = (0);
while(true){
if((i__5723__auto___56807 < len__5722__auto___56806)){
args__5728__auto__.push((arguments[i__5723__auto___56807]));

var G__56808 = (i__5723__auto___56807 + (1));
i__5723__auto___56807 = G__56808;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56328 = conformed_args__54883__auto__;
var map__56328__$1 = cljs.core.__destructure_map(map__56328);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq56327){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56327));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56809 = arguments.length;
var i__5723__auto___56810 = (0);
while(true){
if((i__5723__auto___56810 < len__5722__auto___56809)){
args__5728__auto__.push((arguments[i__5723__auto___56810]));

var G__56811 = (i__5723__auto___56810 + (1));
i__5723__auto___56810 = G__56811;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56330 = conformed_args__54883__auto__;
var map__56330__$1 = cljs.core.__destructure_map(map__56330);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq56329){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56329));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56812 = arguments.length;
var i__5723__auto___56813 = (0);
while(true){
if((i__5723__auto___56813 < len__5722__auto___56812)){
args__5728__auto__.push((arguments[i__5723__auto___56813]));

var G__56814 = (i__5723__auto___56813 + (1));
i__5723__auto___56813 = G__56814;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56332 = conformed_args__54883__auto__;
var map__56332__$1 = cljs.core.__destructure_map(map__56332);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56332__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56332__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56332__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq56331){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56331));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56815 = arguments.length;
var i__5723__auto___56816 = (0);
while(true){
if((i__5723__auto___56816 < len__5722__auto___56815)){
args__5728__auto__.push((arguments[i__5723__auto___56816]));

var G__56817 = (i__5723__auto___56816 + (1));
i__5723__auto___56816 = G__56817;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56334 = conformed_args__54883__auto__;
var map__56334__$1 = cljs.core.__destructure_map(map__56334);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq56333){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56333));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56818 = arguments.length;
var i__5723__auto___56819 = (0);
while(true){
if((i__5723__auto___56819 < len__5722__auto___56818)){
args__5728__auto__.push((arguments[i__5723__auto___56819]));

var G__56820 = (i__5723__auto___56819 + (1));
i__5723__auto___56819 = G__56820;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56336 = conformed_args__54883__auto__;
var map__56336__$1 = cljs.core.__destructure_map(map__56336);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56336__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56336__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq56335){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56335));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56821 = arguments.length;
var i__5723__auto___56822 = (0);
while(true){
if((i__5723__auto___56822 < len__5722__auto___56821)){
args__5728__auto__.push((arguments[i__5723__auto___56822]));

var G__56823 = (i__5723__auto___56822 + (1));
i__5723__auto___56822 = G__56823;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56338 = conformed_args__54883__auto__;
var map__56338__$1 = cljs.core.__destructure_map(map__56338);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq56337){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56337));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56824 = arguments.length;
var i__5723__auto___56825 = (0);
while(true){
if((i__5723__auto___56825 < len__5722__auto___56824)){
args__5728__auto__.push((arguments[i__5723__auto___56825]));

var G__56826 = (i__5723__auto___56825 + (1));
i__5723__auto___56825 = G__56826;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56340 = conformed_args__54883__auto__;
var map__56340__$1 = cljs.core.__destructure_map(map__56340);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56340__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56340__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56340__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq56339){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56339));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56827 = arguments.length;
var i__5723__auto___56828 = (0);
while(true){
if((i__5723__auto___56828 < len__5722__auto___56827)){
args__5728__auto__.push((arguments[i__5723__auto___56828]));

var G__56829 = (i__5723__auto___56828 + (1));
i__5723__auto___56828 = G__56829;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56342 = conformed_args__54883__auto__;
var map__56342__$1 = cljs.core.__destructure_map(map__56342);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq56341){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56341));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56830 = arguments.length;
var i__5723__auto___56831 = (0);
while(true){
if((i__5723__auto___56831 < len__5722__auto___56830)){
args__5728__auto__.push((arguments[i__5723__auto___56831]));

var G__56832 = (i__5723__auto___56831 + (1));
i__5723__auto___56831 = G__56832;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56344 = conformed_args__54883__auto__;
var map__56344__$1 = cljs.core.__destructure_map(map__56344);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq56343){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56343));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56833 = arguments.length;
var i__5723__auto___56834 = (0);
while(true){
if((i__5723__auto___56834 < len__5722__auto___56833)){
args__5728__auto__.push((arguments[i__5723__auto___56834]));

var G__56835 = (i__5723__auto___56834 + (1));
i__5723__auto___56834 = G__56835;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56346 = conformed_args__54883__auto__;
var map__56346__$1 = cljs.core.__destructure_map(map__56346);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq56345){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56345));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56836 = arguments.length;
var i__5723__auto___56837 = (0);
while(true){
if((i__5723__auto___56837 < len__5722__auto___56836)){
args__5728__auto__.push((arguments[i__5723__auto___56837]));

var G__56838 = (i__5723__auto___56837 + (1));
i__5723__auto___56837 = G__56838;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56348 = conformed_args__54883__auto__;
var map__56348__$1 = cljs.core.__destructure_map(map__56348);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56348__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56348__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56348__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq56347){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56347));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56839 = arguments.length;
var i__5723__auto___56840 = (0);
while(true){
if((i__5723__auto___56840 < len__5722__auto___56839)){
args__5728__auto__.push((arguments[i__5723__auto___56840]));

var G__56841 = (i__5723__auto___56840 + (1));
i__5723__auto___56840 = G__56841;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56350 = conformed_args__54883__auto__;
var map__56350__$1 = cljs.core.__destructure_map(map__56350);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq56349){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56349));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56842 = arguments.length;
var i__5723__auto___56843 = (0);
while(true){
if((i__5723__auto___56843 < len__5722__auto___56842)){
args__5728__auto__.push((arguments[i__5723__auto___56843]));

var G__56844 = (i__5723__auto___56843 + (1));
i__5723__auto___56843 = G__56844;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56352 = conformed_args__54883__auto__;
var map__56352__$1 = cljs.core.__destructure_map(map__56352);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq56351){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56351));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56845 = arguments.length;
var i__5723__auto___56846 = (0);
while(true){
if((i__5723__auto___56846 < len__5722__auto___56845)){
args__5728__auto__.push((arguments[i__5723__auto___56846]));

var G__56847 = (i__5723__auto___56846 + (1));
i__5723__auto___56846 = G__56847;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56354 = conformed_args__54883__auto__;
var map__56354__$1 = cljs.core.__destructure_map(map__56354);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq56353){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56353));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56848 = arguments.length;
var i__5723__auto___56849 = (0);
while(true){
if((i__5723__auto___56849 < len__5722__auto___56848)){
args__5728__auto__.push((arguments[i__5723__auto___56849]));

var G__56850 = (i__5723__auto___56849 + (1));
i__5723__auto___56849 = G__56850;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56356 = conformed_args__54883__auto__;
var map__56356__$1 = cljs.core.__destructure_map(map__56356);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq56355){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56355));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56851 = arguments.length;
var i__5723__auto___56852 = (0);
while(true){
if((i__5723__auto___56852 < len__5722__auto___56851)){
args__5728__auto__.push((arguments[i__5723__auto___56852]));

var G__56853 = (i__5723__auto___56852 + (1));
i__5723__auto___56852 = G__56853;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56358 = conformed_args__54883__auto__;
var map__56358__$1 = cljs.core.__destructure_map(map__56358);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq56357){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56357));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56854 = arguments.length;
var i__5723__auto___56855 = (0);
while(true){
if((i__5723__auto___56855 < len__5722__auto___56854)){
args__5728__auto__.push((arguments[i__5723__auto___56855]));

var G__56856 = (i__5723__auto___56855 + (1));
i__5723__auto___56855 = G__56856;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56360 = conformed_args__54883__auto__;
var map__56360__$1 = cljs.core.__destructure_map(map__56360);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq56359){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56359));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56857 = arguments.length;
var i__5723__auto___56858 = (0);
while(true){
if((i__5723__auto___56858 < len__5722__auto___56857)){
args__5728__auto__.push((arguments[i__5723__auto___56858]));

var G__56859 = (i__5723__auto___56858 + (1));
i__5723__auto___56858 = G__56859;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56362 = conformed_args__54883__auto__;
var map__56362__$1 = cljs.core.__destructure_map(map__56362);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq56361){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56361));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56860 = arguments.length;
var i__5723__auto___56861 = (0);
while(true){
if((i__5723__auto___56861 < len__5722__auto___56860)){
args__5728__auto__.push((arguments[i__5723__auto___56861]));

var G__56862 = (i__5723__auto___56861 + (1));
i__5723__auto___56861 = G__56862;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56364 = conformed_args__54883__auto__;
var map__56364__$1 = cljs.core.__destructure_map(map__56364);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq56363){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56363));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56863 = arguments.length;
var i__5723__auto___56864 = (0);
while(true){
if((i__5723__auto___56864 < len__5722__auto___56863)){
args__5728__auto__.push((arguments[i__5723__auto___56864]));

var G__56865 = (i__5723__auto___56864 + (1));
i__5723__auto___56864 = G__56865;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56366 = conformed_args__54883__auto__;
var map__56366__$1 = cljs.core.__destructure_map(map__56366);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56366__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56366__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56366__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq56365){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56365));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56866 = arguments.length;
var i__5723__auto___56867 = (0);
while(true){
if((i__5723__auto___56867 < len__5722__auto___56866)){
args__5728__auto__.push((arguments[i__5723__auto___56867]));

var G__56868 = (i__5723__auto___56867 + (1));
i__5723__auto___56867 = G__56868;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56368 = conformed_args__54883__auto__;
var map__56368__$1 = cljs.core.__destructure_map(map__56368);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq56367){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56367));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56869 = arguments.length;
var i__5723__auto___56870 = (0);
while(true){
if((i__5723__auto___56870 < len__5722__auto___56869)){
args__5728__auto__.push((arguments[i__5723__auto___56870]));

var G__56871 = (i__5723__auto___56870 + (1));
i__5723__auto___56870 = G__56871;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56370 = conformed_args__54883__auto__;
var map__56370__$1 = cljs.core.__destructure_map(map__56370);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56370__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56370__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56370__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq56369){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56369));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56872 = arguments.length;
var i__5723__auto___56873 = (0);
while(true){
if((i__5723__auto___56873 < len__5722__auto___56872)){
args__5728__auto__.push((arguments[i__5723__auto___56873]));

var G__56874 = (i__5723__auto___56873 + (1));
i__5723__auto___56873 = G__56874;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56372 = conformed_args__54883__auto__;
var map__56372__$1 = cljs.core.__destructure_map(map__56372);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq56371){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56371));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56875 = arguments.length;
var i__5723__auto___56876 = (0);
while(true){
if((i__5723__auto___56876 < len__5722__auto___56875)){
args__5728__auto__.push((arguments[i__5723__auto___56876]));

var G__56877 = (i__5723__auto___56876 + (1));
i__5723__auto___56876 = G__56877;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56374 = conformed_args__54883__auto__;
var map__56374__$1 = cljs.core.__destructure_map(map__56374);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56374__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56374__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56374__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq56373){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56373));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56878 = arguments.length;
var i__5723__auto___56879 = (0);
while(true){
if((i__5723__auto___56879 < len__5722__auto___56878)){
args__5728__auto__.push((arguments[i__5723__auto___56879]));

var G__56880 = (i__5723__auto___56879 + (1));
i__5723__auto___56879 = G__56880;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56376 = conformed_args__54883__auto__;
var map__56376__$1 = cljs.core.__destructure_map(map__56376);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56376__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56376__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56376__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq56375){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56375));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56881 = arguments.length;
var i__5723__auto___56882 = (0);
while(true){
if((i__5723__auto___56882 < len__5722__auto___56881)){
args__5728__auto__.push((arguments[i__5723__auto___56882]));

var G__56883 = (i__5723__auto___56882 + (1));
i__5723__auto___56882 = G__56883;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56378 = conformed_args__54883__auto__;
var map__56378__$1 = cljs.core.__destructure_map(map__56378);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq56377){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56377));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56884 = arguments.length;
var i__5723__auto___56885 = (0);
while(true){
if((i__5723__auto___56885 < len__5722__auto___56884)){
args__5728__auto__.push((arguments[i__5723__auto___56885]));

var G__56886 = (i__5723__auto___56885 + (1));
i__5723__auto___56885 = G__56886;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56380 = conformed_args__54883__auto__;
var map__56380__$1 = cljs.core.__destructure_map(map__56380);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq56379){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56379));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56887 = arguments.length;
var i__5723__auto___56888 = (0);
while(true){
if((i__5723__auto___56888 < len__5722__auto___56887)){
args__5728__auto__.push((arguments[i__5723__auto___56888]));

var G__56889 = (i__5723__auto___56888 + (1));
i__5723__auto___56888 = G__56889;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56382 = conformed_args__54883__auto__;
var map__56382__$1 = cljs.core.__destructure_map(map__56382);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq56381){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56381));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56890 = arguments.length;
var i__5723__auto___56891 = (0);
while(true){
if((i__5723__auto___56891 < len__5722__auto___56890)){
args__5728__auto__.push((arguments[i__5723__auto___56891]));

var G__56892 = (i__5723__auto___56891 + (1));
i__5723__auto___56891 = G__56892;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56384 = conformed_args__54883__auto__;
var map__56384__$1 = cljs.core.__destructure_map(map__56384);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56384__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56384__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq56383){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56383));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56893 = arguments.length;
var i__5723__auto___56894 = (0);
while(true){
if((i__5723__auto___56894 < len__5722__auto___56893)){
args__5728__auto__.push((arguments[i__5723__auto___56894]));

var G__56895 = (i__5723__auto___56894 + (1));
i__5723__auto___56894 = G__56895;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56386 = conformed_args__54883__auto__;
var map__56386__$1 = cljs.core.__destructure_map(map__56386);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq56385){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56385));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56896 = arguments.length;
var i__5723__auto___56897 = (0);
while(true){
if((i__5723__auto___56897 < len__5722__auto___56896)){
args__5728__auto__.push((arguments[i__5723__auto___56897]));

var G__56898 = (i__5723__auto___56897 + (1));
i__5723__auto___56897 = G__56898;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56388 = conformed_args__54883__auto__;
var map__56388__$1 = cljs.core.__destructure_map(map__56388);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq56387){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56387));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56899 = arguments.length;
var i__5723__auto___56900 = (0);
while(true){
if((i__5723__auto___56900 < len__5722__auto___56899)){
args__5728__auto__.push((arguments[i__5723__auto___56900]));

var G__56901 = (i__5723__auto___56900 + (1));
i__5723__auto___56900 = G__56901;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56390 = conformed_args__54883__auto__;
var map__56390__$1 = cljs.core.__destructure_map(map__56390);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56390__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56390__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq56389){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56389));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56902 = arguments.length;
var i__5723__auto___56903 = (0);
while(true){
if((i__5723__auto___56903 < len__5722__auto___56902)){
args__5728__auto__.push((arguments[i__5723__auto___56903]));

var G__56904 = (i__5723__auto___56903 + (1));
i__5723__auto___56903 = G__56904;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56392 = conformed_args__54883__auto__;
var map__56392__$1 = cljs.core.__destructure_map(map__56392);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq56391){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56391));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56905 = arguments.length;
var i__5723__auto___56906 = (0);
while(true){
if((i__5723__auto___56906 < len__5722__auto___56905)){
args__5728__auto__.push((arguments[i__5723__auto___56906]));

var G__56907 = (i__5723__auto___56906 + (1));
i__5723__auto___56906 = G__56907;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56394 = conformed_args__54883__auto__;
var map__56394__$1 = cljs.core.__destructure_map(map__56394);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq56393){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56393));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56908 = arguments.length;
var i__5723__auto___56909 = (0);
while(true){
if((i__5723__auto___56909 < len__5722__auto___56908)){
args__5728__auto__.push((arguments[i__5723__auto___56909]));

var G__56910 = (i__5723__auto___56909 + (1));
i__5723__auto___56909 = G__56910;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56396 = conformed_args__54883__auto__;
var map__56396__$1 = cljs.core.__destructure_map(map__56396);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56396__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56396__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56396__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq56395){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56395));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56911 = arguments.length;
var i__5723__auto___56912 = (0);
while(true){
if((i__5723__auto___56912 < len__5722__auto___56911)){
args__5728__auto__.push((arguments[i__5723__auto___56912]));

var G__56913 = (i__5723__auto___56912 + (1));
i__5723__auto___56912 = G__56913;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56398 = conformed_args__54883__auto__;
var map__56398__$1 = cljs.core.__destructure_map(map__56398);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq56397){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56397));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56914 = arguments.length;
var i__5723__auto___56915 = (0);
while(true){
if((i__5723__auto___56915 < len__5722__auto___56914)){
args__5728__auto__.push((arguments[i__5723__auto___56915]));

var G__56916 = (i__5723__auto___56915 + (1));
i__5723__auto___56915 = G__56916;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56400 = conformed_args__54883__auto__;
var map__56400__$1 = cljs.core.__destructure_map(map__56400);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq56399){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56917 = arguments.length;
var i__5723__auto___56918 = (0);
while(true){
if((i__5723__auto___56918 < len__5722__auto___56917)){
args__5728__auto__.push((arguments[i__5723__auto___56918]));

var G__56919 = (i__5723__auto___56918 + (1));
i__5723__auto___56918 = G__56919;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56402 = conformed_args__54883__auto__;
var map__56402__$1 = cljs.core.__destructure_map(map__56402);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq56401){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56401));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56920 = arguments.length;
var i__5723__auto___56921 = (0);
while(true){
if((i__5723__auto___56921 < len__5722__auto___56920)){
args__5728__auto__.push((arguments[i__5723__auto___56921]));

var G__56922 = (i__5723__auto___56921 + (1));
i__5723__auto___56921 = G__56922;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56404 = conformed_args__54883__auto__;
var map__56404__$1 = cljs.core.__destructure_map(map__56404);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq56403){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56403));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56923 = arguments.length;
var i__5723__auto___56924 = (0);
while(true){
if((i__5723__auto___56924 < len__5722__auto___56923)){
args__5728__auto__.push((arguments[i__5723__auto___56924]));

var G__56925 = (i__5723__auto___56924 + (1));
i__5723__auto___56924 = G__56925;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56406 = conformed_args__54883__auto__;
var map__56406__$1 = cljs.core.__destructure_map(map__56406);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq56405){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56405));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56926 = arguments.length;
var i__5723__auto___56927 = (0);
while(true){
if((i__5723__auto___56927 < len__5722__auto___56926)){
args__5728__auto__.push((arguments[i__5723__auto___56927]));

var G__56928 = (i__5723__auto___56927 + (1));
i__5723__auto___56927 = G__56928;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56408 = conformed_args__54883__auto__;
var map__56408__$1 = cljs.core.__destructure_map(map__56408);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56408__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56408__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56408__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq56407){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56407));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56929 = arguments.length;
var i__5723__auto___56930 = (0);
while(true){
if((i__5723__auto___56930 < len__5722__auto___56929)){
args__5728__auto__.push((arguments[i__5723__auto___56930]));

var G__56931 = (i__5723__auto___56930 + (1));
i__5723__auto___56930 = G__56931;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56410 = conformed_args__54883__auto__;
var map__56410__$1 = cljs.core.__destructure_map(map__56410);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq56409){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56932 = arguments.length;
var i__5723__auto___56933 = (0);
while(true){
if((i__5723__auto___56933 < len__5722__auto___56932)){
args__5728__auto__.push((arguments[i__5723__auto___56933]));

var G__56934 = (i__5723__auto___56933 + (1));
i__5723__auto___56933 = G__56934;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56412 = conformed_args__54883__auto__;
var map__56412__$1 = cljs.core.__destructure_map(map__56412);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq56411){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56411));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56935 = arguments.length;
var i__5723__auto___56936 = (0);
while(true){
if((i__5723__auto___56936 < len__5722__auto___56935)){
args__5728__auto__.push((arguments[i__5723__auto___56936]));

var G__56937 = (i__5723__auto___56936 + (1));
i__5723__auto___56936 = G__56937;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56414 = conformed_args__54883__auto__;
var map__56414__$1 = cljs.core.__destructure_map(map__56414);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq56413){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56413));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56938 = arguments.length;
var i__5723__auto___56939 = (0);
while(true){
if((i__5723__auto___56939 < len__5722__auto___56938)){
args__5728__auto__.push((arguments[i__5723__auto___56939]));

var G__56940 = (i__5723__auto___56939 + (1));
i__5723__auto___56939 = G__56940;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56416 = conformed_args__54883__auto__;
var map__56416__$1 = cljs.core.__destructure_map(map__56416);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq56415){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56415));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56941 = arguments.length;
var i__5723__auto___56942 = (0);
while(true){
if((i__5723__auto___56942 < len__5722__auto___56941)){
args__5728__auto__.push((arguments[i__5723__auto___56942]));

var G__56943 = (i__5723__auto___56942 + (1));
i__5723__auto___56942 = G__56943;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56418 = conformed_args__54883__auto__;
var map__56418__$1 = cljs.core.__destructure_map(map__56418);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq56417){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56417));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56944 = arguments.length;
var i__5723__auto___56945 = (0);
while(true){
if((i__5723__auto___56945 < len__5722__auto___56944)){
args__5728__auto__.push((arguments[i__5723__auto___56945]));

var G__56946 = (i__5723__auto___56945 + (1));
i__5723__auto___56945 = G__56946;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56420 = conformed_args__54883__auto__;
var map__56420__$1 = cljs.core.__destructure_map(map__56420);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq56419){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56419));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56947 = arguments.length;
var i__5723__auto___56948 = (0);
while(true){
if((i__5723__auto___56948 < len__5722__auto___56947)){
args__5728__auto__.push((arguments[i__5723__auto___56948]));

var G__56949 = (i__5723__auto___56948 + (1));
i__5723__auto___56948 = G__56949;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56422 = conformed_args__54883__auto__;
var map__56422__$1 = cljs.core.__destructure_map(map__56422);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq56421){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56421));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56950 = arguments.length;
var i__5723__auto___56951 = (0);
while(true){
if((i__5723__auto___56951 < len__5722__auto___56950)){
args__5728__auto__.push((arguments[i__5723__auto___56951]));

var G__56952 = (i__5723__auto___56951 + (1));
i__5723__auto___56951 = G__56952;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56424 = conformed_args__54883__auto__;
var map__56424__$1 = cljs.core.__destructure_map(map__56424);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq56423){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56423));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56953 = arguments.length;
var i__5723__auto___56954 = (0);
while(true){
if((i__5723__auto___56954 < len__5722__auto___56953)){
args__5728__auto__.push((arguments[i__5723__auto___56954]));

var G__56955 = (i__5723__auto___56954 + (1));
i__5723__auto___56954 = G__56955;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56426 = conformed_args__54883__auto__;
var map__56426__$1 = cljs.core.__destructure_map(map__56426);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq56425){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56425));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56956 = arguments.length;
var i__5723__auto___56957 = (0);
while(true){
if((i__5723__auto___56957 < len__5722__auto___56956)){
args__5728__auto__.push((arguments[i__5723__auto___56957]));

var G__56958 = (i__5723__auto___56957 + (1));
i__5723__auto___56957 = G__56958;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56428 = conformed_args__54883__auto__;
var map__56428__$1 = cljs.core.__destructure_map(map__56428);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq56427){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56427));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56959 = arguments.length;
var i__5723__auto___56960 = (0);
while(true){
if((i__5723__auto___56960 < len__5722__auto___56959)){
args__5728__auto__.push((arguments[i__5723__auto___56960]));

var G__56961 = (i__5723__auto___56960 + (1));
i__5723__auto___56960 = G__56961;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56430 = conformed_args__54883__auto__;
var map__56430__$1 = cljs.core.__destructure_map(map__56430);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq56429){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56429));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56962 = arguments.length;
var i__5723__auto___56963 = (0);
while(true){
if((i__5723__auto___56963 < len__5722__auto___56962)){
args__5728__auto__.push((arguments[i__5723__auto___56963]));

var G__56964 = (i__5723__auto___56963 + (1));
i__5723__auto___56963 = G__56964;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56432 = conformed_args__54883__auto__;
var map__56432__$1 = cljs.core.__destructure_map(map__56432);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq56431){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56431));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56965 = arguments.length;
var i__5723__auto___56966 = (0);
while(true){
if((i__5723__auto___56966 < len__5722__auto___56965)){
args__5728__auto__.push((arguments[i__5723__auto___56966]));

var G__56967 = (i__5723__auto___56966 + (1));
i__5723__auto___56966 = G__56967;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56434 = conformed_args__54883__auto__;
var map__56434__$1 = cljs.core.__destructure_map(map__56434);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq56433){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56433));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56968 = arguments.length;
var i__5723__auto___56969 = (0);
while(true){
if((i__5723__auto___56969 < len__5722__auto___56968)){
args__5728__auto__.push((arguments[i__5723__auto___56969]));

var G__56970 = (i__5723__auto___56969 + (1));
i__5723__auto___56969 = G__56970;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56436 = conformed_args__54883__auto__;
var map__56436__$1 = cljs.core.__destructure_map(map__56436);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq56435){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56435));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56971 = arguments.length;
var i__5723__auto___56972 = (0);
while(true){
if((i__5723__auto___56972 < len__5722__auto___56971)){
args__5728__auto__.push((arguments[i__5723__auto___56972]));

var G__56973 = (i__5723__auto___56972 + (1));
i__5723__auto___56972 = G__56973;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56438 = conformed_args__54883__auto__;
var map__56438__$1 = cljs.core.__destructure_map(map__56438);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq56437){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56437));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56974 = arguments.length;
var i__5723__auto___56975 = (0);
while(true){
if((i__5723__auto___56975 < len__5722__auto___56974)){
args__5728__auto__.push((arguments[i__5723__auto___56975]));

var G__56976 = (i__5723__auto___56975 + (1));
i__5723__auto___56975 = G__56976;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56440 = conformed_args__54883__auto__;
var map__56440__$1 = cljs.core.__destructure_map(map__56440);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq56439){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56439));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56977 = arguments.length;
var i__5723__auto___56978 = (0);
while(true){
if((i__5723__auto___56978 < len__5722__auto___56977)){
args__5728__auto__.push((arguments[i__5723__auto___56978]));

var G__56979 = (i__5723__auto___56978 + (1));
i__5723__auto___56978 = G__56979;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56442 = conformed_args__54883__auto__;
var map__56442__$1 = cljs.core.__destructure_map(map__56442);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq56441){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56441));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56980 = arguments.length;
var i__5723__auto___56981 = (0);
while(true){
if((i__5723__auto___56981 < len__5722__auto___56980)){
args__5728__auto__.push((arguments[i__5723__auto___56981]));

var G__56982 = (i__5723__auto___56981 + (1));
i__5723__auto___56981 = G__56982;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56444 = conformed_args__54883__auto__;
var map__56444__$1 = cljs.core.__destructure_map(map__56444);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq56443){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56443));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56983 = arguments.length;
var i__5723__auto___56984 = (0);
while(true){
if((i__5723__auto___56984 < len__5722__auto___56983)){
args__5728__auto__.push((arguments[i__5723__auto___56984]));

var G__56985 = (i__5723__auto___56984 + (1));
i__5723__auto___56984 = G__56985;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56446 = conformed_args__54883__auto__;
var map__56446__$1 = cljs.core.__destructure_map(map__56446);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq56445){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56445));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56986 = arguments.length;
var i__5723__auto___56987 = (0);
while(true){
if((i__5723__auto___56987 < len__5722__auto___56986)){
args__5728__auto__.push((arguments[i__5723__auto___56987]));

var G__56988 = (i__5723__auto___56987 + (1));
i__5723__auto___56987 = G__56988;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56448 = conformed_args__54883__auto__;
var map__56448__$1 = cljs.core.__destructure_map(map__56448);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq56447){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56447));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56989 = arguments.length;
var i__5723__auto___56990 = (0);
while(true){
if((i__5723__auto___56990 < len__5722__auto___56989)){
args__5728__auto__.push((arguments[i__5723__auto___56990]));

var G__56991 = (i__5723__auto___56990 + (1));
i__5723__auto___56990 = G__56991;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56450 = conformed_args__54883__auto__;
var map__56450__$1 = cljs.core.__destructure_map(map__56450);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq56449){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56449));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56992 = arguments.length;
var i__5723__auto___56993 = (0);
while(true){
if((i__5723__auto___56993 < len__5722__auto___56992)){
args__5728__auto__.push((arguments[i__5723__auto___56993]));

var G__56994 = (i__5723__auto___56993 + (1));
i__5723__auto___56993 = G__56994;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56452 = conformed_args__54883__auto__;
var map__56452__$1 = cljs.core.__destructure_map(map__56452);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq56451){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56451));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56995 = arguments.length;
var i__5723__auto___56996 = (0);
while(true){
if((i__5723__auto___56996 < len__5722__auto___56995)){
args__5728__auto__.push((arguments[i__5723__auto___56996]));

var G__56997 = (i__5723__auto___56996 + (1));
i__5723__auto___56996 = G__56997;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56454 = conformed_args__54883__auto__;
var map__56454__$1 = cljs.core.__destructure_map(map__56454);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq56453){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56453));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5728__auto__ = [];
var len__5722__auto___56998 = arguments.length;
var i__5723__auto___56999 = (0);
while(true){
if((i__5723__auto___56999 < len__5722__auto___56998)){
args__5728__auto__.push((arguments[i__5723__auto___56999]));

var G__57000 = (i__5723__auto___56999 + (1));
i__5723__auto___56999 = G__57000;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56456 = conformed_args__54883__auto__;
var map__56456__$1 = cljs.core.__destructure_map(map__56456);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq56455){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57001 = arguments.length;
var i__5723__auto___57002 = (0);
while(true){
if((i__5723__auto___57002 < len__5722__auto___57001)){
args__5728__auto__.push((arguments[i__5723__auto___57002]));

var G__57003 = (i__5723__auto___57002 + (1));
i__5723__auto___57002 = G__57003;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56458 = conformed_args__54883__auto__;
var map__56458__$1 = cljs.core.__destructure_map(map__56458);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq56457){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56457));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57004 = arguments.length;
var i__5723__auto___57005 = (0);
while(true){
if((i__5723__auto___57005 < len__5722__auto___57004)){
args__5728__auto__.push((arguments[i__5723__auto___57005]));

var G__57006 = (i__5723__auto___57005 + (1));
i__5723__auto___57005 = G__57006;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56460 = conformed_args__54883__auto__;
var map__56460__$1 = cljs.core.__destructure_map(map__56460);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq56459){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56459));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57007 = arguments.length;
var i__5723__auto___57008 = (0);
while(true){
if((i__5723__auto___57008 < len__5722__auto___57007)){
args__5728__auto__.push((arguments[i__5723__auto___57008]));

var G__57009 = (i__5723__auto___57008 + (1));
i__5723__auto___57008 = G__57009;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56462 = conformed_args__54883__auto__;
var map__56462__$1 = cljs.core.__destructure_map(map__56462);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq56461){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57010 = arguments.length;
var i__5723__auto___57011 = (0);
while(true){
if((i__5723__auto___57011 < len__5722__auto___57010)){
args__5728__auto__.push((arguments[i__5723__auto___57011]));

var G__57012 = (i__5723__auto___57011 + (1));
i__5723__auto___57011 = G__57012;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56464 = conformed_args__54883__auto__;
var map__56464__$1 = cljs.core.__destructure_map(map__56464);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq56463){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56463));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57013 = arguments.length;
var i__5723__auto___57014 = (0);
while(true){
if((i__5723__auto___57014 < len__5722__auto___57013)){
args__5728__auto__.push((arguments[i__5723__auto___57014]));

var G__57015 = (i__5723__auto___57014 + (1));
i__5723__auto___57014 = G__57015;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56466 = conformed_args__54883__auto__;
var map__56466__$1 = cljs.core.__destructure_map(map__56466);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq56465){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57016 = arguments.length;
var i__5723__auto___57017 = (0);
while(true){
if((i__5723__auto___57017 < len__5722__auto___57016)){
args__5728__auto__.push((arguments[i__5723__auto___57017]));

var G__57018 = (i__5723__auto___57017 + (1));
i__5723__auto___57017 = G__57018;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56468 = conformed_args__54883__auto__;
var map__56468__$1 = cljs.core.__destructure_map(map__56468);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq56467){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57019 = arguments.length;
var i__5723__auto___57020 = (0);
while(true){
if((i__5723__auto___57020 < len__5722__auto___57019)){
args__5728__auto__.push((arguments[i__5723__auto___57020]));

var G__57021 = (i__5723__auto___57020 + (1));
i__5723__auto___57020 = G__57021;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56470 = conformed_args__54883__auto__;
var map__56470__$1 = cljs.core.__destructure_map(map__56470);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq56469){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56469));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57022 = arguments.length;
var i__5723__auto___57023 = (0);
while(true){
if((i__5723__auto___57023 < len__5722__auto___57022)){
args__5728__auto__.push((arguments[i__5723__auto___57023]));

var G__57024 = (i__5723__auto___57023 + (1));
i__5723__auto___57023 = G__57024;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56472 = conformed_args__54883__auto__;
var map__56472__$1 = cljs.core.__destructure_map(map__56472);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq56471){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56471));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57025 = arguments.length;
var i__5723__auto___57026 = (0);
while(true){
if((i__5723__auto___57026 < len__5722__auto___57025)){
args__5728__auto__.push((arguments[i__5723__auto___57026]));

var G__57027 = (i__5723__auto___57026 + (1));
i__5723__auto___57026 = G__57027;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56474 = conformed_args__54883__auto__;
var map__56474__$1 = cljs.core.__destructure_map(map__56474);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq56473){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56473));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57028 = arguments.length;
var i__5723__auto___57029 = (0);
while(true){
if((i__5723__auto___57029 < len__5722__auto___57028)){
args__5728__auto__.push((arguments[i__5723__auto___57029]));

var G__57030 = (i__5723__auto___57029 + (1));
i__5723__auto___57029 = G__57030;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56476 = conformed_args__54883__auto__;
var map__56476__$1 = cljs.core.__destructure_map(map__56476);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq56475){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56475));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57031 = arguments.length;
var i__5723__auto___57032 = (0);
while(true){
if((i__5723__auto___57032 < len__5722__auto___57031)){
args__5728__auto__.push((arguments[i__5723__auto___57032]));

var G__57033 = (i__5723__auto___57032 + (1));
i__5723__auto___57032 = G__57033;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56478 = conformed_args__54883__auto__;
var map__56478__$1 = cljs.core.__destructure_map(map__56478);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq56477){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57034 = arguments.length;
var i__5723__auto___57035 = (0);
while(true){
if((i__5723__auto___57035 < len__5722__auto___57034)){
args__5728__auto__.push((arguments[i__5723__auto___57035]));

var G__57036 = (i__5723__auto___57035 + (1));
i__5723__auto___57035 = G__57036;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56480 = conformed_args__54883__auto__;
var map__56480__$1 = cljs.core.__destructure_map(map__56480);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq56479){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56479));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57037 = arguments.length;
var i__5723__auto___57038 = (0);
while(true){
if((i__5723__auto___57038 < len__5722__auto___57037)){
args__5728__auto__.push((arguments[i__5723__auto___57038]));

var G__57039 = (i__5723__auto___57038 + (1));
i__5723__auto___57038 = G__57039;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56482 = conformed_args__54883__auto__;
var map__56482__$1 = cljs.core.__destructure_map(map__56482);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq56481){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56481));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57040 = arguments.length;
var i__5723__auto___57041 = (0);
while(true){
if((i__5723__auto___57041 < len__5722__auto___57040)){
args__5728__auto__.push((arguments[i__5723__auto___57041]));

var G__57042 = (i__5723__auto___57041 + (1));
i__5723__auto___57041 = G__57042;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56484 = conformed_args__54883__auto__;
var map__56484__$1 = cljs.core.__destructure_map(map__56484);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq56483){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57043 = arguments.length;
var i__5723__auto___57044 = (0);
while(true){
if((i__5723__auto___57044 < len__5722__auto___57043)){
args__5728__auto__.push((arguments[i__5723__auto___57044]));

var G__57045 = (i__5723__auto___57044 + (1));
i__5723__auto___57044 = G__57045;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56486 = conformed_args__54883__auto__;
var map__56486__$1 = cljs.core.__destructure_map(map__56486);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq56485){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57046 = arguments.length;
var i__5723__auto___57047 = (0);
while(true){
if((i__5723__auto___57047 < len__5722__auto___57046)){
args__5728__auto__.push((arguments[i__5723__auto___57047]));

var G__57048 = (i__5723__auto___57047 + (1));
i__5723__auto___57047 = G__57048;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56488 = conformed_args__54883__auto__;
var map__56488__$1 = cljs.core.__destructure_map(map__56488);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq56487){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56487));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57049 = arguments.length;
var i__5723__auto___57050 = (0);
while(true){
if((i__5723__auto___57050 < len__5722__auto___57049)){
args__5728__auto__.push((arguments[i__5723__auto___57050]));

var G__57051 = (i__5723__auto___57050 + (1));
i__5723__auto___57050 = G__57051;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56490 = conformed_args__54883__auto__;
var map__56490__$1 = cljs.core.__destructure_map(map__56490);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq56489){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56489));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57052 = arguments.length;
var i__5723__auto___57053 = (0);
while(true){
if((i__5723__auto___57053 < len__5722__auto___57052)){
args__5728__auto__.push((arguments[i__5723__auto___57053]));

var G__57054 = (i__5723__auto___57053 + (1));
i__5723__auto___57053 = G__57054;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56492 = conformed_args__54883__auto__;
var map__56492__$1 = cljs.core.__destructure_map(map__56492);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq56491){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56491));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57055 = arguments.length;
var i__5723__auto___57056 = (0);
while(true){
if((i__5723__auto___57056 < len__5722__auto___57055)){
args__5728__auto__.push((arguments[i__5723__auto___57056]));

var G__57057 = (i__5723__auto___57056 + (1));
i__5723__auto___57056 = G__57057;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56494 = conformed_args__54883__auto__;
var map__56494__$1 = cljs.core.__destructure_map(map__56494);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq56493){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56493));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57058 = arguments.length;
var i__5723__auto___57059 = (0);
while(true){
if((i__5723__auto___57059 < len__5722__auto___57058)){
args__5728__auto__.push((arguments[i__5723__auto___57059]));

var G__57060 = (i__5723__auto___57059 + (1));
i__5723__auto___57059 = G__57060;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56496 = conformed_args__54883__auto__;
var map__56496__$1 = cljs.core.__destructure_map(map__56496);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq56495){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56495));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57061 = arguments.length;
var i__5723__auto___57062 = (0);
while(true){
if((i__5723__auto___57062 < len__5722__auto___57061)){
args__5728__auto__.push((arguments[i__5723__auto___57062]));

var G__57063 = (i__5723__auto___57062 + (1));
i__5723__auto___57062 = G__57063;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56498 = conformed_args__54883__auto__;
var map__56498__$1 = cljs.core.__destructure_map(map__56498);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq56497){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56497));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57064 = arguments.length;
var i__5723__auto___57065 = (0);
while(true){
if((i__5723__auto___57065 < len__5722__auto___57064)){
args__5728__auto__.push((arguments[i__5723__auto___57065]));

var G__57066 = (i__5723__auto___57065 + (1));
i__5723__auto___57065 = G__57066;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56500 = conformed_args__54883__auto__;
var map__56500__$1 = cljs.core.__destructure_map(map__56500);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq56499){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56499));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57067 = arguments.length;
var i__5723__auto___57068 = (0);
while(true){
if((i__5723__auto___57068 < len__5722__auto___57067)){
args__5728__auto__.push((arguments[i__5723__auto___57068]));

var G__57069 = (i__5723__auto___57068 + (1));
i__5723__auto___57068 = G__57069;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56502 = conformed_args__54883__auto__;
var map__56502__$1 = cljs.core.__destructure_map(map__56502);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq56501){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57070 = arguments.length;
var i__5723__auto___57071 = (0);
while(true){
if((i__5723__auto___57071 < len__5722__auto___57070)){
args__5728__auto__.push((arguments[i__5723__auto___57071]));

var G__57072 = (i__5723__auto___57071 + (1));
i__5723__auto___57071 = G__57072;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56504 = conformed_args__54883__auto__;
var map__56504__$1 = cljs.core.__destructure_map(map__56504);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq56503){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56503));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57073 = arguments.length;
var i__5723__auto___57074 = (0);
while(true){
if((i__5723__auto___57074 < len__5722__auto___57073)){
args__5728__auto__.push((arguments[i__5723__auto___57074]));

var G__57075 = (i__5723__auto___57074 + (1));
i__5723__auto___57074 = G__57075;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56506 = conformed_args__54883__auto__;
var map__56506__$1 = cljs.core.__destructure_map(map__56506);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq56505){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56505));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57076 = arguments.length;
var i__5723__auto___57077 = (0);
while(true){
if((i__5723__auto___57077 < len__5722__auto___57076)){
args__5728__auto__.push((arguments[i__5723__auto___57077]));

var G__57078 = (i__5723__auto___57077 + (1));
i__5723__auto___57077 = G__57078;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56508 = conformed_args__54883__auto__;
var map__56508__$1 = cljs.core.__destructure_map(map__56508);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq56507){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56507));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57079 = arguments.length;
var i__5723__auto___57080 = (0);
while(true){
if((i__5723__auto___57080 < len__5722__auto___57079)){
args__5728__auto__.push((arguments[i__5723__auto___57080]));

var G__57081 = (i__5723__auto___57080 + (1));
i__5723__auto___57080 = G__57081;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56510 = conformed_args__54883__auto__;
var map__56510__$1 = cljs.core.__destructure_map(map__56510);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq56509){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56509));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57082 = arguments.length;
var i__5723__auto___57083 = (0);
while(true){
if((i__5723__auto___57083 < len__5722__auto___57082)){
args__5728__auto__.push((arguments[i__5723__auto___57083]));

var G__57084 = (i__5723__auto___57083 + (1));
i__5723__auto___57083 = G__57084;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56512 = conformed_args__54883__auto__;
var map__56512__$1 = cljs.core.__destructure_map(map__56512);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq56511){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56511));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57085 = arguments.length;
var i__5723__auto___57086 = (0);
while(true){
if((i__5723__auto___57086 < len__5722__auto___57085)){
args__5728__auto__.push((arguments[i__5723__auto___57086]));

var G__57087 = (i__5723__auto___57086 + (1));
i__5723__auto___57086 = G__57087;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56514 = conformed_args__54883__auto__;
var map__56514__$1 = cljs.core.__destructure_map(map__56514);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq56513){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56513));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57088 = arguments.length;
var i__5723__auto___57089 = (0);
while(true){
if((i__5723__auto___57089 < len__5722__auto___57088)){
args__5728__auto__.push((arguments[i__5723__auto___57089]));

var G__57090 = (i__5723__auto___57089 + (1));
i__5723__auto___57089 = G__57090;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56516 = conformed_args__54883__auto__;
var map__56516__$1 = cljs.core.__destructure_map(map__56516);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq56515){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57091 = arguments.length;
var i__5723__auto___57092 = (0);
while(true){
if((i__5723__auto___57092 < len__5722__auto___57091)){
args__5728__auto__.push((arguments[i__5723__auto___57092]));

var G__57093 = (i__5723__auto___57092 + (1));
i__5723__auto___57092 = G__57093;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56518 = conformed_args__54883__auto__;
var map__56518__$1 = cljs.core.__destructure_map(map__56518);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq56517){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56517));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57094 = arguments.length;
var i__5723__auto___57095 = (0);
while(true){
if((i__5723__auto___57095 < len__5722__auto___57094)){
args__5728__auto__.push((arguments[i__5723__auto___57095]));

var G__57096 = (i__5723__auto___57095 + (1));
i__5723__auto___57095 = G__57096;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56520 = conformed_args__54883__auto__;
var map__56520__$1 = cljs.core.__destructure_map(map__56520);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq56519){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56519));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57097 = arguments.length;
var i__5723__auto___57098 = (0);
while(true){
if((i__5723__auto___57098 < len__5722__auto___57097)){
args__5728__auto__.push((arguments[i__5723__auto___57098]));

var G__57099 = (i__5723__auto___57098 + (1));
i__5723__auto___57098 = G__57099;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56522 = conformed_args__54883__auto__;
var map__56522__$1 = cljs.core.__destructure_map(map__56522);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq56521){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56521));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57100 = arguments.length;
var i__5723__auto___57101 = (0);
while(true){
if((i__5723__auto___57101 < len__5722__auto___57100)){
args__5728__auto__.push((arguments[i__5723__auto___57101]));

var G__57102 = (i__5723__auto___57101 + (1));
i__5723__auto___57101 = G__57102;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56524 = conformed_args__54883__auto__;
var map__56524__$1 = cljs.core.__destructure_map(map__56524);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq56523){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56523));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57103 = arguments.length;
var i__5723__auto___57104 = (0);
while(true){
if((i__5723__auto___57104 < len__5722__auto___57103)){
args__5728__auto__.push((arguments[i__5723__auto___57104]));

var G__57105 = (i__5723__auto___57104 + (1));
i__5723__auto___57104 = G__57105;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56526 = conformed_args__54883__auto__;
var map__56526__$1 = cljs.core.__destructure_map(map__56526);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq56525){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56525));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57106 = arguments.length;
var i__5723__auto___57107 = (0);
while(true){
if((i__5723__auto___57107 < len__5722__auto___57106)){
args__5728__auto__.push((arguments[i__5723__auto___57107]));

var G__57108 = (i__5723__auto___57107 + (1));
i__5723__auto___57107 = G__57108;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56528 = conformed_args__54883__auto__;
var map__56528__$1 = cljs.core.__destructure_map(map__56528);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq56527){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57109 = arguments.length;
var i__5723__auto___57110 = (0);
while(true){
if((i__5723__auto___57110 < len__5722__auto___57109)){
args__5728__auto__.push((arguments[i__5723__auto___57110]));

var G__57111 = (i__5723__auto___57110 + (1));
i__5723__auto___57110 = G__57111;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56530 = conformed_args__54883__auto__;
var map__56530__$1 = cljs.core.__destructure_map(map__56530);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq56529){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56529));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57112 = arguments.length;
var i__5723__auto___57113 = (0);
while(true){
if((i__5723__auto___57113 < len__5722__auto___57112)){
args__5728__auto__.push((arguments[i__5723__auto___57113]));

var G__57114 = (i__5723__auto___57113 + (1));
i__5723__auto___57113 = G__57114;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56532 = conformed_args__54883__auto__;
var map__56532__$1 = cljs.core.__destructure_map(map__56532);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq56531){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57115 = arguments.length;
var i__5723__auto___57116 = (0);
while(true){
if((i__5723__auto___57116 < len__5722__auto___57115)){
args__5728__auto__.push((arguments[i__5723__auto___57116]));

var G__57117 = (i__5723__auto___57116 + (1));
i__5723__auto___57116 = G__57117;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56534 = conformed_args__54883__auto__;
var map__56534__$1 = cljs.core.__destructure_map(map__56534);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq56533){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56533));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57118 = arguments.length;
var i__5723__auto___57119 = (0);
while(true){
if((i__5723__auto___57119 < len__5722__auto___57118)){
args__5728__auto__.push((arguments[i__5723__auto___57119]));

var G__57120 = (i__5723__auto___57119 + (1));
i__5723__auto___57119 = G__57120;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56536 = conformed_args__54883__auto__;
var map__56536__$1 = cljs.core.__destructure_map(map__56536);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq56535){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56535));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57121 = arguments.length;
var i__5723__auto___57122 = (0);
while(true){
if((i__5723__auto___57122 < len__5722__auto___57121)){
args__5728__auto__.push((arguments[i__5723__auto___57122]));

var G__57123 = (i__5723__auto___57122 + (1));
i__5723__auto___57122 = G__57123;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56538 = conformed_args__54883__auto__;
var map__56538__$1 = cljs.core.__destructure_map(map__56538);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq56537){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56537));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57124 = arguments.length;
var i__5723__auto___57125 = (0);
while(true){
if((i__5723__auto___57125 < len__5722__auto___57124)){
args__5728__auto__.push((arguments[i__5723__auto___57125]));

var G__57126 = (i__5723__auto___57125 + (1));
i__5723__auto___57125 = G__57126;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56540 = conformed_args__54883__auto__;
var map__56540__$1 = cljs.core.__destructure_map(map__56540);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq56539){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57127 = arguments.length;
var i__5723__auto___57128 = (0);
while(true){
if((i__5723__auto___57128 < len__5722__auto___57127)){
args__5728__auto__.push((arguments[i__5723__auto___57128]));

var G__57129 = (i__5723__auto___57128 + (1));
i__5723__auto___57128 = G__57129;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56542 = conformed_args__54883__auto__;
var map__56542__$1 = cljs.core.__destructure_map(map__56542);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq56541){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56541));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57130 = arguments.length;
var i__5723__auto___57131 = (0);
while(true){
if((i__5723__auto___57131 < len__5722__auto___57130)){
args__5728__auto__.push((arguments[i__5723__auto___57131]));

var G__57132 = (i__5723__auto___57131 + (1));
i__5723__auto___57131 = G__57132;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56544 = conformed_args__54883__auto__;
var map__56544__$1 = cljs.core.__destructure_map(map__56544);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq56543){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56543));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57133 = arguments.length;
var i__5723__auto___57134 = (0);
while(true){
if((i__5723__auto___57134 < len__5722__auto___57133)){
args__5728__auto__.push((arguments[i__5723__auto___57134]));

var G__57135 = (i__5723__auto___57134 + (1));
i__5723__auto___57134 = G__57135;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56546 = conformed_args__54883__auto__;
var map__56546__$1 = cljs.core.__destructure_map(map__56546);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq56545){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56545));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57136 = arguments.length;
var i__5723__auto___57137 = (0);
while(true){
if((i__5723__auto___57137 < len__5722__auto___57136)){
args__5728__auto__.push((arguments[i__5723__auto___57137]));

var G__57138 = (i__5723__auto___57137 + (1));
i__5723__auto___57137 = G__57138;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56548 = conformed_args__54883__auto__;
var map__56548__$1 = cljs.core.__destructure_map(map__56548);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56548__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq56547){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57139 = arguments.length;
var i__5723__auto___57140 = (0);
while(true){
if((i__5723__auto___57140 < len__5722__auto___57139)){
args__5728__auto__.push((arguments[i__5723__auto___57140]));

var G__57141 = (i__5723__auto___57140 + (1));
i__5723__auto___57140 = G__57141;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56550 = conformed_args__54883__auto__;
var map__56550__$1 = cljs.core.__destructure_map(map__56550);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq56549){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56549));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57142 = arguments.length;
var i__5723__auto___57143 = (0);
while(true){
if((i__5723__auto___57143 < len__5722__auto___57142)){
args__5728__auto__.push((arguments[i__5723__auto___57143]));

var G__57144 = (i__5723__auto___57143 + (1));
i__5723__auto___57143 = G__57144;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56552 = conformed_args__54883__auto__;
var map__56552__$1 = cljs.core.__destructure_map(map__56552);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq56551){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56551));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57145 = arguments.length;
var i__5723__auto___57146 = (0);
while(true){
if((i__5723__auto___57146 < len__5722__auto___57145)){
args__5728__auto__.push((arguments[i__5723__auto___57146]));

var G__57147 = (i__5723__auto___57146 + (1));
i__5723__auto___57146 = G__57147;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56554 = conformed_args__54883__auto__;
var map__56554__$1 = cljs.core.__destructure_map(map__56554);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq56553){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56553));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57148 = arguments.length;
var i__5723__auto___57149 = (0);
while(true){
if((i__5723__auto___57149 < len__5722__auto___57148)){
args__5728__auto__.push((arguments[i__5723__auto___57149]));

var G__57150 = (i__5723__auto___57149 + (1));
i__5723__auto___57149 = G__57150;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56556 = conformed_args__54883__auto__;
var map__56556__$1 = cljs.core.__destructure_map(map__56556);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq56555){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56555));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57151 = arguments.length;
var i__5723__auto___57152 = (0);
while(true){
if((i__5723__auto___57152 < len__5722__auto___57151)){
args__5728__auto__.push((arguments[i__5723__auto___57152]));

var G__57153 = (i__5723__auto___57152 + (1));
i__5723__auto___57152 = G__57153;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56558 = conformed_args__54883__auto__;
var map__56558__$1 = cljs.core.__destructure_map(map__56558);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq56557){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57154 = arguments.length;
var i__5723__auto___57155 = (0);
while(true){
if((i__5723__auto___57155 < len__5722__auto___57154)){
args__5728__auto__.push((arguments[i__5723__auto___57155]));

var G__57156 = (i__5723__auto___57155 + (1));
i__5723__auto___57155 = G__57156;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56560 = conformed_args__54883__auto__;
var map__56560__$1 = cljs.core.__destructure_map(map__56560);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq56559){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56559));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57157 = arguments.length;
var i__5723__auto___57158 = (0);
while(true){
if((i__5723__auto___57158 < len__5722__auto___57157)){
args__5728__auto__.push((arguments[i__5723__auto___57158]));

var G__57159 = (i__5723__auto___57158 + (1));
i__5723__auto___57158 = G__57159;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56562 = conformed_args__54883__auto__;
var map__56562__$1 = cljs.core.__destructure_map(map__56562);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq56561){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56561));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57160 = arguments.length;
var i__5723__auto___57161 = (0);
while(true){
if((i__5723__auto___57161 < len__5722__auto___57160)){
args__5728__auto__.push((arguments[i__5723__auto___57161]));

var G__57162 = (i__5723__auto___57161 + (1));
i__5723__auto___57161 = G__57162;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56564 = conformed_args__54883__auto__;
var map__56564__$1 = cljs.core.__destructure_map(map__56564);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq56563){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56563));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57163 = arguments.length;
var i__5723__auto___57164 = (0);
while(true){
if((i__5723__auto___57164 < len__5722__auto___57163)){
args__5728__auto__.push((arguments[i__5723__auto___57164]));

var G__57165 = (i__5723__auto___57164 + (1));
i__5723__auto___57164 = G__57165;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56566 = conformed_args__54883__auto__;
var map__56566__$1 = cljs.core.__destructure_map(map__56566);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq56565){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57166 = arguments.length;
var i__5723__auto___57167 = (0);
while(true){
if((i__5723__auto___57167 < len__5722__auto___57166)){
args__5728__auto__.push((arguments[i__5723__auto___57167]));

var G__57168 = (i__5723__auto___57167 + (1));
i__5723__auto___57167 = G__57168;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56568 = conformed_args__54883__auto__;
var map__56568__$1 = cljs.core.__destructure_map(map__56568);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq56567){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56567));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57169 = arguments.length;
var i__5723__auto___57170 = (0);
while(true){
if((i__5723__auto___57170 < len__5722__auto___57169)){
args__5728__auto__.push((arguments[i__5723__auto___57170]));

var G__57171 = (i__5723__auto___57170 + (1));
i__5723__auto___57170 = G__57171;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56570 = conformed_args__54883__auto__;
var map__56570__$1 = cljs.core.__destructure_map(map__56570);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq56569){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57172 = arguments.length;
var i__5723__auto___57173 = (0);
while(true){
if((i__5723__auto___57173 < len__5722__auto___57172)){
args__5728__auto__.push((arguments[i__5723__auto___57173]));

var G__57174 = (i__5723__auto___57173 + (1));
i__5723__auto___57173 = G__57174;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56572 = conformed_args__54883__auto__;
var map__56572__$1 = cljs.core.__destructure_map(map__56572);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq56571){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56571));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57175 = arguments.length;
var i__5723__auto___57176 = (0);
while(true){
if((i__5723__auto___57176 < len__5722__auto___57175)){
args__5728__auto__.push((arguments[i__5723__auto___57176]));

var G__57177 = (i__5723__auto___57176 + (1));
i__5723__auto___57176 = G__57177;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56574 = conformed_args__54883__auto__;
var map__56574__$1 = cljs.core.__destructure_map(map__56574);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56574__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq56573){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56573));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57178 = arguments.length;
var i__5723__auto___57179 = (0);
while(true){
if((i__5723__auto___57179 < len__5722__auto___57178)){
args__5728__auto__.push((arguments[i__5723__auto___57179]));

var G__57180 = (i__5723__auto___57179 + (1));
i__5723__auto___57179 = G__57180;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56576 = conformed_args__54883__auto__;
var map__56576__$1 = cljs.core.__destructure_map(map__56576);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq56575){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56575));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57181 = arguments.length;
var i__5723__auto___57182 = (0);
while(true){
if((i__5723__auto___57182 < len__5722__auto___57181)){
args__5728__auto__.push((arguments[i__5723__auto___57182]));

var G__57183 = (i__5723__auto___57182 + (1));
i__5723__auto___57182 = G__57183;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56578 = conformed_args__54883__auto__;
var map__56578__$1 = cljs.core.__destructure_map(map__56578);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq56577){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56577));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57184 = arguments.length;
var i__5723__auto___57185 = (0);
while(true){
if((i__5723__auto___57185 < len__5722__auto___57184)){
args__5728__auto__.push((arguments[i__5723__auto___57185]));

var G__57186 = (i__5723__auto___57185 + (1));
i__5723__auto___57185 = G__57186;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56580 = conformed_args__54883__auto__;
var map__56580__$1 = cljs.core.__destructure_map(map__56580);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq56579){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57187 = arguments.length;
var i__5723__auto___57188 = (0);
while(true){
if((i__5723__auto___57188 < len__5722__auto___57187)){
args__5728__auto__.push((arguments[i__5723__auto___57188]));

var G__57189 = (i__5723__auto___57188 + (1));
i__5723__auto___57188 = G__57189;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56582 = conformed_args__54883__auto__;
var map__56582__$1 = cljs.core.__destructure_map(map__56582);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq56581){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56581));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57190 = arguments.length;
var i__5723__auto___57191 = (0);
while(true){
if((i__5723__auto___57191 < len__5722__auto___57190)){
args__5728__auto__.push((arguments[i__5723__auto___57191]));

var G__57192 = (i__5723__auto___57191 + (1));
i__5723__auto___57191 = G__57192;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56584 = conformed_args__54883__auto__;
var map__56584__$1 = cljs.core.__destructure_map(map__56584);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq56583){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56583));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57193 = arguments.length;
var i__5723__auto___57194 = (0);
while(true){
if((i__5723__auto___57194 < len__5722__auto___57193)){
args__5728__auto__.push((arguments[i__5723__auto___57194]));

var G__57195 = (i__5723__auto___57194 + (1));
i__5723__auto___57194 = G__57195;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56586 = conformed_args__54883__auto__;
var map__56586__$1 = cljs.core.__destructure_map(map__56586);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq56585){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5728__auto__ = [];
var len__5722__auto___57196 = arguments.length;
var i__5723__auto___57197 = (0);
while(true){
if((i__5723__auto___57197 < len__5722__auto___57196)){
args__5728__auto__.push((arguments[i__5723__auto___57197]));

var G__57198 = (i__5723__auto___57197 + (1));
i__5723__auto___57197 = G__57198;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__54883__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__56588 = conformed_args__54883__auto__;
var map__56588__$1 = cljs.core.__destructure_map(map__56588);
var children__54885__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__54884__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__54886__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__54885__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__54885__auto__);
var attrs_value__54887__auto__ = (function (){var or__4998__auto__ = cljs.core.second(attrs__54884__auto__);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__54887__auto__], null),children__54885__auto____$1),css__54886__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq56587){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56587));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
