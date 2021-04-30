console.clear()
const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonProfile = document.querySelector('.button-profile')

const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')

const header1 = document.querySelector('.header1')
const header2 = document.querySelector('.header2')
const header3 = document.querySelector('.header3')
const header4 = document.querySelector('.header4')

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

buttonHome.addEventListener('click', () => {
  content1.classList.remove('hidden')
  content2.classList.add('hidden')
  content3.classList.add('hidden')
  content4.classList.add('hidden')
  buttonHome.classList.add('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
  header1.classList.remove('hidden')
  header2.classList.add('hidden')
  header3.classList.add('hidden')
  header4.classList.add('hidden')
})

buttonBookmarks.addEventListener('click', () => {
  content1.classList.add('hidden')
  content2.classList.remove('hidden')
  content3.classList.add('hidden')
  content4.classList.add('hidden')
  buttonHome.classList.remove('active')
  buttonBookmarks.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
  header1.classList.add('hidden')
  header2.classList.remove('hidden')
  header3.classList.add('hidden')
  header4.classList.add('hidden')
})

buttonCreate.addEventListener('click', () => {
  content1.classList.add('hidden')
  content2.classList.add('hidden')
  content3.classList.remove('hidden')
  content4.classList.add('hidden')
  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
  header1.classList.add('hidden')
  header2.classList.add('hidden')
  header3.classList.remove('hidden')
  header4.classList.add('hidden')
})

buttonProfile.addEventListener('click', () => {
  content1.classList.add('hidden')
  content2.classList.add('hidden')
  content3.classList.add('hidden')
  content4.classList.remove('hidden')
  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')
  header1.classList.add('hidden')
  header2.classList.add('hidden')
  header3.classList.add('hidden')
  header4.classList.remove('hidden')
})
