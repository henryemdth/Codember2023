import { getData } from './service/fetch.js'

getData('database_attacked').then(data => getInvalidLetterUsers(data));

function getInvalidLetterUsers(data){
    let code = '';
    const arrayData = data.split('\n');
    arrayData.forEach(dataUser => {
        const [id, user, email, age, locate] = dataUser.split(',');
        console.log(id, user, email, age, locate);
        if(
            (!isAlphanumeric(id)) || 
            (!isAlphanumeric(user)) || 
            (!isValidEmail(email)) ||
            (age !== '' && (!isNumber(age))) ||
            (locate !== '' && (!isString(locate)))
            ){
            code+=Array.from(user)[0];
        }
    });

    console.log(code);
}

function isValidEmail(email){
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/g;
    return regex.test(email);
}

function isAlphanumeric(string){
    const regex = /^[a-zA-Z0-9]+$/g;
    return regex.test(string);
}

function isNumber(number){
    return !isNaN(Number(number));
}

function isString(string){
    return /^[\s\w]+$/g.test(string);
}