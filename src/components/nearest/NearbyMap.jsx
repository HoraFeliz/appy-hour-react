import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./NearbyMap.scss";

class NearbyMap extends React.Component {


  render() {

    return <>
<<<<<<< HEAD
      <div id="map" ></div>
=======

      {this.props.loading ?

        <div id="map" className="loading--background-default loading--background-default-touch icon-map" style={{ height: 'calc(100vh - 170px)' }}>
          <div className="appy--place-item-map-canvas mb-3 ">
            <FontAwesomeIcon icon={faRoute}></FontAwesomeIcon>
          </div>
        </div>

        :

        <div id="map"></div>
      }

>>>>>>> 8817201b6880144ac43123cf57f3f6a0218b781b

    </>;
  }
}

export default NearbyMap;
