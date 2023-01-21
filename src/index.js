import {guestCounter} from './scripts/guestCounter.js'
import './styles/styles.scss'
import {Calendar} from './scripts/Calendar'
import {optionSwitch, createRoomList, createPageList} from './pages/roomList/roomList.js'

require('jquery')
require('webpack-jquery-ui')
require('moment')
require('./assets/extensions/jquery.comiseo.daterangepicker.js')
const landingPage = require('./pages/landing__page/landing__page.pug')
const roomList = require('./pages/roomList/roomlist.pug')
const roomDetails = require('./pages/room__details/room__details.pug')

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
}

$(function(){
    pageChanger()

    guestCounter('.card__guests .input__container')

    $('#apply__presets').on('click', () => {
        let adultCount = $('.guest__counter .counter__controller #0').get(0).value
        if(adultCount == 0 || !localStorage) {
            alert('please, enter at least one adult')
            return
        }
        //move to page roomList
        pageList.push(roomList)
        pageChanger()
    })

    
    
    datepicker.init()
    datepicker.deploy()

    $('.card__date .input__container').on('click', () => $('#datepicker').daterangepicker('open'))
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
}

