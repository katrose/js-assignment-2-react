import React from 'react';

class Hero extends React.Component {
  render() {
    return(
      <div class="hero">
        <div class="wrapper">
            <h1>Product Name</h1>
            <h2>Catchy phrase about the product</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio accusamus aliquid ducimus debitis minus sunt
                exercitationem similique beatae
            </p>
            <button class="primary-button">Buy Now</button>
            <button class="secondary-button">More Info</button>
        </div>
      </div>
    )
  }
}

export default Hero;