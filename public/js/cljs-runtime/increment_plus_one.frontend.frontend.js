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
var f__11670__auto__ = (function (){var switch__11505__auto__ = (function (state_12142){
var state_val_12143 = (state_12142[(1)]);
if((state_val_12143 === (1))){
var inst_12124 = (""+"http://localhost:3000/api/increment");
var inst_12125 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12126 = [false];
var inst_12127 = cljs.core.PersistentHashMap.fromArrays(inst_12125,inst_12126);
var inst_12128 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_12124,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12127], 0));
var state_12142__$1 = state_12142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12142__$1,(2),inst_12128);
} else {
if((state_val_12143 === (2))){
var inst_12130 = (state_12142[(7)]);
var inst_12130__$1 = (state_12142[(2)]);
var inst_12131 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12130__$1], 0));
var inst_12132 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_12130__$1);
var inst_12133 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_12132);
var state_12142__$1 = (function (){var statearr_12144 = state_12142;
(statearr_12144[(7)] = inst_12130__$1);

(statearr_12144[(8)] = inst_12131);

return statearr_12144;
})();
if(inst_12133){
var statearr_12145_12154 = state_12142__$1;
(statearr_12145_12154[(1)] = (3));

} else {
var statearr_12146_12155 = state_12142__$1;
(statearr_12146_12155[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (3))){
var inst_12130 = (state_12142[(7)]);
var inst_12135 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12130);
var inst_12136 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_12135);
var inst_12137 = cljs.core.reset_BANG_(increment_plus_one.frontend.frontend.number,inst_12136);
var state_12142__$1 = state_12142;
var statearr_12147_12156 = state_12142__$1;
(statearr_12147_12156[(2)] = inst_12137);

(statearr_12147_12156[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (4))){
var state_12142__$1 = state_12142;
var statearr_12148_12157 = state_12142__$1;
(statearr_12148_12157[(2)] = null);

(statearr_12148_12157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (5))){
var inst_12140 = (state_12142[(2)]);
var state_12142__$1 = state_12142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12142__$1,inst_12140);
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
var statearr_12149 = [null,null,null,null,null,null,null,null,null];
(statearr_12149[(0)] = increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__);

(statearr_12149[(1)] = (1));

return statearr_12149;
});
var increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____1 = (function (state_12142){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_12142);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e12150){var ex__11509__auto__ = e12150;
var statearr_12151_12158 = state_12142;
(statearr_12151_12158[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_12142[(4)]))){
var statearr_12152_12159 = state_12142;
(statearr_12152_12159[(1)] = cljs.core.first((state_12142[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12160 = state_12142;
state_12142 = G__12160;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__ = function(state_12142){
switch(arguments.length){
case 0:
return increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____0.call(this);
case 1:
return increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____1.call(this,state_12142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____0;
increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto____1;
return increment_plus_one$frontend$frontend$call_api_increment_$_state_machine__11506__auto__;
})()
})();
var state__11671__auto__ = (function (){var statearr_12153 = f__11670__auto__();
(statearr_12153[(6)] = c__11669__auto__);

return statearr_12153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11671__auto__);
}));

return c__11669__auto__;
});
increment_plus_one.frontend.frontend.home_page = (function increment_plus_one$frontend$frontend$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Increment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current value: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.deref(increment_plus_one.frontend.frontend.number)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increment_plus_one.frontend.frontend.call_api_increment,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Can increase"], null)], null);
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
