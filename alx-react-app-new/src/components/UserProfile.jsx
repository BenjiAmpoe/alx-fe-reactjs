// src/components/UserProfile.jsx
import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '2px solid gray', padding: '15px', margin: '15px', borderRadius: '10px', backgroundColor: '#f0f8ff' }}>
  <h2 style={{ color: 'blue', marginBottom: '10px' }}>{name}</h2>
  <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{age}</span></p>
  <p style={{ fontStyle: 'italic', color: '#333' }}>Bio: {bio}</p>
</div>

  );
}

export default UserProfile;
