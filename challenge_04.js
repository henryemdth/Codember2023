import { getData } from './service/fetch.js'

getData('files_quarantine').then(data => getRealFileByNumber(data, 33));

function getRealFileByNumber(data, number){

    const arrayFiles = data.split('\n');
    const realFiles = arrayFiles.filter(fileData => {
        const [file, checksum] =fileData.split('-')
        const fileString = Array.from(file);
        const realFile = fileString.filter(character => {
            const lastIndex = fileString.lastIndexOf(character);
            const index = fileString.indexOf(character);
            return lastIndex === index;
        });
        return realFile.join('') === checksum;
    });
    console.log(realFiles[number-1].split('-')[1]);
}
