import React from 'react';
import Button from './Button.js';
import Profile from './Profile.js';
import Name from './Name';
import unsplash from'./unsplash.jpg';
import './App.css';

function App() {
  return (
    <>

      <h1>Profile</h1>

      <Profile  src={unsplash}  style={{width:'100px' , height:'100px'}}/>

      <Name names='Selima Haj Slimene' > </Name>

      <Button name='LinkedIn' onSimpleClick={()=>{window.location='https://www.linkedin.com/'}}/>
      <Button name='Facebook' onSimpleClick={()=>{window.location='https://www.facebook.com/'}}/ >


     

        
        </>

  
  );
}

export default App;
