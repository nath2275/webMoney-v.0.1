const date = '2022-12-01'
const simpleDate = '2022-12-25'//[2022,12,25] //20
const simple = simpleDate.split('-').map(item => {
    return parseInt(item)
})
const year = date.split('-').map(item => {
    return parseInt(item)
})

let [yy,mm,dd] = year;
let nextMonth = mm;
let nextYear = yy;

if(nextMonth + 1 > 12 ){
    nextMonth = 1
    nextYear += 1
}else{
    nextMonth += 1;
}
let future = [nextYear,nextMonth,dd]
let dateNumber;

if(yy % 4 === 0){
    let y = ['',31,29,31,30,31,30,31,31,30,31,30,31]
    dateNumber = y[mm] - simple[2] + dd
}else{
    let y = ['',31,28,31,30,31,30,31,31,30,31,30,31]
    dateNumber = y[mm] - simple[2] + dd
}
// console.log(`กู้วันที่ ${year}`);
// console.log(`วันนี้วันที่ ${simple}`);
// console.log(`เหลืออีก ${dateNumber} วัน`);
// console.log(`จ่ายดอกวันที่ ${future}`);

let Str_year = year.map((item)=>{
    return item.toString()
})
let Str_simple = simple.map((item)=>{
    return item.toString()
})
let Str_future = future.map((item)=>{
    return item.toString()
})

//year
if(Str_year[1].length === 1){Str_year[1] = '0' + Str_year[1]}
if(Str_year[2].length === 1){Str_year[2] = '0' + Str_year[2]}

//simple
if(Str_simple[1].length === 1){Str_simple[1] = '0' + Str_simple[1]}
if(Str_simple[2].length === 1){Str_simple[2] = '0' + Str_simple[2]}

//future
if(Str_future[1].length === 1){Str_future[1] = '0' + Str_future[1]}
if(Str_future[2].length === 1){Str_future[2] = '0' + Str_future[2]}

console.log(`กู้วันที่ ${Str_year}`); // กู้วันที่ 2022,12,1
console.log(`วันนี้วันที่ ${Str_simple}`); // วันนี้วันที่ 2022,12,25
console.log(`จ่ายดอกวันที่ ${Str_future}`); // จ่ายดอกวันที่ 2023,1,1
console.log(`เหลืออีก ${dateNumber} วัน`); // เหลืออีก 7 วัน