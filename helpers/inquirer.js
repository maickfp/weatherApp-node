
// OTHERS
const inquirer = require('inquirer');

// PRINT TITLE ON CONSOLE
const showTitle = () => {

    // CLEAR CONSOLE
    console.clear();

    // SHOW TITLE
    console.log('============================='.menuTitleLine);
    console.log('         WEATHER APP         '.menuTitleText);
    console.log('=============================\n'.menuTitleLine);

};

// PAUSE METHOD
const pause = async () => {

    console.log('\n');

    return await inquirer.prompt({
        type: 'input',
        name: 'pause',
        message: `Presione ${ 'ENTER'.attention } para continuar`
    });

};

const mainUserMenu = {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    loop: false,
    choices: [
        { value: '1', name: `${'1.'.menuOptionNum} Crear tarea` },
        { value: '0', name: `${'0.'.menuOptionNum} Salir` }
    ]
};

const showMainMenu = async () => {

    
    showTitle();

    const { option } = await inquirer.prompt( mainUserMenu );

    return option;

};

const showInput = async ( message ) => {

    const { value } = await inquirer.prompt({
        type: 'input',
        name: 'value',
        message,
        validate: ( value ) => {

            if( value.trim().length === 0 ){
                return 'Por favor ingrese un valor'.error
            }

            return true;

        }
    });

    return value;

};

const showConfirm = async ( message ) => {

    const { confirm } = await inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message
    });

    return confirm;

};

module.exports = {
    pause,
    showInput,
    showConfirm,
    showMainMenu
};