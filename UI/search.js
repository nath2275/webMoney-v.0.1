const searchInput = document.querySelector('.search_bar')

const arr = ['nutt','fffs','abcd','ddd','eee','a']
const oddArr = [1,3,5,7,9]

searchInput.addEventListener("input",(e)=>{
    // event.target คือ จะเป็นการอ้างค่าของปัจจุบันที่ได้กระทำต่ออิลิเมนต์นั้น ๆ
    // ไม่ใส่ .target ก็จะไม่เห็นข้อมูล
    const textValue = e.target.value
    //console.log(textValue)
    arr.forEach((ss)=>{
        if(textValue === ''){
            console.log(111);
        }else if(ss.includes(textValue)){
            console.log(ss);
        }else{
            console.log(ss.includes(textValue));
        }
    }) 
})



