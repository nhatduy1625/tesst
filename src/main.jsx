import React from 'react';
import ReactDOM from 'react-dom/client';
import WindowSizeDisplay from './components/size';
import LazyLoadVideo from './components/lazy';

function App() {
  return (
    <div>
      <WindowSizeDisplay />
      <LazyLoadVideo />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);