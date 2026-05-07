(ns increment-plus-one.backend.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [increment-plus-one.backend.handler :refer [app]])
  (:gen-class))

(defn -main [& args]
  (println "API running on http://localhost:3000")
  (run-jetty app {:port 3000 :join? false }))

