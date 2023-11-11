import { getData } from './service/fetch.js';

getData('message_01').then(data => getMessage(data))

const getMessage=(data)=>{
    const dataParsed = data.toLowerCase().trim();
    const map = new Map();
     dataParsed.split(' ').forEach(data =>
        map.set(data,(map.get(data) || 0) + 1)
    );
    let message = '';
    map.forEach((value, key)=> {
       message += key + value;
    })
    console.log(message);
};
