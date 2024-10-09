import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { state } = useLocation();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be fetched");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data); // Correct API field
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-det-page">
      <h1 className="det-heading">Product Details</h1>
      {isLoading && (
        <p className="lists-loading-message">Products are loading...</p>
      )}
      {error && <p className="lists-error-message">Failed to load</p>}
      {!isLoading && !error && (
        <article className="product-det-container">
          <img
            src={state.images[0]}
            alt={state.title}
            className="det-product-image"
          />
          <h3>{state.title}</h3>
          <p>
            <strong className="det-price">${state.price}</strong>
          </p>
          <p>
            <strong className="det-catagory">Category: </strong>
            {state.category}
          </p>
          <p>
            <strong className="det-rating">Rating: </strong>
            {state.rating}
          </p>
          <p>
            <strong className="det-tags">Tags: </strong>
            {state.tags}
          </p>
          <p>
            <strong className="det-brands">Brand: </strong>
            {state.brand}
          </p>
          <p>
            <strong className="det-stock">Stock: </strong>
            {state.stock}
          </p>

          <p>
            <strong className="det-stock">Description: </strong>
            <p className="det-desc">{state.description && state.description}</p>
          </p>
        </article>
      )}
    </div>
  );
};

export default ProductsDetail;
