import React, { useState } from 'react';


function Product() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const [errors, setErrors] = useState({
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    // Handle input field
    const { name, value } = e.target;

    const newFormData = { ...formData };
    const newErrors = { ...errors };

    // Quantity validation
    if (name === 'quantity') {
      if (!/^\d+$/.test(value)) {
        newErrors.quantity = 'Quantity should be a number';
      } else {
        newErrors.quantity = '';
      }
    }

    // Price validation
    if (name === 'price') {
      if (!/^\d+(\.\d+)?$/.test(value) || parseFloat(value) <= 0) {
        newErrors.price = 'Price should be a positive float number';
      } else {
        newErrors.price = '';
      }
    }

    newFormData[name] = value;
    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    if (errors.quantity === '' && errors.price === '') {
      // Handle form submission
      console.log('Product form data:', formData);
    } else {
      console.log('Form data is invalid. Please correct the errors.');
    }

    console.log('Product form data:', formData);
  };

  const handleCancel = () => {
    // Handle the cancel action
    setFormData({ name: '', description: '', category: '', quantity: '', price: ''});
    setErrors({ quantity: '', price: '' });
    console.log('Cancelled');
  };

    return (
      <div>
        <h3>New Product</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
            {errors.quantity && <div className="error">{errors.quantity}</div>}
          </div>
          <div>
            <label>Price</label>
            <input
              type="float"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <div className="error">{errors.price}</div>}
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }

export default Product;
