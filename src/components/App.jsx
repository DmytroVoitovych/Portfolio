// import React from 'react';
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";


export const App = () => {
  return (
    <div
      style={{
        maxWidth: '100%',
        paddingRight: '30px',
        paddingLeft: '30px',
        backgroundColor: '#000000',      
        color: '#010101'
      }}
    >
      <>
        <Header />
      <main>
      <Hero/>
        </main>
        </>
    </div>
  );
};
