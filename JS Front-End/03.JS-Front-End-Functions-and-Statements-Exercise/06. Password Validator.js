function validate(password) {
    let isVaild = true;

    let passwordLength = (password.length >= 6 && password.length <= 10);
    if (!passwordLength) {
        console.log('Password must be between 6 and 10 characters');
        isVaild = false;
    }

    let onlyLettersAndDigits = /^[A-Za-z0-9]*$/.test(password);
    if (!onlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
        isVaild = false;
    }
    
    let charArr = password.split("");
    charArr = charArr.filter(x => /^[0-9]*$/.test(x));
    let atLeastTwoDigits = charArr.length >= 2;
    if (!atLeastTwoDigits) {
        console.log('Password must have at least 2 digits');
        isVaild = false;
    }
    
    if (isVaild) {
        console.log('Password is valid');
    }
}
validate('logIn')