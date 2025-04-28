function a() {
    return 1;
}

function b(){
    return 2 * a();
}

let result = b();
console.log(result); // 2