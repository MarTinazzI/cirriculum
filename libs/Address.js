"use strict";

function Address() {
    this.state = undefined;
    this.city = undefined;
    this.neighborhood = undefined;
    this.country = undefined
    return this;
}

// PUBLIC
Address.prototype.setCountry = function (country) {
    this.country = country;
    return this;
};

Address.prototype.setState = function (state) {
    this.state = state;
    return this;
};

Address.prototype.setCity = function (city) {
    this.city = city;
    return this;
};

Address.prototype.setNeighborhood = function (neighborhood) {
    this.neighborhood = neighborhood;
    return this;
};

// PRIVATE


// HELPER


module.exports = Address;