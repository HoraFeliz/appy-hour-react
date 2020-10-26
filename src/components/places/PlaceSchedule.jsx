import React, { Component } from 'react';

class PlaceSchedule extends Component {
    render() {
        return (
            <div className="appy--place-item-info-schedule">
                <div className="appy--place-item-info-schedule-container">
                    <div className="appy--row">
                        <div className="appy--col-6">
                            <ul className="appy--ul">
                                <li>
                                    <div className="appy--row">
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-days">Monday</div>
                                        </div>
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-hours"><span className="appy--place-item-info-address-close">Close</span></div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="appy--row">
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-days">Tuesday</div>
                                        </div>
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-hours">11:00 - 19:00</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="appy--row">
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-days">Wednesday</div>
                                        </div>
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-hours">11:00 - 19:00</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="appy--row">
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-days">Thrusday</div>
                                        </div>
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-hours">11:00 - 19:00</div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="appy--col-6 appy--second-col">
                            <ul className="appy--ul">
                                <li>
                                    <div className="appy--row">
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-days">Friday</div>
                                        </div>
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-hours">11:00 - 19:00</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="appy--row">
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-days">Saturday</div>
                                        </div>
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-hours">11:00 - 19:00</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="appy--row">
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-days">Sunday</div>
                                        </div>
                                        <div className="appy--col-6">
                                            <div className="appy--place-item-info-schedule-hours">11:00 - 19:00</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaceSchedule;