// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x38390_38391 = value;
x38390_38391.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x38395_38396 = value;
x38395_38396.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x38400_38401 = value;
x38400_38401.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24778__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24778__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38409 = arguments.length;
var i__25866__auto___38410 = (0);
while(true){
if((i__25866__auto___38410 < len__25865__auto___38409)){
args__25872__auto__.push((arguments[i__25866__auto___38410]));

var G__38411 = (i__25866__auto___38410 + (1));
i__25866__auto___38410 = G__38411;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__38405_38412 = cljs.core.seq.call(null,items);
var chunk__38406_38413 = null;
var count__38407_38414 = (0);
var i__38408_38415 = (0);
while(true){
if((i__38408_38415 < count__38407_38414)){
var item_38416 = cljs.core._nth.call(null,chunk__38406_38413,i__38408_38415);
if(cljs.core.some_QMARK_.call(null,item_38416)){
if(cljs.core.coll_QMARK_.call(null,item_38416)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38416)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38416));
}
} else {
}

var G__38417 = seq__38405_38412;
var G__38418 = chunk__38406_38413;
var G__38419 = count__38407_38414;
var G__38420 = (i__38408_38415 + (1));
seq__38405_38412 = G__38417;
chunk__38406_38413 = G__38418;
count__38407_38414 = G__38419;
i__38408_38415 = G__38420;
continue;
} else {
var temp__4657__auto___38421 = cljs.core.seq.call(null,seq__38405_38412);
if(temp__4657__auto___38421){
var seq__38405_38422__$1 = temp__4657__auto___38421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38405_38422__$1)){
var c__25601__auto___38423 = cljs.core.chunk_first.call(null,seq__38405_38422__$1);
var G__38424 = cljs.core.chunk_rest.call(null,seq__38405_38422__$1);
var G__38425 = c__25601__auto___38423;
var G__38426 = cljs.core.count.call(null,c__25601__auto___38423);
var G__38427 = (0);
seq__38405_38412 = G__38424;
chunk__38406_38413 = G__38425;
count__38407_38414 = G__38426;
i__38408_38415 = G__38427;
continue;
} else {
var item_38428 = cljs.core.first.call(null,seq__38405_38422__$1);
if(cljs.core.some_QMARK_.call(null,item_38428)){
if(cljs.core.coll_QMARK_.call(null,item_38428)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38428)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38428));
}
} else {
}

var G__38429 = cljs.core.next.call(null,seq__38405_38422__$1);
var G__38430 = null;
var G__38431 = (0);
var G__38432 = (0);
seq__38405_38412 = G__38429;
chunk__38406_38413 = G__38430;
count__38407_38414 = G__38431;
i__38408_38415 = G__38432;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38404){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38404));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38440 = arguments.length;
var i__25866__auto___38441 = (0);
while(true){
if((i__25866__auto___38441 < len__25865__auto___38440)){
args__25872__auto__.push((arguments[i__25866__auto___38441]));

var G__38442 = (i__25866__auto___38441 + (1));
i__25866__auto___38441 = G__38442;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((2) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__38436_38443 = cljs.core.seq.call(null,children);
var chunk__38437_38444 = null;
var count__38438_38445 = (0);
var i__38439_38446 = (0);
while(true){
if((i__38439_38446 < count__38438_38445)){
var child_38447 = cljs.core._nth.call(null,chunk__38437_38444,i__38439_38446);
if(cljs.core.some_QMARK_.call(null,child_38447)){
if(cljs.core.coll_QMARK_.call(null,child_38447)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38447))));
} else {
var temp__4655__auto___38448 = devtools.formatters.helpers.pref.call(null,child_38447);
if(cljs.core.truth_(temp__4655__auto___38448)){
var child_value_38449 = temp__4655__auto___38448;
template.push(child_value_38449);
} else {
}
}
} else {
}

var G__38450 = seq__38436_38443;
var G__38451 = chunk__38437_38444;
var G__38452 = count__38438_38445;
var G__38453 = (i__38439_38446 + (1));
seq__38436_38443 = G__38450;
chunk__38437_38444 = G__38451;
count__38438_38445 = G__38452;
i__38439_38446 = G__38453;
continue;
} else {
var temp__4657__auto___38454 = cljs.core.seq.call(null,seq__38436_38443);
if(temp__4657__auto___38454){
var seq__38436_38455__$1 = temp__4657__auto___38454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38436_38455__$1)){
var c__25601__auto___38456 = cljs.core.chunk_first.call(null,seq__38436_38455__$1);
var G__38457 = cljs.core.chunk_rest.call(null,seq__38436_38455__$1);
var G__38458 = c__25601__auto___38456;
var G__38459 = cljs.core.count.call(null,c__25601__auto___38456);
var G__38460 = (0);
seq__38436_38443 = G__38457;
chunk__38437_38444 = G__38458;
count__38438_38445 = G__38459;
i__38439_38446 = G__38460;
continue;
} else {
var child_38461 = cljs.core.first.call(null,seq__38436_38455__$1);
if(cljs.core.some_QMARK_.call(null,child_38461)){
if(cljs.core.coll_QMARK_.call(null,child_38461)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38461))));
} else {
var temp__4655__auto___38462 = devtools.formatters.helpers.pref.call(null,child_38461);
if(cljs.core.truth_(temp__4655__auto___38462)){
var child_value_38463 = temp__4655__auto___38462;
template.push(child_value_38463);
} else {
}
}
} else {
}

