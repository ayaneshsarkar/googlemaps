function initMap() {
  const uluru = {lat: 22.4428644, lng: 88.3808139};
  
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 16,
      center: uluru
    }
  );
  
  const marker = new google.maps.Marker({position: uluru, map: map})
}