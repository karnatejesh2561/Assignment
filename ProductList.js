import React from 'react';
import Product from './productComponent';
import ProductForm from './productFormComponent';

const ProductList = () => {
  const [products, setProducts] = React.useState(() => JSON.parse(localStorage.getItem('products')) || []);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const handleUpdateProduct = (id) => {
    const product = products.find((p) => p.id === id);
    setSelectedProduct(product);
  };

  const handleEditProduct = (product) => {
    const index = products.findIndex((p) => p.id === product.id);
    setProducts([...products.slice(0, index), product, ...products.slice(index + 1)]);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  React.useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div className='body'>
    <div>
      <ProductForm onSubmit={handleAddProduct} />
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          onUpdate={handleUpdateProduct}
          onDelete={handleDeleteProduct}
        />
      ))}
      {selectedProduct && <ProductForm onSubmit={handleEditProduct} product={selectedProduct} />}
    </div>
    </div>
  );
};

export default ProductList;
