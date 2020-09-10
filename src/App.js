import React from 'react';
import './App.scss';
import '@fon`tawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
