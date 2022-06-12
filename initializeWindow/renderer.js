// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// const electron = require('electron')
// import electron from "electron"

// console.log(window.customRenderMethod)
// window.customRenderMethod();
// window.close()

console.log("initialize window renderer loaded")

document.getElementById("submit_button").addEventListener("click", () => {
  url = document.getElementById("url").value;
  ui_type = document.getElementById("ui_type").value;

  console.log({url, ui_type})
  console.log("submit!!!!")
})