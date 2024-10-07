import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/render/styles.css';  // 确保这个路径是正确的

function App() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">💖 Hello World!</h1>
        <p className="text-xl text-gray-700">Welcome to your Electron application with React and Tailwind CSS.</p>
      </div>
    );
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);