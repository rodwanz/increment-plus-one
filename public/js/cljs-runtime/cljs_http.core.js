goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5823__auto__ = (function (){var fexpr__13441 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__13441.cljs$core$IFn$_invoke$arity$1 ? fexpr__13441.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__13441.call(null,channel));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var req = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13447){
var vec__13448 = p__13447;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13448,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__13451 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__13451)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__13451)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__13451)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__13451)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__13451)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13451)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13451))));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__13452){
var map__13453 = p__13452;
var map__13453__$1 = cljs.core.__destructure_map(map__13453);
var request = map__13453__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13453__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13453__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13453__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__13454 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__13454,default_headers);

cljs_http.core.apply_response_type_BANG_(G__13454,response_type);

G__13454.setTimeoutInterval(timeout);

G__13454.setWithCredentials(send_credentials);

return G__13454;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__13455){
var map__13456 = p__13455;
var map__13456__$1 = cljs.core.__destructure_map(map__13456);
var request = map__13456__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13456__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13456__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13456__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13456__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13456__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5142__auto__ = request_method;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__13457 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__13457) : cljs_http.core.error_kw.call(null,G__13457));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_13497 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__13458_13498 = xhr;
G__13458_13498.setProgressEventsEnabled(true);

G__13458_13498.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_13497,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__13458_13498.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_13497,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11669__auto___13499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11670__auto__ = (function (){var switch__11505__auto__ = (function (state_13469){
var state_val_13470 = (state_13469[(1)]);
if((state_val_13470 === (1))){
var state_13469__$1 = state_13469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13469__$1,(2),cancel);
} else {
if((state_val_13470 === (2))){
var inst_13460 = (state_13469[(2)]);
var inst_13461 = xhr.isComplete();
var inst_13462 = cljs.core.not(inst_13461);
var state_13469__$1 = (function (){var statearr_13471 = state_13469;
(statearr_13471[(7)] = inst_13460);

return statearr_13471;
})();
if(inst_13462){
var statearr_13472_13502 = state_13469__$1;
(statearr_13472_13502[(1)] = (3));

} else {
var statearr_13473_13503 = state_13469__$1;
(statearr_13473_13503[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13470 === (3))){
var inst_13464 = xhr.abort();
var state_13469__$1 = state_13469;
var statearr_13474_13504 = state_13469__$1;
(statearr_13474_13504[(2)] = inst_13464);

(statearr_13474_13504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13470 === (4))){
var state_13469__$1 = state_13469;
var statearr_13475_13505 = state_13469__$1;
(statearr_13475_13505[(2)] = null);

(statearr_13475_13505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13470 === (5))){
var inst_13467 = (state_13469[(2)]);
var state_13469__$1 = state_13469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13469__$1,inst_13467);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__11506__auto__ = null;
var cljs_http$core$xhr_$_state_machine__11506__auto____0 = (function (){
var statearr_13476 = [null,null,null,null,null,null,null,null];
(statearr_13476[(0)] = cljs_http$core$xhr_$_state_machine__11506__auto__);

(statearr_13476[(1)] = (1));

return statearr_13476;
});
var cljs_http$core$xhr_$_state_machine__11506__auto____1 = (function (state_13469){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_13469);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e13477){var ex__11509__auto__ = e13477;
var statearr_13478_13509 = state_13469;
(statearr_13478_13509[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_13469[(4)]))){
var statearr_13479_13510 = state_13469;
(statearr_13479_13510[(1)] = cljs.core.first((state_13469[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13511 = state_13469;
state_13469 = G__13511;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__11506__auto__ = function(state_13469){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__11506__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__11506__auto____1.call(this,state_13469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__11506__auto____0;
cljs_http$core$xhr_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__11506__auto____1;
return cljs_http$core$xhr_$_state_machine__11506__auto__;
})()
})();
var state__11671__auto__ = (function (){var statearr_13480 = f__11670__auto__();
(statearr_13480[(6)] = c__11669__auto___13499);

return statearr_13480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11671__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__13481){
var map__13482 = p__13481;
var map__13482__$1 = cljs.core.__destructure_map(map__13482);
var request = map__13482__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13482__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13482__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13482__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13482__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_13512 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_13512], null));

if(cljs.core.truth_(cancel)){
var c__11669__auto___13514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11670__auto__ = (function (){var switch__11505__auto__ = (function (state_13487){
var state_val_13488 = (state_13487[(1)]);
if((state_val_13488 === (1))){
var state_13487__$1 = state_13487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13487__$1,(2),cancel);
} else {
if((state_val_13488 === (2))){
var inst_13484 = (state_13487[(2)]);
var inst_13485 = jsonp.cancel(req_13512);
var state_13487__$1 = (function (){var statearr_13489 = state_13487;
(statearr_13489[(7)] = inst_13484);

return statearr_13489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13487__$1,inst_13485);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__11506__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__11506__auto____0 = (function (){
var statearr_13490 = [null,null,null,null,null,null,null,null];
(statearr_13490[(0)] = cljs_http$core$jsonp_$_state_machine__11506__auto__);

(statearr_13490[(1)] = (1));

return statearr_13490;
});
var cljs_http$core$jsonp_$_state_machine__11506__auto____1 = (function (state_13487){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_13487);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e13491){var ex__11509__auto__ = e13491;
var statearr_13492_13519 = state_13487;
(statearr_13492_13519[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_13487[(4)]))){
var statearr_13493_13520 = state_13487;
(statearr_13493_13520[(1)] = cljs.core.first((state_13487[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13522 = state_13487;
state_13487 = G__13522;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__11506__auto__ = function(state_13487){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__11506__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__11506__auto____1.call(this,state_13487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__11506__auto____0;
cljs_http$core$jsonp_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__11506__auto____1;
return cljs_http$core$jsonp_$_state_machine__11506__auto__;
})()
})();
var state__11671__auto__ = (function (){var statearr_13494 = f__11670__auto__();
(statearr_13494[(6)] = c__11669__auto___13514);

return statearr_13494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11671__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__13495){
var map__13496 = p__13495;
var map__13496__$1 = cljs.core.__destructure_map(map__13496);
var request = map__13496__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13496__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