var G__38464 = cljs.core.next.call(null,seq__38436_38455__$1);
var G__38465 = null;
var G__38466 = (0);
var G__38467 = (0);
seq__38436_38443 = G__38464;
chunk__38437_38444 = G__38465;
count__38438_38445 = G__38466;
i__38439_38446 = G__38467;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38433){
var G__38434 = cljs.core.first.call(null,seq38433);
var seq38433__$1 = cljs.core.next.call(null,seq38433);
var G__38435 = cljs.core.first.call(null,seq38433__$1);
var seq38433__$2 = cljs.core.next.call(null,seq38433__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38434,G__38435,seq38433__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38470 = arguments.length;
var i__25866__auto___38471 = (0);
while(true){
if((i__25866__auto___38471 < len__25865__auto___38470)){
args__25872__auto__.push((arguments[i__25866__auto___38471]));

var G__38472 = (i__25866__auto___38471 + (1));
i__25866__auto___38471 = G__38472;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38468){
var G__38469 = cljs.core.first.call(null,seq38468);
var seq38468__$1 = cljs.core.next.call(null,seq38468);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38469,seq38468__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38475 = arguments.length;
var i__25866__auto___38476 = (0);
while(true){
if((i__25866__auto___38476 < len__25865__auto___38475)){
args__25872__auto__.push((arguments[i__25866__auto___38476]));

var G__38477 = (i__25866__auto___38476 + (1));
i__25866__auto___38476 = G__38477;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38473){
var G__38474 = cljs.core.first.call(null,seq38473);
var seq38473__$1 = cljs.core.next.call(null,seq38473);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38474,seq38473__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args38478 = [];
var len__25865__auto___38483 = arguments.length;
var i__25866__auto___38484 = (0);
while(true){
if((i__25866__auto___38484 < len__25865__auto___38483)){
args38478.push((arguments[i__25866__auto___38484]));

var G__38485 = (i__25866__auto___38484 + (1));
i__25866__auto___38484 = G__38485;
continue;
} else {
}
break;
}

var G__38480 = args38478.length;
switch (G__38480) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38478.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38482 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24790__auto__ = start_index;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return (0);
}
})()};
return obj38482;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___38493 = arguments.length;
var i__25866__auto___38494 = (0);
while(true){
if((i__25866__auto___38494 < len__25865__auto___38493)){
args__25872__auto__.push((arguments[i__25866__auto___38494]));

var G__38495 = (i__25866__auto___38494 + (1));
i__25866__auto___38494 = G__38495;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38489){
var vec__38490 = p__38489;
var state_override_fn = cljs.core.nth.call(null,vec__38490,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38487){
var G__38488 = cljs.core.first.call(null,seq38487);
var seq38487__$1 = cljs.core.next.call(null,seq38487);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38488,seq38487__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38499_38502 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38500_38503 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38499_38502,_STAR_print_fn_STAR_38500_38503,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_38499_38502,_STAR_print_fn_STAR_38500_38503,sb__25776__auto__))
;

try{var _STAR_print_level_STAR_38501_38504 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38501_38504;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38500_38503;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38499_38502;
}
return [cljs.core.str(sb__25776__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38506 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38506;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__38508 = name;
switch (G__38508) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__38513 = tag;
var html_tag = cljs.core.nth.call(null,vec__38513,(0),null);
var style = cljs.core.nth.call(null,vec__38513,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38517 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38517;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38520 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38521 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38521;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38520;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38522 = initial_value;
var G__38523 = value.call(null);
initial_value = G__38522;
value = G__38523;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38524 = initial_value;
var G__38525 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38524;
value = G__38525;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38526 = initial_value;
var G__38527 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38526;
value = G__38527;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1479345931451