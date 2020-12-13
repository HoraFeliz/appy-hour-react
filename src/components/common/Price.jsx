import React from 'react'

export default function Price({ rating }) {
    return (
        <div style={{ marginRight: '5px' }}>
            <span className={`appy--price-item${rating >= 1 ? '-active' : '-disabled'}`}>€</span>
            <span className={`appy--price-item${rating >= 2 ? '-active' : '-disabled'}`}>€</span>
            <span className={`appy--price-item${rating >= 3 ? '-active' : '-disabled'}`}>€</span>
        </div>
    )
}
