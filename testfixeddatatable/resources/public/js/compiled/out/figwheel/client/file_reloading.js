// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30508_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30508_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30513 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30514 = null;
var count__30515 = (0);
var i__30516 = (0);
while(true){
if((i__30516 < count__30515)){
var n = cljs.core._nth.call(null,chunk__30514,i__30516);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30517 = seq__30513;
var G__30518 = chunk__30514;
var G__30519 = count__30515;
var G__30520 = (i__30516 + (1));
seq__30513 = G__30517;
chunk__30514 = G__30518;
count__30515 = G__30519;
i__30516 = G__30520;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30513);
if(temp__4657__auto__){
var seq__30513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30513__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__30513__$1);
var G__30521 = cljs.core.chunk_rest.call(null,seq__30513__$1);
var G__30522 = c__25601__auto__;
var G__30523 = cljs.core.count.call(null,c__25601__auto__);
var G__30524 = (0);
seq__30513 = G__30521;
chunk__30514 = G__30522;
count__30515 = G__30523;
i__30516 = G__30524;
continue;
} else {
var n = cljs.core.first.call(null,seq__30513__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30525 = cljs.core.next.call(null,seq__30513__$1);
var G__30526 = null;
var G__30527 = (0);
var G__30528 = (0);
seq__30513 = G__30525;
chunk__30514 = G__30526;
count__30515 = G__30527;
i__30516 = G__30528;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30579_30590 = cljs.core.seq.call(null,deps);
var chunk__30580_30591 = null;
var count__30581_30592 = (0);
var i__30582_30593 = (0);
while(true){
if((i__30582_30593 < count__30581_30592)){
var dep_30594 = cljs.core._nth.call(null,chunk__30580_30591,i__30582_30593);
topo_sort_helper_STAR_.call(null,dep_30594,(depth + (1)),state);

var G__30595 = seq__30579_30590;
var G__30596 = chunk__30580_30591;
var G__30597 = count__30581_30592;
var G__30598 = (i__30582_30593 + (1));
seq__30579_30590 = G__30595;
chunk__30580_30591 = G__30596;
count__30581_30592 = G__30597;
i__30582_30593 = G__30598;
continue;
} else {
var temp__4657__auto___30599 = cljs.core.seq.call(null,seq__30579_30590);
if(temp__4657__auto___30599){
var seq__30579_30600__$1 = temp__4657__auto___30599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30579_30600__$1)){
var c__25601__auto___30601 = cljs.core.chunk_first.call(null,seq__30579_30600__$1);
var G__30602 = cljs.core.chunk_rest.call(null,seq__30579_30600__$1);
var G__30603 = c__25601__auto___30601;
var G__30604 = cljs.core.count.call(null,c__25601__auto___30601);
var G__30605 = (0);
seq__30579_30590 = G__30602;
chunk__30580_30591 = G__30603;
count__30581_30592 = G__30604;
i__30582_30593 = G__30605;
continue;
} else {
var dep_30606 = cljs.core.first.call(null,seq__30579_30600__$1);
topo_sort_helper_STAR_.call(null,dep_30606,(depth + (1)),state);

var G__30607 = cljs.core.next.call(null,seq__30579_30600__$1);
var G__30608 = null;
var G__30609 = (0);
var G__30610 = (0);
seq__30579_30590 = G__30607;
chunk__30580_30591 = G__30608;
count__30581_30592 = G__30609;
i__30582_30593 = G__30610;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30583){
var vec__30587 = p__30583;
var seq__30588 = cljs.core.seq.call(null,vec__30587);
var first__30589 = cljs.core.first.call(null,seq__30588);
var seq__30588__$1 = cljs.core.next.call(null,seq__30588);
var x = first__30589;
var xs = seq__30588__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30587,seq__30588,first__30589,seq__30588__$1,x,xs,get_deps__$1){
return (function (p1__30529_SHARP_){
return clojure.set.difference.call(null,p1__30529_SHARP_,x);
});})(vec__30587,seq__30588,first__30589,seq__30588__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30623 = cljs.core.seq.call(null,provides);
var chunk__30624 = null;
var count__30625 = (0);
var i__30626 = (0);
while(true){
if((i__30626 < count__30625)){
var prov = cljs.core._nth.call(null,chunk__30624,i__30626);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30627_30635 = cljs.core.seq.call(null,requires);
var chunk__30628_30636 = null;
var count__30629_30637 = (0);
var i__30630_30638 = (0);
while(true){
if((i__30630_30638 < count__30629_30637)){
var req_30639 = cljs.core._nth.call(null,chunk__30628_30636,i__30630_30638);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30639,prov);

var G__30640 = seq__30627_30635;
var G__30641 = chunk__30628_30636;
var G__30642 = count__30629_30637;
var G__30643 = (i__30630_30638 + (1));
seq__30627_30635 = G__30640;
chunk__30628_30636 = G__30641;
count__30629_30637 = G__30642;
i__30630_30638 = G__30643;
continue;
} else {
var temp__4657__auto___30644 = cljs.core.seq.call(null,seq__30627_30635);
if(temp__4657__auto___30644){
var seq__30627_30645__$1 = temp__4657__auto___30644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30627_30645__$1)){
var c__25601__auto___30646 = cljs.core.chunk_first.call(null,seq__30627_30645__$1);
var G__30647 = cljs.core.chunk_rest.call(null,seq__30627_30645__$1);
var G__30648 = c__25601__auto___30646;
var G__30649 = cljs.core.count.call(null,c__25601__auto___30646);
var G__30650 = (0);
seq__30627_30635 = G__30647;
chunk__30628_30636 = G__30648;
count__30629_30637 = G__30649;
i__30630_30638 = G__30650;
continue;
} else {
var req_30651 = cljs.core.first.call(null,seq__30627_30645__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30651,prov);

var G__30652 = cljs.core.next.call(null,seq__30627_30645__$1);
var G__30653 = null;
var G__30654 = (0);
var G__30655 = (0);
seq__30627_30635 = G__30652;
chunk__30628_30636 = G__30653;
count__30629_30637 = G__30654;
i__30630_30638 = G__30655;
continue;
}
} else {
}
}
break;
}

var G__30656 = seq__30623;
var G__30657 = chunk__30624;
var G__30658 = count__30625;
var G__30659 = (i__30626 + (1));
seq__30623 = G__30656;
chunk__30624 = G__30657;
count__30625 = G__30658;
i__30626 = G__30659;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30623);
if(temp__4657__auto__){
var seq__30623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30623__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__30623__$1);
var G__30660 = cljs.core.chunk_rest.call(null,seq__30623__$1);
var G__30661 = c__25601__auto__;
var G__30662 = cljs.core.count.call(null,c__25601__auto__);
var G__30663 = (0);
seq__30623 = G__30660;
chunk__30624 = G__30661;
count__30625 = G__30662;
i__30626 = G__30663;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30623__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30631_30664 = cljs.core.seq.call(null,requires);
var chunk__30632_30665 = null;
var count__30633_30666 = (0);
var i__30634_30667 = (0);
while(true){
if((i__30634_30667 < count__30633_30666)){
var req_30668 = cljs.core._nth.call(null,chunk__30632_30665,i__30634_30667);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30668,prov);

var G__30669 = seq__30631_30664;
var G__30670 = chunk__30632_30665;
var G__30671 = count__30633_30666;
var G__30672 = (i__30634_30667 + (1));
seq__30631_30664 = G__30669;
chunk__30632_30665 = G__30670;
count__30633_30666 = G__30671;
i__30634_30667 = G__30672;
continue;
} else {
var temp__4657__auto___30673__$1 = cljs.core.seq.call(null,seq__30631_30664);
if(temp__4657__auto___30673__$1){
var seq__30631_30674__$1 = temp__4657__auto___30673__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30631_30674__$1)){
var c__25601__auto___30675 = cljs.core.chunk_first.call(null,seq__30631_30674__$1);
var G__30676 = cljs.core.chunk_rest.call(null,seq__30631_30674__$1);
var G__30677 = c__25601__auto___30675;
var G__30678 = cljs.core.count.call(null,c__25601__auto___30675);
var G__30679 = (0);
seq__30631_30664 = G__30676;
chunk__30632_30665 = G__30677;
count__30633_30666 = G__30678;
i__30634_30667 = G__30679;
continue;
} else {
var req_30680 = cljs.core.first.call(null,seq__30631_30674__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30680,prov);

var G__30681 = cljs.core.next.call(null,seq__30631_30674__$1);
var G__30682 = null;
var G__30683 = (0);
var G__30684 = (0);
seq__30631_30664 = G__30681;
chunk__30632_30665 = G__30682;
count__30633_30666 = G__30683;
i__30634_30667 = G__30684;
continue;
}
} else {
}
}
break;
}

