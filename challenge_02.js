import { getData } from './service/fetch.js'

getData('message_02').then(data => applyMiniCompiler(data));


// "#" Increases the numeric value by 1.
// "@" Decreases the numeric value by 1.
// "*" Multiplies the numeric value by itself.
// "&" Prints the current numeric value.
function applyMiniCompiler(dataF) {
    let data = dataF.trim();
    let value = 0;
    let message = '';
    for(let index = 0; index < data.length; index++){
        switch (data[index]) {
            case '#':
                value++;
                break;
            case '@':
                value--;
                break;
            case '*':
                value *= value;
                break;
            case '&':
                message += value;
                break;
            default:
                break;
        }

    }
    console.log(message);
}

