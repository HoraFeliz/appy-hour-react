import React, { useEffect, useRef, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L, { map } from "leaflet";
import "./PlacesMap.scss";
import "leaflet/dist/leaflet.css";

// import locations from "../../../assets/data/locations.json";
import { getLocations } from "../../../services/api-client";

const PlacesMap = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then((locations) => {
      setLocations(locations);
    });
  }, []);

  const mapRef = useRef();

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if (!map) return;

    map.eachLayer((layer = {}) => {
      const { options } = layer;
      const { name } = options;

      if (name !== "Mapbox") {
        map.removeLayer(layer);
      }
    });

    const geoJson = new L.GeoJSON(locations, {
      onEachFeature: (feature = {}, layer) => {
        /**
         * @lesson-08-todo
         * Being able to access each feature gives us the ability to
         * access all of the data that we've created in our GeoJSON
         * file. How can we use it to show delivery zones on the map?
         */

        const { properties = {} } = feature;
        const { name, delivery, tags, phone, website } = properties;

        const popup = L.popup();

        const html = `
          <div class="restaurant-popup">
            <h3>${name}</h3>
            <ul>
              <li>
                ${tags.join(", ")}
              </li>
              <li>
                <strong>Delivery:</strong> ${delivery ? "Yes" : "No"}
              </li>
              <li>
                <strong>Phone:</strong> ${phone}
              </li>
              <li>
                <strong>Website:</strong> <a href="${website}">${website}</a>
              </li>
            </ul>
          </div>
        `;

        popup.setContent(html);

        layer.bindPopup(popup);
      },
    });

    geoJson.addTo(map);
  }, [locations, mapRef]);

  return (
    <Map ref={mapRef} center={[38.907132, -77.036546]} zoom={12}>
      {/**
       * @lesson-03-todo
       * Now that we created a new Map Style with Mapbox,
       * we want to use it in our app so that we can have
       * a custom map. To do that, we'll need to update our
       * TileLayer to use a Mapbox endpoint and attribution.
       */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      />
    </Map>
  );
};

export default PlacesMap;
