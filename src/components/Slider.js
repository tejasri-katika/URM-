import React from 'react';
import SliderImage1 from './images/slider1.jpg'; // Import the slider images here
// Import other slider images as needed
import SliderImage2 from './images/slider2.jpeg';
import SliderImage3 from './images/slider3.jpg';
import SliderImage4 from './images/slider4.jpeg';
import './css/slider.css';
// import './css/style.css';
import './css/custom.css';
// import './css/font-awesome.css';

const Slider = () => {
  return (
    <div id="slider">
      {/* Use img tags with src attribute to show the slider images */}
      <div>
        <img src={SliderImage1}class="img-fluid" alt="Slider 1" />
      </div>
      {/* Add other slider images here with img tags */}
      <div>
        <img src={SliderImage2}class="img-fluid" alt="Slider 2" />
      </div>
      <div>
        <img src={SliderImage3} class="img-fluid" alt="Slider 3" />
      </div>
      <div>
        <img src={SliderImage4} class="img-fluid" alt="Slider 4" />
      </div>
    </div>
  );
};

export default Slider;
