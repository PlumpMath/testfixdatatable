(ns testfixeddatatable.core
  (:require [reagent.core :as reagent]
            [cljsjs.fixed-data-table]))


(enable-console-print!)

(println "This text is printed from src/testfixeddatatable/core.cljs. Go ahead and edit it and see reloading in action.")

(def Table (reagent/adapt-react-class js/FixedDataTable.Table))
(def Column (reagent/adapt-react-class js/FixedDataTable.Column))
(def Cell (reagent/adapt-react-class js/FixedDataTable.Cell))

(defn gen-table
      "Generate `size` rows vector of 4 columns vectors to mock up the table."
      [size]
      (mapv (fn [i]
                {"number" i
                 "amount" (rand-int 1000)
                 "coeff" (rand)
                 "store" (rand-nth ["Here" "There" "Nowhere" "Somewhere"])})
            (range 1 (inc size))))

(def table (gen-table 10))

(defn make-cell [args]
      (let [{:strs [columnKey rowIndex]} (js->clj args)]
           (reagent/as-element [Cell (get-in table [rowIndex columnKey])])))

(defn mytable-reandera []
      [:div
       [Table {:width        600
               :height       400
               :rowHeight    50
               :rowsCount    (count table)
               :headerHeight 50}
        [Column {:header "Number" :cell make-cell :columnKey "number" :width 100}]
        [Column {:header "Amount" :cell make-cell :columnKey "amount" :width 100}]
        [Column {:header "Coeff" :cell make-cell :columnKey "coeff" :width 100}]
        [Column {:header "Store" :cell make-cell :columnKey "store" :width 100}]]])

(defn mytable-render []
      [:div
       [:h2 "I will be a table in future!!!"]])

(defn mytable []
      (reagent/create-class {:reagent-render mytable-reandera}))


(defn mainpage []
      [:div
       [mytable]])

(defn reload []
      (reagent/render [mainpage]
                      (. js/document (getElementById "app"))))

(defn ^:export main []
      (reagent/render [mainpage]
                      (. js/document (getElementById "app"))))

