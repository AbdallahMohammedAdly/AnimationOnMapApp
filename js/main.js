let apikey = `AIzaSyDY3LXRDoSr9Hqp0XKk1XcD4SgVeh2dAVA` ; //AIzaSyDIVbAHhx0nwvlKkQ6ON7ClVyqp_kO2gGE  // AIzaSyDY3LXRDoSr9Hqp0XKk1XcD4SgVeh2dAVA  // two unrestrictions keys



let map;

const triggerElement  = document.querySelector(" li .card");

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.1194, lng: 30.7444}, // Example: Coordinates for Sydney, Australia
    zoom: 10 // Initial zoom level
  });
   const markerPosition = { lat: 28.1194, lng: 30.7444 };

  // Create the marker
  const marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    title: 'My Bouncing Marker!', // Title when you hover over the marker
    //  icon: {
    //   path: google.maps.SymbolPath.CIRCLE,
    //   scale: 8,
    //   fillColor: "red",
    //   fillOpacity: 0.8,
    //   strokeColor: "#00ff00",
    //   strokeWeight: 2,
    // }
    //  icon: {
    //   url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Use a predefined color
    //    scaledSize: new google.maps.Size(50, 50), // Optional: Resize the icon
    //     origin: new google.maps.Point(0, 0), // Optional: Starting point within the image
    //    anchor: new google.maps.Point(0, 32) // Optional: Anchor point of the marker
    // }
 //   animation: google.maps.Animation.BOUNCE // Set the animation to BOUNCE
  });
   if (triggerElement) {
    triggerElement.addEventListener('click', () => {
      // Start the bouncing animation
      marker.setAnimation(google.maps.Animation.BOUNCE);
      // Optionally, open the info window when the animation starts
      infoWindow.open(map, marker);

      // You might want to stop the animation after a while
      // setTimeout(() => {
      //   marker.setAnimation(null); // Stop the animation
      // }, 3000); // Stop after 3 seconds (adjust as needed)
    });
  } else {
    console.error("The element 'li .card' was not found in the document.");
  }
  // Information window content
  const infoWindowContent = `   <div class="card flex p-2 shadow-lg bg-white rounded-lg mb-2">
                <div class="card-left mx-1">
                  <div class="rate name flex justify-between">
                    <div class="rate">
                      <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    </div>
                    <h1 class="text-1xl font-bold">Hotel Name</h1>

                  </div>
                  <div class="tag">
                    <i>🏷️</i>
                  </div>
                  <div class="distanse">
                    <i>📍</i>
                    <span class="text-gray-500">2.5 km</span>

                  </div>
                  <div class="ratenumber flex ">
                    <div class="numberofrate">
                      <p><span>beautiful</span></p>
                      <p class="text-gray-500"><span>951</span>number of rate </p>
                    </div>
                    <div class="numberofallrate p-2 mx-1.5   bg-blue-400  ">
                      <span>9.1</span>
                    </div>
                  </div>
                  <div class="location">
                    <p class="text-gray-500">Cairo, Egypt</p>
                  </div>
                  <div>
                    <p>اضف تاريخ لتطلع ع السعر </p>
                  </div>
                </div>
                <div class="card-right">
                  <figure>
                    <img class="h-full" src="https://placehold.co/600x800" alt="">
                  </figure>
                </div>
              </div>`;

  // Create an info window
  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent
  });

  // Add a click listener to the marker to open the info window
  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}
