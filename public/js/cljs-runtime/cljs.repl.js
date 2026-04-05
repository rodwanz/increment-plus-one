goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19422){
var map__19428 = p__19422;
var map__19428__$1 = cljs.core.__destructure_map(map__19428);
var m = map__19428__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19428__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19447_19878 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19448_19879 = null;
var count__19449_19880 = (0);
var i__19450_19881 = (0);
while(true){
if((i__19450_19881 < count__19449_19880)){
var f_19882 = chunk__19448_19879.cljs$core$IIndexed$_nth$arity$2(null,i__19450_19881);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19882], 0));


var G__19888 = seq__19447_19878;
var G__19889 = chunk__19448_19879;
var G__19890 = count__19449_19880;
var G__19891 = (i__19450_19881 + (1));
seq__19447_19878 = G__19888;
chunk__19448_19879 = G__19889;
count__19449_19880 = G__19890;
i__19450_19881 = G__19891;
continue;
} else {
var temp__5823__auto___19892 = cljs.core.seq(seq__19447_19878);
if(temp__5823__auto___19892){
var seq__19447_19893__$1 = temp__5823__auto___19892;
if(cljs.core.chunked_seq_QMARK_(seq__19447_19893__$1)){
var c__5673__auto___19894 = cljs.core.chunk_first(seq__19447_19893__$1);
var G__19895 = cljs.core.chunk_rest(seq__19447_19893__$1);
var G__19896 = c__5673__auto___19894;
var G__19897 = cljs.core.count(c__5673__auto___19894);
var G__19898 = (0);
seq__19447_19878 = G__19895;
chunk__19448_19879 = G__19896;
count__19449_19880 = G__19897;
i__19450_19881 = G__19898;
continue;
} else {
var f_19899 = cljs.core.first(seq__19447_19893__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19899], 0));


var G__19901 = cljs.core.next(seq__19447_19893__$1);
var G__19902 = null;
var G__19903 = (0);
var G__19904 = (0);
seq__19447_19878 = G__19901;
chunk__19448_19879 = G__19902;
count__19449_19880 = G__19903;
i__19450_19881 = G__19904;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19905 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19905], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19905)))?cljs.core.second(arglists_19905):arglists_19905)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19528_19912 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19529_19913 = null;
var count__19530_19914 = (0);
var i__19531_19915 = (0);
while(true){
if((i__19531_19915 < count__19530_19914)){
var vec__19555_19916 = chunk__19529_19913.cljs$core$IIndexed$_nth$arity$2(null,i__19531_19915);
var name_19917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19555_19916,(0),null);
var map__19558_19918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19555_19916,(1),null);
var map__19558_19919__$1 = cljs.core.__destructure_map(map__19558_19918);
var doc_19920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19558_19919__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19558_19919__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19917], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19921], 0));

if(cljs.core.truth_(doc_19920)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19920], 0));
} else {
}


var G__19922 = seq__19528_19912;
var G__19923 = chunk__19529_19913;
var G__19924 = count__19530_19914;
var G__19925 = (i__19531_19915 + (1));
seq__19528_19912 = G__19922;
chunk__19529_19913 = G__19923;
count__19530_19914 = G__19924;
i__19531_19915 = G__19925;
continue;
} else {
var temp__5823__auto___19926 = cljs.core.seq(seq__19528_19912);
if(temp__5823__auto___19926){
var seq__19528_19927__$1 = temp__5823__auto___19926;
if(cljs.core.chunked_seq_QMARK_(seq__19528_19927__$1)){
var c__5673__auto___19928 = cljs.core.chunk_first(seq__19528_19927__$1);
var G__19929 = cljs.core.chunk_rest(seq__19528_19927__$1);
var G__19930 = c__5673__auto___19928;
var G__19931 = cljs.core.count(c__5673__auto___19928);
var G__19932 = (0);
seq__19528_19912 = G__19929;
chunk__19529_19913 = G__19930;
count__19530_19914 = G__19931;
i__19531_19915 = G__19932;
continue;
} else {
var vec__19576_19933 = cljs.core.first(seq__19528_19927__$1);
var name_19934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19576_19933,(0),null);
var map__19579_19935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19576_19933,(1),null);
var map__19579_19936__$1 = cljs.core.__destructure_map(map__19579_19935);
var doc_19937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579_19936__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579_19936__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19934], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19938], 0));

if(cljs.core.truth_(doc_19937)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19937], 0));
} else {
}


var G__19939 = cljs.core.next(seq__19528_19927__$1);
var G__19940 = null;
var G__19941 = (0);
var G__19942 = (0);
seq__19528_19912 = G__19939;
chunk__19529_19913 = G__19940;
count__19530_19914 = G__19941;
i__19531_19915 = G__19942;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19585 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19586 = null;
var count__19587 = (0);
var i__19588 = (0);
while(true){
if((i__19588 < count__19587)){
var role = chunk__19586.cljs$core$IIndexed$_nth$arity$2(null,i__19588);
var temp__5823__auto___19945__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19945__$1)){
var spec_19946 = temp__5823__auto___19945__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19946)], 0));
} else {
}


