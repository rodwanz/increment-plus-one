goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___12268 = arguments.length;
var i__5877__auto___12269 = (0);
while(true){
if((i__5877__auto___12269 < len__5876__auto___12268)){
args__5882__auto__.push((arguments[i__5877__auto___12269]));

var G__12273 = (i__5877__auto___12269 + (1));
i__5877__auto___12269 = G__12273;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq11828){
var G__11829 = cljs.core.first(seq11828);
var seq11828__$1 = cljs.core.next(seq11828);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11829,seq11828__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__11836 = cljs.core.seq(sources);
var chunk__11837 = null;
var count__11838 = (0);
var i__11839 = (0);
while(true){
if((i__11839 < count__11838)){
var map__11855 = chunk__11837.cljs$core$IIndexed$_nth$arity$2(null,i__11839);
var map__11855__$1 = cljs.core.__destructure_map(map__11855);
var src = map__11855__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11855__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11855__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11855__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11855__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e11856){var e_12274 = e11856;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_12274);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_12274.message))));
}

var G__12275 = seq__11836;
var G__12276 = chunk__11837;
var G__12277 = count__11838;
var G__12278 = (i__11839 + (1));
seq__11836 = G__12275;
chunk__11837 = G__12276;
count__11838 = G__12277;
i__11839 = G__12278;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11836);
if(temp__5823__auto__){
var seq__11836__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11836__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11836__$1);
var G__12279 = cljs.core.chunk_rest(seq__11836__$1);
var G__12280 = c__5673__auto__;
var G__12281 = cljs.core.count(c__5673__auto__);
var G__12282 = (0);
seq__11836 = G__12279;
chunk__11837 = G__12280;
count__11838 = G__12281;
i__11839 = G__12282;
continue;
} else {
var map__11857 = cljs.core.first(seq__11836__$1);
var map__11857__$1 = cljs.core.__destructure_map(map__11857);
var src = map__11857__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11857__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11857__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11857__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11857__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e11858){var e_12283 = e11858;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_12283);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_12283.message))));
}

var G__12284 = cljs.core.next(seq__11836__$1);
var G__12285 = null;
var G__12286 = (0);
var G__12287 = (0);
seq__11836 = G__12284;
chunk__11837 = G__12285;
count__11838 = G__12286;
i__11839 = G__12287;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__11861 = cljs.core.seq(js_requires);
var chunk__11862 = null;
var count__11863 = (0);
var i__11864 = (0);
while(true){
if((i__11864 < count__11863)){
var js_ns = chunk__11862.cljs$core$IIndexed$_nth$arity$2(null,i__11864);
var require_str_12288 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_12288);


var G__12290 = seq__11861;
var G__12291 = chunk__11862;
var G__12292 = count__11863;
var G__12293 = (i__11864 + (1));
seq__11861 = G__12290;
chunk__11862 = G__12291;
count__11863 = G__12292;
i__11864 = G__12293;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11861);
if(temp__5823__auto__){
var seq__11861__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11861__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11861__$1);
var G__12294 = cljs.core.chunk_rest(seq__11861__$1);
var G__12295 = c__5673__auto__;
var G__12296 = cljs.core.count(c__5673__auto__);
var G__12297 = (0);
seq__11861 = G__12294;
chunk__11862 = G__12295;
count__11863 = G__12296;
i__11864 = G__12297;
continue;
} else {
var js_ns = cljs.core.first(seq__11861__$1);
var require_str_12298 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_12298);


