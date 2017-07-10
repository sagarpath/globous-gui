const electron = require('electron')
const app = electron.app  // Module to control application life.
const BrowserWindow = electron.BrowserWindow  // Module to create native browser window.
const path = require('path')
const {ipcMain} = require('electron')

require('electron-reload')(__dirname);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(require('url').format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


// let pyProc = null
// let pyPort = null

// const selectPort = () => {
//   pyPort = 4242
//   return pyPort
// }


// // the improved version
// const createPyProc = () => {
//   let script = getScriptPath()
//   let port = '' + selectPort()
//   // console.log(guessPackaged())
//   if (guessPackaged()) {
//     pyProc = require('child_process').execFile(script, [port])
//   } else {
//     pyProc = require('child_process').spawn('python', [script, port])
//   }

//   if (pyProc != null) {
//     //console.log(pyProc)
//     console.log('child process success on port ' + port)
//   }
// }


// const exitPyProc = () => {
//   pyProc.kill()
//   pyProc = null
//   pyPort = null
// }

// app.on('ready', createPyProc)
// app.on('will-quit', exitPyProc)
// // console.log('hello')
// const PY_DIST_FOLDER = 'pycalcdist'
// const PY_FOLDER = 'script'
// const PY_MODULE = 'api' // without .py suffix

// const guessPackaged = () => {
//   const fullPath = path.join(__dirname, PY_DIST_FOLDER)
//   return require('fs').existsSync(fullPath)
// }

// const getScriptPath = () => {
//   // console.log('inside getScriptPath')
//   if (!guessPackaged()) {
//     return path.join(__dirname, PY_FOLDER, PY_MODULE + '.py')
//   }
//   if (process.platform === 'win32') {
//     return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE + '.exe')
//   }
//   return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE)
// }


ipcMain.on('load-page', (event, arg) => {

  // console.log(arg);
    mainWindow.loadURL(require('url').format({
    pathname: path.join(__dirname, arg),
    protocol: 'file:',
    slashes: true
  }))
});