const passwordBox = document.getElementById("Password");
//length variable of the generated password
const length =15;

//Password Dataset
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+{}[];:'\|?/.,";

const allChars = upperCase + lowerCase + number + symbol;

//Password Generator Function
function passwordGenerator(){
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];

    while(length > password.length){
        password+= allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password;
}

//Copy Password from the Copy Password Icon
function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(password)
//    document.execCommand('copy');
    alert("Password is copied to Clipboard");
}