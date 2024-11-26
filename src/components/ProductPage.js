// // // import React, { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // // import "./ProductPage.css";

// // // const ProductPage = () => {
// // //   const { id } = useParams();
// // //   const [product, setProduct] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     fetch("/products.json")
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         const foundProduct = data.products.find(
// // //           (item) => item.id === parseInt(id)
// // //         );
// // //         setProduct(foundProduct);
// // //       })
// // //       .catch((error) => console.error("Error fetching product:", error));
// // //   }, [id]);

// // //   if (!product) {
// // //     return <p>Loading...</p>;
// // //   }

// // //   return (
// // //     <div className="product-page">
// // //       <button onClick={() => navigate(-1)} className="back-button">
// // //         &larr; Back to Products
// // //       </button>
// // //       <div className="product-images">
// // //         {product.images.carousel.map((image, index) => (
// // //           <img key={index} src={image} alt={`Carousel ${index + 1}`} />
// // //         ))}
// // //       </div>
// // //       <div className="product-info">
// // //         <h1>{product.name}</h1>
// // //         <p>{product.description}</p>
// // //         <h3>Price: ${product.offerPrice || product.price}</h3>
// // //         <ul>
// // //           {product.qualities.map((quality, index) => (
// // //             <li key={index}>{quality}</li>
// // //           ))}
// // //         </ul>
// // //         <h4>Ratings: ⭐ {product.ratings.toFixed(1)}</h4>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductPage;

// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // // import "./ProductPage.css";

// // const ProductPage = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetch("/products.json")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const foundProduct = data.products.find((item) => item.id === parseInt(id));
// //         setProduct(foundProduct);
// //       })
// //       .catch((error) => console.error("Error fetching product:", error));
// //   }, [id]);

// //   if (!product) {
// //     return <p>Loading...</p>;
// //   }

// //   return (
// //     <div className="product-page">
// //       <button onClick={() => navigate(-1)} className="back-button">
// //         &larr; Back to Products
// //       </button>
// //       <div className="product-images">
// //         {product.images?.carousel?.map((image, index) => (
// //           <img key={index} src={image} alt={`Carousel ${index + 1}`} />
// //         ))}
// //       </div>
// //       <div className="product-info">
// //         <h1>{product.name}</h1>
// //         <p>{product.description}</p>
// //         <h3>Price: ${product.offerPrice || product.price}</h3>
// //         <ul>
// //           {product.qualities.map((quality, index) => (
// //             <li key={index}>{quality}</li>
// //           ))}
// //         </ul>
// //         <h4>Ratings: ⭐ {product.ratings.toFixed(1)}</h4>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// // import "./ProductPage.css";

// const ProductPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("/products.json")
//       .then((response) => response.json())
//       .then((data) => {
//         // Correcting the reference: `data` is the array of products
//         const foundProduct = data.find((item) => item.id === parseInt(id, 10));
//         setProduct(foundProduct);
//       })
//       .catch((error) => console.error("Error fetching product:", error));
//   }, [id]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="product-page">
//       <button onClick={() => navigate(-1)} className="back-button">
//         &larr; Back to Products
//       </button>
//       <div className="product-images">
//         {product.images.carousel.map((image, index) => (
//           <img key={index} src={image} alt={`Carousel ${index + 1}`} />
//         ))}
//       </div>
//       <div className="product-info">
//         <h1>{product.name}</h1>
//         <p>{product.description}</p>
//         <h3>Price: ${product.offer_price || product.price}</h3>
//         <ul>
//           {product.qualities.map((quality, index) => (
//             <li key={index}>{quality}</li>
//           ))}
//         </ul>
//         <h4>Ratings: ⭐ {product.ratings.toFixed(1)}</h4>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div
            className="product-item"
            onMouseEnter={(e) => {
              const image = e.currentTarget.querySelector(".product-image");
              image.src = process.env.PUBLIC_URL + "/" + product.images.hover;
            }}
            onMouseLeave={(e) => {
              const image = e.currentTarget.querySelector(".product-image");
              image.src = process.env.PUBLIC_URL + "/" + product.images.main;
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/" + product.images.main}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: ${product.offer_price || product.price}</p>
              <div className="ratings">⭐ {product.ratings}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
