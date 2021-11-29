const { app, BrowserWindow } = require('electron');
const path = require('path')

function createWindow () {
	const win = new BrowserWindow({
		width: 1240,
		height: 720,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			contextIsolation: false
		},
		transparent: true,
		titleBarStyle: 'hidden',
		// titleBarOverlay: {
		// 	color: '#2f3241',
		// 	symbolColor: '#74b1be'
		// }
	})

	process.stdin.resume();

	win.loadFile('index.html');
	win.webContents.openDevTools();
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
})


