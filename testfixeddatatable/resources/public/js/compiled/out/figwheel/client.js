// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35013 = [];
var len__25865__auto___35016 = arguments.length;
var i__25866__auto___35017 = (0);
while(true){
if((i__25866__auto___35017 < len__25865__auto___35016)){
args35013.push((arguments[i__25866__auto___35017]));

var G__35018 = (i__25866__auto___35017 + (1));
i__25866__auto___35017 = G__35018;
continue;
} else {
}
break;
}

var G__35015 = args35013.length;
switch (G__35015) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35013.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35021 = arguments.length;
var i__25866__auto___35022 = (0);
while(true){
if((i__25866__auto___35022 < len__25865__auto___35021)){
args__25872__auto__.push((arguments[i__25866__auto___35022]));

var G__35023 = (i__25866__auto___35022 + (1));
i__25866__auto___35022 = G__35023;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35020){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35020));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35025 = arguments.length;
var i__25866__auto___35026 = (0);
while(true){
if((i__25866__auto___35026 < len__25865__auto___35025)){
args__25872__auto__.push((arguments[i__25866__auto___35026]));

var G__35027 = (i__25866__auto___35026 + (1));
i__25866__auto___35026 = G__35027;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35024){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35024));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35028 = cljs.core._EQ_;
var expr__35029 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35032){if((e35032 instanceof Error)){
var e = e35032;
return false;
} else {
throw e35032;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35028.call(null,"true",expr__35029))){
return true;
} else {
if(cljs.core.truth_(pred__35028.call(null,"false",expr__35029))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35029)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35034){if((e35034 instanceof Error)){
var e = e35034;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35034;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35035){
var map__35038 = p__35035;
var map__35038__$1 = ((((!((map__35038 == null)))?((((map__35038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35038):map__35038);
var message = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27653__auto___35200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___35200,ch){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___35200,ch){
return (function (state_35169){
var state_val_35170 = (state_35169[(1)]);
if((state_val_35170 === (7))){
var inst_35165 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
var statearr_35171_35201 = state_35169__$1;
(statearr_35171_35201[(2)] = inst_35165);

(statearr_35171_35201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (1))){
var state_35169__$1 = state_35169;
var statearr_35172_35202 = state_35169__$1;
(statearr_35172_35202[(2)] = null);

(statearr_35172_35202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (4))){
var inst_35122 = (state_35169[(7)]);
var inst_35122__$1 = (state_35169[(2)]);
var state_35169__$1 = (function (){var statearr_35173 = state_35169;
(statearr_35173[(7)] = inst_35122__$1);

return statearr_35173;
})();
if(cljs.core.truth_(inst_35122__$1)){
var statearr_35174_35203 = state_35169__$1;
(statearr_35174_35203[(1)] = (5));

} else {
var statearr_35175_35204 = state_35169__$1;
(statearr_35175_35204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (15))){
var inst_35129 = (state_35169[(8)]);
var inst_35144 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35129);
var inst_35145 = cljs.core.first.call(null,inst_35144);
var inst_35146 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35145);
var inst_35147 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35146)].join('');
var inst_35148 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35147);
var state_35169__$1 = state_35169;
var statearr_35176_35205 = state_35169__$1;
(statearr_35176_35205[(2)] = inst_35148);

(statearr_35176_35205[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (13))){
var inst_35153 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
var statearr_35177_35206 = state_35169__$1;
(statearr_35177_35206[(2)] = inst_35153);

(statearr_35177_35206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (6))){
var state_35169__$1 = state_35169;
var statearr_35178_35207 = state_35169__$1;
(statearr_35178_35207[(2)] = null);

(statearr_35178_35207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (17))){
var inst_35151 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
var statearr_35179_35208 = state_35169__$1;
(statearr_35179_35208[(2)] = inst_35151);

(statearr_35179_35208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (3))){
var inst_35167 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35169__$1,inst_35167);
} else {
if((state_val_35170 === (12))){
var inst_35128 = (state_35169[(9)]);
var inst_35142 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35128,opts);
var state_35169__$1 = state_35169;
if(cljs.core.truth_(inst_35142)){
var statearr_35180_35209 = state_35169__$1;
(statearr_35180_35209[(1)] = (15));

} else {
var statearr_35181_35210 = state_35169__$1;
(statearr_35181_35210[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (2))){
var state_35169__$1 = state_35169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35169__$1,(4),ch);
} else {
if((state_val_35170 === (11))){
var inst_35129 = (state_35169[(8)]);
var inst_35134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35135 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35129);
var inst_35136 = cljs.core.async.timeout.call(null,(1000));
var inst_35137 = [inst_35135,inst_35136];
var inst_35138 = (new cljs.core.PersistentVector(null,2,(5),inst_35134,inst_35137,null));
var state_35169__$1 = state_35169;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35169__$1,(14),inst_35138);
} else {
if((state_val_35170 === (9))){
var inst_35129 = (state_35169[(8)]);
var inst_35155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35156 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35129);
var inst_35157 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35156);
var inst_35158 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35157)].join('');
var inst_35159 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35158);
var state_35169__$1 = (function (){var statearr_35182 = state_35169;
(statearr_35182[(10)] = inst_35155);

return statearr_35182;
})();
var statearr_35183_35211 = state_35169__$1;
(statearr_35183_35211[(2)] = inst_35159);

(statearr_35183_35211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (5))){
var inst_35122 = (state_35169[(7)]);
var inst_35124 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35125 = (new cljs.core.PersistentArrayMap(null,2,inst_35124,null));
var inst_35126 = (new cljs.core.PersistentHashSet(null,inst_35125,null));
var inst_35127 = figwheel.client.focus_msgs.call(null,inst_35126,inst_35122);
var inst_35128 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35127);
var inst_35129 = cljs.core.first.call(null,inst_35127);
var inst_35130 = figwheel.client.autoload_QMARK_.call(null);
var state_35169__$1 = (function (){var statearr_35184 = state_35169;
(statearr_35184[(8)] = inst_35129);

(statearr_35184[(9)] = inst_35128);

return statearr_35184;
})();
if(cljs.core.truth_(inst_35130)){
var statearr_35185_35212 = state_35169__$1;
(statearr_35185_35212[(1)] = (8));

} else {
var statearr_35186_35213 = state_35169__$1;
(statearr_35186_35213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (14))){
var inst_35140 = (state_35169[(2)]);
var state_35169__$1 = state_35169;
var statearr_35187_35214 = state_35169__$1;
(statearr_35187_35214[(2)] = inst_35140);

(statearr_35187_35214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (16))){
var state_35169__$1 = state_35169;
var statearr_35188_35215 = state_35169__$1;
(statearr_35188_35215[(2)] = null);

(statearr_35188_35215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (10))){
var inst_35161 = (state_35169[(2)]);
var state_35169__$1 = (function (){var statearr_35189 = state_35169;
(statearr_35189[(11)] = inst_35161);

return statearr_35189;
})();
var statearr_35190_35216 = state_35169__$1;
(statearr_35190_35216[(2)] = null);

(statearr_35190_35216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35170 === (8))){
var inst_35128 = (state_35169[(9)]);
var inst_35132 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35128,opts);
var state_35169__$1 = state_35169;
if(cljs.core.truth_(inst_35132)){
var statearr_35191_35217 = state_35169__$1;
(statearr_35191_35217[(1)] = (11));

} else {
var statearr_35192_35218 = state_35169__$1;
(statearr_35192_35218[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto___35200,ch))
;
return ((function (switch__27541__auto__,c__27653__auto___35200,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27542__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27542__auto____0 = (function (){
var statearr_35196 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35196[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27542__auto__);

(statearr_35196[(1)] = (1));

return statearr_35196;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27542__auto____1 = (function (state_35169){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_35169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e35197){if((e35197 instanceof Object)){
var ex__27545__auto__ = e35197;
var statearr_35198_35219 = state_35169;
(statearr_35198_35219[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35220 = state_35169;
state_35169 = G__35220;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27542__auto__ = function(state_35169){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27542__auto____1.call(this,state_35169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27542__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27542__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___35200,ch))
})();
var state__27655__auto__ = (function (){var statearr_35199 = f__27654__auto__.call(null);
(statearr_35199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___35200);

return statearr_35199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___35200,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35221_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35221_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35224 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35224){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35223){if((e35223 instanceof Error)){
var e = e35223;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35224], null));
} else {
var e = e35223;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35224))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35225){
var map__35234 = p__35225;
var map__35234__$1 = ((((!((map__35234 == null)))?((((map__35234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35234):map__35234);
var opts = map__35234__$1;
var build_id = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35234,map__35234__$1,opts,build_id){
return (function (p__35236){
var vec__35237 = p__35236;
var seq__35238 = cljs.core.seq.call(null,vec__35237);
var first__35239 = cljs.core.first.call(null,seq__35238);
var seq__35238__$1 = cljs.core.next.call(null,seq__35238);
var map__35240 = first__35239;
var map__35240__$1 = ((((!((map__35240 == null)))?((((map__35240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35240):map__35240);
var msg = map__35240__$1;
var msg_name = cljs.core.get.call(null,map__35240__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35238__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35237,seq__35238,first__35239,seq__35238__$1,map__35240,map__35240__$1,msg,msg_name,_,map__35234,map__35234__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35237,seq__35238,first__35239,seq__35238__$1,map__35240,map__35240__$1,msg,msg_name,_,map__35234,map__35234__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35234,map__35234__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35248){
var vec__35249 = p__35248;
var seq__35250 = cljs.core.seq.call(null,vec__35249);
var first__35251 = cljs.core.first.call(null,seq__35250);
var seq__35250__$1 = cljs.core.next.call(null,seq__35250);
var map__35252 = first__35251;
var map__35252__$1 = ((((!((map__35252 == null)))?((((map__35252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35252):map__35252);
var msg = map__35252__$1;
var msg_name = cljs.core.get.call(null,map__35252__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35250__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35254){
var map__35266 = p__35254;
var map__35266__$1 = ((((!((map__35266 == null)))?((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35266):map__35266);
var on_compile_warning = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35266,map__35266__$1,on_compile_warning,on_compile_fail){
return (function (p__35268){
var vec__35269 = p__35268;
var seq__35270 = cljs.core.seq.call(null,vec__35269);
var first__35271 = cljs.core.first.call(null,seq__35270);
var seq__35270__$1 = cljs.core.next.call(null,seq__35270);
var map__35272 = first__35271;
var map__35272__$1 = ((((!((map__35272 == null)))?((((map__35272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35272):map__35272);
var msg = map__35272__$1;
var msg_name = cljs.core.get.call(null,map__35272__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35270__$1;
var pred__35274 = cljs.core._EQ_;
var expr__35275 = msg_name;
if(cljs.core.truth_(pred__35274.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35275))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35274.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35275))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35266,map__35266__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__,msg_hist,msg_names,msg){
return (function (state_35503){
var state_val_35504 = (state_35503[(1)]);
if((state_val_35504 === (7))){
var inst_35423 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35423)){
var statearr_35505_35555 = state_35503__$1;
(statearr_35505_35555[(1)] = (8));

} else {
var statearr_35506_35556 = state_35503__$1;
(statearr_35506_35556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (20))){
var inst_35497 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35507_35557 = state_35503__$1;
(statearr_35507_35557[(2)] = inst_35497);

(statearr_35507_35557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (27))){
var inst_35493 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35508_35558 = state_35503__$1;
(statearr_35508_35558[(2)] = inst_35493);

(statearr_35508_35558[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (1))){
var inst_35416 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35416)){
var statearr_35509_35559 = state_35503__$1;
(statearr_35509_35559[(1)] = (2));

} else {
var statearr_35510_35560 = state_35503__$1;
(statearr_35510_35560[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (24))){
var inst_35495 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35511_35561 = state_35503__$1;
(statearr_35511_35561[(2)] = inst_35495);

(statearr_35511_35561[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (4))){
var inst_35501 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35503__$1,inst_35501);
} else {
if((state_val_35504 === (15))){
var inst_35499 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35512_35562 = state_35503__$1;
(statearr_35512_35562[(2)] = inst_35499);

(statearr_35512_35562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (21))){
var inst_35452 = (state_35503[(2)]);
var inst_35453 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35454 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35453);
var state_35503__$1 = (function (){var statearr_35513 = state_35503;
(statearr_35513[(7)] = inst_35452);

return statearr_35513;
})();
var statearr_35514_35563 = state_35503__$1;
(statearr_35514_35563[(2)] = inst_35454);

(statearr_35514_35563[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (31))){
var inst_35482 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35482)){
var statearr_35515_35564 = state_35503__$1;
(statearr_35515_35564[(1)] = (34));

} else {
var statearr_35516_35565 = state_35503__$1;
(statearr_35516_35565[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (32))){
var inst_35491 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35517_35566 = state_35503__$1;
(statearr_35517_35566[(2)] = inst_35491);

(statearr_35517_35566[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (33))){
var inst_35478 = (state_35503[(2)]);
var inst_35479 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35480 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35479);
var state_35503__$1 = (function (){var statearr_35518 = state_35503;
(statearr_35518[(8)] = inst_35478);

return statearr_35518;
})();
var statearr_35519_35567 = state_35503__$1;
(statearr_35519_35567[(2)] = inst_35480);

(statearr_35519_35567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (13))){
var inst_35437 = figwheel.client.heads_up.clear.call(null);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(16),inst_35437);
} else {
if((state_val_35504 === (22))){
var inst_35458 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35459 = figwheel.client.heads_up.append_warning_message.call(null,inst_35458);
var state_35503__$1 = state_35503;
var statearr_35520_35568 = state_35503__$1;
(statearr_35520_35568[(2)] = inst_35459);

(statearr_35520_35568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (36))){
var inst_35489 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35521_35569 = state_35503__$1;
(statearr_35521_35569[(2)] = inst_35489);

(statearr_35521_35569[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (29))){
var inst_35469 = (state_35503[(2)]);
var inst_35470 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35471 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35470);
var state_35503__$1 = (function (){var statearr_35522 = state_35503;
(statearr_35522[(9)] = inst_35469);

return statearr_35522;
})();
var statearr_35523_35570 = state_35503__$1;
(statearr_35523_35570[(2)] = inst_35471);

(statearr_35523_35570[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (6))){
var inst_35418 = (state_35503[(10)]);
var state_35503__$1 = state_35503;
var statearr_35524_35571 = state_35503__$1;
(statearr_35524_35571[(2)] = inst_35418);

(statearr_35524_35571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (28))){
var inst_35465 = (state_35503[(2)]);
var inst_35466 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35467 = figwheel.client.heads_up.display_warning.call(null,inst_35466);
var state_35503__$1 = (function (){var statearr_35525 = state_35503;
(statearr_35525[(11)] = inst_35465);

return statearr_35525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(29),inst_35467);
} else {
if((state_val_35504 === (25))){
var inst_35463 = figwheel.client.heads_up.clear.call(null);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(28),inst_35463);
} else {
if((state_val_35504 === (34))){
var inst_35484 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(37),inst_35484);
} else {
if((state_val_35504 === (17))){
var inst_35443 = (state_35503[(2)]);
var inst_35444 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35445 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35444);
var state_35503__$1 = (function (){var statearr_35526 = state_35503;
(statearr_35526[(12)] = inst_35443);

return statearr_35526;
})();
var statearr_35527_35572 = state_35503__$1;
(statearr_35527_35572[(2)] = inst_35445);

(statearr_35527_35572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (3))){
var inst_35435 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35435)){
var statearr_35528_35573 = state_35503__$1;
(statearr_35528_35573[(1)] = (13));

} else {
var statearr_35529_35574 = state_35503__$1;
(statearr_35529_35574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (12))){
var inst_35431 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35530_35575 = state_35503__$1;
(statearr_35530_35575[(2)] = inst_35431);

(statearr_35530_35575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (2))){
var inst_35418 = (state_35503[(10)]);
var inst_35418__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35503__$1 = (function (){var statearr_35531 = state_35503;
(statearr_35531[(10)] = inst_35418__$1);

return statearr_35531;
})();
if(cljs.core.truth_(inst_35418__$1)){
var statearr_35532_35576 = state_35503__$1;
(statearr_35532_35576[(1)] = (5));

} else {
var statearr_35533_35577 = state_35503__$1;
(statearr_35533_35577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (23))){
var inst_35461 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35461)){
var statearr_35534_35578 = state_35503__$1;
(statearr_35534_35578[(1)] = (25));

} else {
var statearr_35535_35579 = state_35503__$1;
(statearr_35535_35579[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (35))){
var state_35503__$1 = state_35503;
var statearr_35536_35580 = state_35503__$1;
(statearr_35536_35580[(2)] = null);

(statearr_35536_35580[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (19))){
var inst_35456 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35456)){
var statearr_35537_35581 = state_35503__$1;
(statearr_35537_35581[(1)] = (22));

} else {
var statearr_35538_35582 = state_35503__$1;
(statearr_35538_35582[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (11))){
var inst_35427 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35539_35583 = state_35503__$1;
(statearr_35539_35583[(2)] = inst_35427);

(statearr_35539_35583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (9))){
var inst_35429 = figwheel.client.heads_up.clear.call(null);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(12),inst_35429);
} else {
if((state_val_35504 === (5))){
var inst_35420 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35503__$1 = state_35503;
var statearr_35540_35584 = state_35503__$1;
(statearr_35540_35584[(2)] = inst_35420);

(statearr_35540_35584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (14))){
var inst_35447 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35447)){
var statearr_35541_35585 = state_35503__$1;
(statearr_35541_35585[(1)] = (18));

} else {
var statearr_35542_35586 = state_35503__$1;
(statearr_35542_35586[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (26))){
var inst_35473 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35473)){
var statearr_35543_35587 = state_35503__$1;
(statearr_35543_35587[(1)] = (30));

} else {
var statearr_35544_35588 = state_35503__$1;
(statearr_35544_35588[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (16))){
var inst_35439 = (state_35503[(2)]);
var inst_35440 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35441 = figwheel.client.heads_up.display_exception.call(null,inst_35440);
var state_35503__$1 = (function (){var statearr_35545 = state_35503;
(statearr_35545[(13)] = inst_35439);

return statearr_35545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(17),inst_35441);
} else {
if((state_val_35504 === (30))){
var inst_35475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35476 = figwheel.client.heads_up.display_warning.call(null,inst_35475);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(33),inst_35476);
} else {
if((state_val_35504 === (10))){
var inst_35433 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35546_35589 = state_35503__$1;
(statearr_35546_35589[(2)] = inst_35433);

(statearr_35546_35589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (18))){
var inst_35449 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35450 = figwheel.client.heads_up.display_exception.call(null,inst_35449);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(21),inst_35450);
} else {
if((state_val_35504 === (37))){
var inst_35486 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35547_35590 = state_35503__$1;
(statearr_35547_35590[(2)] = inst_35486);

(statearr_35547_35590[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (8))){
var inst_35425 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35503__$1,(11),inst_35425);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27653__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27541__auto__,c__27653__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto____0 = (function (){
var statearr_35551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35551[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto__);

(statearr_35551[(1)] = (1));

return statearr_35551;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto____1 = (function (state_35503){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_35503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e35552){if((e35552 instanceof Object)){
var ex__27545__auto__ = e35552;
var statearr_35553_35591 = state_35503;
(statearr_35553_35591[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35592 = state_35503;
state_35503 = G__35592;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto__ = function(state_35503){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto____1.call(this,state_35503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__,msg_hist,msg_names,msg))
})();
var state__27655__auto__ = (function (){var statearr_35554 = f__27654__auto__.call(null);
(statearr_35554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__,msg_hist,msg_names,msg))
);

return c__27653__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27653__auto___35655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___35655,ch){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___35655,ch){
return (function (state_35638){
var state_val_35639 = (state_35638[(1)]);
if((state_val_35639 === (1))){
var state_35638__$1 = state_35638;
var statearr_35640_35656 = state_35638__$1;
(statearr_35640_35656[(2)] = null);

(statearr_35640_35656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (2))){
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35638__$1,(4),ch);
} else {
if((state_val_35639 === (3))){
var inst_35636 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35638__$1,inst_35636);
} else {
if((state_val_35639 === (4))){
var inst_35626 = (state_35638[(7)]);
var inst_35626__$1 = (state_35638[(2)]);
var state_35638__$1 = (function (){var statearr_35641 = state_35638;
(statearr_35641[(7)] = inst_35626__$1);

return statearr_35641;
})();
if(cljs.core.truth_(inst_35626__$1)){
var statearr_35642_35657 = state_35638__$1;
(statearr_35642_35657[(1)] = (5));

} else {
var statearr_35643_35658 = state_35638__$1;
(statearr_35643_35658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (5))){
var inst_35626 = (state_35638[(7)]);
var inst_35628 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35626);
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35638__$1,(8),inst_35628);
} else {
if((state_val_35639 === (6))){
var state_35638__$1 = state_35638;
var statearr_35644_35659 = state_35638__$1;
(statearr_35644_35659[(2)] = null);

(statearr_35644_35659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (7))){
var inst_35634 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
var statearr_35645_35660 = state_35638__$1;
(statearr_35645_35660[(2)] = inst_35634);

(statearr_35645_35660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (8))){
var inst_35630 = (state_35638[(2)]);
var state_35638__$1 = (function (){var statearr_35646 = state_35638;
(statearr_35646[(8)] = inst_35630);

return statearr_35646;
})();
var statearr_35647_35661 = state_35638__$1;
(statearr_35647_35661[(2)] = null);

(statearr_35647_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27653__auto___35655,ch))
;
return ((function (switch__27541__auto__,c__27653__auto___35655,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27542__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27542__auto____0 = (function (){
var statearr_35651 = [null,null,null,null,null,null,null,null,null];
(statearr_35651[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27542__auto__);

(statearr_35651[(1)] = (1));

return statearr_35651;
});
var figwheel$client$heads_up_plugin_$_state_machine__27542__auto____1 = (function (state_35638){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_35638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e35652){if((e35652 instanceof Object)){
var ex__27545__auto__ = e35652;
var statearr_35653_35662 = state_35638;
(statearr_35653_35662[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35663 = state_35638;
state_35638 = G__35663;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27542__auto__ = function(state_35638){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27542__auto____1.call(this,state_35638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27542__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27542__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___35655,ch))
})();
var state__27655__auto__ = (function (){var statearr_35654 = f__27654__auto__.call(null);
(statearr_35654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___35655);

return statearr_35654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___35655,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__){
return (function (state_35684){
var state_val_35685 = (state_35684[(1)]);
if((state_val_35685 === (1))){
var inst_35679 = cljs.core.async.timeout.call(null,(3000));
var state_35684__$1 = state_35684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35684__$1,(2),inst_35679);
} else {
if((state_val_35685 === (2))){
var inst_35681 = (state_35684[(2)]);
var inst_35682 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35684__$1 = (function (){var statearr_35686 = state_35684;
(statearr_35686[(7)] = inst_35681);

return statearr_35686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35684__$1,inst_35682);
} else {
return null;
}
}
});})(c__27653__auto__))
;
return ((function (switch__27541__auto__,c__27653__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27542__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27542__auto____0 = (function (){
var statearr_35690 = [null,null,null,null,null,null,null,null];
(statearr_35690[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27542__auto__);

(statearr_35690[(1)] = (1));

return statearr_35690;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27542__auto____1 = (function (state_35684){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_35684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e35691){if((e35691 instanceof Object)){
var ex__27545__auto__ = e35691;
var statearr_35692_35694 = state_35684;
(statearr_35692_35694[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35695 = state_35684;
state_35684 = G__35695;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27542__auto__ = function(state_35684){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27542__auto____1.call(this,state_35684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27542__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27542__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__))
})();
var state__27655__auto__ = (function (){var statearr_35693 = f__27654__auto__.call(null);
(statearr_35693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_35693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__))
);

return c__27653__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35718){
var state_val_35719 = (state_35718[(1)]);
if((state_val_35719 === (1))){
var inst_35712 = cljs.core.async.timeout.call(null,(2000));
var state_35718__$1 = state_35718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35718__$1,(2),inst_35712);
} else {
if((state_val_35719 === (2))){
var inst_35714 = (state_35718[(2)]);
var inst_35715 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35716 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35715);
var state_35718__$1 = (function (){var statearr_35720 = state_35718;
(statearr_35720[(7)] = inst_35714);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35718__$1,inst_35716);
} else {
return null;
}
}
});})(c__27653__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27541__auto__,c__27653__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto____0 = (function (){
var statearr_35724 = [null,null,null,null,null,null,null,null];
(statearr_35724[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto__);

(statearr_35724[(1)] = (1));

return statearr_35724;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto____1 = (function (state_35718){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_35718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e35725){if((e35725 instanceof Object)){
var ex__27545__auto__ = e35725;
var statearr_35726_35728 = state_35718;
(statearr_35726_35728[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35729 = state_35718;
state_35718 = G__35729;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto__ = function(state_35718){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto____1.call(this,state_35718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27655__auto__ = (function (){var statearr_35727 = f__27654__auto__.call(null);
(statearr_35727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_35727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__,figwheel_version,temp__4657__auto__))
);

return c__27653__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35730){
var map__35734 = p__35730;
var map__35734__$1 = ((((!((map__35734 == null)))?((((map__35734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35734):map__35734);
var file = cljs.core.get.call(null,map__35734__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35734__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35734__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35736 = "";
var G__35736__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35736),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35736);
var G__35736__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35736__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35736__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__35736__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35736__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35737){
var map__35744 = p__35737;
var map__35744__$1 = ((((!((map__35744 == null)))?((((map__35744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35744):map__35744);
var ed = map__35744__$1;
var formatted_exception = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35746_35750 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35747_35751 = null;
var count__35748_35752 = (0);
var i__35749_35753 = (0);
while(true){
if((i__35749_35753 < count__35748_35752)){
var msg_35754 = cljs.core._nth.call(null,chunk__35747_35751,i__35749_35753);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35754);

var G__35755 = seq__35746_35750;
var G__35756 = chunk__35747_35751;
var G__35757 = count__35748_35752;
var G__35758 = (i__35749_35753 + (1));
seq__35746_35750 = G__35755;
chunk__35747_35751 = G__35756;
count__35748_35752 = G__35757;
i__35749_35753 = G__35758;
continue;
} else {
var temp__4657__auto___35759 = cljs.core.seq.call(null,seq__35746_35750);
if(temp__4657__auto___35759){
var seq__35746_35760__$1 = temp__4657__auto___35759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35746_35760__$1)){
var c__25601__auto___35761 = cljs.core.chunk_first.call(null,seq__35746_35760__$1);
var G__35762 = cljs.core.chunk_rest.call(null,seq__35746_35760__$1);
var G__35763 = c__25601__auto___35761;
var G__35764 = cljs.core.count.call(null,c__25601__auto___35761);
var G__35765 = (0);
seq__35746_35750 = G__35762;
chunk__35747_35751 = G__35763;
count__35748_35752 = G__35764;
i__35749_35753 = G__35765;
continue;
} else {
var msg_35766 = cljs.core.first.call(null,seq__35746_35760__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35766);

var G__35767 = cljs.core.next.call(null,seq__35746_35760__$1);
var G__35768 = null;
var G__35769 = (0);
var G__35770 = (0);
seq__35746_35750 = G__35767;
chunk__35747_35751 = G__35768;
count__35748_35752 = G__35769;
i__35749_35753 = G__35770;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35771){
var map__35774 = p__35771;
var map__35774__$1 = ((((!((map__35774 == null)))?((((map__35774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35774):map__35774);
var w = map__35774__$1;
var message = cljs.core.get.call(null,map__35774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35786 = cljs.core.seq.call(null,plugins);
var chunk__35787 = null;
var count__35788 = (0);
var i__35789 = (0);
while(true){
if((i__35789 < count__35788)){
var vec__35790 = cljs.core._nth.call(null,chunk__35787,i__35789);
var k = cljs.core.nth.call(null,vec__35790,(0),null);
var plugin = cljs.core.nth.call(null,vec__35790,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35796 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35786,chunk__35787,count__35788,i__35789,pl_35796,vec__35790,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35796.call(null,msg_hist);
});})(seq__35786,chunk__35787,count__35788,i__35789,pl_35796,vec__35790,k,plugin))
);
} else {
}

var G__35797 = seq__35786;
var G__35798 = chunk__35787;
var G__35799 = count__35788;
var G__35800 = (i__35789 + (1));
seq__35786 = G__35797;
chunk__35787 = G__35798;
count__35788 = G__35799;
i__35789 = G__35800;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35786);
if(temp__4657__auto__){
var seq__35786__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35786__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__35786__$1);
var G__35801 = cljs.core.chunk_rest.call(null,seq__35786__$1);
var G__35802 = c__25601__auto__;
var G__35803 = cljs.core.count.call(null,c__25601__auto__);
var G__35804 = (0);
seq__35786 = G__35801;
chunk__35787 = G__35802;
count__35788 = G__35803;
i__35789 = G__35804;
continue;
} else {
var vec__35793 = cljs.core.first.call(null,seq__35786__$1);
var k = cljs.core.nth.call(null,vec__35793,(0),null);
var plugin = cljs.core.nth.call(null,vec__35793,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35805 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35786,chunk__35787,count__35788,i__35789,pl_35805,vec__35793,k,plugin,seq__35786__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35805.call(null,msg_hist);
});})(seq__35786,chunk__35787,count__35788,i__35789,pl_35805,vec__35793,k,plugin,seq__35786__$1,temp__4657__auto__))
);
} else {
}

var G__35806 = cljs.core.next.call(null,seq__35786__$1);
var G__35807 = null;
var G__35808 = (0);
var G__35809 = (0);
seq__35786 = G__35806;
chunk__35787 = G__35807;
count__35788 = G__35808;
i__35789 = G__35809;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35810 = [];
var len__25865__auto___35817 = arguments.length;
var i__25866__auto___35818 = (0);
while(true){
if((i__25866__auto___35818 < len__25865__auto___35817)){
args35810.push((arguments[i__25866__auto___35818]));

var G__35819 = (i__25866__auto___35818 + (1));
i__25866__auto___35818 = G__35819;
continue;
} else {
}
break;
}

var G__35812 = args35810.length;
switch (G__35812) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35810.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35813_35821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35814_35822 = null;
var count__35815_35823 = (0);
var i__35816_35824 = (0);
while(true){
if((i__35816_35824 < count__35815_35823)){
var msg_35825 = cljs.core._nth.call(null,chunk__35814_35822,i__35816_35824);
figwheel.client.socket.handle_incoming_message.call(null,msg_35825);

var G__35826 = seq__35813_35821;
var G__35827 = chunk__35814_35822;
var G__35828 = count__35815_35823;
var G__35829 = (i__35816_35824 + (1));
seq__35813_35821 = G__35826;
chunk__35814_35822 = G__35827;
count__35815_35823 = G__35828;
i__35816_35824 = G__35829;
continue;
} else {
var temp__4657__auto___35830 = cljs.core.seq.call(null,seq__35813_35821);
if(temp__4657__auto___35830){
var seq__35813_35831__$1 = temp__4657__auto___35830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35813_35831__$1)){
var c__25601__auto___35832 = cljs.core.chunk_first.call(null,seq__35813_35831__$1);
var G__35833 = cljs.core.chunk_rest.call(null,seq__35813_35831__$1);
var G__35834 = c__25601__auto___35832;
var G__35835 = cljs.core.count.call(null,c__25601__auto___35832);
var G__35836 = (0);
seq__35813_35821 = G__35833;
chunk__35814_35822 = G__35834;
count__35815_35823 = G__35835;
i__35816_35824 = G__35836;
continue;
} else {
var msg_35837 = cljs.core.first.call(null,seq__35813_35831__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35837);

var G__35838 = cljs.core.next.call(null,seq__35813_35831__$1);
var G__35839 = null;
var G__35840 = (0);
var G__35841 = (0);
seq__35813_35821 = G__35838;
chunk__35814_35822 = G__35839;
count__35815_35823 = G__35840;
i__35816_35824 = G__35841;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35846 = arguments.length;
var i__25866__auto___35847 = (0);
while(true){
if((i__25866__auto___35847 < len__25865__auto___35846)){
args__25872__auto__.push((arguments[i__25866__auto___35847]));

var G__35848 = (i__25866__auto___35847 + (1));
i__25866__auto___35847 = G__35848;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35843){
var map__35844 = p__35843;
var map__35844__$1 = ((((!((map__35844 == null)))?((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35844):map__35844);
var opts = map__35844__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35842){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35842));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35850){if((e35850 instanceof Error)){
var e = e35850;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35850;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35854){
var map__35855 = p__35854;
var map__35855__$1 = ((((!((map__35855 == null)))?((((map__35855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35855):map__35855);
var msg_name = cljs.core.get.call(null,map__35855__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1479345927765