var G__12301 = cljs.core.next(seq__11861__$1);
var G__12302 = null;
var G__12303 = (0);
var G__12304 = (0);
seq__11861 = G__12301;
chunk__11862 = G__12302;
count__11863 = G__12303;
i__11864 = G__12304;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__11866){
var map__11867 = p__11866;
var map__11867__$1 = cljs.core.__destructure_map(map__11867);
var msg = map__11867__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11867__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11867__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__11868(s__11869){
return (new cljs.core.LazySeq(null,(function (){
var s__11869__$1 = s__11869;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__11869__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__11874 = cljs.core.first(xs__6383__auto__);
var map__11874__$1 = cljs.core.__destructure_map(map__11874);
var src = map__11874__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11874__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11874__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__11869__$1,map__11874,map__11874__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__11867,map__11867__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__11868_$_iter__11870(s__11871){
return (new cljs.core.LazySeq(null,((function (s__11869__$1,map__11874,map__11874__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__11867,map__11867__$1,msg,info,reload_info){
return (function (){
var s__11871__$1 = s__11871;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__11871__$1);
if(temp__5823__auto____$1){
var s__11871__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11871__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__11871__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__11873 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__11872 = (0);
while(true){
if((i__11872 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__11872);
cljs.core.chunk_append(b__11873,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__12306 = (i__11872 + (1));
i__11872 = G__12306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11873),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__11868_$_iter__11870(cljs.core.chunk_rest(s__11871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11873),null);
}
} else {
var warning = cljs.core.first(s__11871__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__11868_$_iter__11870(cljs.core.rest(s__11871__$2)));
}
} else {
return null;
}
break;
}
});})(s__11869__$1,map__11874,map__11874__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__11867,map__11867__$1,msg,info,reload_info))
,null,null));
});})(s__11869__$1,map__11874,map__11874__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__11867,map__11867__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__11868(cljs.core.rest(s__11869__$1)));
} else {
var G__12309 = cljs.core.rest(s__11869__$1);
s__11869__$1 = G__12309;
continue;
}
} else {
var G__12310 = cljs.core.rest(s__11869__$1);
s__11869__$1 = G__12310;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__11875_12312 = cljs.core.seq(warnings);
var chunk__11876_12313 = null;
var count__11877_12314 = (0);
var i__11878_12315 = (0);
while(true){
if((i__11878_12315 < count__11877_12314)){
var map__11881_12316 = chunk__11876_12313.cljs$core$IIndexed$_nth$arity$2(null,i__11878_12315);
var map__11881_12317__$1 = cljs.core.__destructure_map(map__11881_12316);
var w_12318 = map__11881_12317__$1;
var msg_12319__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881_12317__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_12320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881_12317__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881_12317__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_12322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11881_12317__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_12322)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12320)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_12321)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_12319__$1)));


var G__12327 = seq__11875_12312;
var G__12328 = chunk__11876_12313;
var G__12329 = count__11877_12314;
var G__12330 = (i__11878_12315 + (1));
seq__11875_12312 = G__12327;
chunk__11876_12313 = G__12328;
count__11877_12314 = G__12329;
i__11878_12315 = G__12330;
continue;
} else {
var temp__5823__auto___12331 = cljs.core.seq(seq__11875_12312);
if(temp__5823__auto___12331){
var seq__11875_12332__$1 = temp__5823__auto___12331;
if(cljs.core.chunked_seq_QMARK_(seq__11875_12332__$1)){
var c__5673__auto___12333 = cljs.core.chunk_first(seq__11875_12332__$1);
var G__12334 = cljs.core.chunk_rest(seq__11875_12332__$1);
var G__12335 = c__5673__auto___12333;
var G__12336 = cljs.core.count(c__5673__auto___12333);
var G__12337 = (0);
seq__11875_12312 = G__12334;
chunk__11876_12313 = G__12335;
count__11877_12314 = G__12336;
i__11878_12315 = G__12337;
continue;
} else {
var map__11882_12338 = cljs.core.first(seq__11875_12332__$1);
var map__11882_12339__$1 = cljs.core.__destructure_map(map__11882_12338);
var w_12340 = map__11882_12339__$1;
var msg_12341__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882_12339__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_12342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882_12339__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882_12339__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_12344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882_12339__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_12344)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_12342)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_12343)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_12341__$1)));


var G__12345 = cljs.core.next(seq__11875_12332__$1);
var G__12346 = null;
var G__12347 = (0);
var G__12348 = (0);
seq__11875_12312 = G__12345;
chunk__11876_12313 = G__12346;
count__11877_12314 = G__12347;
i__11878_12315 = G__12348;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__11865_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__11865_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__11884 = node_uri;
G__11884.setQuery(null);

G__11884.setPath(new$);

