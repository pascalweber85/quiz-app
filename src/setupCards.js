import getElement from './utils/getElement'

export default function setupCards() {
  const answer = getElement('.answer')
  const bookmark = getElement('.quiz-card__bookmark')
  const knopf2 = getElement('.knopf2')

  knopf2.addEventListener('click', hideandshowanswer)

  function hideandshowanswer() {
    toggleanswer()
  }

  function toggleanswer() {
    answer.classList.toggle('hidden')
  }

  bookmark.addEventListener('click', signbookmark)

  function signbookmark() {
    togglebookmark()
  }

  function togglebookmark() {
    bookmark.classList.toggle('quiz-card__bookmark--selected')
  }
}
