import React from 'react';
import { AppRoutes } from './Components/AppRoutes'; 
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
      <main>
      <AppRoutes />
      </main>
      
    </div>
  );
}

export default App;
