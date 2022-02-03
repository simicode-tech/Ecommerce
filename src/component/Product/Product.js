import React from "react";
import data from "../../dummyData";
import ProductList from "./ProductList";
function Product() {
    return (  
        <div>
          <div className="row center">

            {
              data.products.map((product)=>{
                // console.log(product)
                return(

                  <ProductList key={product.id} product={product}/>
                )
              })
            }
          </div>
        </div>
    );
}

export default Product;