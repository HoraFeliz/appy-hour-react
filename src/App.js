import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Tours from './components/tours/Tours';
import RecordTour from './components/RecordTour';
import Tour from './components/tour/Tour';
import Profile from './components/Profile';
import Options from './components/Options';
import PlaceId from './components/places/PlaceId';
import CreateTour from './components/create-tour/CreateTour';
import TourDetail from './components/tours/TourDetail.jsx';
import Login from './components/login/Login';
import AddPlaces from './components/addplaces/AddPlaces';
import Nearby from './components/nearest/Nearby';
import LoginLayout from './components/layouts/LoginLayout.tsx';
import CreateUser from './components/createuser/CreateUser';
import { AuthenticatedRoute, NotAuthenticatedRoute } from './components/authenticated-route/Authenticated-route';

function App() {
	return (
		<>
			{/* Helpers */}
			{/* <div id="no-click" className="no-click d-none"></div> */}
			{/* <div id="helper-back" className="black-background-init"></div> */}

			<div className="App">
				<Switch>
					<Route path={['/login']}>
						<LoginLayout>
							<NotAuthenticatedRoute exact path="/login" component={Login} />
						</LoginLayout>
					</Route>
					<Route path={['/signup']}>
						<LoginLayout>
							<NotAuthenticatedRoute exact path="/signup" component={CreateUser} />
						</LoginLayout>
					</Route>

					<AuthenticatedRoute exact path="/" component={Tours} />
					<AuthenticatedRoute exact path="/place/:id/:tour" component={PlaceId} />
					<AuthenticatedRoute exact path="/create" component={CreateTour} />
					<AuthenticatedRoute exact path="/tourdetail" component={TourDetail} />
					<AuthenticatedRoute exact path="/tours" component={Tours} />
					<AuthenticatedRoute exact path="/record" component={RecordTour} />
					<AuthenticatedRoute exact path="/profile" component={Profile} />
					<AuthenticatedRoute exact path="/options" component={Options} />
					<AuthenticatedRoute exact path="/tour/:id" component={TourDetail} />
					<AuthenticatedRoute exact path="/tour/places/add" component={Tour} />
					<AuthenticatedRoute exact path="/tour/add/:id" component={AddPlaces} />
					<AuthenticatedRoute exact path="/nearby" component={Nearby} />
					<Route>
						<Redirect to="/login" />
					</Route>
				</Switch>

			</div>
		</>
	);
}

export default App;
