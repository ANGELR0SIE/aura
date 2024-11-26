// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import "./ProductList.css";

// // // const ProductList = () => {
// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     fetch("/products.json")
// // //       .then((response) => response.json())
// // //       .then((data) => setProducts(data.products))
// // //       .catch((error) => console.error("Error fetching products:", error));
// // //   }, []);

// // //   return (
// // //     <div className="product-list">
// // //       {products.map((product, index) => (
// // //         <div key={index} className="product-card">
// // //           <div className="product-image">
// // //             <img
// // //               src={product.images.main}
// // //               alt={`${product.name} - Main`}
// // //               className="main-image"
// // //             />
// // //             <img
// // //               src={product.images.hover}
// // //               alt={`${product.name} - Hover`}
// // //               className="hover-image"
// // //             />
// // //           </div>
// // //           <div className="product-details">
// // //             <h3 className="product-name">{product.name}</h3>
// // //             <p className="product-price">
// // //               {product.offerPrice ? (
// // //                 <>
// // //                   <span className="offer-price">${product.offerPrice}</span>
// // //                   <span className="original-price">${product.price}</span>
// // //                 </>
// // //               ) : (
// // //                 <span>${product.price}</span>
// // //               )}
// // //             </p>
// // //             <p className="product-rating">⭐ {product.ratings.toFixed(1)}</p>
// // //           </div>
// // //           <Link to={`/products/${product.id}`} className="view-details">
// // //             View Details
// // //           </Link>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default ProductList;

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import "./ProductList.css";

// // const ProductList = () => {
// //   const [products, setProducts] = useState([]);

// //   // Fetching the products from products.json
// //   useEffect(() => {
// //     fetch("/products.json")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setProducts(data); // Populate the state with product data
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching products:", error);
// //       });
// //   }, []);

// //   if (products.length === 0) {
// //     return <p>Loading products...</p>;
// //   }

// //   return (
// //     <div className="product-list">
// //       {products.map((product) => (
// //         <div className="product-item" key={product.id}>
// //           <img
// //             src={process.env.PUBLIC_URL + "/" + product.images.main}
// //             alt={product.name}
// //             className="product-image"
// //           />
// //           <div className="product-details">
// //             <h3>{product.name}</h3>
// //             <p>{product.description}</p>
// //             <p>Price: ${product.offer_price || product.price}</p>
// //             <div className="ratings">⭐ {product.ratings}</div>
// //           </div>
// //         </div>
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

//   // Fetching the products from products.json
//   useEffect(() => {
//     fetch("/products.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to load products.json");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProducts(data); // Populate the state with product data
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   if (products.length === 0) {
//     return <p>Loading products...</p>;
//   }

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <div className="product-item" key={product.id}>
//           <Link to={`/product/${product.id}`}> {/* Navigate to product details */}
//             <img
//               src={process.env.PUBLIC_URL + "/" + product.images.main}
//               alt={product.name}
//               className="product-image"
//               onMouseOver={(e) =>
//                 (e.currentTarget.src =
//                   process.env.PUBLIC_URL + "/" + product.images.hover)
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.src =
//                   process.env.PUBLIC_URL + "/" + product.images.main)
//               }
//             />
//             <div className="product-details">
//               <h3>{product.name}</h3>
//               <p>Price: ${product.offer_price || product.price}</p>
//               <div className="ratings">⭐ {product.ratings}</div>
//             </div>
//           </Link>
//         </div>
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
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product-item">
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
