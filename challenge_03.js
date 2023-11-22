import { getData } from './service/fetch.js'

getData('encryption_policies').then(data => getInvalid(data, 13));

function getInvalid(data, number){
    const dataParsed = data.split('\n');
    let invalid = 0;
    let valid = 0;
    dataParsed.forEach(data =>{
        const dataSplit = data.split(' ');
        const [min, max] = dataSplit[0].split('-');
        const key = dataSplit[1][0];
        const code = dataSplit[2];
        const count = Array.from(code).filter(char => char === key).length;
        (count >= min && count <= max ? valid++ : invalid++);
        if(invalid === number){
            console.log(code);
        }
    });
}
