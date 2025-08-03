import Header from "./(components)/Header";
import Mainpage from "./(components)/Mainpage";
import Footer from "./(components)/Footer";
import React from 'react';

export default function Home() {
  return (
    <div  className="home-container">
      <Header />
      <Mainpage />
      <Footer />
    </div>
  );
}
