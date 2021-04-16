import React, { Component } from 'react'
import { RoomContext } from "../context/RoomContext";

export default class Featured extends Component {
    static contextType = RoomContext;
    render() {
        return (
            <div>
               <p>I'm a featured room</p>
            </div>
        )
    }
}
