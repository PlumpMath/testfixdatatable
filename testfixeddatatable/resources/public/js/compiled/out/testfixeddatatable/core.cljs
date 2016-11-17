(ns testfixeddatatable.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "This text is printed from src/testfixeddatatable/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defn hello-world []
  [:h1 "Hello World!!!"])

(defn reload []
  (reagent/render [hello-world]
                  (. js/document (getElementById "app"))))

(defn ^:export main []
  (reagent/render [hello-world]
                  (. js/document (getElementById "app"))))
