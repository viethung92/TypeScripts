"use strict";
var displayColor = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var theCityThatAlwaysSleeps = function () {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    console.log(getCity);
};
displayColor("Red");
displayColor("Red", "Blue");
theCityThatAlwaysSleeps();
//# sourceMappingURL=lession11.js.map