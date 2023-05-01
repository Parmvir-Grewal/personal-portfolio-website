import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  window.addEventListener("mousemove",function(e){
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
   }, {duration: 500, fill: "forwards"})
  });