var G__30685 = cljs.core.next.call(null,seq__30623__$1);
var G__30686 = null;
var G__30687 = (0);
var G__30688 = (0);
seq__30623 = G__30685;
chunk__30624 = G__30686;
count__30625 = G__30687;
i__30626 = G__30688;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30693_30697 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30694_30698 = null;
var count__30695_30699 = (0);
var i__30696_30700 = (0);
while(true){
if((i__30696_30700 < count__30695_30699)){
var ns_30701 = cljs.core._nth.call(null,chunk__30694_30698,i__30696_30700);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30701);

var G__30702 = seq__30693_30697;
var G__30703 = chunk__30694_30698;
var G__30704 = count__30695_30699;
var G__30705 = (i__30696_30700 + (1));
seq__30693_30697 = G__30702;
chunk__30694_30698 = G__30703;
count__30695_30699 = G__30704;
i__30696_30700 = G__30705;
continue;
} else {
var temp__4657__auto___30706 = cljs.core.seq.call(null,seq__30693_30697);
if(temp__4657__auto___30706){
var seq__30693_30707__$1 = temp__4657__auto___30706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30693_30707__$1)){
var c__25601__auto___30708 = cljs.core.chunk_first.call(null,seq__30693_30707__$1);
var G__30709 = cljs.core.chunk_rest.call(null,seq__30693_30707__$1);
var G__30710 = c__25601__auto___30708;
var G__30711 = cljs.core.count.call(null,c__25601__auto___30708);
var G__30712 = (0);
seq__30693_30697 = G__30709;
chunk__30694_30698 = G__30710;
count__30695_30699 = G__30711;
i__30696_30700 = G__30712;
continue;
} else {
var ns_30713 = cljs.core.first.call(null,seq__30693_30707__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30713);

var G__30714 = cljs.core.next.call(null,seq__30693_30707__$1);
var G__30715 = null;
var G__30716 = (0);
var G__30717 = (0);
seq__30693_30697 = G__30714;
chunk__30694_30698 = G__30715;
count__30695_30699 = G__30716;
i__30696_30700 = G__30717;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30718__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30719__i = 0, G__30719__a = new Array(arguments.length -  0);
while (G__30719__i < G__30719__a.length) {G__30719__a[G__30719__i] = arguments[G__30719__i + 0]; ++G__30719__i;}
  args = new cljs.core.IndexedSeq(G__30719__a,0);
} 
return G__30718__delegate.call(this,args);};
G__30718.cljs$lang$maxFixedArity = 0;
G__30718.cljs$lang$applyTo = (function (arglist__30720){
var args = cljs.core.seq(arglist__30720);
return G__30718__delegate(args);
});
G__30718.cljs$core$IFn$_invoke$arity$variadic = G__30718__delegate;
return G__30718;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30722 = cljs.core._EQ_;
var expr__30723 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30722.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30723))){
var path_parts = ((function (pred__30722,expr__30723){
return (function (p1__30721_SHARP_){
return clojure.string.split.call(null,p1__30721_SHARP_,/[\/\\]/);
});})(pred__30722,expr__30723))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30722,expr__30723){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30725){if((e30725 instanceof Error)){
var e = e30725;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30725;

}
}})());
});
;})(path_parts,sep,root,pred__30722,expr__30723))
} else {
if(cljs.core.truth_(pred__30722.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30723))){
return ((function (pred__30722,expr__30723){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30722,expr__30723){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30722,expr__30723))
);

return deferred.addErrback(((function (deferred,pred__30722,expr__30723){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30722,expr__30723))
);
});
;})(pred__30722,expr__30723))
} else {
return ((function (pred__30722,expr__30723){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30722,expr__30723))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30726,callback){
var map__30729 = p__30726;
var map__30729__$1 = ((((!((map__30729 == null)))?((((map__30729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30729):map__30729);
var file_msg = map__30729__$1;
var request_url = cljs.core.get.call(null,map__30729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30729,map__30729__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30729,map__30729__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__){
return (function (state_30753){
var state_val_30754 = (state_30753[(1)]);
if((state_val_30754 === (7))){
var inst_30749 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
var statearr_30755_30775 = state_30753__$1;
(statearr_30755_30775[(2)] = inst_30749);

(statearr_30755_30775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (1))){
var state_30753__$1 = state_30753;
var statearr_30756_30776 = state_30753__$1;
(statearr_30756_30776[(2)] = null);

(statearr_30756_30776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (4))){
var inst_30733 = (state_30753[(7)]);
var inst_30733__$1 = (state_30753[(2)]);
var state_30753__$1 = (function (){var statearr_30757 = state_30753;
(statearr_30757[(7)] = inst_30733__$1);

return statearr_30757;
})();
if(cljs.core.truth_(inst_30733__$1)){
var statearr_30758_30777 = state_30753__$1;
(statearr_30758_30777[(1)] = (5));

} else {
var statearr_30759_30778 = state_30753__$1;
(statearr_30759_30778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (6))){
var state_30753__$1 = state_30753;
var statearr_30760_30779 = state_30753__$1;
(statearr_30760_30779[(2)] = null);

(statearr_30760_30779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (3))){
var inst_30751 = (state_30753[(2)]);
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30753__$1,inst_30751);
} else {
if((state_val_30754 === (2))){
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30753__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30754 === (11))){
var inst_30745 = (state_30753[(2)]);
var state_30753__$1 = (function (){var statearr_30761 = state_30753;
(statearr_30761[(8)] = inst_30745);

return statearr_30761;
})();
var statearr_30762_30780 = state_30753__$1;
(statearr_30762_30780[(2)] = null);

(statearr_30762_30780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (9))){
var inst_30737 = (state_30753[(9)]);
var inst_30739 = (state_30753[(10)]);
var inst_30741 = inst_30739.call(null,inst_30737);
var state_30753__$1 = state_30753;
var statearr_30763_30781 = state_30753__$1;
(statearr_30763_30781[(2)] = inst_30741);

(statearr_30763_30781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (5))){
var inst_30733 = (state_30753[(7)]);
var inst_30735 = figwheel.client.file_reloading.blocking_load.call(null,inst_30733);
var state_30753__$1 = state_30753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30753__$1,(8),inst_30735);
} else {
if((state_val_30754 === (10))){
var inst_30737 = (state_30753[(9)]);
var inst_30743 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30737);
var state_30753__$1 = state_30753;
var statearr_30764_30782 = state_30753__$1;
(statearr_30764_30782[(2)] = inst_30743);

(statearr_30764_30782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30754 === (8))){
var inst_30733 = (state_30753[(7)]);
var inst_30739 = (state_30753[(10)]);
var inst_30737 = (state_30753[(2)]);
var inst_30738 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30739__$1 = cljs.core.get.call(null,inst_30738,inst_30733);
var state_30753__$1 = (function (){var statearr_30765 = state_30753;
(statearr_30765[(9)] = inst_30737);

(statearr_30765[(10)] = inst_30739__$1);

return statearr_30765;
})();
if(cljs.core.truth_(inst_30739__$1)){
var statearr_30766_30783 = state_30753__$1;
(statearr_30766_30783[(1)] = (9));

} else {
var statearr_30767_30784 = state_30753__$1;
(statearr_30767_30784[(1)] = (10));

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
});})(c__27653__auto__))
;
return ((function (switch__27541__auto__,c__27653__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27542__auto__ = null;
var figwheel$client$file_reloading$state_machine__27542__auto____0 = (function (){
var statearr_30771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30771[(0)] = figwheel$client$file_reloading$state_machine__27542__auto__);

(statearr_30771[(1)] = (1));

return statearr_30771;
});
var figwheel$client$file_reloading$state_machine__27542__auto____1 = (function (state_30753){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_30753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e30772){if((e30772 instanceof Object)){
var ex__27545__auto__ = e30772;
var statearr_30773_30785 = state_30753;
(statearr_30773_30785[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30786 = state_30753;
state_30753 = G__30786;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27542__auto__ = function(state_30753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27542__auto____1.call(this,state_30753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27542__auto____0;
figwheel$client$file_reloading$state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27542__auto____1;
return figwheel$client$file_reloading$state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__))
})();
var state__27655__auto__ = (function (){var statearr_30774 = f__27654__auto__.call(null);
(statearr_30774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__))
);

return c__27653__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30787,callback){
var map__30790 = p__30787;
var map__30790__$1 = ((((!((map__30790 == null)))?((((map__30790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30790):map__30790);
var file_msg = map__30790__$1;
var namespace = cljs.core.get.call(null,map__30790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30790,map__30790__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30790,map__30790__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30792){
var map__30795 = p__30792;
var map__30795__$1 = ((((!((map__30795 == null)))?((((map__30795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30795):map__30795);
var file_msg = map__30795__$1;
var namespace = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30797,callback){
var map__30800 = p__30797;
var map__30800__$1 = ((((!((map__30800 == null)))?((((map__30800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30800):map__30800);
var file_msg = map__30800__$1;
var request_url = cljs.core.get.call(null,map__30800__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27653__auto___30904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto___30904,out){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto___30904,out){
return (function (state_30886){
var state_val_30887 = (state_30886[(1)]);
if((state_val_30887 === (1))){
var inst_30860 = cljs.core.seq.call(null,files);
var inst_30861 = cljs.core.first.call(null,inst_30860);
var inst_30862 = cljs.core.next.call(null,inst_30860);
var inst_30863 = files;
var state_30886__$1 = (function (){var statearr_30888 = state_30886;
(statearr_30888[(7)] = inst_30862);

(statearr_30888[(8)] = inst_30861);

(statearr_30888[(9)] = inst_30863);

return statearr_30888;
})();
var statearr_30889_30905 = state_30886__$1;
(statearr_30889_30905[(2)] = null);

(statearr_30889_30905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (2))){
var inst_30863 = (state_30886[(9)]);
var inst_30869 = (state_30886[(10)]);
var inst_30868 = cljs.core.seq.call(null,inst_30863);
var inst_30869__$1 = cljs.core.first.call(null,inst_30868);
var inst_30870 = cljs.core.next.call(null,inst_30868);
var inst_30871 = (inst_30869__$1 == null);
var inst_30872 = cljs.core.not.call(null,inst_30871);
var state_30886__$1 = (function (){var statearr_30890 = state_30886;
(statearr_30890[(11)] = inst_30870);

(statearr_30890[(10)] = inst_30869__$1);

return statearr_30890;
})();
if(inst_30872){
var statearr_30891_30906 = state_30886__$1;
(statearr_30891_30906[(1)] = (4));

} else {
var statearr_30892_30907 = state_30886__$1;
(statearr_30892_30907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (3))){
var inst_30884 = (state_30886[(2)]);
var state_30886__$1 = state_30886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30886__$1,inst_30884);
} else {
if((state_val_30887 === (4))){
var inst_30869 = (state_30886[(10)]);
var inst_30874 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30869);
var state_30886__$1 = state_30886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30886__$1,(7),inst_30874);
} else {
if((state_val_30887 === (5))){
var inst_30880 = cljs.core.async.close_BANG_.call(null,out);
var state_30886__$1 = state_30886;
var statearr_30893_30908 = state_30886__$1;
(statearr_30893_30908[(2)] = inst_30880);

(statearr_30893_30908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (6))){
var inst_30882 = (state_30886[(2)]);
var state_30886__$1 = state_30886;
var statearr_30894_30909 = state_30886__$1;
(statearr_30894_30909[(2)] = inst_30882);

(statearr_30894_30909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30887 === (7))){
var inst_30870 = (state_30886[(11)]);
var inst_30876 = (state_30886[(2)]);
var inst_30877 = cljs.core.async.put_BANG_.call(null,out,inst_30876);
var inst_30863 = inst_30870;
var state_30886__$1 = (function (){var statearr_30895 = state_30886;
(statearr_30895[(9)] = inst_30863);

(statearr_30895[(12)] = inst_30877);

return statearr_30895;
})();
var statearr_30896_30910 = state_30886__$1;
(statearr_30896_30910[(2)] = null);

(statearr_30896_30910[(1)] = (2));


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
});})(c__27653__auto___30904,out))
;
return ((function (switch__27541__auto__,c__27653__auto___30904,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto____0 = (function (){
var statearr_30900 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30900[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto__);

(statearr_30900[(1)] = (1));

return statearr_30900;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto____1 = (function (state_30886){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_30886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e30901){if((e30901 instanceof Object)){
var ex__27545__auto__ = e30901;
var statearr_30902_30911 = state_30886;
(statearr_30902_30911[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30912 = state_30886;
state_30886 = G__30912;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto__ = function(state_30886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto____1.call(this,state_30886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto___30904,out))
})();
var state__27655__auto__ = (function (){var statearr_30903 = f__27654__auto__.call(null);
(statearr_30903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto___30904);

return statearr_30903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto___30904,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30913,opts){
var map__30917 = p__30913;
var map__30917__$1 = ((((!((map__30917 == null)))?((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30917):map__30917);
var eval_body__$1 = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30919){var e = e30919;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30920_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30920_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30929){
var vec__30930 = p__30929;
var k = cljs.core.nth.call(null,vec__30930,(0),null);
var v = cljs.core.nth.call(null,vec__30930,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30933){
var vec__30934 = p__30933;
var k = cljs.core.nth.call(null,vec__30934,(0),null);
var v = cljs.core.nth.call(null,vec__30934,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30940,p__30941){
var map__31188 = p__30940;
var map__31188__$1 = ((((!((map__31188 == null)))?((((map__31188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31188):map__31188);
var opts = map__31188__$1;
var before_jsload = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31188__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31189 = p__30941;
var map__31189__$1 = ((((!((map__31189 == null)))?((((map__31189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);
var msg = map__31189__$1;
var files = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27653__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27654__auto__ = (function (){var switch__27541__auto__ = ((function (c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31342){
var state_val_31343 = (state_31342[(1)]);
if((state_val_31343 === (7))){
var inst_31203 = (state_31342[(7)]);
var inst_31206 = (state_31342[(8)]);
var inst_31205 = (state_31342[(9)]);
var inst_31204 = (state_31342[(10)]);
var inst_31211 = cljs.core._nth.call(null,inst_31204,inst_31206);
var inst_31212 = figwheel.client.file_reloading.eval_body.call(null,inst_31211,opts);
var inst_31213 = (inst_31206 + (1));
var tmp31344 = inst_31203;
var tmp31345 = inst_31205;
var tmp31346 = inst_31204;
var inst_31203__$1 = tmp31344;
var inst_31204__$1 = tmp31346;
var inst_31205__$1 = tmp31345;
var inst_31206__$1 = inst_31213;
var state_31342__$1 = (function (){var statearr_31347 = state_31342;
(statearr_31347[(11)] = inst_31212);

(statearr_31347[(7)] = inst_31203__$1);

(statearr_31347[(8)] = inst_31206__$1);

(statearr_31347[(9)] = inst_31205__$1);

(statearr_31347[(10)] = inst_31204__$1);

return statearr_31347;
})();
var statearr_31348_31434 = state_31342__$1;
(statearr_31348_31434[(2)] = null);

(statearr_31348_31434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (20))){
var inst_31246 = (state_31342[(12)]);
var inst_31254 = figwheel.client.file_reloading.sort_files.call(null,inst_31246);
var state_31342__$1 = state_31342;
var statearr_31349_31435 = state_31342__$1;
(statearr_31349_31435[(2)] = inst_31254);

(statearr_31349_31435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (27))){
var state_31342__$1 = state_31342;
var statearr_31350_31436 = state_31342__$1;
(statearr_31350_31436[(2)] = null);

(statearr_31350_31436[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (1))){
var inst_31195 = (state_31342[(13)]);
var inst_31192 = before_jsload.call(null,files);
var inst_31193 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31194 = (function (){return ((function (inst_31195,inst_31192,inst_31193,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30937_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30937_SHARP_);
});
;})(inst_31195,inst_31192,inst_31193,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31195__$1 = cljs.core.filter.call(null,inst_31194,files);
var inst_31196 = cljs.core.not_empty.call(null,inst_31195__$1);
var state_31342__$1 = (function (){var statearr_31351 = state_31342;
(statearr_31351[(13)] = inst_31195__$1);

(statearr_31351[(14)] = inst_31192);

(statearr_31351[(15)] = inst_31193);

return statearr_31351;
})();
if(cljs.core.truth_(inst_31196)){
var statearr_31352_31437 = state_31342__$1;
(statearr_31352_31437[(1)] = (2));

} else {
var statearr_31353_31438 = state_31342__$1;
(statearr_31353_31438[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (24))){
var state_31342__$1 = state_31342;
var statearr_31354_31439 = state_31342__$1;
(statearr_31354_31439[(2)] = null);

(statearr_31354_31439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (39))){
var inst_31296 = (state_31342[(16)]);
var state_31342__$1 = state_31342;
var statearr_31355_31440 = state_31342__$1;
(statearr_31355_31440[(2)] = inst_31296);

(statearr_31355_31440[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (46))){
var inst_31337 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
var statearr_31356_31441 = state_31342__$1;
(statearr_31356_31441[(2)] = inst_31337);

(statearr_31356_31441[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (4))){
var inst_31240 = (state_31342[(2)]);
var inst_31241 = cljs.core.List.EMPTY;
var inst_31242 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31241);
var inst_31243 = (function (){return ((function (inst_31240,inst_31241,inst_31242,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30938_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30938_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30938_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_31240,inst_31241,inst_31242,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31244 = cljs.core.filter.call(null,inst_31243,files);
var inst_31245 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31246 = cljs.core.concat.call(null,inst_31244,inst_31245);
var state_31342__$1 = (function (){var statearr_31357 = state_31342;
(statearr_31357[(12)] = inst_31246);

(statearr_31357[(17)] = inst_31240);

(statearr_31357[(18)] = inst_31242);

return statearr_31357;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31358_31442 = state_31342__$1;
(statearr_31358_31442[(1)] = (16));

} else {
var statearr_31359_31443 = state_31342__$1;
(statearr_31359_31443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (15))){
var inst_31230 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
var statearr_31360_31444 = state_31342__$1;
(statearr_31360_31444[(2)] = inst_31230);

(statearr_31360_31444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (21))){
var inst_31256 = (state_31342[(19)]);
var inst_31256__$1 = (state_31342[(2)]);
var inst_31257 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31256__$1);
var state_31342__$1 = (function (){var statearr_31361 = state_31342;
(statearr_31361[(19)] = inst_31256__$1);

return statearr_31361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31342__$1,(22),inst_31257);
} else {
if((state_val_31343 === (31))){
var inst_31340 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31342__$1,inst_31340);
} else {
if((state_val_31343 === (32))){
var inst_31296 = (state_31342[(16)]);
var inst_31301 = inst_31296.cljs$lang$protocol_mask$partition0$;
var inst_31302 = (inst_31301 & (64));
var inst_31303 = inst_31296.cljs$core$ISeq$;
var inst_31304 = (inst_31302) || (inst_31303);
var state_31342__$1 = state_31342;
if(cljs.core.truth_(inst_31304)){
var statearr_31362_31445 = state_31342__$1;
(statearr_31362_31445[(1)] = (35));

} else {
var statearr_31363_31446 = state_31342__$1;
(statearr_31363_31446[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (40))){
var inst_31317 = (state_31342[(20)]);
var inst_31316 = (state_31342[(2)]);
var inst_31317__$1 = cljs.core.get.call(null,inst_31316,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31318 = cljs.core.get.call(null,inst_31316,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31319 = cljs.core.not_empty.call(null,inst_31317__$1);
var state_31342__$1 = (function (){var statearr_31364 = state_31342;
(statearr_31364[(21)] = inst_31318);

(statearr_31364[(20)] = inst_31317__$1);

return statearr_31364;
})();
if(cljs.core.truth_(inst_31319)){
var statearr_31365_31447 = state_31342__$1;
(statearr_31365_31447[(1)] = (41));

} else {
var statearr_31366_31448 = state_31342__$1;
(statearr_31366_31448[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (33))){
var state_31342__$1 = state_31342;
var statearr_31367_31449 = state_31342__$1;
(statearr_31367_31449[(2)] = false);

(statearr_31367_31449[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (13))){
var inst_31216 = (state_31342[(22)]);
var inst_31220 = cljs.core.chunk_first.call(null,inst_31216);
var inst_31221 = cljs.core.chunk_rest.call(null,inst_31216);
var inst_31222 = cljs.core.count.call(null,inst_31220);
var inst_31203 = inst_31221;
var inst_31204 = inst_31220;
var inst_31205 = inst_31222;
var inst_31206 = (0);
var state_31342__$1 = (function (){var statearr_31368 = state_31342;
(statearr_31368[(7)] = inst_31203);

(statearr_31368[(8)] = inst_31206);

(statearr_31368[(9)] = inst_31205);

(statearr_31368[(10)] = inst_31204);

return statearr_31368;
})();
var statearr_31369_31450 = state_31342__$1;
(statearr_31369_31450[(2)] = null);

(statearr_31369_31450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (22))){
var inst_31259 = (state_31342[(23)]);
var inst_31264 = (state_31342[(24)]);
var inst_31256 = (state_31342[(19)]);
var inst_31260 = (state_31342[(25)]);
var inst_31259__$1 = (state_31342[(2)]);
var inst_31260__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31259__$1);
var inst_31261 = (function (){var all_files = inst_31256;
var res_SINGLEQUOTE_ = inst_31259__$1;
var res = inst_31260__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31259,inst_31264,inst_31256,inst_31260,inst_31259__$1,inst_31260__$1,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30939_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30939_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31259,inst_31264,inst_31256,inst_31260,inst_31259__$1,inst_31260__$1,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31262 = cljs.core.filter.call(null,inst_31261,inst_31259__$1);
var inst_31263 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31264__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31263);
var inst_31265 = cljs.core.not_empty.call(null,inst_31264__$1);
var state_31342__$1 = (function (){var statearr_31370 = state_31342;
(statearr_31370[(23)] = inst_31259__$1);

(statearr_31370[(24)] = inst_31264__$1);

(statearr_31370[(26)] = inst_31262);

(statearr_31370[(25)] = inst_31260__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31265)){
var statearr_31371_31451 = state_31342__$1;
(statearr_31371_31451[(1)] = (23));

} else {
var statearr_31372_31452 = state_31342__$1;
(statearr_31372_31452[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (36))){
var state_31342__$1 = state_31342;
var statearr_31373_31453 = state_31342__$1;
(statearr_31373_31453[(2)] = false);

(statearr_31373_31453[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (41))){
var inst_31317 = (state_31342[(20)]);
var inst_31321 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31322 = cljs.core.map.call(null,inst_31321,inst_31317);
var inst_31323 = cljs.core.pr_str.call(null,inst_31322);
var inst_31324 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31323)].join('');
var inst_31325 = figwheel.client.utils.log.call(null,inst_31324);
var state_31342__$1 = state_31342;
var statearr_31374_31454 = state_31342__$1;
(statearr_31374_31454[(2)] = inst_31325);

(statearr_31374_31454[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (43))){
var inst_31318 = (state_31342[(21)]);
var inst_31328 = (state_31342[(2)]);
var inst_31329 = cljs.core.not_empty.call(null,inst_31318);
var state_31342__$1 = (function (){var statearr_31375 = state_31342;
(statearr_31375[(27)] = inst_31328);

return statearr_31375;
})();
if(cljs.core.truth_(inst_31329)){
var statearr_31376_31455 = state_31342__$1;
(statearr_31376_31455[(1)] = (44));

} else {
var statearr_31377_31456 = state_31342__$1;
(statearr_31377_31456[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (29))){
var inst_31296 = (state_31342[(16)]);
var inst_31259 = (state_31342[(23)]);
var inst_31264 = (state_31342[(24)]);
var inst_31256 = (state_31342[(19)]);
var inst_31262 = (state_31342[(26)]);
var inst_31260 = (state_31342[(25)]);
var inst_31292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31295 = (function (){var all_files = inst_31256;
var res_SINGLEQUOTE_ = inst_31259;
var res = inst_31260;
var files_not_loaded = inst_31262;
var dependencies_that_loaded = inst_31264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31296,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31292,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31294){
var map__31378 = p__31294;
var map__31378__$1 = ((((!((map__31378 == null)))?((((map__31378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);
var namespace = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31296,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31292,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31296__$1 = cljs.core.group_by.call(null,inst_31295,inst_31262);
var inst_31298 = (inst_31296__$1 == null);
var inst_31299 = cljs.core.not.call(null,inst_31298);
var state_31342__$1 = (function (){var statearr_31380 = state_31342;
(statearr_31380[(28)] = inst_31292);

(statearr_31380[(16)] = inst_31296__$1);

return statearr_31380;
})();
if(inst_31299){
var statearr_31381_31457 = state_31342__$1;
(statearr_31381_31457[(1)] = (32));

} else {
var statearr_31382_31458 = state_31342__$1;
(statearr_31382_31458[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (44))){
var inst_31318 = (state_31342[(21)]);
var inst_31331 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31318);
var inst_31332 = cljs.core.pr_str.call(null,inst_31331);
var inst_31333 = [cljs.core.str("not required: "),cljs.core.str(inst_31332)].join('');
var inst_31334 = figwheel.client.utils.log.call(null,inst_31333);
var state_31342__$1 = state_31342;
var statearr_31383_31459 = state_31342__$1;
(statearr_31383_31459[(2)] = inst_31334);

(statearr_31383_31459[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (6))){
var inst_31237 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
var statearr_31384_31460 = state_31342__$1;
(statearr_31384_31460[(2)] = inst_31237);

(statearr_31384_31460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (28))){
var inst_31262 = (state_31342[(26)]);
var inst_31289 = (state_31342[(2)]);
var inst_31290 = cljs.core.not_empty.call(null,inst_31262);
var state_31342__$1 = (function (){var statearr_31385 = state_31342;
(statearr_31385[(29)] = inst_31289);

return statearr_31385;
})();
if(cljs.core.truth_(inst_31290)){
var statearr_31386_31461 = state_31342__$1;
(statearr_31386_31461[(1)] = (29));

} else {
var statearr_31387_31462 = state_31342__$1;
(statearr_31387_31462[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (25))){
var inst_31260 = (state_31342[(25)]);
var inst_31276 = (state_31342[(2)]);
var inst_31277 = cljs.core.not_empty.call(null,inst_31260);
var state_31342__$1 = (function (){var statearr_31388 = state_31342;
(statearr_31388[(30)] = inst_31276);

return statearr_31388;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31389_31463 = state_31342__$1;
(statearr_31389_31463[(1)] = (26));

} else {
var statearr_31390_31464 = state_31342__$1;
(statearr_31390_31464[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (34))){
var inst_31311 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
if(cljs.core.truth_(inst_31311)){
var statearr_31391_31465 = state_31342__$1;
(statearr_31391_31465[(1)] = (38));

} else {
var statearr_31392_31466 = state_31342__$1;
(statearr_31392_31466[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (17))){
var state_31342__$1 = state_31342;
var statearr_31393_31467 = state_31342__$1;
(statearr_31393_31467[(2)] = recompile_dependents);

(statearr_31393_31467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (3))){
var state_31342__$1 = state_31342;
var statearr_31394_31468 = state_31342__$1;
(statearr_31394_31468[(2)] = null);

(statearr_31394_31468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (12))){
var inst_31233 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
var statearr_31395_31469 = state_31342__$1;
(statearr_31395_31469[(2)] = inst_31233);

(statearr_31395_31469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (2))){
var inst_31195 = (state_31342[(13)]);
var inst_31202 = cljs.core.seq.call(null,inst_31195);
var inst_31203 = inst_31202;
var inst_31204 = null;
var inst_31205 = (0);
var inst_31206 = (0);
var state_31342__$1 = (function (){var statearr_31396 = state_31342;
(statearr_31396[(7)] = inst_31203);

(statearr_31396[(8)] = inst_31206);

(statearr_31396[(9)] = inst_31205);

(statearr_31396[(10)] = inst_31204);

return statearr_31396;
})();
var statearr_31397_31470 = state_31342__$1;
(statearr_31397_31470[(2)] = null);

(statearr_31397_31470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (23))){
var inst_31259 = (state_31342[(23)]);
var inst_31264 = (state_31342[(24)]);
var inst_31256 = (state_31342[(19)]);
var inst_31262 = (state_31342[(26)]);
var inst_31260 = (state_31342[(25)]);
var inst_31267 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31269 = (function (){var all_files = inst_31256;
var res_SINGLEQUOTE_ = inst_31259;
var res = inst_31260;
var files_not_loaded = inst_31262;
var dependencies_that_loaded = inst_31264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31267,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31268){
var map__31398 = p__31268;
var map__31398__$1 = ((((!((map__31398 == null)))?((((map__31398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31398):map__31398);
var request_url = cljs.core.get.call(null,map__31398__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31267,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31270 = cljs.core.reverse.call(null,inst_31264);
var inst_31271 = cljs.core.map.call(null,inst_31269,inst_31270);
var inst_31272 = cljs.core.pr_str.call(null,inst_31271);
var inst_31273 = figwheel.client.utils.log.call(null,inst_31272);
var state_31342__$1 = (function (){var statearr_31400 = state_31342;
(statearr_31400[(31)] = inst_31267);

return statearr_31400;
})();
var statearr_31401_31471 = state_31342__$1;
(statearr_31401_31471[(2)] = inst_31273);

(statearr_31401_31471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (35))){
var state_31342__$1 = state_31342;
var statearr_31402_31472 = state_31342__$1;
(statearr_31402_31472[(2)] = true);

(statearr_31402_31472[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (19))){
var inst_31246 = (state_31342[(12)]);
var inst_31252 = figwheel.client.file_reloading.expand_files.call(null,inst_31246);
var state_31342__$1 = state_31342;
var statearr_31403_31473 = state_31342__$1;
(statearr_31403_31473[(2)] = inst_31252);

(statearr_31403_31473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (11))){
var state_31342__$1 = state_31342;
var statearr_31404_31474 = state_31342__$1;
(statearr_31404_31474[(2)] = null);

(statearr_31404_31474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (9))){
var inst_31235 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
var statearr_31405_31475 = state_31342__$1;
(statearr_31405_31475[(2)] = inst_31235);

(statearr_31405_31475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (5))){
var inst_31206 = (state_31342[(8)]);
var inst_31205 = (state_31342[(9)]);
var inst_31208 = (inst_31206 < inst_31205);
var inst_31209 = inst_31208;
var state_31342__$1 = state_31342;
if(cljs.core.truth_(inst_31209)){
var statearr_31406_31476 = state_31342__$1;
(statearr_31406_31476[(1)] = (7));

} else {
var statearr_31407_31477 = state_31342__$1;
(statearr_31407_31477[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (14))){
var inst_31216 = (state_31342[(22)]);
var inst_31225 = cljs.core.first.call(null,inst_31216);
var inst_31226 = figwheel.client.file_reloading.eval_body.call(null,inst_31225,opts);
var inst_31227 = cljs.core.next.call(null,inst_31216);
var inst_31203 = inst_31227;
var inst_31204 = null;
var inst_31205 = (0);
var inst_31206 = (0);
var state_31342__$1 = (function (){var statearr_31408 = state_31342;
(statearr_31408[(7)] = inst_31203);

(statearr_31408[(8)] = inst_31206);

(statearr_31408[(32)] = inst_31226);

(statearr_31408[(9)] = inst_31205);

(statearr_31408[(10)] = inst_31204);

return statearr_31408;
})();
var statearr_31409_31478 = state_31342__$1;
(statearr_31409_31478[(2)] = null);

(statearr_31409_31478[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (45))){
var state_31342__$1 = state_31342;
var statearr_31410_31479 = state_31342__$1;
(statearr_31410_31479[(2)] = null);

(statearr_31410_31479[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (26))){
var inst_31259 = (state_31342[(23)]);
var inst_31264 = (state_31342[(24)]);
var inst_31256 = (state_31342[(19)]);
var inst_31262 = (state_31342[(26)]);
var inst_31260 = (state_31342[(25)]);
var inst_31279 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31281 = (function (){var all_files = inst_31256;
var res_SINGLEQUOTE_ = inst_31259;
var res = inst_31260;
var files_not_loaded = inst_31262;
var dependencies_that_loaded = inst_31264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31279,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31280){
var map__31411 = p__31280;
var map__31411__$1 = ((((!((map__31411 == null)))?((((map__31411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31411):map__31411);
var namespace = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31411__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31279,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31282 = cljs.core.map.call(null,inst_31281,inst_31260);
var inst_31283 = cljs.core.pr_str.call(null,inst_31282);
var inst_31284 = figwheel.client.utils.log.call(null,inst_31283);
var inst_31285 = (function (){var all_files = inst_31256;
var res_SINGLEQUOTE_ = inst_31259;
var res = inst_31260;
var files_not_loaded = inst_31262;
var dependencies_that_loaded = inst_31264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31279,inst_31281,inst_31282,inst_31283,inst_31284,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31259,inst_31264,inst_31256,inst_31262,inst_31260,inst_31279,inst_31281,inst_31282,inst_31283,inst_31284,state_val_31343,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31286 = setTimeout(inst_31285,(10));
var state_31342__$1 = (function (){var statearr_31413 = state_31342;
(statearr_31413[(33)] = inst_31279);

(statearr_31413[(34)] = inst_31284);

return statearr_31413;
})();
var statearr_31414_31480 = state_31342__$1;
(statearr_31414_31480[(2)] = inst_31286);

(statearr_31414_31480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (16))){
var state_31342__$1 = state_31342;
var statearr_31415_31481 = state_31342__$1;
(statearr_31415_31481[(2)] = reload_dependents);

(statearr_31415_31481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (38))){
var inst_31296 = (state_31342[(16)]);
var inst_31313 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31296);
var state_31342__$1 = state_31342;
var statearr_31416_31482 = state_31342__$1;
(statearr_31416_31482[(2)] = inst_31313);

(statearr_31416_31482[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (30))){
var state_31342__$1 = state_31342;
var statearr_31417_31483 = state_31342__$1;
(statearr_31417_31483[(2)] = null);

(statearr_31417_31483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (10))){
var inst_31216 = (state_31342[(22)]);
var inst_31218 = cljs.core.chunked_seq_QMARK_.call(null,inst_31216);
var state_31342__$1 = state_31342;
if(inst_31218){
var statearr_31418_31484 = state_31342__$1;
(statearr_31418_31484[(1)] = (13));

} else {
var statearr_31419_31485 = state_31342__$1;
(statearr_31419_31485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (18))){
var inst_31250 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
if(cljs.core.truth_(inst_31250)){
var statearr_31420_31486 = state_31342__$1;
(statearr_31420_31486[(1)] = (19));

} else {
var statearr_31421_31487 = state_31342__$1;
(statearr_31421_31487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (42))){
var state_31342__$1 = state_31342;
var statearr_31422_31488 = state_31342__$1;
(statearr_31422_31488[(2)] = null);

(statearr_31422_31488[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (37))){
var inst_31308 = (state_31342[(2)]);
var state_31342__$1 = state_31342;
var statearr_31423_31489 = state_31342__$1;
(statearr_31423_31489[(2)] = inst_31308);

(statearr_31423_31489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31343 === (8))){
var inst_31203 = (state_31342[(7)]);
var inst_31216 = (state_31342[(22)]);
var inst_31216__$1 = cljs.core.seq.call(null,inst_31203);
var state_31342__$1 = (function (){var statearr_31424 = state_31342;
(statearr_31424[(22)] = inst_31216__$1);

return statearr_31424;
})();
if(inst_31216__$1){
var statearr_31425_31490 = state_31342__$1;
(statearr_31425_31490[(1)] = (10));

} else {
var statearr_31426_31491 = state_31342__$1;
(statearr_31426_31491[(1)] = (11));

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
});})(c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27541__auto__,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto____0 = (function (){
var statearr_31430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31430[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto__);

(statearr_31430[(1)] = (1));

return statearr_31430;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto____1 = (function (state_31342){
while(true){
var ret_value__27543__auto__ = (function (){try{while(true){
var result__27544__auto__ = switch__27541__auto__.call(null,state_31342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27544__auto__;
}
break;
}
}catch (e31431){if((e31431 instanceof Object)){
var ex__27545__auto__ = e31431;
var statearr_31432_31492 = state_31342;
(statearr_31432_31492[(5)] = ex__27545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31493 = state_31342;
state_31342 = G__31493;
continue;
} else {
return ret_value__27543__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto__ = function(state_31342){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto____1.call(this,state_31342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27542__auto__;
})()
;})(switch__27541__auto__,c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27655__auto__ = (function (){var statearr_31433 = f__27654__auto__.call(null);
(statearr_31433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27653__auto__);

return statearr_31433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27655__auto__);
});})(c__27653__auto__,map__31188,map__31188__$1,opts,before_jsload,on_jsload,reload_dependents,map__31189,map__31189__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27653__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31496,link){
var map__31499 = p__31496;
var map__31499__$1 = ((((!((map__31499 == null)))?((((map__31499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31499):map__31499);
var file = cljs.core.get.call(null,map__31499__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31499,map__31499__$1,file){
return (function (p1__31494_SHARP_,p2__31495_SHARP_){
if(cljs.core._EQ_.call(null,p1__31494_SHARP_,p2__31495_SHARP_)){
return p1__31494_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31499,map__31499__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31505){
var map__31506 = p__31505;
var map__31506__$1 = ((((!((map__31506 == null)))?((((map__31506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31506):map__31506);
var match_length = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31501_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31501_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31508 = [];
var len__25865__auto___31511 = arguments.length;
var i__25866__auto___31512 = (0);
while(true){
if((i__25866__auto___31512 < len__25865__auto___31511)){
args31508.push((arguments[i__25866__auto___31512]));

var G__31513 = (i__25866__auto___31512 + (1));
i__25866__auto___31512 = G__31513;
continue;
} else {
}
break;
}

var G__31510 = args31508.length;
switch (G__31510) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31508.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31515_SHARP_,p2__31516_SHARP_){
return cljs.core.assoc.call(null,p1__31515_SHARP_,cljs.core.get.call(null,p2__31516_SHARP_,key),p2__31516_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31517){
var map__31520 = p__31517;
var map__31520__$1 = ((((!((map__31520 == null)))?((((map__31520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31520):map__31520);
var f_data = map__31520__$1;
var file = cljs.core.get.call(null,map__31520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31522,p__31523){
var map__31532 = p__31522;
var map__31532__$1 = ((((!((map__31532 == null)))?((((map__31532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31532):map__31532);
var opts = map__31532__$1;
var on_cssload = cljs.core.get.call(null,map__31532__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31533 = p__31523;
var map__31533__$1 = ((((!((map__31533 == null)))?((((map__31533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);
var files_msg = map__31533__$1;
var files = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31536_31540 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31537_31541 = null;
var count__31538_31542 = (0);
var i__31539_31543 = (0);
while(true){
if((i__31539_31543 < count__31538_31542)){
var f_31544 = cljs.core._nth.call(null,chunk__31537_31541,i__31539_31543);
figwheel.client.file_reloading.reload_css_file.call(null,f_31544);

var G__31545 = seq__31536_31540;
var G__31546 = chunk__31537_31541;
var G__31547 = count__31538_31542;
var G__31548 = (i__31539_31543 + (1));
seq__31536_31540 = G__31545;
chunk__31537_31541 = G__31546;
count__31538_31542 = G__31547;
i__31539_31543 = G__31548;
continue;
} else {
var temp__4657__auto___31549 = cljs.core.seq.call(null,seq__31536_31540);
if(temp__4657__auto___31549){
var seq__31536_31550__$1 = temp__4657__auto___31549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31536_31550__$1)){
var c__25601__auto___31551 = cljs.core.chunk_first.call(null,seq__31536_31550__$1);
var G__31552 = cljs.core.chunk_rest.call(null,seq__31536_31550__$1);
var G__31553 = c__25601__auto___31551;
var G__31554 = cljs.core.count.call(null,c__25601__auto___31551);
var G__31555 = (0);
seq__31536_31540 = G__31552;
chunk__31537_31541 = G__31553;
count__31538_31542 = G__31554;
i__31539_31543 = G__31555;
continue;
} else {
var f_31556 = cljs.core.first.call(null,seq__31536_31550__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31556);

var G__31557 = cljs.core.next.call(null,seq__31536_31550__$1);
var G__31558 = null;
var G__31559 = (0);
var G__31560 = (0);
seq__31536_31540 = G__31557;
chunk__31537_31541 = G__31558;
count__31538_31542 = G__31559;
i__31539_31543 = G__31560;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31532,map__31532__$1,opts,on_cssload,map__31533,map__31533__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31532,map__31532__$1,opts,on_cssload,map__31533,map__31533__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479345923389