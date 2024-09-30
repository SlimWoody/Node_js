function firstCharacterUppercase (str) {
    if (!str) return ''; 
    return str[0].toUpperCase() + str.slice(1);
}

function allUpperCaseCharExceptFist (str) {
    if (!str) return '';
    return str[0].toLowerCase() + str.slice(1).toUpperCase();
}

module.exports = {firstCharacterUppercase, allUpperCaseCharExceptFist};