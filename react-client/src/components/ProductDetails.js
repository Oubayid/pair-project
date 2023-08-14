import React from 'react'

const ProductDetails = (props) => {
console.log(props.prouct )    
  return (
        <div className="product-details" >
          <div className="product-image">
            <img src={props.product.imageUrl} alt="MacBook Pro" />
          </div>
          <div className="product-info">
            <h1>{props.product.name}</h1>
            <p>{props.product.description}</p>
            <h2>{props.product.price}</h2>
            <button>Add to Cart</button>
          </div>
        </div>
      );
}

export default ProductDetails