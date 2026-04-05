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
cljs.core.async.t_cljs$core$async14414 = (function (f,blockable,meta14415){
this.f = f;
this.blockable = blockable;
this.meta14415 = meta14415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14416,meta14415__$1){
var self__ = this;
var _14416__$1 = this;
return (new cljs.core.async.t_cljs$core$async14414(self__.f,self__.blockable,meta14415__$1));
}));

(cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14416){
var self__ = this;
var _14416__$1 = this;
return self__.meta14415;
}));

(cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14415","meta14415",-217206662,null)], null);
}));

(cljs.core.async.t_cljs$core$async14414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14414");

(cljs.core.async.t_cljs$core$async14414.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14414.
 */
cljs.core.async.__GT_t_cljs$core$async14414 = (function cljs$core$async$__GT_t_cljs$core$async14414(f,blockable,meta14415){
return (new cljs.core.async.t_cljs$core$async14414(f,blockable,meta14415));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14402 = arguments.length;
switch (G__14402) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14414(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14440 = arguments.length;
switch (G__14440) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
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
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14442 = arguments.length;
switch (G__14442) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__14449 = arguments.length;
switch (G__14449) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17686 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17686) : fn1.call(null,val_17686));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17686) : fn1.call(null,val_17686));
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
var G__14459 = arguments.length;
switch (G__14459) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
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
var n__5741__auto___17692 = n;
var x_17693 = (0);
while(true){
if((x_17693 < n__5741__auto___17692)){
(a[x_17693] = x_17693);

var G__17694 = (x_17693 + (1));
x_17693 = G__17694;
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
cljs.core.async.t_cljs$core$async14479 = (function (flag,meta14480){
this.flag = flag;
this.meta14480 = meta14480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14481,meta14480__$1){
var self__ = this;
var _14481__$1 = this;
return (new cljs.core.async.t_cljs$core$async14479(self__.flag,meta14480__$1));
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14481){
var self__ = this;
var _14481__$1 = this;
return self__.meta14480;
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14480","meta14480",-1054677042,null)], null);
}));

(cljs.core.async.t_cljs$core$async14479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14479");

(cljs.core.async.t_cljs$core$async14479.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14479.
 */
cljs.core.async.__GT_t_cljs$core$async14479 = (function cljs$core$async$__GT_t_cljs$core$async14479(flag,meta14480){
return (new cljs.core.async.t_cljs$core$async14479(flag,meta14480));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14479(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14490 = (function (flag,cb,meta14491){
this.flag = flag;
this.cb = cb;
this.meta14491 = meta14491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14492,meta14491__$1){
var self__ = this;
var _14492__$1 = this;
return (new cljs.core.async.t_cljs$core$async14490(self__.flag,self__.cb,meta14491__$1));
}));

(cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14492){
var self__ = this;
var _14492__$1 = this;
return self__.meta14491;
}));

(cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14491","meta14491",984102047,null)], null);
}));

(cljs.core.async.t_cljs$core$async14490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14490");

(cljs.core.async.t_cljs$core$async14490.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14490.
 */
cljs.core.async.__GT_t_cljs$core$async14490 = (function cljs$core$async$__GT_t_cljs$core$async14490(flag,cb,meta14491){
return (new cljs.core.async.t_cljs$core$async14490(flag,cb,meta14491));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14490(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_17700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17700)){
if((!(((port_17700.cljs$core$IFn$_invoke$arity$1 ? port_17700.cljs$core$IFn$_invoke$arity$1((1)) : port_17700.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__17701 = (i + (1));
i = G__17701;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14499_SHARP_){
var G__14513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14499_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14513) : fret.call(null,G__14513));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14501_SHARP_){
var G__14514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14501_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14514) : fret.call(null,G__14514));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17704 = (i + (1));
i = G__17704;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
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
var args__5882__auto__ = [];
var len__5876__auto___17705 = arguments.length;
var i__5877__auto___17706 = (0);
while(true){
if((i__5877__auto___17706 < len__5876__auto___17705)){
args__5882__auto__.push((arguments[i__5877__auto___17706]));

var G__17707 = (i__5877__auto___17706 + (1));
i__5877__auto___17706 = G__17707;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14529){
var map__14534 = p__14529;
var map__14534__$1 = cljs.core.__destructure_map(map__14534);
var opts = map__14534__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14518){
var G__14519 = cljs.core.first(seq14518);
var seq14518__$1 = cljs.core.next(seq14518);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14519,seq14518__$1);
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
var G__14557 = arguments.length;
switch (G__14557) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14330__auto___17717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_14627){
var state_val_14628 = (state_14627[(1)]);
if((state_val_14628 === (7))){
var inst_14615 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14630_17718 = state_14627__$1;
(statearr_14630_17718[(2)] = inst_14615);

(statearr_14630_17718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (1))){
var state_14627__$1 = state_14627;
var statearr_14631_17720 = state_14627__$1;
(statearr_14631_17720[(2)] = null);

(statearr_14631_17720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (4))){
var inst_14595 = (state_14627[(7)]);
var inst_14595__$1 = (state_14627[(2)]);
var inst_14596 = (inst_14595__$1 == null);
var state_14627__$1 = (function (){var statearr_14632 = state_14627;
(statearr_14632[(7)] = inst_14595__$1);

return statearr_14632;
})();
if(cljs.core.truth_(inst_14596)){
var statearr_14641_17723 = state_14627__$1;
(statearr_14641_17723[(1)] = (5));

} else {
var statearr_14642_17724 = state_14627__$1;
(statearr_14642_17724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (13))){
var state_14627__$1 = state_14627;
var statearr_14643_17729 = state_14627__$1;
(statearr_14643_17729[(2)] = null);

(statearr_14643_17729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (6))){
var inst_14595 = (state_14627[(7)]);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14627__$1,(11),to,inst_14595);
} else {
if((state_val_14628 === (3))){
var inst_14625 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14627__$1,inst_14625);
} else {
if((state_val_14628 === (12))){
var state_14627__$1 = state_14627;
var statearr_14649_17730 = state_14627__$1;
(statearr_14649_17730[(2)] = null);

(statearr_14649_17730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (2))){
var state_14627__$1 = state_14627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14627__$1,(4),from);
} else {
if((state_val_14628 === (11))){
var inst_14607 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
if(cljs.core.truth_(inst_14607)){
var statearr_14650_17731 = state_14627__$1;
(statearr_14650_17731[(1)] = (12));

} else {
var statearr_14655_17732 = state_14627__$1;
(statearr_14655_17732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (9))){
var state_14627__$1 = state_14627;
var statearr_14658_17733 = state_14627__$1;
(statearr_14658_17733[(2)] = null);

(statearr_14658_17733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (5))){
var state_14627__$1 = state_14627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14662_17734 = state_14627__$1;
(statearr_14662_17734[(1)] = (8));

} else {
var statearr_14663_17737 = state_14627__$1;
(statearr_14663_17737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (14))){
var inst_14613 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14664_17738 = state_14627__$1;
(statearr_14664_17738[(2)] = inst_14613);

(statearr_14664_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (10))){
var inst_14603 = (state_14627[(2)]);
var state_14627__$1 = state_14627;
var statearr_14665_17739 = state_14627__$1;
(statearr_14665_17739[(2)] = inst_14603);

(statearr_14665_17739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14628 === (8))){
var inst_14600 = cljs.core.async.close_BANG_(to);
var state_14627__$1 = state_14627;
var statearr_14666_17740 = state_14627__$1;
(statearr_14666_17740[(2)] = inst_14600);

(statearr_14666_17740[(1)] = (10));


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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_14671 = [null,null,null,null,null,null,null,null];
(statearr_14671[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_14671[(1)] = (1));

return statearr_14671;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_14627){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_14627);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e14672){var ex__14151__auto__ = e14672;
var statearr_14673_17741 = state_14627;
(statearr_14673_17741[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_14627[(4)]))){
var statearr_14674_17742 = state_14627;
(statearr_14674_17742[(1)] = cljs.core.first((state_14627[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17743 = state_14627;
state_14627 = G__17743;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_14627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_14627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_14675 = f__14331__auto__();
(statearr_14675[(6)] = c__14330__auto___17717);

return statearr_14675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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
var process__$1 = (function (p__14687){
var vec__14689 = p__14687;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14689,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14689,(1),null);
var job = vec__14689;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14330__auto___17749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_14696){
var state_val_14697 = (state_14696[(1)]);
if((state_val_14697 === (1))){
var state_14696__$1 = state_14696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14696__$1,(2),res,v);
} else {
if((state_val_14697 === (2))){
var inst_14693 = (state_14696[(2)]);
var inst_14694 = cljs.core.async.close_BANG_(res);
var state_14696__$1 = (function (){var statearr_14698 = state_14696;
(statearr_14698[(7)] = inst_14693);

return statearr_14698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14696__$1,inst_14694);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0 = (function (){
var statearr_14699 = [null,null,null,null,null,null,null,null];
(statearr_14699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__);

(statearr_14699[(1)] = (1));

return statearr_14699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1 = (function (state_14696){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_14696);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e14700){var ex__14151__auto__ = e14700;
var statearr_14701_17758 = state_14696;
(statearr_14701_17758[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_14696[(4)]))){
var statearr_14702_17760 = state_14696;
(statearr_14702_17760[(1)] = cljs.core.first((state_14696[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17761 = state_14696;
state_14696 = G__17761;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = function(state_14696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1.call(this,state_14696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_14703 = f__14331__auto__();
(statearr_14703[(6)] = c__14330__auto___17749);

return statearr_14703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14706){
var vec__14707 = p__14706;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(1),null);
var job = vec__14707;
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
var n__5741__auto___17771 = n;
var __17772 = (0);
while(true){
if((__17772 < n__5741__auto___17771)){
var G__14710_17779 = type;
var G__14710_17780__$1 = (((G__14710_17779 instanceof cljs.core.Keyword))?G__14710_17779.fqn:null);
switch (G__14710_17780__$1) {
case "compute":
var c__14330__auto___17782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17772,c__14330__auto___17782,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async){
return (function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = ((function (__17772,c__14330__auto___17782,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async){
return (function (state_14728){
var state_val_14729 = (state_14728[(1)]);
if((state_val_14729 === (1))){
var state_14728__$1 = state_14728;
var statearr_14730_17783 = state_14728__$1;
(statearr_14730_17783[(2)] = null);

(statearr_14730_17783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (2))){
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14728__$1,(4),jobs);
} else {
if((state_val_14729 === (3))){
var inst_14726 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14728__$1,inst_14726);
} else {
if((state_val_14729 === (4))){
var inst_14718 = (state_14728[(2)]);
var inst_14719 = process__$1(inst_14718);
var state_14728__$1 = state_14728;
if(cljs.core.truth_(inst_14719)){
var statearr_14735_17790 = state_14728__$1;
(statearr_14735_17790[(1)] = (5));

} else {
var statearr_14736_17791 = state_14728__$1;
(statearr_14736_17791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (5))){
var state_14728__$1 = state_14728;
var statearr_14737_17792 = state_14728__$1;
(statearr_14737_17792[(2)] = null);

(statearr_14737_17792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (6))){
var state_14728__$1 = state_14728;
var statearr_14738_17794 = state_14728__$1;
(statearr_14738_17794[(2)] = null);

(statearr_14738_17794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (7))){
var inst_14724 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14739_17795 = state_14728__$1;
(statearr_14739_17795[(2)] = inst_14724);

(statearr_14739_17795[(1)] = (3));


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
});})(__17772,c__14330__auto___17782,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async))
;
return ((function (__17772,switch__14147__auto__,c__14330__auto___17782,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0 = (function (){
var statearr_14750 = [null,null,null,null,null,null,null];
(statearr_14750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__);

(statearr_14750[(1)] = (1));

return statearr_14750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1 = (function (state_14728){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_14728);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e14751){var ex__14151__auto__ = e14751;
var statearr_14759_17796 = state_14728;
(statearr_14759_17796[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_14728[(4)]))){
var statearr_14760_17797 = state_14728;
(statearr_14760_17797[(1)] = cljs.core.first((state_14728[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17806 = state_14728;
state_14728 = G__17806;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = function(state_14728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1.call(this,state_14728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__;
})()
;})(__17772,switch__14147__auto__,c__14330__auto___17782,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async))
})();
var state__14332__auto__ = (function (){var statearr_14763 = f__14331__auto__();
(statearr_14763[(6)] = c__14330__auto___17782);

return statearr_14763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
});})(__17772,c__14330__auto___17782,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async))
);


break;
case "async":
var c__14330__auto___17814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17772,c__14330__auto___17814,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async){
return (function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = ((function (__17772,c__14330__auto___17814,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async){
return (function (state_14781){
var state_val_14782 = (state_14781[(1)]);
if((state_val_14782 === (1))){
var state_14781__$1 = state_14781;
var statearr_14787_17819 = state_14781__$1;
(statearr_14787_17819[(2)] = null);

(statearr_14787_17819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (2))){
var state_14781__$1 = state_14781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14781__$1,(4),jobs);
} else {
if((state_val_14782 === (3))){
var inst_14779 = (state_14781[(2)]);
var state_14781__$1 = state_14781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14781__$1,inst_14779);
} else {
if((state_val_14782 === (4))){
var inst_14771 = (state_14781[(2)]);
var inst_14772 = async(inst_14771);
var state_14781__$1 = state_14781;
if(cljs.core.truth_(inst_14772)){
var statearr_14791_17828 = state_14781__$1;
(statearr_14791_17828[(1)] = (5));

} else {
var statearr_14792_17829 = state_14781__$1;
(statearr_14792_17829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (5))){
var state_14781__$1 = state_14781;
var statearr_14794_17832 = state_14781__$1;
(statearr_14794_17832[(2)] = null);

(statearr_14794_17832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (6))){
var state_14781__$1 = state_14781;
var statearr_14795_17835 = state_14781__$1;
(statearr_14795_17835[(2)] = null);

(statearr_14795_17835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14782 === (7))){
var inst_14777 = (state_14781[(2)]);
var state_14781__$1 = state_14781;
var statearr_14796_17838 = state_14781__$1;
(statearr_14796_17838[(2)] = inst_14777);

(statearr_14796_17838[(1)] = (3));


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
});})(__17772,c__14330__auto___17814,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async))
;
return ((function (__17772,switch__14147__auto__,c__14330__auto___17814,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0 = (function (){
var statearr_14798 = [null,null,null,null,null,null,null];
(statearr_14798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__);

(statearr_14798[(1)] = (1));

return statearr_14798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1 = (function (state_14781){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_14781);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e14799){var ex__14151__auto__ = e14799;
var statearr_14800_17844 = state_14781;
(statearr_14800_17844[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_14781[(4)]))){
var statearr_14801_17845 = state_14781;
(statearr_14801_17845[(1)] = cljs.core.first((state_14781[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17846 = state_14781;
state_14781 = G__17846;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = function(state_14781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1.call(this,state_14781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__;
})()
;})(__17772,switch__14147__auto__,c__14330__auto___17814,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async))
})();
var state__14332__auto__ = (function (){var statearr_14804 = f__14331__auto__();
(statearr_14804[(6)] = c__14330__auto___17814);

return statearr_14804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
});})(__17772,c__14330__auto___17814,G__14710_17779,G__14710_17780__$1,n__5741__auto___17771,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14710_17780__$1))));

}

var G__17849 = (__17772 + (1));
__17772 = G__17849;
continue;
} else {
}
break;
}

var c__14330__auto___17850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_14829){
var state_val_14830 = (state_14829[(1)]);
if((state_val_14830 === (7))){
var inst_14824 = (state_14829[(2)]);
var state_14829__$1 = state_14829;
var statearr_14840_17852 = state_14829__$1;
(statearr_14840_17852[(2)] = inst_14824);

(statearr_14840_17852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (1))){
var state_14829__$1 = state_14829;
var statearr_14841_17853 = state_14829__$1;
(statearr_14841_17853[(2)] = null);

(statearr_14841_17853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (4))){
var inst_14808 = (state_14829[(7)]);
var inst_14808__$1 = (state_14829[(2)]);
var inst_14810 = (inst_14808__$1 == null);
var state_14829__$1 = (function (){var statearr_14842 = state_14829;
(statearr_14842[(7)] = inst_14808__$1);

return statearr_14842;
})();
if(cljs.core.truth_(inst_14810)){
var statearr_14843_17854 = state_14829__$1;
(statearr_14843_17854[(1)] = (5));

} else {
var statearr_14844_17855 = state_14829__$1;
(statearr_14844_17855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (6))){
var inst_14808 = (state_14829[(7)]);
var inst_14814 = (state_14829[(8)]);
var inst_14814__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14815 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14816 = [inst_14808,inst_14814__$1];
var inst_14817 = (new cljs.core.PersistentVector(null,2,(5),inst_14815,inst_14816,null));
var state_14829__$1 = (function (){var statearr_14845 = state_14829;
(statearr_14845[(8)] = inst_14814__$1);

return statearr_14845;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14829__$1,(8),jobs,inst_14817);
} else {
if((state_val_14830 === (3))){
var inst_14827 = (state_14829[(2)]);
var state_14829__$1 = state_14829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14829__$1,inst_14827);
} else {
if((state_val_14830 === (2))){
var state_14829__$1 = state_14829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14829__$1,(4),from);
} else {
if((state_val_14830 === (9))){
var inst_14821 = (state_14829[(2)]);
var state_14829__$1 = (function (){var statearr_14846 = state_14829;
(statearr_14846[(9)] = inst_14821);

return statearr_14846;
})();
var statearr_14847_17862 = state_14829__$1;
(statearr_14847_17862[(2)] = null);

(statearr_14847_17862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (5))){
var inst_14812 = cljs.core.async.close_BANG_(jobs);
var state_14829__$1 = state_14829;
var statearr_14848_17868 = state_14829__$1;
(statearr_14848_17868[(2)] = inst_14812);

(statearr_14848_17868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (8))){
var inst_14814 = (state_14829[(8)]);
var inst_14819 = (state_14829[(2)]);
var state_14829__$1 = (function (){var statearr_14853 = state_14829;
(statearr_14853[(10)] = inst_14819);

return statearr_14853;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14829__$1,(9),results,inst_14814);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0 = (function (){
var statearr_14865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__);

(statearr_14865[(1)] = (1));

return statearr_14865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1 = (function (state_14829){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_14829);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e14874){var ex__14151__auto__ = e14874;
var statearr_14875_17878 = state_14829;
(statearr_14875_17878[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_14829[(4)]))){
var statearr_14878_17879 = state_14829;
(statearr_14878_17879[(1)] = cljs.core.first((state_14829[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17880 = state_14829;
state_14829 = G__17880;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = function(state_14829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1.call(this,state_14829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_14880 = f__14331__auto__();
(statearr_14880[(6)] = c__14330__auto___17850);

return statearr_14880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));


var c__14330__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_14930){
var state_val_14931 = (state_14930[(1)]);
if((state_val_14931 === (7))){
var inst_14926 = (state_14930[(2)]);
var state_14930__$1 = state_14930;
var statearr_14945_17881 = state_14930__$1;
(statearr_14945_17881[(2)] = inst_14926);

(statearr_14945_17881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (20))){
var state_14930__$1 = state_14930;
var statearr_14948_17882 = state_14930__$1;
(statearr_14948_17882[(2)] = null);

(statearr_14948_17882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (1))){
var state_14930__$1 = state_14930;
var statearr_14953_17883 = state_14930__$1;
(statearr_14953_17883[(2)] = null);

(statearr_14953_17883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (4))){
var inst_14888 = (state_14930[(7)]);
var inst_14888__$1 = (state_14930[(2)]);
var inst_14890 = (inst_14888__$1 == null);
var state_14930__$1 = (function (){var statearr_14954 = state_14930;
(statearr_14954[(7)] = inst_14888__$1);

return statearr_14954;
})();
if(cljs.core.truth_(inst_14890)){
var statearr_14955_17884 = state_14930__$1;
(statearr_14955_17884[(1)] = (5));

} else {
var statearr_14956_17885 = state_14930__$1;
(statearr_14956_17885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (15))){
var inst_14904 = (state_14930[(8)]);
var state_14930__$1 = state_14930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14930__$1,(18),to,inst_14904);
} else {
if((state_val_14931 === (21))){
var inst_14921 = (state_14930[(2)]);
var state_14930__$1 = state_14930;
var statearr_14961_17886 = state_14930__$1;
(statearr_14961_17886[(2)] = inst_14921);

(statearr_14961_17886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (13))){
var inst_14923 = (state_14930[(2)]);
var state_14930__$1 = (function (){var statearr_14962 = state_14930;
(statearr_14962[(9)] = inst_14923);

return statearr_14962;
})();
var statearr_14963_17887 = state_14930__$1;
(statearr_14963_17887[(2)] = null);

(statearr_14963_17887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (6))){
var inst_14888 = (state_14930[(7)]);
var state_14930__$1 = state_14930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14930__$1,(11),inst_14888);
} else {
if((state_val_14931 === (17))){
var inst_14915 = (state_14930[(2)]);
var state_14930__$1 = state_14930;
if(cljs.core.truth_(inst_14915)){
var statearr_14964_17888 = state_14930__$1;
(statearr_14964_17888[(1)] = (19));

} else {
var statearr_14972_17889 = state_14930__$1;
(statearr_14972_17889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (3))){
var inst_14928 = (state_14930[(2)]);
var state_14930__$1 = state_14930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14930__$1,inst_14928);
} else {
if((state_val_14931 === (12))){
var inst_14899 = (state_14930[(10)]);
var state_14930__$1 = state_14930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14930__$1,(14),inst_14899);
} else {
if((state_val_14931 === (2))){
var state_14930__$1 = state_14930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14930__$1,(4),results);
} else {
if((state_val_14931 === (19))){
var state_14930__$1 = state_14930;
var statearr_14989_17891 = state_14930__$1;
(statearr_14989_17891[(2)] = null);

(statearr_14989_17891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (11))){
var inst_14899 = (state_14930[(2)]);
var state_14930__$1 = (function (){var statearr_14990 = state_14930;
(statearr_14990[(10)] = inst_14899);

return statearr_14990;
})();
var statearr_14991_17892 = state_14930__$1;
(statearr_14991_17892[(2)] = null);

(statearr_14991_17892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (9))){
var state_14930__$1 = state_14930;
var statearr_14992_17896 = state_14930__$1;
(statearr_14992_17896[(2)] = null);

(statearr_14992_17896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (5))){
var state_14930__$1 = state_14930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14993_17897 = state_14930__$1;
(statearr_14993_17897[(1)] = (8));

} else {
var statearr_14994_17898 = state_14930__$1;
(statearr_14994_17898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (14))){
var inst_14904 = (state_14930[(8)]);
var inst_14909 = (state_14930[(11)]);
var inst_14904__$1 = (state_14930[(2)]);
var inst_14908 = (inst_14904__$1 == null);
var inst_14909__$1 = cljs.core.not(inst_14908);
var state_14930__$1 = (function (){var statearr_14995 = state_14930;
(statearr_14995[(8)] = inst_14904__$1);

(statearr_14995[(11)] = inst_14909__$1);

return statearr_14995;
})();
if(inst_14909__$1){
var statearr_14996_17899 = state_14930__$1;
(statearr_14996_17899[(1)] = (15));

} else {
var statearr_14997_17900 = state_14930__$1;
(statearr_14997_17900[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (16))){
var inst_14909 = (state_14930[(11)]);
var state_14930__$1 = state_14930;
var statearr_15007_17904 = state_14930__$1;
(statearr_15007_17904[(2)] = inst_14909);

(statearr_15007_17904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (10))){
var inst_14896 = (state_14930[(2)]);
var state_14930__$1 = state_14930;
var statearr_15018_17905 = state_14930__$1;
(statearr_15018_17905[(2)] = inst_14896);

(statearr_15018_17905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (18))){
var inst_14912 = (state_14930[(2)]);
var state_14930__$1 = state_14930;
var statearr_15023_17908 = state_14930__$1;
(statearr_15023_17908[(2)] = inst_14912);

(statearr_15023_17908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14931 === (8))){
var inst_14893 = cljs.core.async.close_BANG_(to);
var state_14930__$1 = state_14930;
var statearr_15031_17909 = state_14930__$1;
(statearr_15031_17909[(2)] = inst_14893);

(statearr_15031_17909[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0 = (function (){
var statearr_15036 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__);

(statearr_15036[(1)] = (1));

return statearr_15036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1 = (function (state_14930){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_14930);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e15101){var ex__14151__auto__ = e15101;
var statearr_15102_17918 = state_14930;
(statearr_15102_17918[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_14930[(4)]))){
var statearr_15103_17920 = state_14930;
(statearr_15103_17920[(1)] = cljs.core.first((state_14930[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17922 = state_14930;
state_14930 = G__17922;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__ = function(state_14930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1.call(this,state_14930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14148__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_15116 = f__14331__auto__();
(statearr_15116[(6)] = c__14330__auto__);

return statearr_15116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));

return c__14330__auto__;
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
var G__15127 = arguments.length;
switch (G__15127) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__15133 = arguments.length;
switch (G__15133) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__15150 = arguments.length;
switch (G__15150) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14330__auto___17933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_15177){
var state_val_15178 = (state_15177[(1)]);
if((state_val_15178 === (7))){
var inst_15173 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
var statearr_15184_17934 = state_15177__$1;
(statearr_15184_17934[(2)] = inst_15173);

(statearr_15184_17934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (1))){
var state_15177__$1 = state_15177;
var statearr_15186_17935 = state_15177__$1;
(statearr_15186_17935[(2)] = null);

(statearr_15186_17935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (4))){
var inst_15153 = (state_15177[(7)]);
var inst_15153__$1 = (state_15177[(2)]);
var inst_15154 = (inst_15153__$1 == null);
var state_15177__$1 = (function (){var statearr_15190 = state_15177;
(statearr_15190[(7)] = inst_15153__$1);

return statearr_15190;
})();
if(cljs.core.truth_(inst_15154)){
var statearr_15191_17941 = state_15177__$1;
(statearr_15191_17941[(1)] = (5));

} else {
var statearr_15193_17943 = state_15177__$1;
(statearr_15193_17943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (13))){
var state_15177__$1 = state_15177;
var statearr_15194_17944 = state_15177__$1;
(statearr_15194_17944[(2)] = null);

(statearr_15194_17944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (6))){
var inst_15153 = (state_15177[(7)]);
var inst_15160 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15153) : p.call(null,inst_15153));
var state_15177__$1 = state_15177;
if(cljs.core.truth_(inst_15160)){
var statearr_15196_17948 = state_15177__$1;
(statearr_15196_17948[(1)] = (9));

} else {
var statearr_15198_17949 = state_15177__$1;
(statearr_15198_17949[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (3))){
var inst_15175 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15177__$1,inst_15175);
} else {
if((state_val_15178 === (12))){
var state_15177__$1 = state_15177;
var statearr_15205_17950 = state_15177__$1;
(statearr_15205_17950[(2)] = null);

(statearr_15205_17950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (2))){
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15177__$1,(4),ch);
} else {
if((state_val_15178 === (11))){
var inst_15153 = (state_15177[(7)]);
var inst_15164 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15177__$1,(8),inst_15164,inst_15153);
} else {
if((state_val_15178 === (9))){
var state_15177__$1 = state_15177;
var statearr_15208_17955 = state_15177__$1;
(statearr_15208_17955[(2)] = tc);

(statearr_15208_17955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (5))){
var inst_15156 = cljs.core.async.close_BANG_(tc);
var inst_15158 = cljs.core.async.close_BANG_(fc);
var state_15177__$1 = (function (){var statearr_15209 = state_15177;
(statearr_15209[(8)] = inst_15156);

return statearr_15209;
})();
var statearr_15210_17962 = state_15177__$1;
(statearr_15210_17962[(2)] = inst_15158);

(statearr_15210_17962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (14))){
var inst_15171 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
var statearr_15212_17965 = state_15177__$1;
(statearr_15212_17965[(2)] = inst_15171);

(statearr_15212_17965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (10))){
var state_15177__$1 = state_15177;
var statearr_15214_17969 = state_15177__$1;
(statearr_15214_17969[(2)] = fc);

(statearr_15214_17969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15178 === (8))){
var inst_15166 = (state_15177[(2)]);
var state_15177__$1 = state_15177;
if(cljs.core.truth_(inst_15166)){
var statearr_15218_17974 = state_15177__$1;
(statearr_15218_17974[(1)] = (12));

} else {
var statearr_15219_17975 = state_15177__$1;
(statearr_15219_17975[(1)] = (13));

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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_15220 = [null,null,null,null,null,null,null,null,null];
(statearr_15220[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_15220[(1)] = (1));

return statearr_15220;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_15177){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_15177);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e15221){var ex__14151__auto__ = e15221;
var statearr_15222_17979 = state_15177;
(statearr_15222_17979[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_15177[(4)]))){
var statearr_15223_17980 = state_15177;
(statearr_15223_17980[(1)] = cljs.core.first((state_15177[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17984 = state_15177;
state_15177 = G__17984;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_15177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_15177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_15225 = f__14331__auto__();
(statearr_15225[(6)] = c__14330__auto___17933);

return statearr_15225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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
var c__14330__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_15258){
var state_val_15259 = (state_15258[(1)]);
if((state_val_15259 === (7))){
var inst_15253 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
var statearr_15264_17986 = state_15258__$1;
(statearr_15264_17986[(2)] = inst_15253);

(statearr_15264_17986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (1))){
var inst_15235 = init;
var inst_15236 = inst_15235;
var state_15258__$1 = (function (){var statearr_15265 = state_15258;
(statearr_15265[(7)] = inst_15236);

return statearr_15265;
})();
var statearr_15266_17990 = state_15258__$1;
(statearr_15266_17990[(2)] = null);

(statearr_15266_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (4))){
var inst_15240 = (state_15258[(8)]);
var inst_15240__$1 = (state_15258[(2)]);
var inst_15241 = (inst_15240__$1 == null);
var state_15258__$1 = (function (){var statearr_15272 = state_15258;
(statearr_15272[(8)] = inst_15240__$1);

return statearr_15272;
})();
if(cljs.core.truth_(inst_15241)){
var statearr_15273_17991 = state_15258__$1;
(statearr_15273_17991[(1)] = (5));

} else {
var statearr_15277_17992 = state_15258__$1;
(statearr_15277_17992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (6))){
var inst_15236 = (state_15258[(7)]);
var inst_15240 = (state_15258[(8)]);
var inst_15244 = (state_15258[(9)]);
var inst_15244__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15236,inst_15240) : f.call(null,inst_15236,inst_15240));
var inst_15245 = cljs.core.reduced_QMARK_(inst_15244__$1);
var state_15258__$1 = (function (){var statearr_15280 = state_15258;
(statearr_15280[(9)] = inst_15244__$1);

return statearr_15280;
})();
if(inst_15245){
var statearr_15281_17993 = state_15258__$1;
(statearr_15281_17993[(1)] = (8));

} else {
var statearr_15282_17994 = state_15258__$1;
(statearr_15282_17994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (3))){
var inst_15255 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15258__$1,inst_15255);
} else {
if((state_val_15259 === (2))){
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15258__$1,(4),ch);
} else {
if((state_val_15259 === (9))){
var inst_15244 = (state_15258[(9)]);
var inst_15236 = inst_15244;
var state_15258__$1 = (function (){var statearr_15285 = state_15258;
(statearr_15285[(7)] = inst_15236);

return statearr_15285;
})();
var statearr_15288_17998 = state_15258__$1;
(statearr_15288_17998[(2)] = null);

(statearr_15288_17998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (5))){
var inst_15236 = (state_15258[(7)]);
var state_15258__$1 = state_15258;
var statearr_15290_17999 = state_15258__$1;
(statearr_15290_17999[(2)] = inst_15236);

(statearr_15290_17999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (10))){
var inst_15251 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
var statearr_15291_18000 = state_15258__$1;
(statearr_15291_18000[(2)] = inst_15251);

(statearr_15291_18000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (8))){
var inst_15244 = (state_15258[(9)]);
var inst_15247 = cljs.core.deref(inst_15244);
var state_15258__$1 = state_15258;
var statearr_15292_18005 = state_15258__$1;
(statearr_15292_18005[(2)] = inst_15247);

(statearr_15292_18005[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14148__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14148__auto____0 = (function (){
var statearr_15293 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15293[(0)] = cljs$core$async$reduce_$_state_machine__14148__auto__);

(statearr_15293[(1)] = (1));

return statearr_15293;
});
var cljs$core$async$reduce_$_state_machine__14148__auto____1 = (function (state_15258){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_15258);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e15298){var ex__14151__auto__ = e15298;
var statearr_15299_18007 = state_15258;
(statearr_15299_18007[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_15258[(4)]))){
var statearr_15302_18008 = state_15258;
(statearr_15302_18008[(1)] = cljs.core.first((state_15258[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18009 = state_15258;
state_15258 = G__18009;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14148__auto__ = function(state_15258){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14148__auto____1.call(this,state_15258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14148__auto____0;
cljs$core$async$reduce_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14148__auto____1;
return cljs$core$async$reduce_$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_15306 = f__14331__auto__();
(statearr_15306[(6)] = c__14330__auto__);

return statearr_15306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));

return c__14330__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14330__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_15322){
var state_val_15323 = (state_15322[(1)]);
if((state_val_15323 === (1))){
var inst_15316 = cljs.core.async.reduce(f__$1,init,ch);
var state_15322__$1 = state_15322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15322__$1,(2),inst_15316);
} else {
if((state_val_15323 === (2))){
var inst_15318 = (state_15322[(2)]);
var inst_15320 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15318) : f__$1.call(null,inst_15318));
var state_15322__$1 = state_15322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15322__$1,inst_15320);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14148__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14148__auto____0 = (function (){
var statearr_15354 = [null,null,null,null,null,null,null];
(statearr_15354[(0)] = cljs$core$async$transduce_$_state_machine__14148__auto__);

(statearr_15354[(1)] = (1));

return statearr_15354;
});
var cljs$core$async$transduce_$_state_machine__14148__auto____1 = (function (state_15322){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_15322);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e15373){var ex__14151__auto__ = e15373;
var statearr_15374_18019 = state_15322;
(statearr_15374_18019[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_15322[(4)]))){
var statearr_15379_18020 = state_15322;
(statearr_15379_18020[(1)] = cljs.core.first((state_15322[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18026 = state_15322;
state_15322 = G__18026;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14148__auto__ = function(state_15322){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14148__auto____1.call(this,state_15322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14148__auto____0;
cljs$core$async$transduce_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14148__auto____1;
return cljs$core$async$transduce_$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_15389 = f__14331__auto__();
(statearr_15389[(6)] = c__14330__auto__);

return statearr_15389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));

return c__14330__auto__;
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
var G__15408 = arguments.length;
switch (G__15408) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14330__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_15523){
var state_val_15524 = (state_15523[(1)]);
if((state_val_15524 === (7))){
var inst_15500 = (state_15523[(2)]);
var state_15523__$1 = state_15523;
var statearr_15526_18028 = state_15523__$1;
(statearr_15526_18028[(2)] = inst_15500);

(statearr_15526_18028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (1))){
var inst_15494 = cljs.core.seq(coll);
var inst_15495 = inst_15494;
var state_15523__$1 = (function (){var statearr_15528 = state_15523;
(statearr_15528[(7)] = inst_15495);

return statearr_15528;
})();
var statearr_15533_18032 = state_15523__$1;
(statearr_15533_18032[(2)] = null);

(statearr_15533_18032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (4))){
var inst_15495 = (state_15523[(7)]);
var inst_15498 = cljs.core.first(inst_15495);
var state_15523__$1 = state_15523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15523__$1,(7),ch,inst_15498);
} else {
if((state_val_15524 === (13))){
var inst_15516 = (state_15523[(2)]);
var state_15523__$1 = state_15523;
var statearr_15548_18034 = state_15523__$1;
(statearr_15548_18034[(2)] = inst_15516);

(statearr_15548_18034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (6))){
var inst_15504 = (state_15523[(2)]);
var state_15523__$1 = state_15523;
if(cljs.core.truth_(inst_15504)){
var statearr_15550_18037 = state_15523__$1;
(statearr_15550_18037[(1)] = (8));

} else {
var statearr_15552_18038 = state_15523__$1;
(statearr_15552_18038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (3))){
var inst_15520 = (state_15523[(2)]);
var state_15523__$1 = state_15523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15523__$1,inst_15520);
} else {
if((state_val_15524 === (12))){
var state_15523__$1 = state_15523;
var statearr_15556_18039 = state_15523__$1;
(statearr_15556_18039[(2)] = null);

(statearr_15556_18039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (2))){
var inst_15495 = (state_15523[(7)]);
var state_15523__$1 = state_15523;
if(cljs.core.truth_(inst_15495)){
var statearr_15560_18040 = state_15523__$1;
(statearr_15560_18040[(1)] = (4));

} else {
var statearr_15561_18041 = state_15523__$1;
(statearr_15561_18041[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (11))){
var inst_15513 = cljs.core.async.close_BANG_(ch);
var state_15523__$1 = state_15523;
var statearr_15565_18043 = state_15523__$1;
(statearr_15565_18043[(2)] = inst_15513);

(statearr_15565_18043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (9))){
var state_15523__$1 = state_15523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15566_18045 = state_15523__$1;
(statearr_15566_18045[(1)] = (11));

} else {
var statearr_15567_18046 = state_15523__$1;
(statearr_15567_18046[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (5))){
var inst_15495 = (state_15523[(7)]);
var state_15523__$1 = state_15523;
var statearr_15568_18048 = state_15523__$1;
(statearr_15568_18048[(2)] = inst_15495);

(statearr_15568_18048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (10))){
var inst_15518 = (state_15523[(2)]);
var state_15523__$1 = state_15523;
var statearr_15569_18049 = state_15523__$1;
(statearr_15569_18049[(2)] = inst_15518);

(statearr_15569_18049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15524 === (8))){
var inst_15495 = (state_15523[(7)]);
var inst_15507 = cljs.core.next(inst_15495);
var inst_15495__$1 = inst_15507;
var state_15523__$1 = (function (){var statearr_15571 = state_15523;
(statearr_15571[(7)] = inst_15495__$1);

return statearr_15571;
})();
var statearr_15572_18052 = state_15523__$1;
(statearr_15572_18052[(2)] = null);

(statearr_15572_18052[(1)] = (2));


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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_15573 = [null,null,null,null,null,null,null,null];
(statearr_15573[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_15573[(1)] = (1));

return statearr_15573;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_15523){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_15523);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e15574){var ex__14151__auto__ = e15574;
var statearr_15576_18060 = state_15523;
(statearr_15576_18060[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_15523[(4)]))){
var statearr_15580_18061 = state_15523;
(statearr_15580_18061[(1)] = cljs.core.first((state_15523[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18062 = state_15523;
state_15523 = G__18062;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_15523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_15523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_15584 = f__14331__auto__();
(statearr_15584[(6)] = c__14330__auto__);

return statearr_15584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));

return c__14330__auto__;
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
var G__15594 = arguments.length;
switch (G__15594) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_18067 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18067(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18070 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18070(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18071 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18071(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18075 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18075(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15655 = (function (ch,cs,meta15656){
this.ch = ch;
this.cs = cs;
this.meta15656 = meta15656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15657,meta15656__$1){
var self__ = this;
var _15657__$1 = this;
return (new cljs.core.async.t_cljs$core$async15655(self__.ch,self__.cs,meta15656__$1));
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15657){
var self__ = this;
var _15657__$1 = this;
return self__.meta15656;
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15655.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15656","meta15656",-142145197,null)], null);
}));

(cljs.core.async.t_cljs$core$async15655.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15655");

(cljs.core.async.t_cljs$core$async15655.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15655");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15655.
 */
cljs.core.async.__GT_t_cljs$core$async15655 = (function cljs$core$async$__GT_t_cljs$core$async15655(ch,cs,meta15656){
return (new cljs.core.async.t_cljs$core$async15655(ch,cs,meta15656));
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
var m = (new cljs.core.async.t_cljs$core$async15655(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14330__auto___18079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_15848){
var state_val_15849 = (state_15848[(1)]);
if((state_val_15849 === (7))){
var inst_15840 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15855_18084 = state_15848__$1;
(statearr_15855_18084[(2)] = inst_15840);

(statearr_15855_18084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (20))){
var inst_15706 = (state_15848[(7)]);
var inst_15722 = cljs.core.first(inst_15706);
var inst_15723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15722,(0),null);
var inst_15724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15722,(1),null);
var state_15848__$1 = (function (){var statearr_15862 = state_15848;
(statearr_15862[(8)] = inst_15723);

return statearr_15862;
})();
if(cljs.core.truth_(inst_15724)){
var statearr_15863_18088 = state_15848__$1;
(statearr_15863_18088[(1)] = (22));

} else {
var statearr_15864_18089 = state_15848__$1;
(statearr_15864_18089[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (27))){
var inst_15756 = (state_15848[(9)]);
var inst_15758 = (state_15848[(10)]);
var inst_15763 = (state_15848[(11)]);
var inst_15671 = (state_15848[(12)]);
var inst_15763__$1 = cljs.core._nth(inst_15756,inst_15758);
var inst_15764 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15763__$1,inst_15671,done);
var state_15848__$1 = (function (){var statearr_15865 = state_15848;
(statearr_15865[(11)] = inst_15763__$1);

return statearr_15865;
})();
if(cljs.core.truth_(inst_15764)){
var statearr_15866_18090 = state_15848__$1;
(statearr_15866_18090[(1)] = (30));

} else {
var statearr_15867_18091 = state_15848__$1;
(statearr_15867_18091[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (1))){
var state_15848__$1 = state_15848;
var statearr_15868_18092 = state_15848__$1;
(statearr_15868_18092[(2)] = null);

(statearr_15868_18092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (24))){
var inst_15706 = (state_15848[(7)]);
var inst_15729 = (state_15848[(2)]);
var inst_15730 = cljs.core.next(inst_15706);
var inst_15683 = inst_15730;
var inst_15684 = null;
var inst_15685 = (0);
var inst_15686 = (0);
var state_15848__$1 = (function (){var statearr_15870 = state_15848;
(statearr_15870[(13)] = inst_15729);

(statearr_15870[(14)] = inst_15683);

(statearr_15870[(15)] = inst_15684);

(statearr_15870[(16)] = inst_15685);

(statearr_15870[(17)] = inst_15686);

return statearr_15870;
})();
var statearr_15872_18093 = state_15848__$1;
(statearr_15872_18093[(2)] = null);

(statearr_15872_18093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (39))){
var state_15848__$1 = state_15848;
var statearr_15877_18094 = state_15848__$1;
(statearr_15877_18094[(2)] = null);

(statearr_15877_18094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (4))){
var inst_15671 = (state_15848[(12)]);
var inst_15671__$1 = (state_15848[(2)]);
var inst_15673 = (inst_15671__$1 == null);
var state_15848__$1 = (function (){var statearr_15882 = state_15848;
(statearr_15882[(12)] = inst_15671__$1);

return statearr_15882;
})();
if(cljs.core.truth_(inst_15673)){
var statearr_15883_18099 = state_15848__$1;
(statearr_15883_18099[(1)] = (5));

} else {
var statearr_15884_18100 = state_15848__$1;
(statearr_15884_18100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (15))){
var inst_15686 = (state_15848[(17)]);
var inst_15683 = (state_15848[(14)]);
var inst_15684 = (state_15848[(15)]);
var inst_15685 = (state_15848[(16)]);
var inst_15701 = (state_15848[(2)]);
var inst_15702 = (inst_15686 + (1));
var tmp15873 = inst_15683;
var tmp15874 = inst_15685;
var tmp15875 = inst_15684;
var inst_15683__$1 = tmp15873;
var inst_15684__$1 = tmp15875;
var inst_15685__$1 = tmp15874;
var inst_15686__$1 = inst_15702;
var state_15848__$1 = (function (){var statearr_15888 = state_15848;
(statearr_15888[(18)] = inst_15701);

(statearr_15888[(14)] = inst_15683__$1);

(statearr_15888[(15)] = inst_15684__$1);

(statearr_15888[(16)] = inst_15685__$1);

(statearr_15888[(17)] = inst_15686__$1);

return statearr_15888;
})();
var statearr_15889_18108 = state_15848__$1;
(statearr_15889_18108[(2)] = null);

(statearr_15889_18108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (21))){
var inst_15733 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15893_18109 = state_15848__$1;
(statearr_15893_18109[(2)] = inst_15733);

(statearr_15893_18109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (31))){
var inst_15763 = (state_15848[(11)]);
var inst_15786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15763);
var state_15848__$1 = state_15848;
var statearr_15896_18110 = state_15848__$1;
(statearr_15896_18110[(2)] = inst_15786);

(statearr_15896_18110[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (32))){
var inst_15758 = (state_15848[(10)]);
var inst_15755 = (state_15848[(19)]);
var inst_15756 = (state_15848[(9)]);
var inst_15757 = (state_15848[(20)]);
var inst_15789 = (state_15848[(2)]);
var inst_15791 = (inst_15758 + (1));
var tmp15890 = inst_15756;
var tmp15891 = inst_15757;
var tmp15892 = inst_15755;
var inst_15755__$1 = tmp15892;
var inst_15756__$1 = tmp15890;
var inst_15757__$1 = tmp15891;
var inst_15758__$1 = inst_15791;
var state_15848__$1 = (function (){var statearr_15900 = state_15848;
(statearr_15900[(21)] = inst_15789);

(statearr_15900[(19)] = inst_15755__$1);

(statearr_15900[(9)] = inst_15756__$1);

(statearr_15900[(20)] = inst_15757__$1);

(statearr_15900[(10)] = inst_15758__$1);

return statearr_15900;
})();
var statearr_15903_18111 = state_15848__$1;
(statearr_15903_18111[(2)] = null);

(statearr_15903_18111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (40))){
var inst_15809 = (state_15848[(22)]);
var inst_15814 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15809);
var state_15848__$1 = state_15848;
var statearr_15910_18112 = state_15848__$1;
(statearr_15910_18112[(2)] = inst_15814);

(statearr_15910_18112[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (33))){
var inst_15797 = (state_15848[(23)]);
var inst_15802 = cljs.core.chunked_seq_QMARK_(inst_15797);
var state_15848__$1 = state_15848;
if(inst_15802){
var statearr_15911_18116 = state_15848__$1;
(statearr_15911_18116[(1)] = (36));

} else {
var statearr_15912_18117 = state_15848__$1;
(statearr_15912_18117[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (13))){
var inst_15695 = (state_15848[(24)]);
var inst_15698 = cljs.core.async.close_BANG_(inst_15695);
var state_15848__$1 = state_15848;
var statearr_15915_18121 = state_15848__$1;
(statearr_15915_18121[(2)] = inst_15698);

(statearr_15915_18121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (22))){
var inst_15723 = (state_15848[(8)]);
var inst_15726 = cljs.core.async.close_BANG_(inst_15723);
var state_15848__$1 = state_15848;
var statearr_15919_18126 = state_15848__$1;
(statearr_15919_18126[(2)] = inst_15726);

(statearr_15919_18126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (36))){
var inst_15797 = (state_15848[(23)]);
var inst_15804 = cljs.core.chunk_first(inst_15797);
var inst_15805 = cljs.core.chunk_rest(inst_15797);
var inst_15806 = cljs.core.count(inst_15804);
var inst_15755 = inst_15805;
var inst_15756 = inst_15804;
var inst_15757 = inst_15806;
var inst_15758 = (0);
var state_15848__$1 = (function (){var statearr_15920 = state_15848;
(statearr_15920[(19)] = inst_15755);

(statearr_15920[(9)] = inst_15756);

(statearr_15920[(20)] = inst_15757);

(statearr_15920[(10)] = inst_15758);

return statearr_15920;
})();
var statearr_15923_18133 = state_15848__$1;
(statearr_15923_18133[(2)] = null);

(statearr_15923_18133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (41))){
var inst_15797 = (state_15848[(23)]);
var inst_15816 = (state_15848[(2)]);
var inst_15817 = cljs.core.next(inst_15797);
var inst_15755 = inst_15817;
var inst_15756 = null;
var inst_15757 = (0);
var inst_15758 = (0);
var state_15848__$1 = (function (){var statearr_15926 = state_15848;
(statearr_15926[(25)] = inst_15816);

(statearr_15926[(19)] = inst_15755);

(statearr_15926[(9)] = inst_15756);

(statearr_15926[(20)] = inst_15757);

(statearr_15926[(10)] = inst_15758);

return statearr_15926;
})();
var statearr_15927_18136 = state_15848__$1;
(statearr_15927_18136[(2)] = null);

(statearr_15927_18136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (43))){
var state_15848__$1 = state_15848;
var statearr_15928_18137 = state_15848__$1;
(statearr_15928_18137[(2)] = null);

(statearr_15928_18137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (29))){
var inst_15825 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15930_18138 = state_15848__$1;
(statearr_15930_18138[(2)] = inst_15825);

(statearr_15930_18138[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (44))){
var inst_15835 = (state_15848[(2)]);
var state_15848__$1 = (function (){var statearr_15931 = state_15848;
(statearr_15931[(26)] = inst_15835);

return statearr_15931;
})();
var statearr_15932_18139 = state_15848__$1;
(statearr_15932_18139[(2)] = null);

(statearr_15932_18139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (6))){
var inst_15744 = (state_15848[(27)]);
var inst_15743 = cljs.core.deref(cs);
var inst_15744__$1 = cljs.core.keys(inst_15743);
var inst_15746 = cljs.core.count(inst_15744__$1);
var inst_15747 = cljs.core.reset_BANG_(dctr,inst_15746);
var inst_15753 = cljs.core.seq(inst_15744__$1);
var inst_15755 = inst_15753;
var inst_15756 = null;
var inst_15757 = (0);
var inst_15758 = (0);
var state_15848__$1 = (function (){var statearr_15935 = state_15848;
(statearr_15935[(27)] = inst_15744__$1);

(statearr_15935[(28)] = inst_15747);

(statearr_15935[(19)] = inst_15755);

(statearr_15935[(9)] = inst_15756);

(statearr_15935[(20)] = inst_15757);

(statearr_15935[(10)] = inst_15758);

return statearr_15935;
})();
var statearr_15936_18150 = state_15848__$1;
(statearr_15936_18150[(2)] = null);

(statearr_15936_18150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (28))){
var inst_15755 = (state_15848[(19)]);
var inst_15797 = (state_15848[(23)]);
var inst_15797__$1 = cljs.core.seq(inst_15755);
var state_15848__$1 = (function (){var statearr_15937 = state_15848;
(statearr_15937[(23)] = inst_15797__$1);

return statearr_15937;
})();
if(inst_15797__$1){
var statearr_15938_18154 = state_15848__$1;
(statearr_15938_18154[(1)] = (33));

} else {
var statearr_15939_18155 = state_15848__$1;
(statearr_15939_18155[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (25))){
var inst_15758 = (state_15848[(10)]);
var inst_15757 = (state_15848[(20)]);
var inst_15760 = (inst_15758 < inst_15757);
var inst_15761 = inst_15760;
var state_15848__$1 = state_15848;
if(cljs.core.truth_(inst_15761)){
var statearr_15944_18156 = state_15848__$1;
(statearr_15944_18156[(1)] = (27));

} else {
var statearr_15945_18157 = state_15848__$1;
(statearr_15945_18157[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (34))){
var state_15848__$1 = state_15848;
var statearr_15947_18161 = state_15848__$1;
(statearr_15947_18161[(2)] = null);

(statearr_15947_18161[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (17))){
var state_15848__$1 = state_15848;
var statearr_15950_18162 = state_15848__$1;
(statearr_15950_18162[(2)] = null);

(statearr_15950_18162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (3))){
var inst_15844 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15848__$1,inst_15844);
} else {
if((state_val_15849 === (12))){
var inst_15739 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15951_18190 = state_15848__$1;
(statearr_15951_18190[(2)] = inst_15739);

(statearr_15951_18190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (2))){
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15848__$1,(4),ch);
} else {
if((state_val_15849 === (23))){
var state_15848__$1 = state_15848;
var statearr_15952_18193 = state_15848__$1;
(statearr_15952_18193[(2)] = null);

(statearr_15952_18193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (35))){
var inst_15823 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15956_18194 = state_15848__$1;
(statearr_15956_18194[(2)] = inst_15823);

(statearr_15956_18194[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (19))){
var inst_15706 = (state_15848[(7)]);
var inst_15711 = cljs.core.chunk_first(inst_15706);
var inst_15713 = cljs.core.chunk_rest(inst_15706);
var inst_15714 = cljs.core.count(inst_15711);
var inst_15683 = inst_15713;
var inst_15684 = inst_15711;
var inst_15685 = inst_15714;
var inst_15686 = (0);
var state_15848__$1 = (function (){var statearr_15957 = state_15848;
(statearr_15957[(14)] = inst_15683);

(statearr_15957[(15)] = inst_15684);

(statearr_15957[(16)] = inst_15685);

(statearr_15957[(17)] = inst_15686);

return statearr_15957;
})();
var statearr_15962_18195 = state_15848__$1;
(statearr_15962_18195[(2)] = null);

(statearr_15962_18195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (11))){
var inst_15683 = (state_15848[(14)]);
var inst_15706 = (state_15848[(7)]);
var inst_15706__$1 = cljs.core.seq(inst_15683);
var state_15848__$1 = (function (){var statearr_15963 = state_15848;
(statearr_15963[(7)] = inst_15706__$1);

return statearr_15963;
})();
if(inst_15706__$1){
var statearr_15964_18196 = state_15848__$1;
(statearr_15964_18196[(1)] = (16));

} else {
var statearr_15965_18197 = state_15848__$1;
(statearr_15965_18197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (9))){
var inst_15741 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15966_18198 = state_15848__$1;
(statearr_15966_18198[(2)] = inst_15741);

(statearr_15966_18198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (5))){
var inst_15681 = cljs.core.deref(cs);
var inst_15682 = cljs.core.seq(inst_15681);
var inst_15683 = inst_15682;
var inst_15684 = null;
var inst_15685 = (0);
var inst_15686 = (0);
var state_15848__$1 = (function (){var statearr_15970 = state_15848;
(statearr_15970[(14)] = inst_15683);

(statearr_15970[(15)] = inst_15684);

(statearr_15970[(16)] = inst_15685);

(statearr_15970[(17)] = inst_15686);

return statearr_15970;
})();
var statearr_15971_18199 = state_15848__$1;
(statearr_15971_18199[(2)] = null);

(statearr_15971_18199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (14))){
var state_15848__$1 = state_15848;
var statearr_15974_18201 = state_15848__$1;
(statearr_15974_18201[(2)] = null);

(statearr_15974_18201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (45))){
var inst_15831 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15975_18204 = state_15848__$1;
(statearr_15975_18204[(2)] = inst_15831);

(statearr_15975_18204[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (26))){
var inst_15744 = (state_15848[(27)]);
var inst_15827 = (state_15848[(2)]);
var inst_15828 = cljs.core.seq(inst_15744);
var state_15848__$1 = (function (){var statearr_15976 = state_15848;
(statearr_15976[(29)] = inst_15827);

return statearr_15976;
})();
if(inst_15828){
var statearr_15977_18205 = state_15848__$1;
(statearr_15977_18205[(1)] = (42));

} else {
var statearr_15978_18206 = state_15848__$1;
(statearr_15978_18206[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (16))){
var inst_15706 = (state_15848[(7)]);
var inst_15708 = cljs.core.chunked_seq_QMARK_(inst_15706);
var state_15848__$1 = state_15848;
if(inst_15708){
var statearr_15980_18219 = state_15848__$1;
(statearr_15980_18219[(1)] = (19));

} else {
var statearr_15984_18220 = state_15848__$1;
(statearr_15984_18220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (38))){
var inst_15820 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15986_18221 = state_15848__$1;
(statearr_15986_18221[(2)] = inst_15820);

(statearr_15986_18221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (30))){
var state_15848__$1 = state_15848;
var statearr_15987_18222 = state_15848__$1;
(statearr_15987_18222[(2)] = null);

(statearr_15987_18222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (10))){
var inst_15684 = (state_15848[(15)]);
var inst_15686 = (state_15848[(17)]);
var inst_15694 = cljs.core._nth(inst_15684,inst_15686);
var inst_15695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15694,(0),null);
var inst_15696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15694,(1),null);
var state_15848__$1 = (function (){var statearr_15989 = state_15848;
(statearr_15989[(24)] = inst_15695);

return statearr_15989;
})();
if(cljs.core.truth_(inst_15696)){
var statearr_15990_18223 = state_15848__$1;
(statearr_15990_18223[(1)] = (13));

} else {
var statearr_15992_18224 = state_15848__$1;
(statearr_15992_18224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (18))){
var inst_15737 = (state_15848[(2)]);
var state_15848__$1 = state_15848;
var statearr_15994_18226 = state_15848__$1;
(statearr_15994_18226[(2)] = inst_15737);

(statearr_15994_18226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (42))){
var state_15848__$1 = state_15848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15848__$1,(45),dchan);
} else {
if((state_val_15849 === (37))){
var inst_15797 = (state_15848[(23)]);
var inst_15809 = (state_15848[(22)]);
var inst_15671 = (state_15848[(12)]);
var inst_15809__$1 = cljs.core.first(inst_15797);
var inst_15810 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15809__$1,inst_15671,done);
var state_15848__$1 = (function (){var statearr_15996 = state_15848;
(statearr_15996[(22)] = inst_15809__$1);

return statearr_15996;
})();
if(cljs.core.truth_(inst_15810)){
var statearr_15997_18229 = state_15848__$1;
(statearr_15997_18229[(1)] = (39));

} else {
var statearr_15998_18230 = state_15848__$1;
(statearr_15998_18230[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15849 === (8))){
var inst_15686 = (state_15848[(17)]);
var inst_15685 = (state_15848[(16)]);
var inst_15688 = (inst_15686 < inst_15685);
var inst_15689 = inst_15688;
var state_15848__$1 = state_15848;
if(cljs.core.truth_(inst_15689)){
var statearr_15999_18231 = state_15848__$1;
(statearr_15999_18231[(1)] = (10));

} else {
var statearr_16001_18232 = state_15848__$1;
(statearr_16001_18232[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14148__auto__ = null;
var cljs$core$async$mult_$_state_machine__14148__auto____0 = (function (){
var statearr_16009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16009[(0)] = cljs$core$async$mult_$_state_machine__14148__auto__);

(statearr_16009[(1)] = (1));

return statearr_16009;
});
var cljs$core$async$mult_$_state_machine__14148__auto____1 = (function (state_15848){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_15848);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e16013){var ex__14151__auto__ = e16013;
var statearr_16014_18234 = state_15848;
(statearr_16014_18234[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_15848[(4)]))){
var statearr_16015_18235 = state_15848;
(statearr_16015_18235[(1)] = cljs.core.first((state_15848[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18236 = state_15848;
state_15848 = G__18236;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14148__auto__ = function(state_15848){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14148__auto____1.call(this,state_15848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14148__auto____0;
cljs$core$async$mult_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14148__auto____1;
return cljs$core$async$mult_$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_16019 = f__14331__auto__();
(statearr_16019[(6)] = c__14330__auto___18079);

return statearr_16019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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
var G__16024 = arguments.length;
switch (G__16024) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

var cljs$core$async$Mix$admix_STAR_$dyn_18239 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18239(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18240 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18240(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18244 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18244(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18246 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18246(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18258 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18258(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18271 = arguments.length;
var i__5877__auto___18275 = (0);
while(true){
if((i__5877__auto___18275 < len__5876__auto___18271)){
args__5882__auto__.push((arguments[i__5877__auto___18275]));

var G__18276 = (i__5877__auto___18275 + (1));
i__5877__auto___18275 = G__18276;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16060){
var map__16061 = p__16060;
var map__16061__$1 = cljs.core.__destructure_map(map__16061);
var opts = map__16061__$1;
var statearr_16062_18284 = state;
(statearr_16062_18284[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16063_18285 = state;
(statearr_16063_18285[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16065_18288 = state;
(statearr_16065_18288[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16054){
var G__16055 = cljs.core.first(seq16054);
var seq16054__$1 = cljs.core.next(seq16054);
var G__16056 = cljs.core.first(seq16054__$1);
var seq16054__$2 = cljs.core.next(seq16054__$1);
var G__16057 = cljs.core.first(seq16054__$2);
var seq16054__$3 = cljs.core.next(seq16054__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16055,G__16056,G__16057,seq16054__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16081 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16082){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16082 = meta16082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16083,meta16082__$1){
var self__ = this;
var _16083__$1 = this;
return (new cljs.core.async.t_cljs$core$async16081(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16082__$1));
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16083){
var self__ = this;
var _16083__$1 = this;
return self__.meta16082;
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16081.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16082","meta16082",-677461928,null)], null);
}));

(cljs.core.async.t_cljs$core$async16081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16081");

(cljs.core.async.t_cljs$core$async16081.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16081.
 */
cljs.core.async.__GT_t_cljs$core$async16081 = (function cljs$core$async$__GT_t_cljs$core$async16081(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16082){
return (new cljs.core.async.t_cljs$core$async16081(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16082));
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16081(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14330__auto___18320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_16169){
var state_val_16170 = (state_16169[(1)]);
if((state_val_16170 === (7))){
var inst_16124 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
if(cljs.core.truth_(inst_16124)){
var statearr_16173_18322 = state_16169__$1;
(statearr_16173_18322[(1)] = (8));

} else {
var statearr_16174_18325 = state_16169__$1;
(statearr_16174_18325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (20))){
var inst_16113 = (state_16169[(7)]);
var state_16169__$1 = state_16169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16169__$1,(23),out,inst_16113);
} else {
if((state_val_16170 === (1))){
var inst_16096 = calc_state();
var inst_16097 = cljs.core.__destructure_map(inst_16096);
var inst_16098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16097,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16097,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16097,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16101 = inst_16096;
var state_16169__$1 = (function (){var statearr_16179 = state_16169;
(statearr_16179[(8)] = inst_16098);

(statearr_16179[(9)] = inst_16099);

(statearr_16179[(10)] = inst_16100);

(statearr_16179[(11)] = inst_16101);

return statearr_16179;
})();
var statearr_16180_18326 = state_16169__$1;
(statearr_16180_18326[(2)] = null);

(statearr_16180_18326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (24))){
var inst_16104 = (state_16169[(12)]);
var inst_16101 = inst_16104;
var state_16169__$1 = (function (){var statearr_16181 = state_16169;
(statearr_16181[(11)] = inst_16101);

return statearr_16181;
})();
var statearr_16183_18328 = state_16169__$1;
(statearr_16183_18328[(2)] = null);

(statearr_16183_18328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (4))){
var inst_16113 = (state_16169[(7)]);
var inst_16119 = (state_16169[(13)]);
var inst_16112 = (state_16169[(2)]);
var inst_16113__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16112,(0),null);
var inst_16115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16112,(1),null);
var inst_16119__$1 = (inst_16113__$1 == null);
var state_16169__$1 = (function (){var statearr_16185 = state_16169;
(statearr_16185[(7)] = inst_16113__$1);

(statearr_16185[(14)] = inst_16115);

(statearr_16185[(13)] = inst_16119__$1);

return statearr_16185;
})();
if(cljs.core.truth_(inst_16119__$1)){
var statearr_16186_18333 = state_16169__$1;
(statearr_16186_18333[(1)] = (5));

} else {
var statearr_16187_18334 = state_16169__$1;
(statearr_16187_18334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (15))){
var inst_16105 = (state_16169[(15)]);
var inst_16139 = (state_16169[(16)]);
var inst_16139__$1 = cljs.core.empty_QMARK_(inst_16105);
var state_16169__$1 = (function (){var statearr_16188 = state_16169;
(statearr_16188[(16)] = inst_16139__$1);

return statearr_16188;
})();
if(inst_16139__$1){
var statearr_16189_18335 = state_16169__$1;
(statearr_16189_18335[(1)] = (17));

} else {
var statearr_16190_18336 = state_16169__$1;
(statearr_16190_18336[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (21))){
var inst_16104 = (state_16169[(12)]);
var inst_16101 = inst_16104;
var state_16169__$1 = (function (){var statearr_16195 = state_16169;
(statearr_16195[(11)] = inst_16101);

return statearr_16195;
})();
var statearr_16196_18337 = state_16169__$1;
(statearr_16196_18337[(2)] = null);

(statearr_16196_18337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (13))){
var inst_16132 = (state_16169[(2)]);
var inst_16133 = calc_state();
var inst_16101 = inst_16133;
var state_16169__$1 = (function (){var statearr_16198 = state_16169;
(statearr_16198[(17)] = inst_16132);

(statearr_16198[(11)] = inst_16101);

return statearr_16198;
})();
var statearr_16202_18339 = state_16169__$1;
(statearr_16202_18339[(2)] = null);

(statearr_16202_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (22))){
var inst_16163 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
var statearr_16205_18340 = state_16169__$1;
(statearr_16205_18340[(2)] = inst_16163);

(statearr_16205_18340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (6))){
var inst_16115 = (state_16169[(14)]);
var inst_16122 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16115,change);
var state_16169__$1 = state_16169;
var statearr_16206_18341 = state_16169__$1;
(statearr_16206_18341[(2)] = inst_16122);

(statearr_16206_18341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (25))){
var state_16169__$1 = state_16169;
var statearr_16207_18345 = state_16169__$1;
(statearr_16207_18345[(2)] = null);

(statearr_16207_18345[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (17))){
var inst_16106 = (state_16169[(18)]);
var inst_16115 = (state_16169[(14)]);
var inst_16142 = (inst_16106.cljs$core$IFn$_invoke$arity$1 ? inst_16106.cljs$core$IFn$_invoke$arity$1(inst_16115) : inst_16106.call(null,inst_16115));
var inst_16143 = cljs.core.not(inst_16142);
var state_16169__$1 = state_16169;
var statearr_16212_18346 = state_16169__$1;
(statearr_16212_18346[(2)] = inst_16143);

(statearr_16212_18346[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (3))){
var inst_16167 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16169__$1,inst_16167);
} else {
if((state_val_16170 === (12))){
var state_16169__$1 = state_16169;
var statearr_16215_18349 = state_16169__$1;
(statearr_16215_18349[(2)] = null);

(statearr_16215_18349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (2))){
var inst_16101 = (state_16169[(11)]);
var inst_16104 = (state_16169[(12)]);
var inst_16104__$1 = cljs.core.__destructure_map(inst_16101);
var inst_16105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16104__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16104__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16104__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16169__$1 = (function (){var statearr_16220 = state_16169;
(statearr_16220[(12)] = inst_16104__$1);

(statearr_16220[(15)] = inst_16105);

(statearr_16220[(18)] = inst_16106);

return statearr_16220;
})();
return cljs.core.async.ioc_alts_BANG_(state_16169__$1,(4),inst_16107);
} else {
if((state_val_16170 === (23))){
var inst_16154 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
if(cljs.core.truth_(inst_16154)){
var statearr_16221_18350 = state_16169__$1;
(statearr_16221_18350[(1)] = (24));

} else {
var statearr_16222_18351 = state_16169__$1;
(statearr_16222_18351[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (19))){
var inst_16146 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
var statearr_16223_18353 = state_16169__$1;
(statearr_16223_18353[(2)] = inst_16146);

(statearr_16223_18353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (11))){
var inst_16115 = (state_16169[(14)]);
var inst_16129 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16115);
var state_16169__$1 = state_16169;
var statearr_16225_18357 = state_16169__$1;
(statearr_16225_18357[(2)] = inst_16129);

(statearr_16225_18357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (9))){
var inst_16105 = (state_16169[(15)]);
var inst_16115 = (state_16169[(14)]);
var inst_16136 = (state_16169[(19)]);
var inst_16136__$1 = (inst_16105.cljs$core$IFn$_invoke$arity$1 ? inst_16105.cljs$core$IFn$_invoke$arity$1(inst_16115) : inst_16105.call(null,inst_16115));
var state_16169__$1 = (function (){var statearr_16228 = state_16169;
(statearr_16228[(19)] = inst_16136__$1);

return statearr_16228;
})();
if(cljs.core.truth_(inst_16136__$1)){
var statearr_16229_18363 = state_16169__$1;
(statearr_16229_18363[(1)] = (14));

} else {
var statearr_16230_18364 = state_16169__$1;
(statearr_16230_18364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (5))){
var inst_16119 = (state_16169[(13)]);
var state_16169__$1 = state_16169;
var statearr_16233_18367 = state_16169__$1;
(statearr_16233_18367[(2)] = inst_16119);

(statearr_16233_18367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (14))){
var inst_16136 = (state_16169[(19)]);
var state_16169__$1 = state_16169;
var statearr_16235_18368 = state_16169__$1;
(statearr_16235_18368[(2)] = inst_16136);

(statearr_16235_18368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (26))){
var inst_16159 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
var statearr_16236_18369 = state_16169__$1;
(statearr_16236_18369[(2)] = inst_16159);

(statearr_16236_18369[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (16))){
var inst_16148 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
if(cljs.core.truth_(inst_16148)){
var statearr_16238_18379 = state_16169__$1;
(statearr_16238_18379[(1)] = (20));

} else {
var statearr_16239_18380 = state_16169__$1;
(statearr_16239_18380[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (10))){
var inst_16165 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
var statearr_16241_18382 = state_16169__$1;
(statearr_16241_18382[(2)] = inst_16165);

(statearr_16241_18382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (18))){
var inst_16139 = (state_16169[(16)]);
var state_16169__$1 = state_16169;
var statearr_16243_18384 = state_16169__$1;
(statearr_16243_18384[(2)] = inst_16139);

(statearr_16243_18384[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (8))){
var inst_16113 = (state_16169[(7)]);
var inst_16126 = (inst_16113 == null);
var state_16169__$1 = state_16169;
if(cljs.core.truth_(inst_16126)){
var statearr_16244_18394 = state_16169__$1;
(statearr_16244_18394[(1)] = (11));

} else {
var statearr_16245_18395 = state_16169__$1;
(statearr_16245_18395[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14148__auto__ = null;
var cljs$core$async$mix_$_state_machine__14148__auto____0 = (function (){
var statearr_16246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16246[(0)] = cljs$core$async$mix_$_state_machine__14148__auto__);

(statearr_16246[(1)] = (1));

return statearr_16246;
});
var cljs$core$async$mix_$_state_machine__14148__auto____1 = (function (state_16169){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_16169);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e16249){var ex__14151__auto__ = e16249;
var statearr_16250_18396 = state_16169;
(statearr_16250_18396[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_16169[(4)]))){
var statearr_16251_18397 = state_16169;
(statearr_16251_18397[(1)] = cljs.core.first((state_16169[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18398 = state_16169;
state_16169 = G__18398;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14148__auto__ = function(state_16169){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14148__auto____1.call(this,state_16169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14148__auto____0;
cljs$core$async$mix_$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14148__auto____1;
return cljs$core$async$mix_$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_16255 = f__14331__auto__();
(statearr_16255[(6)] = c__14330__auto___18320);

return statearr_16255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18404 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18404(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18414 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18414(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18415 = (function() {
var G__18416 = null;
var G__18416__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18416__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18416 = function(p,v){
switch(arguments.length){
case 1:
return G__18416__1.call(this,p);
case 2:
return G__18416__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18416.cljs$core$IFn$_invoke$arity$1 = G__18416__1;
G__18416.cljs$core$IFn$_invoke$arity$2 = G__18416__2;
return G__18416;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16279 = arguments.length;
switch (G__16279) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18415(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18415(p,v);
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
cljs.core.async.t_cljs$core$async16292 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16293){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16293 = meta16293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16294,meta16293__$1){
var self__ = this;
var _16294__$1 = this;
return (new cljs.core.async.t_cljs$core$async16292(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16293__$1));
}));

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16294){
var self__ = this;
var _16294__$1 = this;
return self__.meta16293;
}));

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16293","meta16293",1127385669,null)], null);
}));

(cljs.core.async.t_cljs$core$async16292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16292");

(cljs.core.async.t_cljs$core$async16292.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16292.
 */
cljs.core.async.__GT_t_cljs$core$async16292 = (function cljs$core$async$__GT_t_cljs$core$async16292(ch,topic_fn,buf_fn,mults,ensure_mult,meta16293){
return (new cljs.core.async.t_cljs$core$async16292(ch,topic_fn,buf_fn,mults,ensure_mult,meta16293));
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
var G__16290 = arguments.length;
switch (G__16290) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16281_SHARP_){
if(cljs.core.truth_((p1__16281_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16281_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16281_SHARP_.call(null,topic)))){
return p1__16281_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16281_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16292(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14330__auto___18430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_16386){
var state_val_16387 = (state_16386[(1)]);
if((state_val_16387 === (7))){
var inst_16379 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
var statearr_16388_18432 = state_16386__$1;
(statearr_16388_18432[(2)] = inst_16379);

(statearr_16388_18432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (20))){
var state_16386__$1 = state_16386;
var statearr_16389_18437 = state_16386__$1;
(statearr_16389_18437[(2)] = null);

(statearr_16389_18437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (1))){
var state_16386__$1 = state_16386;
var statearr_16393_18440 = state_16386__$1;
(statearr_16393_18440[(2)] = null);

(statearr_16393_18440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (24))){
var inst_16361 = (state_16386[(7)]);
var inst_16370 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16361);
var state_16386__$1 = state_16386;
var statearr_16395_18442 = state_16386__$1;
(statearr_16395_18442[(2)] = inst_16370);

(statearr_16395_18442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (4))){
var inst_16306 = (state_16386[(8)]);
var inst_16306__$1 = (state_16386[(2)]);
var inst_16307 = (inst_16306__$1 == null);
var state_16386__$1 = (function (){var statearr_16396 = state_16386;
(statearr_16396[(8)] = inst_16306__$1);

return statearr_16396;
})();
if(cljs.core.truth_(inst_16307)){
var statearr_16397_18445 = state_16386__$1;
(statearr_16397_18445[(1)] = (5));

} else {
var statearr_16399_18446 = state_16386__$1;
(statearr_16399_18446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (15))){
var inst_16351 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
var statearr_16404_18448 = state_16386__$1;
(statearr_16404_18448[(2)] = inst_16351);

(statearr_16404_18448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (21))){
var inst_16375 = (state_16386[(2)]);
var state_16386__$1 = (function (){var statearr_16406 = state_16386;
(statearr_16406[(9)] = inst_16375);

return statearr_16406;
})();
var statearr_16409_18452 = state_16386__$1;
(statearr_16409_18452[(2)] = null);

(statearr_16409_18452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (13))){
var inst_16330 = (state_16386[(10)]);
var inst_16332 = cljs.core.chunked_seq_QMARK_(inst_16330);
var state_16386__$1 = state_16386;
if(inst_16332){
var statearr_16411_18453 = state_16386__$1;
(statearr_16411_18453[(1)] = (16));

} else {
var statearr_16412_18454 = state_16386__$1;
(statearr_16412_18454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (22))){
var inst_16367 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
if(cljs.core.truth_(inst_16367)){
var statearr_16413_18457 = state_16386__$1;
(statearr_16413_18457[(1)] = (23));

} else {
var statearr_16414_18459 = state_16386__$1;
(statearr_16414_18459[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (6))){
var inst_16306 = (state_16386[(8)]);
var inst_16361 = (state_16386[(7)]);
var inst_16363 = (state_16386[(11)]);
var inst_16361__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16306) : topic_fn.call(null,inst_16306));
var inst_16362 = cljs.core.deref(mults);
var inst_16363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16362,inst_16361__$1);
var state_16386__$1 = (function (){var statearr_16416 = state_16386;
(statearr_16416[(7)] = inst_16361__$1);

(statearr_16416[(11)] = inst_16363__$1);

return statearr_16416;
})();
if(cljs.core.truth_(inst_16363__$1)){
var statearr_16420_18466 = state_16386__$1;
(statearr_16420_18466[(1)] = (19));

} else {
var statearr_16422_18467 = state_16386__$1;
(statearr_16422_18467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (25))){
var inst_16372 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
var statearr_16424_18468 = state_16386__$1;
(statearr_16424_18468[(2)] = inst_16372);

(statearr_16424_18468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (17))){
var inst_16330 = (state_16386[(10)]);
var inst_16342 = cljs.core.first(inst_16330);
var inst_16343 = cljs.core.async.muxch_STAR_(inst_16342);
var inst_16344 = cljs.core.async.close_BANG_(inst_16343);
var inst_16345 = cljs.core.next(inst_16330);
var inst_16316 = inst_16345;
var inst_16317 = null;
var inst_16318 = (0);
var inst_16319 = (0);
var state_16386__$1 = (function (){var statearr_16429 = state_16386;
(statearr_16429[(12)] = inst_16344);

(statearr_16429[(13)] = inst_16316);

(statearr_16429[(14)] = inst_16317);

(statearr_16429[(15)] = inst_16318);

(statearr_16429[(16)] = inst_16319);

return statearr_16429;
})();
var statearr_16431_18481 = state_16386__$1;
(statearr_16431_18481[(2)] = null);

(statearr_16431_18481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (3))){
var inst_16382 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16386__$1,inst_16382);
} else {
if((state_val_16387 === (12))){
var inst_16353 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
var statearr_16435_18482 = state_16386__$1;
(statearr_16435_18482[(2)] = inst_16353);

(statearr_16435_18482[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (2))){
var state_16386__$1 = state_16386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16386__$1,(4),ch);
} else {
if((state_val_16387 === (23))){
var state_16386__$1 = state_16386;
var statearr_16439_18493 = state_16386__$1;
(statearr_16439_18493[(2)] = null);

(statearr_16439_18493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (19))){
var inst_16363 = (state_16386[(11)]);
var inst_16306 = (state_16386[(8)]);
var inst_16365 = cljs.core.async.muxch_STAR_(inst_16363);
var state_16386__$1 = state_16386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16386__$1,(22),inst_16365,inst_16306);
} else {
if((state_val_16387 === (11))){
var inst_16316 = (state_16386[(13)]);
var inst_16330 = (state_16386[(10)]);
var inst_16330__$1 = cljs.core.seq(inst_16316);
var state_16386__$1 = (function (){var statearr_16442 = state_16386;
(statearr_16442[(10)] = inst_16330__$1);

return statearr_16442;
})();
if(inst_16330__$1){
var statearr_16443_18495 = state_16386__$1;
(statearr_16443_18495[(1)] = (13));

} else {
var statearr_16446_18497 = state_16386__$1;
(statearr_16446_18497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (9))){
var inst_16355 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
var statearr_16448_18501 = state_16386__$1;
(statearr_16448_18501[(2)] = inst_16355);

(statearr_16448_18501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (5))){
var inst_16313 = cljs.core.deref(mults);
var inst_16314 = cljs.core.vals(inst_16313);
var inst_16315 = cljs.core.seq(inst_16314);
var inst_16316 = inst_16315;
var inst_16317 = null;
var inst_16318 = (0);
var inst_16319 = (0);
var state_16386__$1 = (function (){var statearr_16456 = state_16386;
(statearr_16456[(13)] = inst_16316);

(statearr_16456[(14)] = inst_16317);

(statearr_16456[(15)] = inst_16318);

(statearr_16456[(16)] = inst_16319);

return statearr_16456;
})();
var statearr_16461_18503 = state_16386__$1;
(statearr_16461_18503[(2)] = null);

(statearr_16461_18503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (14))){
var state_16386__$1 = state_16386;
var statearr_16468_18504 = state_16386__$1;
(statearr_16468_18504[(2)] = null);

(statearr_16468_18504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (16))){
var inst_16330 = (state_16386[(10)]);
var inst_16334 = cljs.core.chunk_first(inst_16330);
var inst_16336 = cljs.core.chunk_rest(inst_16330);
var inst_16338 = cljs.core.count(inst_16334);
var inst_16316 = inst_16336;
var inst_16317 = inst_16334;
var inst_16318 = inst_16338;
var inst_16319 = (0);
var state_16386__$1 = (function (){var statearr_16470 = state_16386;
(statearr_16470[(13)] = inst_16316);

(statearr_16470[(14)] = inst_16317);

(statearr_16470[(15)] = inst_16318);

(statearr_16470[(16)] = inst_16319);

return statearr_16470;
})();
var statearr_16474_18514 = state_16386__$1;
(statearr_16474_18514[(2)] = null);

(statearr_16474_18514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (10))){
var inst_16317 = (state_16386[(14)]);
var inst_16319 = (state_16386[(16)]);
var inst_16316 = (state_16386[(13)]);
var inst_16318 = (state_16386[(15)]);
var inst_16324 = cljs.core._nth(inst_16317,inst_16319);
var inst_16325 = cljs.core.async.muxch_STAR_(inst_16324);
var inst_16326 = cljs.core.async.close_BANG_(inst_16325);
var inst_16327 = (inst_16319 + (1));
var tmp16465 = inst_16317;
var tmp16466 = inst_16316;
var tmp16467 = inst_16318;
var inst_16316__$1 = tmp16466;
var inst_16317__$1 = tmp16465;
var inst_16318__$1 = tmp16467;
var inst_16319__$1 = inst_16327;
var state_16386__$1 = (function (){var statearr_16478 = state_16386;
(statearr_16478[(17)] = inst_16326);

(statearr_16478[(13)] = inst_16316__$1);

(statearr_16478[(14)] = inst_16317__$1);

(statearr_16478[(15)] = inst_16318__$1);

(statearr_16478[(16)] = inst_16319__$1);

return statearr_16478;
})();
var statearr_16480_18520 = state_16386__$1;
(statearr_16480_18520[(2)] = null);

(statearr_16480_18520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (18))){
var inst_16348 = (state_16386[(2)]);
var state_16386__$1 = state_16386;
var statearr_16482_18525 = state_16386__$1;
(statearr_16482_18525[(2)] = inst_16348);

(statearr_16482_18525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16387 === (8))){
var inst_16319 = (state_16386[(16)]);
var inst_16318 = (state_16386[(15)]);
var inst_16321 = (inst_16319 < inst_16318);
var inst_16322 = inst_16321;
var state_16386__$1 = state_16386;
if(cljs.core.truth_(inst_16322)){
var statearr_16485_18533 = state_16386__$1;
(statearr_16485_18533[(1)] = (10));

} else {
var statearr_16487_18534 = state_16386__$1;
(statearr_16487_18534[(1)] = (11));

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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_16488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16488[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_16488[(1)] = (1));

return statearr_16488;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_16386){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_16386);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e16489){var ex__14151__auto__ = e16489;
var statearr_16491_18542 = state_16386;
(statearr_16491_18542[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_16386[(4)]))){
var statearr_16492_18543 = state_16386;
(statearr_16492_18543[(1)] = cljs.core.first((state_16386[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18544 = state_16386;
state_16386 = G__18544;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_16386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_16386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_16496 = f__14331__auto__();
(statearr_16496[(6)] = c__14330__auto___18430);

return statearr_16496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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
var G__16500 = arguments.length;
switch (G__16500) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__16511 = arguments.length;
switch (G__16511) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__16521 = arguments.length;
switch (G__16521) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__14330__auto___18562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_16586){
var state_val_16587 = (state_16586[(1)]);
if((state_val_16587 === (7))){
var state_16586__$1 = state_16586;
var statearr_16593_18563 = state_16586__$1;
(statearr_16593_18563[(2)] = null);

(statearr_16593_18563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (1))){
var state_16586__$1 = state_16586;
var statearr_16595_18564 = state_16586__$1;
(statearr_16595_18564[(2)] = null);

(statearr_16595_18564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (4))){
var inst_16535 = (state_16586[(7)]);
var inst_16534 = (state_16586[(8)]);
var inst_16537 = (inst_16535 < inst_16534);
var state_16586__$1 = state_16586;
if(cljs.core.truth_(inst_16537)){
var statearr_16596_18565 = state_16586__$1;
(statearr_16596_18565[(1)] = (6));

} else {
var statearr_16598_18566 = state_16586__$1;
(statearr_16598_18566[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (15))){
var inst_16570 = (state_16586[(9)]);
var inst_16577 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16570);
var state_16586__$1 = state_16586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16586__$1,(17),out,inst_16577);
} else {
if((state_val_16587 === (13))){
var inst_16570 = (state_16586[(9)]);
var inst_16570__$1 = (state_16586[(2)]);
var inst_16571 = cljs.core.some(cljs.core.nil_QMARK_,inst_16570__$1);
var state_16586__$1 = (function (){var statearr_16602 = state_16586;
(statearr_16602[(9)] = inst_16570__$1);

return statearr_16602;
})();
if(cljs.core.truth_(inst_16571)){
var statearr_16603_18570 = state_16586__$1;
(statearr_16603_18570[(1)] = (14));

} else {
var statearr_16605_18571 = state_16586__$1;
(statearr_16605_18571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (6))){
var state_16586__$1 = state_16586;
var statearr_16607_18572 = state_16586__$1;
(statearr_16607_18572[(2)] = null);

(statearr_16607_18572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (17))){
var inst_16579 = (state_16586[(2)]);
var state_16586__$1 = (function (){var statearr_16619 = state_16586;
(statearr_16619[(10)] = inst_16579);

return statearr_16619;
})();
var statearr_16620_18579 = state_16586__$1;
(statearr_16620_18579[(2)] = null);

(statearr_16620_18579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (3))){
var inst_16584 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16586__$1,inst_16584);
} else {
if((state_val_16587 === (12))){
var _ = (function (){var statearr_16627 = state_16586;
(statearr_16627[(4)] = cljs.core.rest((state_16586[(4)])));

return statearr_16627;
})();
var state_16586__$1 = state_16586;
var ex16617 = (state_16586__$1[(2)]);
var statearr_16632_18581 = state_16586__$1;
(statearr_16632_18581[(5)] = ex16617);


if((ex16617 instanceof Object)){
var statearr_16635_18582 = state_16586__$1;
(statearr_16635_18582[(1)] = (11));

(statearr_16635_18582[(5)] = null);

} else {
throw ex16617;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (2))){
var inst_16533 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16534 = cnt;
var inst_16535 = (0);
var state_16586__$1 = (function (){var statearr_16642 = state_16586;
(statearr_16642[(11)] = inst_16533);

(statearr_16642[(8)] = inst_16534);

(statearr_16642[(7)] = inst_16535);

return statearr_16642;
})();
var statearr_16644_18583 = state_16586__$1;
(statearr_16644_18583[(2)] = null);

(statearr_16644_18583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (11))){
var inst_16544 = (state_16586[(2)]);
var inst_16546 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16586__$1 = (function (){var statearr_16646 = state_16586;
(statearr_16646[(12)] = inst_16544);

return statearr_16646;
})();
var statearr_16647_18586 = state_16586__$1;
(statearr_16647_18586[(2)] = inst_16546);

(statearr_16647_18586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (9))){
var inst_16535 = (state_16586[(7)]);
var _ = (function (){var statearr_16652 = state_16586;
(statearr_16652[(4)] = cljs.core.cons((12),(state_16586[(4)])));

return statearr_16652;
})();
var inst_16553 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16535) : chs__$1.call(null,inst_16535));
var inst_16554 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16535) : done.call(null,inst_16535));
var inst_16555 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16553,inst_16554);
var ___$1 = (function (){var statearr_16654 = state_16586;
(statearr_16654[(4)] = cljs.core.rest((state_16586[(4)])));

return statearr_16654;
})();
var state_16586__$1 = state_16586;
var statearr_16656_18587 = state_16586__$1;
(statearr_16656_18587[(2)] = inst_16555);

(statearr_16656_18587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (5))){
var inst_16565 = (state_16586[(2)]);
var state_16586__$1 = (function (){var statearr_16661 = state_16586;
(statearr_16661[(13)] = inst_16565);

return statearr_16661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16586__$1,(13),dchan);
} else {
if((state_val_16587 === (14))){
var inst_16575 = cljs.core.async.close_BANG_(out);
var state_16586__$1 = state_16586;
var statearr_16665_18589 = state_16586__$1;
(statearr_16665_18589[(2)] = inst_16575);

(statearr_16665_18589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (16))){
var inst_16582 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
var statearr_16667_18590 = state_16586__$1;
(statearr_16667_18590[(2)] = inst_16582);

(statearr_16667_18590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (10))){
var inst_16535 = (state_16586[(7)]);
var inst_16558 = (state_16586[(2)]);
var inst_16559 = (inst_16535 + (1));
var inst_16535__$1 = inst_16559;
var state_16586__$1 = (function (){var statearr_16670 = state_16586;
(statearr_16670[(14)] = inst_16558);

(statearr_16670[(7)] = inst_16535__$1);

return statearr_16670;
})();
var statearr_16672_18593 = state_16586__$1;
(statearr_16672_18593[(2)] = null);

(statearr_16672_18593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16587 === (8))){
var inst_16563 = (state_16586[(2)]);
var state_16586__$1 = state_16586;
var statearr_16673_18600 = state_16586__$1;
(statearr_16673_18600[(2)] = inst_16563);

(statearr_16673_18600[(1)] = (5));


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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_16678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16678[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_16678[(1)] = (1));

return statearr_16678;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_16586){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_16586);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e16679){var ex__14151__auto__ = e16679;
var statearr_16681_18608 = state_16586;
(statearr_16681_18608[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_16586[(4)]))){
var statearr_16682_18609 = state_16586;
(statearr_16682_18609[(1)] = cljs.core.first((state_16586[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18612 = state_16586;
state_16586 = G__18612;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_16586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_16586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_16684 = f__14331__auto__();
(statearr_16684[(6)] = c__14330__auto___18562);

return statearr_16684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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
var G__16705 = arguments.length;
switch (G__16705) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14330__auto___18617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_16740){
var state_val_16741 = (state_16740[(1)]);
if((state_val_16741 === (7))){
var inst_16718 = (state_16740[(7)]);
var inst_16719 = (state_16740[(8)]);
var inst_16718__$1 = (state_16740[(2)]);
var inst_16719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16718__$1,(0),null);
var inst_16720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16718__$1,(1),null);
var inst_16721 = (inst_16719__$1 == null);
var state_16740__$1 = (function (){var statearr_16748 = state_16740;
(statearr_16748[(7)] = inst_16718__$1);

(statearr_16748[(8)] = inst_16719__$1);

(statearr_16748[(9)] = inst_16720);

return statearr_16748;
})();
if(cljs.core.truth_(inst_16721)){
var statearr_16749_18623 = state_16740__$1;
(statearr_16749_18623[(1)] = (8));

} else {
var statearr_16750_18624 = state_16740__$1;
(statearr_16750_18624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (1))){
var inst_16708 = cljs.core.vec(chs);
var inst_16709 = inst_16708;
var state_16740__$1 = (function (){var statearr_16751 = state_16740;
(statearr_16751[(10)] = inst_16709);

return statearr_16751;
})();
var statearr_16752_18625 = state_16740__$1;
(statearr_16752_18625[(2)] = null);

(statearr_16752_18625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (4))){
var inst_16709 = (state_16740[(10)]);
var state_16740__$1 = state_16740;
return cljs.core.async.ioc_alts_BANG_(state_16740__$1,(7),inst_16709);
} else {
if((state_val_16741 === (6))){
var inst_16736 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16754_18626 = state_16740__$1;
(statearr_16754_18626[(2)] = inst_16736);

(statearr_16754_18626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (3))){
var inst_16738 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16740__$1,inst_16738);
} else {
if((state_val_16741 === (2))){
var inst_16709 = (state_16740[(10)]);
var inst_16711 = cljs.core.count(inst_16709);
var inst_16712 = (inst_16711 > (0));
var state_16740__$1 = state_16740;
if(cljs.core.truth_(inst_16712)){
var statearr_16762_18628 = state_16740__$1;
(statearr_16762_18628[(1)] = (4));

} else {
var statearr_16764_18629 = state_16740__$1;
(statearr_16764_18629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (11))){
var inst_16709 = (state_16740[(10)]);
var inst_16729 = (state_16740[(2)]);
var tmp16759 = inst_16709;
var inst_16709__$1 = tmp16759;
var state_16740__$1 = (function (){var statearr_16855 = state_16740;
(statearr_16855[(11)] = inst_16729);

(statearr_16855[(10)] = inst_16709__$1);

return statearr_16855;
})();
var statearr_16856_18631 = state_16740__$1;
(statearr_16856_18631[(2)] = null);

(statearr_16856_18631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (9))){
var inst_16719 = (state_16740[(8)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16740__$1,(11),out,inst_16719);
} else {
if((state_val_16741 === (5))){
var inst_16734 = cljs.core.async.close_BANG_(out);
var state_16740__$1 = state_16740;
var statearr_16861_18632 = state_16740__$1;
(statearr_16861_18632[(2)] = inst_16734);

(statearr_16861_18632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (10))){
var inst_16732 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16866_18634 = state_16740__$1;
(statearr_16866_18634[(2)] = inst_16732);

(statearr_16866_18634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (8))){
var inst_16709 = (state_16740[(10)]);
var inst_16718 = (state_16740[(7)]);
var inst_16719 = (state_16740[(8)]);
var inst_16720 = (state_16740[(9)]);
var inst_16723 = (function (){var cs = inst_16709;
var vec__16714 = inst_16718;
var v = inst_16719;
var c = inst_16720;
return (function (p1__16696_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16696_SHARP_);
});
})();
var inst_16725 = cljs.core.filterv(inst_16723,inst_16709);
var inst_16709__$1 = inst_16725;
var state_16740__$1 = (function (){var statearr_16868 = state_16740;
(statearr_16868[(10)] = inst_16709__$1);

return statearr_16868;
})();
var statearr_16872_18644 = state_16740__$1;
(statearr_16872_18644[(2)] = null);

(statearr_16872_18644[(1)] = (2));


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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_16874 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16874[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_16874[(1)] = (1));

return statearr_16874;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_16740){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_16740);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e16875){var ex__14151__auto__ = e16875;
var statearr_16876_18648 = state_16740;
(statearr_16876_18648[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_16740[(4)]))){
var statearr_16878_18649 = state_16740;
(statearr_16878_18649[(1)] = cljs.core.first((state_16740[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18653 = state_16740;
state_16740 = G__18653;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_16740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_16740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_16884 = f__14331__auto__();
(statearr_16884[(6)] = c__14330__auto___18617);

return statearr_16884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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
var G__16891 = arguments.length;
switch (G__16891) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14330__auto___18660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_16918){
var state_val_16919 = (state_16918[(1)]);
if((state_val_16919 === (7))){
var inst_16900 = (state_16918[(7)]);
var inst_16900__$1 = (state_16918[(2)]);
var inst_16901 = (inst_16900__$1 == null);
var inst_16902 = cljs.core.not(inst_16901);
var state_16918__$1 = (function (){var statearr_16921 = state_16918;
(statearr_16921[(7)] = inst_16900__$1);

return statearr_16921;
})();
if(inst_16902){
var statearr_16922_18662 = state_16918__$1;
(statearr_16922_18662[(1)] = (8));

} else {
var statearr_16923_18667 = state_16918__$1;
(statearr_16923_18667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (1))){
var inst_16895 = (0);
var state_16918__$1 = (function (){var statearr_16924 = state_16918;
(statearr_16924[(8)] = inst_16895);

return statearr_16924;
})();
var statearr_16925_18673 = state_16918__$1;
(statearr_16925_18673[(2)] = null);

(statearr_16925_18673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (4))){
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16918__$1,(7),ch);
} else {
if((state_val_16919 === (6))){
var inst_16913 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16932_18674 = state_16918__$1;
(statearr_16932_18674[(2)] = inst_16913);

(statearr_16932_18674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (3))){
var inst_16915 = (state_16918[(2)]);
var inst_16916 = cljs.core.async.close_BANG_(out);
var state_16918__$1 = (function (){var statearr_16933 = state_16918;
(statearr_16933[(9)] = inst_16915);

return statearr_16933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16918__$1,inst_16916);
} else {
if((state_val_16919 === (2))){
var inst_16895 = (state_16918[(8)]);
var inst_16897 = (inst_16895 < n);
var state_16918__$1 = state_16918;
if(cljs.core.truth_(inst_16897)){
var statearr_16934_18676 = state_16918__$1;
(statearr_16934_18676[(1)] = (4));

} else {
var statearr_16935_18691 = state_16918__$1;
(statearr_16935_18691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (11))){
var inst_16895 = (state_16918[(8)]);
var inst_16905 = (state_16918[(2)]);
var inst_16906 = (inst_16895 + (1));
var inst_16895__$1 = inst_16906;
var state_16918__$1 = (function (){var statearr_16936 = state_16918;
(statearr_16936[(10)] = inst_16905);

(statearr_16936[(8)] = inst_16895__$1);

return statearr_16936;
})();
var statearr_16937_18694 = state_16918__$1;
(statearr_16937_18694[(2)] = null);

(statearr_16937_18694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (9))){
var state_16918__$1 = state_16918;
var statearr_16938_18695 = state_16918__$1;
(statearr_16938_18695[(2)] = null);

(statearr_16938_18695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (5))){
var state_16918__$1 = state_16918;
var statearr_16939_18696 = state_16918__$1;
(statearr_16939_18696[(2)] = null);

(statearr_16939_18696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (10))){
var inst_16910 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16940_18697 = state_16918__$1;
(statearr_16940_18697[(2)] = inst_16910);

(statearr_16940_18697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (8))){
var inst_16900 = (state_16918[(7)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16918__$1,(11),out,inst_16900);
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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_16945 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16945[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_16945[(1)] = (1));

return statearr_16945;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_16918){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_16918);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e16949){var ex__14151__auto__ = e16949;
var statearr_16950_18709 = state_16918;
(statearr_16950_18709[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_16918[(4)]))){
var statearr_16953_18710 = state_16918;
(statearr_16953_18710[(1)] = cljs.core.first((state_16918[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18712 = state_16918;
state_16918 = G__18712;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_16918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_16918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_16959 = f__14331__auto__();
(statearr_16959[(6)] = c__14330__auto___18660);

return statearr_16959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
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
cljs.core.async.t_cljs$core$async16980 = (function (f,ch,meta16966,_,fn1,meta16981){
this.f = f;
this.ch = ch;
this.meta16966 = meta16966;
this._ = _;
this.fn1 = fn1;
this.meta16981 = meta16981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16982,meta16981__$1){
var self__ = this;
var _16982__$1 = this;
return (new cljs.core.async.t_cljs$core$async16980(self__.f,self__.ch,self__.meta16966,self__._,self__.fn1,meta16981__$1));
}));

(cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16982){
var self__ = this;
var _16982__$1 = this;
return self__.meta16981;
}));

(cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16964_SHARP_){
var G__16991 = (((p1__16964_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16964_SHARP_) : self__.f.call(null,p1__16964_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16991) : f1.call(null,G__16991));
});
}));

(cljs.core.async.t_cljs$core$async16980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16966","meta16966",-1602129733,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16965","cljs.core.async/t_cljs$core$async16965",1209068096,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16981","meta16981",953201123,null)], null);
}));

(cljs.core.async.t_cljs$core$async16980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16980");

(cljs.core.async.t_cljs$core$async16980.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16980.
 */
cljs.core.async.__GT_t_cljs$core$async16980 = (function cljs$core$async$__GT_t_cljs$core$async16980(f,ch,meta16966,_,fn1,meta16981){
return (new cljs.core.async.t_cljs$core$async16980(f,ch,meta16966,_,fn1,meta16981));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16965 = (function (f,ch,meta16966){
this.f = f;
this.ch = ch;
this.meta16966 = meta16966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16967,meta16966__$1){
var self__ = this;
var _16967__$1 = this;
return (new cljs.core.async.t_cljs$core$async16965(self__.f,self__.ch,meta16966__$1));
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16967){
var self__ = this;
var _16967__$1 = this;
return self__.meta16966;
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16980(self__.f,self__.ch,self__.meta16966,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17006 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17006) : self__.f.call(null,G__17006));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16966","meta16966",-1602129733,null)], null);
}));

(cljs.core.async.t_cljs$core$async16965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16965");

(cljs.core.async.t_cljs$core$async16965.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16965.
 */
cljs.core.async.__GT_t_cljs$core$async16965 = (function cljs$core$async$__GT_t_cljs$core$async16965(f,ch,meta16966){
return (new cljs.core.async.t_cljs$core$async16965(f,ch,meta16966));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16965(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17017 = (function (f,ch,meta17018){
this.f = f;
this.ch = ch;
this.meta17018 = meta17018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17019,meta17018__$1){
var self__ = this;
var _17019__$1 = this;
return (new cljs.core.async.t_cljs$core$async17017(self__.f,self__.ch,meta17018__$1));
}));

(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17019){
var self__ = this;
var _17019__$1 = this;
return self__.meta17018;
}));

(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17018","meta17018",-1601755446,null)], null);
}));

(cljs.core.async.t_cljs$core$async17017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17017");

(cljs.core.async.t_cljs$core$async17017.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17017.
 */
cljs.core.async.__GT_t_cljs$core$async17017 = (function cljs$core$async$__GT_t_cljs$core$async17017(f,ch,meta17018){
return (new cljs.core.async.t_cljs$core$async17017(f,ch,meta17018));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17017(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17039 = (function (p,ch,meta17040){
this.p = p;
this.ch = ch;
this.meta17040 = meta17040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17041,meta17040__$1){
var self__ = this;
var _17041__$1 = this;
return (new cljs.core.async.t_cljs$core$async17039(self__.p,self__.ch,meta17040__$1));
}));

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17041){
var self__ = this;
var _17041__$1 = this;
return self__.meta17040;
}));

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17040","meta17040",1752783128,null)], null);
}));

(cljs.core.async.t_cljs$core$async17039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17039");

(cljs.core.async.t_cljs$core$async17039.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17039.
 */
cljs.core.async.__GT_t_cljs$core$async17039 = (function cljs$core$async$__GT_t_cljs$core$async17039(p,ch,meta17040){
return (new cljs.core.async.t_cljs$core$async17039(p,ch,meta17040));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17039(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17056 = arguments.length;
switch (G__17056) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14330__auto___18744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_17080){
var state_val_17081 = (state_17080[(1)]);
if((state_val_17081 === (7))){
var inst_17076 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17082_18746 = state_17080__$1;
(statearr_17082_18746[(2)] = inst_17076);

(statearr_17082_18746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (1))){
var state_17080__$1 = state_17080;
var statearr_17083_18747 = state_17080__$1;
(statearr_17083_18747[(2)] = null);

(statearr_17083_18747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (4))){
var inst_17060 = (state_17080[(7)]);
var inst_17060__$1 = (state_17080[(2)]);
var inst_17061 = (inst_17060__$1 == null);
var state_17080__$1 = (function (){var statearr_17085 = state_17080;
(statearr_17085[(7)] = inst_17060__$1);

return statearr_17085;
})();
if(cljs.core.truth_(inst_17061)){
var statearr_17087_18748 = state_17080__$1;
(statearr_17087_18748[(1)] = (5));

} else {
var statearr_17088_18749 = state_17080__$1;
(statearr_17088_18749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (6))){
var inst_17060 = (state_17080[(7)]);
var inst_17067 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17060) : p.call(null,inst_17060));
var state_17080__$1 = state_17080;
if(cljs.core.truth_(inst_17067)){
var statearr_17089_18752 = state_17080__$1;
(statearr_17089_18752[(1)] = (8));

} else {
var statearr_17090_18754 = state_17080__$1;
(statearr_17090_18754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (3))){
var inst_17078 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17080__$1,inst_17078);
} else {
if((state_val_17081 === (2))){
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17080__$1,(4),ch);
} else {
if((state_val_17081 === (11))){
var inst_17070 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17094_18760 = state_17080__$1;
(statearr_17094_18760[(2)] = inst_17070);

(statearr_17094_18760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (9))){
var state_17080__$1 = state_17080;
var statearr_17095_18761 = state_17080__$1;
(statearr_17095_18761[(2)] = null);

(statearr_17095_18761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (5))){
var inst_17064 = cljs.core.async.close_BANG_(out);
var state_17080__$1 = state_17080;
var statearr_17096_18762 = state_17080__$1;
(statearr_17096_18762[(2)] = inst_17064);

(statearr_17096_18762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (10))){
var inst_17073 = (state_17080[(2)]);
var state_17080__$1 = (function (){var statearr_17097 = state_17080;
(statearr_17097[(8)] = inst_17073);

return statearr_17097;
})();
var statearr_17098_18769 = state_17080__$1;
(statearr_17098_18769[(2)] = null);

(statearr_17098_18769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (8))){
var inst_17060 = (state_17080[(7)]);
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17080__$1,(11),out,inst_17060);
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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_17099 = [null,null,null,null,null,null,null,null,null];
(statearr_17099[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_17099[(1)] = (1));

return statearr_17099;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_17080){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_17080);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e17100){var ex__14151__auto__ = e17100;
var statearr_17101_18773 = state_17080;
(statearr_17101_18773[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_17080[(4)]))){
var statearr_17103_18774 = state_17080;
(statearr_17103_18774[(1)] = cljs.core.first((state_17080[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18776 = state_17080;
state_17080 = G__18776;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_17080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_17080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_17104 = f__14331__auto__();
(statearr_17104[(6)] = c__14330__auto___18744);

return statearr_17104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17109 = arguments.length;
switch (G__17109) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var c__14330__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_17176){
var state_val_17177 = (state_17176[(1)]);
if((state_val_17177 === (7))){
var inst_17172 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17182_18787 = state_17176__$1;
(statearr_17182_18787[(2)] = inst_17172);

(statearr_17182_18787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (20))){
var inst_17142 = (state_17176[(7)]);
var inst_17153 = (state_17176[(2)]);
var inst_17154 = cljs.core.next(inst_17142);
var inst_17128 = inst_17154;
var inst_17129 = null;
var inst_17130 = (0);
var inst_17131 = (0);
var state_17176__$1 = (function (){var statearr_17183 = state_17176;
(statearr_17183[(8)] = inst_17153);

(statearr_17183[(9)] = inst_17128);

(statearr_17183[(10)] = inst_17129);

(statearr_17183[(11)] = inst_17130);

(statearr_17183[(12)] = inst_17131);

return statearr_17183;
})();
var statearr_17184_18790 = state_17176__$1;
(statearr_17184_18790[(2)] = null);

(statearr_17184_18790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (1))){
var state_17176__$1 = state_17176;
var statearr_17185_18791 = state_17176__$1;
(statearr_17185_18791[(2)] = null);

(statearr_17185_18791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (4))){
var inst_17116 = (state_17176[(13)]);
var inst_17116__$1 = (state_17176[(2)]);
var inst_17117 = (inst_17116__$1 == null);
var state_17176__$1 = (function (){var statearr_17210 = state_17176;
(statearr_17210[(13)] = inst_17116__$1);

return statearr_17210;
})();
if(cljs.core.truth_(inst_17117)){
var statearr_17211_18793 = state_17176__$1;
(statearr_17211_18793[(1)] = (5));

} else {
var statearr_17212_18803 = state_17176__$1;
(statearr_17212_18803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (15))){
var state_17176__$1 = state_17176;
var statearr_17217_18804 = state_17176__$1;
(statearr_17217_18804[(2)] = null);

(statearr_17217_18804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (21))){
var state_17176__$1 = state_17176;
var statearr_17219_18806 = state_17176__$1;
(statearr_17219_18806[(2)] = null);

(statearr_17219_18806[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (13))){
var inst_17131 = (state_17176[(12)]);
var inst_17128 = (state_17176[(9)]);
var inst_17129 = (state_17176[(10)]);
var inst_17130 = (state_17176[(11)]);
var inst_17138 = (state_17176[(2)]);
var inst_17139 = (inst_17131 + (1));
var tmp17213 = inst_17130;
var tmp17214 = inst_17129;
var tmp17215 = inst_17128;
var inst_17128__$1 = tmp17215;
var inst_17129__$1 = tmp17214;
var inst_17130__$1 = tmp17213;
var inst_17131__$1 = inst_17139;
var state_17176__$1 = (function (){var statearr_17220 = state_17176;
(statearr_17220[(14)] = inst_17138);

(statearr_17220[(9)] = inst_17128__$1);

(statearr_17220[(10)] = inst_17129__$1);

(statearr_17220[(11)] = inst_17130__$1);

(statearr_17220[(12)] = inst_17131__$1);

return statearr_17220;
})();
var statearr_17221_18812 = state_17176__$1;
(statearr_17221_18812[(2)] = null);

(statearr_17221_18812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (22))){
var state_17176__$1 = state_17176;
var statearr_17222_18814 = state_17176__$1;
(statearr_17222_18814[(2)] = null);

(statearr_17222_18814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (6))){
var inst_17116 = (state_17176[(13)]);
var inst_17126 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17116) : f.call(null,inst_17116));
var inst_17127 = cljs.core.seq(inst_17126);
var inst_17128 = inst_17127;
var inst_17129 = null;
var inst_17130 = (0);
var inst_17131 = (0);
var state_17176__$1 = (function (){var statearr_17228 = state_17176;
(statearr_17228[(9)] = inst_17128);

(statearr_17228[(10)] = inst_17129);

(statearr_17228[(11)] = inst_17130);

(statearr_17228[(12)] = inst_17131);

return statearr_17228;
})();
var statearr_17229_18818 = state_17176__$1;
(statearr_17229_18818[(2)] = null);

(statearr_17229_18818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (17))){
var inst_17142 = (state_17176[(7)]);
var inst_17146 = cljs.core.chunk_first(inst_17142);
var inst_17147 = cljs.core.chunk_rest(inst_17142);
var inst_17148 = cljs.core.count(inst_17146);
var inst_17128 = inst_17147;
var inst_17129 = inst_17146;
var inst_17130 = inst_17148;
var inst_17131 = (0);
var state_17176__$1 = (function (){var statearr_17232 = state_17176;
(statearr_17232[(9)] = inst_17128);

(statearr_17232[(10)] = inst_17129);

(statearr_17232[(11)] = inst_17130);

(statearr_17232[(12)] = inst_17131);

return statearr_17232;
})();
var statearr_17233_18820 = state_17176__$1;
(statearr_17233_18820[(2)] = null);

(statearr_17233_18820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (3))){
var inst_17174 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17176__$1,inst_17174);
} else {
if((state_val_17177 === (12))){
var inst_17162 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17236_18822 = state_17176__$1;
(statearr_17236_18822[(2)] = inst_17162);

(statearr_17236_18822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (2))){
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17176__$1,(4),in$);
} else {
if((state_val_17177 === (23))){
var inst_17170 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17239_18829 = state_17176__$1;
(statearr_17239_18829[(2)] = inst_17170);

(statearr_17239_18829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (19))){
var inst_17157 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17240_18830 = state_17176__$1;
(statearr_17240_18830[(2)] = inst_17157);

(statearr_17240_18830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (11))){
var inst_17128 = (state_17176[(9)]);
var inst_17142 = (state_17176[(7)]);
var inst_17142__$1 = cljs.core.seq(inst_17128);
var state_17176__$1 = (function (){var statearr_17245 = state_17176;
(statearr_17245[(7)] = inst_17142__$1);

return statearr_17245;
})();
if(inst_17142__$1){
var statearr_17246_18831 = state_17176__$1;
(statearr_17246_18831[(1)] = (14));

} else {
var statearr_17249_18832 = state_17176__$1;
(statearr_17249_18832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (9))){
var inst_17164 = (state_17176[(2)]);
var inst_17165 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17176__$1 = (function (){var statearr_17258 = state_17176;
(statearr_17258[(15)] = inst_17164);

return statearr_17258;
})();
if(cljs.core.truth_(inst_17165)){
var statearr_17259_18833 = state_17176__$1;
(statearr_17259_18833[(1)] = (21));

} else {
var statearr_17264_18835 = state_17176__$1;
(statearr_17264_18835[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (5))){
var inst_17119 = cljs.core.async.close_BANG_(out);
var state_17176__$1 = state_17176;
var statearr_17265_18842 = state_17176__$1;
(statearr_17265_18842[(2)] = inst_17119);

(statearr_17265_18842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (14))){
var inst_17142 = (state_17176[(7)]);
var inst_17144 = cljs.core.chunked_seq_QMARK_(inst_17142);
var state_17176__$1 = state_17176;
if(inst_17144){
var statearr_17270_18847 = state_17176__$1;
(statearr_17270_18847[(1)] = (17));

} else {
var statearr_17271_18849 = state_17176__$1;
(statearr_17271_18849[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (16))){
var inst_17160 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17272_18852 = state_17176__$1;
(statearr_17272_18852[(2)] = inst_17160);

(statearr_17272_18852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (10))){
var inst_17129 = (state_17176[(10)]);
var inst_17131 = (state_17176[(12)]);
var inst_17136 = cljs.core._nth(inst_17129,inst_17131);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17176__$1,(13),out,inst_17136);
} else {
if((state_val_17177 === (18))){
var inst_17142 = (state_17176[(7)]);
var inst_17151 = cljs.core.first(inst_17142);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17176__$1,(20),out,inst_17151);
} else {
if((state_val_17177 === (8))){
var inst_17131 = (state_17176[(12)]);
var inst_17130 = (state_17176[(11)]);
var inst_17133 = (inst_17131 < inst_17130);
var inst_17134 = inst_17133;
var state_17176__$1 = state_17176;
if(cljs.core.truth_(inst_17134)){
var statearr_17275_18879 = state_17176__$1;
(statearr_17275_18879[(1)] = (10));

} else {
var statearr_17276_18880 = state_17176__$1;
(statearr_17276_18880[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14148__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14148__auto____0 = (function (){
var statearr_17279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17279[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14148__auto__);

(statearr_17279[(1)] = (1));

return statearr_17279;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14148__auto____1 = (function (state_17176){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_17176);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e17281){var ex__14151__auto__ = e17281;
var statearr_17282_18893 = state_17176;
(statearr_17282_18893[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_17176[(4)]))){
var statearr_17283_18894 = state_17176;
(statearr_17283_18894[(1)] = cljs.core.first((state_17176[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18895 = state_17176;
state_17176 = G__18895;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14148__auto__ = function(state_17176){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14148__auto____1.call(this,state_17176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14148__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14148__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_17292 = f__14331__auto__();
(statearr_17292[(6)] = c__14330__auto__);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));

return c__14330__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17295 = arguments.length;
switch (G__17295) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__17319 = arguments.length;
switch (G__17319) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__17331 = arguments.length;
switch (G__17331) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14330__auto___18918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_17374){
var state_val_17375 = (state_17374[(1)]);
if((state_val_17375 === (7))){
var inst_17368 = (state_17374[(2)]);
var state_17374__$1 = state_17374;
var statearr_17378_18919 = state_17374__$1;
(statearr_17378_18919[(2)] = inst_17368);

(statearr_17378_18919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (1))){
var inst_17346 = null;
var state_17374__$1 = (function (){var statearr_17380 = state_17374;
(statearr_17380[(7)] = inst_17346);

return statearr_17380;
})();
var statearr_17385_18920 = state_17374__$1;
(statearr_17385_18920[(2)] = null);

(statearr_17385_18920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (4))){
var inst_17350 = (state_17374[(8)]);
var inst_17350__$1 = (state_17374[(2)]);
var inst_17354 = (inst_17350__$1 == null);
var inst_17355 = cljs.core.not(inst_17354);
var state_17374__$1 = (function (){var statearr_17386 = state_17374;
(statearr_17386[(8)] = inst_17350__$1);

return statearr_17386;
})();
if(inst_17355){
var statearr_17387_18921 = state_17374__$1;
(statearr_17387_18921[(1)] = (5));

} else {
var statearr_17389_18922 = state_17374__$1;
(statearr_17389_18922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (6))){
var state_17374__$1 = state_17374;
var statearr_17390_18923 = state_17374__$1;
(statearr_17390_18923[(2)] = null);

(statearr_17390_18923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (3))){
var inst_17370 = (state_17374[(2)]);
var inst_17371 = cljs.core.async.close_BANG_(out);
var state_17374__$1 = (function (){var statearr_17391 = state_17374;
(statearr_17391[(9)] = inst_17370);

return statearr_17391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17374__$1,inst_17371);
} else {
if((state_val_17375 === (2))){
var state_17374__$1 = state_17374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17374__$1,(4),ch);
} else {
if((state_val_17375 === (11))){
var inst_17350 = (state_17374[(8)]);
var inst_17362 = (state_17374[(2)]);
var inst_17346 = inst_17350;
var state_17374__$1 = (function (){var statearr_17392 = state_17374;
(statearr_17392[(10)] = inst_17362);

(statearr_17392[(7)] = inst_17346);

return statearr_17392;
})();
var statearr_17393_18929 = state_17374__$1;
(statearr_17393_18929[(2)] = null);

(statearr_17393_18929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (9))){
var inst_17350 = (state_17374[(8)]);
var state_17374__$1 = state_17374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17374__$1,(11),out,inst_17350);
} else {
if((state_val_17375 === (5))){
var inst_17350 = (state_17374[(8)]);
var inst_17346 = (state_17374[(7)]);
var inst_17357 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17350,inst_17346);
var state_17374__$1 = state_17374;
if(inst_17357){
var statearr_17395_18936 = state_17374__$1;
(statearr_17395_18936[(1)] = (8));

} else {
var statearr_17396_18937 = state_17374__$1;
(statearr_17396_18937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (10))){
var inst_17365 = (state_17374[(2)]);
var state_17374__$1 = state_17374;
var statearr_17398_18938 = state_17374__$1;
(statearr_17398_18938[(2)] = inst_17365);

(statearr_17398_18938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (8))){
var inst_17346 = (state_17374[(7)]);
var tmp17394 = inst_17346;
var inst_17346__$1 = tmp17394;
var state_17374__$1 = (function (){var statearr_17402 = state_17374;
(statearr_17402[(7)] = inst_17346__$1);

return statearr_17402;
})();
var statearr_17404_18940 = state_17374__$1;
(statearr_17404_18940[(2)] = null);

(statearr_17404_18940[(1)] = (2));


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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_17405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17405[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_17405[(1)] = (1));

return statearr_17405;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_17374){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_17374);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e17411){var ex__14151__auto__ = e17411;
var statearr_17412_18945 = state_17374;
(statearr_17412_18945[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_17374[(4)]))){
var statearr_17413_18946 = state_17374;
(statearr_17413_18946[(1)] = cljs.core.first((state_17374[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18947 = state_17374;
state_17374 = G__18947;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_17374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_17374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_17415 = f__14331__auto__();
(statearr_17415[(6)] = c__14330__auto___18918);

return statearr_17415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17418 = arguments.length;
switch (G__17418) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14330__auto___18957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_17457){
var state_val_17458 = (state_17457[(1)]);
if((state_val_17458 === (7))){
var inst_17453 = (state_17457[(2)]);
var state_17457__$1 = state_17457;
var statearr_17461_18964 = state_17457__$1;
(statearr_17461_18964[(2)] = inst_17453);

(statearr_17461_18964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (1))){
var inst_17419 = (new Array(n));
var inst_17421 = inst_17419;
var inst_17422 = (0);
var state_17457__$1 = (function (){var statearr_17464 = state_17457;
(statearr_17464[(7)] = inst_17421);

(statearr_17464[(8)] = inst_17422);

return statearr_17464;
})();
var statearr_17465_18965 = state_17457__$1;
(statearr_17465_18965[(2)] = null);

(statearr_17465_18965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (4))){
var inst_17425 = (state_17457[(9)]);
var inst_17425__$1 = (state_17457[(2)]);
var inst_17426 = (inst_17425__$1 == null);
var inst_17427 = cljs.core.not(inst_17426);
var state_17457__$1 = (function (){var statearr_17467 = state_17457;
(statearr_17467[(9)] = inst_17425__$1);

return statearr_17467;
})();
if(inst_17427){
var statearr_17469_18969 = state_17457__$1;
(statearr_17469_18969[(1)] = (5));

} else {
var statearr_17470_18970 = state_17457__$1;
(statearr_17470_18970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (15))){
var inst_17447 = (state_17457[(2)]);
var state_17457__$1 = state_17457;
var statearr_17472_18976 = state_17457__$1;
(statearr_17472_18976[(2)] = inst_17447);

(statearr_17472_18976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (13))){
var state_17457__$1 = state_17457;
var statearr_17476_18981 = state_17457__$1;
(statearr_17476_18981[(2)] = null);

(statearr_17476_18981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (6))){
var inst_17422 = (state_17457[(8)]);
var inst_17443 = (inst_17422 > (0));
var state_17457__$1 = state_17457;
if(cljs.core.truth_(inst_17443)){
var statearr_17480_18983 = state_17457__$1;
(statearr_17480_18983[(1)] = (12));

} else {
var statearr_17481_18984 = state_17457__$1;
(statearr_17481_18984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (3))){
var inst_17455 = (state_17457[(2)]);
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17457__$1,inst_17455);
} else {
if((state_val_17458 === (12))){
var inst_17421 = (state_17457[(7)]);
var inst_17445 = cljs.core.vec(inst_17421);
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17457__$1,(15),out,inst_17445);
} else {
if((state_val_17458 === (2))){
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17457__$1,(4),ch);
} else {
if((state_val_17458 === (11))){
var inst_17437 = (state_17457[(2)]);
var inst_17438 = (new Array(n));
var inst_17421 = inst_17438;
var inst_17422 = (0);
var state_17457__$1 = (function (){var statearr_17484 = state_17457;
(statearr_17484[(10)] = inst_17437);

(statearr_17484[(7)] = inst_17421);

(statearr_17484[(8)] = inst_17422);

return statearr_17484;
})();
var statearr_17485_18992 = state_17457__$1;
(statearr_17485_18992[(2)] = null);

(statearr_17485_18992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (9))){
var inst_17421 = (state_17457[(7)]);
var inst_17435 = cljs.core.vec(inst_17421);
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17457__$1,(11),out,inst_17435);
} else {
if((state_val_17458 === (5))){
var inst_17421 = (state_17457[(7)]);
var inst_17422 = (state_17457[(8)]);
var inst_17425 = (state_17457[(9)]);
var inst_17430 = (state_17457[(11)]);
var inst_17429 = (inst_17421[inst_17422] = inst_17425);
var inst_17430__$1 = (inst_17422 + (1));
var inst_17431 = (inst_17430__$1 < n);
var state_17457__$1 = (function (){var statearr_17486 = state_17457;
(statearr_17486[(12)] = inst_17429);

(statearr_17486[(11)] = inst_17430__$1);

return statearr_17486;
})();
if(cljs.core.truth_(inst_17431)){
var statearr_17487_18996 = state_17457__$1;
(statearr_17487_18996[(1)] = (8));

} else {
var statearr_17488_18997 = state_17457__$1;
(statearr_17488_18997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (14))){
var inst_17450 = (state_17457[(2)]);
var inst_17451 = cljs.core.async.close_BANG_(out);
var state_17457__$1 = (function (){var statearr_17494 = state_17457;
(statearr_17494[(13)] = inst_17450);

return statearr_17494;
})();
var statearr_17495_19000 = state_17457__$1;
(statearr_17495_19000[(2)] = inst_17451);

(statearr_17495_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (10))){
var inst_17441 = (state_17457[(2)]);
var state_17457__$1 = state_17457;
var statearr_17498_19005 = state_17457__$1;
(statearr_17498_19005[(2)] = inst_17441);

(statearr_17498_19005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (8))){
var inst_17421 = (state_17457[(7)]);
var inst_17430 = (state_17457[(11)]);
var tmp17493 = inst_17421;
var inst_17421__$1 = tmp17493;
var inst_17422 = inst_17430;
var state_17457__$1 = (function (){var statearr_17499 = state_17457;
(statearr_17499[(7)] = inst_17421__$1);

(statearr_17499[(8)] = inst_17422);

return statearr_17499;
})();
var statearr_17500_19010 = state_17457__$1;
(statearr_17500_19010[(2)] = null);

(statearr_17500_19010[(1)] = (2));


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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_17502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17502[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_17502[(1)] = (1));

return statearr_17502;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_17457){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_17457);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e17504){var ex__14151__auto__ = e17504;
var statearr_17505_19012 = state_17457;
(statearr_17505_19012[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_17457[(4)]))){
var statearr_17508_19013 = state_17457;
(statearr_17508_19013[(1)] = cljs.core.first((state_17457[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19014 = state_17457;
state_17457 = G__19014;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_17457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_17457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_17517 = f__14331__auto__();
(statearr_17517[(6)] = c__14330__auto___18957);

return statearr_17517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17521 = arguments.length;
switch (G__17521) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14330__auto___19022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14331__auto__ = (function (){var switch__14147__auto__ = (function (state_17572){
var state_val_17573 = (state_17572[(1)]);
if((state_val_17573 === (7))){
var inst_17568 = (state_17572[(2)]);
var state_17572__$1 = state_17572;
var statearr_17574_19028 = state_17572__$1;
(statearr_17574_19028[(2)] = inst_17568);

(statearr_17574_19028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (1))){
var inst_17523 = [];
var inst_17524 = inst_17523;
var inst_17525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17572__$1 = (function (){var statearr_17575 = state_17572;
(statearr_17575[(7)] = inst_17524);

(statearr_17575[(8)] = inst_17525);

return statearr_17575;
})();
var statearr_17576_19031 = state_17572__$1;
(statearr_17576_19031[(2)] = null);

(statearr_17576_19031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (4))){
var inst_17528 = (state_17572[(9)]);
var inst_17528__$1 = (state_17572[(2)]);
var inst_17530 = (inst_17528__$1 == null);
var inst_17531 = cljs.core.not(inst_17530);
var state_17572__$1 = (function (){var statearr_17577 = state_17572;
(statearr_17577[(9)] = inst_17528__$1);

return statearr_17577;
})();
if(inst_17531){
var statearr_17579_19037 = state_17572__$1;
(statearr_17579_19037[(1)] = (5));

} else {
var statearr_17580_19038 = state_17572__$1;
(statearr_17580_19038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (15))){
var inst_17524 = (state_17572[(7)]);
var inst_17560 = cljs.core.vec(inst_17524);
var state_17572__$1 = state_17572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17572__$1,(18),out,inst_17560);
} else {
if((state_val_17573 === (13))){
var inst_17552 = (state_17572[(2)]);
var state_17572__$1 = state_17572;
var statearr_17582_19039 = state_17572__$1;
(statearr_17582_19039[(2)] = inst_17552);

(statearr_17582_19039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (6))){
var inst_17524 = (state_17572[(7)]);
var inst_17554 = inst_17524.length;
var inst_17555 = (inst_17554 > (0));
var state_17572__$1 = state_17572;
if(cljs.core.truth_(inst_17555)){
var statearr_17586_19044 = state_17572__$1;
(statearr_17586_19044[(1)] = (15));

} else {
var statearr_17587_19047 = state_17572__$1;
(statearr_17587_19047[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (17))){
var inst_17565 = (state_17572[(2)]);
var inst_17566 = cljs.core.async.close_BANG_(out);
var state_17572__$1 = (function (){var statearr_17588 = state_17572;
(statearr_17588[(10)] = inst_17565);

return statearr_17588;
})();
var statearr_17593_19049 = state_17572__$1;
(statearr_17593_19049[(2)] = inst_17566);

(statearr_17593_19049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (3))){
var inst_17570 = (state_17572[(2)]);
var state_17572__$1 = state_17572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17572__$1,inst_17570);
} else {
if((state_val_17573 === (12))){
var inst_17524 = (state_17572[(7)]);
var inst_17545 = cljs.core.vec(inst_17524);
var state_17572__$1 = state_17572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17572__$1,(14),out,inst_17545);
} else {
if((state_val_17573 === (2))){
var state_17572__$1 = state_17572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17572__$1,(4),ch);
} else {
if((state_val_17573 === (11))){
var inst_17524 = (state_17572[(7)]);
var inst_17528 = (state_17572[(9)]);
var inst_17533 = (state_17572[(11)]);
var inst_17542 = inst_17524.push(inst_17528);
var tmp17594 = inst_17524;
var inst_17524__$1 = tmp17594;
var inst_17525 = inst_17533;
var state_17572__$1 = (function (){var statearr_17596 = state_17572;
(statearr_17596[(12)] = inst_17542);

(statearr_17596[(7)] = inst_17524__$1);

(statearr_17596[(8)] = inst_17525);

return statearr_17596;
})();
var statearr_17600_19052 = state_17572__$1;
(statearr_17600_19052[(2)] = null);

(statearr_17600_19052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (9))){
var inst_17525 = (state_17572[(8)]);
var inst_17537 = cljs.core.keyword_identical_QMARK_(inst_17525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17572__$1 = state_17572;
var statearr_17601_19054 = state_17572__$1;
(statearr_17601_19054[(2)] = inst_17537);

(statearr_17601_19054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (5))){
var inst_17528 = (state_17572[(9)]);
var inst_17533 = (state_17572[(11)]);
var inst_17525 = (state_17572[(8)]);
var inst_17534 = (state_17572[(13)]);
var inst_17533__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17528) : f.call(null,inst_17528));
var inst_17534__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17533__$1,inst_17525);
var state_17572__$1 = (function (){var statearr_17602 = state_17572;
(statearr_17602[(11)] = inst_17533__$1);

(statearr_17602[(13)] = inst_17534__$1);

return statearr_17602;
})();
if(inst_17534__$1){
var statearr_17603_19057 = state_17572__$1;
(statearr_17603_19057[(1)] = (8));

} else {
var statearr_17604_19058 = state_17572__$1;
(statearr_17604_19058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (14))){
var inst_17528 = (state_17572[(9)]);
var inst_17533 = (state_17572[(11)]);
var inst_17547 = (state_17572[(2)]);
var inst_17548 = [];
var inst_17549 = inst_17548.push(inst_17528);
var inst_17524 = inst_17548;
var inst_17525 = inst_17533;
var state_17572__$1 = (function (){var statearr_17606 = state_17572;
(statearr_17606[(14)] = inst_17547);

(statearr_17606[(15)] = inst_17549);

(statearr_17606[(7)] = inst_17524);

(statearr_17606[(8)] = inst_17525);

return statearr_17606;
})();
var statearr_17607_19062 = state_17572__$1;
(statearr_17607_19062[(2)] = null);

(statearr_17607_19062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (16))){
var state_17572__$1 = state_17572;
var statearr_17608_19063 = state_17572__$1;
(statearr_17608_19063[(2)] = null);

(statearr_17608_19063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (10))){
var inst_17539 = (state_17572[(2)]);
var state_17572__$1 = state_17572;
if(cljs.core.truth_(inst_17539)){
var statearr_17609_19066 = state_17572__$1;
(statearr_17609_19066[(1)] = (11));

} else {
var statearr_17610_19068 = state_17572__$1;
(statearr_17610_19068[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (18))){
var inst_17562 = (state_17572[(2)]);
var state_17572__$1 = state_17572;
var statearr_17615_19069 = state_17572__$1;
(statearr_17615_19069[(2)] = inst_17562);

(statearr_17615_19069[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (8))){
var inst_17534 = (state_17572[(13)]);
var state_17572__$1 = state_17572;
var statearr_17625_19070 = state_17572__$1;
(statearr_17625_19070[(2)] = inst_17534);

(statearr_17625_19070[(1)] = (10));


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
var cljs$core$async$state_machine__14148__auto__ = null;
var cljs$core$async$state_machine__14148__auto____0 = (function (){
var statearr_17637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17637[(0)] = cljs$core$async$state_machine__14148__auto__);

(statearr_17637[(1)] = (1));

return statearr_17637;
});
var cljs$core$async$state_machine__14148__auto____1 = (function (state_17572){
while(true){
var ret_value__14149__auto__ = (function (){try{while(true){
var result__14150__auto__ = switch__14147__auto__(state_17572);
if(cljs.core.keyword_identical_QMARK_(result__14150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14150__auto__;
}
break;
}
}catch (e17638){var ex__14151__auto__ = e17638;
var statearr_17639_19074 = state_17572;
(statearr_17639_19074[(2)] = ex__14151__auto__);


if(cljs.core.seq((state_17572[(4)]))){
var statearr_17640_19075 = state_17572;
(statearr_17640_19075[(1)] = cljs.core.first((state_17572[(4)])));

} else {
throw ex__14151__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14149__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19077 = state_17572;
state_17572 = G__19077;
continue;
} else {
return ret_value__14149__auto__;
}
break;
}
});
cljs$core$async$state_machine__14148__auto__ = function(state_17572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14148__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14148__auto____1.call(this,state_17572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14148__auto____0;
cljs$core$async$state_machine__14148__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14148__auto____1;
return cljs$core$async$state_machine__14148__auto__;
})()
})();
var state__14332__auto__ = (function (){var statearr_17643 = f__14331__auto__();
(statearr_17643[(6)] = c__14330__auto___19022);

return statearr_17643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14332__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
