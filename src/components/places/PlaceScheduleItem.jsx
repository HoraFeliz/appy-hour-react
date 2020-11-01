import React from "react";

const PlaceScheduleItem = (props) => {
  return (
    <li>
      <div className="appy--row">
        <div className="appy--col-6">
          <div className="appy--place-item-info-schedule-days">{props.day}</div>
        </div>
        <div className="appy--col-6">
          <div className="appy--place-item-info-schedule-hours">
            <span className="appy--place-item-info-address-close">
              {props.time}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PlaceScheduleItem;
