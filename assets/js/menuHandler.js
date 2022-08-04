const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const aside = document.querySelector('.aside')


const toggleMenu = () => {
  aside.classList.toggle('active')
}















menu.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)


