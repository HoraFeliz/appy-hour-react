import React, { Component } from 'react';
import InfoBar from '../infobar/InfoBar';
import MapWithADirectionsRenderer from './directionsrenderer/DirectionsRenderer';
import PlaceListItem from '../places/PlaceListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhotoVideo, faRoute, faStopwatch, faWalking } from '@fortawesome/free-solid-svg-icons';
import BeerRating from '../common/BeerRating';
import { getPlaces, getTourById } from '../../services/api-client';
import AppyButton from '../common/AppyButton';
import { useHistory } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import PlaceInfo from '../places/PlaceInfo';

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
		window.addEventListener('scroll', this.listenToScroll)
	}

	// calculateDistance = (...places) => {
	// 	if (Object.keys(this.state.tour).length !== 0) {
	// 		const service = new window.google.maps.DistanceMatrixService();

	// 		const addresOrigin = [...places];
	// 		const origin = [addresOrigin[0].address];
	// 		// const destinations = [addresOrigin.address];
	// 		const origin2 = [addresOrigin[1].address];
	// 		// const destinations2 = [addresOrigin[2].address];
	// 		const restOfPlaces = [...places];

	// 		let destinations = [];
	// 		restOfPlaces.forEach((place) => {
	// 			destinations.push(place.address);
	// 		});

	// 		destinations.shift();

	// 		console.log('destinations', destinations);
	// 		console.log('addresOrigin', addresOrigin);
	// 		console.log('origin', origin);
	// 		console.log('origin2', origin2);
	// 		console.log('restOfPlaces', restOfPlaces);

	// 		service.getDistanceMatrix(
	// 			{
	// 				origins: origin,
	// 				destinations: destinations,
	// 				travelMode: window.google.maps.TravelMode.WALKING,
	// 				unitSystem: window.google.maps.UnitSystem.METRIC
	// 			},
	// 			(response, status) => {
	// 				if (status !== 'OK') {
	// 					console.log('Error was: ' + status);
	// 				} else {
	// 					const originList = response.originAddresses;
	// 					for (let i = 0; i < originList.length; i++) {
	// 						const results = response.rows[i].elements;
	// 						this.setState({ directions: [...results] });

	// 						const directions = this.state.directions;

	// 						// Removes last item from the directions arr
	// 						// directions.pop();

	// 						let totalDistanceArr = [];
	// 						directions.forEach((direction) => {
	// 							totalDistanceArr.push(direction.distance.value);
	// 						});

	// 						const totalDistance = totalDistanceArr.reduce((a, b) => a + b, 0);
	// 						this.setState({ totalDistance: totalDistance });

	// 						let totalDurationArr = [];
	// 						directions.forEach((direction) => {
	// 							totalDurationArr.push(direction.duration.value);
	// 						});

	// 						const totalDuration = totalDurationArr.reduce((a, b) => a + b, 0);
	// 						this.setState({ totalDuration: totalDuration });
	// 					}
	// 				}
	// 			}
	// 		);
	// 	}
	// };

	fetchPlaces = () => {
		getPlaces(this.props.match.params.id).then((places, i) => {
			// this.calculateDistance(...places);
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
		const placesArray = [...places];
		console.log(placesArray, 'placesArray')
		placesArray && placesArray.map((place) => (totalRatingSum += place.rating));

		console.log('totalRatingSum', totalRatingSum / placesArray.length);
		this.setState({ totalRating: (totalRatingSum / placesArray.length).toFixed(1) });
	};

	listenToScroll = () => {
		// const winScroll =
		// 	document.body.scrollTop || document.documentElement.scrollTop

		// const height =
		// 	document.documentElement.scrollHeight -
		// 	document.documentElement.clientHeight

		// const scrolled = winScroll / height

		// this.setState({
		// 	theposition: scrolled,
		// })
		const appyTourDetailInfo = document.getElementsByClassName('appy--tours-detail-info');
		const appyArr = [...appyTourDetailInfo];
		const appyInfoElem = (appyArr && appyArr[0]);
		let scrollYPos = window.scrollY;
		let appyInfoYPos = (appyInfoElem && appyInfoElem.offsetTop - scrollYPos);

		// window.scrollTo(0, 295);
		// console.log('appyInfoYPos', appyInfoYPos);


		// let appyPos = appyTourDetailInfo.getBoundingClientRect();
		// console.log(appyPos.top);
	}

	render() {
		const { id } = this.state.tour;
		const hashtag = ['appyhour', 'beer', 'enjoywithfriend'];
		const title = 'Appy Hour Tours';
		const url = `${process.env.REACT_APP_URL}/tour/${id}`;

		return (
			<>
				{this.state.places.length ?

					<div id='tour-detail'>
						<InfoBar back={true} tour={this.state.tour} place={this.state.places} />
						<div className="appy--tours-detail">
							<MapWithADirectionsRenderer />
						</div>

						<div className="appy--tours-detail-info">
							<hr className="appy--tours-item-info-drop-icon" />
							<h2 className="appy--tours-detail-info-placename">{this.state.tour.name}</h2>
							<div className="appy--tours-item-info-container">
								<div className="appy--tours-item-info-creator">
									<div className="appy--tours-item-info-creator-icon">
										<FontAwesomeIcon icon={faRoute} />
									</div>
									<div className="appy--tours-item-info-creator-text">Appy Hour Tours</div>
								</div>
								<div className="appy--tours-item-info-data-container">
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
								</div>
							</div>
							<p className="appy--tours-detail-info-description">{this.state.tour.description}</p>
							{/* <hr />
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
							<hr /> */}
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
												<WhatsappShareButton url={url} title={title}>
													<AppyButton num="info" type="whatsapp" />
												</WhatsappShareButton>

												<FacebookShareButton url={url} hashtag="#AppyHour">
													<AppyButton num="info" type="facebook" />
												</FacebookShareButton>
												<TwitterShareButton
													url={url}
													title={title}
													hashtags={hashtag}
												>
													<AppyButton num="info" type="twitter" />
												</TwitterShareButton>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr />
							<div className="appy--tours-detail-user-comment">
								<div className="container">
									<div className="row">
										<div className="appy--tours-detail-user-comment-container">
											<img className="appy--tours-detail-user-comment-infouser-avatar" src="/img/comment-user-photo.png" alt="User" />
											<div className="appy--tours-detail-user-comment-infouser-container">
												<div className="appy--tours-detail-user-comment-infouser-name-container">
													<p className="appy--tours-detail-user-comment-infouser-name">Javier Izquierdo</p>
													<img className="appy--tours-detail-user-comment-infouser-rating" src="/img/comment-rating.png" alt="Rating" />
												</div>
												<p className="appy--tours-detail-user-comment-infouser-post"><i>Enviado</i> hace 3 días por <strong>@javierizquierdo</strong></p>
											</div>
										</div>
										<span className="appy--tours-detail-user-comment-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo ex. Donec maximus nulla et accumsan vestibulum. Quisque lacinia egestas mi, vitae venenatis ex convallis quis. Ut vel eros non libero fringilla cursus. Nunc id elit interdum, sollicitudin nulla sit amet, pharetra nibh. Duis et feugiat arcu.
										</span>
										<img className="appy--tours-detail-user-comment-photo" src="/img/comment-photo.png" alt="User" />
									</div>
								</div>
							</div>
							<hr />
							<div className="appy--tours-detail-user-comment">
								<div className="container">
									<div className="row">
										<div className="appy--tours-detail-user-comment-container">
											<img className="appy--tours-detail-user-comment-infouser-avatar" src="/img/comment-user-photo-02.png" alt="User" />
											<div className="appy--tours-detail-user-comment-infouser-container">
												<div className="appy--tours-detail-user-comment-infouser-name-container">
													<p className="appy--tours-detail-user-comment-infouser-name">Lidia García Sanchez</p>
													<img className="appy--tours-detail-user-comment-infouser-rating" src="/img/comment-rating.png" alt="Rating" />
												</div>
												<p className="appy--tours-detail-user-comment-infouser-post"><i>Enviado</i> hace 5 días por <strong>@lidiagarciasamchez</strong></p>
											</div>
										</div>
										<span className="appy--tours-detail-user-comment-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo ex. Donec maximus nulla et accumsan vestibulum.
										</span>
										<img className="appy--tours-detail-user-comment-photo" src="/img/comment-photo-02.png" alt="User" />
									</div>
								</div>
							</div>
						</div>
					</div>

					:

					<>
						<div className="appy--tours-detail loading--background-default loading--background-default-touch icon-map" style={{ height: '300px' }}>
							<div className="appy--place-item-map-canvas mb-3 ">
								<FontAwesomeIcon icon={faRoute}></FontAwesomeIcon>
							</div>
							<InfoBar loading={true} />

						</div>
						<div style={{ padding: '0px 5px' }}>
							<PlaceListItem loading={true} />
							<PlaceListItem loading={true} />
							<PlaceListItem loading={true} />
						</div>
					</>

				}

			</>
		);
	}
}

export default TourDetail;
