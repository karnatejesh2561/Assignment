import React, { useState } from 'react';

const ProductForm = ({ onSubmit, product }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name,
      price: parseFloat(price),
    });

    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" step="0.01" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <button type="submit">{product ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ProductForm;
