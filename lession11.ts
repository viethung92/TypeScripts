let displayColor = function(...colors:String[]) {
    for(let i in colors) {
        console.log(colors[i]);
    }
}

let theCityThatAlwaysSleeps = function() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    console.log(getCity);
}

displayColor("Red");
displayColor("Red","Blue");
theCityThatAlwaysSleeps();