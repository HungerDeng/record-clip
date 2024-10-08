const { BrowserWindow } = require('electron');
const { loadRoute, preloadPath } = require('../utils/routes');
const { ipcMain } = require('electron');

const routeName = 'device-choices';
let devicesWindow = null;

const createDeviceChoicesWindow = () => {
  devicesWindow = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false,
    transparent: true,
    show: false,
    resizable: false,
    fullscreenable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: preloadPath(routeName),
    }
  });

  loadRoute(devicesWindow, routeName, { openDevTools: false });
  return devicesWindow;
}

ipcMain.on('show-devices', (event, devices, position) => {
  if (!devicesWindow) createDeviceChoicesWindow();
  devicesWindow.setPosition(position.x, position.y);
  devicesWindow.webContents.send('update-devices', devices);
  devicesWindow.show();
});

ipcMain.on('hide-devices', () => {
  if (devicesWindow) devicesWindow.hide();
});

module.exports = {
  createDeviceChoicesWindow,
};
