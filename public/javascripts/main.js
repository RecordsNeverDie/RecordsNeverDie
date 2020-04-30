let myMap

window.onload = () => {

    const center = {
        lat: 40.419244,
        lng: -3.706610
    } 
        
        myMap = new google.maps.Map(document.getElementById('myMap'), {
            zoom: 13,
            center,
            styles: mapStyles.silver
        })
    getPin('/places/api')
    // marker.addListener('click', toggleBounce);
}

function getPin(apiUrl) {
    axios
        .get(apiUrl)
        .then(placesFromApi => {
            const places = placesFromApi.data
            places.forEach(elm => {
                let center = {
                    lat: elm.location.coordinates[0],
                    lng: elm.location.coordinates[1]
                }
                new google.maps.Marker({
                    position: center,
                    animation: google.maps.Animation.DROP,
                    map: myMap,
                    title: elm.name,
                   // icon: "https://files.slack.com/files-pri/T0108LT3D6Z-F013J41LQ4Q/download/discos-compactos.svg"
                })
                
            })
        })
        
        .catch(error => console.log(error))
}

// function drop() {
//     for (var i = 0; i < markerArray.length; i++) {
//         setTimeout(function () {
//             addMarkerMethod();
//         }, i * 200);
//     }
// }
// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }