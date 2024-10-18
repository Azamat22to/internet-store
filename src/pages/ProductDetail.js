import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="card w-50 h-50">
      <img
        src={product.image}
        className="card-img-top w-50 h-75 m-auto p-3"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{product.title}</h5>
        <p className="card-text text-center">${product.price}</p>
        <p className="card-text text-center">{product.description}</p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