return G__11884;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__11885){
var map__11886 = p__11885;
var map__11886__$1 = cljs.core.__destructure_map(map__11886);
var msg = map__11886__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11886__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11886__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__11887 = cljs.core.seq(updates);
var chunk__11889 = null;
var count__11890 = (0);
var i__11891 = (0);
while(true){
if((i__11891 < count__11890)){
var path = chunk__11889.cljs$core$IIndexed$_nth$arity$2(null,i__11891);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__12024_12353 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__12028_12354 = null;
var count__12029_12355 = (0);
var i__12030_12356 = (0);
while(true){
if((i__12030_12356 < count__12029_12355)){
var node_12357 = chunk__12028_12354.cljs$core$IIndexed$_nth$arity$2(null,i__12030_12356);
if(cljs.core.not(node_12357.shadow$old)){
var path_match_12358 = shadow.cljs.devtools.client.browser.match_paths(node_12357.getAttribute("href"),path);
if(cljs.core.truth_(path_match_12358)){
var new_link_12359 = (function (){var G__12081 = node_12357.cloneNode(true);
G__12081.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_12358)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__12081;
})();
(node_12357.shadow$old = true);

(new_link_12359.onload = ((function (seq__12024_12353,chunk__12028_12354,count__12029_12355,i__12030_12356,seq__11887,chunk__11889,count__11890,i__11891,new_link_12359,path_match_12358,node_12357,path,map__11886,map__11886__$1,msg,updates,reload_info){
return (function (e){
var seq__12082_12360 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12084_12361 = null;
var count__12085_12362 = (0);
var i__12086_12363 = (0);
while(true){
if((i__12086_12363 < count__12085_12362)){
var map__12094_12364 = chunk__12084_12361.cljs$core$IIndexed$_nth$arity$2(null,i__12086_12363);
var map__12094_12365__$1 = cljs.core.__destructure_map(map__12094_12364);
var task_12366 = map__12094_12365__$1;
var fn_str_12367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12094_12365__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12094_12365__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12370 = goog.getObjectByName(fn_str_12367,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12368)));

(fn_obj_12370.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12370.cljs$core$IFn$_invoke$arity$2(path,new_link_12359) : fn_obj_12370.call(null,path,new_link_12359));


var G__12371 = seq__12082_12360;
var G__12372 = chunk__12084_12361;
var G__12373 = count__12085_12362;
var G__12374 = (i__12086_12363 + (1));
seq__12082_12360 = G__12371;
chunk__12084_12361 = G__12372;
count__12085_12362 = G__12373;
i__12086_12363 = G__12374;
continue;
} else {
var temp__5823__auto___12375 = cljs.core.seq(seq__12082_12360);
if(temp__5823__auto___12375){
var seq__12082_12380__$1 = temp__5823__auto___12375;
if(cljs.core.chunked_seq_QMARK_(seq__12082_12380__$1)){
var c__5673__auto___12381 = cljs.core.chunk_first(seq__12082_12380__$1);
var G__12382 = cljs.core.chunk_rest(seq__12082_12380__$1);
var G__12383 = c__5673__auto___12381;
var G__12384 = cljs.core.count(c__5673__auto___12381);
var G__12385 = (0);
seq__12082_12360 = G__12382;
chunk__12084_12361 = G__12383;
count__12085_12362 = G__12384;
i__12086_12363 = G__12385;
continue;
} else {
var map__12101_12387 = cljs.core.first(seq__12082_12380__$1);
var map__12101_12388__$1 = cljs.core.__destructure_map(map__12101_12387);
var task_12389 = map__12101_12388__$1;
var fn_str_12390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12101_12388__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12101_12388__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12393 = goog.getObjectByName(fn_str_12390,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12391)));

(fn_obj_12393.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12393.cljs$core$IFn$_invoke$arity$2(path,new_link_12359) : fn_obj_12393.call(null,path,new_link_12359));


var G__12394 = cljs.core.next(seq__12082_12380__$1);
var G__12395 = null;
var G__12396 = (0);
var G__12397 = (0);
seq__12082_12360 = G__12394;
chunk__12084_12361 = G__12395;
count__12085_12362 = G__12396;
i__12086_12363 = G__12397;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_12357);
});})(seq__12024_12353,chunk__12028_12354,count__12029_12355,i__12030_12356,seq__11887,chunk__11889,count__11890,i__11891,new_link_12359,path_match_12358,node_12357,path,map__11886,map__11886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_12358], 0));

goog.dom.insertSiblingAfter(new_link_12359,node_12357);


var G__12401 = seq__12024_12353;
var G__12402 = chunk__12028_12354;
var G__12403 = count__12029_12355;
var G__12404 = (i__12030_12356 + (1));
seq__12024_12353 = G__12401;
chunk__12028_12354 = G__12402;
count__12029_12355 = G__12403;
i__12030_12356 = G__12404;
continue;
} else {
var G__12405 = seq__12024_12353;
var G__12406 = chunk__12028_12354;
var G__12407 = count__12029_12355;
var G__12408 = (i__12030_12356 + (1));
seq__12024_12353 = G__12405;
chunk__12028_12354 = G__12406;
count__12029_12355 = G__12407;
i__12030_12356 = G__12408;
continue;
}
} else {
var G__12409 = seq__12024_12353;
var G__12410 = chunk__12028_12354;
var G__12411 = count__12029_12355;
var G__12412 = (i__12030_12356 + (1));
seq__12024_12353 = G__12409;
chunk__12028_12354 = G__12410;
count__12029_12355 = G__12411;
i__12030_12356 = G__12412;
continue;
}
} else {
var temp__5823__auto___12413 = cljs.core.seq(seq__12024_12353);
if(temp__5823__auto___12413){
var seq__12024_12414__$1 = temp__5823__auto___12413;
if(cljs.core.chunked_seq_QMARK_(seq__12024_12414__$1)){
var c__5673__auto___12415 = cljs.core.chunk_first(seq__12024_12414__$1);
var G__12416 = cljs.core.chunk_rest(seq__12024_12414__$1);
var G__12417 = c__5673__auto___12415;
var G__12418 = cljs.core.count(c__5673__auto___12415);
var G__12419 = (0);
seq__12024_12353 = G__12416;
chunk__12028_12354 = G__12417;
count__12029_12355 = G__12418;
i__12030_12356 = G__12419;
continue;
} else {
var node_12420 = cljs.core.first(seq__12024_12414__$1);
if(cljs.core.not(node_12420.shadow$old)){
var path_match_12424 = shadow.cljs.devtools.client.browser.match_paths(node_12420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_12424)){
var new_link_12425 = (function (){var G__12141 = node_12420.cloneNode(true);
G__12141.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_12424)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__12141;
})();
(node_12420.shadow$old = true);

(new_link_12425.onload = ((function (seq__12024_12353,chunk__12028_12354,count__12029_12355,i__12030_12356,seq__11887,chunk__11889,count__11890,i__11891,new_link_12425,path_match_12424,node_12420,seq__12024_12414__$1,temp__5823__auto___12413,path,map__11886,map__11886__$1,msg,updates,reload_info){
return (function (e){
var seq__12142_12426 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12144_12427 = null;
var count__12145_12428 = (0);
var i__12146_12429 = (0);
while(true){
if((i__12146_12429 < count__12145_12428)){
var map__12150_12434 = chunk__12144_12427.cljs$core$IIndexed$_nth$arity$2(null,i__12146_12429);
var map__12150_12435__$1 = cljs.core.__destructure_map(map__12150_12434);
var task_12436 = map__12150_12435__$1;
var fn_str_12437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12150_12435__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12150_12435__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12443 = goog.getObjectByName(fn_str_12437,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12438)));

(fn_obj_12443.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12443.cljs$core$IFn$_invoke$arity$2(path,new_link_12425) : fn_obj_12443.call(null,path,new_link_12425));


var G__12444 = seq__12142_12426;
var G__12445 = chunk__12144_12427;
var G__12446 = count__12145_12428;
var G__12447 = (i__12146_12429 + (1));
seq__12142_12426 = G__12444;
chunk__12144_12427 = G__12445;
count__12145_12428 = G__12446;
i__12146_12429 = G__12447;
continue;
} else {
var temp__5823__auto___12448__$1 = cljs.core.seq(seq__12142_12426);
if(temp__5823__auto___12448__$1){
var seq__12142_12449__$1 = temp__5823__auto___12448__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12142_12449__$1)){
var c__5673__auto___12450 = cljs.core.chunk_first(seq__12142_12449__$1);
var G__12451 = cljs.core.chunk_rest(seq__12142_12449__$1);
var G__12452 = c__5673__auto___12450;
var G__12453 = cljs.core.count(c__5673__auto___12450);
var G__12454 = (0);
seq__12142_12426 = G__12451;
chunk__12144_12427 = G__12452;
count__12145_12428 = G__12453;
i__12146_12429 = G__12454;
continue;
} else {
var map__12151_12455 = cljs.core.first(seq__12142_12449__$1);
var map__12151_12456__$1 = cljs.core.__destructure_map(map__12151_12455);
var task_12457 = map__12151_12456__$1;
var fn_str_12458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12151_12456__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12151_12456__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12460 = goog.getObjectByName(fn_str_12458,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12459)));

(fn_obj_12460.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12460.cljs$core$IFn$_invoke$arity$2(path,new_link_12425) : fn_obj_12460.call(null,path,new_link_12425));


var G__12461 = cljs.core.next(seq__12142_12449__$1);
var G__12462 = null;
var G__12463 = (0);
var G__12464 = (0);
seq__12142_12426 = G__12461;
chunk__12144_12427 = G__12462;
count__12145_12428 = G__12463;
i__12146_12429 = G__12464;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_12420);
});})(seq__12024_12353,chunk__12028_12354,count__12029_12355,i__12030_12356,seq__11887,chunk__11889,count__11890,i__11891,new_link_12425,path_match_12424,node_12420,seq__12024_12414__$1,temp__5823__auto___12413,path,map__11886,map__11886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_12424], 0));

goog.dom.insertSiblingAfter(new_link_12425,node_12420);


var G__12465 = cljs.core.next(seq__12024_12414__$1);
var G__12466 = null;
var G__12467 = (0);
var G__12468 = (0);
seq__12024_12353 = G__12465;
chunk__12028_12354 = G__12466;
count__12029_12355 = G__12467;
i__12030_12356 = G__12468;
continue;
} else {
var G__12469 = cljs.core.next(seq__12024_12414__$1);
var G__12470 = null;
var G__12471 = (0);
var G__12472 = (0);
seq__12024_12353 = G__12469;
chunk__12028_12354 = G__12470;
count__12029_12355 = G__12471;
i__12030_12356 = G__12472;
continue;
}
} else {
var G__12473 = cljs.core.next(seq__12024_12414__$1);
var G__12474 = null;
var G__12475 = (0);
var G__12476 = (0);
seq__12024_12353 = G__12473;
chunk__12028_12354 = G__12474;
count__12029_12355 = G__12475;
i__12030_12356 = G__12476;
continue;
}
}
} else {
}
}
break;
}


