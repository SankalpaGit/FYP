import React from 'react';
import Navbar from '../components/nav/NavBar';
import Footer from '../components/nav/Footer';

const PatientLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PatientLayout;
