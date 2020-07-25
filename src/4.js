const LeapYear = year => new Date(year, 1, 29).getDate() === 29 ? true : false;
module.exports = LeapYear