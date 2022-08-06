const palindromes = function (word) {
    
    let newWord= '';
    word= word.toLowerCase();
    word= word.replaceAll('.','');
    word= word.replaceAll(',','');
    word= word.replaceAll(' ','');
    word= word.replaceAll('!','');
    memoryWord=word;
    lengthh=word.length;
    for (i = 1;i<=lengthh;i++){
    newWord += word.substr(-1);
word=word.slice(0,-1);

    }
    return (newWord===memoryWord) ? true : false;

}
// Do not edit below this line
module.exports = palindromes;
