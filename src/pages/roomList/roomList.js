import '../../styles/styles.scss'
import { roomObjArray } from './roomObjArray.js'


export function optionSwitch() {
    const buttonSwitch = document.querySelector('.optional-comfort_dropdown .input__container')
    const buttonSwitchSVG = document.querySelector('.optional-comfort_dropdown .input__container svg')
    const list = document.querySelector('.roomList__options_optional-comfort ul')

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

export function createRoomList(roomQuantity) {
  let roomObjPos = 0
    for(let i = 1; i <= roomQuantity; i++){
    if(roomObjPos > 11) roomObjPos = 0
    const roomListContainer = document.querySelector('.roomList__content_list')
    const room = document.createElement(`div`)
    room.setAttribute('class', `roomList__content_room room${i}`)
    room.innerHTML = `<div class='room__background'>
                        <div class='room__arrows'>
                          <div class='arrow_forward'></div>
                          <div class='arrow_backward'></div>
                        </div>
                        <div class='room__pictures_list'>
                          <div class='picture_1'></div>
                          <div class='picture_2'></div>
                          <div class='picture_3'></div>
                          <div class='picture_4'></div>
                        </div>
                      </div>
                      <div class='room__number_&_price'>
                        <div class='room__number'>
                          <h1>N${roomObjArray[roomObjPos].roomNumber}</h1>
                          <h2>ЛЮКС</h2>
                        </div>
                        <div class='room__price'>
                          <h3>${roomObjArray[roomObjPos].pricePerDay}Р</h3>
                          <p>в сутки</p>
                        </div>
                      </div>
                      <div class='room__rating_&_comments'>
                        <div class='room__rating'></div>
                        <div class='room__comments'>
                          <h3>${roomObjArray[roomObjPos].comments}</h3>
                          <p>Отзывов</p>
                        </div>
                      </div>
                      `
    roomListContainer.appendChild(room)
    const luxWord = document.querySelector(`.room${i} .room__number h2`)
    if(!roomObjArray[roomObjPos].isLux) luxWord.style.display = 'none'
    const roomBackground = document.querySelector('.room__background')
    roomBackground.style.background = `url(${roomObjArray[roomObjPos].background})`
    roomObjPos++
    }
}
//array with all pages
const pageArr = []
export function createPageList(pageNum) {
  const pageList = document.querySelector('.roomList__content_pagelist')
  const beforePage = document.createElement('div')
  beforePage.setAttribute('class', 'pagelist pagelist_before_page')
  beforePage.innerHTML = `
  <p>Пред</p>
  `
  pageList.appendChild(beforePage)
  
  
  for(let i = 1; i <= pageNum; i++) {
    const page = document.createElement('div')
    page.setAttribute('class', `pagelist pagelist_page${i}`)
    page.innerHTML = `
    <p>${i}</p>
    `
    pageArr.push(page)

    page.addEventListener('click', () => {
      //get number of clicked page
      const clickedPage = +page.getAttribute('class').slice(-1)
      paintPage(clickedPage - 1)
      })
    pageList.appendChild(page)

  }
  const nextPage = document.createElement('div')
  nextPage.setAttribute('class', 'pagelist pagelist_next_page')
  nextPage.innerHTML = `
  <img src='forward-white.svg' alt='След'/>
  `
  pageList.appendChild(nextPage)

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
    beforePage.style.display = num == 0 ? 'none' : 'block'
    // set visibility for nextPage button if pageNum has max value
    nextPage.style.display = num == (pageNum - 1) ? 'none' : 'block'
    // add listeners to slide buttons 
    beforePage.addEventListener('click', () => {
      paintPage(num == 0 ? num : num - 1)
    }, { once: true })
    nextPage.addEventListener('click', () => {
      paintPage(num == (pageNum - 1) ? num : num + 1)
    }, { once: true })

  }

  paintPage()
}
