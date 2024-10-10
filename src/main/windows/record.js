const { BrowserWindow } = require('electron');
const { loadRoute, preloadPath } = require('../utils/routes');

const routeName = 'record';

const createRecordWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 300,
    width: 400,
    // minWidth和maxWidth一样，都设置为800，表示宽度不允许调整
    // minWidth: 400,
    // maxWidth: 400,
    useContentSize: true,
    resizable: false,
    fullscreenable: false,
    maximizable: false,
    titleBarStyle: 'hidden',
    // 内容保护，防止其他应用截取录屏内容。实测无效，用其他录屏软件/截图软件仍然会录取到这部分内容。
    contentProtection: true,
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