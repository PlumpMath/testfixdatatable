goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('testfixeddatatable.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39194__delegate = function (x){
if(cljs.core.truth_(testfixeddatatable.core.on_js_reload)){
return cljs.core.apply.call(null,testfixeddatatable.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'testfixeddatatable.core/on-js-reload' is missing");
}
};
var G__39194 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39195__i = 0, G__39195__a = new Array(arguments.length -  0);
while (G__39195__i < G__39195__a.length) {G__39195__a[G__39195__i] = arguments[G__39195__i + 0]; ++G__39195__i;}
  x = new cljs.core.IndexedSeq(G__39195__a,0);
} 
return G__39194__delegate.call(this,x);};
G__39194.cljs$lang$maxFixedArity = 0;
G__39194.cljs$lang$applyTo = (function (arglist__39196){
var x = cljs.core.seq(arglist__39196);
return G__39194__delegate(x);
});
G__39194.cljs$core$IFn$_invoke$arity$variadic = G__39194__delegate;
return G__39194;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
