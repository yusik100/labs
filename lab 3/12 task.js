const random = (min, max) => {
    if (!max) {
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(random(0, 10));

const generateKey = (length, characters) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() *  characters.length);
        result += characters[randomIndex];
    }
return result;
}

const characters = '123456789sos1234';
const key = generateKey(9, characters);
console.log(key);