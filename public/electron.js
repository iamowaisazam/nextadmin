const electron = require('electron')
const path = require('path')
const { format } = require('url')


const BrowserWindow = electron.BrowserWindow
const app = electron.app

app.on('ready', () => {
  createWindow()
})


let mainWindow

function createWindow() {

  // Create the browser window.
    const {width,height} = electron.screen.getPrimaryDisplay().workAreaSize;
 
    mainWindow = new BrowserWindow({
        webSecurity: false,
        width: width,
        height: height,
        show: false,
        autoHideMenuBar: false,
    })

     const appUrl = './out/index.html';
     mainWindow.loadFile(appUrl);


    // mainWindow.loadFile(`file://${path.join('/out/index.html')}`);

    mainWindow.webContents.once('dom-ready', function () {
      mainWindow.show()
      mainWindow.maximize();
      mainWindow.webContents.openDevTools();
    });


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {  
    mainWindow = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow) // <== this is extra so commented, enabling this can show 2 windows..


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    // PHP SERVER QUIT
    app.quit();
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})