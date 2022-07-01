import path from "path";
import {app, BrowserWindow} from "electron";

async function createWindow()
{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: (process.env.ELECTRON_NODE_INTEGRATION as unknown) as boolean,
            preload: path.resolve(__dirname, "preload.js")
        }
    });

    if (app.isPackaged) {
        await win.loadFile(path.join(__dirname, "../index.html"));
    } else {
        const url = process.env["VITE_DEV_SERVER_URL"];

        if (!url) {
            throw new Error("Missing environment variable: VITE_DEV_SERVER_URL.");
        }

        await win.loadURL(url);
        win.webContents.openDevTools();
    }
}

app.whenReady().then(createWindow);
