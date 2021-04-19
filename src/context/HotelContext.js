import React, { Component } from 'react'

const HotelContext = React.createContext();

class HotelProvider extends Component {
    state = {

    };
    render() {
        return (
            <HotelContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </HotelContext.Provider>
        );
    }
}

const HotelConsumer = HotelContext.Consumer;

export { HotelProvider, HotelConsumer, HotelContext };