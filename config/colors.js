const colors = require('colors');

colors.setTheme({
    success: ['bgGreen', 'black'],
    error: ['bgRed', 'black'],
    warning: ['bgYellow', 'black'],
    info: ['bgCyan', 'black'],

    attention: ['magenta'],

    menuTitleLine: ['green'],
    menuTitleText: ['bgGreen'],
    menuOptionNum: ['green']
});

module.exports = colors;