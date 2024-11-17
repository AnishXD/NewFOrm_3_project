import { useState, useEffect } from 'react';
import axios from '../api';
import './common.css';

const DetailsForm = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    const fetchMasters = async () => {
      try {
        const { data } = await axios.get('/masters');
        setMasters(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchMasters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/details', { question, category });
      setQuestion('');
      setCategory('');
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <form className="details-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter question"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        {masters.map((master) => (
          <option key={master._id} value={master._id}>
            {master.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default DetailsForm;
