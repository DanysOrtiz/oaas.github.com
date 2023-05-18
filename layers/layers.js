var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Resguardo_Indgena_Legalizado_1 = new ol.format.GeoJSON();
var features_Resguardo_Indgena_Legalizado_1 = format_Resguardo_Indgena_Legalizado_1.readFeatures(json_Resguardo_Indgena_Legalizado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resguardo_Indgena_Legalizado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resguardo_Indgena_Legalizado_1.addFeatures(features_Resguardo_Indgena_Legalizado_1);
var lyr_Resguardo_Indgena_Legalizado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Resguardo_Indgena_Legalizado_1, 
                style: style_Resguardo_Indgena_Legalizado_1,
                interactive: true,
                title: '<img src="styles/legend/Resguardo_Indgena_Legalizado_1.png" /> Resguardo_IndÃ­gena_Legalizado'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Resguardo_Indgena_Legalizado_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Resguardo_Indgena_Legalizado_1];
lyr_Resguardo_Indgena_Legalizado_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_RESGUAR': 'ID_RESGUAR', 'NOMBRE_RES': 'NOMBRE_RES', 'CODIGO_TER': 'CODIGO_TER', 'CEDULA_CAT': 'CEDULA_CAT', 'MATRICULA_': 'MATRICULA_', 'TIPO_ACTO_': 'TIPO_ACTO_', 'NUMERO_ACT': 'NUMERO_ACT', 'FECHA_ACTO': 'FECHA_ACTO', 'AREA_ACTO_': 'AREA_ACTO_', 'NUMERO_PLA': 'NUMERO_PLA', 'OBSERVACIO': 'OBSERVACIO', 'OBS_RES': 'OBS_RES', 'OBS_PLANO': 'OBS_PLANO', 'PUEBLO': 'PUEBLO', 'CODIGO_PUE': 'CODIGO_PUE', 'Nombre_RI_': 'Nombre_RI_', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'HAS': 'HAS', });
lyr_Resguardo_Indgena_Legalizado_1.set('fieldImages', {'OBJECTID': '', 'ID_RESGUAR': '', 'NOMBRE_RES': '', 'CODIGO_TER': '', 'CEDULA_CAT': '', 'MATRICULA_': '', 'TIPO_ACTO_': '', 'NUMERO_ACT': '', 'FECHA_ACTO': '', 'AREA_ACTO_': '', 'NUMERO_PLA': '', 'OBSERVACIO': '', 'OBS_RES': '', 'OBS_PLANO': '', 'PUEBLO': '', 'CODIGO_PUE': '', 'Nombre_RI_': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'HAS': '', });
lyr_Resguardo_Indgena_Legalizado_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID_RESGUAR': 'no label', 'NOMBRE_RES': 'no label', 'CODIGO_TER': 'no label', 'CEDULA_CAT': 'no label', 'MATRICULA_': 'no label', 'TIPO_ACTO_': 'no label', 'NUMERO_ACT': 'no label', 'FECHA_ACTO': 'no label', 'AREA_ACTO_': 'no label', 'NUMERO_PLA': 'no label', 'OBSERVACIO': 'no label', 'OBS_RES': 'no label', 'OBS_PLANO': 'no label', 'PUEBLO': 'no label', 'CODIGO_PUE': 'no label', 'Nombre_RI_': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'HAS': 'no label', });
lyr_Resguardo_Indgena_Legalizado_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});