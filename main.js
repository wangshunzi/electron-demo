const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
    height: 600,
  });
  // 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
  win.loadFile("index.html");

  const content = win.webContents;
  // console.log("---", content);
};

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle("ping", () => {
    
    return "pong";
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
