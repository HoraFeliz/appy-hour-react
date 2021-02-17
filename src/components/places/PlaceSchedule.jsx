import React from "react";
import PlaceScheduleItem from "./PlaceScheduleItem";

const PlaceSchedule = ({ place, loading }) => {
    return (

        loading ?

            <div className="appy--place-item-info-schedule">
                <div className="appy--place-item-info-schedule-container">
                    <div className="appy--tours-item-info-creator-text appy--tours-item-info-creator-text-loading loading--background-default schedule">
                    </div>
                    <div className="appy--tours-item-info-creator-text appy--tours-item-info-creator-text-loading loading--background-default schedule">
                    </div>
                    <div className="appy--tours-item-info-creator-text appy--tours-item-info-creator-text-loading loading--background-default schedule">
                    </div>
                </div>
            </div>

            :

            <div className="appy--place-item-info-schedule">
                <div className="appy--place-item-info-schedule-container">

                    {place.opening_hours.weekday_text
                        ? place.opening_hours.weekday_text.map((openingHour, key) => (
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
