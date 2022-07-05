import React from 'react';

export default function Card(props) {
    console.log(props);
    return (<div className="card--container">

        <img className="card--img" src={`../images/${props.data.imageUrl}`} alt="travel pics" />

        <div className="card-right--container">
            <img class="card--icon" src={`../images/${props.data.icon}`} alt="icon" />
            <h5 className="location">{props.data.location}</h5>
            <a className="maps--link" href={props.data.googleMapsUrl} target="_blank" without rel="noreferrer">View on Google Maps</a>
        </div>
        <div className="title">
            <h2 className="card--title">{props.data.title}</h2>
        </div>
        <div className="date--range">
            <span className="date--start">{props.data.startDate} </span>
            <span className="date--end">- {props.data.endDate}</span>
        </div>
        <div className="desc">
            <p className="description">Hello!{props.data.description}</p>
        </div>

    </div >
    )
}
