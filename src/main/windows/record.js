const path = require('node:path');
const { BrowserWindow } = require('electron');

const createRecordWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    minHeight: 400,
    maxHeight: 400,
    // minWidth和maxWidth一样，都设置为800，表示宽度不允许调整
    minWidth: 400,
    maxWidth: 400,
    resizable: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, '..', '..', 'render', 'clip', 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, '..', '..', 'render', 'clip', 'index.html'));

  // mainWindow.webContents.openDevTools();
  return mainWindow;
};

module.exports = {
  createRecordWindow,
};