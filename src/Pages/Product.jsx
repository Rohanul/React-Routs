import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data could not be fetched");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products-page">
      <h1 className="products-lists-heading">All The Products</h1>
      {isLoading && (
        <p className="lists-loading-message">Products are loading...</p>
      )}
      {error && <p className="lists-error-message">Failed to load</p>}

      {!isLoading && !error && (
        <section className="product-section">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              const {
                title,
                category,
                rating,
                tags,
                price,
                description,
                images,
              } = product;

              return (
                <div className="product-container" key={product.id}>
                  <article className="product-bucket">
                    <img
                      src={images[0]}
                      alt={title}
                      className="product-image"
                    />

                    <h4 className="products-title">{title}</h4>

                    <div className="product-info">
                      <p>Category: {category}</p>
                      <p>Rating: {rating}</p>
                      <p>Tags: {tags}</p>
                      <p className="price">${price}</p>
                    </div>

                    <p className="products-desc">
                      {description && description.substring(0, 100)}...
                    </p>

                    <p className="detail_link">
                      <Link to={`/product/${product.id}`} state={product}>
                        Show Details
                      </Link>
                    </p>
                  </article>
                </div>
              );
            })}
        </section>
      )}
    </div>
  );
};

export default Product;
