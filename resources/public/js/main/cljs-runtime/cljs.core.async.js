goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41124 = (function (f,blockable,meta41125){
this.f = f;
this.blockable = blockable;
this.meta41125 = meta41125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41126,meta41125__$1){
var self__ = this;
var _41126__$1 = this;
return (new cljs.core.async.t_cljs$core$async41124(self__.f,self__.blockable,meta41125__$1));
}));

(cljs.core.async.t_cljs$core$async41124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41126){
var self__ = this;
var _41126__$1 = this;
return self__.meta41125;
}));

(cljs.core.async.t_cljs$core$async41124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async41124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async41124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41125","meta41125",-442169031,null)], null);
}));

(cljs.core.async.t_cljs$core$async41124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41124");

(cljs.core.async.t_cljs$core$async41124.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async41124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41124.
 */
cljs.core.async.__GT_t_cljs$core$async41124 = (function cljs$core$async$__GT_t_cljs$core$async41124(f,blockable,meta41125){
return (new cljs.core.async.t_cljs$core$async41124(f,blockable,meta41125));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41123 = arguments.length;
switch (G__41123) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async41124(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__41139 = arguments.length;
switch (G__41139) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__41142 = arguments.length;
switch (G__41142) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__41147 = arguments.length;
switch (G__41147) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42882 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42882) : fn1.call(null,val_42882));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42882) : fn1.call(null,val_42882));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__41156 = arguments.length;
switch (G__41156) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5814__auto__)){
var ret = temp__5814__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5814__auto__)){
var retb = temp__5814__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5589__auto___42884 = n;
var x_42885 = (0);
while(true){
if((x_42885 < n__5589__auto___42884)){
(a[x_42885] = x_42885);

var G__42886 = (x_42885 + (1));
x_42885 = G__42886;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41161 = (function (flag,meta41162){
this.flag = flag;
this.meta41162 = meta41162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41163,meta41162__$1){
var self__ = this;
var _41163__$1 = this;
return (new cljs.core.async.t_cljs$core$async41161(self__.flag,meta41162__$1));
}));

(cljs.core.async.t_cljs$core$async41161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41163){
var self__ = this;
var _41163__$1 = this;
return self__.meta41162;
}));

(cljs.core.async.t_cljs$core$async41161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async41161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41162","meta41162",-1311271331,null)], null);
}));

(cljs.core.async.t_cljs$core$async41161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41161");

(cljs.core.async.t_cljs$core$async41161.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async41161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41161.
 */
cljs.core.async.__GT_t_cljs$core$async41161 = (function cljs$core$async$__GT_t_cljs$core$async41161(flag,meta41162){
return (new cljs.core.async.t_cljs$core$async41161(flag,meta41162));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async41161(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41168 = (function (flag,cb,meta41169){
this.flag = flag;
this.cb = cb;
this.meta41169 = meta41169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41170,meta41169__$1){
var self__ = this;
var _41170__$1 = this;
return (new cljs.core.async.t_cljs$core$async41168(self__.flag,self__.cb,meta41169__$1));
}));

(cljs.core.async.t_cljs$core$async41168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41170){
var self__ = this;
var _41170__$1 = this;
return self__.meta41169;
}));

(cljs.core.async.t_cljs$core$async41168.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async41168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41169","meta41169",2088363116,null)], null);
}));

