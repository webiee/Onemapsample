$( document ).ready(function() {
        alert('hello');
require([

        "esri/map",
        "esri/dijit/Search",
        "dojo/domReady!"

      ], function (Map, Search) {
         var map = new Map("map", {
            basemap: "streets",
            center: [-120.435, 46.159], // lon, lat
            zoom: 7
         });

         var search = new Search({
            map: map
         }, "search");
         search.startup();

      });
});
