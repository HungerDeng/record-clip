const { app } = require('electron');

/**
 * Loads a route in the given window.
 * 
 * @param {Electron.BrowserWindow} window - The Electron BrowserWindow instance.
 * @param {string} routeName - The name of the route to load.
 * @param {Object} [options={}] - Additional options.
 * @param {boolean} [options.openDevTools] - Whether to open DevTools.
 */
const loadRoute = async (window, routeName, options = {}) => {
  const { is } = await import('electron-util');
  const { openDevTools } = options;
  if (is.development) {
    window.loadURL(`http://localhost:8000/${routeName}`);
    window.webContents.openDevTools({ mode: 'detach' });
  } else {
    window.loadFile(`${app.getAppPath()}/src/render/pages/${routeName}/index.html`);
    if (openDevTools) {
      window.webContents.openDevTools({ mode: 'detach' });
    }
  }
};

/**
 * 获取预加载脚本的路径
 * @param {string} routeName - 路由名称
 * @returns {string} 预加载脚本的路径
 */
const preloadPath = (routeName) => {
  return `${app.getAppPath()}/src/render/pages/${routeName}/preload.js`;
};

module.exports = { loadRoute, preloadPath };
