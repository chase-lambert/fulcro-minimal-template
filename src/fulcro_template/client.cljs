(ns fulcro-template.client
  (:require 
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [com.fulcrologic.fulcro.react.version18 :refer [with-react18]]))

(defonce app 
  (with-react18 (app/fulcro-app)))

(defsc Root [this props]
  (dom/div "TODO"))

(defn ^:export init []
  (app/mount! app Root "app")
  (js/console.log "Loaded"))

(defn ^:export refresh []
  (app/mount! app Root "app")
  (comp/refresh-dynamic-queries! app)
  (js/console.log "Hot reload"))

