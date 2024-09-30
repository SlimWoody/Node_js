function firstCharacterUppercase (str) {
    let chars = str.split('');
    let firstChar = chars[0].toUpperCase();
    chars.splice(0, 1, firstChar);
    let newStr = chars.join('');
    return console.log(newStr);;
}

function allUpperCaseCharExceptFist (str) {
    let chars = str.split('');
    
    let newChars = chars.map((char, index) => {
        if(index === 0){
            return char.toLowerCase();
        }else{
            return char.toUpperCase()
        }
    })

    const newStr = newChars.join('');
    return console.log(newStr);
}

module.exports = {firstCharacterUppercase, allUpperCaseCharExceptFist};