goog.provide('cljs.reader');
goog.scope(function(){
  cljs.reader.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__33722 = b.append("0");
b = G__33722;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__33684 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684,(10),null);
var v = vec__33684;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4998__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,cljs.reader.days_in_month(months__$1,cljs.reader.leap_year_QMARK_(years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5814__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5814__auto__)){
var vec__33691 = temp__5814__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__33694_33726 = cljs.core.seq(form);
var chunk__33695_33727 = null;
var count__33696_33728 = (0);
var i__33697_33729 = (0);
while(true){
if((i__33697_33729 < count__33696_33728)){
var x_33730 = chunk__33695_33727.cljs$core$IIndexed$_nth$arity$2(null,i__33697_33729);
arr.push(x_33730);


var G__33731 = seq__33694_33726;
var G__33732 = chunk__33695_33727;
var G__33733 = count__33696_33728;
var G__33734 = (i__33697_33729 + (1));
seq__33694_33726 = G__33731;
chunk__33695_33727 = G__33732;
count__33696_33728 = G__33733;
i__33697_33729 = G__33734;
continue;
} else {
var temp__5816__auto___33735 = cljs.core.seq(seq__33694_33726);
if(temp__5816__auto___33735){
var seq__33694_33736__$1 = temp__5816__auto___33735;
if(cljs.core.chunked_seq_QMARK_(seq__33694_33736__$1)){
var c__5521__auto___33737 = cljs.core.chunk_first(seq__33694_33736__$1);
var G__33738 = cljs.core.chunk_rest(seq__33694_33736__$1);
var G__33739 = c__5521__auto___33737;
var G__33740 = cljs.core.count(c__5521__auto___33737);
var G__33741 = (0);
seq__33694_33726 = G__33738;
chunk__33695_33727 = G__33739;
count__33696_33728 = G__33740;
i__33697_33729 = G__33741;
continue;
} else {
var x_33742 = cljs.core.first(seq__33694_33736__$1);
arr.push(x_33742);


var G__33743 = cljs.core.next(seq__33694_33736__$1);
var G__33744 = null;
var G__33745 = (0);
var G__33746 = (0);
seq__33694_33726 = G__33743;
chunk__33695_33727 = G__33744;
count__33696_33728 = G__33745;
i__33697_33729 = G__33746;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__33700_33747 = cljs.core.seq(form);
var chunk__33701_33748 = null;
var count__33702_33749 = (0);
var i__33703_33750 = (0);
while(true){
if((i__33703_33750 < count__33702_33749)){
var vec__33710_33751 = chunk__33701_33748.cljs$core$IIndexed$_nth$arity$2(null,i__33703_33750);
var k_33752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710_33751,(0),null);
var v_33753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710_33751,(1),null);
cljs.reader.goog$module$goog$object.set(obj,cljs.core.name(k_33752),v_33753);


var G__33754 = seq__33700_33747;
var G__33755 = chunk__33701_33748;
var G__33756 = count__33702_33749;
var G__33757 = (i__33703_33750 + (1));
seq__33700_33747 = G__33754;
chunk__33701_33748 = G__33755;
count__33702_33749 = G__33756;
i__33703_33750 = G__33757;
continue;
} else {
var temp__5816__auto___33758 = cljs.core.seq(seq__33700_33747);
if(temp__5816__auto___33758){
var seq__33700_33759__$1 = temp__5816__auto___33758;
if(cljs.core.chunked_seq_QMARK_(seq__33700_33759__$1)){
var c__5521__auto___33760 = cljs.core.chunk_first(seq__33700_33759__$1);
var G__33761 = cljs.core.chunk_rest(seq__33700_33759__$1);
var G__33762 = c__5521__auto___33760;
var G__33763 = cljs.core.count(c__5521__auto___33760);
var G__33764 = (0);
seq__33700_33747 = G__33761;
chunk__33701_33748 = G__33762;
count__33702_33749 = G__33763;
i__33703_33750 = G__33764;
continue;
} else {
var vec__33713_33765 = cljs.core.first(seq__33700_33759__$1);
var k_33766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713_33765,(0),null);
var v_33767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713_33765,(1),null);
cljs.reader.goog$module$goog$object.set(obj,cljs.core.name(k_33766),v_33767);


var G__33768 = cljs.core.next(seq__33700_33759__$1);
var G__33769 = null;
var G__33770 = (0);
var G__33771 = (0);
seq__33700_33747 = G__33768;
chunk__33701_33748 = G__33769;
count__33702_33749 = G__33770;
i__33703_33750 = G__33771;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__33717 = arguments.length;
switch (G__33717) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__33718,reader){
var map__33719 = p__33718;
var map__33719__$1 = cljs.core.__destructure_map(map__33719);
var opts = map__33719__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__33721 = arguments.length;
switch (G__33721) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});

//# sourceMappingURL=cljs.reader.js.map
