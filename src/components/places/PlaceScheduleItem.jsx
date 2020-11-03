import React from "react";
const PlaceScheduleItem = (props) => {
  return (
    <div className="appy--row">
      {props.id < 4 ? (
        <React.Fragment>
          <div className="appy--col-6">
            <ul className="appy--ul">
              <li>
                <div className="appy--row">
                  <div className="appy--col-6">
                    <div className="appy--place-item-info-schedule-days">
                      {props.day}
                    </div>
                  </div>
                  <div className="appy--col-6">
                    {props.time.trim() === "Cerrado" ? (
                      <div className="appy--place-item-info-schedule-hours">
                        <span className="appy--place-item-info-address-close">{props.time}</span>
                      </div>
                    ) : (
                        <div className="appy--place-item-info-schedule-hours">
                          {props.time}
                        </div>
                      )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </React.Fragment>
      ) : (
          <React.Fragment>
            <div className="appy--col-6 ">
              <ul className="appy--ul">
                <li>
                  <div className="appy--row">
                    <div className="appy--col-6">
                      <div className="appy--place-item-info-schedule-days">
                        {props.day}
                      </div>
                    </div>
                    <div className="appy--col-6">
                      {props.time.trim() === "Cerrado" ? (
                        <div className="appy--place-item-info-schedule-hours">
                          <span className="appy--place-item-info-address-close">{props.time}</span>
                        </div>
                      ) : (
                          <div className="appy--place-item-info-schedule-hours">
                            {props.time}
                          </div>
                        )}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </React.Fragment>
        )}
    </div>
  );
};
export default PlaceScheduleItem;