var map;

function initMap() {
  const loc = {
    lat: -34.397,
    lng: 150.644
  };

  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });

  const marker = new google.maps.Map({
    position: loc,
    map: map
  });
}


$('#navbar a, .btn').on('click', function (event) {
  if (this.hash != '') {
    event.preventDefault();
    const hash = this.hash;
    $('html,body').animate({
        scrollTop: $(hash).offset().top - 100
      },
      900
    );
  }
});