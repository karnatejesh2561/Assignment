import React from 'react';

const Product = ({ id, name, price, onUpdate, onDelete }) => {
  const handleUpdate = () => {
    onUpdate(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Product;
