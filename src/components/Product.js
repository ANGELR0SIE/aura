

// // // import React, { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import "./ProductPage.css";

// // // const ProductPage = () => {
// // //   const { id } = useParams();
// // //   const [product, setProduct] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     fetch("/products.json")
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         const foundProduct = data.find((item) => item.id === parseInt(id));
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
// // //         {product.images?.carousel?.map((image, index) => (
// // //           <img
// // //             key={index}
// // //             src={process.env.PUBLIC_URL + "/" + image}
// // //             alt={`Carousel ${index + 1}`}
// // //           />
// // //         ))}
// // //       </div>
// // //       <div className="product-info">
// // //         <h1>{product.name}</h1>
// // //         <p>{product.description}</p>
// // //         <h3>Price: ${product.offer_price || product.price}</h3>
// // //         <ul>
// // //           <li>Quality: {product.quality}</li>
// // //           <li>Material: {product.material}</li>
// // //         </ul>
// // //         <h4>Ratings: ⭐ {product.ratings.toFixed(1)}</h4>
// // //         <h4>Special Offers: {product.special_offers.join(", ")}</h4>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductPage;

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import "./ProductList.css";

// // const ProductList = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     fetch("/products.json")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setProducts(data.products);
// //       })
// //       .catch((error) => console.error("Error fetching products:", error));
// //   }, []);

// //   if (products.length === 0) {
// //     return <p>Loading products...</p>;
// //   }

// //   return (
// //     <div className="product-list">
// //       {products.map((product) => (
// //         <Link to={`/product/${product.id}`} key={product.id} className="product-card">
// //           <div className="product-image">
// //             <img
// //               src={process.env.PUBLIC_URL + "/" + product.images.main}
// //               alt={product.name}
// //               className="main-image"
// //             />
// //             <img
// //               src={process.env.PUBLIC_URL + "/" + product.images.hover}
// //               alt={`${product.name} hover`}
// //               className="hover-image"
// //             />
// //           </div>
// //           <div className="product-details">
// //             <h3 className="product-name">{product.name}</h3>
// //             <div className="price">
// //               {product.offer_price ? (
// //                 <>
// //                   <span className="offer-price">${product.offer_price}</span>
// //                   <span className="original-price">${product.price}</span>
// //                 </>
// //               ) : (
// //                 <span className="product-price">${product.price}</span>
// //               )}
// //             </div>
// //             <div className="product-rating">⭐ {product.ratings.toFixed(1)}</div>
// //           </div>
// //         </Link>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductList;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./ProductList.css";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/products.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.products);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   if (products.length === 0) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <Link to={`/product/${product.id}`} key={product.id} className="product-card">
//           <div className="product-image">
//             <img
//               src={process.env.PUBLIC_URL + "/" + product.images.main}
//               alt={product.name}
//               className="main-image"
//             />
//             <img
//               src={process.env.PUBLIC_URL + "/" + product.images.hover}
//               alt={product.name}
//               className="hover-image"
//             />
//           </div>
//           <div className="product-details">
//             <h3 className="product-name">{product.name}</h3>
//             <div className="price">
//               <span className="offer-price">${product.offer_price || product.price}</span>
//               {product.offer_price && (
//                 <span className="original-price">${product.price}</span>
//               )}
//             </div>
//             <div className="product-rating">⭐ {product.ratings}</div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductList;





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
        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
          <div className="product-image">
            <img
              src={process.env.PUBLIC_URL + "/" + product.images.main}
              alt={product.name}
              className="main-image"
            />
            <img
              src={process.env.PUBLIC_URL + "/" + product.images.hover}
              alt={`${product.name} Hover`}
              className="hover-image"
            />
          </div>
          <div className="product-details">
            <h3 className="product-name">{product.name}</h3>
            <div className="price">
              <span className="offer-price">${product.offer_price || product.price}</span>
              {product.offer_price && (
                <span className="original-price">${product.price}</span>
              )}
            </div>
            <div className="product-rating">⭐ {product.ratings}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
