// วัน เดือน ปี
//ปัจจุบัน
d = [10,5,2566]
//วันที่จ่าย
db = [11,5,2565]

// รับเฉพาะ ค่าที่มากกว่า
y = 0
m = 0
//y > y ++
if(d[2] > db[2] && d[1] > db[1] && d[0] > db[0]){
    m = d[1] - db[1]
    y = d[2] - db[2]
}
// --,==
else if(d[2] > db[2] && d[1] > db[1]){
    a = db[1] + 1
    y = d[2] - db[2]
    m = d[1] - a
}
// > < >
else if(d[2] > db[2] && d[1] < db[1] && d[0] > db[0]){
    a = db[2] + 1
    y = d[2] - a
    m = 12 - db[1] + d[1]
}
//> < <=
else if(d[2] > db[2] && d[1] < db[1] && d[0] <= db[0]){
    a = db[2] + 1
    y = d[2] - a
    m = 12 - db[1] + d[1] - 1
}
//y = y ++
else if(d[2] == db[2] && d[0] > db[0] && d[1] > db[1]){
    m = d[1] - db[1]
}
// > = >
else if(d[2] > db[2] && d[1] == db[1] && d[0] > db[0]){
    y = d[2] - db[2]
}
// > = <=
else if(d[2] > db[2] && d[1] == db[1] && d[0] <= db[0]){
    a = db[2] + 1
    y = d[2] - a
    m = 11
}
else{
    console.log('ไม่ตรง')
}

console.log(m,'month')
console.log(y,'year')
//ไม่มี y = y --,==