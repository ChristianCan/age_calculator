export function getAge(YYYY, MM, DD) {
    var today = new Date();
    var birthDay = new Date(YYYY, MM , DD);
    var age = today.getFullYear() - birthDay.getFullYear();
    var month = today.getMonth() - birthDay.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

