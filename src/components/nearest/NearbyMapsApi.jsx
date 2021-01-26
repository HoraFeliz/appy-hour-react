import React from "react";
import NearbyList from "./NearbyList";
import NearbyMap from "./NearbyMap";

const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

export default function NearbyMapsApi(params) {

  function renderMap() {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`
    );
    window.initMap = initMap;
  };

  renderMap();

  let pos;
  let map;
  let bounds;
  let infoWindow;
  let currentInfoWindow;
  let service;
  let infoPane;
  function initMap() {
    // Initialize variables
    bounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;
    /* TODO: Step 4A3: Add a generic sidebar */
    infoPane = document.getElementById('panel');



    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 15
        });

        bounds.extend(pos);

        new window.google.maps.Marker({
          position: pos,
          map: map,
          title: "Estás Aquí!",
          icon: {
            url:
              "../img/marker-user.svg",
            anchor: new window.google.maps.Point(20, 20),
            // scaledSize: new window.google.maps.Size(20, 20),
          },
        });
        map.setCenter(pos);

        // Call Places Nearby Search on user's location
        getNearbyPlaces(pos);
      }, () => {
        // Browser supports geolocation, but user has denied permission
        handleLocationError(true, infoWindow);
      });
    } else {
      // Browser doesn't support geolocation
      handleLocationError(false, infoWindow);
    }
  }

  // Handle a geolocation error
  function handleLocationError(browserHasGeolocation, infoWindow) {
    // Set default location to Sydney, Australia
    pos = { lat: -33.856, lng: 151.215 };
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 15
    });

    // Display an InfoWindow at the map center
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Geolocation permissions denied. Using default location.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
    currentInfoWindow = infoWindow;

    // Call Places Nearby Search on the default location
    getNearbyPlaces(pos);
  }

  // Perform a Places Nearby Search Request
  function getNearbyPlaces(position) {
    let request = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: ['bar']
    };
    let request2 = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      keyword: ['gym']
    };
    let request3 = {
      location: position,
      rankBy: google.maps.places.RankBy.DISTANCE,
      types: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
    // service.nearbySearch(request3, nearbyCallback);
  }

  // Handle the results (up to 20) of the Nearby Search
  function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
    }
  }

  // Set markers at the location of each place result
  function createMarkers(places) {
    places.forEach(place => {
      let marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name,
        icon: {
          url:
            "../img/marker-add.svg",
          anchor: new window.google.maps.Point(20, 20),
          // scaledSize: new window.google.maps.Size(20, 20),
        },
      });

      /* TODO: Step 4B: Add click listeners to the markers */
      // Add click listener to each marker
      google.maps.event.addListener(marker, 'click', () => {
        let request = {
          placeId: place.place_id,
          fields: ['name', 'formatted_address', 'geometry', 'rating',
            'website', 'photos']
        };

        /* Only fetch the details of a place when the user clicks on a marker.
         * If we fetch the details for all place results as soon as we get
         * the search response, we will hit API rate limits. */
        service.getDetails(request, (placeResult, status) => {
          showDetails(placeResult, marker, status)
        });
      });

      // Adjust the map bounds to include the location of this marker
      bounds.extend(place.geometry.location);
    });
    /* Once all the markers have been placed, adjust the bounds of the map to
     * show all the markers within the visible area. */
    map.fitBounds(bounds);
  }

  /* TODO: Step 4C: Show place details in an info window */
  // Builds an InfoWindow to display details above the marker
  function showDetails(placeResult, marker, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      let placeInfowindow = new google.maps.InfoWindow({ maxWidth: 300 });
      let rating = "None";
      let contentHTML = `
        <h2 style="text-align: left;">${placeResult.name}</h2>
        <ul style="text-align: left; list-style: none; padding-left: 0px">
          <li>Adress: ${placeResult.formatted_address}</li>
          <li>Rating: ${placeResult.rating}</li>
        </ul>
        <button class="btn appy--primary-bg appy--white-color mb-3" >Add</button>
      `;

      console.log(placeResult);
      if (placeResult.rating) rating = placeResult.rating;
      placeInfowindow.setContent(contentHTML);
      placeInfowindow.open(marker.map, marker);
      currentInfoWindow.close();
      currentInfoWindow = placeInfowindow;
      // showPanel(placeResult);
    } else {
      console.log('showDetails failed: ' + status);
    }
  }

  /* TODO: Step 4D: Load place details in a sidebar */
  // Displays place details in a sidebar
  function showPanel(placeResult) {
    // If infoPane is already open, close it
    if (infoPane.classList.contains("open")) {
      infoPane.classList.remove("open");
    }

    // Clear the previous details
    while (infoPane.lastChild) {
      infoPane.removeChild(infoPane.lastChild);
    }

    /* TODO: Step 4E: Display a Place Photo with the Place Details */
    // Add the primary photo, if there is one
    if (placeResult.photos) {
      let firstPhoto = placeResult.photos[0];
      let photo = document.createElement('img');
      photo.classList.add('hero');
      photo.src = firstPhoto.getUrl();
      infoPane.appendChild(photo);
    }

    // Add place details with text formatting
    let name = document.createElement('h1');
    name.classList.add('place');
    name.textContent = placeResult.name;
    infoPane.appendChild(name);
    if (placeResult.rating) {
      let rating = document.createElement('p');
      rating.classList.add('details');
      rating.textContent = `Rating: ${placeResult.rating} \u272e`;
      infoPane.appendChild(rating);
    }
    let address = document.createElement('p');
    address.classList.add('details');
    address.textContent = placeResult.formatted_address;
    infoPane.appendChild(address);
    if (placeResult.website) {
      let websitePara = document.createElement('p');
      let websiteLink = document.createElement('a');
      let websiteUrl = document.createTextNode(placeResult.website);
      websiteLink.appendChild(websiteUrl);
      websiteLink.title = placeResult.website;
      websiteLink.href = placeResult.website;
      websitePara.appendChild(websiteLink);
      infoPane.appendChild(websitePara);
    }

    // Open the infoPane
    infoPane.classList.add("open");
  }

  function loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }



};

