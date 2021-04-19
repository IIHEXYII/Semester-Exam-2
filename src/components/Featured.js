import React, { Component } from 'react'
import { HotelContext } from "../context/HotelContext";

export default class Featured extends Component {
    static contextType = HotelContext;
    render() {
        return (
            <div>
               <p>I'm a featured Hotel</p>
            </div>
        )
    }
}
