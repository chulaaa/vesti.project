// side bar
const toggle = document.querySelector('.sidebar-toggle')
const link = document.querySelector('.sidelink-bac')

toggle.addEventListener('click', function () {
    if(link.classList.contains('show-sidelink-bac')) {
        link.classList.remove('show-sidelink-bac')
    } else {
        link.classList.add('show-sidelink-bac')
    }
})

// footeer date
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()