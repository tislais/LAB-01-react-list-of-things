import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {
  
  render() { 
    return (
      <li className="CreatureItem">
        <h2>UniWhal</h2>
        <img alt="UniWhal" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />
        <p>A unicorn and a narwhal nuzzling their horns</p>
      </li>
    );
  }
}
 
export default CreatureItem;