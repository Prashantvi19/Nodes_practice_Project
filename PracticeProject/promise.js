//Promise used
console.log(1);
let promiseData = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(45000);},2000);
    // resolve(45000);
});

console.log(2);
promiseData.then((value)=>{
    console.log(value);
})
console.log(3);