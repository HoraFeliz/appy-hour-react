import React from "react";
import PlaceScheduleItem from "./PlaceScheduleItem";

const PlaceSchedule = (props) => {
  return (
    <div className="appy--place-item-info-schedule">
      <div className="appy--place-item-info-schedule-container">
        <div className="appy--row">
          <div className="appy--col-6">
            <ul className="appy--ul">
              {props.place.openingHours
                ? props.place.openingHours.map((openingHour, key) => (
                    <PlaceScheduleItem
                      key={key}
                      day={openingHour.split(/:(.+)/)[0]}
                      time={openingHour.split(/:(.+)/)[1]}
                    />
                  ))
                : "Loading"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceSchedule;
