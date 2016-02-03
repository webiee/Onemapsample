var newapp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        mapInit();
    }
};
var mapInit = function(){
	console.log('Cordova device ready event: ' + 'deviceready');

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
    

};
alert('hello');
newapp.initialize();
