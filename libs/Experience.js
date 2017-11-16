"use strict";

function Experience(company) {
    this.company = company;
    this.begin = undefined;
    this.conclusion = undefined;
    this.role = [];

    return this;
}

// PUBLIC
Experience.prototype.addRole = function (role) {
    this.role.push(role);
    return this;
};

Experience.prototype.setBegin = function (month, year) {
    this.begin = new Date(`${month}/01/${year}`);
    return this;
};

Experience.prototype.setConclusion = function (month, year) {
    this.conclusion = new Date(`${month}/01/${year}`);
    return this;
};

// PRIVATE


// HELPER


module.exports = Experience;