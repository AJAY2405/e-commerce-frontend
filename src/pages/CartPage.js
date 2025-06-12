


import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";
import { buyCourse } from "../services/payment";
import axiosApi from "../services/axios";

const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  
  const getToken = async () => {
    try {
      const { data } = await axiosApi.get("/api/v1/product/braintree/token");
      console.log("Received client token:", data?.clientToken);
      setClientToken(data?.clientToken);
    } catch (error) {
      console.error("Error fetching client token", error);
      toast.error("Failed to load payment gateway");
    }
  };

  // Handle payment
  const handlePayment = async () => {
    try {
      setLoading(true);
      

      buyCourse(auth?.token, cart);

      // localStorage.removeItem("cart");
      // setCart([]);
      toast.success("Payment Successful");
      // navigate("/dashboard/user/orders");
    } catch (error) {
      console.error("Payment error", error);
      toast.error("Payment Failed");
    } finally {
      setLoading(false);
    }
  };

  // Calculate total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total += item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.error(error);
      return "$0.00";
    }
  };

  // Remove item from cart
  const removeCartItem = (pid) => {
    try {
      let updatedCart = [...cart];
      const index = updatedCart.findIndex((item) => item._id === pid);
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error removing item", error);
    }
  };

  useEffect(() => {
  if (instance) console.log("DropIn is ready", instance);
}, [instance]);


  return (
    <Layout>
      <div className="cart-page">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user
                ? "Hello Guest"
                : `Hello ${auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You have ${cart.length} items in your cart`
                  : "Your cart is empty"}
              </p>
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-7 p-0 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p._id}>
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      width="100%"
                      height="130px"
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price: {p.price}</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-5 cart-summary">
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total: {totalPrice()}</h4>

              {auth?.user?.address ? (
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                </div>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Add Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/login", { state: "/cart" })}
                    >
                      Please Login to Checkout
                    </button>
                  )}
                </div>
              )}

              {/* <div className="mt-2 payment-container">
                {!clientToken || !auth?.token || !cart?.length ? (
                  <p className="text-muted">Payment gateway not ready</p>
                ) : (
                  <div className="braintree-dropin-wrapper">
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: { flow: "vault" },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handlePayment}
                      // disabled={!instance || loading}
                    >
                      {loading ? "Processing..." : "Make Payment"}
                    </button>
                  </div>
                )}
              </div> */}

               <div className="mt-2 payment-container">
                { !auth?.token || !cart?.length ? (
                  <p className="text-muted">Payment gateway not ready</p>
                ) : (
                  <div className="braintree-dropin-wrapper">
                    <button
                      className="btn btn-primary mt-3"
                      onClick={handlePayment}
                      // disabled={!instance || loading}
                    >
                      {loading ? "Processing..." : "Make Payment"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
