/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num == 0)
        return 'Zero';

    const UNITS = [, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const TEENS = [, 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const TENS = [, 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const HUNDREDS = 'Hundred';
    const MAGNITUDE = [, 'Thousand', 'Million', 'Billion'];

    let revArr = num.toString()
        .padStart(~~((num.toString().length + 3) / 3) * 3, '0')
        .split(/(.{3})/)
        .filter((_, i) => i % 2)
        .reverse();
    let result = [];
    for (let i = 0; i < revArr.length; i++) {
        let n = parseInt(revArr[i]);

        if (i != 0 && n != 0)
            result.push(MAGNITUDE[i]);

        let unit = n % 10;
        if (unit != 0)
            result.push(UNITS[unit]);

        let ten = ~~(n / 10) % 10;
        if (ten == 1) {
            if (unit == 0)
                result.push(TENS[ten]);
            else {
                result.pop();
                result.push(TEENS[unit]);
            }
        }
        else if (ten != 0)
            result.push(TENS[ten]);

        let h = ~~(n / 100);
        if (h != 0)
            result.push(HUNDREDS, UNITS[h]);
    }
    return result.reverse().join(' ');
};
