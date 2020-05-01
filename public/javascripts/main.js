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
    
    // myMap.addListener('center_changed', function () {
    //     // 3 seconds after the center of the map has changed, pan back to the
    //     // marker.
    //     window.setTimeout(function () {
    //         myMap.panTo(AQUIVAELMARKER.getPosition());
    //     }, 3000);
    // });

    // AQUIVAELMARKER.addListener('click', function () {
    //     myMap.setZoom(8);
    //     myMap.setCenter(AQUIVAELMARKER.getPosition());
    // })

    getPin('/places/api')
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
                icon: "/images/icon_vinyl.png"
            })
            
        })
    })
    
    .catch(error => console.log(error))
}

