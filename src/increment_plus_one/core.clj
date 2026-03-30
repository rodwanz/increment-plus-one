(ns increment-plus-one.core
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(defn increment [n]
  (inc n))

(defroutes app-routes
           (GET "/inc/:value" [value]
                (let [number (Integer/parseInt value)]
                  (str "Result: " (increment number))))
           (route/not-found "Route not found"))

(defn -main [& args]
  (println "Server running on http://localhost:3000")
  (run-jetty app-routes {:port 3000 :join? false }))

