import {guestCounter} from './scripts/guestCounter.js'
import {Calendar} from './scripts/Calendar'
import {optionSwitch, createRoomList, createPageList} from './pages/room__list/roomList.js'
import {buttonLikeListener, chartJs} from './pages/room__details/room__details.js'

require('jquery')
require('webpack-jquery-ui')
require('moment')
require('./assets/extensions/jquery.comiseo.daterangepicker.js')
const websitePages = require('./pages/website_pages/website_pages.pug')
const UIKit = require('./pages/UI_kit/UI_kit.pug')
const landingPage = require('./pages/landing__page/landing__page.pug')
const roomList = require('./pages/room__list/room__list.pug')
const roomDetails = require('./pages/room__details/room__details.pug')
const registration = require('./pages/registration/registration.pug')
const sign_in = require('./pages/sign_in/sign_in.pug')

const colorsAndType = require('./pages/UI_kit/colors_&_type.pug')
const formElements = require('./pages/UI_kit/form_elements.pug')
const cards = require('./pages/UI_kit/cards.pug')
const headersAndFooters = require('./pages/UI_kit/headers_&_footers.pug')

let page

const pageList = []
const pageParams = {}
const datepicker = new Calendar('#datepicker')

function pageChanger() {
    if(!page) page = document.querySelector('.page')
    let currentPage = pageList[pageList.length - 1]
    // insert props in pug template from localStorage
    pageParams.count = JSON.parse(localStorage.getItem('count'))
    pageParams.countArr = JSON.parse(localStorage.getItem('countArr'))
    pageParams.counterStr = JSON.parse(localStorage.getItem('counterStr'))
    if(localStorage.getItem('dateStr')) pageParams.dateStr = JSON.parse(localStorage.getItem('dateStr'))
    pageParams.dateStrEntry = JSON.parse(localStorage.getItem('dateStrEntry'))
    pageParams.dateStrOut = JSON.parse(localStorage.getItem('dateStrOut'))
    if(localStorage.getItem('name') && localStorage.getItem('surname')) {
        pageParams.name = JSON.parse(localStorage.getItem('name'))
        pageParams.surname = JSON.parse(localStorage.getItem('surname'))
        changeHeader('.header__navbar')
    }
    

    page.innerHTML = currentPage(pageParams)
    if(currentPage === roomList) {
        roomListListener()
    }
    else if(currentPage === roomDetails) {
        roomDetailsListener()
    }
    else if(currentPage === registration) {
        registrationListener()
        
    }else if(currentPage === landingPage) {
        landingPageListener()
    }
}

$(function(){
    localStorage.clear()
    const body = document.querySelector('body')

    $('#websitePages').on('click', () => {
        
        body.innerHTML = websitePages()
        pageList.push(landingPage)
        pageChanger()

            // sign up page
        $('.header__navbar .button__register').on('click', () => {
            pageList.push(registration)
            pageChanger()
        })

            // sign in page
        $('.header__navbar .button__sign_in').on('click', () => {
            pageList.push(sign_in)
            pageChanger()
        })
    })

    $('#UIKit').on('click', () => {
        body.innerHTML = UIKit()
        let currenUIKitPage = 0
        const UIContainer = document.querySelector('.UI_kit_content')
        const UIKitList = [colorsAndType, formElements, cards, headersAndFooters]
        // set name and surname manualy to make header with names sample
        pageParams.name = 'Юлий'
        pageParams.surname = 'Цезарь'

        
        UIContainer.innerHTML = UIKitList[currenUIKitPage]()    
        $('.UI_kit_backward').on('click', () => {
            currenUIKitPage = (currenUIKitPage == 0 ? 3 : --currenUIKitPage)
            UIContainer.innerHTML = UIKitList[currenUIKitPage]()
            if(currenUIKitPage == 3) {
                changeHeader('.header_with_namespace .header__navbar')
                
            }
        })
        $('.UI_kit_forward').on('click', () => {
            currenUIKitPage = (currenUIKitPage == 3 ? 0 : ++currenUIKitPage)
            UIContainer.innerHTML = UIKitList[currenUIKitPage]()
            if(currenUIKitPage == 3) {
                changeHeader('.header_with_namespace .header__navbar')
                
            }
        })
        
    })



   
})
function landingPageListener() {
    guestCounter('.card__guests .input__container')

    $('#apply__presets').on('click', () => {
        let adultCount = $('.guest__counter .counter__controller #0').get(0).value
        if(adultCount == 0 || !localStorage) {
            alert('enter at least one adult')
            return
        }
        //move to page roomList
        pageList.push(roomList)
        pageChanger()
    })

    
    
    datepicker.init()
    datepicker.deploy()

    $('.card__date .input__container').on('click', () => $('#datepicker').daterangepicker('open'))
}
// function that works when page roomList is active
function roomListListener() {
    datepicker.init()
    datepicker.deploy()
    guestCounter('.room__list__options_comfort .input__container', 'furniture')
    guestCounter('.room__list__options_guests .input__container', 'babyCount')
    createRoomList(12)
    createPageList(3)
    
     $('.room__list__options_dates .input__container').on('click', () => $('#datepicker').daterangepicker('open'))
     optionSwitch()
    // move to page roomDetails
     $('*.room__number').on('click', () => {
        pageList.push(roomDetails)
        pageChanger()
    })
}

function roomDetailsListener() {
    datepicker.init()
    datepicker.deploy()
    guestCounter('.card__guests .input__container', 'roomDetails')

    $('.room__details_total_price .card__date .input__container').on('click', () => $('#datepicker').daterangepicker('open'))

    buttonLikeListener(`.comment_1 .button_like`)
    buttonLikeListener(`.comment_2 .button_like`)

    chartJs()
}

function registrationListener() {
    let checked = false
    const specOffersCheckbox = document.querySelector('.special_offers_checkbox')
    const specCheckboxDot = specOffersCheckbox.querySelector('.checkbox_dot')
    const inputName = document.getElementById('name')
    const inputSurname = document.getElementById('surname')

    $('.card__special_offers .special_offers_checkbox').on('click', () => {
        if(!checked) {
            specOffersCheckbox.style.justifyContent = 'flex-end'
            specOffersCheckbox.style.borderColor = 'rgba(188, 156, 255, 1)'
            specCheckboxDot.style.background = 'rgba(188, 156, 255, 1)'
            checked = true
            return
        }
        specOffersCheckbox.style.justifyContent = 'flex-start'
        specOffersCheckbox.style.borderColor = 'rgba(31, 32, 65, 0.25)'
        specCheckboxDot.style.background = 'rgba(31, 32, 65, 0.25)'
        checked = false
    })

    $('.card .button__sign_up').on('click', () => {
        if(inputName.value && inputSurname.value) {
            localStorage.setItem('name', JSON.stringify(inputName.value))
            localStorage.setItem('surname', JSON.stringify(inputSurname.value))
            pageList.push(pageList[0])
            pageChanger()
        }

    })
}

function changeHeader(selector) {
    const submitButtons = document.querySelector(`${selector} .submit-buttons`)
    const headerNamespace = require('./pages/header/header__namespace.pug')
    submitButtons.innerHTML = headerNamespace(pageParams)

}

