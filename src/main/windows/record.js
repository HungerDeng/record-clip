const path = require('node:path');
const { BrowserWindow } = require('electron');
const createRecordWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '..', '..', 'render', 'clip', 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '..', '..', 'render', 'clip', 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  return mainWindow;
};

module.exports = {
  createRecordWindow,
};