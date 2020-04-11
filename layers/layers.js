var wms_layers = [];

var lyr_PROVCenso2010_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "Piloto01:PROVCenso2010",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "PROVCenso2010",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PROVCenso2010_0, 1]);
var lyr_Rios2_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "Piloto01:Rios2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Rios2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Rios2_1, 1]);

lyr_PROVCenso2010_0.setVisible(true);lyr_Rios2_1.setVisible(true);
var layersList = [lyr_PROVCenso2010_0,lyr_Rios2_1];
