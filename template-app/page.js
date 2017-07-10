const {ipcRenderer} = require('electron')

function page(arg){
    // console.log(arg)
    ipcRenderer.send('load-page', arg);
}