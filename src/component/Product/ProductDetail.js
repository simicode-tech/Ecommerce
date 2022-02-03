import React from "react";
import data from "../../dummyData";
import Rating from "../Rating";
import { Link, useParams } from 'react-router-dom';
// import {row }  from 'react-bootstrap'
function ProductDetail() {
    const params =useParams().id;
    const product = data.products.find((p) => p.id ===parseInt(params) );
    // console.log(product); 

    if(!product){
        return <div>Product Not Found</div>
    }
    // console.log(product)
   
    return ( 
        <div>
            <div className="row top">
                <Link to="/">Back to result</Link>
                <div className="col-2">
                    <img  className="large" src={product.image} alt={product.name} />
                </div> 
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}/>
                        </li>
                        <li>Price:${product.price}</li>
                        <li>Description:
                            {product.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock>0? (<span className="success">In Srock</span>
                                            ):(<span className="error">Unavailable</span>)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ProductDetail;