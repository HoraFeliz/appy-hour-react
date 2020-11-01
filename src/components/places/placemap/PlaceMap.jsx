import React, { useEffect, useRef } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L, { map } from "leaflet";
import "./PlaceMap.scss";
import "leaflet/dist/leaflet.css";

const PlaceMap = (props) => {
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
    const marker = L.marker([props.latitude, props.longitude]);
    marker.bindPopup(props.name);
    marker.addTo(map);
  });
  return (
    <Map ref={mapRef} center={[props.latitude, props.longitude]} zoom={12}>
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

export default PlaceMap;
