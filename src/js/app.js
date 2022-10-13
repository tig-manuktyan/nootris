import * as flsFunctions from './modules/functions.js'

flsFunctions.testWebP()

const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', function () {
    const items = document.querySelectorAll('.item')
    items.forEach(item => item.classList.toggle('active'))
})
