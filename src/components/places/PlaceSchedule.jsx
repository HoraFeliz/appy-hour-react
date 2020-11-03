import React from "react";
import PlaceScheduleItem from "./PlaceScheduleItem";

const PlaceSchedule = (props) => {
    return (
        <div className="appy--place-item-info-schedule">
            <div className="appy--place-item-info-schedule-container">
                
                    {props.place.openingHours
                        ? props.place.openingHours.map((openingHour, key) => (
                            <PlaceScheduleItem
                                key={key}
                                id={key}
                                day={openingHour.split(/:(.+)/)[0]}
                                time={openingHour.split(/:(.+)/)[1]}
                            />
                        ))
                        : "Loading"}
            </div>
        </div>
    );
};

export default PlaceSchedule;
