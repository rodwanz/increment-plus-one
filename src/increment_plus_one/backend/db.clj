(ns increment-plus-one.backend.db
  (:require [datomic.api :as d]))

(def db-uri "datomic:dev://localhost:4334/database-add")


(def schema
  [{:db/ident       :counter/value
    :db/valueType   :db.type/long
    :db/cardinality :db.cardinality/one
    :db/doc         "Current value of the counter"}
   {:db/ident       :counter/id
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}])

(defn ensure-schema [conn]
  (let [db (d/db conn)]
    (when-not
      (d/q '[:find ?e . :where
            [?e :db/ident :counter/value]]
           db)
      @(d/transact conn schema))))

(defn ensure-counter [conn]
  (let [db (d/db conn)]
    (when-not
      (d/q '[:find ?e . :where
            [?e :counter/id "global-counter"]]
           db)
      @(d/transact conn
                   [{:counter/id "global-counter"
                     :counter/value 0}]))))

(defn init-db []
  (d/create-database db-uri)
  (let [conn (d/connect db-uri)]
    (ensure-schema conn)
    (ensure-counter conn)
    conn))
