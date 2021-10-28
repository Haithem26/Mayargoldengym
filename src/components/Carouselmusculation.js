import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import imgM1 from '../images/musc/DSC_0755.JPG';
import imgM2 from '../images/musc/DSC_0739.JPG';
import imgM3 from '../images/musc/DSC_0738.JPG';
import imgM4 from '../images/musc/DSC_0734.JPG';
import imgM5 from '../images/musc/DSC_0722.JPG';
import imgM6 from '../images/musc/DSC_0708.JPG';


const Carouselmusculation = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div id="carouselmusculation">
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
        <Carousel.Item>
          <img
            src={imgM5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={imgM6}
            alt="First slide"
          />
        </Carousel.Item>
        
      </Carousel>
      </div>
  );
};

export default Carouselmusculation;
