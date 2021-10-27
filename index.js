const scroller = document.getElementById('scroller')
const header = document.getElementById('header')

let headerHeight = header.clientHeight

scroller.addEventListener('click',()=>{
    
    window.scrollTo(0,headerHeight)
    
})
