$(document).ready(function(){
	 var markers = [
            {
               "title": 'DEVELOP',
               "lat": '40.909073',
               "lng": '-74.033757'
            } 
    ];

   	
// Set style
   var styles = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 } // <-- THIS
      ]
    }
];

// call style map
   	var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

   	
   	// define map options
	 var mapOptions = {
						center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
						zoom: 15,
						scrollwheel: false

		           };

          var map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
 


 var pinc = "/App/Pages/assets/svg/map-pin.svg";
         
        var i = 0;
  // Set interval
        var interval = setInterval(function () {
        	
            var data = markers[i]
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
          // define markar option
            var marker = new google.maps.Marker({
                position: myLatlng,
                icon:pinc,
                map: map,
                title: data.title,
                animation: google.maps.Animation.DROP
            });
         
         // set style
             map.mapTypes.set('map_style', styledMap);
             map.setMapTypeId('map_style');
        // generate markar and set markar
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                   
                     map.panTo(myLatlng);
                });
            })(marker, data);
           
            i++;
            if (i == markers.length) {
                clearInterval(interval);
            }
        }, 200);
})
