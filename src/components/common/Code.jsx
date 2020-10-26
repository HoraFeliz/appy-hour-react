import React, { Component } from 'react';

class Code extends Component {
    render() {
        return (
            <div>
                {(this.props.place && this.props.recommended) &&
                    <div className="appy--image-placeid-recommended">
                        <FontAwesomeIcon icon={faStar} />
                        <span className="appy--image-placeid-recommended text">RECOMMENDED</span>
                    </div>
                }

                {(this.props.recommended) &&
                    <div className={`appy--image-tours-recommended`}>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                }

                {(this.props.brand === 'mahou') ? <img src="../../img/logo-mahou.svg" alt="Mahou" /> :
                    (this.props.brand === 'estrella') ? <img src="../../img/logo-estrella.svg" alt="Estrella" /> :
                        (this.props.brand === 'recommended') ? <FontAwesomeIcon icon={faStar} /> : null
                }
            </div>
        );
    }
}

export default Code;