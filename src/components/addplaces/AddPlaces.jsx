import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { getPlaces, savePlace } from '../../services/api-client';
import ImageCanvas from '../common/ImageCanvas';
import Nearby from '../nearest/Nearby';
import NearbyMap from '../nearest/NearbyMap';
import Map from '../places/Map.jsx';
import PlaceInfo from '../places/PlaceInfo';
import PlaceMap from '../places/placemap/PlaceMap';

let autoComplete;

const loadScript = (url, callback) => {
	let script = document.createElement('script');
	script.type = 'text/javascript';

	if (script.readyState) {
		script.onreadystatechange = function() {
			if (script.readyState === 'loaded' || script.readyState === 'complete') {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = () => callback();
	}

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
};

function AddPlaces(props) {
	const [ query, setQuery ] = useState('');
	const [ places, setPlaces ] = useState([]);
	const [ placeDetail, setPlaceDetail ] = useState(null);
	const [ placeDetailSee, setPlaceDetailSee ] = useState(false);

	const idTour = props.match.params.id;
	const completeFields = [
		'address_components',
		'place_id',
		'geometry',
		'icon',
		'photos',
		'types',
		'formatted_address',
		'name',
		'rating',
		'formatted_phone_number',
		'website',
		'opening_hours',
		'price_level',
		'url',
		'user_ratings_total'
	];

	const autoCompleteRef = useRef(null);

	useEffect(() => {
		loadScript(
			`https://maps.googleapis.com/maps/api/js?key=${process.env
				.REACT_APP_MAPS_API_KEY}&libraries=places&callback=initMap`,
			() => handleScriptLoad(setQuery, autoCompleteRef)
		);
	}, []);

	useEffect(
		() => {
			const fetchData = async () => {
				const result = await getPlaces(props.match.params.id);
				setPlaces(result);
			};
			// if (placeDetail !== null) {
			// 	savePlaceFunction();
			// }

			fetchData();
		},
		[ placeDetail ]
	);

	// useEffect(
	// 	() => {
	// 		const fetchData = async () => {
	// 			setToggleMap(true);
	// 		};

	// 		fetchData();
	// 	},
	// 	[ props, query ]
	// );

	function handleScriptLoad(updateQuery, autoCompleteRef) {
	
		autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, {
			types: [ 'establishment', 'address' ],
			componentRestrictions: { country: 'es' }
		});

		autoComplete.setFields(completeFields);
		autoComplete.addListener('place_changed', () => {
			handlePlaceSelect(updateQuery);
		});
	}

	async function handlePlaceSelect(updateQuery) {
		const placeObject = autoComplete.getPlace();
		console.log('place search', placeObject);
		//console.log('url image', placeObject.photos[0].getUrl())
		updateQuery(placeObject.name);
		placeDetailSave(placeObject);
		setPlaceDetailSee(true);
	}

	const placeDetailSave = (placeObject) => {

		if (placeObject.place_id) {
			console.log(placeObject)
			const place = {
				...placeObject,
				address_components: {
					locality: placeObject.address_components[2].long_name,
					country: placeObject.address_components[5].long_name,
					postal_code: placeObject.address_components[6].long_name
				},
				geometry: {
					location: {
						lat: placeObject.geometry.location.lat(),
						lng: placeObject.geometry.location.lng()
					}
				},
				photo: placeObject.photos && placeObject.photos[0].getUrl()
			};

			setPlaceDetail(place);
		}

		return true;
	};

	const savePlaceFunction = () => {
		console.log('the save is correct', placeDetail);
		if (placeDetail !== null) {
			// const placeRepeat = places.filter(
			// 	(place) =>
			// 		parseFloat(place.geometry.location.lat) === parseFloat(placeDetail.geometry.location.lat) &&
			// 		parseFloat(place.geometry.location.lng) === parseFloat(placeDetail.geometry.location.lng)
			// );

			// if (!placeRepeat.length) {
			savePlace(placeDetail, idTour)
				.then((res) => {
					setPlaceDetail(null);
					setPlaceDetailSee(false);
					setQuery('');
					console.log('create', res);
				})
				.catch((err) => console.log('Error creating place', err));
			// } else {
			// 	setPlaceDetail(null);
			// 	setQuery('');
			// 	setChange(!change);
			// }
		}
	};

	return (
		<div>
			<div className="appy--infobar appy--primary-color">
				<input
					ref={autoCompleteRef}
					onChange={(event) => setQuery(event.target.value)}
					placeholder="Search place"
					value={query}
					className="appy--search-input appy--search-place"
				/>
				<div className="appy--buttons-info ">
					<button
						className="appy--button appy--button-info appy--primary-color"
						style={{
							backgroundColor: 'white',
							fontWeight: 'bold'
						}}
						onClick={savePlaceFunction}
					>
						<FontAwesomeIcon
							className="appy--button-icon"
							icon={faPlus}
							style={{ paddingRight: '5px' }}
						/>{' '}
						Add
					</button>
					<div className="appy--tours-barinfo-info">
						<div className="appy--button null">
							<p className="appy--button-num">
								<strong>{places.length}</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="appy--tours-detail">
				<div className="appy--place-item-map-canvas">
					{placeDetail && placeDetailSee ? (
						<div>
							<PlaceMap
								lat={placeDetail.geometry.location.lat}
								lng={placeDetail.geometry.location.lng}
								name={placeDetail.name}
								address={placeDetail.address}
								isOpen={Math.random() >= 0.5}
							/>
							<div className="appy--place-item">
								<div className="appy--tours-detail appy--place-item-photo">
									<ImageCanvas place={true} placeInfo={placeDetail} />
								</div>
								<PlaceInfo place={placeDetail} placeInfo={placeDetail} />
							</div>
						</div>
					) : (
						<div>
							<Map
								fields={completeFields}
								placeDetailSave={placeDetailSave}
								savePlaceFunction={savePlaceFunction}
					
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default AddPlaces;

// <div className="appy--buttons-info ">
// <button
// 	className="appy--button appy--button-info appy--primary-color"
// 	style={{
// 		backgroundColor: 'white',
// 		fontWeight: 'bold'
// 	}}
// 	onClick={() => setQuery('')}
// >
// 	<FontAwesomeIcon
// 		className="appy--button-icon"
// 		icon={faPlus}
// 		style={{ paddingRight: '5px' }}
// 	/>{' '}
// 	Add
// </button>
// {places.length ? (
// 	<div className="appy--tours-barinfo-info">
// 		<div className="appy--button null">
// 			<p className="appy--button-num">
// 				<strong>{places.length}</strong>
// 			</p>
// 		</div>
// 	</div>
// ) : (
// 	<div className="appy--tours-barinfo-info">
// 		<div className="appy--button null">
// 			<p className="appy--button-num">
// 				<strong>0</strong>
// 			</p>
// 		</div>
// 	</div>
// )}

// {/* {places.length > 0 &&
// <button className="appy--button appy--button-info appy--primary-color" style={{
// backgroundColor: 'white', fontWeight: 'bold'
// }}>
// <FontAwesomeIcon className="appy--button-icon" icon={faPen} style={{ paddingRight: '5px' }} /> Edit
// </button>
// } */}
// </div>
// </div>

// {/* <PlaceMap default={true} /> */}
// <div className="search-location-input">
// <div className="appy--addplace">
// {places.length !== 0 ? (
// 	places.map((place, key) => (
// 		<div key={key}>
// 			{toogleMap && key === places.length - 1 ? (
// 				<PlaceMap
// 					lat={place.geometry.latitude}
// 					lng={place.geometry.longitude}
// 					name={place.name}
// 					address={place.address}
// 					isOpen={Math.random() >= 0.5}
// 				/>
// 			) : (
// 				''
// 			)}
// 			<PlaceListItem
// 				key={key}
// 				type="num"
// 				num={key}
// 				recommended={false}
// 				place={place}
// 				tour={null}
// 			/>
// 		</div>
// 	))
// ) : (
// 	<div>
// 		<Nearby />
// 	</div>
// )}
