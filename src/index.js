import {guestCounter} from './scripts/guestCounter.js'
import './styles/styles.scss'
import {Calendar} from './scripts/Calendar'
import {optionSwitch, createRoomList, createPageList} from './pages/roomList/roomList.js'
import {buttonLikeListener, chartJs} from './pages/room__details/room__details.js'

require('jquery')
require('webpack-jquery-ui')
require('moment')
require('./assets/extensions/jquery.comiseo.daterangepicker.js')
const landingPage = require('./pages/landing__page/landing__page.pug')
const roomList = require('./pages/roomList/roomlist.pug')
const roomDetails = require('./pages/room__details/room__details.pug')
const registration = require('./pages/registration/registration.pug')

const page = document.querySelector('.page')

const pageList = [landingPage]
const pageParams = {}
const datepicker = new Calendar('#datepicker')

function pageChanger() {
    let currentPage = pageList[pageList.length - 1]
    // insert props in pug template from localStorage
    pageParams.count = JSON.parse(localStorage.getItem('count'))
    pageParams.countArr = JSON.parse(localStorage.getItem('countArr'))
    pageParams.counterStr = JSON.parse(localStorage.getItem('counterStr'))
    pageParams.dateStr = JSON.parse(localStorage.getItem('dateStr'))
    pageParams.dateStrEntry = JSON.parse(localStorage.getItem('dateStrEntry'))
    pageParams.dateStrOut = JSON.parse(localStorage.getItem('dateStrOut'))

    page.innerHTML = currentPage(pageParams)
    if(currentPage === roomList) {
        roomListListener()
    }
    else if(currentPage === roomDetails) {
        roomDetailsListener()
    }
    else if(currentPage === registration) {
        registrationListener()
    }
}

$(function(){
    pageChanger()

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

    $('.header__navbar .btn__register').on('click', () => {
        pageList.push(registration)
        pageChanger()
    })
})
// function that works when page roomList is active
function roomListListener() {
    datepicker.init()
    datepicker.deploy()
    guestCounter('.roomList__options_comfort .input__container', 'furniture')
    guestCounter('.roomList__options_guests .input__container', 'babyCount')
    createRoomList(12)
    createPageList(3)
    
     $('.roomList__options_dates .input__container').on('click', () => $('#datepicker').daterangepicker('open'))
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
}

