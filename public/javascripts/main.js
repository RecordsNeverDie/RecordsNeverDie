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

