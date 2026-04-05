goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14542){
var map__14543 = p__14542;
var map__14543__$1 = cljs.core.__destructure_map(map__14543);
var runtime = map__14543__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14543__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14797 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14797)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14554 = runtime;
var G__14555 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14797);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14554,G__14555) : shadow.remote.runtime.shared.process.call(null,G__14554,G__14555));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14563,res){
var map__14568 = p__14563;
var map__14568__$1 = cljs.core.__destructure_map(map__14568);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14568__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14568__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14571 = res;
var G__14571__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14571,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14571);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14571__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14571__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14585 = arguments.length;
switch (G__14585) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14587,msg,handlers,timeout_after_ms){
var map__14588 = p__14587;
var map__14588__$1 = cljs.core.__destructure_map(map__14588);
var runtime = map__14588__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___14831 = arguments.length;
var i__5877__auto___14832 = (0);
while(true){
if((i__5877__auto___14832 < len__5876__auto___14831)){
args__5882__auto__.push((arguments[i__5877__auto___14832]));

var G__14833 = (i__5877__auto___14832 + (1));
i__5877__auto___14832 = G__14833;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14605,ev,args){
var map__14609 = p__14605;
var map__14609__$1 = cljs.core.__destructure_map(map__14609);
var runtime = map__14609__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14609__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14616 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14619 = null;
var count__14620 = (0);
var i__14621 = (0);
while(true){
if((i__14621 < count__14620)){
var ext = chunk__14619.cljs$core$IIndexed$_nth$arity$2(null,i__14621);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14849 = seq__14616;
var G__14850 = chunk__14619;
var G__14851 = count__14620;
var G__14852 = (i__14621 + (1));
seq__14616 = G__14849;
chunk__14619 = G__14850;
count__14620 = G__14851;
i__14621 = G__14852;
continue;
} else {
var G__14854 = seq__14616;
var G__14855 = chunk__14619;
var G__14856 = count__14620;
var G__14857 = (i__14621 + (1));
seq__14616 = G__14854;
chunk__14619 = G__14855;
count__14620 = G__14856;
i__14621 = G__14857;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14616);
if(temp__5823__auto__){
var seq__14616__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14616__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14616__$1);
var G__14858 = cljs.core.chunk_rest(seq__14616__$1);
var G__14859 = c__5673__auto__;
var G__14860 = cljs.core.count(c__5673__auto__);
var G__14861 = (0);
seq__14616 = G__14858;
chunk__14619 = G__14859;
count__14620 = G__14860;
i__14621 = G__14861;
continue;
} else {
var ext = cljs.core.first(seq__14616__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14866 = cljs.core.next(seq__14616__$1);
var G__14867 = null;
var G__14868 = (0);
var G__14869 = (0);
seq__14616 = G__14866;
chunk__14619 = G__14867;
count__14620 = G__14868;
i__14621 = G__14869;
continue;
} else {
var G__14870 = cljs.core.next(seq__14616__$1);
var G__14871 = null;
var G__14872 = (0);
var G__14873 = (0);
seq__14616 = G__14870;
chunk__14619 = G__14871;
count__14620 = G__14872;
i__14621 = G__14873;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14591){
var G__14592 = cljs.core.first(seq14591);
var seq14591__$1 = cljs.core.next(seq14591);
var G__14593 = cljs.core.first(seq14591__$1);
var seq14591__$2 = cljs.core.next(seq14591__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14592,G__14593,seq14591__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14644,p__14645){
var map__14646 = p__14644;
var map__14646__$1 = cljs.core.__destructure_map(map__14646);
var runtime = map__14646__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14647 = p__14645;
var map__14647__$1 = cljs.core.__destructure_map(map__14647);
var msg = map__14647__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14647__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14648 = cljs.core.deref(state_ref);
var map__14648__$1 = cljs.core.__destructure_map(map__14648);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14648__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14648__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14660,msg){
var map__14661 = p__14660;
var map__14661__$1 = cljs.core.__destructure_map(map__14661);
var runtime = map__14661__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14661__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14667,key,p__14668){
var map__14669 = p__14667;
var map__14669__$1 = cljs.core.__destructure_map(map__14669);
var state = map__14669__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14669__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14670 = p__14668;
var map__14670__$1 = cljs.core.__destructure_map(map__14670);
var spec = map__14670__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14670__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14670__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14676,key,spec){
var map__14677 = p__14676;
var map__14677__$1 = cljs.core.__destructure_map(map__14677);
var runtime = map__14677__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14677__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14940 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14940 == null)){
} else {
var on_welcome_14944 = temp__5827__auto___14940;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14944.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14944.cljs$core$IFn$_invoke$arity$0() : on_welcome_14944.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14681_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14681_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14682_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14682_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14683_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14683_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14684_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14684_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14686_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14686_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14704,key){
var map__14705 = p__14704;
var map__14705__$1 = cljs.core.__destructure_map(map__14705);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14714,msg){
var map__14717 = p__14714;
var map__14717__$1 = cljs.core.__destructure_map(map__14717);
var runtime = map__14717__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14717__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14731,p__14732){
var map__14733 = p__14731;
var map__14733__$1 = cljs.core.__destructure_map(map__14733);
var runtime = map__14733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14734 = p__14732;
var map__14734__$1 = cljs.core.__destructure_map(map__14734);
var msg = map__14734__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14734__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14734__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14741 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14743 = null;
var count__14744 = (0);
var i__14745 = (0);
while(true){
if((i__14745 < count__14744)){
var map__14768 = chunk__14743.cljs$core$IIndexed$_nth$arity$2(null,i__14745);
var map__14768__$1 = cljs.core.__destructure_map(map__14768);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14768__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15002 = seq__14741;
var G__15003 = chunk__14743;
var G__15004 = count__14744;
var G__15005 = (i__14745 + (1));
seq__14741 = G__15002;
chunk__14743 = G__15003;
count__14744 = G__15004;
i__14745 = G__15005;
continue;
} else {
var G__15010 = seq__14741;
var G__15011 = chunk__14743;
var G__15012 = count__14744;
var G__15013 = (i__14745 + (1));
seq__14741 = G__15010;
chunk__14743 = G__15011;
count__14744 = G__15012;
i__14745 = G__15013;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14741);
if(temp__5823__auto__){
var seq__14741__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14741__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14741__$1);
var G__15014 = cljs.core.chunk_rest(seq__14741__$1);
var G__15015 = c__5673__auto__;
var G__15016 = cljs.core.count(c__5673__auto__);
var G__15017 = (0);
seq__14741 = G__15014;
chunk__14743 = G__15015;
count__14744 = G__15016;
i__14745 = G__15017;
continue;
} else {
var map__14786 = cljs.core.first(seq__14741__$1);
var map__14786__$1 = cljs.core.__destructure_map(map__14786);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14786__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15019 = cljs.core.next(seq__14741__$1);
var G__15020 = null;
var G__15021 = (0);
var G__15022 = (0);
seq__14741 = G__15019;
chunk__14743 = G__15020;
count__14744 = G__15021;
i__14745 = G__15022;
continue;
} else {
var G__15024 = cljs.core.next(seq__14741__$1);
var G__15025 = null;
var G__15026 = (0);
var G__15027 = (0);
seq__14741 = G__15024;
chunk__14743 = G__15025;
count__14744 = G__15026;
i__14745 = G__15027;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
