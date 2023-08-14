import React from 'react';

const ProductsList = (props) => {
    return (
        <div className='products-list'>
            {props.products && props.products.map((e, i) => (
                <div className="product-card" key={i}>
                    <img src={e.imageUrl} alt="image" onClick={()=>props.stal(e)}/>
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                    <p className='card-item-price'>{e.price}</p>
                    <p className='card-item-cat'>{e.category}</p>
                    <div className="product-card-buttons">
                        <button>Update Product</button>
                        <button>Delete Product</button>
                        <button>Add to Cart</button>
                    </div>
                    <input></input>
                    <button>add comment</button>
                </div>
            ))}
        </div>
    );
}



export default ProductsList;


