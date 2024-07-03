const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM({
        url: "https://api.maptiler.com/maps/basic-v2/tiles.json?key=JaUWgNfqMrSktMaFobxj",
        tileSize: 512,
      }),
    }),
  ],
  target: "map",
  view: new ol.View({
    center: ol.proj.fromLonLat([20.635001, 78.877517]),
    zoom: 2,
  }),
});

const marker = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([20.635001, 78.877517])
        )
      })
    ],
  }),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      src: "marker.png",
    })
  })
})