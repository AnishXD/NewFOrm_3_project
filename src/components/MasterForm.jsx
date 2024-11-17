import { useState } from 'react';
import axios from '../api';
import './common.css';

const MasterForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/masters', { name });
      setName('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <form className="master-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter category"
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default MasterForm;
