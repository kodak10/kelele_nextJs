"use client";
import React, { useContext, useEffect, useState } from "react";

const dataContext = React.createContext();
export const useContextElement = () => useContext(dataContext);

const CART_KEY = "kelele:cart";
const WISHLIST_KEY = "kelele:wishlist";

function readJson(key) {
  try {
    const raw = JSON.parse(localStorage.getItem(key));
    return Array.isArray(raw) ? raw : null;
  } catch (e) {
    return null;
  }
}

export default function Context({ children }) {
  // Panier de prestations (stocké dans le navigateur)
  const [cartServices, setCartServices] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);
  // Favoris
  const [wishList, setWishList] = useState([]);
  const [wishLoaded, setWishLoaded] = useState(false);

  useEffect(() => {
    const cart = readJson(CART_KEY);
    if (cart) setCartServices(cart);
    setCartLoaded(true);
    const wish = readJson(WISHLIST_KEY);
    if (wish) setWishList(wish);
    setWishLoaded(true);
  }, []);

  useEffect(() => {
    if (!cartLoaded) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartServices));
    } catch (e) {}
  }, [cartServices, cartLoaded]);

  useEffect(() => {
    if (!wishLoaded) return;
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishList));
    } catch (e) {}
  }, [wishList, wishLoaded]);

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

  const toggleWishlist = (id) =>
    setWishList((pre) => (pre.includes(id) ? pre.filter((x) => x !== id) : [...pre, id]));
  const isAddedtoWishlist = (id) => wishList.includes(id);

  const contextElement = {
    cartServices,
    addServiceToCart,
    removeServiceFromCart,
    updateServiceInCart,
    clearServiceCart,
    isServiceInCart,
    wishList,
    toggleWishlist,
    isAddedtoWishlist,
  };
  return <dataContext.Provider value={contextElement}>{children}</dataContext.Provider>;
}
