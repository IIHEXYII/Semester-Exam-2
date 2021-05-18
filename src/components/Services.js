import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
    state = { services: [
        {
            icon:<FaCocktail/>,
            title:"Cocktail bars",
            info:'Our hotels serves a big variety of cocktails'
        },
        {
            icon:<FaHiking/>,
            title:"Hiking Routes",
            info:'Norway offers a vast amount of hiking trips and beautiful sceneries'
        },
        {
            icon:<FaShuttleVan/>,
            title:"Cheap Transport",
            info:'Get to where you want when you want with our local traveling services'
        },
        {
            icon:<FaBeer/>,
            title:"Pubs & night clubs",
            info:'Night clubs are in walking distance from our hotels'
        }
    ]}

    render() {
        return (
            <section className="services">
               <Title title="Services" />
              <div className="services__center">
              {this.state.services.map((item, index) => {
                  return <article key={index} className="service">
                      <span className="service__span">{item.icon}</span>
                      <h3 className="service__h3">{item.title}</h3>
                      <p className="service__p">{item.info}</p>
                  </article>
              })}
              </div>
            </section>
        )
    }
}
