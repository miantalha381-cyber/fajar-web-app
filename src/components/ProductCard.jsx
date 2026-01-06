import React from 'react';

function ProductCard({ product }) {
    const { name, description, price, image, category, rating, inStock } = product;

    return (
        <article className="product-card" id={`product-${product._id}`}>
            <div className="product-image-container">
                <img
                    src={image}
                    alt={name}
                    className="product-image"
                    loading="lazy"
                />
                <div className="product-image-overlay"></div>
                <span className="product-category">{category}</span>
                <span className="product-rating">
                    ⭐ {rating?.toFixed(1) || '4.5'}
                </span>
            </div>

            <div className="product-content">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>

                <div className="product-footer">
                    <span className="product-price">
                        ${price?.toFixed(2)}
                    </span>
                    <span className={`product-stock ${inStock ? 'in-stock' : 'out-of-stock'}`}>
                        {inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;
