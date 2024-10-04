//  creating and exporting a context to use  all product in the shopCategory pages such as men, women, and kids

import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

//function for creating an empty cart. Empty cart is an object key : productId, value: Quantity of the product added in the cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAll_products] = useState([]);
  //useState variable for setCartItems
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // Total Amount State: The total amount is stored in the totalAmount state in the context and updated accordingly.
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAll_products(data));
  }, []);

  //addToCart function - can add products in cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemid: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  //removeFromCart function - can remove products from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //getTotalAmount function - helps calculate tolal amount of cartItem
  // useEffect Hook in Context: The useEffect hook is used to recalculate the total amount whenever cartItems change.
  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          const itemInfo = all_products.find(
            (product) => product.id === Number(item)
          );
          total += itemInfo.new_price * cartItems[item];
        }
      }
      setTotalAmount(total);
    };
    calculateTotalAmount();
  }, [cartItems]);

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const ContextValue = {
    all_products,
    cartItems,
    totalAmount,
    addToCart,
    removeFromCart,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
