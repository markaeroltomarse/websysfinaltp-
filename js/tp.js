

let btnrun = document.getElementById('btnrun')

btnrun.addEventListener('click', e => {
    let num = 0

    while(num < 5) {
        alert("Keep Going: " + num)
        num++
    }
})
