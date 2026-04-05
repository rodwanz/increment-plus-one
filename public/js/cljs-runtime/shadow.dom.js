goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12901 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12901(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12904 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12904(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11706 = coll;
var G__11707 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11706,G__11707) : shadow.dom.lazy_native_coll_seq.call(null,G__11706,G__11707));
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
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
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
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11815 = arguments.length;
switch (G__11815) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__11818 = arguments.length;
switch (G__11818) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__11823 = arguments.length;
switch (G__11823) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__11825 = arguments.length;
switch (G__11825) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__11829 = arguments.length;
switch (G__11829) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__11836 = arguments.length;
switch (G__11836) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11853){if((e11853 instanceof Object)){
var e = e11853;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11853;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11861 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11862 = null;
var count__11863 = (0);
var i__11864 = (0);
while(true){
if((i__11864 < count__11863)){
var el = chunk__11862.cljs$core$IIndexed$_nth$arity$2(null,i__11864);
var handler_12988__$1 = ((function (seq__11861,chunk__11862,count__11863,i__11864,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11861,chunk__11862,count__11863,i__11864,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12988__$1);


var G__12990 = seq__11861;
var G__12991 = chunk__11862;
var G__12992 = count__11863;
var G__12993 = (i__11864 + (1));
seq__11861 = G__12990;
chunk__11862 = G__12991;
count__11863 = G__12992;
i__11864 = G__12993;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11861);
if(temp__5823__auto__){
var seq__11861__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11861__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11861__$1);
var G__12998 = cljs.core.chunk_rest(seq__11861__$1);
var G__12999 = c__5673__auto__;
var G__13000 = cljs.core.count(c__5673__auto__);
var G__13001 = (0);
seq__11861 = G__12998;
chunk__11862 = G__12999;
count__11863 = G__13000;
i__11864 = G__13001;
continue;
} else {
var el = cljs.core.first(seq__11861__$1);
var handler_13002__$1 = ((function (seq__11861,chunk__11862,count__11863,i__11864,el,seq__11861__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11861,chunk__11862,count__11863,i__11864,el,seq__11861__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13002__$1);


var G__13003 = cljs.core.next(seq__11861__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__11861 = G__13003;
chunk__11862 = G__13004;
count__11863 = G__13005;
i__11864 = G__13006;
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
var G__11870 = arguments.length;
switch (G__11870) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var seq__11871 = cljs.core.seq(events);
var chunk__11872 = null;
var count__11873 = (0);
var i__11874 = (0);
while(true){
if((i__11874 < count__11873)){
var vec__11898 = chunk__11872.cljs$core$IIndexed$_nth$arity$2(null,i__11874);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11898,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13015 = seq__11871;
var G__13017 = chunk__11872;
var G__13018 = count__11873;
var G__13019 = (i__11874 + (1));
seq__11871 = G__13015;
chunk__11872 = G__13017;
count__11873 = G__13018;
i__11874 = G__13019;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11871);
if(temp__5823__auto__){
var seq__11871__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11871__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11871__$1);
var G__13023 = cljs.core.chunk_rest(seq__11871__$1);
var G__13024 = c__5673__auto__;
var G__13025 = cljs.core.count(c__5673__auto__);
var G__13026 = (0);
seq__11871 = G__13023;
chunk__11872 = G__13024;
count__11873 = G__13025;
i__11874 = G__13026;
continue;
} else {
var vec__11905 = cljs.core.first(seq__11871__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11905,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13029 = cljs.core.next(seq__11871__$1);
var G__13030 = null;
var G__13031 = (0);
var G__13032 = (0);
seq__11871 = G__13029;
chunk__11872 = G__13030;
count__11873 = G__13031;
i__11874 = G__13032;
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
var seq__11908 = cljs.core.seq(styles);
var chunk__11909 = null;
var count__11910 = (0);
var i__11911 = (0);
while(true){
if((i__11911 < count__11910)){
var vec__11919 = chunk__11909.cljs$core$IIndexed$_nth$arity$2(null,i__11911);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11919,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11919,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13036 = seq__11908;
var G__13037 = chunk__11909;
var G__13038 = count__11910;
var G__13039 = (i__11911 + (1));
seq__11908 = G__13036;
chunk__11909 = G__13037;
count__11910 = G__13038;
i__11911 = G__13039;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11908);
if(temp__5823__auto__){
var seq__11908__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11908__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11908__$1);
var G__13041 = cljs.core.chunk_rest(seq__11908__$1);
var G__13042 = c__5673__auto__;
var G__13043 = cljs.core.count(c__5673__auto__);
var G__13044 = (0);
seq__11908 = G__13041;
chunk__11909 = G__13042;
count__11910 = G__13043;
i__11911 = G__13044;
continue;
} else {
var vec__11953 = cljs.core.first(seq__11908__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11953,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13047 = cljs.core.next(seq__11908__$1);
var G__13048 = null;
var G__13049 = (0);
var G__13050 = (0);
seq__11908 = G__13047;
chunk__11909 = G__13048;
count__11910 = G__13049;
i__11911 = G__13050;
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
var G__11956_13051 = key;
var G__11956_13052__$1 = (((G__11956_13051 instanceof cljs.core.Keyword))?G__11956_13051.fqn:null);
switch (G__11956_13052__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

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
var ks_13060 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_13060,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_13060,"aria-");
}
})())){
el.setAttribute(ks_13060,value);
} else {
(el[ks_13060] = value);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
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
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11964){
var map__11966 = p__11964;
var map__11966__$1 = cljs.core.__destructure_map(map__11966);
var props = map__11966__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11966__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11968 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11968,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11968,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11968,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11971 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11971,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11971;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11973 = arguments.length;
switch (G__11973) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
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
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11986){
var vec__11987 = p__11986;
var seq__11988 = cljs.core.seq(vec__11987);
var first__11989 = cljs.core.first(seq__11988);
var seq__11988__$1 = cljs.core.next(seq__11988);
var nn = first__11989;
var first__11989__$1 = cljs.core.first(seq__11988__$1);
var seq__11988__$2 = cljs.core.next(seq__11988__$1);
var np = first__11989__$1;
var nc = seq__11988__$2;
var node = vec__11987;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11991 = nn;
var G__11992 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11991,G__11992) : create_fn.call(null,G__11991,G__11992));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11993 = nn;
var G__11994 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11993,G__11994) : create_fn.call(null,G__11993,G__11994));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11995 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11995,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11995,(1),null);
var seq__11999_13133 = cljs.core.seq(node_children);
var chunk__12002_13134 = null;
var count__12003_13135 = (0);
var i__12004_13136 = (0);
while(true){
if((i__12004_13136 < count__12003_13135)){
var child_struct_13140 = chunk__12002_13134.cljs$core$IIndexed$_nth$arity$2(null,i__12004_13136);
var children_13141 = shadow.dom.dom_node(child_struct_13140);
if(cljs.core.seq_QMARK_(children_13141)){
var seq__12098_13142 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13141));
var chunk__12100_13143 = null;
var count__12101_13144 = (0);
var i__12102_13145 = (0);
while(true){
if((i__12102_13145 < count__12101_13144)){
var child_13147 = chunk__12100_13143.cljs$core$IIndexed$_nth$arity$2(null,i__12102_13145);
if(cljs.core.truth_(child_13147)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13147);


var G__13153 = seq__12098_13142;
var G__13154 = chunk__12100_13143;
var G__13155 = count__12101_13144;
var G__13156 = (i__12102_13145 + (1));
seq__12098_13142 = G__13153;
chunk__12100_13143 = G__13154;
count__12101_13144 = G__13155;
i__12102_13145 = G__13156;
continue;
} else {
var G__13159 = seq__12098_13142;
var G__13160 = chunk__12100_13143;
var G__13161 = count__12101_13144;
var G__13162 = (i__12102_13145 + (1));
seq__12098_13142 = G__13159;
chunk__12100_13143 = G__13160;
count__12101_13144 = G__13161;
i__12102_13145 = G__13162;
continue;
}
} else {
var temp__5823__auto___13163 = cljs.core.seq(seq__12098_13142);
if(temp__5823__auto___13163){
var seq__12098_13164__$1 = temp__5823__auto___13163;
if(cljs.core.chunked_seq_QMARK_(seq__12098_13164__$1)){
var c__5673__auto___13165 = cljs.core.chunk_first(seq__12098_13164__$1);
var G__13166 = cljs.core.chunk_rest(seq__12098_13164__$1);
var G__13167 = c__5673__auto___13165;
var G__13168 = cljs.core.count(c__5673__auto___13165);
var G__13169 = (0);
seq__12098_13142 = G__13166;
chunk__12100_13143 = G__13167;
count__12101_13144 = G__13168;
i__12102_13145 = G__13169;
continue;
} else {
var child_13223 = cljs.core.first(seq__12098_13164__$1);
if(cljs.core.truth_(child_13223)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13223);


var G__13231 = cljs.core.next(seq__12098_13164__$1);
var G__13232 = null;
var G__13233 = (0);
var G__13234 = (0);
seq__12098_13142 = G__13231;
chunk__12100_13143 = G__13232;
count__12101_13144 = G__13233;
i__12102_13145 = G__13234;
continue;
} else {
var G__13236 = cljs.core.next(seq__12098_13164__$1);
var G__13237 = null;
var G__13238 = (0);
var G__13239 = (0);
seq__12098_13142 = G__13236;
chunk__12100_13143 = G__13237;
count__12101_13144 = G__13238;
i__12102_13145 = G__13239;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13141);
}


var G__13241 = seq__11999_13133;
var G__13242 = chunk__12002_13134;
var G__13243 = count__12003_13135;
var G__13244 = (i__12004_13136 + (1));
seq__11999_13133 = G__13241;
chunk__12002_13134 = G__13242;
count__12003_13135 = G__13243;
i__12004_13136 = G__13244;
continue;
} else {
var temp__5823__auto___13251 = cljs.core.seq(seq__11999_13133);
if(temp__5823__auto___13251){
var seq__11999_13252__$1 = temp__5823__auto___13251;
if(cljs.core.chunked_seq_QMARK_(seq__11999_13252__$1)){
var c__5673__auto___13253 = cljs.core.chunk_first(seq__11999_13252__$1);
var G__13255 = cljs.core.chunk_rest(seq__11999_13252__$1);
var G__13256 = c__5673__auto___13253;
var G__13257 = cljs.core.count(c__5673__auto___13253);
var G__13258 = (0);
seq__11999_13133 = G__13255;
chunk__12002_13134 = G__13256;
count__12003_13135 = G__13257;
i__12004_13136 = G__13258;
continue;
} else {
var child_struct_13260 = cljs.core.first(seq__11999_13252__$1);
var children_13261 = shadow.dom.dom_node(child_struct_13260);
if(cljs.core.seq_QMARK_(children_13261)){
var seq__12128_13265 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13261));
var chunk__12130_13266 = null;
var count__12131_13267 = (0);
var i__12132_13268 = (0);
while(true){
if((i__12132_13268 < count__12131_13267)){
var child_13271 = chunk__12130_13266.cljs$core$IIndexed$_nth$arity$2(null,i__12132_13268);
if(cljs.core.truth_(child_13271)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13271);


var G__13272 = seq__12128_13265;
var G__13273 = chunk__12130_13266;
var G__13274 = count__12131_13267;
var G__13275 = (i__12132_13268 + (1));
seq__12128_13265 = G__13272;
chunk__12130_13266 = G__13273;
count__12131_13267 = G__13274;
i__12132_13268 = G__13275;
continue;
} else {
var G__13276 = seq__12128_13265;
var G__13277 = chunk__12130_13266;
var G__13278 = count__12131_13267;
var G__13279 = (i__12132_13268 + (1));
seq__12128_13265 = G__13276;
chunk__12130_13266 = G__13277;
count__12131_13267 = G__13278;
i__12132_13268 = G__13279;
continue;
}
} else {
var temp__5823__auto___13280__$1 = cljs.core.seq(seq__12128_13265);
if(temp__5823__auto___13280__$1){
var seq__12128_13283__$1 = temp__5823__auto___13280__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12128_13283__$1)){
var c__5673__auto___13284 = cljs.core.chunk_first(seq__12128_13283__$1);
var G__13285 = cljs.core.chunk_rest(seq__12128_13283__$1);
var G__13286 = c__5673__auto___13284;
var G__13287 = cljs.core.count(c__5673__auto___13284);
var G__13288 = (0);
seq__12128_13265 = G__13285;
chunk__12130_13266 = G__13286;
count__12131_13267 = G__13287;
i__12132_13268 = G__13288;
continue;
} else {
var child_13290 = cljs.core.first(seq__12128_13283__$1);
if(cljs.core.truth_(child_13290)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13290);


var G__13292 = cljs.core.next(seq__12128_13283__$1);
var G__13293 = null;
var G__13294 = (0);
var G__13295 = (0);
seq__12128_13265 = G__13292;
chunk__12130_13266 = G__13293;
count__12131_13267 = G__13294;
i__12132_13268 = G__13295;
continue;
} else {
var G__13296 = cljs.core.next(seq__12128_13283__$1);
var G__13297 = null;
var G__13298 = (0);
var G__13299 = (0);
seq__12128_13265 = G__13296;
chunk__12130_13266 = G__13297;
count__12131_13267 = G__13298;
i__12132_13268 = G__13299;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13261);
}


var G__13301 = cljs.core.next(seq__11999_13252__$1);
var G__13302 = null;
var G__13303 = (0);
var G__13304 = (0);
seq__11999_13133 = G__13301;
chunk__12002_13134 = G__13302;
count__12003_13135 = G__13303;
i__12004_13136 = G__13304;
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
var seq__12263 = cljs.core.seq(node);
var chunk__12264 = null;
var count__12265 = (0);
var i__12266 = (0);
while(true){
if((i__12266 < count__12265)){
var n = chunk__12264.cljs$core$IIndexed$_nth$arity$2(null,i__12266);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13347 = seq__12263;
var G__13348 = chunk__12264;
var G__13349 = count__12265;
var G__13350 = (i__12266 + (1));
seq__12263 = G__13347;
chunk__12264 = G__13348;
count__12265 = G__13349;
i__12266 = G__13350;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12263);
if(temp__5823__auto__){
var seq__12263__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12263__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12263__$1);
var G__13353 = cljs.core.chunk_rest(seq__12263__$1);
var G__13354 = c__5673__auto__;
var G__13355 = cljs.core.count(c__5673__auto__);
var G__13356 = (0);
seq__12263 = G__13353;
chunk__12264 = G__13354;
count__12265 = G__13355;
i__12266 = G__13356;
continue;
} else {
var n = cljs.core.first(seq__12263__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13361 = cljs.core.next(seq__12263__$1);
var G__13362 = null;
var G__13363 = (0);
var G__13364 = (0);
seq__12263 = G__13361;
chunk__12264 = G__13362;
count__12265 = G__13363;
i__12266 = G__13364;
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
var G__12307 = arguments.length;
switch (G__12307) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__12327 = arguments.length;
switch (G__12327) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var G__12359 = arguments.length;
switch (G__12359) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___13450 = arguments.length;
var i__5877__auto___13452 = (0);
while(true){
if((i__5877__auto___13452 < len__5876__auto___13450)){
args__5882__auto__.push((arguments[i__5877__auto___13452]));

var G__13454 = (i__5877__auto___13452 + (1));
i__5877__auto___13452 = G__13454;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12422_13459 = cljs.core.seq(nodes);
var chunk__12423_13460 = null;
var count__12424_13461 = (0);
var i__12425_13462 = (0);
while(true){
if((i__12425_13462 < count__12424_13461)){
var node_13464 = chunk__12423_13460.cljs$core$IIndexed$_nth$arity$2(null,i__12425_13462);
fragment.appendChild(shadow.dom._to_dom(node_13464));


var G__13467 = seq__12422_13459;
var G__13468 = chunk__12423_13460;
var G__13469 = count__12424_13461;
var G__13470 = (i__12425_13462 + (1));
seq__12422_13459 = G__13467;
chunk__12423_13460 = G__13468;
count__12424_13461 = G__13469;
i__12425_13462 = G__13470;
continue;
} else {
var temp__5823__auto___13474 = cljs.core.seq(seq__12422_13459);
if(temp__5823__auto___13474){
var seq__12422_13475__$1 = temp__5823__auto___13474;
if(cljs.core.chunked_seq_QMARK_(seq__12422_13475__$1)){
var c__5673__auto___13477 = cljs.core.chunk_first(seq__12422_13475__$1);
var G__13479 = cljs.core.chunk_rest(seq__12422_13475__$1);
var G__13480 = c__5673__auto___13477;
var G__13481 = cljs.core.count(c__5673__auto___13477);
var G__13482 = (0);
seq__12422_13459 = G__13479;
chunk__12423_13460 = G__13480;
count__12424_13461 = G__13481;
i__12425_13462 = G__13482;
continue;
} else {
var node_13483 = cljs.core.first(seq__12422_13475__$1);
fragment.appendChild(shadow.dom._to_dom(node_13483));


var G__13493 = cljs.core.next(seq__12422_13475__$1);
var G__13494 = null;
var G__13495 = (0);
var G__13496 = (0);
seq__12422_13459 = G__13493;
chunk__12423_13460 = G__13494;
count__12424_13461 = G__13495;
i__12425_13462 = G__13496;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12421){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12421));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12427_13499 = cljs.core.seq(scripts);
var chunk__12428_13500 = null;
var count__12429_13501 = (0);
var i__12430_13502 = (0);
while(true){
if((i__12430_13502 < count__12429_13501)){
var vec__12439_13504 = chunk__12428_13500.cljs$core$IIndexed$_nth$arity$2(null,i__12430_13502);
var script_tag_13505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439_13504,(0),null);
var script_body_13506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439_13504,(1),null);
eval(script_body_13506);


var G__13507 = seq__12427_13499;
var G__13508 = chunk__12428_13500;
var G__13509 = count__12429_13501;
var G__13510 = (i__12430_13502 + (1));
seq__12427_13499 = G__13507;
chunk__12428_13500 = G__13508;
count__12429_13501 = G__13509;
i__12430_13502 = G__13510;
continue;
} else {
var temp__5823__auto___13511 = cljs.core.seq(seq__12427_13499);
if(temp__5823__auto___13511){
var seq__12427_13512__$1 = temp__5823__auto___13511;
if(cljs.core.chunked_seq_QMARK_(seq__12427_13512__$1)){
var c__5673__auto___13513 = cljs.core.chunk_first(seq__12427_13512__$1);
var G__13514 = cljs.core.chunk_rest(seq__12427_13512__$1);
var G__13515 = c__5673__auto___13513;
var G__13516 = cljs.core.count(c__5673__auto___13513);
var G__13517 = (0);
seq__12427_13499 = G__13514;
chunk__12428_13500 = G__13515;
count__12429_13501 = G__13516;
i__12430_13502 = G__13517;
continue;
} else {
var vec__12443_13520 = cljs.core.first(seq__12427_13512__$1);
var script_tag_13521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443_13520,(0),null);
var script_body_13522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12443_13520,(1),null);
eval(script_body_13522);


var G__13523 = cljs.core.next(seq__12427_13512__$1);
var G__13524 = null;
var G__13525 = (0);
var G__13526 = (0);
seq__12427_13499 = G__13523;
chunk__12428_13500 = G__13524;
count__12429_13501 = G__13525;
i__12430_13502 = G__13526;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12447){
var vec__12448 = p__12447;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12448,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12448,(1),null);
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
var G__12506 = arguments.length;
switch (G__12506) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
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
var seq__12513 = cljs.core.seq(style_keys);
var chunk__12514 = null;
var count__12515 = (0);
var i__12516 = (0);
while(true){
if((i__12516 < count__12515)){
var it = chunk__12514.cljs$core$IIndexed$_nth$arity$2(null,i__12516);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13546 = seq__12513;
var G__13547 = chunk__12514;
var G__13548 = count__12515;
var G__13549 = (i__12516 + (1));
seq__12513 = G__13546;
chunk__12514 = G__13547;
count__12515 = G__13548;
i__12516 = G__13549;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12513);
if(temp__5823__auto__){
var seq__12513__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12513__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12513__$1);
var G__13550 = cljs.core.chunk_rest(seq__12513__$1);
var G__13551 = c__5673__auto__;
var G__13552 = cljs.core.count(c__5673__auto__);
var G__13553 = (0);
seq__12513 = G__13550;
chunk__12514 = G__13551;
count__12515 = G__13552;
i__12516 = G__13553;
continue;
} else {
var it = cljs.core.first(seq__12513__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13613 = cljs.core.next(seq__12513__$1);
var G__13614 = null;
var G__13615 = (0);
var G__13616 = (0);
seq__12513 = G__13613;
chunk__12514 = G__13614;
count__12515 = G__13615;
i__12516 = G__13616;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12520,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12528 = k12520;
var G__12528__$1 = (((G__12528 instanceof cljs.core.Keyword))?G__12528.fqn:null);
switch (G__12528__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12520,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12538){
var vec__12539 = p__12538;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12539,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12539,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12519){
var self__ = this;
var G__12519__$1 = this;
return (new cljs.core.RecordIter((0),G__12519__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12521,other12522){
var self__ = this;
var this12521__$1 = this;
return (((!((other12522 == null)))) && ((((this12521__$1.constructor === other12522.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12521__$1.x,other12522.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12521__$1.y,other12522.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12521__$1.__extmap,other12522.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12520){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12562 = k12520;
var G__12562__$1 = (((G__12562 instanceof cljs.core.Keyword))?G__12562.fqn:null);
switch (G__12562__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12520);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12519){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12565 = cljs.core.keyword_identical_QMARK_;
var expr__12566 = k__5457__auto__;
if(cljs.core.truth_((pred__12565.cljs$core$IFn$_invoke$arity$2 ? pred__12565.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12566) : pred__12565.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12566)))){
return (new shadow.dom.Coordinate(G__12519,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12565.cljs$core$IFn$_invoke$arity$2 ? pred__12565.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12566) : pred__12565.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12566)))){
return (new shadow.dom.Coordinate(self__.x,G__12519,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12519),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12519){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12519,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12524){
var extmap__5490__auto__ = (function (){var G__12582 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12524,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12524)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12582);
} else {
return G__12582;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12524),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12524),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12588,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12600 = k12588;
var G__12600__$1 = (((G__12600 instanceof cljs.core.Keyword))?G__12600.fqn:null);
switch (G__12600__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12588,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12603){
var vec__12604 = p__12603;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12587){
var self__ = this;
var G__12587__$1 = this;
return (new cljs.core.RecordIter((0),G__12587__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12589,other12590){
var self__ = this;
var this12589__$1 = this;
return (((!((other12590 == null)))) && ((((this12589__$1.constructor === other12590.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12589__$1.w,other12590.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12589__$1.h,other12590.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12589__$1.__extmap,other12590.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12588){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12634 = k12588;
var G__12634__$1 = (((G__12634 instanceof cljs.core.Keyword))?G__12634.fqn:null);
switch (G__12634__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12588);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12587){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12636 = cljs.core.keyword_identical_QMARK_;
var expr__12637 = k__5457__auto__;
if(cljs.core.truth_((pred__12636.cljs$core$IFn$_invoke$arity$2 ? pred__12636.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12637) : pred__12636.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12637)))){
return (new shadow.dom.Size(G__12587,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12636.cljs$core$IFn$_invoke$arity$2 ? pred__12636.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12637) : pred__12636.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12637)))){
return (new shadow.dom.Size(self__.w,G__12587,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12587),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12587){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12587,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12594){
var extmap__5490__auto__ = (function (){var G__12649 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12594,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12594)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12649);
} else {
return G__12649;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12594),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12594),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__13846 = (i + (1));
var G__13847 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13846;
ret = G__13847;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12683){
var vec__12685 = p__12683;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12692 = arguments.length;
switch (G__12692) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

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
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
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
var G__13880 = ps;
var G__13881 = (i + (1));
el__$1 = G__13880;
i = G__13881;
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
var vec__12739 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12745_13888 = cljs.core.seq(props);
var chunk__12746_13889 = null;
var count__12747_13890 = (0);
var i__12748_13891 = (0);
while(true){
if((i__12748_13891 < count__12747_13890)){
var vec__12766_13893 = chunk__12746_13889.cljs$core$IIndexed$_nth$arity$2(null,i__12748_13891);
var k_13894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12766_13893,(0),null);
var v_13895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12766_13893,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_13894);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13894),v_13895);


var G__13910 = seq__12745_13888;
var G__13911 = chunk__12746_13889;
var G__13912 = count__12747_13890;
var G__13913 = (i__12748_13891 + (1));
seq__12745_13888 = G__13910;
chunk__12746_13889 = G__13911;
count__12747_13890 = G__13912;
i__12748_13891 = G__13913;
continue;
} else {
var temp__5823__auto___13915 = cljs.core.seq(seq__12745_13888);
if(temp__5823__auto___13915){
var seq__12745_13916__$1 = temp__5823__auto___13915;
if(cljs.core.chunked_seq_QMARK_(seq__12745_13916__$1)){
var c__5673__auto___13917 = cljs.core.chunk_first(seq__12745_13916__$1);
var G__13918 = cljs.core.chunk_rest(seq__12745_13916__$1);
var G__13919 = c__5673__auto___13917;
var G__13920 = cljs.core.count(c__5673__auto___13917);
var G__13921 = (0);
seq__12745_13888 = G__13918;
chunk__12746_13889 = G__13919;
count__12747_13890 = G__13920;
i__12748_13891 = G__13921;
continue;
} else {
var vec__12773_13924 = cljs.core.first(seq__12745_13916__$1);
var k_13925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773_13924,(0),null);
var v_13926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12773_13924,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_13925);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13925),v_13926);


var G__13928 = cljs.core.next(seq__12745_13916__$1);
var G__13929 = null;
var G__13930 = (0);
var G__13931 = (0);
seq__12745_13888 = G__13928;
chunk__12746_13889 = G__13929;
count__12747_13890 = G__13930;
i__12748_13891 = G__13931;
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
var vec__12781 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(1),null);
var seq__12785_13938 = cljs.core.seq(node_children);
var chunk__12787_13939 = null;
var count__12788_13940 = (0);
var i__12789_13941 = (0);
while(true){
if((i__12789_13941 < count__12788_13940)){
var child_struct_13945 = chunk__12787_13939.cljs$core$IIndexed$_nth$arity$2(null,i__12789_13941);
if((!((child_struct_13945 == null)))){
if(typeof child_struct_13945 === 'string'){
var text_13952 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13952)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13945)));
} else {
var children_13955 = shadow.dom.svg_node(child_struct_13945);
if(cljs.core.seq_QMARK_(children_13955)){
var seq__12831_13957 = cljs.core.seq(children_13955);
var chunk__12833_13958 = null;
var count__12834_13959 = (0);
var i__12835_13960 = (0);
while(true){
if((i__12835_13960 < count__12834_13959)){
var child_13962 = chunk__12833_13958.cljs$core$IIndexed$_nth$arity$2(null,i__12835_13960);
if(cljs.core.truth_(child_13962)){
node.appendChild(child_13962);


var G__13964 = seq__12831_13957;
var G__13965 = chunk__12833_13958;
var G__13966 = count__12834_13959;
var G__13967 = (i__12835_13960 + (1));
seq__12831_13957 = G__13964;
chunk__12833_13958 = G__13965;
count__12834_13959 = G__13966;
i__12835_13960 = G__13967;
continue;
} else {
var G__13969 = seq__12831_13957;
var G__13970 = chunk__12833_13958;
var G__13971 = count__12834_13959;
var G__13972 = (i__12835_13960 + (1));
seq__12831_13957 = G__13969;
chunk__12833_13958 = G__13970;
count__12834_13959 = G__13971;
i__12835_13960 = G__13972;
continue;
}
} else {
var temp__5823__auto___13974 = cljs.core.seq(seq__12831_13957);
if(temp__5823__auto___13974){
var seq__12831_13975__$1 = temp__5823__auto___13974;
if(cljs.core.chunked_seq_QMARK_(seq__12831_13975__$1)){
var c__5673__auto___13976 = cljs.core.chunk_first(seq__12831_13975__$1);
var G__13977 = cljs.core.chunk_rest(seq__12831_13975__$1);
var G__13978 = c__5673__auto___13976;
var G__13979 = cljs.core.count(c__5673__auto___13976);
var G__13980 = (0);
seq__12831_13957 = G__13977;
chunk__12833_13958 = G__13978;
count__12834_13959 = G__13979;
i__12835_13960 = G__13980;
continue;
} else {
var child_13982 = cljs.core.first(seq__12831_13975__$1);
if(cljs.core.truth_(child_13982)){
node.appendChild(child_13982);


var G__13983 = cljs.core.next(seq__12831_13975__$1);
var G__13984 = null;
var G__13985 = (0);
var G__13986 = (0);
seq__12831_13957 = G__13983;
chunk__12833_13958 = G__13984;
count__12834_13959 = G__13985;
i__12835_13960 = G__13986;
continue;
} else {
var G__13987 = cljs.core.next(seq__12831_13975__$1);
var G__13988 = null;
var G__13989 = (0);
var G__13990 = (0);
seq__12831_13957 = G__13987;
chunk__12833_13958 = G__13988;
count__12834_13959 = G__13989;
i__12835_13960 = G__13990;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13955);
}
}


var G__13994 = seq__12785_13938;
var G__13995 = chunk__12787_13939;
var G__13996 = count__12788_13940;
var G__13997 = (i__12789_13941 + (1));
seq__12785_13938 = G__13994;
chunk__12787_13939 = G__13995;
count__12788_13940 = G__13996;
i__12789_13941 = G__13997;
continue;
} else {
var G__13998 = seq__12785_13938;
var G__13999 = chunk__12787_13939;
var G__14000 = count__12788_13940;
var G__14001 = (i__12789_13941 + (1));
seq__12785_13938 = G__13998;
chunk__12787_13939 = G__13999;
count__12788_13940 = G__14000;
i__12789_13941 = G__14001;
continue;
}
} else {
var temp__5823__auto___14005 = cljs.core.seq(seq__12785_13938);
if(temp__5823__auto___14005){
var seq__12785_14007__$1 = temp__5823__auto___14005;
if(cljs.core.chunked_seq_QMARK_(seq__12785_14007__$1)){
var c__5673__auto___14008 = cljs.core.chunk_first(seq__12785_14007__$1);
var G__14009 = cljs.core.chunk_rest(seq__12785_14007__$1);
var G__14010 = c__5673__auto___14008;
var G__14011 = cljs.core.count(c__5673__auto___14008);
var G__14012 = (0);
seq__12785_13938 = G__14009;
chunk__12787_13939 = G__14010;
count__12788_13940 = G__14011;
i__12789_13941 = G__14012;
continue;
} else {
var child_struct_14014 = cljs.core.first(seq__12785_14007__$1);
if((!((child_struct_14014 == null)))){
if(typeof child_struct_14014 === 'string'){
var text_14015 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14015)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14014)));
} else {
var children_14021 = shadow.dom.svg_node(child_struct_14014);
if(cljs.core.seq_QMARK_(children_14021)){
var seq__12853_14022 = cljs.core.seq(children_14021);
var chunk__12855_14023 = null;
var count__12856_14024 = (0);
var i__12857_14025 = (0);
while(true){
if((i__12857_14025 < count__12856_14024)){
var child_14027 = chunk__12855_14023.cljs$core$IIndexed$_nth$arity$2(null,i__12857_14025);
if(cljs.core.truth_(child_14027)){
node.appendChild(child_14027);


var G__14028 = seq__12853_14022;
var G__14029 = chunk__12855_14023;
var G__14030 = count__12856_14024;
var G__14031 = (i__12857_14025 + (1));
seq__12853_14022 = G__14028;
chunk__12855_14023 = G__14029;
count__12856_14024 = G__14030;
i__12857_14025 = G__14031;
continue;
} else {
var G__14032 = seq__12853_14022;
var G__14033 = chunk__12855_14023;
var G__14034 = count__12856_14024;
var G__14035 = (i__12857_14025 + (1));
seq__12853_14022 = G__14032;
chunk__12855_14023 = G__14033;
count__12856_14024 = G__14034;
i__12857_14025 = G__14035;
continue;
}
} else {
var temp__5823__auto___14037__$1 = cljs.core.seq(seq__12853_14022);
if(temp__5823__auto___14037__$1){
var seq__12853_14038__$1 = temp__5823__auto___14037__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12853_14038__$1)){
var c__5673__auto___14039 = cljs.core.chunk_first(seq__12853_14038__$1);
var G__14040 = cljs.core.chunk_rest(seq__12853_14038__$1);
var G__14041 = c__5673__auto___14039;
var G__14042 = cljs.core.count(c__5673__auto___14039);
var G__14043 = (0);
seq__12853_14022 = G__14040;
chunk__12855_14023 = G__14041;
count__12856_14024 = G__14042;
i__12857_14025 = G__14043;
continue;
} else {
var child_14044 = cljs.core.first(seq__12853_14038__$1);
if(cljs.core.truth_(child_14044)){
node.appendChild(child_14044);


var G__14046 = cljs.core.next(seq__12853_14038__$1);
var G__14047 = null;
var G__14048 = (0);
var G__14049 = (0);
seq__12853_14022 = G__14046;
chunk__12855_14023 = G__14047;
count__12856_14024 = G__14048;
i__12857_14025 = G__14049;
continue;
} else {
var G__14050 = cljs.core.next(seq__12853_14038__$1);
var G__14051 = null;
var G__14052 = (0);
var G__14053 = (0);
seq__12853_14022 = G__14050;
chunk__12855_14023 = G__14051;
count__12856_14024 = G__14052;
i__12857_14025 = G__14053;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14021);
}
}


var G__14056 = cljs.core.next(seq__12785_14007__$1);
var G__14057 = null;
var G__14058 = (0);
var G__14059 = (0);
seq__12785_13938 = G__14056;
chunk__12787_13939 = G__14057;
count__12788_13940 = G__14058;
i__12789_13941 = G__14059;
continue;
} else {
var G__14060 = cljs.core.next(seq__12785_14007__$1);
var G__14061 = null;
var G__14062 = (0);
var G__14063 = (0);
seq__12785_13938 = G__14060;
chunk__12787_13939 = G__14061;
count__12788_13940 = G__14062;
i__12789_13941 = G__14063;
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
var args__5882__auto__ = [];
var len__5876__auto___14073 = arguments.length;
var i__5877__auto___14074 = (0);
while(true){
if((i__5877__auto___14074 < len__5876__auto___14073)){
args__5882__auto__.push((arguments[i__5877__auto___14074]));

var G__14076 = (i__5877__auto___14074 + (1));
i__5877__auto___14074 = G__14076;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12879){
var G__12880 = cljs.core.first(seq12879);
var seq12879__$1 = cljs.core.next(seq12879);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12880,seq12879__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
