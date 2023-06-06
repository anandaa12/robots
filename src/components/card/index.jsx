import React from "react";
import './style.css';

export const Card = props => (
    <div className="card">
    <img className="profile" alt="profile" src={`https://robohash.org/${props.robot.id}?set=set4&100x100`} />
    <h3>{props.robot.id}={props.robot.name}</h3>
    </div>
);