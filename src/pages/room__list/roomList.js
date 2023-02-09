import '../../styles/styles.scss'
import { roomObjArray } from './roomObjArray.js'
import forwardWhite from '../../assets/arrows/forward-white.svg'
import star from '../../assets/stars/star.svg'
import starFilled from '../../assets/stars/star_filled.svg'


export function optionSwitch() {
    const buttonSwitch = document.querySelector('.optional-comfort_dropdown .input__container')
    const buttonSwitchSVG = document.querySelector('.optional-comfort_dropdown .input__container svg')
    const list = document.querySelector('.room__list__options_optional-comfort ul')

    buttonSwitch.addEventListener('click' , () => {

    if(buttonSwitchSVG.style.transform == 'rotate(0.5turn)' && list.style.display == 'block') {
        buttonSwitchSVG.style.transform = 'none'
        list.style.display = 'none'
        return
    }
    buttonSwitchSVG.style.transform = 'rotate(0.5turn)'
    list.style.display = 'block'

    })
    
}

export function createRoomList(selector, roomQuantity) {

  let roomObjPos = 0

  for(let i = 1; i <= roomQuantity; i++) {
    // make every room count by order
    roomObjArray[roomObjPos].currentRoom = roomObjPos
    const roomInstance = require('./listOfRoomCreate.pug')
    const roomListContainer = document.querySelector(selector)
    const currentRoom = document.createElement('div')
    currentRoom.innerHTML += roomInstance(roomObjArray[roomObjPos])
    roomListContainer.appendChild(currentRoom)
    printStar(roomObjArray[roomObjPos].rating)
    selectBackground(roomObjPos)

    roomObjPos++
  }
        function printStar(rating) {
          const roomRatingBlock = document.getElementById(`room__rating${roomObjPos}`)
          roomRatingBlock.innerHTML = `<img src=${starFilled} alt='starFilled'/>`
          for(let j = 2; j <= 5; j++) {
              if(j <= rating) {
                roomRatingBlock.innerHTML += `<img src=${starFilled} alt='starFilled'/>`
                continue
              }
              roomRatingBlock.innerHTML += `<img src=${star} alt='star'/>`
          }
        }

        function selectBackground(currentRoom, bgNum = 0) {
          
          let roomBackground = document.getElementById(`room__background${currentRoom}`)
          let arrowBackward = document.getElementById(`arrow_backward${currentRoom}`)
          let arrowForward = document.getElementById(`arrow_forward${currentRoom}`)
          let backgroundDots = document.getElementById(`room__background_dots${currentRoom}`)
          
          let currentBackgroundDotsArr = backgroundDots.querySelectorAll('.dot')
          currentBackgroundDotsArr[bgNum].setAttribute('class', 'dot_painted')
  
          roomBackground.style.background = `url(${roomObjArray[currentRoom].background[bgNum]})`

          arrowBackward.addEventListener('click', () => {
            bgNum--
            if(bgNum < 0) bgNum = 3
            currentBackgroundDotsArr.forEach(dot => {
              dot.removeAttribute('class')
            })
            currentBackgroundDotsArr[bgNum].setAttribute('class', 'dot_painted')
            roomBackground.style.background = `url(${roomObjArray[currentRoom].background[bgNum]})`
      
          })
          arrowForward.addEventListener('click', () => {
            bgNum++
            if(bgNum > 3) bgNum = 0
            currentBackgroundDotsArr.forEach(dot => {
              dot.removeAttribute('class')
            })
            currentBackgroundDotsArr[bgNum].setAttribute('class', 'dot_painted')
            roomBackground.style.background = `url(${roomObjArray[currentRoom].background[bgNum]})`

          })
          
        }

}


//array with all pages
const pageArr = []
export function createPageList(selector, pageNum) {
  const pageList = document.querySelector(selector)
  const pageListBlock = document.createElement('div')
  pageListBlock.setAttribute('class', 'pagelist_block')
  const beforePage = document.createElement('div')
  beforePage.setAttribute('class', 'pagelist pagelist_before_page')
  beforePage.innerHTML = `<img src=${forwardWhite} alt='Пред'/>`
  pageListBlock.appendChild(beforePage)
  
  
  for(let i = 1; i <= 3; i++) {
    const page = document.createElement('div')
    page.setAttribute('class', `pagelist pagelist_page${i}`)
    page.innerHTML = `<p>${i}</p>`
    pageArr.push(page)

    page.addEventListener('click', () => {
      //get number of clicked page
      const clickedPage = +page.getAttribute('class').slice(-1)
      paintPage(clickedPage - 1)
      })
    pageListBlock.appendChild(page)

  }
  const pagePlaceholder = document.createElement('div')
  pagePlaceholder.setAttribute('class', 'pagelist pagelist_placeholder')
  pagePlaceholder.innerHTML = `<p>...</p>`
  pageListBlock.appendChild(pagePlaceholder)

  const lastPage = document.createElement('div')
  lastPage.setAttribute('class', 'pagelist pagelist_placeholder')
  lastPage.innerHTML = `<p>${pageNum}</p>`
  pageListBlock.appendChild(lastPage)

  const nextPage = document.createElement('div')
  nextPage.setAttribute('class', 'pagelist pagelist_next_page')
  nextPage.innerHTML = `<img src=${forwardWhite} alt='След'/>`
  pageListBlock.appendChild(nextPage)
  pageList.appendChild(pageListBlock)
  const pageListDescription = document.createElement('div')
  pageListDescription.setAttribute('class', 'pagelist_description')
  // adding description to pagelist
  const pageDescription = document.createElement('p')
  pageDescription.innerHTML = `1 - 12 из 100+ вариантов аренды`
  pageListDescription.appendChild(pageDescription)
  pageList.appendChild(pageListDescription)


  function paintPage(num = 0) {
    pageArr.forEach(pageFromArr => {
      pageFromArr.style.color = 'rgba(31, 32, 65, 0.5)'
      pageFromArr.style.background = '#FFF'
      pageFromArr.style.fontWeight = '400'
    })
    const currentPage = pageArr[num]
    currentPage.style.background = `linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)`
    currentPage.style.color = `#FFF`
    currentPage.style.fontWeight = '700'
    // set visibility for beforePage button if pageNum has min value
    beforePage.style.visibility = num == 0 ? 'hidden' : 'visible'
    // set visibility for nextPage button if pageNum has max value
    nextPage.style.visibility = num == (pageNum - 1) ? 'hidden' : 'visible'
    // add listeners to slide buttons 
    beforePage.addEventListener('click', () => {
      paintPage(num == 0 ? num : num - 1)
    }, { once: true })
    nextPage.addEventListener('click', () => {
      paintPage(num == 2 ? num : num + 1)
    }, { once: true })

  }

  paintPage()
}

