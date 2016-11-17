// Compiled by ClojureScript 1.9.229 {}
goog.provide('testfixeddatatable.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/testfixeddatatable/core.cljs. Go ahead and edit it and see reloading in action.");
testfixeddatatable.core.hello_world = (function testfixeddatatable$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello World!!!"], null);
});
testfixeddatatable.core.reload = (function testfixeddatatable$core$reload(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testfixeddatatable.core.hello_world], null),document.getElementById("app"));
});
testfixeddatatable.core.main = (function testfixeddatatable$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testfixeddatatable.core.hello_world], null),document.getElementById("app"));
});
goog.exportSymbol('testfixeddatatable.core.main', testfixeddatatable.core.main);

//# sourceMappingURL=core.js.map?rel=1479347250254