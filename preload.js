const { contextBridge } = require('electron');

// Expose a minimal API to the renderer (game) process
// This runs in a secure context-isolated scope
contextBridge.exposeInMainWorld('__electron', {
  isElectron: true,
  platform: process.platform
});
