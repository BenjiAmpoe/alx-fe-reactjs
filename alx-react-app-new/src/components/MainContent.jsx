// src/components/MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#e6f2ff',
      minHeight: '200px',
      margin: '10px 0'
    }}>
      <h2 style={{ color: '#004080', textAlign: 'center' }}>Welcome to My Cities Guide</h2>
      <p style={{ lineHeight: '1.6', color: '#333', textAlign: 'justify' }}>
        Here you will find information about some of my favorite cities around the world. 
        Explore the culture, attractions, and special tips for visiting.
      </p>
    </main>
  );
}

export default MainContent;
