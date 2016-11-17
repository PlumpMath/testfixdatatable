(ns testfixeddatatable.core
  (:require [reagent.core :as reagent]
            [cljsjs.fixed-data-table]
            [cljsjs.handsontable]))


(enable-console-print!)

(println "This text is printed from src/testfixeddatatable/core.cljs. Go ahead and edit it and see reloading in action.")

(def app-state (reagent/atom {:sort-val :first-name :ascending true}))

(def init-tableconfig {
                       :data        [
                                     ["" "Kia" "Nissan" "Toyota" "Honda"]
                                     ["2008" 0 0 0 0]
                                     ["2009" 0 0 0 0]
                                     ["2010" 0 0 0 0]]
                       :rowHeaders  false
                       :colHeaders  false
                       :contextMenu false})



(defn sampleTable-render []
  [:div {:style {:min-width "310px" :max-width "800px" :margin "0 auto"}}])

(defn sampleTable-did-mount [this]
  (js/Handsontable (reagent/dom-node this) (clj->js init-tableconfig)))

(defn sampleTable []
  (reagent/create-class {:reagent-render      sampleTable-render
                         :component-did-mount sampleTable-did-mount}))

(def table-contents
  [{:id 1 :first-name "Bram"    :last-name "Moolenaar"  :known-for "Vim"}
   {:id 2 :first-name "Richard" :last-name "Stallman"   :known-for "GNU"}
   {:id 3 :first-name "Dennis"  :last-name "Ritchie"    :known-for "C"}
   {:id 4 :first-name "Rich"    :last-name "Hickey"     :known-for "Clojure"}
   {:id 5 :first-name "Guido"   :last-name "Van Rossum" :known-for "Python"}
   {:id 6 :first-name "Linus"   :last-name "Torvalds"   :known-for "Linux"}
   {:id 7 :first-name "Yehuda"  :last-name "Katz"       :known-for "Ember"}])

(defn update-sort-value [new-val]
  (if (= new-val (:sort-val @app-state))
    (swap! app-state update-in [:ascending] not)
    (swap! app-state assoc :ascending true))
  (swap! app-state assoc :sort-val new-val))

(defn sorted-contents []
  (let [sorted-contents (sort-by (:sort-val @app-state) table-contents)]
    (if (:ascending @app-state)
      sorted-contents
      (rseq sorted-contents))))

(defn sort_table []
  [:div {:style {:margin "auto"
                 :padding-top "30px"
                 :width "600px"}}
    [:table
     [:thead
      [:tr
       [:th {:width "200" :on-click #(update-sort-value :first-name)} "First Name"]
       [:th {:width "200" :on-click #(update-sort-value :last-name) } "Last Name"]
       [:th {:width "200" :on-click #(update-sort-value :known-for) } "Known For"]]]
     [:tbody
      (for [person (sorted-contents)]
        ^{:key (:id person)}
        [:tr [:td (:first-name person)]
         [:td (:last-name person)]
         [:td (:known-for person)]])]]])

(defn mytable-render []
  [:div {:style {:min-width "310px" :max-width "800px" :margin "0 auto"}}])

(defn mytable []
      (reagent/create-class {:reagent-render mytable-render}))

(defn myDataTable-render []
  [:table.table.table-striped.table-bordered
      {:cell-spacing "0" :width "100%"}

      [:thead>tr
       [:th "Name"]
       [:th "Age"]]

      [:tbody
       [:tr
        [:td "Matthew"]
        [:td "26"]]

       [:tr
        [:td "Anna"]
        [:td "24"]]

       [:tr
        [:td "Michelle"]
        [:td "42"]]

       [:tr
        [:td "Frank"]
        [:td "46"]]]])

(defn myDataTable-did-mount [this]
  (.DataTable (js/$ (reagent/dom-node this))))


(defn myDataTable []
  (reagent/create-class {:reagent-render myDataTable-render
                         :component-did-mount myDataTable-did-mount}))

(defn hellotag []
  [:div "Hello World"])

(defn mainpage []
      [:div
       [hellotag]
       [sampleTable]
       [sort_table]
       [myDataTable]])


(defn reload []
      (reagent/render [mainpage]
                      (. js/document (getElementById "app"))))

(defn ^:export main []
      (reagent/render [mainpage]
                      (. js/document (getElementById "app"))))

