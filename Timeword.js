const { hours, minutes } = require("./TimewordSetup");

const timeToWords = inputTime => {
    inputTime = inputTime.split(':');
    const inputHour = inputTime[0];
    const inputMinute = inputTime[1];
    let timeIntoWords;
    
    if (inputHour === '00' && inputMinute === '00') return 'midnight';
    if (inputHour === '12' && inputMinute === '00') return 'noon';
    if (inputHour === '00' && parseInt(inputMinute) > 0) return `twelve ${minutes[inputMinute]} AM`;

    if (parseInt(inputHour) > 0 && inputMinute === '00') {
        timeIntoWords = `${hours[inputHour]} o'clock`;
    } else {
        timeIntoWords = `${hours[inputHour]} ${minutes[inputMinute]}`;
    };

    return parseInt(inputHour) < 12 ? `${timeIntoWords} AM` : `${timeIntoWords} PM`;
};

console.log(timeToWords('23:23'));


