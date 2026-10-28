"use client";
import { shopItems } from "@/data/products";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(shopItems[0]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Panier de prestations KELELE (stocké dans le navigateur)
  const [cartServices, setCartServices] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("kelele:cart"));
      if (Array.isArray(raw)) setCartServices(raw);
    } catch (e) {}
    setCartLoaded(true);
  }, []);
  useEffect(() => {
    if (!cartLoaded) return;
    try {
      localStorage.setItem("kelele:cart", JSON.stringify(cartServices));
    } catch (e) {}
  }, [cartServices, cartLoaded]);
  const isServiceInCart = (id) => cartServices.some((x) => x.id === id);
  const addServiceToCart = (p) => {
    if (isServiceInCart(p.id)) return;
    setCartServices((pre) => [
      ...pre,
      {
        id: p.id,
        title: p.title,
        imgSrc: p.imgSrc,
        city: p.city,
        category: p.filterCategories ? p.filterCategories[0] : "",
        slug: p.slug,
        price: p.price || null,
        date: "",
        note: "",
      },
    ]);
  };
  const removeServiceFromCart = (id) => setCartServices((pre) => pre.filter((x) => x.id !== id));
  const updateServiceInCart = (id, patch) =>
    setCartServices((pre) => pre.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const clearServiceCart = () => setCartServices([]);
  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const addProductToCart = (id) => {
    if (!cartProducts.filter((elm) => elm.id == id)[0]) {
      const item = {
        ...shopItems.filter((elm) => elm.id == id)[0],
        quantity: 1,
      };
      setCartProducts((pre) => [...pre, item]);
    }
  };
  const isAddedToCartProducts = (id) => {
    if (cartProducts.filter((elm) => elm.id == id)[0]) {
      return true;
    }
    return false;
  };

  const toggleWishlist = (id) => {
    if (wishList.includes(id)) {
      setWishList((pre) => [...pre.filter((elm) => elm != id)]);
    } else {
      setWishList((pre) => [...pre, id]);
    }
  };
  const isAddedtoWishlist = (id) => {
    if (wishList.includes(id)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist"));
    if (items?.length) {
      setWishList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const contextElement = {
    cartServices,
    addServiceToCart,
    removeServiceFromCart,
    updateServiceInCart,
    clearServiceCart,
    isServiceInCart,
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    toggleWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
  };
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
