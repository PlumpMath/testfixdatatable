goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('testfixeddatatable.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39182__delegate = function (x){
if(cljs.core.truth_(testfixeddatatable.core.on_js_reload)){
return cljs.core.apply.call(null,testfixeddatatable.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'testfixeddatatable.core/on-js-reload' is missing");
}
};
var G__39182 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39183__i = 0, G__39183__a = new Array(arguments.length -  0);
while (G__39183__i < G__39183__a.length) {G__39183__a[G__39183__i] = arguments[G__39183__i + 0]; ++G__39183__i;}
  x = new cljs.core.IndexedSeq(G__39183__a,0);
} 
return G__39182__delegate.call(this,x);};
G__39182.cljs$lang$maxFixedArity = 0;
G__39182.cljs$lang$applyTo = (function (arglist__39184){
var x = cljs.core.seq(arglist__39184);
return G__39182__delegate(x);
});
G__39182.cljs$core$IFn$_invoke$arity$variadic = G__39182__delegate;
return G__39182;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
