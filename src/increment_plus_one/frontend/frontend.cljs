(ns increment-plus-one.frontend.frontend
  (:require [reagent.core  :as r]
            [reagent.dom.client :as rdom]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce number (r/atom 0))
(defonce root (atom nil))

(defn call-api-increment []
      (println "Clicked")
      (println "Value:" @number)

      (let [n (or @number 0)]
           (go (let [response (<! (http/post (str "http://localhost:3000/api/increment")
                                            {:with-credentials? false}))]
                    (println response)
                    (when (= 200 (:status response))
                          (reset! number (:result (:body response))))))))

(defn home-page []
      [:div {:style {:text-align "center" :margin-top "50px"}}
       [:h1 "Increment"]
       [:p "Current value: " [:strong @number]]
       [:button {:on-click call-api-increment
                 :style {:padding "10px 20px" :cursor "pointer"}}
        "Can increase"]])

(defn mount-root []
      (when-not @root
                (reset! root
                        (rdom/create-root
                          (.getElementById js/document "app"))))
      (rdom/render @root [home-page]))

(defn init []
      (mount-root))

(init)