var G__12478 = seq__11887;
var G__12479 = chunk__11889;
var G__12480 = count__11890;
var G__12481 = (i__11891 + (1));
seq__11887 = G__12478;
chunk__11889 = G__12479;
count__11890 = G__12480;
i__11891 = G__12481;
continue;
} else {
var G__12482 = seq__11887;
var G__12483 = chunk__11889;
var G__12484 = count__11890;
var G__12485 = (i__11891 + (1));
seq__11887 = G__12482;
chunk__11889 = G__12483;
count__11890 = G__12484;
i__11891 = G__12485;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11887);
if(temp__5823__auto__){
var seq__11887__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11887__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11887__$1);
var G__12486 = cljs.core.chunk_rest(seq__11887__$1);
var G__12487 = c__5673__auto__;
var G__12488 = cljs.core.count(c__5673__auto__);
var G__12489 = (0);
seq__11887 = G__12486;
chunk__11889 = G__12487;
count__11890 = G__12488;
i__11891 = G__12489;
continue;
} else {
var path = cljs.core.first(seq__11887__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__12152_12491 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__12156_12492 = null;
var count__12157_12493 = (0);
var i__12158_12494 = (0);
while(true){
if((i__12158_12494 < count__12157_12493)){
var node_12495 = chunk__12156_12492.cljs$core$IIndexed$_nth$arity$2(null,i__12158_12494);
if(cljs.core.not(node_12495.shadow$old)){
var path_match_12496 = shadow.cljs.devtools.client.browser.match_paths(node_12495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_12496)){
var new_link_12497 = (function (){var G__12196 = node_12495.cloneNode(true);
G__12196.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_12496)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__12196;
})();
(node_12495.shadow$old = true);

(new_link_12497.onload = ((function (seq__12152_12491,chunk__12156_12492,count__12157_12493,i__12158_12494,seq__11887,chunk__11889,count__11890,i__11891,new_link_12497,path_match_12496,node_12495,path,seq__11887__$1,temp__5823__auto__,map__11886,map__11886__$1,msg,updates,reload_info){
return (function (e){
var seq__12197_12498 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12199_12499 = null;
var count__12200_12500 = (0);
var i__12201_12501 = (0);
while(true){
if((i__12201_12501 < count__12200_12500)){
var map__12208_12502 = chunk__12199_12499.cljs$core$IIndexed$_nth$arity$2(null,i__12201_12501);
var map__12208_12503__$1 = cljs.core.__destructure_map(map__12208_12502);
var task_12504 = map__12208_12503__$1;
var fn_str_12505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12208_12503__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12208_12503__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12507 = goog.getObjectByName(fn_str_12505,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12506)));

(fn_obj_12507.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12507.cljs$core$IFn$_invoke$arity$2(path,new_link_12497) : fn_obj_12507.call(null,path,new_link_12497));


var G__12508 = seq__12197_12498;
var G__12509 = chunk__12199_12499;
var G__12510 = count__12200_12500;
var G__12511 = (i__12201_12501 + (1));
seq__12197_12498 = G__12508;
chunk__12199_12499 = G__12509;
count__12200_12500 = G__12510;
i__12201_12501 = G__12511;
continue;
} else {
var temp__5823__auto___12512__$1 = cljs.core.seq(seq__12197_12498);
if(temp__5823__auto___12512__$1){
var seq__12197_12513__$1 = temp__5823__auto___12512__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12197_12513__$1)){
var c__5673__auto___12515 = cljs.core.chunk_first(seq__12197_12513__$1);
var G__12516 = cljs.core.chunk_rest(seq__12197_12513__$1);
var G__12518 = c__5673__auto___12515;
var G__12519 = cljs.core.count(c__5673__auto___12515);
var G__12520 = (0);
seq__12197_12498 = G__12516;
chunk__12199_12499 = G__12518;
count__12200_12500 = G__12519;
i__12201_12501 = G__12520;
continue;
} else {
var map__12209_12521 = cljs.core.first(seq__12197_12513__$1);
var map__12209_12522__$1 = cljs.core.__destructure_map(map__12209_12521);
var task_12523 = map__12209_12522__$1;
var fn_str_12524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12209_12522__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12209_12522__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12528 = goog.getObjectByName(fn_str_12524,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12525)));

(fn_obj_12528.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12528.cljs$core$IFn$_invoke$arity$2(path,new_link_12497) : fn_obj_12528.call(null,path,new_link_12497));


var G__12529 = cljs.core.next(seq__12197_12513__$1);
var G__12530 = null;
var G__12531 = (0);
var G__12532 = (0);
seq__12197_12498 = G__12529;
chunk__12199_12499 = G__12530;
count__12200_12500 = G__12531;
i__12201_12501 = G__12532;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_12495);
});})(seq__12152_12491,chunk__12156_12492,count__12157_12493,i__12158_12494,seq__11887,chunk__11889,count__11890,i__11891,new_link_12497,path_match_12496,node_12495,path,seq__11887__$1,temp__5823__auto__,map__11886,map__11886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_12496], 0));

goog.dom.insertSiblingAfter(new_link_12497,node_12495);


var G__12533 = seq__12152_12491;
var G__12534 = chunk__12156_12492;
var G__12535 = count__12157_12493;
var G__12536 = (i__12158_12494 + (1));
seq__12152_12491 = G__12533;
chunk__12156_12492 = G__12534;
count__12157_12493 = G__12535;
i__12158_12494 = G__12536;
continue;
} else {
var G__12540 = seq__12152_12491;
var G__12541 = chunk__12156_12492;
var G__12542 = count__12157_12493;
var G__12543 = (i__12158_12494 + (1));
seq__12152_12491 = G__12540;
chunk__12156_12492 = G__12541;
count__12157_12493 = G__12542;
i__12158_12494 = G__12543;
continue;
}
} else {
var G__12544 = seq__12152_12491;
var G__12545 = chunk__12156_12492;
var G__12546 = count__12157_12493;
var G__12547 = (i__12158_12494 + (1));
seq__12152_12491 = G__12544;
chunk__12156_12492 = G__12545;
count__12157_12493 = G__12546;
i__12158_12494 = G__12547;
continue;
}
} else {
var temp__5823__auto___12548__$1 = cljs.core.seq(seq__12152_12491);
if(temp__5823__auto___12548__$1){
var seq__12152_12549__$1 = temp__5823__auto___12548__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12152_12549__$1)){
var c__5673__auto___12550 = cljs.core.chunk_first(seq__12152_12549__$1);
var G__12551 = cljs.core.chunk_rest(seq__12152_12549__$1);
var G__12552 = c__5673__auto___12550;
var G__12553 = cljs.core.count(c__5673__auto___12550);
var G__12554 = (0);
seq__12152_12491 = G__12551;
chunk__12156_12492 = G__12552;
count__12157_12493 = G__12553;
i__12158_12494 = G__12554;
continue;
} else {
var node_12555 = cljs.core.first(seq__12152_12549__$1);
if(cljs.core.not(node_12555.shadow$old)){
var path_match_12556 = shadow.cljs.devtools.client.browser.match_paths(node_12555.getAttribute("href"),path);
if(cljs.core.truth_(path_match_12556)){
var new_link_12557 = (function (){var G__12210 = node_12555.cloneNode(true);
G__12210.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_12556)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__12210;
})();
(node_12555.shadow$old = true);

(new_link_12557.onload = ((function (seq__12152_12491,chunk__12156_12492,count__12157_12493,i__12158_12494,seq__11887,chunk__11889,count__11890,i__11891,new_link_12557,path_match_12556,node_12555,seq__12152_12549__$1,temp__5823__auto___12548__$1,path,seq__11887__$1,temp__5823__auto__,map__11886,map__11886__$1,msg,updates,reload_info){
return (function (e){
var seq__12211_12558 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__12213_12559 = null;
var count__12214_12560 = (0);
var i__12215_12561 = (0);
while(true){
if((i__12215_12561 < count__12214_12560)){
var map__12222_12562 = chunk__12213_12559.cljs$core$IIndexed$_nth$arity$2(null,i__12215_12561);
var map__12222_12563__$1 = cljs.core.__destructure_map(map__12222_12562);
var task_12564 = map__12222_12563__$1;
var fn_str_12565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12222_12563__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12222_12563__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12567 = goog.getObjectByName(fn_str_12565,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12566)));

(fn_obj_12567.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12567.cljs$core$IFn$_invoke$arity$2(path,new_link_12557) : fn_obj_12567.call(null,path,new_link_12557));


var G__12568 = seq__12211_12558;
var G__12569 = chunk__12213_12559;
var G__12570 = count__12214_12560;
var G__12571 = (i__12215_12561 + (1));
seq__12211_12558 = G__12568;
chunk__12213_12559 = G__12569;
count__12214_12560 = G__12570;
i__12215_12561 = G__12571;
continue;
} else {
var temp__5823__auto___12572__$2 = cljs.core.seq(seq__12211_12558);
if(temp__5823__auto___12572__$2){
var seq__12211_12573__$1 = temp__5823__auto___12572__$2;
if(cljs.core.chunked_seq_QMARK_(seq__12211_12573__$1)){
var c__5673__auto___12574 = cljs.core.chunk_first(seq__12211_12573__$1);
var G__12575 = cljs.core.chunk_rest(seq__12211_12573__$1);
var G__12576 = c__5673__auto___12574;
var G__12577 = cljs.core.count(c__5673__auto___12574);
var G__12578 = (0);
seq__12211_12558 = G__12575;
chunk__12213_12559 = G__12576;
count__12214_12560 = G__12577;
i__12215_12561 = G__12578;
continue;
} else {
var map__12225_12579 = cljs.core.first(seq__12211_12573__$1);
var map__12225_12580__$1 = cljs.core.__destructure_map(map__12225_12579);
var task_12581 = map__12225_12580__$1;
var fn_str_12582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12225_12580__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_12583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12225_12580__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_12584 = goog.getObjectByName(fn_str_12582,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_12583)));

(fn_obj_12584.cljs$core$IFn$_invoke$arity$2 ? fn_obj_12584.cljs$core$IFn$_invoke$arity$2(path,new_link_12557) : fn_obj_12584.call(null,path,new_link_12557));


var G__12585 = cljs.core.next(seq__12211_12573__$1);
var G__12586 = null;
var G__12587 = (0);
var G__12588 = (0);
seq__12211_12558 = G__12585;
chunk__12213_12559 = G__12586;
count__12214_12560 = G__12587;
i__12215_12561 = G__12588;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_12555);
});})(seq__12152_12491,chunk__12156_12492,count__12157_12493,i__12158_12494,seq__11887,chunk__11889,count__11890,i__11891,new_link_12557,path_match_12556,node_12555,seq__12152_12549__$1,temp__5823__auto___12548__$1,path,seq__11887__$1,temp__5823__auto__,map__11886,map__11886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_12556], 0));

goog.dom.insertSiblingAfter(new_link_12557,node_12555);


var G__12589 = cljs.core.next(seq__12152_12549__$1);
var G__12590 = null;
var G__12591 = (0);
var G__12592 = (0);
seq__12152_12491 = G__12589;
chunk__12156_12492 = G__12590;
count__12157_12493 = G__12591;
i__12158_12494 = G__12592;
continue;
} else {
var G__12593 = cljs.core.next(seq__12152_12549__$1);
var G__12594 = null;
var G__12595 = (0);
var G__12596 = (0);
seq__12152_12491 = G__12593;
chunk__12156_12492 = G__12594;
count__12157_12493 = G__12595;
i__12158_12494 = G__12596;
continue;
}
} else {
var G__12597 = cljs.core.next(seq__12152_12549__$1);
var G__12598 = null;
var G__12599 = (0);
var G__12600 = (0);
seq__12152_12491 = G__12597;
chunk__12156_12492 = G__12598;
count__12157_12493 = G__12599;
i__12158_12494 = G__12600;
continue;
}
}
} else {
}
}
break;
}


