import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = [
  {
    image_url: "https://amariah.co/products/eyana-two-piece-set-color-rose",
    name: "Eyana three piece set - Rose ",
    price: 180,
    strikedoffprice: 165,
  },
  // Other data entries...
];


const DetailsPage = () => {
      const ProductList = () => {
        return (
          <div id="container">
            {ProductList.map((el, index) => (
              <div key={index} className="box">
                <img src={el.image_url} alt={el.name} />
                <p>{el.name}</p>
                <div id="pricebox">
                  <div>
                    <h3>{el.price}</h3>
                  </div>
                  <div>
                    <strike>{el.strikedoffprice}</strike>
                  </div>
                </div>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        );
      };
  }

  export default DetailsPage