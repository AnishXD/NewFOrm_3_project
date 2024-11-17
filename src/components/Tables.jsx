import { useState, useEffect } from 'react';
import axios from '../api';
import './Tables.css';

const Tables = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get('/details');
        setDetails(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="table-container">
      <h1>Details Table</h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail._id}>
              <td>{detail.question}</td>
              <td>{detail.category?.name || 'Uncategorized'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
