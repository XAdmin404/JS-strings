function checkString() {
    let input = document.querySelector("#text-input").value;

    let toLower = input.toLowerCase();
    let toUpper = input.toUpperCase();
    let length = input.length;
    let last = input.at(-1);
    let first = input[0];
    let cap1 = input[0].toUpperCase();
    let cap2 = input.substring(1).toLowerCase();
    let capitalize = cap1 + cap2;

    document.querySelector("#to-upper").innerHTML = toUpper;
    document.querySelector("#to-lower").innerHTML = toLower;
    document.querySelector("#check-length").innerHTML = length;
    document.querySelector("#check-last").innerHTML = last;
    document.querySelector("#check-first").innerHTML = first;
    document.querySelector("#to-capitalize").innerHTML = capitalize;
}