"use strict";

function Person(fullName) {
    this.fullName = fullName;
    this.birthday = undefined;
    this.age = undefined;
    this.nationality = undefined;
    this.phoneList = [];
    this.mailList = [];

    this.address = [];
    this.education = [];
    this.proficiency = [];
    this.experience = [];

    return this;
}

// PUBLIC
Person.prototype.setBirthday = function (day, month, year) {
    this.birthday = new Date(`${month}/${day}/${year}`);
    this.age = (new Date()).getUTCFullYear() - this.birthday.getUTCFullYear();
    return this;
};

Person.prototype.setNationality = function (nationality) {
    this.nationality = nationality;
    return this;
};

Person.prototype.addMail = function (mail) {
    this.mailList.push(mail);
    return this;
};

Person.prototype.addPhone = function (prefix, number) {
    this.phoneList.push({
        prefix: prefix,
        number: number
    });
    return this;
};

Person.prototype.addAddress = function (address) {
    this.address.push(address);
    return this;
};

Person.prototype.addEducation = function (education) {
    this.education.push(education);
    return this;
};

Person.prototype.addExperience = function (experience) {
    this.experience.push(experience);
    return this;
};

Person.prototype.addProficiency = function (proficiency) {
    this.proficiency.push(proficiency);
    return this;
};

// PRIVATE


// HELPER

module.exports = Person;