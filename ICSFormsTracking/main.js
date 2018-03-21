const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu, ipcMain, remote, dialog} = electron;

let mainWindow, formsWindow;

app.on('ready', function(){
    // create starter page
    mainWindow = new BrowserWindow();
    
    // load index.html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.maximize();
    mainWindow.on('closed', () => {
        app.quit();
    });

    // use custom menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemp);
    Menu.setApplicationMenu(mainMenu);

});

// Menu Template
const mainMenuTemp = [
    {
    label: 'File',
    submenu: [
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Help',
        submenu: [
            {
                label: 'Version Info'
            },
            {
                label: 'Credits'
            }
        ]
    }
];

/*
// catches btn click
ipcMain.on('btn:click', function(e, arg) {
    
    if(arg == 'formsMenu'){
        createFormsWin();
    }
    
});

// Handle Forms Window
function createFormsWin(){
    formsWindow = new BrowserWindow({width: 500, title: 'Forms'});

    // load into html
    formsWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'forms.html'),
        protocol: 'file',
        slashes: true
    }));

    formsWindow.on('close', () => {
        formsWindow = null;
    });
}
*/

// ------------------------------------------------- 
// if mac, add empty obj to mainMenu
if(process.platform == 'darwin'){
    mainMenuTemp.unshift({});
}

// add dev tool items if not in prod
if(process.env.NODE_ENV !== 'production'){
    mainMenuTemp.push({
        label: 'Dev Tools',
        submenu: [
            {
                label: 'Tog DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}