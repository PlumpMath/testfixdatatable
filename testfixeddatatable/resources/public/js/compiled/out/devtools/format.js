// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._header[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._header["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._has_body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25453__auto__ = (((value == null))?null:value);
var m__25454__auto__ = (devtools.format._body[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,value);
} else {
var m__25454__auto____$1 = (devtools.format._body["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35896__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35896__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35896__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35896__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35895__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35895__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35896__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35896__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35896__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35896__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35895__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35895__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35896__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35896__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35896__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35896__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35895__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35895__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35896__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35896__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35896__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35896__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35895__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35895__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35896__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35896__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35896__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35896__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35895__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35895__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35896__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35896__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35896__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35896__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35895__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35895__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__35896__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__35896__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__35896__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__35896__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__35895__auto__ = temp__4657__auto____$2;
return goog.object.get(o__35895__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35917 = arguments.length;
var i__25866__auto___35918 = (0);
while(true){
if((i__25866__auto___35918 < len__25865__auto___35917)){
args__25872__auto__.push((arguments[i__25866__auto___35918]));

var G__35919 = (i__25866__auto___35918 + (1));
i__25866__auto___35918 = G__35919;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35916){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35916));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35921 = arguments.length;
var i__25866__auto___35922 = (0);
while(true){
if((i__25866__auto___35922 < len__25865__auto___35921)){
args__25872__auto__.push((arguments[i__25866__auto___35922]));

var G__35923 = (i__25866__auto___35922 + (1));
i__25866__auto___35922 = G__35923;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35920){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35920));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35925 = arguments.length;
var i__25866__auto___35926 = (0);
while(true){
if((i__25866__auto___35926 < len__25865__auto___35925)){
args__25872__auto__.push((arguments[i__25866__auto___35926]));

var G__35927 = (i__25866__auto___35926 + (1));
i__25866__auto___35926 = G__35927;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35924){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35924));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35929 = arguments.length;
var i__25866__auto___35930 = (0);
while(true){
if((i__25866__auto___35930 < len__25865__auto___35929)){
args__25872__auto__.push((arguments[i__25866__auto___35930]));

var G__35931 = (i__25866__auto___35930 + (1));
i__25866__auto___35930 = G__35931;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35928){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35928));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35933 = arguments.length;
var i__25866__auto___35934 = (0);
while(true){
if((i__25866__auto___35934 < len__25865__auto___35933)){
args__25872__auto__.push((arguments[i__25866__auto___35934]));

var G__35935 = (i__25866__auto___35934 + (1));
i__25866__auto___35934 = G__35935;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35932){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35932));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35937 = arguments.length;
var i__25866__auto___35938 = (0);
while(true){
if((i__25866__auto___35938 < len__25865__auto___35937)){
args__25872__auto__.push((arguments[i__25866__auto___35938]));

var G__35939 = (i__25866__auto___35938 + (1));
i__25866__auto___35938 = G__35939;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35936){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35936));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35941 = arguments.length;
var i__25866__auto___35942 = (0);
while(true){
if((i__25866__auto___35942 < len__25865__auto___35941)){
args__25872__auto__.push((arguments[i__25866__auto___35942]));

var G__35943 = (i__25866__auto___35942 + (1));
i__25866__auto___35942 = G__35943;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35940){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35940));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35951 = arguments.length;
var i__25866__auto___35952 = (0);
while(true){
if((i__25866__auto___35952 < len__25865__auto___35951)){
args__25872__auto__.push((arguments[i__25866__auto___35952]));

var G__35953 = (i__25866__auto___35952 + (1));
i__25866__auto___35952 = G__35953;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35947){
var vec__35948 = p__35947;
var state_override = cljs.core.nth.call(null,vec__35948,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35948,state_override){
return (function (p1__35944_SHARP_){
return cljs.core.merge.call(null,p1__35944_SHARP_,state_override);
});})(vec__35948,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35945){
var G__35946 = cljs.core.first.call(null,seq35945);
var seq35945__$1 = cljs.core.next.call(null,seq35945);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35946,seq35945__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35955 = arguments.length;
var i__25866__auto___35956 = (0);
while(true){
if((i__25866__auto___35956 < len__25865__auto___35955)){
args__25872__auto__.push((arguments[i__25866__auto___35956]));

var G__35957 = (i__25866__auto___35956 + (1));
i__25866__auto___35956 = G__35957;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35954){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35954));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35960 = arguments.length;
var i__25866__auto___35961 = (0);
while(true){
if((i__25866__auto___35961 < len__25865__auto___35960)){
args__25872__auto__.push((arguments[i__25866__auto___35961]));

var G__35962 = (i__25866__auto___35961 + (1));
i__25866__auto___35961 = G__35962;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35958){
var G__35959 = cljs.core.first.call(null,seq35958);
var seq35958__$1 = cljs.core.next.call(null,seq35958);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35959,seq35958__$1);
});


//# sourceMappingURL=format.js.map?rel=1479345928021