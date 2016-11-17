(ns testfixeddatatable.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "This text is printed from src/testfixeddatatable/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defn mytable-render []
      [:div
       [:h2 "I will be a table in future!!!"]])

(defn mytable []
      (reagent/create-class {:reagent-render mytable-render}))


(defn mainpage []
      [:div
       [:h1 "Hello World!!!"]
       [mytable]])

(defn reload []
      (reagent/render [mainpage]
                      (. js/document (getElementById "app"))))

(defn ^:export main []
      (reagent/render [mainpage]
                      (. js/document (getElementById "app"))))

