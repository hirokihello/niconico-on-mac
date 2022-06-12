const { ipcRenderer } = require('electron');

window.customRenderMethod = async () => {
  return ipcRenderer.invoke('custom-ready');
};
console.log("preloaded")
console.log("hoge")