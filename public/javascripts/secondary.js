let albumMap

window.onload = () => {
    
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
            
            albumMap = new google.maps.Map(document.getElementById('albumMap'), {
                zoom: 12,
                center,
                styles: mapStyles.silver
            })

            new google.maps.Marker({
                position: center,
                map: albumMap,
                animation: google.maps.Animation.BOUNCE,
                title: seller,
                icon: "/images/icon_vinyl.png"

            })
        })
        .catch (error => console.log(error))
}

