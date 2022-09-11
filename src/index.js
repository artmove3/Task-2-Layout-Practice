import {guestCounter} from './scripts/guestCounter.js'
import './styles/styles.scss'
import {calendar} from './scripts/calendar'

require('jquery')
require('webpack-jquery-ui')
require('moment')
require('./assets/extensions/jquery.comiseo.daterangepicker.js')

$(function(){
    const datepicker = new calendar('#datepicker')
    datepicker.init()
    datepicker.deploy()

    $('.card__date .input__container').click(() => $('#datepicker').daterangepicker('open'))
    
    guestCounter('.card__guests .input__container') 
 })
