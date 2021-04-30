import getElement from './utils/getElement'

export default function setupNavigation() {
  const header1 = getElement('.header1')
  const header2 = getElement('.header2')
  const header3 = getElement('.header3')
  const header4 = getElement('.header4')

  const content1 = getElement('.content1')
  const content2 = getElement('.content2')
  const content3 = getElement('.content3')
  const content4 = getElement('.content4')

  const buttonHome = getElement('.button-home')
  const buttonBookmarks = getElement('.button-bookmarks')
  const buttonCreate = getElement('.button-create')
  const buttonProfile = getElement('.button-profile')

  buttonHome.addEventListener('click', navigateToHome)
  buttonBookmarks.addEventListener('click', navigateToBookmarks)
  buttonCreate.addEventListener('click', navigateToCreate)
  buttonProfile.addEventListener('click', navigateToProfile)

  function navigateToHome() {
    changePage(content1)
    selectButton(buttonHome)
    changeHeader(header1)
  }

  function navigateToBookmarks() {
    changePage(content2)
    selectButton(buttonBookmarks)
    changeHeader(header2)
  }

  function navigateToCreate() {
    changePage(content3)
    selectButton(buttonCreate)
    changeHeader(header3)
  }

  function navigateToProfile() {
    changePage(content4)
    selectButton(buttonProfile)
    changeHeader(header4)
  }

  function changePage(page) {
    hideAllPages()
    page.classList.remove('hidden')
  }

  function selectButton(button) {
    deactivateButtons()
    button.classList.add('active')
  }

  function changeHeader(header) {
    hideAllHeader()
    header.classList.remove('hidden')
  }

  function hideAllHeader() {
    header1.classList.add('hidden')
    header2.classList.add('hidden')
    header3.classList.add('hidden')
    header4.classList.add('hidden')
  }

  function hideAllPages() {
    content1.classList.add('hidden')
    content2.classList.add('hidden')
    content3.classList.add('hidden')
    content4.classList.add('hidden')
  }

  function deactivateButtons() {
    buttonHome.classList.remove('active')
    buttonBookmarks.classList.remove('active')
    buttonCreate.classList.remove('active')
    buttonProfile.classList.remove('active')
  }
}
