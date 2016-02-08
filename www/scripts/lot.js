 var map;
    
      require(["esri/map", "esri/layers/ArcGISTiledMapServiceLayer", "dojo/domReady!"],
        function(Map, ArcGISTiledMapServiceLayer) {
		
          map = new Map("map",{logo: false, 
            sliderStyle: "large"
        });

var _baseMapHost = "http://www.onemap.sg/ArcGIS/rest/services/";
var _baseMapURL = _baseMapHost + "basemap/MapServer";
var tileHost1 = "http://t1.onemap.sg/ArcGIS/rest/services/"
var tileHost2 = "http://t2.onemap.sg/ArcGIS/rest/services/"
var _baseMapURL1;
var _baseMapURL2;
 _baseMapURL = _baseMapHost + "LOT_VIEW" + "/MapServer";
 _baseMapURL1 = tileHost1 + "LOT_VIEW" + "/MapServer";
 _baseMapURL2 = tileHost2 + "LOT_VIEW" + "/MapServer";
		
		 
          var tiled = new ArcGISTiledMapServiceLayer(_baseMapURL, { tileServers: [_baseMapURL1, _baseMapURL2] });
		 //alert(toString(tiled)); 
          map.addLayer(tiled);
        }
      );
