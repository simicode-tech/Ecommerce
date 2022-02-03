import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";
function ProductList( props) {
    const { product }=props
    return ( 
        <div key={product.id} className="card">
                    <Link to={`/product/${product.id}`}>
                      <img className="medium" src={product.image} alt={product.name}/>
                    </Link>
                    <div className="card-body" >
                      <Link to={`/product/${product.id}`}>
                        <h2>{product.name}</h2>
                      </Link>
                        <Rating rating={product.rating} numReviews={product.numReviews}/>
                      {/* <div className="rating">
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                      </div> */}
                      <div className="price">${product.price}</div>
                    </div>
                  </div>
     );
}

export default ProductList;