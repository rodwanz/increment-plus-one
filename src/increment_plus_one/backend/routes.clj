(ns increment-plus-one.backend.routes
  (:require [compojure.core :refer [routes GET POST]]
            [compojure.route :as route]
            [ring.util.response :refer [response]]
            [increment-plus-one.backend.service :as service]))

(defn app-routes [conn]
  (routes
           (GET "/api/counter" []
             (response {:value (service/get-counter conn)}))
           (POST "/api/increment" []
             (response {:value (service/increment-counter conn)}))
           (route/not-found
             (-> (response {:error "Route not found"})
              (status 404)))))

