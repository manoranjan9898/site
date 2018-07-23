var myCenter = new google
    .maps
    .LatLng(20.275745, 85.817205);
function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }, {
                        "gamma": "1.00"
                    }
                ]
            }, {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#ba5858"
                    }
                ]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#e57878"
                    }
                ]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }, {
                        "lightness": "65"
                    }, {
                        "saturation": "-100"
                    }, {
                        "hue": "#ff0000"
                    }
                ]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }, {
                        "saturation": "-100"
                    }, {
                        "lightness": "80"
                    }
                ]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "poi.attraction",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }, {
                        "color": "#dddddd"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road.highway.controlled_access",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }, {
                        "color": "#dddddd"
                    }
                ]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }, {
                        "color": "#eeeeee"
                    }
                ]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ba5858"
                    }, {
                        "saturation": "-100"
                    }
                ]
            }, {
                "featureType": "transit.station",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ba5858"
                    }, {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "hue": "#ff0036"
                    }
                ]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }, {
                        "color": "#dddddd"
                    }
                ]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ba5858"
                    }
                ]
            }
        ]
    };
    var map = new google
        .maps
        .Map(document.getElementById("gmap"), mapProp);

    var marker = new google
        .maps
        .Marker({position: myCenter});
    marker.setMap(map);
}
google
    .maps
    .event
    .addDomListener(window, 'load', initialize);