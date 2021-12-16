const box = document.querySelectorAll(' .box_2');

box.forEach(item => {
    console.log(item);
    item.addEventListener('click', () => {
        if(item.style.background == 'black'){
            item.style.background = 'red'
            item.style.borderRadius = '200px'
            item.style.transition = '2s'
        }else {
            item.style.background = 'black'
            item.style.borderRadius = ''
            item.style.transition = '2s'
        }
        
    })
})

// const img = document.querySelectorAll(' .img');

// img.forEach(item => {
//     item.addEventListener('click', () => {
//         if(item.addEventListener == 'url('img/25086_large')'){
//             item.style.background = 'red'
//         }
//     })
// })