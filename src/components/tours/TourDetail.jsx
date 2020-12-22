import React, { Component } from 'react';
import InfoBar from '../infobar/InfoBar';
import MapWithADirectionsRenderer from './directionsrenderer/DirectionsRenderer';
import PlaceListItem from '../places/PlaceListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faRoute, faStopwatch, faWalking } from '@fortawesome/free-solid-svg-icons';
import BeerRating from '../common/BeerRating';
import { getPlaces, getTourById } from '../../services/api-client';
import AppyButton from '../common/AppyButton';
import { useHistory } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

class TourDetail extends Component {
	state = {
		places: [],
		tour: {},
		directions: [],
		totalDistance: '',
		totalDuration: '',
		totalRating: 0
	};

	componentDidMount() {
		this.fetchPlaces();
		this.fetchTour();
	}

	calculateDistance = (...places) => {
		const service = new window.google.maps.DistanceMatrixService();

		const addresOrigin = [ ...places ];
		const origin = [ addresOrigin[0].address ];
		// const destinations = [addresOrigin.address];
		const origin2 = [ addresOrigin[1].address ];
		// const destinations2 = [addresOrigin[2].address];
		const restOfPlaces = [ ...places ];

		let destinations = [];
		restOfPlaces.forEach((place) => {
			destinations.push(place.address);
		});

		destinations.shift();

		console.log('destinations', destinations);
		console.log('addresOrigin', addresOrigin);
		console.log('origin', origin);
		console.log('origin2', origin2);
		console.log('restOfPlaces', restOfPlaces);

		service.getDistanceMatrix(
			{
				origins: origin,
				destinations: destinations,
				travelMode: window.google.maps.TravelMode.WALKING,
				unitSystem: window.google.maps.UnitSystem.METRIC
			},
			(response, status) => {
				if (status !== 'OK') {
					console.log('Error was: ' + status);
				} else {
					const originList = response.originAddresses;
					for (let i = 0; i < originList.length; i++) {
						const results = response.rows[i].elements;
						this.setState({ directions: [ ...results ] });

						const directions = this.state.directions;

						// Removes last item from the directions arr
						// directions.pop();

						let totalDistanceArr = [];
						directions.forEach((direction) => {
							totalDistanceArr.push(direction.distance.value);
						});

						const totalDistance = totalDistanceArr.reduce((a, b) => a + b, 0);
						this.setState({ totalDistance: totalDistance });

						let totalDurationArr = [];
						directions.forEach((direction) => {
							totalDurationArr.push(direction.duration.value);
						});

						const totalDuration = totalDurationArr.reduce((a, b) => a + b, 0);
						this.setState({ totalDuration: totalDuration });
					}
				}
			}
		);
	};

	fetchPlaces = () => {
		getPlaces(this.props.match.params.id).then((places, i) => {
			this.calculateDistance(...places);
			this.ratingAppyHour(...places);
			this.setState({ places });
		});
	};

	fetchTour = () => {
		getTourById(this.props.match.params.id).then((tour) => {
			this.setState({ tour });
		});
	};

	ratingAppyHour = (...places) => {
		let totalRatingSum = 0;
		const placesArray = [ ...places ];

		placesArray && placesArray.map((place) => (totalRatingSum += place.rating));

		console.log('totalRatingSum', totalRatingSum / placesArray.length);
		this.setState({ totalRating: (totalRatingSum / placesArray.length).toFixed(1) });
	};

	// share social network

	shareMessage = (e) => {
		//const history = useHistory();
		const nameTarget = e.target.name;
		const { name, description, id, image } = this.state.tour;
		const url = `${process.env.REACT_APP_URL}/tour/${id}`;

		switch (nameTarget) {
			case 'whassap':
				const message =
					'🍻🍺🍻🎊🎉🎊🎉🍻🍺🍻' +
					'\n\n¿Eres buen cervecero?\nEcha un vistazo a esta ruta: ' +
					url +
					'\n' +
					name +
					'\n\n' +
					description +
					'\n\n_Appy hour tours_';

				const messageFormat = encodeURIComponent(message);
				console.log(message);
				//const whasapUrl = `https://wa.me/?text=${message}`;
				const whasapUrl = `https://api.whatsapp.com/send?text=${messageFormat}`;
				console.log(whasapUrl);
				window.location.href = whasapUrl;

				break;
			case 'facebook':
				console.log('holaaa');
				const facebookUrl = `http://www.facebook.com/sharer.php?s=100&p[url]=${url}&p[title]=${name}&p[summary]=
									${description}&p[images][0]=${image}`;

				// console.log(facebookUrl);
				// window.localion.href = facebookUrl;
				const urll = 'https://work.facebook.com/sharer.php?display=popup&u=' + window.location.href;
				const options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
				window.open(urll, 'sharer', options);
				break;

			default:
				break;
		}
	};

