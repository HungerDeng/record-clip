import React, { useState, useEffect } from 'react';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/render/components/ui/dropdown-menu';

function App() {
  const [isListening, setIsListening] = useState(false);
  const [microphoneDevices, setMicrophoneDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    // Get available microphone devices
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        console.log(devices);
        const mics = devices.filter(device => device.kind === 'audioinput');
        setMicrophoneDevices(mics);
        if (mics.length > 0) {
          setSelectedDevice(mics[0]);
        }
      })
      .catch(err => console.error("Error enumerating devices:", err));
  }, []);

  const toggleMicrophone = () => {
    setIsListening(!isListening);
  };

  const selectDevice = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* 自定义标题栏 */}
      <div className="flex items-center justify-end bg-gray-800 text-white h-8 px-2 drag">
        <div className="flex items-center space-x-4 no-drag">
          <button className="hover:bg-gray-700 px-2 py-1 rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="hover:bg-gray-700 px-2 py-1 rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="hover:bg-gray-700 px-2 py-1 rounded">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-grow bg-gray-800 text-white p-4">
        {/* Resolution display */}
        <div className="flex justify-between mb-6">
          <span className="bg-gray-700 px-2 py-1 rounded">1080p</span>
          <span className="bg-gray-700 px-2 py-1 rounded">1080p</span>
        </div>
        
        {/* Record button */}
        <div className="flex justify-center mb-6">
          <button className="w-24 h-24 bg-red-600 rounded-full focus:outline-none hover:bg-red-700"></button>
        </div>
        
        {/* Control buttons */}
        <div className="flex justify-between">
          <div className="relative flex items-center hover:bg-gray-700 rounded-md p-2">
            <button 
              className={`flex flex-col items-center ${isListening ? '' : 'opacity-50'}`}
              onClick={toggleMicrophone}
            >
              <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-xs">{selectedDevice ? selectedDevice.label.slice(0, 10) : 'Microphone'}</span>
            </button>
            {isListening && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="ml-1">▼</button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {microphoneDevices.map((device) => (
                    <DropdownMenuItem
                      key={device.deviceId}
                      onSelect={() => selectDevice(device)}
                    >
                      {device.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <button className="flex flex-col items-center opacity-50">
            <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Camera off</span>
          </button>
          
          <button className="flex flex-col items-center opacity-50">
            <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Screen off</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;