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
  // , resizable:false
  mainWindow = new BrowserWindow({minWidth: 800, minHeight: 600}) 
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


ipcMain.on('load-page', (event, arg) => {

  // console.log(arg);
    mainWindow.loadURL(require('url').format({
    pathname: path.join(__dirname, arg),
    protocol: 'file:',
    slashes: true
  }))
});



const PY_DIST_FOLDER = 'gamma'
// const PY_FOLDER = 'pycalc'
const PY_MODULE = 'gamma'


// const guessPackaged = () => {
//   const fullPath = path.join(__dirname, PY_DIST_FOLDER)
//   return require('fs').existsSync(fullPath)
// }

const getScriptPath = () => {
  // if (!guessPackaged()) {
  //   return path.join(__dirname, PY_FOLDER, PY_MODULE + '.py')
  // }
  if (process.platform === 'win32') {
    return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE + '.exe')
  }
  return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE)
}


ipcMain.on('run', (event,arg1,arg2) => {
  console.log(arg1)
  console.log(arg2)
  let script = getScriptPath();

  // console.log(arg)  // prints "ping"
  // event.sender.send('asynchronous-reply', 'pong')
  console.log('hi')
  console.log(script)
  let py=require('child_process').execFile(script,[arg2,arg1])
  console.log('start')
  py.stdout.on('data', (data) => {

    console.log(`stdout: ${data}`);
    mainWindow.webContents.send('ping', data);

  });
  console.log('hi')
  // py.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // });
  console.log('bye')
  
});
