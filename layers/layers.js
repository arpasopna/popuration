var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Population_2 = new ol.format.GeoJSON();
var features_Population_2 = format_Population_2.readFeatures(json_Population_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population_2.addFeatures(features_Population_2);
var lyr_Population_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Population_2, 
                style: style_Population_2,
                interactive: true,
    title: 'Population<br />\
    <img src="styles/legend/Population_2_0.png" /> 1 - 165<br />\
    <img src="styles/legend/Population_2_1.png" /> 165 - 327<br />\
    <img src="styles/legend/Population_2_2.png" /> 327 - 465<br />\
    <img src="styles/legend/Population_2_3.png" /> 465 - 2553<br />\
    <img src="styles/legend/Population_2_4.png" /> 2553 - 6094<br />'
        });
var format_th_village_3 = new ol.format.GeoJSON();
var features_th_village_3 = format_th_village_3.readFeatures(json_th_village_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_th_village_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_th_village_3.addFeatures(features_th_village_3);cluster_th_village_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_th_village_3
});
var lyr_th_village_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_th_village_3, 
                style: style_th_village_3,
                interactive: true,
                title: '<img src="styles/legend/th_village_3.png" /> th_village'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Population_2.setVisible(true);lyr_th_village_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Population_2,lyr_th_village_3];
lyr_Population_2.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_th_village_3.set('fieldAliases', {'îñ<<¬': 'îñ<<¬', 'îñ<<¬ñà': 'îñ<<¬ñà', '+ (á': '+ (á', ' (&¬ñà': ' (&¬ñà', 'è (¬+ (á': 'è (¬+ (á', ' (&¬+ (á': ' (&¬+ (á', '&êî¬+ (á': '&êî¬+ (á', });
lyr_Population_2.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_th_village_3.set('fieldImages', {'îñ<<¬': 'Range', 'îñ<<¬ñà': 'Range', '+ (á': 'TextEdit', ' (&¬ñà': 'Range', 'è (¬+ (á': 'TextEdit', ' (&¬+ (á': 'TextEdit', '&êî¬+ (á': 'TextEdit', });
lyr_Population_2.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'header label', 'WB_A3': 'header label', });
lyr_th_village_3.set('fieldLabels', {'îñ<<¬': 'no label', 'îñ<<¬ñà': 'no label', '+ (á': 'no label', ' (&¬ñà': 'no label', 'è (¬+ (á': 'no label', ' (&¬+ (á': 'no label', '&êî¬+ (á': 'no label', });
lyr_th_village_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});