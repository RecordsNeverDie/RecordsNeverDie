initMap = () => {

    let mapOptions = {
        center: {
            lat: 40.416915,
            lng: -3.702870
        },
        zoom: 15,
        styles: mapStyles.retro
    }

    const myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions)


    let markerOptions = {
        position: {
            lat: 40.416930,
            lng: -3.702807
        },
        map: myMap,
        title: "PRUEBA"
    }

    new google.maps.Marker(markerOptions)

    const markers = []
    let center = {
        lat: undefined,
        lng: undefined,
    }

    // getPin()
}


// function getPin() {
//     axios
//         .get('/places-index')
//         .then(placesFromApi => {
//             const places = placesFromApi.data
//             places.forEach(elm => {
//                 let center = {
//                     lat: elm.location.coordinates[0],
//                     lng: elm.location.coordinates[1]
//                 }
//                 new google.maps.Marker({
//                     position: center,
//                     map: myMap,
//                     title: elm.name
//                 })
//             })
//         })
//         .catch(error => console.log(error))
// }