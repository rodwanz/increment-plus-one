goog.provide('increment_plus_one.frontend.frontend');
if((typeof increment_plus_one !== 'undefined') && (typeof increment_plus_one.frontend !== 'undefined') && (typeof increment_plus_one.frontend.frontend !== 'undefined') && (typeof increment_plus_one.frontend.frontend.number !== 'undefined')){
} else {
increment_plus_one.frontend.frontend.number = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof increment_plus_one !== 'undefined') && (typeof increment_plus_one.frontend !== 'undefined') && (typeof increment_plus_one.frontend.frontend !== 'undefined') && (typeof increment_plus_one.frontend.frontend.root !== 'undefined')){
} else {
increment_plus_one.frontend.frontend.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
increment_plus_one.frontend.frontend.call_api_increment = (function increment_plus_one$frontend$frontend$call_api_increment(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicked"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value:",cljs.core.deref(increment_plus_one.frontend.frontend.number)], 0));

var n = (function (){var or__5142__auto__ = cljs.core.deref(increment_plus_one.frontend.frontend.number);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var c__11669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11670__auto__ = (function (){var switch__11505__auto__ = (function (state_11957){
var state_val_11958 = (state_11957[(1)]);
if((state_val_11958 === (1))){
var inst_11939 = (""+"http://localhost:3000/inc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
var inst_11940 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_11941 = [false];
var inst_11942 = cljs.core.PersistentHashMap.fromArrays(inst_11940,inst_11941);
var inst_11943 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_11939,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_11942], 0));
var state_11957__$1 = state_11957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11957__$1,(2),inst_11943);
} else {
if((state_val_11958 === (2))){
var inst_11945 = (state_11957[(7)]);
var inst_11945__$1 = (state_11957[(2)]);
var inst_11946 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_11945__$1], 0));
var inst_11947 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_11945__$1);
var inst_11948 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_11947);
var state_11957__$1 = (function (){var statearr_11959 = state_11957;
(statearr_11959[(7)] = inst_11945__$1);

(statearr_11959[(8)] = inst_11946);

return statearr_11959;
})();
if(inst_11948){
var statearr_11960_11969 = state_11957__$1;
(statearr_11960_11969[(1)] = (3));

} else {
var statearr_11961_11970 = state_11957__$1;
(statearr_11961_11970[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11958 === (3))){
var inst_11945 = (state_11957[(7)]);
var inst_11950 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_11945);
var inst_11951 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_11950);
var inst_11952 = cljs.core.reset_BANG_(increment_plus_one.frontend.frontend.number,inst_11951);
var state_11957__$1 = state_11957;
var statearr_11962_11971 = state_11957__$1;
(statearr_11962_11971[(2)] = inst_11952);

(statearr_11962_11971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11958 === (4))){
var state_11957__$1 = state_11957;
var statearr_11963_11972 = state_11957__$1;
(statearr_11963_11972[(2)] = null);

(statearr_11963_11972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11958 === (5))){
var inst_11955 = (state_11957[(2)]);
var state_11957__$1 = state_11957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11957__$1,inst_11955);
} else {
return null;
}
}
}
}
}
});
return (function() {
var increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__ = null;
var increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____0 = (function (){
var statearr_11964 = [null,null,null,null,null,null,null,null,null];
(statearr_11964[(0)] = increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__);

(statearr_11964[(1)] = (1));

return statearr_11964;
});
var increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____1 = (function (state_11957){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_11957);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e11965){var ex__11509__auto__ = e11965;
var statearr_11966_11973 = state_11957;
(statearr_11966_11973[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_11957[(4)]))){
var statearr_11967_11974 = state_11957;
(statearr_11967_11974[(1)] = cljs.core.first((state_11957[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11975 = state_11957;
state_11957 = G__11975;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__ = function(state_11957){
switch(arguments.length){
case 0:
return increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____0.call(this);
case 1:
return increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____1.call(this,state_11957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____0;
increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____1;
return increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__;
})()
})();
var state__11671__auto__ = (function (){var statearr_11968 = f__11670__auto__();
(statearr_11968[(6)] = c__11669__auto__);

return statearr_11968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11671__auto__);
}));

return c__11669__auto__;
});
increment_plus_one.frontend.frontend.home_page = (function increment_plus_one$frontend$frontend$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current value: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.deref(increment_plus_one.frontend.frontend.number)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increment_plus_one.frontend.frontend.call_api_increment,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Increment on Server"], null)], null);
});
increment_plus_one.frontend.frontend.mount_root = (function increment_plus_one$frontend$frontend$mount_root(){
if(cljs.core.truth_(cljs.core.deref(increment_plus_one.frontend.frontend.root))){
} else {
cljs.core.reset_BANG_(increment_plus_one.frontend.frontend.root,reagent.dom.client.create_root(document.getElementById("app")));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(increment_plus_one.frontend.frontend.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [increment_plus_one.frontend.frontend.home_page], null));
});
increment_plus_one.frontend.frontend.init = (function increment_plus_one$frontend$frontend$init(){
return increment_plus_one.frontend.frontend.mount_root();
});
increment_plus_one.frontend.frontend.init();

//# sourceMappingURL=increment_plus_one.frontend.frontend.js.map