	render() {
		const { name, description, id, image } = this.state.tour;
		const url = `${process.env.REACT_APP_URL}/tour/${id}`;
		console.log(url);
		return (
			<div>
				<InfoBar back={true} tour={this.state.tour} place={this.state.places} />
				<div className="appy--tours-detail">
					<MapWithADirectionsRenderer />
				</div>

				<div className="appy--tours-detail-info">
					<h2 className="appy--tours-detail-info-placename">{this.state.tour.name}</h2>
					<div className="appy--tours-item-info-creator">
						<div className="appy--tours-item-info-creator-icon">
							<FontAwesomeIcon icon={faRoute} />
						</div>
						<div className="appy--tours-item-info-creator-text">Appy Hour Tours</div>
					</div>
					<p className="appy--tours-detail-info-description">{this.state.tour.description}</p>
					<hr />
					<div className={`appy--tours-detail-distancebar`} style={{ backgroundColor: 'white' }}>
						<div className="appy--tours-item-distancebar-distante-tour">
							<div className="appy--tours-item-distancebar-icon">
								<FontAwesomeIcon icon={faWalking} />
							</div>
							<div className="appy--tours-item-distancebar-text" style={{ color: '#707070' }}>
								{(this.state.totalDistance / 1000).toFixed(2)} Km
							</div>
						</div>
						<div className="appy--tours-item-distancebar-distante-tour">
							<div className="appy--tours-item-distancebar-icon">
								<FontAwesomeIcon icon={faStopwatch} />
							</div>
							<div className="appy--tours-item-distancebar-text" style={{ color: '#707070' }}>
								{(this.state.totalDuration / 60).toFixed(0)} min
							</div>
						</div>
						<div className="appy--tours-item-distancebar-distante-nearby">
							<div className="appy--tours-item-distancebar-icon">
								<FontAwesomeIcon icon={faMapMarkerAlt} />
							</div>
							<div className="appy--tours-item-distancebar-text" style={{ color: '#707070' }}>
								{this.state.places.length + ' Places'}
							</div>
						</div>
					</div>
					<hr />
					{this.state.places.length ? (
						this.state.places.map((place, key) => (
							<PlaceListItem
								key={key}
								type="num"
								num={key}
								total={this.state.places.length}
								recommended={false}
								place={place}
								directions={this.state.directions[key]}
								tour={this.state.tour}
							/>
						))
					) : (
						'NO PLACES'
					)}
					<hr style={{ marginBottom: '10px' }} />
					<div className="appy--tours-detail-rating-container">
						<div className="appy--row">
							<div className="appy--col-6">
								<span className="appy--tours-detail-rating-text">Appy Hour Rating</span>
							</div>
							<div className="appy--col-6">
								<BeerRating type="tour-detail" rating={this.state.totalRating} />
							</div>
						</div>
					</div>
					<hr style={{ marginTop: '10px' }} />
					<div className="appy--tours-detail-share">
						<div className="container">
							<div className="row">
								<div className="appy--col-6">
									<span className="appy--tours-detail-share-text">Share Tour</span>
								</div>
								<div className="appy--col-6">
									<div className="appy--tours-detail-share-buttons">
										<button name="whatsapp" onClick={this.shareMessage}>
											<AppyButton num="info" type="whatsapp" />
										</button>
										{/* <button
											name="facebook"
											onClick={this.shareMessage}
											className="fb-xfbml-parse-ignore"
										>
											<AppyButton num="info" type="facebook" />
										</button> */}
										{/* 										
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${name}`}
										>
											Share
										</a> */}
										<FacebookShareButton url={url} quote='hola' hashtag='#appyhour'>
										<AppyButton num="info" type="facebook" />
										</FacebookShareButton>

										<a
											target="_blank"
											rel="noopener noreferrer"
											href={`https://twitter.com/intent/tweet?text=${window.location.href}`}
										>
											<AppyButton num="info" type="twitter" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TourDetail;
