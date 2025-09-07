import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './css/ProductList.css'; 

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list-container">
      <h2 className="products-heading">Nuestros Productos</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;