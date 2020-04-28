let myMap
window.onload = () => {

    const center = {
        lat: 40.419244,
        lng: -3.706610
    } 

    if (document.querySelector('#myMap')) {
        
        myMap = new google.maps.Map(document.getElementById('myMap'), {
            zoom: 15,
            center,
            styles: mapStyles.silver
        })
    
         getPin('/places/api')
    }

    // if (document.querySelector('#myMapProducts')) {

    //     myMap = new google.maps.Map(document.getElementById('myMap'), {
    //         zoom: 15,
    //         center,
    //         styles: mapStyles.retro
    //     })

    //     getPin('/places/api')
    // }
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
                    map: myMap,
                    title: elm.name
                })
            })
        })
        .catch(error => console.log(error))
}

//products
// function getPin(apiUrl) {
//     axios
//         .get(apiUrl)
//         .then(productsFromApi => {
//             const products = productsFromApi.data
//             products.forEach(elm => {
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