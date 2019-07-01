import React from 'react';
import Header from './components/Header';
import './App.css';
import CarBookingFlow from './components/CarBookingFlow';
import Dashboard from './components/Dashboard';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CarBookingFlow />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
