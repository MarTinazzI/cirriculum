"use strict";

function Education(institution) {
    this.institution = institution;
    this.course = undefined;
    this.conclusion = undefined;
    this.duration = undefined;

    return this;
}

// PUBLIC
Education.prototype.setCourse = function (course) {
    this.course = course;
    return this;
};

Education.prototype.setDuration = function (duration, type = 'M') {
    this.duration = {
        time: duration,
        type: type
    };
    return this;
};

Education.prototype.setConclusion = function (month, year) {
    this.conclusion = new Date(`${month}/01/${year}`);
    return this;
};

// PRIVATE


// HELPER
function durationToString(duration) {
    if(!duration) return undefined;
    return `${duration.time}${duration.type}`
}


module.exports = Education;