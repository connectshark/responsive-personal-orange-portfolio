const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const aside = document.querySelector('.aside')
const navItem = document.querySelectorAll('.nav-item')

const toggleMenu = () => {
  aside.classList.toggle('active')
}

const closeMenu = () => {
  aside.classList.remove('active')
}

navItem.forEach(item => item.addEventListener('click', closeMenu))
menu.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)