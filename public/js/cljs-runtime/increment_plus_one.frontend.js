goog.provide('increment_plus_one.frontend');
if((typeof increment_plus_one !== 'undefined') && (typeof increment_plus_one.frontend !== 'undefined') && (typeof increment_plus_one.frontend.number !== 'undefined')){
} else {
increment_plus_one.frontend.number = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof increment_plus_one !== 'undefined') && (typeof increment_plus_one.frontend !== 'undefined') && (typeof increment_plus_one.frontend.root !== 'undefined')){
} else {
increment_plus_one.frontend.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
increment_plus_one.frontend.call_api_increment = (function increment_plus_one$frontend$call_api_increment(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicked"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value:",cljs.core.deref(increment_plus_one.frontend.number)], 0));

var n = (function (){var or__5142__auto__ = cljs.core.deref(increment_plus_one.frontend.number);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var c__11575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11576__auto__ = (function (){var switch__11505__auto__ = (function (state_12795){
var state_val_12796 = (state_12795[(1)]);
if((state_val_12796 === (1))){
var inst_12777 = (""+"http://localhost:3000/inc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
var inst_12778 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12779 = [false];
var inst_12780 = cljs.core.PersistentHashMap.fromArrays(inst_12778,inst_12779);
var inst_12781 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_12777,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12780], 0));
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12795__$1,(2),inst_12781);
} else {
if((state_val_12796 === (2))){
var inst_12783 = (state_12795[(7)]);
var inst_12783__$1 = (state_12795[(2)]);
var inst_12784 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_12783__$1], 0));
var inst_12785 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_12783__$1);
var inst_12786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_12785);
var state_12795__$1 = (function (){var statearr_12797 = state_12795;
(statearr_12797[(7)] = inst_12783__$1);

(statearr_12797[(8)] = inst_12784);

return statearr_12797;
})();
if(inst_12786){
var statearr_12798_12807 = state_12795__$1;
(statearr_12798_12807[(1)] = (3));

} else {
var statearr_12799_12808 = state_12795__$1;
(statearr_12799_12808[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (3))){
var inst_12783 = (state_12795[(7)]);
var inst_12788 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12783);
var inst_12789 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_12788);
var inst_12790 = cljs.core.reset_BANG_(increment_plus_one.frontend.number,inst_12789);
var state_12795__$1 = state_12795;
var statearr_12800_12809 = state_12795__$1;
(statearr_12800_12809[(2)] = inst_12790);

(statearr_12800_12809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (4))){
var state_12795__$1 = state_12795;
var statearr_12801_12810 = state_12795__$1;
(statearr_12801_12810[(2)] = null);

(statearr_12801_12810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12796 === (5))){
var inst_12793 = (state_12795[(2)]);
var state_12795__$1 = state_12795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12795__$1,inst_12793);
} else {
return null;
}
}
}
}
}
});
return (function() {
var increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto__ = null;
var increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto____0 = (function (){
var statearr_12802 = [null,null,null,null,null,null,null,null,null];
(statearr_12802[(0)] = increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto__);

(statearr_12802[(1)] = (1));

return statearr_12802;
});
var increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto____1 = (function (state_12795){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_12795);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e12803){var ex__11509__auto__ = e12803;
var statearr_12804_12811 = state_12795;
(statearr_12804_12811[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_12795[(4)]))){
var statearr_12805_12812 = state_12795;
(statearr_12805_12812[(1)] = cljs.core.first((state_12795[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12813 = state_12795;
state_12795 = G__12813;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto__ = function(state_12795){
switch(arguments.length){
case 0:
return increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto____0.call(this);
case 1:
return increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto____1.call(this,state_12795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto____0;
increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto____1;
return increment_plus_one$frontend$call_api_increment_$_state_machine__11506__auto__;
})()
})();
var state__11577__auto__ = (function (){var statearr_12806 = f__11576__auto__();
(statearr_12806[(6)] = c__11575__auto__);

return statearr_12806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11577__auto__);
}));

return c__11575__auto__;
});
increment_plus_one.frontend.home_page = (function increment_plus_one$frontend$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current value: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.deref(increment_plus_one.frontend.number)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increment_plus_one.frontend.call_api_increment,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Increment on Server"], null)], null);
});
increment_plus_one.frontend.mount_root = (function increment_plus_one$frontend$mount_root(){
if(cljs.core.truth_(cljs.core.deref(increment_plus_one.frontend.root))){
} else {
cljs.core.reset_BANG_(increment_plus_one.frontend.root,reagent.dom.client.create_root(document.getElementById("app")));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(increment_plus_one.frontend.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [increment_plus_one.frontend.home_page], null));
});
increment_plus_one.frontend.init = (function increment_plus_one$frontend$init(){
return increment_plus_one.frontend.mount_root();
});
increment_plus_one.frontend.init();

//# sourceMappingURL=increment_plus_one.frontend.js.map
