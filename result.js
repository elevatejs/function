function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let passSubject = 0;
    let failSubject = 0;

    for (let mark of marks) {
        if (typeof mark !== 'number') {
            return "Invalid";
        }
        else if (mark >= 50) {
            passSubject++;
        }
        else {
            failSubject++;
        }
    }
    return passSubject > failSubject;
}
const array = [60, 70, 80, 40, 30];
const result = willSuccess(array);
console.log(result);
