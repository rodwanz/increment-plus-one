(ns increment-plus-one.backend.service
  (:require [datomic.api :as d]))

(defn get-counter [conn]
  (or
    (d/q '[:find ?v . :where
          [?e :counter/id "global-counter"]
          [?e :counter/value ?v]]
         (d/db conn))
    0))

(defn increment-counter [conn]
    (let [curr (get-counter conn)
         next (inc curr)]
       (try
         @(d/transact conn
                     [[:db.fn/cas
                       [:counter/id "global-counter"]
                       :counter/value
                       curr
                       next]])
         next
         (catch Exception e
           (println "CAS failed:" (.getMessage e))
           curr))))

