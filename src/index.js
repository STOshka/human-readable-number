var digits = ['one','two','three','four','five','six','seven','eight','nine','ten',
    'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
 
module.exports = function toReadable (number) {
    if (number == 0) return 'zero';
    let numberArray = [];
    const _hundred = Math.floor(number / 100);
    if (_hundred) {
        numberArray.push(digits[_hundred - 1], 'hundred');
    }
    const _number = number % 100;
    if (_number >= 10 && _number <= 19) {
        numberArray.push(digits[_number - 1]);
    } else {
        const _dg = _number % 10;
        const _tw = Math.floor(_number / 10);
        if (_tw) numberArray.push(tens[_tw - 2]);
        if (_dg) numberArray.push(digits[_dg - 1]);
    }
    return numberArray.join(' ');
}
