import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/render/styles.css';  // 确保这个路径是正确的,包含了Tailwind的样式

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);