"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';

function GradientComponent() {
  return (
    <svg className="absolute left-0 top-0 right-99 z-[-1]" viewBox="0 0 800 800">
      <defs>
        <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse rx="127.5" ry="184.5" cx="58.48854527148316" cy="363.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
      </g>
    </svg>
  );
}
const greetings = ["வணக்கம்","Hello", "Hallo", "Bonjour","Γειά σου"]; // English, German, French, Tamil

const quotes = [
  "Making Computers Think & Reason, So You Don't Have To.",
  "Turning Coffee into Code and Algorithms into Answers.",
  "Breathing Life into Data, One Byte at a Time.",
  "Because Magic is Just Science We Don’t Understand Yet.",
  "Teaching Computers to Overthink Since 2021.",
  "Decoding the Universe, One Neural Network at a Time.",
];

const Hero: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 2000); // Change quote every 2 seconds

    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greetings.length);
    }, 2000); // Change greeting every 2 seconds

    return () => {
      clearInterval(quoteInterval);
      clearInterval(greetingInterval);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fullNameElement = document.querySelector('.full-name');
      const shortNameElement = document.querySelector('.short-name');
      if (fullNameElement && shortNameElement) {
        fullNameElement.classList.add('hidden');
        shortNameElement.classList.add('visible');
      }
    }, 2000); // Wait for 3 seconds before changing the names
  }, []);

  return (
    <div id='hero' className="relative h-screen flex items-center justify-center hdr ">
      <GradientComponent />

      <div className="text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-8xl font-bold mb-10">
          <span className='animated-gradient'>{greetings[currentGreeting]}!</span>
          <span className='animated-gradient'>
            <br />
            I'm <span className='name-container'>
              <span className='animated-gradient full-name'>Sandhanakrishnan</span>
              <span className='animated-gradient short-name'>Sandy</span>
            </span>
          </span>
        </h1>
        <div>
          <p className="text-xl md:text-4xl mb-8 text-[#c7a0ec] text-center font-bold">
            AI Engineer & Researcher
            <br />
            <span className='text-[30px] font-normal animated-gradient'>
              {quotes[currentQuote]}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <span className="scroll-indicator block h-6 w-4 rounded-full bg-transparent border ml-6"></span>
      </div>
    </div>
  );
};

export default Hero;
