// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const isDev =  require('electron-is-dev');
app.dock.hide()          // 画面を切り替えても最前面に表示するために必要

function createMessageWindow (file) {
  const mainWindow = new BrowserWindow({
    frame: true,
    show: true,
    transparent: true,
    resizable: false,
    hasShadow: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    } //nodejsのAPIにブラウザで呼び出すjsがアクセスできるようにするconf
  })

  mainWindow.loadFile(file)

  // 他で立ち上げてるプロセスにアクセスすることもできる。
  // if (isDev) {
  //   mainWindow.loadURL('http://localhost:3000/index.html');
  // } else {
  //   // 'build/index.html'
  //   mainWindow.loadURL(`file://${__dirname}/../index.html`);
  // }
  // 全画面表示
  mainWindow.setSimpleFullScreen(true);
  // ワークスペース（デスクトップ）を移動しても表示される
  mainWindow.setVisibleOnAllWorkspaces(true)
  // 他のアプリの画面のマウスイベントを規制する
  mainWindow.setIgnoreMouseEvents(true);
}

function createWindow () {
  const mainWindow = new BrowserWindow({
    frame: true,
    show: true,
    resizable: false,
    hasShadow: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
    } //nodejsのAPIにブラウザで呼び出すjsがアクセスできるようにするconf
  })

  // // 全画面表示0
  mainWindow.loadFile('./initializeWindow/index.html')
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

ipcMain.handle("genBrowserNiconico", () => createMessageWindow('niconico/index.html'));
ipcMain.handle("genBrowserPoco", () => createMessageWindow('poco/index.html'));

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
