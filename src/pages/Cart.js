import React from "react";
import { useCart } from "./CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div
        style={{ fontSize: "30px", fontWeight: "lighter" }}
        className="title mt-5"
      >
        Your cart is empty
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center">Your Cart</h2>
      {cart.map((product) => (
        <div key={product.id} className="card mb-3 mt-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid p-2 m-auto d-flex justify-content-center w-50 h-100"
                alt={product.title}
              />
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
