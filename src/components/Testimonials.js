import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.scss'

const Testimonials = ({ testimonials }) => {
return (
    <div className="testimonials">
      <Carousel fade={true} interval={3000}>
        {testimonials.edges.map((testimonial) => (
          <Carousel.Item key={testimonial.node.id}>
            <div className="carousel-item-inner-wrap">
              <div>
                <blockquote>&ldquo;{testimonial.node.quote.quote}&rdquo;</blockquote>
                <span>{testimonial.node.name} - {testimonial.node.client}</span>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials;