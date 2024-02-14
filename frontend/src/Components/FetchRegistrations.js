import React, { useState, useEffect } from 'react';
import axios from 'axios';
    

const FetchRegistrations = () => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    if (res === null) {
      axios.get('http://localhost:8080/retrive', {})
        .then(response => {
          setRes(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [res]);

  return (
    <div>
      <h1>Registrations</h1>
      {res && res.length > 0 ? (
        <table className="registration-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {res.map(item => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name || 'N/A'}</td>
                <td>{item.email || 'N/A'}</td>
                <td>{item.password || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default FetchRegistrations;
