import React from "react";

import servicioTecnico from "./images/servicio-tecnico.png";
import celulares from "./images/portada-celulares.png";
import { Arrow } from "./Arrow";

import { Carousel as BootstrapCarousel } from "react-bootstrap";
import "./styles.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGES = [celulares, servicioTecnico];

export const Carousel = () => {
  return (
    <BootstrapCarousel
      className="slider"
      fade={false}
      slide={false}
      nextLabel=""
      prevLabel=""
      prevIcon={<Arrow type={"prev"} />}
      nextIcon={<Arrow type={"next"} />}
    >
      {IMAGES.map((image, index) => {
        return (
          <BootstrapCarousel.Item key={`carousel-item-${index}`}>
            <div style={{ backgroundImage: `url(${image})` }}></div>
          </BootstrapCarousel.Item>
        );
      })}
    </BootstrapCarousel>
  );
};
