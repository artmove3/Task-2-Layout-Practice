import {guestCounter} from './scripts/guestCounter.js'
import './styles/styles.scss'
import {calendar} from './scripts/calendar'
import './pages/roomList/roomList.js'

require('jquery')
require('webpack-jquery-ui')
require('moment')
require('./assets/extensions/jquery.comiseo.daterangepicker.js')
const landingPage = require('./pages/landing__page/landing__page.pug')
const roomList = require('./pages/roomList/roomlist.pug')

const page = document.querySelector('.page')

const pageList = [landingPage]
const guestCount = {}

function pageChanger() {
    let currentPage = pageList[pageList.length - 1]

    guestCount.count = JSON.parse(localStorage.getItem('count'))
    console.log(guestCount)
    page.innerHTML = currentPage(guestCount)
}

$(function(){
    pageChanger()

    guestCounter('.card__guests .input__container')

    $('#apply__presets').click(() => {
        pageList.push(roomList)
        pageChanger()
    })
    
    

    const datepicker = new calendar('#datepicker')
    datepicker.init()
    datepicker.deploy()

    $('.card__date .input__container').click(() => $('#datepicker').daterangepicker('open'))
    




    
    
})
