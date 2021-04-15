import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
    state = { services: [
        {
            icon:<FaCocktail/>,
            title:"Big Cocktail bar",
            info:'lorem ipsum in metus vulputate eu scelerisque felis imperdiet proin'
        },
        {
            icon:<FaHiking/>,
            title:"Hiking Routes",
            info:'lorem ipsum in metus vulputate eu scelerisque felis imperdiet proin'
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Transport",
            info:'lorem ipsum in metus vulputate eu scelerisque felis imperdiet proin'
        },
        {
            icon:<FaBeer/>,
            title:"Alcohol serving 24/7",
            info:'lorem ipsum in metus vulputate eu scelerisque felis imperdiet proin'
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
