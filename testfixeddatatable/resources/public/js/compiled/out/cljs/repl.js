// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32860){
var map__32885 = p__32860;
var map__32885__$1 = ((((!((map__32885 == null)))?((((map__32885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32885):map__32885);
var m = map__32885__$1;
var n = cljs.core.get.call(null,map__32885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32887_32909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32888_32910 = null;
var count__32889_32911 = (0);
var i__32890_32912 = (0);
while(true){
if((i__32890_32912 < count__32889_32911)){
var f_32913 = cljs.core._nth.call(null,chunk__32888_32910,i__32890_32912);
cljs.core.println.call(null,"  ",f_32913);

var G__32914 = seq__32887_32909;
var G__32915 = chunk__32888_32910;
var G__32916 = count__32889_32911;
var G__32917 = (i__32890_32912 + (1));
seq__32887_32909 = G__32914;
chunk__32888_32910 = G__32915;
count__32889_32911 = G__32916;
i__32890_32912 = G__32917;
continue;
} else {
var temp__4657__auto___32918 = cljs.core.seq.call(null,seq__32887_32909);
if(temp__4657__auto___32918){
var seq__32887_32919__$1 = temp__4657__auto___32918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32887_32919__$1)){
var c__25601__auto___32920 = cljs.core.chunk_first.call(null,seq__32887_32919__$1);
var G__32921 = cljs.core.chunk_rest.call(null,seq__32887_32919__$1);
var G__32922 = c__25601__auto___32920;
var G__32923 = cljs.core.count.call(null,c__25601__auto___32920);
var G__32924 = (0);
seq__32887_32909 = G__32921;
chunk__32888_32910 = G__32922;
count__32889_32911 = G__32923;
i__32890_32912 = G__32924;
continue;
} else {
var f_32925 = cljs.core.first.call(null,seq__32887_32919__$1);
cljs.core.println.call(null,"  ",f_32925);

var G__32926 = cljs.core.next.call(null,seq__32887_32919__$1);
var G__32927 = null;
var G__32928 = (0);
var G__32929 = (0);
seq__32887_32909 = G__32926;
chunk__32888_32910 = G__32927;
count__32889_32911 = G__32928;
i__32890_32912 = G__32929;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32930 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32930);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32930)))?cljs.core.second.call(null,arglists_32930):arglists_32930));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32891_32931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32892_32932 = null;
var count__32893_32933 = (0);
var i__32894_32934 = (0);
while(true){
if((i__32894_32934 < count__32893_32933)){
var vec__32895_32935 = cljs.core._nth.call(null,chunk__32892_32932,i__32894_32934);
var name_32936 = cljs.core.nth.call(null,vec__32895_32935,(0),null);
var map__32898_32937 = cljs.core.nth.call(null,vec__32895_32935,(1),null);
var map__32898_32938__$1 = ((((!((map__32898_32937 == null)))?((((map__32898_32937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32898_32937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32898_32937):map__32898_32937);
var doc_32939 = cljs.core.get.call(null,map__32898_32938__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32940 = cljs.core.get.call(null,map__32898_32938__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32936);

cljs.core.println.call(null," ",arglists_32940);

if(cljs.core.truth_(doc_32939)){
cljs.core.println.call(null," ",doc_32939);
} else {
}

var G__32941 = seq__32891_32931;
var G__32942 = chunk__32892_32932;
var G__32943 = count__32893_32933;
var G__32944 = (i__32894_32934 + (1));
seq__32891_32931 = G__32941;
chunk__32892_32932 = G__32942;
count__32893_32933 = G__32943;
i__32894_32934 = G__32944;
continue;
} else {
var temp__4657__auto___32945 = cljs.core.seq.call(null,seq__32891_32931);
if(temp__4657__auto___32945){
var seq__32891_32946__$1 = temp__4657__auto___32945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32891_32946__$1)){
var c__25601__auto___32947 = cljs.core.chunk_first.call(null,seq__32891_32946__$1);
var G__32948 = cljs.core.chunk_rest.call(null,seq__32891_32946__$1);
var G__32949 = c__25601__auto___32947;
var G__32950 = cljs.core.count.call(null,c__25601__auto___32947);
var G__32951 = (0);
seq__32891_32931 = G__32948;
chunk__32892_32932 = G__32949;
count__32893_32933 = G__32950;
i__32894_32934 = G__32951;
continue;
} else {
var vec__32900_32952 = cljs.core.first.call(null,seq__32891_32946__$1);
var name_32953 = cljs.core.nth.call(null,vec__32900_32952,(0),null);
var map__32903_32954 = cljs.core.nth.call(null,vec__32900_32952,(1),null);
var map__32903_32955__$1 = ((((!((map__32903_32954 == null)))?((((map__32903_32954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32903_32954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32903_32954):map__32903_32954);
var doc_32956 = cljs.core.get.call(null,map__32903_32955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32957 = cljs.core.get.call(null,map__32903_32955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32953);

cljs.core.println.call(null," ",arglists_32957);

if(cljs.core.truth_(doc_32956)){
cljs.core.println.call(null," ",doc_32956);
} else {
}

var G__32958 = cljs.core.next.call(null,seq__32891_32946__$1);
var G__32959 = null;
var G__32960 = (0);
var G__32961 = (0);
seq__32891_32931 = G__32958;
chunk__32892_32932 = G__32959;
count__32893_32933 = G__32960;
i__32894_32934 = G__32961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32905 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32906 = null;
var count__32907 = (0);
var i__32908 = (0);
while(true){
if((i__32908 < count__32907)){
var role = cljs.core._nth.call(null,chunk__32906,i__32908);
var temp__4657__auto___32962__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32962__$1)){
var spec_32963 = temp__4657__auto___32962__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32963));
} else {
}

var G__32964 = seq__32905;
var G__32965 = chunk__32906;
var G__32966 = count__32907;
var G__32967 = (i__32908 + (1));
seq__32905 = G__32964;
chunk__32906 = G__32965;
count__32907 = G__32966;
i__32908 = G__32967;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32905);
if(temp__4657__auto____$1){
var seq__32905__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32905__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__32905__$1);
var G__32968 = cljs.core.chunk_rest.call(null,seq__32905__$1);
var G__32969 = c__25601__auto__;
var G__32970 = cljs.core.count.call(null,c__25601__auto__);
var G__32971 = (0);
seq__32905 = G__32968;
chunk__32906 = G__32969;
count__32907 = G__32970;
i__32908 = G__32971;
continue;
} else {
var role = cljs.core.first.call(null,seq__32905__$1);
var temp__4657__auto___32972__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32972__$2)){
var spec_32973 = temp__4657__auto___32972__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32973));
} else {
}

var G__32974 = cljs.core.next.call(null,seq__32905__$1);
var G__32975 = null;
var G__32976 = (0);
var G__32977 = (0);
seq__32905 = G__32974;
chunk__32906 = G__32975;
count__32907 = G__32976;
i__32908 = G__32977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1479345924868