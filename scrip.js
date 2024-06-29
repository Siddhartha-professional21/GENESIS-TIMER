const SECONDS = document.querySelector(".SECONDS .NUMBER");
const MINUTES = document.querySelector(".MINUTES .NUMBER");
const HOURS = document.querySelector(".HOURS .NUMBER");
const DAYS = document.querySelector(".DAYS .NUMBER");

let SECONDSVALUE = 60;
let MINUTESVALUE = 60;
let HOURSVALUE = 6;
let DAYSVALUE = 16;

const TIMEFUNCTION = setInterval(() => {
    SECONDSVALUE--;
    if (SECONDSVALUE == 0) {
        MINUTESVALUE--;
        SECONDSVALUE = 59;
        if (MINUTESVALUE == 0) {
            HOURSVALUE--;
            MINUTESVALUE = 59;
            if (HOURSVALUE == 0) {
                DAYSVALUE--;
                HOURSVALUE = 23;
                if (DAYSVALUE < 0) {
                    clearInterval(TIMEFUNCTION); 
                    SECONDSVALUE = 0;
                    MINUTESVALUE = 0;
                    HOURSVALUE = 0;
                    DAYSVALUE = 0;
                }
            }
        }
    }
    SECONDS.textContent = SECONDSVALUE < 10 ? "0" + SECONDSVALUE : SECONDSVALUE;
    MINUTES.textContent = MINUTESVALUE < 10 ? "0" + MINUTESVALUE : MINUTESVALUE;
    HOURS.textContent = HOURSVALUE < 10 ? "0" + HOURSVALUE : HOURSVALUE;
    DAYS.textContent = DAYSVALUE < 10 ? "0" + DAYSVALUE : DAYSVALUE;
}, 1000);
