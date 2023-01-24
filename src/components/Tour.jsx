import React from 'react'

export const Tour = ({ date, duration, id, img, location, price, text, title }) => {
    return (
        <article className="tour-card" key={id}>
            <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>
                    {text}
                </p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span> {location}
                    </p>
                    <p>{duration} days</p>
                    <p>from ${price}</p>
                </div>
            </div>
        </article>
    )
}
