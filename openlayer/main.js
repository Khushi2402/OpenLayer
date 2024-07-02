import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Select from "ol/interaction/Select.js";

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

document.getElementById('zoom-out').onclick = function() {
  const view = map.getView();      //gets a reference to map view
  const zoom = view.getZoom();     //gets the current zoom level
  view.setZoom(zoom - 1);          //decreases zoom level by 1
};

document.getElementById('zoom-in').onclick = function() {
  const view= map.getView();      //gets a reference to map view
  const zoom = view.getZoom();    //gets the current zoom level
  view.setZoom(zoom+1);           //increases zoom level by 1
};