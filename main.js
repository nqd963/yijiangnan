const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

// Keep a global reference to prevent GC
let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: '忆江南·清秋晚',
    backgroundColor: '#1a1a1e',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      // Enable all web features needed by the game
      webSecurity: true
    }
  });

  // Load the game
  mainWindow.loadFile('index.html');

  // Show window when ready (avoids white flash)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Remove menu bar for a cleaner game experience
  mainWindow.setMenuBarVisibility(false);

  // Handle closed window
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Dev tools hotkey (F12)
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F12' && input.type === 'keyDown') {
      mainWindow.webContents.toggleDevTools();
    }
  });
}

// App lifecycle
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // On Windows, quit explicitly (no macOS "dock" behavior)
  app.quit();
});

app.on('activate', () => {
  // macOS: re-create window when dock icon clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
