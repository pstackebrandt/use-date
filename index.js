// Get hours from birth until school
let birthdayMSec = (new Date("2000-03-24")).getTime();
let firstDayInSchoolMSec = (new Date("2008-09-01")).getTime();
let timeUntilSchoolMSec = firstDayInSchoolMSec - birthdayMSec;
console.log(timeUntilSchoolMSec / 1000 / 60 / 60);