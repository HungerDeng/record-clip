const { BrowserWindow } = require('electron');
const { loadRoute, preloadPath } = require('../utils/routes');

const routeName = 'record';

const createRecordWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    // minWidth和maxWidth一样，都设置为800，表示宽度不允许调整
    // minWidth: 400,
    // maxWidth: 400,
    useContentSize: true,
    resizable: false,
    fullscreenable: false,
    maximizable: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: preloadPath(routeName),
    },
  });

  loadRoute(mainWindow, routeName, { openDevTools: false });
  return mainWindow;
};

module.exports = {
  createRecordWindow,
};