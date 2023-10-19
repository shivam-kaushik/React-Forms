// src/Form.js
import React, { useState } from 'react';

function Shop() {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    // Handle input field
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Shop form data:', formData);
  };

  const handleCancel = () => {
    // Handle the cancel action
    setFormData({ name: '', description: '' });
    console.log('Cancelled');
  };

    return (
      <div>
        <h3>New Shop</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <br></br>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <br></br>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }


export default Shop;
