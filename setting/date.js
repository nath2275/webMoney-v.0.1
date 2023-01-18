// const date = '2022-12-01' //วันที่กู้
// const simpleDate = '2022-12-25' // วันนี้

//'2023-01-22'
function Today(){
    let d = new Date(); 
    const today = (d.getFullYear() + '-' + d.getMonth()+1) + '-' + d.getDate()
    return today
}

function nextDay(date){}

function ShoeDate(date,simpleDate){
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
    //-5 -15 -1
    console.log(simple[1]);
    console.log(nextMonth);
    console.log(simple[2]);
    console.log(dd,'\n');
    
    if(nextMonth === simple[1] && dd > simple[2]){
        let y = ['',31,29,31,30,31,30,31,31,30,31,30,31]
        dateNumber = dd - simple[2]
        console.log(dateNumber);
    }
    else if(nextMonth === simple[1]){
        let y = ['',31,29,31,30,31,30,31,31,30,31,30,31]
        dateNumber = simple[2] - dd 
        console.log(dateNumber);
    }
    else if(yy % 4 === 0){
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
    
    // console.log(`กู้วันที่ ${Str_year.join('-')}`); // กู้วันที่ 2022,12,1
    // console.log(`วันนี้วันที่ ${Str_simple.join('-')}`); // วันนี้วันที่ 2022,12,25
    // console.log(`จ่ายดอกวันที่ ${Str_future.join('-')}`); // จ่ายดอกวันที่ 2023,1,1
    // console.log(`เหลืออีก ${dateNumber} วัน`); // เหลืออีก 7 วัน

    return [Str_year.join('-'),Str_simple.join('-'),Str_future.join('-'),dateNumber]
}
//[ '2022-12-01', '2022-12-25', '2023-01-01', 7 ]

module.exports.Today = Today
module.exports.ShoeDate = ShoeDate