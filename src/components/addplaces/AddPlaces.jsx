import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { getPlaces, savePlace } from "../../services/api-client";
import AppyButton from "../common/AppyButton";
import InfoBar from "../infobar/InfoBar";
import PlaceListItem from "../places/PlaceListItem";
import PlaceMap from "../places/placemap/PlaceMap";

let autoComplete;


const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  const completeFields = [
    "address_components",
    "place_id",
    "geometry",
    "icon",
    "name",
    "photos",
    "types",
    "formatted_address",
    "name",
    "rating",
    "formatted_phone_number",
    "reviews",
    "website",
    "opening_hours",
    "price_level",
    "types",
  ];
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["establishment"], componentRestrictions: { country: "es" } }
  );
  autoComplete.setFields(completeFields);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const placeObject = autoComplete.getPlace();

  updateQuery(placeObject.name);
  const place = {
    ...placeObject,
    geometry: {
      longitude: placeObject.geometry.location.lng(),
      latitude: placeObject.geometry.location.lat(),
    },
    image: placeObject.photos[0].getUrl(),
    city: placeObject.address_components[2].long_name,
    tags: placeObject.types,
    placeId: placeObject.place_id,
  };

  savePlace(place, window.location.href.split("/add/")[1])
    .then((res) => console.log("New place created", res))
    .catch((err) => console.log("Error creating place", err));
}

function AddPlaces(props) {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState({ places: [] });
  const [toogleMap, setToggleMap] = useState(false);

  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPlaces(props.match.params.id);
      setPlaces(result);
    };

    fetchData();
  }, [props, query]);

  useEffect(() => {
    const fetchData = async () => {
      setToggleMap(true);
    };

    fetchData();
  }, [props, query]);

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
          <button className="appy--button appy--button-info appy--primary-color" style={{
            backgroundColor: 'white', fontWeight: 'bold'
          }} onClick={() => setQuery("")}>
            <FontAwesomeIcon className="appy--button-icon" icon={faPlus} style={{ paddingRight: '5px' }} /> Add
        </button>
          {places.length ?
            <div class="appy--tours-barinfo-info">
              <div class="appy--button null">
                <p class="appy--button-num"><strong>{places.length}</strong></p>
              </div>
            </div>
            :
            <div class="appy--tours-barinfo-info">
              <div class="appy--button null">
                <p class="appy--button-num"><strong>0</strong></p>
              </div>
            </div>
          }

          {places.length > 0 &&
            <button className="appy--button appy--button-info appy--primary-color" style={{
              backgroundColor: 'white', fontWeight: 'bold'
            }}>
              <FontAwesomeIcon className="appy--button-icon" icon={faPen} style={{ paddingRight: '5px' }} /> Edit
        </button>
          }

        </div>
      </div>
      {/* <PlaceMap default={true} /> */}
      <div className="search-location-input">
        <div className="appy--addplace">
          {places.length
            ? places.map((place, key) => (
              <div>
                {toogleMap && key === places.length - 1 ? (
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
    </div>

  );
}

export default AddPlaces;
