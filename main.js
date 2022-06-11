// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

app.dock.hide()          // 画面を切り替えても最前面に表示するために必要

function createWindow () {
  const mainWindow = new BrowserWindow({
    frame: true,
    show: true,
    transparent: true,
    resizable: false,
    hasShadow: false,
    alwaysOnTop: true,
    nodeIntegration: true //nodejsのAPIにブラウザで呼び出すjsがアクセスできるようにするconf
})
  // 全画面表示0
  mainWindow.setSimpleFullScreen(true);
  mainWindow.loadFile('index.html')
  mainWindow.setVisibleOnAllWorkspaces(true)      // ワークスペース（デスクトップ）を移動しても表示される

  // 他のアプリの画面のマウスイベントを規制する
  mainWindow.setIgnoreMouseEvents(true);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
