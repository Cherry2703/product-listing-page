// import React from 'react';

// import { Link } from 'react-router-dom';
// import './index.css';

// const ProductCard = ({ imageSrc, productName }) => {
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src={imageSrc} alt={productName} />
//       </div>
//       <div className="product-details">
//         <h2 className="product-name">{productName}</h2>
//         <p className="product-pricing">
//           <Link className="sign-in-link">Sign In</Link> or 
//           <Link className="create-account-link"> Create an account </Link>
//           to see pricing
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // updated CSS file name for clarity

const ProductCard = ({ imageSrc, productName }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageSrc} alt={productName} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{productName}</h2>
        <p className="product-pricing">
          <Link to="/sign-in" className="sign-in-link">Sign In</Link> or 
          <Link to="/create-account" className="create-account-link">Create an account</Link>
          to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
