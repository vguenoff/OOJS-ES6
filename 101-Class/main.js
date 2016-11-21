class SimpleDate {
    constructor(year, month, day) {
        if(((typeof year) === 'number') && (year > 0) &&
           ((typeof month) === 'number') && (month > 0) && (month <= 12) &&
           ((typeof day )=== 'number') && (day > 0) && (day <= 31)) {
            this._year = year;
            this._month = month;
            this._day = day;
        }
    }
    addDays(nDays) {
        this._day += nDays;
    }
    getDate() {
        return `${this._year} | ${this._month} | ${this._day}`
    }
}

let today = new SimpleDate(2022, 11, 20);
console.log(
    today.getDate()
);

today.addDays(7);

console.log(
    today.getDate()
);
