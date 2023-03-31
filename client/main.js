import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import isDev from "electron-is-dev";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const startURL = isDev
    ? "http://localhost:3080/games"
    : `file://${path.join(__dirname, "./next/server/pages/games.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("quit", () => {
  app.quit();
});