(cljs.core.async.t_cljs$core$async41168.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41168");

(cljs.core.async.t_cljs$core$async41168.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async41168");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41168.
 */
cljs.core.async.__GT_t_cljs$core$async41168 = (function cljs$core$async$__GT_t_cljs$core$async41168(flag,cb,meta41169){
return (new cljs.core.async.t_cljs$core$async41168(flag,cb,meta41169));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async41168(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41172_SHARP_){
var G__41174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41172_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41174) : fret.call(null,G__41174));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41173_SHARP_){
var G__41175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41173_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41175) : fret.call(null,G__41175));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4998__auto__ = wport;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42887 = (i + (1));
i = G__42887;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4998__auto__ = ret;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5816__auto__ = (function (){var and__4996__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4996__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4996__auto__;
}
})();
if(cljs.core.truth_(temp__5816__auto__)){
var got = temp__5816__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___42888 = arguments.length;
var i__5723__auto___42889 = (0);
while(true){
if((i__5723__auto___42889 < len__5722__auto___42888)){
args__5728__auto__.push((arguments[i__5723__auto___42889]));

var G__42890 = (i__5723__auto___42889 + (1));
i__5723__auto___42889 = G__42890;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41192){
var map__41193 = p__41192;
var map__41193__$1 = cljs.core.__destructure_map(map__41193);
var opts = map__41193__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41186){
var G__41187 = cljs.core.first(seq41186);
var seq41186__$1 = cljs.core.next(seq41186);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41187,seq41186__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41209 = arguments.length;
switch (G__41209) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41048__auto___42892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41271){
var state_val_41272 = (state_41271[(1)]);
if((state_val_41272 === (7))){
var inst_41267 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
var statearr_41276_42893 = state_41271__$1;
(statearr_41276_42893[(2)] = inst_41267);

(statearr_41276_42893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (1))){
var state_41271__$1 = state_41271;
var statearr_41277_42895 = state_41271__$1;
(statearr_41277_42895[(2)] = null);

(statearr_41277_42895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (4))){
var inst_41231 = (state_41271[(7)]);
var inst_41231__$1 = (state_41271[(2)]);
var inst_41240 = (inst_41231__$1 == null);
var state_41271__$1 = (function (){var statearr_41278 = state_41271;
(statearr_41278[(7)] = inst_41231__$1);

return statearr_41278;
})();
if(cljs.core.truth_(inst_41240)){
var statearr_41279_42896 = state_41271__$1;
(statearr_41279_42896[(1)] = (5));

} else {
var statearr_41280_42897 = state_41271__$1;
(statearr_41280_42897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (13))){
var state_41271__$1 = state_41271;
var statearr_41282_42898 = state_41271__$1;
(statearr_41282_42898[(2)] = null);

(statearr_41282_42898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (6))){
var inst_41231 = (state_41271[(7)]);
var state_41271__$1 = state_41271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41271__$1,(11),to,inst_41231);
} else {
if((state_val_41272 === (3))){
var inst_41269 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41271__$1,inst_41269);
} else {
if((state_val_41272 === (12))){
var state_41271__$1 = state_41271;
var statearr_41284_42899 = state_41271__$1;
(statearr_41284_42899[(2)] = null);

(statearr_41284_42899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (2))){
var state_41271__$1 = state_41271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41271__$1,(4),from);
} else {
if((state_val_41272 === (11))){
var inst_41260 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
if(cljs.core.truth_(inst_41260)){
var statearr_41288_42901 = state_41271__$1;
(statearr_41288_42901[(1)] = (12));

} else {
var statearr_41289_42902 = state_41271__$1;
(statearr_41289_42902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (9))){
var state_41271__$1 = state_41271;
var statearr_41291_42903 = state_41271__$1;
(statearr_41291_42903[(2)] = null);

(statearr_41291_42903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (5))){
var state_41271__$1 = state_41271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41294_42904 = state_41271__$1;
(statearr_41294_42904[(1)] = (8));

} else {
var statearr_41295_42905 = state_41271__$1;
(statearr_41295_42905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (14))){
var inst_41265 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
var statearr_41296_42906 = state_41271__$1;
(statearr_41296_42906[(2)] = inst_41265);

(statearr_41296_42906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (10))){
var inst_41257 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
var statearr_41297_42908 = state_41271__$1;
(statearr_41297_42908[(2)] = inst_41257);

(statearr_41297_42908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (8))){
var inst_41254 = cljs.core.async.close_BANG_(to);
var state_41271__$1 = state_41271;
var statearr_41298_42909 = state_41271__$1;
(statearr_41298_42909[(2)] = inst_41254);

(statearr_41298_42909[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_41300 = [null,null,null,null,null,null,null,null];
(statearr_41300[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_41300[(1)] = (1));

return statearr_41300;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_41271){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41271);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41301){var ex__40997__auto__ = e41301;
var statearr_41302_42910 = state_41271;
(statearr_41302_42910[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41271[(4)]))){
var statearr_41303_42911 = state_41271;
(statearr_41303_42911[(1)] = cljs.core.first((state_41271[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42912 = state_41271;
state_41271 = G__42912;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_41271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_41271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41304 = f__41049__auto__();
(statearr_41304[(6)] = c__41048__auto___42892);

return statearr_41304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__41305){
var vec__41306 = p__41305;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41306,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41306,(1),null);
var job = vec__41306;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41048__auto___42913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41313){
var state_val_41314 = (state_41313[(1)]);
if((state_val_41314 === (1))){
var state_41313__$1 = state_41313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41313__$1,(2),res,v);
} else {
if((state_val_41314 === (2))){
var inst_41310 = (state_41313[(2)]);
var inst_41311 = cljs.core.async.close_BANG_(res);
var state_41313__$1 = (function (){var statearr_41315 = state_41313;
(statearr_41315[(7)] = inst_41310);

return statearr_41315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41313__$1,inst_41311);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0 = (function (){
var statearr_41316 = [null,null,null,null,null,null,null,null];
(statearr_41316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__);

(statearr_41316[(1)] = (1));

return statearr_41316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1 = (function (state_41313){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41313);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41317){var ex__40997__auto__ = e41317;
var statearr_41318_42914 = state_41313;
(statearr_41318_42914[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41313[(4)]))){
var statearr_41319_42916 = state_41313;
(statearr_41319_42916[(1)] = cljs.core.first((state_41313[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42917 = state_41313;
state_41313 = G__42917;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = function(state_41313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1.call(this,state_41313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41320 = f__41049__auto__();
(statearr_41320[(6)] = c__41048__auto___42913);

return statearr_41320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__41321){
var vec__41322 = p__41321;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41322,(1),null);
var job = vec__41322;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5589__auto___42918 = n;
var __42919 = (0);
while(true){
if((__42919 < n__5589__auto___42918)){
var G__41325_42920 = type;
var G__41325_42921__$1 = (((G__41325_42920 instanceof cljs.core.Keyword))?G__41325_42920.fqn:null);
switch (G__41325_42921__$1) {
case "compute":
var c__41048__auto___42923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42919,c__41048__auto___42923,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async){
return (function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = ((function (__42919,c__41048__auto___42923,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async){
return (function (state_41346){
var state_val_41347 = (state_41346[(1)]);
if((state_val_41347 === (1))){
var state_41346__$1 = state_41346;
var statearr_41348_42924 = state_41346__$1;
(statearr_41348_42924[(2)] = null);

(statearr_41348_42924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (2))){
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41346__$1,(4),jobs);
} else {
if((state_val_41347 === (3))){
var inst_41344 = (state_41346[(2)]);
var state_41346__$1 = state_41346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41346__$1,inst_41344);
} else {
if((state_val_41347 === (4))){
var inst_41328 = (state_41346[(2)]);
var inst_41337 = process__$1(inst_41328);
var state_41346__$1 = state_41346;
if(cljs.core.truth_(inst_41337)){
var statearr_41349_42925 = state_41346__$1;
(statearr_41349_42925[(1)] = (5));

} else {
var statearr_41350_42926 = state_41346__$1;
(statearr_41350_42926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (5))){
var state_41346__$1 = state_41346;
var statearr_41351_42927 = state_41346__$1;
(statearr_41351_42927[(2)] = null);

(statearr_41351_42927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (6))){
var state_41346__$1 = state_41346;
var statearr_41352_42928 = state_41346__$1;
(statearr_41352_42928[(2)] = null);

(statearr_41352_42928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41347 === (7))){
var inst_41342 = (state_41346[(2)]);
var state_41346__$1 = state_41346;
var statearr_41353_42929 = state_41346__$1;
(statearr_41353_42929[(2)] = inst_41342);

(statearr_41353_42929[(1)] = (3));


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
});})(__42919,c__41048__auto___42923,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async))
;
return ((function (__42919,switch__40993__auto__,c__41048__auto___42923,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0 = (function (){
var statearr_41354 = [null,null,null,null,null,null,null];
(statearr_41354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__);

(statearr_41354[(1)] = (1));

return statearr_41354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1 = (function (state_41346){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41346);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41355){var ex__40997__auto__ = e41355;
var statearr_41356_42930 = state_41346;
(statearr_41356_42930[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41346[(4)]))){
var statearr_41357_42931 = state_41346;
(statearr_41357_42931[(1)] = cljs.core.first((state_41346[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42932 = state_41346;
state_41346 = G__42932;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = function(state_41346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1.call(this,state_41346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__;
})()
;})(__42919,switch__40993__auto__,c__41048__auto___42923,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async))
})();
var state__41050__auto__ = (function (){var statearr_41358 = f__41049__auto__();
(statearr_41358[(6)] = c__41048__auto___42923);

return statearr_41358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
});})(__42919,c__41048__auto___42923,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async))
);


break;
case "async":
var c__41048__auto___42935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42919,c__41048__auto___42935,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async){
return (function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = ((function (__42919,c__41048__auto___42935,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async){
return (function (state_41371){
var state_val_41372 = (state_41371[(1)]);
if((state_val_41372 === (1))){
var state_41371__$1 = state_41371;
var statearr_41373_42936 = state_41371__$1;
(statearr_41373_42936[(2)] = null);

(statearr_41373_42936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41372 === (2))){
var state_41371__$1 = state_41371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41371__$1,(4),jobs);
} else {
if((state_val_41372 === (3))){
var inst_41369 = (state_41371[(2)]);
var state_41371__$1 = state_41371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41371__$1,inst_41369);
} else {
if((state_val_41372 === (4))){
var inst_41361 = (state_41371[(2)]);
var inst_41362 = async(inst_41361);
var state_41371__$1 = state_41371;
if(cljs.core.truth_(inst_41362)){
var statearr_41374_42937 = state_41371__$1;
(statearr_41374_42937[(1)] = (5));

} else {
var statearr_41375_42938 = state_41371__$1;
(statearr_41375_42938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41372 === (5))){
var state_41371__$1 = state_41371;
var statearr_41376_42939 = state_41371__$1;
(statearr_41376_42939[(2)] = null);

(statearr_41376_42939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41372 === (6))){
var state_41371__$1 = state_41371;
var statearr_41377_42940 = state_41371__$1;
(statearr_41377_42940[(2)] = null);

(statearr_41377_42940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41372 === (7))){
var inst_41367 = (state_41371[(2)]);
var state_41371__$1 = state_41371;
var statearr_41378_42945 = state_41371__$1;
(statearr_41378_42945[(2)] = inst_41367);

(statearr_41378_42945[(1)] = (3));


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
});})(__42919,c__41048__auto___42935,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async))
;
return ((function (__42919,switch__40993__auto__,c__41048__auto___42935,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0 = (function (){
var statearr_41379 = [null,null,null,null,null,null,null];
(statearr_41379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__);

(statearr_41379[(1)] = (1));

return statearr_41379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1 = (function (state_41371){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41371);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41380){var ex__40997__auto__ = e41380;
var statearr_41381_42946 = state_41371;
(statearr_41381_42946[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41371[(4)]))){
var statearr_41382_42947 = state_41371;
(statearr_41382_42947[(1)] = cljs.core.first((state_41371[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42948 = state_41371;
state_41371 = G__42948;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = function(state_41371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1.call(this,state_41371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__;
})()
;})(__42919,switch__40993__auto__,c__41048__auto___42935,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async))
})();
var state__41050__auto__ = (function (){var statearr_41383 = f__41049__auto__();
(statearr_41383[(6)] = c__41048__auto___42935);

return statearr_41383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
});})(__42919,c__41048__auto___42935,G__41325_42920,G__41325_42921__$1,n__5589__auto___42918,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41325_42921__$1)].join('')));

}

var G__42949 = (__42919 + (1));
__42919 = G__42949;
continue;
} else {
}
break;
}

var c__41048__auto___42950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41405){
var state_val_41406 = (state_41405[(1)]);
if((state_val_41406 === (7))){
var inst_41401 = (state_41405[(2)]);
var state_41405__$1 = state_41405;
var statearr_41407_42951 = state_41405__$1;
(statearr_41407_42951[(2)] = inst_41401);

(statearr_41407_42951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (1))){
var state_41405__$1 = state_41405;
var statearr_41408_42952 = state_41405__$1;
(statearr_41408_42952[(2)] = null);

(statearr_41408_42952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (4))){
var inst_41386 = (state_41405[(7)]);
var inst_41386__$1 = (state_41405[(2)]);
var inst_41387 = (inst_41386__$1 == null);
var state_41405__$1 = (function (){var statearr_41409 = state_41405;
(statearr_41409[(7)] = inst_41386__$1);

return statearr_41409;
})();
if(cljs.core.truth_(inst_41387)){
var statearr_41410_42953 = state_41405__$1;
(statearr_41410_42953[(1)] = (5));

} else {
var statearr_41411_42954 = state_41405__$1;
(statearr_41411_42954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (6))){
var inst_41386 = (state_41405[(7)]);
var inst_41391 = (state_41405[(8)]);
var inst_41391__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41393 = [inst_41386,inst_41391__$1];
var inst_41394 = (new cljs.core.PersistentVector(null,2,(5),inst_41392,inst_41393,null));
var state_41405__$1 = (function (){var statearr_41412 = state_41405;
(statearr_41412[(8)] = inst_41391__$1);

return statearr_41412;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41405__$1,(8),jobs,inst_41394);
} else {
if((state_val_41406 === (3))){
var inst_41403 = (state_41405[(2)]);
var state_41405__$1 = state_41405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41405__$1,inst_41403);
} else {
if((state_val_41406 === (2))){
var state_41405__$1 = state_41405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41405__$1,(4),from);
} else {
if((state_val_41406 === (9))){
var inst_41398 = (state_41405[(2)]);
var state_41405__$1 = (function (){var statearr_41413 = state_41405;
(statearr_41413[(9)] = inst_41398);

return statearr_41413;
})();
var statearr_41417_42955 = state_41405__$1;
(statearr_41417_42955[(2)] = null);

(statearr_41417_42955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (5))){
var inst_41389 = cljs.core.async.close_BANG_(jobs);
var state_41405__$1 = state_41405;
var statearr_41418_42956 = state_41405__$1;
(statearr_41418_42956[(2)] = inst_41389);

(statearr_41418_42956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (8))){
var inst_41391 = (state_41405[(8)]);
var inst_41396 = (state_41405[(2)]);
var state_41405__$1 = (function (){var statearr_41419 = state_41405;
(statearr_41419[(10)] = inst_41396);

return statearr_41419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41405__$1,(9),results,inst_41391);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0 = (function (){
var statearr_41420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__);

(statearr_41420[(1)] = (1));

return statearr_41420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1 = (function (state_41405){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41405);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41421){var ex__40997__auto__ = e41421;
var statearr_41422_42957 = state_41405;
(statearr_41422_42957[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41405[(4)]))){
var statearr_41423_42958 = state_41405;
(statearr_41423_42958[(1)] = cljs.core.first((state_41405[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42959 = state_41405;
state_41405 = G__42959;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = function(state_41405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1.call(this,state_41405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41424 = f__41049__auto__();
(statearr_41424[(6)] = c__41048__auto___42950);

return statearr_41424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


var c__41048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41462){
var state_val_41463 = (state_41462[(1)]);
if((state_val_41463 === (7))){
var inst_41458 = (state_41462[(2)]);
var state_41462__$1 = state_41462;
var statearr_41464_42960 = state_41462__$1;
(statearr_41464_42960[(2)] = inst_41458);

(statearr_41464_42960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (20))){
var state_41462__$1 = state_41462;
var statearr_41465_42961 = state_41462__$1;
(statearr_41465_42961[(2)] = null);

(statearr_41465_42961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (1))){
var state_41462__$1 = state_41462;
var statearr_41466_42962 = state_41462__$1;
(statearr_41466_42962[(2)] = null);

(statearr_41466_42962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (4))){
var inst_41427 = (state_41462[(7)]);
var inst_41427__$1 = (state_41462[(2)]);
var inst_41428 = (inst_41427__$1 == null);
var state_41462__$1 = (function (){var statearr_41470 = state_41462;
(statearr_41470[(7)] = inst_41427__$1);

return statearr_41470;
})();
if(cljs.core.truth_(inst_41428)){
var statearr_41472_42963 = state_41462__$1;
(statearr_41472_42963[(1)] = (5));

} else {
var statearr_41473_42964 = state_41462__$1;
(statearr_41473_42964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (15))){
var inst_41440 = (state_41462[(8)]);
var state_41462__$1 = state_41462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41462__$1,(18),to,inst_41440);
} else {
if((state_val_41463 === (21))){
var inst_41453 = (state_41462[(2)]);
var state_41462__$1 = state_41462;
var statearr_41474_42965 = state_41462__$1;
(statearr_41474_42965[(2)] = inst_41453);

(statearr_41474_42965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (13))){
var inst_41455 = (state_41462[(2)]);
var state_41462__$1 = (function (){var statearr_41475 = state_41462;
(statearr_41475[(9)] = inst_41455);

return statearr_41475;
})();
var statearr_41476_42966 = state_41462__$1;
(statearr_41476_42966[(2)] = null);

(statearr_41476_42966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (6))){
var inst_41427 = (state_41462[(7)]);
var state_41462__$1 = state_41462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41462__$1,(11),inst_41427);
} else {
if((state_val_41463 === (17))){
var inst_41448 = (state_41462[(2)]);
var state_41462__$1 = state_41462;
if(cljs.core.truth_(inst_41448)){
var statearr_41485_42967 = state_41462__$1;
(statearr_41485_42967[(1)] = (19));

} else {
var statearr_41486_42968 = state_41462__$1;
(statearr_41486_42968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (3))){
var inst_41460 = (state_41462[(2)]);
var state_41462__$1 = state_41462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41462__$1,inst_41460);
} else {
if((state_val_41463 === (12))){
var inst_41437 = (state_41462[(10)]);
var state_41462__$1 = state_41462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41462__$1,(14),inst_41437);
} else {
if((state_val_41463 === (2))){
var state_41462__$1 = state_41462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41462__$1,(4),results);
} else {
if((state_val_41463 === (19))){
var state_41462__$1 = state_41462;
var statearr_41487_42969 = state_41462__$1;
(statearr_41487_42969[(2)] = null);

(statearr_41487_42969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (11))){
var inst_41437 = (state_41462[(2)]);
var state_41462__$1 = (function (){var statearr_41491 = state_41462;
(statearr_41491[(10)] = inst_41437);

return statearr_41491;
})();
var statearr_41492_42970 = state_41462__$1;
(statearr_41492_42970[(2)] = null);

(statearr_41492_42970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (9))){
var state_41462__$1 = state_41462;
var statearr_41493_42971 = state_41462__$1;
(statearr_41493_42971[(2)] = null);

(statearr_41493_42971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (5))){
var state_41462__$1 = state_41462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41494_42972 = state_41462__$1;
(statearr_41494_42972[(1)] = (8));

} else {
var statearr_41495_42973 = state_41462__$1;
(statearr_41495_42973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (14))){
var inst_41442 = (state_41462[(11)]);
var inst_41440 = (state_41462[(8)]);
var inst_41440__$1 = (state_41462[(2)]);
var inst_41441 = (inst_41440__$1 == null);
var inst_41442__$1 = cljs.core.not(inst_41441);
var state_41462__$1 = (function (){var statearr_41496 = state_41462;
(statearr_41496[(11)] = inst_41442__$1);

(statearr_41496[(8)] = inst_41440__$1);

return statearr_41496;
})();
if(inst_41442__$1){
var statearr_41497_42974 = state_41462__$1;
(statearr_41497_42974[(1)] = (15));

} else {
var statearr_41498_42975 = state_41462__$1;
(statearr_41498_42975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (16))){
var inst_41442 = (state_41462[(11)]);
var state_41462__$1 = state_41462;
var statearr_41499_42976 = state_41462__$1;
(statearr_41499_42976[(2)] = inst_41442);

(statearr_41499_42976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (10))){
var inst_41434 = (state_41462[(2)]);
var state_41462__$1 = state_41462;
var statearr_41500_42977 = state_41462__$1;
(statearr_41500_42977[(2)] = inst_41434);

(statearr_41500_42977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (18))){
var inst_41445 = (state_41462[(2)]);
var state_41462__$1 = state_41462;
var statearr_41501_42978 = state_41462__$1;
(statearr_41501_42978[(2)] = inst_41445);

(statearr_41501_42978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41463 === (8))){
var inst_41431 = cljs.core.async.close_BANG_(to);
var state_41462__$1 = state_41462;
var statearr_41502_42979 = state_41462__$1;
(statearr_41502_42979[(2)] = inst_41431);

(statearr_41502_42979[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0 = (function (){
var statearr_41503 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__);

(statearr_41503[(1)] = (1));

return statearr_41503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1 = (function (state_41462){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41462);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41504){var ex__40997__auto__ = e41504;
var statearr_41505_42980 = state_41462;
(statearr_41505_42980[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41462[(4)]))){
var statearr_41506_42981 = state_41462;
(statearr_41506_42981[(1)] = cljs.core.first((state_41462[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42982 = state_41462;
state_41462 = G__42982;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__ = function(state_41462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1.call(this,state_41462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41507 = f__41049__auto__();
(statearr_41507[(6)] = c__41048__auto__);

return statearr_41507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

return c__41048__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41509 = arguments.length;
switch (G__41509) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41511 = arguments.length;
switch (G__41511) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41513 = arguments.length;
switch (G__41513) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__41048__auto___42986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41539){
var state_val_41540 = (state_41539[(1)]);
if((state_val_41540 === (7))){
var inst_41535 = (state_41539[(2)]);
var state_41539__$1 = state_41539;
var statearr_41541_42987 = state_41539__$1;
(statearr_41541_42987[(2)] = inst_41535);

(statearr_41541_42987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (1))){
var state_41539__$1 = state_41539;
var statearr_41542_42988 = state_41539__$1;
(statearr_41542_42988[(2)] = null);

(statearr_41542_42988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (4))){
var inst_41516 = (state_41539[(7)]);
var inst_41516__$1 = (state_41539[(2)]);
var inst_41517 = (inst_41516__$1 == null);
var state_41539__$1 = (function (){var statearr_41543 = state_41539;
(statearr_41543[(7)] = inst_41516__$1);

return statearr_41543;
})();
if(cljs.core.truth_(inst_41517)){
var statearr_41544_42989 = state_41539__$1;
(statearr_41544_42989[(1)] = (5));

} else {
var statearr_41545_42990 = state_41539__$1;
(statearr_41545_42990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (13))){
var state_41539__$1 = state_41539;
var statearr_41546_42991 = state_41539__$1;
(statearr_41546_42991[(2)] = null);

(statearr_41546_42991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (6))){
var inst_41516 = (state_41539[(7)]);
var inst_41522 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41516) : p.call(null,inst_41516));
var state_41539__$1 = state_41539;
if(cljs.core.truth_(inst_41522)){
var statearr_41547_42992 = state_41539__$1;
(statearr_41547_42992[(1)] = (9));

} else {
var statearr_41548_42993 = state_41539__$1;
(statearr_41548_42993[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (3))){
var inst_41537 = (state_41539[(2)]);
var state_41539__$1 = state_41539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41539__$1,inst_41537);
} else {
if((state_val_41540 === (12))){
var state_41539__$1 = state_41539;
var statearr_41549_42994 = state_41539__$1;
(statearr_41549_42994[(2)] = null);

(statearr_41549_42994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (2))){
var state_41539__$1 = state_41539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41539__$1,(4),ch);
} else {
if((state_val_41540 === (11))){
var inst_41516 = (state_41539[(7)]);
var inst_41526 = (state_41539[(2)]);
var state_41539__$1 = state_41539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41539__$1,(8),inst_41526,inst_41516);
} else {
if((state_val_41540 === (9))){
var state_41539__$1 = state_41539;
var statearr_41550_42995 = state_41539__$1;
(statearr_41550_42995[(2)] = tc);

(statearr_41550_42995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (5))){
var inst_41519 = cljs.core.async.close_BANG_(tc);
var inst_41520 = cljs.core.async.close_BANG_(fc);
var state_41539__$1 = (function (){var statearr_41551 = state_41539;
(statearr_41551[(8)] = inst_41519);

return statearr_41551;
})();
var statearr_41552_42996 = state_41539__$1;
(statearr_41552_42996[(2)] = inst_41520);

(statearr_41552_42996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (14))){
var inst_41533 = (state_41539[(2)]);
var state_41539__$1 = state_41539;
var statearr_41553_42997 = state_41539__$1;
(statearr_41553_42997[(2)] = inst_41533);

(statearr_41553_42997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (10))){
var state_41539__$1 = state_41539;
var statearr_41554_42998 = state_41539__$1;
(statearr_41554_42998[(2)] = fc);

(statearr_41554_42998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (8))){
var inst_41528 = (state_41539[(2)]);
var state_41539__$1 = state_41539;
if(cljs.core.truth_(inst_41528)){
var statearr_41555_42999 = state_41539__$1;
(statearr_41555_42999[(1)] = (12));

} else {
var statearr_41556_43000 = state_41539__$1;
(statearr_41556_43000[(1)] = (13));

}

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
}
}
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_41557 = [null,null,null,null,null,null,null,null,null];
(statearr_41557[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_41557[(1)] = (1));

return statearr_41557;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_41539){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41539);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41558){var ex__40997__auto__ = e41558;
var statearr_41559_43001 = state_41539;
(statearr_41559_43001[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41539[(4)]))){
var statearr_41560_43002 = state_41539;
(statearr_41560_43002[(1)] = cljs.core.first((state_41539[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43003 = state_41539;
state_41539 = G__43003;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_41539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_41539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41561 = f__41049__auto__();
(statearr_41561[(6)] = c__41048__auto___42986);

return statearr_41561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41583){
var state_val_41584 = (state_41583[(1)]);
if((state_val_41584 === (7))){
var inst_41579 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41586_43004 = state_41583__$1;
(statearr_41586_43004[(2)] = inst_41579);

(statearr_41586_43004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (1))){
var inst_41562 = init;
var inst_41563 = inst_41562;
var state_41583__$1 = (function (){var statearr_41587 = state_41583;
(statearr_41587[(7)] = inst_41563);

return statearr_41587;
})();
var statearr_41588_43005 = state_41583__$1;
(statearr_41588_43005[(2)] = null);

(statearr_41588_43005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (4))){
var inst_41566 = (state_41583[(8)]);
var inst_41566__$1 = (state_41583[(2)]);
var inst_41567 = (inst_41566__$1 == null);
var state_41583__$1 = (function (){var statearr_41589 = state_41583;
(statearr_41589[(8)] = inst_41566__$1);

return statearr_41589;
})();
if(cljs.core.truth_(inst_41567)){
var statearr_41590_43006 = state_41583__$1;
(statearr_41590_43006[(1)] = (5));

} else {
var statearr_41591_43007 = state_41583__$1;
(statearr_41591_43007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (6))){
var inst_41563 = (state_41583[(7)]);
var inst_41566 = (state_41583[(8)]);
var inst_41570 = (state_41583[(9)]);
var inst_41570__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41563,inst_41566) : f.call(null,inst_41563,inst_41566));
var inst_41571 = cljs.core.reduced_QMARK_(inst_41570__$1);
var state_41583__$1 = (function (){var statearr_41592 = state_41583;
(statearr_41592[(9)] = inst_41570__$1);

return statearr_41592;
})();
if(inst_41571){
var statearr_41593_43008 = state_41583__$1;
(statearr_41593_43008[(1)] = (8));

} else {
var statearr_41594_43009 = state_41583__$1;
(statearr_41594_43009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (3))){
var inst_41581 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41583__$1,inst_41581);
} else {
if((state_val_41584 === (2))){
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41583__$1,(4),ch);
} else {
if((state_val_41584 === (9))){
var inst_41570 = (state_41583[(9)]);
var inst_41563 = inst_41570;
var state_41583__$1 = (function (){var statearr_41595 = state_41583;
(statearr_41595[(7)] = inst_41563);

return statearr_41595;
})();
var statearr_41596_43010 = state_41583__$1;
(statearr_41596_43010[(2)] = null);

(statearr_41596_43010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (5))){
var inst_41563 = (state_41583[(7)]);
var state_41583__$1 = state_41583;
var statearr_41597_43011 = state_41583__$1;
(statearr_41597_43011[(2)] = inst_41563);

(statearr_41597_43011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (10))){
var inst_41577 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41598_43012 = state_41583__$1;
(statearr_41598_43012[(2)] = inst_41577);

(statearr_41598_43012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (8))){
var inst_41570 = (state_41583[(9)]);
var inst_41573 = cljs.core.deref(inst_41570);
var state_41583__$1 = state_41583;
var statearr_41599_43013 = state_41583__$1;
(statearr_41599_43013[(2)] = inst_41573);

(statearr_41599_43013[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__40994__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40994__auto____0 = (function (){
var statearr_41600 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41600[(0)] = cljs$core$async$reduce_$_state_machine__40994__auto__);

(statearr_41600[(1)] = (1));

return statearr_41600;
});
var cljs$core$async$reduce_$_state_machine__40994__auto____1 = (function (state_41583){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41583);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41601){var ex__40997__auto__ = e41601;
var statearr_41602_43014 = state_41583;
(statearr_41602_43014[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41583[(4)]))){
var statearr_41604_43015 = state_41583;
(statearr_41604_43015[(1)] = cljs.core.first((state_41583[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43016 = state_41583;
state_41583 = G__43016;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40994__auto__ = function(state_41583){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40994__auto____1.call(this,state_41583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40994__auto____0;
cljs$core$async$reduce_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40994__auto____1;
return cljs$core$async$reduce_$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41605 = f__41049__auto__();
(statearr_41605[(6)] = c__41048__auto__);

return statearr_41605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

return c__41048__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41612){
var state_val_41613 = (state_41612[(1)]);
if((state_val_41613 === (1))){
var inst_41607 = cljs.core.async.reduce(f__$1,init,ch);
var state_41612__$1 = state_41612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41612__$1,(2),inst_41607);
} else {
if((state_val_41613 === (2))){
var inst_41609 = (state_41612[(2)]);
var inst_41610 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41609) : f__$1.call(null,inst_41609));
var state_41612__$1 = state_41612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41612__$1,inst_41610);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__40994__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40994__auto____0 = (function (){
var statearr_41616 = [null,null,null,null,null,null,null];
(statearr_41616[(0)] = cljs$core$async$transduce_$_state_machine__40994__auto__);

(statearr_41616[(1)] = (1));

return statearr_41616;
});
var cljs$core$async$transduce_$_state_machine__40994__auto____1 = (function (state_41612){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41612);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41617){var ex__40997__auto__ = e41617;
var statearr_41618_43022 = state_41612;
(statearr_41618_43022[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41612[(4)]))){
var statearr_41619_43023 = state_41612;
(statearr_41619_43023[(1)] = cljs.core.first((state_41612[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43026 = state_41612;
state_41612 = G__43026;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40994__auto__ = function(state_41612){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40994__auto____1.call(this,state_41612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40994__auto____0;
cljs$core$async$transduce_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40994__auto____1;
return cljs$core$async$transduce_$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41622 = f__41049__auto__();
(statearr_41622[(6)] = c__41048__auto__);

return statearr_41622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

return c__41048__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__41624 = arguments.length;
switch (G__41624) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41653){
var state_val_41654 = (state_41653[(1)]);
if((state_val_41654 === (7))){
var inst_41635 = (state_41653[(2)]);
var state_41653__$1 = state_41653;
var statearr_41659_43028 = state_41653__$1;
(statearr_41659_43028[(2)] = inst_41635);

(statearr_41659_43028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (1))){
var inst_41629 = cljs.core.seq(coll);
var inst_41630 = inst_41629;
var state_41653__$1 = (function (){var statearr_41660 = state_41653;
(statearr_41660[(7)] = inst_41630);

return statearr_41660;
})();
var statearr_41661_43029 = state_41653__$1;
(statearr_41661_43029[(2)] = null);

(statearr_41661_43029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (4))){
var inst_41630 = (state_41653[(7)]);
var inst_41633 = cljs.core.first(inst_41630);
var state_41653__$1 = state_41653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41653__$1,(7),ch,inst_41633);
} else {
if((state_val_41654 === (13))){
var inst_41647 = (state_41653[(2)]);
var state_41653__$1 = state_41653;
var statearr_41662_43030 = state_41653__$1;
(statearr_41662_43030[(2)] = inst_41647);

(statearr_41662_43030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (6))){
var inst_41638 = (state_41653[(2)]);
var state_41653__$1 = state_41653;
if(cljs.core.truth_(inst_41638)){
var statearr_41663_43031 = state_41653__$1;
(statearr_41663_43031[(1)] = (8));

} else {
var statearr_41664_43032 = state_41653__$1;
(statearr_41664_43032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (3))){
var inst_41651 = (state_41653[(2)]);
var state_41653__$1 = state_41653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41653__$1,inst_41651);
} else {
if((state_val_41654 === (12))){
var state_41653__$1 = state_41653;
var statearr_41665_43033 = state_41653__$1;
(statearr_41665_43033[(2)] = null);

(statearr_41665_43033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (2))){
var inst_41630 = (state_41653[(7)]);
var state_41653__$1 = state_41653;
if(cljs.core.truth_(inst_41630)){
var statearr_41666_43034 = state_41653__$1;
(statearr_41666_43034[(1)] = (4));

} else {
var statearr_41667_43035 = state_41653__$1;
(statearr_41667_43035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (11))){
var inst_41644 = cljs.core.async.close_BANG_(ch);
var state_41653__$1 = state_41653;
var statearr_41668_43036 = state_41653__$1;
(statearr_41668_43036[(2)] = inst_41644);

(statearr_41668_43036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (9))){
var state_41653__$1 = state_41653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41669_43037 = state_41653__$1;
(statearr_41669_43037[(1)] = (11));

} else {
var statearr_41670_43038 = state_41653__$1;
(statearr_41670_43038[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (5))){
var inst_41630 = (state_41653[(7)]);
var state_41653__$1 = state_41653;
var statearr_41671_43039 = state_41653__$1;
(statearr_41671_43039[(2)] = inst_41630);

(statearr_41671_43039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (10))){
var inst_41649 = (state_41653[(2)]);
var state_41653__$1 = state_41653;
var statearr_41672_43042 = state_41653__$1;
(statearr_41672_43042[(2)] = inst_41649);

(statearr_41672_43042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41654 === (8))){
var inst_41630 = (state_41653[(7)]);
var inst_41640 = cljs.core.next(inst_41630);
var inst_41630__$1 = inst_41640;
var state_41653__$1 = (function (){var statearr_41673 = state_41653;
(statearr_41673[(7)] = inst_41630__$1);

return statearr_41673;
})();
var statearr_41674_43043 = state_41653__$1;
(statearr_41674_43043[(2)] = null);

(statearr_41674_43043[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_41675 = [null,null,null,null,null,null,null,null];
(statearr_41675[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_41675[(1)] = (1));

return statearr_41675;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_41653){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41653);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41676){var ex__40997__auto__ = e41676;
var statearr_41677_43044 = state_41653;
(statearr_41677_43044[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41653[(4)]))){
var statearr_41678_43045 = state_41653;
(statearr_41678_43045[(1)] = cljs.core.first((state_41653[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43046 = state_41653;
state_41653 = G__43046;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_41653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_41653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41679 = f__41049__auto__();
(statearr_41679[(6)] = c__41048__auto__);

return statearr_41679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

return c__41048__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41681 = arguments.length;
switch (G__41681) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43049 = (function (_){
var x__5346__auto__ = (((_ == null))?null:_);
var m__5347__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5347__auto__.call(null,_));
} else {
var m__5345__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5345__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43049(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43050 = (function (m,ch,close_QMARK_){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5347__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5345__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43050(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43055 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43055(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43056 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43056(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41682 = (function (ch,cs,meta41683){
this.ch = ch;
this.cs = cs;
this.meta41683 = meta41683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41684,meta41683__$1){
var self__ = this;
var _41684__$1 = this;
return (new cljs.core.async.t_cljs$core$async41682(self__.ch,self__.cs,meta41683__$1));
}));

(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41684){
var self__ = this;
var _41684__$1 = this;
return self__.meta41683;
}));

(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41682.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41683","meta41683",-1958802341,null)], null);
}));

(cljs.core.async.t_cljs$core$async41682.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41682");

(cljs.core.async.t_cljs$core$async41682.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async41682");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41682.
 */
cljs.core.async.__GT_t_cljs$core$async41682 = (function cljs$core$async$__GT_t_cljs$core$async41682(ch,cs,meta41683){
return (new cljs.core.async.t_cljs$core$async41682(ch,cs,meta41683));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async41682(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__41048__auto___43057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41817){
var state_val_41818 = (state_41817[(1)]);
if((state_val_41818 === (7))){
var inst_41813 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41819_43058 = state_41817__$1;
(statearr_41819_43058[(2)] = inst_41813);

(statearr_41819_43058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (20))){
var inst_41718 = (state_41817[(7)]);
var inst_41730 = cljs.core.first(inst_41718);
var inst_41731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41730,(0),null);
var inst_41732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41730,(1),null);
var state_41817__$1 = (function (){var statearr_41820 = state_41817;
(statearr_41820[(8)] = inst_41731);

return statearr_41820;
})();
if(cljs.core.truth_(inst_41732)){
var statearr_41821_43059 = state_41817__$1;
(statearr_41821_43059[(1)] = (22));

} else {
var statearr_41822_43060 = state_41817__$1;
(statearr_41822_43060[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (27))){
var inst_41767 = (state_41817[(9)]);
var inst_41762 = (state_41817[(10)]);
var inst_41687 = (state_41817[(11)]);
var inst_41760 = (state_41817[(12)]);
var inst_41767__$1 = cljs.core._nth(inst_41760,inst_41762);
var inst_41768 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41767__$1,inst_41687,done);
var state_41817__$1 = (function (){var statearr_41823 = state_41817;
(statearr_41823[(9)] = inst_41767__$1);

return statearr_41823;
})();
if(cljs.core.truth_(inst_41768)){
var statearr_41824_43061 = state_41817__$1;
(statearr_41824_43061[(1)] = (30));

} else {
var statearr_41825_43062 = state_41817__$1;
(statearr_41825_43062[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (1))){
var state_41817__$1 = state_41817;
var statearr_41826_43063 = state_41817__$1;
(statearr_41826_43063[(2)] = null);

(statearr_41826_43063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (24))){
var inst_41718 = (state_41817[(7)]);
var inst_41737 = (state_41817[(2)]);
var inst_41738 = cljs.core.next(inst_41718);
var inst_41696 = inst_41738;
var inst_41697 = null;
var inst_41698 = (0);
var inst_41699 = (0);
var state_41817__$1 = (function (){var statearr_41827 = state_41817;
(statearr_41827[(13)] = inst_41699);

(statearr_41827[(14)] = inst_41698);

(statearr_41827[(15)] = inst_41737);

(statearr_41827[(16)] = inst_41697);

(statearr_41827[(17)] = inst_41696);

return statearr_41827;
})();
var statearr_41828_43064 = state_41817__$1;
(statearr_41828_43064[(2)] = null);

(statearr_41828_43064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (39))){
var state_41817__$1 = state_41817;
var statearr_41832_43065 = state_41817__$1;
(statearr_41832_43065[(2)] = null);

(statearr_41832_43065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (4))){
var inst_41687 = (state_41817[(11)]);
var inst_41687__$1 = (state_41817[(2)]);
var inst_41688 = (inst_41687__$1 == null);
var state_41817__$1 = (function (){var statearr_41833 = state_41817;
(statearr_41833[(11)] = inst_41687__$1);

return statearr_41833;
})();
if(cljs.core.truth_(inst_41688)){
var statearr_41834_43066 = state_41817__$1;
(statearr_41834_43066[(1)] = (5));

} else {
var statearr_41835_43067 = state_41817__$1;
(statearr_41835_43067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (15))){
var inst_41699 = (state_41817[(13)]);
var inst_41698 = (state_41817[(14)]);
var inst_41697 = (state_41817[(16)]);
var inst_41696 = (state_41817[(17)]);
var inst_41714 = (state_41817[(2)]);
var inst_41715 = (inst_41699 + (1));
var tmp41829 = inst_41698;
var tmp41830 = inst_41697;
var tmp41831 = inst_41696;
var inst_41696__$1 = tmp41831;
var inst_41697__$1 = tmp41830;
var inst_41698__$1 = tmp41829;
var inst_41699__$1 = inst_41715;
var state_41817__$1 = (function (){var statearr_41836 = state_41817;
(statearr_41836[(13)] = inst_41699__$1);

(statearr_41836[(14)] = inst_41698__$1);

(statearr_41836[(16)] = inst_41697__$1);

(statearr_41836[(18)] = inst_41714);

(statearr_41836[(17)] = inst_41696__$1);

return statearr_41836;
})();
var statearr_41837_43068 = state_41817__$1;
(statearr_41837_43068[(2)] = null);

(statearr_41837_43068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (21))){
var inst_41741 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41841_43069 = state_41817__$1;
(statearr_41841_43069[(2)] = inst_41741);

(statearr_41841_43069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (31))){
var inst_41767 = (state_41817[(9)]);
var inst_41771 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41767);
var state_41817__$1 = state_41817;
var statearr_41842_43070 = state_41817__$1;
(statearr_41842_43070[(2)] = inst_41771);

(statearr_41842_43070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (32))){
var inst_41759 = (state_41817[(19)]);
var inst_41761 = (state_41817[(20)]);
var inst_41762 = (state_41817[(10)]);
var inst_41760 = (state_41817[(12)]);
var inst_41773 = (state_41817[(2)]);
var inst_41774 = (inst_41762 + (1));
var tmp41838 = inst_41759;
var tmp41839 = inst_41761;
var tmp41840 = inst_41760;
var inst_41759__$1 = tmp41838;
var inst_41760__$1 = tmp41840;
var inst_41761__$1 = tmp41839;
var inst_41762__$1 = inst_41774;
var state_41817__$1 = (function (){var statearr_41843 = state_41817;
(statearr_41843[(19)] = inst_41759__$1);

(statearr_41843[(21)] = inst_41773);

(statearr_41843[(20)] = inst_41761__$1);

(statearr_41843[(10)] = inst_41762__$1);

(statearr_41843[(12)] = inst_41760__$1);

return statearr_41843;
})();
var statearr_41844_43071 = state_41817__$1;
(statearr_41844_43071[(2)] = null);

(statearr_41844_43071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (40))){
var inst_41786 = (state_41817[(22)]);
var inst_41790 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41786);
var state_41817__$1 = state_41817;
var statearr_41845_43072 = state_41817__$1;
(statearr_41845_43072[(2)] = inst_41790);

(statearr_41845_43072[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (33))){
var inst_41777 = (state_41817[(23)]);
var inst_41779 = cljs.core.chunked_seq_QMARK_(inst_41777);
var state_41817__$1 = state_41817;
if(inst_41779){
var statearr_41846_43073 = state_41817__$1;
(statearr_41846_43073[(1)] = (36));

} else {
var statearr_41847_43074 = state_41817__$1;
(statearr_41847_43074[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (13))){
var inst_41708 = (state_41817[(24)]);
var inst_41711 = cljs.core.async.close_BANG_(inst_41708);
var state_41817__$1 = state_41817;
var statearr_41848_43075 = state_41817__$1;
(statearr_41848_43075[(2)] = inst_41711);

(statearr_41848_43075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (22))){
var inst_41731 = (state_41817[(8)]);
var inst_41734 = cljs.core.async.close_BANG_(inst_41731);
var state_41817__$1 = state_41817;
var statearr_41849_43076 = state_41817__$1;
(statearr_41849_43076[(2)] = inst_41734);

(statearr_41849_43076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (36))){
var inst_41777 = (state_41817[(23)]);
var inst_41781 = cljs.core.chunk_first(inst_41777);
var inst_41782 = cljs.core.chunk_rest(inst_41777);
var inst_41783 = cljs.core.count(inst_41781);
var inst_41759 = inst_41782;
var inst_41760 = inst_41781;
var inst_41761 = inst_41783;
var inst_41762 = (0);
var state_41817__$1 = (function (){var statearr_41850 = state_41817;
(statearr_41850[(19)] = inst_41759);

(statearr_41850[(20)] = inst_41761);

(statearr_41850[(10)] = inst_41762);

(statearr_41850[(12)] = inst_41760);

return statearr_41850;
})();
var statearr_41851_43077 = state_41817__$1;
(statearr_41851_43077[(2)] = null);

(statearr_41851_43077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (41))){
var inst_41777 = (state_41817[(23)]);
var inst_41792 = (state_41817[(2)]);
var inst_41793 = cljs.core.next(inst_41777);
var inst_41759 = inst_41793;
var inst_41760 = null;
var inst_41761 = (0);
var inst_41762 = (0);
var state_41817__$1 = (function (){var statearr_41852 = state_41817;
(statearr_41852[(19)] = inst_41759);

(statearr_41852[(20)] = inst_41761);

(statearr_41852[(10)] = inst_41762);

(statearr_41852[(25)] = inst_41792);

(statearr_41852[(12)] = inst_41760);

return statearr_41852;
})();
var statearr_41853_43078 = state_41817__$1;
(statearr_41853_43078[(2)] = null);

(statearr_41853_43078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (43))){
var state_41817__$1 = state_41817;
var statearr_41854_43079 = state_41817__$1;
(statearr_41854_43079[(2)] = null);

(statearr_41854_43079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (29))){
var inst_41801 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41855_43084 = state_41817__$1;
(statearr_41855_43084[(2)] = inst_41801);

(statearr_41855_43084[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (44))){
var inst_41810 = (state_41817[(2)]);
var state_41817__$1 = (function (){var statearr_41856 = state_41817;
(statearr_41856[(26)] = inst_41810);

return statearr_41856;
})();
var statearr_41857_43085 = state_41817__$1;
(statearr_41857_43085[(2)] = null);

(statearr_41857_43085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (6))){
var inst_41751 = (state_41817[(27)]);
var inst_41750 = cljs.core.deref(cs);
var inst_41751__$1 = cljs.core.keys(inst_41750);
var inst_41752 = cljs.core.count(inst_41751__$1);
var inst_41753 = cljs.core.reset_BANG_(dctr,inst_41752);
var inst_41758 = cljs.core.seq(inst_41751__$1);
var inst_41759 = inst_41758;
var inst_41760 = null;
var inst_41761 = (0);
var inst_41762 = (0);
var state_41817__$1 = (function (){var statearr_41858 = state_41817;
(statearr_41858[(19)] = inst_41759);

(statearr_41858[(20)] = inst_41761);

(statearr_41858[(27)] = inst_41751__$1);

(statearr_41858[(28)] = inst_41753);

(statearr_41858[(10)] = inst_41762);

(statearr_41858[(12)] = inst_41760);

return statearr_41858;
})();
var statearr_41859_43086 = state_41817__$1;
(statearr_41859_43086[(2)] = null);

(statearr_41859_43086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (28))){
var inst_41759 = (state_41817[(19)]);
var inst_41777 = (state_41817[(23)]);
var inst_41777__$1 = cljs.core.seq(inst_41759);
var state_41817__$1 = (function (){var statearr_41860 = state_41817;
(statearr_41860[(23)] = inst_41777__$1);

return statearr_41860;
})();
if(inst_41777__$1){
var statearr_41861_43087 = state_41817__$1;
(statearr_41861_43087[(1)] = (33));

} else {
var statearr_41862_43088 = state_41817__$1;
(statearr_41862_43088[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (25))){
var inst_41761 = (state_41817[(20)]);
var inst_41762 = (state_41817[(10)]);
var inst_41764 = (inst_41762 < inst_41761);
var inst_41765 = inst_41764;
var state_41817__$1 = state_41817;
if(cljs.core.truth_(inst_41765)){
var statearr_41863_43089 = state_41817__$1;
(statearr_41863_43089[(1)] = (27));

} else {
var statearr_41864_43090 = state_41817__$1;
(statearr_41864_43090[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (34))){
var state_41817__$1 = state_41817;
var statearr_41865_43091 = state_41817__$1;
(statearr_41865_43091[(2)] = null);

(statearr_41865_43091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (17))){
var state_41817__$1 = state_41817;
var statearr_41866_43092 = state_41817__$1;
(statearr_41866_43092[(2)] = null);

(statearr_41866_43092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (3))){
var inst_41815 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41817__$1,inst_41815);
} else {
if((state_val_41818 === (12))){
var inst_41746 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41867_43093 = state_41817__$1;
(statearr_41867_43093[(2)] = inst_41746);

(statearr_41867_43093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (2))){
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41817__$1,(4),ch);
} else {
if((state_val_41818 === (23))){
var state_41817__$1 = state_41817;
var statearr_41868_43094 = state_41817__$1;
(statearr_41868_43094[(2)] = null);

(statearr_41868_43094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (35))){
var inst_41799 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41869_43095 = state_41817__$1;
(statearr_41869_43095[(2)] = inst_41799);

(statearr_41869_43095[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (19))){
var inst_41718 = (state_41817[(7)]);
var inst_41722 = cljs.core.chunk_first(inst_41718);
var inst_41723 = cljs.core.chunk_rest(inst_41718);
var inst_41724 = cljs.core.count(inst_41722);
var inst_41696 = inst_41723;
var inst_41697 = inst_41722;
var inst_41698 = inst_41724;
var inst_41699 = (0);
var state_41817__$1 = (function (){var statearr_41870 = state_41817;
(statearr_41870[(13)] = inst_41699);

(statearr_41870[(14)] = inst_41698);

(statearr_41870[(16)] = inst_41697);

(statearr_41870[(17)] = inst_41696);

return statearr_41870;
})();
var statearr_41871_43096 = state_41817__$1;
(statearr_41871_43096[(2)] = null);

(statearr_41871_43096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (11))){
var inst_41718 = (state_41817[(7)]);
var inst_41696 = (state_41817[(17)]);
var inst_41718__$1 = cljs.core.seq(inst_41696);
var state_41817__$1 = (function (){var statearr_41872 = state_41817;
(statearr_41872[(7)] = inst_41718__$1);

return statearr_41872;
})();
if(inst_41718__$1){
var statearr_41873_43097 = state_41817__$1;
(statearr_41873_43097[(1)] = (16));

} else {
var statearr_41874_43098 = state_41817__$1;
(statearr_41874_43098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (9))){
var inst_41748 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41875_43099 = state_41817__$1;
(statearr_41875_43099[(2)] = inst_41748);

(statearr_41875_43099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (5))){
var inst_41694 = cljs.core.deref(cs);
var inst_41695 = cljs.core.seq(inst_41694);
var inst_41696 = inst_41695;
var inst_41697 = null;
var inst_41698 = (0);
var inst_41699 = (0);
var state_41817__$1 = (function (){var statearr_41876 = state_41817;
(statearr_41876[(13)] = inst_41699);

(statearr_41876[(14)] = inst_41698);

(statearr_41876[(16)] = inst_41697);

(statearr_41876[(17)] = inst_41696);

return statearr_41876;
})();
var statearr_41877_43100 = state_41817__$1;
(statearr_41877_43100[(2)] = null);

(statearr_41877_43100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (14))){
var state_41817__$1 = state_41817;
var statearr_41878_43101 = state_41817__$1;
(statearr_41878_43101[(2)] = null);

(statearr_41878_43101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (45))){
var inst_41807 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41879_43102 = state_41817__$1;
(statearr_41879_43102[(2)] = inst_41807);

(statearr_41879_43102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (26))){
var inst_41751 = (state_41817[(27)]);
var inst_41803 = (state_41817[(2)]);
var inst_41804 = cljs.core.seq(inst_41751);
var state_41817__$1 = (function (){var statearr_41880 = state_41817;
(statearr_41880[(29)] = inst_41803);

return statearr_41880;
})();
if(inst_41804){
var statearr_41881_43103 = state_41817__$1;
(statearr_41881_43103[(1)] = (42));

} else {
var statearr_41882_43104 = state_41817__$1;
(statearr_41882_43104[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (16))){
var inst_41718 = (state_41817[(7)]);
var inst_41720 = cljs.core.chunked_seq_QMARK_(inst_41718);
var state_41817__$1 = state_41817;
if(inst_41720){
var statearr_41883_43105 = state_41817__$1;
(statearr_41883_43105[(1)] = (19));

} else {
var statearr_41884_43106 = state_41817__$1;
(statearr_41884_43106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (38))){
var inst_41796 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41885_43107 = state_41817__$1;
(statearr_41885_43107[(2)] = inst_41796);

(statearr_41885_43107[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (30))){
var state_41817__$1 = state_41817;
var statearr_41886_43108 = state_41817__$1;
(statearr_41886_43108[(2)] = null);

(statearr_41886_43108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (10))){
var inst_41699 = (state_41817[(13)]);
var inst_41697 = (state_41817[(16)]);
var inst_41707 = cljs.core._nth(inst_41697,inst_41699);
var inst_41708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41707,(0),null);
var inst_41709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41707,(1),null);
var state_41817__$1 = (function (){var statearr_41887 = state_41817;
(statearr_41887[(24)] = inst_41708);

return statearr_41887;
})();
if(cljs.core.truth_(inst_41709)){
var statearr_41888_43109 = state_41817__$1;
(statearr_41888_43109[(1)] = (13));

} else {
var statearr_41889_43110 = state_41817__$1;
(statearr_41889_43110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (18))){
var inst_41744 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41890_43111 = state_41817__$1;
(statearr_41890_43111[(2)] = inst_41744);

(statearr_41890_43111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (42))){
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41817__$1,(45),dchan);
} else {
if((state_val_41818 === (37))){
var inst_41777 = (state_41817[(23)]);
var inst_41786 = (state_41817[(22)]);
var inst_41687 = (state_41817[(11)]);
var inst_41786__$1 = cljs.core.first(inst_41777);
var inst_41787 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41786__$1,inst_41687,done);
var state_41817__$1 = (function (){var statearr_41891 = state_41817;
(statearr_41891[(22)] = inst_41786__$1);

return statearr_41891;
})();
if(cljs.core.truth_(inst_41787)){
var statearr_41892_43112 = state_41817__$1;
(statearr_41892_43112[(1)] = (39));

} else {
var statearr_41893_43113 = state_41817__$1;
(statearr_41893_43113[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (8))){
var inst_41699 = (state_41817[(13)]);
var inst_41698 = (state_41817[(14)]);
var inst_41701 = (inst_41699 < inst_41698);
var inst_41702 = inst_41701;
var state_41817__$1 = state_41817;
if(cljs.core.truth_(inst_41702)){
var statearr_41894_43114 = state_41817__$1;
(statearr_41894_43114[(1)] = (10));

} else {
var statearr_41895_43115 = state_41817__$1;
(statearr_41895_43115[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__40994__auto__ = null;
var cljs$core$async$mult_$_state_machine__40994__auto____0 = (function (){
var statearr_41896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41896[(0)] = cljs$core$async$mult_$_state_machine__40994__auto__);

(statearr_41896[(1)] = (1));

return statearr_41896;
});
var cljs$core$async$mult_$_state_machine__40994__auto____1 = (function (state_41817){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41817);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e41897){var ex__40997__auto__ = e41897;
var statearr_41898_43117 = state_41817;
(statearr_41898_43117[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41817[(4)]))){
var statearr_41899_43118 = state_41817;
(statearr_41899_43118[(1)] = cljs.core.first((state_41817[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43119 = state_41817;
state_41817 = G__43119;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40994__auto__ = function(state_41817){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40994__auto____1.call(this,state_41817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40994__auto____0;
cljs$core$async$mult_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40994__auto____1;
return cljs$core$async$mult_$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_41900 = f__41049__auto__();
(statearr_41900[(6)] = c__41048__auto___43057);

return statearr_41900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41902 = arguments.length;
switch (G__41902) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_43121 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43121(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43122 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43122(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43123 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43123(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43124 = (function (m,state_map){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5347__auto__.call(null,m,state_map));
} else {
var m__5345__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5345__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43124(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43125 = (function (m,mode){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5347__auto__.call(null,m,mode));
} else {
var m__5345__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5345__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43125(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___43127 = arguments.length;
var i__5723__auto___43128 = (0);
while(true){
if((i__5723__auto___43128 < len__5722__auto___43127)){
args__5728__auto__.push((arguments[i__5723__auto___43128]));

var G__43129 = (i__5723__auto___43128 + (1));
i__5723__auto___43128 = G__43129;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((3) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5729__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41907){
var map__41908 = p__41907;
var map__41908__$1 = cljs.core.__destructure_map(map__41908);
var opts = map__41908__$1;
var statearr_41909_43131 = state;
(statearr_41909_43131[(1)] = cont_block);


var temp__5816__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41910_43132 = state;
(statearr_41910_43132[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5816__auto__)){
var cb = temp__5816__auto__;
var statearr_41911_43133 = state;
(statearr_41911_43133[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41903){
var G__41904 = cljs.core.first(seq41903);
var seq41903__$1 = cljs.core.next(seq41903);
var G__41905 = cljs.core.first(seq41903__$1);
var seq41903__$2 = cljs.core.next(seq41903__$1);
var G__41906 = cljs.core.first(seq41903__$2);
var seq41903__$3 = cljs.core.next(seq41903__$2);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41904,G__41905,G__41906,seq41903__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41912 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41913){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41913 = meta41913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41914,meta41913__$1){
var self__ = this;
var _41914__$1 = this;
return (new cljs.core.async.t_cljs$core$async41912(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41913__$1));
}));

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41914){
var self__ = this;
var _41914__$1 = this;
return self__.meta41913;
}));

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41913","meta41913",1600864597,null)], null);
}));

(cljs.core.async.t_cljs$core$async41912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41912");

(cljs.core.async.t_cljs$core$async41912.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async41912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41912.
 */
cljs.core.async.__GT_t_cljs$core$async41912 = (function cljs$core$async$__GT_t_cljs$core$async41912(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41913){
return (new cljs.core.async.t_cljs$core$async41912(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41913));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async41912(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__41048__auto___43138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_41982){
var state_val_41983 = (state_41982[(1)]);
if((state_val_41983 === (7))){
var inst_41942 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
if(cljs.core.truth_(inst_41942)){
var statearr_41984_43139 = state_41982__$1;
(statearr_41984_43139[(1)] = (8));

} else {
var statearr_41985_43140 = state_41982__$1;
(statearr_41985_43140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (20))){
var inst_41935 = (state_41982[(7)]);
var state_41982__$1 = state_41982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41982__$1,(23),out,inst_41935);
} else {
if((state_val_41983 === (1))){
var inst_41918 = calc_state();
var inst_41919 = cljs.core.__destructure_map(inst_41918);
var inst_41920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41919,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41923 = inst_41918;
var state_41982__$1 = (function (){var statearr_41986 = state_41982;
(statearr_41986[(8)] = inst_41921);

(statearr_41986[(9)] = inst_41920);

(statearr_41986[(10)] = inst_41922);

(statearr_41986[(11)] = inst_41923);

return statearr_41986;
})();
var statearr_41987_43145 = state_41982__$1;
(statearr_41987_43145[(2)] = null);

(statearr_41987_43145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (24))){
var inst_41926 = (state_41982[(12)]);
var inst_41923 = inst_41926;
var state_41982__$1 = (function (){var statearr_41988 = state_41982;
(statearr_41988[(11)] = inst_41923);

return statearr_41988;
})();
var statearr_41989_43146 = state_41982__$1;
(statearr_41989_43146[(2)] = null);

(statearr_41989_43146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (4))){
var inst_41935 = (state_41982[(7)]);
var inst_41937 = (state_41982[(13)]);
var inst_41934 = (state_41982[(2)]);
var inst_41935__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41934,(0),null);
var inst_41936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41934,(1),null);
var inst_41937__$1 = (inst_41935__$1 == null);
var state_41982__$1 = (function (){var statearr_41990 = state_41982;
(statearr_41990[(7)] = inst_41935__$1);

(statearr_41990[(13)] = inst_41937__$1);

(statearr_41990[(14)] = inst_41936);

return statearr_41990;
})();
if(cljs.core.truth_(inst_41937__$1)){
var statearr_41991_43147 = state_41982__$1;
(statearr_41991_43147[(1)] = (5));

} else {
var statearr_41992_43148 = state_41982__$1;
(statearr_41992_43148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (15))){
var inst_41927 = (state_41982[(15)]);
var inst_41956 = (state_41982[(16)]);
var inst_41956__$1 = cljs.core.empty_QMARK_(inst_41927);
var state_41982__$1 = (function (){var statearr_41993 = state_41982;
(statearr_41993[(16)] = inst_41956__$1);

return statearr_41993;
})();
if(inst_41956__$1){
var statearr_41994_43149 = state_41982__$1;
(statearr_41994_43149[(1)] = (17));

} else {
var statearr_41995_43150 = state_41982__$1;
(statearr_41995_43150[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (21))){
var inst_41926 = (state_41982[(12)]);
var inst_41923 = inst_41926;
var state_41982__$1 = (function (){var statearr_41996 = state_41982;
(statearr_41996[(11)] = inst_41923);

return statearr_41996;
})();
var statearr_41997_43151 = state_41982__$1;
(statearr_41997_43151[(2)] = null);

(statearr_41997_43151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (13))){
var inst_41949 = (state_41982[(2)]);
var inst_41950 = calc_state();
var inst_41923 = inst_41950;
var state_41982__$1 = (function (){var statearr_41998 = state_41982;
(statearr_41998[(17)] = inst_41949);

(statearr_41998[(11)] = inst_41923);

return statearr_41998;
})();
var statearr_41999_43152 = state_41982__$1;
(statearr_41999_43152[(2)] = null);

(statearr_41999_43152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (22))){
var inst_41976 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
var statearr_42000_43153 = state_41982__$1;
(statearr_42000_43153[(2)] = inst_41976);

(statearr_42000_43153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (6))){
var inst_41936 = (state_41982[(14)]);
var inst_41940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41936,change);
var state_41982__$1 = state_41982;
var statearr_42001_43154 = state_41982__$1;
(statearr_42001_43154[(2)] = inst_41940);

(statearr_42001_43154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (25))){
var state_41982__$1 = state_41982;
var statearr_42002_43156 = state_41982__$1;
(statearr_42002_43156[(2)] = null);

(statearr_42002_43156[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (17))){
var inst_41936 = (state_41982[(14)]);
var inst_41928 = (state_41982[(18)]);
var inst_41958 = (inst_41928.cljs$core$IFn$_invoke$arity$1 ? inst_41928.cljs$core$IFn$_invoke$arity$1(inst_41936) : inst_41928.call(null,inst_41936));
var inst_41959 = cljs.core.not(inst_41958);
var state_41982__$1 = state_41982;
var statearr_42003_43157 = state_41982__$1;
(statearr_42003_43157[(2)] = inst_41959);

(statearr_42003_43157[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (3))){
var inst_41980 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41982__$1,inst_41980);
} else {
if((state_val_41983 === (12))){
var state_41982__$1 = state_41982;
var statearr_42004_43158 = state_41982__$1;
(statearr_42004_43158[(2)] = null);

(statearr_42004_43158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (2))){
var inst_41926 = (state_41982[(12)]);
var inst_41923 = (state_41982[(11)]);
var inst_41926__$1 = cljs.core.__destructure_map(inst_41923);
var inst_41927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41926__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41926__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41926__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41982__$1 = (function (){var statearr_42005 = state_41982;
(statearr_42005[(12)] = inst_41926__$1);

(statearr_42005[(15)] = inst_41927);

(statearr_42005[(18)] = inst_41928);

return statearr_42005;
})();
return cljs.core.async.ioc_alts_BANG_(state_41982__$1,(4),inst_41929);
} else {
if((state_val_41983 === (23))){
var inst_41967 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
if(cljs.core.truth_(inst_41967)){
var statearr_42006_43159 = state_41982__$1;
(statearr_42006_43159[(1)] = (24));

} else {
var statearr_42007_43160 = state_41982__$1;
(statearr_42007_43160[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (19))){
var inst_41962 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
var statearr_42008_43161 = state_41982__$1;
(statearr_42008_43161[(2)] = inst_41962);

(statearr_42008_43161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (11))){
var inst_41936 = (state_41982[(14)]);
var inst_41946 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41936);
var state_41982__$1 = state_41982;
var statearr_42009_43162 = state_41982__$1;
(statearr_42009_43162[(2)] = inst_41946);

(statearr_42009_43162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (9))){
var inst_41927 = (state_41982[(15)]);
var inst_41936 = (state_41982[(14)]);
var inst_41953 = (state_41982[(19)]);
var inst_41953__$1 = (inst_41927.cljs$core$IFn$_invoke$arity$1 ? inst_41927.cljs$core$IFn$_invoke$arity$1(inst_41936) : inst_41927.call(null,inst_41936));
var state_41982__$1 = (function (){var statearr_42010 = state_41982;
(statearr_42010[(19)] = inst_41953__$1);

return statearr_42010;
})();
if(cljs.core.truth_(inst_41953__$1)){
var statearr_42011_43163 = state_41982__$1;
(statearr_42011_43163[(1)] = (14));

} else {
var statearr_42012_43164 = state_41982__$1;
(statearr_42012_43164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (5))){
var inst_41937 = (state_41982[(13)]);
var state_41982__$1 = state_41982;
var statearr_42013_43165 = state_41982__$1;
(statearr_42013_43165[(2)] = inst_41937);

(statearr_42013_43165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (14))){
var inst_41953 = (state_41982[(19)]);
var state_41982__$1 = state_41982;
var statearr_42014_43166 = state_41982__$1;
(statearr_42014_43166[(2)] = inst_41953);

(statearr_42014_43166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (26))){
var inst_41972 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
var statearr_42015_43167 = state_41982__$1;
(statearr_42015_43167[(2)] = inst_41972);

(statearr_42015_43167[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (16))){
var inst_41964 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
if(cljs.core.truth_(inst_41964)){
var statearr_42016_43168 = state_41982__$1;
(statearr_42016_43168[(1)] = (20));

} else {
var statearr_42017_43169 = state_41982__$1;
(statearr_42017_43169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (10))){
var inst_41978 = (state_41982[(2)]);
var state_41982__$1 = state_41982;
var statearr_42018_43170 = state_41982__$1;
(statearr_42018_43170[(2)] = inst_41978);

(statearr_42018_43170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (18))){
var inst_41956 = (state_41982[(16)]);
var state_41982__$1 = state_41982;
var statearr_42019_43171 = state_41982__$1;
(statearr_42019_43171[(2)] = inst_41956);

(statearr_42019_43171[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41983 === (8))){
var inst_41935 = (state_41982[(7)]);
var inst_41944 = (inst_41935 == null);
var state_41982__$1 = state_41982;
if(cljs.core.truth_(inst_41944)){
var statearr_42020_43172 = state_41982__$1;
(statearr_42020_43172[(1)] = (11));

} else {
var statearr_42021_43173 = state_41982__$1;
(statearr_42021_43173[(1)] = (12));

}

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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__40994__auto__ = null;
var cljs$core$async$mix_$_state_machine__40994__auto____0 = (function (){
var statearr_42022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42022[(0)] = cljs$core$async$mix_$_state_machine__40994__auto__);

(statearr_42022[(1)] = (1));

return statearr_42022;
});
var cljs$core$async$mix_$_state_machine__40994__auto____1 = (function (state_41982){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_41982);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42023){var ex__40997__auto__ = e42023;
var statearr_42024_43174 = state_41982;
(statearr_42024_43174[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_41982[(4)]))){
var statearr_42025_43175 = state_41982;
(statearr_42025_43175[(1)] = cljs.core.first((state_41982[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43176 = state_41982;
state_41982 = G__43176;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40994__auto__ = function(state_41982){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40994__auto____1.call(this,state_41982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40994__auto____0;
cljs$core$async$mix_$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40994__auto____1;
return cljs$core$async$mix_$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42026 = f__41049__auto__();
(statearr_42026[(6)] = c__41048__auto___43138);

return statearr_42026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_43177 = (function (p,v,ch,close_QMARK_){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5347__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5345__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_43177(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43178 = (function (p,v,ch){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5347__auto__.call(null,p,v,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5345__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_43178(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43179 = (function() {
var G__43180 = null;
var G__43180__1 = (function (p){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5347__auto__.call(null,p));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5345__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__43180__2 = (function (p,v){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5347__auto__.call(null,p,v));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5345__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__43180 = function(p,v){
switch(arguments.length){
case 1:
return G__43180__1.call(this,p);
case 2:
return G__43180__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43180.cljs$core$IFn$_invoke$arity$1 = G__43180__1;
G__43180.cljs$core$IFn$_invoke$arity$2 = G__43180__2;
return G__43180;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42028 = arguments.length;
switch (G__42028) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43179(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43179(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42032 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42033){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42033 = meta42033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42034,meta42033__$1){
var self__ = this;
var _42034__$1 = this;
return (new cljs.core.async.t_cljs$core$async42032(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42033__$1));
}));

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42034){
var self__ = this;
var _42034__$1 = this;
return self__.meta42033;
}));

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5816__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5816__auto__)){
var m = temp__5816__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42032.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42033","meta42033",818993562,null)], null);
}));

(cljs.core.async.t_cljs$core$async42032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42032");

(cljs.core.async.t_cljs$core$async42032.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async42032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42032.
 */
cljs.core.async.__GT_t_cljs$core$async42032 = (function cljs$core$async$__GT_t_cljs$core$async42032(ch,topic_fn,buf_fn,mults,ensure_mult,meta42033){
return (new cljs.core.async.t_cljs$core$async42032(ch,topic_fn,buf_fn,mults,ensure_mult,meta42033));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42031 = arguments.length;
switch (G__42031) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42029_SHARP_){
if(cljs.core.truth_((p1__42029_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42029_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42029_SHARP_.call(null,topic)))){
return p1__42029_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42029_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async42032(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__41048__auto___43184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42106){
var state_val_42107 = (state_42106[(1)]);
if((state_val_42107 === (7))){
var inst_42102 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
var statearr_42108_43185 = state_42106__$1;
(statearr_42108_43185[(2)] = inst_42102);

(statearr_42108_43185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (20))){
var state_42106__$1 = state_42106;
var statearr_42109_43186 = state_42106__$1;
(statearr_42109_43186[(2)] = null);

(statearr_42109_43186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (1))){
var state_42106__$1 = state_42106;
var statearr_42110_43187 = state_42106__$1;
(statearr_42110_43187[(2)] = null);

(statearr_42110_43187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (24))){
var inst_42085 = (state_42106[(7)]);
var inst_42094 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42085);
var state_42106__$1 = state_42106;
var statearr_42111_43188 = state_42106__$1;
(statearr_42111_43188[(2)] = inst_42094);

(statearr_42111_43188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (4))){
var inst_42037 = (state_42106[(8)]);
var inst_42037__$1 = (state_42106[(2)]);
var inst_42038 = (inst_42037__$1 == null);
var state_42106__$1 = (function (){var statearr_42112 = state_42106;
(statearr_42112[(8)] = inst_42037__$1);

return statearr_42112;
})();
if(cljs.core.truth_(inst_42038)){
var statearr_42113_43189 = state_42106__$1;
(statearr_42113_43189[(1)] = (5));

} else {
var statearr_42114_43190 = state_42106__$1;
(statearr_42114_43190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (15))){
var inst_42079 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
var statearr_42115_43191 = state_42106__$1;
(statearr_42115_43191[(2)] = inst_42079);

(statearr_42115_43191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (21))){
var inst_42099 = (state_42106[(2)]);
var state_42106__$1 = (function (){var statearr_42116 = state_42106;
(statearr_42116[(9)] = inst_42099);

return statearr_42116;
})();
var statearr_42117_43192 = state_42106__$1;
(statearr_42117_43192[(2)] = null);

(statearr_42117_43192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (13))){
var inst_42061 = (state_42106[(10)]);
var inst_42063 = cljs.core.chunked_seq_QMARK_(inst_42061);
var state_42106__$1 = state_42106;
if(inst_42063){
var statearr_42118_43193 = state_42106__$1;
(statearr_42118_43193[(1)] = (16));

} else {
var statearr_42119_43194 = state_42106__$1;
(statearr_42119_43194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (22))){
var inst_42091 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
if(cljs.core.truth_(inst_42091)){
var statearr_42120_43195 = state_42106__$1;
(statearr_42120_43195[(1)] = (23));

} else {
var statearr_42121_43196 = state_42106__$1;
(statearr_42121_43196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (6))){
var inst_42037 = (state_42106[(8)]);
var inst_42085 = (state_42106[(7)]);
var inst_42087 = (state_42106[(11)]);
var inst_42085__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42037) : topic_fn.call(null,inst_42037));
var inst_42086 = cljs.core.deref(mults);
var inst_42087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42086,inst_42085__$1);
var state_42106__$1 = (function (){var statearr_42122 = state_42106;
(statearr_42122[(7)] = inst_42085__$1);

(statearr_42122[(11)] = inst_42087__$1);

return statearr_42122;
})();
if(cljs.core.truth_(inst_42087__$1)){
var statearr_42123_43197 = state_42106__$1;
(statearr_42123_43197[(1)] = (19));

} else {
var statearr_42124_43198 = state_42106__$1;
(statearr_42124_43198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (25))){
var inst_42096 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
var statearr_42125_43199 = state_42106__$1;
(statearr_42125_43199[(2)] = inst_42096);

(statearr_42125_43199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (17))){
var inst_42061 = (state_42106[(10)]);
var inst_42070 = cljs.core.first(inst_42061);
var inst_42071 = cljs.core.async.muxch_STAR_(inst_42070);
var inst_42072 = cljs.core.async.close_BANG_(inst_42071);
var inst_42073 = cljs.core.next(inst_42061);
var inst_42047 = inst_42073;
var inst_42048 = null;
var inst_42049 = (0);
var inst_42050 = (0);
var state_42106__$1 = (function (){var statearr_42126 = state_42106;
(statearr_42126[(12)] = inst_42048);

(statearr_42126[(13)] = inst_42049);

(statearr_42126[(14)] = inst_42050);

(statearr_42126[(15)] = inst_42072);

(statearr_42126[(16)] = inst_42047);

return statearr_42126;
})();
var statearr_42127_43200 = state_42106__$1;
(statearr_42127_43200[(2)] = null);

(statearr_42127_43200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (3))){
var inst_42104 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42106__$1,inst_42104);
} else {
if((state_val_42107 === (12))){
var inst_42081 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
var statearr_42128_43201 = state_42106__$1;
(statearr_42128_43201[(2)] = inst_42081);

(statearr_42128_43201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (2))){
var state_42106__$1 = state_42106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42106__$1,(4),ch);
} else {
if((state_val_42107 === (23))){
var state_42106__$1 = state_42106;
var statearr_42129_43202 = state_42106__$1;
(statearr_42129_43202[(2)] = null);

(statearr_42129_43202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (19))){
var inst_42037 = (state_42106[(8)]);
var inst_42087 = (state_42106[(11)]);
var inst_42089 = cljs.core.async.muxch_STAR_(inst_42087);
var state_42106__$1 = state_42106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42106__$1,(22),inst_42089,inst_42037);
} else {
if((state_val_42107 === (11))){
var inst_42061 = (state_42106[(10)]);
var inst_42047 = (state_42106[(16)]);
var inst_42061__$1 = cljs.core.seq(inst_42047);
var state_42106__$1 = (function (){var statearr_42130 = state_42106;
(statearr_42130[(10)] = inst_42061__$1);

return statearr_42130;
})();
if(inst_42061__$1){
var statearr_42131_43203 = state_42106__$1;
(statearr_42131_43203[(1)] = (13));

} else {
var statearr_42132_43204 = state_42106__$1;
(statearr_42132_43204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (9))){
var inst_42083 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
var statearr_42133_43205 = state_42106__$1;
(statearr_42133_43205[(2)] = inst_42083);

(statearr_42133_43205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (5))){
var inst_42044 = cljs.core.deref(mults);
var inst_42045 = cljs.core.vals(inst_42044);
var inst_42046 = cljs.core.seq(inst_42045);
var inst_42047 = inst_42046;
var inst_42048 = null;
var inst_42049 = (0);
var inst_42050 = (0);
var state_42106__$1 = (function (){var statearr_42134 = state_42106;
(statearr_42134[(12)] = inst_42048);

(statearr_42134[(13)] = inst_42049);

(statearr_42134[(14)] = inst_42050);

(statearr_42134[(16)] = inst_42047);

return statearr_42134;
})();
var statearr_42135_43206 = state_42106__$1;
(statearr_42135_43206[(2)] = null);

(statearr_42135_43206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (14))){
var state_42106__$1 = state_42106;
var statearr_42139_43207 = state_42106__$1;
(statearr_42139_43207[(2)] = null);

(statearr_42139_43207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (16))){
var inst_42061 = (state_42106[(10)]);
var inst_42065 = cljs.core.chunk_first(inst_42061);
var inst_42066 = cljs.core.chunk_rest(inst_42061);
var inst_42067 = cljs.core.count(inst_42065);
var inst_42047 = inst_42066;
var inst_42048 = inst_42065;
var inst_42049 = inst_42067;
var inst_42050 = (0);
var state_42106__$1 = (function (){var statearr_42140 = state_42106;
(statearr_42140[(12)] = inst_42048);

(statearr_42140[(13)] = inst_42049);

(statearr_42140[(14)] = inst_42050);

(statearr_42140[(16)] = inst_42047);

return statearr_42140;
})();
var statearr_42141_43208 = state_42106__$1;
(statearr_42141_43208[(2)] = null);

(statearr_42141_43208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (10))){
var inst_42048 = (state_42106[(12)]);
var inst_42049 = (state_42106[(13)]);
var inst_42050 = (state_42106[(14)]);
var inst_42047 = (state_42106[(16)]);
var inst_42055 = cljs.core._nth(inst_42048,inst_42050);
var inst_42056 = cljs.core.async.muxch_STAR_(inst_42055);
var inst_42057 = cljs.core.async.close_BANG_(inst_42056);
var inst_42058 = (inst_42050 + (1));
var tmp42136 = inst_42048;
var tmp42137 = inst_42049;
var tmp42138 = inst_42047;
var inst_42047__$1 = tmp42138;
var inst_42048__$1 = tmp42136;
var inst_42049__$1 = tmp42137;
var inst_42050__$1 = inst_42058;
var state_42106__$1 = (function (){var statearr_42142 = state_42106;
(statearr_42142[(12)] = inst_42048__$1);

(statearr_42142[(13)] = inst_42049__$1);

(statearr_42142[(17)] = inst_42057);

(statearr_42142[(14)] = inst_42050__$1);

(statearr_42142[(16)] = inst_42047__$1);

return statearr_42142;
})();
var statearr_42143_43209 = state_42106__$1;
(statearr_42143_43209[(2)] = null);

(statearr_42143_43209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (18))){
var inst_42076 = (state_42106[(2)]);
var state_42106__$1 = state_42106;
var statearr_42144_43210 = state_42106__$1;
(statearr_42144_43210[(2)] = inst_42076);

(statearr_42144_43210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42107 === (8))){
var inst_42049 = (state_42106[(13)]);
var inst_42050 = (state_42106[(14)]);
var inst_42052 = (inst_42050 < inst_42049);
var inst_42053 = inst_42052;
var state_42106__$1 = state_42106;
if(cljs.core.truth_(inst_42053)){
var statearr_42145_43211 = state_42106__$1;
(statearr_42145_43211[(1)] = (10));

} else {
var statearr_42146_43212 = state_42106__$1;
(statearr_42146_43212[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42147[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42147[(1)] = (1));

return statearr_42147;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42106){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42106);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42148){var ex__40997__auto__ = e42148;
var statearr_42149_43213 = state_42106;
(statearr_42149_43213[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42106[(4)]))){
var statearr_42150_43214 = state_42106;
(statearr_42150_43214[(1)] = cljs.core.first((state_42106[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43215 = state_42106;
state_42106 = G__43215;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42151 = f__41049__auto__();
(statearr_42151[(6)] = c__41048__auto___43184);

return statearr_42151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42153 = arguments.length;
switch (G__42153) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42155 = arguments.length;
switch (G__42155) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42157 = arguments.length;
switch (G__42157) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__41048__auto___43226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42204){
var state_val_42205 = (state_42204[(1)]);
if((state_val_42205 === (7))){
var state_42204__$1 = state_42204;
var statearr_42206_43227 = state_42204__$1;
(statearr_42206_43227[(2)] = null);

(statearr_42206_43227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (1))){
var state_42204__$1 = state_42204;
var statearr_42207_43228 = state_42204__$1;
(statearr_42207_43228[(2)] = null);

(statearr_42207_43228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (4))){
var inst_42161 = (state_42204[(7)]);
var inst_42160 = (state_42204[(8)]);
var inst_42163 = (inst_42161 < inst_42160);
var state_42204__$1 = state_42204;
if(cljs.core.truth_(inst_42163)){
var statearr_42208_43229 = state_42204__$1;
(statearr_42208_43229[(1)] = (6));

} else {
var statearr_42209_43230 = state_42204__$1;
(statearr_42209_43230[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (15))){
var inst_42190 = (state_42204[(9)]);
var inst_42195 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42190);
var state_42204__$1 = state_42204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42204__$1,(17),out,inst_42195);
} else {
if((state_val_42205 === (13))){
var inst_42190 = (state_42204[(9)]);
var inst_42190__$1 = (state_42204[(2)]);
var inst_42191 = cljs.core.some(cljs.core.nil_QMARK_,inst_42190__$1);
var state_42204__$1 = (function (){var statearr_42210 = state_42204;
(statearr_42210[(9)] = inst_42190__$1);

return statearr_42210;
})();
if(cljs.core.truth_(inst_42191)){
var statearr_42212_43231 = state_42204__$1;
(statearr_42212_43231[(1)] = (14));

} else {
var statearr_42213_43232 = state_42204__$1;
(statearr_42213_43232[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (6))){
var state_42204__$1 = state_42204;
var statearr_42214_43233 = state_42204__$1;
(statearr_42214_43233[(2)] = null);

(statearr_42214_43233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (17))){
var inst_42197 = (state_42204[(2)]);
var state_42204__$1 = (function (){var statearr_42216 = state_42204;
(statearr_42216[(10)] = inst_42197);

return statearr_42216;
})();
var statearr_42217_43234 = state_42204__$1;
(statearr_42217_43234[(2)] = null);

(statearr_42217_43234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (3))){
var inst_42202 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42204__$1,inst_42202);
} else {
if((state_val_42205 === (12))){
var _ = (function (){var statearr_42218 = state_42204;
(statearr_42218[(4)] = cljs.core.rest((state_42204[(4)])));

return statearr_42218;
})();
var state_42204__$1 = state_42204;
var ex42215 = (state_42204__$1[(2)]);
var statearr_42219_43235 = state_42204__$1;
(statearr_42219_43235[(5)] = ex42215);


if((ex42215 instanceof Object)){
var statearr_42220_43236 = state_42204__$1;
(statearr_42220_43236[(1)] = (11));

(statearr_42220_43236[(5)] = null);

} else {
throw ex42215;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (2))){
var inst_42159 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42160 = cnt;
var inst_42161 = (0);
var state_42204__$1 = (function (){var statearr_42221 = state_42204;
(statearr_42221[(7)] = inst_42161);

(statearr_42221[(8)] = inst_42160);

(statearr_42221[(11)] = inst_42159);

return statearr_42221;
})();
var statearr_42222_43237 = state_42204__$1;
(statearr_42222_43237[(2)] = null);

(statearr_42222_43237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (11))){
var inst_42165 = (state_42204[(2)]);
var inst_42166 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42204__$1 = (function (){var statearr_42223 = state_42204;
(statearr_42223[(12)] = inst_42165);

return statearr_42223;
})();
var statearr_42224_43238 = state_42204__$1;
(statearr_42224_43238[(2)] = inst_42166);

(statearr_42224_43238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (9))){
var inst_42161 = (state_42204[(7)]);
var _ = (function (){var statearr_42225 = state_42204;
(statearr_42225[(4)] = cljs.core.cons((12),(state_42204[(4)])));

return statearr_42225;
})();
var inst_42172 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42161) : chs__$1.call(null,inst_42161));
var inst_42173 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42161) : done.call(null,inst_42161));
var inst_42174 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42172,inst_42173);
var ___$1 = (function (){var statearr_42226 = state_42204;
(statearr_42226[(4)] = cljs.core.rest((state_42204[(4)])));

return statearr_42226;
})();
var state_42204__$1 = state_42204;
var statearr_42227_43239 = state_42204__$1;
(statearr_42227_43239[(2)] = inst_42174);

(statearr_42227_43239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (5))){
var inst_42188 = (state_42204[(2)]);
var state_42204__$1 = (function (){var statearr_42228 = state_42204;
(statearr_42228[(13)] = inst_42188);

return statearr_42228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42204__$1,(13),dchan);
} else {
if((state_val_42205 === (14))){
var inst_42193 = cljs.core.async.close_BANG_(out);
var state_42204__$1 = state_42204;
var statearr_42231_43240 = state_42204__$1;
(statearr_42231_43240[(2)] = inst_42193);

(statearr_42231_43240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (16))){
var inst_42200 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
var statearr_42232_43241 = state_42204__$1;
(statearr_42232_43241[(2)] = inst_42200);

(statearr_42232_43241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (10))){
var inst_42161 = (state_42204[(7)]);
var inst_42177 = (state_42204[(2)]);
var inst_42182 = (inst_42161 + (1));
var inst_42161__$1 = inst_42182;
var state_42204__$1 = (function (){var statearr_42233 = state_42204;
(statearr_42233[(7)] = inst_42161__$1);

(statearr_42233[(14)] = inst_42177);

return statearr_42233;
})();
var statearr_42234_43242 = state_42204__$1;
(statearr_42234_43242[(2)] = null);

(statearr_42234_43242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (8))){
var inst_42186 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
var statearr_42236_43243 = state_42204__$1;
(statearr_42236_43243[(2)] = inst_42186);

(statearr_42236_43243[(1)] = (5));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42238[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42238[(1)] = (1));

return statearr_42238;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42204){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42204);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42239){var ex__40997__auto__ = e42239;
var statearr_42240_43244 = state_42204;
(statearr_42240_43244[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42204[(4)]))){
var statearr_42241_43245 = state_42204;
(statearr_42241_43245[(1)] = cljs.core.first((state_42204[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43246 = state_42204;
state_42204 = G__43246;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42242 = f__41049__auto__();
(statearr_42242[(6)] = c__41048__auto___43226);

return statearr_42242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42245 = arguments.length;
switch (G__42245) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41048__auto___43248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42280){
var state_val_42281 = (state_42280[(1)]);
if((state_val_42281 === (7))){
var inst_42259 = (state_42280[(7)]);
var inst_42260 = (state_42280[(8)]);
var inst_42259__$1 = (state_42280[(2)]);
var inst_42260__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42259__$1,(0),null);
var inst_42261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42259__$1,(1),null);
var inst_42262 = (inst_42260__$1 == null);
var state_42280__$1 = (function (){var statearr_42287 = state_42280;
(statearr_42287[(9)] = inst_42261);

(statearr_42287[(7)] = inst_42259__$1);

(statearr_42287[(8)] = inst_42260__$1);

return statearr_42287;
})();
if(cljs.core.truth_(inst_42262)){
var statearr_42288_43249 = state_42280__$1;
(statearr_42288_43249[(1)] = (8));

} else {
var statearr_42289_43250 = state_42280__$1;
(statearr_42289_43250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (1))){
var inst_42248 = cljs.core.vec(chs);
var inst_42249 = inst_42248;
var state_42280__$1 = (function (){var statearr_42290 = state_42280;
(statearr_42290[(10)] = inst_42249);

return statearr_42290;
})();
var statearr_42291_43251 = state_42280__$1;
(statearr_42291_43251[(2)] = null);

(statearr_42291_43251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (4))){
var inst_42249 = (state_42280[(10)]);
var state_42280__$1 = state_42280;
return cljs.core.async.ioc_alts_BANG_(state_42280__$1,(7),inst_42249);
} else {
if((state_val_42281 === (6))){
var inst_42276 = (state_42280[(2)]);
var state_42280__$1 = state_42280;
var statearr_42292_43252 = state_42280__$1;
(statearr_42292_43252[(2)] = inst_42276);

(statearr_42292_43252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (3))){
var inst_42278 = (state_42280[(2)]);
var state_42280__$1 = state_42280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42280__$1,inst_42278);
} else {
if((state_val_42281 === (2))){
var inst_42249 = (state_42280[(10)]);
var inst_42252 = cljs.core.count(inst_42249);
var inst_42253 = (inst_42252 > (0));
var state_42280__$1 = state_42280;
if(cljs.core.truth_(inst_42253)){
var statearr_42294_43253 = state_42280__$1;
(statearr_42294_43253[(1)] = (4));

} else {
var statearr_42295_43254 = state_42280__$1;
(statearr_42295_43254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (11))){
var inst_42249 = (state_42280[(10)]);
var inst_42269 = (state_42280[(2)]);
var tmp42293 = inst_42249;
var inst_42249__$1 = tmp42293;
var state_42280__$1 = (function (){var statearr_42296 = state_42280;
(statearr_42296[(10)] = inst_42249__$1);

(statearr_42296[(11)] = inst_42269);

return statearr_42296;
})();
var statearr_42297_43255 = state_42280__$1;
(statearr_42297_43255[(2)] = null);

(statearr_42297_43255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (9))){
var inst_42260 = (state_42280[(8)]);
var state_42280__$1 = state_42280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42280__$1,(11),out,inst_42260);
} else {
if((state_val_42281 === (5))){
var inst_42274 = cljs.core.async.close_BANG_(out);
var state_42280__$1 = state_42280;
var statearr_42298_43256 = state_42280__$1;
(statearr_42298_43256[(2)] = inst_42274);

(statearr_42298_43256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (10))){
var inst_42272 = (state_42280[(2)]);
var state_42280__$1 = state_42280;
var statearr_42299_43257 = state_42280__$1;
(statearr_42299_43257[(2)] = inst_42272);

(statearr_42299_43257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42281 === (8))){
var inst_42261 = (state_42280[(9)]);
var inst_42259 = (state_42280[(7)]);
var inst_42249 = (state_42280[(10)]);
var inst_42260 = (state_42280[(8)]);
var inst_42264 = (function (){var cs = inst_42249;
var vec__42255 = inst_42259;
var v = inst_42260;
var c = inst_42261;
return (function (p1__42243_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42243_SHARP_);
});
})();
var inst_42265 = cljs.core.filterv(inst_42264,inst_42249);
var inst_42249__$1 = inst_42265;
var state_42280__$1 = (function (){var statearr_42305 = state_42280;
(statearr_42305[(10)] = inst_42249__$1);

return statearr_42305;
})();
var statearr_42306_43258 = state_42280__$1;
(statearr_42306_43258[(2)] = null);

(statearr_42306_43258[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42307[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42307[(1)] = (1));

return statearr_42307;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42280){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42280);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42311){var ex__40997__auto__ = e42311;
var statearr_42313_43259 = state_42280;
(statearr_42313_43259[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42280[(4)]))){
var statearr_42314_43260 = state_42280;
(statearr_42314_43260[(1)] = cljs.core.first((state_42280[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43261 = state_42280;
state_42280 = G__43261;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42315 = f__41049__auto__();
(statearr_42315[(6)] = c__41048__auto___43248);

return statearr_42315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42317 = arguments.length;
switch (G__42317) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41048__auto___43265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42343){
var state_val_42344 = (state_42343[(1)]);
if((state_val_42344 === (7))){
var inst_42325 = (state_42343[(7)]);
var inst_42325__$1 = (state_42343[(2)]);
var inst_42326 = (inst_42325__$1 == null);
var inst_42327 = cljs.core.not(inst_42326);
var state_42343__$1 = (function (){var statearr_42345 = state_42343;
(statearr_42345[(7)] = inst_42325__$1);

return statearr_42345;
})();
if(inst_42327){
var statearr_42346_43266 = state_42343__$1;
(statearr_42346_43266[(1)] = (8));

} else {
var statearr_42347_43267 = state_42343__$1;
(statearr_42347_43267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (1))){
var inst_42320 = (0);
var state_42343__$1 = (function (){var statearr_42348 = state_42343;
(statearr_42348[(8)] = inst_42320);

return statearr_42348;
})();
var statearr_42349_43268 = state_42343__$1;
(statearr_42349_43268[(2)] = null);

(statearr_42349_43268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (4))){
var state_42343__$1 = state_42343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42343__$1,(7),ch);
} else {
if((state_val_42344 === (6))){
var inst_42338 = (state_42343[(2)]);
var state_42343__$1 = state_42343;
var statearr_42350_43269 = state_42343__$1;
(statearr_42350_43269[(2)] = inst_42338);

(statearr_42350_43269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (3))){
var inst_42340 = (state_42343[(2)]);
var inst_42341 = cljs.core.async.close_BANG_(out);
var state_42343__$1 = (function (){var statearr_42351 = state_42343;
(statearr_42351[(9)] = inst_42340);

return statearr_42351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42343__$1,inst_42341);
} else {
if((state_val_42344 === (2))){
var inst_42320 = (state_42343[(8)]);
var inst_42322 = (inst_42320 < n);
var state_42343__$1 = state_42343;
if(cljs.core.truth_(inst_42322)){
var statearr_42352_43270 = state_42343__$1;
(statearr_42352_43270[(1)] = (4));

} else {
var statearr_42353_43271 = state_42343__$1;
(statearr_42353_43271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (11))){
var inst_42320 = (state_42343[(8)]);
var inst_42330 = (state_42343[(2)]);
var inst_42331 = (inst_42320 + (1));
var inst_42320__$1 = inst_42331;
var state_42343__$1 = (function (){var statearr_42354 = state_42343;
(statearr_42354[(8)] = inst_42320__$1);

(statearr_42354[(10)] = inst_42330);

return statearr_42354;
})();
var statearr_42355_43272 = state_42343__$1;
(statearr_42355_43272[(2)] = null);

(statearr_42355_43272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (9))){
var state_42343__$1 = state_42343;
var statearr_42356_43273 = state_42343__$1;
(statearr_42356_43273[(2)] = null);

(statearr_42356_43273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (5))){
var state_42343__$1 = state_42343;
var statearr_42357_43274 = state_42343__$1;
(statearr_42357_43274[(2)] = null);

(statearr_42357_43274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (10))){
var inst_42335 = (state_42343[(2)]);
var state_42343__$1 = state_42343;
var statearr_42358_43275 = state_42343__$1;
(statearr_42358_43275[(2)] = inst_42335);

(statearr_42358_43275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (8))){
var inst_42325 = (state_42343[(7)]);
var state_42343__$1 = state_42343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42343__$1,(11),out,inst_42325);
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
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42361[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42361[(1)] = (1));

return statearr_42361;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42343){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42343);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42362){var ex__40997__auto__ = e42362;
var statearr_42363_43277 = state_42343;
(statearr_42363_43277[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42343[(4)]))){
var statearr_42364_43278 = state_42343;
(statearr_42364_43278[(1)] = cljs.core.first((state_42343[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43280 = state_42343;
state_42343 = G__43280;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42365 = f__41049__auto__();
(statearr_42365[(6)] = c__41048__auto___43265);

return statearr_42365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42375 = (function (f,ch,meta42372,_,fn1,meta42376){
this.f = f;
this.ch = ch;
this.meta42372 = meta42372;
this._ = _;
this.fn1 = fn1;
this.meta42376 = meta42376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42377,meta42376__$1){
var self__ = this;
var _42377__$1 = this;
return (new cljs.core.async.t_cljs$core$async42375(self__.f,self__.ch,self__.meta42372,self__._,self__.fn1,meta42376__$1));
}));

(cljs.core.async.t_cljs$core$async42375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42377){
var self__ = this;
var _42377__$1 = this;
return self__.meta42376;
}));

(cljs.core.async.t_cljs$core$async42375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42370_SHARP_){
var G__42378 = (((p1__42370_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42370_SHARP_) : self__.f.call(null,p1__42370_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42378) : f1.call(null,G__42378));
});
}));

(cljs.core.async.t_cljs$core$async42375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42372","meta42372",-948633902,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42371","cljs.core.async/t_cljs$core$async42371",1419050815,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42376","meta42376",-1180495270,null)], null);
}));

(cljs.core.async.t_cljs$core$async42375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42375");

(cljs.core.async.t_cljs$core$async42375.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async42375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42375.
 */
cljs.core.async.__GT_t_cljs$core$async42375 = (function cljs$core$async$__GT_t_cljs$core$async42375(f,ch,meta42372,_,fn1,meta42376){
return (new cljs.core.async.t_cljs$core$async42375(f,ch,meta42372,_,fn1,meta42376));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42371 = (function (f,ch,meta42372){
this.f = f;
this.ch = ch;
this.meta42372 = meta42372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42373,meta42372__$1){
var self__ = this;
var _42373__$1 = this;
return (new cljs.core.async.t_cljs$core$async42371(self__.f,self__.ch,meta42372__$1));
}));

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42373){
var self__ = this;
var _42373__$1 = this;
return self__.meta42372;
}));

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async42375(self__.f,self__.ch,self__.meta42372,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__4996__auto__ = ret;
if(cljs.core.truth_(and__4996__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4996__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42379 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42379) : self__.f.call(null,G__42379));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42372","meta42372",-948633902,null)], null);
}));

(cljs.core.async.t_cljs$core$async42371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42371");

(cljs.core.async.t_cljs$core$async42371.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async42371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42371.
 */
cljs.core.async.__GT_t_cljs$core$async42371 = (function cljs$core$async$__GT_t_cljs$core$async42371(f,ch,meta42372){
return (new cljs.core.async.t_cljs$core$async42371(f,ch,meta42372));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42371(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42383 = (function (f,ch,meta42384){
this.f = f;
this.ch = ch;
this.meta42384 = meta42384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42385,meta42384__$1){
var self__ = this;
var _42385__$1 = this;
return (new cljs.core.async.t_cljs$core$async42383(self__.f,self__.ch,meta42384__$1));
}));

(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42385){
var self__ = this;
var _42385__$1 = this;
return self__.meta42384;
}));

(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42383.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42384","meta42384",-619407760,null)], null);
}));

(cljs.core.async.t_cljs$core$async42383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42383");

(cljs.core.async.t_cljs$core$async42383.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async42383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42383.
 */
cljs.core.async.__GT_t_cljs$core$async42383 = (function cljs$core$async$__GT_t_cljs$core$async42383(f,ch,meta42384){
return (new cljs.core.async.t_cljs$core$async42383(f,ch,meta42384));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42383(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42389 = (function (p,ch,meta42390){
this.p = p;
this.ch = ch;
this.meta42390 = meta42390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42391,meta42390__$1){
var self__ = this;
var _42391__$1 = this;
return (new cljs.core.async.t_cljs$core$async42389(self__.p,self__.ch,meta42390__$1));
}));

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42391){
var self__ = this;
var _42391__$1 = this;
return self__.meta42390;
}));

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42390","meta42390",-877486640,null)], null);
}));

(cljs.core.async.t_cljs$core$async42389.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42389");

(cljs.core.async.t_cljs$core$async42389.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async42389");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42389.
 */
cljs.core.async.__GT_t_cljs$core$async42389 = (function cljs$core$async$__GT_t_cljs$core$async42389(p,ch,meta42390){
return (new cljs.core.async.t_cljs$core$async42389(p,ch,meta42390));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async42389(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42419 = arguments.length;
switch (G__42419) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41048__auto___43282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42440){
var state_val_42441 = (state_42440[(1)]);
if((state_val_42441 === (7))){
var inst_42436 = (state_42440[(2)]);
var state_42440__$1 = state_42440;
var statearr_42442_43283 = state_42440__$1;
(statearr_42442_43283[(2)] = inst_42436);

(statearr_42442_43283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (1))){
var state_42440__$1 = state_42440;
var statearr_42443_43284 = state_42440__$1;
(statearr_42443_43284[(2)] = null);

(statearr_42443_43284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (4))){
var inst_42422 = (state_42440[(7)]);
var inst_42422__$1 = (state_42440[(2)]);
var inst_42423 = (inst_42422__$1 == null);
var state_42440__$1 = (function (){var statearr_42444 = state_42440;
(statearr_42444[(7)] = inst_42422__$1);

return statearr_42444;
})();
if(cljs.core.truth_(inst_42423)){
var statearr_42445_43285 = state_42440__$1;
(statearr_42445_43285[(1)] = (5));

} else {
var statearr_42446_43286 = state_42440__$1;
(statearr_42446_43286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (6))){
var inst_42422 = (state_42440[(7)]);
var inst_42427 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42422) : p.call(null,inst_42422));
var state_42440__$1 = state_42440;
if(cljs.core.truth_(inst_42427)){
var statearr_42447_43287 = state_42440__$1;
(statearr_42447_43287[(1)] = (8));

} else {
var statearr_42448_43288 = state_42440__$1;
(statearr_42448_43288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (3))){
var inst_42438 = (state_42440[(2)]);
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42440__$1,inst_42438);
} else {
if((state_val_42441 === (2))){
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42440__$1,(4),ch);
} else {
if((state_val_42441 === (11))){
var inst_42430 = (state_42440[(2)]);
var state_42440__$1 = state_42440;
var statearr_42449_43289 = state_42440__$1;
(statearr_42449_43289[(2)] = inst_42430);

(statearr_42449_43289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (9))){
var state_42440__$1 = state_42440;
var statearr_42450_43290 = state_42440__$1;
(statearr_42450_43290[(2)] = null);

(statearr_42450_43290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (5))){
var inst_42425 = cljs.core.async.close_BANG_(out);
var state_42440__$1 = state_42440;
var statearr_42452_43291 = state_42440__$1;
(statearr_42452_43291[(2)] = inst_42425);

(statearr_42452_43291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (10))){
var inst_42433 = (state_42440[(2)]);
var state_42440__$1 = (function (){var statearr_42453 = state_42440;
(statearr_42453[(8)] = inst_42433);

return statearr_42453;
})();
var statearr_42454_43292 = state_42440__$1;
(statearr_42454_43292[(2)] = null);

(statearr_42454_43292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42441 === (8))){
var inst_42422 = (state_42440[(7)]);
var state_42440__$1 = state_42440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42440__$1,(11),out,inst_42422);
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
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42456 = [null,null,null,null,null,null,null,null,null];
(statearr_42456[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42456[(1)] = (1));

return statearr_42456;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42440){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42440);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42457){var ex__40997__auto__ = e42457;
var statearr_42458_43293 = state_42440;
(statearr_42458_43293[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42440[(4)]))){
var statearr_42460_43294 = state_42440;
(statearr_42460_43294[(1)] = cljs.core.first((state_42440[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43295 = state_42440;
state_42440 = G__43295;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42462 = f__41049__auto__();
(statearr_42462[(6)] = c__41048__auto___43282);

return statearr_42462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42465 = arguments.length;
switch (G__42465) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42536){
var state_val_42537 = (state_42536[(1)]);
if((state_val_42537 === (7))){
var inst_42527 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
var statearr_42555_43297 = state_42536__$1;
(statearr_42555_43297[(2)] = inst_42527);

(statearr_42555_43297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (20))){
var inst_42496 = (state_42536[(7)]);
var inst_42508 = (state_42536[(2)]);
var inst_42509 = cljs.core.next(inst_42496);
var inst_42482 = inst_42509;
var inst_42483 = null;
var inst_42484 = (0);
var inst_42485 = (0);
var state_42536__$1 = (function (){var statearr_42556 = state_42536;
(statearr_42556[(8)] = inst_42508);

(statearr_42556[(9)] = inst_42482);

(statearr_42556[(10)] = inst_42484);

(statearr_42556[(11)] = inst_42485);

(statearr_42556[(12)] = inst_42483);

return statearr_42556;
})();
var statearr_42558_43302 = state_42536__$1;
(statearr_42558_43302[(2)] = null);

(statearr_42558_43302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (1))){
var state_42536__$1 = state_42536;
var statearr_42560_43303 = state_42536__$1;
(statearr_42560_43303[(2)] = null);

(statearr_42560_43303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (4))){
var inst_42470 = (state_42536[(13)]);
var inst_42470__$1 = (state_42536[(2)]);
var inst_42472 = (inst_42470__$1 == null);
var state_42536__$1 = (function (){var statearr_42561 = state_42536;
(statearr_42561[(13)] = inst_42470__$1);

return statearr_42561;
})();
if(cljs.core.truth_(inst_42472)){
var statearr_42562_43304 = state_42536__$1;
(statearr_42562_43304[(1)] = (5));

} else {
var statearr_42565_43305 = state_42536__$1;
(statearr_42565_43305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (15))){
var state_42536__$1 = state_42536;
var statearr_42570_43306 = state_42536__$1;
(statearr_42570_43306[(2)] = null);

(statearr_42570_43306[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (21))){
var state_42536__$1 = state_42536;
var statearr_42571_43307 = state_42536__$1;
(statearr_42571_43307[(2)] = null);

(statearr_42571_43307[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (13))){
var inst_42482 = (state_42536[(9)]);
var inst_42484 = (state_42536[(10)]);
var inst_42485 = (state_42536[(11)]);
var inst_42483 = (state_42536[(12)]);
var inst_42492 = (state_42536[(2)]);
var inst_42493 = (inst_42485 + (1));
var tmp42567 = inst_42482;
var tmp42568 = inst_42484;
var tmp42569 = inst_42483;
var inst_42482__$1 = tmp42567;
var inst_42483__$1 = tmp42569;
var inst_42484__$1 = tmp42568;
var inst_42485__$1 = inst_42493;
var state_42536__$1 = (function (){var statearr_42572 = state_42536;
(statearr_42572[(9)] = inst_42482__$1);

(statearr_42572[(14)] = inst_42492);

(statearr_42572[(10)] = inst_42484__$1);

(statearr_42572[(11)] = inst_42485__$1);

(statearr_42572[(12)] = inst_42483__$1);

return statearr_42572;
})();
var statearr_42573_43308 = state_42536__$1;
(statearr_42573_43308[(2)] = null);

(statearr_42573_43308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (22))){
var state_42536__$1 = state_42536;
var statearr_42574_43309 = state_42536__$1;
(statearr_42574_43309[(2)] = null);

(statearr_42574_43309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (6))){
var inst_42470 = (state_42536[(13)]);
var inst_42480 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42470) : f.call(null,inst_42470));
var inst_42481 = cljs.core.seq(inst_42480);
var inst_42482 = inst_42481;
var inst_42483 = null;
var inst_42484 = (0);
var inst_42485 = (0);
var state_42536__$1 = (function (){var statearr_42575 = state_42536;
(statearr_42575[(9)] = inst_42482);

(statearr_42575[(10)] = inst_42484);

(statearr_42575[(11)] = inst_42485);

(statearr_42575[(12)] = inst_42483);

return statearr_42575;
})();
var statearr_42576_43310 = state_42536__$1;
(statearr_42576_43310[(2)] = null);

(statearr_42576_43310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (17))){
var inst_42496 = (state_42536[(7)]);
var inst_42501 = cljs.core.chunk_first(inst_42496);
var inst_42502 = cljs.core.chunk_rest(inst_42496);
var inst_42503 = cljs.core.count(inst_42501);
var inst_42482 = inst_42502;
var inst_42483 = inst_42501;
var inst_42484 = inst_42503;
var inst_42485 = (0);
var state_42536__$1 = (function (){var statearr_42577 = state_42536;
(statearr_42577[(9)] = inst_42482);

(statearr_42577[(10)] = inst_42484);

(statearr_42577[(11)] = inst_42485);

(statearr_42577[(12)] = inst_42483);

return statearr_42577;
})();
var statearr_42578_43312 = state_42536__$1;
(statearr_42578_43312[(2)] = null);

(statearr_42578_43312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (3))){
var inst_42529 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42536__$1,inst_42529);
} else {
if((state_val_42537 === (12))){
var inst_42517 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
var statearr_42581_43313 = state_42536__$1;
(statearr_42581_43313[(2)] = inst_42517);

(statearr_42581_43313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (2))){
var state_42536__$1 = state_42536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42536__$1,(4),in$);
} else {
if((state_val_42537 === (23))){
var inst_42525 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
var statearr_42583_43314 = state_42536__$1;
(statearr_42583_43314[(2)] = inst_42525);

(statearr_42583_43314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (19))){
var inst_42512 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
var statearr_42584_43315 = state_42536__$1;
(statearr_42584_43315[(2)] = inst_42512);

(statearr_42584_43315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (11))){
var inst_42482 = (state_42536[(9)]);
var inst_42496 = (state_42536[(7)]);
var inst_42496__$1 = cljs.core.seq(inst_42482);
var state_42536__$1 = (function (){var statearr_42585 = state_42536;
(statearr_42585[(7)] = inst_42496__$1);

return statearr_42585;
})();
if(inst_42496__$1){
var statearr_42586_43320 = state_42536__$1;
(statearr_42586_43320[(1)] = (14));

} else {
var statearr_42587_43321 = state_42536__$1;
(statearr_42587_43321[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (9))){
var inst_42519 = (state_42536[(2)]);
var inst_42520 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42536__$1 = (function (){var statearr_42589 = state_42536;
(statearr_42589[(15)] = inst_42519);

return statearr_42589;
})();
if(cljs.core.truth_(inst_42520)){
var statearr_42590_43322 = state_42536__$1;
(statearr_42590_43322[(1)] = (21));

} else {
var statearr_42591_43323 = state_42536__$1;
(statearr_42591_43323[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (5))){
var inst_42474 = cljs.core.async.close_BANG_(out);
var state_42536__$1 = state_42536;
var statearr_42595_43324 = state_42536__$1;
(statearr_42595_43324[(2)] = inst_42474);

(statearr_42595_43324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (14))){
var inst_42496 = (state_42536[(7)]);
var inst_42498 = cljs.core.chunked_seq_QMARK_(inst_42496);
var state_42536__$1 = state_42536;
if(inst_42498){
var statearr_42596_43325 = state_42536__$1;
(statearr_42596_43325[(1)] = (17));

} else {
var statearr_42597_43326 = state_42536__$1;
(statearr_42597_43326[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (16))){
var inst_42515 = (state_42536[(2)]);
var state_42536__$1 = state_42536;
var statearr_42598_43327 = state_42536__$1;
(statearr_42598_43327[(2)] = inst_42515);

(statearr_42598_43327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42537 === (10))){
var inst_42485 = (state_42536[(11)]);
var inst_42483 = (state_42536[(12)]);
var inst_42490 = cljs.core._nth(inst_42483,inst_42485);
var state_42536__$1 = state_42536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42536__$1,(13),out,inst_42490);
} else {
if((state_val_42537 === (18))){
var inst_42496 = (state_42536[(7)]);
var inst_42506 = cljs.core.first(inst_42496);
var state_42536__$1 = state_42536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42536__$1,(20),out,inst_42506);
} else {
if((state_val_42537 === (8))){
var inst_42484 = (state_42536[(10)]);
var inst_42485 = (state_42536[(11)]);
var inst_42487 = (inst_42485 < inst_42484);
var inst_42488 = inst_42487;
var state_42536__$1 = state_42536;
if(cljs.core.truth_(inst_42488)){
var statearr_42599_43328 = state_42536__$1;
(statearr_42599_43328[(1)] = (10));

} else {
var statearr_42600_43329 = state_42536__$1;
(statearr_42600_43329[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__40994__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40994__auto____0 = (function (){
var statearr_42602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42602[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40994__auto__);

(statearr_42602[(1)] = (1));

return statearr_42602;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40994__auto____1 = (function (state_42536){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42536);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42603){var ex__40997__auto__ = e42603;
var statearr_42604_43330 = state_42536;
(statearr_42604_43330[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42536[(4)]))){
var statearr_42605_43331 = state_42536;
(statearr_42605_43331[(1)] = cljs.core.first((state_42536[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43332 = state_42536;
state_42536 = G__43332;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40994__auto__ = function(state_42536){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40994__auto____1.call(this,state_42536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40994__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40994__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42606 = f__41049__auto__();
(statearr_42606[(6)] = c__41048__auto__);

return statearr_42606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));

return c__41048__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42610 = arguments.length;
switch (G__42610) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42614 = arguments.length;
switch (G__42614) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42616 = arguments.length;
switch (G__42616) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41048__auto___43336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42642){
var state_val_42643 = (state_42642[(1)]);
if((state_val_42643 === (7))){
var inst_42637 = (state_42642[(2)]);
var state_42642__$1 = state_42642;
var statearr_42644_43337 = state_42642__$1;
(statearr_42644_43337[(2)] = inst_42637);

(statearr_42644_43337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (1))){
var inst_42619 = null;
var state_42642__$1 = (function (){var statearr_42645 = state_42642;
(statearr_42645[(7)] = inst_42619);

return statearr_42645;
})();
var statearr_42646_43338 = state_42642__$1;
(statearr_42646_43338[(2)] = null);

(statearr_42646_43338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (4))){
var inst_42622 = (state_42642[(8)]);
var inst_42622__$1 = (state_42642[(2)]);
var inst_42623 = (inst_42622__$1 == null);
var inst_42624 = cljs.core.not(inst_42623);
var state_42642__$1 = (function (){var statearr_42647 = state_42642;
(statearr_42647[(8)] = inst_42622__$1);

return statearr_42647;
})();
if(inst_42624){
var statearr_42648_43339 = state_42642__$1;
(statearr_42648_43339[(1)] = (5));

} else {
var statearr_42649_43340 = state_42642__$1;
(statearr_42649_43340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (6))){
var state_42642__$1 = state_42642;
var statearr_42650_43341 = state_42642__$1;
(statearr_42650_43341[(2)] = null);

(statearr_42650_43341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (3))){
var inst_42639 = (state_42642[(2)]);
var inst_42640 = cljs.core.async.close_BANG_(out);
var state_42642__$1 = (function (){var statearr_42654 = state_42642;
(statearr_42654[(9)] = inst_42639);

return statearr_42654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42642__$1,inst_42640);
} else {
if((state_val_42643 === (2))){
var state_42642__$1 = state_42642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42642__$1,(4),ch);
} else {
if((state_val_42643 === (11))){
var inst_42622 = (state_42642[(8)]);
var inst_42631 = (state_42642[(2)]);
var inst_42619 = inst_42622;
var state_42642__$1 = (function (){var statearr_42656 = state_42642;
(statearr_42656[(10)] = inst_42631);

(statearr_42656[(7)] = inst_42619);

return statearr_42656;
})();
var statearr_42657_43343 = state_42642__$1;
(statearr_42657_43343[(2)] = null);

(statearr_42657_43343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (9))){
var inst_42622 = (state_42642[(8)]);
var state_42642__$1 = state_42642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42642__$1,(11),out,inst_42622);
} else {
if((state_val_42643 === (5))){
var inst_42622 = (state_42642[(8)]);
var inst_42619 = (state_42642[(7)]);
var inst_42626 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42622,inst_42619);
var state_42642__$1 = state_42642;
if(inst_42626){
var statearr_42659_43344 = state_42642__$1;
(statearr_42659_43344[(1)] = (8));

} else {
var statearr_42660_43345 = state_42642__$1;
(statearr_42660_43345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (10))){
var inst_42634 = (state_42642[(2)]);
var state_42642__$1 = state_42642;
var statearr_42661_43346 = state_42642__$1;
(statearr_42661_43346[(2)] = inst_42634);

(statearr_42661_43346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (8))){
var inst_42619 = (state_42642[(7)]);
var tmp42658 = inst_42619;
var inst_42619__$1 = tmp42658;
var state_42642__$1 = (function (){var statearr_42662 = state_42642;
(statearr_42662[(7)] = inst_42619__$1);

return statearr_42662;
})();
var statearr_42663_43347 = state_42642__$1;
(statearr_42663_43347[(2)] = null);

(statearr_42663_43347[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42665[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42665[(1)] = (1));

return statearr_42665;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42642){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42642);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42666){var ex__40997__auto__ = e42666;
var statearr_42667_43350 = state_42642;
(statearr_42667_43350[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42642[(4)]))){
var statearr_42668_43353 = state_42642;
(statearr_42668_43353[(1)] = cljs.core.first((state_42642[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43354 = state_42642;
state_42642 = G__43354;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42669 = f__41049__auto__();
(statearr_42669[(6)] = c__41048__auto___43336);

return statearr_42669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42672 = arguments.length;
switch (G__42672) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41048__auto___43356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42712){
var state_val_42713 = (state_42712[(1)]);
if((state_val_42713 === (7))){
var inst_42708 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
var statearr_42715_43357 = state_42712__$1;
(statearr_42715_43357[(2)] = inst_42708);

(statearr_42715_43357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (1))){
var inst_42675 = (new Array(n));
var inst_42676 = inst_42675;
var inst_42677 = (0);
var state_42712__$1 = (function (){var statearr_42716 = state_42712;
(statearr_42716[(7)] = inst_42677);

(statearr_42716[(8)] = inst_42676);

return statearr_42716;
})();
var statearr_42717_43358 = state_42712__$1;
(statearr_42717_43358[(2)] = null);

(statearr_42717_43358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (4))){
var inst_42680 = (state_42712[(9)]);
var inst_42680__$1 = (state_42712[(2)]);
var inst_42681 = (inst_42680__$1 == null);
var inst_42682 = cljs.core.not(inst_42681);
var state_42712__$1 = (function (){var statearr_42718 = state_42712;
(statearr_42718[(9)] = inst_42680__$1);

return statearr_42718;
})();
if(inst_42682){
var statearr_42719_43359 = state_42712__$1;
(statearr_42719_43359[(1)] = (5));

} else {
var statearr_42720_43360 = state_42712__$1;
(statearr_42720_43360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (15))){
var inst_42702 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
var statearr_42722_43361 = state_42712__$1;
(statearr_42722_43361[(2)] = inst_42702);

(statearr_42722_43361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (13))){
var state_42712__$1 = state_42712;
var statearr_42723_43362 = state_42712__$1;
(statearr_42723_43362[(2)] = null);

(statearr_42723_43362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (6))){
var inst_42677 = (state_42712[(7)]);
var inst_42698 = (inst_42677 > (0));
var state_42712__$1 = state_42712;
if(cljs.core.truth_(inst_42698)){
var statearr_42724_43363 = state_42712__$1;
(statearr_42724_43363[(1)] = (12));

} else {
var statearr_42725_43364 = state_42712__$1;
(statearr_42725_43364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (3))){
var inst_42710 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42712__$1,inst_42710);
} else {
if((state_val_42713 === (12))){
var inst_42676 = (state_42712[(8)]);
var inst_42700 = cljs.core.vec(inst_42676);
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42712__$1,(15),out,inst_42700);
} else {
if((state_val_42713 === (2))){
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42712__$1,(4),ch);
} else {
if((state_val_42713 === (11))){
var inst_42692 = (state_42712[(2)]);
var inst_42693 = (new Array(n));
var inst_42676 = inst_42693;
var inst_42677 = (0);
var state_42712__$1 = (function (){var statearr_42726 = state_42712;
(statearr_42726[(10)] = inst_42692);

(statearr_42726[(7)] = inst_42677);

(statearr_42726[(8)] = inst_42676);

return statearr_42726;
})();
var statearr_42727_43365 = state_42712__$1;
(statearr_42727_43365[(2)] = null);

(statearr_42727_43365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (9))){
var inst_42676 = (state_42712[(8)]);
var inst_42690 = cljs.core.vec(inst_42676);
var state_42712__$1 = state_42712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42712__$1,(11),out,inst_42690);
} else {
if((state_val_42713 === (5))){
var inst_42680 = (state_42712[(9)]);
var inst_42677 = (state_42712[(7)]);
var inst_42685 = (state_42712[(11)]);
var inst_42676 = (state_42712[(8)]);
var inst_42684 = (inst_42676[inst_42677] = inst_42680);
var inst_42685__$1 = (inst_42677 + (1));
var inst_42686 = (inst_42685__$1 < n);
var state_42712__$1 = (function (){var statearr_42729 = state_42712;
(statearr_42729[(12)] = inst_42684);

(statearr_42729[(11)] = inst_42685__$1);

return statearr_42729;
})();
if(cljs.core.truth_(inst_42686)){
var statearr_42730_43366 = state_42712__$1;
(statearr_42730_43366[(1)] = (8));

} else {
var statearr_42731_43367 = state_42712__$1;
(statearr_42731_43367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (14))){
var inst_42705 = (state_42712[(2)]);
var inst_42706 = cljs.core.async.close_BANG_(out);
var state_42712__$1 = (function (){var statearr_42734 = state_42712;
(statearr_42734[(13)] = inst_42705);

return statearr_42734;
})();
var statearr_42735_43368 = state_42712__$1;
(statearr_42735_43368[(2)] = inst_42706);

(statearr_42735_43368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (10))){
var inst_42696 = (state_42712[(2)]);
var state_42712__$1 = state_42712;
var statearr_42736_43369 = state_42712__$1;
(statearr_42736_43369[(2)] = inst_42696);

(statearr_42736_43369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42713 === (8))){
var inst_42685 = (state_42712[(11)]);
var inst_42676 = (state_42712[(8)]);
var tmp42732 = inst_42676;
var inst_42676__$1 = tmp42732;
var inst_42677 = inst_42685;
var state_42712__$1 = (function (){var statearr_42737 = state_42712;
(statearr_42737[(7)] = inst_42677);

(statearr_42737[(8)] = inst_42676__$1);

return statearr_42737;
})();
var statearr_42738_43370 = state_42712__$1;
(statearr_42738_43370[(2)] = null);

(statearr_42738_43370[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42739[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42739[(1)] = (1));

return statearr_42739;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42712){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42712);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42740){var ex__40997__auto__ = e42740;
var statearr_42741_43371 = state_42712;
(statearr_42741_43371[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42712[(4)]))){
var statearr_42742_43373 = state_42712;
(statearr_42742_43373[(1)] = cljs.core.first((state_42712[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43375 = state_42712;
state_42712 = G__43375;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42743 = f__41049__auto__();
(statearr_42743[(6)] = c__41048__auto___43356);

return statearr_42743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42746 = arguments.length;
switch (G__42746) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41048__auto___43379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41049__auto__ = (function (){var switch__40993__auto__ = (function (state_42792){
var state_val_42793 = (state_42792[(1)]);
if((state_val_42793 === (7))){
var inst_42788 = (state_42792[(2)]);
var state_42792__$1 = state_42792;
var statearr_42795_43381 = state_42792__$1;
(statearr_42795_43381[(2)] = inst_42788);

(statearr_42795_43381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (1))){
var inst_42747 = [];
var inst_42748 = inst_42747;
var inst_42749 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42792__$1 = (function (){var statearr_42800 = state_42792;
(statearr_42800[(7)] = inst_42749);

(statearr_42800[(8)] = inst_42748);

return statearr_42800;
})();
var statearr_42801_43382 = state_42792__$1;
(statearr_42801_43382[(2)] = null);

(statearr_42801_43382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (4))){
var inst_42752 = (state_42792[(9)]);
var inst_42752__$1 = (state_42792[(2)]);
var inst_42753 = (inst_42752__$1 == null);
var inst_42754 = cljs.core.not(inst_42753);
var state_42792__$1 = (function (){var statearr_42802 = state_42792;
(statearr_42802[(9)] = inst_42752__$1);

return statearr_42802;
})();
if(inst_42754){
var statearr_42804_43384 = state_42792__$1;
(statearr_42804_43384[(1)] = (5));

} else {
var statearr_42805_43385 = state_42792__$1;
(statearr_42805_43385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (15))){
var inst_42748 = (state_42792[(8)]);
var inst_42780 = cljs.core.vec(inst_42748);
var state_42792__$1 = state_42792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42792__$1,(18),out,inst_42780);
} else {
if((state_val_42793 === (13))){
var inst_42775 = (state_42792[(2)]);
var state_42792__$1 = state_42792;
var statearr_42807_43386 = state_42792__$1;
(statearr_42807_43386[(2)] = inst_42775);

(statearr_42807_43386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (6))){
var inst_42748 = (state_42792[(8)]);
var inst_42777 = inst_42748.length;
var inst_42778 = (inst_42777 > (0));
var state_42792__$1 = state_42792;
if(cljs.core.truth_(inst_42778)){
var statearr_42808_43387 = state_42792__$1;
(statearr_42808_43387[(1)] = (15));

} else {
var statearr_42809_43388 = state_42792__$1;
(statearr_42809_43388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (17))){
var inst_42785 = (state_42792[(2)]);
var inst_42786 = cljs.core.async.close_BANG_(out);
var state_42792__$1 = (function (){var statearr_42810 = state_42792;
(statearr_42810[(10)] = inst_42785);

return statearr_42810;
})();
var statearr_42811_43389 = state_42792__$1;
(statearr_42811_43389[(2)] = inst_42786);

(statearr_42811_43389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (3))){
var inst_42790 = (state_42792[(2)]);
var state_42792__$1 = state_42792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42792__$1,inst_42790);
} else {
if((state_val_42793 === (12))){
var inst_42748 = (state_42792[(8)]);
var inst_42768 = cljs.core.vec(inst_42748);
var state_42792__$1 = state_42792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42792__$1,(14),out,inst_42768);
} else {
if((state_val_42793 === (2))){
var state_42792__$1 = state_42792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42792__$1,(4),ch);
} else {
if((state_val_42793 === (11))){
var inst_42748 = (state_42792[(8)]);
var inst_42752 = (state_42792[(9)]);
var inst_42756 = (state_42792[(11)]);
var inst_42765 = inst_42748.push(inst_42752);
var tmp42812 = inst_42748;
var inst_42748__$1 = tmp42812;
var inst_42749 = inst_42756;
var state_42792__$1 = (function (){var statearr_42813 = state_42792;
(statearr_42813[(7)] = inst_42749);

(statearr_42813[(8)] = inst_42748__$1);

(statearr_42813[(12)] = inst_42765);

return statearr_42813;
})();
var statearr_42814_43390 = state_42792__$1;
(statearr_42814_43390[(2)] = null);

(statearr_42814_43390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (9))){
var inst_42749 = (state_42792[(7)]);
var inst_42761 = cljs.core.keyword_identical_QMARK_(inst_42749,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42792__$1 = state_42792;
var statearr_42817_43391 = state_42792__$1;
(statearr_42817_43391[(2)] = inst_42761);

(statearr_42817_43391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (5))){
var inst_42749 = (state_42792[(7)]);
var inst_42752 = (state_42792[(9)]);
var inst_42758 = (state_42792[(13)]);
var inst_42756 = (state_42792[(11)]);
var inst_42756__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42752) : f.call(null,inst_42752));
var inst_42758__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42756__$1,inst_42749);
var state_42792__$1 = (function (){var statearr_42821 = state_42792;
(statearr_42821[(13)] = inst_42758__$1);

(statearr_42821[(11)] = inst_42756__$1);

return statearr_42821;
})();
if(inst_42758__$1){
var statearr_42822_43394 = state_42792__$1;
(statearr_42822_43394[(1)] = (8));

} else {
var statearr_42823_43395 = state_42792__$1;
(statearr_42823_43395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (14))){
var inst_42752 = (state_42792[(9)]);
var inst_42756 = (state_42792[(11)]);
var inst_42770 = (state_42792[(2)]);
var inst_42771 = [];
var inst_42772 = inst_42771.push(inst_42752);
var inst_42748 = inst_42771;
var inst_42749 = inst_42756;
var state_42792__$1 = (function (){var statearr_42824 = state_42792;
(statearr_42824[(7)] = inst_42749);

(statearr_42824[(14)] = inst_42772);

(statearr_42824[(8)] = inst_42748);

(statearr_42824[(15)] = inst_42770);

return statearr_42824;
})();
var statearr_42825_43398 = state_42792__$1;
(statearr_42825_43398[(2)] = null);

(statearr_42825_43398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (16))){
var state_42792__$1 = state_42792;
var statearr_42828_43399 = state_42792__$1;
(statearr_42828_43399[(2)] = null);

(statearr_42828_43399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (10))){
var inst_42763 = (state_42792[(2)]);
var state_42792__$1 = state_42792;
if(cljs.core.truth_(inst_42763)){
var statearr_42830_43400 = state_42792__$1;
(statearr_42830_43400[(1)] = (11));

} else {
var statearr_42831_43401 = state_42792__$1;
(statearr_42831_43401[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (18))){
var inst_42782 = (state_42792[(2)]);
var state_42792__$1 = state_42792;
var statearr_42832_43403 = state_42792__$1;
(statearr_42832_43403[(2)] = inst_42782);

(statearr_42832_43403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42793 === (8))){
var inst_42758 = (state_42792[(13)]);
var state_42792__$1 = state_42792;
var statearr_42834_43405 = state_42792__$1;
(statearr_42834_43405[(2)] = inst_42758);

(statearr_42834_43405[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40994__auto__ = null;
var cljs$core$async$state_machine__40994__auto____0 = (function (){
var statearr_42835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42835[(0)] = cljs$core$async$state_machine__40994__auto__);

(statearr_42835[(1)] = (1));

return statearr_42835;
});
var cljs$core$async$state_machine__40994__auto____1 = (function (state_42792){
while(true){
var ret_value__40995__auto__ = (function (){try{while(true){
var result__40996__auto__ = switch__40993__auto__(state_42792);
if(cljs.core.keyword_identical_QMARK_(result__40996__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40996__auto__;
}
break;
}
}catch (e42836){var ex__40997__auto__ = e42836;
var statearr_42837_43408 = state_42792;
(statearr_42837_43408[(2)] = ex__40997__auto__);


if(cljs.core.seq((state_42792[(4)]))){
var statearr_42838_43409 = state_42792;
(statearr_42838_43409[(1)] = cljs.core.first((state_42792[(4)])));

} else {
throw ex__40997__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43410 = state_42792;
state_42792 = G__43410;
continue;
} else {
return ret_value__40995__auto__;
}
break;
}
});
cljs$core$async$state_machine__40994__auto__ = function(state_42792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40994__auto____1.call(this,state_42792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40994__auto____0;
cljs$core$async$state_machine__40994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40994__auto____1;
return cljs$core$async$state_machine__40994__auto__;
})()
})();
var state__41050__auto__ = (function (){var statearr_42839 = f__41049__auto__();
(statearr_42839[(6)] = c__41048__auto___43379);

return statearr_42839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41050__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
