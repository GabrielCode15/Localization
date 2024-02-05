function initMap(latitude, longitude) {

    if(obterCoordenadas){
        const { Map } =  google.maps.importLibrary("maps");
    
        let localizacao = {lat: latitude, lng: longitude};
    
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: localizacao,
        })
    
    
        const marcador = new google.maps.Marker({
            position: localizacao,
            map: map,
        })
    }
    }
    
    
    function obterCoordenadas() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    
        initMap(latitude, longitude)
    
        // Agora você pode usar as coordenadas conforme necessário
      },
      (error) => {
        console.error(`Erro ao obter a localização: ${error.message}`);
      }
    );
    }
    
    // Chame a função para iniciar o processo
    obterCoordenadas();
    