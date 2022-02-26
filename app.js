
// CLEAR CONSOLE
console.clear();

// OWN MODULES
// COLOR CONFIG
require('./config/colors');
// MENU MADE WITH inquirer
const { 
    pause,
    showInput,
    showConfirm,
    showMainMenu
} = require('./helpers/inquirer');

// MAIN FUNCTION
const main = async () => {

    let opt;
    
    do{

        // SHOW MENU
        opt = await showMainMenu();

        switch( opt ){

            case 0:

                console.log( `¡Vuelve pronto!`.info );

                break;

        }

        // PAUSE
        if( opt !== 0 ) await pause();

    }while( opt !== 0 )

};

// CALL MAIN
main();