import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => {
          const shortenedTitle = product.title.split(" ").slice(0, 2).join(" ");

          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="cart-img-top"
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    padding: "10px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{shortenedTitle}</h5>
                  <p className="card-text text-center">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary w-100 mb-2"
                  >
                    Details
                  </Link>
                  <button
                    className="btn btn-success w-100"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
