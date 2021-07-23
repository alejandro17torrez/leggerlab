import {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import { lazy } from 'react';


export function ControlledCarousel(props) {   
  return (
      <Carousel>
      {props.banner.custom_fields.slider.map( e =>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={e.url}
              alt={e.titulo}
            />
          </Carousel.Item>
      )}
    </Carousel>
  );
}


