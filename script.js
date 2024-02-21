
let d = document.querySelector('.container')

// ? =========================== Kursor (pointer events) xodisalari ==========================
// click, pointerdown, pointerup, pointermove, pointerenter, pointerleave

// d.addEventListener('pointerdown', (e)=>{
//     console.log(e);
// })



// ? ======== Vazifa ===========

let a = document.querySelector('.content')

a.addEventListener('pointerdown', (ev)=>{
    console.log(ev);
    if (type = 'pointerdown') {
        a.classList.add('.pointer')
    }else{
        a.classList.remove('.pointer')
    }
})