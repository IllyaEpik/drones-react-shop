import React from 'react';
import Header from './compunents/Header/Header';
import Footer from './compunents/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '60vh' }} />
      <Footer />
    </>
  )
}

export default App
