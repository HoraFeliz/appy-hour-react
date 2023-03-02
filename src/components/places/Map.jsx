import React, { useEffect, useState } from 'react';
import NearbyMap from '../nearest/NearbyMap';
import './Map.scss';

export default function Map(props) {
	const { location, setLocation, placesAdd, placeDetailSave, savePlaceFunction, setPlaceDetail, setPlaceDetailSee } = props;
	const [ firstLocation, setFirstLocation ] = useState(false);

	let currentInfoWindow;
	let service;
	let bounds;
	let infoWindow;
	let map;
	let positionPoint = [];

	window.placesAdd = placesAdd;
	useEffect(
		() => {
			window.initMap = initMap;
		},
		[ placesAdd ]
	);

	useEffect(
		() => {
			if (location) {
				changeLocation();
			}
		},
		[ firstLocation ]
	);

	const changeLocation = () => {
		console.log('changeLocation');
		bounds = new window.google.maps.LatLngBounds();
		infoWindow = new window.google.maps.InfoWindow();
		currentInfoWindow = infoWindow;

		map = new window.google.maps.Map(document.getElementById('map'), {
			center: location,
			zoom: 15
		});

		bounds.extend(location);
		getNearbyPlacesBar(location, placesAdd);
		console.log('estos son los places', placesAdd);

		placesAdd.forEach((place) => {
			new window.google.maps.Marker({
				position: place.geometry.location,
				map: map,
				title: place.name,
				icon: {
					url: `/img/marker-${placesAdd.length + 1}.svg`,
					anchor: new window.google.maps.Point(20, 20)
					// scaledSize: new window.google.maps.Size(20, 20),
				}
			});
		});
	};

	const initMap = () => {
		// Initialize variables
		bounds = new window.google.maps.LatLngBounds();
		map = new window.google.maps.Map(document.getElementById('map'), {
			center: location,
			zoom: 15
		});

		infoWindow = new window.google.maps.InfoWindow();
		currentInfoWindow = infoWindow;

		// Try HTML5 geolocation
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(
				(position) => {
					//const win
					const hasPlaces = !!(window.placesAdd && window.placesAdd.length);
					const pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};

					getNearbyPlacesBar(pos, window.placesAdd);

					if (!hasPlaces) {
						map = new window.google.maps.Map(document.getElementById('map'), {
							center: pos,
							zoom: 15
						});

						bounds.extend(pos);
					}

					new window.google.maps.Marker({
						position: pos,
						map: map,
						title: 'Estás Aquí!',
						icon: {
							url: '/img/marker-user.svg',
							anchor: new window.google.maps.Point(20, 20)
							// scaledSize: new window.google.maps.Size(20, 20),
						}
					});

					setFirstLocation(true);
					setLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude
					});

					// Call Places Nearby Search on user's location

					// getNearbyPlacesRest(location);
				},
				(e) => {
					// Browser supports geolocation, but user has denied permission

					const pos = {
						lat: 40.416775,
						lng: -3.703790
					}

					map = new window.google.maps.Map(document.getElementById('map'), {
						center: pos,
						zoom: 25
					});

					bounds.extend(pos);
				}
			);
		} else {
			// Browser doesn't support geolocation
			console.log('Loading.map..');
			handleLocationError(false, infoWindow);
		}
	};

	function handleLocationError(browserHasGeolocation, infoWindow) {
		// Display an InfoWindow at the map center
		infoWindow.setPosition(location);
		infoWindow.setContent(
			browserHasGeolocation
				? 'Geolocation permissions denied. Using default location.'
				: "Error: Your browser doesn't support geolocation."
		);
		infoWindow.open(map);
		currentInfoWindow = infoWindow;

		// Call Places Nearby Search on the default location
		getNearbyPlacesBar(location);
		// getNearbyPlacesRest(location);
	}

	function getNearbyPlacesBar(position, placeadd = placesAdd) {
		console.log('placeADD', placeadd);

		if (placeadd.length) {
			position = {
				lat: placeadd[0].geometry.location.lat,
				lng: placeadd[0].geometry.location.lng
			};
		}

		let request = {
			location: position,
			//rankBy: google.maps.places.RankBy.DISTANCE,
			radius: 4000,
			keyword: [ 'bar' ]
			//openNow:true
		};

		let requestRestaurant = {
			location: position,
			//rankBy: google.maps.places.RankBy.DISTANCE,
			radius: 5000,
			types: [ 'restaurant' ]
		};

		service = new window.google.maps.places.PlacesService(map);

		//service.nearbySearch(request, nearbyCallbackBar);
		service.nearbySearch(requestRestaurant, nearbyCallbackBar);
	}

	// Handle the results (up to 20) of the Nearby Search Bar
	function nearbyCallbackBar(results, status) {
		if (status === window.google.maps.places.PlacesServiceStatus.OK) {
			createMarkersBar(results);
		}
	}

	// Set markers at the location of each place result Bar
	function createMarkersBar(places) {
		places.forEach((place) => {
			positionPoint.push({
				...place,
				geometry: { location: { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() } }
			});
		});

		placesAdd.forEach((p) => {
			positionPoint = positionPoint.filter((place) => place.place_id !== p.place_id);
		});

		positionPoint.map((posit) => bounds.extend(posit.geometry.location));

		var markers = positionPoint.map(function(location, i) {
			var infoWin = new window.google.maps.InfoWindow({ maxWidth: 350 });
			var marker = new window.google.maps.Marker({
				position: { lat: location.geometry.location.lat, lng: location.geometry.location.lng },
				map: map,
				animation: window.google.maps.Animation.DROP,
				icon: {
					url: '/img/marker-default.svg',
					anchor: new window.google.maps.Point(20, 20)
					// scaledSize: new window.google.maps.Size(20, 20),
				}
			});
			//console.log(location);

			window.handlePlaceSelect = (placeObject) => {
				let request = {
					placeId: placeObject.place_id,
					fields: props.fields
				};

				service.getDetails(request, async (placeResult, status) => {
					if (status === window.google.maps.places.PlacesServiceStatus.OK) {
						console.log('Funciona!!!!', placeResult, props.setPlaceDetail);
						const place = await props.placeDetailSave(placeResult)
						props.savePlaceFunction(place)
						currentInfoWindow.close();
						infoWin.setContent(null);
					}
				});

			};

			window.handleViewDetail = (placeObject) => {
				props.placeDetailSave(placeObject)
				setPlaceDetailSee(true)
				currentInfoWindow.close();
				infoWin.setContent(null);
			}

			let contentHTML = `
                <div class='container-infowindow'>
                <div class='appy--row'>
                    <div class='appy--col-9'>
                <h4 onclick='handleViewDetail(${JSON.stringify(
					location
				)})' style="text-align: left; font-size: 20px; color: black;">${location.name}</h4>
                <ul style="text-align: left; list-style: none; padding-left: 0px; font-size: 12px; margin-bottom: 5px;">
                <li style="color: black;"><strong>Dirección:</strong> ${location.vicinity}</li>
                </ul>
                </div>
                <div class='appy--col-3 d-flex justify-content-center align-items-center mt-3'>
                <button id=${location.place_id} onclick='handlePlaceSelect(${JSON.stringify(
				location
			)})' class="btn appy--primary-bg appy--white-color mb-3" style="outline: none; border:none" ><img src="/img/add-button.png" alt=""></button>
                </div>
                    </div>
                </div>
            `;
			window.google.maps.event.addListener(marker, 'click', function(evt) {
				infoWin.setContent(contentHTML);
				infoWin.open(map, marker);
				currentInfoWindow.close();
				currentInfoWindow = infoWin;
			});

			return marker;
		});

		var clusterStyles = [
			{
				textColor: 'black',
				url: '/img/m1.svg',
				height: 60,
				width: 60,
				textSize: 15
			}
		];

		var mcOptions = {
			gridSize: 40,
			styles: clusterStyles,
			maxZoom: 18
		};

		new window.MarkerClusterer(map, markers, mcOptions, {
			ignoreHidden: true,
			minimumClusterSize: 3,
			averageCenter: true,
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
			maxZoom: 20
		});

		/* Once all the markers have been placed, adjust the bounds of the map to
		 * show all the markers within the visible area. */
		map.fitBounds(bounds);
	}

	return <NearbyMap loading={true} />;
}
