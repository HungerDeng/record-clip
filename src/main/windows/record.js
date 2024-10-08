const path = require('node:path');
const { BrowserWindow } = require('electron');
const createRecordWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 400, // 设置最小高度
    maxHeight: 800, // 设置最大高度
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, '..', '..', 'render', 'clip', 'preload.js'),
    },
  });

  // 设置只允许垂直方向调整大小
  mainWindow.setResizable(true);
  mainWindow.setMinimumSize(800, 400);
  mainWindow.setMaximumSize(800, 800);

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '..', '..', 'render', 'clip', 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  return mainWindow;
};

module.exports = {
  createRecordWindow,
};