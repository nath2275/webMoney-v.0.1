const searchInput = document.querySelector('.search_bar')
const names = document.querySelectorAll('.name')
const blog = document.querySelectorAll('.blog')

searchInput.addEventListener("input",(e)=>{

    const textValue = e.target.value
    names.forEach((n)=>{
        if(textValue === ''){
            n.innerHTML = 'none'
        }else if(ss.includes(textValue)){
            n.innerHTML = 'true'
        }else{
            n.innerHTML = 'false'
        }
    }) 
})