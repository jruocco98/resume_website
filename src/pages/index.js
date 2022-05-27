import React from 'react';
import './content.css'; 
const Home = () => {
  return (
    <div
      style={{            
        color: '#c2c2c2',
        display: 'block',
        justifyContent: 'Center',
        alignItems: 'Right',
        width: '50vw',
        height: '100%',
        marginLeft: '29%',
        marginTop:'90px',
        background: 'rgba(0, 0, 0, 0.95)',
        padding: '30px',                
        paddingRight: '20px',
        border: '2px solid black'
      }}
    >
      <div className="header">
        <h1>Bio</h1>
      </div> 
    </div>
  );
};
  
export default Home;