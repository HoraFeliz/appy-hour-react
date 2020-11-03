import React, { useState, useEffect, useRef } from "react";
import { getPlaces, savePlace } from "../../services/api-client";
import PlaceListItem from "../places/PlaceListItem";

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

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search place"
        value={query}
      />
      <button onClick={() => setQuery("")} className="btn btn-danger">
        +
      </button>

      <div>
        {places.length
          ? places.map((place, key) => (
              <PlaceListItem
                key={key}
                type="num"
                num={key}
                recommended={false}
                place={place}
                tour={null}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default AddPlaces;
