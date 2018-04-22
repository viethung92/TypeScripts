function greetPersion(name : any) {
    let greet;
    if(name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there"
    }
    console.log(greet);

}
greetPersion("Chandler");

var a = 10;
let b = 5;

if(a == 10) {
    var a = 5;
    let b = 10;
}

console.log(a);
console.log(b);