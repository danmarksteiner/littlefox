import React from 'react';
import { Link } from "gatsby"
import { BsDot } from "react-icons/bs";
import Testimonials from './Testimonials'


const Services = ({ services, testimonials }) => {
  return (
    <div id="Testimonials" className="services">
      <div className="services-bg">
        <img src="services-image.jpg" />
      </div>
      {/* <div className="services-gradient"></div> */}
      {/* <div className="container"> */}
          {/* <h2>I can help you with a whole bunch of editorial services</h2>
          <ul>
            {services.edges.map((service) => (
              <li key={service.node.id}>
                <h3>{service.node.serviceName}</h3>
                <BsDot />
              </li>
            ))}
          </ul>
          <p><Link to="/services">Find out more</Link></p> */}
      {/* </div> */}
      <Testimonials testimonials={testimonials} />
    </div>
  )
}

export default Services;