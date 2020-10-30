<div>
    <div className="row">
        <div className="appy--col-2 appy--place-list-item-position">
            {this.props.type === 'num' ?
                <p className="appy--place-list-item-position-num">{this.props ? this.props.num + 1 : 'Loading'}</p>
                :
                <p className="appy--place-list-item-position-num">
                    <AppyButton type="delete" />
                </p>
            }
        </div>
        <div className="col-8 appy--place-list-item-info">
            <h3 className="appy--place-list-item-info-title">{this.props.place ? textLength(this.props.place.name, 13, 18, 20) : 'Loading'}</h3>
            <p className="appy--place-list-item-info-description">{this.props.place ? this.props.place.address : 'Loading'}</p>
            <div className="row appy--place-list-item-schedule-price">
                {/* <div className="appy--col-1 appy--place-list-item-schedule-price-open-icon">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        </div>
                                        <div className="appy--col-5 appy--place-list-item-schedule-price-schedule-info">{this.props.place ? textLength(this.props.place.city, 6, 10, 15) : 'Loading'}</div> */}
                <div className="appy--col-2 appy--place-list-item-schedule-price-price-icon">
                    {/* <img src="/img/price-icon.svg" alt="Price" /> */}
                    <span style={{ fontSize: '14px', paddingTop: '16px' }}>Price: </span>
                </div>
                <div className="appy--col-5 appy--place-list-item-schedule-price-price-info">
                    <Price rating={this.props.place ? this.props.place.priceLevel : 'Loading'} />
                </div>
            </div>
        </div>

        <div className="appy--col-2 appy--place-list-item-position">
            {this.props.type === 'num' ?
                <p className="appy--place-list-item-position-num">{this.props ? this.props.num + 1 : 'Loading'}</p>
                :
                <p className="appy--place-list-item-position-num">
                    <AppyButton type="delete" />
                </p>
            }
        </div>
    </div>
</div>