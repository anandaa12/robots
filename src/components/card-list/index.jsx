import React from "react";
import './style.css';
import {Card} from '../card/index';
export const CardList = props => (
  <div className="card-list">
    {props.robots.map(el => (
      <Card robot={el} key={el.id}/> 
    ))}
  </div>
)