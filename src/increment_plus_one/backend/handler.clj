(ns increment-plus-one.backend.handler
  (:require [increment-plus-one.backend.routes :refer [app-routes]]
            [increment-plus-one.backend.db :as db]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]))

(def conn (db/init-db))

(def app
  (-> (app-routes conn)
      (wrap-json-body {:keywords? true})
      (wrap-json-response)
      (wrap-cors :access-control-allow-origin [#"http://localhost:3001$"]
                 :access-control-allow-methods [:get :post])))

