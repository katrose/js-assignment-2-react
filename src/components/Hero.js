import React from 'react';

class Hero extends React.Component {
  render() {
    return(
      <div className="hero">
        <div className="wrapper">
            <h1>Product Name</h1>
            <h2>Catchy phrase about the product</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio accusamus aliquid ducimus debitis minus sunt
                exercitationem similique beatae
            </p>
            <button className="primary-button">Buy Now</button>
            <button className="secondary-button">More Info</button>
        </div>
      </div>
    )
  }
}

export default Hero;