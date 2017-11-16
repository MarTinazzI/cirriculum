"use strict";

// CONSTANTS
const SKILL_LIST = [
    "Superficial",
    "Low",
    "Medium",
    "High",
    "Excellent",
];

function Proficiency(name) {
    this.name = name;
    this.skillLevel = 0;

    return this;
}

// PUBLIC
Proficiency.prototype.setSkillLevel = function (level = 0) {
    if (level > 0 && level <= SKILL_LIST.length) {
        this.skillLevel = level-1;
    } else {
        console.log(`${level} is incompatible, please use number 1 to ${SKILL_LIST.length}`);
    }
    return this;
};

Proficiency.prototype.getSkillLevel = function () {
    return SKILL_LIST[this.skillLevel];
};

// PRIVATE


// HELPER


module.exports = Proficiency;