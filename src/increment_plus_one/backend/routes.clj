(ns increment-plus-one.backend.routes
  (:require [compojure.core :refer [defroutes GET POST]]
            [ring.util.response :refer [response]]
            [increment-plus-one.backend.service :as service]))

(defn app-routes [conn]
  (defroutes routes
           (GET "/api/counter" []
             (response {:value (service/get-counter conn)}))
           (POST "/api/increment" []
             (response {:value (service/increment-counter conn)})))
  routes)

