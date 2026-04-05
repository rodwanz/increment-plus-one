(ns increment-plus-one.core
  (:require [compojure.core :refer [defroutes GET]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :refer [response]])
  (:gen-class))

(defn increment [n]
  (inc n))

(defroutes app-routes
           (GET "/inc/:value" [value]
           (response {:original-value value
                      :result (increment (Integer/parseInt value))})))

(def app
  (-> app-routes
      (wrap-json-response)
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get])))

(defn -main [& args]
  (println "API running on http://localhost:3000")
  (run-jetty app {:port 3000 :join? false }))

