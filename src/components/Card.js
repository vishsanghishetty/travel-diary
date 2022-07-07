import React from 'react';

export default function Card(props) {
    console.log(props);
    return (<div><div className="card--container">

        <div className="card-left--container">
            <img className="card--img" src={`../images/${props.data.imageUrl}`} alt="travel pics" />
        </div>

        <div className="card-right--container">
            <div className="first--set">
                <img class="card--icon" src={`../images/${props.data.icon}`} alt="icon" />
                <span className="location">{props.data.location}</span>
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
                <p className="description">{props.data.description}</p>
            </div>

        </div>

    </div>
        <div style={{
            borderBottom: '.5px solid lightgrey',
            width: '50%',
            marginLeft: '25px'
        }}></div>

    </div>
    )
}
