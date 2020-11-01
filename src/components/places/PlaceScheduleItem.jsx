import React from "react";

const PlaceScheduleItem = (props) => {
  return (
    <li>
      <div className="appy--row">
        <div className="appy--col-6">
          <div className="appy--place-item-info-schedule-days">{props.day}</div>
        </div>
        <div className="appy--col-6">
          {props.time.trim() === "Cerrado" ? (
            <div className="appy--place-item-info-address-close">
              {props.time}
            </div>
          ) : (
            <div className="appy--place-item-info-schedule-hours">
              {props.time}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default PlaceScheduleItem;
