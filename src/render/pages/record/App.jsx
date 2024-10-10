import React, { useState, useEffect, useCallback } from 'react';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/render/components/ui/dropdown-menu';
import { Button } from '@/render/components/ui/button';
import { EnvelopeOpenIcon, SlashIcon } from '@radix-ui/react-icons';

function App() {
  const [audioInputDevices, setAudioInputDevices] = useState([]);
  const [videoInputDevices, setVideoInputDevices] = useState([]);

  useEffect(() => {
    // Get available microphone devices
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        const audioInputs = devices.filter(device => device.kind === 'audioinput');
        setAudioInputDevices(audioInputs);
        const videoInputs = devices.filter(device => device.kind === 'videoinput');
        setVideoInputDevices(videoInputs);
      })
      .catch(err => console.error("Error enumerating devices:", err));
  }, []);

  return (
    <div className="flex flex-col h-full bg-gray-500 overflow-hidden scrollbar-hide">
      {/* 自定义标题栏 */}
      <div className="flex items-center justify-end text-white h-8 px-2 drag">
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
      <div className="flex-grow flex flex-col text-white p-4 pt-1">
        
        {/* Record button */}
        <div className="flex justify-center mb-6">
          <button className="w-24 h-24 bg-red-600 rounded-full focus:outline-none hover:bg-red-700"></button>
        </div>
        
        {/* Control buttons */}
        <div className="flex justify-between items-stretch">
          {MButtom({
            onClickCb: (newOpened, device) => {
              if (newOpened) {
                console.log('打开', device);
              } else {
                console.log('关闭', device);
              }
            },
            unopenText: 'Microphone off',
            supporteDevices: audioInputDevices,
          })}

          {MButtom({
            onClickCb: (newOpened, device) => {
              if (newOpened) {
                console.log('打开', device);
              } else {
                console.log('关闭', device);
              }
            },
            unopenText: 'Camera off',
            supporteDevices: videoInputDevices,
          })}

          {
            MButtom({
              onClickCb: (newOpened, device) => {
                if (newOpened) {
                  console.log('打开', device);
                } else {
                  console.log('关闭', device);
                }
              },
              unopenText: 'Screen off',
            })
          }


          {/* <button className="flex flex-col items-center opacity-50 hover:bg-gray-700 rounded-md p-2 px-4">
            <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Camera off</span>
          </button> */}
          
          {/* <button className="flex flex-col items-center opacity-50 hover:bg-gray-700 rounded-md p-2 px-4">
            <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Screen off</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;


function MButtom({onClickCb, supporteDevices, unopenText, }) {

  const [isOpened, setIsOpened] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    if (supporteDevices && supporteDevices.length > 0) {
      setSelectedDevice(supporteDevices[0]);
    }
  }, [supporteDevices]);

  const onClickHandler = useCallback(() => {
    const newOpened = !isOpened;
    setIsOpened(newOpened);
    onClickCb(newOpened, selectedDevice);
  }, [isOpened, selectedDevice]);

  const onSelectHandler = useCallback((device) => {
    setSelectedDevice(device);
    onClickCb(isOpened, device);
  }, [isOpened, selectedDevice]);

  return (
    <div className="relative flex max-w-[30%]">
      <Button variant="ghost" className={`flex flex-col h-fit hover:bg-gray-600 overflow-hidden ${isOpened ? '' : 'opacity-50'}`} onClick={onClickHandler}>
        <SlashIcon className="mr-2 h-8 w-8" />
        {!isOpened ? unopenText : selectedDevice.label}
      </Button>

    {/* <button
      className={`flex flex-col items-center ${isOpened ? '' : 'opacity-50'}`}
      onClick={onClickHandler}
    >
      <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
      <span className="text-xs text-nowrap text-ellipsis">{!isOpened ? unopenText : selectedDevice.label}</span>
    </button> */}
    {isOpened && (
      <div className="absolute right-0 top-0 h-full w-1/5 flex items-center justify-center rounded-md hover:bg-gray-700">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-1">▼</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {supporteDevices.map((device) => (
              <DropdownMenuItem
                key={device.deviceId}
                onSelect={() => {
                  onSelectHandler(device)
                }}
              >
                {device.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )}
  </div>
  );
}