var G__19947 = seq__19585;
var G__19948 = chunk__19586;
var G__19949 = count__19587;
var G__19950 = (i__19588 + (1));
seq__19585 = G__19947;
chunk__19586 = G__19948;
count__19587 = G__19949;
i__19588 = G__19950;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__19585);
if(temp__5823__auto____$1){
var seq__19585__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19585__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19585__$1);
var G__19951 = cljs.core.chunk_rest(seq__19585__$1);
var G__19952 = c__5673__auto__;
var G__19953 = cljs.core.count(c__5673__auto__);
var G__19954 = (0);
seq__19585 = G__19951;
chunk__19586 = G__19952;
count__19587 = G__19953;
i__19588 = G__19954;
continue;
} else {
var role = cljs.core.first(seq__19585__$1);
var temp__5823__auto___19955__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19955__$2)){
var spec_19956 = temp__5823__auto___19955__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19956)], 0));
} else {
}


var G__19957 = cljs.core.next(seq__19585__$1);
var G__19958 = null;
var G__19959 = (0);
var G__19960 = (0);
seq__19585 = G__19957;
chunk__19586 = G__19958;
count__19587 = G__19959;
i__19588 = G__19960;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19758 = datafied_throwable;
var map__19758__$1 = cljs.core.__destructure_map(map__19758);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19758__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19758__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19758__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19759 = cljs.core.last(via);
var map__19759__$1 = cljs.core.__destructure_map(map__19759);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19759__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19759__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19759__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19760 = data;
var map__19760__$1 = cljs.core.__destructure_map(map__19760);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19760__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19760__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19760__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19761 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19761__$1 = cljs.core.__destructure_map(map__19761);
var top_data = map__19761__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19766 = phase;
var G__19766__$1 = (((G__19766 instanceof cljs.core.Keyword))?G__19766.fqn:null);
switch (G__19766__$1) {
case "read-source":
var map__19767 = data;
var map__19767__$1 = cljs.core.__destructure_map(map__19767);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19767__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19767__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19768 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19768__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19768,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19768);
var G__19768__$2 = (cljs.core.truth_((function (){var fexpr__19774 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19774.cljs$core$IFn$_invoke$arity$1 ? fexpr__19774.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19774.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19768__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19768__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19768__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19768__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19775 = top_data;
var G__19775__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19775,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19775);
var G__19775__$2 = (cljs.core.truth_((function (){var fexpr__19779 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19779.cljs$core$IFn$_invoke$arity$1 ? fexpr__19779.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19779.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19775__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19775__$1);
var G__19775__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19775__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19775__$2);
var G__19775__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19775__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19775__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19775__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19775__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19780 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19780,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19780,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19780,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19780,(3),null);
var G__19783 = top_data;
var G__19783__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19783,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19783);
var G__19783__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19783__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19783__$1);
var G__19783__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19783__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19783__$2);
var G__19783__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19783__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19783__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19783__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19783__$4;
}

break;
case "execution":
var vec__19792 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19792,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19757_SHARP_){
var or__5142__auto__ = (p1__19757_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19795 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19795.cljs$core$IFn$_invoke$arity$1 ? fexpr__19795.cljs$core$IFn$_invoke$arity$1(p1__19757_SHARP_) : fexpr__19795.call(null,p1__19757_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19805 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19805__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19805,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19805);
var G__19805__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19805__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19805__$1);
var G__19805__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19805__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19805__$2);
var G__19805__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19805__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19805__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19805__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19805__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19766__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19810){
var map__19811 = p__19810;
var map__19811__$1 = cljs.core.__destructure_map(map__19811);
var triage_data = map__19811__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19819 = phase;
var G__19819__$1 = (((G__19819 instanceof cljs.core.Keyword))?G__19819.fqn:null);
switch (G__19819__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19820 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19821 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19822 = loc;
var G__19823 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19824_19980 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19825_19981 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19826_19982 = true;
var _STAR_print_fn_STAR__temp_val__19827_19983 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19826_19982);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19827_19983);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19808_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19808_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19825_19981);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19824_19980);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19820,G__19821,G__19822,G__19823) : format.call(null,G__19820,G__19821,G__19822,G__19823));

break;
case "macroexpansion":
var G__19835 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19836 = cause_type;
var G__19837 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19838 = loc;
var G__19839 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19835,G__19836,G__19837,G__19838,G__19839) : format.call(null,G__19835,G__19836,G__19837,G__19838,G__19839));

break;
case "compile-syntax-check":
var G__19841 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19842 = cause_type;
var G__19843 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19844 = loc;
var G__19845 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19841,G__19842,G__19843,G__19844,G__19845) : format.call(null,G__19841,G__19842,G__19843,G__19844,G__19845));

break;
case "compilation":
var G__19846 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19847 = cause_type;
var G__19848 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19849 = loc;
var G__19850 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19846,G__19847,G__19848,G__19849,G__19850) : format.call(null,G__19846,G__19847,G__19848,G__19849,G__19850));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19851 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19852 = symbol;
var G__19853 = loc;
var G__19854 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19855_19987 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19856_19988 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19857_19989 = true;
var _STAR_print_fn_STAR__temp_val__19858_19990 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19857_19989);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19858_19990);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19809_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19809_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19856_19988);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19855_19987);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19851,G__19852,G__19853,G__19854) : format.call(null,G__19851,G__19852,G__19853,G__19854));
} else {
var G__19859 = "Execution error%s at %s(%s).\n%s\n";
var G__19860 = cause_type;
var G__19861 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19862 = loc;
var G__19863 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19859,G__19860,G__19861,G__19862,G__19863) : format.call(null,G__19859,G__19860,G__19861,G__19862,G__19863));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19819__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
