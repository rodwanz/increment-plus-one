(ns increment-plus-one.core
  (:gen-class))

(defn increment [n]
  (inc n))

(defn -main [& args]
  (println "Enter a number")
  (let [input (read-line)
        number (Integer/parseInt input)]
    (println "Result: " (increment number))))

