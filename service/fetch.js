async function getData(fileName) {
    return await fetch(`https://codember.dev/data/${fileName}.txt`)
    .then((response) => response.text())
}
export {getData};