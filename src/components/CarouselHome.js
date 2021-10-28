import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import imgM1 from '../images/musc/DSC_0755.JPG';
import imgM2 from '../images/musc/DSC_0768.JPG';
import imgM3 from '../images/musc/DSC_0759.JPG';
import imgM4 from '../images/musc/DSC_0764.JPG';


const CarouselHome = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
    return (
        <div id="carousselHome">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={imgM1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={imgM2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={imgM3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={imgM4}
            alt="First slide"
          />
        </Carousel.Item>
         
      </Carousel>
      </div>
    )
}


export default CarouselHome
