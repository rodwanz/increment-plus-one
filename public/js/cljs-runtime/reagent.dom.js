goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__12878 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12879 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12879);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__12880 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12881 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12881);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12880);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12878);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__12888 = arguments.length;
switch (G__12888) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__12898 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12898,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12898,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12913_12971 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__12914_12972 = null;
var count__12915_12973 = (0);
var i__12916_12974 = (0);
while(true){
if((i__12916_12974 < count__12915_12973)){
var vec__12952_12975 = chunk__12914_12972.cljs$core$IIndexed$_nth$arity$2(null,i__12916_12974);
var container_12976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12952_12975,(0),null);
var comp_12977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12952_12975,(1),null);
reagent.dom.re_render_component(comp_12977,container_12976);


var G__12978 = seq__12913_12971;
var G__12979 = chunk__12914_12972;
var G__12980 = count__12915_12973;
var G__12981 = (i__12916_12974 + (1));
seq__12913_12971 = G__12978;
chunk__12914_12972 = G__12979;
count__12915_12973 = G__12980;
i__12916_12974 = G__12981;
continue;
} else {
var temp__5823__auto___12982 = cljs.core.seq(seq__12913_12971);
if(temp__5823__auto___12982){
var seq__12913_12983__$1 = temp__5823__auto___12982;
if(cljs.core.chunked_seq_QMARK_(seq__12913_12983__$1)){
var c__5673__auto___12984 = cljs.core.chunk_first(seq__12913_12983__$1);
var G__12985 = cljs.core.chunk_rest(seq__12913_12983__$1);
var G__12986 = c__5673__auto___12984;
var G__12987 = cljs.core.count(c__5673__auto___12984);
var G__12988 = (0);
seq__12913_12971 = G__12985;
chunk__12914_12972 = G__12986;
count__12915_12973 = G__12987;
i__12916_12974 = G__12988;
continue;
} else {
var vec__12955_12989 = cljs.core.first(seq__12913_12983__$1);
var container_12990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12955_12989,(0),null);
var comp_12991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12955_12989,(1),null);
reagent.dom.re_render_component(comp_12991,container_12990);


var G__12992 = cljs.core.next(seq__12913_12983__$1);
var G__12993 = null;
var G__12994 = (0);
var G__12995 = (0);
seq__12913_12971 = G__12992;
chunk__12914_12972 = G__12993;
count__12915_12973 = G__12994;
i__12916_12974 = G__12995;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
