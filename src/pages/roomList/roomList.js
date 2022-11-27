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
export function createPageList(pageNum) {
  // const pageNumArr = []
  const pageList = document.querySelector('.roomList__content_pagelist')
  for(let i = 1; i <= pageNum; i++) {
    const page = document.createElement('div')
    page.setAttribute('class', `pagelist pagelist_page${i}`)
    page.innerHTML = `
    <p>${i}</p>
    `
    page.addEventListener('click', () => {
      const pageArr = document.querySelectorAll('.roomList__content_pagelist .pagelist')
      pageArr.forEach(pageFromArr => {
        pageFromArr.style.color = 'rgba(31, 32, 65, 0.5)'
        pageFromArr.style.background = '#FFF'
        pageFromArr.style.fontWeight = '400'
      })
      page.style.background = `linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)`
      page.style.color = `#FFF`
      page.style.fontWeight = '700'
    })
    pageList.appendChild(page)

  }
}