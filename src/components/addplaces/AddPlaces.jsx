import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { getPlaces, savePlace } from "../../services/api-client";
import AppyButton from "../common/AppyButton";
import InfoBar from "../infobar/InfoBar";
import PlaceListItem from "../places/PlaceListItem";
import PlaceMap from "../places/placemap/PlaceMap";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getDetails,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { GoogleApiWrapper } from "google-maps-react";

const PlacesAutocomplete = (props) => {
  const [places, setPlaces] = useState([]);
  const [toogleMap, setToggleMap] = useState(false);
  const [query, setQuery] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const placesFromApi = await getPlaces(props.match.params.id);
      setPlaces(placesFromApi);
    };
    fetchData();
  }, [toogleMap, props]);
  // const fetchData = async () => {
  //   const placesFromApi = await getPlaces(props.match.params.id);
  //   setPlaces(placesFromApi);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setToggleMap((prevState) => !prevState);
  //   };

  //   fetchData();
  // }, [places]);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getDetails(results[0]))
      .then((data) => {
        console.log("📍 Coordinates: ", data);
        const place = {
          ...data,
          geometry: {
            longitude: data.geometry.location.lng(),
            latitude: data.geometry.location.lat(),
          },
          image: data.photos[0].getUrl(),
          city: data.address_components[2].long_name,
          tags: data.types,
          placeId: data.place_id,
        };
        savePlace(place, window.location.href.split("/add/")[1])
          .then((res) => console.log("New place created", res))
          .catch((err) => console.log("Error creating place", err));

        setToggleMap((prevState) => !prevState);

        setValue("");
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <React.Fragment>
      <div ref={ref}>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>

      {places.length ? (
        <div class="appy--tours-barinfo-info">
          <div class="appy--button null">
            <p class="appy--button-num">
              <strong>{places.length}</strong>
            </p>
          </div>
        </div>
      ) : (
        <div class="appy--tours-barinfo-info">
          <div class="appy--button null">
            <p class="appy--button-num">
              <strong>0</strong>
            </p>
          </div>
        </div>
      )}

      <div className="search-location-input">
        <div className="appy--addplace">
          {places.length
            ? places.map((place, key) => (
                <div>
                  {key === places.length - 1 ? (
                    <PlaceMap
                      lat={place.geometry.latitude}
                      lng={place.geometry.longitude}
                      name={place.name}
                      address={place.address}
                      isOpen={Math.random() >= 0.5}
                    />
                  ) : (
                    ""
                  )}
                  <PlaceListItem
                    key={key}
                    type="num"
                    num={key}
                    recommended={false}
                    place={place}
                    tour={null}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAPS_API_KEY}`,
})(PlacesAutocomplete);
