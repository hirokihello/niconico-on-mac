const { ipcRenderer } = require('electron');

window.genBrowserNiconico = () => (ipcRenderer.invoke('genBrowserNiconico'));
window.genBrowserPoco = () => (ipcRenderer.invoke('genBrowserPoco'));