var G__12601 = cljs.core.next(seq__11887__$1);
var G__12602 = null;
var G__12603 = (0);
var G__12604 = (0);
seq__11887 = G__12601;
chunk__11889 = G__12602;
count__11890 = G__12603;
i__11891 = G__12604;
continue;
} else {
var G__12605 = cljs.core.next(seq__11887__$1);
var G__12606 = null;
var G__12607 = (0);
var G__12608 = (0);
seq__11887 = G__12605;
chunk__11889 = G__12606;
count__11890 = G__12607;
i__11891 = G__12608;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__12231 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__12231) : success.call(null,G__12231));
}catch (e12230){var e = e12230;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__12232,success,fail){
var map__12233 = p__12232;
var map__12233__$1 = cljs.core.__destructure_map(map__12233);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12233__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__12235 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__12235) : success.call(null,G__12235));
}catch (e12234){var e = e12234;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__12236,done,error){
var map__12238 = p__12236;
var map__12238__$1 = cljs.core.__destructure_map(map__12238);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12238__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__12239,done,error){
var map__12240 = p__12239;
var map__12240__$1 = cljs.core.__destructure_map(map__12240);
var msg = map__12240__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12240__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12240__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12240__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__12244){
var map__12245 = p__12244;
var map__12245__$1 = cljs.core.__destructure_map(map__12245);
var src = map__12245__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12245__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__12249 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__12249) : done.call(null,G__12249));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__12250){
var map__12251 = p__12250;
var map__12251__$1 = cljs.core.__destructure_map(map__12251);
var msg__$1 = map__12251__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12251__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e12252){var ex = e12252;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__12253){
var map__12254 = p__12253;
var map__12254__$1 = cljs.core.__destructure_map(map__12254);
var env = map__12254__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12254__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__12261){
var map__12262 = p__12261;
var map__12262__$1 = cljs.core.__destructure_map(map__12262);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12262__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12262__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__12264){
var map__12265 = p__12264;
var map__12265__$1 = cljs.core.__destructure_map(map__12265);
var svc = map__12265__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12265__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
