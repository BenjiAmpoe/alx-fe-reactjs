// src/UserProfile.jsx
import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '2px solid gray', padding: '15px', margin: '15px', borderRadius: '10px', backgroundColor: '#f0f8ff' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{userData.name}</h2>
      <p>Email: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{userData.email}</span></p>
    </div>
  );
}

export default UserProfile;
