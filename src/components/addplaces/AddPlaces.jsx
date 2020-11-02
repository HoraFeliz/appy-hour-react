import React, { useState, useEffect, useRef } from "react";
import { getAllPlaces, savePlace } from "../../services/api-client";

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

  updateQuery(placeObject);
  const place = {
    ...placeObject,
    geometry: {
      longitude: placeObject.geometry.location.lng(),
      latitude: placeObject.geometry.location.lat(),
    },
    image: placeObject.photos[0].getUrl(),
    city: placeObject.address_components[2].long_name,
    tags: placeObject.types,
  };
  savePlace(place)
    .then((res) => console.log("New place created", res))
    .catch((err) => console.log("Error creating place", err));
}

function AddPlaces() {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );

    getAllPlaces()
      .then((res) => {
        setPlaces(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search place"
        value={query}
      />

      <div>
        {places.length
          ? places.map((place, key) => (
              <div key={key}>{JSON.stringify(place.name)}</div>
            ))
          : "Loading places"}
      </div>
    </div>
  );
}

export default AddPlaces;
