import React from 'react';
import Review from './Review';
import './style.css';

export default function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Review</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}
