import setupNavigation from './setupNavigation'

import setupCards from './setupCards'

setupNavigation()

setupCards()

const darkmode = document.querySelector('.darkmode')
const body = document.querySelector('body')
const t2 = document.querySelector('.t2')

darkmode.addEventListener('click', () => {
  body.classList.toggle('mode')
  t2.classList.toggle('t1')
})
