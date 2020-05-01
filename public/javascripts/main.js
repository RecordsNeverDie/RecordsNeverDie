let myMap

window.onload = () => {

    const center = {
        lat: 40.419244,
        lng: -3.706610
    } 
        
        myMap = new google.maps.Map(document.getElementById('myMap'), {
            zoom: 14,
            center,
            styles: mapStyles.silver
        })
    
    getPin('/places/api')
}

let markers = []

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
            setTimeout(() => {
                new google.maps.Marker({
                    position: center,
                    animation: google.maps.Animation.DROP,
                    map: myMap,
                    draggable: false,
                    title: elm.name,
                    icon: "/images/icon_vinyl.png"
                })
            }, Math.random(0.25, 1.25) * 3000) 
        })
    })
    
    .catch(error => console.log(error))
}

