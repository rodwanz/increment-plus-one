goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11830__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11831__i = 0, G__11831__a = new Array(arguments.length -  0);
while (G__11831__i < G__11831__a.length) {G__11831__a[G__11831__i] = arguments[G__11831__i + 0]; ++G__11831__i;}
  args = new cljs.core.IndexedSeq(G__11831__a,0,null);
} 
return G__11830__delegate.call(this,args);};
G__11830.cljs$lang$maxFixedArity = 0;
G__11830.cljs$lang$applyTo = (function (arglist__11832){
var args = cljs.core.seq(arglist__11832);
return G__11830__delegate(args);
});
G__11830.cljs$core$IFn$_invoke$arity$variadic = G__11830__delegate;
return G__11830;
})()
);

(o.error = (function() { 
var G__11833__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11834__i = 0, G__11834__a = new Array(arguments.length -  0);
while (G__11834__i < G__11834__a.length) {G__11834__a[G__11834__i] = arguments[G__11834__i + 0]; ++G__11834__i;}
  args = new cljs.core.IndexedSeq(G__11834__a,0,null);
} 
return G__11833__delegate.call(this,args);};
G__11833.cljs$lang$maxFixedArity = 0;
G__11833.cljs$lang$applyTo = (function (arglist__11835){
var args = cljs.core.seq(arglist__11835);
return G__11833__delegate(args);
});
G__11833.cljs$core$IFn$_invoke$arity$variadic = G__11833__delegate;
return G__11833;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
