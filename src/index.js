import setupNavigation from './setupNavigation'

setupNavigation()

const knopf2 = document.querySelector('.knopf2')
const answer = document.querySelector('.answer')

knopf2.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

const bookmark = document.querySelector('.quiz-card__bookmark')

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

const darkmode = document.querySelector('.darkmode')
const body = document.querySelector('body')
const t2 = document.querySelector('.t2')

darkmode.addEventListener('click', () => {
  body.classList.toggle('mode')
  t2.classList.toggle('t1')
})
