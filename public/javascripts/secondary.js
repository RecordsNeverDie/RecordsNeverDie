let albumMap

window.onload = () => {

    const center = {
        lat: 40.419250,
        lng: -3.706615
    }

        albumMap = new google.maps.Map(document.getElementById('albumMap'), {
            zoom: 14,
            center,
            styles: mapStyles.retro
        })
    
    let albumId = document.querySelector("#productId").value
    getAlbumPin(`/shop/details/${albumId}/api`)
    
}

function getAlbumPin(apiUrl) {
    axios
        .get(apiUrl)
        .then(productFromApi => {
            const album = productFromApi.data
            let center = {
                lat: album.location.coordinates[0],
                lng: album.location.coordinates[1]
            }

            let seller = album.title + ' by ' + album.artist

            new google.maps.Marker({
                position: center,
                map: albumMap,
                title: seller
            })
        })
        .catch (error => console.log(error))
}

