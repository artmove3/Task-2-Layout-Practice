import {guestCounter} from './scripts/guestCounter.js'
import './styles/styles.scss'
import {Calendar} from './scripts/Calendar'
import {optionSwitch} from './pages/roomList/roomList.js'

require('jquery')
require('webpack-jquery-ui')
require('moment')
require('./assets/extensions/jquery.comiseo.daterangepicker.js')
const landingPage = require('./pages/landing__page/landing__page.pug')
const roomList = require('./pages/roomList/roomlist.pug')

const page = document.querySelector('.page')

const pageList = [landingPage]
const pageParams = {}
const datepicker = new Calendar('#datepicker')

function pageChanger() {
    let currentPage = pageList[pageList.length - 1]
    
    pageParams.count = JSON.parse(localStorage.getItem('count'))
    pageParams.countArr = JSON.parse(localStorage.getItem('countArr'))
    pageParams.counterStr = JSON.parse(localStorage.getItem('counterStr'))
    pageParams.dateStr = JSON.parse(localStorage.getItem('dateStr'))

    page.innerHTML = currentPage(pageParams)
    if(currentPage != landingPage) {
        roomListListener()
    }
}

$(function(){
    pageChanger()

    guestCounter('.card__guests .input__container')

    $('#apply__presets').click(() => {
        pageList.push(roomList)
        pageChanger()
    })
    
    

    
    datepicker.init()
    datepicker.deploy()

    $('.card__date .input__container').click(() => $('#datepicker').daterangepicker('open'))

    




    
    
})

function roomListListener() {
    datepicker.init()
    datepicker.deploy()
    guestCounter('.roomList__options_guests .input__container', true)
     $('.roomList__options_dates .input__container').click(() => $('#datepicker').daterangepicker('open'))
     optionSwitch()
}

